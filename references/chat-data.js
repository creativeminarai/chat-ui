/**
 * チャットの会話シナリオデータ
 */
const chatScenarios = {
    "start": {
        text: "いらっしゃいませ！「森のピザ屋」へようこそ。店主の私になんでも聞いてくださいね。今日はどんなご用件でしょうか？",
        options: [
            { text: "お店について知りたい", next: "about_shop" },
            { text: "おすすめのピザは？", next: "recommend_base" },
            { text: "お腹が空いた！", next: "hungry" }
        ]
    },
    "about_shop": {
        text: "ここは森の中にある小さなピザ屋です。石窯で焼く本格的なピザが自慢なんですよ。魔法の隠し味が効いているという噂もあります...",
        options: [
            { text: "魔法の隠し味？", next: "magic_secret" },
            { text: "おすすめを教えて", next: "recommend_base" }
        ]
    },
    "magic_secret": {
        text: "ふふふ、それは秘密です！でも、食べたらきっと元気が湧いてくるはずですよ。次はメニューをご案内しましょうか？",
        options: [
            { text: "おすすめをお願い", next: "recommend_base" },
            { text: "今は大丈夫", next: "start" }
        ]
    },
    "hungry": {
        text: "いいですね！石窯も絶好調です。今はどんな気分ですか？",
        options: [
            { text: "ガッツリお肉！", next: "meat_lover" },
            { text: "さっぱり野菜", next: "veggie_lover" },
            { text: "魚介の気分", next: "seafood_lover" }
        ]
    },
    "recommend_base": {
        text: "どれも自信作ですが、今の気分に合わせてご提案しますね！",
        options: [
            { text: "定番がいいな", next: "margherita" },
            { text: "変わり種はある？", next: "honey_cheese" },
            { text: "最初に戻る", next: "start" }
        ]
    },
    "meat_lover": {
        text: "それなら「厚切りベーコンの燻製ピザ」はいかがでしょう？ジューシーな肉汁がたまりませんよ！",
        options: [
            { text: "美味しそう！注文する", next: "order_suggest", action: () => console.log("Meat pizza added") },
            { text: "他には？", next: "recommend_base" }
        ]
    },
    "veggie_lover": {
        text: "「森の恵みマルゲリータ」がおすすめです！朝摘みのフレッシュなトマトと自家製バジルをたっぷり使っています。",
        options: [
            { text: "それに決めた！", next: "order_suggest" },
            { text: "他には？", next: "recommend_base" }
        ]
    },
    "margherita": {
        text: "やはり王道の「森のマルゲリータ」ですね！シンプルですが、生地の美味しさが一番よくわかります。",
        options: [
            { text: "注文する", next: "order_suggest" },
            { text: "戻る", next: "recommend_base" }
        ]
    },
    "honey_cheese": {
        text: "「魔法のはちみつチーズピザ」はどうでしょう？4種類のチーズに、森で採れた特製はちみつをかけて食べるんです。甘じょっぱさがクセになりますよ！",
        options: [
            { text: "食べてみたい！", next: "order_suggest" },
            { text: "戻る", next: "recommend_base" }
        ]
    },
    "order_suggest": {
        text: "素晴らしい選択です！石窯の準備はバッチリですよ。他にご質問やご注文はありますか？",
        options: [
            { text: "特にないよ", next: "finish" },
            { text: "最初に戻る", next: "start" }
        ]
    },
    "finish": {
        text: "承知いたしました。美味しいピザが焼き上がるまで、森の空気を楽しんでお待ちくださいね！",
        options: [
            { text: "また話しかける", next: "start" }
        ]
    }
};

window.chatScenarios = chatScenarios;
