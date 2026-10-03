/* ============================================================
   BANK DATA MATERI — ASAHI MANDIRI
   ------------------------------------------------------------
   Setiap level punya:
     title : judul materi
     jp    : judul Jepang
     desc  : deskripsi singkat
     tips  : tips (opsional)
     vocab : array kosakata
       jp    : teks Jepang
       romaji: cara baca
       arti  : arti Indonesia
   ============================================================ */

window.MATERI_DATA = {

  /* ============================================================
     LEVEL 1 — Kosakata Dasar
     ============================================================ */
  'materi-1': {
    title: 'Kosakata Dasar',
    jp: '基本単語',
    desc: 'Hafalkan 20 kosakata bahasa Jepang paling dasar. Klik kartu untuk mendengar pelafalan.',
    tips: 'Fokus ke bunyi dulu, bukan urutan goresan. Ucapkan tiap kata sambil melihatnya, ulangi 2–3 kali.',
    vocab: [
      { jp:'こんにちは',   romaji:'Konnichiwa',  arti:'Halo / Selamat siang' },
      { jp:'ありがとう',   romaji:'Arigatou',    arti:'Terima kasih' },
      { jp:'さようなら',   romaji:'Sayounara',   arti:'Selamat tinggal' },
      { jp:'おはよう',     romaji:'Ohayou',      arti:'Selamat pagi' },
      { jp:'こんばんは',   romaji:'Konbanwa',    arti:'Selamat malam' },
      { jp:'すみません',   romaji:'Sumimasen',   arti:'Permisi / Maaf' },
      { jp:'はい',         romaji:'Hai',         arti:'Ya' },
      { jp:'いいえ',       romaji:'Iie',         arti:'Tidak' },
      { jp:'水',           romaji:'Mizu',        arti:'Air' },
      { jp:'本',           romaji:'Hon',         arti:'Buku' },
      { jp:'猫',           romaji:'Neko',        arti:'Kucing' },
      { jp:'犬',           romaji:'Inu',         arti:'Anjing' },
      { jp:'友達',         romaji:'Tomodachi',   arti:'Teman' },
      { jp:'先生',         romaji:'Sensei',      arti:'Guru' },
      { jp:'学生',         romaji:'Gakusei',     arti:'Siswa / Pelajar' },
      { jp:'食べる',       romaji:'Taberu',      arti:'Makan' },
      { jp:'飲む',         romaji:'Nomu',        arti:'Minum' },
      { jp:'行く',         romaji:'Iku',         arti:'Pergi' },
      { jp:'見る',         romaji:'Miru',        arti:'Melihat' },
      { jp:'学校',         romaji:'Gakkou',      arti:'Sekolah' }
    ]
  },

  /* ============================================================
     LEVEL 2 — Hiragana Dasar
     ============================================================ */
  'materi-2': {
    title: 'Hiragana Dasar',
    jp: 'ひらがな',
    desc: 'Hafalkan 20 huruf hiragana pertama: baris あ〜の. Klik kartu untuk mendengar pelafalan.',
    tips: 'Fokus ke bunyi dulu. Baris あ・か・さ・た・な adalah 5 baris pertama hiragana.',
    vocab: [
      { jp:'あ', romaji:'a',   arti:'Huruf a' },
      { jp:'い', romaji:'i',   arti:'Huruf i' },
      { jp:'う', romaji:'u',   arti:'Huruf u' },
      { jp:'え', romaji:'e',   arti:'Huruf e' },
      { jp:'お', romaji:'o',   arti:'Huruf o' },
      { jp:'か', romaji:'ka',  arti:'Huruf ka' },
      { jp:'き', romaji:'ki',  arti:'Huruf ki' },
      { jp:'く', romaji:'ku',  arti:'Huruf ku' },
      { jp:'け', romaji:'ke',  arti:'Huruf ke' },
      { jp:'こ', romaji:'ko',  arti:'Huruf ko' },
      { jp:'さ', romaji:'sa',  arti:'Huruf sa' },
      { jp:'し', romaji:'shi', arti:'Huruf shi' },
      { jp:'す', romaji:'su',  arti:'Huruf su' },
      { jp:'せ', romaji:'se',  arti:'Huruf se' },
      { jp:'そ', romaji:'so',  arti:'Huruf so' },
      { jp:'た', romaji:'ta',  arti:'Huruf ta' },
      { jp:'ち', romaji:'chi', arti:'Huruf chi' },
      { jp:'つ', romaji:'tsu', arti:'Huruf tsu' },
      { jp:'な', romaji:'na',  arti:'Huruf na' },
      { jp:'に', romaji:'ni',  arti:'Huruf ni' }
    ]
  },

  /* ============================================================
     LEVEL 3 — Katakana Dasar
     ============================================================ */
  'materi-3': {
    title: 'Katakana Dasar',
    jp: 'カタカナ',
    desc: 'Pelajari 20 huruf katakana pertama: baris ア〜ナ. Katakana dipakai untuk kata serapan asing.',
    tips: 'Katakana punya bunyi sama dengan hiragana, tapi bentuknya beda. Contoh: ア (a) = あ (a).',
    vocab: [
      { jp:'ア', romaji:'a',   arti:'Huruf a' },
      { jp:'イ', romaji:'i',   arti:'Huruf i' },
      { jp:'ウ', romaji:'u',   arti:'Huruf u' },
      { jp:'エ', romaji:'e',   arti:'Huruf e' },
      { jp:'オ', romaji:'o',   arti:'Huruf o' },
      { jp:'カ', romaji:'ka',  arti:'Huruf ka' },
      { jp:'キ', romaji:'ki',  arti:'Huruf ki' },
      { jp:'ク', romaji:'ku',  arti:'Huruf ku' },
      { jp:'ケ', romaji:'ke',  arti:'Huruf ke' },
      { jp:'コ', romaji:'ko',  arti:'Huruf ko' },
      { jp:'サ', romaji:'sa',  arti:'Huruf sa' },
      { jp:'シ', romaji:'shi', arti:'Huruf shi' },
      { jp:'ス', romaji:'su',  arti:'Huruf su' },
      { jp:'セ', romaji:'se',  arti:'Huruf se' },
      { jp:'ソ', romaji:'so',  arti:'Huruf so' },
      { jp:'タ', romaji:'ta',  arti:'Huruf ta' },
      { jp:'チ', romaji:'chi', arti:'Huruf chi' },
      { jp:'ツ', romaji:'tsu', arti:'Huruf tsu' },
      { jp:'テ', romaji:'te',  arti:'Huruf te' },
      { jp:'ナ', romaji:'na',  arti:'Huruf na' }
    ]
  },

  /* ============================================================
     LEVEL 4 — Angka & Hitungan
     ============================================================ */
  'materi-4': {
    title: 'Angka & Hitungan',
    jp: '数字',
    desc: 'Hafalkan 20 angka dasar bahasa Jepang dari 1 sampai 20, lengkap dengan kanji dan cara bacanya.',
    tips: 'Angka 1–10 adalah dasar. Untuk 11–19, tambahkan 十 (juu) di depan: 十一 = 11, 十二 = 12.',
    vocab: [
      { jp:'一',   romaji:'ichi',     arti:'1' },
      { jp:'二',   romaji:'ni',       arti:'2' },
      { jp:'三',   romaji:'san',      arti:'3' },
      { jp:'四',   romaji:'yon / shi', arti:'4' },
      { jp:'五',   romaji:'go',       arti:'5' },
      { jp:'六',   romaji:'roku',     arti:'6' },
      { jp:'七',   romaji:'nana / shichi', arti:'7' },
      { jp:'八',   romaji:'hachi',    arti:'8' },
      { jp:'九',   romaji:'kyuu',     arti:'9' },
      { jp:'十',   romaji:'juu',      arti:'10' },
      { jp:'十一', romaji:'juu-ichi', arti:'11' },
      { jp:'十二', romaji:'juu-ni',   arti:'12' },
      { jp:'十三', romaji:'juu-san',  arti:'13' },
      { jp:'十四', romaji:'juu-yon',  arti:'14' },
      { jp:'十五', romaji:'juu-go',   arti:'15' },
      { jp:'十六', romaji:'juu-roku', arti:'16' },
      { jp:'十七', romaji:'juu-nana', arti:'17' },
      { jp:'十八', romaji:'juu-hachi', arti:'18' },
      { jp:'十九', romaji:'juu-kyuu', arti:'19' },
      { jp:'二十', romaji:'ni-juu',   arti:'20' }
    ]
  },

  /* ============================================================
     LEVEL 5 — Sapaan Sehari-hari
     ============================================================ */
  'materi-5': {
    title: 'Sapaan Sehari-hari',
    jp: '挨拶',
    desc: 'Hafalkan 20 sapaan bahasa Jepang paling sering dipakai, lengkap dengan kapan waktu yang tepat mengucapkannya.',
    tips: 'Sapaan Jepang sangat terikat waktu. Pagi pakai おはよう, siang pakai こんにちは, malam pakai こんばんは.',
    vocab: [
      { jp:'おはようございます', romaji:'Ohayou gozaimasu', arti:'Selamat pagi (sopan)' },
      { jp:'おはよう',           romaji:'Ohayou',           arti:'Selamat pagi (santai)' },
      { jp:'こんにちは',         romaji:'Konnichiwa',       arti:'Selamat siang' },
      { jp:'こんばんは',         romaji:'Konbanwa',         arti:'Selamat malam' },
      { jp:'おやすみなさい',     romaji:'Oyasuminasai',     arti:'Selamat tidur (sopan)' },
      { jp:'おやすみ',           romaji:'Oyasumi',          arti:'Selamat tidur (santai)' },
      { jp:'はじめまして',       romaji:'Hajimemashite',    arti:'Senang berkenalan' },
      { jp:'お久しぶりです',     romaji:'Ohisashiburi desu', arti:'Lama tak jumpa' },
      { jp:'いらっしゃいませ',   romaji:'Irasshaimase',     arti:'Selamat datang' },
      { jp:'ようこそ',           romaji:'Youkoso',          arti:'Selamat datang' },
      { jp:'さようなら',         romaji:'Sayounara',        arti:'Selamat tinggal' },
      { jp:'じゃあね',           romaji:'Jaa ne',           arti:'Sampai jumpa' },
      { jp:'また明日',           romaji:'Mata ashita',      arti:'Sampai besok' },
      { jp:'お元気で',           romaji:'Ogenki de',        arti:'Jaga diri baik-baik' },
      { jp:'行ってきます',       romaji:'Ittekimasu',       arti:'Saya pergi dulu' },
      { jp:'行ってらっしゃい',   romaji:'Itterasshai',      arti:'Hati-hati di jalan' },
      { jp:'ただいま',           romaji:'Tadaima',          arti:'Saya pulang' },
      { jp:'おかえりなさい',     romaji:'Okaerinasai',      arti:'Selamat datang kembali' },
      { jp:'お疲れ様です',       romaji:'Otsukaresama desu', arti:'Terima kasih atas kerja kerasnya' },
      { jp:'よろしくお願いします', romaji:'Yoroshiku onegaishimasu', arti:'Mohon bantuannya' }
    ]
  },

  /* ============================================================
     LEVEL 6 — Keluarga & Orang
     ============================================================ */
  'materi-6': {
    title: 'Keluarga & Orang',
    jp: '家族',
    desc: 'Hafalkan 20 sebutan keluarga, orang, dan profesi dalam bahasa Jepang.',
    tips: 'Bahasa Jepang membedakan sebutan untuk keluarga sendiri dan keluarga orang lain.',
    vocab: [
      { jp:'家族',       romaji:'Kazoku',     arti:'Keluarga' },
      { jp:'父',         romaji:'Chichi',     arti:'Ayah (sendiri)' },
      { jp:'母',         romaji:'Haha',       arti:'Ibu (sendiri)' },
      { jp:'兄',         romaji:'Ani',        arti:'Kakak laki-laki' },
      { jp:'姉',         romaji:'Ane',        arti:'Kakak perempuan' },
      { jp:'弟',         romaji:'Otouto',     arti:'Adik laki-laki' },
      { jp:'妹',         romaji:'Imouto',     arti:'Adik perempuan' },
      { jp:'お父さん',   romaji:'Otousan',    arti:'Ayah (orang lain)' },
      { jp:'お母さん',   romaji:'Okaasan',    arti:'Ibu (orang lain)' },
      { jp:'お祖父さん', romaji:'Ojiisan',    arti:'Kakek' },
      { jp:'お祖母さん', romaji:'Obaasan',    arti:'Nenek' },
      { jp:'夫',         romaji:'Otto',       arti:'Suami' },
      { jp:'妻',         romaji:'Tsuma',      arti:'Istri' },
      { jp:'子供',       romaji:'Kodomo',     arti:'Anak' },
      { jp:'友達',       romaji:'Tomodachi',  arti:'Teman' },
      { jp:'隣人',       romaji:'Rinjin',     arti:'Tetangga' },
      { jp:'人',         romaji:'Hito',       arti:'Orang' },
      { jp:'先生',       romaji:'Sensei',     arti:'Guru / Dokter' },
      { jp:'学生',       romaji:'Gakusei',    arti:'Siswa / Pelajar' },
      { jp:'会社員',     romaji:'Kaishain',   arti:'Karyawan' }
    ]
  },

  /* ============================================================
     LEVEL 7 — Makanan & Minuman
     ============================================================ */
  'materi-7': {
    title: 'Makanan & Minuman',
    jp: '食べ物',
    desc: 'Hafalkan 20 kosakata makanan, minuman, dan istilah restoran dalam bahasa Jepang.',
    tips: 'Saat di restoran Jepang, kamu akan sering dengar いただきます (sebelum makan) dan ごちそうさまでした (setelah makan).',
    vocab: [
      { jp:'ご飯',     romaji:'Gohan',     arti:'Nasi / Makanan' },
      { jp:'パン',     romaji:'Pan',       arti:'Roti' },
      { jp:'麺',       romaji:'Men',       arti:'Mie' },
      { jp:'寿司',     romaji:'Sushi',     arti:'Sushi' },
      { jp:'ラーメン', romaji:'Raamen',    arti:'Ramen' },
      { jp:'肉',       romaji:'Niku',      arti:'Daging' },
      { jp:'魚',       romaji:'Sakana',    arti:'Ikan' },
      { jp:'野菜',     romaji:'Yasai',     arti:'Sayur' },
      { jp:'果物',     romaji:'Kudamono',  arti:'Buah' },
      { jp:'卵',       romaji:'Tamago',    arti:'Telur' },
      { jp:'水',       romaji:'Mizu',      arti:'Air' },
      { jp:'お茶',     romaji:'Ocha',      arti:'Teh' },
      { jp:'コーヒー', romaji:'Koohii',    arti:'Kopi' },
      { jp:'牛乳',     romaji:'Gyuunyuu',  arti:'Susu' },
      { jp:'ジュース', romaji:'Juusu',     arti:'Jus' },
      { jp:'ビール',   romaji:'Biiru',     arti:'Bir' },
      { jp:'朝ご飯',   romaji:'Asagohan',  arti:'Sarapan' },
      { jp:'昼ご飯',   romaji:'Hirugohan', arti:'Makan siang' },
      { jp:'晩ご飯',   romaji:'Bangohan',  arti:'Makan malam' },
      { jp:'お菓子',   romaji:'Okashi',    arti:'Kue / Snack' }
    ]
  },

  /* ============================================================
     LEVEL 8 — Waktu & Hari
     ============================================================ */
  'materi-8': {
    title: 'Waktu & Hari',
    jp: '時間',
    desc: 'Hafalkan 20 kosakata waktu dalam bahasa Jepang: jam, hari, bulan, dan istilah waktu sehari-hari.',
    tips: 'Untuk menanyakan waktu, pakai 何時ですか (nanji desu ka = "jam berapa?").',
    vocab: [
      { jp:'時間',     romaji:'Jikan',      arti:'Waktu / Jam' },
      { jp:'今',       romaji:'Ima',        arti:'Sekarang' },
      { jp:'今日',     romaji:'Kyou',       arti:'Hari ini' },
      { jp:'昨日',     romaji:'Kinou',      arti:'Kemarin' },
      { jp:'明日',     romaji:'Ashita',     arti:'Besok' },
      { jp:'朝',       romaji:'Asa',        arti:'Pagi' },
      { jp:'昼',       romaji:'Hiru',       arti:'Siang' },
      { jp:'夜',       romaji:'Yoru',       arti:'Malam' },
      { jp:'月曜日',   romaji:'Getsuyoubi', arti:'Senin' },
      { jp:'火曜日',   romaji:'Kayoubi',    arti:'Selasa' },
      { jp:'水曜日',   romaji:'Suiyoubi',   arti:'Rabu' },
      { jp:'木曜日',   romaji:'Mokuyoubi',  arti:'Kamis' },
      { jp:'金曜日',   romaji:'Kinyoubi',   arti:'Jumat' },
      { jp:'土曜日',   romaji:'Doyoubi',    arti:'Sabtu' },
      { jp:'日曜日',   romaji:'Nichiyoubi', arti:'Minggu' },
      { jp:'今月',     romaji:'Kongetsu',   arti:'Bulan ini' },
      { jp:'来月',     romaji:'Raigetsu',   arti:'Bulan depan' },
      { jp:'先月',     romaji:'Sengetsu',   arti:'Bulan lalu' },
      { jp:'今年',     romaji:'Kotoshi',    arti:'Tahun ini' },
      { jp:'来年',     romaji:'Rainen',     arti:'Tahun depan' }
    ]
  }

  /* Bagian B (level 9-15) menyusul */
};
