/**
 * コーヒー＆ベーカリー アルル - クロワッサン詳細対応データ
 */
const chatScenarios = {
    "start": {
        text: [
            "ご来店ありがとうございます！",
            "私たちは[[先代のアルル]]から引き継いだ、[[８０年]]もの歴史がある[[『ルヴァン種』]]でパンを焼いています。",
            "私たちのパンのこと、少しお話しさせてください！"
        ],
        options: [
            { text: "８０年続く『ルヴァン種』の秘密", next: "levain_deep" },
            { text: "大切にしている想い", next: "concept" },
            { text: "自慢のパンのこと", next: "bread_top" },
            { text: "こだわりの自家焙煎コーヒー", next: "coffee_info" }
        ]
    },

    "levain_deep": {
        text: [
            "[[『ルヴァン種』]]は、[[ライ麦と小麦と水]]を混ぜて自然に発酵させたものなんです。",
            "[[先代のアルル]]から引き継いだこの種をベースに、独自の手法を研究して、その[[『旨味』]]を最大限に引き出すように発酵させているんですよ！"
        ],
        options: [
            { text: "味のこだわりをもっと！", next: "levain_taste" },
            { text: "パンの紹介を見る", next: "bread_top" },
            { text: "最初にもどる", next: "start" }
        ]
    },

    "levain_taste": {
        text: [
            "日々研究を重ねて、天然酵母特有の酸味を抑え、深い[[『旨味』]]を最大限に引き出しています！不思議と[[和食]]にもピッタリ合うんですよ。",
            "毎日食べても飽きない、優しくて力強い味わいが自慢です！"
        ],
        options: [
            { text: "看板商品（カンパーニュ）へ", next: "hard_bread" },
            { text: "最初にもどる", next: "start" }
        ]
    },

    "concept": {
        text: [
            "大量生産には絶対に出せない本質的な[[『旨味』]]と[[『安心』]]を、日常の価格でお届けしたい……。",
            "そんな想いで、毎日一つひとつ丁寧にパンと向き合っています！"
        ],
        options: [
            { text: "原材料へのこだわりは？", next: "transparency" },
            { text: "ルヴァン種について聞く", next: "levain_deep" },
            { text: "最初にもどる", next: "start" }
        ]
    },

    "transparency": {
        text: [
            "パンの主役である小麦は、[[国産小麦]]を使用しています。",
            "[[小麦の産地]]から[[酵母の種類]]まで、すべて正直に明示して、自分たちが納得できる誠実なパン作りを続けています！"
        ],
        options: [
            { text: "パンの紹介へ！", next: "bread_top" },
            { text: "最初にもどる", next: "start" }
        ]
    },

    "bread_top": {
        text: [
            "[[８０年酵母]]の[[ルヴァン種]]を使用した自慢のパンたちです。",
            "どのパンに興味がありますか？"
        ],
        options: [
            { text: "一番人気！クロワッサン", next: "croissant_detail" },
            { text: "看板商品（カンパーニュ）", next: "hard_bread" },
            { text: "日々の定番（食パン・塩パン）", next: "daily_bread" },
            { text: "こだわりの菓子パン", next: "sweet_bread" }
        ]
    },

    "croissant_detail": {
        text: [
            "生地から手作りしている自慢の[[クロワッサン]]です！",
            "[[img:sample_croissant.jpg]]",
            "バターは[[明治発酵バター]]を使用しています。（※昨今のバター品薄状態により、日高バターを使用する場合もあります）"
        ],
        options: [
            { text: "どんな食感なの？", next: "croissant_taste" },
            { text: "美味しく食べるコツは？", next: "croissant_reheat" },
            { text: "最初にもどる", next: "bread_top" }
        ]
    },

    "croissant_taste": {
        text: [
            "絶妙な[[18層]]に仕上げています！",
            "外は[[サクサク]]、中は[[もっちり]]。",
            "ふんわりとした甘みが広がる、まさに自慢の逸品なんですよ！"
        ],
        options: [
            { text: "温め方のコツは？", next: "croissant_reheat" },
            { text: "他のパンも見る", next: "bread_top" },
            { text: "最初にもどる", next: "start" }
        ]
    },

    "croissant_reheat": {
        text: [
            "当日の[[冷めた状態]]が最も食べ頃です！サクサク感と香ばしい香りがたまりません。",
            "翌日以降は[[アルミホイル]]を被せてトースターで焼いてみてください！",
            "焦がさずに、焼きたてのような[[サクサク感]]が復活しますよ。ぜひ試してみてくださいね！"
        ],
        options: [
            { text: "クロワッサンのこだわりへ", next: "croissant_detail" },
            { text: "他のパンも見る", next: "bread_top" },
            { text: "最初にもどる", next: "start" }
        ]
    },

    "hard_bread": {
        text: [
            "私たちの誇り、[[ルヴァン種のカンパーニュ]]です！",
            "[[img:levain_campange.JPG]]",
            "100%ルヴァン種で作っているので、その[[酸味と旨味]]を存分に味わうならぜひこちらをどうぞ。",
            "ルヴァンの効果で香りもぐんと良くなり、翌日、2日後とさらに香りが増していきます。",
            "袋を開けただけで、[[部屋中がパンの旨味の香り]]に包まれるほどなんですよ！"
        ],
        options: [
            { text: "パンの酸味って…？", next: "hard_bread_taste" },
            { text: "熟成の秘密って？", next: "hard_bread_process" },
            { text: "どのくらい日持ちするの？", next: "shelf_life" },
            { text: "他のパンも見る", next: "bread_top" },
            { text: "最初にもどる", next: "start" }
        ]
    },

    "hard_bread_taste": {
        text: [
            "「酸っぱいパンは苦手！」と思っていたお客様も、このカンパーニュはぜひ一度お試しください。",
            "パンにおける[[酸味の概念]]が変わりますよ。",
            "いわゆる「すっぱい」パンとは違う、[[味わい深い酸味と旨味]]がたっぷりと溶け合っているんです。",
            "……その秘密は、実は[[『熟成』]]にあります。"
        ],
        options: [
            { text: "熟成の秘密って？", next: "hard_bread_process" },
            { text: "他のパンも見る", next: "bread_top" },
            { text: "最初にもどる", next: "start" }
        ]
    },

    "hard_bread_process": {
        text: [
            "焼き上がるまでに[[丸3日間]]の熟成が必要で、仕込んでから[[4日目]]にようやく完成する手間暇かかったパンなんです。",
            "毎日種を[[『リフレッシュ』]]して新鮮な状態で使う、[[８０年守り抜いた酵母]]の魔法が詰まっています！"
        ],
        options: [
            { text: "パンの酸味について", next: "hard_bread_taste" },
            { text: "他のパンも見る", next: "bread_top" },
            { text: "最初にもどる", next: "start" }
        ]
    },

    "daily_bread": {
        text: [
            "もっちり食感の[[『湯種食パン』]]や、バターをたっぷり包み込んだ[[『塩パン』]]など、毎日の食卓をちょっと贅沢にしてくれる、私たちの自信作です！",
            "どちらのお話を聞きたいですか？"
        ],
        options: [
            { text: "バターたっぷり！塩パン", next: "sio_pan" },
            { text: "他のパンも見る", next: "bread_top" },
            { text: "最初にもどる", next: "start" }
        ]
    },

    "sio_pan": {
        text: [
            "こちらの[[塩パン]]は、バターをたっぷり贅沢に包み込んで焼き上げています！",
            "[[img:siopan.jpg]]",
            "生地には[[湯種]]を使用しているので、外はカリッと、中は驚くほどもっちりとした食感に仕上がっていますよ。"
        ],
        options: [
            { text: "他のパンも見る", next: "bread_top" },
            { text: "最初にもどる", next: "start" }
        ]
    },

    "sweet_bread": {
        text: [
            "おやつにぴったりの菓子パンもご用意しています！特におすすめなのがこちらの[[特製メロンパン]]です。",
            "[[img:melon_pan.JPG]]",
            "外のクッキー生地はサクサク、中はふんわりもっちり。優しい甘さが口いっぱいに広がりますよ！"
        ],
        options: [
            { text: "他のパンも見る", next: "bread_top" },
            { text: "最初にもどる", next: "start" }
        ]
    },

    "shelf_life": {
        text: [
            "実はルヴァン100%のカンパーニュ、驚くほど長持ちするんです！",
            "[[冬なら1ヶ月]]、[[夏でも2〜3週間]]は美味しく食べられます。",
            "日が経つごとに旨味が馴染んでいくのも、[[８０年]]ほど守り抜いてきた種のおかげですね。",
            "……その豊かな味わいの秘密は、[[『熟成』]]にあります。"
        ],
        options: [
            { text: "熟成の秘密って？", next: "hard_bread_process" },
            { text: "他のパンも見る", next: "bread_top" },
            { text: "最初にもどる", next: "start" }
        ]
    },

    "coffee_info": {
        text: [
            "コーヒー豆は[[淀川沿いの焙煎所]]で[[自家焙煎]]しています！",
            "じっくりと時間をかけて、それぞれの[[豆に合わせた焙煎]]を心がけているんです。",
            "パンの旨味を引き立てる、まろやかなコクを楽しんでください！"
        ],
        options: [
            { text: "パンの紹介へもどる", next: "bread_top" },
            { text: "お店の場所を確認！", next: "access_info" },
            { text: "最初にもどる", next: "start" }
        ]
    },

    "access_info": {
        text: [
            "当店は[[東三国駅]]から徒歩5分、[[新大阪駅]]からも歩いて来れる場所にあります。",
            "グランヴィー新大阪の1階ですので、ぜひお気軽に立ち寄ってくださいね！"
        ],
        options: [
            { text: "想いをもう一度！", next: "concept" },
            { text: "最初にもどる", next: "start" }
        ]
    }
};

window.chatScenarios = chatScenarios;
