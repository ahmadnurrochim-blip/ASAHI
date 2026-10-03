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
         {
           q       : pertanyaan
           options : 4 pilihan
           answer  : index jawaban benar (0-3)
           explain : penjelasan jawaban
         }
       ]
     }
   
   Untuk tambah level baru → tinggal tambah 'level-2', 'level-3', dst.
   ============================================================ */

window.LEVELING_DATA = {

  /* ============================================================
     LEVEL 1 — Kosakata Dasar
     ============================================================ */
  'level-1': {
    title: 'Kosakata Dasar',
    kategori: 'N5',
    deskripsi: 'Uji hafalan kosakata dasar: salam, kata sehari-hari, dan benda sekitar.',
    soal: [
      {
        q: 'Apa arti dari 「こんにちは」?',
        options: ['Selamat pagi', 'Selamat siang', 'Selamat malam', 'Terima kasih'],
        answer: 1,
        explain: '「こんにちは」 = selamat siang. Dipakai saat bertemu di siang hari.'
      },
      {
        q: 'Apa arti dari 「ありがとう」?',
        options: ['Maaf', 'Permisi', 'Terima kasih', 'Selamat tinggal'],
        answer: 2,
        explain: '「ありがとう」 = terima kasih. Versi sopan: 「ありがとうございます」.'
      },
      {
        q: 'Bagaimana cara membaca 「おはよう」?',
        options: ['Ohayou', 'Konnichiwa', 'Konbanwa', 'Oyasumi'],
        answer: 0,
        explain: '「おはよう」 dibaca "ohayou" — selamat pagi (santai).'
      },
      {
        q: 'Apa arti dari 「さようなら」?',
        options: ['Halo', 'Selamat tinggal', 'Maaf', 'Silakan'],
        answer: 1,
        explain: '「さようなら」 = selamat tinggal (formal).'
      },
      {
        q: 'Apa arti dari 「こんばんは」?',
        options: ['Selamat pagi', 'Selamat siang', 'Selamat malam', 'Selamat tidur'],
        answer: 2,
        explain: '「こんばんは」 = selamat malam. Dipakai saat bertemu di malam hari.'
      },
      {
        q: 'Apa arti dari 「すみません」?',
        options: ['Selamat pagi', 'Terima kasih', 'Permisi / Maaf', 'Selamat malam'],
        answer: 2,
        explain: '「すみません」 = permisi / maaf. Juga bisa berarti "terima kasih" saat minta tolong.'
      },
      {
        q: 'Apa arti dari 「はい」?',
        options: ['Tidak', 'Ya', 'Mungkin', 'Nanti'],
        answer: 1,
        explain: '「はい」 = ya / betul.'
      },
      {
        q: 'Apa arti dari 「いいえ」?',
        options: ['Ya', 'Tidak', 'Terima kasih', 'Maaf'],
        answer: 1,
        explain: '「いいえ」 = tidak / bukan.'
      },
      {
        q: 'Apa arti dari 「水」?',
        options: ['Api', 'Angin', 'Air', 'Tanah'],
        answer: 2,
        explain: '「水」 dibaca "mizu" — air.'
      },
      {
        q: 'Apa arti dari 「食べる」?',
        options: ['Minum', 'Makan', 'Tidur', 'Berjalan'],
        answer: 1,
        explain: '「食べる」 dibaca "taberu" — makan.'
      }
    ]
  }

  // ============================================================
  // TAMBAH LEVEL LAIN DI SINI
  // ------------------------------------------------------------
  // Setelah level 1 sukses, tinggal tambah:
  //
  // 'level-2': {
  //   title: 'Kata Kerja Dasar',
  //   kategori: 'N5',
  //   deskripsi: '...',
  //   soal: [ ... ]
  // },
  // 'level-3': { ... }
  // ============================================================

};
