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
  }

  // ============================================================
  // LEVEL 2, 3, 4, ... TAMBAH DI SINI
  // ============================================================
  // Format sama seperti level-1.
  // Tinggal tambah: 'level-2': { title, kategori, deskripsi, soal: [...] }

};
