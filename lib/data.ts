export type Accent = "violet" | "cyan" | "acid";
export type Level = "Pemula" | "Menengah" | "Lanjutan";

export type LearningTrack = {
  id: string;
  index: string;
  title: string;
  description: string;
  lessons: number;
  level: Level;
  accent: Accent;
  icon: "sparkles" | "wallet" | "droplets" | "target" | "shield" | "radar";
};

export const learningTracks: LearningTrack[] = [
  {
    id: "fundamentals",
    index: "01",
    title: "Dasar-Dasar Memecoin",
    description:
      "Pelajari cara kerja memecoin, peluncuran token, narasi, dan siklus pasar.",
    lessons: 6,
    level: "Pemula",
    accent: "violet",
    icon: "sparkles",
  },
  {
    id: "onchain",
    index: "02",
    title: "Riset On-Chain",
    description:
      "Pahami holder, smart money, wallet, transaksi, dan blockchain explorer.",
    lessons: 7,
    level: "Menengah",
    accent: "cyan",
    icon: "wallet",
  },
  {
    id: "liquidity",
    index: "03",
    title: "Likuiditas & Analisis Pasar",
    description:
      "Pelajari pool likuiditas, LP burn, kapitalisasi pasar, volume, dan dampak harga.",
    lessons: 8,
    level: "Menengah",
    accent: "acid",
    icon: "droplets",
  },
  {
    id: "strategies",
    index: "04",
    title: "Strategi Trading",
    description:
      "Pelajari perencanaan entry, take profit, stop loss, ukuran posisi, dan DCA.",
    lessons: 7,
    level: "Menengah",
    accent: "violet",
    icon: "target",
  },
  {
    id: "risk",
    index: "05",
    title: "Manajemen Risiko",
    description:
      "Pahami slippage, volatilitas, risiko likuiditas, dan scam yang umum terjadi.",
    lessons: 6,
    level: "Pemula",
    accent: "cyan",
    icon: "shield",
  },
  {
    id: "advanced",
    index: "06",
    title: "Riset Lanjutan",
    description:
      "Analisis perilaku token, psikologi pasar, dan peluang trading.",
    lessons: 8,
    level: "Lanjutan",
    accent: "acid",
    icon: "radar",
  },
];

export type CurriculumModule = {
  id: string;
  number: string;
  title: string;
  duration: string;
  level: Level;
  lessons: string[];
};

export const curriculumModules: CurriculumModule[] = [
  {
    id: "module-01",
    number: "01",
    title: "Memulai",
    duration: "18 mnt",
    level: "Pemula",
    lessons: [
      "Apa Itu Memecoin?",
      "Ekosistem Solana",
      "Dasar-Dasar Pump.fun",
      "Memahami DexScreener",
    ],
  },
  {
    id: "module-02",
    number: "02",
    title: "Riset On-Chain",
    duration: "22 mnt",
    level: "Menengah",
    lessons: [
      "Melacak Wallet",
      "Distribusi Holder",
      "Smart Money",
      "Analisis Transaksi",
    ],
  },
  {
    id: "module-03",
    number: "03",
    title: "Likuiditas & Mekanika Harga",
    duration: "34 mnt",
    level: "Menengah",
    lessons: [
      "Pool Likuiditas",
      "LP Burn",
      "Kapitalisasi Pasar",
      "Analisis Volume",
      "Dampak Harga",
      "Slippage",
    ],
  },
  {
    id: "module-04",
    number: "04",
    title: "Trading & Manajemen Risiko",
    duration: "31 mnt",
    level: "Menengah",
    lessons: [
      "Strategi Entry",
      "Take Profit",
      "Stop Loss",
      "DCA",
      "Ukuran Posisi",
      "Rasio Risiko/Imbalan",
    ],
  },
  {
    id: "module-05",
    number: "05",
    title: "Riset Lanjutan",
    duration: "24 mnt",
    level: "Lanjutan",
    lessons: [
      "Analisis Narasi",
      "Psikologi Pasar",
      "Perilaku Token",
      "Kerangka Riset",
    ],
  },
];

export type ArticleVisual =
  | "slippage"
  | "impact"
  | "liquidity"
  | "burn"
  | "position"
  | "signals";

export type Article = {
  slug: string;
  category: string;
  minutes: number;
  title: string;
  excerpt: string;
  visual: ArticleVisual;
  accent: Accent;
  paragraphs: string[];
  takeaways: string[];
};

