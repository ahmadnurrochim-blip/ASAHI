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
      { q:'A: にほんへ いった ことが ありますか。\nB: はい、2かい あります。\nBerapa kali ke Jepang?', options:['1 kali','2 kali','3 kali','Belum pernah'], answer:1, explain:'2かい = 2 kali.' },
       
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
  }

};
    ]
  }

};
