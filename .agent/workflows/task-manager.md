---
description: タスク管理アプリへの自動連携ルール（AI自律稼働用ディレクティブ）
---

# SYSTEM DIRECTIVE: TASK MANAGEMENT

このドキュメントは、**AIエージェント（あなた自身）**がプロジェクトのタスク管理を**自律的かつ自動的**に行うための絶対的なルール（プロンプト拡張）です。ユーザー（人間）が参照するためのものではありません。

あなたは作業フェーズの各段階において、以下のルールに従い、ユーザーに許可を求めることなく自律的にタスク管理API（ `.env.local` の `TASK_MANAGER_API_URL` で指定されたURL、デフォルトは `http://localhost:3050` ）と連携してください。

---

## 1. 必須要件 (PREREQUISITES)
作業を行う際は、必ず対象プロジェクトのルートディレクトリにある `.env.local` を読み取り、以下の変数を取得してメモリに保持してください。
- `TASK_MANAGER_PROJECT_ID`
- `TASK_MANAGER_API_URL` (未設定の場合は `http://localhost:3050` を使用)
以降のすべてのタスク操作APIリクエストには、この `projectId` を付与し、`TASK_MANAGER_API_URL` をベースURLとして使用してください。

---

## 2. 自律アクションルール (AUTONOMOUS ACTIONS)

### A. セッション開始時・タスク完了時（次やることの確認）
作業の区切りがついた時や、進行に迷った時は、現在アクティブなタスクを確認してください。
- **Action**: `GET ${TASK_MANAGER_API_URL}/api/tasks?projectId=${TASK_MANAGER_PROJECT_ID}`
- **Behavior**: 返却されたタスクリストから `status` が `Todo` または `InProgress` のものを特定し、次に取り組むべきタスクを自ら決定（またはユーザーに提案）してください。

### B. タスク着手時（Status: InProgress への自動変更）
特定の機能実装・バグ修正などの作業を開始する際は、**必ず**そのタスクのステータスを進行中に変更するAPIを叩いてから実際の作業（コード修正等）に入ってください。
- **Action**: `PATCH ${TASK_MANAGER_API_URL}/api/tasks/${taskId}`
- **Body**: `{"status": "InProgress"}`

### C. タスク完了時（Status: Done への自動変更）
該当タスクの目的が達成された（実装・テストが完了した）と判断した場合、ユーザーへ報告するのと**同時に**タスクを完了状態に更新してください。
- **Action**: `PATCH ${TASK_MANAGER_API_URL}/api/tasks/${taskId}`
- **Body**: `{"status": "Done"}`

### D. 新たな課題・バグの発見時（タスクの自動追加）
作業中、元々のタスク範囲外の「新たな課題」「未考慮のバグ」「リファクタリングすべき箇所」などを発見した場合、**ユーザーの指示を待たず**にそれらを自律的に新しいタスクとして登録してください。
- **Body**: `{"projectId": "${TASK_MANAGER_PROJECT_ID}", "title": "課題タイトル", "description": "詳細な内容、発生条件、ファイルパスなど", "status": "Todo"}`
- **Note**: `taskNumber`（連番）はバックエンドで自動的に付与されます。`Body` に含める必要はありません。また、`title` の冒頭に "1." や "[AI検知] " などの接頭辞をつける必要もありません。


### E. タスクの切り分け方・粒度 (TASK BREAKDOWN & GRANULARITY)
新たにタスクを自律的に追加・登録する際は、以下の粒度と記述のトーンを遵守してください。
- **処理の流れを想像できる程度に手順を分割して登録する**（大きすぎる1つのタスクではなく、実装ステップが明確になるように分割する）
- **ユーザーは中級プログラマーなので、専門用語は少なめ**にし、直感的にわかりやすい言葉で記述する

---

## 3. その他のAPIリファレンス
必要に応じて以下のAPIも自律的に利用してください。
- `GET ${TASK_MANAGER_API_URL}/api/projects`: プロジェクト一覧取得
- `PATCH ${TASK_MANAGER_API_URL}/api/projects/${projectId}`: プロジェクト名の変更や、UI上のショートカットボタン（`commands`配列）の自動更新
- `DELETE ${TASK_MANAGER_API_URL}/api/tasks/${taskId}`: 誤って重複作成してしまった際などのタスク削除
- `POST ${TASK_MANAGER_API_URL}/api/local/run`: `{ "action": "openFolder", "projectId": "..." }` を送信して対象プロジェクトをVSCode等で開くなど