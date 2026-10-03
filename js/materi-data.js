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
  },
   
  /* ============================================================
     LEVEL 16 — Transportasi
     ============================================================ */
  'materi-16': {
    title: 'Transportasi',
    jp: '交通',
    desc: 'Hafalkan 20 kosakata transportasi dan kendaraan dalam bahasa Jepang.',
    tips: 'Untuk bertanya kendaraan, pakai pola 何で行きますか (na de ikimasu ka = "naik apa?").',
    vocab: [
      { jp:'電車',       romaji:'Densha',     arti:'Kereta listrik' },
      { jp:'地下鉄',     romaji:'Chikatetsu', arti:'Kereta bawah tanah' },
      { jp:'新幹線',     romaji:'Shinkansen', arti:'Kereta cepat (Shinkansen)' },
      { jp:'バス',       romaji:'Basu',       arti:'Bus' },
      { jp:'タクシー',   romaji:'Takushii',   arti:'Taksi' },
      { jp:'車',         romaji:'Kuruma',     arti:'Mobil' },
      { jp:'自転車',     romaji:'Jitensha',   arti:'Sepeda' },
      { jp:'バイク',     romaji:'Baiku',      arti:'Motor' },
      { jp:'飛行機',     romaji:'Hikouki',    arti:'Pesawat' },
      { jp:'船',         romaji:'Fune',       arti:'Kapal' },
      { jp:'駅',         romaji:'Eki',        arti:'Stasiun' },
      { jp:'空港',       romaji:'Kuukou',     arti:'Bandara' },
      { jp:'切符',       romaji:'Kippu',      arti:'Tiket' },
      { jp:'改札口',     romaji:'Kaisatsuguchi', arti:'Pintu tiket' },
      { jp:'乗る',       romaji:'Noru',       arti:'Naik' },
      { jp:'降りる',     romaji:'Oriru',      arti:'Turun' },
      { jp:'乗り換える', romaji:'Norikaeru',  arti:'Transit / ganti kereta' },
      { jp:'出発',       romaji:'Shuppatsu',  arti:'Keberangkatan' },
      { jp:'到着',       romaji:'Touchaku',   arti:'Kedatangan' },
      { jp:'遅れる',     romaji:'Okureru',    arti:'Terlambat' }
    ]
  },

  /* ============================================================
     LEVEL 17 — Tubuh & Kesehatan
     ============================================================ */
  'materi-17': {
    title: 'Tubuh & Kesehatan',
    jp: '体',
    desc: 'Hafalkan 20 kosakata bagian tubuh dan istilah kesehatan dalam bahasa Jepang.',
    tips: 'Untuk menyatakan sakit, pakai pola 〜が痛いです (〜 ga itai desu = "〜 sakit").',
    vocab: [
      { jp:'体',         romaji:'Karada',     arti:'Badan / Tubuh' },
      { jp:'頭',         romaji:'Atama',      arti:'Kepala' },
      { jp:'顔',         romaji:'Kao',        arti:'Wajah' },
      { jp:'目',         romaji:'Me',         arti:'Mata' },
      { jp:'耳',         romaji:'Mimi',       arti:'Telinga' },
      { jp:'鼻',         romaji:'Hana',       arti:'Hidung' },
      { jp:'口',         romaji:'Kuchi',      arti:'Mulut' },
      { jp:'歯',         romaji:'Ha',         arti:'Gigi' },
      { jp:'首',         romaji:'Kubi',       arti:'Leher' },
      { jp:'肩',         romaji:'Kata',       arti:'Bahu' },
      { jp:'手',         romaji:'Te',         arti:'Tangan' },
      { jp:'指',         romaji:'Yubi',       arti:'Jari' },
      { jp:'足',         romaji:'Ashi',       arti:'Kaki' },
      { jp:'お腹',       romaji:'Onaka',      arti:'Perut' },
      { jp:'背',         romaji:'Se',         arti:'Punggung' },
      { jp:'病気',       romaji:'Byouki',     arti:'Sakit / Penyakit' },
      { jp:'痛い',       romaji:'Itai',       arti:'Sakit (rasa)' },
      { jp:'風邪',       romaji:'Kaze',       arti:'Flu / Masuk angin' },
      { jp:'熱',         romaji:'Netsu',      arti:'Demam' },
      { jp:'薬',         romaji:'Kusuri',     arti:'Obat' }
    ]
  },

  /* ============================================================
     LEVEL 18 — Cuaca & Musim
     ============================================================ */
  'materi-18': {
    title: 'Cuaca & Musim',
    jp: '天気',
    desc: 'Hafalkan 20 kosakata cuaca, musim, dan fenomena alam dalam bahasa Jepang.',
    tips: 'Jepang punya 4 musim: 春 (haru), 夏 (natsu), 秋 (aki), 冬 (fuyu).',
    vocab: [
      { jp:'天気',       romaji:'Tenki',      arti:'Cuaca' },
      { jp:'春',         romaji:'Haru',       arti:'Musim semi' },
      { jp:'夏',         romaji:'Natsu',      arti:'Musim panas' },
      { jp:'秋',         romaji:'Aki',        arti:'Musim gugur' },
      { jp:'冬',         romaji:'Fuyu',       arti:'Musim dingin' },
      { jp:'晴れ',       romaji:'Hare',       arti:'Cerah' },
      { jp:'曇り',       romaji:'Kumori',     arti:'Mendung' },
      { jp:'雨',         romaji:'Ame',        arti:'Hujan' },
      { jp:'雪',         romaji:'Yuki',       arti:'Salju' },
      { jp:'風',         romaji:'Kaze',       arti:'Angin' },
      { jp:'台風',       romaji:'Taifuu',     arti:'Topan' },
      { jp:'嵐',         romaji:'Arashi',     arti:'Badai' },
      { jp:'暑い',       romaji:'Atsui',      arti:'Panas (cuaca)' },
      { jp:'寒い',       romaji:'Samui',      arti:'Dingin (cuaca)' },
      { jp:'暖かい',     romaji:'Atatakai',   arti:'Hangat' },
      { jp:'涼しい',     romaji:'Suzushii',   arti:'Sejuk' },
      { jp:'気温',       romaji:'Kion',       arti:'Suhu udara' },
      { jp:'梅雨',       romaji:'Tsuyu',      arti:'Musim hujan' },
      { jp:'桜',         romaji:'Sakura',     arti:'Bunga sakura' },
      { jp:'紅葉',       romaji:'Kouyou',     arti:'Daun musim gugur' }
    ]
  },

  /* ============================================================
     LEVEL 19 — Hobi & Aktivitas
     ============================================================ */
  'materi-19': {
    title: 'Hobi & Aktivitas',
    jp: '趣味',
    desc: 'Hafalkan 20 kosakata hobi dan aktivitas sehari-hari dalam bahasa Jepang.',
    tips: 'Untuk menanyakan hobi, pakai pola 趣味は何ですか (shumi wa nan desu ka = "apa hobimu?").',
    vocab: [
      { jp:'趣味',       romaji:'Shumi',      arti:'Hobi' },
      { jp:'音楽',       romaji:'Ongaku',     arti:'Musik' },
      { jp:'映画',       romaji:'Eiga',       arti:'Film' },
      { jp:'読書',       romaji:'Dokusho',    arti:'Membaca buku' },
      { jp:'旅行',       romaji:'Ryokou',     arti:'Bepergian' },
      { jp:'写真',       romaji:'Shashin',    arti:'Foto / Fotografi' },
      { jp:'絵',         romaji:'E',          arti:'Gambar / Lukisan' },
      { jp:'料理',       romaji:'Ryouri',     arti:'Memasak' },
      { jp:'スポーツ',   romaji:'Supootsu',   arti:'Olahraga' },
      { jp:'サッカー',   romaji:'Sakkaa',     arti:'Sepak bola' },
      { jp:'野球',       romaji:'Yakyuu',     arti:'Bisbol' },
      { jp:'テニス',     romaji:'Tenisu',     arti:'Tenis' },
      { jp:'水泳',       romaji:'Suiei',      arti:'Renang' },
      { jp:'散歩',       romaji:'Sanpo',      arti:'Jalan-jalan' },
      { jp:'買い物',     romaji:'Kaimono',    arti:'Belanja' },
      { jp:'ゲーム',     romaji:'Geemu',      arti:'Game' },
      { jp:'カラオケ',   romaji:'Karaoke',    arti:'Karaoke' },
      { jp:'歌う',       romaji:'Utau',       arti:'Menyanyi' },
      { jp:'踊る',       romaji:'Odoru',      arti:'Menari' },
      { jp:'釣り',       romaji:'Tsuri',      arti:'Memancing' }
    ]
  },

  /* ============================================================
     LEVEL 20 — Sekolah & Kerja
     ============================================================ */
  'materi-20': {
    title: 'Sekolah & Kerja',
    jp: '学校・仕事',
    desc: 'Hafalkan 20 kosakata seputar sekolah, pekerjaan, dan kantor dalam bahasa Jepang.',
    tips: 'Untuk menanyakan pekerjaan, pakai pola 仕事は何ですか (shigoto wa nan desu ka = "apa pekerjaanmu?").',
    vocab: [
      { jp:'学校',       romaji:'Gakkou',     arti:'Sekolah' },
      { jp:'大学',       romaji:'Daigaku',    arti:'Universitas' },
      { jp:'高校',       romaji:'Koukou',     arti:'SMA' },
      { jp:'中学校',     romaji:'Chuugakkou', arti:'SMP' },
      { jp:'小学校',     romaji:'Shougakkou', arti:'SD' },
      { jp:'先生',       romaji:'Sensei',     arti:'Guru' },
      { jp:'学生',       romaji:'Gakusei',    arti:'Pelajar' },
      { jp:'生徒',       romaji:'Seito',      arti:'Murid' },
      { jp:'授業',       romaji:'Jugyou',     arti:'Pelajaran' },
      { jp:'宿題',       romaji:'Shukudai',   arti:'PR' },
      { jp:'試験',       romaji:'Shiken',     arti:'Ujian' },
      { jp:'会社',       romaji:'Kaisha',     arti:'Perusahaan' },
      { jp:'会社員',     romaji:'Kaishain',   arti:'Karyawan' },
      { jp:'社長',       romaji:'Shachou',    arti:'Direktur' },
      { jp:'部長',       romaji:'Buchou',     arti:'Manajer' },
      { jp:'同僚',       romaji:'Douryou',    arti:'Rekan kerja' },
      { jp:'給料',       romaji:'Kyuuryou',   arti:'Gaji' },
      { jp:'会議',       romaji:'Kaigi',      arti:'Rapat' },
      { jp:'仕事',       romaji:'Shigoto',    arti:'Pekerjaan' },
      { jp:'働く',       romaji:'Hataraku',   arti:'Bekerja' }
    ]
  },

  /* ============================================================
     LEVEL 21 — Kata Tunjuk
     ============================================================ */
  'materi-21': {
    title: 'Kata Tunjuk',
    jp: '指示語',
    desc: 'Hafalkan 20 kosakata kata tunjuk (kore, sore, are) dalam bahasa Jepang.',
    tips: 'Kore = dekat pembicara, sore = dekat lawan bicara, are = jauh dari keduanya, dore = yang mana.',
    vocab: [
      { jp:'これ',       romaji:'Kore',       arti:'Ini (dekat pembicara)' },
      { jp:'それ',       romaji:'Sore',       arti:'Itu (dekat lawan bicara)' },
      { jp:'あれ',       romaji:'Are',        arti:'Itu (jauh dari keduanya)' },
      { jp:'どれ',       romaji:'Dore',       arti:'Yang mana?' },
      { jp:'この',       romaji:'Kono',       arti:'Ini (~ + kata benda)' },
      { jp:'その',       romaji:'Sono',       arti:'Itu (~ + kata benda)' },
      { jp:'あの',       romaji:'Ano',        arti:'Itu jauh (~ + kata benda)' },
      { jp:'どの',       romaji:'Dono',       arti:'Yang mana (~ + kata benda)' },
      { jp:'ここ',       romaji:'Koko',       arti:'Di sini' },
      { jp:'そこ',       romaji:'Soko',       arti:'Di situ' },
      { jp:'あそこ',     romaji:'Asoko',      arti:'Di sana' },
      { jp:'どこ',       romaji:'Doko',       arti:'Di mana?' },
      { jp:'こちら',     romaji:'Kochira',    arti:'Arah sini (sopan)' },
      { jp:'そちら',     romaji:'Sochira',    arti:'Arah situ (sopan)' },
      { jp:'あちら',     romaji:'Achira',     arti:'Arah sana (sopan)' },
      { jp:'どちら',     romaji:'Dochira',    arti:'Arah mana? (sopan)' },
      { jp:'こんな',     romaji:'Konna',      arti:'Seperti ini' },
      { jp:'そんな',     romaji:'Sonna',      arti:'Seperti itu' },
      { jp:'あんな',     romaji:'Anna',       arti:'Seperti itu (jauh)' },
      { jp:'どんな',     romaji:'Donna',      arti:'Seperti apa?' }
    ]
  },

  /* ============================================================
     LEVEL 22 — Bilangan & Counter
     ============================================================ */
  'materi-22': {
    title: 'Bilangan & Counter',
    jp: '助数詞',
    desc: 'Hafalkan 20 counter (kata bantu bilangan) dalam bahasa Jepang.',
    tips: 'Setiap benda punya counter berbeda: 〜人 untuk orang, 〜枚 untuk benda tipis, 〜本 untuk benda panjang.',
    vocab: [
      { jp:'〜人',       romaji:'~nin',       arti:'~ orang (counter orang)' },
      { jp:'〜枚',       romaji:'~mai',       arti:'~ lembar (kertas, baju)' },
      { jp:'〜本',       romaji:'~hon',       arti:'~ batang (botol, pensil)' },
      { jp:'〜冊',       romaji:'~satsu',     arti:'~ buku (buku, majalah)' },
      { jp:'〜台',       romaji:'~dai',       arti:'~ unit (mesin, mobil)' },
      { jp:'〜個',       romaji:'~ko',        arti:'~ buah (benda kecil)' },
      { jp:'〜匹',       romaji:'~hiki',      arti:'~ ekor (hewan kecil)' },
      { jp:'〜頭',       romaji:'~tou',       arti:'~ ekor (hewan besar)' },
      { jp:'〜羽',       romaji:'~wa',        arti:'~ ekor (burung)' },
      { jp:'〜杯',       romaji:'~hai',       arti:'~ gelas / cangkir' },
      { jp:'〜階',       romaji:'~kai',       arti:'~ lantai (bangunan)' },
      { jp:'〜回',       romaji:'~kai',       arti:'~ kali' },
      { jp:'〜歳',       romaji:'~sai',       arti:'~ tahun (usia)' },
      { jp:'〜番',       romaji:'~ban',       arti:'nomor ~' },
      { jp:'〜円',       romaji:'~en',        arti:'~ yen' },
      { jp:'〜時',       romaji:'~ji',        arti:'jam ~' },
      { jp:'〜分',       romaji:'~fun',       arti:'~ menit' },
      { jp:'〜日',       romaji:'~nichi',     arti:'tanggal ~' },
      { jp:'〜月',       romaji:'~gatsu',     arti:'bulan ~' },
      { jp:'〜年',       romaji:'~nen',       arti:'tahun ~' }
    ]
  },

  /* ============================================================
     LEVEL 23 — Kata Kerja ます形
     ============================================================ */
  'materi-23': {
    title: 'Kata Kerja ます形',
    jp: 'ます形',
    desc: 'Kuasai bentuk sopan (ます) kata kerja bahasa Jepang.',
    tips: 'Bentuk ます dipakai untuk bicara sopan. Bentuk negatifnya ません, lampaunya ました.',
    vocab: [
      { jp:'食べます',   romaji:'Tabemasu',   arti:'Makan (sopan)' },
      { jp:'飲みます',   romaji:'Nomimasu',   arti:'Minum (sopan)' },
      { jp:'行きます',   romaji:'Ikimasu',    arti:'Pergi (sopan)' },
      { jp:'来ます',     romaji:'Kimasu',     arti:'Datang (sopan)' },
      { jp:'帰ります',   romaji:'Kaerimasu',  arti:'Pulang (sopan)' },
      { jp:'見ます',     romaji:'Mimasu',     arti:'Melihat (sopan)' },
      { jp:'聞きます',   romaji:'Kikimasu',   arti:'Mendengar (sopan)' },
      { jp:'読みます',   romaji:'Yomimasu',   arti:'Membaca (sopan)' },
      { jp:'書きます',   romaji:'Kakimasu',   arti:'Menulis (sopan)' },
      { jp:'話します',   romaji:'Hanashimasu', arti:'Berbicara (sopan)' },
      { jp:'します',     romaji:'Shimasu',    arti:'Melakukan (sopan)' },
      { jp:'買います',   romaji:'Kaimasu',    arti:'Membeli (sopan)' },
      { jp:'待ちます',   romaji:'Machimasu',  arti:'Menunggu (sopan)' },
      { jp:'使います',   romaji:'Tsukaimasu', arti:'Menggunakan (sopan)' },
      { jp:'作ります',   romaji:'Tsukurimasu', arti:'Membuat (sopan)' },
      { jp:'食べません', romaji:'Tabemasen',  arti:'Tidak makan (negatif)' },
      { jp:'食べました', romaji:'Tabemashita', arti:'Sudah makan (lampau)' },
      { jp:'食べませんでした', romaji:'Tabemasen deshita', arti:'Tidak makan (lampau negatif)' },
      { jp:'行きました', romaji:'Ikimashita', arti:'Sudah pergi (lampau)' },
      { jp:'行きません', romaji:'Ikimasen',   arti:'Tidak pergi (negatif)' }
    ]
  },

  /* ============================================================
     LEVEL 24 — Perkenalan Diri
     ============================================================ */
  'materi-24': {
    title: 'Perkenalan Diri',
    jp: '自己紹介',
    desc: 'Hafalkan 20 frasa untuk memperkenalkan diri dalam bahasa Jepang.',
    tips: 'Perkenalan diri (jikoshoukai) biasanya: nama → asal → pekerjaan → hobi → penutup.',
    vocab: [
      { jp:'はじめまして',           romaji:'Hajimemashite',           arti:'Senang berkenalan' },
      { jp:'私は〜と申します',        romaji:'Watashi wa ~ to moushimasu', arti:'Nama saya ~ (sopan)' },
      { jp:'私は〜です',              romaji:'Watashi wa ~ desu',       arti:'Saya ~' },
      { jp:'〜から来ました',          romaji:'~ kara kimashita',        arti:'Saya berasal dari ~' },
      { jp:'〜歳です',                romaji:'~ sai desu',              arti:'Umur saya ~ tahun' },
      { jp:'〜に住んでいます',        romaji:'~ ni sunde imasu',        arti:'Saya tinggal di ~' },
      { jp:'〜で働いています',        romaji:'~ de hataraite imasu',    arti:'Saya bekerja di ~' },
      { jp:'〜の学生です',            romaji:'~ no gakusei desu',       arti:'Saya pelajar di ~' },
      { jp:'趣味は〜です',            romaji:'Shumi wa ~ desu',         arti:'Hobi saya ~' },
      { jp:'〜が好きです',            romaji:'~ ga suki desu',          arti:'Saya suka ~' },
      { jp:'〜が得意です',            romaji:'~ ga tokui desu',         arti:'Saya pandai dalam ~' },
      { jp:'〜が苦手です',            romaji:'~ ga nigate desu',        arti:'Saya kurang pandai dalam ~' },
      { jp:'日本語を勉強しています',   romaji:'Nihongo o benkyou shite imasu', arti:'Saya sedang belajar bahasa Jepang' },
      { jp:'よろしくお願いします',      romaji:'Yoroshiku onegaishimasu', arti:'Mohon bantuannya' },
      { jp:'お会いできて嬉しいです',    romaji:'Oai dekite ureshii desu', arti:'Senang bisa bertemu' },
      { jp:'お名前は何ですか',         romaji:'Onamae wa nan desu ka',  arti:'Siapa nama Anda?' },
      { jp:'お国はどちらですか',       romaji:'Okuni wa dochira desu ka', arti:'Anda dari negara mana?' },
      { jp:'お仕事は何ですか',         romaji:'Oshigoto wa nan desu ka', arti:'Apa pekerjaan Anda?' },
      { jp:'趣味は何ですか',           romaji:'Shumi wa nan desu ka',   arti:'Apa hobi Anda?' },
      { jp:'どうぞよろしく',           romaji:'Douzo yoroshiku',        arti:'Mohon bantuannya (santai)' }
    ]
  },

  /* ============================================================
     LEVEL 25 — Review N5
     ============================================================ */
  'materi-25': {
    title: 'Review N5',
    jp: 'N5復習',
    desc: 'Ulang semua materi N5 dalam satu halaman ringkasan.',
    tips: 'Level ini adalah rangkuman. Kalau kamu sudah kuasai semua, lanjut ke level N4!',
    vocab: [
      { jp:'私',         romaji:'Watashi',    arti:'Saya' },
      { jp:'あなた',     romaji:'Anata',      arti:'Kamu' },
      { jp:'学生',       romaji:'Gakusei',    arti:'Pelajar' },
      { jp:'先生',       romaji:'Sensei',     arti:'Guru' },
      { jp:'食べる',     romaji:'Taberu',     arti:'Makan' },
      { jp:'飲む',       romaji:'Nomu',       arti:'Minum' },
      { jp:'行く',       romaji:'Iku',        arti:'Pergi' },
      { jp:'来る',       romaji:'Kuru',       arti:'Datang' },
      { jp:'見る',       romaji:'Miru',       arti:'Melihat' },
      { jp:'聞く',       romaji:'Kiku',       arti:'Mendengar' },
      { jp:'大きい',     romaji:'Ookii',      arti:'Besar' },
      { jp:'小さい',     romaji:'Chiisai',    arti:'Kecil' },
      { jp:'高い',       romaji:'Takai',      arti:'Tinggi / Mahal' },
      { jp:'安い',       romaji:'Yasui',      arti:'Murah' },
      { jp:'暑い',       romaji:'Atsui',      arti:'Panas (cuaca)' },
      { jp:'寒い',       romaji:'Samui',      arti:'Dingin (cuaca)' },
      { jp:'美味しい',   romaji:'Oishii',     arti:'Lezat' },
      { jp:'楽しい',     romaji:'Tanoshii',   arti:'Menyenangkan' },
      { jp:'新しい',     romaji:'Atarashii',  arti:'Baru' },
      { jp:'古い',       romaji:'Furui',      arti:'Lama / Tua' }
    ]
  },

  /* ============================================================
     LEVEL 26 — Kanji N4 Dasar
     ============================================================ */
  'materi-26': {
    title: 'Kanji N4 Dasar',
    jp: '漢字 N4',
    desc: 'Hafalkan 20 kanji level menengah pertama (N4).',
    tips: 'Kanji N4 lebih kompleks. Fokus ke arti dulu, baru cara baca on-yomi dan kun-yomi.',
    vocab: [
      { jp:'会',   romaji:'Kai / Au',      arti:'Bertemu / Perkumpulan' },
      { jp:'同',   romaji:'Dou / Onaji',   arti:'Sama' },
      { jp:'事',   romaji:'Ji / Koto',     arti:'Hal / Pekerjaan' },
      { jp:'自',   romaji:'Ji / Mizukara', arti:'Sendiri' },
      { jp:'社',   romaji:'Sha',           arti:'Perusahaan / Kuil' },
      { jp:'発',   romaji:'Hatsu',         arti:'Berangkat / Mulai' },
      { jp:'者',   romaji:'Sha / Mono',    arti:'Orang (profesi)' },
      { jp:'地',   romaji:'Chi / Ji',      arti:'Tanah / Tempat' },
      { jp:'業',   romaji:'Gyou',          arti:'Usaha / Industri' },
      { jp:'方',   romaji:'Hou / Kata',    arti:'Arah / Cara' },
      { jp:'新',   romaji:'Shin / Atarashii', arti:'Baru' },
      { jp:'場',   romaji:'Jou / Ba',      arti:'Tempat' },
      { jp:'員',   romaji:'In',            arti:'Anggota' },
      { jp:'立',   romaji:'Ritsu / Tatsu', arti:'Berdiri' },
      { jp:'開',   romaji:'Kai / Akeru',   arti:'Membuka' },
      { jp:'手',   romaji:'Shu / Te',      arti:'Tangan' },
      { jp:'力',   romaji:'Ryoku / Chikara', arti:'Kekuatan' },
      { jp:'問',   romaji:'Mon / Tou',     arti:'Bertanya' },
      { jp:'代',   romaji:'Dai / Kawaru',  arti:'Generasi / Mengganti' },
      { jp:'明',   romaji:'Mei / Akarui',  arti:'Terang / Jelas' }
    ]
  },

  /* ============================================================
     LEVEL 27 — Kata Kerja ない形
     ============================================================ */
  'materi-27': {
    title: 'Kata Kerja ない形',
    jp: 'ない形',
    desc: 'Kuasai bentuk negatif (ない) kata kerja bahasa Jepang.',
    tips: 'Bentuk ない adalah bentuk kasual dari ません. Contoh: 食べない = tidak makan (santai).',
    vocab: [
      { jp:'食べない',       romaji:'Tabenai',      arti:'Tidak makan' },
      { jp:'飲まない',       romaji:'Nomanai',      arti:'Tidak minum' },
      { jp:'行かない',       romaji:'Ikanai',       arti:'Tidak pergi' },
      { jp:'来ない',         romaji:'Konai',        arti:'Tidak datang' },
      { jp:'帰らない',       romaji:'Kaeranai',     arti:'Tidak pulang' },
      { jp:'見ない',         romaji:'Minai',        arti:'Tidak melihat' },
      { jp:'聞かない',       romaji:'Kikanai',      arti:'Tidak mendengar' },
      { jp:'読まない',       romaji:'Yomanai',      arti:'Tidak membaca' },
      { jp:'書かない',       romaji:'Kakanai',      arti:'Tidak menulis' },
      { jp:'話さない',       romaji:'Hanasenai',    arti:'Tidak berbicara' },
      { jp:'しない',         romaji:'Shinai',       arti:'Tidak melakukan' },
      { jp:'買わない',       romaji:'Kawanai',      arti:'Tidak membeli' },
      { jp:'待たない',       romaji:'Matenai',      arti:'Tidak menunggu' },
      { jp:'使わない',       romaji:'Tsukawanai',   arti:'Tidak menggunakan' },
      { jp:'作らない',       romaji:'Tsukuranai',   arti:'Tidak membuat' },
      { jp:'分からない',     romaji:'Wakaranai',    arti:'Tidak mengerti' },
      { jp:'知らない',       romaji:'Shiranai',     arti:'Tidak tahu' },
      { jp:'食べなかった',   romaji:'Tabenakatta',  arti:'Tidak makan (lampau)' },
      { jp:'行かなかった',   romaji:'Ikanakatta',   arti:'Tidak pergi (lampau)' },
      { jp:'ないでください', romaji:'Naide kudasai', arti:'Tolong jangan ~' }
    ]
  },

  /* ============================================================
     LEVEL 28 — Kata Kerja た形
     ============================================================ */
  'materi-28': {
    title: 'Kata Kerja た形',
    jp: 'た形',
    desc: 'Kuasai bentuk lampau (た) kata kerja bahasa Jepang.',
    tips: 'Bentuk た adalah bentuk kasual dari ました. Contoh: 食べた = sudah makan (santai).',
    vocab: [
      { jp:'食べた',       romaji:'Tabeta',        arti:'Sudah makan' },
      { jp:'飲んだ',       romaji:'Nonda',         arti:'Sudah minum' },
      { jp:'行った',       romaji:'Itta',          arti:'Sudah pergi' },
      { jp:'来た',         romaji:'Kita',          arti:'Sudah datang' },
      { jp:'帰った',       romaji:'Kaetta',        arti:'Sudah pulang' },
      { jp:'見た',         romaji:'Mita',          arti:'Sudah melihat' },
      { jp:'聞いた',       romaji:'Kiita',         arti:'Sudah mendengar' },
      { jp:'読んだ',       romaji:'Yonda',         arti:'Sudah membaca' },
      { jp:'書いた',       romaji:'Kaita',         arti:'Sudah menulis' },
      { jp:'話した',       romaji:'Hanashita',     arti:'Sudah berbicara' },
      { jp:'した',         romaji:'Shita',         arti:'Sudah melakukan' },
      { jp:'買った',       romaji:'Katta',         arti:'Sudah membeli' },
      { jp:'待った',       romaji:'Matta',         arti:'Sudah menunggu' },
      { jp:'使った',       romaji:'Tsukatta',      arti:'Sudah menggunakan' },
      { jp:'作った',       romaji:'Tsukutta',      arti:'Sudah membuat' },
      { jp:'分かった',     romaji:'Wakatta',       arti:'Sudah mengerti' },
      { jp:'知った',       romaji:'Shitta',        arti:'Sudah tahu' },
      { jp:'〜たことがある', romaji:'~ ta koto ga aru', arti:'Pernah ~' },
      { jp:'〜たり〜たり',   romaji:'~ tari ~ tari', arti:'Melakukan ~ dan ~ (bergantian)' },
      { jp:'〜たほうがいい', romaji:'~ ta hou ga ii', arti:'Sebaiknya ~' }
    ]
  },

  /* ============================================================
     LEVEL 29 — Kata Kerja Potensial
     ============================================================ */
  'materi-29': {
    title: 'Kata Kerja Potensial',
    jp: '可能形',
    desc: 'Kuasai bentuk potensial (bisa) kata kerja bahasa Jepang.',
    tips: 'Bentuk potensial dipakai untuk menyatakan kemampuan. Contoh: 食べられる = bisa makan.',
    vocab: [
      { jp:'食べられる',   romaji:'Taberareru',   arti:'Bisa makan' },
      { jp:'飲める',       romaji:'Nomeru',       arti:'Bisa minum' },
      { jp:'行ける',       romaji:'Ikeru',        arti:'Bisa pergi' },
      { jp:'来られる',     romaji:'Korareru',     arti:'Bisa datang' },
      { jp:'帰れる',       romaji:'Kaereru',      arti:'Bisa pulang' },
      { jp:'見られる',     romaji:'Mirareru',     arti:'Bisa melihat' },
      { jp:'聞ける',       romaji:'Kikeru',       arti:'Bisa mendengar' },
      { jp:'読める',       romaji:'Yomeru',       arti:'Bisa membaca' },
      { jp:'書ける',       romaji:'Kakeru',       arti:'Bisa menulis' },
      { jp:'話せる',       romaji:'Hanaseru',     arti:'Bisa berbicara' },
      { jp:'できる',       romaji:'Dekiru',       arti:'Bisa melakukan' },
      { jp:'買える',       romaji:'Kaeru',        arti:'Bisa membeli' },
      { jp:'待てる',       romaji:'Materu',       arti:'Bisa menunggu' },
      { jp:'使える',       romaji:'Tsukaeru',     arti:'Bisa menggunakan' },
      { jp:'作れる',       romaji:'Tsukureru',    arti:'Bisa membuat' },
      { jp:'分かる',       romaji:'Wakaru',       arti:'Mengerti / Bisa memahami' },
      { jp:'日本語が話せる', romaji:'Nihongo ga hanaseru', arti:'Bisa berbicara bahasa Jepang' },
      { jp:'〜ことができる', romaji:'~ koto ga dekiru', arti:'Bisa ~ (formal)' },
      { jp:'泳げる',       romaji:'Oyogeru',      arti:'Bisa berenang' },
      { jp:'運転できる',   romaji:'Unten dekiru', arti:'Bisa mengemudi' }
    ]
  },

  /* ============================================================
     LEVEL 30 — Kata Kerja Volitional
     ============================================================ */
  'materi-30': {
    title: 'Kata Kerja Volitional',
    jp: '意向形',
    desc: 'Kuasai bentuk volitional (ajakan / niat) kata kerja bahasa Jepang.',
    tips: 'Bentuk volitional dipakai untuk mengajak atau menyatakan niat. Contoh: 食べよう = ayo makan.',
    vocab: [
      { jp:'食べよう',       romaji:'Tabeyou',       arti:'Ayo makan' },
      { jp:'飲もう',         romaji:'Nomou',         arti:'Ayo minum' },
      { jp:'行こう',         romaji:'Ikou',          arti:'Ayo pergi' },
      { jp:'来よう',         romaji:'Koyou',         arti:'Ayo datang' },
      { jp:'帰ろう',         romaji:'Kaerou',        arti:'Ayo pulang' },
      { jp:'見よう',         romaji:'Miyou',         arti:'Ayo melihat' },
      { jp:'聞こう',         romaji:'Kikou',         arti:'Ayo mendengar' },
      { jp:'読もう',         romaji:'Yomou',         arti:'Ayo membaca' },
      { jp:'書こう',         romaji:'Kakou',         arti:'Ayo menulis' },
      { jp:'話そう',         romaji:'Hanasou',       arti:'Ayo berbicara' },
      { jp:'しよう',         romaji:'Shiyou',        arti:'Ayo melakukan' },
      { jp:'買おう',         romaji:'Kaou',          arti:'Ayo membeli' },
      { jp:'待とう',         romaji:'Matou',         arti:'Ayo menunggu' },
      { jp:'使おう',         romaji:'Tsukaou',       arti:'Ayo menggunakan' },
      { jp:'作ろう',         romaji:'Tsukurou',      arti:'Ayo membuat' },
      { jp:'〜ましょう',     romaji:'~ mashou',      arti:'Ayo ~ (sopan)' },
      { jp:'〜ましょうか',   romaji:'~ mashou ka',   arti:'Bagaimana kalau kita ~?' },
      { jp:'〜ませんか',     romaji:'~ masen ka',    arti:'Maukah kamu ~? (ajakan sopan)' },
      { jp:'〜つもりです',   romaji:'~ tsumori desu', arti:'Saya berniat ~' },
      { jp:'〜予定です',     romaji:'~ yotei desu',  arti:'Saya berencana ~' }
    ]
  },

  /* ============================================================
     LEVEL 31 — Kalimat Pasif
     ============================================================ */
  'materi-31': {
    title: 'Kalimat Pasif',
    jp: '受身形',
    desc: 'Kuasai bentuk pasif (受身形) dalam bahasa Jepang.',
    tips: 'Kalimat pasif dipakai saat subjek menerima aksi. Contoh: 食べられる = dimakan.',
    vocab: [
      { jp:'食べられる',   romaji:'Taberareru',   arti:'Dimakan' },
      { jp:'飲まれる',     romaji:'Nomareru',     arti:'Diminum' },
      { jp:'行かれる',     romaji:'Ikareru',      arti:'Dikunjungi' },
      { jp:'見られる',     romaji:'Mirareru',     arti:'Dilihat' },
      { jp:'聞かれる',     romaji:'Kikareru',     arti:'Didengar / Ditanya' },
      { jp:'読まれる',     romaji:'Yomareru',     arti:'Dibaca' },
      { jp:'書かれる',     romaji:'Kakareru',     arti:'Ditulis' },
      { jp:'話される',     romaji:'Hanasareru',   arti:'Dibicarakan' },
      { jp:'される',       romaji:'Sareru',       arti:'Dilakukan' },
      { jp:'買われる',     romaji:'Kawareru',     arti:'Dibeli' },
      { jp:'待たれる',     romaji:'Matareru',     arti:'Ditunggu' },
      { jp:'使われる',     romaji:'Tsukawareru',  arti:'Digunakan' },
      { jp:'作られる',     romaji:'Tsukurareru',  arti:'Dibuat' },
      { jp:'褒められる',   romaji:'Homerareru',   arti:'Dipuji' },
      { jp:'叱られる',     romaji:'Shikarareru',  arti:'Dimarahi' },
      { jp:'〜に〜られる', romaji:'~ ni ~ rareru', arti:'~ oleh ~ (pola pasif)' },
      { jp:'〜によって',   romaji:'~ ni yotte',   arti:'Oleh ~ (penulis/pembuat)' },
      { jp:'言われる',     romaji:'Iwareru',      arti:'Dikatakan' },
      { jp:'思われる',     romaji:'Omowareru',    arti:'Dianggap' },
      { jp:'呼ばれる',     romaji:'Yobareru',     arti:'Dipanggil' }
    ]
  },

  /* ============================================================
     LEVEL 32 — Kalimat Kausatif
     ============================================================ */
  'materi-32': {
    title: 'Kalimat Kausatif',
    jp: '使役形',
    desc: 'Kuasai bentuk kausatif (menyuruh / membiarkan) dalam bahasa Jepang.',
    tips: 'Kausatif dipakai saat menyuruh atau membiarkan orang lain melakukan sesuatu.',
    vocab: [
      { jp:'食べさせる',   romaji:'Tabesaseru',   arti:'Menyuruh makan' },
      { jp:'飲ませる',     romaji:'Nomaseru',     arti:'Menyuruh minum' },
      { jp:'行かせる',     romaji:'Ikaseru',      arti:'Menyuruh pergi' },
      { jp:'来させる',     romaji:'Kosaseru',     arti:'Menyuruh datang' },
      { jp:'帰らせる',     romaji:'Kaeraseru',    arti:'Menyuruh pulang' },
      { jp:'見させる',     romaji:'Miseru',       arti:'Menyuruh melihat' },
      { jp:'聞かせる',     romaji:'Kikaseru',     arti:'Menyuruh mendengar' },
      { jp:'読ませる',     romaji:'Yomaseru',     arti:'Menyuruh membaca' },
      { jp:'書かせる',     romaji:'Kakaseru',     arti:'Menyuruh menulis' },
      { jp:'話させる',     romaji:'Hanadaseru',   arti:'Menyuruh berbicara' },
      { jp:'させる',       romaji:'Saseru',       arti:'Menyuruh melakukan' },
      { jp:'待たせる',     romaji:'Mataseru',     arti:'Menyuruh menunggu' },
      { jp:'働かせる',     romaji:'Hatarakaseru', arti:'Menyuruh bekerja' },
      { jp:'遊ばせる',     romaji:'Asobaseru',    arti:'Membiarkan bermain' },
      { jp:'泣かせる',     romaji:'Nakaseru',     arti:'Membuat menangis' },
      { jp:'笑わせる',     romaji:'Warawaseru',   arti:'Membuat tertawa' },
      { jp:'〜させる',     romaji:'~ saseru',     arti:'Menyuruh ~ (pola)' },
      { jp:'〜させられる', romaji:'~ saserareru', arti:'Disuruh ~ (kausatif pasif)' },
      { jp:'〜てもらう',   romaji:'~ te morau',   arti:'Meminta orang lain ~' },
      { jp:'〜てあげる',   romaji:'~ te ageru',   arti:'Melakukan ~ untuk orang lain' }
    ]
  },

  /* ============================================================
     LEVEL 33 — Kondisional たら
     ============================================================ */
  'materi-33': {
    title: 'Kondisional たら',
    jp: '条件形',
    desc: 'Kuasai bentuk pengandaian (kondisional) dalam bahasa Jepang.',
    tips: '〜たら = "jika / kalau". 〜なら = "kalau (berdasarkan konteks)". 〜と = "kalau (otomatis)".',
    vocab: [
      { jp:'〜たら',           romaji:'~ tara',            arti:'Jika / Kalau ~' },
      { jp:'〜なら',           romaji:'~ nara',            arti:'Kalau ~ (berdasarkan konteks)' },
      { jp:'〜と',             romaji:'~ to',              arti:'Kalau ~ (hasil otomatis)' },
      { jp:'〜ば',             romaji:'~ ba',              arti:'Jika ~ (kondisional)' },
      { jp:'もし〜たら',       romaji:'Moshi ~ tara',      arti:'Jika seandainya ~' },
      { jp:'雨だったら',       romaji:'Ame dattara',       arti:'Jika hujan' },
      { jp:'時間があったら',   romaji:'Jikan ga attara',   arti:'Jika ada waktu' },
      { jp:'お金があったら',   romaji:'Okane ga attara',   arti:'Jika punya uang' },
      { jp:'学生だったら',     romaji:'Gakusei dattara',   arti:'Jika (aku) pelajar' },
      { jp:'明日晴れたら',     romaji:'Ashita haretara',   arti:'Jika besok cerah' },
      { jp:'もしもし',         romaji:'Moshi moshi',       arti:'Halo (di telepon)' },
      { jp:'もし〜なら',       romaji:'Moshi ~ nara',      arti:'Jika ~' },
      { jp:'雨が降れば',       romaji:'Ame ga fureba',     arti:'Jika hujan turun' },
      { jp:'春になると',       romaji:'Haru ni naru to',   arti:'Kalau musim semi tiba' },
      { jp:'ボタンを押すと',   romaji:'Botan o osu to',    arti:'Kalau tombol ditekan' },
      { jp:'〜場合',           romaji:'~ baai',            arti:'Dalam kasus ~' },
      { jp:'〜とき',           romaji:'~ toki',            arti:'Saat ~' },
      { jp:'〜れば',           romaji:'~ reba',            arti:'Jika ~ (bentuk -ba)' },
      { jp:'〜ならいい',       romaji:'~ nara ii',         arti:'Bagus kalau ~' },
      { jp:'〜たらどうですか', romaji:'~ tara dou desu ka', arti:'Bagaimana kalau ~?' }
    ]
  },

  /* ============================================================
     LEVEL 34 — Partikel Lanjutan
     ============================================================ */
  'materi-34': {
    title: 'Partikel Lanjutan',
    jp: '助詞上級',
    desc: 'Kuasai partikel lanjutan: と, や, など, しか, だけ, ばかり.',
    tips: 'Setiap partikel punya nuansa berbeda. と = dan (lengkap), や = dan (sebagian).',
    vocab: [
      { jp:'と',           romaji:'to',            arti:'Dan (daftar lengkap)' },
      { jp:'や',           romaji:'ya',            arti:'Dan (daftar sebagian)' },
      { jp:'など',         romaji:'nado',          arti:'Dan lain-lain' },
      { jp:'しか',         romaji:'shika',         arti:'Hanya (dengan negatif)' },
      { jp:'だけ',         romaji:'dake',          arti:'Hanya' },
      { jp:'ばかり',       romaji:'bakari',        arti:'Hanya / Terus-menerus' },
      { jp:'も',           romaji:'mo',            arti:'Juga' },
      { jp:'でも',         romaji:'demo',          arti:'Tapi / Bahkan' },
      { jp:'から',         romaji:'kara',          arti:'Karena / Dari' },
      { jp:'まで',         romaji:'made',          arti:'Sampai' },
      { jp:'より',         romaji:'yori',          arti:'Dari (perbandingan)' },
      { jp:'ほど',         romaji:'hodo',          arti:'Sebanyak / Sepadan' },
      { jp:'くらい',       romaji:'kurai',         arti:'Sekitar / Kira-kira' },
      { jp:'ごろ',         romaji:'goro',          arti:'Sekitar (waktu)' },
      { jp:'ながら',       romaji:'nagara',        arti:'Sambil' },
      { jp:'ので',         romaji:'node',          arti:'Karena (lebih sopan)' },
      { jp:'のに',         romaji:'noni',          arti:'Meskipun / Padahal' },
      { jp:'ても',         romaji:'temo',          arti:'Meskipun' },
      { jp:'けれど',       romaji:'keredo',        arti:'Tapi / Namun' },
      { jp:'し',           romaji:'shi',           arti:'Dan (alasan berganda)' }
    ]
  },

  /* ============================================================
     LEVEL 35 — Keigo Dasar
     ============================================================ */
  'materi-35': {
    title: 'Keigo Dasar',
    jp: '敬語',
    desc: 'Kuasai dasar bahasa sopan (keigo) dalam bahasa Jepang.',
    tips: 'Keigo dibagi 3: 尊敬語 (sonkeigo = hormat), 謙譲語 (kenjougo = merendah), 丁寧語 (teineigo = sopan).',
    vocab: [
      { jp:'いらっしゃる',       romaji:'Irassharu',         arti:'Ada / Datang / Pergi (hormat)' },
      { jp:'おっしゃる',         romaji:'Ossharu',           arti:'Berkata (hormat)' },
      { jp:'なさる',             romaji:'Nasaru',            arti:'Melakukan (hormat)' },
      { jp:'ご覧になる',         romaji:'Goran ni naru',     arti:'Melihat (hormat)' },
      { jp:'召し上がる',         romaji:'Meshiagaru',        arti:'Makan / Minum (hormat)' },
      { jp:'伺う',               romaji:'Ukagau',            arti:'Bertanya / Berkunjung (rendah)' },
      { jp:'申す',               romaji:'Mousu',             arti:'Berkata (rendah)' },
      { jp:'いたす',             romaji:'Itasu',             arti:'Melakukan (rendah)' },
      { jp:'拝見する',           romaji:'Haiken suru',       arti:'Melihat (rendah)' },
      { jp:'いただく',           romaji:'Itadaku',           arti:'Makan / Menerima (rendah)' },
      { jp:'ございます',         romaji:'Gozaimasu',         arti:'Ada (sangat sopan)' },
      { jp:'でございます',       romaji:'De gozaimasu',      arti:'Adalah (sangat sopan)' },
      { jp:'〜さん',             romaji:'~ san',             arti:'~ (sebutan sopan)' },
      { jp:'〜様',               romaji:'~ sama',            arti:'~ (lebih sopan)' },
      { jp:'〜先生',             romaji:'~ sensei',          arti:'~ (untuk guru/dokter)' },
      { jp:'お〜',               romaji:'O~',                arti:'Awalan hormat (Jepang asli)' },
      { jp:'ご〜',               romaji:'Go~',               arti:'Awalan hormat (Cina asli)' },
      { jp:'お疲れ様です',       romaji:'Otsukaresama desu', arti:'Terima kasih atas kerja kerasnya' },
      { jp:'お世話になっております', romaji:'Osewa ni natte orimasu', arti:'Terima kasih atas bantuannya (formal)' },
      { jp:'よろしくお願いいたします', romaji:'Yoroshiku onegai itashimasu', arti:'Mohon bantuannya (sangat sopan)' }
    ]
  },

  /* ============================================================
     LEVEL 36 — Kosakata Kerja
     ============================================================ */
  'materi-36': {
    title: 'Kosakata Kerja',
    jp: '仕事の語彙',
    desc: 'Hafalkan 20 kosakata seputar dunia kerja dan kantor.',
    tips: 'Di kantor Jepang, sering dipakai istilah 報・連・相 (hou-ren-sou) = laporan, komunikasi, konsultasi.',
    vocab: [
      { jp:'会社',         romaji:'Kaisha',       arti:'Perusahaan' },
      { jp:'社員',         romaji:'Shain',        arti:'Karyawan' },
      { jp:'社長',         romaji:'Shachou',      arti:'Direktur' },
      { jp:'部長',         romaji:'Buchou',       arti:'Manajer departemen' },
      { jp:'課長',         romaji:'Kachou',       arti:'Kepala seksi' },
      { jp:'同僚',         romaji:'Douryou',      arti:'Rekan kerja' },
      { jp:'上司',         romaji:'Joushi',       arti:'Atasan' },
      { jp:'部下',         romaji:'Buka',         arti:'Bawahan' },
      { jp:'会議',         romaji:'Kaigi',        arti:'Rapat' },
      { jp:'資料',         romaji:'Shiryou',      arti:'Dokumen / Materi' },
      { jp:'報告',         romaji:'Houkoku',      arti:'Laporan' },
      { jp:'連絡',         romaji:'Renraku',      arti:'Komunikasi / Kontak' },
      { jp:'相談',         romaji:'Soudan',       arti:'Konsultasi' },
      { jp:'残業',         romaji:'Zangyou',      arti:'Kerja lembur' },
      { jp:'給料',         romaji:'Kyuuryou',     arti:'Gaji' },
      { jp:'休暇',         romaji:'Kyuuka',       arti:'Cuti' },
      { jp:'出張',         romaji:'Shucchou',     arti:'Perjalanan dinas' },
      { jp:'面接',         romaji:'Mensetsu',     arti:'Wawancara' },
      { jp:'履歴書',       romaji:'Rirekisho',    arti:'CV / Daftar riwayat hidup' },
      { jp:'就職',         romaji:'Shuushoku',    arti:'Mencari kerja' }
    ]
  },

  /* ============================================================
     LEVEL 37 — Kosakata Sekolah
     ============================================================ */
  'materi-37': {
    title: 'Kosakata Sekolah',
    jp: '学校の語彙',
    desc: 'Hafalkan 20 kosakata seputar dunia pendidikan dan sekolah.',
    tips: 'Di Jepang, tahun ajaran dimulai bulan April dan berakhir bulan Maret.',
    vocab: [
      { jp:'学校',         romaji:'Gakkou',       arti:'Sekolah' },
      { jp:'幼稚園',       romaji:'Youchien',     arti:'TK' },
      { jp:'小学校',       romaji:'Shougakkou',   arti:'SD' },
      { jp:'中学校',       romaji:'Chuugakkou',   arti:'SMP' },
      { jp:'高校',         romaji:'Koukou',       arti:'SMA' },
      { jp:'大学',         romaji:'Daigaku',      arti:'Universitas' },
      { jp:'大学院',       romaji:'Daigakuin',    arti:'Pascasarjana' },
      { jp:'先生',         romaji:'Sensei',       arti:'Guru' },
      { jp:'学生',         romaji:'Gakusei',      arti:'Pelajar' },
      { jp:'留学生',       romaji:'Ryuugakusei',  arti:'Pelajar asing' },
      { jp:'授業',         romaji:'Jugyou',       arti:'Pelajaran' },
      { jp:'教室',         romaji:'Kyoushitsu',   arti:'Ruang kelas' },
      { jp:'宿題',         romaji:'Shukudai',     arti:'PR' },
      { jp:'試験',         romaji:'Shiken',       arti:'Ujian' },
      { jp:'成績',         romaji:'Seiseki',      arti:'Nilai' },
      { jp:'教科書',       romaji:'Kyoukasho',    arti:'Buku pelajaran' },
      { jp:'図書館',       romaji:'Toshokan',     arti:'Perpustakaan' },
      { jp:'卒業',         romaji:'Sotsugyou',    arti:'Kelulusan' },
      { jp:'入学',         romaji:'Nyuugaku',     arti:'Masuk sekolah' },
      { jp:'奨学金',       romaji:'Shougakukin',  arti:'Beasiswa' }
    ]
  },

  /* ============================================================
     LEVEL 38 — Percakapan Telepon
     ============================================================ */
  'materi-38': {
    title: 'Percakapan Telepon',
    jp: '電話会話',
    desc: 'Hafalkan 20 frasa untuk berbicara di telepon dalam bahasa Jepang.',
    tips: 'Di telepon, "halo" diucapkan もしもし (moshi moshi), bukan こんにちは.',
    vocab: [
      { jp:'もしもし',                 romaji:'Moshi moshi',              arti:'Halo (di telepon)' },
      { jp:'〜さんのお宅ですか',         romaji:'~ san no otaku desu ka',  arti:'Apakah ini rumah ~?' },
      { jp:'〜と申しますが',            romaji:'~ to moushimasu ga',      arti:'Nama saya ~' },
      { jp:'〜をお願いします',          romaji:'~ o onegaishimasu',       arti:'Tolong sambungkan ke ~' },
      { jp:'少々お待ちください',         romaji:'Shoushou omachi kudasai', arti:'Mohon tunggu sebentar' },
      { jp:'お待たせしました',           romaji:'Omatase shimashita',      arti:'Maaf menunggu' },
      { jp:'申し訳ございません',         romaji:'Moushiwake gozaimasen',   arti:'Mohon maaf (sangat sopan)' },
      { jp:'いま、席を外しています',     romaji:'Ima, seki o hazushite imasu', arti:'Sekarang sedang tidak di tempat' },
      { jp:'伝言をお願いできますか',     romaji:'Dengon o onegai dekimasu ka', arti:'Bisakah saya titip pesan?' },
      { jp:'折り返しお電話ください',     romaji:'Ori kaeshi odenwa kudasai', arti:'Tolong telepon balik' },
      { jp:'電話番号を教えてください',   romaji:'Denwa bangou o oshiete kudasai', arti:'Tolong beritahu nomor teleponnya' },
      { jp:'かけ直します',               romaji:'Kake naoshimasu',         arti:'Saya akan menelepon lagi' },
      { jp:'間違えました',               romaji:'Machigaemashita',         arti:'Salah sambung' },
      { jp:'聞こえますか',               romaji:'Kikoemasu ka',            arti:'Bisakah didengar?' },
      { jp:'電波が悪いです',             romaji:'Denpa ga warui desu',     arti:'Sinyalnya buruk' },
      { jp:'切らないでください',         romaji:'Kiranaide kudasai',       arti:'Jangan ditutup' },
      { jp:'失礼します',                 romaji:'Shitsurei shimasu',       arti:'Permisi (menutup telepon)' },
      { jp:'お世話になっております',     romaji:'Osewa ni natte orimasu',  arti:'Terima kasih atas bantuannya' },
      { jp:'また連絡します',             romaji:'Mata renraku shimasu',    arti:'Saya akan menghubungi lagi' },
      { jp:'以上です',                   romaji:'Ijou desu',               arti:'Sekian' }
    ]
  },

  /* ============================================================
     LEVEL 39 — Surat & Email
     ============================================================ */
  'materi-39': {
    title: 'Surat & Email',
    jp: '手紙',
    desc: 'Hafalkan 20 frasa untuk menulis surat dan email formal dalam bahasa Jepang.',
    tips: 'Email formal Jepang biasanya dimulai dengan 拝啓 (haikei) dan diakhiri 敬具 (keigu).',
    vocab: [
      { jp:'拝啓',                 romaji:'Haikei',                  arti:'Dengan hormat (pembuka surat)' },
      { jp:'敬具',                 romaji:'Keigu',                   arti:'Hormat saya (penutup surat)' },
      { jp:'〜様',                 romaji:'~ sama',                  arti:'~ yang terhormat' },
      { jp:'お世話になっております', romaji:'Osewa ni natte orimasu',  arti:'Terima kasih atas bantuannya' },
      { jp:'突然のご連絡失礼します', romaji:'Totsuzen no gorenraku shitsurei shimasu', arti:'Maaf menghubungi mendadak' },
      { jp:'さて',                 romaji:'Sate',                    arti:'Nah / Baiklah' },
      { jp:'つきましては',         romaji:'Tsukimashite wa',         arti:'Sehubungan dengan itu' },
      { jp:'〜について',           romaji:'~ ni tsuite',             arti:'Tentang ~' },
      { jp:'〜をお知らせします',    romaji:'~ o oshirase shimasu',    arti:'Memberitahukan ~' },
      { jp:'ご確認ください',       romaji:'Gokakunin kudasai',       arti:'Mohon diperiksa' },
      { jp:'ご返信お待ちしております', romaji:'Gohenshin omachi shite orimasu', arti:'Menunggu balasan' },
      { jp:'ご不明な点がございましたら', romaji:'Gofumei na ten ga gozaimashitara', arti:'Jika ada yang tidak jelas' },
      { jp:'お気軽にご連絡ください', romaji:'Okiragu ni gorenraku kudasai', arti:'Silakan hubungi dengan santai' },
      { jp:'よろしくお願いいたします', romaji:'Yoroshiku onegai itashimasu', arti:'Mohon bantuannya' },
      { jp:'取り急ぎ',             romaji:'Toriisogi',               arti:'Segera / Tanpa menunggu lama' },
      { jp:'以上',                 romaji:'Ijou',                    arti:'Sekian' },
      { jp:'添付ファイル',         romaji:'Tenpu fairu',             arti:'File lampiran' },
      { jp:'件名',                 romaji:'Kenmei',                  arti:'Subjek' },
      { jp:'宛先',                 romaji:'Atesaki',                 arti:'Alamat tujuan' },
      { jp:'差出人',               romaji:'Sashidashinin',           arti:'Pengirim' }
    ]
  },

  /* ============================================================
     LEVEL 40 — Review N4
     ============================================================ */
  'materi-40': {
    title: 'Review N4',
    jp: 'N4復習',
    desc: 'Ulang semua materi N4 dalam satu halaman ringkasan.',
    tips: 'Level ini adalah rangkuman N4. Kalau sudah kuasai, lanjut ke N3!',
    vocab: [
      { jp:'経験',         romaji:'Keiken',       arti:'Pengalaman' },
      { jp:'準備',         romaji:'Junbi',        arti:'Persiapan' },
      { jp:'説明',         romaji:'Setsumei',     arti:'Penjelasan' },
      { jp:'連絡',         romaji:'Renraku',      arti:'Kontak' },
      { jp:'相談',         romaji:'Soudan',       arti:'Konsultasi' },
      { jp:'予定',         romaji:'Yotei',        arti:'Rencana' },
      { jp:'約束',         romaji:'Yakusoku',     arti:'Janji' },
      { jp:'生活',         romaji:'Seikatsu',     arti:'Kehidupan' },
      { jp:'社会',         romaji:'Shakai',       arti:'Masyarakat' },
      { jp:'文化',         romaji:'Bunka',        arti:'Budaya' },
      { jp:'最近',         romaji:'Saikin',       arti:'Akhir-akhir ini' },
      { jp:'将来',         romaji:'Shourai',      arti:'Masa depan' },
      { jp:'意見',         romaji:'Iken',         arti:'Pendapat' },
      { jp:'理由',         romaji:'Riyuu',        arti:'Alasan' },
      { jp:'目的',         romaji:'Mokuteki',     arti:'Tujuan' },
      { jp:'方法',         romaji:'Houhou',       arti:'Metode' },
      { jp:'結果',         romaji:'Kekka',        arti:'Hasil' },
      { jp:'問題',         romaji:'Mondai',       arti:'Masalah' },
      { jp:'〜てしまう',   romaji:'~ te shimau',  arti:'Tanpa sengaja ~' },
      { jp:'〜てみる',     romaji:'~ te miru',    arti:'Mencoba ~' }
    ]
  },

  /* ============================================================
     LEVEL 41 — Kanji N3 Dasar
     ============================================================ */
  'materi-41': {
    title: 'Kanji N3 Dasar',
    jp: '漢字 N3',
    desc: 'Hafalkan 20 kanji level lanjut (N3).',
    tips: 'Kanji N3 lebih kompleks. Fokus ke arti dan penggunaan dalam kalimat.',
    vocab: [
      { jp:'経',   romaji:'Kei',        arti:'Lewat / Mengelola' },
      { jp:'済',   romaji:'Sai / Su',   arti:'Selesai' },
      { jp:'政',   romaji:'Sei',        arti:'Politik' },
      { jp:'治',   romaji:'Chi / Naosu', arti:'Memerintah / Sembuh' },
      { jp:'文',   romaji:'Bun',        arti:'Kalimat / Sastra' },
      { jp:'化',   romaji:'Ka',         arti:'Berubah' },
      { jp:'歴',   romaji:'Reki',       arti:'Sejarah / Riwayat' },
      { jp:'史',   romaji:'Shi',        arti:'Sejarah' },
      { jp:'社',   romaji:'Sha',        arti:'Perusahaan / Kuil' },
      { jp:'会',   romaji:'Kai / Au',   arti:'Bertemu / Perkumpulan' },
      { jp:'感',   romaji:'Kan',        arti:'Perasaan' },
      { jp:'情',   romaji:'Jou',        arti:'Emosi / Perasaan' },
      { jp:'報',   romaji:'Hou',        arti:'Laporan / Kabar' },
      { jp:'告',   romaji:'Koku',       arti:'Memberitahu' },
      { jp:'説',   romaji:'Setsu',      arti:'Penjelasan / Teori' },
      { jp:'明',   romaji:'Mei / Akarui', arti:'Jelas / Terang' },
      { jp:'性',   romaji:'Sei',        arti:'Sifat / Jenis' },
      { jp:'格',   romaji:'Kaku',       arti:'Status / Kualitas' },
      { jp:'法',   romaji:'Hou',        arti:'Hukum / Metode' },
      { jp:'制',   romaji:'Sei',        arti:'Sistem / Kontrol' }
    ]
  },

  /* ============================================================
     LEVEL 42 — Tata Bahasa N3
     ============================================================ */
  'materi-42': {
    title: 'Tata Bahasa N3',
    jp: 'N3文法',
    desc: 'Kuasai 20 pola kalimat N3 yang sering muncul.',
    tips: 'Pola N3 sering dipakai di percakapan sehari-hari dan bacaan berita.',
    vocab: [
      { jp:'〜はずです',           romaji:'~ hazu desu',           arti:'Seharusnya / Pasti ~' },
      { jp:'〜かもしれません',     romaji:'~ kamoshiremasen',     arti:'Mungkin ~' },
      { jp:'〜でしょう',           romaji:'~ deshou',             arti:'Mungkin / Sepertinya ~' },
      { jp:'〜ようです',           romaji:'~ you desu',           arti:'Sepertinya ~' },
      { jp:'〜らしいです',         romaji:'~ rashii desu',        arti:'Sepertinya ~ (dengar kabar)' },
      { jp:'〜そうです',           romaji:'~ sou desu',           arti:'Katanya ~ / Kelihatannya ~' },
      { jp:'〜ため',               romaji:'~ tame',               arti:'Karena ~ / Untuk ~' },
      { jp:'〜ように',             romaji:'~ you ni',             arti:'Supaya ~ / Seperti ~' },
      { jp:'〜のに',               romaji:'~ noni',               arti:'Meskipun ~ / Padahal ~' },
      { jp:'〜ても',               romaji:'~ temo',               arti:'Meskipun ~' },
      { jp:'〜ば',                 romaji:'~ ba',                 arti:'Jika ~' },
      { jp:'〜なら',               romaji:'~ nara',               arti:'Kalau ~' },
      { jp:'〜と',                 romaji:'~ to',                 arti:'Kalau ~ (otomatis)' },
      { jp:'〜うちに',             romaji:'~ uchi ni',            arti:'Selagi ~' },
      { jp:'〜あいだ',             romaji:'~ aida',               arti:'Selama ~' },
      { jp:'〜たびに',             romaji:'~ tabi ni',            arti:'Setiap kali ~' },
      { jp:'〜とおりに',           romaji:'~ toori ni',           arti:'Sesuai dengan ~' },
      { jp:'〜ばかり',             romaji:'~ bakari',             arti:'Hanya ~ / Terus ~' },
      { jp:'〜ところ',             romaji:'~ tokoro',             arti:'Saat ~ / Tempat ~' },
      { jp:'〜ばかりでなく',       romaji:'~ bakari denaku',      arti:'Tidak hanya ~, tapi juga ~' }
    ]
  },

  /* ============================================================
     LEVEL 43 — Kosakata Berita
     ============================================================ */
  'materi-43': {
    title: 'Kosakata Berita',
    jp: 'ニュース語彙',
    desc: 'Hafalkan 20 kosakata yang sering muncul di berita Jepang.',
    tips: 'Kosakata N3 sering dipakai di artikel berita dan acara TV Jepang.',
    vocab: [
      { jp:'経済',         romaji:'Keizai',       arti:'Ekonomi' },
      { jp:'政治',         romaji:'Seiji',        arti:'Politik' },
      { jp:'社会',         romaji:'Shakai',       arti:'Masyarakat' },
      { jp:'文化',         romaji:'Bunka',        arti:'Budaya' },
      { jp:'国際',         romaji:'Kokusai',      arti:'Internasional' },
      { jp:'政府',         romaji:'Seifu',        arti:'Pemerintah' },
      { jp:'大統領',       romaji:'Daitouryou',   arti:'Presiden' },
      { jp:'首相',         romaji:'Shushou',      arti:'Perdana Menteri' },
      { jp:'会議',         romaji:'Kaigi',        arti:'Konferensi / Rapat' },
      { jp:'選挙',         romaji:'Senkyo',       arti:'Pemilihan umum' },
      { jp:'法律',         romaji:'Houritsu',     arti:'Hukum' },
      { jp:'事件',         romaji:'Jiken',        arti:'Insiden / Kejadian' },
      { jp:'事故',         romaji:'Jiko',         arti:'Kecelakaan' },
      { jp:'災害',         romaji:'Saigai',       arti:'Bencana' },
      { jp:'地震',         romaji:'Jishin',       arti:'Gempa bumi' },
      { jp:'台風',         romaji:'Taifuu',       arti:'Topan' },
      { jp:'感染',         romaji:'Kansen',       arti:'Infeksi' },
      { jp:'環境',         romaji:'Kankyou',      arti:'Lingkungan' },
      { jp:'問題',         romaji:'Mondai',       arti:'Masalah' },
      { jp:'解決',         romaji:'Kaiketsu',     arti:'Penyelesaian' }
    ]
  },

  /* ============================================================
     LEVEL 44 — Kosakata Akademik
     ============================================================ */
  'materi-44': {
    title: 'Kosakata Akademik',
    jp: '学術語彙',
    desc: 'Hafalkan 20 kosakata akademik yang sering muncul di teks formal.',
    tips: 'Kosakata ini sering muncul di esai, makalah, dan artikel ilmiah Jepang.',
    vocab: [
      { jp:'研究',         romaji:'Kenkyuu',      arti:'Penelitian' },
      { jp:'実験',         romaji:'Jikken',       arti:'Eksperimen' },
      { jp:'理論',         romaji:'Riron',        arti:'Teori' },
      { jp:'証明',         romaji:'Shoumei',      arti:'Pembuktian' },
      { jp:'仮説',         romaji:'Kasetsu',      arti:'Hipotesis' },
      { jp:'分析',         romaji:'Bunseki',      arti:'Analisis' },
      { jp:'結果',         romaji:'Kekka',        arti:'Hasil' },
      { jp:'結論',         romaji:'Ketsuron',     arti:'Kesimpulan' },
      { jp:'目的',         romaji:'Mokuteki',     arti:'Tujuan' },
      { jp:'方法',         romaji:'Houhou',       arti:'Metode' },
      { jp:'対象',         romaji:'Taishou',      arti:'Objek / Target' },
      { jp:'影響',         romaji:'Eikyou',       arti:'Pengaruh' },
      { jp:'効果',         romaji:'Kouka',        arti:'Efek' },
      { jp:'原因',         romaji:'Gen'in',       arti:'Penyebab' },
      { jp:'データ',       romaji:'Deeta',        arti:'Data' },
      { jp:'統計',         romaji:'Toukei',       arti:'Statistik' },
      { jp:'論文',         romaji:'Ronbun',       arti:'Makalah / Tesis' },
      { jp:'学会',         romaji:'Gakkai',       arti:'Konferensi akademik' },
      { jp:'教授',         romaji:'Kyouju',       arti:'Profesor' },
      { jp:'専門',         romaji:'Senmon',       arti:'Spesialisasi' }
    ]
  },

  /* ============================================================
     LEVEL 45 — Idiom & Peribahasa
     ============================================================ */
  'materi-45': {
    title: 'Idiom & Peribahasa',
    jp: '慣用句',
    desc: 'Hafalkan 20 idiom dan peribahasa Jepang yang sering dipakai.',
    tips: 'Idiom Jepang sering muncul di percakapan sehari-hari dan bacaan N3.',
    vocab: [
      { jp:'一石二鳥',       romaji:'Isseki nichou',        arti:'Sekali mendayung dua tiga pulau terlampaui' },
      { jp:'猿も木から落ちる', romaji:'Saru mo ki kara ochiru', arti:'Sepandai-pandainya orang bisa salah' },
      { jp:'七転び八起き',   romaji:'Nana korobi ya oki',   arti:'Jatuh tujuh kali bangun delapan kali' },
      { jp:'急がば回れ',     romaji:'Isogaba maware',       arti:'Kalau tergesa-gesa, ambil jalan aman' },
      { jp:'石の上にも三年', romaji:'Ishi no ue nimo sannen', arti:'Kesabaran akan berbuah' },
      { jp:'目から鱗',       romaji:'Me kara uroko',        arti:'Tiba-tiba sadar / tercerahkan' },
      { jp:'猫の手も借りたい', romaji:'Neko no te mo karitai', arti:'Sangat sibuk' },
      { jp:'犬と猿',         romaji:'Inu to saru',          arti:'Hubungan buruk' },
      { jp:'馬が合う',       romaji:'Uma ga au',            arti:'Cocok / Akur' },
      { jp:'顔が広い',       romaji:'Kao ga hiroi',         arti:'Punya banyak kenalan' },
      { jp:'頭が切れる',     romaji:'Atama ga kireru',      arti:'Cerdas / Tajam pikiran' },
      { jp:'手を貸す',       romaji:'Te o kasu',            arti:'Membantu' },
      { jp:'足を運ぶ',       romaji:'Ashi o hakobu',        arti:'Pergi / Mengunjungi' },
      { jp:'口が堅い',       romaji:'Kuchi ga katai',       arti:'Bisa menyimpan rahasia' },
      { jp:'耳が痛い',       romaji:'Mimi ga itai',         arti:'Sakit mendengar kebenaran' },
      { jp:'胸を張る',       romaji:'Mune o haru',          arti:'Percaya diri' },
      { jp:'油を売る',       romaji:'Abura o uru',          arti:'Bermalas-malasan / Buang waktu' },
      { jp:'骨が折れる',     romaji:'Hone ga oreru',        arti:'Sulit / Butuh usaha keras' },
      { jp:'水に流す',       romaji:'Mizu ni nagasu',       arti:'Memaafkan / Melupakan' },
      { jp:'顔を出す',       romaji:'Kao o dasu',           arti:'Muncul / Datang sebentar' }
    ]
  },

  /* ============================================================
     LEVEL 46 — Keigo Lanjutan
     ============================================================ */
  'materi-46': {
    title: 'Keigo Lanjutan',
    jp: '敬語上級',
    desc: 'Kuasai keigo lanjutan untuk situasi formal dan bisnis.',
    tips: 'Keigo lanjutan mencakup 尊敬語 (sonkeigo), 謙譲語 (kenjougo), dan 丁寧語 (teineigo) secara mendalam.',
    vocab: [
      { jp:'いらっしゃいませ',           romaji:'Irasshaimase',              arti:'Selamat datang (hormat)' },
      { jp:'お越しください',             romaji:'Okoshi kudasai',            arti:'Silakan datang (hormat)' },
      { jp:'ご足労いただき',             romaji:'Go-sokurou itadaki',        arti:'Terima kasih sudah datang (rendah)' },
      { jp:'お目にかかる',               romaji:'Ome ni kakaru',             arti:'Bertemu (rendah)' },
      { jp:'ご覧に入れる',               romaji:'Goran ni ireru',            arti:'Memperlihatkan (rendah)' },
      { jp:'お耳に入れる',               romaji:'Omimi ni ireru',            arti:'Memberitahu (rendah)' },
      { jp:'ご高配を賜り',               romaji:'Go-kouhai o tamawari',      arti:'Terima kasih atas perhatian (sangat hormat)' },
      { jp:'恐れ入りますが',             romaji:'Osore irimasu ga',          arti:'Mohon maaf (sangat sopan)' },
      { jp:'恐縮ですが',                 romaji:'Kyoushuku desu ga',         arti:'Mohon maaf (sangat sopan)' },
      { jp:'〜ていただけますか',         romaji:'~ te itadakemasu ka',       arti:'Bisakah Anda ~? (sangat sopan)' },
      { jp:'〜ていただけると幸いです',   romaji:'~ te itadakeru to saiwai desu', arti:'Saya akan senang jika Anda ~' },
      { jp:'〜させていただきます',       romaji:'~ sasete itadakimasu',      arti:'Saya akan ~ (rendah)' },
      { jp:'〜させていただけますか',     romaji:'~ sasete itadakemasu ka',   arti:'Bolehkah saya ~?' },
      { jp:'お手数をおかけしますが',     romaji:'Otesuu o okake shimasu ga', arti:'Maaf merepotkan' },
      { jp:'ご多忙のところ',             romaji:'Go-tabou no tokoro',        arti:'Di tengah kesibukan Anda' },
      { jp:'おかげさまで',               romaji:'Okagesama de',              arti:'Berkat bantuan Anda' },
      { jp:'何卒よろしくお願い申し上げます', romaji:'Nanishozo yoroshiku onegai moushiagemasu', arti:'Mohon bantuannya dengan sangat' },
      { jp:'〜のほどよろしくお願いいたします', romaji:'~ no hodo yoroshiku onegai itashimasu', arti:'Mohon ~ dengan sangat' },
      { jp:'かしこまりました',           romaji:'Kashikomarimashita',        arti:'Baik, saya mengerti (sangat sopan)' },
      { jp:'承知いたしました',           romaji:'Shouchi itashimashita',     arti:'Baik, saya mengerti (sangat sopan)' }
    ]
  },

  /* ============================================================
     LEVEL 47 — Percakapan Bisnis
     ============================================================ */
  'materi-47': {
    title: 'Percakapan Bisnis',
    jp: 'ビジネス会話',
    desc: 'Hafalkan 20 frasa untuk percakapan bisnis dalam bahasa Jepang.',
    tips: 'Dalam bisnis Jepang, kesopanan dan kejelasan sangat penting. Gunakan keigo yang tepat.',
    vocab: [
      { jp:'お世話になっております',     romaji:'Osewa ni natte orimasu',    arti:'Terima kasih atas bantuannya' },
      { jp:'お疲れ様です',               romaji:'Otsukaresama desu',         arti:'Terima kasih atas kerja kerasnya' },
      { jp:'お先に失礼します',           romaji:'Osaki ni shitsurei shimasu', arti:'Saya permisi duluan' },
      { jp:'お疲れ様でした',             romaji:'Otsukaresama deshita',      arti:'Terima kasih atas kerja kerasnya (selesai)' },
      { jp:'よろしくお願いいたします',   romaji:'Yoroshiku onegai itashimasu', arti:'Mohon bantuannya' },
      { jp:'かしこまりました',           romaji:'Kashikomarimashita',        arti:'Baik, saya mengerti' },
      { jp:'承知しました',               romaji:'Shouchi shimashita',        arti:'Baik, saya mengerti (sopan)' },
      { jp:'少々お待ちください',         romaji:'Shoushou omachi kudasai',   arti:'Mohon tunggu sebentar' },
      { jp:'申し訳ございません',         romaji:'Moushiwake gozaimasen',     arti:'Mohon maaf (sangat sopan)' },
      { jp:'恐れ入りますが',             romaji:'Osore irimasu ga',          arti:'Mohon maaf' },
      { jp:'お手数ですが',               romaji:'Otesuu desu ga',            arti:'Maaf merepotkan' },
      { jp:'ご確認ください',             romaji:'Gokakunin kudasai',         arti:'Mohon diperiksa' },
      { jp:'ご検討ください',             romaji:'Gokentou kudasai',          arti:'Mohon dipertimbangkan' },
      { jp:'ご連絡いたします',           romaji:'Gorenraku itashimasu',      arti:'Saya akan menghubungi' },
      { jp:'折り返しご連絡いたします',   romaji:'Ori kaeshi gorenraku itashimasu', arti:'Saya akan segera menghubungi' },
      { jp:'資料を送付いたします',       romaji:'Shiryou o soufu itashimasu', arti:'Saya akan mengirimkan dokumen' },
      { jp:'ご都合はいかがですか',       romaji:'Gotsugou wa ikaga desu ka', arti:'Bagaimana kesediaan Anda?' },
      { jp:'お時間をいただけますか',     romaji:'Ojikan o itadakemasu ka',   arti:'Bisakah minta waktunya?' },
      { jp:'本日はお忙しい中',           romaji:'Honjitsu wa oisogashii naka', arti:'Di tengah kesibukan Anda hari ini' },
      { jp:'今後ともよろしくお願いいたします', romaji:'Kongo tomo yoroshiku onegai itashimasu', arti:'Mohon kerja samanya ke depan' }
    ]
  },

  /* ============================================================
     LEVEL 48 — Membaca Artikel
     ============================================================ */
  'materi-48': {
    title: 'Membaca Artikel',
    jp: '記事を読む',
    desc: 'Latihan membaca artikel Jepang tingkat N3.',
    tips: 'Saat membaca artikel, fokus ke kata kunci dan kesimpulan. Jangan baca kata per kata.',
    vocab: [
      { jp:'記事',         romaji:'Kiji',         arti:'Artikel' },
      { jp:'新聞',         romaji:'Shinbun',      arti:'Koran' },
      { jp:'雑誌',         romaji:'Zasshi',       arti:'Majalah' },
      { jp:'見出し',       romaji:'Midashi',      arti:'Judul berita' },
      { jp:'内容',         romaji:'Naiyou',       arti:'Isi / Konten' },
      { jp:'要約',         romaji:'Youyaku',      arti:'Ringkasan' },
      { jp:'筆者',         romaji:'Hissha',       arti:'Penulis' },
      { jp:'主張',         romaji:'Shuchou',      arti:'Klaim / Pendapat' },
      { jp:'根拠',         romaji:'Konkyo',       arti:'Dasar / Bukti' },
      { jp:'例',           romaji:'Rei',          arti:'Contoh' },
      { jp:'具体例',       romaji:'Gutairei',     arti:'Contoh konkret' },
      { jp:'一方',         romaji:'Ippou',        arti:'Di sisi lain' },
      { jp:'つまり',       romaji:'Tsumari',      arti:'Dengan kata lain' },
      { jp:'たとえば',     romaji:'Tatoeba',      arti:'Misalnya' },
      { jp:'しかし',       romaji:'Shikashi',     arti:'Namun' },
      { jp:'したがって',   romaji:'Shitagatte',   arti:'Oleh karena itu' },
      { jp:'また',         romaji:'Mata',         arti:'Selain itu' },
      { jp:'さらに',       romaji:'Sara ni',      arti:'Lebih lanjut' },
      { jp:'結論',         romaji:'Ketsuron',     arti:'Kesimpulan' },
      { jp:'まとめ',       romaji:'Matome',       arti:'Ringkasan' }
    ]
  },

  /* ============================================================
     LEVEL 49 — Menulis Esai
     ============================================================ */
  'materi-49': {
    title: 'Menulis Esai',
    jp: '作文',
    desc: 'Latihan menulis esai Jepang tingkat N3.',
    tips: 'Struktur esai Jepang: 序論 (pendahuluan) → 本論 (isi) → 結論 (kesimpulan).',
    vocab: [
      { jp:'作文',         romaji:'Sakubun',      arti:'Karangan / Esai' },
      { jp:'序論',         romaji:'Joron',        arti:'Pendahuluan' },
      { jp:'本論',         romaji:'Honron',       arti:'Isi / Pembahasan' },
      { jp:'結論',         romaji:'Ketsuron',     arti:'Kesimpulan' },
      { jp:'テーマ',       romaji:'Teema',        arti:'Tema' },
      { jp:'意見',         romaji:'Iken',         arti:'Pendapat' },
      { jp:'理由',         romaji:'Riyuu',        arti:'Alasan' },
      { jp:'例',           romaji:'Rei',          arti:'Contoh' },
      { jp:'体験',         romaji:'Taiken',       arti:'Pengalaman' },
      { jp:'具体例',       romaji:'Gutairei',     arti:'Contoh konkret' },
      { jp:'つまり',       romaji:'Tsumari',      arti:'Dengan kata lain' },
      { jp:'したがって',   romaji:'Shitagatte',   arti:'Oleh karena itu' },
      { jp:'なぜなら',     romaji:'Nazenara',     arti:'Karena' },
      { jp:'しかし',       romaji:'Shikashi',     arti:'Namun' },
      { jp:'一方で',       romaji:'Ippou de',     arti:'Di sisi lain' },
      { jp:'私の経験では', romaji:'Watashi no keiken de wa', arti:'Menurut pengalaman saya' },
      { jp:'私は〜と思う', romaji:'Watashi wa ~ to omou', arti:'Saya berpikir bahwa ~' },
      { jp:'確かに〜が',   romaji:'Tashika ni ~ ga', arti:'Memang ~, tetapi' },
      { jp:'以上の理由から', romaji:'Ijou no riyuu kara', arti:'Dari alasan di atas' },
      { jp:'最後に',       romaji:'Saigo ni',     arti:'Terakhir' }
    ]
  },

  /* ============================================================
     LEVEL 50 — Review N3
     ============================================================ */
  'materi-50': {
    title: 'Review N3',
    jp: 'N3復習',
    desc: 'Ulang semua materi N3 dalam satu halaman ringkasan.',
    tips: 'Selamat! Kamu sudah menyelesaikan seluruh 50 level materi. Ulangi berkala biar tidak lupa.',
    vocab: [
      { jp:'影響',         romaji:'Eikyou',       arti:'Pengaruh' },
      { jp:'解決',         romaji:'Kaiketsu',     arti:'Penyelesaian' },
      { jp:'環境',         romaji:'Kankyou',      arti:'Lingkungan' },
      { jp:'経済',         romaji:'Keizai',       arti:'Ekonomi' },
      { jp:'計画',         romaji:'Keikaku',      arti:'Rencana' },
      { jp:'研究',         romaji:'Kenkyuu',      arti:'Penelitian' },
      { jp:'現在',         romaji:'Genzai',       arti:'Saat ini' },
      { jp:'効果',         romaji:'Kouka',        arti:'Efek' },
      { jp:'国際',         romaji:'Kokusai',      arti:'Internasional' },
      { jp:'今後',         romaji:'Kongo',        arti:'Mulai sekarang' },
      { jp:'最後',         romaji:'Saigo',        arti:'Terakhir' },
      { jp:'最初',         romaji:'Saisho',       arti:'Pertama' },
      { jp:'実際',         romaji:'Jissai',       arti:'Kenyataan' },
      { jp:'状況',         romaji:'Joukyou',      arti:'Situasi' },
      { jp:'情報',         romaji:'Jouhou',       arti:'Informasi' },
      { jp:'成長',         romaji:'Seichou',      arti:'Pertumbuhan' },
      { jp:'制度',         romaji:'Seido',        arti:'Sistem' },
      { jp:'責任',         romaji:'Sekinin',      arti:'Tanggung jawab' },
      { jp:'組織',         romaji:'Soshiki',      arti:'Organisasi' },
      { jp:'〜はずです',   romaji:'~ hazu desu',  arti:'Seharusnya ~' }
    ]
  }
};
