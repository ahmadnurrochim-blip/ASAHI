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
   

};
