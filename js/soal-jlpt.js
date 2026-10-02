/* ============================================================
   BANK SOAL JLPT — ASAHI MANDIRI
   ------------------------------------------------------------
   CATATAN: Soal latihan mandiri, bukan soal resmi JLPT.
   Setiap paket punya:
     label : kategori & level (contoh: "Kosakata · N5")
     title : judul paket
     desc  : deskripsi singkat
     soal  : array soal

   Setiap soal:
     q       : pertanyaan
     options : 4 pilihan
     answer  : index jawaban benar (0-3)
     explain : pembahasan
   ============================================================ */

window.SOAL_JLPT = {

  /* ============================================================
     KOSAKATA N5 — SET 1
     ============================================================ */
  'kosakata-n5-1': {
    label: 'Kosakata · N5',
    title: 'Kosakata N5 — Set 1',
    desc: 'Salam, angka, dan kata sehari-hari.',
    soal: [
      { q:'Apa arti dari 「こんにちは」?', options:['Selamat pagi','Selamat siang','Selamat malam','Terima kasih'], answer:1, explain:'「こんにちは」 berarti "selamat siang" atau sapaan umum di siang hari.' },
      { q:'Apa arti dari 「ありがとう」?', options:['Maaf','Permisi','Terima kasih','Selamat tinggal'], answer:2, explain:'「ありがとう」 berarti "terima kasih".' },
      { q:'Bagaimana cara membaca 「おはよう」?', options:['Ohayou','Konnichiwa','Konbanwa','Oyasumi'], answer:0, explain:'「おはよう」 dibaca "ohayou" — selamat pagi (santai).' },
      { q:'Apa arti dari 「さようなら」?', options:['Halo','Selamat tinggal','Maaf','Silakan'], answer:1, explain:'「さようなら」 berarti "selamat tinggal" (formal).' },
      { q:'Apa arti dari 「こんばんは」?', options:['Selamat pagi','Selamat siang','Selamat malam','Selamat tidur'], answer:2, explain:'「こんばんは」 berarti "selamat malam" (saat bertemu).' },
      { q:'Apa arti dari 「おやすみなさい」?', options:['Selamat pagi','Selamat tidur','Selamat datang','Selamat jalan'], answer:1, explain:'「おやすみなさい」 berarti "selamat tidur".' },
      { q:'Apa arti dari 「すみません」?', options:['Selamat pagi','Terima kasih','Permisi / Maaf','Selamat malam'], answer:2, explain:'「すみません」 berarti "permisi" atau "maaf".' },
      { q:'Apa arti dari 「はい」?', options:['Tidak','Ya','Mungkin','Nanti'], answer:1, explain:'「はい」 berarti "ya".' },
      { q:'Apa arti dari 「いいえ」?', options:['Ya','Tidak','Terima kasih','Maaf'], answer:1, explain:'「いいえ」 berarti "tidak".' },
      { q:'Bagaimana cara membaca 「水」?', options:['Mizu','Kaze','Hi','Tsuchi'], answer:0, explain:'「水」 dibaca "mizu" — air.' },
      { q:'Apa arti dari 「食べる」?', options:['Minum','Makan','Tidur','Berjalan'], answer:1, explain:'「食べる」 berarti "makan".' },
      { q:'Apa arti dari 「飲む」?', options:['Makan','Minum','Melihat','Mendengar'], answer:1, explain:'「飲む」 berarti "minum".' },
      { q:'Apa arti dari 「行く」?', options:['Datang','Pergi','Pulang','Kembali'], answer:1, explain:'「行く」 berarti "pergi".' },
      { q:'Apa arti dari 「来る」?', options:['Pergi','Datang','Pulang','Tinggal'], answer:1, explain:'「来る」 berarti "datang".' },
      { q:'Apa arti dari 「見る」?', options:['Mendengar','Melihat','Berbicara','Membaca'], answer:1, explain:'「見る」 berarti "melihat".' },
      { q:'Apa arti dari 「聞く」?', options:['Melihat','Mendengar','Berbicara','Menulis'], answer:1, explain:'「聞く」 berarti "mendengar" atau "bertanya".' },
      { q:'Apa arti dari 「話す」?', options:['Mendengar','Berbicara','Membaca','Menulis'], answer:1, explain:'「話す」 berarti "berbicara".' },
      { q:'Apa arti dari 「読む」?', options:['Menulis','Membaca','Mendengar','Berbicara'], answer:1, explain:'「読む」 berarti "membaca".' },
      { q:'Apa arti dari 「書く」?', options:['Membaca','Menulis','Menggambar','Melihat'], answer:1, explain:'「書く」 berarti "menulis".' },
      { q:'Apa arti dari 「買う」?', options:['Menjual','Membeli','Memberi','Menerima'], answer:1, explain:'「買う」 berarti "membeli".' }
    ]
  },

  /* ============================================================
     KOSAKATA N5 — SET 2
     ============================================================ */
  'kosakata-n5-2': {
    label: 'Kosakata · N5',
    title: 'Kosakata N5 — Set 2',
    desc: 'Kata kerja & sifat dasar.',
    soal: [
      { q:'Apa arti dari 「大きい」?', options:['Kecil','Besar','Panjang','Pendek'], answer:1, explain:'「大きい」 berarti "besar".' },
      { q:'Apa arti dari 「小さい」?', options:['Besar','Kecil','Tinggi','Rendah'], answer:1, explain:'「小さい」 berarti "kecil".' },
      { q:'Apa arti dari 「高い」?', options:['Rendah','Tinggi / Mahal','Murah','Panjang'], answer:1, explain:'「高い」 berarti "tinggi" atau "mahal".' },
      { q:'Apa arti dari 「安い」?', options:['Mahal','Murah','Tinggi','Rendah'], answer:1, explain:'「安い」 berarti "murah".' },
      { q:'Apa arti dari 「新しい」?', options:['Lama','Baru','Tua','Muda'], answer:1, explain:'「新しい」 berarti "baru".' },
      { q:'Apa arti dari 「古い」?', options:['Baru','Lama / Tua','Muda','Modern'], answer:1, explain:'「古い」 berarti "lama" atau "tua".' },
      { q:'Apa arti dari 「暑い」?', options:['Dingin','Panas (cuaca)','Sejuk','Hangat'], answer:1, explain:'「暑い」 berarti "panas" (untuk cuaca).' },
      { q:'Apa arti dari 「寒い」?', options:['Panas','Dingin (cuaca)','Hangat','Sejuk'], answer:1, explain:'「寒い」 berarti "dingin" (untuk cuaca).' },
      { q:'Apa arti dari 「美味しい」?', options:['Pahit','Manis','Lezat','Asam'], answer:2, explain:'「美味しい」 berarti "lezat" atau "enak".' },
      { q:'Apa arti dari 「忙しい」?', options:['Sibuk','Senggang','Cepat','Lambat'], answer:0, explain:'「忙しい」 berarti "sibuk".' },
      { q:'Apa arti dari 「楽しい」?', options:['Sedih','Menyenangkan','Sulit','Mudah'], answer:1, explain:'「楽しい」 berarti "menyenangkan".' },
      { q:'Apa arti dari 「元気」?', options:['Sakit','Sehat / Bersemangat','Lelah','Ngantuk'], answer:1, explain:'「元気」 berarti "sehat" atau "bersemangat".' },
      { q:'Apa arti dari 「まずい」?', options:['Lezat','Tidak enak','Manis','Asam'], answer:1, explain:'「まずい」 adalah lawan kata "美味しい" — tidak enak.' },
      { q:'Apa arti dari 「食べ物」?', options:['Minuman','Makanan','Pakaian','Kendaraan'], answer:1, explain:'「食べ物」 berarti "makanan".' },
      { q:'Apa arti dari 「飲み物」?', options:['Makanan','Minuman','Obat','Snack'], answer:1, explain:'「飲み物」 berarti "minuman".' },
      { q:'Apa arti dari 「ご飯」?', options:['Roti','Nasi','Mie','Sup'], answer:1, explain:'「ご飯」 berarti "nasi" atau "makanan".' },
      { q:'Apa arti dari 「お茶」?', options:['Kopi','Teh','Jus','Susu'], answer:1, explain:'「お茶」 berarti "teh".' },
      { q:'Apa arti dari 「肉」?', options:['Ikan','Daging','Sayur','Buah'], answer:1, explain:'「肉」 berarti "daging".' },
      { q:'Apa arti dari 「魚」?', options:['Daging','Ikan','Ayam','Telur'], answer:1, explain:'「魚」 berarti "ikan".' },
      { q:'Apa arti dari 「野菜」?', options:['Buah','Sayur','Daging','Ikan'], answer:1, explain:'「野菜」 berarti "sayur".' }
    ]
  },

  /* ============================================================
     KANJI N5 — SET 1
     ============================================================ */
  'kanji-n5-1': {
    label: 'Kanji · N5',
    title: 'Kanji N5 — Set 1',
    desc: 'Angka, waktu, dan kanji dasar.',
    soal: [
      { q:'Bagaimana cara membaca 「日」?', options:['Hi / Nichi','Tsuki','Ka','Mizu'], answer:0, explain:'「日」 dibaca "hi" (matahari) atau "nichi" (hari).' },
      { q:'Bagaimana cara membaca 「月」?', options:['Hi','Tsuki / Getsu','Ka','Kin'], answer:1, explain:'「月」 dibaca "tsuki" (bulan) atau "getsu" (bulan dalam kalender).' },
      { q:'Bagaimana cara membaca 「火」?', options:['Mizu','Ki','Hi / Ka','Kin'], answer:2, explain:'「火」 dibaca "hi" (api) atau "ka" (Selasa).' },
      { q:'Bagaimana cara membaca 「水」?', options:['Mizu / Sui','Hi','Ki','Kin'], answer:0, explain:'「水」 dibaca "mizu" (air) atau "sui" (Rabu).' },
      { q:'Bagaimana cara membaca 「木」?', options:['Mizu','Ki / Moku','Hi','Tsuchi'], answer:1, explain:'「木」 dibaca "ki" (pohon) atau "moku" (Kamis).' },
      { q:'Bagaimana cara membaca 「金」?', options:['Kane / Kin','Gin','Dou','Tetsu'], answer:0, explain:'「金」 dibaca "kane" (uang/emas) atau "kin" (Jumat).' },
      { q:'Bagaimana cara membaca 「土」?', options:['Mizu','Tsuchi / Do','Ki','Hi'], answer:1, explain:'「土」 dibaca "tsuchi" (tanah) atau "do" (Sabtu).' },
      { q:'Apa arti dari 「一」?', options:['Satu','Dua','Tiga','Empat'], answer:0, explain:'「一」 dibaca "ichi" — satu.' },
      { q:'Apa arti dari 「二」?', options:['Satu','Dua','Tiga','Empat'], answer:1, explain:'「二」 dibaca "ni" — dua.' },
      { q:'Apa arti dari 「三」?', options:['Dua','Tiga','Empat','Lima'], answer:1, explain:'「三」 dibaca "san" — tiga.' },
      { q:'Apa arti dari 「四」?', options:['Tiga','Empat','Lima','Enam'], answer:1, explain:'「四」 dibaca "yon" atau "shi" — empat.' },
      { q:'Apa arti dari 「五」?', options:['Empat','Lima','Enam','Tujuh'], answer:1, explain:'「五」 dibaca "go" — lima.' },
      { q:'Apa arti dari 「六」?', options:['Lima','Enam','Tujuh','Delapan'], answer:1, explain:'「六」 dibaca "roku" — enam.' },
      { q:'Apa arti dari 「七」?', options:['Enam','Tujuh','Delapan','Sembilan'], answer:1, explain:'「七」 dibaca "nana" atau "shichi" — tujuh.' },
      { q:'Apa arti dari 「八」?', options:['Tujuh','Delapan','Sembilan','Sepuluh'], answer:1, explain:'「八」 dibaca "hachi" — delapan.' },
      { q:'Apa arti dari 「九」?', options:['Delapan','Sembilan','Sepuluh','Sebelas'], answer:1, explain:'「九」 dibaca "kyuu" — sembilan.' },
      { q:'Apa arti dari 「十」?', options:['Sembilan','Sepuluh','Sebelas','Dua belas'], answer:1, explain:'「十」 dibaca "juu" — sepuluh.' },
      { q:'Apa arti dari 「百」?', options:['Sepuluh','Seratus','Seribu','Sepuluh ribu'], answer:1, explain:'「百」 dibaca "hyaku" — seratus.' },
      { q:'Apa arti dari 「千」?', options:['Seratus','Seribu','Sepuluh ribu','Seratus ribu'], answer:1, explain:'「千」 dibaca "sen" — seribu.' },
      { q:'Apa arti dari 「万」?', options:['Seribu','Sepuluh ribu','Seratus ribu','Sejuta'], answer:1, explain:'「万」 dibaca "man" — sepuluh ribu.' }
    ]
  },

  /* ============================================================
     KANJI N5 — SET 2
     ============================================================ */
  'kanji-n5-2': {
    label: 'Kanji · N5',
    title: 'Kanji N5 — Set 2',
    desc: 'Kanji orang, tempat, dan arah.',
    soal: [
      { q:'Apa arti dari 「人」?', options:['Orang','Anak','Guru','Teman'], answer:0, explain:'「人」 dibaca "hito" — orang.' },
      { q:'Apa arti dari 「男」?', options:['Perempuan','Laki-laki','Anak','Dewasa'], answer:1, explain:'「男」 dibaca "otoko" — laki-laki.' },
      { q:'Apa arti dari 「女」?', options:['Laki-laki','Perempuan','Anak','Ibu'], answer:1, explain:'「女」 dibaca "onna" — perempuan.' },
      { q:'Apa arti dari 「子」?', options:['Orang tua','Anak','Guru','Teman'], answer:1, explain:'「子」 dibaca "ko" — anak.' },
      { q:'Apa arti dari 「父」?', options:['Ibu','Ayah','Kakak','Adik'], answer:1, explain:'「父」 dibaca "chichi" — ayah (keluarga sendiri).' },
      { q:'Apa arti dari 「母」?', options:['Ayah','Ibu','Nenek','Kakak perempuan'], answer:1, explain:'「母」 dibaca "haha" — ibu (keluarga sendiri).' },
      { q:'Apa arti dari 「友」?', options:['Musuh','Teman','Guru','Keluarga'], answer:1, explain:'「友」 dibaca "tomo" — teman.' },
      { q:'Apa arti dari 「先」?', options:['Belakang','Depan / Dulu','Atas','Bawah'], answer:1, explain:'「先」 dibaca "saki" — depan atau dulu.' },
      { q:'Apa arti dari 「生」?', options:['Mati','Hidup / Lahir','Tidur','Bangun'], answer:1, explain:'「生」 dibaca "sei" — hidup atau lahir.' },
      { q:'Apa arti dari 「学」?', options:['Belajar','Bermain','Bekerja','Tidur'], answer:0, explain:'「学」 dibaca "gaku" — belajar.' },
      { q:'Apa arti dari 「校」?', options:['Rumah','Sekolah','Kantor','Toko'], answer:1, explain:'「校」 dibaca "kou" — sekolah (dalam 学校).' },
      { q:'Apa arti dari 「国」?', options:['Kota','Negara','Desa','Pulau'], answer:1, explain:'「国」 dibaca "kuni" — negara.' },
      { q:'Apa arti dari 「山」?', options:['Laut','Gunung','Sungai','Danau'], answer:1, explain:'「山」 dibaca "yama" — gunung.' },
      { q:'Apa arti dari 「川」?', options:['Gunung','Sungai','Laut','Danau'], answer:1, explain:'「川」 dibaca "kawa" — sungai.' },
      { q:'Apa arti dari 「海」?', options:['Gunung','Sungai','Laut','Danau'], answer:2, explain:'「海」 dibaca "umi" — laut.' },
      { q:'Apa arti dari 「天」?', options:['Bumi','Langit','Laut','Angin'], answer:1, explain:'「天」 dibaca "ten" — langit.' },
      { q:'Apa arti dari 「気」?', options:['Air','Semangat / Udara','Api','Tanah'], answer:1, explain:'「気」 dibaca "ki" — semangat atau udara.' },
      { q:'Apa arti dari 「上」?', options:['Bawah','Atas','Kiri','Kanan'], answer:1, explain:'「上」 dibaca "ue" — atas.' },
      { q:'Apa arti dari 「下」?', options:['Atas','Bawah','Kiri','Kanan'], answer:1, explain:'「下」 dibaca "shita" — bawah.' },
      { q:'Apa arti dari 「中」?', options:['Luar','Dalam / Tengah','Atas','Bawah'], answer:1, explain:'「中」 dibaca "naka" — dalam atau tengah.' }
    ]
  },

  /* ============================================================
     TATA BAHASA N5 — SET 1
     ============================================================ */
  'tata-n5-1': {
    label: 'Tata Bahasa · N5',
    title: 'Tata Bahasa N5 — Set 1',
    desc: 'Partikel は・が・を & pola です・ます.',
    soal: [
      { q:'Partikel apa yang menandai TOPIK kalimat?', options:['は (wa)','が (ga)','を (o)','に (ni)'], answer:0, explain:'「は」 menandai topik kalimat.' },
      { q:'Partikel apa yang menandai SUBJEK kalimat?', options:['は (wa)','が (ga)','を (o)','で (de)'], answer:1, explain:'「が」 menandai subjek kalimat.' },
      { q:'Partikel apa yang menandai OBJEK kalimat?', options:['は (wa)','が (ga)','を (o)','に (ni)'], answer:2, explain:'「を」 menandai objek langsung dari kata kerja.' },
      { q:'「私は学生___。」 Partikel yang tepat untuk melengkapi kalimat?', options:['を','が','です','に'], answer:2, explain:'「です」 dipakai di akhir kalimat yang predikatnya kata benda.' },
      { q:'「ご飯___食べます。」 Partikel yang tepat?', options:['は','が','を','に'], answer:2, explain:'「を」 menandai objek dari kata kerja 食べます (makan).' },
      { q:'「猫___います。」 Partikel yang tepat?', options:['は','が','を','で'], answer:1, explain:'「が」 menandai subjek — ada kucing.' },
      { q:'Bentuk negatif dari 「学生です」 adalah...', options:['学生でした','学生じゃありません','学生ます','学生ません'], answer:1, explain:'Bentuk negatif dari です adalah じゃありません.' },
      { q:'Bentuk lampau dari 「学生です」 adalah...', options:['学生でした','学生じゃありません','学生ます','学生ません'], answer:0, explain:'Bentuk lampau dari です adalah でした.' },
      { q:'Bentuk negatif dari 「食べます」 adalah...', options:['食べました','食べません','食べです','食べじゃ'], answer:1, explain:'Bentuk negatif dari ます adalah ません.' },
      { q:'Bentuk lampau dari 「食べます」 adalah...', options:['食べました','食べません','食べです','食べじゃ'], answer:0, explain:'Bentuk lampau dari ます adalah ました.' },
      { q:'「〜は〜です」 artinya...', options:['〜 bukan 〜','〜 adalah 〜','〜 melakukan 〜','〜 punya 〜'], answer:1, explain:'Pola 〜は〜です berarti "〜 adalah 〜".' },
      { q:'「〜を〜ます」 artinya...', options:['〜 adalah 〜','〜 melakukan 〜 pada 〜','〜 bukan 〜','〜 punya 〜'], answer:1, explain:'Pola 〜を〜ます berarti "melakukan 〜 pada 〜".' },
      { q:'「私は学生じゃありませんでした」 artinya...', options:['Saya adalah pelajar','Saya bukan pelajar','Saya dulu pelajar','Saya dulu bukan pelajar'], answer:3, explain:'じゃありませんでした = bentuk lampau negatif. Artinya "dulu bukan".' },
      { q:'「ご飯を食べませんでした」 artinya...', options:['Saya makan nasi','Saya tidak makan nasi','Saya dulu makan nasi','Saya tidak makan nasi (lampau)'], answer:3, explain:'ませんでした = lampau negatif. Artinya "tidak makan (di masa lalu)".' },
      { q:'Partikel 「は」 dibaca...', options:['ha','wa','ba','pa'], answer:1, explain:'Sebagai partikel, 「は」 dibaca "wa".' },
      { q:'Partikel 「を」 dibaca...', options:['wo','o','bo','po'], answer:1, explain:'Partikel 「を」 dibaca "o".' },
      { q:'「これは本です」 artinya...', options:['Ini adalah buku','Itu adalah buku','Itu adalah pena','Ini adalah meja'], answer:0, explain:'これは本です = "Ini adalah buku".' },
      { q:'「あれは何ですか」 artinya...', options:['Ini apa?','Itu apa?','Itu (jauh) apa?','Di mana itu?'], answer:2, explain:'あれ = itu (jauh dari pembicara & lawan bicara).' },
      { q:'Kata 「私」 dibaca...', options:['watashi','anata','kare','kanojo'], answer:0, explain:'「私」 dibaca "watashi" — saya.' },
      { q:'Kata 「あなた」 artinya...', options:['Saya','Kamu','Dia (lk)','Dia (pr)'], answer:1, explain:'「あなた」 artinya "kamu".' }
    ]
  },

  /* ============================================================
     TATA BAHASA N5 — SET 2
     ============================================================ */
  'tata-n5-2': {
    label: 'Tata Bahasa · N5',
    title: 'Tata Bahasa N5 — Set 2',
    desc: 'Partikel に・で・へ & kata tunjuk.',
    soal: [
      { q:'Partikel 「に」 dipakai untuk menandai...', options:['Tempat aksi','Titik tujuan / waktu','Alat','Bahan'], answer:1, explain:'「に」 menandai titik tujuan, waktu spesifik, atau penerima.' },
      { q:'Partikel 「で」 dipakai untuk menandai...', options:['Titik tujuan','Tempat aksi / alat','Penerima','Waktu'], answer:1, explain:'「で」 menandai tempat aksi, alat, atau bahan.' },
      { q:'Partikel 「へ」 dipakai untuk menandai...', options:['Tempat aksi','Arah tujuan (formal)','Alat','Waktu'], answer:1, explain:'「へ」 menandai arah tujuan, lebih formal dari に.' },
      { q:'「学校___行きます」 Partikel yang tepat?', options:['を','に','が','は'], answer:1, explain:'「に」 menandai titik tujuan — pergi ke sekolah.' },
      { q:'「学校___勉強します」 Partikel yang tepat?', options:['に','で','を','へ'], answer:1, explain:'「で」 menandai tempat aksi — belajar di sekolah.' },
      { q:'「車___行きます」 Partikel yang tepat?', options:['に','で','を','が'], answer:1, explain:'「で」 menandai alat — pergi naik mobil.' },
      { q:'Kata 「ここ」 artinya...', options:['Di sini','Di situ','Di sana','Di mana'], answer:0, explain:'「ここ」 = di sini (dekat pembicara).' },
      { q:'Kata 「そこ」 artinya...', options:['Di sini','Di situ','Di sana','Di mana'], answer:1, explain:'「そこ」 = di situ (dekat lawan bicara).' },
      { q:'Kata 「あそこ」 artinya...', options:['Di sini','Di situ','Di sana','Di mana'], answer:2, explain:'「あそこ」 = di sana (jauh dari keduanya).' },
      { q:'Kata 「どこ」 artinya...', options:['Di sini','Di situ','Di sana','Di mana'], answer:3, explain:'「どこ」 = di mana (kata tanya).' },
      { q:'Kata 「だれ」 artinya...', options:['Apa','Siapa','Kapan','Di mana'], answer:1, explain:'「だれ」 = siapa.' },
      { q:'Kata 「いつ」 artinya...', options:['Apa','Siapa','Kapan','Di mana'], answer:2, explain:'「いつ」 = kapan.' },
      { q:'Kata 「なに」 artinya...', options:['Apa','Siapa','Kapan','Di mana'], answer:0, explain:'「なに」 = apa.' },
      { q:'「これは何ですか」 artinya...', options:['Ini apa?','Itu apa?','Itu (jauh) apa?','Siapa ini?'], answer:0, explain:'これは何ですか = "Ini apa?".' },
      { q:'Kata 「いくら」 dipakai untuk menanyakan...', options:['Nama','Harga','Waktu','Tempat'], answer:1, explain:'「いくら」 = berapa (harga).' },
      { q:'「日本語___話します」 Partikel yang tepat?', options:['に','で','を','が'], answer:1, explain:'「で」 menandai bahasa — berbicara dalam bahasa Jepang.' },
      { q:'「3時___起きます」 Partikel yang tepat?', options:['に','で','を','へ'], answer:0, explain:'「に」 menandai waktu spesifik — bangun jam 3.' },
      { q:'「友達___手紙を書きます」 Partikel yang tepat?', options:['に','で','を','へ'], answer:0, explain:'「に」 menandai penerima — menulis surat untuk teman.' },
      { q:'Kata 「どちら」 artinya...', options:['Di mana (sopan)','Siapa (sopan)','Apa (sopan)','Kapan (sopan)'], answer:0, explain:'「どちら」 = di mana / yang mana (versi sopan dari どこ).' },
      { q:'Kata 「どなた」 artinya...', options:['Di mana (sopan)','Siapa (sopan)','Apa (sopan)','Kapan (sopan)'], answer:1, explain:'「どなた」 = siapa (versi sopan dari だれ).' }
    ]
  },

  /* ============================================================
     MEMBACA N5 — SET 1
     ============================================================ */
  'membaca-n5-1': {
    label: 'Membaca · N5',
    title: 'Membaca N5 — Set 1',
    desc: 'Teks pendek dan pemahaman bacaan.',
    soal: [
      { q:'「わたしは がくせいです。にほんごを べんきょうしています。」\nSiapa yang dimaksud dalam kalimat ini?', options:['Guru','Pelajar','Dokter','Karyawan'], answer:1, explain:'がくせい = pelajar. Kalimat: "Saya pelajar. Sedang belajar bahasa Jepang."' },
      { q:'「きょうは あついです。あしたは さむいです。」\nBagaimana cuaca besok?', options:['Panas','Dingin','Hujan','Cerah'], answer:1, explain:'あしたは さむい = besok dingin.' },
      { q:'「わたしは まいにち ごはんを たべます。」\nBerapa kali orang ini makan nasi?', options:['Setiap hari','Setiap minggu','Setiap bulan','Setiap tahun'], answer:0, explain:'まいにち = setiap hari.' },
      { q:'「これは わたしの ほんです。あれは ともだちの ほんです。」\nMilik siapa buku yang jauh?', options:['Milik saya','Milik teman','Milik guru','Milik keluarga'], answer:1, explain:'あれは ともだちの ほん = buku itu milik teman.' },
      { q:'「わたしは あさ 6じに おきます。それから ごはんを たべます。」\nApa yang dilakukan setelah bangun?', options:['Tidur lagi','Makan','Mandi','Belajar'], answer:1, explain:'それから ごはんを たべます = lalu makan.' },
      { q:'「きのう えいがを みました。とても おもしろかったです。」\nBagaimana filmnya?', options:['Membosankan','Menarik','Menakutkan','Sedih'], answer:1, explain:'おもしろかった = menarik (bentuk lampau).' },
      { q:'「わたしは コーヒーが すきです。こうちゃは すきじゃありません。」\nMinuman apa yang disukai?', options:['Teh','Kopi','Jus','Susu'], answer:1, explain:'コーヒーが すき = suka kopi.' },
      { q:'「にほんごの べんきょうは たのしいです。でも、かんじは むずかしいです。」\nApa yang sulit?', options:['Hiragana','Katakana','Kanji','Romaji'], answer:2, explain:'かんじは むずかしい = kanji itu sulit.' },
      { q:'「わたしの かぞくは 4にんです。ちちと ははと あねと わたしです。」\nBerapa jumlah keluarga?', options:['2 orang','3 orang','4 orang','5 orang'], answer:2, explain:'4にん = 4 orang.' },
      { q:'「がっこうは えきの ちかくに あります。」\nDi mana sekolahnya?', options:['Di stasiun','Dekat stasiun','Jauh dari stasiun','Di rumah'], answer:1, explain:'えきの ちかく = dekat stasiun.' },
      { q:'「わたしは まいにち にほんごを 1じかん べんきょうします。」\nBerapa lama belajar setiap hari?', options:['30 menit','1 jam','2 jam','3 jam'], answer:1, explain:'1じかん = 1 jam.' },
      { q:'「どようびに ともだちと こうえんへ いきます。」\nKapan pergi ke taman?', options:['Senin','Selasa','Sabtu','Minggu'], answer:2, explain:'どようび = Sabtu.' },
      { q:'「あしたは やすみです。だから、うちで ゆっくり します。」\nApa yang akan dilakukan besok?', options:['Bekerja','Belajar','Bersantai di rumah','Pergi jalan'], answer:2, explain:'うちで ゆっくり = bersantai di rumah.' },
      { q:'「この みせは やすいです。あの みせは たかいです。」\nToko mana yang murah?', options:['Toko ini','Toko itu','Toko sana','Semuanya'], answer:0, explain:'この みせは やすい = toko ini murah.' },
      { q:'「わたしは おんがくを きくのが すきです。」\nApa yang disukai?', options:['Membaca','Mendengarkan musik','Menonton film','Memasak'], answer:1, explain:'おんがくを きく = mendengarkan musik.' },
      { q:'「せんしゅうの にちようびに ともだちと あいました。」\nKapan bertemu teman?', options:['Minggu ini','Minggu lalu','Minggu depan','Setiap minggu'], answer:1, explain:'せんしゅう = minggu lalu.' },
      { q:'「この りんごは あまいです。あの りんごは すっぱいです。」\nBagaimana apel yang itu?', options:['Manis','Asam','Pahit','Hambar'], answer:1, explain:'すっぱい = asam.' },
      { q:'「わたしは あまり テレビを みません。」\nBerapa sering menonton TV?', options:['Sering','Jarang','Setiap hari','Tidak pernah'], answer:1, explain:'あまり 〜ません = jarang/tidak terlalu sering.' },
      { q:'「えきまで タクシーで いきます。」\nNaik apa ke stasiun?', options:['Bus','Taksi','Kereta','Sepeda'], answer:1, explain:'タクシー = taksi.' },
      { q:'「わたしの たんじょうびは 5がつ 3かです。」\nKapan ulang tahunnya?', options:['3 Mei','5 Maret','3 Maret','5 Mei'], answer:0, explain:'5がつ 3か = 3 Mei.' }
    ]
  },

  /* ============================================================
     MENDENGAR N5 — SET 1 (audio diganti teks)
     ============================================================ */
  'mendengar-n5-1': {
    label: 'Mendengar · N5',
    title: 'Mendengar N5 — Set 1',
    desc: 'Pemahaman percakapan (versi teks).',
    soal: [
      { q:'A: おはようございます。\nB: おはようございます。\nSapaan ini diucapkan pada waktu...', options:['Pagi','Siang','Malam','Tengah malam'], answer:0, explain:'おはようございます = selamat pagi.' },
      { q:'A: すみません、えきは どこですか。\nB: あそこです。\nDi mana stasiun?', options:['Di sini','Di situ','Di sana','Di depan'], answer:2, explain:'あそこ = di sana (jauh).' },
      { q:'A: これは いくらですか。\nB: 500えんです。\nBerapa harganya?', options:['100 yen','300 yen','500 yen','1000 yen'], answer:2, explain:'500えん = 500 yen.' },
      { q:'A: おなまえは。\nB: たなかです。\nSiapa namanya?', options:['Tanaka','Suzuki','Sato','Yamada'], answer:0, explain:'たなか = Tanaka.' },
      { q:'A: にほんごが わかりますか。\nB: はい、すこし。\nApakah B mengerti bahasa Jepang?', options:['Tidak sama sekali','Sedikit','Banyak','Sangat lancar'], answer:1, explain:'すこし = sedikit.' },
      { q:'A: あした なんじに あいますか。\nB: 3じに。\nJam berapa bertemu?', options:['1 jam','2 jam','3 jam','4 jam'], answer:2, explain:'3じ = jam 3.' },
      { q:'A: なにを のみますか。\nB: おちゃを おねがいします。\nApa yang dipesan?', options:['Air','Teh','Kopi','Jus'], answer:1, explain:'おちゃ = teh.' },
      { q:'A: どこに すんでいますか。\nB: とうきょうです。\nDi mana tinggal?', options:['Osaka','Tokyo','Kyoto','Nagoya'], answer:1, explain:'とうきょう = Tokyo.' },
      { q:'A: あついですね。\nB: ええ、とても。\nBagaimana cuacanya?', options:['Dingin','Panas','Sejuk','Hujan'], answer:1, explain:'あつい = panas.' },
      { q:'A: おげんきですか。\nB: はい、おかげさまで。\nApa artinya "おかげさまで"?', options:['Terima kasih','Baik-baik saja','Maaf','Selamat'], answer:1, explain:'おかげさまで = baik-baik saja (berkat doa Anda).' },
      { q:'A: たべに いきませんか。\nB: いいですね。\nApa jawaban B?', options:['Menolak','Menerima','Bertanya','Diam'], answer:1, explain:'いいですね = "bagus ya" (menerima).' },
      { q:'A: これは あなたの ですか。\nB: いいえ、ちがいます。\nApakah ini miliknya?', options:['Ya','Tidak','Mungkin','Tidak tahu'], answer:1, explain:'いいえ、ちがいます = tidak, bukan.' },
      { q:'A: やすみは いつですか。\nB: どようびと にちようびです。\nKapan harinya libur?', options:['Senin-Jumat','Sabtu-Minggu','Hanya Minggu','Setiap hari'], answer:1, explain:'どようび = Sabtu, にちようび = Minggu.' },
      { q:'A: おそく なりました。すみません。\nB: だいじょうぶです。\nApa arti "だいじょうぶ"?', options:['Sudahlah','Tidak apa-apa','Awas','Cepat'], answer:1, explain:'だいじょうぶ = tidak apa-apa.' },
      { q:'A: おいしいですね。\nB: ええ、とても おいしいです。\nBagaimana makanannya?', options:['Biasa','Tidak enak','Enak','Pahit'], answer:2, explain:'おいしい = enak.' },
      { q:'A: これは なんですか。\nB: それは でんしゃの きっぷです。\nApa benda itu?', options:['Tiket bus','Tiket kereta','Tiket pesawat','Kartu'], answer:1, explain:'でんしゃの きっぷ = tiket kereta listrik.' },
      { q:'A: えいごが はなせますか。\nB: いいえ、はなせません。\nApakah B bisa bahasa Inggris?', options:['Bisa','Tidak bisa','Sedikit','Lancar'], answer:1, explain:'はなせません = tidak bisa berbicara.' },
      { q:'A: この ほんは おもしろいですか。\nB: ええ、とても。\nBagaimana bukunya?', options:['Membosankan','Menarik','Sulit','Pendek'], answer:1, explain:'おもしろい = menarik.' },
      { q:'A: コーヒーと こうちゃ、どちらが いいですか。\nB: コーヒーを おねがいします。\nApa yang dipesan?', options:['Teh','Kopi','Air','Jus'], answer:1, explain:'コーヒー = kopi.' },
      { q:'A: にほんへ いった ことが ありますか。\nB: はい、2かい あります。\nBerapa kali ke Jepang?', options:['1 kali','2 kali','3 kali','Belum pernah'], answer:1, explain:'2かい = 2 kali.' }
    ]
  }

};
