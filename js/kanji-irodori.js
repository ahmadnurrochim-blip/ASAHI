/* ============================================================
   DATA KANJI IRODORI — STARTER + ELEMENTARY 1 + ELEMENTARY 2
   ------------------------------------------------------------
   Sumber : Buku Irodori (Japan Foundation)
   Field  :
     k   : kanji
     kun : furigana / cara baca
     pel : pelajaran / urutan
     a   : arti (bahasa Inggris placeholder)
   ============================================================ */

window.KANJI_IRODORI = {

  /* ============================================================
     STARTER (A1) — 107 kanji
     ============================================================ */
  starter: [
    // ============ Pelajaran 1 ============
    { k:'名前',   kun:'なまえ',     pel:'S-1', a:'Name' },
    { k:'国',     kun:'くに',       pel:'S-1', a:'Country' },
    { k:'私',     kun:'わたし',     pel:'S-1', a:'I / Me' },

    // ============ Pelajaran 2 ============
    { k:'父',     kun:'ちち',       pel:'S-2', a:'Father' },
    { k:'母',     kun:'はは',       pel:'S-2', a:'Mother' },
    { k:'子ども', kun:'こども',     pel:'S-2', a:'Child' },
    { k:'日本',   kun:'にほん',     pel:'S-2', a:'Japan' },

    // ============ Pelajaran 3 ============
    { k:'水',     kun:'みず',       pel:'S-3', a:'Water' },
    { k:'食べます', kun:'たべます', pel:'S-3', a:'To eat' },
    { k:'飲みます', kun:'のみます', pel:'S-3', a:'To drink' },

    // ============ Pelajaran 4 ============
    { k:'魚',     kun:'さかな',     pel:'S-4', a:'Fish' },
    { k:'肉',     kun:'にく',       pel:'S-4', a:'Meat' },
    { k:'好き（な）', kun:'すき',   pel:'S-4', a:'Like / Fond of' },

    // ============ Pelajaran 5 ============
    { k:'家',     kun:'いえ',       pel:'S-5', a:'House / Home' },
    { k:'新しい', kun:'あたらしい', pel:'S-5', a:'New' },
    { k:'広い',   kun:'ひろい',     pel:'S-5', a:'Spacious / Wide' },
    { k:'古い',   kun:'ふるい',     pel:'S-5', a:'Old (thing)' },

    // ============ Pelajaran 6 ============
    { k:'月',     kun:'げつ',       pel:'S-6', a:'Moon / Monday' },
    { k:'火',     kun:'か',         pel:'S-6', a:'Fire / Tuesday' },
    { k:'水',     kun:'すい',       pel:'S-6', a:'Water / Wednesday' },
    { k:'木',     kun:'もく',       pel:'S-6', a:'Tree / Thursday' },
    { k:'金',     kun:'きん',       pel:'S-6', a:'Gold / Friday' },
    { k:'土',     kun:'ど',         pel:'S-6', a:'Earth / Saturday' },
    { k:'日',     kun:'にち',       pel:'S-6', a:'Sun / Sunday' },
    { k:'〜曜日', kun:'ようび',     pel:'S-6', a:'~day of the week' },

    // ============ Pelajaran 7 ============
    { k:'朝',     kun:'あさ',       pel:'S-7', a:'Morning' },
    { k:'昼',     kun:'ひる',       pel:'S-7', a:'Noon / Daytime' },
    { k:'夜',     kun:'よる',       pel:'S-7', a:'Night' },

    // ============ Pelajaran 8 ============
    { k:'読みます', kun:'よみます', pel:'S-8', a:'To read' },
    { k:'聞きます', kun:'ききます', pel:'S-8', a:'To listen / ask' },
    { k:'見ます', kun:'みます',     pel:'S-8', a:'To see / watch' },
    { k:'本',     kun:'ほん',       pel:'S-8', a:'Book' },
    { k:'友だち', kun:'ともだち',   pel:'S-8', a:'Friend' },
    { k:'何',     kun:'なに',       pel:'S-8', a:'What' },

    // ============ Pelajaran 9 ============
    { k:'〜年',   kun:'ねん',       pel:'S-9', a:'~ year' },
    { k:'〜月',   kun:'がつ',       pel:'S-9', a:'~ month' },
    { k:'〜日',   kun:'にち',       pel:'S-9', a:'~ day' },
    { k:'今日',   kun:'きょう',     pel:'S-9', a:'Today' },
    { k:'今週',   kun:'こんしゅう', pel:'S-9', a:'This week' },
    { k:'今度',   kun:'こんど',     pel:'S-9', a:'Next time' },

    // ============ Pelajaran 10 ============
    { k:'東',     kun:'ひがし',     pel:'S-10', a:'East' },
    { k:'西',     kun:'にし',       pel:'S-10', a:'West' },
    { k:'南',     kun:'みなみ',     pel:'S-10', a:'South' },
    { k:'北',     kun:'きた',       pel:'S-10', a:'North' },
    { k:'会社',   kun:'かいしゃ',   pel:'S-10', a:'Company' },
    { k:'来ます', kun:'きます',     pel:'S-10', a:'To come' },
    { k:'行きます', kun:'いきます', pel:'S-10', a:'To go' },
    { k:'乗ります', kun:'のります', pel:'S-10', a:'To ride' },

    // ============ Pelajaran 11 ============
    { k:'大きい', kun:'おおきい',   pel:'S-11', a:'Big' },
    { k:'小さい', kun:'ちいさい',   pel:'S-11', a:'Small' },
    { k:'高い',   kun:'たかい',     pel:'S-11', a:'Tall / Expensive' },
    { k:'低い',   kun:'ひくい',     pel:'S-11', a:'Low / Short' },
    { k:'前',     kun:'まえ',       pel:'S-11', a:'Front / Before' },
    { k:'後ろ',   kun:'うしろ',     pel:'S-11', a:'Behind / Back' },
    { k:'横',     kun:'よこ',       pel:'S-11', a:'Side' },

    // ============ Pelajaran 12 ============
    { k:'入口',   kun:'いりぐち',   pel:'S-12', a:'Entrance' },
    { k:'出口',   kun:'でぐち',     pel:'S-12', a:'Exit' },
    { k:'〜階',   kun:'かい',       pel:'S-12', a:'~ floor (building)' },
    { k:'押す',   kun:'おす',       pel:'S-12', a:'To push' },
    { k:'引く',   kun:'ひく',       pel:'S-12', a:'To pull' },
    { k:'安い',   kun:'やすい',     pel:'S-12', a:'Cheap' },

    // ============ Pelajaran 13 ============
    { k:'一',     kun:'いち',       pel:'S-13', a:'One' },
    { k:'二',     kun:'に',         pel:'S-13', a:'Two' },
    { k:'三',     kun:'さん',       pel:'S-13', a:'Three' },
    { k:'四',     kun:'よん',       pel:'S-13', a:'Four' },
    { k:'五',     kun:'ご',         pel:'S-13', a:'Five' },
    { k:'六',     kun:'ろく',       pel:'S-13', a:'Six' },
    { k:'七',     kun:'なな',       pel:'S-13', a:'Seven' },
    { k:'八',     kun:'はち',       pel:'S-13', a:'Eight' },
    { k:'九',     kun:'きゅう',     pel:'S-13', a:'Nine' },
    { k:'十',     kun:'じゅう',     pel:'S-13', a:'Ten' },

    // ============ Pelajaran 14 ============
    { k:'百',     kun:'ひゃく',     pel:'S-14', a:'Hundred' },
    { k:'千',     kun:'せん',       pel:'S-14', a:'Thousand' },
    { k:'万',     kun:'まん',       pel:'S-14', a:'Ten thousand' },
    { k:'〜円',   kun:'えん',       pel:'S-14', a:'~ yen' },
    { k:'休み',   kun:'やすみ',     pel:'S-14', a:'Holiday / Rest' },
    { k:'映画',   kun:'えいが',     pel:'S-14', a:'Movie' },
    { k:'日本語', kun:'にほんご',   pel:'S-14', a:'Japanese language' },
    { k:'勉強します', kun:'べんきょうします', pel:'S-14', a:'To study' },
    { k:'買います', kun:'かいます', pel:'S-14', a:'To buy' },

    // ============ Pelajaran 15 ============
    { k:'温泉',   kun:'おんせん',   pel:'S-15', a:'Hot spring' },
    { k:'予定',   kun:'よてい',     pel:'S-15', a:'Plan / Schedule' },
    { k:'来週',   kun:'らいしゅう', pel:'S-15', a:'Next week' },
    { k:'会います', kun:'あいます', pel:'S-15', a:'To meet' },
    { k:'入ります', kun:'はいります', pel:'S-15', a:'To enter' },
    { k:'旅行します', kun:'りょこうします', pel:'S-15', a:'To travel' },

    // ============ Pelajaran 16 ============
    { k:'学生',   kun:'がくせい',   pel:'S-16', a:'Student' },
    { k:'仕事',   kun:'しごと',     pel:'S-16', a:'Work / Job' },
    { k:'学校',   kun:'がっこう',   pel:'S-16', a:'School' },
    { k:'元気（な）', kun:'げんき', pel:'S-16', a:'Healthy / Energetic' },
    { k:'生活',   kun:'せいかつ',   pel:'S-16', a:'Life / Living' },
    { k:'忙しい', kun:'いそがしい', pel:'S-16', a:'Busy' },
    { k:'去年',   kun:'きょねん',   pel:'S-16', a:'Last year' },
    { k:'働く',   kun:'はたらく',   pel:'S-16', a:'To work' },
    { k:'先週',   kun:'せんしゅう', pel:'S-16', a:'Last week' },
    { k:'作る',   kun:'つくる',     pel:'S-16', a:'To make' },

    // ============ Pelajaran 17 ============
    { k:'人',     kun:'ひと',       pel:'S-17', a:'Person' },
    { k:'〜人',   kun:'にん',       pel:'S-17', a:'~ people (counter)' },
    { k:'〜人',   kun:'じん',       pel:'S-17', a:'~ nationality' },
    { k:'犬',     kun:'いぬ',       pel:'S-17', a:'Dog' },
    { k:'家族',   kun:'かぞく',     pel:'S-17', a:'Family' },
    { k:'夕方',   kun:'ゆうがた',   pel:'S-17', a:'Evening' },

    // ============ Pelajaran 18 ============
    { k:'季節',   kun:'きせつ',     pel:'S-18', a:'Season' },
    { k:'花',     kun:'はな',       pel:'S-18', a:'Flower' },
    { k:'春',     kun:'はる',       pel:'S-18', a:'Spring' },
    { k:'夏',     kun:'なつ',       pel:'S-18', a:'Summer' },
    { k:'秋',     kun:'あき',       pel:'S-18', a:'Autumn' },
    { k:'冬',     kun:'ふゆ',       pel:'S-18', a:'Winter' },
    { k:'暑',     kun:'あつ',       pel:'S-18', a:'Hot (weather)' },
    { k:'寒',     kun:'さむ',       pel:'S-18', a:'Cold (weather)' }
  ],

  /* ============================================================
     ELEMENTARY 1 (A2.1) — 180 kanji
     ============================================================ */
  elementary1: [
    // ============ 1-10 ============
    { k:'学生',   kun:'がくせい',   pel:'E1-1', a:'Student' },
    { k:'学校',   kun:'がっこう',   pel:'E1-1', a:'School' },
    { k:'生活',   kun:'せいかつ',   pel:'E1-1', a:'Life' },
    { k:'去年',   kun:'きょねん',   pel:'E1-1', a:'Last year' },
    { k:'先週',   kun:'せんしゅう', pel:'E1-1', a:'Last week' },

    // ============ 6-15 ============
    { k:'仕事',   kun:'しごと',     pel:'E1-2', a:'Job / Work' },
    { k:'元気',   kun:'げんき',     pel:'E1-2', a:'Healthy / Energetic' },
    { k:'忙しい', kun:'いそがしい', pel:'E1-2', a:'Busy' },
    { k:'働く',   kun:'はたらく',   pel:'E1-2', a:'To work' },
    { k:'作る',   kun:'つくる',     pel:'E1-2', a:'To make' },

    // ============ 11-20 ============
    { k:'人',     kun:'ひと',       pel:'E1-3', a:'Person' },
    { k:'犬',     kun:'いぬ',       pel:'E1-3', a:'Dog' },
    { k:'家族',   kun:'かぞく',     pel:'E1-3', a:'Family' },
    { k:'夕方',   kun:'ゆうがた',   pel:'E1-3', a:'Evening' },
    { k:'英語',   kun:'えいご',     pel:'E1-3', a:'English' },

    // ============ 16-25 ============
    { k:'季節',   kun:'きせつ',     pel:'E1-4', a:'Season' },
    { k:'音楽',   kun:'おんがく',   pel:'E1-4', a:'Music' },
    { k:'習う',   kun:'ならう',     pel:'E1-4', a:'To learn' },
    { k:'話す',   kun:'はなす',     pel:'E1-4', a:'To speak' },
    { k:'出かける', kun:'でかける', pel:'E1-4', a:'To go out' },

    // ============ 21-30 ============
    { k:'花',     kun:'はな',       pel:'E1-5', a:'Flower' },
    { k:'夏',     kun:'なつ',       pel:'E1-5', a:'Summer' },
    { k:'秋',     kun:'あき',       pel:'E1-5', a:'Autumn' },
    { k:'春',     kun:'はる',       pel:'E1-5', a:'Spring' },
    { k:'冬',     kun:'ふゆ',       pel:'E1-5', a:'Winter' },

    // ============ 26-35 ============
    { k:'天気',   kun:'てんき',     pel:'E1-6', a:'Weather' },
    { k:'晴れ',   kun:'はれ',       pel:'E1-6', a:'Sunny' },
    { k:'雨',     kun:'あめ',       pel:'E1-6', a:'Rain' },
    { k:'雪',     kun:'ゆき',       pel:'E1-6', a:'Snow' },
    { k:'風',     kun:'かぜ',       pel:'E1-6', a:'Wind' },

    // ============ 31-40 ============
    { k:'同じ',   kun:'おなじ',     pel:'E1-7', a:'Same' },
    { k:'暑い',   kun:'あつい',     pel:'E1-7', a:'Hot' },
    { k:'寒い',   kun:'さむい',     pel:'E1-7', a:'Cold' },
    { k:'今',     kun:'いま',       pel:'E1-7', a:'Now' },
    { k:'昨日',   kun:'きのう',     pel:'E1-7', a:'Yesterday' },

    // ============ 36-45 ============
    { k:'明日',   kun:'あした',     pel:'E1-8', a:'Tomorrow' },
    { k:'毎日',   kun:'まいにち',   pel:'E1-8', a:'Everyday' },
    { k:'強い',   kun:'つよい',     pel:'E1-8', a:'Strong' },
    { k:'町',     kun:'まち',       pel:'E1-8', a:'Town' },
    { k:'店',     kun:'みせ',       pel:'E1-8', a:'Shop' },

    // ============ 41-50 ============
    { k:'食堂',   kun:'しょくどう', pel:'E1-9', a:'Canteen' },
    { k:'便利',   kun:'べんり',     pel:'E1-9', a:'Convenient' },
    { k:'不便',   kun:'ふべん',     pel:'E1-9', a:'Inconvenient' },
    { k:'静か',   kun:'しずか',     pel:'E1-9', a:'Quiet' },
    { k:'有名',   kun:'ゆうめい',   pel:'E1-9', a:'Famous' },

    // ============ 46-55 ============
    { k:'多い',   kun:'おおい',     pel:'E1-10', a:'Many' },
    { k:'少ない', kun:'すくない',   pel:'E1-10', a:'Few' },
    { k:'遠い',   kun:'とおい',     pel:'E1-10', a:'Far' },
    { k:'道',     kun:'みち',       pel:'E1-10', a:'Road' },
    { k:'公園',   kun:'こうえん',   pel:'E1-10', a:'Park' },

    // ============ 51-60 ============
    { k:'銀行',   kun:'ぎんこう',   pel:'E1-11', a:'Bank' },
    { k:'お寺',   kun:'おてら',     pel:'E1-11', a:'Temple' },
    { k:'神社',   kun:'じんじゃ',   pel:'E1-11', a:'Shrine' },
    { k:'右',     kun:'みぎ',       pel:'E1-11', a:'Right' },
    { k:'左',     kun:'ひだり',     pel:'E1-11', a:'Left' },

    // ============ 56-65 ============
    { k:'近く',   kun:'ちかく',     pel:'E1-12', a:'Near' },
    { k:'車',     kun:'くるま',     pel:'E1-12', a:'Car' },
    { k:'送る',   kun:'おくる',     pel:'E1-12', a:'To send' },
    { k:'時間',   kun:'じかん',     pel:'E1-12', a:'Time' },
    { k:'場所',   kun:'ばしょ',     pel:'E1-12', a:'Place' },

    // ============ 61-70 ============
    { k:'駅',     kun:'えき',       pel:'E1-13', a:'Station' },
    { k:'受付',   kun:'うけつけ',   pel:'E1-13', a:'Reception' },
    { k:'門',     kun:'もん',       pel:'E1-13', a:'Gate' },
    { k:'電車',   kun:'でんしゃ',   pel:'E1-13', a:'Train' },
    { k:'待つ',   kun:'まつ',       pel:'E1-13', a:'To wait' },

    // ============ 66-75 ============
    { k:'止まる', kun:'とまる',     pel:'E1-14', a:'To stop' },
    { k:'着く',   kun:'つく',       pel:'E1-14', a:'To arrive' },
    { k:'急ぐ',   kun:'いそぐ',     pel:'E1-14', a:'To hurry' },
    { k:'お金',   kun:'おかね',     pel:'E1-14', a:'Money' },
    { k:'食事',   kun:'しょくじ',   pel:'E1-14', a:'Meal' },

    // ============ 71-80 ============
    { k:'博物館', kun:'はくぶつかん', pel:'E1-15', a:'Museum' },
    { k:'動物園', kun:'どうぶつえん', pel:'E1-15', a:'Zoo' },
    { k:'試合',   kun:'しあい',     pel:'E1-15', a:'Match' },
    { k:'楽しい', kun:'たのしい',   pel:'E1-15', a:'Fun' },
    { k:'難しい', kun:'むずかしい', pel:'E1-15', a:'Difficult' },

    // ============ 76-85 ============
    { k:'登る',   kun:'のぼる',     pel:'E1-16', a:'To climb' },
    { k:'高校',   kun:'こうこう',   pel:'E1-16', a:'High school' },
    { k:'大学',   kun:'だいがく',   pel:'E1-16', a:'University' },
    { k:'練習',   kun:'れんしゅう', pel:'E1-16', a:'Practice' },
    { k:'漢字',   kun:'かんじ',     pel:'E1-16', a:'Kanji' },

    // ============ 81-90 ============
    { k:'無料',   kun:'むりょう',   pel:'E1-17', a:'Free' },
    { k:'言う',   kun:'いう',       pel:'E1-17', a:'To say' },
    { k:'書く',   kun:'かく',       pel:'E1-17', a:'To write' },
    { k:'貸す',   kun:'かす',       pel:'E1-17', a:'To lend' },
    { k:'教える', kun:'おしえる',   pel:'E1-17', a:'To teach' },

    // ============ 86-95 ============
    { k:'説明する', kun:'せつめいする', pel:'E1-18', a:'To explain' },
    { k:'午前',   kun:'ごぜん',     pel:'E1-18', a:'AM' },
    { k:'午後',   kun:'ごご',       pel:'E1-18', a:'PM' },
    { k:'教科書', kun:'きょうかしょ', pel:'E1-18', a:'Textbook' },
    { k:'教室',   kun:'きょうしつ', pel:'E1-18', a:'Classroom' },

    // ============ 91-100 ============
    { k:'先生',   kun:'せんせい',   pel:'E1-19', a:'Teacher' },
    { k:'全部',   kun:'ぜんぶ',     pel:'E1-19', a:'All' },
    { k:'〜回',   kun:'かい',       pel:'E1-19', a:'~ times' },
    { k:'参加する', kun:'さんかする', pel:'E1-19', a:'To participate' },
    { k:'用意する', kun:'よういする', pel:'E1-19', a:'To prepare' },

    // ============ 96-105 ============
    { k:'飲み物', kun:'のみもの',   pel:'E1-20', a:'Drink' },
    { k:'お茶',   kun:'おちゃ',     pel:'E1-20', a:'Tea' },
    { k:'お酒',   kun:'おさけ',     pel:'E1-20', a:'Sake / Alcohol' },
    { k:'材料',   kun:'ざいりょう', pel:'E1-20', a:'Ingredients' },
    { k:'野菜',   kun:'やさい',     pel:'E1-20', a:'Vegetables' },

    // ============ 101-110 ============
    { k:'牛肉',   kun:'ぎゅうにく', pel:'E1-21', a:'Beef' },
    { k:'豚肉',   kun:'ぶたにく',   pel:'E1-21', a:'Pork' },
    { k:'皿',     kun:'さら',       pel:'E1-21', a:'Plate' },
    { k:'売る',   kun:'うる',       pel:'E1-21', a:'To sell' },
    { k:'持って行く', kun:'もっていく', pel:'E1-21', a:'To bring' },

    // ============ 106-115 ============
    { k:'卵',     kun:'たまご',     pel:'E1-22', a:'Egg' },
    { k:'料理',   kun:'りょうり',   pel:'E1-22', a:'Cooking' },
    { k:'お湯',   kun:'おゆ',       pel:'E1-22', a:'Hot water' },
    { k:'少し',   kun:'すこし',     pel:'E1-22', a:'A little' },
    { k:'調理方法', kun:'ちょうりほうほう', pel:'E1-22', a:'Cooking method' },

    // ============ 111-120 ============
    { k:'味',     kun:'あじ',       pel:'E1-23', a:'Taste' },
    { k:'甘い',   kun:'あまい',     pel:'E1-23', a:'Sweet' },
    { k:'辛い',   kun:'からい',     pel:'E1-23', a:'Spicy' },
    { k:'苦手（な）', kun:'にがて', pel:'E1-23', a:'Not good at / dislike' },
    { k:'コピー機', kun:'コピーき', pel:'E1-23', a:'Copy machine' },

    // ============ 116-125 ============
    { k:'数字',   kun:'すうじ',     pel:'E1-24', a:'Number' },
    { k:'電気',   kun:'でんき',     pel:'E1-24', a:'Electricity' },
    { k:'音',     kun:'おと',       pel:'E1-24', a:'Sound' },
    { k:'机',     kun:'つくえ',     pel:'E1-24', a:'Desk' },
    { k:'都合',   kun:'つごう',     pel:'E1-24', a:'Convenience' },

    // ============ 121-130 ============
    { k:'悪い',   kun:'わるい',     pel:'E1-25', a:'Bad' },
    { k:'動く',   kun:'うごく',     pel:'E1-25', a:'To move' },
    { k:'使う',   kun:'つかう',     pel:'E1-25', a:'To use' },
    { k:'終わる', kun:'おわる',     pel:'E1-25', a:'To finish' },
    { k:'お願い', kun:'おねがい',   pel:'E1-25', a:'Please' },

    // ============ 126-135 ============
    { k:'用事',   kun:'ようじ',     pel:'E1-26', a:'Errand' },
    { k:'氏名',   kun:'しめい',     pel:'E1-26', a:'Full name' },
    { k:'理由',   kun:'りゆう',     pel:'E1-26', a:'Reason' },
    { k:'連絡先', kun:'れんらくさき', pel:'E1-26', a:'Contact' },
    { k:'別に',   kun:'べつに',     pel:'E1-26', a:'Not really' },

    // ============ 131-140 ============
    { k:'早く',   kun:'はやく',     pel:'E1-27', a:'Early / quickly' },
    { k:'吸う',   kun:'すう',       pel:'E1-27', a:'To smoke / inhale' },
    { k:'取る',   kun:'とる',       pel:'E1-27', a:'To take' },
    { k:'帰る',   kun:'かえる',     pel:'E1-27', a:'To return' },
    { k:'伝える', kun:'つたえる',   pel:'E1-27', a:'To convey' },

    // ============ 136-145 ============
    { k:'熱',     kun:'ねつ',       pel:'E1-28', a:'Fever' },
    { k:'薬',     kun:'くすり',     pel:'E1-28', a:'Medicine' },
    { k:'病気',   kun:'びょうき',   pel:'E1-28', a:'Illness' },
    { k:'病院',   kun:'びょういん', pel:'E1-28', a:'Hospital' },
    { k:'医者',   kun:'いしゃ',     pel:'E1-28', a:'Doctor' },

    // ============ 141-150 ============
    { k:'痛い',   kun:'いたい',     pel:'E1-29', a:'Painful' },
    { k:'眠い',   kun:'ねむい',     pel:'E1-29', a:'Sleepy' },
    { k:'寝る',   kun:'ねる',       pel:'E1-29', a:'To sleep' },
    { k:'記入する', kun:'きにゅうする', pel:'E1-29', a:'To fill in' },
    { k:'体',     kun:'からだ',     pel:'E1-29', a:'Body' },

    // ============ 146-155 ============
    { k:'顔',     kun:'かお',       pel:'E1-30', a:'Face' },
    { k:'目',     kun:'め',         pel:'E1-30', a:'Eye' },
    { k:'耳',     kun:'みみ',       pel:'E1-30', a:'Ear' },
    { k:'口',     kun:'くち',       pel:'E1-30', a:'Mouth' },
    { k:'頭',     kun:'あたま',     pel:'E1-30', a:'Head' },

    // ============ 156-165 ============
    { k:'足',     kun:'あし',       pel:'E1-31', a:'Leg / Foot' },
    { k:'手',     kun:'て',         pel:'E1-31', a:'Hand' },
    { k:'起きる', kun:'おきる',     pel:'E1-31', a:'To wake up' },
    { k:'歩く',   kun:'あるく',     pel:'E1-31', a:'To walk' },
    { k:'走る',   kun:'はしる',     pel:'E1-31', a:'To run' },

    // ============ 166-175 ============
    { k:'運動する', kun:'うんどうする', pel:'E1-32', a:'To exercise' },
    { k:'お父さん', kun:'おとうさん', pel:'E1-32', a:'Father (polite)' },
    { k:'お母さん', kun:'おかあさん', pel:'E1-32', a:'Mother (polite)' },
    { k:'兄',     kun:'あに',       pel:'E1-32', a:'Older brother' },
    { k:'お兄さん', kun:'おにいさん', pel:'E1-32', a:'Older brother (polite)' },

    // ============ 176-180 ============
    { k:'姉',     kun:'あね',       pel:'E1-33', a:'Older sister' },
    { k:'弟',     kun:'おとうと',   pel:'E1-33', a:'Younger brother' },
    { k:'妹',     kun:'いもうと',   pel:'E1-33', a:'Younger sister' },
    { k:'夫',     kun:'おっと',     pel:'E1-33', a:'Husband' },
    { k:'妻',     kun:'つま',       pel:'E1-33', a:'Wife' }
  ],

  /* ============================================================
     ELEMENTARY 2 (A2.2) — 150 kanji
     ============================================================ */
  elementary2: [
    // ============ 181-190 ============
    { k:'山',     kun:'やま',       pel:'E2-1', a:'Mountain' },
    { k:'川',     kun:'かわ',       pel:'E2-1', a:'River' },
    { k:'海',     kun:'うみ',       pel:'E2-1', a:'Sea' },
    { k:'島',     kun:'しま',       pel:'E2-1', a:'Island' },
    { k:'森',     kun:'もり',       pel:'E2-1', a:'Forest' },

    // ============ 186-195 ============
    { k:'客',     kun:'きゃく',     pel:'E2-2', a:'Guest' },
    { k:'観光地', kun:'かんこうち', pel:'E2-2', a:'Tourist spot' },
    { k:'意味',   kun:'いみ',       pel:'E2-2', a:'Meaning' },
    { k:'経験',   kun:'けいけん',   pel:'E2-2', a:'Experience' },
    { k:'写真',   kun:'しゃしん',   pel:'E2-2', a:'Photo' },

    // ============ 191-200 ============
    { k:'歌',     kun:'うた',       pel:'E2-3', a:'Song' },
    { k:'歌手',   kun:'かしゅ',     pel:'E2-3', a:'Singer' },
    { k:'上手',   kun:'じょうず',   pel:'E2-3', a:'Good at' },
    { k:'明るい', kun:'あかるい',   pel:'E2-3', a:'Bright' },
    { k:'長い',   kun:'ながい',     pel:'E2-3', a:'Long' },

    // ============ 196-210 ============
    { k:'短い',   kun:'みじかい',   pel:'E2-4', a:'Short' },
    { k:'着る',   kun:'きる',       pel:'E2-4', a:'To wear' },
    { k:'立つ',   kun:'たつ',       pel:'E2-4', a:'To stand' },
    { k:'泣く',   kun:'なく',       pel:'E2-4', a:'To cry' },
    { k:'注文',   kun:'ちゅうもん', pel:'E2-4', a:'Order' },

    { k:'会計',   kun:'かいけい',   pel:'E2-5', a:'Bill / Total' },
    { k:'予約',   kun:'よやく',     pel:'E2-5', a:'Reservation' },
    { k:'電話番号', kun:'でんわばんごう', pel:'E2-5', a:'Phone number' },
    { k:'〜様',   kun:'さま',       pel:'E2-5', a:'Mr./Ms.' },
    { k:'ご飯',   kun:'ごはん',     pel:'E2-5', a:'Rice / Meal' },

    { k:'牛乳',   kun:'ぎゅうにゅう', pel:'E2-6', a:'Milk' },
    { k:'生',     kun:'なま',       pel:'E2-6', a:'Raw' },
    { k:'禁煙',   kun:'きんえん',   pel:'E2-6', a:'No smoking' },
    { k:'自由',   kun:'じゆう',     pel:'E2-6', a:'Free' },
    { k:'自然',   kun:'しぜん',     pel:'E2-6', a:'Nature' },

    // ============ 211-240 ============
    { k:'交通',   kun:'こうつう',   pel:'E2-7', a:'Traffic' },
    { k:'船',     kun:'ふね',       pel:'E2-7', a:'Ship' },
    { k:'自転車', kun:'じてんしゃ', pel:'E2-7', a:'Bicycle' },
    { k:'旅館',   kun:'りょかん',   pel:'E2-7', a:'Inn' },
    { k:'東京',   kun:'とうきょう', pel:'E2-7', a:'Tokyo' },

    { k:'計画',   kun:'けいかく',   pel:'E2-8', a:'Plan' },
    { k:'遊ぶ',   kun:'あそぶ',     pel:'E2-8', a:'To play' },
    { k:'調べる', kun:'しらべる',   pel:'E2-8', a:'To check' },
    { k:'出発',   kun:'しゅっぱつ', pel:'E2-8', a:'Departure' },
    { k:'運転',   kun:'うんてん',   pel:'E2-8', a:'Driving' },

    { k:'事故',   kun:'じこ',       pel:'E2-9', a:'Accident' },
    { k:'故障',   kun:'こしょう',   pel:'E2-9', a:'Breakdown' },
    { k:'指定席', kun:'していせき', pel:'E2-9', a:'Reserved seat' },
    { k:'週末',   kun:'しゅうまつ', pel:'E2-9', a:'Weekend' },
    { k:'絵',     kun:'え',         pel:'E2-9', a:'Picture' },

    { k:'空',     kun:'そら',       pel:'E2-10', a:'Sky' },
    { k:'泳ぐ',   kun:'およぐ',     pel:'E2-10', a:'To swim' },
    { k:'光る',   kun:'ひかる',     pel:'E2-10', a:'To shine' },
    { k:'到着',   kun:'とうちゃく', pel:'E2-10', a:'Arrival' },
    { k:'お知らせ', kun:'おしらせ', pel:'E2-10', a:'Notice' },

    { k:'今月',   kun:'こんげつ',   pel:'E2-11', a:'This month' },
    { k:'水道',   kun:'すいどう',   pel:'E2-11', a:'Water supply' },
    { k:'工事',   kun:'こうじ',     pel:'E2-11', a:'Construction' },
    { k:'広場',   kun:'ひろば',     pel:'E2-11', a:'Plaza' },
    { k:'場合',   kun:'ばあい',     pel:'E2-11', a:'Case / Situation' },

    { k:'中止',   kun:'ちゅうし',   pel:'E2-12', a:'Cancellation' },
    { k:'条件',   kun:'じょうけん', pel:'E2-12', a:'Condition' },
    { k:'〜以上', kun:'いじょう',   pel:'E2-12', a:'More than' },
    { k:'開く',   kun:'ひらく',     pel:'E2-12', a:'To open' },
    { k:'生産',   kun:'せいさん',   pel:'E2-12', a:'Production' },

    // ============ 241-270 ============
    { k:'塩',     kun:'しお',       pel:'E2-13', a:'Salt' },
    { k:'油',     kun:'あぶら',     pel:'E2-13', a:'Oil' },
    { k:'量',     kun:'りょう',     pel:'E2-13', a:'Amount' },
    { k:'〜方',   kun:'かた',       pel:'E2-13', a:'~ way / method' },
    { k:'〜屋',   kun:'や',         pel:'E2-13', a:'~ shop' },

    { k:'満足',   kun:'まんぞく',   pel:'E2-14', a:'Satisfaction' },
    { k:'切る',   kun:'きる',       pel:'E2-14', a:'To cut' },
    { k:'焼く',   kun:'やく',       pel:'E2-14', a:'To grill' },
    { k:'入れる', kun:'いれる',     pel:'E2-14', a:'To put in' },
    { k:'来年',   kun:'らいねん',   pel:'E2-14', a:'Next year' },

    { k:'会場',   kun:'かいじょう', pel:'E2-15', a:'Venue' },
    { k:'世界',   kun:'せかい',     pel:'E2-15', a:'World' },
    { k:'体験',   kun:'たいけん',   pel:'E2-15', a:'Experience' },
    { k:'国際交流', kun:'こくさいこうりゅう', pel:'E2-15', a:'International exchange' },

    { k:'禁止',   kun:'きんし',     pel:'E2-16', a:'Prohibition' },
    { k:'紙',     kun:'かみ',       pel:'E2-16', a:'Paper' },
    { k:'始まる', kun:'はじまる',   pel:'E2-16', a:'To begin' },
    { k:'申し込む', kun:'もうしこむ', pel:'E2-16', a:'To apply' },
    { k:'今年',   kun:'ことし',     pel:'E2-16', a:'This year' },

    { k:'昨年',   kun:'さくねん',   pel:'E2-17', a:'Last year' },
    { k:'毎年',   kun:'まいとし',   pel:'E2-17', a:'Every year' },
    { k:'文化',   kun:'ぶんか',     pel:'E2-17', a:'Culture' },
    { k:'祭り',   kun:'まつり',     pel:'E2-17', a:'Festival' },
    { k:'正月',   kun:'しょうがつ', pel:'E2-17', a:'New year' },

    { k:'〜式',   kun:'しき',       pel:'E2-18', a:'~ ceremony' },
    { k:'大人',   kun:'おとな',     pel:'E2-18', a:'Adult' },
    { k:'米',     kun:'こめ',       pel:'E2-18', a:'Rice (raw)' },
    { k:'特別',   kun:'とくべつ',   pel:'E2-18', a:'Special' },
    { k:'服',     kun:'ふく',       pel:'E2-18', a:'Clothes' },

    // ============ 271-300 ============
    { k:'袋',     kun:'ふくろ',     pel:'E2-19', a:'Bag' },
    { k:'自分',   kun:'じぶん',     pel:'E2-19', a:'Oneself' },
    { k:'店長',   kun:'てんちょう', pel:'E2-19', a:'Store manager' },
    { k:'全員',   kun:'ぜんいん',   pel:'E2-19', a:'Everyone' },
    { k:'習慣',   kun:'しゅうかん', pel:'E2-19', a:'Habit' },

    { k:'普通',   kun:'ふつう',     pel:'E2-20', a:'Normal' },
    { k:'暗い',   kun:'くらい',     pel:'E2-20', a:'Dark' },
    { k:'怒る',   kun:'おこる',     pel:'E2-20', a:'To be angry' },
    { k:'入院',   kun:'にゅういん', pel:'E2-20', a:'Hospitalized' },
    { k:'色',     kun:'いろ',       pel:'E2-20', a:'Color' },

    { k:'赤',     kun:'あか',       pel:'E2-21', a:'Red' },
    { k:'青',     kun:'あお',       pel:'E2-21', a:'Blue' },
    { k:'黒',     kun:'くろ',       pel:'E2-21', a:'Black' },
    { k:'白',     kun:'しろ',       pel:'E2-21', a:'White' },
    { k:'女性',   kun:'じょせい',   pel:'E2-21', a:'Woman' },

    { k:'男性',   kun:'だんせい',   pel:'E2-22', a:'Man' },
    { k:'急に',   kun:'きゅうに',   pel:'E2-22', a:'Suddenly' },
    { k:'営業',   kun:'えいぎょう', pel:'E2-22', a:'Business / Sales' },
    { k:'案内',   kun:'あんない',   pel:'E2-22', a:'Guide' },
    { k:'商品',   kun:'しょうひん', pel:'E2-22', a:'Product' },

    { k:'値段',   kun:'ねだん',     pel:'E2-23', a:'Price' },
    { k:'価格',   kun:'かかく',     pel:'E2-23', a:'Price' },
    { k:'消費税', kun:'しょうひぜい', pel:'E2-23', a:'Consumption tax' },
    { k:'税別',   kun:'ぜいべつ',   pel:'E2-23', a:'Tax excluded' },
    { k:'店員',   kun:'てんいん',   pel:'E2-23', a:'Store clerk' },

    { k:'親切',   kun:'しんせつ',   pel:'E2-24', a:'Kind' },
    { k:'重い',   kun:'おもい',     pel:'E2-24', a:'Heavy' },
    { k:'軽い',   kun:'かるい',     pel:'E2-24', a:'Light' },
    { k:'変わる', kun:'かわる',     pel:'E2-24', a:'To change' },
    { k:'市',     kun:'し',         pel:'E2-24', a:'City' },

    // ============ 301-330 ============
    { k:'料金',   kun:'りょうきん', pel:'E2-25', a:'Fee' },
    { k:'図書館', kun:'としょかん', pel:'E2-25', a:'Library' },
    { k:'道具',   kun:'どうぐ',     pel:'E2-25', a:'Tool' },
    { k:'〜点',   kun:'てん',       pel:'E2-25', a:'~ point' },
    { k:'必要',   kun:'ひつよう',   pel:'E2-25', a:'Necessary' },

    { k:'借りる', kun:'かりる',     pel:'E2-26', a:'To borrow' },
    { k:'返す',   kun:'かえす',     pel:'E2-26', a:'To return' },
    { k:'開く',   kun:'あく',       pel:'E2-26', a:'To open (intr.)' },
    { k:'閉まる', kun:'しまる',     pel:'E2-26', a:'To close (intr.)' },
    { k:'利用',   kun:'りよう',     pel:'E2-26', a:'Use' },

    { k:'外国',   kun:'がいこく',   pel:'E2-27', a:'Foreign country' },
    { k:'情報',   kun:'じょうほう', pel:'E2-27', a:'Information' },
    { k:'相談',   kun:'そうだん',   pel:'E2-27', a:'Consultation' },
    { k:'質問',   kun:'しつもん',   pel:'E2-27', a:'Question' },
    { k:'窓口',   kun:'まどぐち',   pel:'E2-27', a:'Window / counter' },

    { k:'郵便局', kun:'ゆうびんきょく', pel:'E2-28', a:'Post office' },
    { k:'近所',   kun:'きんじょ',   pel:'E2-28', a:'Neighborhood' },
    { k:'自動',   kun:'じどう',     pel:'E2-28', a:'Automatic' },
    { k:'洗う',   kun:'あらう',     pel:'E2-28', a:'To wash' },
    { k:'入力',   kun:'にゅうりょく', pel:'E2-28', a:'Input' },

    { k:'温度',   kun:'おんど',     pel:'E2-29', a:'Temperature' },
    { k:'危険',   kun:'きけん',     pel:'E2-29', a:'Danger' },
    { k:'種類',   kun:'しゅるい',   pel:'E2-29', a:'Type / kind' },
    { k:'消す',   kun:'けす',       pel:'E2-29', a:'To turn off' },
    { k:'捨てる', kun:'すてる',     pel:'E2-29', a:'To throw away' },

    { k:'出す',   kun:'だす',       pel:'E2-30', a:'To take out' },
    { k:'分ける', kun:'わける',     pel:'E2-30', a:'To divide' },
    { k:'燃える', kun:'もえる',     pel:'E2-30', a:'To burn' },
    { k:'決める', kun:'きめる',     pel:'E2-30', a:'To decide' },
    { k:'設定',   kun:'せってい',   pel:'E2-30', a:'Setting' }
  ]

};
