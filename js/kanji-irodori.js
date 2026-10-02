/* ============================================================
   DATA KANJI IRODORI — STARTER (A1)
   ------------------------------------------------------------
   Sumber : Buku Irodori Starter (Japan Foundation)
   Field  :
     k   : kanji
     kun : furigana / cara baca (dari buku)
     pel : pelajaran (S-1 s/d S-18)
     a   : arti bahasa Inggris (placeholder — ganti ke Indonesia nanti)
   ============================================================ */

window.KANJI_IRODORI = {
  starter: [

    // ============ Pelajaran 1 ============
    { k: '名前',       kun: 'なまえ',           pel: 'S-1',  a: 'Name' },
    { k: '国',         kun: 'くに',             pel: 'S-1',  a: 'Country' },
    { k: '私',         kun: 'わたし',           pel: 'S-1',  a: 'I / Me' },

    // ============ Pelajaran 2 ============
    { k: '父',         kun: 'ちち',             pel: 'S-2',  a: 'Father' },
    { k: '母',         kun: 'はは',             pel: 'S-2',  a: 'Mother' },
    { k: '子ども',     kun: 'こども',           pel: 'S-2',  a: 'Child' },
    { k: '日本',       kun: 'にほん',           pel: 'S-2',  a: 'Japan' },

    // ============ Pelajaran 3 ============
    { k: '水',         kun: 'みず',             pel: 'S-3',  a: 'Water' },
    { k: '食べます',   kun: 'たべます',         pel: 'S-3',  a: 'To eat' },
    { k: '飲みます',   kun: 'のみます',         pel: 'S-3',  a: 'To drink' },

    // ============ Pelajaran 4 ============
    { k: '魚',         kun: 'さかな',           pel: 'S-4',  a: 'Fish' },
    { k: '肉',         kun: 'にく',             pel: 'S-4',  a: 'Meat' },
    { k: '好き（な）', kun: 'すき',             pel: 'S-4',  a: 'Like / Fond of' },

    // ============ Pelajaran 5 ============
    { k: '家',         kun: 'いえ',             pel: 'S-5',  a: 'House / Home' },
    { k: '新しい',     kun: 'あたらしい',       pel: 'S-5',  a: 'New' },
    { k: '広い',       kun: 'ひろい',           pel: 'S-5',  a: 'Spacious / Wide' },
    { k: '古い',       kun: 'ふるい',           pel: 'S-5',  a: 'Old (thing)' },

    // ============ Pelajaran 6 ============
    { k: '月',         kun: 'げつ',             pel: 'S-6',  a: 'Moon / Monday' },
    { k: '火',         kun: 'か',               pel: 'S-6',  a: 'Fire / Tuesday' },
    { k: '水',         kun: 'すい',             pel: 'S-6',  a: 'Water / Wednesday' },
    { k: '木',         kun: 'もく',             pel: 'S-6',  a: 'Tree / Thursday' },
    { k: '金',         kun: 'きん',             pel: 'S-6',  a: 'Gold / Friday' },
    { k: '土',         kun: 'ど',               pel: 'S-6',  a: 'Earth / Saturday' },
    { k: '日',         kun: 'にち',             pel: 'S-6',  a: 'Sun / Sunday' },
    { k: '〜曜日',     kun: 'ようび',           pel: 'S-6',  a: '~day of the week' },

    // ============ Pelajaran 7 ============
    { k: '朝',         kun: 'あさ',             pel: 'S-7',  a: 'Morning' },
    { k: '昼',         kun: 'ひる',             pel: 'S-7',  a: 'Noon / Daytime' },
    { k: '夜',         kun: 'よる',             pel: 'S-7',  a: 'Night' },

    // ============ Pelajaran 8 ============
    { k: '読みます',   kun: 'よみます',         pel: 'S-8',  a: 'To read' },
    { k: '聞きます',   kun: 'ききます',         pel: 'S-8',  a: 'To listen / ask' },
    { k: '見ます',     kun: 'みます',           pel: 'S-8',  a: 'To see / watch' },
    { k: '本',         kun: 'ほん',             pel: 'S-8',  a: 'Book' },
    { k: '友だち',     kun: 'ともだち',         pel: 'S-8',  a: 'Friend' },
    { k: '何',         kun: 'なに',             pel: 'S-8',  a: 'What' },

    // ============ Pelajaran 9 ============
    { k: '〜年',       kun: 'ねん',             pel: 'S-9',  a: '~ year' },
    { k: '〜月',       kun: 'がつ',             pel: 'S-9',  a: '~ month' },
    { k: '〜日',       kun: 'にち',             pel: 'S-9',  a: '~ day' },
    { k: '今日',       kun: 'きょう',           pel: 'S-9',  a: 'Today' },
    { k: '今週',       kun: 'こんしゅう',       pel: 'S-9',  a: 'This week' },
    { k: '今度',       kun: 'こんど',           pel: 'S-9',  a: 'Next time' },

    // ============ Pelajaran 10 ============
    { k: '東',         kun: 'ひがし',           pel: 'S-10', a: 'East' },
    { k: '西',         kun: 'にし',             pel: 'S-10', a: 'West' },
    { k: '南',         kun: 'みなみ',           pel: 'S-10', a: 'South' },
    { k: '北',         kun: 'きた',             pel: 'S-10', a: 'North' },
    { k: '会社',       kun: 'かいしゃ',         pel: 'S-10', a: 'Company' },
    { k: '来ます',     kun: 'きます',           pel: 'S-10', a: 'To come' },
    { k: '行きます',   kun: 'いきます',         pel: 'S-10', a: 'To go' },
    { k: '乗ります',   kun: 'のります',         pel: 'S-10', a: 'To ride' },

    // ============ Pelajaran 11 ============
    { k: '大きい',     kun: 'おおきい',         pel: 'S-11', a: 'Big' },
    { k: '小さい',     kun: 'ちいさい',         pel: 'S-11', a: 'Small' },
    { k: '高い',       kun: 'たかい',           pel: 'S-11', a: 'Tall / Expensive' },
    { k: '低い',       kun: 'ひくい',           pel: 'S-11', a: 'Low / Short' },
    { k: '前',         kun: 'まえ',             pel: 'S-11', a: 'Front / Before' },
    { k: '後ろ',       kun: 'うしろ',           pel: 'S-11', a: 'Behind / Back' },
    { k: '横',         kun: 'よこ',             pel: 'S-11', a: 'Side' },

    // ============ Pelajaran 12 ============
    { k: '入口',       kun: 'いりぐち',         pel: 'S-12', a: 'Entrance' },
    { k: '出口',       kun: 'でぐち',           pel: 'S-12', a: 'Exit' },
    { k: '〜階',       kun: 'かい',             pel: 'S-12', a: '~ floor (building)' },
    { k: '押す',       kun: 'おす',             pel: 'S-12', a: 'To push' },
    { k: '引く',       kun: 'ひく',             pel: 'S-12', a: 'To pull' },
    { k: '安い',       kun: 'やすい',           pel: 'S-12', a: 'Cheap' },

    // ============ Pelajaran 13 ============
    { k: '一',         kun: 'いち',             pel: 'S-13', a: 'One' },
    { k: '二',         kun: 'に',               pel: 'S-13', a: 'Two' },
    { k: '三',         kun: 'さん',             pel: 'S-13', a: 'Three' },
    { k: '四',         kun: 'よん',             pel: 'S-13', a: 'Four' },
    { k: '五',         kun: 'ご',               pel: 'S-13', a: 'Five' },
    { k: '六',         kun: 'ろく',             pel: 'S-13', a: 'Six' },
    { k: '七',         kun: 'なな',             pel: 'S-13', a: 'Seven' },
    { k: '八',         kun: 'はち',             pel: 'S-13', a: 'Eight' },
    { k: '九',         kun: 'きゅう',           pel: 'S-13', a: 'Nine' },
    { k: '十',         kun: 'じゅう',           pel: 'S-13', a: 'Ten' },

    // ============ Pelajaran 14 ============
    { k: '百',         kun: 'ひゃく',           pel: 'S-14', a: 'Hundred' },
    { k: '千',         kun: 'せん',             pel: 'S-14', a: 'Thousand' },
    { k: '万',         kun: 'まん',             pel: 'S-14', a: 'Ten thousand' },
    { k: '〜円',       kun: 'えん',             pel: 'S-14', a: '~ yen' },
    { k: '休み',       kun: 'やすみ',           pel: 'S-14', a: 'Holiday / Rest' },
    { k: '映画',       kun: 'えいが',           pel: 'S-14', a: 'Movie' },
    { k: '日本語',     kun: 'にほんご',         pel: 'S-14', a: 'Japanese language' },
    { k: '勉強します', kun: 'べんきょうします', pel: 'S-14', a: 'To study' },
    { k: '買います',   kun: 'かいます',         pel: 'S-14', a: 'To buy' },

    // ============ Pelajaran 15 ============
    { k: '温泉',       kun: 'おんせん',         pel: 'S-15', a: 'Hot spring' },
    { k: '予定',       kun: 'よてい',           pel: 'S-15', a: 'Plan / Schedule' },
    { k: '来週',       kun: 'らいしゅう',       pel: 'S-15', a: 'Next week' },
    { k: '会います',   kun: 'あいます',         pel: 'S-15', a: 'To meet' },
    { k: '入ります',   kun: 'はいります',       pel: 'S-15', a: 'To enter' },
    { k: '旅行します', kun: 'りょこうします',   pel: 'S-15', a: 'To travel' },

    // ============ Pelajaran 16 ============
    { k: '学生',       kun: 'がくせい',         pel: 'S-16', a: 'Student' },
    { k: '仕事',       kun: 'しごと',           pel: 'S-16', a: 'Work / Job' },
    { k: '学校',       kun: 'がっこう',         pel: 'S-16', a: 'School' },
    { k: '元気（な）', kun: 'げんき',           pel: 'S-16', a: 'Healthy / Energetic' },
    { k: '生活',       kun: 'せいかつ',         pel: 'S-16', a: 'Life / Living' },
    { k: '忙しい',     kun: 'いそがしい',       pel: 'S-16', a: 'Busy' },
    { k: '去年',       kun: 'きょねん',         pel: 'S-16', a: 'Last year' },
    { k: '働く',       kun: 'はたらく',         pel: 'S-16', a: 'To work' },
    { k: '先週',       kun: 'せんしゅう',       pel: 'S-16', a: 'Last week' },
    { k: '作る',       kun: 'つくる',           pel: 'S-16', a: 'To make' },

    // ============ Pelajaran 17 ============
    { k: '人',         kun: 'ひと',             pel: 'S-17', a: 'Person' },
    { k: '〜人',       kun: 'にん',             pel: 'S-17', a: '~ people (counter)' },
    { k: '〜人',       kun: 'じん',             pel: 'S-17', a: '~ nationality' },
    { k: '犬',         kun: 'いぬ',             pel: 'S-17', a: 'Dog' },
    { k: '家族',       kun: 'かぞく',           pel: 'S-17', a: 'Family' },
    { k: '夕方',       kun: 'ゆうがた',         pel: 'S-17', a: 'Evening' },

    // ============ Pelajaran 18 ============
    { k: '季節',       kun: 'きせつ',           pel: 'S-18', a: 'Season' },
    { k: '花',         kun: 'はな',             pel: 'S-18', a: 'Flower' },
    { k: '春',         kun: 'はる',             pel: 'S-18', a: 'Spring' },
    { k: '夏',         kun: 'なつ',             pel: 'S-18', a: 'Summer' },
    { k: '秋',         kun: 'あき',             pel: 'S-18', a: 'Autumn' },
    { k: '冬',         kun: 'ふゆ',             pel: 'S-18', a: 'Winter' },
    { k: '暑',         kun: 'あつ',             pel: 'S-18', a: 'Hot (weather)' },
    { k: '寒',         kun: 'さむ',             pel: 'S-18', a: 'Cold (weather)' }

  ]
};