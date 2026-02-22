/**
 * コーヒー＆ベーカリー アルル - 元気な店員さんトーン
 */
const chatScenarios = {
    "start": {
        text: "いらっしゃいませ！ご来店ありがとうございます！ここは[[80年前]]から大切に守ってきた[[『種』]]でパンを焼く、東三国の小さなお店です！私たちの自慢のこだわり、ぜひ聞いていってくださいね！",
        options: [
            { text: "80年続く『ルヴァン種』の秘密", next: "levain_deep" },
            { text: "アルルの熱い想い！", next: "concept" },
            { text: "おすすめパンの目録", next: "bread_top" },
            { text: "相性抜群のコーヒー", next: "coffee_info" },
            { text: "（隅の方で猫がこちらを見ている……）", next: "cat_scene" }
        ]
    },

    "cat_scene": {
        speaker: "cat",
        text: "ニャーン！……あ、びっくりした？ボクはこのお店の看板猫さ。職人さんのパンは最高に香ばしくて、ボクもついつい居眠りしちゃうんだニャ。",
        options: [
            { text: "猫もパンを食べるの？", next: "cat_bread" },
            { text: "もどる", next: "start" }
        ]
    },

    "cat_bread": {
        speaker: "cat",
        text: "ボクは焼きたての香りが専門さ！でも、職人さんがたまにくれる[[特別な無塩のパン]]は絶品なんだニャ。80年の歴史は伊達じゃないニャ！",
        options: [
            { text: "職人の話を聞く", next: "start" },
            { text: "もどる", next: "start" }
        ]
    },

    "levain_deep": {
        text: "[[『ルヴァン種』]]ですね！これは小麦と水のちからを育てた、自然の酵母なんです。当店の種は先代から受け継いで、なんと[[80年目]]！毎日欠かさず手をかけて、新しい命を吹き込んでいるんですよ！",
        options: [
            { text: "80年もどうやって！？", next: "levain_history" },
            { text: "どんな味がするの？", next: "levain_taste" },
            { text: "もどる", next: "start" }
        ]
    },

    "levain_history": {
        text: "365日、一日も休まず小麦と水を足す[[『種継ぎ』]]をしているんです！戦前から今日まで、職人が家族のように大切に、大切に守り抜いてきた……まさにアルルの[[『心臓』]]であり宝物なんですよ！",
        options: [
            { text: "その味は？", next: "levain_taste" },
            { text: "パンの紹介を見る", next: "bread_top" },
            { text: "もどる", next: "start" }
        ]
    },

    "levain_taste": {
        text: "天然酵母特有の酸味を抑えて、深い[[『旨味』]]をグッと引き出しています！不思議と[[和食]]にもピッタリ合うんですよ。毎日食べても飽きない、優しくて力強い味なんです！",
        options: [
            { text: "継承の秘密をもっと！", next: "levain_history" },
            { text: "もどる", next: "start" }
        ]
    },

    "concept": {
        text: "効率よりも、とにかく[[手仕事]]！大量生産には絶対に出せない[[『旨味』]]と[[『安心』]]を、皆さんに毎日お届けしたい……。その一心で、毎日パンを焼いています！",
        options: [
            { text: "原材料へのこだわりは？", next: "transparency" },
            { text: "ルヴァン種について聞く", next: "levain_deep" },
            { text: "もどる", next: "start" }
        ]
    },

    "transparency": {
        text: "もちろん、[[小麦の産地]]も[[酵母の種類]]もすべて正直に明かしています！自分たちが心から「美味しい！」と納得できるものだけをお届けするのが、お客様との一番の約束ですからね！",
        options: [
            { text: "パンの紹介へ！", next: "bread_top" },
            { text: "もどる", next: "start" }
        ]
    },

    "bread_top": {
        text: "さあ、[[80年の種]]が息づく自慢のパンたちです！看板の[[カンパーニュ]]から、子供たちに人気の[[菓子パン]]まで勢揃いですよ！どれに興味がありますか？",
        options: [
            { text: "看板商品（カンパーニュ）", next: "hard_bread" },
            { text: "日々の定番（食パン・塩パン）", next: "daily_bread" },
            { text: "おやつに！（菓子パン・クロワッサン）", next: "sweet_bread" },
            { text: "保存のコツを教えて！", next: "shelf_life" }
        ]
    },

    "hard_bread": {
        text: "私たちの誇り、[[『ルヴァン・ナチュレ・カンパーニュ』]]です！ルヴァン種100%の深いコクがたまりません！軽く焼くと香ばしさが爆発して、お料理の味もさらに引き立ててくれますよ！",
        options: [
            { text: "他のパンも見る", next: "bread_top" },
            { text: "もどる", next: "start" }
        ]
    },

    "daily_bread": {
        text: "もっちもっちの[[『湯種食パン』]]に、小麦の甘みがギュッと詰まった[[『塩パン』]]！どちらも毎日の食卓をちょっと贅沢にしてくれる、リピーターさん続出のパンなんです！",
        options: [
            { text: "他のパンも見る", next: "bread_top" },
            { text: "もどる", next: "start" }
        ]
    },

    "sweet_bread": {
        text: "サクサク食感の[[クロワッサン]]に、外はカリッ、中はしっとりの[[メロンパン]]！実は菓子パンの生地もすべてルヴァン種なんです。この口どけ、一度体験したら忘れられませんよ！",
        options: [
            { text: "他のパンも見る", next: "bread_top" },
            { text: "もどる", next: "start" }
        ]
    },

    "shelf_life": {
        text: "実はアルルのパン、驚くほど長持ちするんです！[[冬なら1ヶ月]]、[[夏でも数週間]]は大丈夫！日が経つごとに旨味が深まっていくのも、80年の歴史を誇る種のおかげですね！",
        options: [
            { text: "ルヴァン種について聞く", next: "levain_deep" },
            { text: "もどる", next: "start" }
        ]
    },

    "coffee_info": {
        text: "パンと一緒に楽しんでほしいのが、この[[『時間焙煎』]]コーヒーです！豆の芯までじっくり火を通して、角のない[[まろやかなコク]]に仕上げました。最高のペアリング、ぜひ試してください！",
        options: [
            { text: "パンの紹介へもどる", next: "bread_top" },
            { text: "お店の場所を確認！", next: "access_info" },
            { text: "もどる", next: "start" }
        ]
    },

    "access_info": {
        text: "[[東三国駅]]から徒歩5分！グランヴィー新大阪の1階です。少し隠れ家っぽい場所ですが、焼きたての香りを辿ればきっと着けますよ！皆さんに会えるのを楽しみに待っています！",
        options: [
            { text: "想いをもう一度！", next: "concept" },
            { text: "もどる", next: "start" }
        ]
    }
};

window.chatScenarios = chatScenarios;
