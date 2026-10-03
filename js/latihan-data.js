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
  },
  /* ============================================================
     LEVEL 6 — Keluarga & Orang
     ============================================================ */
  'latihan-6': {
    title: 'Keluarga & Orang',
    desc: 'Uji hafalan sebutan anggota keluarga dan orang dalam bahasa Jepang.',
    soal: [
      { q:'Apa arti dari 「家族」?',         options:['Keluarga','Teman','Guru','Tetangga'], answer:0, explain:'「家族」 (kazoku) = keluarga.' },
      { q:'Apa arti dari 「父」?',           options:['Ayah','Ibu','Kakak','Adik'], answer:0, explain:'「父」 (chichi) = ayah (sendiri).' },
      { q:'Apa arti dari 「母」?',           options:['Ayah','Ibu','Kakak','Adik'], answer:1, explain:'「母」 (haha) = ibu (sendiri).' },
      { q:'Apa arti dari 「お父さん」?',     options:['Ayah (orang lain)','Ibu','Kakak','Adik'], answer:0, explain:'「お父さん」 (otousan) = ayah (orang lain / panggilan).' },
      { q:'Apa arti dari 「お母さん」?',     options:['Ayah','Ibu (orang lain)','Kakak','Adik'], answer:1, explain:'「お母さん」 (okaasan) = ibu (orang lain / panggilan).' },
      { q:'Apa arti dari 「兄」?',           options:['Kakak laki-laki','Kakak perempuan','Adik laki-laki','Adik perempuan'], answer:0, explain:'「兄」 (ani) = kakak laki-laki (sendiri).' },
      { q:'Apa arti dari 「姉」?',           options:['Kakak laki-laki','Kakak perempuan','Adik laki-laki','Adik perempuan'], answer:1, explain:'「姉」 (ane) = kakak perempuan (sendiri).' },
      { q:'Apa arti dari 「弟」?',           options:['Kakak laki-laki','Kakak perempuan','Adik laki-laki','Adik perempuan'], answer:2, explain:'「弟」 (otouto) = adik laki-laki.' },
      { q:'Apa arti dari 「妹」?',           options:['Kakak laki-laki','Kakak perempuan','Adik laki-laki','Adik perempuan'], answer:3, explain:'「妹」 (imouto) = adik perempuan.' },
      { q:'Apa arti dari 「お兄さん」?',     options:['Kakak laki-laki (orang lain)','Kakak perempuan','Adik laki-laki','Adik perempuan'], answer:0, explain:'「お兄さん」 (oniisan) = kakak laki-laki (orang lain).' },
      { q:'Apa arti dari 「お姉さん」?',     options:['Kakak laki-laki','Kakak perempuan (orang lain)','Adik laki-laki','Adik perempuan'], answer:1, explain:'「お姉さん」 (oneesan) = kakak perempuan (orang lain).' },
      { q:'Apa arti dari 「祖父」?',         options:['Kakek','Nenek','Paman','Bibi'], answer:0, explain:'「祖父」 (sofu) = kakek (sendiri).' },
      { q:'Apa arti dari 「祖母」?',         options:['Kakek','Nenek','Paman','Bibi'], answer:1, explain:'「祖母」 (sobo) = nenek (sendiri).' },
      { q:'Apa arti dari 「おじいさん」?',   options:['Kakek (orang lain)','Nenek','Paman','Bibi'], answer:0, explain:'「おじいさん」 (ojiisan) = kakek (orang lain).' },
      { q:'Apa arti dari 「おばあさん」?',   options:['Kakek','Nenek (orang lain)','Paman','Bibi'], answer:1, explain:'「おばあさん」 (obaasan) = nenek (orang lain).' },
      { q:'Apa arti dari 「おじさん」?',     options:['Paman','Bibi','Kakek','Nenek'], answer:0, explain:'「おじさん」 (ojisan) = paman.' },
      { q:'Apa arti dari 「おばさん」?',     options:['Paman','Bibi','Kakek','Nenek'], answer:1, explain:'「おばさん」 (obasan) = bibi.' },
      { q:'Apa arti dari 「夫」?',           options:['Suami','Istri','Anak','Orang tua'], answer:0, explain:'「夫」 (otto) = suami.' },
      { q:'Apa arti dari 「妻」?',           options:['Suami','Istri','Anak','Orang tua'], answer:1, explain:'「妻」 (tsuma) = istri.' },
      { q:'Apa arti dari 「子供」?',         options:['Suami','Istri','Anak','Orang tua'], answer:2, explain:'「子供」 (kodomo) = anak.' }
    ]
  },

  /* ============================================================
     LEVEL 7 — Makanan & Minuman
     ============================================================ */
  'latihan-7': {
    title: 'Makanan & Minuman',
    desc: 'Uji hafalan nama makanan dan minuman dalam bahasa Jepang.',
    soal: [
      { q:'Apa arti dari 「ご飯」?',       options:['Nasi','Roti','Mie','Daging'], answer:0, explain:'「ご飯」 (gohan) = nasi / makanan.' },
      { q:'Apa arti dari 「パン」?',       options:['Nasi','Roti','Mie','Daging'], answer:1, explain:'「パン」 (pan) = roti.' },
      { q:'Apa arti dari 「麺」?',         options:['Nasi','Roti','Mie','Daging'], answer:2, explain:'「麺」 (men) = mie.' },
      { q:'Apa arti dari 「肉」?',         options:['Nasi','Roti','Mie','Daging'], answer:3, explain:'「肉」 (niku) = daging.' },
      { q:'Apa arti dari 「魚」?',         options:['Ikan','Ayam','Sayur','Buah'], answer:0, explain:'「魚」 (sakana) = ikan.' },
      { q:'Apa arti dari 「野菜」?',       options:['Ikan','Sayur','Buah','Daging'], answer:1, explain:'「野菜」 (yasai) = sayur.' },
      { q:'Apa arti dari 「果物」?',       options:['Ikan','Sayur','Buah','Daging'], answer:2, explain:'「果物」 (kudamono) = buah.' },
      { q:'Apa arti dari 「卵」?',         options:['Telur','Susu','Keju','Mentega'], answer:0, explain:'「卵」 (tamago) = telur.' },
      { q:'Apa arti dari 「牛乳」?',       options:['Telur','Susu','Keju','Mentega'], answer:1, explain:'「牛乳」 (gyuunyuu) = susu sapi.' },
      { q:'Apa arti dari 「水」?',         options:['Air','Teh','Kopi','Jus'], answer:0, explain:'「水」 (mizu) = air.' },
      { q:'Apa arti dari 「お茶」?',       options:['Air','Teh','Kopi','Jus'], answer:1, explain:'「お茶」 (ocha) = teh.' },
      { q:'Apa arti dari 「コーヒー」?',   options:['Air','Teh','Kopi','Jus'], answer:2, explain:'「コーヒー」 (koohii) = kopi.' },
      { q:'Apa arti dari 「ジュース」?',   options:['Air','Teh','Kopi','Jus'], answer:3, explain:'「ジュース」 (juusu) = jus.' },
      { q:'Apa arti dari 「ビール」?',     options:['Bir','Sake','Anggur','Wiski'], answer:0, explain:'「ビール」 (biiru) = bir.' },
      { q:'Apa arti dari 「寿司」?',       options:['Sushi','Ramen','Tempura','Udon'], answer:0, explain:'「寿司」 (sushi) = sushi.' },
      { q:'Apa arti dari 「ラーメン」?',   options:['Sushi','Ramen','Tempura','Udon'], answer:1, explain:'「ラーメン」 (raamen) = ramen.' },
      { q:'Apa arti dari 「天ぷら」?',     options:['Sushi','Ramen','Tempura','Udon'], answer:2, explain:'「天ぷら」 (tenpura) = tempura.' },
      { q:'Apa arti dari 「うどん」?',     options:['Sushi','Ramen','Tempura','Udon'], answer:3, explain:'「うどん」 (udon) = udon.' },
      { q:'Apa arti dari 「お菓子」?',     options:['Kue / snack','Minuman','Buah','Sayur'], answer:0, explain:'「お菓子」 (okashi) = kue / snack.' },
      { q:'Apa arti dari 「甘い」?',       options:['Manis','Asin','Asam','Pahit'], answer:0, explain:'「甘い」 (amai) = manis.' }
    ]
  },

  /* ============================================================
     LEVEL 8 — Waktu & Hari
     ============================================================ */
  'latihan-8': {
    title: 'Waktu & Hari',
    desc: 'Uji hafalan jam, hari, bulan, dan keterangan waktu.',
    soal: [
      { q:'Apa arti dari 「今日」?',       options:['Hari ini','Kemarin','Besok','Lusa'], answer:0, explain:'「今日」 (kyou) = hari ini.' },
      { q:'Apa arti dari 「昨日」?',       options:['Hari ini','Kemarin','Besok','Lusa'], answer:1, explain:'「昨日」 (kinou) = kemarin.' },
      { q:'Apa arti dari 「明日」?',       options:['Hari ini','Kemarin','Besok','Lusa'], answer:2, explain:'「明日」 (ashita) = besok.' },
      { q:'Apa arti dari 「明後日」?',     options:['Hari ini','Kemarin','Besok','Lusa'], answer:3, explain:'「明後日」 (asatte) = lusa.' },
      { q:'Apa arti dari 「月曜日」?',     options:['Senin','Selasa','Rabu','Kamis'], answer:0, explain:'「月曜日」 (getsuyoubi) = Senin.' },
      { q:'Apa arti dari 「火曜日」?',     options:['Senin','Selasa','Rabu','Kamis'], answer:1, explain:'「火曜日」 (kayoubi) = Selasa.' },
      { q:'Apa arti dari 「水曜日」?',     options:['Senin','Selasa','Rabu','Kamis'], answer:2, explain:'「水曜日」 (suiyoubi) = Rabu.' },
      { q:'Apa arti dari 「木曜日」?',     options:['Senin','Selasa','Rabu','Kamis'], answer:3, explain:'「木曜日」 (mokuyoubi) = Kamis.' },
      { q:'Apa arti dari 「金曜日」?',     options:['Jumat','Sabtu','Minggu','Senin'], answer:0, explain:'「金曜日」 (kinyoubi) = Jumat.' },
      { q:'Apa arti dari 「土曜日」?',     options:['Jumat','Sabtu','Minggu','Senin'], answer:1, explain:'「土曜日」 (doyoubi) = Sabtu.' },
      { q:'Apa arti dari 「日曜日」?',     options:['Jumat','Sabtu','Minggu','Senin'], answer:2, explain:'「日曜日」 (nichiyoubi) = Minggu.' },
      { q:'Apa arti dari 「朝」?',         options:['Pagi','Siang','Sore','Malam'], answer:0, explain:'「朝」 (asa) = pagi.' },
      { q:'Apa arti dari 「昼」?',         options:['Pagi','Siang','Sore','Malam'], answer:1, explain:'「昼」 (hiru) = siang.' },
      { q:'Apa arti dari 「夕方」?',       options:['Pagi','Siang','Sore','Malam'], answer:2, explain:'「夕方」 (yuugata) = sore.' },
      { q:'Apa arti dari 「夜」?',         options:['Pagi','Siang','Sore','Malam'], answer:3, explain:'「夜」 (yoru) = malam.' },
      { q:'Apa arti dari 「今」?',         options:['Sekarang','Nanti','Tadi','Besok'], answer:0, explain:'「今」 (ima) = sekarang.' },
      { q:'Apa arti dari 「時間」?',       options:['Jam / waktu','Menit','Detik','Hari'], answer:0, explain:'「時間」 (jikan) = jam / waktu.' },
      { q:'Apa arti dari 「分」?',         options:['Jam','Menit','Detik','Hari'], answer:1, explain:'「分」 (fun) = menit.' },
      { q:'Apa arti dari 「週末」?',       options:['Akhir pekan','Awal pekan','Tengah pekan','Setiap hari'], answer:0, explain:'「週末」 (shuumatsu) = akhir pekan.' },
      { q:'Apa arti dari 「毎日」?',       options:['Setiap hari','Setiap minggu','Setiap bulan','Setiap tahun'], answer:0, explain:'「毎日」 (mainichi) = setiap hari.' }
    ]
  },

  /* ============================================================
     LEVEL 9 — Kata Kerja Dasar
     ============================================================ */
  'latihan-9': {
    title: 'Kata Kerja Dasar',
    desc: 'Uji hafalan kata kerja dasar bahasa Jepang.',
    soal: [
      { q:'Apa arti dari 「食べる」?',     options:['Makan','Minum','Tidur','Berjalan'], answer:0, explain:'「食べる」 (taberu) = makan.' },
      { q:'Apa arti dari 「飲む」?',       options:['Makan','Minum','Tidur','Berjalan'], answer:1, explain:'「飲む」 (nomu) = minum.' },
      { q:'Apa arti dari 「寝る」?',       options:['Makan','Minum','Tidur','Berjalan'], answer:2, explain:'「寝る」 (neru) = tidur.' },
      { q:'Apa arti dari 「行く」?',       options:['Pergi','Datang','Pulang','Kembali'], answer:0, explain:'「行く」 (iku) = pergi.' },
      { q:'Apa arti dari 「来る」?',       options:['Pergi','Datang','Pulang','Kembali'], answer:1, explain:'「来る」 (kuru) = datang.' },
      { q:'Apa arti dari 「帰る」?',       options:['Pergi','Datang','Pulang','Kembali'], answer:2, explain:'「帰る」 (kaeru) = pulang.' },
      { q:'Apa arti dari 「見る」?',       options:['Melihat','Mendengar','Berbicara','Membaca'], answer:0, explain:'「見る」 (miru) = melihat.' },
      { q:'Apa arti dari 「聞く」?',       options:['Melihat','Mendengar','Berbicara','Membaca'], answer:1, explain:'「聞く」 (kiku) = mendengar / bertanya.' },
      { q:'Apa arti dari 「話す」?',       options:['Melihat','Mendengar','Berbicara','Membaca'], answer:2, explain:'「話す」 (hanasu) = berbicara.' },
      { q:'Apa arti dari 「読む」?',       options:['Melihat','Mendengar','Berbicara','Membaca'], answer:3, explain:'「読む」 (yomu) = membaca.' },
      { q:'Apa arti dari 「書く」?',       options:['Menulis','Menggambar','Menyanyi','Menari'], answer:0, explain:'「書く」 (kaku) = menulis.' },
      { q:'Apa arti dari 「買う」?',       options:['Menjual','Membeli','Meminjam','Memberi'], answer:1, explain:'「買う」 (kau) = membeli.' },
      { q:'Apa arti dari 「売る」?',       options:['Menjual','Membeli','Meminjam','Memberi'], answer:0, explain:'「売る」 (uru) = menjual.' },
      { q:'Apa arti dari 「勉強する」?',   options:['Belajar','Bermain','Bekerja','Istirahat'], answer:0, explain:'「勉強する」 (benkyou suru) = belajar.' },
      { q:'Apa arti dari 「働く」?',       options:['Belajar','Bermain','Bekerja','Istirahat'], answer:2, explain:'「働く」 (hataraku) = bekerja.' },
      { q:'Apa arti dari 「遊ぶ」?',       options:['Belajar','Bermain','Bekerja','Istirahat'], answer:1, explain:'「遊ぶ」 (asobu) = bermain.' },
      { q:'Apa arti dari 「休む」?',       options:['Belajar','Bermain','Bekerja','Istirahat'], answer:3, explain:'「休む」 (yasumu) = istirahat.' },
      { q:'Apa arti dari 「起きる」?',     options:['Bangun','Tidur','Duduk','Berdiri'], answer:0, explain:'「起きる」 (okiru) = bangun.' },
      { q:'Apa arti dari 「座る」?',       options:['Bangun','Tidur','Duduk','Berdiri'], answer:2, explain:'「座る」 (suwaru) = duduk.' },
      { q:'Apa arti dari 「立つ」?',       options:['Bangun','Tidur','Duduk','Berdiri'], answer:3, explain:'「立つ」 (tatsu) = berdiri.' }
    ]
  },

  /* ============================================================
     LEVEL 10 — Kata Sifat Dasar
     ============================================================ */
  'latihan-10': {
    title: 'Kata Sifat Dasar',
    desc: 'Uji hafalan kata sifat い dan な dalam bahasa Jepang.',
    soal: [
      { q:'Apa arti dari 「大きい」?',     options:['Besar','Kecil','Tinggi','Rendah'], answer:0, explain:'「大きい」 (ookii) = besar.' },
      { q:'Apa arti dari 「小さい」?',     options:['Besar','Kecil','Tinggi','Rendah'], answer:1, explain:'「小さい」 (chiisai) = kecil.' },
      { q:'Apa arti dari 「高い」?',       options:['Besar','Kecil','Tinggi / Mahal','Rendah'], answer:2, explain:'「高い」 (takai) = tinggi / mahal.' },
      { q:'Apa arti dari 「安い」?',       options:['Murah','Mahal','Tinggi','Rendah'], answer:0, explain:'「安い」 (yasui) = murah.' },
      { q:'Apa arti dari 「新しい」?',     options:['Baru','Lama','Bagus','Buruk'], answer:0, explain:'「新しい」 (atarashii) = baru.' },
      { q:'Apa arti dari 「古い」?',       options:['Baru','Lama','Bagus','Buruk'], answer:1, explain:'「古い」 (furui) = lama / kuno.' },
      { q:'Apa arti dari 「いい」?',       options:['Bagus','Buruk','Cepat','Lambat'], answer:0, explain:'「いい」 (ii) = bagus / baik.' },
      { q:'Apa arti dari 「悪い」?',       options:['Bagus','Buruk','Cepat','Lambat'], answer:1, explain:'「悪い」 (warui) = buruk / jelek.' },
      { q:'Apa arti dari 「速い」?',       options:['Bagus','Buruk','Cepat','Lambat'], answer:2, explain:'「速い」 (hayai) = cepat.' },
      { q:'Apa arti dari 「遅い」?',       options:['Bagus','Buruk','Cepat','Lambat'], answer:3, explain:'「遅い」 (osoi) = lambat.' },
      { q:'Apa arti dari 「暑い」?',       options:['Panas (udara)','Dingin','Hangat','Sejuk'], answer:0, explain:'「暑い」 (atsui) = panas (cuaca).' },
      { q:'Apa arti dari 「寒い」?',       options:['Panas','Dingin','Hangat','Sejuk'], answer:1, explain:'「寒い」 (samui) = dingin (cuaca).' },
      { q:'Apa arti dari 「熱い」?',       options:['Panas (benda)','Dingin','Hangat','Sejuk'], answer:0, explain:'「熱い」 (atsui) = panas (benda).' },
      { q:'Apa arti dari 「冷たい」?',     options:['Panas','Dingin (benda)','Hangat','Sejuk'], answer:1, explain:'「冷たい」 (tsumetai) = dingin (benda).' },
      { q:'Apa arti dari 「美味しい」?',   options:['Enak','Tidak enak','Manis','Asin'], answer:0, explain:'「美味しい」 (oishii) = enak.' },
      { q:'Apa arti dari 「楽しい」?',     options:['Menyenangkan','Membosankan','Sulit','Mudah'], answer:0, explain:'「楽しい」 (tanoshii) = menyenangkan.' },
      { q:'Apa arti dari 「難しい」?',     options:['Sulit','Mudah','Bagus','Buruk'], answer:0, explain:'「難しい」 (muzukashii) = sulit.' },
      { q:'Apa arti dari 「易しい」?',     options:['Sulit','Mudah','Bagus','Buruk'], answer:1, explain:'「易しい」 (yasashii) = mudah.' },
      { q:'Apa arti dari 「綺麗」?',       options:['Cantik / Bersih','Kotor','Gelap','Terang'], answer:0, explain:'「綺麗」 (kirei) = cantik / bersih (kata sifat な).' },
      { q:'Apa arti dari 「元気」?',       options:['Sehat / Semangat','Sakit','Capek','Ngantuk'], answer:0, explain:'「元気」 (genki) = sehat / semangat (kata sifat な).' }
    ]
  },
     /* ============================================================
     LEVEL 11 — Partikel は・が・を
     ============================================================ */
  'latihan-11': {
    title: 'Partikel は・が・を',
    desc: 'Uji pemahaman partikel dasar は (topik), が (subjek), dan を (objek).',
    soal: [
      { q:'Partikel 「は」 berfungsi sebagai penanda...',  options:['Topik kalimat','Objek','Tempat','Waktu'], answer:0, explain:'「は」 (dibaca "wa") menandai topik kalimat.' },
      { q:'Partikel 「が」 berfungsi sebagai penanda...',  options:['Topik','Subjek','Objek','Arah'], answer:1, explain:'「が」 menandai subjek — pelaku atau hal yang dilakukan.' },
      { q:'Partikel 「を」 berfungsi sebagai penanda...',  options:['Topik','Subjek','Objek','Tempat'], answer:2, explain:'「を」 (dibaca "o") menandai objek dari kata kerja transitif.' },
      { q:'Partikel 「は」 dibaca...',  options:['ha','wa','ba','pa'], answer:1, explain:'Sebagai partikel, 「は」 dibaca "wa" (bukan "ha").' },
      { q:'Partikel 「を」 dibaca...',  options:['wo','o','bo','po'], answer:1, explain:'Partikel 「を」 dibaca "o" (meski ditulis "wo").' },
      { q:'Partikel 「が」 dibaca...',  options:['ka','ga','nga','kha'], answer:1, explain:'「が」 dibaca "ga" — sama seperti biasanya.' },
      { q:'「私は学生です」 artinya...',  options:['Saya adalah siswa','Dia adalah siswa','Kamu adalah siswa','Mereka adalah siswa'], answer:0, explain:'私 (saya) + は (topik) + 学生 (siswa) + です.' },
      { q:'「猫がいます」 artinya...',  options:['Ada kucing','Saya punya kucing','Kucing makan','Kucing tidur'], answer:0, explain:'猫 + が (subjek) + います (ada). "Ada kucing."' },
      { q:'「水を飲みます」 artinya...',  options:['Minum air','Air diminum','Air panas','Air dingin'], answer:0, explain:'水 + を (objek) + 飲みます (minum).' },
      { q:'「りんごを食べます」 artinya...',  options:['Makan apel','Apel merah','Apel jatuh','Beli apel'], answer:0, explain:'りんご + を (objek) + 食べます (makan).' },
      { q:'「私___田中です」 Partikel yang tepat?',  options:['は','が','を','に'], answer:0, explain:'「私は田中です」 — は menandai topik (saya).' },
      { q:'「犬___好きです」 Partikel yang tepat?',  options:['は','が','を','で'], answer:1, explain:'「犬が好きです」 — が dipakai karena 好き adalah kata sifat な.' },
      { q:'「本___読みます」 Partikel yang tepat?',  options:['は','が','を','へ'], answer:2, explain:'「本を読みます」 — を menandai objek dari kata kerja 読む.' },
      { q:'「あそこ___駅があります」 Partikel?',  options:['は','が','を','に'], answer:3, explain:'「あそこに駅があります」 — に menandai lokasi keberadaan.' },
      { q:'Perbedaan utama 「は」 dan 「が」 adalah...',  options:['は topik, が subjek','は formal, が santai','は lisan, が tulisan','Tidak ada bedanya'], answer:0, explain:'「は」 = topik, 「が」 = pelaku/subjek.' },
      { q:'「私は寿司が好きです」 artinya...',  options:['Saya suka sushi','Sushi suka saya','Saya makan sushi','Sushi itu enak'], answer:0, explain:'Pola 「〜は〜が好きです」 = "saya suka sushi".' },
      { q:'「誰が来ましたか」 artinya...',  options:['Siapa yang datang?','Kapan datang?','Di mana datang?','Mengapa datang?'], answer:0, explain:'Kata tanya (誰) selalu diikuti が.' },
      { q:'「これは何ですか」 artinya...',  options:['Ini apa?','Itu apa?','Sana apa?','Kapan ini?'], answer:0, explain:'これ + は + 何 + ですか. "Ini apa?"' },
      { q:'「時間___ありません」 Partikel yang tepat?',  options:['は','が','を','で'], answer:1, explain:'「時間がありません」 — が menandai keberadaan.' },
      { q:'「ご飯___食べません」 Partikel yang tepat?',  options:['は','が','を','に'], answer:2, explain:'「ご飯を食べません」 — を tetap dipakai meski kalimat negatif.' }
    ]
  },

  /* ============================================================
     LEVEL 12 — Pola 〜です・〜ます
     ============================================================ */
  'latihan-12': {
    title: 'Pola 〜です・〜ます',
    desc: 'Uji pemahaman pola kalimat sopan dasar: です dan ます.',
    soal: [
      { q:'「です」 dipakai untuk...',   options:['Menutup kalimat sopan (kata benda/sifat)','Menutup kalimat kata kerja','Menandai tanya','Menandai lampau'], answer:0, explain:'「です」 dipakai setelah kata benda atau kata sifat な untuk membuat kalimat sopan.' },
      { q:'「ます」 dipakai untuk...',   options:['Menutup kalimat kata kerja sopan','Menutup kalimat kata benda','Menandai tanya','Menandai negatif'], answer:0, explain:'「ます」 dipakai setelah kata kerja bentuk sopan (contoh: 食べます = makan).' },
      { q:'「私は学生です」 bentuk negatifnya...',  options:['私は学生じゃありません','私は学生です','私は学生でした','私は学生ですか'], answer:0, explain:'Negatif dari です = じゃありません (atau ではありません).' },
      { q:'「食べます」 bentuk negatifnya...',  options:['食べません','食べました','食べる','食べて'], answer:0, explain:'Negatif dari 〜ます = 〜ません. 食べます → 食べません.' },
      { q:'「食べます」 bentuk lampau...',  options:['食べました','食べません','食べる','食べて'], answer:0, explain:'Bentuk lampau 〜ます = 〜ました.' },
      { q:'「食べます」 bentuk lampau negatif...',  options:['食べませんでした','食べました','食べません','食べる'], answer:0, explain:'Lampau negatif = 〜ませんでした.' },
      { q:'「行きます」 artinya...',  options:['Pergi','Datang','Pulang','Kembali'], answer:0, explain:'「行きます」 (ikimasu) = pergi (sopan).' },
      { q:'「行きません」 artinya...',  options:['Tidak pergi','Pergi','Sudah pergi','Belum pergi'], answer:0, explain:'「行きません」 = tidak pergi.' },
      { q:'「行きました」 artinya...',  options:['Sudah pergi','Akan pergi','Tidak pergi','Pergi dulu'], answer:0, explain:'「行きました」 = sudah pergi (lampau).' },
      { q:'「行きませんでした」 artinya...',  options:['Tidak pergi (lampau)','Pergi (lampau)','Akan pergi','Sedang pergi'], answer:0, explain:'Bentuk lampau negatif dari 行きます.' },
      { q:'「学生でした」 artinya...',  options:['Dulu (saya) siswa','Sekarang siswa','Bukan siswa','Akan jadi siswa'], answer:0, explain:'Bentuk lampau dari です = でした. "Dulu siswa."' },
      { q:'「学生じゃありませんでした」 artinya...',  options:['Dulu bukan siswa','Sekarang bukan siswa','Sekarang siswa','Akan jadi siswa'], answer:0, explain:'Bentuk lampau negatif dari です.' },
      { q:'「これは本です」 bentuk tanya...',  options:['これは本ですか','これは本です','これは本でした','これは本じゃない'], answer:0, explain:'Kalimat tanya ditambahkan か di akhir.' },
      { q:'「毎日日本語を勉強します」 artinya...',  options:['Setiap hari belajar bahasa Jepang','Kemarin belajar bahasa Jepang','Besok belajar bahasa Jepang','Tidak belajar'], answer:0, explain:'毎日 (setiap hari) + 日本語 (bhs Jepang) + を + 勉強します (belajar).' },
      { q:'「私は日本人です」 artinya...',  options:['Saya orang Jepang','Saya orang Indonesia','Saya guru','Saya siswa'], answer:0, explain:'私 + は + 日本人 (orang Jepang) + です.' },
      { q:'「明日、学校へ行きます」 artinya...',  options:['Besok pergi ke sekolah','Kemarin pergi ke sekolah','Hari ini ke sekolah','Tidak ke sekolah'], answer:0, explain:'明日 (besok) + 学校へ (ke sekolah) + 行きます (pergi).' },
      { q:'「先生は優しいです」 artinya...',  options:['Guru itu baik','Guru itu galak','Guru itu sibuk','Guru itu pergi'], answer:0, explain:'先生 (guru) + は + 優しい (baik) + です.' },
      { q:'「昨日、映画を見ました」 artinya...',  options:['Kemarin menonton film','Besok menonton film','Hari ini menonton film','Tidak menonton'], answer:0, explain:'昨日 (kemarin) + 映画 (film) + を + 見ました (menonton).' },
      { q:'「コーヒーを飲みませんか」 artinya...',  options:['Mau minum kopi?','Tidak minum kopi','Sudah minum kopi','Suka kopi'], answer:0, explain:'「〜ませんか」 = ajakan sopan: "mau ... ?"' },
      { q:'「日本語を勉強しています」 artinya...',  options:['Sedang belajar bahasa Jepang','Sudah belajar bahasa Jepang','Akan belajar bahasa Jepang','Belum belajar'], answer:0, explain:'「〜ています」 = sedang melakukan.' }
    ]
  },

  /* ============================================================
     LEVEL 13 — Partikel に・で・へ
     ============================================================ */
  'latihan-13': {
    title: 'Partikel に・で・へ',
    desc: 'Uji pemahaman partikel lanjutan: に (waktu/tujuan), で (tempat/cara), へ (arah).',
    soal: [
      { q:'Partikel 「に」 menandai...',   options:['Waktu & tujuan','Tempat aktivitas','Alat','Topik'], answer:0, explain:'「に」 menandai waktu spesifik dan tujuan (ke arah sesuatu).' },
      { q:'Partikel 「で」 menandai...',   options:['Waktu','Tempat aktivitas & cara','Tujuan','Topik'], answer:1, explain:'「で」 menandai tempat dilakukannya aktivitas dan alat/cara.' },
      { q:'Partikel 「へ」 menandai...',   options:['Waktu','Tempat aktivitas','Arah (ke)','Objek'], answer:2, explain:'「へ」 (dibaca "e") menandai arah gerakan — mirip に tapi lebih menekankan arah.' },
      { q:'Partikel 「へ」 dibaca...',     options:['he','e','be','pe'], answer:1, explain:'Sebagai partikel, 「へ」 dibaca "e" (bukan "he").' },
      { q:'「7時___起きます」 Partikel yang tepat?',     options:['に','で','へ','を'], answer:0, explain:'Waktu spesifik (7時) memakai に.' },
      { q:'「学校___行きます」 Partikel untuk "pergi ke sekolah"?',     options:['に / へ','で','を','が'], answer:0, explain:'Tujuan gerakan bisa pakai に atau へ.' },
      { q:'「図書館___勉強します」 Partikel untuk "belajar di perpustakaan"?',     options:['に','で','へ','を'], answer:1, explain:'Tempat aktivitas memakai で (bukan に).' },
      { q:'「バス___行きます」 Partikel untuk "pergi dengan bus"?',     options:['に','で','へ','を'], answer:1, explain:'Alat transportasi memakai で.' },
      { q:'「ペン___書きます」 Partikel untuk "menulis dengan pena"?',     options:['に','で','へ','を'], answer:1, explain:'Alat memakai で.' },
      { q:'「日本語___話します」 Partikel untuk "berbicara dalam bahasa Jepang"?',     options:['に','で','へ','を'], answer:1, explain:'Bahasa sebagai cara memakai で.' },
      { q:'「日曜日___休みます」 Partikel yang tepat?',     options:['に','で','へ','を'], answer:0, explain:'Hari spesifik (日曜日) memakai に.' },
      { q:'「家___帰ります」 Partikel untuk "pulang ke rumah"?',     options:['に / へ','で','を','が'], answer:0, explain:'Tujuan gerakan (家) memakai に atau へ.' },
      { q:'「日本___行きたいです」 Partikel untuk "ingin pergi ke Jepang"?',     options:['に / へ','で','を','が'], answer:0, explain:'Tujuan memakai に atau へ.' },
      { q:'「レストラン___食べます」 Partikel untuk "makan di restoran"?',     options:['に','で','へ','を'], answer:1, explain:'Tempat aktivitas makan memakai で.' },
      { q:'Perbedaan 「に」 dan 「で」 untuk tempat...',     options:['に = tujuan, で = tempat aktivitas','に = aktivitas, で = tujuan','Sama saja','に = formal, で = santai'], answer:0, explain:'に menandai keberadaan/tujuan, で menandai tempat dilakukannya aksi.' },
      { q:'「公園___散歩します」 Partikel untuk "jalan-jalan di taman"?',     options:['に','で','へ','を'], answer:1, explain:'Aktivitas 散歩 (jalan-jalan) di 公園 memakai で.' },
      { q:'「3月___日本へ行きます」 Partikel yang tepat?',     options:['に','で','へ','を'], answer:0, explain:'Bulan spesifik (3月) memakai に.' },
      { q:'「友達___会います」 Partikel untuk "bertemu dengan teman"?',     options:['に','で','へ','を'], answer:0, explain:'「〜に会う」 = bertemu dengan 〜. Selalu pakai に.' },
      { q:'「電車___東京へ行きます」 Partikel untuk "pergi ke Tokyo dengan kereta"?',     options:['に','で','へ','を'], answer:1, explain:'Alat transportasi (電車) memakai で.' },
      { q:'「どこ___行きますか」 Partikel untuk "pergi ke mana?"',     options:['に / へ','で','を','が'], answer:0, explain:'Kata tanya どこ (ke mana) diikuti に atau へ.' }
    ]
  },

  /* ============================================================
     LEVEL 14 — Tempat & Arah
     ============================================================ */
  'latihan-14': {
    title: 'Tempat & Arah',
    desc: 'Uji pemahaman kata tunjuk tempat (ここ・そこ・あそこ・どこ) dan arah.',
    soal: [
      { q:'「ここ」 artinya...',   options:['Di sini','Di situ','Di sana','Di mana'], answer:0, explain:'「ここ」 = di sini (dekat pembicara).' },
      { q:'「そこ」 artinya...',   options:['Di sini','Di situ','Di sana','Di mana'], answer:1, explain:'「そこ」 = di situ (dekat lawan bicara).' },
      { q:'「あそこ」 artinya...', options:['Di sini','Di situ','Di sana (jauh)','Di mana'], answer:2, explain:'「あそこ」 = di sana (jauh dari keduanya).' },
      { q:'「どこ」 artinya...',   options:['Di sini','Di situ','Di sana','Di mana'], answer:3, explain:'「どこ」 = di mana (kata tanya).' },
      { q:'「こちら」 artinya...',   options:['Ke sini / ini (sopan)','Ke situ','Ke sana','Ke mana'], answer:0, explain:'「こちら」 = versi sopan dari ここ.' },
      { q:'「そちら」 artinya...',   options:['Ke sini','Ke situ / itu (sopan)','Ke sana','Ke mana'], answer:1, explain:'「そちら」 = versi sopan dari そこ.' },
      { q:'「あちら」 artinya...',   options:['Ke sini','Ke situ','Ke sana (sopan)','Ke mana'], answer:2, explain:'「あちら」 = versi sopan dari あそこ.' },
      { q:'「どちら」 artinya...',   options:['Ke sini','Ke situ','Ke sana','Yang mana / ke mana (sopan)'], answer:3, explain:'「どちら」 = versi sopan dari どこ.' },
      { q:'「右」 artinya...',   options:['Kanan','Kiri','Depan','Belakang'], answer:0, explain:'「右」 (migi) = kanan.' },
      { q:'「左」 artinya...',   options:['Kanan','Kiri','Depan','Belakang'], answer:1, explain:'「左」 (hidari) = kiri.' },
      { q:'「前」 artinya...',   options:['Kanan','Kiri','Depan','Belakang'], answer:2, explain:'「前」 (mae) = depan.' },
      { q:'「後ろ」 artinya...',   options:['Kanan','Kiri','Depan','Belakang'], answer:3, explain:'「後ろ」 (ushiro) = belakang.' },
      { q:'「上」 artinya...',   options:['Atas','Bawah','Dalam','Luar'], answer:0, explain:'「上」 (ue) = atas.' },
      { q:'「下」 artinya...',   options:['Atas','Bawah','Dalam','Luar'], answer:1, explain:'「下」 (shita) = bawah.' },
      { q:'「中」 artinya...',   options:['Atas','Bawah','Dalam','Luar'], answer:2, explain:'「中」 (naka) = dalam.' },
      { q:'「外」 artinya...',   options:['Atas','Bawah','Dalam','Luar'], answer:3, explain:'「外」 (soto) = luar.' },
      { q:'「隣」 artinya...',   options:['Sebelah','Jauh','Dekat','Antara'], answer:0, explain:'「隣」 (tonari) = sebelah / samping.' },
      { q:'「近く」 artinya...',   options:['Jauh','Dekat','Antara','Samping'], answer:1, explain:'「近く」 (chikaku) = dekat.' },
      { q:'「駅はどこですか」 artinya...',   options:['Di mana stasiun?','Apa itu stasiun?','Kapan ke stasiun?','Stasiun mana?'], answer:0, explain:'駅 (stasiun) + は + どこ (di mana) + ですか.' },
      { q:'「トイレはあちらです」 artinya...',   options:['Toilet di sana (sopan)','Toilet di sini','Toilet di situ','Toilet mana?'], answer:0, explain:'トイレ (toilet) + は + あちら (sana, sopan) + です.' }
    ]
  },

  /* ============================================================
     LEVEL 15 — Belanja & Harga
     ============================================================ */
  'latihan-15': {
    title: 'Belanja & Harga',
    desc: 'Uji kosakata dan percakapan dasar saat berbelanja di Jepang.',
    soal: [
      { q:'「いくらですか」 artinya...',   options:['Berapa harganya?','Apa ini?','Di mana?','Kapan?'], answer:0, explain:'「いくらですか」 = "berapa harganya?"' },
      { q:'「円」 artinya...',   options:['Yen','Dolar','Rupiah','Ringgit'], answer:0, explain:'「円」 (en) = yen (mata uang Jepang).' },
      { q:'「高い」 artinya...',   options:['Murah','Mahal / Tinggi','Sedang','Gratis'], answer:1, explain:'「高い」 (takai) = mahal / tinggi.' },
      { q:'「安い」 artinya...',   options:['Murah','Mahal','Sedang','Gratis'], answer:0, explain:'「安い」 (yasui) = murah.' },
      { q:'「買います」 artinya...',   options:['Membeli','Menjual','Meminjam','Memberi'], answer:0, explain:'「買います」 (kaimasu) = membeli.' },
      { q:'「売ります」 artinya...',   options:['Membeli','Menjual','Meminjam','Memberi'], answer:1, explain:'「売ります」 (urimasu) = menjual.' },
      { q:'「店」 artinya...',   options:['Toko','Pasar','Mall','Warung'], answer:0, explain:'「店」 (mise) = toko.' },
      { q:'「お金」 artinya...',   options:['Uang','Kartu','Dompet','Tas'], answer:0, explain:'「お金」 (okane) = uang.' },
      { q:'「財布」 artinya...',   options:['Uang','Dompet','Tas','Kartu'], answer:1, explain:'「財布」 (saifu) = dompet.' },
      { q:'「レジ」 artinya...',   options:['Kasir','Rak','Etalase','Pintu'], answer:0, explain:'「レジ」 (reji) = kasir.' },
      { q:'「これをください」 artinya...',   options:['Saya mau yang ini','Ini apa?','Berapa ini?','Di mana ini?'], answer:0, explain:'「これをください」 = "tolong yang ini" (saat memesan/beli).' },
      { q:'「試着してもいいですか」 artinya...',   options:['Boleh saya coba?','Berapa harganya?','Di mana kamar?','Bisa lebih murah?'], answer:0, explain:'「試着してもいいですか」 = "boleh saya coba (pakaian)?"' },
      { q:'「現金」 artinya...',   options:['Tunai / cash','Kartu kredit','Transfer','Cek'], answer:0, explain:'「現金」 (genkin) = uang tunai.' },
      { q:'「カード」 artinya...',   options:['Kartu','Uang','Tunai','Struk'], answer:0, explain:'「カード」 (kaado) = kartu (kredit/debit).' },
      { q:'「袋」 artinya...',   options:['Kantong','Kotak','Kertas','Tali'], answer:0, explain:'「袋」 (fukuro) = kantong / tas.' },
      { q:'「袋はいりますか」 artinya...',   options:['Perlu kantong?','Ini kantong','Kantong mana?','Berapa kantong?'], answer:0, explain:'「袋はいりますか」 = "apakah perlu kantong?" (biasa ditanya di kasir).' },
      { q:'「レシート」 artinya...',   options:['Struk','Kartu','Uang','Dompet'], answer:0, explain:'「レシート」 (reshiito) = struk / bon.' },
      { q:'「お釣り」 artinya...',   options:['Kembalian','Uang','Harga','Diskon'], answer:0, explain:'「お釣り」 (otsuri) = uang kembalian.' },
      { q:'「割引」 artinya...',   options:['Diskon','Pajak','Harga','Total'], answer:0, explain:'「割引」 (waribiki) = diskon.' },
      { q:'「一万円」 artinya...',   options:['10.000 yen','1.000 yen','100.000 yen','1.000.000 yen'], answer:0, explain:'「一万円」 (ichiman en) = 10.000 yen.' }
    ]
  },
   /* ============================================================
     LEVEL 16 — Transportasi
     ============================================================ */
  'latihan-16': {
    title: 'Transportasi',
    desc: 'Uji hafalan nama kendaraan dan kosakata perjalanan.',
    soal: [
      { q:'Apa arti dari 「車」?',         options:['Mobil','Motor','Sepeda','Bus'], answer:0, explain:'「車」 (kuruma) = mobil.' },
      { q:'Apa arti dari 「電車」?',       options:['Mobil','Kereta listrik','Sepeda','Bus'], answer:1, explain:'「電車」 (densha) = kereta listrik.' },
      { q:'Apa arti dari 「自転車」?',     options:['Mobil','Motor','Sepeda','Bus'], answer:2, explain:'「自転車」 (jitensha) = sepeda.' },
      { q:'Apa arti dari 「バス」?',       options:['Mobil','Kereta','Sepeda','Bus'], answer:3, explain:'「バス」 (basu) = bus.' },
      { q:'Apa arti dari 「飛行機」?',     options:['Pesawat','Kapal','Helikopter','Roket'], answer:0, explain:'「飛行機」 (hikouki) = pesawat.' },
      { q:'Apa arti dari 「船」?',         options:['Pesawat','Kapal','Helikopter','Roket'], answer:1, explain:'「船」 (fune) = kapal.' },
      { q:'Apa arti dari 「タクシー」?',   options:['Taksi','Bus','Kereta','Bajaj'], answer:0, explain:'「タクシー」 (takushii) = taksi.' },
      { q:'Apa arti dari 「地下鉄」?',     options:['Kereta bawah tanah','Bus','Trem','Pesawat'], answer:0, explain:'「地下鉄」 (chikatetsu) = kereta bawah tanah / subway.' },
      { q:'Apa arti dari 「新幹線」?',     options:['Shinkansen (kereta cepat)','Bus','Trem','Kapal'], answer:0, explain:'「新幹線」 (shinkansen) = kereta cepat Jepang.' },
      { q:'Apa arti dari 「駅」?',         options:['Stasiun','Bandara','Pelabuhan','Terminal'], answer:0, explain:'「駅」 (eki) = stasiun.' },
      { q:'Apa arti dari 「空港」?',       options:['Stasiun','Bandara','Pelabuhan','Terminal'], answer:1, explain:'「空港」 (kuukou) = bandara.' },
      { q:'Apa arti dari 「切符」?',       options:['Tiket','Dompet','Peta','Jadwal'], answer:0, explain:'「切符」 (kippu) = tiket.' },
      { q:'Apa arti dari 「乗る」?',       options:['Naik','Turun','Pindah','Tunggu'], answer:0, explain:'「乗る」 (noru) = naik (kendaraan).' },
      { q:'Apa arti dari 「降りる」?',     options:['Naik','Turun','Pindah','Tunggu'], answer:1, explain:'「降りる」 (oriru) = turun (dari kendaraan).' },
      { q:'Apa arti dari 「乗り換える」?', options:['Naik','Turun','Pindah (kendaraan)','Tunggu'], answer:2, explain:'「乗り換える」 (norikaeru) = pindah kendaraan / transit.' },
      { q:'Apa arti dari 「出発」?',       options:['Keberangkatan','Kedatangan','Keterlambatan','Pembatalan'], answer:0, explain:'「出発」 (shuppatsu) = keberangkatan.' },
      { q:'Apa arti dari 「到着」?',       options:['Keberangkatan','Kedatangan','Keterlambatan','Pembatalan'], answer:1, explain:'「到着」 (touchaku) = kedatangan.' },
      { q:'「電車で行きます」 artinya...',   options:['Pergi dengan kereta','Naik kereta','Turun kereta','Tunggu kereta'], answer:0, explain:'電車 (kereta) + で (dengan) + 行きます (pergi).' },
      { q:'「駅はどこですか」 artinya...',   options:['Di mana stasiun?','Apa itu stasiun?','Kapan ke stasiun?','Stasiun mana?'], answer:0, explain:'駅 + は + どこ (di mana) + ですか.' },
      { q:'「切符を買います」 artinya...',   options:['Beli tiket','Buang tiket','Lihat tiket','Jual tiket'], answer:0, explain:'切符 (tiket) + を + 買います (beli).' }
    ]
  },

  /* ============================================================
     LEVEL 17 — Tubuh & Kesehatan
     ============================================================ */
  'latihan-17': {
    title: 'Tubuh & Kesehatan',
    desc: 'Uji hafalan bagian tubuh dan kosakata kesehatan dasar.',
    soal: [
      { q:'Apa arti dari 「頭」?',     options:['Kepala','Rambut','Muka','Leher'], answer:0, explain:'「頭」 (atama) = kepala.' },
      { q:'Apa arti dari 「顔」?',     options:['Kepala','Muka / wajah','Mata','Mulut'], answer:1, explain:'「顔」 (kao) = muka / wajah.' },
      { q:'Apa arti dari 「目」?',     options:['Telinga','Hidung','Mata','Mulut'], answer:2, explain:'「目」 (me) = mata.' },
      { q:'Apa arti dari 「耳」?',     options:['Telinga','Hidung','Mata','Mulut'], answer:0, explain:'「耳」 (mimi) = telinga.' },
      { q:'Apa arti dari 「鼻」?',     options:['Telinga','Hidung','Mata','Mulut'], answer:1, explain:'「鼻」 (hana) = hidung.' },
      { q:'Apa arti dari 「口」?',     options:['Mata','Hidung','Mulut','Gigi'], answer:2, explain:'「口」 (kuchi) = mulut.' },
      { q:'Apa arti dari 「歯」?',     options:['Mulut','Gigi','Lidah','Bibir'], answer:1, explain:'「歯」 (ha) = gigi.' },
      { q:'Apa arti dari 「手」?',     options:['Kaki','Tangan','Lengan','Jari'], answer:1, explain:'「手」 (te) = tangan.' },
      { q:'Apa arti dari 「足」?',     options:['Kaki','Tangan','Lengan','Jari'], answer:0, explain:'「足」 (ashi) = kaki.' },
      { q:'Apa arti dari 「指」?',     options:['Kaki','Tangan','Jari','Lengan'], answer:2, explain:'「指」 (yubi) = jari.' },
      { q:'Apa arti dari 「体」?',     options:['Tubuh','Kepala','Punggung','Perut'], answer:0, explain:'「体」 (karada) = tubuh / badan.' },
      { q:'Apa arti dari 「お腹」?',   options:['Kepala','Perut','Punggung','Dada'], answer:1, explain:'「お腹」 (onaka) = perut.' },
      { q:'Apa arti dari 「病気」?',   options:['Sakit','Sehat','Lelah','Ngantuk'], answer:0, explain:'「病気」 (byouki) = sakit / penyakit.' },
      { q:'Apa arti dari 「薬」?',     options:['Obat','Dokter','Rumah sakit','Perban'], answer:0, explain:'「薬」 (kusuri) = obat.' },
      { q:'Apa arti dari 「病院」?',   options:['Obat','Dokter','Rumah sakit','Apotek'], answer:2, explain:'「病院」 (byouin) = rumah sakit.' },
      { q:'Apa arti dari 「医者」?',   options:['Obat','Dokter','Rumah sakit','Perawat'], answer:1, explain:'「医者」 (isha) = dokter.' },
      { q:'「頭が痛いです」 artinya...',   options:['Sakit kepala','Sakit perut','Sakit gigi','Demam'], answer:0, explain:'頭 (kepala) + が + 痛い (sakit) + です.' },
      { q:'「お腹が痛いです」 artinya...',   options:['Sakit kepala','Sakit perut','Sakit gigi','Demam'], answer:1, explain:'お腹 (perut) + が + 痛い (sakit).' },
      { q:'「熱があります」 artinya...',   options:['Demam','Batuk','Pilek','Sakit kepala'], answer:0, explain:'熱 (netsu) = demam. 「熱があります」 = sedang demam.' },
      { q:'「風邪を引きました」 artinya...',   options:['Masuk angin / pilek','Demam','Sakit perut','Sakit kepala'], answer:0, explain:'「風邪を引く」 (kaze wo hiku) = masuk angin / kena flu.' }
    ]
  },

  /* ============================================================
     LEVEL 18 — Cuaca & Musim
     ============================================================ */
  'latihan-18': {
    title: 'Cuaca & Musim',
    desc: 'Uji hafalan musim dan cuaca dalam bahasa Jepang.',
    soal: [
      { q:'Apa arti dari 「春」?',     options:['Musim semi','Musim panas','Musim gugur','Musim dingin'], answer:0, explain:'「春」 (haru) = musim semi.' },
      { q:'Apa arti dari 「夏」?',     options:['Musim semi','Musim panas','Musim gugur','Musim dingin'], answer:1, explain:'「夏」 (natsu) = musim panas.' },
      { q:'Apa arti dari 「秋」?',     options:['Musim semi','Musim panas','Musim gugur','Musim dingin'], answer:2, explain:'「秋」 (aki) = musim gugur.' },
      { q:'Apa arti dari 「冬」?',     options:['Musim semi','Musim panas','Musim gugur','Musim dingin'], answer:3, explain:'「冬」 (fuyu) = musim dingin.' },
      { q:'Apa arti dari 「天気」?',   options:['Cuaca','Musim','Suhu','Angin'], answer:0, explain:'「天気」 (tenki) = cuaca.' },
      { q:'Apa arti dari 「晴れ」?',   options:['Cerah','Hujan','Berawan','Bersalju'], answer:0, explain:'「晴れ」 (hare) = cerah.' },
      { q:'Apa arti dari 「雨」?',     options:['Cerah','Hujan','Berawan','Bersalju'], answer:1, explain:'「雨」 (ame) = hujan.' },
      { q:'Apa arti dari 「曇り」?',   options:['Cerah','Hujan','Berawan','Bersalju'], answer:2, explain:'「曇り」 (kumori) = berawan.' },
      { q:'Apa arti dari 「雪」?',     options:['Cerah','Hujan','Berawan','Salju'], answer:3, explain:'「雪」 (yuki) = salju.' },
      { q:'Apa arti dari 「風」?',     options:['Angin','Hujan','Salju','Kabut'], answer:0, explain:'「風」 (kaze) = angin.' },
      { q:'Apa arti dari 「台風」?',   options:['Topan','Gempa','Banjir','Badai salju'], answer:0, explain:'「台風」 (taifuu) = topan.' },
      { q:'Apa arti dari 「地震」?',   options:['Topan','Gempa bumi','Banjir','Tsunami'], answer:1, explain:'「地震」 (jishin) = gempa bumi.' },
      { q:'Apa arti dari 「暑い」?',   options:['Panas (udara)','Dingin','Hangat','Sejuk'], answer:0, explain:'「暑い」 (atsui) = panas (cuaca).' },
      { q:'Apa arti dari 「寒い」?',   options:['Panas','Dingin (udara)','Hangat','Sejuk'], answer:1, explain:'「寒い」 (samui) = dingin (cuaca).' },
      { q:'Apa arti dari 「涼しい」?', options:['Panas','Dingin','Sejuk / hangat','Lembab'], answer:2, explain:'「涼しい」 (suzushii) = sejuk.' },
      { q:'Apa arti dari 「暖かい」?', options:['Panas','Dingin','Hangat','Lembab'], answer:2, explain:'「暖かい」 (atatakai) = hangat.' },
      { q:'「今日は晴れです」 artinya...',   options:['Hari ini cerah','Hari ini hujan','Hari ini berawan','Hari ini bersalju'], answer:0, explain:'今日 (hari ini) + は + 晴れ (cerah) + です.' },
      { q:'「明日は雨が降ります」 artinya...',   options:['Besok akan hujan','Besok cerah','Besok berawan','Besok bersalju'], answer:0, explain:'明日 (besok) + 雨が降ります (hujan turun).' },
      { q:'Musim yang paling panas di Jepang adalah...',   options:['春','夏','秋','冬'], answer:1, explain:'夏 (natsu) = musim panas, paling panas.' },
      { q:'Musim yang paling dingin di Jepang adalah...',   options:['春','夏','秋','冬'], answer:3, explain:'冬 (fuyu) = musim dingin, paling dingin.' }
    ]
  },

  /* ============================================================
     LEVEL 19 — Hobi & Aktivitas
     ============================================================ */
  'latihan-19': {
    title: 'Hobi & Aktivitas',
    desc: 'Uji kosakata hobi dan kegiatan sehari-hari.',
    soal: [
      { q:'Apa arti dari 「趣味」?',       options:['Hobi','Pekerjaan','Sekolah','Olahraga'], answer:0, explain:'「趣味」 (shumi) = hobi.' },
      { q:'Apa arti dari 「読書」?',       options:['Membaca buku','Menulis','Menggambar','Menyanyi'], answer:0, explain:'「読書」 (dokusho) = membaca buku.' },
      { q:'Apa arti dari 「音楽」?',       options:['Musik','Gambar','Film','Buku'], answer:0, explain:'「音楽」 (ongaku) = musik.' },
      { q:'Apa arti dari 「映画」?',       options:['Musik','Film','Buku','Gambar'], answer:1, explain:'「映画」 (eiga) = film / movie.' },
      { q:'Apa arti dari 「写真」?',       options:['Foto','Gambar','Lukisan','Video'], answer:0, explain:'「写真」 (shashin) = foto.' },
      { q:'Apa arti dari 「絵」?',         options:['Foto','Gambar / lukisan','Video','Film'], answer:1, explain:'「絵」 (e) = gambar / lukisan.' },
      { q:'Apa arti dari 「歌」?',         options:['Lagu','Tari','Drama','Cerita'], answer:0, explain:'「歌」 (uta) = lagu.' },
      { q:'Apa arti dari 「踊り」?',       options:['Lagu','Tari','Drama','Cerita'], answer:1, explain:'「踊り」 (odori) = tari / tarian.' },
      { q:'Apa arti dari 「旅行」?',       options:['Perjalanan','Belanja','Kerja','Belajar'], answer:0, explain:'「旅行」 (ryokou) = perjalanan / traveling.' },
      { q:'Apa arti dari 「散歩」?',       options:['Jalan-jalan','Berlari','Berenang','Bersepeda'], answer:0, explain:'「散歩」 (sanpo) = jalan-jalan santai.' },
      { q:'Apa arti dari 「釣り」?',       options:['Memancing','Berenang','Berlayar','Menyelam'], answer:0, explain:'「釣り」 (tsuri) = memancing.' },
      { q:'Apa arti dari 「料理」?',       options:['Memasak','Makan','Minum','Mencuci'], answer:0, explain:'「料理」 (ryouri) = memasak / masakan.' },
      { q:'Apa arti dari 「買い物」?',     options:['Belanja','Menjual','Memasak','Bermain'], answer:0, explain:'「買い物」 (kaimono) = belanja.' },
      { q:'Apa arti dari 「ゲーム」?',     options:['Permainan','Film','Musik','Buku'], answer:0, explain:'「ゲーム」 (geemu) = permainan / game.' },
      { q:'Apa arti dari 「サッカー」?',   options:['Sepak bola','Basket','Voli','Tenis'], answer:0, explain:'「サッカー」 (sakkaa) = sepak bola.' },
      { q:'Apa arti dari 「野球」?',       options:['Bisbol','Sepak bola','Basket','Tenis'], answer:0, explain:'「野球」 (yakyuu) = bisbol.' },
      { q:'「私の趣味は読書です」 artinya...',   options:['Hobi saya membaca buku','Hobi saya musik','Hobi saya olahraga','Hobi saya masak'], answer:0, explain:'私の趣味 (hobi saya) + は + 読書 (membaca) + です.' },
      { q:'「音楽を聞くのが好きです」 artinya...',   options:['Suka mendengarkan musik','Suka menyanyi','Suka menari','Suka bermain musik'], answer:0, explain:'音楽を聞く (mendengar musik) + のが好き (suka).' },
      { q:'「映画を見に行きます」 artinya...',   options:['Pergi menonton film','Pergi beli film','Pergi buat film','Pergi jual film'], answer:0, explain:'映画を見に (untuk menonton film) + 行きます (pergi).' },
      { q:'「サッカーをします」 artinya...',   options:['Bermain sepak bola','Menonton sepak bola','Membeli bola','Menjual bola'], answer:0, explain:'サッカー (sepak bola) + を + します (melakukan).' }
    ]
  },

  /* ============================================================
     LEVEL 20 — Sekolah & Kerja
     ============================================================ */
  'latihan-20': {
    title: 'Sekolah & Kerja',
    desc: 'Uji kosakata sekolah, kantor, dan pekerjaan.',
    soal: [
      { q:'Apa arti dari 「学校」?',       options:['Sekolah','Kantor','Rumah','Toko'], answer:0, explain:'「学校」 (gakkou) = sekolah.' },
      { q:'Apa arti dari 「大学」?',       options:['SMA','Universitas','SD','SMP'], answer:1, explain:'「大学」 (daigaku) = universitas.' },
      { q:'Apa arti dari 「先生」?',       options:['Murid','Guru','Dokter','Petani'], answer:1, explain:'「先生」 (sensei) = guru / dokter.' },
      { q:'Apa arti dari 「学生」?',       options:['Guru','Siswa / pelajar','Karyawan','Petani'], answer:1, explain:'「学生」 (gakusei) = siswa / pelajar.' },
      { q:'Apa arti dari 「教室」?',       options:['Ruang kelas','Kantor','Perpustakaan','Kantin'], answer:0, explain:'「教室」 (kyoushitsu) = ruang kelas.' },
      { q:'Apa arti dari 「図書館」?',     options:['Ruang kelas','Perpustakaan','Kantin','Laboratorium'], answer:1, explain:'「図書館」 (toshokan) = perpustakaan.' },
      { q:'Apa arti dari 「会社」?',       options:['Sekolah','Kantor / perusahaan','Rumah','Toko'], answer:1, explain:'「会社」 (kaisha) = kantor / perusahaan.' },
      { q:'Apa arti dari 「社長」?',       options:['Direktur','Karyawan','Guru','Murid'], answer:0, explain:'「社長」 (shachou) = direktur / presiden perusahaan.' },
      { q:'Apa arti dari 「会社員」?',     options:['Direktur','Karyawan perusahaan','Guru','Dokter'], answer:1, explain:'「会社員」 (kaishain) = karyawan perusahaan.' },
      { q:'Apa arti dari 「仕事」?',       options:['Pekerjaan','Hobi','Sekolah','Liburan'], answer:0, explain:'「仕事」 (shigoto) = pekerjaan.' },
      { q:'Apa arti dari 「アルバイト」?', options:['Kerja paruh waktu','Kerja penuh','Libur','Pensiun'], answer:0, explain:'「アルバイト」 (arubaito) = kerja paruh waktu / part-time.' },
      { q:'Apa arti dari 「会議」?',       options:['Rapat','Kelas','Ujian','Libur'], answer:0, explain:'「会議」 (kaigi) = rapat / meeting.' },
      { q:'Apa arti dari 「試験」?',       options:['Ujian','Rapat','Libur','Kelas'], answer:0, explain:'「試験」 (shiken) = ujian.' },
      { q:'Apa arti dari 「宿題」?',       options:['PR / tugas rumah','Ujian','Rapat','Libur'], answer:0, explain:'「宿題」 (shukudai) = PR / pekerjaan rumah.' },
      { q:'Apa arti dari 「休み」?',       options:['Libur / istirahat','Kerja','Belajar','Ujian'], answer:0, explain:'「休み」 (yasumi) = libur / istirahat.' },
      { q:'Apa arti dari 「給料」?',       options:['Gaji','Bonus','Pajak','Utang'], answer:0, explain:'「給料」 (kyuuryou) = gaji.' },
      { q:'「学校で日本語を勉強します」 artinya...',   options:['Belajar bahasa Jepang di sekolah','Mengajar di sekolah','Bermain di sekolah','Makan di sekolah'], answer:0, explain:'学校で (di sekolah) + 日本語を勉強します (belajar bhs Jepang).' },
      { q:'「会社員です」 artinya...',   options:['(Saya) karyawan perusahaan','(Saya) direktur','(Saya) guru','(Saya) siswa'], answer:0, explain:'会社員 (karyawan) + です.' },
      { q:'「会議は何時からですか」 artinya...',   options:['Rapat mulai jam berapa?','Rapat di mana?','Rapat apa?','Rapat kapan selesai?'], answer:0, explain:'会議 (rapat) + は + 何時から (dari jam berapa) + ですか.' },
      { q:'「宿題をします」 artinya...',   options:['Mengerjakan PR','Membaca PR','Membuang PR','Menulis PR'], answer:0, explain:'宿題 (PR) + を + します (melakukan / mengerjakan).' }
    ]
  },
     /* ============================================================
     LEVEL 21 — Kata Tunjuk
     ============================================================ */
  'latihan-21': {
    title: 'Kata Tunjuk',
    desc: 'Uji pemahaman kata tunjuk benda: これ・それ・あれ・どれ.',
    soal: [
      { q:'「これ」 artinya...',   options:['Ini','Itu','Itu (jauh)','Yang mana'], answer:0, explain:'「これ」 = ini (dekat pembicara).' },
      { q:'「それ」 artinya...',   options:['Ini','Itu','Itu (jauh)','Yang mana'], answer:1, explain:'「それ」 = itu (dekat lawan bicara).' },
      { q:'「あれ」 artinya...',   options:['Ini','Itu','Itu (jauh dari keduanya)','Yang mana'], answer:2, explain:'「あれ」 = itu (jauh dari pembicara & lawan bicara).' },
      { q:'「どれ」 artinya...',   options:['Ini','Itu','Itu (jauh)','Yang mana'], answer:3, explain:'「どれ」 = yang mana (kata tanya).' },
      { q:'「この」 artinya...',   options:['...ini','...itu','...itu (jauh)','...yang mana'], answer:0, explain:'「この」 = ...ini (dipakai sebelum kata benda). Contoh: この本 = buku ini.' },
      { q:'「その」 artinya...',   options:['...ini','...itu','...itu (jauh)','...yang mana'], answer:1, explain:'「その」 = ...itu (dekat lawan bicara).' },
      { q:'「あの」 artinya...',   options:['...ini','...itu','...itu (jauh)','...yang mana'], answer:2, explain:'「あの」 = ...itu (jauh dari keduanya).' },
      { q:'「どの」 artinya...',   options:['...ini','...itu','...itu (jauh)','...yang mana'], answer:3, explain:'「どの」 = ...yang mana.' },
      { q:'「ここ」 artinya...',   options:['Di sini','Di situ','Di sana','Di mana'], answer:0, explain:'「ここ」 = di sini (tempat).' },
      { q:'「そこ」 artinya...',   options:['Di sini','Di situ','Di sana','Di mana'], answer:1, explain:'「そこ」 = di situ.' },
      { q:'「あそこ」 artinya...', options:['Di sini','Di situ','Di sana','Di mana'], answer:2, explain:'「あそこ」 = di sana.' },
      { q:'「どこ」 artinya...',   options:['Di sini','Di situ','Di sana','Di mana'], answer:3, explain:'「どこ」 = di mana.' },
      { q:'Perbedaan 「これ」 dan 「この」 adalah...',   options:['これ berdiri sendiri, この diikuti kata benda','これ formal, この santai','Sama saja','これ untuk orang, この untuk benda'], answer:0, explain:'これ = kata benda mandiri. この + kata benda.' },
      { q:'「これは本です」 artinya...',   options:['Ini buku','Itu buku','Itu (jauh) buku','Buku yang mana'], answer:0, explain:'これ + は + 本 (buku) + です.' },
      { q:'「この本は面白いです」 artinya...',   options:['Buku ini menarik','Buku itu menarik','Buku itu (jauh) menarik','Buku mana menarik'], answer:0, explain:'この本 (buku ini) + は + 面白い (menarik) + です.' },
      { q:'「あれは何ですか」 artinya...',   options:['Itu (jauh) apa?','Ini apa?','Itu apa?','Yang mana?'], answer:0, explain:'あれ (itu jauh) + は + 何 (apa) + ですか.' },
      { q:'「トイレはどこですか」 artinya...',   options:['Toilet di mana?','Toilet apa?','Toilet ini?','Toilet itu?'], answer:0, explain:'トイレ + は + どこ (di mana) + ですか.' },
      { q:'「どの本が好きですか」 artinya...',   options:['Suka buku yang mana?','Suka buku ini?','Suka buku itu?','Suka buku?'], answer:0, explain:'どの本 (buku yang mana) + が + 好き (suka) + ですか.' },
      { q:'「それはいくらですか」 artinya...',   options:['Itu berapa harganya?','Ini apa?','Itu apa?','Itu di mana?'], answer:0, explain:'それ (itu) + は + いくら (berapa) + ですか.' },
      { q:'「あの人は誰ですか」 artinya...',   options:['Orang itu (jauh) siapa?','Orang ini siapa?','Orang itu siapa?','Siapa orang?'], answer:0, explain:'あの人 (orang itu jauh) + は + 誰 (siapa) + ですか.' }
    ]
  },

  /* ============================================================
     LEVEL 22 — Bilangan & Counter
     ============================================================ */
  'latihan-22': {
    title: 'Bilangan & Counter',
    desc: 'Uji pemahaman counter (助数詞) untuk berbagai jenis benda.',
    soal: [
      { q:'Counter 「〜個」 dipakai untuk...',   options:['Benda kecil bulat','Benda panjang','Benda tipis','Manusia'], answer:0, explain:'「〜個」 (ko) = benda kecil, contoh: apel, telur, koin.' },
      { q:'Counter 「〜本」 dipakai untuk...',   options:['Benda kecil','Benda panjang silinder','Benda tipis','Manusia'], answer:1, explain:'「〜本」 (hon) = benda panjang silinder: pensil, botol, pohon.' },
      { q:'Counter 「〜枚」 dipakai untuk...',   options:['Benda kecil','Benda panjang','Benda tipis / lembaran','Manusia'], answer:2, explain:'「〜枚」 (mai) = benda tipis: kertas, baju, piring.' },
      { q:'Counter 「〜人」 dipakai untuk...',   options:['Benda kecil','Benda panjang','Benda tipis','Manusia'], answer:3, explain:'「〜人」 (nin) = manusia / orang.' },
      { q:'Counter 「〜台」 dipakai untuk...',   options:['Mesin / kendaraan','Benda panjang','Benda tipis','Manusia'], answer:0, explain:'「〜台」 (dai) = mesin / kendaraan: mobil, TV, komputer.' },
      { q:'Counter 「〜匹」 dipakai untuk...',   options:['Hewan kecil','Burung','Manusia','Benda panjang'], answer:0, explain:'「〜匹」 (hiki) = hewan kecil: kucing, anjing, ikan.' },
      { q:'Counter 「〜冊」 dipakai untuk...',   options:['Buku','Kertas','Sepatu','Manusia'], answer:0, explain:'「〜冊」 (satsu) = buku.' },
      { q:'Counter 「〜杯」 dipakai untuk...',   options:['Gelas / cangkir','Buku','Manusia','Mobil'], answer:0, explain:'「〜杯」 (hai) = gelas / cangkir (minuman).' },
      { q:'Counter 「〜階」 dipakai untuk...',   options:['Lantai bangunan','Buku','Manusia','Sepatu'], answer:0, explain:'「〜階」 (kai) = lantai bangunan.' },
      { q:'Counter 「〜歳」 dipakai untuk...',   options:['Umur','Buku','Manusia','Kendaraan'], answer:0, explain:'「〜歳」 (sai) = umur.' },
      { q:'「一個」 artinya...',   options:['Satu buah','Satu orang','Satu lembar','Satu botol'], answer:0, explain:'一個 (ikko) = satu buah.' },
      { q:'「二本」 artinya...',   options:['Dua buah','Dua batang / botol','Dua lembar','Dua orang'], answer:1, explain:'二本 (nihon) = dua batang / botol.' },
      { q:'「三枚」 artinya...',   options:['Tiga buah','Tiga batang','Tiga lembar','Tiga orang'], answer:2, explain:'三枚 (sanmai) = tiga lembar.' },
      { q:'「四人」 artinya...',   options:['Empat buah','Empat batang','Empat lembar','Empat orang'], answer:3, explain:'四人 (yonin) = empat orang.' },
      { q:'「五台」 artinya...',   options:['Lima mesin / kendaraan','Lima buah','Lima lembar','Lima orang'], answer:0, explain:'五台 (godai) = lima mesin / kendaraan.' },
      { q:'「猫が二匹います」 artinya...',   options:['Ada dua ekor kucing','Ada dua buah kucing','Ada dua orang kucing','Ada dua buku kucing'], answer:0, explain:'猫 (kucing) + が + 二匹 (dua ekor) + います (ada).' },
      { q:'「りんごを三個買いました」 artinya...',   options:['Beli tiga buah apel','Beli tiga batang apel','Beli tiga lembar apel','Beli tiga orang apel'], answer:0, explain:'りんご (apel) + を + 三個 (tiga buah) + 買いました (beli).' },
      { q:'「ビールを二本ください」 artinya...',   options:['Minta dua botol bir','Minta dua buah bir','Minta dua lembar bir','Minta dua orang bir'], answer:0, explain:'ビール (bir) + を + 二本 (dua botol) + ください (minta).' },
      { q:'「紙を五枚ください」 artinya...',   options:['Minta lima lembar kertas','Minta lima buah kertas','Minta lima batang kertas','Minta lima orang kertas'], answer:0, explain:'紙 (kertas) + を + 五枚 (lima lembar) + ください.' },
      { q:'「学生が十人います」 artinya...',   options:['Ada sepuluh siswa','Ada sepuluh buah siswa','Ada sepuluh lembar siswa','Ada sepuluh batang siswa'], answer:0, explain:'学生 (siswa) + が + 十人 (10 orang) + います.' }
    ]
  },

  /* ============================================================
     LEVEL 23 — Kata Kerja ます形
     ============================================================ */
  'latihan-23': {
    title: 'Kata Kerja ます形',
    desc: 'Uji konjugasi kata kerja bentuk ます (sopan) lengkap.',
    soal: [
      { q:'Bentuk ます dari 「食べる」 adalah...',   options:['食べます','食べります','食べります','食べまする'], answer:0, explain:'食べる (ichidan) → 食べます.' },
      { q:'Bentuk ます dari 「飲む」 adalah...',     options:['飲みます','飲ります','飲ます','飲むます'], answer:0, explain:'飲む (godan) → 飲みます (u → i + ます).' },
      { q:'Bentuk ます dari 「行く」 adalah...',     options:['行きます','行ります','行ます','行くます'], answer:0, explain:'行く (godan) → 行きます.' },
      { q:'Bentuk ます dari 「する」 adalah...',     options:['します','すります','さます','するます'], answer:0, explain:'する (irregular) → します.' },
      { q:'Bentuk ます dari 「来る」 adalah...',     options:['来ます (kimasu)','来ります','来まする','きまする'], answer:0, explain:'来る (irregular) → 来ます (kimasu).' },
      { q:'Bentuk negatif dari 「食べます」 adalah...',   options:['食べません','食べない','食べませんでした','食べないです'], answer:0, explain:'〜ます → 〜ません (negatif sopan).' },
      { q:'Bentuk lampau dari 「食べます」 adalah...',   options:['食べました','食べません','食べる','食べて'], answer:0, explain:'〜ます → 〜ました (lampau sopan).' },
      { q:'Bentuk lampau negatif dari 「食べます」 adalah...',   options:['食べませんでした','食べました','食べません','食べない'], answer:0, explain:'〜ます → 〜ませんでした.' },
      { q:'Bentuk ます dari 「書く」 adalah...',   options:['書きます','書ります','書ます','書きま'], answer:0, explain:'書く (godan) → 書きます.' },
      { q:'Bentuk ます dari 「読む」 adalah...',   options:['読みます','読ります','読ます','読むま'], answer:0, explain:'読む (godan) → 読みます.' },
      { q:'Bentuk ます dari 「見る」 adalah...',   options:['見ます','見ります','見まする','見るま'], answer:0, explain:'見る (ichidan) → 見ます.' },
      { q:'Bentuk ます dari 「起きる」 adalah...',   options:['起きます','起きります','起きまする','起きるま'], answer:0, explain:'起きる (ichidan) → 起きます.' },
      { q:'Bentuk ます dari 「帰る」 adalah...',   options:['帰ります','帰ます','帰りまする','帰るま'], answer:0, explain:'帰る (godan, meski berakhiran -eru) → 帰ります.' },
      { q:'「毎日、日本語を勉強します」 artinya...',   options:['Setiap hari belajar bahasa Jepang','Kemarin belajar bahasa Jepang','Besok belajar bahasa Jepang','Tidak belajar bahasa Jepang'], answer:0, explain:'毎日 (setiap hari) + 日本語を勉強します (belajar bhs Jepang).' },
      { q:'「昨日、映画を見ました」 artinya...',   options:['Kemarin menonton film','Besok menonton film','Hari ini menonton film','Tidak menonton film'], answer:0, explain:'昨日 (kemarin) + 映画を見ました (menonton film).' },
      { q:'「コーヒーを飲みませんか」 artinya...',   options:['Mau minum kopi?','Tidak minum kopi','Sudah minum kopi','Suka kopi'], answer:0, explain:'「〜ませんか」 = ajakan sopan.' },
      { q:'「日本語を勉強しています」 artinya...',   options:['Sedang belajar bahasa Jepang','Sudah belajar','Akan belajar','Belum belajar'], answer:0, explain:'「〜ています」 = sedang melakukan.' },
      { q:'「本を読みながら、音楽を聞きます」 artinya...',   options:['Mendengar musik sambil membaca buku','Membaca buku lalu mendengar musik','Membaca buku setelah musik','Membaca buku tanpa musik'], answer:0, explain:'「〜ながら」 = sambil melakukan.' },
      { q:'「早く寝なさい」 artinya...',   options:['Cepat tidur!','Cepat bangun!','Jangan tidur!','Sudah tidur?'], answer:0, explain:'「〜なさい」 = perintah halus (biasa ke anak).' },
      { q:'「日本語が話せます」 artinya...',   options:['Bisa berbicara bahasa Jepang','Tidak bisa berbicara','Sedang berbicara','Ingin berbicara'], answer:0, explain:'「〜せます」 = bentuk potensial (bisa).' }
    ]
  },

  /* ============================================================
     LEVEL 24 — Perkenalan Diri
     ============================================================ */
  'latihan-24': {
    title: 'Perkenalan Diri',
    desc: 'Uji kosakata dan pola kalimat untuk memperkenalkan diri.',
    soal: [
      { q:'「はじめまして」 artinya...',   options:['Salam kenal','Terima kasih','Maaf','Selamat pagi'], answer:0, explain:'「はじめまして」 = salam kenal (pertama kali bertemu).' },
      { q:'「〜と申します」 artinya...',   options:['Nama saya ~ (sopan)','Saya suka ~','Saya dari ~','Saya umur ~'], answer:0, explain:'「〜と申します」 = "nama saya ~" (sangat sopan).' },
      { q:'「〜です」 untuk perkenalan artinya...',   options:['Saya ~','Kamu ~','Dia ~','Mereka ~'], answer:0, explain:'「私は〜です」 = "saya ~".' },
      { q:'「〜から来ました」 artinya...',   options:['Datang dari ~','Pergi ke ~','Tinggal di ~','Lahir di ~'], answer:0, explain:'「〜から来ました」 = "datang dari ~".' },
      { q:'「〜歳です」 artinya...',   options:['Umur ~ tahun','Tinggi ~ cm','Berat ~ kg','Nomor ~'], answer:0, explain:'「〜歳です」 = "umur ~ tahun".' },
      { q:'「〜に住んでいます」 artinya...',   options:['Tinggal di ~','Pergi ke ~','Datang dari ~','Bekerja di ~'], answer:0, explain:'「〜に住んでいます」 = "tinggal di ~".' },
      { q:'「趣味は〜です」 artinya...',   options:['Hobi saya ~','Pekerjaan saya ~','Nama saya ~','Umur saya ~'], answer:0, explain:'「趣味は〜です」 = "hobi saya ~".' },
      { q:'「よろしくお願いします」 artinya...',   options:['Mohon bantuannya / salam hormat','Terima kasih','Maaf','Selamat tinggal'], answer:0, explain:'Diucapkan di akhir perkenalan.' },
      { q:'「お名前は何ですか」 artinya...',   options:['Siapa nama Anda?','Berapa umur Anda?','Dari mana Anda?','Di mana rumah Anda?'], answer:0, explain:'お名前 (nama) + は + 何 (apa) + ですか.' },
      { q:'「お国はどちらですか」 artinya...',   options:['Dari negara mana?','Di mana rumah?','Umur berapa?','Nama siapa?'], answer:0, explain:'お国 (negara) + は + どちら (mana, sopan) + ですか.' },
      { q:'「インドネシアから来ました」 artinya...',   options:['Datang dari Indonesia','Pergi ke Indonesia','Tinggal di Indonesia','Lahir di Indonesia'], answer:0, explain:'インドネシア (Indonesia) + から (dari) + 来ました (datang).' },
      { q:'「ジャカルタに住んでいます」 artinya...',   options:['Tinggal di Jakarta','Pergi ke Jakarta','Datang dari Jakarta','Bekerja di Jakarta'], answer:0, explain:'ジャカルタ (Jakarta) + に (di) + 住んでいます (tinggal).' },
      { q:'「私は学生です」 artinya...',   options:['Saya siswa','Saya guru','Saya karyawan','Saya dokter'], answer:0, explain:'私 + は + 学生 (siswa) + です.' },
      { q:'「日本語を勉強しています」 artinya...',   options:['Sedang belajar bahasa Jepang','Sudah belajar','Akan belajar','Belum belajar'], answer:0, explain:'日本語を勉強しています = sedang belajar bhs Jepang.' },
      { q:'「どうぞよろしく」 artinya...',   options:['Mohon kerja samanya (santai)','Terima kasih','Maaf','Selamat pagi'], answer:0, explain:'Versi singkat dari 「よろしくお願いします」.' },
      { q:'「〜さん」 dipakai untuk...',   options:['Sapaan hormat setelah nama orang lain','Sapaan ke diri sendiri','Sapaan ke hewan','Sapaan ke benda'], answer:0, explain:'「〜さん」 = akhiran hormat untuk nama orang lain (bukan diri sendiri).' },
      { q:'「〜先生」 dipakai untuk...',   options:['Guru / dokter','Karyawan','Murid','Keluarga'], answer:0, explain:'「〜先生」 = sebutan untuk guru / dokter / ahli.' },
      { q:'「初めまして、田中です」 artinya...',   options:['Salam kenal, saya Tanaka','Selamat pagi, Tanaka','Terima kasih, Tanaka','Maaf, Tanaka'], answer:0, explain:'初めまして (salam kenal) + 田中 (Tanaka) + です.' },
      { q:'「お会いできて嬉しいです」 artinya...',   options:['Senang bertemu Anda','Sampai jumpa','Terima kasih','Maaf'], answer:0, explain:'「お会いできて嬉しいです」 = "senang bisa bertemu Anda".' },
      { q:'「失礼します」 saat perkenalan artinya...',   options:['Permisi (sopan)','Terima kasih','Maaf','Selamat tinggal'], answer:0, explain:'「失礼します」 = "permisi" (sopan, saat masuk/keluar ruangan).' }
    ]
  },

  /* ============================================================
     LEVEL 25 — Review N5
     ============================================================ */
  'latihan-25': {
    title: 'Review N5',
    desc: 'Uji ulang semua materi N5: kosakata, partikel, tata bahasa, dan percakapan.',
    soal: [
      { q:'「おはようございます」 artinya...',   options:['Selamat pagi (sopan)','Selamat siang','Selamat malam','Selamat tidur'], answer:0, explain:'Sapaan pagi versi sopan.' },
      { q:'「ありがとうございます」 artinya...',   options:['Terima kasih (sopan)','Maaf','Permisi','Ya'], answer:0, explain:'Terima kasih versi sopan.' },
      { q:'Huruf 「き」 dibaca...',   options:['ka','ki','ku','ke'], answer:1, explain:'「き」 = ki (hiragana).' },
      { q:'Huruf 「カ」 dibaca...',   options:['ka','ki','ku','ke'], answer:0, explain:'「カ」 = ka (katakana).' },
      { q:'Bagaimana cara membaca 「五」?',   options:['go','roku','nana','hachi'], answer:0, explain:'「五」 = go (lima).' },
      { q:'Bagaimana cara membaca 「十」?',   options:['kyuu','juu','hyaku','sen'], answer:1, explain:'「十」 = juu (sepuluh).' },
      { q:'Apa arti dari 「友達」?',   options:['Keluarga','Teman','Guru','Tetangga'], answer:1, explain:'「友達」 (tomodachi) = teman.' },
      { q:'Apa arti dari 「学校」?',   options:['Rumah','Sekolah','Kantor','Toko'], answer:1, explain:'「学校」 (gakkou) = sekolah.' },
      { q:'Partikel 「は」 berfungsi sebagai penanda...',   options:['Topik','Subjek','Objek','Tempat'], answer:0, explain:'は = topik kalimat.' },
      { q:'Partikel 「を」 berfungsi sebagai penanda...',   options:['Topik','Subjek','Objek','Arah'], answer:2, explain:'を = objek.' },
      { q:'「水を飲みます」 artinya...',   options:['Minum air','Air diminum','Air panas','Air dingin'], answer:0, explain:'水 + を + 飲みます.' },
      { q:'「学校へ行きます」 artinya...',   options:['Pergi ke sekolah','Datang dari sekolah','Belajar di sekolah','Pulang dari sekolah'], answer:0, explain:'学校 + へ + 行きます.' },
      { q:'Bentuk negatif dari 「食べます」 adalah...',   options:['食べません','食べない','食べませんでした','食べる'], answer:0, explain:'〜ます → 〜ません.' },
      { q:'Bentuk lampau dari 「行きます」 adalah...',   options:['行きません','行きました','行く','行って'], answer:1, explain:'〜ます → 〜ました.' },
      { q:'「これは本です」 artinya...',   options:['Ini buku','Itu buku','Itu (jauh) buku','Buku yang mana'], answer:0, explain:'これ + は + 本 + です.' },
      { q:'「あの人は誰ですか」 artinya...',   options:['Orang itu siapa?','Orang ini siapa?','Ini apa?','Itu apa?'], answer:0, explain:'あの人 (orang itu) + は + 誰 (siapa) + ですか.' },
      { q:'「猫が二匹います」 artinya...',   options:['Ada dua ekor kucing','Ada dua buah kucing','Ada dua orang kucing','Ada dua buku kucing'], answer:0, explain:'猫 + が + 二匹 (dua ekor) + います.' },
      { q:'「頭が痛いです」 artinya...',   options:['Sakit kepala','Sakit perut','Sakit gigi','Demam'], answer:0, explain:'頭 (kepala) + が + 痛い (sakit) + です.' },
      { q:'「今日は晴れです」 artinya...',   options:['Hari ini cerah','Hari ini hujan','Hari ini berawan','Hari ini bersalju'], answer:0, explain:'今日 + は + 晴れ (cerah) + です.' },
      { q:'「初めまして、田中です」 artinya...',   options:['Salam kenal, saya Tanaka','Selamat pagi, Tanaka','Terima kasih, Tanaka','Maaf, Tanaka'], answer:0, explain:'Perkenalan diri sederhana.' }
    ]
  },
     /* ============================================================
     LEVEL 26 — Kanji N4 Dasar
     ============================================================ */
  'latihan-26': {
    title: 'Kanji N4 Dasar',
    desc: 'Uji hafalan kanji dasar level N4: angka, hari, waktu, arah.',
    soal: [
      { q:'Kanji 「日」 dibaca...',   options:['hi / nichi','tsuki','hi (fire)','mizu'], answer:0, explain:'「日」 = hi / nichi (matahari, hari).' },
      { q:'Kanji 「月」 dibaca...',   options:['hi','tsuki / getsu','ka','sui'], answer:1, explain:'「月」 = tsuki / getsu (bulan).' },
      { q:'Kanji 「火」 dibaca...',   options:['hi / ka','mizu','ki','kin'], answer:0, explain:'「火」 = hi / ka (api).' },
      { q:'Kanji 「水」 dibaca...',   options:['hi','mizu / sui','ki','do'], answer:1, explain:'「水」 = mizu / sui (air).' },
      { q:'Kanji 「木」 dibaca...',   options:['hi','mizu','ki / moku','kin'], answer:2, explain:'「木」 = ki / moku (pohon).' },
      { q:'Kanji 「金」 dibaca...',   options:['hi','mizu','ki','kin / kane'], answer:3, explain:'「金」 = kin / kane (emas, uang).' },
      { q:'Kanji 「土」 dibaca...',   options:['tsuchi / do','hi','mizu','ki'], answer:0, explain:'「土」 = tsuchi / do (tanah).' },
      { q:'Kanji 「年」 dibaca...',   options:['toshi / nen','tsuki','hi','jikan'], answer:0, explain:'「年」 = toshi / nen (tahun).' },
      { q:'Kanji 「時」 dibaca...',   options:['toki / ji','fun','byou','hi'], answer:0, explain:'「時」 = toki / ji (waktu, jam).' },
      { q:'Kanji 「分」 dibaca...',   options:['fun / bun','ji','byou','nen'], answer:0, explain:'「分」 = fun / bun (menit, bagian).' },
      { q:'Kanji 「上」 dibaca...',   options:['ue / jou','shita','mae','ushiro'], answer:0, explain:'「上」 = ue / jou (atas).' },
      { q:'Kanji 「下」 dibaca...',   options:['ue','shita / ka','mae','naka'], answer:1, explain:'「下」 = shita / ka (bawah).' },
      { q:'Kanji 「前」 dibaca...',   options:['mae / zen','ushiro','ue','naka'], answer:0, explain:'「前」 = mae / zen (depan, sebelum).' },
      { q:'Kanji 「後」 dibaca...',   options:['mae','ushiro / go','ue','naka'], answer:1, explain:'「後」 = ushiro / go (belakang, setelah).' },
      { q:'Kanji 「人」 dibaca...',   options:['hito / jin','otoko','onna','kodomo'], answer:0, explain:'「人」 = hito / jin (orang).' },
      { q:'Kanji 「男」 dibaca...',   options:['otoko','onna','hito','kodomo'], answer:0, explain:'「男」 = otoko (laki-laki).' },
      { q:'Kanji 「女」 dibaca...',   options:['otoko','onna','hito','kodomo'], answer:1, explain:'「女」 = onna (perempuan).' },
      { q:'Kanji 「子」 dibaca...',   options:['otoko','onna','ko','hito'], answer:2, explain:'「子」 = ko (anak).' },
      { q:'Kanji 「口」 dibaca...',   options:['kuchi','me','mimi','hana'], answer:0, explain:'「口」 = kuchi (mulut).' },
      { q:'Kanji 「目」 dibaca...',   options:['kuchi','me','mimi','hana'], answer:1, explain:'「目」 = me (mata).' },
      { q:'Kanji 「耳」 dibaca...',   options:['kuchi','me','mimi','hana'], answer:2, explain:'「耳」 = mimi (telinga).' },
      { q:'Kanji 「手」 dibaca...',   options:['te','ashi','yubi','ude'], answer:0, explain:'「手」 = te (tangan).' },
      { q:'Kanji 「足」 dibaca...',   options:['te','ashi','yubi','ude'], answer:1, explain:'「足」 = ashi (kaki).' },
      { q:'Kanji 「学」 dibaca...',   options:['gaku / manabu','kou','sei','satsu'], answer:0, explain:'「学」 = gaku / manabu (belajar).' },
      { q:'Kanji 「校」 dibaca...',   options:['gaku','kou','sei','in'], answer:1, explain:'「校」 = kou (sekolah).' }
    ]
  },

  /* ============================================================
     LEVEL 27 — Kata Kerja ない形
     ============================================================ */
  'latihan-27': {
    title: 'Kata Kerja ない形',
    desc: 'Uji konjugasi kata kerja bentuk negatif ない (bentuk kasual).',
    soal: [
      { q:'Bentuk ない dari 「食べる」 adalah...',   options:['食べない','食べらない','食べらない','食べるない'], answer:0, explain:'食べる (ichidan) → 食べない.' },
      { q:'Bentuk ない dari 「飲む」 adalah...',     options:['飲まない','飲みない','飲らない','飲むない'], answer:0, explain:'飲む (godan) → 飲まない (u → a + ない).' },
      { q:'Bentuk ない dari 「行く」 adalah...',     options:['行かない','行きない','行らない','行くない'], answer:0, explain:'行く → 行かない.' },
      { q:'Bentuk ない dari 「する」 adalah...',     options:['しない','すない','さない','するない'], answer:0, explain:'する (irregular) → しない.' },
      { q:'Bentuk ない dari 「来る」 adalah...',     options:['来ない (konai)','来らない','来るない','きない'], answer:0, explain:'来る (irregular) → 来ない (konai).' },
      { q:'Bentuk ない dari 「書く」 adalah...',     options:['書かない','書きない','書らない','書くない'], answer:0, explain:'書く → 書かない.' },
      { q:'Bentuk ない dari 「読む」 adalah...',     options:['読まない','読みない','読らない','読むない'], answer:0, explain:'読む → 読まない.' },
      { q:'Bentuk ない dari 「見る」 adalah...',     options:['見ない','見らない','見るない','みない'], answer:0, explain:'見る (ichidan) → 見ない.' },
      { q:'Bentuk ない dari 「話す」 adalah...',     options:['話さない','話しない','話らない','話すない'], answer:0, explain:'話す → 話さない.' },
      { q:'Bentuk ない dari 「待つ」 adalah...',     options:['待たない','待ちない','待らない','待つない'], answer:0, explain:'待つ → 待たない.' },
      { q:'Bentuk ない dari 「買う」 adalah...',     options:['買わない','買いない','買らない','買うない'], answer:0, explain:'買う → 買わない (u → wa).' },
      { q:'Bentuk ない dari 「泳ぐ」 adalah...',     options:['泳がない','泳ぎない','泳らない','泳ぐない'], answer:0, explain:'泳ぐ → 泳がない.' },
      { q:'Bentuk ない dari 「遊ぶ」 adalah...',     options:['遊ばない','遊びない','遊らない','遊ぶない'], answer:0, explain:'遊ぶ → 遊ばない.' },
      { q:'Bentuk ない dari 「死ぬ」 adalah...',     options:['死なない','死にない','死らない','死ぬない'], answer:0, explain:'死ぬ → 死なない.' },
      { q:'Bentuk ない dari 「帰る」 adalah...',     options:['帰らない','帰ない','帰りない','帰るない'], answer:0, explain:'帰る (godan, meski berakhiran -eru) → 帰らない.' },
      { q:'「今日は学校に行かない」 artinya...',   options:['Hari ini tidak pergi ke sekolah','Hari ini pergi ke sekolah','Kemarin tidak ke sekolah','Besok tidak ke sekolah'], answer:0, explain:'行かない = tidak pergi (bentuk kasual).' },
      { q:'「肉を食べない」 artinya...',   options:['Tidak makan daging','Makan daging','Suka daging','Beli daging'], answer:0, explain:'食べない = tidak makan.' },
      { q:'「お酒を飲まない」 artinya...',   options:['Tidak minum alkohol','Minum alkohol','Suka alkohol','Beli alkohol'], answer:0, explain:'飲まない = tidak minum.' },
      { q:'Bentuk sopan dari 「食べない」 adalah...',   options:['食べません','食べないです','食べるない','食べませんでした'], answer:0, explain:'〜ない (kasual) = 〜ません (sopan).' },
      { q:'「〜ないでください」 artinya...',   options:['Tolong jangan ~','Tolong ~','Sudah ~','Belum ~'], answer:0, explain:'「〜ないでください」 = "tolong jangan ~".' }
    ]
  },

  /* ============================================================
     LEVEL 28 — Kata Kerja た形
     ============================================================ */
  'latihan-28': {
    title: 'Kata Kerja た形',
    desc: 'Uji konjugasi kata kerja bentuk lampau た (bentuk kasual).',
    soal: [
      { q:'Bentuk た dari 「食べる」 adalah...',   options:['食べた','食べだ','食べった','食べるた'], answer:0, explain:'食べる (ichidan) → 食べた.' },
      { q:'Bentuk た dari 「飲む」 adalah...',     options:['飲んだ','飲みた','飲った','飲むた'], answer:0, explain:'飲む (godan, む→んだ) → 飲んだ.' },
      { q:'Bentuk た dari 「行く」 adalah...',     options:['行った','行いた','行くだ','行った'], answer:0, explain:'行く → 行った (く→いた, tapi 行く spesial).' },
      { q:'Bentuk た dari 「する」 adalah...',     options:['した','すた','さた','するた'], answer:0, explain:'する (irregular) → した.' },
      { q:'Bentuk た dari 「来る」 adalah...',     options:['来た (kita)','来たる','きた','きるた'], answer:0, explain:'来る (irregular) → 来た (kita).' },
      { q:'Bentuk た dari 「書く」 adalah...',     options:['書いた','書きた','書った','書くだ'], answer:0, explain:'書く → 書いた (く→いた).' },
      { q:'Bentuk た dari 「読む」 adalah...',     options:['読んだ','読みた','読った','読むた'], answer:0, explain:'読む → 読んだ (む→んだ).' },
      { q:'Bentuk た dari 「見る」 adalah...',     options:['見た','見だ','見った','見るた'], answer:0, explain:'見る (ichidan) → 見た.' },
      { q:'Bentuk た dari 「話す」 adalah...',     options:['話した','話すた','話った','話ちた'], answer:0, explain:'話す → 話した (す→した).' },
      { q:'Bentuk た dari 「待つ」 adalah...',     options:['待った','待ちた','待すた','待つた'], answer:0, explain:'待つ → 待った (つ→った).' },
      { q:'Bentuk た dari 「買う」 adalah...',     options:['買った','買いた','買うた','買わた'], answer:0, explain:'買う → 買った (う→った).' },
      { q:'Bentuk た dari 「泳ぐ」 adalah...',     options:['泳いだ','泳ぎた','泳った','泳ぐた'], answer:0, explain:'泳ぐ → 泳いだ (ぐ→いだ).' },
      { q:'Bentuk た dari 「遊ぶ」 adalah...',     options:['遊んだ','遊びた','遊った','遊ぶた'], answer:0, explain:'遊ぶ → 遊んだ (ぶ→んだ).' },
      { q:'Bentuk た dari 「死ぬ」 adalah...',     options:['死んだ','死にた','死った','死ぬた'], answer:0, explain:'死ぬ → 死んだ (ぬ→んだ).' },
      { q:'Bentuk た dari 「帰る」 adalah...',     options:['帰った','帰た','帰りた','帰るた'], answer:0, explain:'帰る (godan) → 帰った.' },
      { q:'「昨日、映画を見た」 artinya...',   options:['Kemarin menonton film','Besok menonton film','Hari ini menonton film','Tidak menonton film'], answer:0, explain:'見た = menonton (lampau kasual).' },
      { q:'「もうご飯を食べた」 artinya...',   options:['Sudah makan nasi','Belum makan nasi','Akan makan nasi','Sedang makan nasi'], answer:0, explain:'食べた = sudah makan.' },
      { q:'「日本に行ったことがあります」 artinya...',   options:['Pernah ke Jepang','Belum pernah ke Jepang','Akan ke Jepang','Sedang di Jepang'], answer:0, explain:'「〜たことがあります」 = pernah melakukan.' },
      { q:'Bentuk sopan dari 「食べた」 adalah...',   options:['食べました','食べたです','食べるです','食べません'], answer:0, explain:'〜た (kasual) = 〜ました (sopan).' },
      { q:'「〜たほうがいいです」 artinya...',   options:['Sebaiknya ~','Jangan ~','Boleh ~','Tidak boleh ~'], answer:0, explain:'「〜たほうがいい」 = "sebaiknya ~".' }
    ]
  },

  /* ============================================================
     LEVEL 29 — Kata Kerja Potensial
     ============================================================ */
  'latihan-29': {
    title: 'Kata Kerja Potensial',
    desc: 'Uji konjugasi kata kerja bentuk potensial (kemampuan / bisa).',
    soal: [
      { q:'Bentuk potensial dari 「食べる」 adalah...',   options:['食べられる','食べれる','食べする','食べできる'], answer:0, explain:'食べる (ichidan) → 食べられる (bisa makan).' },
      { q:'Bentuk potensial dari 「飲む」 adalah...',     options:['飲める','飲まれる','飲みれる','飲むれる'], answer:0, explain:'飲む (godan) → 飲める (u → e + る).' },
      { q:'Bentuk potensial dari 「行く」 adalah...',     options:['行ける','行かれる','行きれる','行くれる'], answer:0, explain:'行く → 行ける (bisa pergi).' },
      { q:'Bentuk potensial dari 「する」 adalah...',     options:['できる','しれる','すれる','される'], answer:0, explain:'する (irregular) → できる (bisa melakukan).' },
      { q:'Bentuk potensial dari 「来る」 adalah...',     options:['来られる (korareru)','来れる','きれる','くるれる'], answer:0, explain:'来る (irregular) → 来られる (bisa datang).' },
      { q:'Bentuk potensial dari 「書く」 adalah...',     options:['書ける','書かれる','書きれる','書くれる'], answer:0, explain:'書く → 書ける (bisa menulis).' },
      { q:'Bentuk potensial dari 「読む」 adalah...',     options:['読める','読まれる','読みれる','読むれる'], answer:0, explain:'読む → 読める (bisa membaca).' },
      { q:'Bentuk potensial dari 「見る」 adalah...',     options:['見られる','見れる','見する','見できる'], answer:0, explain:'見る (ichidan) → 見られる (bisa melihat).' },
      { q:'Bentuk potensial dari 「話す」 adalah...',     options:['話せる','話される','話しれる','話すれる'], answer:0, explain:'話す → 話せる (bisa berbicara).' },
      { q:'Bentuk potensial dari 「待つ」 adalah...',     options:['待てる','待たれる','待ちれる','待つれる'], answer:0, explain:'待つ → 待てる (bisa menunggu).' },
      { q:'Bentuk potensial dari 「買う」 adalah...',     options:['買える','買われる','買いれる','買うれる'], answer:0, explain:'買う → 買える (bisa membeli).' },
      { q:'Bentuk potensial dari 「泳ぐ」 adalah...',     options:['泳げる','泳がれる','泳ぎれる','泳ぐれる'], answer:0, explain:'泳ぐ → 泳げる (bisa berenang).' },
      { q:'Bentuk potensial dari 「遊ぶ」 adalah...',     options:['遊べる','遊ばれる','遊びれる','遊ぶれる'], answer:0, explain:'遊ぶ → 遊べる (bisa bermain).' },
      { q:'Bentuk potensial dari 「帰る」 adalah...',     options:['帰れる','帰られる','帰りれる','帰るれる'], answer:0, explain:'帰る (godan) → 帰れる (bisa pulang).' },
      { q:'「日本語が話せます」 artinya...',   options:['Bisa berbicara bahasa Jepang','Tidak bisa berbicara','Sedang berbicara','Ingin berbicara'], answer:0, explain:'話せます = bisa berbicara (sopan).' },
      { q:'「漢字が読めます」 artinya...',   options:['Bisa membaca kanji','Tidak bisa membaca kanji','Sedang membaca kanji','Ingin membaca kanji'], answer:0, explain:'読めます = bisa membaca.' },
      { q:'「寿司が食べられます」 artinya...',   options:['Bisa makan sushi','Tidak bisa makan sushi','Sedang makan sushi','Ingin makan sushi'], answer:0, explain:'食べられます = bisa makan.' },
      { q:'「ここで写真が撮れます」 artinya...',   options:['Di sini bisa mengambil foto','Di sini tidak bisa foto','Di sini sedang foto','Di sini ingin foto'], answer:0, explain:'撮れます = bisa mengambil (foto).' },
      { q:'「日本語が話せません」 artinya...',   options:['Tidak bisa berbicara bahasa Jepang','Bisa berbicara','Sedang berbicara','Ingin berbicara'], answer:0, explain:'話せません = tidak bisa berbicara.' },
      { q:'Partikel untuk objek bentuk potensial biasanya...',   options:['が (bukan を)','を','に','へ'], answer:0, explain:'Bentuk potensial sering pakai が, contoh: 日本語が話せる.' }
    ]
  },

  /* ============================================================
     LEVEL 30 — Kata Kerja Volitional
     ============================================================ */
  'latihan-30': {
    title: 'Kata Kerja Volitional',
    desc: 'Uji konjugasi kata kerja bentuk ajakan (volitional / 意向形).',
    soal: [
      { q:'Bentuk volitional dari 「食べる」 adalah...',   options:['食べよう','食べろう','食べようる','食べるよう'], answer:0, explain:'食べる (ichidan) → 食べよう (mari makan).' },
      { q:'Bentuk volitional dari 「飲む」 adalah...',     options:['飲もう','飲みよう','飲まよう','飲むよう'], answer:0, explain:'飲む (godan) → 飲もう (u → o + う).' },
      { q:'Bentuk volitional dari 「行く」 adalah...',     options:['行こう','行きよう','行かよう','行くよう'], answer:0, explain:'行く → 行こう (mari pergi).' },
      { q:'Bentuk volitional dari 「する」 adalah...',     options:['しよう','すよう','さよう','するよう'], answer:0, explain:'する (irregular) → しよう.' },
      { q:'Bentuk volitional dari 「来る」 adalah...',     options:['来よう (koyou)','来ようる','きよう','くるよう'], answer:0, explain:'来る (irregular) → 来よう (koyou).' },
      { q:'Bentuk volitional dari 「書く」 adalah...',     options:['書こう','書きよう','書かよう','書くよう'], answer:0, explain:'書く → 書こう.' },
      { q:'Bentuk volitional dari 「読む」 adalah...',     options:['読もう','読みよう','読まよう','読むよう'], answer:0, explain:'読む → 読もう.' },
      { q:'Bentuk volitional dari 「見る」 adalah...',     options:['見よう','見ろう','見ようる','見るよう'], answer:0, explain:'見る (ichidan) → 見よう.' },
      { q:'Bentuk volitional dari 「話す」 adalah...',     options:['話そう','話しよう','話さよう','話すよう'], answer:0, explain:'話す → 話そう.' },
      { q:'Bentuk volitional dari 「待つ」 adalah...',     options:['待とう','待ちよう','待たよう','待つよう'], answer:0, explain:'待つ → 待とう.' },
      { q:'Bentuk volitional dari 「買う」 adalah...',     options:['買おう','買いよう','買わよう','買うよう'], answer:0, explain:'買う → 買おう.' },
      { q:'Bentuk volitional dari 「泳ぐ」 adalah...',     options:['泳ごう','泳ぎよう','泳がよう','泳ぐよう'], answer:0, explain:'泳ぐ → 泳ごう.' },
      { q:'Bentuk volitional dari 「遊ぶ」 adalah...',     options:['遊ぼう','遊びよう','遊ばよう','遊ぶよう'], answer:0, explain:'遊ぶ → 遊ぼう.' },
      { q:'Bentuk volitional dari 「帰る」 adalah...',     options:['帰ろう','帰りよう','帰らよう','帰るよう'], answer:0, explain:'帰る (godan) → 帰ろう.' },
      { q:'「一緒に食べよう」 artinya...',   options:['Mari makan bersama','Jangan makan','Sedang makan','Sudah makan'], answer:0, explain:'食べよう = mari makan (ajakan kasual).' },
      { q:'「映画を見よう」 artinya...',   options:['Mari menonton film','Jangan menonton film','Sedang menonton film','Sudah menonton film'], answer:0, explain:'見よう = mari menonton.' },
      { q:'「そろそろ帰ろう」 artinya...',   options:['Mari kita pulang','Jangan pulang','Sedang pulang','Sudah pulang'], answer:0, explain:'そろそろ = "sebentar lagi". 帰ろう = mari pulang.' },
      { q:'Bentuk sopan dari volitional 「食べよう」 adalah...',   options:['食べましょう','食べよう です','食べるます','食べましょうか'], answer:0, explain:'〜よう (kasual) = 〜ましょう (sopan).' },
      { q:'「〜ましょうか」 artinya...',   options:['Mau saya bantu ~?','Mari ~','Jangan ~','Sudah ~'], answer:0, explain:'「〜ましょうか」 = menawarkan bantuan.' },
      { q:'「〜ませんか」 artinya...',   options:['Mau ~ (ajakan halus)?','Mari ~','Jangan ~','Sudah ~'], answer:0, explain:'「〜ませんか」 = ajakan sopan: "mau ~ ?"' }
    ]
  },
     /* ============================================================
     LEVEL 31 — Kalimat Pasif (受身形)
     ============================================================ */
  'latihan-31': {
    title: 'Kalimat Pasif',
    desc: 'Uji pemahaman bentuk pasif (受身形) dalam bahasa Jepang.',
    soal: [
      { q:'Bentuk pasif dari 「食べる」 adalah...',   options:['食べられる','食べれる','食べさせる','食べよう'], answer:0, explain:'食べる (ichidan) → 食べられる (dimakan).' },
      { q:'Bentuk pasif dari 「飲む」 adalah...',     options:['飲まれる','飲める','飲ませる','飲もう'], answer:0, explain:'飲む (godan) → 飲まれる (diminum).' },
      { q:'Bentuk pasif dari 「行く」 adalah...',     options:['行かれる','行ける','行かせる','行こう'], answer:0, explain:'行く → 行かれる.' },
      { q:'Bentuk pasif dari 「する」 adalah...',     options:['される','できる','させる','しよう'], answer:0, explain:'する (irregular) → される.' },
      { q:'Bentuk pasif dari 「来る」 adalah...',     options:['来られる (korareru)','来れる','来させる','来よう'], answer:0, explain:'来る (irregular) → 来られる.' },
      { q:'Bentuk pasif dari 「書く」 adalah...',     options:['書かれる','書ける','書かせる','書こう'], answer:0, explain:'書く → 書かれる.' },
      { q:'Bentuk pasif dari 「読む」 adalah...',     options:['読まれる','読める','読ませる','読もう'], answer:0, explain:'読む → 読まれる.' },
      { q:'Bentuk pasif dari 「見る」 adalah...',     options:['見られる','見れる','見させる','見よう'], answer:0, explain:'見る (ichidan) → 見られる.' },
      { q:'Bentuk pasif dari 「話す」 adalah...',     options:['話される','話せる','話させる','話そう'], answer:0, explain:'話す → 話される.' },
      { q:'Bentuk pasif dari 「買う」 adalah...',     options:['買われる','買える','買わせる','買おう'], answer:0, explain:'買う → 買われる.' },
      { q:'「私は先生に褒められた」 artinya...',   options:['Saya dipuji oleh guru','Saya memuji guru','Saya akan memuji guru','Saya tidak memuji guru'], answer:0, explain:'褒められた = dipuji. Pelaku pakai に.' },
      { q:'「ケーキが食べられた」 artinya...',   options:['Kue dimakan','Kue makan','Kue akan makan','Kue tidak makan'], answer:0, explain:'食べられた = dimakan (pasif).' },
      { q:'「弟に本を読まれた」 artinya...',   options:['Buku saya dibaca adik','Saya membaca buku adik','Adik membaca buku','Buku adik dibaca saya'], answer:0, explain:'Pasif "merugikan" — buku saya dibaca adik.' },
      { q:'「泥棒に財布を盗まれた」 artinya...',   options:['Dompet saya dicuri pencuri','Saya mencuri dompet','Pencuri mencuri dompet','Dompet pencuri dicuri'], answer:0, explain:'盗まれた = dicuri.' },
      { q:'Partikel pelaku dalam kalimat pasif adalah...',   options:['に','を','が','で'], answer:0, explain:'Pelaku (yang melakukan) ditandai partikel に.' },
      { q:'「この本は多くの人に読まれています」 artinya...',   options:['Buku ini dibaca banyak orang','Buku ini membaca banyak orang','Buku ini akan dibaca','Buku ini tidak dibaca'], answer:0, explain:'読まれています = sedang dibaca (pasif).' },
      { q:'「英語が話されます」 artinya...',   options:['Bahasa Inggris diucapkan/dipakai','Bahasa Inggris bicara','Bahasa Inggris akan bicara','Bahasa Inggris tidak bicara'], answer:0, explain:'話されます = dipakai/diucapkan (pasif).' },
      { q:'Bentuk pasif 「〜られる」 sama dengan bentuk...',   options:['Potensial (bisa) untuk ichidan','Kausatif','Volitional','Negatif'], answer:0, explain:'Ichidan: 食べられる bisa berarti "bisa makan" atau "dimakan" — tergantung konteks.' },
      { q:'「子供に泣かれた」 artinya...',   options:['Saya dibuat menangis oleh anak','Anak menangis','Saya menangisi anak','Anak dibuat menangis'], answer:0, explain:'Pasif "merugikan" — saya dibuat repot karena anak menangis.' },
      { q:'「先生に怒られた」 artinya...',   options:['Saya dimarahi guru','Saya memarahi guru','Guru marah','Saya marah'], answer:0, explain:'怒られた = dimarahi.' }
    ]
  },

  /* ============================================================
     LEVEL 32 — Kalimat Kausatif (使役形)
     ============================================================ */
  'latihan-32': {
    title: 'Kalimat Kausatif',
    desc: 'Uji pemahaman bentuk kausatif (使役形) — menyuruh / membiarkan.',
    soal: [
      { q:'Bentuk kausatif dari 「食べる」 adalah...',   options:['食べさせる','食べられる','食べよう','食べる'], answer:0, explain:'食べる (ichidan) → 食べさせる (menyuruh makan).' },
      { q:'Bentuk kausatif dari 「飲む」 adalah...',     options:['飲ませる','飲まれる','飲める','飲もう'], answer:0, explain:'飲む (godan) → 飲ませる (menyuruh minum).' },
      { q:'Bentuk kausatif dari 「行く」 adalah...',     options:['行かせる','行かれる','行ける','行こう'], answer:0, explain:'行く → 行かせる.' },
      { q:'Bentuk kausatif dari 「する」 adalah...',     options:['させる','される','できる','しよう'], answer:0, explain:'する (irregular) → させる.' },
      { q:'Bentuk kausatif dari 「来る」 adalah...',     options:['来させる (kosaseru)','来られる','来れる','来よう'], answer:0, explain:'来る (irregular) → 来させる.' },
      { q:'Bentuk kausatif dari 「書く」 adalah...',     options:['書かせる','書かれる','書ける','書こう'], answer:0, explain:'書く → 書かせる.' },
      { q:'Bentuk kausatif dari 「読む」 adalah...',     options:['読ませる','読まれる','読める','読もう'], answer:0, explain:'読む → 読ませる.' },
      { q:'Bentuk kausatif dari 「見る」 adalah...',     options:['見させる','見られる','見れる','見よう'], answer:0, explain:'見る (ichidan) → 見させる.' },
      { q:'Bentuk kausatif dari 「話す」 adalah...',     options:['話させる','話される','話せる','話そう'], answer:0, explain:'話す → 話させる.' },
      { q:'Bentuk kausatif dari 「待つ」 adalah...',     options:['待たせる','待たれる','待てる','待とう'], answer:0, explain:'待つ → 待たせる.' },
      { q:'Bentuk kausatif dari 「買う」 adalah...',     options:['買わせる','買われる','買える','買おう'], answer:0, explain:'買う → 買わせる.' },
      { q:'Bentuk kausatif dari 「帰る」 adalah...',     options:['帰らせる','帰られる','帰れる','帰ろう'], answer:0, explain:'帰る (godan) → 帰らせる.' },
      { q:'「子供に野菜を食べさせる」 artinya...',   options:['Menyuruh anak makan sayur','Anak makan sayur','Saya makan sayur','Saya makan bersama anak'], answer:0, explain:'食べさせる = menyuruh makan.' },
      { q:'「弟を学校に行かせる」 artinya...',   options:['Menyuruh adik pergi ke sekolah','Adik pergi ke sekolah','Saya pergi ke sekolah','Adik disekolahkan'], answer:0, explain:'行かせる = menyuruh pergi.' },
      { q:'「先生は学生に本を読ませた」 artinya...',   options:['Guru menyuruh siswa membaca buku','Guru membaca buku','Siswa menyuruh guru','Siswa membaca buku sendiri'], answer:0, explain:'読ませた = menyuruh membaca.' },
      { q:'Bentuk kausatif-pasif dari 「食べる」 adalah...',   options:['食べさせられる','食べさせる','食べられる','食べさせた'], answer:0, explain:'Kausatif-pasif = "dipaksa makan".' },
      { q:'「私は毎日残業させられる」 artinya...',   options:['Saya dipaksa lembur setiap hari','Saya lembur setiap hari','Saya menyuruh lembur','Saya tidak lembur'], answer:0, explain:'させられる = dipaksa (kausatif-pasif).' },
      { q:'「〜させてください」 artinya...',   options:['Tolong izinkan saya ~','Tolong jangan ~','Tolong suruh saya ~','Tolong buat saya ~'], answer:0, explain:'「〜させてください」 = minta izin melakukan sesuatu.' },
      { q:'「〜させていただけませんか」 artinya...',   options:['Bolehkah saya ~ (sangat sopan)','Jangan ~','Tolong ~','Saya tidak mau ~'], answer:0, explain:'Bentuk sangat sopan untuk minta izin.' },
      { q:'Bentuk sopan dari kausatif 「食べさせる」 adalah...',   options:['食べさせます','食べさせります','食べさせるです','食べます'], answer:0, explain:'Kausatif + ます = 食べさせます.' }
    ]
  },

  /* ============================================================
     LEVEL 33 — Kondisional たら
     ============================================================ */
  'latihan-33': {
    title: 'Kondisional たら',
    desc: 'Uji pemahaman bentuk pengandaian (条件形) dan たら.',
    soal: [
      { q:'Bentuk たら dari 「食べる」 adalah...',   options:['食べたら','食べったら','食べるたら','食べだら'], answer:0, explain:'食べる → 食べた + ら = 食べたら.' },
      { q:'Bentuk たら dari 「行く」 adalah...',     options:['行ったら','行きたら','行くたら','行いだら'], answer:0, explain:'行く → 行った + ら = 行ったら.' },
      { q:'Bentuk たら dari 「する」 adalah...',     options:['したら','すたら','さたら','するたら'], answer:0, explain:'する → した + ら = したら.' },
      { q:'Bentuk たら dari 「来る」 adalah...',     options:['来たら (kitara)','来ったら','来るたら','きだら'], answer:0, explain:'来る → 来た + ら = 来たら.' },
      { q:'Bentuk たら dari 「飲む」 adalah...',     options:['飲んだら','飲みたら','飲ったら','飲むたら'], answer:0, explain:'飲む → 飲んだ + ら = 飲んだら.' },
      { q:'「もし雨が降ったら、行きません」 artinya...',   options:['Kalau hujan, tidak pergi','Kalau hujan, pergi','Kalau tidak hujan, pergi','Meski hujan, pergi'], answer:0, explain:'「〜たら」 = kalau ~.' },
      { q:'「時間があったら、映画を見ます」 artinya...',   options:['Kalau ada waktu, menonton film','Kalau tidak ada waktu, menonton','Meski ada waktu, tidak menonton','Selalu menonton film'], answer:0, explain:'あったら = kalau ada.' },
      { q:'「日本に行ったら、寿司を食べたい」 artinya...',   options:['Kalau ke Jepang, ingin makan sushi','Kalau tidak ke Jepang','Saya sudah ke Jepang','Sushi Jepang enak'], answer:0, explain:'行ったら = kalau pergi.' },
      { q:'「暑かったら、エアコンをつけてください」 artinya...',   options:['Kalau panas, nyalakan AC','Kalau dingin, nyalakan AC','Meski panas, jangan AC','Saya nyalakan AC'], answer:0, explain:'暑かったら = kalau panas.' },
      { q:'Bentuk たら dari 「高い」 (i-adj) adalah...',   options:['高かったら','高いたら','高いたら','高だら'], answer:0, explain:'i-adj → 〜かったら.' },
      { q:'Bentuk たら dari 「静か」 (na-adj) adalah...',   options:['静かだったら','静かたら','静かいたら','静かだたら'], answer:0, explain:'na-adj → 〜だったら.' },
      { q:'Bentuk たら dari 「学生」 (noun) adalah...',   options:['学生だったら','学生たら','学生いたら','学生だたら'], answer:0, explain:'Noun → 〜だったら.' },
      { q:'「学生だったら、割引があります」 artinya...',   options:['Kalau siswa, ada diskon','Kalau bukan siswa, ada diskon','Meski siswa, tidak ada diskon','Siswa tidak dapat diskon'], answer:0, explain:'学生だったら = kalau (kamu) siswa.' },
      { q:'「〜たら」 biasanya dipakai untuk...',   options:['Kondisi yang mungkin terjadi','Kondisi yang pasti tidak mungkin','Perintah','Larangan'], answer:0, explain:'「〜たら」 = pengandaian umum.' },
      { q:'Bentuk kondisional lain selain たら adalah...',   options:['〜ば dan 〜なら','〜ても','〜ながら','〜ので'], answer:0, explain:'Ada 〜ば (jika), 〜なら (kalau), 〜と (kalau pasti).' },
      { q:'「安ければ、買います」 artinya...',   options:['Kalau murah, saya beli','Kalau mahal, saya beli','Meski murah, tidak beli','Saya tidak beli'], answer:0, explain:'「〜ば」 = kalau (kondisi).' },
      { q:'「静かなら、勉強できます」 artinya...',   options:['Kalau tenang, bisa belajar','Kalau ramai, bisa belajar','Meski tenang, tidak bisa','Saya tidak belajar'], answer:0, explain:'「〜なら」 = kalau.' },
      { q:'「春になると、桜が咲きます」 artinya...',   options:['Kalau musim semi, sakura mekar','Kalau musim panas, sakura mekar','Meski semi, tidak mekar','Sakura selalu mekar'], answer:0, explain:'「〜と」 = kalau (hasil alami/pasti).' },
      { q:'「もし」 artinya...',   options:['Jika / kalau','Tetapi','Karena','Meskipun'], answer:0, explain:'「もし」 = "jika" (menekankan pengandaian).' },
      { q:'「〜たらどうですか」 artinya...',   options:['Bagaimana kalau ~?','Jangan ~','Sudah ~','Belum ~'], answer:0, explain:'「〜たらどうですか」 = saran: "bagaimana kalau ~?"' }
    ]
  },

  /* ============================================================
     LEVEL 34 — Partikel Lanjutan
     ============================================================ */
  'latihan-34': {
    title: 'Partikel Lanjutan',
    desc: 'Uji pemahaman partikel lanjutan: から・まで・より・ほど・だけ・しか.',
    soal: [
      { q:'Partikel 「から」 artinya...',   options:['Dari (titik awal)','Sampai','Sampai (akhir)','Hanya'], answer:0, explain:'「から」 = dari (waktu/tempat awal).' },
      { q:'Partikel 「まで」 artinya...',   options:['Dari','Sampai','Hanya','Tentang'], answer:1, explain:'「まで」 = sampai.' },
      { q:'Partikel 「より」 artinya...',   options:['Dari','Sampai','Daripada','Tentang'], answer:2, explain:'「より」 = daripada (perbandingan).' },
      { q:'Partikel 「ほど」 artinya...',   options:['Sampai (derajat)','Dari','Daripada','Hanya'], answer:0, explain:'「ほど」 = sampai (derajat) / se~ .' },
      { q:'Partikel 「だけ」 artinya...',   options:['Hanya','Sampai','Dari','Tentang'], answer:0, explain:'「だけ」 = hanya.' },
      { q:'Partikel 「しか」 artinya...',   options:['Hanya (dengan negatif)','Sampai','Dari','Tentang'], answer:0, explain:'「しか」 = hanya (harus dengan kata kerja negatif).' },
      { q:'「9時から5時まで働きます」 artinya...',   options:['Bekerja dari jam 9 sampai 5','Bekerja jam 9 saja','Bekerja jam 5 saja','Bekerja sepanjang hari'], answer:0, explain:'から...まで = dari...sampai.' },
      { q:'「東京から大阪まで行きます」 artinya...',   options:['Pergi dari Tokyo ke Osaka','Pergi Tokyo-Osaka saja','Tinggal di Tokyo','Tinggal di Osaka'], answer:0, explain:'から...まで = dari...sampai.' },
      { q:'「寿司より天ぷらが好きです」 artinya...',   options:['Lebih suka tempura daripada sushi','Lebih suka sushi daripada tempura','Suka keduanya','Tidak suka keduanya'], answer:0, explain:'A より B が好き = lebih suka B daripada A.' },
      { q:'「日本語は英語より難しいです」 artinya...',   options:['Bhs Jepang lebih sulit daripada bhs Inggris','Bhs Inggris lebih sulit','Sama sulitnya','Keduanya mudah'], answer:0, explain:'A は B より〜 = A lebih ~ daripada B.' },
      { q:'「思ったほど難しくない」 artinya...',   options:['Tidak sesulit yang dipikirkan','Sangat sulit','Sulit sekali','Sama seperti dipikir'], answer:0, explain:'「〜ほど〜ない」 = tidak se~ .' },
      { q:'「水だけ飲みます」 artinya...',   options:['Hanya minum air','Minum air dan lain','Tidak minum air','Suka air'], answer:0, explain:'だけ = hanya.' },
      { q:'「水しか飲みません」 artinya...',   options:['Hanya minum air (tidak yang lain)','Minum air dan kopi','Tidak minum air','Suka air'], answer:0, explain:'しか + negatif = hanya.' },
      { q:'「〜しか〜ない」 artinya...',   options:['Hanya ~ (tidak yang lain)','Semua ~','Banyak ~','Tidak ~'], answer:0, explain:'しか + ない = hanya (penekanan).' },
      { q:'「ここから駅までどのくらいかかりますか」 artinya...',   options:['Dari sini ke stasiun berapa lama?','Di mana stasiun?','Apa itu stasiun?','Kapan ke stasiun?'], answer:0, explain:'から...まで = dari...sampai.' },
      { q:'「10分ぐらいかかります」 artinya...',   options:['Kira-kira 10 menit','Tepat 10 menit','10 jam','10 detik'], answer:0, explain:'ぐらい = kira-kira.' },
      { q:'「〜ぐらい」 artinya...',   options:['Kira-kira','Tepat','Lebih','Kurang'], answer:0, explain:'「ぐらい」 = kira-kira.' },
      { q:'「〜ほど」 dalam kalimat positif artinya...',   options:['Sampai (derajat)','Hanya','Dari','Daripada'], answer:0, explain:'「〜ほど」 = sampai tingkat ~ .' },
      { q:'「彼ほど優しい人はいない」 artinya...',   options:['Tidak ada orang sebaik dia','Dia sangat jahat','Banyak orang baik','Dia biasa saja'], answer:0, explain:'「〜ほど〜ない」 = tidak ada yang se~ .' },
      { q:'Partikel untuk "menggunakan" (alat) adalah...',   options:['で','に','を','が'], answer:0, explain:'Alat memakai で, contoh: ペンで書く.' }
    ]
  },

  /* ============================================================
     LEVEL 35 — Keigo Dasar
     ============================================================ */
  'latihan-35': {
    title: 'Keigo Dasar',
    desc: 'Uji pemahaman bahasa sopan (敬語) dasar: sonkeigo, kenjougo, teineigo.',
    soal: [
      { q:'「敬語」 artinya...',   options:['Bahasa sopan','Bahasa kasual','Bahasa kasar','Bahasa gaul'], answer:0, explain:'「敬語」 (keigo) = bahasa sopan.' },
      { q:'Tiga jenis keigo adalah...',   options:['Sonkeigo, kenjougo, teineigo','Formal, santai, kasar','Lisan, tulisan, batin','Asing, lokal, campuran'], answer:0, explain:'Sonkeigo (hormat), kenjougo (rendah hati), teineigo (sopan).' },
      { q:'「尊敬語」 (sonkeigo) dipakai untuk...',   options:['Membicarakan orang lain dengan hormat','Merendahkan diri','Berbicara santai','Berbicara kasar'], answer:0, explain:'Sonkeigo = meninggikan orang lain.' },
      { q:'「謙譲語」 (kenjougo) dipakai untuk...',   options:['Merendahkan diri sendiri','Meninggikan orang lain','Berbicara santai','Berbicara kasar'], answer:0, explain:'Kenjougo = merendahkan diri sendiri.' },
      { q:'「丁寧語」 (teineigo) contohnya...',   options:['です・ます','する・だ','だ・である','だ・だ'], answer:0, explain:'Teineigo = bahasa sopan standar です・ます.' },
      { q:'Bentuk sonkeigo dari 「する」 adalah...',   options:['なさる','いたす','します','する'], answer:0, explain:'する → なさる (sonkeigo).' },
      { q:'Bentuk kenjougo dari 「する」 adalah...',   options:['いたす','なさる','します','する'], answer:0, explain:'する → いたす (kenjougo).' },
      { q:'Bentuk sonkeigo dari 「行く」 adalah...',   options:['いらっしゃる','参る','行きます','行く'], answer:0, explain:'行く → いらっしゃる (sonkeigo).' },
      { q:'Bentuk kenjougo dari 「行く」 adalah...',   options:['参る','いらっしゃる','行きます','行く'], answer:0, explain:'行く → 参る (kenjougo).' },
      { q:'Bentuk sonkeigo dari 「言う」 adalah...',   options:['おっしゃる','申す','言います','言う'], answer:0, explain:'言う → おっしゃる (sonkeigo).' },
      { q:'Bentuk kenjougo dari 「言う」 adalah...',   options:['申す','おっしゃる','言います','言う'], answer:0, explain:'言う → 申す (kenjougo).' },
      { q:'Bentuk sonkeigo dari 「見る」 adalah...',   options:['ご覧になる','拝見する','見ます','見る'], answer:0, explain:'見る → ご覧になる (sonkeigo).' },
      { q:'Bentuk kenjougo dari 「見る」 adalah...',   options:['拝見する','ご覧になる','見ます','見る'], answer:0, explain:'見る → 拝見する (kenjougo).' },
      { q:'Bentuk sonkeigo dari 「食べる」 adalah...',   options:['召し上がる','いただく','食べます','食べる'], answer:0, explain:'食べる → 召し上がる (sonkeigo).' },
      { q:'Bentuk kenjougo dari 「食べる」 adalah...',   options:['いただく','召し上がる','食べます','食べる'], answer:0, explain:'食べる → いただく (kenjougo).' },
      { q:'「いらっしゃいませ」 diucapkan untuk...',   options:['Menyambut pelanggan','Berpamitan','Berterima kasih','Minta maaf'], answer:0, explain:'Diucapkan oleh staf toko untuk menyambut pelanggan.' },
      { q:'「お疲れ様です」 artinya...',   options:['Terima kasih atas kerja kerasnya','Selamat pagi','Maaf','Selamat malam'], answer:0, explain:'Diucapkan di kantor, artinya "terima kasih atas kerja kerasnya".' },
      { q:'「かしこまりました」 artinya...',   options:['Baik, saya mengerti (sangat sopan)','Tidak','Mungkin','Salah'], answer:0, explain:'Versi sangat sopan dari 「わかりました」.' },
      { q:'「恐れ入りますが」 artinya...',   options:['Maaf mengganggu, tapi...','Terima kasih','Selamat pagi','Sampai jumpa'], answer:0, explain:'Frasa sopan untuk memulai permintaan.' },
      { q:'Prefix 「お〜」 dan 「ご〜」 dipakai untuk...',   options:['Menambah kesopanan','Menandai negatif','Menandai tanya','Menandai lampau'], answer:0, explain:'お + kata Jepang, ご + kata Sino-Jepang. Contoh: お名前, ご家族.' }
    ]
  },
     /* ============================================================
     LEVEL 36 — Kosakata Kerja
     ============================================================ */
  'latihan-36': {
    title: 'Kosakata Kerja',
    desc: 'Uji kosakata seputar pekerjaan, kantor, dan dunia bisnis.',
    soal: [
      { q:'「会社」 artinya...',   options:['Perusahaan / kantor','Sekolah','Rumah','Toko'], answer:0, explain:'「会社」 (kaisha) = perusahaan.' },
      { q:'「社長」 artinya...',   options:['Direktur','Karyawan','Guru','Murid'], answer:0, explain:'「社長」 (shachou) = direktur / presiden perusahaan.' },
      { q:'「部長」 artinya...',   options:['Kepala departemen','Direktur','Karyawan biasa','Staf'], answer:0, explain:'「部長」 (buchou) = kepala departemen.' },
      { q:'「課長」 artinya...',   options:['Kepala seksi','Direktur','Karyawan','Staf'], answer:0, explain:'「課長」 (kachou) = kepala seksi.' },
      { q:'「同僚」 artinya...',   options:['Rekan kerja','Atasan','Bawahan','Klien'], answer:0, explain:'「同僚」 (douryou) = rekan kerja.' },
      { q:'「上司」 artinya...',   options:['Atasan','Bawahan','Rekan','Klien'], answer:0, explain:'「上司」 (joushi) = atasan.' },
      { q:'「部下」 artinya...',   options:['Bawahan','Atasan','Rekan','Klien'], answer:0, explain:'「部下」 (buka) = bawahan.' },
      { q:'「会議」 artinya...',   options:['Rapat','Libur','Ujian','Kelas'], answer:0, explain:'「会議」 (kaigi) = rapat / meeting.' },
      { q:'「打ち合わせ」 artinya...',   options:['Diskusi / meeting kecil','Rapat besar','Libur','Ujian'], answer:0, explain:'「打ち合わせ」 (uchiawase) = diskusi / meeting informal.' },
      { q:'「出張」 artinya...',   options:['Perjalanan dinas','Liburan','Pulang kampung','Cuti'], answer:0, explain:'「出張」 (shucchou) = perjalanan dinas.' },
      { q:'「残業」 artinya...',   options:['Kerja lembur','Kerja pagi','Cuti','Libur'], answer:0, explain:'「残業」 (zangyou) = kerja lembur.' },
      { q:'「給料」 artinya...',   options:['Gaji','Bonus','Pajak','Utang'], answer:0, explain:'「給料」 (kyuuryou) = gaji.' },
      { q:'「ボーナス」 artinya...',   options:['Bonus','Gaji','Pajak','Denda'], answer:0, explain:'「ボーナス」 (boonasu) = bonus.' },
      { q:'「面接」 artinya...',   options:['Wawancara','Rapat','Libur','Ujian'], answer:0, explain:'「面接」 (mensetsu) = wawancara / interview.' },
      { q:'「履歴書」 artinya...',   options:['CV / riwayat hidup','Surat lamaran','Ijazah','KTP'], answer:0, explain:'「履歴書」 (rirekisho) = CV / daftar riwayat hidup.' },
      { q:'「名刺」 artinya...',   options:['Kartu nama','Kartu kredit','Kartu identitas','Tiket'], answer:0, explain:'「名刺」 (meishi) = kartu nama.' },
      { q:'「報告」 artinya...',   options:['Laporan','Rapat','Diskusi','Presentasi'], answer:0, explain:'「報告」 (houkoku) = laporan.' },
      { q:'「連絡」 artinya...',   options:['Kontak / kabar','Laporan','Diskusi','Presentasi'], answer:0, explain:'「連絡」 (renraku) = kontak / memberi kabar.' },
      { q:'「相談」 artinya...',   options:['Konsultasi / diskusi','Laporan','Presentasi','Rapat'], answer:0, explain:'「相談」 (soudan) = konsultasi / berdiskusi.' },
      { q:'「お疲れ様です」 di kantor artinya...',   options:['Terima kasih atas kerja kerasnya','Selamat pagi','Selamat malam','Sampai jumpa'], answer:0, explain:'Sapaan umum di kantor Jepang.' }
    ]
  },

  /* ============================================================
     LEVEL 37 — Kosakata Sekolah
     ============================================================ */
  'latihan-37': {
    title: 'Kosakata Sekolah',
    desc: 'Uji kosakata seputar sekolah, akademik, dan kegiatan belajar.',
    soal: [
      { q:'「小学校」 artinya...',   options:['SD','SMP','SMA','Universitas'], answer:0, explain:'「小学校」 (shougakkou) = SD.' },
      { q:'「中学校」 artinya...',   options:['SMP','SD','SMA','Universitas'], answer:0, explain:'「中学校」 (chuugakkou) = SMP.' },
      { q:'「高校」 artinya...',   options:['SMA','SD','SMP','Universitas'], answer:0, explain:'「高校」 (koukou) = SMA.' },
      { q:'「大学」 artinya...',   options:['Universitas','SD','SMP','SMA'], answer:0, explain:'「大学」 (daigaku) = universitas.' },
      { q:'「大学院」 artinya...',   options:['Pascasarjana','Universitas','SMA','SMP'], answer:0, explain:'「大学院」 (daigakuin) = pascasarjana.' },
      { q:'「教室」 artinya...',   options:['Ruang kelas','Perpustakaan','Kantin','Laboratorium'], answer:0, explain:'「教室」 (kyoushitsu) = ruang kelas.' },
      { q:'「図書館」 artinya...',   options:['Perpustakaan','Ruang kelas','Kantin','Laboratorium'], answer:0, explain:'「図書館」 (toshokan) = perpustakaan.' },
      { q:'「体育館」 artinya...',   options:['Gedung olahraga','Ruang kelas','Perpustakaan','Kantin'], answer:0, explain:'「体育館」 (taiikukan) = gedung olahraga.' },
      { q:'「授業」 artinya...',   options:['Pelajaran / kelas','Libur','Ujian','PR'], answer:0, explain:'「授業」 (jugyou) = pelajaran / kelas.' },
      { q:'「試験」 artinya...',   options:['Ujian','Pelajaran','Libur','PR'], answer:0, explain:'「試験」 (shiken) = ujian.' },
      { q:'「宿題」 artinya...',   options:['PR / tugas rumah','Ujian','Libur','Pelajaran'], answer:0, explain:'「宿題」 (shukudai) = PR.' },
      { q:'「成績」 artinya...',   options:['Nilai / prestasi','Ujian','PR','Libur'], answer:0, explain:'「成績」 (seiseki) = nilai / prestasi.' },
      { q:'「卒業」 artinya...',   options:['Kelulusan','Masuk sekolah','Libur','Ujian'], answer:0, explain:'「卒業」 (sotsugyou) = kelulusan.' },
      { q:'「入学」 artinya...',   options:['Masuk sekolah','Lulus','Libur','Ujian'], answer:0, explain:'「入学」 (nyuugaku) = masuk sekolah.' },
      { q:'「奨学金」 artinya...',   options:['Beasiswa','Uang sekolah','Pajak','Bonus'], answer:0, explain:'「奨学金」 (shougakukin) = beasiswa.' },
      { q:'「授業料」 artinya...',   options:['Uang sekolah / SPP','Beasiswa','Pajak','Bonus'], answer:0, explain:'「授業料」 (jugyouryou) = uang sekolah.' },
      { q:'「先輩」 artinya...',   options:['Senior','Junior','Guru','Teman sekelas'], answer:0, explain:'「先輩」 (senpai) = senior.' },
      { q:'「後輩」 artinya...',   options:['Junior','Senior','Guru','Teman sekelas'], answer:0, explain:'「後輩」 (kouhai) = junior.' },
      { q:'「同級生」 artinya...',   options:['Teman sekelas / seangkatan','Senior','Junior','Guru'], answer:0, explain:'「同級生」 (doukyuusei) = teman seangkatan.' },
      { q:'「部活」 artinya...',   options:['Kegiatan klub / ekstrakurikuler','Pelajaran','Libur','Ujian'], answer:0, explain:'「部活」 (bukatsu) = kegiatan klub / ekskul.' }
    ]
  },

  /* ============================================================
     LEVEL 38 — Percakapan Telepon
     ============================================================ */
  'latihan-38': {
    title: 'Percakapan Telepon',
    desc: 'Uji frasa dan kosakata percakapan telepon dalam bahasa Jepang.',
    soal: [
      { q:'「もしもし」 artinya...',   options:['Halo (di telepon)','Selamat pagi','Terima kasih','Maaf'], answer:0, explain:'「もしもし」 = "halo" khusus di telepon.' },
      { q:'「電話」 artinya...',   options:['Telepon','Surat','Email','Fax'], answer:0, explain:'「電話」 (denwa) = telepon.' },
      { q:'「携帯電話」 artinya...',   options:['HP / ponsel','Telepon rumah','Telepon umum','Fax'], answer:0, explain:'「携帯電話」 (keitai denwa) = HP / ponsel.' },
      { q:'「電話番号」 artinya...',   options:['Nomor telepon','Alamat','Email','Kode pos'], answer:0, explain:'「電話番号」 (denwa bangou) = nomor telepon.' },
      { q:'「かけます」 artinya...',   options:['Menelepon','Menerima telepon','Memutus','Menunggu'], answer:0, explain:'「電話をかけます」 = menelepon.' },
      { q:'「出ます」 (telepon) artinya...',   options:['Mengangkat telepon','Menelepon','Memutus','Menunggu'], answer:0, explain:'「電話に出ます」 = mengangkat telepon.' },
      { q:'「切ります」 artinya...',   options:['Memutus telepon','Menelepon','Mengangkat','Menunggu'], answer:0, explain:'「電話を切ります」 = memutus telepon.' },
      { q:'「〜をお願いします」 di telepon artinya...',   options:['Tolong sambungkan ke ~','Terima kasih ~','Maaf ~','Selamat ~'], answer:0, explain:'「〜さんをお願いします」 = minta bicara dengan ~.' },
      { q:'「少々お待ちください」 artinya...',   options:['Mohon tunggu sebentar','Silakan bicara','Salah sambung','Terima kasih'], answer:0, explain:'Frasa sopan saat menahan penelepon.' },
      { q:'「伝言」 artinya...',   options:['Pesan (titipan)','Nomor','Alamat','Nama'], answer:0, explain:'「伝言」 (dengon) = pesan titipan.' },
      { q:'「伝言をお願いします」 artinya...',   options:['Tolong sampaikan pesan','Terima kasih','Maaf','Sampai jumpa'], answer:0, explain:'Dipakai saat menitipkan pesan lewat orang lain.' },
      { q:'「折り返し電話します」 artinya...',   options:['Saya akan menelepon balik','Saya tidak bisa menelepon','Saya tunggu telepon','Salah sambung'], answer:0, explain:'「折り返し」 = menelepon balik.' },
      { q:'「間違えました」 artinya...',   options:['Salah sambung / salah','Betul','Tunggu','Terima kasih'], answer:0, explain:'「間違えました」 = "salah" (nomor yang salah).' },
      { q:'「お世話になっております」 artinya...',   options:['Terima kasih atas bantuannya (sopan bisnis)','Maaf','Selamat pagi','Sampai jumpa'], answer:0, explain:'Sapaan standar saat menelepon kantor.' },
      { q:'「〜と申します」 di telepon artinya...',   options:['Nama saya ~','Saya dari ~','Saya mau ~','Saya tidak ~'], answer:0, explain:'Versi sopan dari "saya ~".' },
      { q:'「いかがですか」 artinya...',   options:['Bagaimana?','Apa?','Di mana?','Mengapa?'], answer:0, explain:'「いかがですか」 = versi sopan dari 「どうですか」.' },
      { q:'「申し訳ございません」 artinya...',   options:['Mohon maaf (sangat sopan)','Terima kasih','Selamat pagi','Sampai jumpa'], answer:0, explain:'Permintaan maaf sangat sopan.' },
      { q:'「かしこまりました」 artinya...',   options:['Baik, saya mengerti (sangat sopan)','Tidak','Mungkin','Salah'], answer:0, explain:'Versi sangat sopan dari 「わかりました」.' },
      { q:'「〜は今、席を外しております」 artinya...',   options:['~ sedang tidak di tempat','~ sedang sibuk','~ sedang tidur','~ sedang makan'], answer:0, explain:'Frasa kantor: "sedang tidak di tempat / keluar sebentar".' },
      { q:'「失礼いたします」 di akhir telepon artinya...',   options:['Permisi (saya tutup)','Halo','Terima kasih','Maaf'], answer:0, explain:'Diucapkan sebelum menutup telepon.' }
    ]
  },

  /* ============================================================
     LEVEL 39 — Surat & Email
     ============================================================ */
  'latihan-39': {
    title: 'Surat & Email',
    desc: 'Uji kosakata dan frasa seputar surat, email, dan korespondensi.',
    soal: [
      { q:'「手紙」 artinya...',   options:['Surat','Email','Fax','Telepon'], answer:0, explain:'「手紙」 (tegami) = surat.' },
      { q:'「メール」 artinya...',   options:['Email','Surat','Fax','Telepon'], answer:0, explain:'「メール」 (meeru) = email.' },
      { q:'「封筒」 artinya...',   options:['Amplop','Perangko','Kertas','Pena'], answer:0, explain:'「封筒」 (fuutou) = amplop.' },
      { q:'「切手」 artinya...',   options:['Perangko','Amplop','Kertas','Pena'], answer:0, explain:'「切手」 (kitte) = perangko.' },
      { q:'「葉書」 artinya...',   options:['Kartu pos','Surat','Amplop','Perangko'], answer:0, explain:'「葉書」 (hagaki) = kartu pos.' },
      { q:'「宛先」 artinya...',   options:['Alamat tujuan','Pengirim','Isi surat','Tanggal'], answer:0, explain:'「宛先」 (atesaki) = alamat tujuan.' },
      { q:'「差出人」 artinya...',   options:['Pengirim','Penerima','Alamat','Tanggal'], answer:0, explain:'「差出人」 (sashidashinin) = pengirim.' },
      { q:'「本文」 artinya...',   options:['Isi surat','Alamat','Judul','Lampiran'], answer:0, explain:'「本文」 (honbun) = isi / badan surat.' },
      { q:'「件名」 artinya...',   options:['Subjek / judul email','Isi','Alamat','Lampiran'], answer:0, explain:'「件名」 (kenmei) = subjek email.' },
      { q:'「添付」 artinya...',   options:['Lampiran','Isi','Alamat','Judul'], answer:0, explain:'「添付」 (tenpu) = lampiran.' },
      { q:'「添付ファイル」 artinya...',   options:['File lampiran','Isi email','Subjek','Alamat'], answer:0, explain:'「添付ファイル」 = file yang dilampirkan.' },
      { q:'「拝啓」 artinya...',   options:['Salam pembuka surat (formal)','Salam penutup','Tanggal','Alamat'], answer:0, explain:'「拝啓」 (haikei) = salam pembuka surat formal.' },
      { q:'「敬具」 artinya...',   options:['Salam penutup surat (formal)','Salam pembuka','Tanggal','Alamat'], answer:0, explain:'「敬具」 (keigu) = salam penutup surat formal.' },
      { q:'「〜様」 dipakai di surat untuk...',   options:['Penerima (sopan)','Pengirim','Saksi','Sekretaris'], answer:0, explain:'「〜様」 = akhiran sangat hormat untuk penerima.' },
      { q:'「〜行」 dipakai di surat untuk...',   options:['Penerima (biasa)','Pengirim','Saksi','Kantor'], answer:0, explain:'「〜行」 = akhiran "kepada" (biasa, di amplop sebelum dikirim).' },
      { q:'「〜より」 di akhir surat artinya...',   options:['Dari ~ (pengirim)','Kepada ~','Untuk ~','Tentang ~'], answer:0, explain:'「〜より」 = "dari ~" (pengirim).' },
      { q:'「お世話になっております」 dipakai di...',   options:['Awal email bisnis','Akhir email','Judul email','Lampiran'], answer:0, explain:'Sapaan standar email bisnis Jepang.' },
      { q:'「よろしくお願いいたします」 dipakai di...',   options:['Akhir email bisnis','Awal email','Judul email','Lampiran'], answer:0, explain:'Penutup standar email bisnis.' },
      { q:'「取り急ぎ」 artinya...',   options:['Sementara / buru-buru','Akhirnya','Pertama','Terakhir'], answer:0, explain:'「取り急ぎ」 = "untuk sementara" (email kilat).' },
      { q:'「以上」 di akhir email artinya...',   options:['Sekian / selesai','Mulai','Tambahan','Catatan'], answer:0, explain:'「以上」 = penanda akhir isi email/pesan.' }
    ]
  },

  /* ============================================================
     LEVEL 40 — Review N4
     ============================================================ */
  'latihan-40': {
    title: 'Review N4',
    desc: 'Uji ulang semua materi N4: kanji, konjugasi, tata bahasa, keigo.',
    soal: [
      { q:'Bentuk ない dari 「食べる」 adalah...',   options:['食べない','食べらない','食べるない','食べません'], answer:0, explain:'食べる (ichidan) → 食べない.' },
      { q:'Bentuk た dari 「行く」 adalah...',   options:['行った','行いた','行くだ','行った'], answer:0, explain:'行く → 行った.' },
      { q:'Bentuk potensial dari 「話す」 adalah...',   options:['話せる','話される','話させる','話そう'], answer:0, explain:'話す → 話せる (bisa bicara).' },
      { q:'Bentuk volitional dari 「食べる」 adalah...',   options:['食べよう','食べろう','食べさせる','食べられる'], answer:0, explain:'食べる → 食べよう (mari makan).' },
      { q:'Bentuk pasif dari 「褒める」 adalah...',   options:['褒められる','褒める','褒めさせる','褒めよう'], answer:0, explain:'褒める (ichidan) → 褒められる (dipuji).' },
      { q:'Bentuk kausatif dari 「飲む」 adalah...',   options:['飲ませる','飲まれる','飲める','飲もう'], answer:0, explain:'飲む → 飲ませる (menyuruh minum).' },
      { q:'Bentuk たら dari 「する」 adalah...',   options:['したら','すたら','さたら','するたら'], answer:0, explain:'する → したら.' },
      { q:'「9時から5時まで働きます」 artinya...',   options:['Bekerja dari jam 9 sampai 5','Bekerja jam 9 saja','Bekerja jam 5 saja','Bekerja seharian'], answer:0, explain:'から...まで = dari...sampai.' },
      { q:'「東京より大阪のほうが好きです」 artinya...',   options:['Lebih suka Osaka daripada Tokyo','Lebih suka Tokyo daripada Osaka','Suka keduanya','Tidak suka keduanya'], answer:0, explain:'A より B のほうが好き = lebih suka B.' },
      { q:'「水しか飲みません」 artinya...',   options:['Hanya minum air','Minum air dan kopi','Tidak minum air','Suka air'], answer:0, explain:'しか + negatif = hanya.' },
      { q:'Bentuk sonkeigo dari 「行く」 adalah...',   options:['いらっしゃる','参る','行きます','行く'], answer:0, explain:'行く → いらっしゃる (sonkeigo).' },
      { q:'Bentuk kenjougo dari 「する」 adalah...',   options:['いたす','なさる','します','する'], answer:0, explain:'する → いたす (kenjougo).' },
      { q:'「お疲れ様です」 artinya...',   options:['Terima kasih atas kerja kerasnya','Selamat pagi','Maaf','Selamat malam'], answer:0, explain:'Sapaan di kantor Jepang.' },
      { q:'「もしもし」 dipakai saat...',   options:['Menelepon','Bertemu','Berpamitan','Makan'], answer:0, explain:'「もしもし」 = halo di telepon.' },
      { q:'「少々お待ちください」 artinya...',   options:['Mohon tunggu sebentar','Silakan bicara','Salah sambung','Terima kasih'], answer:0, explain:'Frasa sopan menahan penelepon.' },
      { q:'「添付ファイル」 artinya...',   options:['File lampiran','Isi email','Subjek','Alamat'], answer:0, explain:'添付ファイル = file yang dilampirkan.' },
      { q:'「拝啓」 artinya...',   options:['Salam pembuka surat formal','Salam penutup','Tanggal','Alamat'], answer:0, explain:'「拝啓」 = salam pembuka.' },
      { q:'Kanji 「日」 dibaca...',   options:['hi / nichi','tsuki','ka','sui'], answer:0, explain:'「日」 = hi / nichi (hari/matahari).' },
      { q:'Kanji 「水」 dibaca...',   options:['mizu / sui','hi','ki','kin'], answer:0, explain:'「水」 = mizu / sui (air).' },
      { q:'「〜たことがあります」 artinya...',   options:['Pernah melakukan ~','Belum pernah ~','Akan melakukan ~','Sedang melakukan ~'], answer:0, explain:'「〜たことがあります」 = pengalaman pernah.' }
    ]
  },
     /* ============================================================
     LEVEL 41 — Kanji N3 Dasar
     ============================================================ */
  'latihan-41': {
    title: 'Kanji N3 Dasar',
    desc: 'Uji hafalan kanji level N3: kanji sehari-hari & majemuk.',
    soal: [
      { q:'Kanji 「愛」 artinya...',   options:['Cinta','Benci','Suka','Sedih'], answer:0, explain:'「愛」 (ai) = cinta.' },
      { q:'Kanji 「安」 artinya...',   options:['Aman / murah','Bahaya','Mahal','Sulit'], answer:0, explain:'「安」 (an) = aman / murah.' },
      { q:'Kanji 「暗」 artinya...',   options:['Gelap','Terang','Cerah','Suram'], answer:0, explain:'「暗」 (kurai) = gelap.' },
      { q:'Kanji 「意」 artinya...',   options:['Maksud / kehendak','Pikiran','Perasaan','Ingatan'], answer:0, explain:'「意」 (i) = maksud / kehendak.' },
      { q:'Kanji 「育」 artinya...',   options:['Membesarkan / didik','Belajar','Mengajar','Bermain'], answer:0, explain:'「育」 (iku) = membesarkan / didik.' },
      { q:'Kanji 「員」 artinya...',   options:['Anggota / staf','Pemimpin','Atasan','Klien'], answer:0, explain:'「員」 (in) = anggota / staf. Contoh: 会社員.' },
      { q:'Kanji 「映」 artinya...',   options:['Memproyeksikan / memantul','Melihat','Menonton','Membaca'], answer:0, explain:'「映」 (ei) = memproyeksikan. Contoh: 映画 (film).' },
      { q:'Kanji 「営」 artinya...',   options:['Mengelola / usaha','Menutup','Membuka','Membeli'], answer:0, explain:'「営」 (ei) = mengelola. Contoh: 営業 (penjualan).' },
      { q:'Kanji 「駅」 artinya...',   options:['Stasiun','Bandara','Pelabuhan','Terminal'], answer:0, explain:'「駅」 (eki) = stasiun.' },
      { q:'Kanji 「温」 artinya...',   options:['Hangat','Dingin','Panas','Sejuk'], answer:0, explain:'「温」 (on) = hangat. Contoh: 温泉 (onsen).' },
      { q:'Kanji 「化」 artinya...',   options:['Berubah / kimia','Tetap','Statis','Diam'], answer:0, explain:'「化」 (ka) = berubah.' },
      { q:'Kanji 「荷」 artinya...',   options:['Barang / beban','Tas','Kotak','Koper'], answer:0, explain:'「荷」 (ni) = barang. Contoh: 荷物 (bagasi).' },
      { q:'Kanji 「感」 artinya...',   options:['Perasaan','Pikiran','Ingatan','Mimpi'], answer:0, explain:'「感」 (kan) = perasaan. Contoh: 感じる.' },
      { q:'Kanji 「漢」 artinya...',   options:['China / kanji','Jepang','Korea','Asia'], answer:0, explain:'「漢」 (kan) = China. Contoh: 漢字 (kanji).' },
      { q:'Kanji 「慣」 artinya...',   options:['Terbiasa','Baru','Aneh','Sulit'], answer:0, explain:'「慣」 (kan) = terbiasa. Contoh: 習慣 (kebiasaan).' },
      { q:'Kanji 「器」 artinya...',   options:['Wadah / alat','Mesin','Benda','Alat musik'], answer:0, explain:'「器」 (ki) = wadah. Contoh: 食器 (peralatan makan).' },
      { q:'Kanji 「希」 artinya...',   options:['Harapan / jarang','Keinginan','Mimpi','Cita'], answer:0, explain:'「希」 (ki) = harapan. Contoh: 希望 (harapan).' },
      { q:'Kanji 「紀」 artinya...',   options:['Era / catatan','Waktu','Tahun','Bulan'], answer:0, explain:'「紀」 (ki) = era. Contoh: 世紀 (abad).' },
      { q:'Kanji 「客」 artinya...',   options:['Tamu / pelanggan','Tuan rumah','Karyawan','Bos'], answer:0, explain:'「客」 (kyaku) = tamu / pelanggan.' },
      { q:'Kanji 「急」 artinya...',   options:['Cepat / mendadak','Lambat','Pelan','Santai'], answer:0, explain:'「急」 (kyuu) = cepat / mendadak. Contoh: 急行 (kereta cepat).' }
    ]
  },

  /* ============================================================
     LEVEL 42 — Tata Bahasa N3
     ============================================================ */
  'latihan-42': {
    title: 'Tata Bahasa N3',
    desc: 'Uji pola kalimat level N3: 〜ようになる, 〜ことにする, 〜ばかり, dsb.',
    soal: [
      { q:'「〜ようになる」 artinya...',   options:['Menjadi bisa ~','Tidak bisa ~','Ingin ~','Sudah ~'], answer:0, explain:'「〜ようになる」 = perubahan kondisi: "menjadi bisa ~".' },
      { q:'「日本語が話せるようになりました」 artinya...',   options:['Sekarang sudah bisa bahasa Jepang','Dulu bisa bhs Jepang','Tidak bisa bhs Jepang','Ingin bisa bhs Jepang'], answer:0, explain:'〜ようになる = perubahan dari tidak bisa → bisa.' },
      { q:'「〜ことにする」 artinya...',   options:['Memutuskan untuk ~','Ingin ~','Sudah ~','Belum ~'], answer:0, explain:'「〜ことにする」 = memutuskan sendiri untuk ~.' },
      { q:'「〜ことになる」 artinya...',   options:['Diputuskan (oleh pihak lain)','Memutuskan sendiri','Ingin ~','Belum ~'], answer:0, explain:'「〜ことになる」 = sudah diputuskan (bukan oleh pembicara).' },
      { q:'「〜ばかり」 artinya...',   options:['Hanya / baru saja','Banyak','Sedikit','Kadang'], answer:0, explain:'「〜ばかり」 = hanya / baru saja.' },
      { q:'「食べたばかりです」 artinya...',   options:['Baru saja makan','Sudah lama makan','Belum makan','Akan makan'], answer:0, explain:'〜たばかり = baru saja melakukan.' },
      { q:'「〜はずです」 artinya...',   options:['Seharusnya / pasti ~','Mungkin ~','Tidak ~','Belum ~'], answer:0, explain:'「〜はずです」 = "seharusnya" (keyakinan logis).' },
      { q:'「彼はもう来るはずです」 artinya...',   options:['Dia seharusnya sudah datang','Dia tidak datang','Dia mungkin datang','Dia belum datang'], answer:0, explain:'〜はず = seharusnya.' },
      { q:'「〜かもしれない」 artinya...',   options:['Mungkin ~','Pasti ~','Tidak ~','Seharusnya ~'], answer:0, explain:'「〜かもしれない」 = mungkin (kemungkinan rendah).' },
      { q:'「雨が降るかもしれません」 artinya...',   options:['Mungkin akan hujan','Pasti hujan','Tidak hujan','Sudah hujan'], answer:0, explain:'〜かもしれません = mungkin.' },
      { q:'「〜そうです」 (bentuk pengamatan) artinya...',   options:['Kelihatannya ~','Katanya ~','Pasti ~','Tidak ~'], answer:0, explain:'「〜そうです」 = kelihatannya (dari pengamatan visual).' },
      { q:'「〜と言っていました」 artinya...',   options:['Katanya ~','Mungkin ~','Pasti ~','Tidak ~'], answer:0, explain:'〜と言っていました = katanya (mengutip perkataan orang).' },
      { q:'「〜ために」 artinya...',   options:['Untuk / karena ~','Meskipun ~','Kalau ~','Sambil ~'], answer:0, explain:'「〜ために」 = untuk / karena.' },
      { q:'「〜ように」 artinya...',   options:['Supaya / agar ~','Meskipun ~','Kalau ~','Sambil ~'], answer:0, explain:'「〜ように」 = supaya / agar.' },
      { q:'「〜のに」 artinya...',   options:['Meskipun ~','Karena ~','Kalau ~','Sambil ~'], answer:0, explain:'「〜のに」 = meskipun (menyatakan kontras / kekecewaan).' },
      { q:'「〜ても」 artinya...',   options:['Meskipun ~','Karena ~','Kalau ~','Sambil ~'], answer:0, explain:'「〜ても」 = meskipun / walau.' },
      { q:'「〜ながら」 artinya...',   options:['Sambil ~','Karena ~','Kalau ~','Meskipun ~'], answer:0, explain:'「〜ながら」 = sambil (2 aktivitas bersamaan).' },
      { q:'「〜ので」 artinya...',   options:['Karena ~ (halus)','Meskipun ~','Kalau ~','Sambil ~'], answer:0, explain:'「〜ので」 = karena (lebih halus dari から).' },
      { q:'「〜のに」 dan 「〜ても」 perbedaannya...',   options:['のに = kontras nyata, ても = hipotetis','Sama saja','のに = sebab, ても = akibat','のに = formal, ても = kasual'], answer:0, explain:'のに = meskipun (nyata), ても = meskipun (hipotetis).' },
      { q:'「〜という」 artinya...',   options:['Yang disebut / bernama ~','Tidak ~','Ingin ~','Pasti ~'], answer:0, explain:'「〜という」 = "yang bernama ~".' }
    ]
  },

  /* ============================================================
     LEVEL 43 — Kosakata Berita
     ============================================================ */
  'latihan-43': {
    title: 'Kosakata Berita',
    desc: 'Uji kosakata yang sering muncul di berita Jepang.',
    soal: [
      { q:'「ニュース」 artinya...',   options:['Berita','Iklan','Film','Drama'], answer:0, explain:'「ニュース」 (nyuusu) = berita.' },
      { q:'「新聞」 artinya...',   options:['Koran','Majalah','Buku','Berita TV'], answer:0, explain:'「新聞」 (shinbun) = koran.' },
      { q:'「記者」 artinya...',   options:['Wartawan','Pembaca','Editor','Penyiar'], answer:0, explain:'「記者」 (kisha) = wartawan.' },
      { q:'「報道」 artinya...',   options:['Pemberitaan','Iklan','Editorial','Komentar'], answer:0, explain:'「報道」 (houdou) = pemberitaan.' },
      { q:'「事件」 artinya...',   options:['Insiden / kasus','Kecelakaan','Bencana','Perang'], answer:0, explain:'「事件」 (jiken) = insiden / kasus.' },
      { q:'「事故」 artinya...',   options:['Kecelakaan','Insiden','Bencana','Perang'], answer:0, explain:'「事故」 (jiko) = kecelakaan.' },
      { q:'「災害」 artinya...',   options:['Bencana','Kecelakaan','Insiden','Perang'], answer:0, explain:'「災害」 (saigai) = bencana.' },
      { q:'「地震」 artinya...',   options:['Gempa bumi','Tsunami','Banjir','Topan'], answer:0, explain:'「地震」 (jishin) = gempa bumi.' },
      { q:'「台風」 artinya...',   options:['Topan','Gempa','Banjir','Longsor'], answer:0, explain:'「台風」 (taifuu) = topan.' },
      { q:'「洪水」 artinya...',   options:['Banjir','Gempa','Topan','Longsor'], answer:0, explain:'「洪水」 (kouzui) = banjir.' },
      { q:'「政府」 artinya...',   options:['Pemerintah','Presiden','Menteri','DPR'], answer:0, explain:'「政府」 (seifu) = pemerintah.' },
      { q:'「大統領」 artinya...',   options:['Presiden','Perdana menteri','Menteri','Gubernur'], answer:0, explain:'「大統領」 (daitouryou) = presiden.' },
      { q:'「首相」 artinya...',   options:['Perdana menteri','Presiden','Menteri','Gubernur'], answer:0, explain:'「首相」 (shushou) = perdana menteri.' },
      { q:'「経済」 artinya...',   options:['Ekonomi','Politik','Sosial','Budaya'], answer:0, explain:'「経済」 (keizai) = ekonomi.' },
      { q:'「政治」 artinya...',   options:['Politik','Ekonomi','Sosial','Budaya'], answer:0, explain:'「政治」 (seiji) = politik.' },
      { q:'「社会」 artinya...',   options:['Masyarakat','Politik','Ekonomi','Budaya'], answer:0, explain:'「社会」 (shakai) = masyarakat.' },
      { q:'「国際」 artinya...',   options:['Internasional','Nasional','Regional','Lokal'], answer:0, explain:'「国際」 (kokusai) = internasional.' },
      { q:'「発表」 artinya...',   options:['Pengumuman','Laporan','Diskusi','Rapat'], answer:0, explain:'「発表」 (happyou) = pengumuman / presentasi.' },
      { q:'「調査」 artinya...',   options:['Penelitian / survei','Diskusi','Laporan','Pengumuman'], answer:0, explain:'「調査」 (chousa) = penelitian / survei.' },
      { q:'「影響」 artinya...',   options:['Pengaruh / dampak','Penyebab','Akibat','Alasan'], answer:0, explain:'「影響」 (eikyou) = pengaruh / dampak.' }
    ]
  },

  /* ============================================================
     LEVEL 44 — Kosakata Akademik
     ============================================================ */
  'latihan-44': {
    title: 'Kosakata Akademik',
    desc: 'Uji kosakata akademik: penelitian, teori, konsep.',
    soal: [
      { q:'「研究」 artinya...',   options:['Penelitian','Belajar','Mengajar','Diskusi'], answer:0, explain:'「研究」 (kenkyuu) = penelitian.' },
      { q:'「論文」 artinya...',   options:['Tesis / makalah','Buku','Esai','Laporan'], answer:0, explain:'「論文」 (ronbun) = tesis / makalah akademik.' },
      { q:'「理論」 artinya...',   options:['Teori','Praktik','Data','Fakta'], answer:0, explain:'「理論」 (riron) = teori.' },
      { q:'「実験」 artinya...',   options:['Eksperimen','Observasi','Penelitian','Wawancara'], answer:0, explain:'「実験」 (jikken) = eksperimen.' },
      { q:'「観察」 artinya...',   options:['Observasi','Eksperimen','Penelitian','Wawancara'], answer:0, explain:'「観察」 (kansatsu) = observasi / pengamatan.' },
      { q:'「分析」 artinya...',   options:['Analisis','Sintesis','Observasi','Eksperimen'], answer:0, explain:'「分析」 (bunseki) = analisis.' },
      { q:'「結果」 artinya...',   options:['Hasil','Proses','Metode','Tujuan'], answer:0, explain:'「結果」 (kekka) = hasil.' },
      { q:'「原因」 artinya...',   options:['Penyebab','Akibat','Alasan','Tujuan'], answer:0, explain:'「原因」 (gen-in) = penyebab.' },
      { q:'「目的」 artinya...',   options:['Tujuan','Sebab','Akibat','Alasan'], answer:0, explain:'「目的」 (mokuteki) = tujuan.' },
      { q:'「方法」 artinya...',   options:['Metode / cara','Tujuan','Hasil','Sebab'], answer:0, explain:'「方法」 (houhou) = metode / cara.' },
      { q:'「資料」 artinya...',   options:['Data / materi','Buku','Kertas','Catatan'], answer:0, explain:'「資料」 (shiryou) = data / materi.' },
      { q:'「情報」 artinya...',   options:['Informasi','Berita','Data','Pesan'], answer:0, explain:'「情報」 (jouhou) = informasi.' },
      { q:'「知識」 artinya...',   options:['Pengetahuan','Keterampilan','Pengalaman','Kebiasaan'], answer:0, explain:'「知識」 (chishiki) = pengetahuan.' },
      { q:'「経験」 artinya...',   options:['Pengalaman','Pengetahuan','Keterampilan','Kebiasaan'], answer:0, explain:'「経験」 (keiken) = pengalaman.' },
      { q:'「能力」 artinya...',   options:['Kemampuan','Usaha','Keinginan','Cita-cita'], answer:0, explain:'「能力」 (nouryoku) = kemampuan.' },
      { q:'「技術」 artinya...',   options:['Teknologi / keterampilan','Sains','Seni','Budaya'], answer:0, explain:'「技術」 (gijutsu) = teknologi / keterampilan teknis.' },
      { q:'「科学」 artinya...',   options:['Sains','Seni','Budaya','Teknologi'], answer:0, explain:'「科学」 (kagaku) = sains.' },
      { q:'「数学」 artinya...',   options:['Matematika','Fisika','Kimia','Biologi'], answer:0, explain:'「数学」 (suugaku) = matematika.' },
      { q:'「歴史」 artinya...',   options:['Sejarah','Geografi','Sastra','Filsafat'], answer:0, explain:'「歴史」 (rekishi) = sejarah.' },
      { q:'「専門」 artinya...',   options:['Spesialisasi / jurusan','Umum','Dasar','Lanjutan'], answer:0, explain:'「専門」 (senmon) = spesialisasi / bidang keahlian.' }
    ]
  },

  /* ============================================================
     LEVEL 45 — Idiom & Peribahasa
     ============================================================ */
  'latihan-45': {
    title: 'Idiom & Peribahasa',
    desc: 'Uji pemahaman idiom (慣用句) dan peribahasa (ことわざ) Jepang.',
    soal: [
      { q:'「猫の手も借りたい」 artinya...',   options:['Sangat sibuk sampai mau pinjam tangan kucing','Malas sekali','Tidak butuh bantuan','Sedang santai'], answer:0, explain:'Idiom: "sangat sibuk sampai bantuan apa pun diterima".' },
      { q:'「猿も木から落ちる」 artinya...',   options:['Ahli pun bisa salah','Monyet jatuh dari pohon','Pohon tinggi','Hati-hati di pohon'], answer:0, explain:'Peribahasa: "bahkan ahli pun bisa membuat kesalahan".' },
      { q:'「七転び八起き」 artinya...',   options:['Jatuh 7 kali bangun 8 kali (pantang menyerah)','Jatuh terus','Cepat bangun','Tidak pernah jatuh'], answer:0, explain:'Peribahasa: pantang menyerah — jatuh berkali-kali tetap bangkit.' },
      { q:'「石の上にも三年」 artinya...',   options:['Duduk di atas batu 3 tahun (sabar & tekun)','Batu keras','Bertahan 3 tahun','Batu besar'], answer:0, explain:'Peribahasa: kesabaran & ketekunan akan membuahkan hasil.' },
      { q:'「一石二鳥」 artinya...',   options:['Satu batu dua burung (sekali kerja dua hasil)','Dua burung','Satu batu','Banyak hasil'], answer:0, explain:'Idiom: melakukan satu hal, dapat dua manfaat.' },
      { q:'「花より団子」 artinya...',   options:['Lebih penting isi daripada penampilan','Bunga indah','Kue enak','Bunga & kue'], answer:0, explain:'Peribahasa: "lebih suka hal praktis daripada keindahan".' },
      { q:'「井の中の蛙」 artinya...',   options:['Katak dalam sumur (berpikiran sempit)','Katak besar','Sumur dalam','Katak pintar'], answer:0, explain:'Peribahasa: orang yang wawasannya sempit.' },
      { q:'「頭が切れる」 artinya...',   options:['Cerdas / cerdik','Kepala pusing','Sakit kepala','Botak'], answer:0, explain:'Idiom: "kepalanya tajam" = cerdas.' },
      { q:'「顔が広い」 artinya...',   options:['Punya banyak kenalan','Wajah lebar','Populer di TV','Cantik'], answer:0, explain:'Idiom: "wajahnya luas" = punya jaringan luas.' },
      { q:'「手を貸す」 artinya...',   options:['Membantu','Meminjamkan tangan','Mencuri','Menahan'], answer:0, explain:'Idiom: "meminjamkan tangan" = membantu.' },
      { q:'「足を引っ張る」 artinya...',   options:['Menghambat orang lain','Menarik kaki','Berlari cepat','Menendang'], answer:0, explain:'Idiom: menghambat / menjatuhkan orang lain.' },
      { q:'「口が堅い」 artinya...',   options:['Bisa menyimpan rahasia','Mulut keras','Suka bicara','Pendiam'], answer:0, explain:'Idiom: "mulutnya keras" = bisa jaga rahasia.' },
      { q:'「耳が痛い」 artinya...',   options:['Sakit mendengar kebenaran','Telinga sakit','Tuli','Berisik'], answer:0, explain:'Idiom: mendengar kritik yang menyakitkan (karena benar).' },
      { q:'「鼻が高い」 artinya...',   options:['Bangga','Hidung tinggi','Sombong','Flu'], answer:0, explain:'Idiom: "hidungnya tinggi" = bangga.' },
      { q:'「腹が立つ」 artinya...',   options:['Marah','Sakit perut','Kenyang','Lapar'], answer:0, explain:'Idiom: "perutnya berdiri" = marah.' },
      { q:'「目が高い」 artinya...',   options:['Punya selera bagus / jeli','Mata besar','Mata sakit','Tajam mata'], answer:0, explain:'Idiom: "matanya tinggi" = pandai menilai / punya selera bagus.' },
      { q:'「骨が折れる」 artinya...',   options:['Sulit / butuh usaha keras','Patah tulang','Cepat selesai','Keras kepala'], answer:0, explain:'Idiom: "tulangnya patah" = kerja keras / sulit.' },
      { q:'「水に流す」 artinya...',   options:['Memaafkan / melupakan masalah lama','Buang ke air','Banjir','Minum air'], answer:0, explain:'Idiom: "mengalirkan ke air" = memaafkan & melupakan.' },
      { q:'「油を売る」 artinya...',   options:['Bermalas-malasan / buang waktu','Jual minyak','Sibuk','Kerja keras'], answer:0, explain:'Idiom: "jual minyak" = menganggur / buang waktu.' },
      { q:'「急がば回れ」 artinya...',   options:['Kalau buru-buru, ambil jalan aman (pelan tapi pasti)','Cepat lebih baik','Jalan memutar salah','Jangan buru-buru'], answer:0, explain:'Peribahasa: kadang jalan lambat & aman lebih cepat sampai.' }
    ]
  },
     /* ============================================================
     LEVEL 46 — Keigo Lanjutan
     ============================================================ */
  'latihan-46': {
    title: 'Keigo Lanjutan',
    desc: 'Uji pemahaman sonkeigo & kenjougo lanjutan dengan kata kerja khusus.',
    soal: [
      { q:'Bentuk sonkeigo dari 「いる」 adalah...',   options:['いらっしゃる','おる','います','いる'], answer:0, explain:'いる → いらっしゃる (sonkeigo).' },
      { q:'Bentuk kenjougo dari 「いる」 adalah...',   options:['おる','いらっしゃる','います','いる'], answer:0, explain:'いる → おる (kenjougo).' },
      { q:'Bentuk sonkeigo dari 「来る」 adalah...',   options:['いらっしゃる / 見える','参る','来ます','来る'], answer:0, explain:'来る → いらっしゃる / 見える (sonkeigo).' },
      { q:'Bentuk kenjougo dari 「来る」 adalah...',   options:['参る','いらっしゃる','来ます','来る'], answer:0, explain:'来る → 参る (kenjougo).' },
      { q:'Bentuk sonkeigo dari 「食べる・飲む」 adalah...',   options:['召し上がる','いただく','食べます','食べる'], answer:0, explain:'食べる/飲む → 召し上がる (sonkeigo).' },
      { q:'Bentuk kenjougo dari 「食べる・飲む」 adalah...',   options:['いただく','召し上がる','食べます','食べる'], answer:0, explain:'食べる/飲む → いただく (kenjougo).' },
      { q:'Bentuk sonkeigo dari 「言う」 adalah...',   options:['おっしゃる','申す','言います','言う'], answer:0, explain:'言う → おっしゃる (sonkeigo).' },
      { q:'Bentuk kenjougo dari 「言う」 adalah...',   options:['申す / 申し上げる','おっしゃる','言います','言う'], answer:0, explain:'言う → 申す (kenjougo).' },
      { q:'Bentuk sonkeigo dari 「見る」 adalah...',   options:['ご覧になる','拝見する','見ます','見る'], answer:0, explain:'見る → ご覧になる (sonkeigo).' },
      { q:'Bentuk kenjougo dari 「見る」 adalah...',   options:['拝見する','ご覧になる','見ます','見る'], answer:0, explain:'見る → 拝見する (kenjougo).' },
      { q:'Bentuk sonkeigo dari 「知っている」 adalah...',   options:['ご存じです','存じます','知っています','知る'], answer:0, explain:'知っている → ご存じです (sonkeigo).' },
      { q:'Bentuk kenjougo dari 「知っている」 adalah...',   options:['存じます','ご存じです','知っています','知る'], answer:0, explain:'知っている → 存じます (kenjougo).' },
      { q:'Bentuk sonkeigo dari 「する」 adalah...',   options:['なさる','いたす','します','する'], answer:0, explain:'する → なさる (sonkeigo).' },
      { q:'Bentuk kenjougo dari 「する」 adalah...',   options:['いたす','なさる','します','する'], answer:0, explain:'する → いたす (kenjougo).' },
      { q:'Bentuk sonkeigo dari 「行く」 adalah...',   options:['いらっしゃる','参る','行きます','行く'], answer:0, explain:'行く → いらっしゃる (sonkeigo).' },
      { q:'Bentuk kenjougo dari 「行く」 adalah...',   options:['参る','いらっしゃる','行きます','行く'], answer:0, explain:'行く → 参る (kenjougo).' },
      { q:'Bentuk sonkeigo dari 「もらう」 adalah...',   options:['お受けになる','いただく','もらいます','もらう'], answer:0, explain:'もらう → お受けになる (sonkeigo).' },
      { q:'Bentuk kenjougo dari 「もらう」 adalah...',   options:['いただく','お受けになる','もらいます','もらう'], answer:0, explain:'もらう → いただく (kenjougo).' },
      { q:'「お〜ください」 artinya...',   options:['Mohon ~ (perintah sopan)','Jangan ~','Sudah ~','Belum ~'], answer:0, explain:'「お〜ください」 = permintaan sopan.' },
      { q:'「〜ていただけませんか」 artinya...',   options:['Bisakah Anda ~ (sangat sopan)','Tidak bisa ~','Sudah ~','Jangan ~'], answer:0, explain:'Permintaan sangat sopan.' }
    ]
  },

  /* ============================================================
     LEVEL 47 — Percakapan Bisnis
     ============================================================ */
  'latihan-47': {
    title: 'Percakapan Bisnis',
    desc: 'Uji frasa dan kosakata percakapan bisnis Jepang.',
    soal: [
      { q:'「お世話になっております」 artinya...',   options:['Terima kasih atas bantuannya (sopan bisnis)','Selamat pagi','Maaf','Sampai jumpa'], answer:0, explain:'Sapaan standar email/telepon bisnis Jepang.' },
      { q:'「よろしくお願いいたします」 artinya...',   options:['Mohon kerja samanya (sangat sopan)','Terima kasih','Maaf','Sampai jumpa'], answer:0, explain:'Penutup standar email bisnis.' },
      { q:'「かしこまりました」 artinya...',   options:['Baik, saya mengerti (sangat sopan)','Tidak','Mungkin','Salah'], answer:0, explain:'Versi sangat sopan dari 「わかりました」.' },
      { q:'「恐れ入りますが」 artinya...',   options:['Maaf mengganggu, tapi...','Terima kasih','Selamat pagi','Sampai jumpa'], answer:0, explain:'Frasa sopan pembuka permintaan.' },
      { q:'「お手数をおかけしますが」 artinya...',   options:['Mohon maaf merepotkan, tapi...','Terima kasih','Selamat pagi','Sampai jumpa'], answer:0, explain:'Permintaan maaf karena merepotkan.' },
      { q:'「承知しました」 artinya...',   options:['Baik, saya mengerti (sopan)','Tidak','Mungkin','Salah'], answer:0, explain:'Setuju / mengerti (sopan bisnis).' },
      { q:'「検討させていただきます」 artinya...',   options:['Akan kami pertimbangkan','Tidak bisa','Sudah selesai','Belum'], answer:0, explain:'Frasa sopan: "akan kami pertimbangkan".' },
      { q:'「確認いたします」 artinya...',   options:['Akan saya konfirmasi','Tidak tahu','Sudah tahu','Lupa'], answer:0, explain:'Konfirmasi (kenjougo).' },
      { q:'「ご連絡いたします」 artinya...',   options:['Akan saya hubungi','Sudah dihubungi','Tidak dihubungi','Sedang dihubungi'], answer:0, explain:'Akan menghubungi (kenjougo).' },
      { q:'「お待たせいたしました」 artinya...',   options:['Mohon maaf menunggu','Terima kasih','Selamat pagi','Sampai jumpa'], answer:0, explain:'Permintaan maaf karena membuat menunggu.' },
      { q:'「名刺を頂戴してもよろしいですか」 artinya...',   options:['Boleh minta kartu nama Anda?','Boleh saya beri kartu nama?','Ini kartu nama saya','Kartu nama saya hilang'], answer:0, explain:'Meminta kartu nama (sangat sopan).' },
      { q:'「アポイントメント」 artinya...',   options:['Janji temu','Pertemuan','Kontrak','Rapat'], answer:0, explain:'「アポイントメント」 (apointomento) = janji temu bisnis.' },
      { q:'「契約」 artinya...',   options:['Kontrak','Perjanjian lisan','Diskusi','Negosiasi'], answer:0, explain:'「契約」 (keiyaku) = kontrak.' },
      { q:'「見積書」 artinya...',   options:['Surat penawaran harga','Kontrak','Invoice','Kwitansi'], answer:0, explain:'「見積書」 (mitsumorisho) = quotation / penawaran harga.' },
      { q:'「請求書」 artinya...',   options:['Invoice / tagihan','Penawaran','Kontrak','Kwitansi'], answer:0, explain:'「請求書」 (seikyuusho) = invoice / tagihan.' },
      { q:'「領収書」 artinya...',   options:['Kwitansi','Invoice','Penawaran','Kontrak'], answer:0, explain:'「領収書」 (ryoushuusho) = kwitansi / bukti bayar.' },
      { q:'「取引先」 artinya...',   options:['Klien / mitra bisnis','Atasan','Bawahan','Rekan kerja'], answer:0, explain:'「取引先」 (torihikisaki) = klien / mitra bisnis.' },
      { q:'「商談」 artinya...',   options:['Negosiasi bisnis','Rapat internal','Diskusi santai','Presentasi'], answer:0, explain:'「商談」 (shoudan) = negosiasi bisnis.' },
      { q:'「打ち合わせ」 artinya...',   options:['Diskusi / meeting kecil','Rapat besar','Libur','Presentasi'], answer:0, explain:'「打ち合わせ」 (uchiawase) = diskusi / meeting informal.' },
      { q:'「ご多忙のところ恐れ入りますが」 artinya...',   options:['Mohon maaf di tengah kesibukan Anda','Terima kasih','Selamat pagi','Sampai jumpa'], answer:0, explain:'Frasa sopan pembuka permintaan ke orang sibuk.' }
    ]
  },

  /* ============================================================
     LEVEL 48 — Membaca Artikel
     ============================================================ */
  'latihan-48': {
    title: 'Membaca Artikel',
    desc: 'Uji pemahaman membaca artikel & teks panjang bahasa Jepang.',
    soal: [
      { q:'「筆者」 artinya...',   options:['Penulis','Pembaca','Editor','Penerbit'], answer:0, explain:'「筆者」 (hissha) = penulis artikel.' },
      { q:'「要約」 artinya...',   options:['Ringkasan','Isi lengkap','Catatan kaki','Judul'], answer:0, explain:'「要約」 (youyaku) = ringkasan.' },
      { q:'「結論」 artinya...',   options:['Kesimpulan','Pendahuluan','Isi','Judul'], answer:0, explain:'「結論」 (ketsuron) = kesimpulan.' },
      { q:'「序論」 artinya...',   options:['Pendahuluan','Kesimpulan','Isi','Judul'], answer:0, explain:'「序論」 (joron) = pendahuluan.' },
      { q:'「本論」 artinya...',   options:['Isi / pembahasan utama','Kesimpulan','Pendahuluan','Daftar pustaka'], answer:0, explain:'「本論」 (honron) = isi utama.' },
      { q:'「段落」 artinya...',   options:['Paragraf','Judul','Kalimat','Bab'], answer:0, explain:'「段落」 (danraku) = paragraf.' },
      { q:'「主題」 artinya...',   options:['Tema / topik utama','Judul','Kesimpulan','Penulis'], answer:0, explain:'「主題」 (shudai) = tema / topik utama.' },
      { q:'「根拠」 artinya...',   options:['Dasar / bukti','Pendapat','Alasan','Argumen'], answer:0, explain:'「根拠」 (konkyo) = dasar / bukti.' },
      { q:'「具体例」 artinya...',   options:['Contoh konkret','Teori','Opini','Kesimpulan'], answer:0, explain:'「具体例」 (gutairei) = contoh konkret.' },
      { q:'「主張」 artinya...',   options:['Pendapat / klaim','Fakta','Data','Contoh'], answer:0, explain:'「主張」 (shuchou) = pendapat / klaim.' },
      { q:'「一方」 artinya...',   options:['Di sisi lain','Selain itu','Namun','Karena'], answer:0, explain:'「一方」 (ippou) = di sisi lain.' },
      { q:'「つまり」 artinya...',   options:['Dengan kata lain','Namun','Karena','Selain itu'], answer:0, explain:'「つまり」 = dengan kata lain / singkatnya.' },
      { q:'「例えば」 artinya...',   options:['Misalnya','Namun','Karena','Selain itu'], answer:0, explain:'「例えば」 (tatoeba) = misalnya.' },
      { q:'「したがって」 artinya...',   options:['Oleh karena itu','Namun','Sebaliknya','Misalnya'], answer:0, explain:'「したがって」 = oleh karena itu.' },
      { q:'「さらに」 artinya...',   options:['Selain itu / lebih lanjut','Namun','Karena','Misalnya'], answer:0, explain:'「さらに」 = selain itu.' },
      { q:'「ただし」 artinya...',   options:['Akan tetapi (syarat)','Karena','Misalnya','Selain itu'], answer:0, explain:'「ただし」 = akan tetapi (dengan catatan).' },
      { q:'「要するに」 artinya...',   options:['Singkatnya','Misalnya','Namun','Karena'], answer:0, explain:'「要するに」 = singkatnya.' },
      { q:'「〜という意味だ」 artinya...',   options:['Berarti ~','Bukan ~','Mungkin ~','Pasti ~'], answer:0, explain:'「〜という意味だ」 = artinya ~.' },
      { q:'「〜に基づいて」 artinya...',   options:['Berdasarkan ~','Tanpa ~','Meskipun ~','Karena ~'], answer:0, explain:'「〜に基づいて」 = berdasarkan ~.' },
      { q:'「〜に関して」 artinya...',   options:['Berkenaan dengan ~','Tanpa ~','Meskipun ~','Karena ~'], answer:0, explain:'「〜に関して」 = berkenaan dengan ~.' }
    ]
  },

  /* ============================================================
     LEVEL 49 — Menulis Esai
     ============================================================ */
  'latihan-49': {
    title: 'Menulis Esai',
    desc: 'Uji kosakata & struktur penulisan esai bahasa Jepang.',
    soal: [
      { q:'「作文」 artinya...',   options:['Karangan / esai','Surat','Laporan','Puisi'], answer:0, explain:'「作文」 (sakubun) = karangan / esai.' },
      { q:'「論文」 artinya...',   options:['Tesis / makalah','Esai pendek','Surat','Puisi'], answer:0, explain:'「論文」 (ronbun) = tesis / makalah akademik.' },
      { q:'「日記」 artinya...',   options:['Buku harian','Surat','Esai','Puisi'], answer:0, explain:'「日記」 (nikki) = buku harian.' },
      { q:'「感想文」 artinya...',   options:['Esai kesan / review','Laporan','Surat','Puisi'], answer:0, explain:'「感想文」 (kansoubun) = esai kesan.' },
      { q:'「序論」 artinya...',   options:['Pendahuluan','Isi','Kesimpulan','Judul'], answer:0, explain:'「序論」 (joron) = pendahuluan esai.' },
      { q:'「本論」 artinya...',   options:['Isi utama','Pendahuluan','Kesimpulan','Judul'], answer:0, explain:'「本論」 (honron) = isi utama.' },
      { q:'「結論」 artinya...',   options:['Kesimpulan','Pendahuluan','Isi','Judul'], answer:0, explain:'「結論」 (ketsuron) = kesimpulan.' },
      { q:'「まず」 artinya...',   options:['Pertama-tama','Kemudian','Akhirnya','Namun'], answer:0, explain:'「まず」 = pertama-tama (pembuka).' },
      { q:'「次に」 artinya...',   options:['Selanjutnya','Pertama','Akhirnya','Namun'], answer:0, explain:'「次に」 (tsugi ni) = selanjutnya.' },
      { q:'「最後に」 artinya...',   options:['Terakhir','Pertama','Kemudian','Namun'], answer:0, explain:'「最後に」 (saigo ni) = terakhir.' },
      { q:'「つまり」 artinya...',   options:['Dengan kata lain','Namun','Karena','Misalnya'], answer:0, explain:'「つまり」 = dengan kata lain.' },
      { q:'「例えば」 artinya...',   options:['Misalnya','Namun','Karena','Selain itu'], answer:0, explain:'「例えば」 (tatoeba) = misalnya.' },
      { q:'「しかし」 artinya...',   options:['Namun','Karena','Misalnya','Selain itu'], answer:0, explain:'「しかし」 = namun.' },
      { q:'「また」 artinya...',   options:['Selain itu','Namun','Karena','Misalnya'], answer:0, explain:'「また」 = selain itu / juga.' },
      { q:'「このように」 artinya...',   options:['Seperti ini / demikianlah','Namun','Karena','Misalnya'], answer:0, explain:'「このように」 = seperti ini (kesimpulan).' },
      { q:'「〜について」 artinya...',   options:['Tentang ~','Tanpa ~','Meskipun ~','Karena ~'], answer:0, explain:'「〜について」 = tentang ~.' },
      { q:'「私は〜と思う」 artinya...',   options:['Saya berpikir bahwa ~','Saya tidak ~','Saya ingin ~','Saya sudah ~'], answer:0, explain:'「〜と思う」 = menyatakan pendapat.' },
      { q:'「〜と考えられる」 artinya...',   options:['Dapat dipertimbangkan bahwa ~','Saya tidak tahu','Saya ragu','Saya yakin'], answer:0, explain:'「〜と考えられる」 = bentuk pasif sopan untuk opini.' },
      { q:'「〜べきだ」 artinya...',   options:['Sebaiknya / harus ~','Jangan ~','Tidak perlu ~','Boleh ~'], answer:0, explain:'「〜べきだ」 = sebaiknya / harus.' },
      { q:'「〜のではないだろうか」 artinya...',   options:['Bukankah ~ ? (opini halus)','Pasti ~','Tidak ~','Sudah ~'], answer:0, explain:'Ungkapan opini halus di akhir esai.' }
    ]
  },

  /* ============================================================
     LEVEL 50 — Review N3 (FINAL)
     ============================================================ */
  'latihan-50': {
    title: 'Review N3',
    desc: 'Uji ulang semua materi N3: kanji, tata bahasa, kosakata, keigo, dan membaca.',
    soal: [
      { q:'Kanji 「愛」 artinya...',   options:['Cinta','Benci','Suka','Sedih'], answer:0, explain:'「愛」 (ai) = cinta.' },
      { q:'Kanji 「駅」 artinya...',   options:['Stasiun','Bandara','Pelabuhan','Terminal'], answer:0, explain:'「駅」 (eki) = stasiun.' },
      { q:'「〜ようになる」 artinya...',   options:['Menjadi bisa ~','Tidak bisa ~','Ingin ~','Sudah ~'], answer:0, explain:'「〜ようになる」 = perubahan kondisi.' },
      { q:'「〜ことにする」 artinya...',   options:['Memutuskan untuk ~','Ingin ~','Sudah ~','Belum ~'], answer:0, explain:'「〜ことにする」 = memutuskan sendiri.' },
      { q:'「〜はずです」 artinya...',   options:['Seharusnya ~','Mungkin ~','Tidak ~','Belum ~'], answer:0, explain:'「〜はずです」 = seharusnya.' },
      { q:'「〜かもしれない」 artinya...',   options:['Mungkin ~','Pasti ~','Tidak ~','Seharusnya ~'], answer:0, explain:'「〜かもしれない」 = mungkin.' },
      { q:'「〜のに」 artinya...',   options:['Meskipun ~','Karena ~','Kalau ~','Sambil ~'], answer:0, explain:'「〜のに」 = meskipun (kontras).' },
      { q:'「〜ながら」 artinya...',   options:['Sambil ~','Karena ~','Kalau ~','Meskipun ~'], answer:0, explain:'「〜ながら」 = sambil.' },
      { q:'「〜ので」 artinya...',   options:['Karena ~ (halus)','Meskipun ~','Kalau ~','Sambil ~'], answer:0, explain:'「〜ので」 = karena (halus).' },
      { q:'「ニュース」 artinya...',   options:['Berita','Iklan','Film','Drama'], answer:0, explain:'「ニュース」 = berita.' },
      { q:'「政府」 artinya...',   options:['Pemerintah','Presiden','Menteri','DPR'], answer:0, explain:'「政府」 (seifu) = pemerintah.' },
      { q:'「研究」 artinya...',   options:['Penelitian','Belajar','Mengajar','Diskusi'], answer:0, explain:'「研究」 (kenkyuu) = penelitian.' },
      { q:'「理論」 artinya...',   options:['Teori','Praktik','Data','Fakta'], answer:0, explain:'「理論」 (riron) = teori.' },
      { q:'「猫の手も借りたい」 artinya...',   options:['Sangat sibuk','Malas','Tidak butuh bantuan','Santai'], answer:0, explain:'Idiom: sangat sibuk.' },
      { q:'「一石二鳥」 artinya...',   options:['Sekali kerja dua hasil','Dua burung','Satu batu','Banyak hasil'], answer:0, explain:'Idiom: satu tindakan, dua manfaat.' },
      { q:'Bentuk sonkeigo dari 「行く」 adalah...',   options:['いらっしゃる','参る','行きます','行く'], answer:0, explain:'行く → いらっしゃる (sonkeigo).' },
      { q:'Bentuk kenjougo dari 「する」 adalah...',   options:['いたす','なさる','します','する'], answer:0, explain:'する → いたす (kenjougo).' },
      { q:'「お世話になっております」 dipakai di...',   options:['Email bisnis','Surat pribadi','Novel','Puisi'], answer:0, explain:'Sapaan standar email bisnis.' },
      { q:'「検討させていただきます」 artinya...',   options:['Akan dipertimbangkan','Tidak bisa','Sudah selesai','Belum'], answer:0, explain:'Frasa sopan bisnis.' },
      { q:'「つまり」 artinya...',   options:['Dengan kata lain','Namun','Karena','Misalnya'], answer:0, explain:'Kata penghubung kesimpulan.' }
    ]
  }
};
