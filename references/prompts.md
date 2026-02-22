# PROMPT STRATEGY: REFERENCE CHAT

リファレンス風の「プレミアム」かつ「温かみのある」ビジュアルを生成するための共通プロンプト戦略です。

## 共通の品質キーワード
`high-end photography, cinematic lighting, shallow depth of field, 8k resolution, professional color grading, warm and inviting atmosphere, authentic textures`

---

## 1. 店主のポートレート (Person)
キャラクター性が際立ち、信頼感と親しみを感じさせるポートレート。

- **Prompt Template**:
  `A professional portrait of a [Job Title: e.g., Japanese sushi chef], [Age: e.g., 50s], with a [Expression: e.g., gentle smile and confident eyes]. Wearing [Attire: e.g., traditional white chef uniform]. Background is a [Location: e.g., blurred authentic restaurant interior]. Natural sunlight, cinematic lighting, soft shadows.`

---

## 2. 店舗・内装 (Interior)
空間のこだわりや居心地の良さを伝えるショット。

- **Prompt Template**:
  `Interior shot of a [Style: e.g., modern minimalist Japanese] [Business: e.g., cafe], [Feature: e.g., warm wooden furniture and large windows]. Atmospheric lighting, cozy and high-end feel, elegant decorations. No people.`

---

## 3. 料理・商品 (Product)
シズル感があり、素材の良さが伝わるクローズアップ。

- **Prompt Template**:
  `A close-up high-end product photography of [Product name: e.g., freshly baked crusty bread], [Detail: e.g., steam rising, golden brown texture]. Placed on a [Setting: e.g., rustic wooden table] with [Props: e.g., some flour scattered]. Professional food styling, beautiful bokeh, appetizing and premium look.`

---

## コンテンツ抽出用システムプロンプト (Content Extraction)

インタビュー文字起こしから、チャット形式の文言を作成する際のベース指示です。

```markdown
あなたは一流のインタビュアー兼ライターです。
口話体の生データから、読者が店舗のファンになるようなチャットシナリオを作成してください。

【制約事項】
1. キャラクター性を守る: 抽出した「こだわり」や「人柄」を口調に反映させる。
2. 情緒と情報の両立: 想いを語りつつ、必要な基本情報（メニュー、価格帯等）も自然に盛り込む。
3. リライト: チャットに適した短い文章に分割する。
```
