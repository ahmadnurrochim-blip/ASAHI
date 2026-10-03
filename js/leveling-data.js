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
  }
};
