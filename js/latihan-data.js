/* ============================================================
   BANK DATA LATIHAN — ASAHI MANDIRI
   ------------------------------------------------------------
   Setiap level punya:
     title : judul latihan
     desc  : deskripsi singkat
     soal  : array soal
       q       : pertanyaan
       options : 4 pilihan
       answer  : index jawaban benar (0-3)
       explain : pembahasan
   ============================================================ */

window.LATIHAN_DATA = {

  /* ============================================================
     LEVEL 1 — Kosakata Dasar
     ============================================================ */
  'latihan-1': {
    title: 'Kosakata Dasar',
    desc: 'Uji hafalan kosakata dasar bahasa Jepang: salam, angka, dan kata sehari-hari.',
    soal: [
      { q:'Apa arti dari 「こんにちは」?',       options:['Selamat pagi','Selamat siang','Selamat malam','Terima kasih'], answer:1, explain:'「こんにちは」 berarti "selamat siang" atau sapaan umum di siang hari.' },
      { q:'Apa arti dari 「ありがとう」?',       options:['Maaf','Permisi','Terima kasih','Selamat tinggal'], answer:2, explain:'「ありがとう」 berarti "terima kasih".' },
      { q:'Bagaimana cara membaca 「おはよう」?', options:['Ohayou','Konnichiwa','Konbanwa','Oyasumi'], answer:0, explain:'「おはよう」 dibaca "ohayou" — selamat pagi (santai).' },
      { q:'Apa arti dari 「さようなら」?',       options:['Halo','Selamat tinggal','Maaf','Silakan'], answer:1, explain:'「さようなら」 berarti "selamat tinggal" (formal).' },
      { q:'Apa arti dari 「こんばんは」?',       options:['Selamat pagi','Selamat siang','Selamat malam','Selamat tidur'], answer:2, explain:'「こんばんは」 berarti "selamat malam" (saat bertemu).' },
      { q:'Apa arti dari 「すみません」?',       options:['Selamat pagi','Terima kasih','Permisi / Maaf','Selamat malam'], answer:2, explain:'「すみません」 berarti "permisi" atau "maaf".' },
      { q:'Apa arti dari 「はい」?',             options:['Tidak','Ya','Mungkin','Nanti'], answer:1, explain:'「はい」 berarti "ya".' },
      { q:'Apa arti dari 「いいえ」?',           options:['Ya','Tidak','Terima kasih','Maaf'], answer:1, explain:'「いいえ」 berarti "tidak".' },
      { q:'Bagaimana cara membaca 「水」?',       options:['Mizu','Kaze','Hi','Tsuchi'], answer:0, explain:'「水」 dibaca "mizu" — air.' },
      { q:'Apa arti dari 「食べる」?',           options:['Minum','Makan','Tidur','Berjalan'], answer:1, explain:'「食べる」 berarti "makan".' },
      { q:'Apa arti dari 「飲む」?',             options:['Makan','Minum','Melihat','Mendengar'], answer:1, explain:'「飲む」 berarti "minum".' },
      { q:'Apa arti dari 「行く」?',             options:['Datang','Pergi','Pulang','Kembali'], answer:1, explain:'「行く」 berarti "pergi".' },
      { q:'Apa arti dari 「見る」?',             options:['Mendengar','Melihat','Berbicara','Membaca'], answer:1, explain:'「見る」 berarti "melihat".' },
      { q:'Apa arti dari 「友達」?',             options:['Keluarga','Teman','Guru','Tetangga'], answer:1, explain:'「友達」 berarti "teman".' },
      { q:'Apa arti dari 「学校」?',             options:['Rumah','Sekolah','Kantor','Toko'], answer:1, explain:'「学校」 berarti "sekolah".' },
      { q:'Apa arti dari 「先生」?',             options:['Murid','Guru','Dokter','Petani'], answer:1, explain:'「先生」 berarti "guru" (juga dipakai untuk dokter).' },
      { q:'Apa arti dari 「学生」?',             options:['Guru','Siswa','Karyawan','Petani'], answer:1, explain:'「学生」 berarti "siswa / pelajar".' },
      { q:'Apa arti dari 「本」?',               options:['Pensil','Buku','Kertas','Pulpen'], answer:1, explain:'「本」 berarti "buku".' },
      { q:'Apa arti dari 「猫」?',               options:['Anjing','Kucing','Burung','Ikan'], answer:1, explain:'「猫」 berarti "kucing".' },
      { q:'Apa arti dari 「犬」?',               options:['Kucing','Anjing','Kelinci','Kuda'], answer:1, explain:'「犬」 berarti "anjing".' }
    ]
  },

  /* ============================================================
     LEVEL 2 — Hiragana Dasar
     ============================================================ */
  'latihan-2': {
    title: 'Hiragana Dasar',
    desc: 'Uji hafalan huruf hiragana baris あ〜な.',
    soal: [
      { q:'Huruf 「あ」 dibaca...', options:['a','i','u','e'], answer:0, explain:'「あ」 dibaca "a".' },
      { q:'Huruf 「い」 dibaca...', options:['a','i','u','e'], answer:1, explain:'「い」 dibaca "i".' },
      { q:'Huruf 「う」 dibaca...', options:['a','i','u','e'], answer:2, explain:'「う」 dibaca "u".' },
      { q:'Huruf 「え」 dibaca...', options:['a','i','u','e'], answer:3, explain:'「え」 dibaca "e".' },
      { q:'Huruf 「お」 dibaca...', options:['a','i','o','e'], answer:2, explain:'「お」 dibaca "o".' },
      { q:'Huruf 「か」 dibaca...', options:['ka','ki','ku','ke'], answer:0, explain:'「か」 dibaca "ka".' },
      { q:'Huruf 「き」 dibaca...', options:['ka','ki','ku','ke'], answer:1, explain:'「き」 dibaca "ki".' },
      { q:'Huruf 「く」 dibaca...', options:['ka','ki','ku','ko'], answer:2, explain:'「く」 dibaca "ku".' },
      { q:'Huruf 「け」 dibaca...', options:['ka','ki','ke','ko'], answer:2, explain:'「け」 dibaca "ke".' },
      { q:'Huruf 「こ」 dibaca...', options:['ka','ko','ku','ki'], answer:1, explain:'「こ」 dibaca "ko".' },
      { q:'Huruf 「さ」 dibaca...', options:['sa','shi','su','se'], answer:0, explain:'「さ」 dibaca "sa".' },
      { q:'Huruf 「し」 dibaca...', options:['sa','shi','su','so'], answer:1, explain:'「し」 dibaca "shi".' },
      { q:'Huruf 「す」 dibaca...', options:['sa','shi','su','se'], answer:2, explain:'「す」 dibaca "su".' },
      { q:'Huruf 「せ」 dibaca...', options:['sa','se','so','su'], answer:1, explain:'「せ」 dibaca "se".' },
      { q:'Huruf 「そ」 dibaca...', options:['sa','so','su','se'], answer:1, explain:'「そ」 dibaca "so".' },
      { q:'Huruf 「た」 dibaca...', options:['ta','chi','tsu','te'], answer:0, explain:'「た」 dibaca "ta".' },
      { q:'Huruf 「ち」 dibaca...', options:['ta','chi','tsu','te'], answer:1, explain:'「ち」 dibaca "chi".' },
      { q:'Huruf 「つ」 dibaca...', options:['ta','chi','tsu','te'], answer:2, explain:'「つ」 dibaca "tsu".' },
      { q:'Huruf 「な」 dibaca...', options:['na','ni','nu','ne'], answer:0, explain:'「な」 dibaca "na".' },
      { q:'Huruf 「に」 dibaca...', options:['na','ni','nu','ne'], answer:1, explain:'「に」 dibaca "ni".' }
    ]
  },

  /* ============================================================
     LEVEL 3 — Katakana Dasar
     ============================================================ */
  'latihan-3': {
    title: 'Katakana Dasar',
    desc: 'Uji hafalan huruf katakana baris ア〜ナ.',
    soal: [
      { q:'Huruf 「ア」 dibaca...', options:['a','i','u','e'], answer:0, explain:'「ア」 dibaca "a".' },
      { q:'Huruf 「イ」 dibaca...', options:['a','i','u','e'], answer:1, explain:'「イ」 dibaca "i".' },
      { q:'Huruf 「ウ」 dibaca...', options:['a','i','u','e'], answer:2, explain:'「ウ」 dibaca "u".' },
      { q:'Huruf 「エ」 dibaca...', options:['a','i','u','e'], answer:3, explain:'「エ」 dibaca "e".' },
      { q:'Huruf 「オ」 dibaca...', options:['a','i','o','e'], answer:2, explain:'「オ」 dibaca "o".' },
      { q:'Huruf 「カ」 dibaca...', options:['ka','ki','ku','ke'], answer:0, explain:'「カ」 dibaca "ka".' },
      { q:'Huruf 「キ」 dibaca...', options:['ka','ki','ku','ke'], answer:1, explain:'「キ」 dibaca "ki".' },
      { q:'Huruf 「ク」 dibaca...', options:['ka','ki','ku','ko'], answer:2, explain:'「ク」 dibaca "ku".' },
      { q:'Huruf 「ケ」 dibaca...', options:['ka','ki','ke','ko'], answer:2, explain:'「ケ」 dibaca "ke".' },
      { q:'Huruf 「コ」 dibaca...', options:['ka','ko','ku','ki'], answer:1, explain:'「コ」 dibaca "ko".' },
      { q:'Huruf 「サ」 dibaca...', options:['sa','shi','su','se'], answer:0, explain:'「サ」 dibaca "sa".' },
      { q:'Huruf 「シ」 dibaca...', options:['sa','shi','su','so'], answer:1, explain:'「シ」 dibaca "shi".' },
      { q:'Huruf 「ス」 dibaca...', options:['sa','shi','su','se'], answer:2, explain:'「ス」 dibaca "su".' },
      { q:'Huruf 「セ」 dibaca...', options:['sa','se','so','su'], answer:1, explain:'「セ」 dibaca "se".' },
      { q:'Huruf 「ソ」 dibaca...', options:['sa','so','su','se'], answer:1, explain:'「ソ」 dibaca "so".' },
      { q:'Huruf 「タ」 dibaca...', options:['ta','chi','tsu','te'], answer:0, explain:'「タ」 dibaca "ta".' },
      { q:'Huruf 「チ」 dibaca...', options:['ta','chi','tsu','te'], answer:1, explain:'「チ」 dibaca "chi".' },
      { q:'Huruf 「ツ」 dibaca...', options:['ta','chi','tsu','te'], answer:2, explain:'「ツ」 dibaca "tsu".' },
      { q:'Huruf 「テ」 dibaca...', options:['ta','chi','tsu','te'], answer:3, explain:'「テ」 dibaca "te".' },
      { q:'Huruf 「ナ」 dibaca...', options:['na','ni','nu','ne'], answer:0, explain:'「ナ」 dibaca "na".' }
    ]
  },

  /* ============================================================
     LEVEL 4 — Angka & Hitungan
     ============================================================ */
  'latihan-4': {
    title: 'Angka & Hitungan',
    desc: 'Uji hafalan angka bahasa Jepang dari 1 sampai 20.',
    soal: [
      { q:'Bagaimana cara membaca 「一」?',  options:['ichi','ni','san','yon'], answer:0, explain:'「一」 dibaca "ichi" — satu.' },
      { q:'Bagaimana cara membaca 「二」?',  options:['ichi','ni','san','yon'], answer:1, explain:'「二」 dibaca "ni" — dua.' },
      { q:'Bagaimana cara membaca 「三」?',  options:['ichi','ni','san','yon'], answer:2, explain:'「三」 dibaca "san" — tiga.' },
      { q:'Bagaimana cara membaca 「四」?',  options:['ichi','ni','san','yon'], answer:3, explain:'「四」 dibaca "yon" atau "shi" — empat.' },
      { q:'Bagaimana cara membaca 「五」?',  options:['go','roku','nana','hachi'], answer:0, explain:'「五」 dibaca "go" — lima.' },
      { q:'Bagaimana cara membaca 「六」?',  options:['go','roku','nana','hachi'], answer:1, explain:'「六」 dibaca "roku" — enam.' },
      { q:'Bagaimana cara membaca 「七」?',  options:['go','roku','nana','hachi'], answer:2, explain:'「七」 dibaca "nana" atau "shichi" — tujuh.' },
      { q:'Bagaimana cara membaca 「八」?',  options:['go','roku','nana','hachi'], answer:3, explain:'「八」 dibaca "hachi" — delapan.' },
      { q:'Bagaimana cara membaca 「九」?',  options:['kyuu','juu','hyaku','sen'], answer:0, explain:'「九」 dibaca "kyuu" — sembilan.' },
      { q:'Bagaimana cara membaca 「十」?',  options:['kyuu','juu','hyaku','sen'], answer:1, explain:'「十」 dibaca "juu" — sepuluh.' },
      { q:'Bagaimana cara membaca 「十一」?', options:['juu-ichi','juu-ni','juu-san','juu-yon'], answer:0, explain:'「十一」 dibaca "juu-ichi" — sebelas.' },
      { q:'Bagaimana cara membaca 「十二」?', options:['juu-ichi','juu-ni','juu-san','juu-yon'], answer:1, explain:'「十二」 dibaca "juu-ni" — dua belas.' },
      { q:'Bagaimana cara membaca 「十三」?', options:['juu-ichi','juu-ni','juu-san','juu-yon'], answer:2, explain:'「十三」 dibaca "juu-san" — tiga belas.' },
      { q:'Bagaimana cara membaca 「十四」?', options:['juu-ichi','juu-ni','juu-san','juu-yon'], answer:3, explain:'「十四」 dibaca "juu-yon" — empat belas.' },
      { q:'Bagaimana cara membaca 「十五」?', options:['juu-go','juu-roku','juu-nana','juu-hachi'], answer:0, explain:'「十五」 dibaca "juu-go" — lima belas.' },
      { q:'Bagaimana cara membaca 「十六」?', options:['juu-go','juu-roku','juu-nana','juu-hachi'], answer:1, explain:'「十六」 dibaca "juu-roku" — enam belas.' },
      { q:'Bagaimana cara membaca 「十七」?', options:['juu-go','juu-roku','juu-nana','juu-hachi'], answer:2, explain:'「十七」 dibaca "juu-nana" — tujuh belas.' },
      { q:'Bagaimana cara membaca 「十八」?', options:['juu-go','juu-roku','juu-nana','juu-hachi'], answer:3, explain:'「十八」 dibaca "juu-hachi" — delapan belas.' },
      { q:'Bagaimana cara membaca 「十九」?', options:['juu-kyuu','ni-juu','san-juu','hyaku'], answer:0, explain:'「十九」 dibaca "juu-kyuu" — sembilan belas.' },
      { q:'Bagaimana cara membaca 「二十」?', options:['juu-kyuu','ni-juu','san-juu','hyaku'], answer:1, explain:'「二十」 dibaca "ni-juu" — dua puluh.' }
    ]
  },

  /* ============================================================
     LEVEL 5 — Sapaan Sehari-hari
     ============================================================ */
  'latihan-5': {
    title: 'Sapaan Sehari-hari',
    desc: 'Uji pemahaman sapaan bahasa Jepang dan waktu penggunaannya.',
    soal: [
      { q:'Sapaan yang diucapkan pada pagi hari adalah...',        options:['おはよう','こんにちは','こんばんは','おやすみ'], answer:0, explain:'「おはよう」 dipakai pada pagi hari.' },
      { q:'Sapaan yang diucapkan pada siang hari adalah...',       options:['おはよう','こんにちは','こんばんは','おやすみ'], answer:1, explain:'「こんにちは」 dipakai pada siang hari.' },
      { q:'Sapaan yang diucapkan pada malam hari (bertemu) adalah...', options:['おはよう','こんにちは','こんばんは','おやすみ'], answer:2, explain:'「こんばんは」 dipakai pada malam hari saat bertemu.' },
      { q:'Ucapan sebelum tidur adalah...',                        options:['おはよう','こんにちは','こんばんは','おやすみなさい'], answer:3, explain:'「おやすみなさい」 diucapkan sebelum tidur.' },
      { q:'Ucapan saat pertama kali bertemu adalah...',            options:['はじめまして','お久しぶりです','さようなら','おやすみ'], answer:0, explain:'「はじめまして」 diucapkan saat pertama kali bertemu.' },
      { q:'Ucapan saat bertemu lagi setelah lama tidak jumpa adalah...', options:['はじめまして','お久しぶりです','さようなら','おやすみ'], answer:1, explain:'「お久しぶりです」 berarti "lama tak jumpa".' },
      { q:'Ucapan selamat datang kepada pelanggan toko adalah...', options:['いらっしゃいませ','ようこそ','おかえりなさい','ただいま'], answer:0, explain:'「いらっしゃいませ」 diucapkan kepada pelanggan toko.' },
      { q:'Ucapan "selamat datang" (umum) adalah...',              options:['いらっしゃいませ','ようこそ','おかえりなさい','ただいま'], answer:1, explain:'「ようこそ」 berarti "selamat datang".' },
      { q:'Ucapan saat pergi meninggalkan rumah adalah...',        options:['いってきます','いってらっしゃい','ただいま','おかえりなさい'], answer:0, explain:'「いってきます」 = "saya pergi dulu".' },
      { q:'Balasan saat orang lain pergi adalah...',               options:['いってきます','いってらっしゃい','ただいま','おかえりなさい'], answer:1, explain:'「いってらっしゃい」 = "hati-hati di jalan".' },
      { q:'Ucapan saat pulang ke rumah adalah...',                 options:['いってきます','いってらっしゃい','ただいま','おかえりなさい'], answer:2, explain:'「ただいま」 = "saya pulang".' },
      { q:'Balasan saat orang lain pulang adalah...',              options:['いってきます','いってらっしゃい','ただいま','おかえりなさい'], answer:3, explain:'「おかえりなさい」 = "selamat datang kembali".' },
      { q:'「お疲れ様です」 artinya...',                            options:['Terima kasih atas kerja kerasnya','Selamat malam','Selamat pagi','Maaf'], answer:0, explain:'「お疲れ様です」 = terima kasih atas kerja kerasnya.' },
      { q:'「よろしくお願いします」 artinya...',                     options:['Mohon bantuannya','Terima kasih','Selamat tinggal','Maaf'], answer:0, explain:'「よろしくお願いします」 = mohon bantuannya / salam hormat.' },
      { q:'「さようなら」 biasanya dipakai saat...',                options:['Bertemu','Berpisah','Makan','Tidur'], answer:1, explain:'「さようなら」 dipakai saat berpisah (formal).' },
      { q:'「じゃあね」 biasanya dipakai saat...',                  options:['Bertemu','Berpisah (santai)','Makan','Tidur'], answer:1, explain:'「じゃあね」 = sampai jumpa (santai).' },
      { q:'「また明日」 artinya...',                                options:['Sampai jumpa besok','Selamat pagi','Selamat malam','Maaf'], answer:0, explain:'「また明日」 = sampai jumpa besok.' },
      { q:'「お元気で」 artinya...',                                options:['Jaga diri baik-baik','Selamat datang','Sampai jumpa','Maaf'], answer:0, explain:'「お元気で」 = jaga diri baik-baik (saat berpisah lama).' },
      { q:'「おはようございます」 adalah versi ... dari 「おはよう」.', options:['Sopan','Santai','Kasar','Anak-anak'], answer:0, explain:'「おはようございます」 adalah versi sopan dari 「おはよう」.' },
      { q:'「おやすみ」 adalah versi ... dari 「おやすみなさい」.',   options:['Sopan','Santai','Kasar','Anak-anak'], answer:1, explain:'「おやすみ」 adalah versi santai dari 「おやすみなさい」.' }
    ]
  }

  /* Level 6-50 menyusul */

};
