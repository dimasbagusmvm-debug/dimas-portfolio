import type { Project } from './projects';

/*
 * Indonesian version of src/data/projects.ts. Same shape and same order:
 * when you change numbers, images or structure there, change them here too.
 * Decision log tags stay in English (they are keys); src/i18n.ts translates them.
 */

const LESSON = 'Pelajaran';
const OUTCOME = 'Hasil';

export const projects: Project[] = [
  {
    slug: 'mining',
    short: 'Pertambangan',
    num: '01',
    accent: '#F2A93B',
    card: {
      kicker: 'Tambang batu bara · Transformasi digital',
      hook: 'Insiden kelelahan turun dari <span class="nw">8–20</span> menjadi <span class="nw">1–3</span> per bulan',
      company: 'Minergo Visi Maxima (Sinarmas Mining) · 2025',
      role: 'Lead Digital Transformation',
    },
    opener: {
      kicker: '01 · Tambang batu bara · Transformasi digital',
      hook: 'Insiden kelelahan turun dari <em><span class="nw">8–20</span> menjadi <span class="nw">1–3</span></em> per bulan.',
      sub: 'Bagaimana kami membuat 2.500 pengemudi truk angkut memakai sistem keselamatan yang tidak pernah mereka minta, lalu menghubungkan truk listrik ke sistem yang sama.',
      role: ['Minergo Visi Maxima, bagian dari Sinarmas Mining · Apr–Nov 2025', 'Lead Digital Transformation & Implementation Catalyst'],
      cover: { file: 'mining-cover.jpg', alt: 'Ilustrasi stasiun pengisian daya dump truck listrik dengan kanopi baja oranye melengkung' },
    },
    beats: [
      {
        label: 'Konteks',
        title: 'Sedikit konteks dulu',
        blocks: [
          { type: 'p', html: 'Sinarmas Mining ingin PT Borneo Indobara menjadi tambang digital pertama di Indonesia. Area saya adalah hauling dan pelabuhan: jalur yang membawa batu bara dari pit ke kapal.' },
          { type: 'stats', items: [['10', 'vendor hauling, masing-masing dengan SOP sendiri'], ['~900', 'dump truck'], ['2.500', 'pengemudi'], ['~3.500', 'total pengguna sistem']] },
        ],
      },
      {
        label: 'Masalahnya',
        title: 'Jadi, apa yang salah?',
        blocks: [
          { type: 'problems', items: [
            ['Ada yang celaka', 'Kelelahan pengemudi menyebabkan 8–20 insiden dan korban jiwa setiap bulan.'],
            ['Sepuluh cara kerja', 'Setiap vendor punya SOP dan dokumen berbeda, jadi datanya tidak pernah cocok.'],
            ['Serba kertas', 'Setiap siklus angkut dicatat di kertas, sehingga pembayaran vendor dan rekonsiliasi makan waktu 5 hari kerja.'],
          ] },
          { type: 'p', html: 'Sistem versi 1.0 sebenarnya sudah ada. Hanya saja tidak berjalan baik, terutama karena masalah cloud dan perangkat IoT di dalam truk.' },
        ],
      },
      {
        label: 'Pendekatannya',
        title: 'Di mana sistem ini berperan dalam satu siklus angkut',
        blocks: [
          { type: 'flow', title: 'Satu siklus angkut, dari pit ke pelabuhan', caption: 'Langkah yang disorot adalah bagian yang paling banyak diubah FAMOUS 2.0 bagi pengemudi dan vendor.', steps: [
            { title: 'Awal shift', text: 'Aplikasi pengemudi menjalankan pengecekan sebelum shift', highlight: true },
            { title: 'Muat di pit', text: 'Siklus tercatat secara digital' },
            { title: 'Jalan hauling', text: 'IoT di kabin mendeteksi kelelahan secara real time', highlight: true },
            { title: 'Bongkar di pelabuhan', text: 'Siklus ditutup otomatis' },
            { title: 'Rekonsiliasi', text: 'Pembayaran vendor dan pengemudi, tanpa kertas', highlight: true },
          ] },
          { type: 'p', html: 'Saya menyelaraskan ekspektasi dengan tim digital Sinarmas di level holding, lalu menerjemahkannya menjadi rencana implementasi bersama para pimpinan site Borneo Indobara, dipecah ke modul-modul yang bisa dirilis sebagian dan berjalan paralel.' },
        ],
      },
      {
        label: 'Keputusan',
        title: 'Bangun ulang semuanya? Tidak juga.',
        blocks: [
          { type: 'log', items: [
            { tag: 'Chosen', title: 'Revamp v1.0 modul demi modul', text: 'Arsitektur intinya masih layak dan versi 2.0 punya tenggat. Masalah cloud dan IoT diperbaiki di dalam setiap modul, termasuk perangkat kerasnya.' },
            { tag: 'Not chosen', title: 'Bangun ulang dari nol', text: 'Akan mengundur rilis tanpa keuntungan yang jelas.' },
            { tag: 'Chosen', title: 'Perangkat IoT pendeteksi kelelahan di dump truck', text: 'Disepakati dengan jajaran C-level. Insiden dump truck menimbulkan kerugian terbesar, jadi pendeteksinya harus ada di kabin.' },
            { tag: 'Supporting', title: 'Aplikasi pengemudi untuk operasional dan pencegahan', text: 'Menangani persiapan shift dan pengecekan preventif, sementara perangkat keras memantau kelelahan.' },
          ] },
          { type: 'figure', file: 'mining-incab-cameras.jpg', alt: 'Tampilan kamera di kabin truk angkut: pengemudi, jalan, dan kabin, dengan wajah diburamkan', caption: 'Di dalam kabin: kamera pengemudi, jalan, dan kabin memasok deteksi kelelahan secara real time. Wajah diburamkan demi privasi.' },
        ],
      },
      {
        label: 'Adopsi',
        title: 'Bagian tersulitnya bukan teknologi, tapi manusianya.',
        blocks: [
          { type: 'p', html: 'Pengemudi bekerja dalam shift panjang dengan kondisi berat, dan perilakunya tidak seperti pengguna software pada umumnya. Ini yang membuat mereka mau berubah:' },
          { type: 'ul', items: [
            'Pelatihan berulang dalam berbagai format, dari manajer sampai pengemudi dan supervisor.',
            'Evaluasi langsung di dalam kabin truk.',
            'Program reward untuk pengemudi.',
            'Kunjungan lapangan rutin, dengan temuan yang langsung diteruskan ke tim developer.',
          ] },
          { type: 'takeaway', label: 'Prinsip', text: 'Adopsi dulu. Selama orang belum memakai sistemnya, metrik lain hanyalah noise.' },
          { type: 'figure', file: 'mining-command-center.jpg', alt: 'Dashboard command center FAMOUS 2.0 dengan peringatan SOS, kesiapan kerja, inspeksi, dan heatmap armada', caption: 'Command center FAMOUS 2.0: peringatan SOS langsung, kesiapan kerja pengemudi, inspeksi harian sebelum pakai (P2H), dan heatmap armada.' },
        ],
      },
      {
        label: 'Fase dua',
        title: 'Lalu truknya beralih ke listrik',
        blocks: [
          { type: 'p', html: 'Saat dump truck listrik datang, saya memimpin integrasinya ke sistem yang sama. Truk listrik terhubung ke aplikasi pengemudi dan ke stasiun pengisian secara online, sehingga pengemudi bisa memesan slot di stasiun dan bay tertentu, lalu memantau pengisian dari kabin.' },
          { type: 'figures', items: [
            { file: 'mining-ev-charging-station.jpg', alt: 'Stasiun pengisian EV di jalur hauling tambang, satu bay per truk', caption: 'Stasiun pengisian di jalur hauling, satu bay untuk setiap truk.' },
            { file: 'mining-driver-app-charging.jpg', alt: 'Layar aplikasi pengemudi yang menampilkan sesi pengisian yang sudah dipesan', caption: 'Sesi yang sudah dipesan: stasiun, bay, slot waktu, charging gun, sisa waktu, dan level baterai. Identitas pengemudi diburamkan.' },
          ] },
          { type: 'ul', items: [
            '<b>Pemesanan:</b> pesan slot waktu di stasiun dan bay tertentu, berdasarkan lokasi.',
            '<b>Status langsung:</b> sisa waktu, tingkat pengisian, dan daya masuk, dengan tombol berhenti.',
            '<b>Satu aplikasi:</b> pengisian daya ada di samping pemantauan kelelahan dan pengecekan shift.',
          ] },
        ],
      },
      {
        label: OUTCOME,
        title: 'Apa yang berubah',
        blocks: [
          { type: 'compare', charts: [
            { title: 'Insiden kelelahan / bulan', max: 20, ariaLabel: 'Insiden kelelahan per bulan: sebelum 8 sampai 20, sesudah 1 sampai 3', rows: [
              { label: 'Sebelum', value: '8–20', lo: 8, hi: 20, kind: 'before' }, { label: 'Sesudah', value: '1–3', lo: 1, hi: 3, kind: 'after' }] },
            { title: 'Adopsi sistem', max: 100, ariaLabel: 'Adopsi sistem: sebelum 15 persen, setelah 6 bulan 65 persen', rows: [
              { label: 'Sebelum', value: '15%', lo: 15, kind: 'before' }, { label: '6 bulan', value: '65%', lo: 65, kind: 'after' }] },
            { title: 'Persiapan pengemudi per shift', max: 40, ariaLabel: 'Persiapan pengemudi per shift: sebelum 30 sampai 40 menit, sesudah 10 menit', rows: [
              { label: 'Sebelum', value: '30–40 mnt', lo: 30, hi: 40, kind: 'before' }, { label: 'Sesudah', value: '10 mnt', lo: 10, kind: 'after' }] },
            { title: 'Rekonsiliasi bulanan', max: 5, ariaLabel: 'Rekonsiliasi bulanan: sebelum 5 hari di kertas, sesudah 2 hari', rows: [
              { label: 'Sebelum', value: '5 hari, kertas', lo: 5, kind: 'before' }, { label: 'Sesudah', value: '2 hari', lo: 2, kind: 'after' }] },
          ] },
        ],
      },
      {
        label: LESSON,
        title: 'Yang saya pelajari',
        blocks: [
          { type: 'p', html: 'Transformasi digital di pertambangan adalah permainan yang berbeda: banyak pemangku kepentingan, vendor, dan kontraktor, ditambah kondisi lapangan yang tidak bisa disimulasikan dari kantor. Teknologinya justru bagian yang lebih mudah. Adopsi harus diperjuangkan di lapangan, satu kabin demi satu kabin.' },
        ],
      },
    ],
  },
  {
    slug: 'fintech',
    short: 'Fintech',
    num: '02',
    accent: '#A07BFF',
    card: {
      kicker: 'Fintech telekomunikasi · Turnaround',
      hook: 'Transaksi harian kembali dari IDR <span class="nw">300–500M</span> ke 1B',
      company: 'ViaPulsa Global Indonesia · 2023–2025',
      role: 'Head of Product',
    },
    opener: {
      kicker: '02 · Fintech telekomunikasi · Product turnaround',
      hook: 'Transaksi harian kembali dari <em>IDR <span class="nw">300–500M</span> ke 1B.</em>',
      sub: 'Aplikasi berusia sepuluh tahun kalah dari pesaing yang lebih baru. Kami membangun ulang produk, platform, dan brand-nya dalam enam bulan.',
      role: ['ViaPulsa Global Indonesia · Feb 2023–Mar 2025', 'Head of Product (Product Director), memimpin 45 orang'],
      cover: { file: 'viapulsa-cover.jpg', position: 'center 35%', alt: 'Landing page ViaPulsa: Jasa Convert Pulsa Jadi Uang Terpercaya Sejak 2010, dengan brand ambassador memegang aplikasi' },
    },
    beats: [
      {
        label: 'Konteks',
        title: 'Sedikit konteks dulu',
        blocks: [
          { type: 'p', html: 'ViaPulsa memungkinkan orang mengonversi pulsa menjadi uang tunai atau saldo e-wallet. Penggunanya loyal, tapi aplikasinya hampir sepuluh tahun tidak mendapat pembaruan besar.' },
          { type: 'stats', items: [['~800K', 'pengguna aktif'], ['45', 'orang: 13 engineer in-house, 10 engineer partner, 22 di tim produk'], ['6 bln', 'dari discovery sampai versi 2.0']] },
        ],
      },
      {
        label: 'Masalahnya',
        title: 'Jadi, apa yang salah?',
        blocks: [
          { type: 'problems', items: [
            ['Produk yang usang', 'Hampir sepuluh tahun tanpa pembaruan besar, sementara pasar terus bergerak.'],
            ['Pesaing baru', 'Aplikasi pesaing bermunculan di kategori yang sama.'],
            ['Volume menyusut', 'Nilai transaksi harian turun dari IDR 1B ke IDR 300–500M, dan tim marketing kesulitan mendatangkan leads.'],
          ] },
        ],
      },
      {
        label: 'Keputusan',
        title: 'Tambal saja, atau bertaruh lebih besar?',
        blocks: [
          { type: 'p', html: 'Kami menjalankan discovery ke seluruh basis pengguna, dan bersama tim marketing dan sales memetakan ceruk pasar serta persona brand baru: aplikasi andalan untuk convert pulsa, dengan nilai tambah di atasnya.' },
          { type: 'log', items: [
            { tag: 'Chosen', title: 'Revamp total: aplikasi, arsitektur, dan brand', text: 'Berisiko tinggi, tapi visi perusahaan lebih besar dari yang sanggup dibawa aplikasi lama. Baseline enam bulan, dengan program voice-of-customer berjalan bersamaan.' },
            { tag: 'Not chosen', title: 'Perbaikan bertahap di aplikasi lama', text: 'Dipertimbangkan dengan serius. Tapi cara ini tidak akan membawa kami ke model produk dan pendapatan yang dibutuhkan.' },
            { tag: 'Chosen', title: 'Aplikasi dan web, bukan aplikasi saja', text: 'Kanal web di samping aplikasi yang diunduh memungkinkan pengguna bertransaksi dari platform apa pun dan membuka lebih banyak sumber pendapatan.' },
          ] },
        ],
      },
      {
        label: 'Produknya',
        title: 'Seperti apa versi 2.0',
        blocks: [
          { type: 'two', left: [
            { type: 'tiles', items: [
              { title: 'Inti', text: 'Konversi pulsa yang mulus, dengan API gateway untuk hasilnya', highlight: true },
              { title: 'Aplikasi + web', text: 'Bertransaksi dari aplikasi atau browser' },
              { title: 'Pendapatan baru', text: 'Diamond game dan aktivasi aplikasi dibayar dengan pulsa', highlight: true },
              { title: 'Brand', text: 'Identitas baru diluncurkan bersama produknya' },
            ] },
            { type: 'p', html: 'Peluncurannya tidak mulus. Mengubah aplikasi berusia satu dekade mengganggu kebiasaan pengguna lama dan volume sempat turun. Perbaikan cepat lintas tim membuat penurunan itu tidak berlangsung lama.' },
          ], right: [
            { type: 'figure', file: 'viapulsa-web-app.jpg', alt: 'Aplikasi web ViaPulsa 2.0 dengan menu convert, grosir, kalkulator rate, dan top-up', caption: 'ViaPulsa 2.0 versi web: convert, grosir, kalkulator rate, dan top-up, dengan rate langsung untuk enam operator.' },
          ] },
        ],
      },
      {
        label: OUTCOME,
        title: 'Apa yang berubah',
        blocks: [
          { type: 'columns', title: 'Nilai transaksi harian (IDR)', max: 1000, caption: 'Bagian yang lebih terang menunjukkan rentang yang dilaporkan.', ariaLabel: 'Nilai transaksi harian: puncak sebelumnya 1B, sebelum revamp 300 sampai 500M, bulan 1 sampai 2 setelah peluncuran 700 sampai 800M, bulan ke-4 setelah peluncuran 1B', cols: [
            { label: 'Puncak sebelumnya', value: '1B', lo: 1000, color: 'neutral' },
            { label: 'Sebelum revamp', value: '300–500M', lo: 300, hi: 500, color: 'drop' },
            { label: 'Bulan 1–2 setelah peluncuran', value: '700–800M', lo: 700, hi: 800, color: 'acc' },
            { label: 'Bulan ke-4 setelah peluncuran', value: '1B', lo: 1000, color: 'acc' },
          ] },
        ],
      },
      {
        label: LESSON,
        title: 'Yang saya pelajari',
        blocks: [
          { type: 'p', html: 'Revamp besar-besaran bisa berhasil, tapi pengguna lama merasakan setiap perubahan. Lain kali, saya akan merencanakan perpindahan pengguna lama sama cermatnya dengan fitur barunya.' },
        ],
      },
    ],
  },
  {
    slug: 'ai-erp',
    short: 'AI & ERP',
    num: '03',
    accent: '#5B9BFF',
    card: {
      kicker: 'AI & ERP · B2B SaaS',
      hook: 'Quote-to-shipment dari <span class="nw">30–50</span> menjadi <span class="nw">15–20</span> menit',
      company: 'eDOT · 2025–2026',
      role: 'Product Manager, AI ERP',
    },
    opener: {
      kicker: '03 · AI & ERP · B2B SaaS',
      hook: 'Quote-to-shipment dari <em><span class="nw">30–50</span> menjadi <span class="nw">15–20</span> menit.</em>',
      sub: 'Pengguna tidak butuh produk AI lagi. Mereka butuh ERP yang sudah mereka pakai berhenti terasa rumit.',
      role: ['eDOT · Des 2025–Jul 2026 · Remote', 'Product Manager, AI ERP (edic & esuite) · Klien: Nabati Group'],
      cover: { file: 'edot-edic-cover.jpg', alt: 'Landing page edic: AI data analyst yang bisa diajak ngobrol, dengan kotak prompt Ask edic dan Agent Mode' },
    },
    beats: [
      {
        label: 'Konteks',
        title: 'Dua produk, satu tujuan',
        blocks: [
          { type: 'p', html: 'eDOT membangun <b>esuite</b>, ERP manajemen distribusi, dan <b>edic</b>, AI data analyst yang bisa diajak bicara. Tujuannya: membawa AI agent dan asisten ke dalam ERP agar proses lebih lancar dan biaya operasional di gudang-gudang Nabati Group turun.' },
          { type: 'figure', file: 'edot-esuite.jpg', alt: 'Antarmuka esuite, ERP manajemen distribusi', caption: 'esuite, ERP manajemen distribusi yang dipakai di gudang-gudang Nabati Group.' },
        ],
      },
      {
        label: 'Masalahnya',
        title: 'Jadi, apa yang salah?',
        blocks: [
          { type: 'takeaway', label: 'Kata pengguna', text: 'ERP-nya punya terlalu banyak fitur, sampai menyelesaikan satu proses saja terasa seperti kerja berat.' },
          { type: 'p', html: 'Awalnya kami membangun AI sebagai produk tersendiri. Berbicara dengan pengguna Nabati menunjukkan bahwa masalah sebenarnya adalah kerumitan ERP, bukan ketiadaan alat AI.' },
        ],
      },
      {
        label: 'Keputusan',
        title: 'Pivot',
        blocks: [
          { type: 'p', html: 'Bersama PM lain, saya mengevaluasi sebagian besar model AI utama, membandingkan kemampuan per use case dengan konsumsi token, karena model bisnisnya berbasis pemakaian.' },
          { type: 'log', items: [
            { tag: 'Chosen', title: 'Hubungkan AI ke alur kerja ERP yang sudah ada', text: 'Menjawab keluhan yang benar-benar disebut pengguna, dan menambah nilai pada produk yang sudah dibayar pelanggan.' },
            { tag: 'Deprioritized', title: 'AI sebagai produk terpisah', text: 'Titik awal kami. Cara ini tidak akan menyelesaikan kerumitan ERP.' },
          ] },
          { type: 'flow', title: 'Dari AI terpisah ke AI di dalam ERP', steps: [
            { title: 'Pengguna', text: 'Menyebutkan kebutuhannya tanpa harus menelusuri menu' },
            { title: 'edic', text: 'Menyiapkan dan merangkum prosesnya', highlight: true },
            { title: 'esuite', text: 'Dari quotation ke shipment, dari transaksi ke keuangan' },
          ] },
          { type: 'p', html: 'Kami menjalankan proof of concept di gudang-gudang di Jawa, lalu meluncurkannya ke sebagian besar gudang Nabati di seluruh Indonesia.' },
        ],
      },
      {
        label: OUTCOME,
        title: 'Apa yang berubah',
        blocks: [
          { type: 'two', left: [
            { type: 'compare', charts: [
              { title: 'Siklus quote-to-shipment', max: 50, caption: 'Masih terus membaik seiring AI dan penggunanya sama-sama belajar.', ariaLabel: 'Siklus quote-to-shipment: sebelum 30 sampai 50 menit, sesudah 15 sampai 20 menit', rows: [
                { label: 'Sebelum', value: '30–50 mnt', lo: 30, hi: 50, kind: 'before' }, { label: 'Sesudah', value: '15–20 mnt', lo: 15, hi: 20, kind: 'after' }] },
            ] },
          ], right: [
            { type: 'stats', items: [['20–25', 'fitur baru dirilis'], ['~40%', 'di antaranya fitur besar, dari transaksi sampai keuangan']] },
          ] },
        ],
      },
      {
        label: LESSON,
        title: 'Yang saya pelajari',
        blocks: [
          { type: 'p', html: 'Pekerjaan AI yang paling bernilai bukan memilih model. Melainkan menemukan di mana pengguna tersendat, lalu menaruh AI tepat di situ.' },
        ],
      },
    ],
  },
  {
    slug: 'saas',
    short: 'SaaS',
    num: '04',
    accent: '#2EC4A8',
    card: {
      kicker: 'SaaS UMKM · Omnichannel',
      hook: 'Membawa merchant offline ke online saat Covid melanda',
      company: 'Majoo Indonesia · 2021',
      role: 'Product Manager',
    },
    opener: {
      kicker: '04 · SaaS UMKM · Omnichannel',
      hook: 'Membawa merchant offline ke online <em>saat Covid menutup toko mereka.</em>',
      sub: 'Integrasi sekali klik dengan marketplace dan aplikasi pesan-antar makanan, plus toko online milik Majoo sendiri, semuanya mengalir ke satu POS.',
      role: ['Majoo Indonesia · 2021 · Product Manager (menjabat 2020–2023)'],
      cover: { file: 'majoo-omnichannel-cover.jpg', position: 'center 40%', alt: 'Dashboard omnichannel Majoo dikelilingi ikon GrabFood, GrabMart, GoFood, Shopee, Tokopedia, dan website' },
    },
    beats: [
      {
        label: 'Konteks',
        title: 'Sedikit konteks dulu',
        blocks: [
          { type: 'p', html: 'Majoo adalah aplikasi bisnis all-in-one untuk UMKM Indonesia: POS, akuntansi, inventaris, CRM, dan pemesanan online. Sebelum omnichannel, saya mengerjakan intinya, yaitu POS (aplikasi kasir) yang dipakai merchant setiap hari. Karena itu saya melihat langsung dampaknya ketika Covid datang.' },
        ],
      },
      {
        label: 'Masalahnya',
        title: 'Jadi, apa yang salah?',
        blocks: [
          { type: 'problems', items: [
            ['Toko sepi', 'Pelanggan ritel dan F&B berhenti datang karena perilaku mereka berubah.'],
            ['Transaksi turun', 'Tren transaksi di Majoo menurun.'],
            ['Risiko churn', 'Banyak merchant tidak memperpanjang langganan.'],
          ] },
        ],
      },
      {
        label: 'Pendekatannya',
        title: 'Tanya merchant ke mana pelanggan mereka pergi',
        blocks: [
          { type: 'p', html: 'Saya memulai riset omnichannel: aplikasi pesan-antar makanan dan marketplace apa yang sudah dipakai merchant, dan apa harapan mereka. Kami memilih partner berdasarkan tiga kriteria: permintaan merchant, ketersediaan API, dan nilai integrasinya. Lalu MVP, pengujian internal bersama tim tech, dan iterasi dengan merchant sungguhan sebelum rilis.' },
          { type: 'flow', title: 'Semua kanal, satu dashboard', steps: [
            [
              { title: '3 marketplace', text: 'Pesanan online' },
              { title: '3 aplikasi pesan-antar makanan', text: 'Pesanan antar' },
              { title: 'Toko online milik merchant', text: 'Pelanggan memesan langsung', highlight: true },
            ],
            { title: 'Dashboard Majoo', text: 'Satu klik untuk menghubungkan setiap kanal', highlight: true },
            { title: 'POS merchant', text: 'Pesanan, inventaris, dan laporan di satu tempat' },
          ] },
        ],
      },
      {
        label: 'Produknya',
        title: 'Lebih dari integrasi: toko kami sendiri',
        blocks: [
          { type: 'p', html: 'Platform pihak ketiga saja tidak cukup. Kami juga membangun kanal e-commerce milik Majoo, agar merchant bisa menerima pesanan online dengan cara mereka sendiri. Pelanggan memesan sendiri, sehingga pemesanan <b>tanpa pelayan dan tanpa kasir</b> jadi mungkin, dan setiap pesanan masuk ke POS dan inventaris yang sama.' },
          { type: 'figure', file: 'majoo-online-store.jpg', alt: 'Visual pemasaran toko online Majoo', caption: 'Toko online milik Majoo, seperti yang dipasarkan saat ini.' },
        ],
      },
      {
        label: OUTCOME,
        title: 'Apa yang berubah',
        blocks: [
          { type: 'stats', items: [['3 + 3', 'integrasi marketplace dan pesan-antar makanan, masing-masing sekali klik'], ['300+', 'merchant memakai integrasi dalam enam bulan pertama'], ['+5–8%', 'nilai transaksi setelah rilis pertama']] },
        ],
      },
      {
        label: LESSON,
        title: 'Yang saya pelajari',
        blocks: [
          { type: 'p', html: 'Masalah awalnya adalah perpanjangan langganan, tapi saya tidak pernah melacak churn setelah peluncuran. Sekarang saya menetapkan metrik keberhasilan yang sesuai dengan masalah awal sebelum membangun, dan melacaknya sejak hari pertama.' },
        ],
      },
    ],
  },
  {
    slug: 'pos',
    short: 'Produk pertama',
    num: '05',
    accent: '#EC6A9A',
    card: {
      kicker: 'SaaS UMKM · Produk pertama',
      hook: 'POS mobile yang dibangun dari nol, 300 pengguna dalam 3 bulan',
      company: 'Interactive Technologies Group · 2018',
      role: 'Product Management L1',
    },
    opener: {
      kicker: '05 · SaaS UMKM · Awal mulanya',
      hook: 'POS mobile yang dibangun <em>dari nol</em>, 300 pengguna dalam 3 bulan.',
      sub: 'Peran produk pertama saya. Usaha kecil tidak sanggup membeli POS desktop, jadi kami bertaruh pada aplikasi mobile gratis dengan pemesanan online dan kios self-order, saat belum banyak yang melirik keduanya.',
      role: ['Interactive Technologies Group · 2018', 'Product Management L1 · InterActive MyProfit'],
      cover: { file: 'myprofit-cover.jpg', alt: 'Visual pemasaran InterActive MyProfit: aplikasi kasir all-in-one di tablet dan ponsel, dengan tips AI, self order, reservasi, stok, dan pembayaran QRIS' },
    },
    beats: [
      {
        label: 'Konteks',
        title: 'Sedikit konteks dulu',
        blocks: [
          { type: 'p', html: 'Pada 2018, POS mobile belum punya pemain dominan di Indonesia, dan nyaris belum menjangkau usaha kecil dan menengah. Bersama CTO kami, saya memulai inisiatif untuk membangunnya bagi pasar tersebut.' },
          { type: 'stats', items: [['0 → 1', 'dibangun dari nol, tanpa produk sebelumnya'], ['3', 'kanal di v1: POS, web pemesanan online, dan kios self-order'], ['Gratis', 'aplikasinya, dimonetisasi lewat perangkat keras dan add-on']] },
        ],
      },
      {
        label: 'Masalahnya',
        title: 'Jadi, apa yang salah?',
        blocks: [
          { type: 'problems', items: [
            ['Terjebak di desktop', 'Sebagian besar sistem POS berjalan di perangkat desktop, tidak cocok untuk toko kecil dan warung makan.'],
            ['Terlalu mahal', 'Biaya tinggi membuat pemilik usaha enggan berlangganan, apalagi membeli sistemnya langsung.'],
            ['UMKM terabaikan', 'Hampir tidak ada produk yang dibuat untuk usaha kecil.'],
          ] },
        ],
      },
      {
        label: 'Keputusan',
        title: 'Mimpi besar, rilis kecil',
        blocks: [
          { type: 'log', items: [
            { tag: 'Chosen', title: 'POS mobile-first untuk UMKM', text: 'Mobile, bukan desktop, dengan harga dan desain untuk usaha kecil, bukan peritel besar.' },
            { tag: 'Chosen', title: 'Pemesanan online dan kios self-order di v1', text: 'Bagian yang ambisius. Saat itu belum banyak pemain yang memperhatikan self-ordering.' },
            { tag: 'Chosen', title: 'Aplikasi gratis, perangkat keras dan add-on berbayar', text: 'Pendapatan datang dari perangkat keras dan koneksi API ke alat seperti printer thermal dan aplikasi akuntansi, bukan dari langganan.' },
          ] },
          { type: 'flow', title: 'Bagaimana kami sampai ke 1.0', caption: 'Siklus yang panjang, dan tempat saya belajar product management dengan langsung mempraktikkannya.', steps: [
            { title: 'Discovery', text: 'Memahami kebutuhan UMKM' },
            { title: 'Uji', text: 'Memvalidasi ide yang paling berisiko' },
            { title: 'MVP', text: 'Versi terkecil yang layak dipakai', highlight: true },
            { title: 'Iterasi', text: 'Memperbaiki bagian yang membuat pengguna tersandung' },
            { title: 'Roadmap', text: 'Berkomitmen pada yang sudah terbukti', highlight: true },
          ] },
        ],
      },
      {
        label: OUTCOME,
        title: 'Apa yang berubah',
        blocks: [
          { type: 'stats', items: [['1.0', 'dirilis dengan POS, pemesanan online, dan kios'], ['300', 'pengguna baru dalam 3 bulan setelah peluncuran'], ['2', 'sumber pendapatan: perangkat keras dan integrasi add-on']] },
          { type: 'figure', file: 'myprofit-features.jpg', alt: 'Visual pemasaran MyProfit yang menampilkan fitur POS, stok, laporan, multi-outlet, QRIS, dan self order', caption: 'MyProfit seperti yang dipasarkan saat ini: POS, stok, laporan, dan multi-outlet, plus QRIS, beragam jenis pesanan, dan self order. Taruhan self-ordering dari 2018 masih menjadi fitur inti.' },
        ],
      },
      {
        label: LESSON,
        title: 'Yang saya pelajari',
        blocks: [
          { type: 'takeaway', label: 'Sekolah', text: 'Sekolah produk pertama saya: discovery, pengujian, MVP, iterasi, dan go-to-market, semuanya di satu produk.' },
          { type: 'p', html: 'Semua yang saya kerjakan kemudian di Majoo, ViaPulsa, Minergo, dan eDOT berawal dari kebiasaan yang saya bangun di sini.' },
        ],
      },
    ],
  },
  {
    slug: 'tappin',
    short: 'tapp.in',
    num: '01',
    group: 'builder',
    accent: '#8BCB4A',
    card: {
      kicker: 'POS ritel · Dibangun dengan Claude Code',
      hook: 'Dari aplikasi spreadsheet yang rapuh menjadi POS multi-outlet yang live',
      company: 'tapp.in (Bekalin Group) · 2026',
      role: 'Product owner & builder',
    },
    opener: {
      kicker: 'Product builder · POS ritel · Dibangun dengan Claude Code',
      hook: 'POS berbasis spreadsheet, dibangun ulang menjadi <em>web app yang live.</em>',
      sub: 'Aplikasi kasir, stok, dan laporan untuk tiga outlet di Malang dan Surabaya. Saya memegang keputusan produknya dan membangunnya bersama Claude Code, awalnya di Google Apps Script, lalu sebagai web app di Vercel.',
      role: ['tapp.in, sebelumnya Bekalin POS · Bekalin Group · Okt–Nov 2026', 'Product owner & builder · Claude Code, Google Apps Script, Vercel, Supabase'],
      cover: { file: 'tappin-dashboard.jpg', position: 'top', alt: 'Dashboard tapp.in: penjualan hari ini, transaksi, dan item terjual, grafik penjualan 7 hari, metode pembayaran, dan transaksi terbaru, dengan filter outlet' },
    },
    beats: [
      {
        label: 'Konteks',
        title: 'Sedikit konteks dulu',
        blocks: [
          { type: 'p', html: 'Bekalin Group berjualan makanan dari tiga outlet di Malang dan Surabaya, dengan stok dari tiga gudang. POS-nya berawal sebagai web app Google Apps Script dengan Google Sheets sebagai database: kasir, pre-order, stok, dan laporan di satu tempat.' },
          { type: 'stats', items: [['3', 'outlet: Bekalin Malang, Ngombe Es Malang, Bekalin Surabaya'], ['3', 'gudang, dicatat terpisah dari outlet'], ['3', 'peran: super admin, admin, dan kasir'], ['5', 'metode bayar: tunai, QRIS, transfer bank, Shopee, TikTok Shop']] },
        ],
      },
      {
        label: 'Pengguna',
        title: 'Siapa yang memakainya, dan bagaimana',
        blocks: [
          { type: 'stats', items: [['Kasir', 'berjualan dan menerima pre-order di satu outlet, tanpa akses back office'], ['Admin', 'mengelola produk, stok, pelanggan, diskon, laporan, dan pengguna'], ['Pemilik', 'semua yang dilakukan admin, ditambah pengaturan khusus pemilik']] },
          { type: 'flow', title: 'Satu shift kasir', steps: [
            { title: 'Buka kasir', text: 'Login dan isi modal awal di laci' },
            { title: 'Input pesanan', text: 'Ketuk produk, pilih atau tambah pelanggan, beri diskon', highlight: true },
            { title: 'Bayar', text: 'Tunai, QRIS, transfer bank, Shopee, atau TikTok Shop' },
            { title: 'Struk', text: 'Struk thermal, atau simpan sebagai pre-order untuk dibayar nanti' },
            { title: 'Tutup kasir', text: 'Hitung uang; aplikasi menampilkan selisihnya', highlight: true },
          ] },
          { type: 'flow', title: 'Satu hari pemilik', steps: [
            { title: 'Ringkasan harian', text: 'Penjualan dan selisih kas, dikirim sebagai notifikasi', highlight: true },
            { title: 'Dashboard', text: 'Tren 7 hari, produk terlaris, banding kemarin, per outlet' },
            { title: 'Laporan penjualan', text: 'Per periode, outlet, dan metode bayar' },
            { title: 'Stok', text: 'Stok masuk, transfer, dan penyesuaian di semua gudang' },
          ] },
        ],
      },
      {
        label: 'Masalahnya',
        title: 'Jadi, apa yang salah?',
        blocks: [
          { type: 'p', html: 'Semua ini muncul dari pemakaian sehari-hari, dengan kata-kata saya sendiri saat itu.' },
          { type: 'problems', items: [
            ['Layar berat tidak mau terbuka', 'Apps Script sering gagal memproses data, sehingga laporan penjualan dan stok sering tidak bisa dimuat.'],
            ['Malang dan Surabaya tercampur', 'Penjualan tidak bisa dipisah per kota, dan laporan tidak menampilkan jumlah item terjual.'],
            ['Kasir yang terasa kaku', 'Layar kasir masih terasa seperti aplikasi Google yang lama, dan peralihan antara kasir dan back office terasa canggung.'],
            ['Kerjaan terlempar ke back office', 'Menambah pelanggan atau diskon manual harus keluar dari kasir, dan struk belum berformat thermal.'],
            ['Back office yang rusak', 'Menyimpan produk gagal, bahkan dari ponsel, SKU harus diketik manual, dan beberapa daftar tidak bisa di-scroll.'],
            ['Logout setiap kali kembali', 'Membuka ulang aplikasi yang terpasang tidak menyimpan sesi login.'],
            ['Outlet tertukar dengan gudang', 'Data memperlakukan lokasi jual dan lokasi stok sebagai hal yang sama, sehingga relasi di dashboard keliru.'],
          ] },
        ],
      },
      {
        label: 'Pendekatannya',
        title: 'Perbaiki di tempat dulu, baru dipindahkan',
        blocks: [
          { type: 'p', html: 'Saya bekerja dengan Claude Code seperti bekerja dengan tim engineering: saya menetapkan scope dan mengambil keputusan, Claude Code menulis dan merapikan kodenya, dan setiap perubahan dirilis sebagai versi bernomor.' },
          { type: 'flow', title: 'Apps Script, versi demi versi (31 Okt – 5 Nov)', caption: 'Sebelas versi dalam enam hari, dari V20.0.0 sampai V20.1.0.', steps: [
            { title: 'V20.0.2', text: 'Migrasi skema yang berjalan sekali per versi' },
            { title: 'V20.0.3', text: 'Filter outlet dan total item terjual di laporan penjualan' },
            { title: 'V20.0.x', text: 'Penyegaran UI per halaman: kasir, stok, pre-order', highlight: true },
            { title: 'V20.1.0', text: 'Desain ulang dashboard: tren 7 hari, produk terlaris, banding kemarin' },
          ] },
        ],
      },
      {
        label: 'Keputusan',
        title: 'Tulis ulang, atau pindahkan?',
        blocks: [
          { type: 'log', items: [
            { tag: 'Chosen', title: 'Pindah ke web app, pertahankan logika Apps Script', text: 'Versi baru menjalankan kode server aslinya tanpa diubah, di atas lapisan kompatibilitas yang meniru Google Sheets, dengan Supabase Postgres sebagai database dan Vercel sebagai hosting.' },
            { tag: 'Deprioritized', title: 'AI agent', text: 'Di versi Apps Script, fitur ini baru berupa placeholder tanpa model yang tersambung. Saya menundanya dari versi baru sampai scope-nya jelas.' },
            { tag: 'Deprioritized', title: 'Pemesanan online', text: 'Dikeluarkan dari versi baru agar fokus ke kasir dan back office.' },
            { tag: 'Chosen', title: 'Varian produk dengan stok sendiri', text: 'Satu dimensi varian, masing-masing dengan stok terpisah. Modifier menyusul nanti.' },
            { tag: 'Chosen', title: 'Lokasi jual terpisah dari gudang', text: 'Outlet untuk berjualan, gudang untuk menyimpan stok. Model datanya sekarang memperlakukan keduanya sebagai hal yang berbeda.' },
          ] },
          { type: 'flow', title: 'Dari Apps Script ke web app', steps: [
            { title: 'Code.gs asli', text: 'Logika server dipertahankan apa adanya' },
            { title: 'Lapisan kompatibilitas', text: 'Meniru SpreadsheetApp dan google.script.run', highlight: true },
            { title: 'Supabase Postgres', text: 'Sheet disimpan sebagai baris data' },
            { title: 'Vercel + PWA', text: 'Web app yang bisa dipasang untuk kasir dan pemilik', highlight: true },
          ] },
        ],
      },
      {
        label: 'Masalah → solusi',
        title: 'Dari masalah ke solusi',
        blocks: [
          { type: 'log', items: [
            { tag: 'Chosen', title: 'Layar berat → platform baru', text: 'Pindah dari Apps Script ke Vercel dan Supabase, sehingga laporan dan stok terbuka seperti halaman lainnya.' },
            { tag: 'Chosen', title: 'Kota tercampur → outlet dan gudang', text: 'Filter kota diganti tiga outlet yang terhubung ke tiga gudang, dengan pengguna yang ditugaskan ke outlet.' },
            { tag: 'Chosen', title: 'Bolak-balik ke back office → selesai di kasir', text: 'Pelanggan dan diskon manual ditambahkan dari layar kasir, dan struk dicetak dalam format thermal.' },
            { tag: 'Chosen', title: 'Varian di alur terpisah → satu tombol tambah produk', text: 'Varian ditambahkan dari tombol yang sama, masing-masing dengan stok sendiri. Misalnya es jeruk reguler dan jumbo.' },
            { tag: 'Chosen', title: 'Cek dashboard manual → ringkasan harian', text: 'Pemilik dan admin menerima penjualan hari itu secara otomatis, dan bisa mematikannya di pengaturan.' },
          ] },
        ],
      },
      {
        label: 'Produknya',
        title: 'Apa yang dilakukan tapp.in sekarang',
        blocks: [
          { type: 'tiles', items: [
            { title: 'Kasir', text: 'Keranjang, diskon, pre-order, dan struk thermal', highlight: true },
            { title: 'Stok', text: 'FIFO per batch di beberapa gudang: stok masuk, transfer, penyesuaian, riwayat' },
            { title: 'Back office', text: 'Produk dan varian, pelanggan, diskon, pengguna, dan log audit' },
            { title: 'Laporan', text: 'Dashboard dan laporan penjualan per outlet dan metode bayar', highlight: true },
          ] },
          { type: 'figure', file: 'tappin-cashier.jpg', alt: 'Layar kasir tapp.in dengan daftar produk di kiri dan pesanan bertotal Rp12.000 di kanan', caption: 'Kasir: ketuk produk, pilih pelanggan atau diskon, lalu bayar atau simpan sebagai pre-order.' },
          { type: 'figures', items: [
            { file: 'tappin-report.jpg', alt: 'Laporan penjualan tapp.in bulan ini dengan total, rincian metode bayar, dan daftar invoice', caption: 'Laporan penjualan, bisa difilter per periode dan outlet, dengan struk yang bisa dicetak per invoice.' },
            { file: 'tappin-mobile.jpg', tall: true, alt: 'Kasir tapp.in di ponsel dengan dua produk di keranjang', caption: 'Kasir yang sama di ponsel, sebagai web app yang bisa dipasang.' },
          ] },
          { type: 'p', html: 'Setelah pindah, produknya terus bertambah: varian produk, diskon manual dan tambah pelanggan langsung dari kasir, notifikasi pembaruan, dan ringkasan penjualan harian untuk pemilik dan admin.' },
        ],
      },
      {
        label: OUTCOME,
        title: 'Apa yang berubah',
        blocks: [
          { type: 'stats', items: [['Live', 'di Vercel sebagai tapp.in, web app yang bisa dipasang'], ['11', 'versi Apps Script dalam enam hari sebelum pindah'], ['1', 'sistem untuk 3 outlet dan 3 gudang'], ['Sama', 'logika server dengan versi Apps Script, berjalan di stack baru']] },
        ],
      },
      {
        label: LESSON,
        title: 'Yang saya pelajari',
        blocks: [
          { type: 'p', html: 'Dengan AI sebagai rekan kerja, membangun jadi cepat. Memutuskan apa yang tidak dibangun, seperti AI agent dan pemesanan online, yang membuat produknya tetap nyaman dipakai orang di balik meja kasir.' },
        ],
      },
    ],
  },
];
