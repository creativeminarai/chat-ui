/**
 * コーヒー＆ベーカリー アルル - クロワッサン詳細対応データ
 */
const chatScenarios = {
    "start": {
        speaker: "tenshu_bread",
        text: [
            "ご来店ありがとうございます！",
            "[[８０年のルヴァン種]]を引き継いでパンを焼いています。すべてのパンを生地から作っている[[リテイルベーカリー]]です！",
            "私たちのパンのこと、少しお話しさせてください！"
        ],
        options: [
            { text: "お店の想い", next: "concept" },
            { text: "ルヴァン種の話", next: "levain_deep" },
            { text: "パンの紹介を見る", next: "bread_top" }
        ]
    },

    "levain_deep": {
        speaker: "tenshu_bread",
        text: [
            "[[『ルヴァン種』]]は、[[ライ麦と小麦と水]]を混ぜて自然に発酵させたものなんです。",
            "[[先代のアルル]]から引き継いだこの種をベースに、独自の手法を研究して、その[[『旨味』]]を最大限に引き出すように発酵させているんですよ！"
        ],
        options: [
            { text: "独自の手法？", next: "levain_taste" },
            { text: "パンの紹介を見る", next: "bread_top" },
            { text: "別の話を見る", next: "start" }
        ]
    },

    "levain_taste": {
        speaker: "tenshu_bread",
        text: [
            "日々研究を重ねて、天然酵母特有の酸味を抑え、深い[[『旨味』]]を最大限に引き出しています！不思議と[[和食]]にもピッタリ合うんですよ。",
            "毎日食べても飽きない、優しくて力強い味わいが自慢です！"
        ],
        options: [
            { text: "カンパーニュについて", next: "hard_bread" },
            { text: "別の話を見る", next: "start" }
        ]
    },

    "concept": {
        speaker: "tenshu_bread",
        text: [
            "素直に[[美味しい]]と思える[[安心]]のパンを、日々の暮らしの中で楽しんでもらいたい……。",
            "そんな想いで、毎日一つひとつパンと向き合っています！"
        ],
        options: [
            { text: "原材料について", next: "transparency" },
            { text: "ルヴァン種について", next: "levain_deep" },
            { text: "別の話を見る", next: "start" }
        ]
    },

    "transparency": {
        speaker: "tenshu_bread",
        text: [
            "パンの主役である小麦は、[[国産小麦]]を使用しています。",
            "[[納得できる安心の材料]]を使用し、パン作りを続けています！"
        ],
        options: [
            { text: "パンの紹介へ！", next: "bread_top" },
            { text: "別の話を見る", next: "start" }
        ]
    },

    "bread_top": {
        speaker: "tenshu_bread",
        text: [
            "気になるパンをお選びください！"
        ],
        options: [
            { text: "クロワッサン", next: "croissant_detail" },
            { text: "カンパーニュ", next: "hard_bread" },
            { text: "食パン", next: "daily_bread" },
            { text: "塩パン", next: "sio_pan" },
            { text: "メロンパン", next: "sweet_bread" },
            { text: "別の話を見る", next: "start" }
        ]
    },

    "croissant_detail": {
        speaker: "tenshu_bread",
        text: [
            "生地から手作りしている自慢の[[クロワッサン]]です！[[img:croissant.JPG]]",
            "バターは[[明治発酵バター]]を使用しています。（※昨今のバター品薄状態により、日高バターを使用する場合もあります）"
        ],
        options: [
            { text: "どんな食感なの？", next: "croissant_taste" },
            { text: "美味しく食べるコツは？", next: "croissant_reheat" },
            { text: "パン一覧を見る", next: "bread_top" }
        ]
    },

    "croissant_taste": {
        speaker: "tenshu_bread",
        text: [
            "絶妙な[[18層]]に仕上げています！",
            "外は[[サクサク]]、中は[[もっちり]]。",
            "ふんわりとした甘みが広がる、まさに自慢の逸品なんですよ！"
        ],
        options: [
            { text: "温め方のコツは？", next: "croissant_reheat" },
            { text: "パン一覧を見る", next: "bread_top" }
        ]
    },

    "croissant_reheat": {
        speaker: "tenshu_bread",
        text: [
            "当日の焼き上がりから2時間以降から夜まで食べ頃です！実はアツアツよりも落ち着かせた方が、生地の甘みや旨味が感じられ、がクサク感と香ばしい香りがたまりません。",
            "翌日以降は[[アルミホイル]]を被せてトースターで焼いてみてください！焦がさずに、焼きたてのような[[サクサク感]]が復活しますよ。ぜひ試してみてください！"
        ],
        options: [
            { text: "クロワッサンのこだわりへ", next: "croissant_detail" },
            { text: "パン一覧を見る", next: "bread_top" }
        ]
    },

    "hard_bread": {
        speaker: "tenshu_bread",
        text: [
            "私たちの誇り、[[ルヴァン種のカンパーニュ]]です！[[img:levain_campange.JPG]]",
            "100%ルヴァン種で作っているので、その[[酸味と旨味]]を存分に味わうならぜひこちらをどうぞ。",
            "ルヴァンの効果で香りもぐんと良くなり、翌日、2日後とさらに香りが増していきます。袋を開けただけで、[[部屋中がパンの旨味の香り]]に包まれるほどなんですよ！"
        ],
        options: [
            { text: "パンの酸味…", next: "hard_bread_taste" },
            { text: "熟成の秘密", next: "hard_bread_process" },
            { text: "パン一覧を見る", next: "bread_top" }
        ]
    },

    "hard_bread_taste": {
        speaker: "tenshu_bread",
        text: [
            "「酸っぱいパンは苦手！」と思っていたお客様も、このカンパーニュはぜひ一度お試しください。パンにおける[[酸味の概念]]が変わりますよ。",
            "いわゆる「すっぱい」パンとは違う、[[味わい深い酸味と旨味]]がたっぷりと溶け合っているんです。……その秘密は、実は[[『熟成』]]にあります。"
        ],
        options: [
            { text: "熟成の秘密って？", next: "hard_bread_process" },
            { text: "パン一覧を見る", next: "bread_top" }
        ]
    },

    "hard_bread_process": {
        speaker: "tenshu_bread",
        text: [
            "焼き上がるまでに[[丸3日間]]の熟成が必要で、仕込んでから[[4日目]]にようやく完成する手間暇かかったパンなんです。",
            "毎日パンを焼いているからこそ、[[８０年の酵母]]を絶やさずにパンを作ることができています。"
        ],
        options: [
            { text: "日持ちについて", next: "shelf_life" },
            { text: "パン一覧を見る", next: "bread_top" }
        ]
    },

    "daily_bread": {
        speaker: "tenshu_bread",
        text: [
            "毎日食べても飽きにくい[[湯種食パン]]です。",
            "湯種ならではの[[しっとり・もっちり]]した食感と、やさしい甘みが特長です。"
        ],
        options: [
            { text: "塩パンも見る", next: "sio_pan" },
            { text: "パン一覧を見る", next: "bread_top" }
        ]
    },

    "sio_pan": {
        speaker: "tenshu_bread",
        text: [
            "こちらの[[塩パン]]は、バターをたっぷり贅沢に包み込んで焼き上げています！[[img:siopan.jpg]]",
            "生地には[[湯種]]を使用しているので、外はカリッと、中は驚くほどもっちりとした食感に仕上がっていますよ。"
        ],
        options: [
            { text: "パン一覧を見る", next: "bread_top" }
        ]
    },

    "sweet_bread": {
        speaker: "tenshu_bread",
        text: [
            "おやつにぴったりの菓子パンもご用意しています！特におすすめなのがこちらの[[特製メロンパン]]です。[[img:melon_pan.JPG]]",
            "外のクッキー生地はサクサク、中はふんわりもっちり。優しい甘さが口いっぱいに広がりますよ！"
        ],
        options: [
            { text: "パン一覧を見る", next: "bread_top" }
        ]
    },

    "shelf_life": {
        speaker: "tenshu_bread",
        text: [
            "実はルヴァン100%のカンパーニュ、驚くほど長持ちするんです！[[冬なら1ヶ月]]、[[夏でも2〜3週間]]は美味しく食べられます。",
            "日が経つごとに旨味が馴染んでいくのも、[[８０年]]ほど守り抜いてきた種のおかげですね。……その豊かな味わいの秘密は、[[『熟成』]]にあります。"
        ],
        options: [
            { text: "熟成の秘密って？", next: "hard_bread_process" },
            { text: "パン一覧を見る", next: "bread_top" }
        ]
    },



    "end_thanks": {
        speaker: "tenshu_bread",
        text: [
            "ここまで読んでいただき、ありがとうございます！",
            "ひと口ごとの香りや食感の変化も、ゆっくり楽しんでみてくださいね。"
        ],
        options: [
            { text: "別の話を見る", next: "start" }
        ]
    }
};

window.chatScenarios = chatScenarios;
