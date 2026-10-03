/* ============================================================
   DATA KANJI IRODORI — STARTER + ELEMENTARY 1 + ELEMENTARY 2
   ------------------------------------------------------------
   Sumber : Buku Irodori (Japan Foundation)
   Field  :
     k   : kanji
     kun : furigana / cara baca
     pel : pelajaran / urutan
     a   : arti (bahasa Indonesia)
   ============================================================ */

window.KANJI_IRODORI = {

  /* ============================================================
     STARTER (A1) — 107 kanji
     ============================================================ */
  starter: [
    // ============ Pelajaran 1 ============
    { k:'名前',   kun:'なまえ',     pel:'S-1', a:'Nama' },
    { k:'国',     kun:'くに',       pel:'S-1', a:'Negara' },
    { k:'私',     kun:'わたし',     pel:'S-1', a:'Saya' },

    // ============ Pelajaran 2 ============
    { k:'父',     kun:'ちち',       pel:'S-2', a:'Ayah' },
    { k:'母',     kun:'はは',       pel:'S-2', a:'Ibu' },
    { k:'子ども', kun:'こども',     pel:'S-2', a:'Anak' },
    { k:'日本',   kun:'にほん',     pel:'S-2', a:'Jepang' },

    // ============ Pelajaran 3 ============
    { k:'水',     kun:'みず',       pel:'S-3', a:'Air' },
    { k:'食べます', kun:'たべます', pel:'S-3', a:'Makan' },
    { k:'飲みます', kun:'のみます', pel:'S-3', a:'Minum' },

    // ============ Pelajaran 4 ============
    { k:'魚',     kun:'さかな',     pel:'S-4', a:'Ikan' },
    { k:'肉',     kun:'にく',       pel:'S-4', a:'Daging' },
    { k:'好き（な）', kun:'すき',   pel:'S-4', a:'Suka' },

    // ============ Pelajaran 5 ============
    { k:'家',     kun:'いえ',       pel:'S-5', a:'Rumah' },
    { k:'新しい', kun:'あたらしい', pel:'S-5', a:'Baru' },
    { k:'広い',   kun:'ひろい',     pel:'S-5', a:'Luas' },
    { k:'古い',   kun:'ふるい',     pel:'S-5', a:'Lama / Tua' },

    // ============ Pelajaran 6 ============
    { k:'月',     kun:'げつ',       pel:'S-6', a:'Bulan / Senin' },
    { k:'火',     kun:'か',         pel:'S-6', a:'Api / Selasa' },
    { k:'水',     kun:'すい',       pel:'S-6', a:'Air / Rabu' },
    { k:'木',     kun:'もく',       pel:'S-6', a:'Pohon / Kamis' },
    { k:'金',     kun:'きん',       pel:'S-6', a:'Emas / Jumat' },
    { k:'土',     kun:'ど',         pel:'S-6', a:'Tanah / Sabtu' },
    { k:'日',     kun:'にち',       pel:'S-6', a:'Matahari / Minggu' },
    { k:'〜曜日', kun:'ようび',     pel:'S-6', a:'Hari (~)' },

    // ============ Pelajaran 7 ============
    { k:'朝',     kun:'あさ',       pel:'S-7', a:'Pagi' },
    { k:'昼',     kun:'ひる',       pel:'S-7', a:'Siang' },
    { k:'夜',     kun:'よる',       pel:'S-7', a:'Malam' },

    // ============ Pelajaran 8 ============
    { k:'読みます', kun:'よみます', pel:'S-8', a:'Membaca' },
    { k:'聞きます', kun:'ききます', pel:'S-8', a:'Mendengar' },
    { k:'見ます', kun:'みます',     pel:'S-8', a:'Melihat' },
    { k:'本',     kun:'ほん',       pel:'S-8', a:'Buku' },
    { k:'友だち', kun:'ともだち',   pel:'S-8', a:'Teman' },
    { k:'何',     kun:'なに',       pel:'S-8', a:'Apa' },

    // ============ Pelajaran 9 ============
    { k:'〜年',   kun:'ねん',       pel:'S-9', a:'Tahun (~)' },
    { k:'〜月',   kun:'がつ',       pel:'S-9', a:'Bulan (~)' },
    { k:'〜日',   kun:'にち',       pel:'S-9', a:'Tanggal (~)' },
    { k:'今日',   kun:'きょう',     pel:'S-9', a:'Hari ini' },
    { k:'今週',   kun:'こんしゅう', pel:'S-9', a:'Minggu ini' },
    { k:'今度',   kun:'こんど',     pel:'S-9', a:'Lain kali' },

    // ============ Pelajaran 10 ============
    { k:'東',     kun:'ひがし',     pel:'S-10', a:'Timur' },
    { k:'西',     kun:'にし',       pel:'S-10', a:'Barat' },
    { k:'南',     kun:'みなみ',     pel:'S-10', a:'Selatan' },
    { k:'北',     kun:'きた',       pel:'S-10', a:'Utara' },
    { k:'会社',   kun:'かいしゃ',   pel:'S-10', a:'Perusahaan' },
    { k:'来ます', kun:'きます',     pel:'S-10', a:'Datang' },
    { k:'行きます', kun:'いきます', pel:'S-10', a:'Pergi' },
    { k:'乗ります', kun:'のります', pel:'S-10', a:'Naik' },

    // ============ Pelajaran 11 ============
    { k:'大きい', kun:'おおきい',   pel:'S-11', a:'Besar' },
    { k:'小さい', kun:'ちいさい',   pel:'S-11', a:'Kecil' },
    { k:'高い',   kun:'たかい',     pel:'S-11', a:'Tinggi / Mahal' },
    { k:'低い',   kun:'ひくい',     pel:'S-11', a:'Rendah' },
    { k:'前',     kun:'まえ',       pel:'S-11', a:'Depan' },
    { k:'後ろ',   kun:'うしろ',     pel:'S-11', a:'Belakang' },
    { k:'横',     kun:'よこ',       pel:'S-11', a:'Samping' },

    // ============ Pelajaran 12 ============
    { k:'入口',   kun:'いりぐち',   pel:'S-12', a:'Pintu masuk' },
    { k:'出口',   kun:'でぐち',     pel:'S-12', a:'Pintu keluar' },
    { k:'〜階',   kun:'かい',       pel:'S-12', a:'Lantai (~)' },
    { k:'押す',   kun:'おす',       pel:'S-12', a:'Dorong' },
    { k:'引く',   kun:'ひく',       pel:'S-12', a:'Tarik' },
    { k:'安い',   kun:'やすい',     pel:'S-12', a:'Murah' },

    // ============ Pelajaran 13 ============
    { k:'一',     kun:'いち',       pel:'S-13', a:'Satu' },
    { k:'二',     kun:'に',         pel:'S-13', a:'Dua' },
    { k:'三',     kun:'さん',       pel:'S-13', a:'Tiga' },
    { k:'四',     kun:'よん',       pel:'S-13', a:'Empat' },
    { k:'五',     kun:'ご',         pel:'S-13', a:'Lima' },
    { k:'六',     kun:'ろく',       pel:'S-13', a:'Enam' },
    { k:'七',     kun:'なな',       pel:'S-13', a:'Tujuh' },
    { k:'八',     kun:'はち',       pel:'S-13', a:'Delapan' },
    { k:'九',     kun:'きゅう',     pel:'S-13', a:'Sembilan' },
    { k:'十',     kun:'じゅう',     pel:'S-13', a:'Sepuluh' },

    // ============ Pelajaran 14 ============
    { k:'百',     kun:'ひゃく',     pel:'S-14', a:'Seratus' },
    { k:'千',     kun:'せん',       pel:'S-14', a:'Seribu' },
    { k:'万',     kun:'まん',       pel:'S-14', a:'Sepuluh ribu' },
    { k:'〜円',   kun:'えん',       pel:'S-14', a:'Yen (~)' },
    { k:'休み',   kun:'やすみ',     pel:'S-14', a:'Libur' },
    { k:'映画',   kun:'えいが',     pel:'S-14', a:'Film' },
    { k:'日本語', kun:'にほんご',   pel:'S-14', a:'Bahasa Jepang' },
    { k:'勉強します', kun:'べんきょうします', pel:'S-14', a:'Belajar' },
    { k:'買います', kun:'かいます', pel:'S-14', a:'Membeli' },

    // ============ Pelajaran 15 ============
    { k:'温泉',   kun:'おんせん',   pel:'S-15', a:'Pemandian air panas' },
    { k:'予定',   kun:'よてい',     pel:'S-15', a:'Rencana' },
    { k:'来週',   kun:'らいしゅう', pel:'S-15', a:'Minggu depan' },
    { k:'会います', kun:'あいます', pel:'S-15', a:'Bertemu' },
    { k:'入ります', kun:'はいります', pel:'S-15', a:'Masuk' },
    { k:'旅行します', kun:'りょこうします', pel:'S-15', a:'Bepergian' },

    // ============ Pelajaran 16 ============
    { k:'学生',   kun:'がくせい',   pel:'S-16', a:'Pelajar' },
    { k:'仕事',   kun:'しごと',     pel:'S-16', a:'Pekerjaan' },
    { k:'学校',   kun:'がっこう',   pel:'S-16', a:'Sekolah' },
    { k:'元気（な）', kun:'げんき', pel:'S-16', a:'Sehat / Bersemangat' },
    { k:'生活',   kun:'せいかつ',   pel:'S-16', a:'Kehidupan' },
    { k:'忙しい', kun:'いそがしい', pel:'S-16', a:'Sibuk' },
    { k:'去年',   kun:'きょねん',   pel:'S-16', a:'Tahun lalu' },
    { k:'働く',   kun:'はたらく',   pel:'S-16', a:'Bekerja' },
    { k:'先週',   kun:'せんしゅう', pel:'S-16', a:'Minggu lalu' },
    { k:'作る',   kun:'つくる',     pel:'S-16', a:'Membuat' },

    // ============ Pelajaran 17 ============
    { k:'人',     kun:'ひと',       pel:'S-17', a:'Orang' },
    { k:'〜人',   kun:'にん',       pel:'S-17', a:'Orang (~)' },
    { k:'〜人',   kun:'じん',       pel:'S-17', a:'Kebangsaan (~)' },
    { k:'犬',     kun:'いぬ',       pel:'S-17', a:'Anjing' },
    { k:'家族',   kun:'かぞく',     pel:'S-17', a:'Keluarga' },
    { k:'夕方',   kun:'ゆうがた',   pel:'S-17', a:'Sore hari' },

    // ============ Pelajaran 18 ============
    { k:'季節',   kun:'きせつ',     pel:'S-18', a:'Musim' },
    { k:'花',     kun:'はな',       pel:'S-18', a:'Bunga' },
    { k:'春',     kun:'はる',       pel:'S-18', a:'Musim semi' },
    { k:'夏',     kun:'なつ',       pel:'S-18', a:'Musim panas' },
    { k:'秋',     kun:'あき',       pel:'S-18', a:'Musim gugur' },
    { k:'冬',     kun:'ふゆ',       pel:'S-18', a:'Musim dingin' },
    { k:'暑',     kun:'あつ',       pel:'S-18', a:'Panas (cuaca)' },
    { k:'寒',     kun:'さむ',       pel:'S-18', a:'Dingin (cuaca)' }
  ],

  /* ============================================================
     ELEMENTARY 1 (A2.1) — 180 kanji
     ============================================================ */
  elementary1: [
    // ============ 1-5 ============
    { k:'学生',   kun:'がくせい',   pel:'E1-1', a:'Pelajar' },
    { k:'学校',   kun:'がっこう',   pel:'E1-1', a:'Sekolah' },
    { k:'生活',   kun:'せいかつ',   pel:'E1-1', a:'Kehidupan' },
    { k:'去年',   kun:'きょねん',   pel:'E1-1', a:'Tahun lalu' },
    { k:'先週',   kun:'せんしゅう', pel:'E1-1', a:'Minggu lalu' },

    // ============ 6-10 ============
    { k:'仕事',   kun:'しごと',     pel:'E1-2', a:'Pekerjaan' },
    { k:'元気',   kun:'げんき',     pel:'E1-2', a:'Sehat' },
    { k:'忙しい', kun:'いそがしい', pel:'E1-2', a:'Sibuk' },
    { k:'働く',   kun:'はたらく',   pel:'E1-2', a:'Bekerja' },
    { k:'作る',   kun:'つくる',     pel:'E1-2', a:'Membuat' },

    // ============ 11-15 ============
    { k:'人',     kun:'ひと',       pel:'E1-3', a:'Orang' },
    { k:'犬',     kun:'いぬ',       pel:'E1-3', a:'Anjing' },
    { k:'家族',   kun:'かぞく',     pel:'E1-3', a:'Keluarga' },
    { k:'夕方',   kun:'ゆうがた',   pel:'E1-3', a:'Sore hari' },
    { k:'英語',   kun:'えいご',     pel:'E1-3', a:'Bahasa Inggris' },

    // ============ 16-20 ============
    { k:'季節',   kun:'きせつ',     pel:'E1-4', a:'Musim' },
    { k:'音楽',   kun:'おんがく',   pel:'E1-4', a:'Musik' },
    { k:'習う',   kun:'ならう',     pel:'E1-4', a:'Belajar' },
    { k:'話す',   kun:'はなす',     pel:'E1-4', a:'Berbicara' },
    { k:'出かける', kun:'でかける', pel:'E1-4', a:'Pergi keluar' },

    // ============ 21-25 ============
    { k:'花',     kun:'はな',       pel:'E1-5', a:'Bunga' },
    { k:'夏',     kun:'なつ',       pel:'E1-5', a:'Musim panas' },
    { k:'秋',     kun:'あき',       pel:'E1-5', a:'Musim gugur' },
    { k:'春',     kun:'はる',       pel:'E1-5', a:'Musim semi' },
    { k:'冬',     kun:'ふゆ',       pel:'E1-5', a:'Musim dingin' },

    // ============ 26-30 ============
    { k:'天気',   kun:'てんき',     pel:'E1-6', a:'Cuaca' },
    { k:'晴れ',   kun:'はれ',       pel:'E1-6', a:'Cerah' },
    { k:'雨',     kun:'あめ',       pel:'E1-6', a:'Hujan' },
    { k:'雪',     kun:'ゆき',       pel:'E1-6', a:'Salju' },
    { k:'風',     kun:'かぜ',       pel:'E1-6', a:'Angin' },

    // ============ 31-35 ============
    { k:'同じ',   kun:'おなじ',     pel:'E1-7', a:'Sama' },
    { k:'暑い',   kun:'あつい',     pel:'E1-7', a:'Panas (cuaca)' },
    { k:'寒い',   kun:'さむい',     pel:'E1-7', a:'Dingin (cuaca)' },
    { k:'今',     kun:'いま',       pel:'E1-7', a:'Sekarang' },
    { k:'昨日',   kun:'きのう',     pel:'E1-7', a:'Kemarin' },

    // ============ 36-40 ============
    { k:'明日',   kun:'あした',     pel:'E1-8', a:'Besok' },
    { k:'毎日',   kun:'まいにち',   pel:'E1-8', a:'Setiap hari' },
    { k:'強い',   kun:'つよい',     pel:'E1-8', a:'Kuat' },
    { k:'町',     kun:'まち',       pel:'E1-8', a:'Kota' },
    { k:'店',     kun:'みせ',       pel:'E1-8', a:'Toko' },

    // ============ 41-45 ============
    { k:'食堂',   kun:'しょくどう', pel:'E1-9', a:'Kantin' },
    { k:'便利',   kun:'べんり',     pel:'E1-9', a:'Praktis' },
    { k:'不便',   kun:'ふべん',     pel:'E1-9', a:'Tidak praktis' },
    { k:'静か',   kun:'しずか',     pel:'E1-9', a:'Tenang' },
    { k:'有名',   kun:'ゆうめい',   pel:'E1-9', a:'Terkenal' },

    // ============ 46-50 ============
    { k:'多い',   kun:'おおい',     pel:'E1-10', a:'Banyak' },
    { k:'少ない', kun:'すくない',   pel:'E1-10', a:'Sedikit' },
    { k:'遠い',   kun:'とおい',     pel:'E1-10', a:'Jauh' },
    { k:'道',     kun:'みち',       pel:'E1-10', a:'Jalan' },
    { k:'公園',   kun:'こうえん',   pel:'E1-10', a:'Taman' },

    // ============ 51-55 ============
    { k:'銀行',   kun:'ぎんこう',   pel:'E1-11', a:'Bank' },
    { k:'お寺',   kun:'おてら',     pel:'E1-11', a:'Kuil Buddha' },
    { k:'神社',   kun:'じんじゃ',   pel:'E1-11', a:'Kuil Shinto' },
    { k:'右',     kun:'みぎ',       pel:'E1-11', a:'Kanan' },
    { k:'左',     kun:'ひだり',     pel:'E1-11', a:'Kiri' },

    // ============ 56-60 ============
    { k:'近く',   kun:'ちかく',     pel:'E1-12', a:'Dekat' },
    { k:'車',     kun:'くるま',     pel:'E1-12', a:'Mobil' },
    { k:'送る',   kun:'おくる',     pel:'E1-12', a:'Mengirim' },
    { k:'時間',   kun:'じかん',     pel:'E1-12', a:'Waktu' },
    { k:'場所',   kun:'ばしょ',     pel:'E1-12', a:'Tempat' },

    // ============ 61-65 ============
    { k:'駅',     kun:'えき',       pel:'E1-13', a:'Stasiun' },
    { k:'受付',   kun:'うけつけ',   pel:'E1-13', a:'Resepsionis' },
    { k:'門',     kun:'もん',       pel:'E1-13', a:'Gerbang' },
    { k:'電車',   kun:'でんしゃ',   pel:'E1-13', a:'Kereta listrik' },
    { k:'待つ',   kun:'まつ',       pel:'E1-13', a:'Menunggu' },

    // ============ 66-70 ============
    { k:'止まる', kun:'とまる',     pel:'E1-14', a:'Berhenti' },
    { k:'着く',   kun:'つく',       pel:'E1-14', a:'Tiba' },
    { k:'急ぐ',   kun:'いそぐ',     pel:'E1-14', a:'Bergegas' },
    { k:'お金',   kun:'おかね',     pel:'E1-14', a:'Uang' },
    { k:'食事',   kun:'しょくじ',   pel:'E1-14', a:'Makan' },

    // ============ 71-75 ============
    { k:'博物館', kun:'はくぶつかん', pel:'E1-15', a:'Museum' },
    { k:'動物園', kun:'どうぶつえん', pel:'E1-15', a:'Kebun binatang' },
    { k:'試合',   kun:'しあい',     pel:'E1-15', a:'Pertandingan' },
    { k:'楽しい', kun:'たのしい',   pel:'E1-15', a:'Menyenangkan' },
    { k:'難しい', kun:'むずかしい', pel:'E1-15', a:'Sulit' },

    // ============ 76-80 ============
    { k:'登る',   kun:'のぼる',     pel:'E1-16', a:'Mendaki' },
    { k:'高校',   kun:'こうこう',   pel:'E1-16', a:'SMA' },
    { k:'大学',   kun:'だいがく',   pel:'E1-16', a:'Universitas' },
    { k:'練習',   kun:'れんしゅう', pel:'E1-16', a:'Latihan' },
    { k:'漢字',   kun:'かんじ',     pel:'E1-16', a:'Kanji' },

    // ============ 81-85 ============
    { k:'無料',   kun:'むりょう',   pel:'E1-17', a:'Gratis' },
    { k:'言う',   kun:'いう',       pel:'E1-17', a:'Berkata' },
    { k:'書く',   kun:'かく',       pel:'E1-17', a:'Menulis' },
    { k:'貸す',   kun:'かす',       pel:'E1-17', a:'Meminjamkan' },
    { k:'教える', kun:'おしえる',   pel:'E1-17', a:'Mengajar' },

    // ============ 86-90 ============
    { k:'説明する', kun:'せつめいする', pel:'E1-18', a:'Menjelaskan' },
    { k:'午前',   kun:'ごぜん',     pel:'E1-18', a:'Pagi (AM)' },
    { k:'午後',   kun:'ごご',       pel:'E1-18', a:'Sore (PM)' },
    { k:'教科書', kun:'きょうかしょ', pel:'E1-18', a:'Buku pelajaran' },
    { k:'教室',   kun:'きょうしつ', pel:'E1-18', a:'Ruang kelas' },

    // ============ 91-95 ============
    { k:'先生',   kun:'せんせい',   pel:'E1-19', a:'Guru' },
    { k:'全部',   kun:'ぜんぶ',     pel:'E1-19', a:'Semuanya' },
    { k:'〜回',   kun:'かい',       pel:'E1-19', a:'Kali (~)' },
    { k:'参加する', kun:'さんかする', pel:'E1-19', a:'Ikut serta' },
    { k:'用意する', kun:'よういする', pel:'E1-19', a:'Menyiapkan' },

    // ============ 96-100 ============
    { k:'飲み物', kun:'のみもの',   pel:'E1-20', a:'Minuman' },
    { k:'お茶',   kun:'おちゃ',     pel:'E1-20', a:'Teh' },
    { k:'お酒',   kun:'おさけ',     pel:'E1-20', a:'Sake / Alkohol' },
    { k:'材料',   kun:'ざいりょう', pel:'E1-20', a:'Bahan' },
    { k:'野菜',   kun:'やさい',     pel:'E1-20', a:'Sayuran' },

    // ============ 101-105 ============
    { k:'牛肉',   kun:'ぎゅうにく', pel:'E1-21', a:'Daging sapi' },
    { k:'豚肉',   kun:'ぶたにく',   pel:'E1-21', a:'Daging babi' },
    { k:'皿',     kun:'さら',       pel:'E1-21', a:'Piring' },
    { k:'売る',   kun:'うる',       pel:'E1-21', a:'Menjual' },
    { k:'持って行く', kun:'もっていく', pel:'E1-21', a:'Membawa pergi' },

    // ============ 106-110 ============
    { k:'卵',     kun:'たまご',     pel:'E1-22', a:'Telur' },
    { k:'料理',   kun:'りょうり',   pel:'E1-22', a:'Masakan' },
    { k:'お湯',   kun:'おゆ',       pel:'E1-22', a:'Air panas' },
    { k:'少し',   kun:'すこし',     pel:'E1-22', a:'Sedikit' },
    { k:'調理方法', kun:'ちょうりほうほう', pel:'E1-22', a:'Cara memasak' },

    // ============ 111-115 ============
    { k:'味',     kun:'あじ',       pel:'E1-23', a:'Rasa' },
    { k:'甘い',   kun:'あまい',     pel:'E1-23', a:'Manis' },
    { k:'辛い',   kun:'からい',     pel:'E1-23', a:'Pedas' },
    { k:'苦手（な）', kun:'にがて', pel:'E1-23', a:'Tidak suka / lemah dalam' },
    { k:'コピー機', kun:'コピーき', pel:'E1-23', a:'Mesin fotokopi' },

    // ============ 116-120 ============
    { k:'数字',   kun:'すうじ',     pel:'E1-24', a:'Angka' },
    { k:'電気',   kun:'でんき',     pel:'E1-24', a:'Listrik' },
    { k:'音',     kun:'おと',       pel:'E1-24', a:'Suara' },
    { k:'机',     kun:'つくえ',     pel:'E1-24', a:'Meja' },
    { k:'都合',   kun:'つごう',     pel:'E1-24', a:'Kondisi / kesempatan' },

    // ============ 121-125 ============
    { k:'悪い',   kun:'わるい',     pel:'E1-25', a:'Buruk' },
    { k:'動く',   kun:'うごく',     pel:'E1-25', a:'Bergerak' },
    { k:'使う',   kun:'つかう',     pel:'E1-25', a:'Menggunakan' },
    { k:'終わる', kun:'おわる',     pel:'E1-25', a:'Selesai' },
    { k:'お願い', kun:'おねがい',   pel:'E1-25', a:'Tolong / Permintaan' },

    // ============ 126-130 ============
    { k:'用事',   kun:'ようじ',     pel:'E1-26', a:'Urusan' },
    { k:'氏名',   kun:'しめい',     pel:'E1-26', a:'Nama lengkap' },
    { k:'理由',   kun:'りゆう',     pel:'E1-26', a:'Alasan' },
    { k:'連絡先', kun:'れんらくさき', pel:'E1-26', a:'Kontak' },
    { k:'別に',   kun:'べつに',     pel:'E1-26', a:'Tidak juga' },

    // ============ 131-135 ============
    { k:'早く',   kun:'はやく',     pel:'E1-27', a:'Cepat / Awal' },
    { k:'吸う',   kun:'すう',       pel:'E1-27', a:'Menghisap / Merokok' },
    { k:'取る',   kun:'とる',       pel:'E1-27', a:'Mengambil' },
    { k:'帰る',   kun:'かえる',     pel:'E1-27', a:'Pulang' },
    { k:'伝える', kun:'つたえる',   pel:'E1-27', a:'Menyampaikan' },

    // ============ 136-140 ============
    { k:'熱',     kun:'ねつ',       pel:'E1-28', a:'Demam' },
    { k:'薬',     kun:'くすり',     pel:'E1-28', a:'Obat' },
    { k:'病気',   kun:'びょうき',   pel:'E1-28', a:'Penyakit' },
    { k:'病院',   kun:'びょういん', pel:'E1-28', a:'Rumah sakit' },
    { k:'医者',   kun:'いしゃ',     pel:'E1-28', a:'Dokter' },

    // ============ 141-145 ============
    { k:'痛い',   kun:'いたい',     pel:'E1-29', a:'Sakit (rasa)' },
    { k:'眠い',   kun:'ねむい',     pel:'E1-29', a:'Mengantuk' },
    { k:'寝る',   kun:'ねる',       pel:'E1-29', a:'Tidur' },
    { k:'記入する', kun:'きにゅうする', pel:'E1-29', a:'Mengisi formulir' },
    { k:'体',     kun:'からだ',     pel:'E1-29', a:'Badan' },

    // ============ 146-150 ============
    { k:'顔',     kun:'かお',       pel:'E1-30', a:'Wajah' },
    { k:'目',     kun:'め',         pel:'E1-30', a:'Mata' },
    { k:'耳',     kun:'みみ',       pel:'E1-30', a:'Telinga' },
    { k:'口',     kun:'くち',       pel:'E1-30', a:'Mulut' },
    { k:'頭',     kun:'あたま',     pel:'E1-30', a:'Kepala' },

    // ============ 151-155 ============
    { k:'足',     kun:'あし',       pel:'E1-31', a:'Kaki' },
    { k:'手',     kun:'て',         pel:'E1-31', a:'Tangan' },
    { k:'起きる', kun:'おきる',     pel:'E1-31', a:'Bangun' },
    { k:'歩く',   kun:'あるく',     pel:'E1-31', a:'Berjalan' },
    { k:'走る',   kun:'はしる',     pel:'E1-31', a:'Berlari' },

    // ============ 156-160 ============
    { k:'運動する', kun:'うんどうする', pel:'E1-32', a:'Berolahraga' },
    { k:'お父さん', kun:'おとうさん', pel:'E1-32', a:'Ayah (sopan)' },
    { k:'お母さん', kun:'おかあさん', pel:'E1-32', a:'Ibu (sopan)' },
    { k:'兄',     kun:'あに',       pel:'E1-32', a:'Kakak laki-laki' },
    { k:'お兄さん', kun:'おにいさん', pel:'E1-32', a:'Kakak laki-laki (sopan)' },

    // ============ 161-165 ============
    { k:'姉',     kun:'あね',       pel:'E1-33', a:'Kakak perempuan' },
    { k:'弟',     kun:'おとうと',   pel:'E1-33', a:'Adik laki-laki' },
    { k:'妹',     kun:'いもうと',   pel:'E1-33', a:'Adik perempuan' },
    { k:'夫',     kun:'おっと',     pel:'E1-33', a:'Suami' },
    { k:'妻',     kun:'つま',       pel:'E1-33', a:'Istri' },

    // ============ 166-180 ============
    { k:'両親',   kun:'りょうしん', pel:'E1-34', a:'Orang tua' },
    { k:'男の子', kun:'おとこのこ', pel:'E1-34', a:'Anak laki-laki' },
    { k:'女の子', kun:'おんなのこ', pel:'E1-34', a:'Anak perempuan' },
    { k:'お祝い', kun:'おいわい',   pel:'E1-34', a:'Perayaan' },
    { k:'誕生日', kun:'たんじょうび', pel:'E1-34', a:'Ulang tahun' },
    { k:'結婚',   kun:'けっこん',   pel:'E1-35', a:'Pernikahan' },
    { k:'時計',   kun:'とけい',     pel:'E1-35', a:'Jam' },
    { k:'幸せ',   kun:'しあわせ',   pel:'E1-35', a:'Bahagia' },
    { k:'生まれる', kun:'うまれる', pel:'E1-35', a:'Lahir' },
    { k:'思う',   kun:'おもう',     pel:'E1-35', a:'Berpikir / Merasa' },
    { k:'選ぶ',   kun:'えらぶ',     pel:'E1-36', a:'Memilih' },
    { k:'合格する', kun:'ごうかくする', pel:'E1-36', a:'Lulus ujian' },
    { k:'一',     kun:'いち',       pel:'E1-36', a:'Satu' },
    { k:'十',     kun:'じゅう',     pel:'E1-36', a:'Sepuluh' },
    { k:'百',     kun:'ひゃく',     pel:'E1-36', a:'Seratus' }
  ],

  /* ============================================================
     ELEMENTARY 2 (A2.2) — 150 kanji
     ============================================================ */
  elementary2: [
    // ============ 181-190 ============
    { k:'山',     kun:'やま',       pel:'E2-1', a:'Gunung' },
    { k:'川',     kun:'かわ',       pel:'E2-1', a:'Sungai' },
    { k:'海',     kun:'うみ',       pel:'E2-1', a:'Laut' },
    { k:'島',     kun:'しま',       pel:'E2-1', a:'Pulau' },
    { k:'森',     kun:'もり',       pel:'E2-1', a:'Hutan' },
    { k:'客',     kun:'きゃく',     pel:'E2-2', a:'Tamu' },
    { k:'観光地', kun:'かんこうち', pel:'E2-2', a:'Tempat wisata' },
    { k:'意味',   kun:'いみ',       pel:'E2-2', a:'Arti' },
    { k:'経験',   kun:'けいけん',   pel:'E2-2', a:'Pengalaman' },
    { k:'写真',   kun:'しゃしん',   pel:'E2-2', a:'Foto' },

    // ============ 191-200 ============
    { k:'歌',     kun:'うた',       pel:'E2-3', a:'Lagu' },
    { k:'歌手',   kun:'かしゅ',     pel:'E2-3', a:'Penyanyi' },
    { k:'上手',   kun:'じょうず',   pel:'E2-3', a:'Pintar / Mahir' },
    { k:'明るい', kun:'あかるい',   pel:'E2-3', a:'Terang / Ceria' },
    { k:'長い',   kun:'ながい',     pel:'E2-3', a:'Panjang' },
    { k:'短い',   kun:'みじかい',   pel:'E2-4', a:'Pendek' },
    { k:'着る',   kun:'きる',       pel:'E2-4', a:'Memakai' },
    { k:'立つ',   kun:'たつ',       pel:'E2-4', a:'Berdiri' },
    { k:'泣く',   kun:'なく',       pel:'E2-4', a:'Menangis' },
    { k:'注文',   kun:'ちゅうもん', pel:'E2-4', a:'Pesanan' },

    // ============ 201-210 ============
    { k:'会計',   kun:'かいけい',   pel:'E2-5', a:'Pembayaran / Total' },
    { k:'予約',   kun:'よやく',     pel:'E2-5', a:'Reservasi' },
    { k:'電話番号', kun:'でんわばんごう', pel:'E2-5', a:'Nomor telepon' },
    { k:'〜様',   kun:'さま',       pel:'E2-5', a:'Tuan / Nyonya (~)' },
    { k:'ご飯',   kun:'ごはん',     pel:'E2-5', a:'Nasi / Makanan' },
    { k:'牛乳',   kun:'ぎゅうにゅう', pel:'E2-6', a:'Susu sapi' },
    { k:'生',     kun:'なま',       pel:'E2-6', a:'Mentah' },
    { k:'禁煙',   kun:'きんえん',   pel:'E2-6', a:'Dilarang merokok' },
    { k:'自由',   kun:'じゆう',     pel:'E2-6', a:'Bebas' },
    { k:'自然',   kun:'しぜん',     pel:'E2-6', a:'Alam' },

    // ============ 211-220 ============
    { k:'交通',   kun:'こうつう',   pel:'E2-7', a:'Lalu lintas / Transportasi' },
    { k:'船',     kun:'ふね',       pel:'E2-7', a:'Kapal' },
    { k:'自転車', kun:'じてんしゃ', pel:'E2-7', a:'Sepeda' },
    { k:'旅館',   kun:'りょかん',   pel:'E2-7', a:'Penginapan (Jepang)' },
    { k:'東京',   kun:'とうきょう', pel:'E2-7', a:'Tokyo' },
    { k:'計画',   kun:'けいかく',   pel:'E2-8', a:'Rencana' },
    { k:'遊ぶ',   kun:'あそぶ',     pel:'E2-8', a:'Bermain' },
    { k:'調べる', kun:'しらべる',   pel:'E2-8', a:'Memeriksa / Mencari tahu' },
    { k:'出発',   kun:'しゅっぱつ', pel:'E2-8', a:'Keberangkatan' },
    { k:'運転',   kun:'うんてん',   pel:'E2-8', a:'Mengemudi' },

    // ============ 221-230 ============
    { k:'事故',   kun:'じこ',       pel:'E2-9', a:'Kecelakaan' },
    { k:'故障',   kun:'こしょう',   pel:'E2-9', a:'Kerusakan' },
    { k:'指定席', kun:'していせき', pel:'E2-9', a:'Kursi reservasi' },
    { k:'週末',   kun:'しゅうまつ', pel:'E2-9', a:'Akhir pekan' },
    { k:'絵',     kun:'え',         pel:'E2-9', a:'Gambar / Lukisan' },
    { k:'空',     kun:'そら',       pel:'E2-10', a:'Langit' },
    { k:'泳ぐ',   kun:'およぐ',     pel:'E2-10', a:'Berenang' },
    { k:'光る',   kun:'ひかる',     pel:'E2-10', a:'Bersinar' },
    { k:'到着',   kun:'とうちゃく', pel:'E2-10', a:'Kedatangan' },
    { k:'お知らせ', kun:'おしらせ', pel:'E2-10', a:'Pemberitahuan' },

    // ============ 231-240 ============
    { k:'今月',   kun:'こんげつ',   pel:'E2-11', a:'Bulan ini' },
    { k:'水道',   kun:'すいどう',   pel:'E2-11', a:'Saluran air' },
    { k:'工事',   kun:'こうじ',     pel:'E2-11', a:'Pekerjaan konstruksi' },
    { k:'広場',   kun:'ひろば',     pel:'E2-11', a:'Lapangan' },
    { k:'場合',   kun:'ばあい',     pel:'E2-11', a:'Situasi / Kasus' },
    { k:'中止',   kun:'ちゅうし',   pel:'E2-12', a:'Pembatalan' },
    { k:'条件',   kun:'じょうけん', pel:'E2-12', a:'Kondisi / Syarat' },
    { k:'〜以上', kun:'いじょう',   pel:'E2-12', a:'Lebih dari (~)' },
    { k:'開く',   kun:'ひらく',     pel:'E2-12', a:'Membuka' },
    { k:'生産',   kun:'せいさん',   pel:'E2-12', a:'Produksi' },

    // ============ 241-250 ============
    { k:'塩',     kun:'しお',       pel:'E2-13', a:'Garam' },
    { k:'油',     kun:'あぶら',     pel:'E2-13', a:'Minyak' },
    { k:'量',     kun:'りょう',     pel:'E2-13', a:'Jumlah' },
    { k:'〜方',   kun:'かた',       pel:'E2-13', a:'Cara (~)' },
    { k:'〜屋',   kun:'や',         pel:'E2-13', a:'Toko (~)' },
    { k:'満足',   kun:'まんぞく',   pel:'E2-14', a:'Puas' },
    { k:'切る',   kun:'きる',       pel:'E2-14', a:'Memotong' },
    { k:'焼く',   kun:'やく',       pel:'E2-14', a:'Memanggang' },
    { k:'入れる', kun:'いれる',     pel:'E2-14', a:'Memasukkan' },
    { k:'来年',   kun:'らいねん',   pel:'E2-14', a:'Tahun depan' },

    // ============ 251-260 ============
    { k:'会場',   kun:'かいじょう', pel:'E2-15', a:'Tempat acara' },
    { k:'世界',   kun:'せかい',     pel:'E2-15', a:'Dunia' },
    { k:'体験',   kun:'たいけん',   pel:'E2-15', a:'Pengalaman (mencoba)' },
    { k:'国際交流', kun:'こくさいこうりゅう', pel:'E2-15', a:'Pertukaran internasional' },
    { k:'禁止',   kun:'きんし',     pel:'E2-16', a:'Larangan' },
    { k:'紙',     kun:'かみ',       pel:'E2-16', a:'Kertas' },
    { k:'始まる', kun:'はじまる',   pel:'E2-16', a:'Dimulai' },
    { k:'申し込む', kun:'もうしこむ', pel:'E2-16', a:'Mendaftar' },
    { k:'今年',   kun:'ことし',     pel:'E2-16', a:'Tahun ini' },
    { k:'昨年',   kun:'さくねん',   pel:'E2-17', a:'Tahun lalu' },

    // ============ 261-270 ============
    { k:'毎年',   kun:'まいとし',   pel:'E2-17', a:'Setiap tahun' },
    { k:'文化',   kun:'ぶんか',     pel:'E2-17', a:'Budaya' },
    { k:'祭り',   kun:'まつり',     pel:'E2-17', a:'Festival' },
    { k:'正月',   kun:'しょうがつ', pel:'E2-17', a:'Tahun baru' },
    { k:'〜式',   kun:'しき',       pel:'E2-18', a:'Upacara (~)' },
    { k:'大人',   kun:'おとな',     pel:'E2-18', a:'Orang dewasa' },
    { k:'米',     kun:'こめ',       pel:'E2-18', a:'Beras' },
    { k:'特別',   kun:'とくべつ',   pel:'E2-18', a:'Istimewa' },
    { k:'服',     kun:'ふく',       pel:'E2-18', a:'Pakaian' },
    { k:'袋',     kun:'ふくろ',     pel:'E2-19', a:'Kantong' },

    // ============ 271-280 ============
    { k:'自分',   kun:'じぶん',     pel:'E2-19', a:'Diri sendiri' },
    { k:'店長',   kun:'てんちょう', pel:'E2-19', a:'Manajer toko' },
    { k:'全員',   kun:'ぜんいん',   pel:'E2-19', a:'Semua orang' },
    { k:'習慣',   kun:'しゅうかん', pel:'E2-19', a:'Kebiasaan' },
    { k:'普通',   kun:'ふつう',     pel:'E2-20', a:'Biasa' },
    { k:'暗い',   kun:'くらい',     pel:'E2-20', a:'Gelap' },
    { k:'怒る',   kun:'おこる',     pel:'E2-20', a:'Marah' },
    { k:'入院',   kun:'にゅういん', pel:'E2-20', a:'Rawat inap' },
    { k:'色',     kun:'いろ',       pel:'E2-20', a:'Warna' },
    { k:'赤',     kun:'あか',       pel:'E2-21', a:'Merah' },

    // ============ 281-290 ============
    { k:'青',     kun:'あお',       pel:'E2-21', a:'Biru' },
    { k:'黒',     kun:'くろ',       pel:'E2-21', a:'Hitam' },
    { k:'白',     kun:'しろ',       pel:'E2-21', a:'Putih' },
    { k:'女性',   kun:'じょせい',   pel:'E2-21', a:'Wanita' },
    { k:'男性',   kun:'だんせい',   pel:'E2-22', a:'Pria' },
    { k:'急に',   kun:'きゅうに',   pel:'E2-22', a:'Tiba-tiba' },
    { k:'営業',   kun:'えいぎょう', pel:'E2-22', a:'Operasional / Penjualan' },
    { k:'案内',   kun:'あんない',   pel:'E2-22', a:'Panduan / Mengantar' },
    { k:'商品',   kun:'しょうひん', pel:'E2-22', a:'Produk' },
    { k:'値段',   kun:'ねだん',     pel:'E2-23', a:'Harga' },

    // ============ 291-300 ============
    { k:'価格',   kun:'かかく',     pel:'E2-23', a:'Harga' },
    { k:'消費税', kun:'しょうひぜい', pel:'E2-23', a:'Pajak konsumsi' },
    { k:'税別',   kun:'ぜいべつ',   pel:'E2-23', a:'Tanpa pajak' },
    { k:'店員',   kun:'てんいん',   pel:'E2-23', a:'Pegawai toko' },
    { k:'親切',   kun:'しんせつ',   pel:'E2-24', a:'Ramah' },
    { k:'重い',   kun:'おもい',     pel:'E2-24', a:'Berat' },
    { k:'軽い',   kun:'かるい',     pel:'E2-24', a:'Ringan' },
    { k:'変わる', kun:'かわる',     pel:'E2-24', a:'Berubah' },
    { k:'市',     kun:'し',         pel:'E2-24', a:'Kota' },
    { k:'料金',   kun:'りょうきん', pel:'E2-25', a:'Biaya' },

    // ============ 301-310 ============
    { k:'図書館', kun:'としょかん', pel:'E2-25', a:'Perpustakaan' },
    { k:'道具',   kun:'どうぐ',     pel:'E2-25', a:'Alat' },
    { k:'〜点',   kun:'てん',       pel:'E2-25', a:'Poin (~)' },
    { k:'必要',   kun:'ひつよう',   pel:'E2-25', a:'Perlu' },
    { k:'借りる', kun:'かりる',     pel:'E2-26', a:'Meminjam' },
    { k:'返す',   kun:'かえす',     pel:'E2-26', a:'Mengembalikan' },
    { k:'開く',   kun:'あく',       pel:'E2-26', a:'Terbuka' },
    { k:'閉まる', kun:'しまる',     pel:'E2-26', a:'Tertutup' },
    { k:'利用',   kun:'りよう',     pel:'E2-26', a:'Menggunakan' },
    { k:'外国',   kun:'がいこく',   pel:'E2-27', a:'Luar negeri' },

    // ============ 311-320 ============
    { k:'情報',   kun:'じょうほう', pel:'E2-27', a:'Informasi' },
    { k:'相談',   kun:'そうだん',   pel:'E2-27', a:'Konsultasi' },
    { k:'質問',   kun:'しつもん',   pel:'E2-27', a:'Pertanyaan' },
    { k:'窓口',   kun:'まどぐち',   pel:'E2-27', a:'Loket' },
    { k:'郵便局', kun:'ゆうびんきょく', pel:'E2-28', a:'Kantor pos' },
    { k:'近所',   kun:'きんじょ',   pel:'E2-28', a:'Lingkungan sekitar' },
    { k:'自動',   kun:'じどう',     pel:'E2-28', a:'Otomatis' },
    { k:'洗う',   kun:'あらう',     pel:'E2-28', a:'Mencuci' },
    { k:'入力',   kun:'にゅうりょく', pel:'E2-28', a:'Memasukkan data' },
    { k:'温度',   kun:'おんど',     pel:'E2-29', a:'Suhu' },

    // ============ 321-330 ============
    { k:'危険',   kun:'きけん',     pel:'E2-29', a:'Bahaya' },
    { k:'種類',   kun:'しゅるい',   pel:'E2-29', a:'Jenis' },
    { k:'消す',   kun:'けす',       pel:'E2-29', a:'Mematikan / Menghapus' },
    { k:'捨てる', kun:'すてる',     pel:'E2-29', a:'Membuang' },
    { k:'出す',   kun:'だす',       pel:'E2-30', a:'Mengeluarkan' },
    { k:'分ける', kun:'わける',     pel:'E2-30', a:'Membagi' },
    { k:'燃える', kun:'もえる',     pel:'E2-30', a:'Terbakar' },
    { k:'決める', kun:'きめる',     pel:'E2-30', a:'Menetapkan' },
    { k:'設定',   kun:'せってい',   pel:'E2-30', a:'Pengaturan' }
  ]

};