export const articles: Article[] = [
  {
    slug: "what-is-slippage",
    category: "Mekanika trading",
    minutes: 6,
    title: "Apa Itu Slippage Dan Bagaimana Cara Kerjanya?",
    excerpt:
      "Selisih antara harga yang kamu lihat dan harga yang benar-benar dieksekusi bukanlah kebetulan. Pelajari apa yang menggerakkan slippage — dan mengapa menaikkan toleransi bukan solusinya.",
    visual: "slippage",
    accent: "violet",
    paragraphs: [
      "Slippage adalah selisih antara harga yang diharapkan dari sebuah swap dan harga saat transaksi benar-benar dieksekusi. Pada automated market maker, setiap transaksi mengambil likuiditas dari pool. Ketika order relatif besar dibanding likuiditas yang tersedia — atau saat pasar bergerak cepat — harga eksekusi bisa berada di atas atau di bawah kuotasi awal.",
      "Toleransi slippage menentukan seberapa besar pergerakan yang mau kamu terima. Jika terlalu tinggi, pool yang bergerak cepat bisa mengeksekusi di harga yang jauh lebih buruk; jika terlalu rendah, transaksi bisa gagal berulang kali. Kebiasaan yang lebih aman adalah menyesuaikan ukuran transaksi dengan likuiditas yang ada, memeriksa rute, dan meninjau kuotasi — bukan menganggap toleransi sebagai obat.",
    ],
    takeaways: [
      "Slippage adalah variasi eksekusi, bukan biaya tetap.",
      "Likuiditas tipis memperbesar slippage dan dampak harga.",
      "Bandingkan harga kuotasi dan harga aktual untuk membangun intuisi.",
      "Toleransi tinggi memperlebar rentang hasil — termasuk hasil yang merugikan.",
    ],
  },
  {
    slug: "price-impact-vs-spot-impact",
    category: "Likuiditas",
    minutes: 5,
    title: "Dampak Harga vs Dampak Spot",
    excerpt:
      "Kedua angka ini sering dianggap sama. Padahal keduanya menggambarkan hal berbeda — dan mencampurnya bisa mengacaukan rencana entry.",
    visual: "impact",
    accent: "cyan",
    paragraphs: [
      "Dampak harga (price impact) mengukur seberapa besar order milikmu menggeser harga pool. Angka ini bergantung pada ukuran transaksi relatif terhadap likuiditas yang tersedia dan bisa diperkirakan sebelum kamu mengonfirmasi swap. Di pool tipis, transaksi yang tampak kecil pun bisa menggeser harga kuotasi secara signifikan.",
      "Dampak spot — sering ditampilkan dashboard sebagai selisih antara harga tengah pool dan eksekusi terakhir — mencerminkan aktivitas pasar terkini, bukan hanya ordermu. Angka ini bisa tertinggal, melonjak, atau hanya mencerminkan satu transaksi agresif. Gunakan keduanya dengan konteks: dampak harga untuk menentukan ukuran, pergerakan spot untuk membaca suhu pasar.",
    ],
    takeaways: [
      "Ukuran order mendorong dampak harga.",
      "Pergerakan spot mencerminkan aktivitas pasar terkini.",
      "Pool tipis membuat kedua metrik lebih berisik.",
      "Baca metrik secara bersamaan, bukan terpisah.",
    ],
  },
  {
    slug: "read-liquidity-before-buying",
    category: "Riset on-chain",
    minutes: 7,
    title: "Cara Membaca Likuiditas Sebelum Membeli",
    excerpt:
      "Likuiditas bukan sekadar angka besar di layar. Kedalaman, distribusi, dan status lock menentukan seberapa aman kamu bisa masuk — dan keluar.",
    visual: "liquidity",
    accent: "acid",
    paragraphs: [
      "Likuiditas adalah modal yang tersedia di pool perdagangan. Angka yang lebih besar belum tentu lebih aman: yang penting adalah kedalaman di sekitar harga saat ini, apakah likuiditas terkonsentrasi atau tersebar, dan siapa yang mengendalikannya. Pool bisa terlihat sehat padahal exit kecil saja sudah menggerakkan harga secara tajam.",
      "Sebelum membeli, periksa total likuiditas pair, kepemilikan LP, dan volume terkini. Volume tinggi dengan likuiditas tipis adalah tanda peringatan; volume bisa berupa wash activity, bukan minat organik. Memahami ketiganya bersama-sama lebih berguna daripada menghafal satu ambang batas.",
    ],
    takeaways: [
      "Kedalaman di sekitar harga lebih penting daripada TVL semata.",
      "Periksa siapa pemilik posisi LP.",
      "Volume tinggi dengan likuiditas tipis perlu dicurigai.",
      "Rencanakan exit saat mengevaluasi entry.",
    ],
  },
  {
    slug: "understanding-lp-burn",
    category: "Keamanan",
    minutes: 5,
    title: "Memahami LP Burn",
    excerpt:
      "Posisi LP yang dibakar dapat mengurangi satu jenis risiko. Itu tidak membuat token aman — inilah yang sebenarnya dibuktikan oleh label tersebut.",
    visual: "burn",
    accent: "violet",
    paragraphs: [
      "Saat likuiditas ditambahkan ke pool, penyedia likuiditas menerima token LP yang mewakili klaim atas likuiditas tersebut. Membakar token LP berarti mengirimnya ke alamat yang tidak dapat diakses, sehingga pool secara efektif tidak bisa ditarik. Ini menghilangkan satu vektor rug: kreator menarik likuiditas secara langsung.",
      "Likuiditas yang dibakar tetap bukan jaminan keamanan. Pool bisa kecil, perdagangan bisa didominasi bot, atau kontrak token bisa memiliki kewenangan lain. Anggap LP burn sebagai satu titik data dalam checklist yang lebih luas, bukan lampu hijau.",
    ],
    takeaways: [
      "Burn menghilangkan kemampuan menarik LP secara langsung.",
      "Locked dan burned bukan hal yang sama.",
      "Kualitas likuiditas tetap penting setelah burn.",
      "Risiko token dan pasar lainnya masih ada.",
    ],
  },
  {
    slug: "calculate-position-size",
    category: "Manajemen risiko",
    minutes: 6,
    title: "Cara Menghitung Ukuran Posisi",
    excerpt:
      "Aturan sizing yang konsisten melindungi cara berpikirmu, bukan hanya modal. Ini kerangka edukatif sederhana untuk pasar yang volatil.",
    visual: "position",
    accent: "cyan",
    paragraphs: [
      "Ukuran posisi dimulai dengan menentukan jumlah maksimum yang bersedia kamu kehilangan pada satu ide sebelum mencari entry. Jika angka itu belum jelas, tidak ada pola chart yang bisa membuat posisi menjadi terukur. Pendekatan edukatif yang umum adalah menyatakan risiko sebagai fraksi tetap dari portofolio hipotetis, lalu menghitung mundur.",
      "Setelah risiko ditetapkan, pilih level invalidasi berdasarkan struktur pasar, lalu hitung ukuran posisi agar jarak ke level tersebut sama dengan anggaran risikonya. Volatilitas yang lebih tinggi menuntut ukuran yang lebih kecil. Tujuannya adalah konsistensi, bukan keyakinan — tidak ada satu token yang boleh menentukan hasil akhir latihan.",
    ],
    takeaways: [
      "Tetapkan risiko sebelum mencari entry.",
      "Volatilitas seharusnya mengecilkan ukuran posisi.",
      "Level invalidasi harus struktural, bukan emosional.",
      "Konsistensi mengalahkan keyakinan di pasar bervariansi tinggi.",
    ],
  },
  {
    slug: "identify-suspicious-activity",
    category: "Riset",
    minutes: 8,
    title: "Cara Mengenali Aktivitas Token Yang Mencurigakan",
    excerpt:
      "Klaster holder, volume satu arah, dan perubahan likuiditas mendadak sering muncul sebelum cerita sebuah token terungkap. Pelajari di mana harus melihat.",
    visual: "signals",
    accent: "acid",
    paragraphs: [
      "Perilaku token yang mencurigakan jarang tersembunyi dalam satu metrik. Pola muncul dari hubungan antar data: distribusi holder yang didominasi segelintir wallet terhubung, volume yang naik tanpa pertumbuhan holder, atau likuiditas yang bergerak beberapa menit setelah peluncuran. Pola ini bukan bukti pelanggaran, tetapi alasan untuk memperlambat keputusan.",
      "Bangun rutinitas: periksa konsentrasi holder, telusuri riwayat wallet teratas, bandingkan arus beli dan jual, lalu cocokkan status LP dengan klaim proyek. Dokumentasikan temuanmu. Disiplin riset — bukan prediksi — adalah keterampilan yang dilatih.",
    ],
    takeaways: [
      "Cari klaster, bukan hanya wallet individu.",
      "Volume tanpa holder baru bisa menjadi peringatan.",
      "Bandingkan klaim dengan bukti on-chain.",
      "Dokumentasikan temuan sebelum memutuskan apa pun.",
    ],
  },
];

export type CommunityTopic = {
  title: string;
  tag: string;
  note: string;
};

export const communityTopics: CommunityTopic[] = [
  {
    title:
      "Bagaimana cara memeriksa peluncuran baru sebelum menghubungkan wallet?",
    tag: "Rutinitas riset",
    note: "Contoh topik",
  },
  {
    title: "LP burned vs LP locked — apa yang sebenarnya dibuktikan masing-masing?",
    tag: "Likuiditas",
    note: "Contoh topik",
  },
  {
    title: "Menyusun checklist sebelum entry untuk token yang sangat volatil",
    tag: "Manajemen risiko",
    note: "Contoh topik",
  },
];
