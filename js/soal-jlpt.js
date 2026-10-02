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
  },
       
  /* ============================================================
     KOSAKATA N4 — SET 1
     ============================================================ */
  'kosakata-n4-1': {
    label: 'Kosakata · N4',
    title: 'Kosakata N4 — Set 1',
    desc: 'Kata kerja, sifat, keterangan.',
    soal: [
      { q:'Apa arti dari 「経験」?', options:['Pengalaman','Keahlian','Pengetahuan','Kesempatan'], answer:0, explain:'「経験」 (keiken) = pengalaman.' },
      { q:'Apa arti dari 「準備」?', options:['Persiapan','Pembersihan','Pengiriman','Penyimpanan'], answer:0, explain:'「準備」 (junbi) = persiapan.' },
      { q:'Apa arti dari 「説明」?', options:['Penjelasan','Pertanyaan','Jawaban','Percakapan'], answer:0, explain:'「説明」 (setsumei) = penjelasan.' },
      { q:'Apa arti dari 「連絡」?', options:['Hubungan','Komunikasi','Kontak','Perjanjian'], answer:2, explain:'「連絡」 (renraku) = kontak / menghubungi.' },
      { q:'Apa arti dari 「相談」?', options:['Perkataan','Konsultasi','Percakapan','Perselisihan'], answer:1, explain:'「相談」 (soudan) = konsultasi / berdiskusi.' },
      { q:'Apa arti dari 「予定」?', options:['Rencana','Keputusan','Perubahan','Keinginan'], answer:0, explain:'「予定」 (yotei) = rencana / jadwal.' },
      { q:'Apa arti dari 「約束」?', options:['Janji','Ajakan','Perintah','Permintaan'], answer:0, explain:'「約束」 (yakusoku) = janji.' },
      { q:'Apa arti dari 「生活」?', options:['Kehidupan','Pekerjaan','Sekolah','Keluarga'], answer:0, explain:'「生活」 (seikatsu) = kehidupan.' },
      { q:'Apa arti dari 「社会」?', options:['Masyarakat','Keluarga','Sekolah','Perusahaan'], answer:0, explain:'「社会」 (shakai) = masyarakat.' },
      { q:'Apa arti dari 「文化」?', options:['Budaya','Sejarah','Tradisi','Agama'], answer:0, explain:'「文化」 (bunka) = budaya.' },
      { q:'Apa arti dari 「習慣」?', options:['Kebiasaan','Aturan','Kesepakatan','Perubahan'], answer:0, explain:'「習慣」 (shuukan) = kebiasaan.' },
      { q:'Apa arti dari 「最近」?', options:['Akhir-akhir ini','Dulu','Besok','Kemarin'], answer:0, explain:'「最近」 (saikin) = akhir-akhir ini.' },
      { q:'Apa arti dari 「昔」?', options:['Dahulu','Sekarang','Besok','Nanti'], answer:0, explain:'「昔」 (mukashi) = dahulu kala.' },
      { q:'Apa arti dari 「将来」?', options:['Masa depan','Masa lalu','Masa kini','Selamanya'], answer:0, explain:'「将来」 (shourai) = masa depan.' },
      { q:'Apa arti dari 「意見」?', options:['Pendapat','Pertanyaan','Jawaban','Laporan'], answer:0, explain:'「意見」 (iken) = pendapat.' },
      { q:'Apa arti dari 「理由」?', options:['Alasan','Sebab','Akibat','Tujuan'], answer:0, explain:'「理由」 (riyuu) = alasan.' },
      { q:'Apa arti dari 「目的」?', options:['Tujuan','Alasan','Hasil','Proses'], answer:0, explain:'「目的」 (mokuteki) = tujuan.' },
      { q:'Apa arti dari 「方法」?', options:['Metode / cara','Alat','Bahan','Hasil'], answer:0, explain:'「方法」 (houhou) = metode / cara.' },
      { q:'Apa arti dari 「結果」?', options:['Hasil','Proses','Awal','Pertengahan'], answer:0, explain:'「結果」 (kekka) = hasil.' },
      { q:'Apa arti dari 「問題」?', options:['Masalah / soal','Jawaban','Solusi','Pertanyaan'], answer:0, explain:'「問題」 (mondai) = masalah atau soal.' }
    ]
  },

  /* ============================================================
     KOSAKATA N4 — SET 2
     ============================================================ */
  'kosakata-n4-2': {
    label: 'Kosakata · N4',
    title: 'Kosakata N4 — Set 2',
    desc: 'Kata serapan & ungkapan umum.',
    soal: [
      { q:'Apa arti dari 「アルバイト」?', options:['Kerja paruh waktu','Liburan','Pekerjaan tetap','Sekolah'], answer:0, explain:'「アルバイト」 (arubaito) = kerja paruh waktu (dari bahasa Jerman "Arbeit").' },
      { q:'Apa arti dari 「アパート」?', options:['Apartemen','Rumah','Asrama','Hotel'], answer:0, explain:'「アパート」 (apaato) = apartemen.' },
      { q:'Apa arti dari 「エスカレーター」?', options:['Eskalator','Lift','Tangga','Jembatan'], answer:0, explain:'「エスカレーター」 = eskalator.' },
      { q:'Apa arti dari 「カレンダー」?', options:['Kalender','Buku','Koran','Majalah'], answer:0, explain:'「カレンダー」 = kalender.' },
      { q:'Apa arti dari 「コンピューター」?', options:['Komputer','Televisi','Radio','Telepon'], answer:0, explain:'「コンピューター」 = komputer.' },
      { q:'Apa arti dari 「スーパー」?', options:['Supermarket','Restoran','Kantor','Sekolah'], answer:0, explain:'「スーパー」 = supermarket.' },
      { q:'Apa arti dari 「タオル」?', options:['Handuk','Sapu','Sabun','Sikat'], answer:0, explain:'「タオル」 = handuk.' },
      { q:'Apa arti dari 「チケット」?', options:['Tiket','Karcis','Kartu','Undangan'], answer:0, explain:'「チケット」 = tiket.' },
      { q:'Apa arti dari 「テキスト」?', options:['Buku teks','Novel','Komik','Kamus'], answer:0, explain:'「テキスト」 = buku teks.' },
      { q:'Apa arti dari 「ニュース」?', options:['Berita','Kabar','Pengumuman','Iklan'], answer:0, explain:'「ニュース」 = berita.' },
      { q:'Apa arti dari 「パソコン」?', options:['Komputer pribadi','Televisi','Radio','Telepon'], answer:0, explain:'「パソコン」 = personal computer (PC).' },
      { q:'Apa arti dari 「ビル」?', options:['Gedung','Rumah','Jembatan','Menara'], answer:0, explain:'「ビル」 = gedung.' },
      { q:'Apa arti dari 「プレゼント」?', options:['Hadiah','Pesta','Kartu','Surat'], answer:0, explain:'「プレゼント」 = hadiah.' },
      { q:'Apa arti dari 「ホテル」?', options:['Hotel','Rumah','Apartemen','Asrama'], answer:0, explain:'「ホテル」 = hotel.' },
      { q:'Apa arti dari 「レストラン」?', options:['Restoran','Kafe','Toko','Warung'], answer:0, explain:'「レストラン」 = restoran.' },
      { q:'Apa arti dari 「エアコン」?', options:['AC','Kipas','Lampu','Pemanas'], answer:0, explain:'「エアコン」 = AC (air conditioner).' },
      { q:'Apa arti dari 「ガソリン」?', options:['Bensin','Solar','Oli','Air'], answer:0, explain:'「ガソリン」 = bensin.' },
      { q:'Apa arti dari 「ガラス」?', options:['Kaca','Kayu','Besi','Plastik'], answer:0, explain:'「ガラス」 = kaca.' },
      { q:'Apa arti dari 「ケーキ」?', options:['Kue','Roti','Biskuit','Puding'], answer:0, explain:'「ケーキ」 = kue.' },
      { q:'Apa arti dari 「コート」?', options:['Mantel','Jaket','Kemeja','Sweater'], answer:0, explain:'「コート」 = mantel / coat.' }
    ]
  },

  /* ============================================================
     KANJI N4 — SET 1
     ============================================================ */
  'kanji-n4-1': {
    label: 'Kanji · N4',
    title: 'Kanji N4 — Set 1',
    desc: 'Kanji menengah bagian 1.',
    soal: [
      { q:'Apa arti dari 「会」?', options:['Bertemu','Berpisah','Berbicara','Bermain'], answer:0, explain:'「会」 dibaca "au" atau "kai" — bertemu.' },
      { q:'Apa arti dari 「同」?', options:['Sama','Beda','Baru','Lama'], answer:0, explain:'「同」 dibaca "onaji" atau "dou" — sama.' },
      { q:'Apa arti dari 「事」?', options:['Hal / pekerjaan','Benda','Tempat','Orang'], answer:0, explain:'「事」 dibaca "koto" atau "ji" — hal / pekerjaan.' },
      { q:'Apa arti dari 「自」?', options:['Sendiri','Orang lain','Keluarga','Teman'], answer:0, explain:'「自」 dibaca "mizukara" atau "ji" — sendiri.' },
      { q:'Apa arti dari 「社」?', options:['Perusahaan / kuil','Sekolah','Rumah','Toko'], answer:0, explain:'「社」 dibaca "sha" — perusahaan atau kuil Shinto.' },
      { q:'Apa arti dari 「発」?', options:['Berangkat / mulai','Berhenti','Kembali','Tinggal'], answer:0, explain:'「発」 dibaca "hatsu" — berangkat atau mulai.' },
      { q:'Apa arti dari 「者」?', options:['Orang (profesi)','Benda','Tempat','Hewan'], answer:0, explain:'「者」 dibaca "sha" atau "mono" — orang (dalam konteks profesi).' },
      { q:'Apa arti dari 「地」?', options:['Tanah / tempat','Langit','Laut','Gunung'], answer:0, explain:'「地」 dibaca "chi" atau "ji" — tanah atau tempat.' },
      { q:'Apa arti dari 「業」?', options:['Usaha / industri','Pertanian','Perikanan','Pendidikan'], answer:0, explain:'「業」 dibaca "gyou" — usaha atau industri.' },
      { q:'Apa arti dari 「方」?', options:['Arah / cara','Bentuk','Ukuran','Warna'], answer:0, explain:'「方」 dibaca "hou" atau "kata" — arah atau cara.' },
      { q:'Apa arti dari 「新」?', options:['Baru','Lama','Besar','Kecil'], answer:0, explain:'「新」 dibaca "atarashii" atau "shin" — baru.' },
      { q:'Apa arti dari 「場」?', options:['Tempat','Waktu','Orang','Benda'], answer:0, explain:'「場」 dibaca "ba" atau "jou" — tempat.' },
      { q:'Apa arti dari 「員」?', options:['Anggota','Pemimpin','Tamu','Pengunjung'], answer:0, explain:'「員」 dibaca "in" — anggota.' },
      { q:'Apa arti dari 「立」?', options:['Berdiri','Duduk','Berbaring','Berjalan'], answer:0, explain:'「立」 dibaca "tatsu" atau "ritsu" — berdiri.' },
      { q:'Apa arti dari 「開」?', options:['Membuka','Menutup','Mengunci','Merusak'], answer:0, explain:'「開」 dibaca "akeru" atau "kai" — membuka.' },
      { q:'Apa arti dari 「手」?', options:['Tangan','Kaki','Kepala','Mata'], answer:0, explain:'「手」 dibaca "te" atau "shu" — tangan.' },
      { q:'Apa arti dari 「力」?', options:['Kekuatan','Kelemahan','Kecepatan','Kelambatan'], answer:0, explain:'「力」 dibaca "chikara" atau "ryoku" — kekuatan.' },
      { q:'Apa arti dari 「問」?', options:['Bertanya','Menjawab','Menolak','Menerima'], answer:0, explain:'「問」 dibaca "tou" atau "mon" — bertanya.' },
      { q:'Apa arti dari 「代」?', options:['Generasi / mengganti','Awal','Akhir','Tengah'], answer:0, explain:'「代」 dibaca "dai" atau "kawaru" — generasi atau mengganti.' },
      { q:'Apa arti dari 「明」?', options:['Terang / jelas','Gelap','Redup','Kabur'], answer:0, explain:'「明」 dibaca "akarui" atau "mei" — terang atau jelas.' }
    ]
  },

  /* ============================================================
     TATA BAHASA N4 — SET 1
     ============================================================ */
  'tata-n4-1': {
    label: 'Tata Bahasa · N4',
    title: 'Tata Bahasa N4 — Set 1',
    desc: 'Bentuk ない・た・て.',
    soal: [
      { q:'Bentuk ない dari 「食べる」 adalah...', options:['食べない','食べた','食べて','食べます'], answer:0, explain:'Bentuk ない dari 食べる = 食べない (tidak makan).' },
      { q:'Bentuk ない dari 「行く」 adalah...', options:['行かない','行きた','行きて','行きます'], answer:0, explain:'Bentuk ない dari 行く = 行かない (tidak pergi).' },
      { q:'Bentuk た dari 「食べる」 adalah...', options:['食べた','食べない','食べて','食べます'], answer:0, explain:'Bentuk た dari 食べる = 食べた (sudah makan).' },
      { q:'Bentuk た dari 「行く」 adalah...', options:['行った','行きた','行いて','行きます'], answer:0, explain:'Bentuk た dari 行く = 行った (sudah pergi).' },
      { q:'Bentuk て dari 「食べる」 adalah...', options:['食べて','食べた','食べない','食べます'], answer:0, explain:'Bentuk て dari 食べる = 食べて.' },
      { q:'Bentuk て dari 「飲む」 adalah...', options:['飲んで','飲みて','飲った','飲みます'], answer:0, explain:'Bentuk て dari 飲む = 飲んで.' },
      { q:'Bentuk て dari 「書く」 adalah...', options:['書いて','書きて','書って','書きます'], answer:0, explain:'Bentuk て dari 書く = 書いて.' },
      { q:'Bentuk て dari 「話す」 adalah...', options:['話して','話しって','話して','話します'], answer:0, explain:'Bentuk て dari 話す = 話して.' },
      { q:'Bentuk て dari 「読む」 adalah...', options:['読んで','読みて','読って','読みます'], answer:0, explain:'Bentuk て dari 読む = 読んで.' },
      { q:'Bentuk て dari 「待つ」 adalah...', options:['待って','待ちて','待って','待ちます'], answer:0, explain:'Bentuk て dari 待つ = 待って.' },
      { q:'Bentuk て dari 「来る」 adalah...', options:['来て','来た','来ない','来ます'], answer:0, explain:'Bentuk て dari 来る = 来て.' },
      { q:'Bentuk て dari 「する」 adalah...', options:['して','した','しない','します'], answer:0, explain:'Bentuk て dari する = して.' },
      { q:'「食べない」 artinya...', options:['Tidak makan','Sudah makan','Sedang makan','Akan makan'], answer:0, explain:'食べない = tidak makan (bentuk negatif).' },
      { q:'「食べた」 artinya...', options:['Sudah makan','Tidak makan','Sedang makan','Akan makan'], answer:0, explain:'食べた = sudah makan (bentuk lampau).' },
      { q:'「行った」 artinya...', options:['Sudah pergi','Tidak pergi','Sedang pergi','Akan pergi'], answer:0, explain:'行った = sudah pergi (bentuk lampau).' },
      { q:'Bentuk negatif lampau dari 「食べる」 adalah...', options:['食べなかった','食べませんでした','食べない','食べた'], answer:0, explain:'食べなかった = bentuk kasual negatif lampau.' },
      { q:'Bentuk negatif lampau dari 「行く」 adalah...', options:['行かなかった','行きません','行かない','行った'], answer:0, explain:'行かなかった = bentuk kasual negatif lampau.' },
      { q:'「〜てください」 artinya...', options:['Tolong lakukan 〜','Jangan lakukan 〜','Sudah lakukan 〜','Akan lakukan 〜'], answer:0, explain:'〜てください = tolong lakukan 〜.' },
      { q:'「〜ています」 artinya...', options:['Sedang melakukan 〜','Akan melakukan 〜','Sudah melakukan 〜','Tidak melakukan 〜'], answer:0, explain:'〜ています = sedang melakukan 〜.' },
      { q:'「〜てもいいです」 artinya...', options:['Boleh melakukan 〜','Tidak boleh melakukan 〜','Harus melakukan 〜','Sudah melakukan 〜'], answer:0, explain:'〜てもいいです = boleh melakukan 〜.' }
    ]
  },

  /* ============================================================
     TATA BAHASA N4 — SET 2
     ============================================================ */
  'tata-n4-2': {
    label: 'Tata Bahasa · N4',
    title: 'Tata Bahasa N4 — Set 2',
    desc: 'Bentuk potensial & volitional.',
    soal: [
      { q:'Bentuk potensial dari 「食べる」 adalah...', options:['食べられる','食べない','食べた','食べます'], answer:0, explain:'食べられる = bisa makan (bentuk potensial).' },
      { q:'Bentuk potensial dari 「行く」 adalah...', options:['行ける','行かない','行った','行きます'], answer:0, explain:'行ける = bisa pergi (bentuk potensial).' },
      { q:'Bentuk potensial dari 「話す」 adalah...', options:['話せる','話さない','話した','話します'], answer:0, explain:'話せる = bisa berbicara.' },
      { q:'Bentuk potensial dari 「読む」 adalah...', options:['読める','読まない','読んだ','読みます'], answer:0, explain:'読める = bisa membaca.' },
      { q:'Bentuk volitional dari 「食べる」 adalah...', options:['食べよう','食べない','食べた','食べます'], answer:0, explain:'食べよう = ayo makan (bentuk ajakan).' },
      { q:'Bentuk volitional dari 「行く」 adalah...', options:['行こう','行かない','行った','行きます'], answer:0, explain:'行こう = ayo pergi.' },
      { q:'「食べられる」 artinya...', options:['Bisa makan','Tidak bisa makan','Sudah makan','Akan makan'], answer:0, explain:'食べられる = bisa makan (potensial).' },
      { q:'「行ける」 artinya...', options:['Bisa pergi','Tidak bisa pergi','Sudah pergi','Akan pergi'], answer:0, explain:'行ける = bisa pergi.' },
      { q:'「食べよう」 artinya...', options:['Ayo makan','Jangan makan','Sudah makan','Akan makan'], answer:0, explain:'食べよう = ayo makan (ajakan).' },
      { q:'「行こう」 artinya...', options:['Ayo pergi','Jangan pergi','Sudah pergi','Akan pergi'], answer:0, explain:'行こう = ayo pergi.' },
      { q:'Bentuk pasif dari 「食べる」 adalah...', options:['食べられる','食べない','食べた','食べます'], answer:0, explain:'食べられる = dimakan (bentuk pasif, sama dengan potensial).' },
      { q:'Bentuk pasif dari 「書く」 adalah...', options:['書かれる','書かない','書いた','書きます'], answer:0, explain:'書かれる = ditulis (bentuk pasif).' },
      { q:'Bentuk kausatif dari 「食べる」 adalah...', options:['食べさせる','食べられる','食べない','食べた'], answer:0, explain:'食べさせる = membuat/menyuruh makan.' },
      { q:'「〜たら」 artinya...', options:['Jika / kalau','Karena','Walaupun','Supaya'], answer:0, explain:'〜たら = jika / kalau (kondisional).' },
      { q:'「もし雨だったら、行きません」 artinya...', options:['Jika hujan, tidak pergi','Karena hujan, pergi','Walaupun hujan, pergi','Supaya tidak hujan'], answer:0, explain:'〜たら = jika/kalau.' },
      { q:'「〜ながら」 artinya...', options:['Sambil melakukan','Setelah melakukan','Sebelum melakukan','Tanpa melakukan'], answer:0, explain:'〜ながら = sambil melakukan dua hal.' },
      { q:'「〜前に」 artinya...', options:['Sebelum','Sesudah','Selama','Setelah'], answer:0, explain:'〜前に = sebelum 〜.' },
      { q:'「〜後で」 artinya...', options:['Sesudah / setelah','Sebelum','Selama','Bersamaan'], answer:0, explain:'〜後で = sesudah / setelah 〜.' },
      { q:'「〜ために」 artinya...', options:['Untuk / karena','Meskipun','Sambil','Tanpa'], answer:0, explain:'〜ために = untuk / karena (menyatakan tujuan atau sebab).' },
      { q:'「〜そうです」 artinya...', options:['Katanya / sepertinya','Benar-benar','Tidak mungkin','Pasti'], answer:0, explain:'〜そうです = katanya / sepertinya (mendengar kabar).' }
    ]
  },

  /* ============================================================
     MEMBACA N4 — SET 1
     ============================================================ */
  'membaca-n4-1': {
    label: 'Membaca · N4',
    title: 'Membaca N4 — Set 1',
    desc: 'Teks 200–400 huruf.',
    soal: [
      { q:'「わたしは 3年前に 日本に 来ました。最初は 日本語が 全然 わかりませんでした。でも、毎日 勉強して、今は だいぶ 話せるように なりました。」\nBerapa lama orang ini di Jepang?', options:['1 tahun','2 tahun','3 tahun','4 tahun'], answer:2, explain:'3年前に 来ました = datang 3 tahun lalu.' },
      { q:'「かれは 毎朝 6時に 起きて、ジョギングを してから 仕事に 行きます。」\nApa yang dilakukan sebelum bekerja?', options:['Sarapan','Jogging','Mandi','Belajar'], answer:1, explain:'ジョギングを してから 仕事に 行きます = jogging dulu, baru kerja.' },
      { q:'「この レストランは 安くて おいしいです。でも、いつも 込んでいます。」\nBagaimana restorannya?', options:['Mahal tapi enak','Murah dan enak','Mahal dan tidak enak','Murah tapi tidak enak'], answer:1, explain:'安くて おいしい = murah dan enak.' },
      { q:'「田中さんは とても 親切な 人です。困った とき、いつも 助けて くれます。」\nBagaimana sifat Tanaka?', options:['Pelit','Baik hati','Pemalas','Pemarah'], answer:1, explain:'親切 = baik hati.' },
      { q:'「明日は 試験が ありますから、今夜は 早く 寝ます。」\nKenapa tidur cepat?', options:['Karena sakit','Karena besok ujian','Karena lelah','Karena besok libur'], answer:1, explain:'明日は 試験が あります = besok ada ujian.' },
      { q:'「私の 趣味は 写真を 撮ることです。休みの 日に いろいろな ところへ 行って、写真を 撮ります。」\nApa hobi orang ini?', options:['Memasak','Fotografi','Membaca','Berenang'], answer:1, explain:'写真を 撮ること = memotret.' },
      { q:'「新しい 仕事は 大変ですが、とても やりがいが あります。」\nBagaimana perasaan tentang pekerjaan baru?', options:['Membosankan','Menyenangkan dan menantang','Mudah','Melelahkan saja'], answer:1, explain:'やりがいが あります = ada kepuasan / menantang.' },
      { q:'「友だちに 国から 送って もらった お菓子を 食べました。とても おいしかったです。」\nDari mana kue itu?', options:['Dibeli di toko','Dikirim dari kampung halaman','Dibuat sendiri','Diberi tetangga'], answer:1, explain:'国から 送って もらった = dikirim dari kampung halaman.' },
      { q:'「昨日は 一日中 雨が 降っていましたから、家で 本を 読んで いました。」\nApa yang dilakukan kemarin?', options:['Jalan-jalan','Baca buku di rumah','Bekerja','Belanja'], answer:1, explain:'家で 本を 読んで いました = baca buku di rumah.' },
      { q:'「この アパートは 駅から 近いので、とても 便利です。でも、ちょっと 高いです。」\nApa kelebihan apartemen ini?', options:['Murah','Dekat stasiun','Luas','Baru'], answer:1, explain:'駅から 近い = dekat dari stasiun.' },
      { q:'「山田さんは いつも 時間を 守ります。それに、仕事も 早いです。」\nBagaimana Yamada?', options:['Selalu terlambat','Selalu tepat waktu & kerja cepat','Sering lupa','Kerja lambat'], answer:1, explain:'時間を 守ります = tepat waktu. 仕事も 早い = kerjanya juga cepat.' },
      { q:'「母は 毎日 料理を 作ります。私は 母の 作る 料理が 大好きです。」\nSiapa yang memasak?', options:['Saya','Ibu','Ayah','Kakak'], answer:1, explain:'母は 料理を 作ります = ibu memasak.' },
      { q:'「今週の 土曜日に 友だちと 映画を 見に 行きます。楽しみです。」\nKapan akan nonton film?', options:['Hari ini','Sabtu ini','Minggu ini','Besok'], answer:1, explain:'今週の 土曜日 = Sabtu minggu ini.' },
      { q:'「日本では 電車が とても 便利です。でも、朝は とても 込んでいます。」\nBagaimana kereta di Jepang?', options:['Tidak nyaman','Sangat nyaman tapi pagi penuh','Selalu kosong','Mahal'], answer:1, explain:'とても 便利 = sangat nyaman. 朝は 込んでいます = pagi penuh.' },
      { q:'「私は 毎晩 日本語を 1時間 勉強します。それから、日本語の ドラマを 見ます。」\nApa yang dilakukan setelah belajar?', options:['Tidur','Nonton drama Jepang','Makan','Jalan-jalan'], answer:1, explain:'それから 日本語の ドラマを 見ます = lalu nonton drama Jepang.' },
      { q:'「先生に 作文を 直して もらいました。とても 勉強に なりました。」\nApa yang dilakukan guru?', options:['Menulis esai','Mengoreksi esai','Membaca esai','Menilai esai'], answer:1, explain:'直して もらいました = dikoreksi (oleh guru).' },
      { q:'「外国語を 勉強する とき、一番 大切な ことは 毎日 続ける ことです。」\nApa hal terpenting dalam belajar bahasa asing?', options:['Belajar cepat','Terus setiap hari','Beli buku mahal','Pergi ke luar negeri'], answer:1, explain:'毎日 続ける こと = meneruskan setiap hari.' },
      { q:'「この レストランは 予約が 必要です。特に 週末は 早めに 予約した ほうが いいです。」\nApa yang perlu dilakukan di restoran ini?', options:['Datang saja','Reservasi dulu','Bayar di depan','Bawa makanan sendiri'], answer:1, explain:'予約が 必要 = perlu reservasi.' },
      { q:'「私は 子どもの とき、よく 祖母の 家に 遊びに 行きました。祖母は いつも おいしい お菓子を 作って くれました。」\nApa yang selalu dilakukan nenek?', options:['Membacakan buku','Membuat kue','Menyanyikan lagu','Mengajak jalan-jalan'], answer:1, explain:'お菓子を 作って くれました = membuat kue (untuk saya).' },
      { q:'「今年の 夏休みは、家族と 沖縄へ 行く 予定です。海で 泳いだり、おいしい ものを 食べたり したいです。」\nApa yang ingin dilakukan di Okinawa?', options:['Belanja','Berenang di laut','Mendaki gunung','Belajar'], answer:1, explain:'海で 泳いだり = berenang di laut.' }
    ]
  },

  /* ============================================================
     MENDENGAR N4 — SET 1
     ============================================================ */
  'mendengar-n4-1': {
    label: 'Mendengar · N4',
    title: 'Mendengar N4 — Set 1',
    desc: 'Pemahaman percakapan & pengumuman.',
    soal: [
      { q:'A: もしもし、田中さんのお宅ですか。\nB: はい、そうですが。\nSiapa yang menelepon?', options:['Tanaka','Orang lain','Keluarga Tanaka','Tetangga'], answer:1, explain:'A menelepon rumah Tanaka, jadi A adalah orang lain.' },
      { q:'A: 明日の 会議は 何時からですか。\nB: 10時からです。\nJam berapa rapat dimulai?', options:['9','10','11','12'], answer:1, explain:'10時から = mulai jam 10.' },
      { q:'A: この 電車は 東京駅に 止まりますか。\nB: いいえ、止まりません。次の 電車に 乗って ください。\nApakah kereta ini berhenti di Tokyo?', options:['Ya','Tidak','Mungkin','Tidak tahu'], answer:1, explain:'いいえ、止まりません = tidak, tidak berhenti.' },
      { q:'A: すみません、この 近くに 郵便局は ありますか。\nB: ええ、あの 角を 右に 曲がると ありますよ。\nDi mana kantor pos?', options:['Di kiri','Di kanan setelah belokan','Di depan','Di belakang'], answer:1, explain:'角を 右に 曲がる = belok kanan di sudut.' },
      { q:'A: コーヒーと 紅茶、どちらが いいですか。\nB: じゃあ、紅茶を お願いします。\nApa yang dipesan?', options:['Kopi','Teh','Jus','Air'], answer:1, explain:'紅茶 = teh hitam.' },
      { q:'A: 昨日の 試験、どうでしたか。\nB: ちょっと 難しかったです。\nBagaimana ujiannya?', options:['Mudah','Sulit','Biasa saja','Sangat mudah'], answer:1, explain:'難しかった = sulit (bentuk lampau).' },
      { q:'A: どこか いい レストランを 知って いますか。\nB: はい、駅の 近くに おいしい イタリアンが ありますよ。\nRestoran apa yang direkomendasikan?', options:['Jepang','Italia','Cina','India'], answer:1, explain:'イタリアン = masakan Italia.' },
      { q:'A: 週末は 何を しますか。\nB: 友だちと 買い物に 行く 予定です。\nApa rencana akhir pekan?', options:['Belajar','Belanja dengan teman','Bekerja','Tidur'], answer:1, explain:'買い物に 行く = pergi belanja.' },
      { q:'A: この かばん、とても いいですね。どこで 買いましたか。\nB: デパートで 買いました。\nDi mana tas dibeli?', options:['Di toko biasa','Di department store','Di online','Di pasar'], answer:1, explain:'デパート = department store.' },
      { q:'A: 日本に 来て、どのくらいに なりますか。\nB: 2年半に なります。\nBerapa lama sudah di Jepang?', options:['1 tahun','2 tahun','2,5 tahun','3 tahun'], answer:2, explain:'2年半 = 2 tahun setengah.' },
      { q:'A: 昨日の パーティーは どうでしたか。\nB: とても 楽しかったです。たくさんの 人に 会いました。\nBagaimana pestanya?', options:['Membosankan','Menyenangkan','Biasa saja','Ribet'], answer:1, explain:'とても 楽しかった = sangat menyenangkan.' },
      { q:'A: あの 人を 知って いますか。\nB: はい、山田さんです。私の 大学の 先輩です。\nSiapa orang itu?', options:['Guru','Senior di universitas','Tetangga','Rekan kerja'], answer:1, explain:'大学の 先輩 = senior di universitas.' },
      { q:'A: そろそろ 失礼します。\nB: そうですか。気を つけて 帰って ください。\nApa yang dilakukan A?', options:['Datang','Pulang','Tidur','Makan'], answer:1, explain:'失礼します = permisi (pulang).' },
      { q:'A: 何か 手伝いましょうか。\nB: ありがとう ございます。じゃあ、お願いします。\nApakah B menerima bantuan?', options:['Menolak','Menerima','Ragu','Menyuruh orang lain'], answer:1, explain:'お願いします = ya, tolong (menerima).' },
      { q:'A: この 仕事は いつまでに 終わらせれば いいですか。\nB: 金曜日までに お願いします。\nKapan deadline-nya?', options:['Senin','Rabu','Kamis','Jumat'], answer:3, explain:'金曜日までに = sampai Jumat.' },
      { q:'A: あの うるさい 音は 何ですか。\nB: 工事の 音です。来週まで 続くそうです。\nApa suara berisik itu?', options:['Musik','Konstruksi','Suara hewan','Kendaraan'], answer:1, explain:'工事 = konstruksi / pekerjaan.' },
      { q:'A: 何を 注文しますか。\nB: 私は 天ぷら定食に します。\nApa yang dipesan?', options:['Sushi','Tempura set','Ramen','Udon'], answer:1, explain:'天ぷら定食 = set tempura.' },
      { q:'A: 明日、雨が 降るそうですよ。傘を 持って 行った ほうが いいですよ。\nB: そうですか。ありがとう ございます。\nApa saran A?', options:['Pakai topi','Bawa payung','Pakai jaket','Bawa air'], answer:1, explain:'傘を 持って 行った ほうが いい = sebaiknya bawa payung.' },
      { q:'A: 引っ越しは もう 終わりましたか。\nB: はい、おかげさまで。\nApakah pindahannya sudah selesai?', options:['Belum','Sudah','Sedang berlangsung','Dibatalkan'], answer:1, explain:'はい、おかげさまで = ya, sudah (berkat bantuan).' },
      { q:'A: パソコンの 使い方を 教えて いただけませんか。\nB: ええ、いいですよ。\nApakah B bersedia membantu?', options:['Tidak','Ya','Ragu','Menyuruh orang lain'], answer:1, explain:'ええ、いいですよ = ya, boleh.' }
    ]
  },
   
  /* ============================================================
     KOSAKATA N3 — SET 1
     ============================================================ */
  'kosakata-n3-1': {
    label: 'Kosakata · N3',
    title: 'Kosakata N3 — Set 1',
    desc: 'Kosakata berita & akademik.',
    soal: [
      { q:'Apa arti dari 「影響」?', options:['Pengaruh','Penyebab','Akibat','Hubungan'], answer:0, explain:'「影響」 (eikyou) = pengaruh.' },
      { q:'Apa arti dari 「解決」?', options:['Penyelesaian','Masalah','Pertanyaan','Perdebatan'], answer:0, explain:'「解決」 (kaiketsu) = penyelesaian.' },
      { q:'Apa arti dari 「環境」?', options:['Lingkungan','Cuaca','Musim','Alam'], answer:0, explain:'「環境」 (kankyou) = lingkungan.' },
      { q:'Apa arti dari 「経済」?', options:['Ekonomi','Politik','Budaya','Pendidikan'], answer:0, explain:'「経済」 (keizai) = ekonomi.' },
      { q:'Apa arti dari 「計画」?', options:['Rencana','Laporan','Evaluasi','Perubahan'], answer:0, explain:'「計画」 (keikaku) = rencana.' },
      { q:'Apa arti dari 「経験」dalam konteks N3?', options:['Pengalaman (kerja/hidup)','Pengalaman pertama','Pengalaman pahit','Pengalaman manis'], answer:0, explain:'「経験」 = pengalaman secara umum.' },
      { q:'Apa arti dari 「研究」?', options:['Penelitian','Pelajaran','Pengajaran','Praktik'], answer:0, explain:'「研究」 (kenkyuu) = penelitian.' },
      { q:'Apa arti dari 「現在」?', options:['Saat ini','Masa lalu','Masa depan','Dahulu'], answer:0, explain:'「現在」 (genzai) = saat ini.' },
      { q:'Apa arti dari 「効果」?', options:['Efek / hasil','Usaha','Tujuan','Proses'], answer:0, explain:'「効果」 (kouka) = efek atau hasil.' },
      { q:'Apa arti dari 「国際」?', options:['Internasional','Domestik','Regional','Lokal'], answer:0, explain:'「国際」 (kokusai) = internasional.' },
      { q:'Apa arti dari 「今後」?', options:['Mulai sekarang','Sebelumnya','Dahulu','Sementara'], answer:0, explain:'「今後」 (kongo) = mulai sekarang / ke depan.' },
      { q:'Apa arti dari 「最後」?', options:['Terakhir','Pertama','Tengah','Awal'], answer:0, explain:'「最後」 (saigo) = terakhir.' },
      { q:'Apa arti dari 「最初」?', options:['Pertama / awal','Terakhir','Tengah','Selanjutnya'], answer:0, explain:'「最初」 (saisho) = pertama / awal.' },
      { q:'Apa arti dari 「実際」?', options:['Kenyataan','Khayalan','Rencana','Perkiraan'], answer:0, explain:'「実際」 (jissai) = kenyataan / sebenarnya.' },
      { q:'Apa arti dari 「状況」?', options:['Situasi','Perubahan','Keputusan','Rencana'], answer:0, explain:'「状況」 (joukyou) = situasi / keadaan.' },
      { q:'Apa arti dari 「情報」?', options:['Informasi','Laporan','Berita','Pengumuman'], answer:0, explain:'「情報」 (jouhou) = informasi.' },
      { q:'Apa arti dari 「成長」?', options:['Pertumbuhan','Penurunan','Perubahan','Kemunduran'], answer:0, explain:'「成長」 (seichou) = pertumbuhan / perkembangan.' },
      { q:'Apa arti dari 「制度」?', options:['Sistem','Aturan','Kebiasaan','Tradisi'], answer:0, explain:'「制度」 (seido) = sistem / institusi.' },
      { q:'Apa arti dari 「責任」?', options:['Tanggung jawab','Kewajiban','Hak','Tugas'], answer:0, explain:'「責任」 (sekinin) = tanggung jawab.' },
      { q:'Apa arti dari 「組織」?', options:['Organisasi','Perusahaan','Kelompok','Tim'], answer:0, explain:'「組織」 (soshiki) = organisasi.' }
    ]
  },

  /* ============================================================
     KANJI N3 — SET 1
     ============================================================ */
  'kanji-n3-1': {
    label: 'Kanji · N3',
    title: 'Kanji N3 — Set 1',
    desc: 'Kanji lanjutan N3.',
    soal: [
      { q:'Apa arti dari 「経」?', options:['Lewat / mengelola','Masuk','Keluar','Tinggal'], answer:0, explain:'「経」 dibaca "kei" — lewat atau mengelola (dalam 経済).' },
      { q:'Apa arti dari 「済」?', options:['Selesai','Mulai','Berlanjut','Berhenti'], answer:0, explain:'「済」 dibaca "sai" atau "su" — selesai.' },
      { q:'Apa arti dari 「政」?', options:['Politik','Ekonomi','Budaya','Sosial'], answer:0, explain:'「政」 dibaca "sei" — politik / pemerintahan.' },
      { q:'Apa arti dari 「治」?', options:['Memerintah / sembuh','Menyakiti','Membantu','Melarang'], answer:0, explain:'「治」 dibaca "chi" atau "naosu" — memerintah atau menyembuhkan.' },
      { q:'Apa arti dari 「文」?', options:['Kalimat / sastra','Gambar','Angka','Suara'], answer:0, explain:'「文」 dibaca "bun" — kalimat atau sastra.' },
      { q:'Apa arti dari 「化」?', options:['Berubah','Tetap','Hilang','Muncul'], answer:0, explain:'「化」 dibaca "ka" — berubah / perubahan.' },
      { q:'Apa arti dari 「歴」?', options:['Sejarah / riwayat','Sekarang','Depan','Masa lalu'], answer:0, explain:'「歴」 dibaca "reki" — sejarah atau riwayat.' },
      { q:'Apa arti dari 「史」?', options:['Sejarah','Catatan','Dongeng','Berita'], answer:0, explain:'「史」 dibaca "shi" — sejarah.' },
      { q:'Apa arti dari 「社」?', options:['Perusahaan / kuil','Sekolah','Kantor','Rumah'], answer:0, explain:'「社」 dibaca "sha" — perusahaan atau kuil Shinto.' },
      { q:'Apa arti dari 「会」?', options:['Bertemu / perkumpulan','Berpisah','Berbicara','Bermain'], answer:0, explain:'「会」 dibaca "au" atau "kai" — bertemu atau perkumpulan.' },
      { q:'Apa arti dari 「感」?', options:['Perasaan','Pikiran','Keinginan','Kenangan'], answer:0, explain:'「感」 dibaca "kan" — perasaan.' },
      { q:'Apa arti dari 「情」?', options:['Emosi / perasaan','Pikiran','Logika','Alasan'], answer:0, explain:'「情」 dibaca "jou" — emosi atau perasaan.' },
      { q:'Apa arti dari 「報」?', options:['Laporan / kabar','Pertanyaan','Jawaban','Cerita'], answer:0, explain:'「報」 dibaca "hou" — laporan atau kabar.' },
      { q:'Apa arti dari 「告」?', options:['Memberitahu','Menyembunyikan','Menanyakan','Menjawab'], answer:0, explain:'「告」 dibaca "koku" — memberitahu / mengumumkan.' },
      { q:'Apa arti dari 「説」?', options:['Penjelasan / teori','Pertanyaan','Jawaban','Perdebatan'], answer:0, explain:'「説」 dibaca "setsu" — penjelasan atau teori.' },
      { q:'Apa arti dari 「明」?', options:['Jelas / terang','Gelap','Kabur','Samar'], answer:0, explain:'「明」 dibaca "mei" atau "akarui" — jelas atau terang.' },
      { q:'Apa arti dari 「性」?', options:['Sifat / jenis','Bentuk','Warna','Ukuran'], answer:0, explain:'「性」 dibaca "sei" — sifat atau jenis.' },
      { q:'Apa arti dari 「格」?', options:['Status / kualitas','Nama','Jumlah','Harga'], answer:0, explain:'「格」 dibaca "kaku" — status atau kualitas.' },
      { q:'Apa arti dari 「法」?', options:['Hukum / metode','Aturan main','Kebiasaan','Tradisi'], answer:0, explain:'「法」 dibaca "hou" — hukum atau metode.' },
      { q:'Apa arti dari 「制」?', options:['Sistem / kontrol','Kekuasaan','Aturan','Kebijakan'], answer:0, explain:'「制」 dibaca "sei" — sistem atau kontrol.' }
    ]
  },

  /* ============================================================
     TATA BAHASA N3 — SET 1
     ============================================================ */
  'tata-n3-1': {
    label: 'Tata Bahasa · N3',
    title: 'Tata Bahasa N3 — Set 1',
    desc: 'Pola kalimat N3.',
    soal: [
      { q:'「〜はずです」 artinya...', options:['Seharusnya / pasti','Mungkin','Tidak mungkin','Belum pasti'], answer:0, explain:'〜はずです = seharusnya / pasti (berdasarkan logika).' },
      { q:'「〜かもしれません」 artinya...', options:['Mungkin','Pasti','Tidak mungkin','Seharusnya'], answer:0, explain:'〜かもしれません = mungkin (kemungkinan).' },
      { q:'「〜でしょう」 artinya...', options:['Mungkin / sepertinya','Pasti','Tidak mungkin','Belum pasti'], answer:0, explain:'〜でしょう = mungkin / sepertinya (perkiraan).' },
      { q:'「〜ようです」 artinya...', options:['Sepertinya','Pasti','Tidak mungkin','Belum pasti'], answer:0, explain:'〜ようです = sepertinya (berdasarkan pengamatan).' },
      { q:'「〜らしいです」 artinya...', options:['Sepertinya (dengar kabar)','Pasti','Tidak mungkin','Belum pasti'], answer:0, explain:'〜らしいです = sepertinya (berdasarkan kabar).' },
      { q:'「〜そうです」 (bentuk pengamatan) artinya...', options:['Kelihatannya','Katanya','Pasti','Tidak mungkin'], answer:0, explain:'〜そうです (bentuk pengamatan) = kelihatannya.' },
      { q:'「〜ため」 artinya...', options:['Karena / untuk','Meskipun','Sambil','Tanpa'], answer:0, explain:'〜ため = karena (sebab) atau untuk (tujuan).' },
      { q:'「〜ように」 artinya...', options:['Supaya / seperti','Meskipun','Karena','Sambil'], answer:0, explain:'〜ように = supaya atau seperti.' },
      { q:'「〜のに」 artinya...', options:['Meskipun / padahal','Karena','Supaya','Sambil'], answer:0, explain:'〜のに = meskipun / padahal (kontras).' },
      { q:'「〜ても」 artinya...', options:['Meskipun','Karena','Supaya','Sambil'], answer:0, explain:'〜ても = meskipun (kondisional).' },
      { q:'「〜ば」 artinya...', options:['Jika / kalau','Karena','Meskipun','Supaya'], answer:0, explain:'〜ば = jika / kalau (kondisional).' },
      { q:'「〜なら」 artinya...', options:['Kalau (berdasarkan konteks)','Karena','Meskipun','Supaya'], answer:0, explain:'〜なら = kalau (berdasarkan konteks yang disebutkan).' },
      { q:'「〜と」 (kondisional) artinya...', options:['Kalau / jika (otomatis)','Karena','Meskipun','Supaya'], answer:0, explain:'〜と = kalau (hasil otomatis/alamiah).' },
      { q:'「〜うちに」 artinya...', options:['Selagi / sementara','Setelah','Sebelum','Meskipun'], answer:0, explain:'〜うちに = selagi / sementara (masih dalam kondisi).' },
      { q:'「〜あいだ」 artinya...', options:['Selama','Setelah','Sebelum','Meskipun'], answer:0, explain:'〜あいだ = selama (rentang waktu).' },
      { q:'「〜たびに」 artinya...', options:['Setiap kali','Kadang-kadang','Selalu','Jarang'], answer:0, explain:'〜たびに = setiap kali.' },
      { q:'「〜とおりに」 artinya...', options:['Sesuai dengan','Berbeda dengan','Meskipun','Tanpa'], answer:0, explain:'〜とおりに = sesuai dengan.' },
      { q:'「〜ばかり」 artinya...', options:['Hanya / terus-menerus','Kadang-kadang','Tidak pernah','Selalu'], answer:0, explain:'〜ばかり = hanya atau terus-menerus.' },
      { q:'「〜ところ」 artinya...', options:['Saat / tempat','Orang','Benda','Cara'], answer:0, explain:'〜ところ = saat (sedang melakukan) atau tempat.' },
      { q:'「〜ばかりでなく」 artinya...', options:['Tidak hanya... tapi juga','Hanya','Meskipun','Karena'], answer:0, explain:'〜ばかりでなく = tidak hanya... tapi juga.' }
    ]
  },

  /* ============================================================
     TATA BAHASA N3 — SET 2
     ============================================================ */
  'tata-n3-2': {
    label: 'Tata Bahasa · N3',
    title: 'Tata Bahasa N3 — Set 2',
    desc: 'Idiom & peribahasa Jepang.',
    soal: [
      { q:'「一石二鳥」 artinya...', options:['Sekali mendayung dua tiga pulau terlampaui','Batu dan burung','Dua hal yang berbeda','Kerja keras'], answer:0, explain:'一石二鳥 (isseki nichou) = satu batu dua burung — sekali kerja dapat dua hasil.' },
      { q:'「猿も木から落ちる」 artinya...', options:['Sepandai-pandainya orang bisa salah','Monyet jatuh dari pohon','Ahli juga bisa gagal','Belajar terus'], answer:0, explain:'猿も木から落ちる = bahkan monyet pun jatuh dari pohon — orang ahli bisa salah.' },
      { q:'「七転び八起き」 artinya...', options:['Jatuh tujuh kali bangun delapan kali','Sering gagal','Jarang berhasil','Tidak pernah menyerah'], answer:0, explain:'七転び八起き = jatuh bangun — tidak menyerah.' },
      { q:'「急がば回れ」 artinya...', options:['Kalau tergesa-gesa, ambil jalan aman','Cepat lebih baik','Jangan lambat','Jalan pintas'], answer:0, explain:'急がば回れ = kalau mau cepat, ambil jalan yang aman (bukan jalan pintas).' },
      { q:'「石の上にも三年」 artinya...', options:['Kesabaran akan berbuah','Tiga tahun di atas batu','Bekerja keras','Duduk diam'], answer:0, explain:'石の上にも三年 = duduk 3 tahun di atas batu — kesabaran akan membuahkan hasil.' },
      { q:'「目から鱗」 artinya...', options:['Tiba-tiba sadar / tercerahkan','Sakit mata','Buta','Melihat jelas'], answer:0, explain:'目から鱗 (me kara uroko) = seperti sisik jatuh dari mata — tiba-tiba mengerti.' },
      { q:'「猫の手も借りたい」 artinya...', options:['Sangat sibuk','Suka kucing','Malas','Kesepian'], answer:0, explain:'猫の手も借りたい = ingin pinjam tangan kucing — sangat sibuk.' },
      { q:'「犬と猿」 artinya...', options:['Hubungan buruk (seperti anjing & monyet)','Sahabat','Keluarga','Rekan kerja'], answer:0, explain:'犬と猿 = seperti anjing dan monyet — hubungan yang tidak akur.' },
      { q:'「馬が合う」 artinya...', options:['Cocok / akur','Bertengkar','Berlari cepat','Kuat'], answer:0, explain:'馬が合う (uma ga au) = cocok / akur dengan seseorang.' },
      { q:'「顔が広い」 artinya...', options:['Punya banyak kenalan','Berwajah lebar','Terkenal','Ramah'], answer:0, explain:'顔が広い = punya banyak kenalan / jaringan luas.' },
      { q:'「頭が切れる」 artinya...', options:['Cerdas / tajam pikiran','Sakit kepala','Pusing','Bodoh'], answer:0, explain:'頭が切れる = cerdas / tajam pikiran.' },
      { q:'「手を貸す」 artinya...', options:['Membantu','Meminjamkan tangan','Menyakiti','Melepas'], answer:0, explain:'手を貸す = meminjamkan tangan — membantu.' },
      { q:'「足を運ぶ」 artinya...', options:['Pergi / mengunjungi','Berlari','Melompat','Berhenti'], answer:0, explain:'足を運ぶ = menggerakkan kaki — pergi / mengunjungi.' },
      { q:'「口が堅い」 artinya...', options:['Bisa menyimpan rahasia','Sulit bicara','Banyak bicara','Pendiam'], answer:0, explain:'口が堅い = mulut terkunci — bisa menyimpan rahasia.' },
      { q:'「耳が痛い」 artinya...', options:['Sakit mendengar kebenaran','Sakit telinga','Tuli','Peka'], answer:0, explain:'耳が痛い = sakit telinga — sakit mendengar kebenaran tentang diri sendiri.' },
      { q:'「胸を張る」 artinya...', options:['Percaya diri','Sombong','Takut','Malu'], answer:0, explain:'胸を張る = membusungkan dada — percaya diri.' },
      { q:'「油を売る」 artinya...', options:['Bermalas-malasan / buang waktu','Menjual minyak','Bekerja keras','Berjualan'], answer:0, explain:'油を売る = menjual minyak — buang waktu / mengobrol saat kerja.' },
      { q:'「骨が折れる」 artinya...', options:['Sulit / butuh usaha keras','Patah tulang','Sakit','Lelah'], answer:0, explain:'骨が折れる = tulang patah — sulit / butuh usaha keras.' },
      { q:'「水に流す」 artinya...', options:['Memaafkan / melupakan','Membuang air','Membersihkan','Mengalir'], answer:0, explain:'水に流す = mengalirkan ke air — memaafkan dan melupakan masa lalu.' },
      { q:'「顔を出す」 artinya...', options:['Muncul / datang sebentar','Memperlihatkan wajah','Malu','Sembunyi'], answer:0, explain:'顔を出す = mengeluarkan wajah — muncul / datang sebentar.' }
    ]
  },

  /* ============================================================
     MEMBACA N3 — SET 1
     ============================================================ */
  'membaca-n3-1': {
    label: 'Membaca · N3',
    title: 'Membaca N3 — Set 1',
    desc: 'Teks 400–600 huruf.',
    soal: [
      { q:'「近年、日本では 少子高齢化が 進んで います。子どもの 数が 減り、高齢者の 割合が 増えて いるのです。この 問題は、労働力の 不足や 社会保障費の 増大など、様々な 影響を 及ぼして います。」\nApa topik utama teks ini?', options:['Pendidikan anak','Penurunan angka kelahiran & penuaan populasi','Pariwisata Jepang','Ekonomi Jepang'], answer:1, explain:'少子高齢化 = penurunan kelahiran & penuaan populasi.' },
      { q:'「環境問題は 今や 世界共通の 課題です。特に 地球温暖化は、海面の 上昇や 異常気象を 引き起こし、多くの 国々に 影響を 与えて います。私たち 一人ひとりが できる ことから 始める ことが 大切です。」\nApa pesan utama teks ini?', options:['Masalah lingkungan hanya untuk negara maju','Setiap orang harus mulai dari hal kecil','Pemanasan global tidak berbahaya','Ilmuwan yang bertanggung jawab'], answer:1, explain:'一人ひとりが できる ことから 始める = mulai dari hal kecil yang bisa dilakukan setiap orang.' },
      { q:'「日本の 伝統的な 文化として、茶道が あります。茶道は 単に お茶を 飲む だけでなく、精神を 鍛える 修行でも あります。一つ一つの 動作に 意味が あり、客人を もてなす 心が 込められて います。」\nApa arti 茶道 menurut teks?', options:['Hanya minum teh','Latihan spiritual & melayani tamu','Pertunjukan seni','Upacara keagamaan'], answer:1, explain:'精神を 鍛える 修行 = latihan spiritual.' },
      { q:'「AI技術の 発展に 伴い、多くの 職業が 変化しつつ あります。単純作業は 機械に 置き換わる 一方で、創造性や コミュニケーション能力が 求められる 仕事は、ますます 重要に なって います。」\nApa yang disampaikan teks ini?', options:['Semua pekerjaan akan hilang','Pekerjaan kreatif jadi makin penting','AI tidak berguna','Hanya pekerjaan manual yang bertahan'], answer:1, explain:'創造性や コミュニケーション能力...ますます 重要 = kreativitas & komunikasi makin penting.' },
      { q:'「日本では、満員電車が 日常の 光景です。特に 朝の ラッシュアワーは 非常に 混雑し、時には 駅員が 乗客を 押し込む ことも あります。しかし、多くの 日本人は この 状況に 慣れて いて、文句を 言わずに 通勤して います。」\nBagaimana reaksi orang Jepang terhadap kereta penuh?', options:['Sangat marah','Sudah terbiasa','Menghindari kereta','Mengeluh terus'], answer:1, explain:'多くの 日本人は この 状況に 慣れて いて = banyak orang Jepang sudah terbiasa.' },
      { q:'「読書は 知識を 増やす だけでなく、想像力を 豊かに する 効果も あります。また、ストレスを 減らし、リラックスする 効果も あると 言われて います。」\nApa manfaat membaca menurut teks?', options:['Hanya menambah pengetahuan','Menambah pengetahuan & mengurangi stres','Membuat bosan','Menghabiskan waktu'], answer:1, explain:'知識を 増やす だけでなく...ストレスを 減らす = menambah pengetahuan & mengurangi stres.' },
      { q:'「日本の 会社では、報・連・相（ほうれんそう）が 大切だと 言われて います。これは 報告・連絡・相談の 略で、チームで 働く 上で 欠かせない ことです。」\nApa itu 報・連・相?', options:['Nama perusahaan','Laporan, komunikasi, konsultasi','Jenis dokumen','Aturan kantor'], answer:1, explain:'報告・連絡・相談 = laporan, komunikasi, konsultasi.' },
      { q:'「外国語を 学ぶ ことで、新しい 世界が 開けます。言葉だけでなく、その 国の 文化や 考え方も 理解できる ように なります。」\nApa manfaat belajar bahasa asing?', options:['Hanya bisa bahasa','Membuka dunia baru & budaya','Sulit bergaul','Menghabiskan uang'], answer:1, explain:'新しい 世界が 開けます = membuka dunia baru.' },
      { q:'「SNSの 普及により、私たちの コミュニケーションの 形は 大きく 変わりました。便利に なった 一方で、誤解や トラブルも 増えて います。」\nApa dampak SNS menurut teks?', options:['Hanya positif','Hanya negatif','Positif & negatif','Tidak ada dampak'], answer:2, explain:'便利に なった 一方で...トラブルも 増えて = di satu sisi nyaman, di sisi lain masalah bertambah.' },
      { q:'「日本の 食事は、見た目も 大切に します。色とりどりの 食材を 使って、目で 楽しむ ことも 料理の 一部です。」\nApa yang penting dalam makanan Jepang?', options:['Hanya rasa','Penampilan juga','Hanya porsi','Hanya harga'], answer:1, explain:'見た目も 大切 = penampilan juga penting.' },
      { q:'「ボランティア活動は、他者を 助ける だけでなく、自分自身の 成長にも つながります。様々な 人と 出会い、新しい 経験を 積む ことが できます。」\nApa manfaat volunteer menurut teks?', options:['Hanya membantu orang','Membantu orang & mengembangkan diri','Mengisi waktu','Mencari uang'], answer:1, explain:'他者を 助ける だけでなく、自分自身の 成長にも = membantu orang & mengembangkan diri.' },
      { q:'「睡眠不足は、集中力の 低下や 健康問題を 引き起こします。特に スマートフォンの 使いすぎは、睡眠の 質を 悪く する 原因の 一つです。」\nApa penyebab kualitas tidur buruk?', options:['Terlalu banyak makan','Penggunaan smartphone berlebihan','Olahraga berlebihan','Terlalu banyak tidur'], answer:1, explain:'スマートフォンの 使いすぎ = penggunaan smartphone berlebihan.' },
      { q:'「日本の 四季は、それぞれ 美しい 風景を 見せて くれます。春の 桜、夏の 花火、秋の 紅葉、冬の 雪。これらは 日本人の 心の 支えにも なって います。」\nApa yang menjadi penopang hati orang Jepang?', options:['Empat musim','Makanan','Teknologi','Olahraga'], answer:0, explain:'四季...心の 支えに = empat musim menjadi penopang hati.' },
      { q:'「働き方改革が 進む 中、リモートワークを 取り入れる 企業が 増えて います。通勤時間の 削減や ワークライフバランスの 改善が 期待されて います。」\nApa manfaat remote work?', options:['Lebih cepat capek','Hemat waktu & work-life balance','Sulit komunikasi','Harus ke kantor'], answer:1, explain:'通勤時間の 削減や ワークライフバランスの 改善 = pengurangan waktu komuter & perbaikan work-life balance.' },
      { q:'「外国人が 日本で 生活する 際、言語の 壁だけでなく、文化の 違いにも 戸惑う ことが あります。例えば、敬語の 使い方や 暗黙の ルールなどです。」\nApa yang membingungkan orang asing di Jepang?', options:['Hanya bahasa','Bahasa & budaya','Hanya makanan','Hanya cuaca'], answer:1, explain:'言語の 壁だけでなく、文化の 違いにも = tidak hanya bahasa, tapi juga perbedaan budaya.' },
      { q:'「日本の 教育は、集団行動や 協調性を 重視する 傾向が あります。しかし 近年、個性や 創造性を 伸ばす 教育の 必要性も 叫ばれて います。」\nApa nilai yang ditekankan dalam pendidikan Jepang?', options:['Kerja kelompok & kerjasama','Kompetisi individu','Kebebasan penuh','Hafalan saja'], answer:0, explain:'集団行動や 協調性 = kerja kelompok & kerjasama.' },
      { q:'「高齢化が 進む 日本では、介護の 人材不足が 深刻な 問題と なって います。外国人 労働者の 受け入れも 進んで いますが、言葉や 文化の 壁が 課題です。」\nApa masalah utama dalam perawatan lansia?', options:['Kurang tenaga kerja & hambatan bahasa','Terlalu banyak pekerja','Tidak ada masalah','Terlalu mahal'], answer:0, explain:'人材不足 & 言葉や 文化の 壁 = kurang tenaga kerja & hambatan bahasa/budaya.' },
      { q:'「買い物に おいても、キャッシュレス化が 進んで います。しかし、高齢者の 中には 現金しか 使わない 人も 多く、新しい 技術に ついて いけない 人も います。」\nSiapa yang kesulitan dengan cashless?', options:['Anak muda','Sebagian orang tua','Semua orang','Pedagang'], answer:1, explain:'高齢者の 中には...新しい 技術に ついて いけない = sebagian orang tua tidak bisa mengikuti teknologi baru.' },
      { q:'「ストレスを 感じた とき、適度な 運動を する ことが 効果的です。体を 動かす ことで、脳から 幸せホルモンが 分泌されます。」\nApa yang efektif untuk mengurangi stres?', options:['Tidur terus','Olahraga secukupnya','Makan banyak','Menonton TV'], answer:1, explain:'適度な 運動 = olahraga secukupnya.' },
      { q:'「日本には、四季それぞれに 合わせた 行事が あります。お正月、花見、夏祭り、紅葉狩りなど、季節を 感じる 文化が 根付いて います。」\nApa yang berakar dalam budaya Jepang?', options:['Budaya musiman','Budaya barat','Budaya pop','Budaya digital'], answer:0, explain:'季節を 感じる 文化が 根付いて = budaya merasakan musim telah berakar.' }
    ]
  },

  /* ============================================================
     MENDENGAR N3 — SET 1
     ============================================================ */
  'mendengar-n3-1': {
    label: 'Mendengar · N3',
    title: 'Mendengar N3 — Set 1',
    desc: 'Pemahaman percakapan panjang.',
    soal: [
      { q:'A: 来週の 打ち合わせ、火曜日の 午後で いかがですか。\nB: すみません、火曜日は 一日中 出張で。水曜日なら 空いて いますが。\nA: では、水曜日の 午後で お願いします。\nKapan rapat diadakan?', options:['Senin pagi','Selasa sore','Rabu sore','Kamis pagi'], answer:2, explain:'水曜日の 午後 = Rabu sore.' },
      { q:'A: この 資料、明日の 朝までに 仕上げて いただけますか。\nB: すみません、今日は 残業できないんですが、明日の 始業前に 間に合うように します。\nKapan B akan menyelesaikan?', options:['Hari ini','Besok pagi sebelum kerja','Besok siang','Besok malam'], answer:1, explain:'明日の 始業前に 間に合う = besok sebelum jam kerja.' },
      { q:'A: 山田さん、お客様が いらっしゃいましたよ。\nB: あ、すぐに 応接室に お通しします。\nApa yang akan dilakukan B?', options:['Menelepon pelanggan','Mengantar pelanggan ke ruang tamu','Menyuruh pelanggan pulang','Menyiapkan makanan'], answer:1, explain:'応接室に お通しします = mengantar ke ruang tamu.' },
      { q:'A: すみません、この 書類の 書き方が わからないんですが。\nB: あ、それは 私も 詳しくないので、田中さんに 聞いた ほうが いいですよ。\nApa saran B?', options:['Tanya ke Tanaka','Tulis sendiri','Serahkan ke B','Tidak usah ditulis'], answer:0, explain:'田中さんに 聞いた ほうが いい = sebaiknya tanya ke Tanaka.' },
      { q:'A: もしもし、佐藤と 申しますが、部長は いらっしゃいますか。\nB: 申し訳ございません、部長は ただいま 外出中で、3時ごろ 戻る 予定です。\nKapan bagian akan kembali?', options:['Jam 1','Jam 2','Jam 3','Jam 4'], answer:2, explain:'3時ごろ 戻る = kembali sekitar jam 3.' },
      { q:'A: 日本に 来て から、もう どのくらいに なりますか。\nB: もうすぐ 2年です。最初は 大変でしたが、今は だいぶ 慣れました。\nBagaimana perasaan B sekarang?', options:['Masih sangat sulit','Sudah cukup terbiasa','Ingin pulang','Belum bisa bahasa Jepang'], answer:1, explain:'今は だいぶ 慣れました = sekarang sudah cukup terbiasa.' },
      { q:'A: 週末、どこか 行きましたか。\nB: ええ、家族と 温泉に 行きました。とても リラックスできました。\nApa yang dilakukan B?', options:['Ke pantai','Ke onsen','Ke gunung','Ke kota'], answer:1, explain:'温泉に 行きました = pergi ke onsen.' },
      { q:'A: この レポート、字数が 足りない ようですが。\nB: すみません、あと 500字ほど 追加 します。\nApa masalah laporan B?', options:['Terlalu panjang','Kurang panjang','Salah judul','Salah bahasa'], answer:1, explain:'字数が 足りない = jumlah kata kurang.' },
      { q:'A: 課長、この 企画、いかがでしょうか。\nB: 面白い アイデアですね。ただ、予算の ことを もう少し 詰めた ほうが いいでしょう。\nApa saran atasan?', options:['Ide jelek','Perbaiki anggaran','Batalkan','Lanjut saja'], answer:1, explain:'予算の ことを もう少し 詰めた ほうが = sebaiknya anggaran dipikirkan lebih detail.' },
      { q:'A: 昨日の 地震、大きかったですね。\nB: ええ、びっくりしました。でも、家族は みんな 無事でした。\nBagaimana kondisi keluarga B?', options:['Terluka','Selamat semua','Hilang','Sakit'], answer:1, explain:'家族は みんな 無事 = keluarga semua selamat.' },
      { q:'A: 先生、この 文法、もう 一度 説明して いただけませんか。\nB: ええ、いいですよ。どの 部分が わかりにくいですか。\nApa yang diminta A?', options:['Nilai','Penjelasan ulang','Buku','Waktu'], answer:1, explain:'もう 一度 説明して = jelaskan sekali lagi.' },
      { q:'A: 引っ越しの 準備は どうですか。\nB: だいぶ 進みましたが、まだ 本棚と 食器の 整理が 残って います。\nApa yang belum selesai?', options:['Pakaian','Buku & peralatan makan','Perabot','Elektronik'], answer:1, explain:'本棚と 食器の 整理 = rak buku & peralatan makan.' },
      { q:'A: 新しい スマホ、どうですか。\nB: 画面が 大きくて 見やすいですが、バッテリーの 持ちが あまり よくないです。\nApa kelemahan HP baru?', options:['Layar kecil','Baterai cepat habis','Harga mahal','Berat'], answer:1, explain:'バッテリーの 持ちが よくない = ketahanan baterai kurang.' },
      { q:'A: この カフェ、いつも 混んで いますね。\nB: そうですね。特に 昼時は 30分 待つ ことも ありますよ。\nBerapa lama biasanya menunggu?', options:['10 menit','20 menit','30 menit','1 jam'], answer:2, explain:'30分 待つ = menunggu 30 menit.' },
      { q:'A: 来月、昇進する そうですね。おめでとうございます。\nB: ありがとうございます。責任が 増えるので、頑張らないと いけません。\nApa yang terjadi pada B?', options:['Pensiun','Promosi jabatan','Pindah kerja','Cuti'], answer:1, explain:'昇進する = naik jabatan / promosi.' },
      { q:'A: 先輩、この 漢字の 読み方、教えて いただけますか。\nB: ええ、これは「はん」と 読みますよ。試験に よく 出ますから、覚えて おいた ほうが いいです。\nApa saran senior?', options:['Jangan hafal','Hafalkan karena sering keluar ujian','Lupakan saja','Cari di internet'], answer:1, explain:'試験に よく 出ますから、覚えて おいた ほうが = karena sering keluar ujian, sebaiknya dihafal.' },
      { q:'A: 昨日、電車が 30分も 遅れたんです。\nB: それは 大変でしたね。事故でも あったんですか。\nA: いいえ、信号故障だそうです。\nKenapa kereta terlambat?', options:['Kecelakaan','Kerusakan sinyal','Cuaca buruk','Demo'], answer:1, explain:'信号故障 = kerusakan sinyal.' },
      { q:'A: 今年の 夏休み、どこか 行く 予定は ありますか。\nB: まだ 決めて いませんが、海外に 行きたいなと 思って います。\nApa rencana B?', options:['Belum diputuskan','Sudah pasti ke luar negeri','Tidak ke mana-mana','Pergi ke gunung'], answer:0, explain:'まだ 決めて いません = belum diputuskan.' },
      { q:'A: お疲れ様です。今日の 会議、長かったですね。\nB: ええ、3時間も かかりましたからね。でも、いい 結論が 出て よかったです。\nBerapa lama rapat tadi?', options:['1 jam','2 jam','3 jam','4 jam'], answer:2, explain:'3時間も かかりました = memakan waktu 3 jam.' },
      { q:'A: 山田さん、顔色が 良くないですね。大丈夫ですか。\nB: ありがとう ございます。実は 昨日から 熱が あって、あまり 眠れて いないんです。\nApa masalah B?', options:['Tidak bisa tidur & demam','Kelelahan kerja','Sakit perut','Sakit gigi'], answer:0, explain:'熱が あって、あまり 眠れて いない = demam & tidak bisa tidur.' }
    ]
  }

};

