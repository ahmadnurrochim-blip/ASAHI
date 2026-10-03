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
  },

  /* ============================================================
     LEVEL 9 — Kata Kerja Dasar
     ============================================================ */
  'materi-9': {
    title: 'Kata Kerja Dasar',
    jp: '動詞',
    desc: 'Hafalkan 20 kata kerja bahasa Jepang paling sering dipakai, lengkap dengan bentuk sopan (ます).',
    tips: 'Kata kerja Jepang punya 2 bentuk: bentuk kamus (食べる) dan bentuk ます (食べます). Bentuk ます dipakai untuk bicara sopan.',
    vocab: [
      { jp:'食べる',   romaji:'Taberu',   arti:'Makan' },
      { jp:'飲む',     romaji:'Nomu',     arti:'Minum' },
      { jp:'行く',     romaji:'Iku',      arti:'Pergi' },
      { jp:'来る',     romaji:'Kuru',     arti:'Datang' },
      { jp:'帰る',     romaji:'Kaeru',    arti:'Pulang' },
      { jp:'歩く',     romaji:'Aruku',    arti:'Berjalan' },
      { jp:'走る',     romaji:'Hashiru',  arti:'Berlari' },
      { jp:'見る',     romaji:'Miru',     arti:'Melihat' },
      { jp:'聞く',     romaji:'Kiku',     arti:'Mendengar / Bertanya' },
      { jp:'読む',     romaji:'Yomu',     arti:'Membaca' },
      { jp:'書く',     romaji:'Kaku',     arti:'Menulis' },
      { jp:'話す',     romaji:'Hanasu',   arti:'Berbicara' },
      { jp:'する',     romaji:'Suru',     arti:'Melakukan' },
      { jp:'買う',     romaji:'Kau',      arti:'Membeli' },
      { jp:'売る',     romaji:'Uru',      arti:'Menjual' },
      { jp:'待つ',     romaji:'Matsu',    arti:'Menunggu' },
      { jp:'使う',     romaji:'Tsukau',   arti:'Menggunakan' },
      { jp:'作る',     romaji:'Tsukuru',  arti:'Membuat' },
      { jp:'分かる',   romaji:'Wakaru',   arti:'Mengerti' },
      { jp:'知る',     romaji:'Shiru',    arti:'Tahu / Mengetahui' }
    ]
  },

  /* ============================================================
     LEVEL 10 — Kata Sifat Dasar
     ============================================================ */
  'materi-10': {
    title: 'Kata Sifat Dasar',
    jp: '形容詞',
    desc: 'Hafalkan 20 kata sifat bahasa Jepang paling penting, lengkap dengan lawan katanya.',
    tips: 'Kata sifat Jepang dibagi 2: い-adjective (berakhiran い) dan な-adjective (butuh な saat menerangkan kata benda).',
    vocab: [
      { jp:'大きい',   romaji:'Ookii',     arti:'Besar' },
      { jp:'小さい',   romaji:'Chiisai',   arti:'Kecil' },
      { jp:'長い',     romaji:'Nagai',     arti:'Panjang' },
      { jp:'短い',     romaji:'Mijikai',   arti:'Pendek' },
      { jp:'暑い',     romaji:'Atsui',     arti:'Panas (cuaca)' },
      { jp:'寒い',     romaji:'Samui',     arti:'Dingin (cuaca)' },
      { jp:'熱い',     romaji:'Atsui',     arti:'Panas (benda)' },
      { jp:'冷たい',   romaji:'Tsumetai',  arti:'Dingin (benda)' },
      { jp:'高い',     romaji:'Takai',     arti:'Mahal / Tinggi' },
      { jp:'安い',     romaji:'Yasui',     arti:'Murah' },
      { jp:'新しい',   romaji:'Atarashii', arti:'Baru' },
      { jp:'古い',     romaji:'Furui',     arti:'Lama / Tua' },
      { jp:'若い',     romaji:'Wakai',     arti:'Muda' },
      { jp:'元気',     romaji:'Genki',     arti:'Sehat / Bersemangat' },
      { jp:'おいしい', romaji:'Oishii',    arti:'Lezat' },
      { jp:'甘い',     romaji:'Amai',      arti:'Manis' },
      { jp:'辛い',     romaji:'Karai',     arti:'Pedas' },
      { jp:'きれい',   romaji:'Kirei',     arti:'Cantik / Bersih' },
      { jp:'便利',     romaji:'Benri',     arti:'Praktis / Berguna' },
      { jp:'静か',     romaji:'Shizuka',   arti:'Tenang / Sepi' }
    ]
  },

  /* ============================================================
     LEVEL 11 — Partikel は・が・を
     ============================================================ */
  'materi-11': {
    title: 'Partikel は・が・を',
    jp: '助詞',
    desc: 'Kuasai 3 partikel paling penting dalam bahasa Jepang. Kunci untuk bisa menyusun kalimat sendiri.',
    tips: 'Tanpa partikel, kalimat Jepang tidak bisa tersusun. Hafalkan 3 ini dulu: は (topik), が (subjek), を (objek).',
    vocab: [
      { jp:'は', romaji:'wa',  arti:'Partikel topik kalimat' },
      { jp:'が', romaji:'ga',  arti:'Partikel subjek kalimat' },
      { jp:'を', romaji:'o',   arti:'Partikel objek kalimat' },
      { jp:'私は学生です。',       romaji:'Watashi wa gakusei desu',    arti:'Saya adalah pelajar.' },
      { jp:'これは本です。',       romaji:'Kore wa hon desu',           arti:'Ini adalah buku.' },
      { jp:'猫がいます。',         romaji:'Neko ga imasu',              arti:'Ada kucing.' },
      { jp:'私が行きます。',       romaji:'Watashi ga ikimasu',         arti:'Saya (yang) pergi.' },
      { jp:'ご飯を食べます。',     romaji:'Gohan o tabemasu',           arti:'Saya makan nasi.' },
      { jp:'本を読みます。',       romaji:'Hon o yomimasu',             arti:'Saya membaca buku.' },
      { jp:'私',                   romaji:'Watashi',                   arti:'Saya' },
      { jp:'あなた',               romaji:'Anata',                     arti:'Kamu' },
      { jp:'彼',                   romaji:'Kare',                      arti:'Dia (laki-laki)' },
      { jp:'彼女',                 romaji:'Kanojo',                    arti:'Dia (perempuan)' },
      { jp:'これ',                 romaji:'Kore',                      arti:'Ini' },
      { jp:'それ',                 romaji:'Sore',                      arti:'Itu' },
      { jp:'あれ',                 romaji:'Are',                       arti:'Itu (jauh)' },
      { jp:'学生',                 romaji:'Gakusei',                   arti:'Pelajar' },
      { jp:'本',                   romaji:'Hon',                       arti:'Buku' },
      { jp:'猫',                   romaji:'Neko',                      arti:'Kucing' },
      { jp:'ご飯',                 romaji:'Gohan',                     arti:'Nasi' }
    ]
  },

  /* ============================================================
     LEVEL 12 — Pola 〜です・〜ます
     ============================================================ */
  'materi-12': {
    title: 'Pola 〜です・〜ます',
    jp: '文法基礎',
    desc: 'Kuasai pola kalimat sopan dasar bahasa Jepang. Ini pondasi untuk semua percakapan formal.',
    tips: 'です dipakai di akhir kalimat kata benda. ます dipakai di akhir kalimat kata kerja.',
    vocab: [
      { jp:'〜は〜です',              romaji:'~ wa ~ desu',          arti:'"〜 adalah 〜" (positif)' },
      { jp:'〜は〜じゃありません',    romaji:'~ wa ~ ja arimasen',   arti:'"〜 bukan 〜" (negatif)' },
      { jp:'〜は〜でした',            romaji:'~ wa ~ deshita',        arti:'"〜 dulu adalah 〜" (lampau)' },
      { jp:'〜は〜じゃありませんでした', romaji:'~ wa ~ ja arimasen deshita', arti:'"〜 dulu bukan 〜" (lampau negatif)' },
      { jp:'〜を〜ます',              romaji:'~ o ~ masu',            arti:'"melakukan 〜" (positif)' },
      { jp:'〜を〜ません',            romaji:'~ o ~ masen',           arti:'"tidak melakukan 〜" (negatif)' },
      { jp:'〜を〜ました',            romaji:'~ o ~ mashita',         arti:'"sudah melakukan 〜" (lampau)' },
      { jp:'〜を〜ませんでした',      romaji:'~ o ~ masen deshita',   arti:'"tidak melakukan 〜" (lampau negatif)' },
      { jp:'私は学生です。',          romaji:'Watashi wa gakusei desu', arti:'Saya adalah pelajar.' },
      { jp:'私は学生じゃありません。', romaji:'Watashi wa gakusei ja arimasen', arti:'Saya bukan pelajar.' },
      { jp:'彼は先生でした。',        romaji:'Kare wa sensei deshita', arti:'Dia dulu seorang guru.' },
      { jp:'ご飯を食べます。',        romaji:'Gohan o tabemasu',      arti:'Saya makan nasi.' },
      { jp:'肉を食べません。',        romaji:'Niku o tabemasen',      arti:'Saya tidak makan daging.' },
      { jp:'昨日、本を読みました。',  romaji:'Kinou, hon o yomimashita', arti:'Kemarin saya membaca buku.' },
      { jp:'朝ご飯を食べませんでした。', romaji:'Asagohan o tabemasen deshita', arti:'Saya tidak makan sarapan.' },
      { jp:'学生',                    romaji:'Gakusei',                arti:'Pelajar' },
      { jp:'先生',                    romaji:'Sensei',                 arti:'Guru' },
      { jp:'ご飯',                    romaji:'Gohan',                  arti:'Nasi' },
      { jp:'肉',                      romaji:'Niku',                   arti:'Daging' },
      { jp:'本',                      romaji:'Hon',                    arti:'Buku' }
    ]
  },

  /* ============================================================
     LEVEL 13 — Partikel に・で・へ
     ============================================================ */
  'materi-13': {
    title: 'Partikel に・で・へ',
    jp: '助詞上級',
    desc: 'Kuasai 3 partikel lanjutan yang paling sering muncul setelah は・が・を.',
    tips: 'に = titik tujuan / waktu spesifik, で = tempat aksi / alat, へ = arah tujuan (lebih formal dari に).',
    vocab: [
      { jp:'に', romaji:'ni',  arti:'Titik tujuan / waktu / penerima' },
      { jp:'で', romaji:'de',  arti:'Tempat aksi / alat / bahan' },
      { jp:'へ', romaji:'e',   arti:'Arah tujuan (formal)' },
      { jp:'学校に行きます。',      romaji:'Gakkou ni ikimasu',       arti:'Pergi ke sekolah.' },
      { jp:'7時に起きます。',       romaji:'Shichi-ji ni okimasu',    arti:'Bangun jam 7.' },
      { jp:'友達に手紙を書きます。', romaji:'Tomodachi ni tegami o kakimasu', arti:'Menulis surat untuk teman.' },
      { jp:'学校で勉強します。',    romaji:'Gakkou de benkyou shimasu', arti:'Belajar di sekolah.' },
      { jp:'車で行きます。',        romaji:'Kuruma de ikimasu',       arti:'Pergi naik mobil.' },
      { jp:'日本語で話します。',    romaji:'Nihongo de hanashimasu',  arti:'Berbicara dalam bahasa Jepang.' },
      { jp:'日本へ行きます。',      romaji:'Nihon e ikimasu',         arti:'Pergi ke Jepang.' },
      { jp:'家へ帰ります。',        romaji:'Ie e kaerimasu',          arti:'Pulang ke rumah.' },
      { jp:'学校',                  romaji:'Gakkou',                  arti:'Sekolah' },
      { jp:'車',                    romaji:'Kuruma',                  arti:'Mobil' },
      { jp:'友達',                  romaji:'Tomodachi',               arti:'Teman' },
      { jp:'手紙',                  romaji:'Tegami',                  arti:'Surat' },
      { jp:'日本語',                romaji:'Nihongo',                 arti:'Bahasa Jepang' },
      { jp:'日本',                  romaji:'Nihon',                   arti:'Jepang' },
      { jp:'家',                    romaji:'Ie',                      arti:'Rumah' },
      { jp:'朝',                    romaji:'Asa',                     arti:'Pagi' },
      { jp:'夜',                    romaji:'Yoru',                    arti:'Malam' }
    ]
  },

  /* ============================================================
     LEVEL 14 — Tempat, Arah & Kata Tanya
     ============================================================ */
  'materi-14': {
    title: 'Tempat, Arah & Kata Tanya',
    jp: '場所',
    desc: 'Hafalkan 20 kosakata lokasi, arah, dan kata tanya penting dalam bahasa Jepang.',
    tips: 'Kata tanya selalu diakhiri partikel か di akhir kalimat. Contoh: どこですか (di mana?).',
    vocab: [
      { jp:'ここ',       romaji:'Koko',      arti:'Di sini' },
      { jp:'そこ',       romaji:'Soko',      arti:'Di situ' },
      { jp:'あそこ',     romaji:'Asoko',     arti:'Di sana' },
      { jp:'どこ',       romaji:'Doko',      arti:'Di mana?' },
      { jp:'どちら',     romaji:'Dochira',   arti:'Di mana? (sopan)' },
      { jp:'だれ',       romaji:'Dare',      arti:'Siapa?' },
      { jp:'どなた',     romaji:'Donata',    arti:'Siapa? (sopan)' },
      { jp:'なに / なん', romaji:'Nani / Nan', arti:'Apa?' },
      { jp:'いつ',       romaji:'Itsu',      arti:'Kapan?' },
      { jp:'なぜ / どうして', romaji:'Naze / Doushite', arti:'Mengapa?' },
      { jp:'どう',       romaji:'Dou',       arti:'Bagaimana?' },
      { jp:'右',         romaji:'Migi',      arti:'Kanan' },
      { jp:'左',         romaji:'Hidari',    arti:'Kiri' },
      { jp:'上',         romaji:'Ue',        arti:'Atas' },
      { jp:'下',         romaji:'Shita',     arti:'Bawah' },
      { jp:'前',         romaji:'Mae',       arti:'Depan' },
      { jp:'後ろ',       romaji:'Ushiro',    arti:'Belakang' },
      { jp:'中',         romaji:'Naka',      arti:'Dalam' },
      { jp:'外',         romaji:'Soto',      arti:'Luar' },
      { jp:'隣',         romaji:'Tonari',    arti:'Sebelah' }
    ]
  },

  /* ============================================================
     LEVEL 15 — Belanja & Harga
     ============================================================ */
  'materi-15': {
    title: 'Belanja & Harga',
    jp: '買い物',
    desc: 'Hafalkan 20 kosakata uang, harga, dan percakapan di toko dalam bahasa Jepang.',
    tips: 'Untuk menanyakan harga, pakai pola 〜はいくらですか (berapa harga 〜?).',
    vocab: [
      { jp:'お金',     romaji:'Okane',    arti:'Uang' },
      { jp:'円',       romaji:'En',       arti:'Yen (mata uang Jepang)' },
      { jp:'いくら',   romaji:'Ikura',    arti:'Berapa (harga)?' },
      { jp:'値段',     romaji:'Nedan',    arti:'Harga' },
      { jp:'高い',     romaji:'Takai',    arti:'Mahal' },
      { jp:'安い',     romaji:'Yasui',    arti:'Murah' },
      { jp:'無料',     romaji:'Muryou',   arti:'Gratis' },
      { jp:'店',       romaji:'Mise',     arti:'Toko' },
      { jp:'スーパー', romaji:'Suupaa',   arti:'Supermarket' },
      { jp:'コンビニ', romaji:'Konbini',  arti:'Minimarket (24 jam)' },
      { jp:'デパート', romaji:'Depaato',  arti:'Department store' },
      { jp:'市場',     romaji:'Ichiba',   arti:'Pasar' },
      { jp:'レジ',     romaji:'Reji',     arti:'Kasir' },
      { jp:'買う',     romaji:'Kau',      arti:'Membeli' },
      { jp:'売る',     romaji:'Uru',      arti:'Menjual' },
      { jp:'払う',     romaji:'Harau',    arti:'Membayar' },
      { jp:'選ぶ',     romaji:'Erabu',    arti:'Memilih' },
      { jp:'現金',     romaji:'Genkin',   arti:'Uang tunai' },
      { jp:'クレジットカード', romaji:'Kurejitto kaado', arti:'Kartu kredit' },
      { jp:'レシート', romaji:'Reshiito', arti:'Struk belanja' }
    ]
  }
};
