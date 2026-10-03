/* ============================================================
   LEVELING DATA — Asahi Mandiri
   ------------------------------------------------------------
   Data soal untuk semua level leveling.
   
   Struktur:
     'level-N': {
       title      : judul level
       kategori   : N5 / N4 / N3 / N2
       deskripsi  : deskripsi singkat
       soal: [
         { q, options, answer, explain }
       ]
     }
   
   Aturan:
   - 50 soal per level
   - 2 poin per soal → total 100 poin per level
   - Batas lulus: 80% (40 soal benar)
   ============================================================ */

window.LEVELING_DATA = {

  /* ============================================================
     LEVEL 1 — Kosakata Dasar (50 soal)
     ============================================================ */
  'level-1': {
    title: 'Kosakata Dasar',
    kategori: 'N5',
    deskripsi: 'Uji hafalan kosakata dasar: salam, angka, makanan, dan benda sehari-hari.',
    soal: [
      // ===== SALAM & SAPAAN (1-15) =====
      {"q": "Apa arti dari 「おはようございます」?", "options": ["Selamat malam", "Selamat tidur", "Selamat pagi", "Selamat siang"], "answer": 2, "explain": "「おはようございます」 = selamat pagi (sopan)."},
      {"q": "Apa arti dari 「こんにちは」?", "options": ["Selamat pagi", "Selamat siang", "Selamat malam", "Terima kasih"], "answer": 1, "explain": "「こんにちは」 = selamat siang."},
      {"q": "Apa arti dari 「こんばんは」?", "options": ["Selamat malam (sapaan)", "Selamat pagi", "Sampai jumpa", "Maaf"], "answer": 0, "explain": "「こんばんは」 = selamat malam (sapaan saat bertemu)."},
      {"q": "Apa arti dari 「ありがとうございます」?", "options": ["Maaf", "Terima kasih", "Permisi", "Silakan"], "answer": 1, "explain": "「ありがとうございます」 = terima kasih."},
      {"q": "Apa arti dari 「すみません」?", "options": ["Permisi / maaf", "Selamat makan", "Sampai jumpa", "Selamat tidur"], "answer": 0, "explain": "「すみません」 = permisi atau maaf."},
      {"q": "Apa arti dari 「さようなら」?", "options": ["Selamat datang", "Selamat pagi", "Terima kasih", "Sampai jumpa"], "answer": 3, "explain": "「さようなら」 = sampai jumpa (formal)."},
      {"q": "Apa arti dari 「おやすみなさい」?", "options": ["Selamat pagi", "Selamat tidur", "Selamat siang", "Selamat datang"], "answer": 1, "explain": "「おやすみなさい」 = selamat tidur."},
      {"q": "Kapan kita mengucapkan 「いただきます」?", "options": ["Setelah selesai makan", "Sebelum mulai makan", "Saat berangkat dari rumah", "Saat tiba di rumah"], "answer": 1, "explain": "「いただきます」 diucapkan sebelum makan."},
      {"q": "Apa arti dari 「ごちそうさまでした」?", "options": ["Selamat makan", "Selamat datang", "Terima kasih atas makanannya", "Selamat tidur"], "answer": 2, "explain": "「ごちそうさまでした」 diucapkan setelah selesai makan."},
      {"q": "Apa yang diucapkan saat berangkat dari rumah?", "options": ["「いってきます」", "「ただいま」", "「おかえりなさい」", "「おやすみなさい」"], "answer": 0, "explain": "「いってきます」 = aku berangkat."},
      {"q": "Apa arti dari 「ただいま」?", "options": ["Aku berangkat", "Aku pulang", "Selamat datang", "Selamat tidur"], "answer": 1, "explain": "「ただいま」 = aku pulang."},
      {"q": "Apa arti dari 「おかえりなさい」?", "options": ["Aku pulang", "Sampai jumpa", "Selamat datang kembali", "Selamat pagi"], "answer": 2, "explain": "「おかえりなさい」 = selamat datang kembali."},
      {"q": "Apa arti dari 「はじめまして」?", "options": ["Senang bertemu (pertama kali)", "Sampai jumpa", "Maaf", "Sama-sama"], "answer": 0, "explain": "「はじめまして」 = salam saat pertama kali bertemu."},
      {"q": "Apa arti dari 「どういたしまして」?", "options": ["Permisi", "Sama-sama", "Maaf", "Silakan masuk"], "answer": 1, "explain": "「どういたしまして」 = sama-sama."},
      {"q": "Apa arti dari 「ごめんなさい」?", "options": ["Terima kasih", "Selamat pagi", "Maaf", "Sampai jumpa"], "answer": 2, "explain": "「ごめんなさい」 = maaf."},

      // ===== ANGKA (16-30) =====
      {"q": "Angka berapakah 「いち」?", "options": ["1", "2", "3", "10"], "answer": 0, "explain": "「いち」 = 1."},
      {"q": "Angka berapakah 「に」?", "options": ["1", "2", "3", "4"], "answer": 1, "explain": "「に」 = 2."},
      {"q": "Angka berapakah 「さん」?", "options": ["3", "5", "7", "8"], "answer": 0, "explain": "「さん」 = 3."},
      {"q": "Angka berapakah 「よん」 (atau 「し」)?", "options": ["5", "4", "6", "9"], "answer": 1, "explain": "「よん」/「し」 = 4."},
      {"q": "Angka berapakah 「ご」?", "options": ["2", "8", "5", "7"], "answer": 2, "explain": "「ご」 = 5."},
      {"q": "Angka berapakah 「ろく」?", "options": ["9", "10", "7", "6"], "answer": 3, "explain": "「ろく」 = 6."},
      {"q": "Angka berapakah 「なな」 (atau 「しち」)?", "options": ["8", "7", "6", "9"], "answer": 1, "explain": "「なな」/「しち」 = 7."},
      {"q": "Angka berapakah 「はち」?", "options": ["7", "6", "8", "9"], "answer": 2, "explain": "「はち」 = 8."},
      {"q": "Angka berapakah 「きゅう」 (atau 「く」)?", "options": ["10", "8", "7", "9"], "answer": 3, "explain": "「きゅう」/「く」 = 9."},
      {"q": "Angka berapakah 「じゅう」?", "options": ["100", "10", "20", "1.000"], "answer": 1, "explain": "「じゅう」 = 10."},
      {"q": "Angka berapakah 「ひゃく」?", "options": ["10", "100", "1.000", "10.000"], "answer": 1, "explain": "「ひゃく」 = 100."},
      {"q": "Angka berapakah 「せん」?", "options": ["100", "1.000", "10.000", "10"], "answer": 1, "explain": "「せん」 = 1.000."},
      {"q": "Angka berapakah 「まん」?", "options": ["1.000", "100.000", "10.000", "1.000.000"], "answer": 2, "explain": "「まん」 = 10.000."},
      {"q": "Apa arti dari 「ゼロ」 atau 「れい」?", "options": ["0", "1", "10", "100"], "answer": 0, "explain": "「ゼロ」/「れい」 = 0."},
      {"q": "Angka berapakah 「にじゅう」?", "options": ["12", "20", "30", "200"], "answer": 1, "explain": "「にじゅう」 = 20."},

      // ===== MAKANAN & MINUMAN (31-40) =====
      {"q": "Apa arti dari 「みず」?", "options": ["Teh", "Air", "Susu", "Kopi"], "answer": 1, "explain": "「みず」 = air."},
      {"q": "Apa arti dari 「おちゃ」?", "options": ["Teh", "Kopi", "Air", "Jus"], "answer": 0, "explain": "「おちゃ」 = teh."},
      {"q": "Apa arti dari 「ごはん」?", "options": ["Roti", "Daging", "Nasi / makan", "Sayur"], "answer": 2, "explain": "「ごはん」 = nasi atau waktu makan."},
      {"q": "Apa arti dari 「たべます」?", "options": ["Minum", "Makan", "Tidur", "Pergi"], "answer": 1, "explain": "「たべます」 = makan."},
      {"q": "Apa arti dari 「のみます」?", "options": ["Makan", "Melihat", "Minum", "Membaca"], "answer": 2, "explain": "「のみます」 = minum."},
      {"q": "Apa arti dari 「コーヒー」?", "options": ["Teh", "Kopi", "Air", "Susu"], "answer": 1, "explain": "「コーヒー」 = kopi."},
      {"q": "Apa arti dari 「ぎゅうにゅう」?", "options": ["Air", "Jus", "Susu sapi", "Teh"], "answer": 2, "explain": "「ぎゅうにゅう」 = susu sapi."},
      {"q": "Apa arti dari 「さかな」?", "options": ["Ayam", "Ikan", "Sapi", "Babi"], "answer": 1, "explain": "「さかな」 = ikan."},
      {"q": "Apa arti dari 「にく」?", "options": ["Ikan", "Sayur", "Daging", "Buah"], "answer": 2, "explain": "「にく」 = daging."},
      {"q": "Apa arti dari 「くだもの」?", "options": ["Sayur", "Buah", "Daging", "Ikan"], "answer": 1, "explain": "「くだもの」 = buah."},

      // ===== HEWAN (41-44) =====
      {"q": "Apa arti dari 「ねこ」?", "options": ["Anjing", "Burung", "Ikan", "Kucing"], "answer": 3, "explain": "「ねこ」 = kucing."},
      {"q": "Apa arti dari 「いぬ」?", "options": ["Anjing", "Kucing", "Kuda", "Sapi"], "answer": 0, "explain": "「いぬ」 = anjing."},
      {"q": "Apa arti dari 「とり」?", "options": ["Burung", "Ikan", "Kucing", "Anjing"], "answer": 0, "explain": "「とり」 = burung."},
      {"q": "Apa arti dari 「うま」?", "options": ["Sapi", "Kuda", "Kambing", "Babi"], "answer": 1, "explain": "「うま」 = kuda."},

      // ===== TEMPAT & BENDA (45-50) =====
      {"q": "Apa arti dari 「がっこう」?", "options": ["Rumah sakit", "Sekolah", "Stasiun", "Toko"], "answer": 1, "explain": "「がっこう」 = sekolah."},
      {"q": "Apa arti dari 「えき」?", "options": ["Bandara", "Stasiun", "Pasar", "Sekolah"], "answer": 1, "explain": "「えき」 = stasiun."},
      {"q": "Apa arti dari 「ほん」?", "options": ["Majalah", "Buku", "Koran", "Pensil"], "answer": 1, "explain": "「ほん」 = buku."},
      {"q": "Apa arti dari 「えんぴつ」?", "options": ["Pulpen", "Penghapus", "Buku", "Pensil"], "answer": 3, "explain": "「えんぴつ」 = pensil."},
      {"q": "Apa arti dari 「くるま」?", "options": ["Sepeda", "Kereta", "Pesawat", "Mobil"], "answer": 3, "explain": "「くるま」 = mobil."},
      {"q": "Apa arti dari 「でんしゃ」?", "options": ["Kereta listrik", "Bus", "Taksi", "Kapal"], "answer": 0, "explain": "「でんしゃ」 = kereta listrik."}
    ]
  },
  /* ============================================================
     LEVEL 2 — Keluarga, Warna & Kata Kerja
     ============================================================ */
  'level-2': {
    title: 'Keluarga, Warna & Kata Kerja',
    kategori: 'N5',
    deskripsi: 'Latihan kosakata keluarga, hari, warna, kata kerja dasar, dan kata tanya.',
    soal: [
      {"q": "Apa arti dari 「ちち」 (menyebut ayah sendiri)?", "options": ["Ibu", "Ayah", "Kakak laki-laki", "Kakek"], "answer": 1, "explain": "「ちち」 = ayah (untuk menyebut ayah sendiri)."},
      {"q": "Apa arti dari 「はは」 (menyebut ibu sendiri)?", "options": ["Ibu", "Ayah", "Nenek", "Adik perempuan"], "answer": 0, "explain": "「はは」 = ibu (untuk menyebut ibu sendiri)."},
      {"q": "Apa arti dari 「あに」?", "options": ["Adik laki-laki", "Kakak perempuan", "Paman", "Kakak laki-laki"], "answer": 3, "explain": "「あに」 = kakak laki-laki."},
      {"q": "Apa arti dari 「いもうと」?", "options": ["Kakak perempuan", "Adik perempuan", "Ibu", "Bibi"], "answer": 1, "explain": "「いもうと」 = adik perempuan."},
      {"q": "Apa arti dari 「かぞく」?", "options": ["Teman", "Tetangga", "Keluarga", "Guru"], "answer": 2, "explain": "「かぞく」 = keluarga."},
      {"q": "Apa arti dari 「にちようび」?", "options": ["Sabtu", "Senin", "Jumat", "Minggu"], "answer": 3, "explain": "「にちようび」 = hari Minggu."},
      {"q": "Apa arti dari 「げつようび」?", "options": ["Senin", "Selasa", "Rabu", "Kamis"], "answer": 0, "explain": "「げつようび」 = hari Senin."},
      {"q": "Apa arti dari 「かようび」?", "options": ["Senin", "Selasa", "Rabu", "Kamis"], "answer": 1, "explain": "「かようび」 = hari Selasa."},
      {"q": "Apa arti dari 「すいようび」?", "options": ["Kamis", "Jumat", "Rabu", "Sabtu"], "answer": 2, "explain": "「すいようび」 = hari Rabu."},
      {"q": "Apa arti dari 「もくようび」?", "options": ["Kamis", "Selasa", "Minggu", "Rabu"], "answer": 0, "explain": "「もくようび」 = hari Kamis."},
      {"q": "Apa arti dari 「きんようび」?", "options": ["Sabtu", "Jumat", "Senin", "Kamis"], "answer": 1, "explain": "「きんようび」 = hari Jumat."},
      {"q": "Apa arti dari 「どようび」?", "options": ["Minggu", "Jumat", "Rabu", "Sabtu"], "answer": 3, "explain": "「どようび」 = hari Sabtu."},
      {"q": "Apa arti dari 「きょう」?", "options": ["Kemarin", "Besok", "Hari ini", "Lusa"], "answer": 2, "explain": "「きょう」 = hari ini."},
      {"q": "Apa arti dari 「あした」?", "options": ["Besok", "Kemarin", "Hari ini", "Setiap hari"], "answer": 0, "explain": "「あした」 = besok."},
      {"q": "Apa arti dari 「きのう」?", "options": ["Besok", "Kemarin", "Tahun lalu", "Minggu depan"], "answer": 1, "explain": "「きのう」 = kemarin."},
      {"q": "Apa arti dari 「いま」?", "options": ["Nanti", "Tadi", "Sekarang", "Selalu"], "answer": 2, "explain": "「いま」 = sekarang."},
      {"q": "Apa arti dari 「まいにち」?", "options": ["Setiap minggu", "Setiap bulan", "Setiap tahun", "Setiap hari"], "answer": 3, "explain": "「まいにち」 = setiap hari."},
      {"q": "Apa arti dari 「あか」?", "options": ["Biru", "Merah", "Putih", "Hitam"], "answer": 1, "explain": "「あか」 = merah."},
      {"q": "Apa arti dari 「あお」?", "options": ["Biru", "Hijau", "Kuning", "Merah"], "answer": 0, "explain": "「あお」 = biru."},
      {"q": "Apa arti dari 「しろい」?", "options": ["Hitam", "Merah", "Putih", "Kuning"], "answer": 2, "explain": "「しろい」 = putih."},
      {"q": "Apa arti dari 「くろい」?", "options": ["Putih", "Hitam", "Biru", "Cokelat"], "answer": 1, "explain": "「くろい」 = hitam."},
      {"q": "Apa arti dari 「きいろ」?", "options": ["Hijau", "Biru", "Merah", "Kuning"], "answer": 3, "explain": "「きいろ」 = kuning."},
      {"q": "Apa arti dari 「いきます」?", "options": ["Pulang", "Datang", "Pergi", "Makan"], "answer": 2, "explain": "「いきます」 = pergi."},
      {"q": "Apa arti dari 「きます」?", "options": ["Datang", "Pergi", "Pulang", "Melihat"], "answer": 0, "explain": "「きます」 = datang."},
      {"q": "Apa arti dari 「かえります」?", "options": ["Datang", "Pulang", "Tidur", "Bangun"], "answer": 1, "explain": "「かえります」 = pulang / kembali."},
      {"q": "Apa arti dari 「みます」?", "options": ["Mendengar", "Membaca", "Menulis", "Melihat"], "answer": 3, "explain": "「みます」 = melihat / menonton."},
      {"q": "Apa arti dari 「ききます」?", "options": ["Mendengar", "Berbicara", "Membeli", "Melihat"], "answer": 0, "explain": "「ききます」 = mendengar / bertanya."},
      {"q": "Apa arti dari 「よみます」?", "options": ["Menulis", "Membaca", "Membeli", "Bermain"], "answer": 1, "explain": "「よみます」 = membaca."},
      {"q": "Apa arti dari 「かきます」?", "options": ["Membaca", "Melihat", "Menulis", "Makan"], "answer": 2, "explain": "「かきます」 = menulis."},
      {"q": "Apa arti dari 「かいます」?", "options": ["Menjual", "Membeli", "Meminjam", "Memberi"], "answer": 1, "explain": "「かいます」 = membeli."},
      {"q": "Apa arti dari 「ねます」?", "options": ["Bangun", "Tidur", "Mandi", "Belajar"], "answer": 1, "explain": "「ねます」 = tidur."},
      {"q": "Apa arti dari 「おきます」?", "options": ["Bangun", "Tidur", "Duduk", "Berdiri"], "answer": 0, "explain": "「おきます」 = bangun."},
      {"q": "Apa arti dari 「はなします」?", "options": ["Mendengar", "Menulis", "Berbicara", "Berjalan"], "answer": 2, "explain": "「はなします」 = berbicara."},
      {"q": "Apa arti dari 「べんきょうします」?", "options": ["Bekerja", "Bermain", "Beristirahat", "Belajar"], "answer": 3, "explain": "「べんきょうします」 = belajar."},
      {"q": "Apa arti dari 「いえ」?", "options": ["Rumah", "Kamar", "Toko", "Kantor"], "answer": 0, "explain": "「いえ」 = rumah."},
      {"q": "Apa arti dari 「みせ」?", "options": ["Rumah", "Toko", "Sekolah", "Taman"], "answer": 1, "explain": "「みせ」 = toko."},
      {"q": "Apa arti dari 「びょういん」?", "options": ["Sekolah", "Bank", "Rumah sakit", "Perpustakaan"], "answer": 2, "explain": "「びょういん」 = rumah sakit."},
      {"q": "Apa arti dari 「ぎんこう」?", "options": ["Kantor pos", "Restoran", "Toko buku", "Bank"], "answer": 3, "explain": "「ぎんこう」 = bank."},
      {"q": "Apa arti dari 「としょかん」?", "options": ["Perpustakaan", "Museum", "Bioskop", "Taman"], "answer": 0, "explain": "「としょかん」 = perpustakaan."},
      {"q": "Apa arti dari 「レストラン」?", "options": ["Kafe", "Restoran", "Hotel", "Pasar"], "answer": 1, "explain": "「レストラン」 = restoran."},
      {"q": "Apa arti dari 「これ」?", "options": ["Itu (dekat lawan bicara)", "Itu (jauh dari keduanya)", "Ini", "Yang mana"], "answer": 2, "explain": "「これ」 = ini (dekat pembicara)."},
      {"q": "Apa arti dari 「それ」?", "options": ["Ini", "Itu (dekat lawan bicara)", "Itu (jauh dari keduanya)", "Apa"], "answer": 1, "explain": "「それ」 = itu (dekat lawan bicara)."},
      {"q": "Apa arti dari 「あれ」?", "options": ["Itu (jauh dari keduanya)", "Ini", "Yang mana", "Siapa"], "answer": 0, "explain": "「あれ」 = itu (jauh dari keduanya)."},
      {"q": "Apa arti dari 「なん」 (「なに」)?", "options": ["Siapa", "Kapan", "Di mana", "Apa"], "answer": 3, "explain": "「なん」/「なに」 = apa."},
      {"q": "Apa arti dari 「だれ」?", "options": ["Apa", "Siapa", "Kapan", "Berapa"], "answer": 1, "explain": "「だれ」 = siapa."},
      {"q": "Apa arti dari 「どこ」?", "options": ["Kapan", "Siapa", "Di mana", "Bagaimana"], "answer": 2, "explain": "「どこ」 = di mana."},
      {"q": "Apa arti dari 「いつ」?", "options": ["Kapan", "Di mana", "Apa", "Mengapa"], "answer": 0, "explain": "「いつ」 = kapan."},
      {"q": "Apa arti dari 「いくら」?", "options": ["Berapa umur", "Berapa harganya", "Jam berapa", "Siapa"], "answer": 1, "explain": "「いくら」 = berapa (harganya)."},
      {"q": "Apa arti dari 「なんじ」?", "options": ["Hari apa", "Bulan apa", "Jam berapa", "Tahun berapa"], "answer": 2, "explain": "「なんじ」 = jam berapa."},
      {"q": "Apa arti dari 「おいしい」?", "options": ["Tidak enak", "Pedas", "Panas", "Enak"], "answer": 3, "explain": "「おいしい」 = enak (untuk makanan/minuman)."}
    ]
  },
     /* ============================================================
     LEVEL 3 — Kata Sifat Dasar
     ============================================================ */
  'level-3': {
    title: 'Kata Sifat Dasar',
    kategori: 'N5',
    deskripsi: 'Uji hafalan kata sifat い dan な: besar, kecil, baru, lama, enak, dsb.',
    soal: [
      {"q": "Apa arti dari 「おおきい」?", "options": ["Kecil", "Besar", "Tinggi", "Rendah"], "answer": 1, "explain": "「おおきい」 = besar."},
      {"q": "Apa arti dari 「ちいさい」?", "options": ["Besar", "Panjang", "Kecil", "Pendek"], "answer": 2, "explain": "「ちいさい」 = kecil."},
      {"q": "Apa arti dari 「あたらしい」?", "options": ["Baru", "Lama", "Bersih", "Kotor"], "answer": 0, "explain": "「あたらしい」 = baru."},
      {"q": "Apa arti dari 「ふるい」?", "options": ["Baru", "Muda", "Lama (bukan untuk orang)", "Murah"], "answer": 2, "explain": "「ふるい」 = lama/tua (untuk benda, bukan usia orang)."},
      {"q": "Apa arti dari 「おいしい」?", "options": ["Enak", "Tidak enak", "Pedas", "Manis"], "answer": 0, "explain": "「おいしい」 = enak (untuk makanan/minuman)."},
      {"q": "Apa arti dari 「まずい」?", "options": ["Enak", "Tidak enak", "Asin", "Panas"], "answer": 1, "explain": "「まずい」 = tidak enak."},
      {"q": "Apa arti dari 「たかい」 untuk menyatakan harga?", "options": ["Murah", "Mahal", "Rendah", "Pendek"], "answer": 1, "explain": "「たかい」 = mahal (juga berarti tinggi)."},
      {"q": "Apa arti dari 「やすい」?", "options": ["Mahal", "Mudah", "Murah", "Sulit"], "answer": 2, "explain": "「やすい」 = murah."},
      {"q": "Apa arti dari 「ひくい」?", "options": ["Tinggi", "Rendah", "Panjang", "Besar"], "answer": 1, "explain": "「ひくい」 = rendah."},
      {"q": "Apa arti dari 「ながい」?", "options": ["Pendek", "Panjang", "Lebar", "Sempit"], "answer": 1, "explain": "「ながい」 = panjang."},
      {"q": "Apa arti dari 「みじかい」?", "options": ["Panjang", "Pendek", "Kecil", "Rendah"], "answer": 1, "explain": "「みじかい」 = pendek."},
      {"q": "Apa arti dari 「あつい」 untuk cuaca?", "options": ["Dingin", "Hangat sejuk", "Panas", "Tebal"], "answer": 2, "explain": "「あつい」 (暑い) = panas (cuaca/suhu ruangan)."},
      {"q": "Apa arti dari 「さむい」?", "options": ["Panas", "Dingin (cuaca)", "Sejuk", "Basah"], "answer": 1, "explain": "「さむい」 = dingin (cuaca)."},
      {"q": "Apa arti dari 「つめたい」?", "options": ["Dingin (benda yang disentuh)", "Panas", "Hangat", "Segar"], "answer": 0, "explain": "「つめたい」 = dingin (benda/minuman yang disentuh)."},
      {"q": "Apa arti dari 「あたたかい」?", "options": ["Dingin", "Panas menyengat", "Hangat", "Sejuk"], "answer": 2, "explain": "「あたたかい」 = hangat."},
      {"q": "Apa arti dari 「すずしい」?", "options": ["Sejuk", "Hangat", "Panas", "Dingin sekali"], "answer": 0, "explain": "「すずしい」 = sejuk."},
      {"q": "Apa arti dari 「むずかしい」?", "options": ["Mudah", "Sulit", "Menarik", "Membosankan"], "answer": 1, "explain": "「むずかしい」 = sulit."},
      {"q": "Apa arti dari 「やさしい」 dalam konteks soal/pelajaran?", "options": ["Sulit", "Mudah", "Lama", "Cepat"], "answer": 1, "explain": "「やさしい」 = mudah (juga berarti baik hati)."},
      {"q": "Apa arti dari 「おもしろい」?", "options": ["Membosankan", "Menarik/lucu", "Sulit", "Sedih"], "answer": 1, "explain": "「おもしろい」 = menarik/lucu."},
      {"q": "Apa arti dari 「つまらない」?", "options": ["Menarik", "Membosankan", "Lucu", "Sibuk"], "answer": 1, "explain": "「つまらない」 = membosankan."},
      {"q": "Apa arti dari 「たのしい」?", "options": ["Menyenangkan", "Sedih", "Sibuk", "Sepi"], "answer": 0, "explain": "「たのしい」 = menyenangkan."},
      {"q": "Apa arti dari 「いそがしい」?", "options": ["Santai", "Sibuk", "Lelah", "Lapar"], "answer": 1, "explain": "「いそがしい」 = sibuk."},
      {"q": "Apa arti dari 「はやい」?", "options": ["Lambat", "Cepat/awal", "Jauh", "Dekat"], "answer": 1, "explain": "「はやい」 = cepat atau awal (dalam waktu)."},
      {"q": "Apa arti dari 「おそい」?", "options": ["Cepat", "Lambat/terlambat", "Awal", "Dekat"], "answer": 1, "explain": "「おそい」 = lambat/terlambat."},
      {"q": "Apa arti dari 「ちかい」?", "options": ["Jauh", "Dekat", "Luas", "Sempit"], "answer": 1, "explain": "「ちかい」 = dekat."},
      {"q": "Apa arti dari 「とおい」?", "options": ["Dekat", "Tinggi", "Jauh", "Panjang"], "answer": 2, "explain": "「とおい」 = jauh."},
      {"q": "Apa arti dari 「ひろい」?", "options": ["Sempit", "Luas", "Panjang", "Besar sekali"], "answer": 1, "explain": "「ひろい」 = luas/lebar."},
      {"q": "Apa arti dari 「せまい」?", "options": ["Luas", "Sempit", "Pendek", "Kecil"], "answer": 1, "explain": "「せまい」 = sempit."},
      {"q": "Apa arti dari 「あかるい」?", "options": ["Gelap", "Terang", "Hangat", "Tenang"], "answer": 1, "explain": "「あかるい」 = terang/cerah."},
      {"q": "Apa arti dari 「くらい」?", "options": ["Terang", "Gelap", "Sepi", "Dingin"], "answer": 1, "explain": "「くらい」 = gelap/suram."},
      {"q": "Apa arti dari 「おもい」?", "options": ["Ringan", "Berat", "Besar", "Tebal"], "answer": 1, "explain": "「おもい」 = berat."},
      {"q": "Apa arti dari 「かるい」?", "options": ["Berat", "Ringan", "Tipis", "Mudah"], "answer": 1, "explain": "「かるい」 = ringan."},
      {"q": "Apa arti dari 「いい」 (「よい」)?", "options": ["Buruk", "Baik/bagus", "Biasa", "Benar"], "answer": 1, "explain": "「いい」/「よい」 = baik/bagus."},
      {"q": "Apa arti dari 「わるい」?", "options": ["Baik", "Jahat/buruk", "Lemah", "Salah"], "answer": 1, "explain": "「わるい」 = buruk/jahat."},
      {"q": "Apa arti dari 「わかい」?", "options": ["Tua (orang)", "Muda", "Baru", "Kecil"], "answer": 1, "explain": "「わかい」 = muda."},
      {"q": "Apa arti dari 「あまい」?", "options": ["Asin", "Pahit", "Manis", "Asam"], "answer": 2, "explain": "「あまい」 = manis."},
      {"q": "Apa arti dari 「からい」?", "options": ["Manis", "Pedas/asin", "Asam", "Hambar"], "answer": 1, "explain": "「からい」 = pedas (atau asin)."},
      {"q": "Apa arti dari 「きれい」?", "options": ["Kotor", "Cantik/bersih", "Tenang", "Ramai"], "answer": 1, "explain": "「きれい」 (な-adjective) = cantik/bersih."},
      {"q": "Apa arti dari 「しずか」?", "options": ["Ramai", "Tenang/sepi", "Sibuk", "Gelap"], "answer": 1, "explain": "「しずか」 (な-adjective) = tenang/sepi."},
      {"q": "Apa arti dari 「にぎやか」?", "options": ["Sepi", "Ramai", "Bersih", "Luas"], "answer": 1, "explain": "「にぎやか」 (な-adjective) = ramai/meriah."},
      {"q": "Apa arti dari 「べんり」?", "options": ["Praktis/nyaman", "Tidak praktis", "Terkenal", "Sehat"], "answer": 0, "explain": "「べんり」 (な-adjective) = praktis/nyaman."},
      {"q": "Apa arti dari 「ふべん」?", "options": ["Praktis", "Tidak praktis", "Sepi", "Kotor"], "answer": 1, "explain": "「ふべん」 (な-adjective) = tidak praktis/tidak nyaman."},
      {"q": "Apa arti dari 「ゆうめい」?", "options": ["Terkenal", "Kaya", "Tenang", "Baik hati"], "answer": 0, "explain": "「ゆうめい」 (な-adjective) = terkenal."},
      {"q": "Apa arti dari 「しんせつ」?", "options": ["Baik hati/ramah", "Jahat", "Sibuk", "Tampan"], "answer": 0, "explain": "「しんせつ」 (な-adjective) = baik hati/ramah."},
      {"q": "Apa arti dari 「げんき」?", "options": ["Sakit", "Sehat/bersemangat", "Lelah", "Sedih"], "answer": 1, "explain": "「げんき」 (な-adjective) = sehat/bersemangat."},
      {"q": "Apa arti dari 「すき」?", "options": ["Benci", "Suka", "Biasa", "Takut"], "answer": 1, "explain": "「すき」 (な-adjective) = suka."},
      {"q": "Apa arti dari 「きらい」?", "options": ["Suka", "Tidak suka/benci", "Pandai", "Takut"], "answer": 1, "explain": "「きらい」 (な-adjective) = tidak suka/benci."},
      {"q": "Apa arti dari 「じょうず」?", "options": ["Pandai/mahir", "Tidak pandai", "Rajin", "Cepat"], "answer": 0, "explain": "「じょうず」 (な-adjective) = pandai/mahir."},
      {"q": "Apa arti dari 「へた」?", "options": ["Mahir", "Tidak pandai", "Malas", "Lambat"], "answer": 1, "explain": "「へた」 (な-adjective) = tidak pandai/kurang mahir."},
      {"q": "Apa arti dari 「ひま」?", "options": ["Sibuk", "Senggang/luang", "Lelah", "Sepi"], "answer": 1, "explain": "「ひま」 (な-adjective) = senggang/tidak sibuk."},
      {"q": "Manakah bentuk yang benar untuk \"kota yang tenang\"?", "options": ["「しずかい まち」", "「しずかな まち」", "「しずかの まち」", "「しずかで まち」"], "answer": 1, "explain": "な-adjective memakai 「な」 sebelum kata benda: 「しずかな まち」."}
    ]
  },
   /* ============================================================
     LEVEL 4 — Kata Kerja, Pola Kalimat & Dokkai
     ============================================================ */
  'level-4': {
    title: 'Kata Kerja, Pola Kalimat & Dokkai',
    kategori: 'N5',
    deskripsi: 'Kombinasi 50 soal: kata kerja dasar, pola kalimat N5, dan pemahaman bacaan pendek (dokkai).',
    soal: [
      {"q": "「たべます」 artinya...", "options": ["makan", "minum", "pergi", "melihat"], "answer": 0, "explain": "「たべます」 = makan. Contoh: 「パンを たべます」 (makan roti)."},
      {"q": "「のみます」 artinya...", "options": ["makan", "minum", "membeli", "tidur"], "answer": 1, "explain": "「のみます」 = minum. Contoh: 「みずを のみます」 (minum air)."},
      {"q": "「いきます」 artinya...", "options": ["datang", "pulang", "pergi", "bangun"], "answer": 2, "explain": "「いきます」 = pergi. Contoh: 「がっこうへ いきます」 (pergi ke sekolah)."},
      {"q": "「きます」 artinya...", "options": ["pergi", "pulang", "bekerja", "datang"], "answer": 3, "explain": "「きます」 = datang, kebalikan dari 「いきます」."},
      {"q": "「みます」 artinya...", "options": ["melihat / menonton", "mendengar", "membaca", "menulis"], "answer": 0, "explain": "「みます」 = melihat atau menonton. Contoh: 「テレビを みます」 (menonton TV)."},
      {"q": "「ききます」 artinya...", "options": ["berbicara", "mendengar", "membeli", "membaca"], "answer": 1, "explain": "「ききます」 = mendengar atau mendengarkan. Contoh: 「おんがくを ききます」."},
      {"q": "「よみます」 artinya...", "options": ["menulis", "mendengar", "membaca", "belajar"], "answer": 2, "explain": "「よみます」 = membaca. Contoh: 「ほんを よみます」 (membaca buku)."},
      {"q": "「かきます」 artinya...", "options": ["membaca", "membeli", "melihat", "menulis"], "answer": 3, "explain": "「かきます」 = menulis. Contoh: 「てがみを かきます」 (menulis surat)."},
      {"q": "「かいます」 artinya...", "options": ["menjual", "membeli", "bertemu", "pulang"], "answer": 1, "explain": "「かいます」 = membeli. Contoh: 「くつを かいます」 (membeli sepatu)."},
      {"q": "「はなします」 artinya...", "options": ["berbicara", "bekerja", "beristirahat", "tidur"], "answer": 0, "explain": "「はなします」 = berbicara. Contoh: 「ともだちと はなします」 (berbicara dengan teman)."},
      {"q": "「おきます」 artinya...", "options": ["tidur", "datang", "bangun", "bekerja"], "answer": 2, "explain": "「おきます」 = bangun (dari tidur). Contoh: 「6じに おきます」 (bangun jam 6)."},
      {"q": "「ねます」 artinya...", "options": ["bangun", "makan", "belajar", "tidur"], "answer": 3, "explain": "「ねます」 = tidur, kebalikan dari 「おきます」."},
      {"q": "「はたらきます」 artinya...", "options": ["bekerja", "bermain", "belajar", "berjalan"], "answer": 0, "explain": "「はたらきます」 = bekerja. Contoh: 「かいしゃで はたらきます」 (bekerja di perusahaan)."},
      {"q": "「やすみます」 artinya...", "options": ["bekerja", "beristirahat / libur", "pulang", "datang"], "answer": 1, "explain": "「やすみます」 = beristirahat atau libur/tidak masuk."},
      {"q": "「べんきょうします」 artinya...", "options": ["bekerja", "bermain", "belajar", "mengajar"], "answer": 2, "explain": "「べんきょうします」 = belajar. Contoh: 「にほんごを べんきょうします」."},
      {"q": "「かえります」 artinya...", "options": ["pergi", "datang", "bangun", "pulang"], "answer": 3, "explain": "「かえります」 = pulang (kembali ke tempat asal). Contoh: 「うちへ かえります」."},
      {"q": "「あいます」 artinya...", "options": ["bertemu", "membeli", "mendengar", "bertanya"], "answer": 0, "explain": "「あいます」 = bertemu. Contoh: 「ともだちに あいます」 (bertemu teman)."},
      {"q": "Kata kerja yang tepat: 「パンを ___。」 (Makan roti)", "options": ["ききます", "よみます", "たべます", "ねます"], "answer": 2, "explain": "Roti dimakan, jadi 「たべます」."},
      {"q": "Kata kerja yang tepat: 「おんがくを ___。」 (Mendengarkan musik)", "options": ["かきます", "ききます", "かいます", "きます"], "answer": 1, "explain": "Mendengarkan musik = 「おんがくを ききます」."},
      {"q": "「おしえます」 artinya...", "options": ["belajar", "bertanya", "mengajar / memberitahu", "menjawab"], "answer": 2, "explain": "「おしえます」 = mengajar atau memberitahu. Contoh: 「にほんごを おしえます」."},
      {"q": "Bentuk negatif dari 「たべます」 adalah...", "options": ["たべました", "たべません", "たべませんでした", "たべています"], "answer": 1, "explain": "ます diganti ません: 「たべます」 → 「たべません」 (tidak makan)."},
      {"q": "Bentuk lampau (positif) dari 「のみます」 adalah...", "options": ["のみません", "のみたいです", "のみました", "のみましょう"], "answer": 2, "explain": "ます diganti ました: 「のみました」 (sudah minum)."},
      {"q": "Bentuk lampau negatif dari 「いきます」 adalah...", "options": ["いきませんでした", "いきません", "いきました", "いきませんか"], "answer": 0, "explain": "ます diganti ませんでした: 「いきませんでした」 (tidak pergi)."},
      {"q": "Pola 「〜ています」 pada kalimat dasar menyatakan...", "options": ["keinginan", "ajakan", "larangan", "sedang melakukan"], "answer": 3, "explain": "「〜ています」 menyatakan aksi yang sedang berlangsung, misalnya 「たべています」 (sedang makan)."},
      {"q": "「いま ほんを よんで います」 artinya...", "options": ["Saya ingin membaca buku", "Sekarang saya sedang membaca buku", "Saya membaca buku kemarin", "Tolong baca buku"], "answer": 1, "explain": "「よんでいます」 = sedang membaca. 「いま」 = sekarang."},
      {"q": "Pola 「〜たいです」 artinya...", "options": ["ingin melakukan ~", "tidak boleh melakukan ~", "bisa melakukan ~", "tolong lakukan ~"], "answer": 0, "explain": "「〜たいです」 menyatakan keinginan, contoh: 「いきたいです」 (ingin pergi)."},
      {"q": "「みずを のみたいです」 artinya...", "options": ["Saya minum air kemarin", "Saya tidak minum air", "Saya ingin minum air", "Mari minum air"], "answer": 2, "explain": "「のみたいです」 = ingin minum."},
      {"q": "「いっしょに えいがを みませんか」 artinya...", "options": ["Saya tidak menonton film", "Bagaimana kalau kita menonton film bersama?", "Tolong tontonlah film", "Saya sedang menonton film"], "answer": 1, "explain": "「〜ませんか」 adalah ajakan sopan: \"Bagaimana kalau ~?\""},
      {"q": "Pola 「〜ましょう」 artinya...", "options": ["tidak ~", "sudah ~", "sedang ~", "mari ~"], "answer": 3, "explain": "「〜ましょう」 = mari ~, contoh: 「いきましょう」 (mari pergi)."},
      {"q": "「ここに なまえを かいて ください」 artinya...", "options": ["Tolong tulis nama Anda di sini", "Bolehkah saya menulis nama di sini?", "Dilarang menulis nama di sini", "Saya ingin menulis nama"], "answer": 0, "explain": "「〜てください」 = tolong lakukan ~. 「かいて」 adalah bentuk て dari 「かきます」."},
      {"q": "Pola 「〜ても いいですか」 artinya...", "options": ["Tolong ~", "Mari ~", "Bolehkah ~?", "Tidak boleh ~"], "answer": 2, "explain": "「〜てもいいですか」 dipakai untuk meminta izin: bolehkah ~?"},
      {"q": "「ここで しゃしんを とっても いいですか」 artinya...", "options": ["Dilarang memotret di sini", "Bolehkah saya memotret di sini?", "Saya ingin memotret di sini", "Tolong potret di sini"], "answer": 1, "explain": "「とっても いいですか」 = bolehkah mengambil (foto)? 「しゃしんを とります」 = memotret."},
      {"q": "Pola 「〜ては いけません」 artinya...", "options": ["boleh ~", "ingin ~", "bisa ~", "tidak boleh ~"], "answer": 3, "explain": "「〜てはいけません」 menyatakan larangan."},
      {"q": "「ここで たばこを すっては いけません」 artinya...", "options": ["Dilarang merokok di sini", "Silakan merokok di sini", "Saya ingin merokok di sini", "Bolehkah merokok di sini?"], "answer": 0, "explain": "「すっては いけません」 = tidak boleh menghisap (rokok)."},
      {"q": "「ピアノを ひく ことが できます」 artinya...", "options": ["Saya ingin main piano", "Saya sedang main piano", "Saya bisa main piano", "Saya tidak main piano"], "answer": 2, "explain": "「〜ことが できます」 = bisa melakukan ~ (bentuk kamus + ことが できます)."},
      {"q": "「わたしは すしが すきです」 artinya...", "options": ["Saya membeli sushi", "Saya suka sushi", "Saya tidak suka sushi", "Saya pandai membuat sushi"], "answer": 1, "explain": "「〜が すきです」 = suka ~."},
      {"q": "「たなかさんは うたが じょうずです」 artinya...", "options": ["Tanaka tidak suka lagu", "Tanaka ingin bernyanyi", "Tanaka sedang mendengarkan lagu", "Tanaka pandai bernyanyi"], "answer": 3, "explain": "「〜が じょうずです」 = pandai ~. 「うた」 = lagu/nyanyian."},
      {"q": "「かいものに いきます」 artinya...", "options": ["Pergi berbelanja", "Pulang dari belanja", "Ingin berbelanja", "Tidak berbelanja"], "answer": 0, "explain": "Pola 「〜に いきます」 = pergi untuk ~. 「かいもの」 = belanja."},
      {"q": "Lengkapi: 「レストラン___ ばんごはんを たべます。」", "options": ["に", "を", "が", "で"], "answer": 3, "explain": "Partikel 「で」 menunjukkan tempat berlangsungnya aksi: makan malam di restoran."},
      {"q": "Jawaban yang tepat untuk 「いっしょに ひるごはんを たべませんか」 jika setuju adalah...", "options": ["ええ、たべません", "ええ、たべましょう", "いいえ、たべました", "ええ、たべています"], "answer": 1, "explain": "Menerima ajakan 「〜ませんか」 dengan 「ええ、〜ましょう」 (Ya, mari)."},
      {"q": "「わたしは まいにち 7じに おきます。それから ごはんを たべます。8じに がっこうへ いきます。」\n\nPertanyaan: Jam berapa orang ini bangun?", "options": ["Jam 6", "Jam 7", "Jam 8", "Jam 9"], "answer": 1, "explain": "「7じに おきます」 = bangun jam 7. Jam 8 adalah waktu berangkat ke sekolah."},
      {"q": "「きのうは にちようびでした。わたしは ともだちと えいがを みました。それから レストランで ひるごはんを たべました。」\n\nPertanyaan: Setelah menonton film, apa yang dilakukan orang ini?", "options": ["Pulang ke rumah", "Belajar di perpustakaan", "Makan siang di restoran", "Berbelanja di toko"], "answer": 2, "explain": "「それから レストランで ひるごはんを たべました」 = setelah itu makan siang di restoran."},
      {"q": "「たなかさんは だいがくせいです。まいにち としょかんで べんきょうします。あしたは しけんが あります。」\n\nPertanyaan: Di mana Tanaka belajar setiap hari?", "options": ["Di rumah", "Di restoran", "Di kantor", "Di perpustakaan"], "answer": 3, "explain": "「としょかんで べんきょうします」 = belajar di perpustakaan."},
      {"q": "「わたしの かぞくは よにんです。ちちと ははと あねと わたしです。ちちは かいしゃいんです。」\n\nPertanyaan: Apa pekerjaan ayah?", "options": ["Guru", "Karyawan perusahaan", "Dokter", "Mahasiswa"], "answer": 1, "explain": "「ちちは かいしゃいんです」 = ayah adalah karyawan perusahaan. 「よにん」 = empat orang."},
      {"q": "「あしたは やすみです。わたしは うみへ いきたいです。でも、あめが ふります。」\n\nPertanyaan: Mengapa orang ini mungkin tidak bisa ke laut?", "options": ["Karena akan turun hujan", "Karena harus bekerja", "Karena sedang sakit", "Karena tidak punya teman"], "answer": 0, "explain": "「あめが ふります」 = hujan akan turun. 「でも」 = tetapi."},
      {"q": "「わたしは コーヒーが すきです。まいあさ コーヒーを のみます。ひるは おちゃを のみます。」\n\nPertanyaan: Apa yang diminum orang ini pada siang hari?", "options": ["Kopi", "Susu", "Teh", "Air putih"], "answer": 2, "explain": "「ひるは おちゃを のみます」 = siang hari minum teh. Kopi diminum setiap pagi."},
      {"q": "「きょうは さむいです。わたしは うちに います。うちで テレビを みています。」\n\nPertanyaan: Apa yang sedang dilakukan orang ini?", "options": ["Pergi ke sekolah", "Membaca buku di perpustakaan", "Tidur di kamar", "Menonton TV di rumah"], "answer": 3, "explain": "「うちで テレビを みています」 = sedang menonton TV di rumah."},
      {"q": "「スミスさんは アメリカじんです。にほんごが じょうずです。まいにち にほんごを べんきょうします。」\n\nPertanyaan: Bagaimana kemampuan bahasa Jepang Smith?", "options": ["Tidak bisa sama sekali", "Pandai", "Baru mulai belajar", "Tidak suka"], "answer": 1, "explain": "「にほんごが じょうずです」 = pandai berbahasa Jepang."},
      {"q": "「にちようびに ともだちと デパートへ いきました。くつを かいました。シャツは かいませんでした。」\n\nPertanyaan: Apa yang TIDAK dibeli?", "options": ["Kemeja (シャツ)", "Sepatu (くつ)", "Tas", "Buku"], "answer": 0, "explain": "「シャツは かいませんでした」 = tidak membeli kemeja. Yang dibeli adalah sepatu."},
      {"q": "「えきの ちかくに ゆうびんきょくが あります。ゆうびんきょくの となりに ぎんこうが あります。」\n\nPertanyaan: Di mana letak bank (ぎんこう)?", "options": ["Di depan stasiun", "Di dalam stasiun", "Di sebelah kantor pos", "Di seberang sekolah"], "answer": 2, "explain": "「ゆうびんきょくの となりに ぎんこうが あります」 = bank berada di sebelah kantor pos."}
    ]
  },  
  /* ============================================================
     LEVEL 5 — Kosakata, Kanji & Kaiwa
     ============================================================ */
  'level-5': {
    title: 'Kosakata, Kanji & Kaiwa',
    kategori: 'N5',
    deskripsi: 'Kombinasi 50 soal: kosakata lanjutan, kanji dasar N5, dan latihan percakapan (kaiwa).',
    soal: [
      // ===== KOSAKATA LANJUTAN (1-20) =====
      {"q": "「でんわ」 artinya...", "options": ["telepon", "jam", "tas", "payung"], "answer": 0, "explain": "「でんわ」 = telepon. Contoh: 「でんわを かけます」 (menelepon)."},
      {"q": "「かばん」 artinya...", "options": ["topi", "dompet", "tas", "kunci"], "answer": 2, "explain": "「かばん」 = tas."},
      {"q": "「めがね」 artinya...", "options": ["jam tangan", "kacamata", "payung", "kaus kaki"], "answer": 1, "explain": "「めがね」 = kacamata."},
      {"q": "「かぎ」 artinya...", "options": ["dompet", "tas", "topi", "kunci"], "answer": 3, "explain": "「かぎ」 = kunci. Contoh: 「かぎを わすれました」 (lupa membawa kunci)."},
      {"q": "「とけい」 artinya...", "options": ["jam", "telepon", "kacamata", "sepatu"], "answer": 0, "explain": "「とけい」 = jam (jam dinding/jam tangan)."},
      {"q": "「かさ」 artinya...", "options": ["topi", "tas", "payung", "baju"], "answer": 2, "explain": "「かさ」 = payung."},
      {"q": "「くつした」 artinya...", "options": ["sepatu", "kaus kaki", "topi", "baju"], "answer": 1, "explain": "「くつした」 = kaus kaki. Jangan tertukar dengan 「くつ」 (sepatu)."},
      {"q": "「さいふ」 artinya...", "options": ["kunci", "tas", "kacamata", "dompet"], "answer": 3, "explain": "「さいふ」 = dompet."},
      {"q": "「つかいます」 artinya...", "options": ["menggunakan", "menunggu", "mengingat", "melupakan"], "answer": 0, "explain": "「つかいます」 = menggunakan. Contoh: 「ペンを つかいます」."},
      {"q": "「ならいます」 artinya...", "options": ["mengajar", "belajar (dari guru), berlatih", "bertanya", "menjawab"], "answer": 1, "explain": "「ならいます」 = belajar (dari seseorang). Berbeda dengan 「おしえます」 (mengajar)."},
      {"q": "「わすれます」 artinya...", "options": ["mengingat", "menunggu", "melupakan", "mencari"], "answer": 2, "explain": "「わすれます」 = lupa / melupakan."},
      {"q": "「まちます」 artinya...", "options": ["berlari", "berjalan", "berenang", "menunggu"], "answer": 3, "explain": "「まちます」 = menunggu."},
      {"q": "「およぎます」 artinya...", "options": ["berenang", "berlari", "berjalan", "melompat"], "answer": 0, "explain": "「およぎます」 = berenang. Contoh: 「うみで およぎます」."},
      {"q": "「しんせつ」 artinya...", "options": ["terkenal", "baik hati / ramah", "praktis", "sibuk"], "answer": 1, "explain": "「しんせつ」 (な-adj) = baik hati, ramah."},
      {"q": "「べんり」 artinya...", "options": ["sulit", "terkenal", "praktis / mudah dipakai", "kuat"], "answer": 2, "explain": "「べんり」 = praktis. Contoh: 「スマホは べんりです」."},
      {"q": "「ひま」 artinya...", "options": ["sibuk", "capek", "sehat", "senggang / tidak sibuk"], "answer": 3, "explain": "「ひま」 = senggang. Kebalikannya 「いそがしい」."},
      {"q": "Kata keterangan 「いつも」 artinya...", "options": ["selalu", "kadang-kadang", "tidak pernah", "jarang"], "answer": 0, "explain": "「いつも」 = selalu."},
      {"q": "「ときどき」 artinya...", "options": ["selalu", "kadang-kadang", "sering", "sama sekali tidak"], "answer": 1, "explain": "「ときどき」 = kadang-kadang."},
      {"q": "「あまり」 dipakai bersama bentuk negatif, artinya...", "options": ["sangat", "sudah", "tidak begitu / tidak terlalu", "banyak"], "answer": 2, "explain": "「あまり + negatif」 = tidak begitu. Contoh: 「あまり たべません」."},
      {"q": "Kata 「たくさん」 artinya...", "options": ["sedikit", "sudah", "belum", "banyak"], "answer": 3, "explain": "「たくさん」 = banyak."},

      // ===== KANJI N5 (21-35) =====
      {"q": "Kanji 「日」 dibaca... (sebagai 'hari' pada 「にちようび」)", "options": ["げつ", "か", "にち", "すい"], "answer": 2, "explain": "「日」 dibaca 「にち」 (onyomi), 「ひ」 (kunyomi). Artinya hari/matahari."},
      {"q": "Kanji 「月」 artinya...", "options": ["bulan", "api", "air", "kayu"], "answer": 0, "explain": "「月」 = bulan (「げつ」/「つき」)."},
      {"q": "Kanji 「火」 dibaca... (pada 「かようび」)", "options": ["すい", "か", "もく", "きん"], "answer": 1, "explain": "「火」 = api, dibaca 「か」 / 「ひ」."},
      {"q": "Kanji 「水」 artinya...", "options": ["api", "tanah", "emas", "air"], "answer": 3, "explain": "「水」 = air (「すい」/「みず」)."},
      {"q": "Kanji 「木」 dibaca... (pada 「もくようび」)", "options": ["もく", "きん", "ど", "にち"], "answer": 0, "explain": "「木」 = pohon/kayu, dibaca 「もく」 / 「き」."},
      {"q": "Kanji 「山」 artinya...", "options": ["sungai", "hutan", "gunung", "laut"], "answer": 2, "explain": "「山」 = gunung (「さん」/「やま」)."},
      {"q": "Kanji 「川」 dibaca...", "options": ["やま", "かわ", "き", "はやし"], "answer": 1, "explain": "「川」 = sungai, dibaca 「かわ」 (kunyomi)."},
      {"q": "Kanji untuk 'sekolah' adalah...", "options": ["先生", "大学", "学生", "学校"], "answer": 3, "explain": "「学校」 (がっこう) = sekolah."},
      {"q": "Kanji 「人」 dibaca... (pada 「にほんじん」)", "options": ["じん / にん", "し", "こ", "しょう"], "answer": 0, "explain": "「人」 = orang, dibaca 「じん」 / 「にん」 / 「ひと」."},
      {"q": "Kanji 「女」 artinya...", "options": ["laki-laki", "perempuan", "anak", "ibu"], "answer": 1, "explain": "「女」 = perempuan. Kebalikannya 「男」."},
      {"q": "Kanji 「手」 artinya...", "options": ["kaki", "mulut", "tangan", "telinga"], "answer": 2, "explain": "「手」 = tangan. Kaki adalah 「足」."},
      {"q": "Kanji 「大」 artinya...", "options": ["kecil", "baru", "lama", "besar"], "answer": 3, "explain": "「大」 = besar. Kebalikannya 「小」."},
      {"q": "Kanji 「百」 dibaca...", "options": ["ひゃく", "せん", "まん", "じゅう"], "answer": 0, "explain": "「百」 = seratus (「ひゃく」)."},
      {"q": "Kanji untuk 'guru' adalah...", "options": ["学生", "先生", "生活", "小学"], "answer": 1, "explain": "「先生」 (せんせい) = guru/dokter. Mudah tertukar dengan 「学生」 (がくせい)."},
      {"q": "Kanji 「上」 artinya...", "options": ["bawah", "depan", "atas", "belakang"], "answer": 2, "explain": "「上」 = atas. Kebalikannya 「下」."},

      // ===== KAIWA (36-50) =====
      {"q": "Situasi: Di toko.\nA: 「いらっしゃいませ。」\nB: 「すみません、これは いくらですか。」\nA: 「___」\n\nJawaban yang tepat adalah...", "options": ["「500えんです」", "「3じです」", "「たなかです」", "「げんきです」"], "answer": 0, "explain": "「いくらですか」 menanyakan harga, jadi dijawab dengan harga."},
      {"q": "Situasi: Perkenalan diri.\nA: 「おなまえは？」\nB: 「___」\n\nJawaban yang tepat adalah...", "options": ["「いくらですか」", "「たなかです。よろしくおねがいします」", "「3じです」", "「おいしいです」"], "answer": 1, "explain": "Ditanya nama, jawab dengan nama + 「よろしくおねがいします」."},
      {"q": "Situasi: Menanyakan waktu.\nA: 「いま なんじですか。」\nB: 「___」\n\nJawaban yang tepat adalah...", "options": ["「500えんです」", "「がくせいです」", "「あしたです」", "「3じです」"], "answer": 3, "explain": "「なんじ」 = jam berapa; dijawab misalnya 「3じです」."},
      {"q": "Situasi: Bertemu di pagi hari.\nA: 「おはようございます。」\nB: 「___」\n\nJawaban yang tepat adalah...", "options": ["「おやすみなさい」", "「おはようございます」", "「さようなら」", "「いただきます」"], "answer": 1, "explain": "Salam pagi dibalas dengan salam yang sama."},
      {"q": "Situasi: Sebelum makan.\nA: (Makanan sudah tersaji)\nB: 「___」\n\nUcapan yang tepat adalah...", "options": ["「ごちそうさまでした」", "「いってきます」", "「いただきます」", "「ただいま」"], "answer": 2, "explain": "Sebelum makan: 「いただきます」. Setelah makan: 「ごちそうさまでした」."},
      {"q": "Situasi: Tiba di rumah.\nA: 「ただいま。」\nB: 「___」\n\nJawaban yang tepat adalah...", "options": ["「いってらっしゃい」", "「はじめまして」", "「おやすみなさい」", "「おかえりなさい」"], "answer": 3, "explain": "「ただいま」 dijawab 「おかえりなさい」."},
      {"q": "Situasi: Berterima kasih.\nA: 「ありがとうございます。」\nB: 「___」\n\nJawaban yang tepat adalah...", "options": ["「どういたしまして」", "「いただきます」", "「はじめまして」", "「おげんきですか」"], "answer": 0, "explain": "Balasan terima kasih: 「どういたしまして」."},
      {"q": "Situasi: Menanyakan kabar.\nA: 「おげんきですか。」\nB: 「___」\n\nJawaban yang tepat adalah...", "options": ["「はい、いくらです」", "「はい、げんきです。ありがとうございます」", "「はい、3じです」", "「はい、さようなら」"], "answer": 1, "explain": "「おげんきですか」 = apa kabar? Jawab: 「げんきです」."},
      {"q": "Situasi: Mengajak teman.\nA: 「いっしょに ひるごはんを たべませんか。」\nB: 「___」\n\nJawaban yang tepat untuk menerima ajakan adalah...", "options": ["「いいえ、たべました」", "「ええ、たべません」", "「ええ、いいですね。たべましょう」", "「ええ、おいしくないです」"], "answer": 2, "explain": "Menerima ajakan: 「ええ、いいですね」 + 「〜ましょう」."},
      {"q": "Situasi: Berangkat dari rumah.\nA: 「いってきます。」\nB: 「___」\n\nJawaban yang tepat adalah...", "options": ["「おかえりなさい」", "「いただきます」", "「おやすみなさい」", "「いってらっしゃい」"], "answer": 3, "explain": "「いってきます」 dibalas 「いってらっしゃい」."},
      {"q": "Situasi: Menanyakan asal.\nA: 「おくには どちらですか。」\nB: 「___」\n\nJawaban yang tepat adalah...", "options": ["「インドネシアです」", "「9じです」", "「300えんです」", "「テレビです」"], "answer": 0, "explain": "「おくに」 = negara asal; jawab dengan nama negara."},
      {"q": "Situasi: Meminta maaf.\nA: 「すみません、おくれました。」\nB: 「___」\n\nJawaban yang tepat adalah...", "options": ["「いただきます」", "「だいじょうぶです」", "「いくらですか」", "「おめでとうございます」"], "answer": 1, "explain": "Permintaan maaf dibalas 「だいじょうぶです」 (tidak apa-apa)."},
      {"q": "Situasi: Menanyakan benda.\nA: 「これは なんですか。」\nB: 「___」\n\nJawaban yang tepat adalah...", "options": ["「はい、そうです」", "「いいえ、ちがいます」", "「かぎです」", "「6じです」"], "answer": 2, "explain": "「なんですか」 = apa ini? Dijawab dengan nama benda."},
      {"q": "Situasi: Menanyakan hari.\nA: 「きょうは なんようびですか。」\nB: 「___」\n\nJawaban yang tepat adalah...", "options": ["「1,000えんです」", "「5じです」", "「ともだちです」", "「かようびです」"], "answer": 3, "explain": "「なんようび」 = hari apa; jawab misalnya 「かようびです」."},
      {"q": "Situasi: Sebelum tidur.\nA: 「おやすみなさい。」\nB: 「___」\n\nJawaban yang tepat adalah...", "options": ["「おやすみなさい」", "「おはようございます」", "「いただきます」", "「はじめまして」"], "answer": 0, "explain": "Ucapan selamat tidur dibalas dengan ucapan yang sama."}
    ]
  },
     /* ============================================================
     LEVEL 6 — Partikel, Dokkai & Listening
     ============================================================ */
  'level-6': {
    title: 'Partikel, Dokkai & Listening',
    kategori: 'N5',
    deskripsi: 'Kombinasi 50 soal: partikel N5, pemahaman bacaan (dokkai), dan latihan mendengarkan (listening).',
    soal: [
      // ===== PARTIKEL N5 (1-25) =====
      {"q": "「わたし___ がくせいです。」 partikel yang tepat?", "options": ["は", "を", "へ", "で"], "answer": 0, "explain": "Partikel 「は」 (dibaca \"wa\") menandai topik kalimat: 「わたしは がくせいです」."},
      {"q": "「ほん___ よみます。」 partikel yang tepat?", "options": ["に", "を", "と", "の"], "answer": 1, "explain": "Partikel 「を」 menandai objek langsung dari kata kerja: 「ほんを よみます」."},
      {"q": "「7じ___ おきます。」 partikel yang tepat?", "options": ["で", "を", "に", "が"], "answer": 2, "explain": "Partikel 「に」 menunjukkan waktu yang spesifik (jam): 「7じに おきます」."},
      {"q": "「がっこう___ いきます。」 (tujuan: sekolah) partikel yang tepat?", "options": ["を", "で", "が", "に"], "answer": 3, "explain": "Tujuan perpindahan ditandai 「に」 atau 「へ」: 「がっこうに いきます」."},
      {"q": "「レストラン___ ごはんを たべます。」 partikel yang tepat?", "options": ["で", "を", "は", "も"], "answer": 0, "explain": "Partikel 「で」 menunjukkan tempat berlangsungnya suatu aksi."},
      {"q": "「ペン___ なまえを かきます。」 (menulis nama dengan pulpen) partikel yang tepat?", "options": ["を", "で", "に", "へ"], "answer": 1, "explain": "Partikel 「で」 juga menunjukkan alat atau cara: 「ペンで かきます」."},
      {"q": "「にほん___ いきます。」 (arah: Jepang) partikel yang tepat?", "options": ["を", "と", "へ", "の"], "answer": 2, "explain": "Partikel 「へ」 (dibaca \"e\") menunjukkan arah tujuan: 「にほんへ いきます」."},
      {"q": "「ともだち___ はなします。」 (berbicara dengan teman) partikel yang tepat?", "options": ["を", "が", "は", "と"], "answer": 3, "explain": "Partikel 「と」 berarti \"dengan\" (bersama seseorang)."},
      {"q": "「わたし___ がくせいです。」 (Saya JUGA mahasiswa) partikel yang tepat?", "options": ["も", "は", "を", "に"], "answer": 0, "explain": "Partikel 「も」 berarti \"juga\" dan menggantikan 「は」."},
      {"q": "「あなたは がくせいです___。」 (kalimat tanya) partikel yang tepat?", "options": ["の", "か", "を", "と"], "answer": 1, "explain": "Partikel 「か」 di akhir kalimat membentuk pertanyaan."},
      {"q": "「わたし___ ほんです。」 (Buku saya) partikel yang tepat?", "options": ["は", "を", "の", "で"], "answer": 2, "explain": "Partikel 「の」 menunjukkan kepemilikan: 「わたしの ほん」."},
      {"q": "「テーブルの うえに ねこ___ います。」 partikel yang tepat?", "options": ["を", "は", "で", "が"], "answer": 3, "explain": "Untuk menyatakan keberadaan makhluk hidup, objek ditandai 「が」: 「ねこが います」."},
      {"q": "「あした ともだち___ あいます。」 (bertemu teman) partikel yang tepat?", "options": ["に", "を", "で", "の"], "answer": 0, "explain": "Kata kerja 「あいます」 memakai partikel 「に」 untuk orang yang ditemui."},
      {"q": "「パン___ たべます。」 partikel yang tepat?", "options": ["で", "を", "に", "へ"], "answer": 1, "explain": "Roti adalah objek yang dimakan, jadi memakai 「を」."},
      {"q": "「としょかん___ ほんを よみます。」 (membaca buku di perpustakaan) partikel yang tepat?", "options": ["を", "に", "で", "の"], "answer": 2, "explain": "Tempat berlangsungnya aksi membaca ditandai 「で」."},
      {"q": "「まいあさ 6じ___ おきます。」 partikel yang tepat?", "options": ["で", "を", "が", "に"], "answer": 3, "explain": "Waktu spesifik (jam) memakai 「に」: 「6じに おきます」."},
      {"q": "「これは わたし___ かばんです。」 partikel yang tepat?", "options": ["の", "を", "で", "と"], "answer": 0, "explain": "「わたしの かばん」 = tas saya (kepemilikan)."},
      {"q": "「たなかさんも せんせい___。」 (Apakah Tanaka juga guru?) partikel akhir yang tepat?", "options": ["を", "ですか", "の", "に"], "answer": 1, "explain": "Kalimat tanya diakhiri 「ですか」, dengan partikel 「か」 sebagai penanda tanya."},
      {"q": "「わたしは コーヒー___ のみます。そして、ともだち___ コーヒーを のみます。」 (teman JUGA) partikel kedua yang tepat?", "options": ["は", "を", "も", "で"], "answer": 2, "explain": "Teman juga minum kopi: 「ともだちも」. Partikel 「も」 = juga."},
      {"q": "「でんしゃ___ かいしゃへ いきます。」 (pergi ke kantor naik kereta) partikel yang tepat?", "options": ["を", "に", "が", "で"], "answer": 3, "explain": "Alat transportasi ditandai 「で」: 「でんしゃで いきます」."},
      {"q": "「わたしは かぞく___ にほんへ いきます。」 (pergi bersama keluarga) partikel yang tepat?", "options": ["と", "を", "で", "が"], "answer": 0, "explain": "「かぞくと」 = bersama keluarga."},
      {"q": "「えいが___ すきです。」 (suka film) partikel yang tepat?", "options": ["を", "が", "に", "で"], "answer": 1, "explain": "Pola 「〜が すきです」 memakai partikel 「が」."},
      {"q": "「ここ___ しゃしんを とります。」 (memotret di sini) partikel yang tepat?", "options": ["を", "に", "で", "の"], "answer": 2, "explain": "Tempat berlangsungnya aksi memotret ditandai 「で」."},
      {"q": "「きょうしつ___ せんせいが います。」 (di kelas ada guru) partikel yang tepat?", "options": ["で", "を", "と", "に"], "answer": 3, "explain": "Tempat keberadaan dengan 「います/あります」 memakai 「に」."},
      {"q": "「これは にほんご___ ほんです。」 (buku bahasa Jepang) partikel yang tepat?", "options": ["の", "を", "が", "と"], "answer": 0, "explain": "「にほんごの ほん」 = buku (tentang) bahasa Jepang. 「の」 menghubungkan dua kata benda."},

      // ===== DOKKAI (26-35) =====
      {"q": "「わたしは まいにち 6じに おきます。あさごはんを たべます。それから バスで がっこうへ いきます。」\n\nPertanyaan: Orang ini pergi ke sekolah naik apa?", "options": ["Bus", "Kereta", "Sepeda", "Berjalan kaki"], "answer": 0, "explain": "「バスで がっこうへ いきます」 = pergi ke sekolah naik bus."},
      {"q": "「わたしの しゅみは えいがです。にちようびに ともだちと えいがを みます。きのうも えいがを みました。」\n\nPertanyaan: Apa hobi orang ini?", "options": ["Membaca buku", "Menonton film", "Berenang", "Memasak"], "answer": 1, "explain": "「しゅみは えいがです」 = hobinya film. 「しゅみ」 = hobi."},
      {"q": "「きょうは あついです。わたしは うみへ いきます。うみで およぎます。ともだちも いきます。」\n\nPertanyaan: Apa yang dilakukan orang ini di laut?", "options": ["Memancing", "Berjemur", "Berenang", "Makan"], "answer": 2, "explain": "「うみで およぎます」 = berenang di laut."},
      {"q": "「わたしの かぞくは ごにんです。ちちと ははと あにと いもうとと わたしです。いもうとは じゅっさいです。」\n\nPertanyaan: Ada berapa orang dalam keluarga ini?", "options": ["3 orang", "4 orang", "6 orang", "5 orang"], "answer": 3, "explain": "「ごにん」 = lima orang. Disebutkan: ayah, ibu, kakak laki-laki, adik perempuan, dan saya."},
      {"q": "「たなかさんは まいあさ しんぶんを よみます。そして コーヒーを のみます。あさごはんは たべません。」\n\nPertanyaan: Apa yang TIDAK dilakukan Tanaka setiap pagi?", "options": ["Sarapan", "Membaca koran", "Minum kopi", "Semuanya dilakukan"], "answer": 0, "explain": "「あさごはんは たべません」 = tidak sarapan."},
      {"q": "「きのうは あめでした。わたしは うちに いました。うちで ほんを よみました。テレビも みました。」\n\nPertanyaan: Bagaimana cuaca kemarin?", "options": ["Cerah", "Hujan", "Berangin", "Bersalju"], "answer": 1, "explain": "「きのうは あめでした」 = kemarin hujan."},
      {"q": "「わたしは スーパーへ いきました。りんごと みかんを かいました。りんごは 300えんでした。」\n\nPertanyaan: Orang ini pergi ke mana?", "options": ["Bank", "Sekolah", "Supermarket", "Stasiun"], "answer": 2, "explain": "「スーパーへ いきました」 = pergi ke supermarket."},
      {"q": "「スミスさんは アメリカじんです。いま にほんに すんでいます。にほんごの がっこうで べんきょうしています。」\n\nPertanyaan: Smith berasal dari negara mana?", "options": ["Jepang", "Inggris", "Indonesia", "Amerika"], "answer": 3, "explain": "「アメリカじんです」 = orang Amerika."},
      {"q": "「わたしは にちようびに ともだちの うちへ いきます。いっしょに ごはんを つくります。とても たのしいです。」\n\nPertanyaan: Apa yang mereka lakukan bersama?", "options": ["Memasak", "Berbelanja", "Menonton TV", "Belajar"], "answer": 0, "explain": "「いっしょに ごはんを つくります」 = memasak (membuat makanan) bersama."},
      {"q": "「えきの まえに パンやが あります。パンやの となりに はなやが あります。わたしは まいあさ パンを かいます。」\n\nPertanyaan: Toko bunga (はなや) ada di mana?", "options": ["Di depan sekolah", "Di sebelah toko roti", "Di dalam stasiun", "Di seberang bank"], "answer": 1, "explain": "「パンやの となりに はなやが あります」 = toko bunga di sebelah toko roti."},

      // ===== LISTENING (36-50) =====
      {"q": "🎧 Dengarkan audio, lalu pilih arti yang tepat:", "audio": "おはようございます", "options": ["Selamat pagi", "Selamat siang", "Selamat malam", "Terima kasih"], "answer": 0, "explain": "Audio: 「おはようございます」 = Selamat pagi."},
      {"q": "🎧 Dengarkan audio, lalu pilih arti yang tepat:", "audio": "ありがとうございます", "options": ["Maaf", "Sama-sama", "Terima kasih", "Selamat tidur"], "answer": 2, "explain": "Audio: 「ありがとうございます」 = Terima kasih."},
      {"q": "🎧 Dengarkan audio, lalu pilih arti yang tepat:", "audio": "いただきます", "options": ["Aku pulang", "Selamat makan (sebelum makan)", "Terima kasih atas makanannya", "Sampai jumpa"], "answer": 1, "explain": "Audio: 「いただきます」 diucapkan sebelum makan."},
      {"q": "🎧 Dengarkan audio, lalu pilih arti yang tepat:", "audio": "さようなら", "options": ["Selamat pagi", "Salam kenal", "Selamat datang", "Selamat tinggal"], "answer": 3, "explain": "Audio: 「さようなら」 = Selamat tinggal / sampai jumpa."},
      {"q": "🎧 Dengarkan audio, lalu pilih arti yang tepat:", "audio": "わたしは がくせいです", "options": ["Saya mahasiswa/pelajar", "Saya guru", "Saya karyawan", "Saya dokter"], "answer": 0, "explain": "Audio: 「わたしは がくせいです」 = Saya pelajar/mahasiswa."},
      {"q": "🎧 Dengarkan audio, lalu pilih arti yang tepat:", "audio": "みずを のみます", "options": ["Makan nasi", "Minum air", "Membaca buku", "Menonton TV"], "answer": 1, "explain": "Audio: 「みずを のみます」 = minum air."},
      {"q": "🎧 Dengarkan audio, lalu tentukan angka yang disebutkan:", "audio": "さんじです", "options": ["Jam 2", "Jam 4", "Jam 3", "Jam 5"], "answer": 2, "explain": "Audio: 「さんじ」 = jam 3."},
      {"q": "🎧 Dengarkan audio, lalu pilih arti yang tepat:", "audio": "あしたは にちようびです", "options": ["Kemarin hari Minggu", "Hari ini hari Minggu", "Besok hari Senin", "Besok hari Minggu"], "answer": 3, "explain": "Audio: 「あした」 = besok, 「にちようび」 = hari Minggu."},
      {"q": "🎧 Dengarkan audio, lalu pilih arti yang tepat:", "audio": "ここに なまえを かいてください", "options": ["Tolong tulis nama di sini", "Tolong baca buku ini", "Tolong tunggu di sini", "Tolong duduk di sini"], "answer": 0, "explain": "Audio: 「かいてください」 = tolong tulis. 「なまえ」 = nama."},
      {"q": "🎧 Dengarkan audio, lalu pilih arti yang tepat:", "audio": "これは いくらですか", "options": ["Ini apa?", "Ini berapa harganya?", "Ini punya siapa?", "Ini di mana?"], "answer": 1, "explain": "Audio: 「いくらですか」 = berapa harganya?"},
      {"q": "🎧 Dengarkan audio, lalu pilih arti yang tepat:", "audio": "いっしょに いきませんか", "options": ["Saya tidak pergi", "Saya sudah pergi", "Bagaimana kalau pergi bersama?", "Tolong pergi"], "answer": 2, "explain": "Audio: 「〜ませんか」 adalah ajakan: bagaimana kalau pergi bersama?"},
      {"q": "🎧 Dengarkan audio, lalu pilih arti yang tepat:", "audio": "わたしは ねこが すきです", "options": ["Saya punya anjing", "Saya tidak suka kucing", "Ada kucing di rumah", "Saya suka kucing"], "answer": 3, "explain": "Audio: 「ねこが すきです」 = suka kucing."},
      {"q": "🎧 Dengarkan audio, lalu pilih arti yang tepat:", "audio": "きのう えいがを みました", "options": ["Kemarin saya menonton film", "Besok saya menonton film", "Sekarang saya menonton film", "Saya ingin menonton film"], "answer": 0, "explain": "Audio: 「きのう」 = kemarin, 「みました」 = (sudah) menonton."},
      {"q": "🎧 Dengarkan audio, lalu pilih arti yang tepat:", "audio": "トイレは どこですか", "options": ["Stasiun di mana?", "Toilet di mana?", "Sekolah di mana?", "Toko di mana?"], "answer": 1, "explain": "Audio: 「トイレ」 = toilet, 「どこですか」 = di mana?"},
      {"q": "🎧 Dengarkan audio, lalu pilih arti yang tepat:", "audio": "ごはんを たべています", "options": ["Ingin makan nasi", "Tidak makan nasi", "Sedang makan nasi", "Mari makan nasi"], "answer": 2, "explain": "Audio: 「たべています」 = sedang makan."}
    ]
  },
    /* ============================================================
     LEVEL 7 — Kata Kerja Lanjutan, Pola & Listening
     ============================================================ */
  'level-7': {
    title: 'Kata Kerja Lanjutan, Pola & Listening',
    kategori: 'N5',
    deskripsi: 'Kombinasi 50 soal: konjugasi kata kerja, pola kalimat lanjutan, dokkai panjang, dan listening.',
    soal: [
      // ===== KATA KERJA LANJUTAN (1-15) =====
      {"q": "Bentuk て dari 「たべます」 adalah...", "options": ["たべって", "たべて", "たべで", "たべいて"], "answer": 1, "explain": "「たべます」 adalah kata kerja Grup 2 (ru-verb). Hilangkan 「ます」 lalu tambahkan 「て」: 「たべます」 → 「たべて」."},
      {"q": "Bentuk て dari 「のみます」 adalah...", "options": ["のみて", "のって", "のんで", "のいて"], "answer": 2, "explain": "Kata kerja berakhiran 「み」 (み/び/に) berubah menjadi 「んで」: 「のみます」 → 「のんで」."},
      {"q": "Bentuk て dari 「いきます」 adalah... (kata kerja tidak beraturan)", "options": ["いきて", "いいて", "いんで", "いって"], "answer": 3, "explain": "「いきます」 adalah pengecualian. Bentuk て-nya 「いって」, bukan 「いいて」."},
      {"q": "Bentuk て dari 「かきます」 adalah...", "options": ["かいて", "かって", "かんで", "かきて"], "answer": 0, "explain": "Kata kerja berakhiran 「き」 berubah menjadi 「いて」: 「かきます」 → 「かいて」."},
      {"q": "Bentuk ない dari 「のみます」 adalah...", "options": ["のみない", "のまない", "のめない", "のんない"], "answer": 1, "explain": "Kata kerja Grup 1: bunyi 「み」 (baris い) berubah menjadi 「ま」 (baris あ) + 「ない」 → 「のまない」."},
      {"q": "Bentuk ない dari 「きます」 (datang) adalah...", "options": ["きない", "きまない", "こない", "くない"], "answer": 2, "explain": "「くる」 adalah kata kerja tidak beraturan. Bentuk ない-nya 「こない」 (tidak datang)."},
      {"q": "Bentuk ない dari 「します」 adalah...", "options": ["さない", "せない", "すない", "しない"], "answer": 3, "explain": "「する」 adalah kata kerja tidak beraturan. Bentuk ない-nya 「しない」 (tidak melakukan)."},
      {"q": "Bentuk kamus (辞書形) dari 「よみます」 adalah...", "options": ["よむ", "よる", "よみる", "よぶ"], "answer": 0, "explain": "Kata kerja Grup 1: bunyi 「み」 berubah menjadi 「む」 → 「よむ」 (membaca)."},
      {"q": "Bentuk kamus dari 「おきます」 (bangun) adalah...", "options": ["おく", "おきる", "おこる", "おきす"], "answer": 1, "explain": "「おきます」 adalah Grup 2. Ganti 「ます」 dengan 「る」 → 「おきる」."},
      {"q": "Bentuk た (lampau biasa) dari 「かいます」 adalah...", "options": ["かいた", "かんだ", "かった", "かえた"], "answer": 2, "explain": "Kata kerja berakhiran 「い」 (い/ち/り) berubah menjadi 「った」: 「かいます」 → 「かった」."},
      {"q": "Bentuk た dari 「のみます」 adalah...", "options": ["のった", "のいた", "のみた", "のんだ"], "answer": 3, "explain": "Sama seperti bentuk て: 「のんで」 → 「のんだ」. Artinya \"(sudah) minum\" dalam bentuk biasa."},
      {"q": "Bentuk potensial (bisa) dari 「いきます」 adalah...", "options": ["いける", "いかれる", "いくできる", "いきれる"], "answer": 0, "explain": "Kata kerja Grup 1: akhiran 「く」 berubah menjadi 「け」 + 「る」 → 「いける」 (bisa pergi)."},
      {"q": "Bentuk potensial dari 「たべます」 adalah...", "options": ["たべれる", "たべられる", "たべける", "たべできる"], "answer": 1, "explain": "Kata kerja Grup 2: ganti 「る」 dengan 「られる」 → 「たべられる」 (bisa makan)."},
      {"q": "Bentuk potensial dari 「します」 adalah...", "options": ["される", "しれる", "できる", "しられる"], "answer": 2, "explain": "Bentuk potensial 「する」 adalah 「できる」 (bisa melakukan)."},
      {"q": "Bentuk 〜ている (informal) dari 「よみます」 yang berarti \"sedang membaca\" adalah...", "options": ["よみている", "よんている", "よって いる", "よんでいる"], "answer": 3, "explain": "Bentuk て dari 「よみます」 adalah 「よんで」, jadi bentuk informalnya 「よんでいる」."},

      // ===== POLA KALIMAT LANJUTAN (16-30) =====
      {"q": "「おんがくを ききながら べんきょうします」 artinya...", "options": ["Setelah mendengarkan musik, saya belajar", "Belajar sambil mendengarkan musik", "Ingin belajar dengan musik", "Tidak belajar karena mendengarkan musik"], "answer": 1, "explain": "Pola 「〜ながら」 (bentuk ます tanpa ます + ながら) = sambil melakukan dua hal sekaligus."},
      {"q": "「あめが ふったら、いきません」 artinya...", "options": ["Karena hujan, saya tidak pergi", "Meskipun hujan, saya pergi", "Kalau hujan, saya tidak pergi", "Saya tidak pergi walau tidak hujan"], "answer": 2, "explain": "Pola 「〜たら」 = kalau / jika (syarat). 「ふったら」 = kalau (turun) hujan."},
      {"q": "「はるに なると、さくらが さきます」 artinya...", "options": ["Saya ingin melihat sakura di musim semi", "Sakura mekar karena musim semi", "Sakura tidak mekar di musim semi", "Kalau musim semi tiba, sakura mekar"], "answer": 3, "explain": "Pola 「〜と」 menyatakan hasil yang pasti/alami: kalau musim semi tiba, sakura mekar."},
      {"q": "「ここに すわっても いいですか」 artinya...", "options": ["Bolehkah saya duduk di sini?", "Dilarang duduk di sini", "Tolong duduk di sini", "Saya ingin duduk di sini"], "answer": 0, "explain": "Pola 「〜ても いいですか」 = bolehkah ~? Dipakai untuk meminta izin."},
      {"q": "「ここで あそんでは いけません」 artinya...", "options": ["Bolehkah bermain di sini?", "Dilarang bermain di sini", "Mari bermain di sini", "Saya sedang bermain di sini"], "answer": 1, "explain": "Pola 「〜ては いけません」 = tidak boleh ~ (larangan)."},
      {"q": "「あした テストが ありますから、べんきょうしなければ なりません」 artinya...", "options": ["Besok ada tes, jadi saya boleh tidak belajar", "Besok ada tes, jadi saya ingin belajar", "Besok ada tes, jadi saya harus belajar", "Besok ada tes, tetapi saya tidak belajar"], "answer": 2, "explain": "Pola 「〜なければ なりません」 = harus ~ (kewajiban)."},
      {"q": "「あした こなくても いいです」 artinya...", "options": ["Besok harus datang", "Besok dilarang datang", "Besok saya pasti datang", "Besok tidak datang pun tidak apa-apa"], "answer": 3, "explain": "Pola 「〜なくても いいです」 = tidak perlu ~ / tidak harus ~."},
      {"q": "「にほんへ いった ことが あります」 artinya...", "options": ["Saya pernah pergi ke Jepang", "Saya akan pergi ke Jepang", "Saya ingin pergi ke Jepang", "Saya tidak pernah ke Jepang"], "answer": 0, "explain": "Pola 「〜た ことが あります」 (bentuk た + ことが あります) = pernah melakukan ~."},
      {"q": "「らいねん にほんへ いく つもりです」 artinya...", "options": ["Tahun depan saya ingin sekali ke Jepang", "Tahun depan saya berniat pergi ke Jepang", "Tahun lalu saya pergi ke Jepang", "Tahun depan saya harus ke Jepang"], "answer": 1, "explain": "Pola 「〜つもりです」 (bentuk kamus + つもり) = berniat / berencana ~."},
      {"q": "「あしたは あめでしょう」 artinya...", "options": ["Besok hujan, tolong bawa payung", "Kemarin mungkin hujan", "Besok mungkin hujan", "Besok tidak akan hujan"], "answer": 2, "explain": "Pola 「〜でしょう」 = kemungkinan/prakiraan (sering dipakai pada ramalan cuaca)."},
      {"q": "「たなかさんは こないかもしれません」 artinya...", "options": ["Tanaka pasti datang", "Tanaka tidak boleh datang", "Tanaka harus datang", "Tanaka mungkin saja tidak datang"], "answer": 3, "explain": "Pola 「〜かもしれません」 = mungkin saja ~ (kemungkinan yang tidak pasti)."},
      {"q": "「かぜを ひいたので、がっこうを やすみました」 artinya...", "options": ["Karena masuk angin, saya tidak masuk sekolah", "Meskipun masuk angin, saya masuk sekolah", "Setelah libur sekolah, saya masuk angin", "Saya ingin libur sekolah karena masuk angin"], "answer": 0, "explain": "Pola 「〜ので」 = karena (alasan, bernada halus). 「かぜを ひきます」 = masuk angin."},
      {"q": "「たくさん べんきょうしたのに、テストは むずかしかったです」 artinya...", "options": ["Karena banyak belajar, tesnya mudah", "Meskipun sudah banyak belajar, tesnya sulit", "Saya belajar banyak setelah tes yang sulit", "Tesnya sulit sehingga saya tidak belajar"], "answer": 1, "explain": "Pola 「〜のに」 = meskipun ~ (hasilnya bertentangan dengan harapan)."},
      {"q": "「この みせは やすいし、おいしいです」 artinya...", "options": ["Toko ini murah, tetapi tidak enak", "Toko ini murah karena enak", "Toko ini murah dan juga enak", "Toko ini tidak murah dan tidak enak"], "answer": 2, "explain": "Pola 「〜し」 dipakai untuk menyebutkan beberapa alasan/hal secara berurutan: murah, dan juga enak."},
      {"q": "「きのう ケーキを たべすぎました」 artinya...", "options": ["Kemarin saya ingin makan kue", "Kemarin saya tidak makan kue", "Kemarin saya membuat kue", "Kemarin saya makan kue terlalu banyak"], "answer": 3, "explain": "Pola 「〜すぎる」 (bentuk ます tanpa ます + すぎる) = terlalu ~ / berlebihan."},

      // ===== DOKKAI PANJANG (31-40) =====
      {"q": "「わたしは なつやすみに おおさかへ いきました。しんかんせんで 3じかん かかりました。おおさかで たこやきを たべました。とても おいしかったです。ともだちと おしろも みました。らいねん また いきたいです。」\n\nPertanyaan: Orang ini pergi ke Osaka naik apa?", "options": ["Pesawat", "Bus", "Shinkansen (kereta peluru)", "Mobil"], "answer": 2, "explain": "「しんかんせんで 3じかん かかりました」 = naik Shinkansen, memakan waktu 3 jam."},
      {"q": "「わたしの がっこうは えきから ちかいです。まいあさ 8じに がっこうへ いきます。じゅぎょうは 9じから 3じまでです。ひるごはんは ともだちと いっしょに たべます。3じに うちへ かえります。それから ほんを よみます。」\n\nPertanyaan: Pelajaran selesai jam berapa?", "options": ["Jam 8", "Jam 9", "Jam 12", "Jam 3"], "answer": 3, "explain": "「9じから 3じまで」 = dari jam 9 sampai jam 3. Jadi pelajaran selesai jam 3."},
      {"q": "「チンさんは びょういんで はたらいています。しごとは 8じから 5じまでです。いそがしいですから、あまり やすみません。でも、にちようびは やすみです。にちようびに かぞくと こうえんへ いきます。」\n\nPertanyaan: Kapan Chin libur?", "options": ["Hari Minggu", "Hari Sabtu", "Setiap hari", "Hari Senin"], "answer": 0, "explain": "「にちようびは やすみです」 = hari Minggu libur."},
      {"q": "「わたしの ちちは 50さいです。ちちは りょうりが じょうずです。まいしゅう どようびに ばんごはんを つくります。ははは りょうりが あまり じょうずじゃ ありません。でも、ははの ケーキは おいしいです。」\n\nPertanyaan: Siapa yang membuat makan malam setiap hari Sabtu?", "options": ["Ibu", "Ayah", "Kakak", "Nenek"], "answer": 1, "explain": "「ちちは ... どようびに ばんごはんを つくります」 = ayah memasak makan malam setiap Sabtu."},
      {"q": "「わたしの しゅみは さんぽです。まいあさ 6じに おきて、こうえんを あるきます。こうえんには きが たくさん あります。ときどき ねこにも あいます。さんぽの あとで、あさごはんを たべます。」\n\nPertanyaan: Apa yang dilakukan orang ini setelah jalan pagi?", "options": ["Pergi ke sekolah", "Tidur lagi", "Sarapan", "Membaca koran"], "answer": 2, "explain": "「さんぽの あとで、あさごはんを たべます」 = setelah jalan-jalan, sarapan."},
      {"q": "「きのう あたまが いたかったです。ねつも ありました。それで びょういんへ いきました。せんせいは ゆっくり やすんでくださいと いいました。くすりを のんで、はやく ねました。きょうは すこし げんきです。」\n\nPertanyaan: Apa yang dikatakan dokter?", "options": ["Tolong banyak berolahraga", "Tolong makan banyak", "Tolong pergi ke sekolah", "Tolong istirahat dengan tenang"], "answer": 3, "explain": "「ゆっくり やすんでください」 = tolong istirahat dengan tenang. 「ねつ」 = demam."},
      {"q": "「きょうは あさから あめです。かぜも つよいです。わたしは かさを もって かいしゃへ いきました。さむかったです。あしたは いい てんきでしょう。ともだちと こうえんへ いく つもりです。」\n\nPertanyaan: Bagaimana cuaca besok menurut bacaan?", "options": ["Cerah/bagus", "Hujan", "Berangin kencang", "Dingin sekali"], "answer": 0, "explain": "「あしたは いい てんきでしょう」 = besok mungkin cuacanya bagus."},
      {"q": "「にちようびに デパートへ いきました。あたらしい かばんを かいたかったです。でも、かばんは たかかったです。それで、やすい くつしたを かいました。そして、レストランで ひるごはんを たべました。」\n\nPertanyaan: Apa yang akhirnya dibeli orang ini?", "options": ["Tas baru", "Kaus kaki murah", "Sepatu", "Baju"], "answer": 1, "explain": "Tas terlalu mahal, jadi 「やすい くつしたを かいました」 = membeli kaus kaki yang murah."},
      {"q": "「わたしは にほんごを べんきょうしています。まいにち ひらがなを 10こ かきます。かんじは むずかしいですから、ゆっくり おぼえます。にほんごの えいがも みます。らいげつ にほんごの しけんが あります。」\n\nPertanyaan: Kapan ujian bahasa Jepang?", "options": ["Besok", "Minggu depan", "Bulan depan", "Tahun depan"], "answer": 2, "explain": "「らいげつ」 = bulan depan."},
      {"q": "「どようびに ともだちの たんじょうびパーティーが ありました。わたしは はなを かって、ともだちの うちへ いきました。みんなで うたを うたいました。ケーキも たべました。かえりは 9じでした。とても たのしかったです。」\n\nPertanyaan: Orang ini pulang jam berapa?", "options": ["Jam 6", "Jam 7", "Jam 8", "Jam 9"], "answer": 3, "explain": "「かえりは 9じでした」 = pulangnya jam 9."},

      // ===== LISTENING (41-50) =====
      {"q": "🎧 Dengarkan audio, lalu pilih arti yang tepat:", "audio": "あしたは あめが ふるでしょう", "options": ["Besok mungkin hujan", "Kemarin hujan", "Besok pasti cerah", "Hari ini hujan deras"], "answer": 0, "explain": "Audio: 「あしたは あめが ふるでしょう」 = Besok mungkin hujan."},
      {"q": "🎧 Dengarkan audio, lalu pilih arti yang tepat:", "audio": "わたしは まいあさ ジョギングを します", "options": ["Saya ingin jogging malam hari", "Saya jogging setiap pagi", "Saya tidak pernah jogging", "Kemarin saya jogging"], "answer": 1, "explain": "Audio: 「まいあさ」 = setiap pagi, 「ジョギングを します」 = jogging."},
      {"q": "🎧 Dengarkan audio, lalu pilih arti yang tepat:", "audio": "らいしゅう ともだちと にほんへ いくつもりです", "options": ["Minggu lalu saya pergi ke Jepang bersama teman", "Saya ingin sekali ke Jepang sendirian", "Minggu depan saya berniat pergi ke Jepang bersama teman", "Saya tidak jadi pergi ke Jepang"], "answer": 2, "explain": "Audio: 「らいしゅう」 = minggu depan, 「〜つもりです」 = berniat."},
      {"q": "🎧 Dengarkan audio, lalu pilih arti yang tepat:", "audio": "きょうは あついですから、みずを たくさん のんでください", "options": ["Hari ini dingin, tolong pakai jaket", "Hari ini panas, tolong jangan minum air", "Hari ini hujan, tolong tunggu di dalam", "Hari ini panas, tolong banyak minum air"], "answer": 3, "explain": "Audio: 「あついですから」 = karena panas, 「〜てください」 = tolong lakukan ~."},
      {"q": "🎧 Dengarkan audio, lalu pilih arti yang tepat:", "audio": "この レストランは やすいし、おいしいです", "options": ["Restoran ini murah dan juga enak", "Restoran ini mahal tetapi enak", "Restoran ini jauh dan sepi", "Restoran ini murah tetapi tidak enak"], "answer": 0, "explain": "Audio: 「〜し」 menyambung beberapa sifat: murah, dan juga enak."},
      {"q": "🎧 Dengarkan audio, lalu pilih arti yang tepat:", "audio": "あした テストが ありますから、べんきょうしなければ なりません", "options": ["Besok tidak ada tes, jadi saya santai", "Besok ada tes, jadi saya harus belajar", "Kemarin ada tes, jadi saya belajar", "Besok ada tes, tetapi saya boleh tidak belajar"], "answer": 1, "explain": "Audio: 「〜なければ なりません」 = harus ~."},
      {"q": "🎧 Dengarkan audio, lalu pilih arti yang tepat:", "audio": "にほんへ いった ことが ありません", "options": ["Saya sedang di Jepang", "Saya akan pergi ke Jepang", "Saya belum pernah pergi ke Jepang", "Saya pernah pergi ke Jepang"], "answer": 2, "explain": "Audio: 「〜た ことが ありません」 = belum pernah ~."},
      {"q": "🎧 Dengarkan audio, lalu pilih arti yang tepat:", "audio": "おんがくを ききながら あるきます", "options": ["Berjalan setelah mendengarkan musik", "Ingin mendengarkan musik", "Mendengarkan musik di rumah", "Berjalan sambil mendengarkan musik"], "answer": 3, "explain": "Audio: 「〜ながら」 = sambil."},
      {"q": "🎧 Dengarkan audio, lalu pilih arti yang tepat:", "audio": "かぜを ひいたので、きょうは がっこうを やすみます", "options": ["Karena masuk angin, hari ini saya libur sekolah", "Meskipun masuk angin, saya tetap sekolah", "Besok saya ingin libur sekolah", "Kemarin saya libur karena hujan"], "answer": 0, "explain": "Audio: 「〜ので」 = karena. 「かぜを ひきます」 = masuk angin, 「やすみます」 = libur/tidak masuk."},
      {"q": "🎧 Dengarkan audio, lalu pilih arti yang tepat:", "audio": "ここで しゃしんを とっては いけません", "options": ["Bolehkah memotret di sini?", "Dilarang memotret di sini", "Tolong potret saya di sini", "Saya ingin memotret di sini"], "answer": 1, "explain": "Audio: 「〜ては いけません」 = dilarang / tidak boleh ~."}
    ]
  },
     /* ============================================================
     LEVEL 8 — Angka, Counter & Belanja
     ============================================================ */
  'level-8': {
    title: 'Angka, Counter & Belanja',
    kategori: 'N5',
    deskripsi: 'Kombinasi 50 soal: angka & counter (助数詞), percakapan belanja, pola kalimat praktis, dan listening angka.',
    soal: [
      // ===== ANGKA & COUNTER (1-15) =====
      {"q": "「一個」 (いっこ) artinya...", "options": ["satu buah (benda kecil/bulat)", "satu orang", "satu lembar", "satu ekor"], "answer": 0, "explain": "Counter 「〜個」 (ko) untuk benda kecil dan bulat seperti apel, telur, atau koin. 「一個」 dibaca 「いっこ」."},
      {"q": "Benda panjang dan silinder seperti pensil atau botol dihitung dengan counter...", "options": ["「〜個」", "「〜本」", "「〜枚」", "「〜台」"], "answer": 1, "explain": "Counter 「〜本」 (hon/pon/bon) dipakai untuk benda panjang, misalnya pensil, botol, dan pohon."},
      {"q": "「ひこうきが さんだい あります」 artinya...", "options": ["Ada tiga pesawat", "Ada tiga burung", "Ada tiga lembar kertas", "Ada tiga buku"], "answer": 0, "explain": "「〜台」 (dai) untuk mesin dan kendaraan. 「ひこうき」 = pesawat, jadi 「さんだい」 = tiga unit."},
      {"q": "「かみを さんまい ください」 artinya...", "options": ["Tolong beri saya tiga buku", "Tolong beri saya tiga batang", "Tolong beri saya tiga orang", "Tolong beri saya tiga lembar kertas"], "answer": 3, "explain": "「〜枚」 (mai) untuk benda tipis dan pipih seperti kertas, baju, dan piring. 「かみ」 = kertas."},
      {"q": "「ねこが にひき います」 artinya...", "options": ["Ada satu ekor kucing", "Ada tiga ekor kucing", "Ada dua ekor kucing", "Tidak ada kucing"], "answer": 2, "explain": "「〜匹」 (hiki) untuk hewan kecil. 「にひき」 = dua ekor."},
      {"q": "Cara mengatakan 'tiga orang' dalam bahasa Jepang adalah...", "options": ["「さんびき」", "「さんだい」", "「さんさつ」", "「さんにん」"], "answer": 3, "explain": "Orang dihitung dengan 「〜人」 (nin): 「さんにん」 = 3 orang. Pengecualian: 「ひとり」 (1 orang) dan 「ふたり」 (2 orang)."},
      {"q": "「ほんを ごさつ かいました」 artinya...", "options": ["Membeli lima batang pensil", "Membeli lima buku", "Membeli lima lembar kertas", "Membeli lima gelas"], "answer": 1, "explain": "「〜冊」 (satsu) adalah counter untuk buku. 「ごさつ」 = lima buah."},
      {"q": "Mobil dan televisi dihitung dengan counter...", "options": ["「〜匹」", "「〜杯」", "「〜台」", "「〜冊」"], "answer": 2, "explain": "「〜台」 (dai) dipakai untuk mesin, kendaraan, dan peralatan elektronik."},
      {"q": "「コーヒーを いっぱい ください」 artinya...", "options": ["Tolong beri saya satu bungkus kopi", "Tolong beri saya satu kilo kopi", "Tolong beri saya satu botol kopi", "Tolong beri saya satu cangkir kopi"], "answer": 3, "explain": "「〜杯」 (hai/pai/bai) untuk minuman dalam gelas atau cangkir. 「いっぱい」 = satu cangkir."},
      {"q": "Cara membaca 「六本」 (enam batang) yang benar adalah...", "options": ["「ろくほん」", "「ろっぽん」", "「ろくぽん」", "「ろっほん」"], "answer": 1, "explain": "Untuk angka 6, counter 「本」 berubah menjadi 「ろっぽん」. Angka lain yang berubah: 「いっぽん」, 「さんぼん」, 「はっぽん」, 「じゅっぽん」."},
      {"q": "Cara membaca 「三匹」 (tiga ekor) yang benar adalah...", "options": ["「さんひき」", "「さんぴき」", "「さんびき」", "「さんぱき」"], "answer": 2, "explain": "Setelah angka 3, 「ひき」 berubah menjadi 「びき」, jadi 「さんびき」. Pada angka 1, 6, 8, dan 10 menjadi 「ぴき」."},
      {"q": "Cara membaca 「二人」 (dua orang) yang benar adalah...", "options": ["「ににん」", "「ふたり」", "「ふたつ」", "「にひき」"], "answer": 1, "explain": "「二人」 dibaca 「ふたり」. Ini bentuk khusus, begitu juga 「一人」 yang dibaca 「ひとり」."},
      {"q": "Cara membaca angka 3.000 yang benar adalah...", "options": ["「さんせん」", "「さんひゃく」", "「みっせん」", "「さんぜん」"], "answer": 3, "explain": "3.000 dibaca 「さんぜん」. Bunyi 「せん」 berubah menjadi 「ぜん」 setelah angka 3."},
      {"q": "Angka 10.000 dalam bahasa Jepang dibaca...", "options": ["「いちまん」", "「じゅうせん」", "「ひゃくせん」", "「いちせん」"], "answer": 0, "explain": "10.000 = 「いちまん」 (一万). 「まん」 adalah satuan sepuluh ribu."},
      {"q": "Cara membaca angka 600 yang benar adalah...", "options": ["「ろくひゃく」", "「ろっぴゃく」", "「ろくぴゃく」", "「ろっびゃく」"], "answer": 1, "explain": "600 = 「ろっぴゃく」. Bunyi 「ひゃく」 berubah pada angka 3 (さんびゃく), 6 (ろっぴゃく), dan 8 (はっぴゃく)."},

      // ===== PERCAKAPAN BELANJA (16-30) =====
      {"q": "Situasi: Di toko buah.\nA: 「いらっしゃいませ。」\nB: 「すみません、りんごは いくらですか。」\nA: 「___」\n\nJawaban yang tepat adalah...", "options": ["「ひとつ 100えんです」", "「ふたりです」", "「おすすめです」", "「あそこです」"], "answer": 0, "explain": "「いくらですか」 menanyakan harga, jadi dijawab dengan harga: 「ひとつ 100えんです」 (satu buah 100 yen)."},
      {"q": "Situasi: Di restoran.\nA: 「ごちゅうもんは？」\nB: 「___」\n\nJawaban yang tepat adalah...", "options": ["「500えんです」", "「ラーメンを ひとつ ください」", "「ありがとうございました」", "「さんにんです」"], "answer": 1, "explain": "「ごちゅうもんは？」 = Mau pesan apa? Dijawab dengan 「〜を ください」."},
      {"q": "Situasi: Di toko buah.\nA: 「りんごを ください。」\nB: 「はい。いくつ ですか。」\nA: 「___」\n\nJawaban yang tepat adalah...", "options": ["「300えんです」", "「ここです」", "「みっつ ください」", "「はい、あります」"], "answer": 2, "explain": "「いくつ ですか」 menanyakan jumlah benda. Dijawab dengan hitungan, misalnya 「みっつ」 (tiga buah)."},
      {"q": "Situasi: Di kasir.\nA: 「ぜんぶで 1,200えんです。」\nB: 「___」\n\nJawaban yang tepat adalah...", "options": ["「いただきます」", "「いくらですか」", "「おすすめは なんですか」", "「はい、1,200えんです。どうぞ」"], "answer": 3, "explain": "Saat membayar, kita menyerahkan uang sambil berkata 「どうぞ」."},
      {"q": "Situasi: Setelah membayar di toko.\nA: 「ありがとうございました。」\nB: 「___」\n\nUcapan yang tepat untuk meminta struk adalah...", "options": ["「レシートを ください」", "「ごちそうさまでした」", "「いただきます」", "「ただいま」"], "answer": 0, "explain": "「レシート」 = struk. Meminta struk: 「レシートを ください」."},
      {"q": "Situasi: Di toko pakaian.\nA: 「これは 5,000えんです。」\nB: 「___」\n\nJawaban B yang cocok untuk menyatakan harganya terasa mahal adalah...", "options": ["「とても やすいです」", "「ちょっと たかいですね」", "「おなかが すきました」", "「みっつ ください」"], "answer": 1, "explain": "「ちょっと たかいですね」 = agak mahal ya. 「たかい」 = mahal, 「やすい」 = murah."},
      {"q": "Situasi: Di restoran.\nA: 「おすすめは なんですか。」\nB: 「___」\n\nJawaban yang tepat adalah...", "options": ["「はい、おねがいします」", "「3じです」", "「カレーライスが おすすめです」", "「ふたりです」"], "answer": 2, "explain": "「おすすめ」 = rekomendasi. Dijawab dengan menyebut menu: 「カレーライスが おすすめです」."},
      {"q": "Situasi: Di kafe.\nA: 「なにを のみますか。」\nB: 「___」\n\nJawaban yang tepat adalah...", "options": ["「いくらですか」", "「レシートです」", "「ありません」", "「コーヒーを おねがいします」"], "answer": 3, "explain": "Memesan minuman dengan sopan: 「コーヒーを おねがいします」."},
      {"q": "Situasi: Pelayan menyambut tamu di restoran.\nA: 「いらっしゃいませ。なんにん ですか。」\nB: 「___」\n\nJawaban yang tepat adalah...", "options": ["「ふたりです」", "「ふたつです」", "「にほんです」", "「にまいです」"], "answer": 0, "explain": "「なんにん」 menanyakan jumlah orang. Dijawab 「ふたりです」 (berdua)."},
      {"q": "Situasi: Di pasar.\nA: 「この さかなは ひとつ 300えんです。」\nB: 「じゃあ、ふたつ ください。」\n\nPertanyaan: Berapa yang harus dibayar B?", "options": ["300 yen", "600 yen", "900 yen", "200 yen"], "answer": 1, "explain": "300 yen × 2 = 600 yen. 「ふたつ」 = dua buah."},
      {"q": "Situasi: Di toko pakaian.\nB: 「すみません、Mサイズの シャツは ありますか。」\nA: 「___」\n\nJawaban yang tepat adalah...", "options": ["「いいえ、がくせいです」", "「ええ、ねます」", "「はい、あります。どうぞ」", "「3じに おきます」"], "answer": 2, "explain": "「〜は ありますか」 = apakah ada ~? Dijawab 「はい、あります」 atau 「すみません、ありません」."},
      {"q": "Situasi: Di restoran cepat saji.\nA: 「こちらで めしあがりますか。おもちかえりですか。」\nB: 「___」\n\nJawaban B untuk meminta dibawa pulang adalah...", "options": ["「ここで たべます」", "「いくらですか」", "「おいしかったです」", "「もちかえりで おねがいします」"], "answer": 3, "explain": "「もちかえり」 = dibawa pulang (take-away). 「ここで たべます」 berarti makan di tempat."},
      {"q": "Situasi: Di kasir.\nA: 「500えんです。」\nB: 「すみません、1,000えんです。」\nA: 「はい、おつりは 500えんです。」\n\nPertanyaan: Berapa kembalian yang diterima B?", "options": ["500 yen", "1.000 yen", "1.500 yen", "50 yen"], "answer": 0, "explain": "「おつり」 = uang kembalian. A menyebut 「おつりは 500えん」, jadi kembaliannya 500 yen."},
      {"q": "Situasi: Di pusat perbelanjaan.\nA: 「くつうりばは どこですか。」\nB: 「___」\n\nJawaban yang tepat adalah...", "options": ["「ごひゃくえんです」", "「にかいです」", "「ふたりです」", "「あおいです」"], "answer": 1, "explain": "「どこですか」 menanyakan tempat. 「くつうりば」 = bagian sepatu, dan 「にかい」 = lantai 2."},
      {"q": "Situasi: Setelah makan di restoran.\nA: 「ありがとうございました。」\nB: 「___」\n\nUcapan B yang tepat adalah...", "options": ["「いただきます」", "「はじめまして」", "「ごちそうさまでした」", "「いってきます」"], "answer": 2, "explain": "Setelah makan, kita mengucapkan 「ごちそうさまでした」 sebagai tanda terima kasih atas hidangannya."},

      // ===== POLA KALIMAT PRAKTIS (31-40) =====
      {"q": "「みずを ください」 artinya...", "options": ["Tolong beri saya air", "Saya sedang minum air", "Saya ingin pergi mengambil air", "Bolehkah saya minum air?"], "answer": 0, "explain": "Pola 「〜を ください」 = tolong beri saya ~. Dipakai saat meminta atau memesan sesuatu."},
      {"q": "Lengkapi: 「この ペンは ___ ですか。」 (Berapa harga pulpen ini?)", "options": ["なん", "いくら", "どこ", "だれ"], "answer": 1, "explain": "Pola 「〜は いくらですか」 dipakai untuk menanyakan harga."},
      {"q": "「ラーメンを ふたつ おねがいします」 artinya...", "options": ["Saya suka dua mangkuk ramen", "Saya sudah makan dua mangkuk ramen", "Tolong dua porsi ramen", "Saya tidak pesan ramen"], "answer": 2, "explain": "Pola 「〜を おねがいします」 = tolong ~ (permintaan sopan, sering untuk memesan)."},
      {"q": "「あたらしい くるまが ほしいです」 artinya...", "options": ["Saya sudah membeli mobil baru", "Saya sedang naik mobil baru", "Mobil baru itu mahal", "Saya ingin mobil baru"], "answer": 3, "explain": "Pola 「〜が ほしいです」 = ingin memiliki ~ (untuk benda). Untuk keinginan melakukan sesuatu dipakai 「〜たいです」."},
      {"q": "「トイレは どこに ありますか」 artinya...", "options": ["Toilet itu bersih", "Di mana toiletnya?", "Saya ingin ke toilet", "Apakah ada toilet?"], "answer": 1, "explain": "Pola 「〜は どこに ありますか」 = ~ ada di mana? Dipakai untuk menanyakan lokasi benda."},
      {"q": "「その かばんを みせてください」 artinya...", "options": ["Saya membeli tas itu", "Tas itu punya siapa?", "Tolong tunjukkan tas itu", "Saya tidak suka tas itu"], "answer": 2, "explain": "Pola 「〜を みせてください」 = tolong tunjukkan ~. 「みせて」 adalah bentuk て dari 「みせます」."},
      {"q": "Dalam kalimat 「わたしは カレーに します」, pola 「〜に します」 menyatakan...", "options": ["Saya sudah makan kari", "Saya tidak suka kari", "Saya sedang memasak kari", "Saya memutuskan memilih kari"], "answer": 3, "explain": "Pola 「〜に します」 dipakai untuk memutuskan pilihan, misalnya saat memilih menu."},
      {"q": "「カードで おねがいします」 artinya...", "options": ["Tolong (saya bayar) dengan kartu", "Tolong tunjukkan kartunya", "Saya ingin membeli kartu", "Kartunya ada di mana?"], "answer": 0, "explain": "Pola 「〜で おねがいします」 dengan partikel 「で」 (alat/cara) dipakai untuk metode pembayaran. Contoh lain: 「げんきんで」 (tunai)."},
      {"q": "Lengkapi: 「ちいさい サイズは ___」 (Apakah ada ukuran kecil?)", "options": ["ありました", "ありますか", "いません", "いますか"], "answer": 1, "explain": "Pola 「〜は ありますか」 = apakah ada ~? Untuk benda mati dipakai 「あります」, sedangkan 「います」 untuk makhluk hidup."},
      {"q": "「あかと あおと どちらが いいですか」 artinya...", "options": ["Merah dan biru, saya suka dua-duanya", "Merah dan biru sama-sama mahal", "Saya ingin membeli merah dan biru", "Merah dan biru, mana yang bagus?"], "answer": 3, "explain": "Pola 「AとBと どちらが いいですか」 = A dan B, mana yang lebih baik? Dijawab misalnya 「あおが いいです」."},

      // ===== LISTENING (41-50) =====
      {"q": "🎧 Dengarkan audio, lalu pilih harga yang tepat:", "audio": "ごひゃくえんです", "options": ["500 yen", "50 yen", "5.000 yen", "5 yen"], "answer": 0, "explain": "Audio: 「ごひゃくえん」 = 500 yen."},
      {"q": "🎧 Dengarkan audio, lalu pilih harga yang tepat:", "audio": "せんにひゃくえんです", "options": ["120 yen", "1.200 yen", "2.100 yen", "12.000 yen"], "answer": 1, "explain": "Audio: 「せん」 = 1.000, 「にひゃく」 = 200, jadi 「せんにひゃくえん」 = 1.200 yen."},
      {"q": "🎧 Dengarkan audio, lalu pilih harga yang tepat:", "audio": "さんぜんえんです", "options": ["300 yen", "13.000 yen", "3.000 yen", "30.000 yen"], "answer": 2, "explain": "Audio: 「さんぜん」 = 3.000, jadi 3.000 yen."},
      {"q": "🎧 Dengarkan audio, lalu pilih arti yang tepat:", "audio": "りんごを みっつ ください", "options": ["Tolong beri saya dua apel", "Saya sudah membeli tiga apel", "Berapa harga apel?", "Tolong beri saya tiga apel"], "answer": 3, "explain": "Audio: 「みっつ」 = tiga buah, 「〜を ください」 = tolong beri saya ~."},
      {"q": "🎧 Dengarkan audio, lalu pilih total harga yang tepat:", "audio": "ぜんぶで ろっぴゃくえんです", "options": ["Total 800 yen", "Total 60 yen", "Total 600 yen", "Total 6.000 yen"], "answer": 2, "explain": "Audio: 「ぜんぶで」 = totalnya, 「ろっぴゃくえん」 = 600 yen."},
      {"q": "🎧 Dengarkan audio, lalu pilih arti yang tepat:", "audio": "コーヒーを にはい おねがいします", "options": ["Tolong satu cangkir kopi", "Tolong dua cangkir kopi", "Tolong dua botol kopi", "Saya tidak minum kopi"], "answer": 1, "explain": "Audio: 「にはい」 = dua cangkir, 「おねがいします」 = tolong."},
      {"q": "🎧 Dengarkan audio, lalu pilih arti yang tepat:", "audio": "レシートを ください", "options": ["Tolong beri saya tas belanja", "Tolong beri saya kembalian", "Tolong beri saya menu", "Tolong beri saya struk"], "answer": 3, "explain": "Audio: 「レシート」 = struk belanja."},
      {"q": "🎧 Dengarkan audio, lalu pilih arti yang tepat:", "audio": "ちょっと たかいですね", "options": ["Agak mahal ya", "Murah sekali ya", "Enak sekali ya", "Sangat besar ya"], "answer": 0, "explain": "Audio: 「ちょっと」 = agak, 「たかい」 = mahal."},
      {"q": "🎧 Dengarkan audio, lalu pilih harga yang tepat:", "audio": "いちまんえんです", "options": ["1.000 yen", "100.000 yen", "100 yen", "10.000 yen"], "answer": 3, "explain": "Audio: 「いちまん」 = 10.000, jadi 10.000 yen."},
      {"q": "🎧 Dengarkan audio, lalu pilih arti yang tepat:", "audio": "ほんを よんさつ かいました", "options": ["Saya membeli dua buku", "Saya ingin membeli empat buku", "Saya membeli empat buku", "Saya membaca empat buku"], "answer": 2, "explain": "Audio: 「よんさつ」 = empat buku, 「かいました」 = (sudah) membeli."}
    ]
  },
     /* ============================================================
     LEVEL 9 — Kanji, Kosakata Lanjutan & Kaiwa Renshuu
     ============================================================ */
  'level-9': {
    title: 'Kanji, Kosakata & Kaiwa Renshuu',
    kategori: 'N5',
    deskripsi: 'Kombinasi 50 soal: kanji gabungan (熟語), kosakata lanjutan, dan latihan percakapan situasional.',
    soal: [
      // ===== KANJI N5 LANJUTAN (1-15) =====
      {"q": "Kanji 「時間」 artinya...", "options": ["waktu", "kereta listrik", "perusahaan", "teman"], "answer": 0, "explain": "「時間」 (じかん) = waktu. 「時」 = waktu/jam, 「間」 = selang/antara."},
      {"q": "Kanji 「電車」 dibaca...", "options": ["でんわ", "でんしゃ", "てんしゃ", "でんくるま"], "answer": 1, "explain": "「電車」 dibaca 「でんしゃ」 = kereta listrik. 「電」 = listrik (でん), 「車」 = kendaraan (しゃ)."},
      {"q": "Kanji untuk 'perusahaan' adalah...", "options": ["社会", "会話", "会社", "仕事"], "answer": 2, "explain": "「会社」 (かいしゃ) = perusahaan. 「社会」 (しゃかい) = masyarakat, 「会話」 (かいわ) = percakapan, 「仕事」 (しごと) = pekerjaan."},
      {"q": "Kanji 「電話」 dibaca...", "options": ["でんしゃ", "でんき", "でんぽう", "でんわ"], "answer": 3, "explain": "「電話」 dibaca 「でんわ」 = telepon. 「話」 = berbicara (わ/はなす)."},
      {"q": "Kanji 「仕事」 artinya...", "options": ["pekerjaan", "teman", "keluarga", "nama"], "answer": 0, "explain": "「仕事」 (しごと) = pekerjaan. Contoh: 「しごとが いそがしいです」 (pekerjaan sedang sibuk)."},
      {"q": "Kanji 「友達」 dibaca...", "options": ["ゆうたつ", "ともだち", "ともたち", "ゆうだち"], "answer": 1, "explain": "「友達」 dibaca 「ともだち」 = teman. Ini bacaan khusus (kunyomi): 「友」 = とも, 「達」 = だち."},
      {"q": "Kanji 「家族」 artinya...", "options": ["teman", "rumah makan", "keluarga", "perusahaan"], "answer": 2, "explain": "「家族」 (かぞく) = keluarga. 「家」 = rumah, 「族」 = kerabat/suku."},
      {"q": "Kanji untuk 'luar negeri' adalah...", "options": ["国外", "外出", "国語", "外国"], "answer": 3, "explain": "「外国」 (がいこく) = luar negeri. 「外出」 (がいしゅつ) = pergi keluar, 「国語」 (こくご) = bahasa nasional."},
      {"q": "Kanji 「名前」 dibaca...", "options": ["なまえ", "めいぜん", "なぜん", "なまい"], "answer": 0, "explain": "「名前」 dibaca 「なまえ」 = nama. Contoh: 「おなまえは？」 (Siapa nama Anda?)."},
      {"q": "Kanji 「天気」 artinya...", "options": ["hari libur", "sakit", "cuaca", "matahari"], "answer": 2, "explain": "「天気」 (てんき) = cuaca. Hati-hati dengan 「病気」 (びょうき) = sakit."},
      {"q": "Kanji 「毎日」 dibaca...", "options": ["まいひ", "まいにち", "ごにち", "まいび"], "answer": 1, "explain": "「毎日」 dibaca 「まいにち」 = setiap hari. 「毎」 = setiap (まい)."},
      {"q": "Kanji 「分」 pada 「五分」 dibaca...", "options": ["ぶん", "ふん", "ぷん", "わ"], "answer": 1, "explain": "「五分」 dibaca 「ごふん」 (5 menit). Setelah angka 1, 3, 4, 6, 8, 10 berubah menjadi 「ぷん」."},
      {"q": "Kanji 「車」 artinya...", "options": ["telepon", "pekerjaan", "perusahaan", "mobil / kendaraan"], "answer": 3, "explain": "「車」 = mobil/kendaraan (くるま/しゃ). Contoh: 「くるまで いきます」."},
      {"q": "Kanji 「本」 artinya...", "options": ["pohon", "buku", "tangan", "hutan"], "answer": 1, "explain": "「本」 = buku (ほん). Jangan tertukar dengan 「木」 (pohon). Kanji ini juga ada pada 「日本」 (にほん)."},
      {"q": "Kanji 「前」 artinya...", "options": ["belakang", "atas", "depan / sebelum", "luar"], "answer": 2, "explain": "「前」 = depan/sebelum (まえ). Kebalikannya 「後」 (belakang/sesudah). Contoh: 「えきの まえ」."},

      // ===== KOSAKATA LANJUTAN (16-35) =====
      {"q": "「つくります」 artinya...", "options": ["membuat", "mencuci", "menelepon", "membawa"], "answer": 0, "explain": "「つくります」 = membuat. Contoh: 「ケーキを つくります」."},
      {"q": "「あらいます」 artinya...", "options": ["mengirim", "mencuci (benda)", "meminjam", "masuk"], "answer": 1, "explain": "「あらいます」 = mencuci. Contoh: 「てを あらいます」 (mencuci tangan)."},
      {"q": "「せんたくします」 artinya...", "options": ["memasak", "membersihkan kamar", "mencuci pakaian", "pergi keluar"], "answer": 2, "explain": "「せんたく」 = cucian, jadi 「せんたくします」 = mencuci pakaian. Untuk membersihkan ruangan dipakai 「そうじします」."},
      {"q": "「ともだちに ペンを かします」 artinya...", "options": ["Saya meminjam pulpen dari teman", "Saya membeli pulpen untuk teman", "Saya kehilangan pulpen teman", "Saya meminjamkan pulpen kepada teman"], "answer": 3, "explain": "「かします」 = meminjamkan, sedangkan 「かります」 = meminjam."},
      {"q": "「としょかんで ほんを かります」 artinya...", "options": ["Meminjam buku di perpustakaan", "Membeli buku di perpustakaan", "Meminjamkan buku di perpustakaan", "Membaca buku di perpustakaan"], "answer": 0, "explain": "「かります」 = meminjam. Contoh: 「ほんを かります」."},
      {"q": "「ははに てがみを おくります」 artinya...", "options": ["Saya menerima surat dari ibu", "Saya membaca surat ibu", "Saya mengirim surat kepada ibu", "Saya menulis nama ibu"], "answer": 2, "explain": "「おくります」 = mengirim. 「てがみ」 = surat. Partikel 「に」 menunjukkan penerima."},
      {"q": "「あした ともだちと でかけます」 artinya...", "options": ["Besok saya mengunjungi teman di rumah", "Besok saya pergi keluar bersama teman", "Besok saya menunggu teman", "Besok teman datang ke rumah"], "answer": 1, "explain": "「でかけます」 = pergi keluar (bepergian dari rumah)."},
      {"q": "「ひこうきは 10じに くうこうに つきます」 artinya...", "options": ["Pesawat berangkat dari bandara jam 10", "Pesawat terlambat jam 10", "Pesawat mendarat di bandara jam 9", "Pesawat tiba di bandara jam 10"], "answer": 3, "explain": "「つきます」 = tiba. 「ひこうき」 = pesawat, 「くうこう」 = bandara."},
      {"q": "「ひこうき」 artinya...", "options": ["kereta", "bus", "pesawat", "kapal"], "answer": 2, "explain": "「ひこうき」 = pesawat terbang."},
      {"q": "「くうこう」 artinya...", "options": ["stasiun", "bandara", "pelabuhan", "terminal bus"], "answer": 1, "explain": "「くうこう」 = bandara."},
      {"q": "「くすり」 artinya...", "options": ["obat", "penyakit", "rumah sakit", "dokter"], "answer": 0, "explain": "「くすり」 = obat. Contoh: 「くすりを のみます」. Penyakit = 「びょうき」."},
      {"q": "「おみやげ」 artinya...", "options": ["surat", "foto", "kartu pos", "oleh-oleh"], "answer": 3, "explain": "「おみやげ」 = oleh-oleh/suvenir."},
      {"q": "「てがみ」 artinya...", "options": ["barang bawaan", "surat", "kartu pos", "foto"], "answer": 1, "explain": "「てがみ」 = surat. Kartu pos = 「はがき」, foto = 「しゃしん」."},
      {"q": "「わたしの しゅみは りょこうです」 artinya...", "options": ["Pekerjaan saya adalah bepergian", "Saya akan berlibur besok", "Hobi saya adalah bepergian", "Saya suka membuat oleh-oleh"], "answer": 2, "explain": "「しゅみ」 = hobi, 「りょこう」 = perjalanan/wisata."},
      {"q": "「かなしい」 artinya...", "options": ["senang", "takut", "pedas", "sedih"], "answer": 3, "explain": "「かなしい」 = sedih. Kebalikannya 「うれしい」 (senang)."},
      {"q": "「こわい」 artinya...", "options": ["takut / menakutkan", "menyenangkan", "manis", "ringan"], "answer": 0, "explain": "「こわい」 = takut/menakutkan. Contoh: 「いぬが こわいです」."},
      {"q": "「この カレーは からいです」 artinya...", "options": ["Kari ini manis", "Kari ini pedas", "Kari ini murah", "Kari ini dingin"], "answer": 1, "explain": "「からい」 = pedas, kebalikan dari 「あまい」 (manis)."},
      {"q": "「この にもつは おもいです」 artinya...", "options": ["Barang ini ringan", "Barang ini mahal", "Barang ini berat", "Barang ini baru"], "answer": 2, "explain": "「おもい」 = berat, kebalikannya 「かるい」 (ringan)."},
      {"q": "「あたまが いたいです」 artinya...", "options": ["Saya senang", "Kepala saya dingin", "Saya sedang berpikir", "Kepala saya sakit"], "answer": 3, "explain": "「いたい」 = sakit (terasa nyeri). 「あたま」 = kepala."},
      {"q": "「おふろに はいります」 artinya...", "options": ["mandi / berendam di bak mandi", "mencuci pakaian", "membersihkan kamar", "masuk kantor"], "answer": 0, "explain": "「おふろに はいります」 = mandi (berendam di bak)."},

      // ===== KAIWA RENSHUU (36-50) =====
      {"q": "Situasi: Di kantor.\nA: 「おつかれさまです。しごとは どうですか。」\nB: 「___」\n\nJawaban yang tepat adalah...", "options": ["「きのう かいました」", "「いそがしいですが、たのしいです」", "「ごにんです」", "「えきの まえです」"], "answer": 1, "explain": "「どうですか」 menanyakan keadaan. Jawaban yang cocok: sibuk tetapi menyenangkan."},
      {"q": "Situasi: Memperkenalkan keluarga.\nA: 「ごかぞくは なんにんですか。」\nB: 「___」\n\nJawaban yang tepat adalah...", "options": ["「300えんです」", "「にちようびです」", "「よにんです。ちちと ははと いもうとと わたしです」", "「テレビを みています」"], "answer": 2, "explain": "「なんにん」 menanyakan jumlah orang, jadi dijawab jumlah orang dan anggotanya."},
      {"q": "Situasi: Berbicara tentang hobi.\nA: 「しゅみは なんですか。」\nB: 「___」\n\nJawaban yang tepat adalah...", "options": ["「りょうりです」", "「いくらですか」", "「あしたです」", "「はい、あります」"], "answer": 0, "explain": "「しゅみは なんですか」 = apa hobimu? Dijawab 「〜です」, misalnya 「りょうりです」 (memasak)."},
      {"q": "Situasi: Menanyakan arah.\nA: 「すみません、ゆうびんきょくは どこですか。」\nB: 「___」\n\nJawaban yang tepat adalah...", "options": ["「はい、ゆうびんきょくです」", "「あの こうさてんを みぎへ まがって ください」", "「ごひゃくえんです」", "「きのう いきました」"], "answer": 1, "explain": "Menanyakan lokasi dijawab dengan petunjuk jalan."},
      {"q": "Situasi: Meminta izin.\nA: 「この じしょを かりても いいですか。」\nB: 「___」\n\nJawaban yang tepat untuk mengizinkan adalah...", "options": ["「いいえ、いきません」", "「おなかが いたいです」", "「ええ、どうぞ」", "「ひとつ 100えんです」"], "answer": 2, "explain": "「〜てもいいですか」 dijawab izin dengan 「ええ、どうぞ」."},
      {"q": "Situasi: Mengundang teman.\nA: 「あした うちへ きませんか。」\nB: 「___」\n\nJawaban yang tepat untuk menerima undangan adalah...", "options": ["「いいえ、きません。ありがとう」", "「きのう いきました」", "「ごはんを たべました」", "「ありがとうございます。ぜひ いきます」"], "answer": 3, "explain": "Menerima ajakan: 「ありがとうございます。ぜひ いきます」."},
      {"q": "Situasi: Berbelanja.\nA: 「ほかの いろは ありますか。」\nB: 「___」\n\nJawaban yang tepat adalah...", "options": ["「はい、あおと くろが あります」", "「いいえ、ねます」", "「ふたりです」", "「よじです」"], "answer": 0, "explain": "「ほかの いろ」 = warna lain. Dijawab dengan warna yang tersedia."},
      {"q": "Situasi: Di rumah sakit.\nA: 「どうしましたか。」\nB: 「___」\n\nJawaban yang tepat adalah...", "options": ["「ともだちと きました」", "「あたまが いたいです。ねつも あります」", "「くつを かいます」", "「ごじに おきます」"], "answer": 1, "explain": "「どうしましたか」 = ada apa? Pasien menjelaskan keluhan."},
      {"q": "Situasi: Di stasiun.\nA: 「すみません、とうきょうへ いく でんしゃは どれですか。」\nB: 「___」\n\nJawaban yang tepat adalah...", "options": ["「240えんです」", "「ええ、おいしいです」", "「3ばんせんの でんしゃです」", "「ははが つくりました」"], "answer": 2, "explain": "「どれ」 = yang mana. Dijawab dengan kereta di peron 3."},
      {"q": "Situasi: Menelepon.\nA: 「もしもし、やまださんは いますか。」\nB: 「___」\n\nJawaban yang tepat adalah...", "options": ["「はい、おなかが すきました」", "「ありがとう、いただきます」", "「はい、にもつです」", "「すみません、いま でかけて います」"], "answer": 3, "explain": "Kalau orang yang dicari sedang keluar: 「いま でかけて います」."},
      {"q": "Situasi: Memperkenalkan anggota keluarga.\nA: 「こちらは わたしの あねです。」\nB: 「___」\n\nJawaban yang tepat adalah...", "options": ["「はじめまして。どうぞ よろしくおねがいします」", "「いただきます」", "「いってきます」", "「おやすみなさい」"], "answer": 0, "explain": "Saat diperkenalkan dengan seseorang: 「はじめまして。どうぞ よろしくおねがいします」."},
      {"q": "Situasi: Di rumah.\nA: 「もう そうじしましたか。」\nB: 「___」\n\nJawaban yang tepat jika BELUM melakukannya adalah...", "options": ["「はい、もう しました」", "「いいえ、まだです」", "「ええ、おそうじです」", "「はい、どうぞ」"], "answer": 1, "explain": "Pertanyaan 「もう 〜ましたか」 dijawab 「はい、もう〜ました」 (sudah) atau 「いいえ、まだです」 (belum)."},
      {"q": "Situasi: Membantu membawa barang.\nA: 「にもつが おもいですね。」\nB: 「もちましょうか。」\nA: 「___」\n\nJawaban A yang tepat adalah...", "options": ["「いいえ、こわいです」", "「いただきます」", "「ありがとうございます。おねがいします」", "「ごちそうさまでした」"], "answer": 2, "explain": "「〜ましょうか」 adalah tawaran bantuan. Menerima: 「ありがとうございます。おねがいします」."},
      {"q": "Situasi: Menuju bandara.\nA: 「くうこうまで どのくらい かかりますか。」\nB: 「___」\n\nJawaban yang tepat adalah...", "options": ["「ごひゃくえんです」", "「ひこうきが すきです」", "「ともだちです」", "「でんしゃで 40ぷんぐらいです」"], "answer": 3, "explain": "「どのくらい かかりますか」 menanyakan lamanya waktu."},
      {"q": "Situasi: Menelepon kantor di pagi hari.\nA: 「はい、ABCかいしゃです。」\nB: 「___」\n\nKalimat B yang tepat untuk memberi tahu bahwa ia tidak masuk karena sakit adalah...", "options": ["「おはようございます。たなかです。きょうは びょうきですから、やすみます」", "「おやすみなさい。たなかは ねます」", "「ただいま。びょういんです」", "「いただきます。くすりです」"], "answer": 0, "explain": "「〜ですから、やすみます」 = karena ~, saya tidak masuk/libur."}
    ]
  },
     /* ============================================================
     LEVEL 10 — GRAND REVIEW N5
     ============================================================ */
  'level-10': {
    title: 'Grand Review N5',
    kategori: 'N5',
    deskripsi: 'Ujian akhir N5! Campuran semua materi: kosakata, kanji, partikel, pola kalimat, dokkai, kaiwa, dan listening.',
    soal: [
      // ===== KOSAKATA & KANJI (1-10) =====
      {"q": "Kanji 「金」 pada 「きんようび」 (hari Jumat) artinya...", "options": ["tanah", "api", "emas / uang", "kayu"], "answer": 2, "explain": "「金」 = emas atau uang (「きん」/「かね」). 「金ようび」 = hari Jumat."},
      {"q": "Kanji 「目」 artinya...", "options": ["telinga", "mulut", "tangan", "mata"], "answer": 3, "explain": "「目」 = mata (「め」/「もく」). Telinga = 「耳」 (みみ), mulut = 「口」 (くち)."},
      {"q": "Kanji untuk 'kanan' adalah...", "options": ["左", "右", "石", "古"], "answer": 1, "explain": "「右」 (みぎ) = kanan, 「左」 (ひだり) = kiri."},
      {"q": "Kanji 「新しい」 dibaca...", "options": ["あたらしい", "あらたしい", "しんしい", "にいしい"], "answer": 0, "explain": "「新しい」 dibaca 「あたらしい」 = baru. Kebalikannya 「古い」 (ふるい) = lama."},
      {"q": "Kanji 「母」 dibaca...", "options": ["ちち", "あね", "はは", "いもうと"], "answer": 2, "explain": "「母」 (はは) = ibu (untuk menyebut ibu sendiri). Kebalikannya 「父」 (ちち) = ayah."},
      {"q": "Kanji 「小さい」 dibaca...", "options": ["おおきい", "ちいさい", "すくない", "こさい"], "answer": 1, "explain": "「小さい」 dibaca 「ちいさい」 = kecil. Kebalikannya 「大きい」 (おおきい)."},
      {"q": "Kanji 「会社員」 dibaca...", "options": ["かいしゃいん", "かいしゃじん", "あいしゃいん", "えしゃいん"], "answer": 0, "explain": "「会社員」 (かいしゃいん) = karyawan perusahaan."},
      {"q": "「シャワーを あびます」 artinya...", "options": ["menyiram tanaman", "mandi dengan shower", "mencuci piring", "menyikat gigi"], "answer": 1, "explain": "「あびます」 = mengguyur diri. 「シャワーを あびます」 = mandi dengan shower."},
      {"q": "「すずしい」 artinya...", "options": ["hangat", "dingin sekali", "sejuk", "panas"], "answer": 2, "explain": "「すずしい」 = sejuk (dingin yang nyaman). Berbeda dengan 「さむい」 (dingin) dan 「あつい」 (panas)."},
      {"q": "Kanji 「土」 pada 「どようび」 (hari Sabtu) artinya...", "options": ["tanah", "air", "gunung", "sungai"], "answer": 0, "explain": "「土」 = tanah (「ど」/「つち」). 「土ようび」 = hari Sabtu."},

      // ===== PARTIKEL & POLA KALIMAT (11-20) =====
      {"q": "Lengkapi: 「ともだち___ プレゼントを あげます。」 (memberi hadiah kepada teman)", "options": ["で", "に", "を", "も"], "answer": 1, "explain": "Penerima dalam 「あげます」 ditandai partikel 「に」."},
      {"q": "Lengkapi: 「でんしゃ___ のります。」 (naik kereta)", "options": ["を", "で", "に", "と"], "answer": 2, "explain": "Kata kerja 「のります」 memakai partikel 「に」 untuk kendaraan yang dinaiki."},
      {"q": "Bentuk ない dari 「かいます」 adalah...", "options": ["かいない", "かわない", "かえない", "かうない"], "answer": 1, "explain": "Kata kerja Grup 1 berakhiran 「い」, bentuk ない memakai 「わ」: 「かいます」 → 「かわない」."},
      {"q": "Bentuk て dari 「あそびます」 adalah...", "options": ["あそびて", "あそって", "あそんで", "あそいで"], "answer": 2, "explain": "Kata kerja berakhiran 「び」 berubah menjadi 「んで」: 「あそびます」 → 「あそんで」."},
      {"q": "Bentuk て dari 「はなします」 adalah...", "options": ["はなして", "はないて", "はなんで", "はなって"], "answer": 0, "explain": "Kata kerja berakhiran 「し」 berubah menjadi 「して」."},
      {"q": "「すしを たべた ことが ありません」 artinya...", "options": ["Saya tidak mau makan sushi", "Saya belum pernah makan sushi", "Saya tidak boleh makan sushi", "Saya tidak sedang makan sushi"], "answer": 1, "explain": "「〜た ことが ありません」 = belum pernah melakukan ~."},
      {"q": "Bentuk potensial (bisa) dari 「よみます」 adalah...", "options": ["よまれる", "よみれる", "よむできる", "よめる"], "answer": 3, "explain": "Kata kerja Grup 1: akhiran 「む」 berubah menjadi 「め」 + 「る」 → 「よめる」."},
      {"q": "「らいしゅう ともだちに あう つもりです」 artinya...", "options": ["Minggu lalu saya bertemu teman", "Minggu depan teman harus datang", "Minggu depan saya berniat bertemu teman", "Saya tidak akan bertemu teman"], "answer": 2, "explain": "「〜つもりです」 = berniat / berencana."},
      {"q": "Lengkapi: 「ここで ___ いけません。」 (Dilarang berlari di sini)", "options": ["はしりては", "はしっては", "はしんでは", "はしいては"], "answer": 1, "explain": "Bentuk て dari 「はしります」 adalah 「はしって」, jadi 「はしっては いけません」."},
      {"q": "Lengkapi: 「おんがくを ___ ごはんを たべます。」 (makan sambil mendengarkan musik)", "options": ["きくながら", "きいながら", "ききに", "ききながら"], "answer": 3, "explain": "Pola 「〜ながら」 memakai bentuk ます tanpa ます: 「ききながら」."},

      // ===== DOKKAI PANJANG (21-30) =====
      {"q": "「やまださんは かいしゃいんです。まいあさ 6じはんに おきます。シャワーを あびて、パンと たまごを たべます。7じに うちを でて、でんしゃで かいしゃへ いきます。かいしゃは 8じはんから 5じまでです。しごとの あとで、ときどき ともだちと のみに いきます。うちへ かえるのは 8じごろです。」\n\nPertanyaan: Apa yang dimakan Yamada saat sarapan?", "options": ["Nasi dan ikan", "Roti dan telur", "Mi dan sup", "Hanya kopi"], "answer": 1, "explain": "「パンと たまごを たべます」 = makan roti dan telur."},
      {"q": "「リナさんは インドネシアじんです。いま にほんの だいがくで べんきょうしています。かぞくは ジャカルタに すんでいます。ちちは せんせいで、ははは いしゃです。おとうとは まだ こうこうせいです。リナさんは まいしゅう にちようびに かぞくに でんわを かけます。らいねん くにへ かえる つもりです。」\n\nPertanyaan: Kapan Lina menelepon keluarganya?", "options": ["Setiap hari", "Setiap hari Sabtu", "Setiap hari Minggu", "Setiap bulan"], "answer": 2, "explain": "「まいしゅう にちようびに」 = setiap hari Minggu."},
      {"q": "「せんしゅう、ともだちと きょうとへ いきました。とうきょうから しんかんせんで 2じかん ぐらいでした。きょうとで ふるい おてらを たくさん みました。しゃしんも たくさん とりました。ひるごはんは やすい レストランで たべましたが、あまり おいしくなかったです。ばんごはんは ともだちが すすめた みせで たべました。そこは とても おいしかったです。」\n\nPertanyaan: Bagaimana makan siang mereka di Kyoto?", "options": ["Mahal dan enak", "Murah tetapi kurang enak", "Mahal dan tidak enak", "Murah dan sangat enak"], "answer": 1, "explain": "「やすい レストラン」 = restoran murah, 「あまり おいしくなかった」 = kurang enak."},
      {"q": "「わたしの しゅみは りょうりです。まえは りょうりが ぜんぜん できませんでした。でも、1ねんまえに ともだちに ならいました。いまは カレーと うどんが つくれます。きのうは はじめて ケーキを つくりましたが、あまくなりすぎました。つぎは さとうを すくなく いれる つもりです。」\n\nPertanyaan: Apa rencana orang ini untuk membuat kue lain kali?", "options": ["Menambah gula", "Mengurangi gula", "Membeli kue saja", "Belajar lagi dari teman"], "answer": 1, "explain": "Kuenya terlalu manis, jadi lain kali 「さとうを すくなく いれる」 = memakai gula lebih sedikit."},
      {"q": "「きのうから のどが いたいです。ねつは ありませんが、すこし さむいです。けさ びょういんへ いきました。おいしゃさんは『かぜですね。くすりを のんで、きょうは はやく ねて ください』と いいました。それから、つめたい ものを のんでは いけないと いいました。きょうは かいしゃを やすみました。」\n\nPertanyaan: Apa yang dilarang oleh dokter?", "options": ["Minum yang dingin", "Mandi", "Tidur lebih awal", "Minum obat"], "answer": 0, "explain": "「つめたい ものを のんでは いけない」 = tidak boleh minum yang dingin."},
      {"q": "「たなかさんは ぎんこうで はたらいています。しごとは 9じからですが、まいあさ 8じに かいしゃへ きます。ぎんこうの おきゃくさんは 3じまでです。でも、そのあとも しごとが あります。だから、いつも 6じごろ かえります。しゅうまつは やすみです。どようびは ジムへ いって、にちようびは うちで ゆっくり します。」\n\nPertanyaan: Apa yang dilakukan Tanaka pada hari Minggu?", "options": ["Pergi ke gym", "Bekerja di bank", "Bersantai di rumah", "Pergi ke bank bersama teman"], "answer": 2, "explain": "「にちようびは うちで ゆっくり します」 = hari Minggu bersantai di rumah."},
      {"q": "「わたしの クラスには 15にんの がくせいが います。ほとんど アジアから きました。せんせいは やさしい にほんじんの おんなの ひとです。じゅぎょうは げつようびから きんようびまでで、まいにち 4じかんです。まいしゅう きんようびに かんじの テストが あります。かんじは むずかしいですが、おもしろいです。」\n\nPertanyaan: Kapan tes kanji diadakan?", "options": ["Hari Senin", "Hari Jumat", "Hari Rabu", "Setiap hari"], "answer": 1, "explain": "「まいしゅう きんようびに かんじの テスト」 = setiap hari Jumat ada tes kanji."},
      {"q": "「あしたは ともだちと うみへ いきたかったです。でも、てんきよほうでは あしたは あめでしょう。それで、うみへは いきません。ともだちと えいがを みに いきます。えいがの あとで、いっしょに ばんごはんを たべる つもりです。うみへは らいしゅうの どようびに いきたいです。」\n\nPertanyaan: Apa yang akan dilakukan orang ini besok?", "options": ["Pergi ke laut", "Menonton film", "Belajar di rumah", "Berbelanja"], "answer": 1, "explain": "Karena diperkirakan hujan, besok 「えいがを みに いきます」 = pergi menonton film."},
      {"q": "「きのう デパートで あたらしい かばんを みました。あかい かばんと くろい かばんが ありました。あかい かばんは 8,000えんで、くろい かばんは 6,000えんでした。あかい かばんの ほうが かわいかったですが、たかいので、くろい かばんを かいました。ちょっと おもいですが、とても べんりです。」\n\nPertanyaan: Berapa harga tas yang akhirnya dibeli?", "options": ["8.000 yen", "6.000 yen", "14.000 yen", "2.000 yen"], "answer": 1, "explain": "Tas merah terlalu mahal, jadi ia membeli tas hitam seharga 6.000 yen."},
      {"q": "「わたしの うちは えきから あるいて 10ぷんです。うちの ちかくに スーパーと こうえんが あります。こうえんには おおきい きが たくさん あります。ひまな ときは、いぬと いっしょに こうえんを さんぽします。いぬの なまえは ポチです。ポチは さんぽが だいすきです。」\n\nPertanyaan: Berapa lama berjalan kaki dari rumah ke stasiun?", "options": ["5 menit", "15 menit", "10 menit", "20 menit"], "answer": 2, "explain": "「えきから あるいて 10ぷん」 = 10 menit berjalan kaki dari stasiun."},

      // ===== KAIWA SITUASIONAL (31-40) =====
      {"q": "Situasi: Di restoran.\nA: 「おのみものは なにに しますか。」\nB: 「___」\n\nJawaban yang tepat adalah...", "options": ["「あついおちゃを おねがいします」", "「ちかてつで いきます」", "「あした はたらきます」", "「ちちが つくりました」"], "answer": 0, "explain": "Ditanya minuman, jawab dengan memesan minuman: 「あついおちゃを おねがいします」."},
      {"q": "Situasi: Di kantor.\nA: 「たなかさん、あした かいぎが ありますから、3じまでに きて ください。」\nB: 「___」\n\nJawaban yang tepat adalah...", "options": ["「いただきます」", "「わかりました。3じまでに きます」", "「おめでとうございます」", "「おやすみなさい」"], "answer": 1, "explain": "Menerima instruksi atasan: 「わかりました」 (saya mengerti) + janji datang."},
      {"q": "Situasi: Menelepon.\nA: 「もしもし、さとうさんの うちですか。」\nB: 「いいえ、ちがいますよ。」\nA: 「___」\n\nJawaban A yang tepat adalah...", "options": ["「ありがとうございます。いただきます」", "「はじめまして。たなかです」", "「すみません。まちがえました」", "「いってきます」"], "answer": 2, "explain": "Salah sambung: 「すみません。まちがえました」."},
      {"q": "Situasi: Di toko pakaian.\nA: 「この シャツの Lサイズは ありますか。」\nB: 「すみません、いま Lサイズは ありません。Mサイズなら あります。」\nA: 「___」\n\nJawaban A yang tepat adalah...", "options": ["「Lサイズを ありがとうございました」", "「じゃあ、くつを みせて ください」", "「きのう かいました」", "「じゃあ、Mサイズを みせて ください」"], "answer": 3, "explain": "Karena yang ada ukuran M, A meminta: 「Mサイズを みせて ください」."},
      {"q": "Situasi: Di sekolah.\nA: 「せんせい、しつもんが あります。」\nB: 「はい、なんですか。」\nA: 「___」\n\nJawaban A yang tepat adalah...", "options": ["「この かんじの よみかたを おしえて ください」", "「おなかが いっぱいです」", "「ごひゃくえんです」", "「ゆうべ ねました」"], "answer": 0, "explain": "Dalam bertanya kepada guru: 「よみかたを おしえて ください」."},
      {"q": "Situasi: Di antara teman.\nA: 「どうして きのう がっこうへ きませんでしたか。」\nB: 「___」\n\nJawaban yang tepat adalah...", "options": ["「あした いきます」", "「あたまが いたかったですから、うちで ねていました」", "「ともだちと えいがを みたいです」", "「3じに おきます」"], "answer": 1, "explain": "「どうして」 menanyakan alasan. Dijawab dengan 「〜から」."},
      {"q": "Situasi: Di hotel.\nA: 「チェックインを おねがいします。」\nB: 「おなまえを おねがいします。」\nA: 「___」\n\nJawaban A yang tepat adalah...", "options": ["「300えんです」", "「ふたりです」", "「スミスです。よやくを しました」", "「おいしかったです」"], "answer": 2, "explain": "Saat check-in, sebutkan nama dan bahwa sudah memesan."},
      {"q": "Situasi: Di stasiun.\nA: 「3じの でんしゃに のりたいです。いま 2じ40ふんです。」\nB: 「じゃあ、あと なんぷん まちますか。」\nA: 「___」\n\nJawaban A yang benar adalah...", "options": ["「10ぷんです」", "「30ぷんです」", "「40ぷんです」", "「20ぷんです」"], "answer": 3, "explain": "Dari jam 2.40 ke jam 3.00 = 20 menit."},
      {"q": "Situasi: Mengundang teman.\nA: 「にちようびに いっしょに えいがを みに いきませんか。」\nB: 「すみません、にちようびは ちょっと…。」\nA: 「そうですか。じゃあ、___」\n\nLanjutan A yang tepat adalah...", "options": ["「どようびは どうですか」", "「えいがは おいしいですか」", "「いただきます」", "「いってらっしゃい」"], "answer": 0, "explain": "Setelah ajakan ditolak, A menawarkan hari lain: 「どようびは どうですか」."},
      {"q": "Situasi: Di apotek.\nA: 「この くすりは いつ のみますか。」\nB: 「しょくじの あとで、1にち 3かい のんで ください。」\n\nPertanyaan: Kapan obat itu diminum?", "options": ["Sebelum tidur, sekali sehari", "Setelah makan, tiga kali sehari", "Sebelum makan, dua kali sehari", "Setelah makan, sekali sehari"], "answer": 1, "explain": "「しょくじの あとで」 = setelah makan, 「1にち 3かい」 = tiga kali sehari."},

      // ===== LISTENING (41-50) =====
      {"q": "🎧 Dengarkan audio, lalu pilih arti yang tepat:", "audio": "わたしは まいあさ コーヒーを のみながら しんぶんを よみます", "options": ["Saya membaca koran setelah minum kopi", "Saya setiap pagi membaca koran sambil minum kopi", "Saya ingin minum kopi dan membaca koran", "Kemarin saya membaca koran di kafe"], "answer": 1, "explain": "Audio: 「〜ながら」 = sambil. 「まいあさ」 = setiap pagi."},
      {"q": "🎧 Dengarkan audio, lalu pilih arti yang tepat:", "audio": "きのう ともだちと いっしょに えいがを みに いきました", "options": ["Besok saya akan menonton film bersama teman", "Saya ingin menonton film dengan teman", "Kemarin saya pergi menonton film bersama teman", "Kemarin teman saya menonton film sendirian"], "answer": 2, "explain": "Audio: 「きのう」 = kemarin, 「〜に いきました」 = pergi untuk ~."},
      {"q": "🎧 Dengarkan audio, lalu pilih arti yang tepat:", "audio": "すみません、えきは どこに ありますか", "options": ["Permisi, di mana toilet?", "Permisi, berapa harga tiketnya?", "Permisi, jam berapa kereta berangkat?", "Permisi, stasiun ada di mana?"], "answer": 3, "explain": "Audio: 「えき」 = stasiun."},
      {"q": "🎧 Dengarkan audio, lalu pilih arti yang tepat:", "audio": "ここで たばこを すっても いいですか", "options": ["Bolehkah merokok di sini?", "Dilarang merokok di sini", "Tolong jangan merokok", "Saya tidak merokok"], "answer": 0, "explain": "Audio: 「〜ても いいですか」 = bolehkah ~?"},
      {"q": "🎧 Dengarkan audio, lalu pilih harga yang tepat:", "audio": "さんぜんごひゃくえんです", "options": ["350 yen", "3.500 yen", "5.300 yen", "35.000 yen"], "answer": 1, "explain": "Audio: 「さんぜん」 = 3.000, 「ごひゃく」 = 500, jadi 3.500 yen."},
      {"q": "🎧 Dengarkan audio, lalu pilih arti yang tepat:", "audio": "ははは びょういんで はたらいています", "options": ["Ayah bekerja di perusahaan", "Ibu sedang dirawat di rumah sakit", "Ibu bekerja di rumah sakit", "Ibu pergi ke rumah sakit kemarin"], "answer": 2, "explain": "Audio: 「はは」 = ibu, 「びょういん」 = rumah sakit, 「はたらいています」 = bekerja."},
      {"q": "🎧 Dengarkan audio, lalu pilih arti yang tepat:", "audio": "ゆうべ あたまが いたかったので、くすりを のんで ねました", "options": ["Besok kepala saya sakit, jadi saya akan tidur", "Semalam saya tidur lalu minum obat", "Kepala saya tidak sakit, jadi saya tidak minum obat", "Semalam kepala saya sakit, jadi saya minum obat lalu tidur"], "answer": 3, "explain": "Audio: 「ゆうべ」 = semalam, 「〜ので」 = karena."},
      {"q": "🎧 Dengarkan audio, lalu pilih arti yang tepat:", "audio": "らいげつ かぞくに あいに くにへ かえる つもりです", "options": ["Bulan depan saya berniat pulang ke negara untuk bertemu keluarga", "Bulan lalu saya pulang ke negara bertemu keluarga", "Bulan depan keluarga saya datang ke Jepang", "Saya tidak ingin pulang ke negara"], "answer": 0, "explain": "Audio: 「らいげつ」 = bulan depan, 「〜に あいに」 = untuk bertemu ~."},
      {"q": "🎧 Dengarkan audio, lalu pilih jam yang tepat:", "audio": "はちじ よんじゅうごふんに うちを でます", "options": ["Jam 8.15", "Jam 8.45", "Jam 7.45", "Jam 9.45"], "answer": 1, "explain": "Audio: 「はちじ」 = jam 8, 「よんじゅうごふん」 = 45 menit."},
      {"q": "🎧 Dengarkan audio, lalu pilih arti yang tepat:", "audio": "この かばんは おもいですが、とても べんりです", "options": ["Tas ini ringan dan murah", "Tas ini berat dan tidak praktis", "Tas ini mahal tetapi bagus", "Tas ini berat, tetapi sangat praktis"], "answer": 3, "explain": "Audio: 「おもい」 = berat, 「〜ですが」 = tetapi, 「べんり」 = praktis."}
    ]
  },
     /* ============================================================
     LEVEL 11 — 漢字・表現・会話 (Kanji, Ungkapan & Percakapan)
     ------------------------------------------------------------
     Format baru: Pertanyaan & pilihan dalam BAHASA JEPANG.
     Penjelasan tetap bahasa Indonesia.
     ============================================================ */
  'level-11': {
    title: '漢字・表現・会話',
    kategori: 'N5',
    deskripsi: 'Kanji, ungkapan (表現), percakapan situasional (会話), dan listening. Semua soal dalam bahasa Jepang.',
    soal: [
      // ===== KANJI N5+ (1-15) =====
      {"q": "「会社員」の よみかたは なんですか。", "options": ["かいしゃいん", "かいしゃじん", "あいしゃいん", "かいしゃにん"], "answer": 0, "explain": "「会社員」 (かいしゃいん) = karyawan perusahaan."},
      {"q": "「電車」の よみかたは なんですか。", "options": ["でんしゃ", "でんくるま", "てんしゃ", "でんしゃあ"], "answer": 0, "explain": "「電車」 (でんしゃ) = kereta listrik."},
      {"q": "「毎日」の よみかたは なんですか。", "options": ["まいにち", "ごにち", "まいひ", "まいび"], "answer": 0, "explain": "「毎日」 (まいにち) = setiap hari."},
      {"q": "「時間」の いみは なんですか。", "options": ["じかん (waktu)", "じこく (jam)", "ひづけ (tanggal)", "ようび (hari)"], "answer": 0, "explain": "「時間」 (じかん) = waktu."},
      {"q": "「友達」の よみかたは なんですか。", "options": ["ともだち", "ゆうたつ", "ともたち", "ゆうだち"], "answer": 0, "explain": "「友達」 (ともだち) = teman."},
      {"q": "「天気」の いみは なんですか。", "options": ["てんき (cuaca)", "びょうき (sakit)", "げんき (sehat)", "でんき (listrik)"], "answer": 0, "explain": "「天気」 (てんき) = cuaca. Hati-hati dengan 「病気」 (sakit)."},
      {"q": "「外国」の よみかたは なんですか。", "options": ["がいこく", "そとくに", "ほかこく", "がいこっ"], "answer": 0, "explain": "「外国」 (がいこく) = luar negeri."},
      {"q": "「名前」の いみは なんですか。", "options": ["なまえ (nama)", "めいぜん (nama depan)", "なまい (nama panggilan)", "めい (nama lengkap)"], "answer": 0, "explain": "「名前」 (なまえ) = nama."},
      {"q": "「一日」の よみかたは なんですか。", "options": ["ついたち", "いちにち", "ひとひ", "いちび"], "answer": 0, "explain": "「一日」 = ついたち (tanggal 1). Untuk \"satu hari\" = いちにち."},
      {"q": "「四月」の よみかたは なんですか。", "options": ["しがつ", "よんがつ", "しつき", "よんつき"], "answer": 0, "explain": "「四月」 (しがつ) = bulan April. Perhatikan: 4 bulan = しがつ, bukan よんがつ."},
      {"q": "「海」の いみは なんですか。", "options": ["うみ (laut)", "かわ (sungai)", "やま (gunung)", "そら (langit)"], "answer": 0, "explain": "「海」 (うみ) = laut."},
      {"q": "「雨」の いみは なんですか。", "options": ["あめ (hujan)", "ゆき (salju)", "かぜ (angin)", "くも (awan)"], "answer": 0, "explain": "「雨」 (あめ) = hujan."},
      {"q": "「花」の いみは なんですか。", "options": ["はな (bunga)", "き (pohon)", "くさ (rumput)", "は (daun)"], "answer": 0, "explain": "「花」 (はな) = bunga."},
      {"q": "「魚」の よみかたは なんですか。", "options": ["さかな", "うお", "ぎょ", "とと"], "answer": 0, "explain": "「魚」 = さかな (ikan). ぎょ adalah bacaan Sino-Jepang."},
      {"q": "「お茶」の いみは なんですか。", "options": ["おちゃ (teh)", "おさけ (sake)", "おみず (air)", "おかし (kue)"], "answer": 0, "explain": "「お茶」 (おちゃ) = teh."},

      // ===== 表現 (UNGKAPAN) (16-30) =====
      {"q": "「お疲れ様です」は いつ つかいますか。", "options": ["あさ あった ときに", "しごとの とき、または わかれる ときに", "たべる まえに", "ねる まえに"], "answer": 1, "explain": "「お疲れ様です」 = ungkapan di kantor saat bertemu rekan kerja atau pulang kerja."},
      {"q": "「お世話になっております」は どんな とき つかいますか。", "options": ["しごとの メールや でんわの さいしょに", "たべる ときに", "ねる まえに", "あそぶ ときに"], "answer": 0, "explain": "「お世話になっております」 = sapaan formal di email/telepon bisnis."},
      {"q": "「いただきます」は いつ いいますか。", "options": ["たべる まえに", "たべた あとに", "ねる まえに", "おきる ときに"], "answer": 0, "explain": "「いただきます」 diucapkan SEBELUM makan."},
      {"q": "「ごちそうさまでした」は いつ いいますか。", "options": ["たべた あとに", "たべる まえに", "でかける ときに", "かえる ときに"], "answer": 0, "explain": "「ごちそうさまでした」 diucapkan SETELAH makan sebagai terima kasih."},
      {"q": "「お先に失礼します」は どんな いみですか。", "options": ["おさきに かえります (permisi pulang duluan)", "おさきに いきます (saya jalan dulu)", "おさきに たべます (saya makan dulu)", "おさきに ねます (saya tidur dulu)"], "answer": 0, "explain": "「お先に失礼します」 = permisi, saya pulang duluan (di kantor)."},
      {"q": "「お待たせしました」は どんな いみですか。", "options": ["おまたせして すみません (maaf membuat menunggu)", "おまちください (silakan tunggu)", "おまちしています (sedang menunggu)", "おまたせください (tolong tunggu)"], "answer": 0, "explain": "「お待たせしました」 = mohon maaf sudah membuat menunggu."},
      {"q": "「かしこまりました」は どんな いみですか。", "options": ["わかりました (mengerti, sangat sopan)", "しりません (tidak tahu)", "いりません (tidak perlu)", "できません (tidak bisa)"], "answer": 0, "explain": "「かしこまりました」 = versi SANGAT SOPAN dari 「わかりました」."},
      {"q": "「お大事に」は いつ つかいますか。", "options": ["びょうきの ひとに", "あたらしい ひとに", "しごとの ひとに", "ともだちの たんじょうびに"], "answer": 0, "explain": "「お大事に」 = semoga lekas sembuh. Diucapkan kepada orang sakit."},
      {"q": "「おめでとうございます」は いつ つかいますか。", "options": ["おいわいの ときに", "おくやみの ときに", "あやまる ときに", "おねがいする ときに"], "answer": 0, "explain": "「おめでとうございます」 = selamat (untuk perayaan/ucapan selamat)."},
      {"q": "「頑張ってください」は どんな いみですか。", "options": ["応援しています (semangat ya, saya dukung)", "休んでください (istirahatlah)", "帰ってください (pulanglah)", "待ってください (tunggulah)"], "answer": 0, "explain": "「頑張ってください」 = semangat! / lakukan yang terbaik!"},
      {"q": "「気をつけて」は どんな いみですか。", "options": ["注意してください (hati-hati)", "急いでください (cepatlah)", "休んでください (istirahatlah)", "待ってください (tunggulah)"], "answer": 0, "explain": "「気をつけて」 = hati-hati (biasanya saat berpamitan)."},
      {"q": "「よろしくお願いします」は どんな いみですか。", "options": ["おねがいします (mohon kerja samanya)", "ありがとう (terima kasih)", "ごめんなさい (maaf)", "すみません (permisi)"], "answer": 0, "explain": "「よろしくお願いします」 = mohon bantuannya / salam hormat."},
      {"q": "「とんでもないです」は どんな いみですか。", "options": ["いいえ、そんなことないです (tidak, tidak apa-apa)", "とても たいへんです (sangat berat)", "とても うれしいです (sangat senang)", "とても こわいです (sangat takut)"], "answer": 0, "explain": "「とんでもないです」 = balasan saat dipuji/diberi hadiah: \"tidak, tidak, tidak usah\"."},
      {"q": "「おかげさまで」は どんな いみですか。", "options": ["あなたのおかげで (berkat Anda)", "あなたのせいで (karena Anda - negatif)", "あなたのために (untuk Anda)", "あなたと一緒に (bersama Anda)"], "answer": 0, "explain": "「おかげさまで」 = berkat bantuan Anda (ungkapan syukur)."},
      {"q": "「どうぞよろしく」は いつ つかいますか。", "options": ["はじめましての とき", "わかれる とき", "あやまる とき", "たべる とき"], "answer": 0, "explain": "「どうぞよろしく」 = salam perkenalan (versi singkat dari 「よろしくお願いします」)."},

      // ===== 会話 SITUASIONAL (31-45) =====
      {"q": "【場面：レストランで】\n店員：「ごちゅうもんは おきまりですか。」\nお客：「___」\n\n正しい こたえは どれですか。", "options": ["はい、ラーメンを おねがいします", "はい、3じに おきます", "はい、アメリカじんです", "はい、とても たかいです"], "answer": 0, "explain": "「おきまりですか」 = sudah memutuskan pesanan? Dijawab dengan pesanan."},
      {"q": "【場面：会社で】\n同僚：「お疲れ様です。しごとは どうですか。」\nあなた：「___」\n\n正しい こたえは どれですか。", "options": ["いそがしいですが、たのしいです", "とても おいしいです", "はい、500えんです", "とても さむいです"], "answer": 0, "explain": "「どうですか」 = bagaimana? Dijawab dengan keadaan pekerjaan."},
      {"q": "【場面：電話で】\n相手：「もしもし、たなかさんは いらっしゃいますか。」\nあなた：「___」\n\n正しい こたえは どれですか。", "options": ["はい、ちょっと おまちください", "はい、とても たかいです", "いいえ、おいしいです", "はい、3じに おきます"], "answer": 0, "explain": "Kata 「いらっしゃいますか」 = apakah (beliau) ada? Dijawab: 「おまちください」 (tunggu sebentar)."},
      {"q": "【場面：店で】\n店員：「いらっしゃいませ。」\nあなた：「すみません、この シャツを ___」\n\n正しい こたえは どれですか。", "options": ["みせて ください", "たべて ください", "のんで ください", "きいて ください"], "answer": 0, "explain": "Di toko pakaian, meminta lihat: 「みせて ください」 (tolong tunjukkan)."},
      {"q": "【場面：病院で】\n医者：「どうしましたか。」\nあなた：「___」\n\n正しい こたえは どれですか。", "options": ["あたまが いたいです", "とても おいしいです", "あした いきます", "500えんです"], "answer": 0, "explain": "「どうしましたか」 = ada apa? Pasien menjelaskan keluhan: 「あたまが いたいです」."},
      {"q": "【場面：学校で】\n先生：「しゅくだいは やりましたか。」\n学生：「___」\n\nまだ やって いない ばあい、ただしい こたえは どれですか。", "options": ["いいえ、まだです", "はい、やりました", "はい、とても おいしいです", "いいえ、3じです"], "answer": 0, "explain": "Belum mengerjakan: 「いいえ、まだです」 (belum)."},
      {"q": "【場面：駅で】\nあなた：「すみません、とうきょうへ いく でんしゃは どれですか。」\n駅員：「___」\n\n正しい こたえは どれですか。", "options": ["3ばんせんの でんしゃです", "とても おいしいです", "500えんです", "たなかさんです"], "answer": 0, "explain": "「どれですか」 = yang mana? Dijawab dengan lokasi kereta."},
      {"q": "【場面：ホテルで】\n受付：「チェックインを おねがいします。おなまえは？」\nあなた：「___」\n\n正しい こたえは どれですか。", "options": ["スミスです", "3じです", "500えんです", "とても おいしいです"], "answer": 0, "explain": "Dijawab dengan nama sendiri."},
      {"q": "【場面：家で】\n母：「もう ごはんを たべましたか。」\nあなた：「___」\n\nもう たべた ばあい、ただしい こたえは どれですか。", "options": ["はい、もう たべました", "いいえ、まだです", "はい、とても おいしいです", "はい、500えんです"], "answer": 0, "explain": "Sudah makan: 「はい、もう たべました」."},
      {"q": "【場面：パーティーで】\n友達：「たんじょうび おめでとう！」\nあなた：「___」\n\n正しい こたえは どれですか。", "options": ["ありがとうございます", "ごめんなさい", "おやすみなさい", "いただきます"], "answer": 0, "explain": "Ucapan selamat dibalas 「ありがとうございます」."},
      {"q": "【場面：会社で】\n上司：「コーヒー、のみますか。」\nあなた：「___」\n\n正しい こたえは どれですか。", "options": ["はい、おねがいします", "いいえ、おねがいします", "はい、いりません", "いいえ、どうぞ"], "answer": 0, "explain": "Menerima tawaran: 「はい、おねがいします」."},
      {"q": "【場面：電話で】\n相手：「もしもし、ABCかいしゃの たなかさん、おねがいします。」\nあなた：「___」\n\n正しい こたえは どれですか。", "options": ["はい、かしこまりました。しょうしょう おまちください", "はい、とても おいしいです", "いいえ、500えんです", "はい、たべました"], "answer": 0, "explain": "Menerima panggilan bisnis dengan sopan: 「かしこまりました」 + 「おまちください」."},
      {"q": "【場面：店で】\nあなた：「すみません、これは いくらですか。」\n店員：「___」\n\n正しい こたえは どれですか。", "options": ["500えんです", "3じです", "たなかです", "アメリカじんです"], "answer": 0, "explain": "「いくらですか」 = berapa harganya? Dijawab dengan harga."},
      {"q": "【場面：家で】\n友達：「いっしょに えいがを みに いきませんか。」\nあなた：「___」\n\nことわる ばあい、ただしい こたえは どれですか。", "options": ["すみません、ちょっと つごうが わるいです", "はい、ぜひ いきましょう", "ええ、たのしみです", "はい、いきます"], "answer": 0, "explain": "Menolak dengan halus: 「すみません、ちょっと つごうが わるいです」 (maaf, kebetulan tidak bisa)."},
      {"q": "【場面：学校で】\n友達：「あした テストが ありますね。べんきょうしましたか。」\nあなた：「___」\n\n正しい こたえは どれですか。", "options": ["はい、たくさん べんきょうしました", "はい、とても おいしいです", "いいえ、500えんです", "はい、3じです"], "answer": 0, "explain": "Menjawab sudah belajar: 「たくさん べんきょうしました」."},

      // ===== 聴解 (LISTENING) (46-50) =====
      {"q": "🎧 おんせいを きいて、ただしい こたえを えらんでください。", "audio": "きょうは あめですから、かさを もって いってください", "options": ["かさを もって いきます", "かさを もって いきません", "でんしゃに のります", "うちに かえります"], "answer": 0, "explain": "Audio: 「〜てください」 = tolong lakukan ~. Karena hujan, tolong bawa payung."},
      {"q": "🎧 おんせいを きいて、ただしい こたえを えらんでください。", "audio": "あしたは にちようびですから、がっこうは やすみです", "options": ["あした がっこうへ いきます", "あした がっこうへ いきません", "きょう がっこうへ いきます", "まいにち がっこうへ いきます"], "answer": 1, "explain": "Audio: 「〜ですから、やすみです」 = karena ~, libur. Besok tidak sekolah."},
      {"q": "🎧 おんせいを きいて、ただしい こたえを えらんでください。", "audio": "わたしは まいにち コーヒーを のみますが、こうちゃは のみません", "options": ["コーヒーを のみます", "こうちゃを のみます", "みずを のみます", "なにも のみません"], "answer": 0, "explain": "Audio: 「コーヒーを のみますが、こうちゃは のみません」 = minum kopi, tapi tidak minum teh."},
      {"q": "🎧 おんせいを きいて、ただしい こたえを えらんでください。", "audio": "へやに だれも いません", "options": ["へやに ひとが います", "へやに ひとが いません", "へやに ともだちが います", "へやに ねこが います"], "answer": 1, "explain": "Audio: 「だれも いません」 = tidak ada siapa-siapa."},
      {"q": "🎧 おんせいを きいて、ただしい こたえを えらんでください。", "audio": "この りょうりは おいしいですが、ちょっと からいです", "options": ["おいしいですが、からいです", "おいしくないですが、からくないです", "おいしいし、からくないです", "おいしくないし、からいです"], "answer": 0, "explain": "Audio: 「おいしいですが、ちょっと からいです」 = enak, tapi agak pedas."}
    ]
  },
     /* ============================================================
     LEVEL 12 — 文法・語彙・読解
     ------------------------------------------------------------
     Format: Pertanyaan & pilihan dalam BAHASA JEPANG.
     Penjelasan tetap bahasa Indonesia.
     ============================================================ */
  'level-12': {
    title: '文法・語彙・読解',
    kategori: 'N5',
    deskripsi: 'Tata bahasa (文法), kosakata (語彙), bacaan (読解), dan listening. Semua soal dalam bahasa Jepang.',
    soal: [
      // ===== 文法 (TATA BAHASA) (1-15) =====
      {"q": "「わたし___ がくせいです。」 ただしい じょしは どれですか。", "options": ["は", "を", "に", "で"], "answer": 0, "explain": "「は」 menandai topik kalimat."},
      {"q": "「ほん___ よみます。」 ただしい じょしは どれですか。", "options": ["を", "は", "に", "へ"], "answer": 0, "explain": "「を」 menandai objek dari kata kerja 「よみます」."},
      {"q": "「7じ___ おきます。」 ただしい じょしは どれですか。", "options": ["に", "で", "を", "と"], "answer": 0, "explain": "「に」 menandai waktu spesifik (jam)."},
      {"q": "「レストラン___ たべます。」 ただしい じょしは どれですか。", "options": ["で", "に", "を", "が"], "answer": 0, "explain": "「で」 menandai tempat berlangsungnya aksi."},
      {"q": "「ともだち___ あいます。」 ただしい じょしは どれですか。", "options": ["に", "を", "で", "と"], "answer": 0, "explain": "「あいます」 memakai partikel 「に」 untuk orang yang ditemui."},
      {"q": "「でんしゃ___ いきます。」 ただしい じょしは どれですか。", "options": ["で", "に", "を", "へ"], "answer": 0, "explain": "「で」 menandai alat transportasi."},
      {"q": "「これは わたし___ ほんです。」 ただしい じょしは どれですか。", "options": ["の", "は", "を", "と"], "answer": 0, "explain": "「の」 menunjukkan kepemilikan."},
      {"q": "「きょうしつ___ せんせいが います。」 ただしい じょしは どれですか。", "options": ["に", "で", "を", "と"], "answer": 0, "explain": "「に」 menandai tempat keberadaan dengan 「います」."},
      {"q": "Bentuk ますの ない形 (negatif) の 「たべます」 は どれですか。", "options": ["たべません", "たべました", "たべたいです", "たべてください"], "answer": 0, "explain": "Negatif dari 〜ます adalah 〜ません. 「たべます」→「たべません」."},
      {"q": "「たべます」の た形 (bentuk lampau) は どれですか。", "options": ["たべました", "たべません", "たべませんでした", "たべています"], "answer": 0, "explain": "Lampau dari 〜ます adalah 〜ました. 「たべます」→「たべました」."},
      {"q": "「いきます」の て形 は どれですか。", "options": ["いって", "いきて", "いいて", "いんで"], "answer": 0, "explain": "「いきます」 adalah pengecualian. Bentuk て = 「いって」."},
      {"q": "「のみます」の て形 は どれですか。", "options": ["のんで", "のみて", "のって", "のいて"], "answer": 0, "explain": "Kata kerja berakhiran 「み」 berubah menjadi 「んで」."},
      {"q": "「かきます」の ない形 は どれですか。", "options": ["かかない", "かきない", "かかない", "かくない"], "answer": 0, "explain": "Kata kerja Grup 1: 「き」 berubah menjadi 「か」 + 「ない」 = 「かかない」."},
      {"q": "「たべる」の 可能形 (bentuk potensial) は どれですか。", "options": ["たべられる", "たべれる", "たべできる", "たべさせる"], "answer": 0, "explain": "Bentuk potensial Grup 2: 「たべる」→「たべられる」 (bisa makan)."},
      {"q": "「する」の 可能形 は どれですか。", "options": ["できる", "される", "しれる", "させる"], "answer": 0, "explain": "Bentuk potensial 「する」 adalah 「できる」."},

      // ===== 語彙 (KOSAKATA) (16-30) =====
      {"q": "「会社員」の いみは なんですか。", "options": ["かいしゃで はたらく ひと", "がっこうで べんきょうする ひと", "びょういんで はたらく ひと", "レストランで つくる ひと"], "answer": 0, "explain": "「会社員」 (かいしゃいん) = karyawan perusahaan."},
      {"q": "「先生」の いみは なんですか。", "options": ["おしえる ひと", "べんきょうする ひと", "はたらく ひと", "たべる ひと"], "answer": 0, "explain": "「先生」 (せんせい) = guru/dokter (orang yang mengajar)."},
      {"q": "「学生」の いみは なんですか。", "options": ["がっこうで べんきょうする ひと", "おしえる ひと", "かいしゃで はたらく ひと", "びょういんの ひと"], "answer": 0, "explain": "「学生」 (がくせい) = pelajar/mahasiswa."},
      {"q": "「友達」の いみは なんですか。", "options": ["いっしょに あそぶ ひと", "かぞくの ひと", "せんせい", "おきゃくさん"], "answer": 0, "explain": "「友達」 (ともだち) = teman."},
      {"q": "「朝ごはん」は いつ たべますか。", "options": ["あさ", "ひる", "よる", "よなか"], "answer": 0, "explain": "「朝ごはん」 = makan pagi."},
      {"q": "「昼ごはん」は いつ たべますか。", "options": ["ひる", "あさ", "よる", "よあけ"], "answer": 0, "explain": "「昼ごはん」 = makan siang."},
      {"q": "「晩ごはん」は いつ たべますか。", "options": ["よる", "あさ", "ひる", "ごご"], "answer": 0, "explain": "「晩ごはん」 = makan malam."},
      {"q": "「水」の いみは なんですか。", "options": ["のみもの", "たべもの", "くだもの", "やさい"], "answer": 0, "explain": "「水」 (みず) = air (minuman)."},
      {"q": "「野菜」の いみは なんですか。", "options": ["たべものの ひとつ (やさい)", "くだもの", "のみもの", "おかし"], "answer": 0, "explain": "「野菜」 (やさい) = sayur."},
      {"q": "「学校」の いみは なんですか。", "options": ["べんきょうする ところ", "あそぶ ところ", "はたらく ところ", "ねる ところ"], "answer": 0, "explain": "「学校」 (がっこう) = sekolah."},
      {"q": "「病院」の いみは なんですか。", "options": ["びょうきの ときに いく ところ", "べんきょうする ところ", "かいものする ところ", "たべる ところ"], "answer": 0, "explain": "「病院」 (びょういん) = rumah sakit."},
      {"q": "「図書館」の いみは なんですか。", "options": ["ほんを よむ ところ", "たべる ところ", "あそぶ ところ", "はたらく ところ"], "answer": 0, "explain": "「図書館」 (としょかん) = perpustakaan."},
      {"q": "「駅」の いみは なんですか。", "options": ["でんしゃに のる ところ", "ひこうきに のる ところ", "たべる ところ", "ねる ところ"], "answer": 0, "explain": "「駅」 (えき) = stasiun."},
      {"q": "「空港」の いみは なんですか。", "options": ["ひこうきに のる ところ", "でんしゃに のる ところ", "バスに のる ところ", "ふねに のる ところ"], "answer": 0, "explain": "「空港」 (くうこう) = bandara."},
      {"q": "「お金」の いみは なんですか。", "options": ["かいものに つかう もの", "たべる もの", "よむ もの", "きる もの"], "answer": 0, "explain": "「お金」 (おかね) = uang."},

      // ===== 読解 (BACAAN) (31-45) =====
      {"q": "「わたしは まいにち 6じに おきます。あさごはんを たべて、でんしゃで がっこうへ いきます。がっこうは 8じから 3じまでです。」\n\nこの ひとは なにで がっこうへ いきますか。", "options": ["でんしゃ", "バス", "くるま", "じてんしゃ"], "answer": 0, "explain": "「でんしゃで がっこうへ いきます」 = pergi ke sekolah naik kereta."},
      {"q": "「たなかさんは まいあさ コーヒーを のみます。パンも たべます。それから しんぶんを よみます。」\n\nたなかさんは あさ、なにを のみますか。", "options": ["コーヒー", "おちゃ", "みず", "ジュース"], "answer": 0, "explain": "「コーヒーを のみます」 = minum kopi."},
      {"q": "「わたしの かぞくは よにんです。ちちと ははと あねと わたしです。ちちは かいしゃいんで、ははは せんせいです。」\n\nははの しごとは なんですか。", "options": ["せんせい", "かいしゃいん", "いしゃ", "がくせい"], "answer": 0, "explain": "「ははは せんせいです」 = ibu adalah guru."},
      {"q": "「きのう ともだちと えいがを みました。とても おもしろかったです。それから レストランで ばんごはんを たべました。」\n\nえいがは どうでしたか。", "options": ["おもしろかったです", "つまらなかったです", "こわかったです", "ながかったです"], "answer": 0, "explain": "「とても おもしろかったです」 = sangat menarik."},
      {"q": "「わたしは にほんごを べんきょうしています。まいにち ひらがなと かんじを れんしゅうします。にほんごは むずかしいですが、たのしいです。」\n\nにほんごは どうですか。", "options": ["むずかしいですが、たのしいです", "かんたんです", "つまらないです", "やさしいです"], "answer": 0, "explain": "「むずかしいですが、たのしいです」 = sulit tapi menyenangkan."},
      {"q": "「スーパーで りんごを みっつ かいました。ひとつ 100えんでした。ぜんぶで 300えんです。」\n\nぜんぶで いくらですか。", "options": ["300えん", "100えん", "200えん", "400えん"], "answer": 0, "explain": "100 × 3 = 300 yen."},
      {"q": "「あしたは にちようびです。わたしは こうえんへ いきます。こうえんで しゃしんを とります。それから ともだちと ひるごはんを たべます。」\n\nあした なにを しますか。", "options": ["こうえんで しゃしんを とります", "がっこうへ いきます", "かいしゃで はたらきます", "うちで ねます"], "answer": 0, "explain": "「こうえんで しゃしんを とります」 = memotret di taman."},
      {"q": "「わたしの しゅみは おんがくです。まいにち おんがくを ききます。ときどき コンサートへ いきます。」\n\nこの ひとの しゅみは なんですか。", "options": ["おんがく", "えいが", "りょこう", "スポーツ"], "answer": 0, "explain": "「しゅみは おんがくです」 = hobinya musik."},
      {"q": "「えきの ちかくに ゆうびんきょくが あります。ゆうびんきょくの となりに ぎんこうが あります。」\n\nぎんこうは どこに ありますか。", "options": ["ゆうびんきょくの となり", "えきの なか", "ゆうびんきょくの まえ", "こうえんの ちかく"], "answer": 0, "explain": "「ゆうびんきょくの となりに ぎんこうが あります」 = bank di sebelah kantor pos."},
      {"q": "「あさって テストが ありますから、きょうと あした べんきょうします。」\n\nこの ひとは いつ テストが ありますか。", "options": ["あさって", "きょう", "あした", "きのう"], "answer": 0, "explain": "「あさって テストが あります」 = lusa ada ujian."},
      {"q": "「わたしは さむい ときに あつい コーヒーを のみます。あつい ときは つめたい みずを のみます。」\n\nあつい ときに なにを のみますか。", "options": ["つめたい みず", "あつい コーヒー", "おちゃ", "ジュース"], "answer": 0, "explain": "「あつい ときは つめたい みずを のみます」 = kalau panas minum air dingin."},
      {"q": "「きのう デパートへ いきました。ふくを かいました。かばんも みましたが、たかかったですから、かいませんでした。」\n\nなにを かいませんでしたか。", "options": ["かばん", "ふく", "くつ", "ぼうし"], "answer": 0, "explain": "「かばんも みましたが、たかかったですから、かいませんでした」 = tidak membeli tas karena mahal."},
      {"q": "「ちちは まいにち 8じから 6じまで はたらきます。しごとは いそがしいですが、たのしいです。」\n\nちちは なんじから なんじまで はたらきますか。", "options": ["8じから 6じまで", "9じから 5じまで", "8じから 5じまで", "9じから 6じまで"], "answer": 0, "explain": "「8じから 6じまで はたらきます」 = bekerja dari jam 8 sampai 6."},
      {"q": "「わたしは にほんの アニメが すきです。にほんごを べんきょうする りゆうは アニメです。」\n\nなぜ にほんごを べんきょうしますか。", "options": ["アニメが すきですから", "しごとの ためです", "りょこうの ためです", "ともだちの ためです"], "answer": 0, "explain": "「にほんごを べんきょうする りゆうは アニメです」 = alasan belajar bahasa Jepang adalah anime."},
      {"q": "「わたしの うちの ちかくに こうえんが あります。こうえんには おおきい きが たくさん あります。ときどき こうえんで さんぽします。」\n\nこうえんに なにが ありますか。", "options": ["おおきい き", "おおきい いえ", "おおきい みせ", "おおきい がっこう"], "answer": 0, "explain": "「こうえんには おおきい きが たくさん あります」 = di taman ada banyak pohon besar."},

      // ===== 聴解 (LISTENING) (46-50) =====
      {"q": "🎧 おんせいを きいて、ただしい こたえを えらんでください。", "audio": "あしたの あさ 7じに おきてください", "options": ["あしたの あさ 7じに おきます", "きょうの あさ 7じに おきます", "あしたの よる 7じに ねます", "あさって おきます"], "answer": 0, "explain": "Audio: 「あしたの あさ 7じに おきてください」 = tolong bangun jam 7 besok pagi."},
      {"q": "🎧 おんせいを きいて、ただしい こたえを えらんでください。", "audio": "この みせの ラーメンは やすいですが、おいしくないです", "options": ["やすいですが、おいしくないです", "たかいですが、おいしいです", "やすいし、おいしいです", "たかいし、おいしくないです"], "answer": 0, "explain": "Audio: 「やすいですが、おいしくないです」 = murah tapi tidak enak."},
      {"q": "🎧 おんせいを きいて、ただしい こたえを えらんでください。", "audio": "ともだちに てがみを かいて、おくりました", "options": ["てがみを かいて、おくりました", "てがみを よんで、わすれました", "てがみを かいて、すてました", "てがみを かきましたが、おくりませんでした"], "answer": 0, "explain": "Audio: 「かいて、おくりました」 = menulis surat, lalu mengirimnya."},
      {"q": "🎧 おんせいを きいて、ただしい こたえを えらんでください。", "audio": "びょういんへ いってから、くすりを のみました", "options": ["びょういんへ いって、それから くすりを のみました", "くすりを のんで、それから びょういんへ いきました", "びょういんへ いきませんでした", "くすりを のみませんでした"], "answer": 0, "explain": "Audio: 「〜てから」 = setelah ~. Pergi ke rumah sakit dulu, baru minum obat."},
      {"q": "🎧 おんせいを きいて、ただしい こたえを えらんでください。", "audio": "へやに だれか いますか。", "options": ["へやに だれか いますか と きいて います", "へやに だれも いません と いって います", "へやに います と いって います", "へやに いません と いって います"], "answer": 0, "explain": "Audio: 「だれか いますか」 = apakah ada seseorang? Ini kalimat TANYA, bukan pernyataan."}
    ]
  },
     /* ============================================================
     LEVEL 13 — 漢字・熟語・読み書き
     ------------------------------------------------------------
     Format: Pertanyaan & pilihan dalam BAHASA JEPANG.
     Fokus: Kanji N5, jukugo, dan pemakaian kanji.
     ============================================================ */
  'level-13': {
    title: '漢字・熟語・読み書き',
    kategori: 'N5',
    deskripsi: 'Latihan khusus kanji N5: cara baca (読み), gabungan kanji (熟語), dan pemakaian kanji dalam kalimat.',
    soal: [
      // ===== 漢字の読み (BACA KANJI) (1-15) =====
      {"q": "「山」の よみかたは なんですか。", "options": ["やま / さん", "かわ / せん", "うみ / かい", "もり / しん"], "answer": 0, "explain": "「山」 = やま (kunyomi), さん (onyomi). Contoh: 「富士山」 (ふじさん)."},
      {"q": "「川」の よみかたは なんですか。", "options": ["かわ / せん", "やま / さん", "うみ / かい", "いけ / ち"], "answer": 0, "explain": "「川」 = かわ (kunyomi), せん (onyomi). Contoh: 「川口」 (かわぐち)."},
      {"q": "「天」の よみかたは なんですか。", "options": ["てん / あま", "ち / じ", "ひ / にち", "つき / げつ"], "answer": 0, "explain": "「天」 = てん (onyomi), あま (kunyomi). Contoh: 「天気」 (てんき)."},
      {"q": "「気」の よみかたは なんですか。", "options": ["き / け", "てん / あま", "ち / じ", "ひ / にち"], "answer": 0, "explain": "「気」 = き / け. Contoh: 「元気」 (げんき), 「天気」 (てんき)."},
      {"q": "「雨」の よみかたは なんですか。", "options": ["あめ / う", "ゆき / せつ", "かぜ / ふう", "くも / うん"], "answer": 0, "explain": "「雨」 = あめ (kunyomi), う (onyomi). Contoh: 「大雨」 (おおあめ)."},
      {"q": "「空」の よみかたは なんですか。", "options": ["そら / くう", "うみ / かい", "あめ / う", "かぜ / ふう"], "answer": 0, "explain": "「空」 = そら (kunyomi), くう (onyomi). Contoh: 「空港」 (くうこう)."},
      {"q": "「花」の よみかたは なんですか。", "options": ["はな / か", "き / もく", "くさ / そう", "は / よう"], "answer": 0, "explain": "「花」 = はな (kunyomi), か (onyomi). Contoh: 「花見」 (はなみ)."},
      {"q": "「魚」の よみかたは なんですか。", "options": ["さかな / ぎょ", "とり / ちょう", "うま / ば", "うし / ぎゅう"], "answer": 0, "explain": "「魚」 = さかな (kunyomi), ぎょ (onyomi). Contoh: 「金魚」 (きんぎょ)."},
      {"q": "「肉」の よみかたは なんですか。", "options": ["にく", "さかな", "やさい", "くだもの"], "answer": 0, "explain": "「肉」 (にく) = daging. Contoh: 「牛肉」 (ぎゅうにく)."},
      {"q": "「米」の よみかたは なんですか。", "options": ["こめ / べい", "むぎ / ばく", "にく / にく", "まめ / とう"], "answer": 0, "explain": "「米」 = こめ (kunyomi), べい (onyomi). Contoh: 「お米」 (おこめ)."},
      {"q": "「電気」の よみかたは なんですか。", "options": ["でんき", "てんき", "でんしゃ", "でんわ"], "answer": 0, "explain": "「電気」 (でんき) = listrik. Jangan tertukar dengan 「天気」 (てんき) = cuaca."},
      {"q": "「電車」の よみかたは なんですか。", "options": ["でんしゃ", "でんわ", "でんき", "じどうしゃ"], "answer": 0, "explain": "「電車」 (でんしゃ) = kereta listrik."},
      {"q": "「電話」の よみかたは なんですか。", "options": ["でんわ", "でんき", "でんしゃ", "でんぽう"], "answer": 0, "explain": "「電話」 (でんわ) = telepon."},
      {"q": "「人口」の よみかたは なんですか。", "options": ["じんこう", "にんこう", "ひとぐち", "じんぐち"], "answer": 0, "explain": "「人口」 (じんこう) = populasi penduduk."},
      {"q": "「天気」の よみかたは なんですか。", "options": ["てんき", "でんき", "てんけ", "あまき"], "answer": 0, "explain": "「天気」 (てんき) = cuaca."},

      // ===== 熟語 (JUKUGO/GABUNGAN KANJI) (16-30) =====
      {"q": "「学校」の いみは なんですか。", "options": ["べんきょうする ところ", "はたらく ところ", "あそぶ ところ", "たべる ところ"], "answer": 0, "explain": "「学校」 (がっこう) = sekolah."},
      {"q": "「先生」の いみは なんですか。", "options": ["おしえる ひと", "べんきょうする ひと", "はたらく ひと", "りょうりする ひと"], "answer": 0, "explain": "「先生」 (せんせい) = guru/dokter (orang yang mengajar)."},
      {"q": "「学生」の いみは なんですか。", "options": ["がっこうで べんきょうする ひと", "おしえる ひと", "はたらく ひと", "りょうりする ひと"], "answer": 0, "explain": "「学生」 (がくせい) = pelajar/mahasiswa."},
      {"q": "「大学」の いみは なんですか。", "options": ["より たかい がっこう", "ちいさい がっこう", "せんせいの がっこう", "びょういん"], "answer": 0, "explain": "「大学」 (だいがく) = universitas (sekolah tinggi)."},
      {"q": "「日本語」の いみは なんですか。", "options": ["にほんの ことば", "にほんの ひと", "にほんの たべもの", "にほんの ところ"], "answer": 0, "explain": "「日本語」 (にほんご) = bahasa Jepang."},
      {"q": "「日本人」の いみは なんですか。", "options": ["にほんの ひと", "にほんの ことば", "にほんの まち", "にほんの がっこう"], "answer": 0, "explain": "「日本人」 (にほんじん) = orang Jepang."},
      {"q": "「外国」の いみは なんですか。", "options": ["ほかの くに", "じぶんの くに", "ちいさい くに", "おおきい くに"], "answer": 0, "explain": "「外国」 (がいこく) = luar negeri."},
      {"q": "「外国人」の いみは なんですか。", "options": ["ほかの くにの ひと", "にほんの ひと", "ちいさい くにの ひと", "ともだち"], "answer": 0, "explain": "「外国人」 (がいこくじん) = orang asing."},
      {"q": "「毎日」の いみは なんですか。", "options": ["いちにちも かかさず", "ときどき", "たまに", "いつも いちにち"], "answer": 0, "explain": "「毎日」 (まいにち) = setiap hari."},
      {"q": "「毎週」の いみは なんですか。", "options": ["いっしゅうかんごとに", "いちにちごとに", "いちねんごとに", "いっかげつごとに"], "answer": 0, "explain": "「毎週」 (まいしゅう) = setiap minggu."},
      {"q": "「毎年」の いみは なんですか。", "options": ["いちねんごとに", "いちにちごとに", "いっしゅうかんごとに", "いっかげつごとに"], "answer": 0, "explain": "「毎年」 (まいとし / まいねん) = setiap tahun."},
      {"q": "「一日」の いみは なんですか。", "options": ["ある ひ / ついたち", "ふつか", "みっか", "よっか"], "answer": 0, "explain": "「一日」 = ついたち (tanggal 1) atau いちにち (satu hari)."},
      {"q": "「四月」の よみかたは なんですか。", "options": ["しがつ", "よんがつ", "しつき", "よんつき"], "answer": 0, "explain": "「四月」 (しがつ) = April. Perhatikan: 4 bulan = しがつ, bukan よんがつ."},
      {"q": "「七月」の よみかたは なんですか。", "options": ["しちがつ", "なながつ", "しつき", "ななつき"], "answer": 0, "explain": "「七月」 (しちがつ) = Juli. Bacaan resmi しちがつ, meskipun orang Jepang juga pakai なながつ."},
      {"q": "「九月」の よみかたは なんですか。", "options": ["くがつ", "きゅうがつ", "くつき", "きゅうつき"], "answer": 0, "explain": "「九月」 (くがつ) = September. Bacaan くがつ, bukan きゅうがつ."},

      // ===== 漢字の書き (TULIS KANJI) (31-40) =====
      {"q": "「やま」は どの 漢字ですか。", "options": ["山", "川", "海", "森"], "answer": 0, "explain": "「やま」 = 「山」 (gunung)."},
      {"q": "「かわ」は どの 漢字ですか。", "options": ["川", "山", "海", "池"], "answer": 0, "explain": "「かわ」 = 「川」 (sungai)."},
      {"q": "「うみ」は どの 漢字ですか。", "options": ["海", "山", "川", "池"], "answer": 0, "explain": "「うみ」 = 「海」 (laut)."},
      {"q": "「あめ」は どの 漢字ですか。", "options": ["雨", "雪", "風", "雲"], "answer": 0, "explain": "「あめ」 = 「雨」 (hujan)."},
      {"q": "「ゆき」は どの 漢字ですか。", "options": ["雪", "雨", "風", "雲"], "answer": 0, "explain": "「ゆき」 = 「雪」 (salju)."},
      {"q": "「そら」は どの 漢字ですか。", "options": ["空", "海", "山", "川"], "answer": 0, "explain": "「そら」 = 「空」 (langit)."},
      {"q": "「はな」は どの 漢字ですか。", "options": ["花", "草", "木", "葉"], "answer": 0, "explain": "「はな」 = 「花」 (bunga)."},
      {"q": "「やさい」は どの 漢字ですか。", "options": ["野菜", "果物", "肉", "魚"], "answer": 0, "explain": "「やさい」 = 「野菜」 (sayur)."},
      {"q": "「くだもの」は どの 漢字ですか。", "options": ["果物", "野菜", "肉", "魚"], "answer": 0, "explain": "「くだもの」 = 「果物」 (buah)."},
      {"q": "「ぎゅうにく」は どの 漢字ですか。", "options": ["牛肉", "魚肉", "豚肉", "鶏肉"], "answer": 0, "explain": "「ぎゅうにく」 = 「牛肉」 (daging sapi). 「豚肉」 (ぶたにく) = daging babi, 「鶏肉」 (とりにく) = daging ayam."},

      // ===== 文章読解 (BACAAN) (41-45) =====
      {"q": "「わたしは 毎朝 6時に 起きます。それから、顔を 洗って、朝ごはんを 食べます。7時半に 家を 出て、電車で 会社へ 行きます。」\n\nこの ひとは なんじに おきますか。", "options": ["6時", "7時半", "7時", "8時"], "answer": 0, "explain": "「毎朝 6時に 起きます」 = bangun jam 6 setiap pagi."},
      {"q": "「田中さんは 大学生です。毎日 図書館で 勉強します。日本語と 英語を 勉強しています。将来、日本で 働きたいです。」\n\n田中さんは どこで 勉強しますか。", "options": ["図書館", "会社", "家", "学校"], "answer": 0, "explain": "「毎日 図書館で 勉強します」 = belajar di perpustakaan setiap hari."},
      {"q": "「明日は 日曜日です。天気が いいですから、友達と 海へ 行きます。海で 写真を たくさん 撮ります。それから、レストランで 昼ごはんを 食べます。」\n\nあした なにを しますか。", "options": ["海へ 行って、写真を 撮ります", "家で 休みます", "学校へ 行きます", "会社で 働きます"], "answer": 0, "explain": "「海へ 行きます。海で 写真を たくさん 撮ります」 = pergi ke laut dan memotret banyak."},
      {"q": "「わたしの 家族は 四人です。父と 母と 姉と わたしです。父は 会社員で、母は 先生です。姉は 大学生です。わたしは 高校生です。」\n\nこの ひとの かぞくは なんにんですか。", "options": ["四人", "三人", "五人", "六人"], "answer": 0, "explain": "「家族は 四人です」 = keluarga ada 4 orang."},
      {"q": "「きのう、スーパーで りんごを 五つ 買いました。一つ 百円でした。それから、牛乳も 買いました。牛乳は 二百円でした。」\n\nぜんぶで いくらですか。", "options": ["700円", "500円", "600円", "800円"], "answer": 0, "explain": "りんご: 100 × 5 = 500円, 牛乳: 200円. Total: 500 + 200 = 700円."},

      // ===== 聴解 (LISTENING) (46-50) =====
      {"q": "🎧 おんせいを きいて、ただしい こたえを えらんでください。", "audio": "わたしは 毎朝 七時に 起きます", "options": ["毎朝 七時に 起きます", "毎晩 七時に 寝ます", "毎朝 六時に 起きます", "毎朝 八時に 起きます"], "answer": 0, "explain": "Audio: 「毎朝 七時に 起きます」 = bangun jam 7 setiap pagi."},
      {"q": "🎧 おんせいを きいて、ただしい こたえを えらんでください。", "audio": "この 店の 魚は とても おいしいです", "options": ["この 店の 魚は おいしいです", "この 店の 肉は おいしいです", "この 店の 野菜は おいしいです", "この 店の 魚は おいしくないです"], "answer": 0, "explain": "Audio: 「魚は とても おいしいです」 = ikannya sangat enak."},
      {"q": "🎧 おんせいを きいて、ただしい こたえを えらんでください。", "audio": "明日 雨が 降るでしょう", "options": ["あした 雨が 降ります", "きょう 雨が 降ります", "あした 雪が 降ります", "あした 晴れます"], "answer": 0, "explain": "Audio: 「明日 雨が 降るでしょう」 = besok mungkin hujan."},
      {"q": "🎧 おんせいを きいて、ただしい こたえを えらんでください。", "audio": "外国人の 友達が 日本語を 勉強しています", "options": ["外国人の 友達が 日本語を 勉強しています", "日本人の 友達が 外国語を 勉強しています", "外国人の 友達が 中国語を 勉強しています", "外国人は 日本語を 勉強しません"], "answer": 0, "explain": "Audio: 「外国人の 友達が 日本語を 勉強しています」 = teman orang asing sedang belajar bahasa Jepang."},
      {"q": "🎧 おんせいを きいて、ただしい こたえを えらんでください。", "audio": "毎週 日曜日に 家族と 買い物に 行きます", "options": ["毎週 日曜日に 家族と 買い物に 行きます", "毎日 家族と 買い物に 行きます", "毎週 月曜日に 家族と 買い物に 行きます", "日曜日に 一人で 買い物に 行きます"], "answer": 0, "explain": "Audio: 「毎週 日曜日に 家族と 買い物に 行きます」 = setiap hari Minggu pergi belanja dengan keluarga."}
    ]
  },
     /* ============================================================
     LEVEL 14 — 会話特訓 (Latihan Khusus Percakapan)
     ------------------------------------------------------------
     Format: Pertanyaan & pilihan dalam BAHASA JEPANG.
     Fokus: Kaiwa situasional — respons yang tepat dalam dialog.
     ============================================================ */
  'level-14': {
    title: '会話特訓',
    kategori: 'N5',
    deskripsi: 'Latihan percakapan (会話) situasional: percakapan harian, belanja, kantor, sekolah, dan perjalanan.',
    soal: [
      // ===== 日常会話 (PERCAKAPAN HARIAN) (1-15) =====
      {"q": "【あさ、ともだちに あいました】\nともだち：「おはよう。」\nあなた：「___」", "options": ["おはよう", "こんばんは", "おやすみ", "さようなら"], "answer": 0, "explain": "Salam pagi dibalas dengan 「おはよう」."},
      {"q": "【しごとの あと、どうりょうに あいました】\nどうりょう：「お疲れ様です。」\nあなた：「___」", "options": ["お疲れ様です", "おはようございます", "いただきます", "おやすみなさい"], "answer": 0, "explain": "「お疲れ様です」 dibalas dengan 「お疲れ様です」 di kantor."},
      {"q": "【よる、ねる まえに】\nかぞく：「おやすみなさい。」\nあなた：「___」", "options": ["おやすみなさい", "おはよう", "こんにちは", "いただきます"], "answer": 0, "explain": "Salam sebelum tidur dibalas dengan 「おやすみなさい」."},
      {"q": "【はじめて ひとに あいました】\nあなた：「はじめまして。___」", "options": ["よろしくお願いします", "おやすみなさい", "いただきます", "ごちそうさま"], "answer": 0, "explain": "Saat pertama kali bertemu: 「はじめまして。よろしくお願いします」."},
      {"q": "【しゅみを きかれました】\nともだち：「しゅみは なんですか。」\nあなた：「___」", "options": ["しゅみは おんがくです", "しゅみは 3じです", "しゅみは 500えんです", "しゅみは たなかです"], "answer": 0, "explain": "Menjawab hobi: 「しゅみは 〜です」."},
      {"q": "【かぞくの ことを きかれました】\nともだち：「かぞくは なんにんですか。」\nあなた：「___」", "options": ["よにんです", "よじです", "よんまいです", "よんさつです"], "answer": 0, "explain": "Jumlah orang: 「〜にん」. 「よにん」 = 4 orang."},
      {"q": "【てんきの はなし】\nともだち：「きょうは あついですね。」\nあなた：「___」", "options": ["そうですね。とても あついです", "いいえ、おいしいです", "はい、500えんです", "はい、たなかです"], "answer": 0, "explain": "Setuju dengan cuaca: 「そうですね」 + komentar."},
      {"q": "【しゅうまつの よてい】\nともだち：「しゅうまつ、なにを しますか。」\nあなた：「___」", "options": ["ともだちと えいがを みます", "ともだちと 500えんです", "ともだちと 3じです", "ともだちと たなかです"], "answer": 0, "explain": "Menjawab rencana: 「〜を します」."},
      {"q": "【あいさつ】\nあなたが うちを でる とき：「___」", "options": ["いってきます", "ただいま", "おかえりなさい", "おやすみなさい"], "answer": 0, "explain": "Saat pergi dari rumah: 「いってきます」."},
      {"q": "【あいさつ】\nあなたが うちに かえった とき：「___」", "options": ["ただいま", "いってきます", "いってらっしゃい", "おやすみなさい"], "answer": 0, "explain": "Saat pulang ke rumah: 「ただいま」."},
      {"q": "【あいさつ】\nかぞくが うちを でる とき、あなた：「___」", "options": ["いってらっしゃい", "いってきます", "ただいま", "おかえりなさい"], "answer": 0, "explain": "Balasan saat orang pergi: 「いってらっしゃい」."},
      {"q": "【あいさつ】\nかぞくが うちに かえった とき、あなた：「___」", "options": ["おかえりなさい", "いってらっしゃい", "いってきます", "ただいま"], "answer": 0, "explain": "Balasan saat orang pulang: 「おかえりなさい」."},
      {"q": "【しょくじの まえ】\nあなた：「___」", "options": ["いただきます", "ごちそうさまでした", "おやすみなさい", "いってきます"], "answer": 0, "explain": "Sebelum makan: 「いただきます」."},
      {"q": "【しょくじの あと】\nあなた：「___」", "options": ["ごちそうさまでした", "いただきます", "おかえりなさい", "いってきます"], "answer": 0, "explain": "Setelah makan: 「ごちそうさまでした」."},
      {"q": "【あやまる】\nあなた：「すみません、___」", "options": ["おくれました", "おいしかったです", "たかいです", "おいしいです"], "answer": 0, "explain": "Minta maaf terlambat: 「すみません、おくれました」."},

      // ===== 買い物・レストラン (BELANJA & RESTORAN) (16-25) =====
      {"q": "【みせで】\n店員：「いらっしゃいませ。」\nあなた：「___」", "options": ["すみません、これは いくらですか", "すみません、おいしいです", "すみません、たなかです", "すみません、3じです"], "answer": 0, "explain": "Menanyakan harga: 「これは いくらですか」."},
      {"q": "【みせで】\n店員：「500えんです。」\nあなた：「___」", "options": ["じゃあ、これを ください", "じゃあ、3じを ください", "じゃあ、たなかを ください", "じゃあ、おいしいを ください"], "answer": 0, "explain": "Membeli: 「これを ください」."},
      {"q": "【レストランで】\n店員：「ごちゅうもんは おきまりですか。」\nあなた：「___」", "options": ["はい、ラーメンを おねがいします", "はい、3じを おねがいします", "はい、500えんを おねがいします", "はい、たなかを おねがいします"], "answer": 0, "explain": "Memesan: 「〜を おねがいします」."},
      {"q": "【レストランで】\n店員：「おのみものは なにに しますか。」\nあなた：「___」", "options": ["おちゃを おねがいします", "3じを おねがいします", "たなかを おねがいします", "おいしいを おねがいします"], "answer": 0, "explain": "Memesan minuman: 「〜を おねがいします」."},
      {"q": "【レストランで たべた あと】\nあなた：「___」\n店員：「ありがとうございました。」", "options": ["ごちそうさまでした", "いただきます", "はじめまして", "おやすみなさい"], "answer": 0, "explain": "Setelah makan: 「ごちそうさまでした」."},
      {"q": "【みせで】\nあなた：「すみません、ほかの いろは ありますか。」\n店員：「はい、あかと あおが あります。」\nあなた：「___」", "options": ["じゃあ、あかを ください", "じゃあ、3じを ください", "じゃあ、たなかを ください", "じゃあ、おいしいを ください"], "answer": 0, "explain": "Memilih warna: 「あかを ください」."},
      {"q": "【みせで】\nあなた：「これを ください。」\n店員：「ありがとうございます。___」\n(おかねを はらう とき)", "options": ["500えんで おねがいします", "3じで おねがいします", "たなかで おねがいします", "おいしいで おねがいします"], "answer": 0, "explain": "Membayar: 「〜えんで おねがいします」."},
      {"q": "【みせで】\nあなた：「カードで はらえますか。」\n店員：「はい、___」", "options": ["カードで おねがいします", "3じで おねがいします", "たなかで おねがいします", "おいしいで おねがいします"], "answer": 0, "explain": "Bayar dengan kartu: 「カードで おねがいします」."},
      {"q": "【レストランで】\nあなた：「すみません、___を ください。」\n(struk)", "options": ["レシート", "たなか", "おいしい", "3じ"], "answer": 0, "explain": "Minta struk: 「レシートを ください」."},
      {"q": "【みせで】\n店員：「おつりです。」\nあなた：「___」", "options": ["どうも ありがとうございます", "いただきます", "おやすみなさい", "いってきます"], "answer": 0, "explain": "Terima kembalian: 「どうも ありがとうございます」."},

      // ===== 会社・学校 (KANTOR & SEKOLAH) (26-35) =====
      {"q": "【かいしゃで】\nあなた：「おはようございます。___」\n(まいにち の あいさつ)", "options": ["きょうも よろしく おねがいします", "きょうも おいしいです", "きょうも たかいです", "きょうも 3じです"], "answer": 0, "explain": "Salam pagi di kantor: 「きょうも よろしく おねがいします」."},
      {"q": "【かいしゃで】\nぶちょう：「この しりょう、コピーして ください。」\nあなた：「___」", "options": ["はい、かしこまりました", "はい、おいしいです", "はい、たかいです", "はい、3じです"], "answer": 0, "explain": "Menerima perintah dengan sopan: 「かしこまりました」."},
      {"q": "【かいしゃで】\nあなたが さきに かえる とき：「___」", "options": ["お先に 失礼します", "おかえりなさい", "ただいま", "いただきます"], "answer": 0, "explain": "Pulang duluan dari kantor: 「お先に 失礼します」."},
      {"q": "【かいしゃで】\nぶちょう：「コーヒー、のみますか。」\nあなた：「___」", "options": ["はい、おねがいします", "いいえ、おねがいします", "はい、いりません", "はい、おいしいです"], "answer": 0, "explain": "Menerima tawaran: 「はい、おねがいします」."},
      {"q": "【かいしゃで でんわ】\nあなた：「もしもし、ABCかいしゃの たなかさん、おねがいします。」\n相手：「はい、かしこまりました。しょうしょう おまちください。」\nあなた：「___」", "options": ["はい、おねがいします", "はい、たかいです", "はい、おいしいです", "はい、3じです"], "answer": 0, "explain": "Menunggu sebentar di telepon: 「はい、おねがいします」."},
      {"q": "【がっこうで】\n先生：「しゅくだいは やりましたか。」\nあなた：「はい、___」", "options": ["やりました", "おいしかったです", "たかかったです", "3じでした"], "answer": 0, "explain": "Sudah mengerjakan PR: 「やりました」."},
      {"q": "【がっこうで】\n先生：「これは なんですか。」\nあなた：「___」", "options": ["これは 日本語の 本です", "これは たかいです", "これは 3じです", "これは おいしいです"], "answer": 0, "explain": "Menjawab benda: 「これは 〜です」."},
      {"q": "【がっこうで】\nともだち：「日本語の 勉強は どうですか。」\nあなた：「___」", "options": ["おもしろいですが、ちょっと むずかしいです", "とても おいしいです", "500えんです", "たなかさんです"], "answer": 0, "explain": "Menjawab tentang pelajaran: 「おもしろいですが、むずかしいです」."},
      {"q": "【がっこうで】\n先生：「よく できましたね。」\nあなた：「___」", "options": ["ありがとうございます", "ごめんなさい", "いただきます", "おやすみなさい"], "answer": 0, "explain": "Diberi pujian: 「ありがとうございます」."},
      {"q": "【がっこうで】\nともだち：「あした、テストが ありますね。」\nあなた：「___」", "options": ["そうですね。がんばりましょう", "そうですね。おいしいですね", "そうですね。たかいですね", "そうですね。3じですね"], "answer": 0, "explain": "Setuju tentang ujian: 「そうですね。がんばりましょう」."},

      // ===== 旅行・道案内 (TRAVEL & ARAH) (36-45) =====
      {"q": "【みちで】\nあなた：「すみません、えきは どこですか。」\nひと：「あの こうさてんを みぎへ まがって ください。」\nあなた：「___」", "options": ["ありがとうございます", "おいしいです", "たなかです", "3じです"], "answer": 0, "explain": "Berterima kasih setelah diberi arah: 「ありがとうございます」."},
      {"q": "【えきで】\nあなた：「すみません、とうきょうへ いく でんしゃは どれですか。」\n駅員：「3ばんせんの でんしゃです。」\nあなた：「___」", "options": ["ありがとうございます", "おいしいです", "たかいです", "たなかです"], "answer": 0, "explain": "Berterima kasih setelah diberi info."},
      {"q": "【えきで】\nあなた：「とうきょうまで いくらですか。」\n駅員：「500えんです。」\nあなた：「___」", "options": ["じゃあ、きっぷを いちまい ください", "じゃあ、おいしいのを ください", "じゃあ、たなかを ください", "じゃあ、3じを ください"], "answer": 0, "explain": "Beli tiket: 「きっぷを いちまい ください」."},
      {"q": "【えきで】\nあなた：「とうきょうまで どのくらい かかりますか。」\n駅員：「でんしゃで 30ぷん ぐらいです。」\nあなた：「___」", "options": ["わかりました。ありがとうございます", "おいしいです", "たかいです", "たなかです"], "answer": 0, "explain": "Mengerti + terima kasih: 「わかりました。ありがとうございます」."},
      {"q": "【ホテルで】\n受付：「いらっしゃいませ。」\nあなた：「___を おねがいします。」", "options": ["チェックイン", "おいしい", "たなか", "3じ"], "answer": 0, "explain": "Check-in: 「チェックインを おねがいします」."},
      {"q": "【ホテルで】\n受付：「おなまえを おねがいします。」\nあなた：「___」", "options": ["スミスです", "3じです", "500えんです", "おいしいです"], "answer": 0, "explain": "Memberi nama: 「スミスです」."},
      {"q": "【みちで】\nあなた：「すみません、トイレは どこですか。」\nひと：「2かいです。」\nあなた：「___」", "options": ["ありがとうございます", "おいしいです", "たかいです", "たなかです"], "answer": 0, "explain": "Terima kasih setelah diberi info."},
      {"q": "【みちで】\nひと：「どこから きましたか。」\nあなた：「___」", "options": ["インドネシアから きました", "3じから きました", "500えんから きました", "おいしいから きました"], "answer": 0, "explain": "Menjawab asal: 「〜から きました」."},
      {"q": "【みちで】\nひと：「にほんは はじめてですか。」\nあなた：「___」", "options": ["はい、はじめてです", "はい、おいしいです", "はい、たかいです", "はい、3じです"], "answer": 0, "explain": "Menjawab: 「はい、はじめてです」 (ya, pertama kali)."},
      {"q": "【みちで】\nあなた：「すみません、しゃしんを とって もらえますか。」\nひと：「はい、いいですよ。」\nあなた：「___」", "options": ["ありがとうございます。おねがいします", "おいしいです", "たかいです", "たなかです"], "answer": 0, "explain": "Minta tolong foto: 「ありがとうございます。おねがいします」."},

      // ===== 聴解 (LISTENING) (46-50) =====
      {"q": "🎧 おんせいを きいて、ただしい こたえを えらんでください。", "audio": "すみません、これは いくらですか", "options": ["いくらですか と きいて います", "なにですか と きいて います", "どこですか と きいて います", "だれですか と きいて います"], "answer": 0, "explain": "Audio: 「いくらですか」 = berapa harganya? Ini menanyakan harga."},
      {"q": "🎧 おんせいを きいて、ただしい こたえを えらんでください。", "audio": "おはようございます。きょうも よろしく おねがいします", "options": ["あさの あいさつです", "よるの あいさつです", "わかれる ときの あいさつです", "たべる ときの あいさつです"], "answer": 0, "explain": "Audio: 「おはようございます」 = salam pagi."},
      {"q": "🎧 おんせいを きいて、ただしい こたえを えらんでください。", "audio": "ありがとうございます。とても おいしかったです", "options": ["たべた あとの おれいです", "たべる まえの あいさつです", "ねる まえの あいさつです", "わかれる ときの あいさつです"], "answer": 0, "explain": "Audio: 「おいしかったです」 = enak (lampau), diucapkan setelah makan."},
      {"q": "🎧 おんせいを きいて、ただしい こたえを えらんでください。", "audio": "すみません、えきは どこですか", "options": ["みちを きいて います", "たべものを きいて います", "ねだんを きいて います", "じかんを きいて います"], "answer": 0, "explain": "Audio: 「えきは どこですか」 = di mana stasiun? Ini menanyakan arah."},
      {"q": "🎧 おんせいを きいて、ただしい こたえを えらんでください。", "audio": "お先に 失礼します", "options": ["さきに かえる ときの ことばです", "あさの あいさつです", "たべる ときの ことばです", "ねる ときの ことばです"], "answer": 0, "explain": "Audio: 「お先に 失礼します」 = permisi pulang duluan (di kantor)."}
    ]
  },
     /* ============================================================
     LEVEL 15 — 読解特訓 (Latihan Khusus Bacaan)
     ------------------------------------------------------------
     Format: Pertanyaan & pilihan dalam BAHASA JEPANG.
     Fokus: Membaca pemahaman (読解) — dari pendek hingga panjang.
     ============================================================ */
  'level-15': {
    title: '読解特訓',
    kategori: 'N5',
    deskripsi: 'Latihan membaca pemahaman (読解) tingkat N5: bacaan pendek, sedang, dan panjang dengan pertanyaan.',
    soal: [
      // ===== 短文読解 (BACAAN PENDEK) (1-20) =====
      {"q": "「わたしは まいにち 7じに おきます。」\n\nなんじに おきますか。", "options": ["7じ", "6じ", "8じ", "9じ"], "answer": 0, "explain": "「7じに おきます」 = bangun jam 7."},
      {"q": "「わたしの しゅみは おんがくです。」\n\nしゅみは なんですか。", "options": ["おんがく", "スポーツ", "えいが", "どくしょ"], "answer": 0, "explain": "「しゅみは おんがくです」 = hobinya musik."},
      {"q": "「あしたは にちようびです。」\n\nあしたは なんようびですか。", "options": ["にちようび", "どようび", "げつようび", "きんようび"], "answer": 0, "explain": "「あしたは にちようびです」 = besok hari Minggu."},
      {"q": "「この ほんは とても おもしろいです。」\n\nこの ほんは どうですか。", "options": ["おもしろいです", "つまらないです", "むずかしいです", "たかいです"], "answer": 0, "explain": "「とても おもしろいです」 = sangat menarik."},
      {"q": "「わたしは コーヒーより おちゃが すきです。」\n\nなにが いちばん すきですか。", "options": ["おちゃ", "コーヒー", "みず", "ジュース"], "answer": 0, "explain": "「おちゃが すきです」 = lebih suka teh (daripada kopi)."},
      {"q": "「きょうは さむいですから、コートを きます。」\n\nなぜ コートを きますか。", "options": ["さむいですから", "あついですから", "あめですから", "たかいですから"], "answer": 0, "explain": "「さむいですから」 = karena dingin."},
      {"q": "「わたしは がくせいです。がっこうで にほんごを べんきょうします。」\n\nどこで にほんごを べんきょうしますか。", "options": ["がっこう", "うち", "としょかん", "かいしゃ"], "answer": 0, "explain": "「がっこうで べんきょうします」 = belajar di sekolah."},
      {"q": "「あには かいしゃいんで、あねは いしゃです。」\n\nあねの しごとは なんですか。", "options": ["いしゃ", "かいしゃいん", "せんせい", "がくせい"], "answer": 0, "explain": "「あねは いしゃです」 = kakak perempuan adalah dokter."},
      {"q": "「きのう あめでしたから、うちに いました。」\n\nきのう なにを しましたか。", "options": ["うちに いました", "こうえんへ いきました", "かいものに いきました", "ともだちに あいました"], "answer": 0, "explain": "「うちに いました」 = tinggal di rumah (karena hujan)."},
      {"q": "「この ケーキは ひとつ 300えんです。」\n\nケーキは いくらですか。", "options": ["300えん", "200えん", "400えん", "500えん"], "answer": 0, "explain": "「ひとつ 300えんです」 = satu buah 300 yen."},
      {"q": "「わたしは にほんごが すこし わかります。」\n\nにほんごが どのくらい わかりますか。", "options": ["すこし わかります", "たくさん わかります", "ぜんぜん わかりません", "とても じょうずです"], "answer": 0, "explain": "「すこし わかります」 = sedikit mengerti."},
      {"q": "「きょうは てんきが いいですから、さんぽします。」\n\nなぜ さんぽしますか。", "options": ["てんきが いいですから", "あめですから", "さむいですから", "いそがしいですから"], "answer": 0, "explain": "「てんきが いいですから」 = karena cuacanya bagus."},
      {"q": "「わたしは えいがより ほんを よむ ほうが すきです。」\n\nなにが すきですか。", "options": ["ほんを よむ こと", "えいがを みる こと", "おんがくを きく こと", "りょうりを つくる こと"], "answer": 0, "explain": "「ほんを よむ ほうが すきです」 = lebih suka membaca buku."},
      {"q": "「この みせは やすいですが、おいしくないです。」\n\nこの みせは どうですか。", "options": ["やすいですが、おいしくないです", "たかいですが、おいしいです", "やすいし、おいしいです", "たかいし、おいしくないです"], "answer": 0, "explain": "「やすいですが、おいしくないです」 = murah tapi tidak enak."},
      {"q": "「わたしは まいあさ シャワーを あびてから、あさごはんを たべます。」\n\nなにを さきに しますか。", "options": ["シャワー", "あさごはん", "べんきょう", "さんぽ"], "answer": 0, "explain": "「シャワーを あびてから」 = setelah mandi (dulu), baru makan."},
      {"q": "「ちちは まいにち おおさかへ いきます。しごとが おおさかに あります。」\n\nちちは どこへ いきますか。", "options": ["おおさか", "とうきょう", "きょうと", "なごや"], "answer": 0, "explain": "「おおさかへ いきます」 = pergi ke Osaka."},
      {"q": "「ともだちと えいがを みました。とても たのしかったです。」\n\nえいがは どうでしたか。", "options": ["たのしかったです", "つまらなかったです", "こわかったです", "かなしかったです"], "answer": 0, "explain": "「とても たのしかったです」 = sangat menyenangkan."},
      {"q": "「この かばんは おもいですが、とても べんりです。」\n\nこの かばんは どうですか。", "options": ["おもいですが、べんりです", "かるいですが、べんりです", "おもいし、ふべんです", "かるいし、ふべんです"], "answer": 0, "explain": "「おもいですが、べんりです」 = berat tapi praktis."},
      {"q": "「にほんごは むずかしいですが、おもしろいです。まいにち べんきょうします。」\n\nにほんごは どうですか。", "options": ["むずかしいですが、おもしろいです", "かんたんです", "つまらないです", "やさしいです"], "answer": 0, "explain": "「むずかしいですが、おもしろいです」 = sulit tapi menarik."},
      {"q": "「ともだちは びょうきです。だから、きょう みまいに いきます。」\n\nなぜ みまいに いきますか。", "options": ["ともだちが びょうきですから", "ともだちが げんきですから", "ともだちが いそがしいですから", "ともだちが いえに いないですから"], "answer": 0, "explain": "「ともだちが びょうきですから」 = karena teman sakit."},

      // ===== 中文読解 (BACAAN SEDANG) (21-35) =====
      {"q": "「わたしは まいにち 6じに おきます。シャワーを あびて、あさごはんを たべます。7じはんに うちを でて、でんしゃで かいしゃへ いきます。しごとは 9じから 5じまでです。」\n\nなんじに うちを でますか。", "options": ["7じはん", "6じ", "9じ", "5じ"], "answer": 0, "explain": "「7じはんに うちを でます」 = keluar rumah jam 7.30."},
      {"q": "「やまださんは だいがくせいです。まいにち としょかんで べんきょうします。にほんごと えいごを べんきょうしています。あしたは テストが ありますから、きょうは としょかんで よる 10じまで べんきょうします。」\n\nなぜ よる 10じまで べんきょうしますか。", "options": ["あした テストが ありますから", "きょう テストが ありますから", "ひまですから", "ともだちが きますから"], "answer": 0, "explain": "「あした テストが ありますから」 = karena besok ada ujian."},
      {"q": "「わたしの かぞくは よにんです。ちちと ははと いもうとと わたしです。ちちは ぎんこういんで、ははは せんせいです。いもうとは こうこうせいです。」\n\nちちは どこで はたらきますか。", "options": ["ぎんこう", "がっこう", "びょういん", "かいしゃ"], "answer": 0, "explain": "「ちちは ぎんこういんです」 = ayah karyawan bank."},
      {"q": "「きのう ともだちと きょうとへ いきました。しんかんせんで 2じかん かかりました。ふるい おてらを たくさん みました。とても たのしかったです。」\n\nなにで きょうとへ いきましたか。", "options": ["しんかんせん", "でんしゃ", "バス", "くるま"], "answer": 0, "explain": "「しんかんせんで 2じかん かかりました」 = naik shinkansen 2 jam."},
      {"q": "「あした ともだちと こうえんへ いきます。こうえんで おべんとうを たべます。それから、しゃしんを とります。てんきが いいですから、とても たのしいです。」\n\nあした なにを しますか。", "options": ["こうえんで おべんとうを たべて、しゃしんを とります", "うちで テレビを みます", "がっこうで べんきょうします", "かいしゃで はたらきます"], "answer": 0, "explain": "「おべんとうを たべて、しゃしんを とります」 = makan bento lalu memotret."},
      {"q": "「わたしの しゅみは りょうりです。まいにち よる ごはんを つくります。にほんりょうりが とくに すきです。カレーと ラーメンが つくれます。」\n\nこの ひとの しゅみは なんですか。", "options": ["りょうり", "りょこう", "おんがく", "スポーツ"], "answer": 0, "explain": "「しゅみは りょうりです」 = hobinya memasak."},
      {"q": "「えきの ちかくに スーパーが あります。スーパーの となりに ぎんこうが あります。ぎんこうの まえに ゆうびんきょくが あります。」\n\nスーパーの となりに なにが ありますか。", "options": ["ぎんこう", "ゆうびんきょく", "びょういん", "がっこう"], "answer": 0, "explain": "「スーパーの となりに ぎんこうが あります」 = di sebelah supermarket ada bank."},
      {"q": "「わたしは ふゆが すきです。ふゆは さむいですが、ゆきが きれいです。ゆきの なかで しゃしんを とるのが すきです。」\n\nなぜ ふゆが すきですか。", "options": ["ゆきが きれいですから", "あついですから", "はるに さくらが さきますから", "うみで およげますから"], "answer": 0, "explain": "「ゆきが きれいです」 = karena saljunya indah."},
      {"q": "「たなかさんは まいあさ 6じはんに おきます。それから、いぬと さんぽします。あさごはんは パンと たまごです。8じに かいしゃへ いきます。」\n\nたなかさんは あさ、なにを しますか。", "options": ["いぬと さんぽします", "としょかんで べんきょうします", "ともだちと あいます", "えいがを みます"], "answer": 0, "explain": "「いぬと さんぽします」 = jalan-jalan dengan anjing."},
      {"q": "「きのう スーパーで りんごを みっつ かいました。ひとつ 100えんでした。それから、ぎゅうにゅうも かいました。ぎゅうにゅうは 200えんでした。」\n\nぜんぶで いくらですか。", "options": ["500えん", "300えん", "700えん", "1000えん"], "answer": 0, "explain": "りんご: 100 × 3 = 300. ぎゅうにゅう: 200. Total = 500 yen."},
      {"q": "「わたしは にほんごを べんきょうしています。にほんごは むずかしいですが、たのしいです。まいにち かんじを 10こ おぼえます。らいげつ テストが あります。」\n\nまいにち なにを おぼえますか。", "options": ["かんじを 10こ", "ひらがなを 10こ", "たんごを 100こ", "ぶんぽうを 10こ"], "answer": 0, "explain": "「まいにち かんじを 10こ おぼえます」 = menghafal 10 kanji setiap hari."},
      {"q": "「ちちは まいにち 8じから 6じまで はたらきます。しごとは いそがしいですが、たのしいです。にちようびは やすみです。」\n\nちちは いつ やすみますか。", "options": ["にちようび", "どようび", "まいにち", "げつようび"], "answer": 0, "explain": "「にちようびは やすみです」 = hari Minggu libur."},
      {"q": "「わたしの うちの ちかくに こうえんが あります。こうえんには おおきい きが たくさん あります。ときどき こうえんで さんぽします。いぬと いっしょに いきます。」\n\nこうえんに なにが ありますか。", "options": ["おおきい き", "おおきい いえ", "おおきい みせ", "おおきい がっこう"], "answer": 0, "explain": "「こうえんには おおきい きが たくさん あります」 = di taman ada banyak pohon besar."},
      {"q": "「きのう かぜを ひきました。ねつが ありましたから、びょういんへ いきました。くすりを のんで、はやく ねました。きょうは すこし げんきです。」\n\nなぜ びょういんへ いきましたか。", "options": ["ねつが ありましたから", "ひまですから", "ともだちが いますから", "かいものに いきますから"], "answer": 0, "explain": "「ねつが ありましたから」 = karena demam."},
      {"q": "「わたしは まいにち おんがくを ききながら べんきょうします。おんがくは クラシックが すきです。べんきょうは 2じかん ぐらい します。」\n\nこの ひとは どうやって べんきょうしますか。", "options": ["おんがくを ききながら", "テレビを みながら", "ごはんを たべながら", "ともだちと いっしょに"], "answer": 0, "explain": "「おんがくを ききながら べんきょうします」 = belajar sambil mendengarkan musik."},

      // ===== 長文読解 (BACAAN PANJANG) (36-45) =====
      {"q": "「わたしの いちにちは あさ 6じに はじまります。6じに おきて、6じはんに あさごはんを たべます。7じに うちを でて、でんしゃで がっこうへ いきます。がっこうは 8じから 3じまでです。がっこうで にほんごと えいごを べんきょうします。うちへ かえるのは 5じごろです。よるは しゅくだいを して、10じに ねます。」\n\nこの ひとは よる、なにを しますか。", "options": ["しゅくだいを します", "テレビを みます", "おんがくを ききます", "ともだちと あいます"], "answer": 0, "explain": "「よるは しゅくだいを します」 = malam mengerjakan PR."},
      {"q": "「スミスさんは アメリカから きました。いま とうきょうの だいがくで にほんごを べんきょうしています。スミスさんの しゅみは りょこうです。にほんの いろいろな ところへ いきました。きょねんは きょうとと ならへ いきました。ことしは ほっかいどうへ いく つもりです。にほんりょうりも すきです。とくに すしと てんぷらが すきです。」\n\nスミスさんは ことし、どこへ いきますか。", "options": ["ほっかいどう", "きょうと", "なら", "おおさか"], "answer": 0, "explain": "「ことしは ほっかいどうへ いく つもりです」 = tahun ini berniat ke Hokkaido."},
      {"q": "「きのうは わたしの たんじょうびでした。ともだちが うちへ きました。みんなで パーティーを しました。ケーキを たべて、おんがくを きいて、たくさん はなしました。ともだちから プレゼントも もらいました。とても うれしかったです。よる 11じごろまで あそびました。」\n\nきのうは どうでしたか。", "options": ["とても うれしかったです", "とても かなしかったです", "とても つまらなかったです", "とても こわかったです"], "answer": 0, "explain": "「とても うれしかったです」 = sangat senang."},
      {"q": "「わたしは にほんごの べんきょうを はじめてから、1ねんに なります。はじめは ひらがなも わかりませんでした。でも、いまは ひらがな、かたかな、そして かんじも すこし わかります。にほんごで かんたんな かいわが できます。これからも がんばる つもりです。」\n\nこの ひとは 1ねんまえ、なにが わかりませんでしたか。", "options": ["ひらがな", "にほんごの ぶんぽう", "かんじ", "カタカナ"], "answer": 0, "explain": "「はじめは ひらがなも わかりませんでした」 = awalnya tidak tahu hiragana."},
      {"q": "「たなかさんは ぎんこうで はたらいています。しごとは 9じから 5じまでです。でも、まいあさ 8じに かいしゃへ きます。しごとの あとで、ときどき ともだちと のみに いきます。しゅうまつは やすみです。どようびは ジムへ いって、にちようびは うちで ゆっくり します。たなかさんは りょうりが じょうずですから、ときどき うちで りょうりを します。」\n\nたなかさんは どようび、なにを しますか。", "options": ["ジムへ いきます", "りょうりを します", "ともだちと のみに いきます", "かいしゃへ いきます"], "answer": 0, "explain": "「どようびは ジムへ いって」 = hari Sabtu pergi ke gym."},
      {"q": "「わたしの まちには おおきい こうえんが あります。こうえんの ちかくに としょかんと びょういんが あります。としょかんは しずかで、べんきょうに いいです。ひまな とき、よく としょかんへ いきます。えきから あるいて 10ぷん ぐらいです。バスも あります。でんしゃより バスの ほうが ちかいです。」\n\nとしょかんは どんな ところですか。", "options": ["しずかで、べんきょうに いい ところ", "にぎやかで、たのしい ところ", "うるさくて、ふべんな ところ", "とおくて、ちかい ところ"], "answer": 0, "explain": "「としょかんは しずかで、べんきょうに いいです」 = perpustakaan tenang dan bagus untuk belajar."},
      {"q": "「わたしは まいにち かんじを べんきょうしています。かんじは おもしろいですが、とても むずかしいです。かんじを おぼえる ために、まいにち 5かい かきます。ときどき かんじの カードも つかいます。にほんごの かんじは 2000こ ぐらい あります。わたしは まだ 300こ ぐらいしか おぼえて いません。これから もっと べんきょうしたいです。」\n\nこの ひとは なぜ まいにち 5かい かんじを かきますか。", "options": ["かんじを おぼえる ために", "しゅくだいですから", "せんせいに いわれましたから", "たのしいですから"], "answer": 0, "explain": "「かんじを おぼえる ために、まいにち 5かい かきます」 = untuk menghafal kanji, menulis 5x setiap hari."},
      {"q": "「きのう、わたしは ともだちと デパートへ いきました。デパートで ふくを みました。あかい セーターを かいました。そして、くつも かいました。それから、レストランで ひるごはんを たべました。たなかさんは カレーライスを たべて、わたしは ラーメンを たべました。とても おいしかったです。デパートの 8かいの レストランでした。」\n\nレストランは どこに ありましたか。", "options": ["デパートの 8かい", "デパートの 1かい", "デパートの 5かい", "デパートの ちか"], "answer": 0, "explain": "「デパートの 8かいの レストランでした」 = restoran di lantai 8 department store."},
      {"q": "「わたしは まいにち おんがくを ききながら べんきょうします。おんがくは ジャズが すきです。しずかな おんがくは べんきょうに いいです。ときどき カフェへ いって、コーヒーを のみながら べんきょうします。カフェは しずかで、おんがくも きれいです。いえでも べんきょうできますが、カフェの ほうが すきです。」\n\nこの ひとは どこで べんきょうする ほうが すきですか。", "options": ["カフェ", "いえ", "としょかん", "がっこう"], "answer": 0, "explain": "「カフェの ほうが すきです」 = lebih suka kafe."},
      {"q": "「わたしは にほんに 3ねん すんでいます。はじめは にほんごが ぜんぜん わかりませんでした。でも、いまは しごとで にほんごを つかいます。にほんの せいかつは とても べんりです。でんしゃも バスも あります。コンビニは 24じかん あいて います。にほんの たべものは おいしいです。とくに ラーメンが すきです。」\n\nこの ひとは どのくらい にほんに すんでいますか。", "options": ["3ねん", "1ねん", "5ねん", "10ねん"], "answer": 0, "explain": "「にほんに 3ねん すんでいます」 = sudah tinggal di Jepang 3 tahun."},
      {"q": "「きのう、わたしは びょういんへ いきました。あたまが いたくて、ねつも ありましたから。いしゃは やさしい ひとでした。『かぜですから、2、3にち やすんで ください。それから、この くすりを まいにち 3かい のんで ください』と いいました。きょうは かいしゃを やすみました。あしたも やすむ つもりです。」\n\nいしゃは なんと いいましたか。", "options": ["2、3にち やすんで ください", "すぐ しごとへ いって ください", "くすりを のまないで ください", "あした きて ください"], "answer": 0, "explain": "「2、3にち やすんで ください」 = istirahat 2-3 hari."},

      // ===== 聴解 (LISTENING) (46-50) =====
      {"q": "🎧 おんせいを きいて、ただしい こたえを えらんでください。", "audio": "わたしは まいにち おんがくを ききながら べんきょうします", "options": ["おんがくを ききながら べんきょうします", "テレビを みながら べんきょうします", "おんがくを きいてから べんきょうします", "べんきょうしてから おんがくを ききます"], "answer": 0, "explain": "Audio: 「おんがくを ききながら べんきょうします」 = belajar sambil mendengarkan musik."},
      {"q": "🎧 おんせいを きいて、ただしい こたえを えらんでください。", "audio": "あしたは てんきが いいですから、こうえんへ いきます", "options": ["あした こうえんへ いきます", "きょう こうえんへ いきます", "あした がっこうへ いきます", "あした うちに います"], "answer": 0, "explain": "Audio: 「あしたは こうえんへ いきます」 = besok ke taman."},
      {"q": "🎧 おんせいを きいて、ただしい こたえを えらんでください。", "audio": "きのう びょういんへ いきました。あたまが いたかったですから", "options": ["あたまが いたかったですから、びょういんへ いきました", "ねつが ありましたから、びょういんへ いきました", "おなかが いたかったですから、びょういんへ いきました", "げんきですから、びょういんへ いきました"], "answer": 0, "explain": "Audio: 「あたまが いたかったですから」 = karena kepala sakit."},
      {"q": "🎧 おんせいを きいて、ただしい こたえを えらんでください。", "audio": "わたしの かぞくは よにんです。ちちと ははと あねと わたしです", "options": ["かぞくは よにんです", "かぞくは さんにんです", "かぞくは ごにんです", "かぞくは ろくにんです"], "answer": 0, "explain": "Audio: 「かぞくは よにんです」 = keluarga ada 4 orang."},
      {"q": "🎧 おんせいを きいて、ただしい こたえを えらんでください。", "audio": "にほんごは むずかしいですが、とても たのしいです", "options": ["にほんごは むずかしいですが、たのしいです", "にほんごは かんたんで、たのしいです", "にほんごは むずかしくて、たのしくないです", "にほんごは やさしくて、おもしろいです"], "answer": 0, "explain": "Audio: 「むずかしいですが、たのしいです」 = sulit tapi menyenangkan."}
    ]
  }
   
};
