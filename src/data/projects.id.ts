import type { Project } from './projects';

/*
 * Indonesian version of src/data/projects.ts. Same shape and same order:
 * when you change numbers, images or structure there, change them here too.
 * Decision log tags stay in English (they are keys); src/i18n.ts translates them.
 * Voice: casual "aku", not formal Indonesian.
 */

const LESSON = 'Pelajaran';
const OUTCOME = 'Hasil';

export const projects: Project[] = [
  {
    slug: 'ai-erp',
    short: 'AI & ERP',
    num: '01',
    accent: '#5B9BFF',
    card: {
      kicker: 'AI & ERP · B2B SaaS',
      hook: 'Quote-to-shipment dari <span class="nw">30–50</span> jadi <span class="nw">15–20</span> menit',
      company: 'eDOT · 2025–2026',
      role: 'Product Manager, AI ERP',
    },
    opener: {
      kicker: '01 · AI & ERP · B2B SaaS',
      hook: 'Quote-to-shipment dari <em><span class="nw">30–50</span> jadi <span class="nw">15–20</span> menit.</em>',
      sub: 'Pengguna nggak butuh produk AI baru. Mereka cuma pengin ERP yang udah mereka pakai berhenti terasa ribet.',
      role: ['eDOT · Des 2025–Jul 2026 · Remote', 'Product Manager, AI ERP (edic & esuite) · Klien: Nabati Group'],
      cover: { file: 'edot-edic-cover.jpg', alt: 'Landing page edic: AI data analyst yang bisa diajak ngobrol, dengan kotak prompt Ask edic dan Agent Mode' },
    },
    beats: [
      {
        label: 'Konteks',
        title: 'Dua produk, satu tujuan',
        blocks: [
          { type: 'p', html: 'eDOT punya dua produk: <b>esuite</b>, ERP buat manajemen distribusi, dan <b>edic</b>, AI data analyst yang bisa diajak ngobrol. Tugasku masukin AI agent dan asisten ke ERP itu, biar proses di gudang-gudang Nabati Group lebih lancar dan biaya operasionalnya turun.' },
          { type: 'figure', file: 'edot-esuite.jpg', alt: 'Antarmuka esuite, ERP manajemen distribusi', caption: 'esuite, ERP distribusi yang dipakai di gudang-gudang Nabati Group.' },
        ],
      },
      {
        label: 'Masalahnya',
        title: 'Terus, masalahnya di mana?',
        blocks: [
          { type: 'takeaway', label: 'Kata pengguna', text: 'Fitur ERP-nya kebanyakan. Mau nyelesaiin satu proses aja rasanya udah capek.' },
          { type: 'p', html: 'Awalnya kami bikin AI sebagai produk sendiri. Setelah ngobrol sama pengguna di Nabati, ketahuan yang bikin mereka pusing itu ERP-nya yang ribet. Alat AI tambahan nggak nyelesaiin itu.' },
        ],
      },
      {
        label: 'Keputusan',
        title: 'Pivot',
        blocks: [
          { type: 'p', html: 'Bareng PM lain, aku nyobain hampir semua model AI besar. Tiap model aku bandingin kemampuannya per use case dengan konsumsi token-nya, soalnya model bisnisnya dihitung dari pemakaian.' },
          { type: 'log', items: [
            { tag: 'Chosen', title: 'Sambungkan AI ke alur kerja ERP yang udah ada', text: 'Langsung kena ke keluhan yang disebut pengguna, dan nambah nilai ke produk yang udah mereka bayar.' },
            { tag: 'Deprioritized', title: 'AI sebagai produk terpisah', text: 'Ini titik awal kami. Kalau diterusin, ERP-nya tetap ribet.' },
          ] },
          { type: 'flow', title: 'Dari AI terpisah ke AI di dalam ERP', steps: [
            { title: 'Pengguna', text: 'Cukup bilang butuhnya apa, nggak perlu muter-muter di menu' },
            { title: 'edic', text: 'Nyiapin dan ngerangkum prosesnya', highlight: true },
            { title: 'esuite', text: 'Dari quotation sampai shipment, dari transaksi sampai keuangan' },
          ] },
          { type: 'p', html: 'Proof of concept-nya kami jalanin dulu di gudang-gudang di Jawa. Habis itu baru diluncurin ke sebagian besar gudang Nabati di seluruh Indonesia.' },
        ],
      },
      {
        label: OUTCOME,
        title: 'Hasilnya',
        blocks: [
          { type: 'two', left: [
            { type: 'compare', charts: [
              { title: 'Siklus quote-to-shipment', max: 50, caption: 'Angkanya masih terus turun, karena AI-nya dan penggunanya sama-sama masih belajar.', ariaLabel: 'Siklus quote-to-shipment: sebelum 30 sampai 50 menit, sesudah 15 sampai 20 menit', rows: [
                { label: 'Sebelum', value: '30–50 mnt', lo: 30, hi: 50, kind: 'before' }, { label: 'Sesudah', value: '15–20 mnt', lo: 15, hi: 20, kind: 'after' }] },
            ] },
          ], right: [
            { type: 'stats', items: [['20–25', 'fitur baru yang dirilis'], ['~40%', 'di antaranya fitur besar, dari transaksi sampai keuangan']] },
          ] },
        ],
      },
      {
        label: LESSON,
        title: 'Yang aku pelajari',
        blocks: [
          { type: 'p', html: 'Milih model itu bagian kecilnya. Kerja AI yang paling kepake adalah nyari di titik mana pengguna nyangkut, terus naruh AI persis di situ.' },
        ],
      },
    ],
  },
  {
    slug: 'mining',
    short: 'Pertambangan',
    num: '02',
    accent: '#F2A93B',
    card: {
      kicker: 'Tambang batu bara · Transformasi digital',
      hook: 'Adopsi sistem naik dari 15% ke 65% dalam enam bulan',
      company: 'Minergo Visi Maxima (Sinarmas Mining) · 2025',
      role: 'Lead Digital Transformation',
    },
    opener: {
      kicker: '02 · Tambang batu bara · Transformasi digital',
      hook: 'Adopsi sistem naik dari <em><span class="nw">15% ke 65%</span></em> dalam enam bulan.',
      sub: 'Cerita gimana 2.500 driver truk angkut, para pengawas lapangan, dan 10 mitra hauling akhirnya mau pakai satu sistem digital yang nggak pernah mereka minta. Habis itu, truk listrik ikut disambungin ke sistem yang sama.',
      role: ['Minergo Visi Maxima, bagian dari Sinarmas Mining · Apr–Nov 2025', 'Lead Digital Transformation & Implementation Catalyst'],
      cover: { file: 'mining-cover.jpg', alt: 'Ilustrasi stasiun pengisian daya dump truck listrik dengan kanopi baja oranye melengkung' },
    },
    beats: [
      {
        label: 'Konteks',
        title: 'Konteksnya dulu',
        blocks: [
          { type: 'p', html: 'Sinarmas Mining pengin PT Borneo Indobara jadi tambang digital pertama di Indonesia. Bagianku hauling dan pelabuhan, jalur yang bawa batu bara dari pit sampai ke kapal.' },
          { type: 'stats', items: [['10', 'vendor hauling, masing-masing punya SOP sendiri'], ['~900', 'dump truck'], ['2.500', 'driver'], ['~3.500', 'total pengguna sistem']] },
        ],
      },
      {
        label: 'Masalahnya',
        title: 'Terus, masalahnya di mana?',
        blocks: [
          { type: 'problems', items: [
            ['Sistemnya jarang dipakai', 'Dari semua orang yang harusnya pakai sistem, cuma 15% yang beneran pakai.'],
            ['Sepuluh cara kerja', 'Tiap vendor punya SOP dan dokumen sendiri, jadi datanya nggak pernah nyambung.'],
            ['Semua masih di kertas', 'Tiap siklus angkut dicatat manual, jadi bayar vendor dan rekonsiliasi makan 5 hari kerja.'],
          ] },
          { type: 'p', html: 'Sistem versi 1.0 sebenarnya udah ada, cuma jalannya nggak beres. Penyebab utamanya masalah cloud dan perangkat IoT di dalam truk.' },
        ],
      },
      {
        label: 'Pendekatannya',
        title: 'Posisi sistem ini di satu siklus angkut',
        blocks: [
          { type: 'flow', title: 'Satu siklus angkut, dari pit ke pelabuhan', caption: 'Langkah yang ditandai adalah bagian yang paling banyak berubah buat driver dan vendor di FAMOUS 2.0.', steps: [
            { title: 'Awal shift', text: 'Aplikasi driver jalanin cek sebelum shift', highlight: true },
            { title: 'Muat di pit', text: 'Siklus langsung tercatat digital' },
            { title: 'Jalan hauling', text: 'IoT di kabin deteksi kelelahan secara real time', highlight: true },
            { title: 'Bongkar di pelabuhan', text: 'Siklus ketutup otomatis' },
            { title: 'Rekonsiliasi', text: 'Bayar vendor dan driver, tanpa kertas', highlight: true },
          ] },
          { type: 'p', html: 'Aku nyamain ekspektasi dulu sama tim digital Sinarmas di level holding. Hasilnya aku turunin jadi rencana implementasi bareng pimpinan site Borneo Indobara, dipecah per modul biar bisa dirilis sebagian-sebagian dan jalan barengan.' },
        ],
      },
      {
        label: 'Keputusan',
        title: 'Bangun ulang semuanya? Nggak juga.',
        blocks: [
          { type: 'log', items: [
            { tag: 'Chosen', title: 'Revamp v1.0 modul per modul', text: 'Arsitektur intinya masih oke dan 2.0 dikejar deadline. Masalah cloud dan IoT dibenerin di tiap modul, termasuk hardware-nya.' },
            { tag: 'Not chosen', title: 'Bangun ulang dari nol', text: 'Rilisnya bakal mundur, untungnya nggak jelas.' },
            { tag: 'Chosen', title: 'Perangkat IoT pendeteksi kelelahan di dump truck', text: 'Udah disepakati sama C-level. Kerugian terbesar datang dari insiden dump truck, jadi pendeteksinya harus ada di kabin.' },
            { tag: 'Supporting', title: 'Aplikasi driver buat operasional dan pencegahan', text: 'Ngurus persiapan shift dan cek preventif, sementara hardware-nya mantau kelelahan.' },
          ] },
          { type: 'figure', file: 'mining-incab-cameras.jpg', alt: 'Tampilan kamera di kabin truk angkut: driver, jalan, dan kabin, dengan wajah diburamkan', caption: 'Di dalam kabin: kamera driver, jalan, dan kabin dipakai buat deteksi kelelahan secara real time. Wajah diburamkan demi privasi.' },
        ],
      },
      {
        label: 'Adopsi',
        title: 'Yang paling susah justru urusan orangnya.',
        blocks: [
          { type: 'p', html: 'Penolakan paling besar datang ke digitalisasinya itu sendiri. Driver kerja shift panjang di kondisi berat, dan cara mereka pakai software beda sama pengguna kantoran. Makanya tiap kelompok kami dekati lewat untungnya buat mereka. Kami sengaja nggak main hukuman, biar mereka nggak ngerasa ditekan.' },
          { type: 'takeaway', label: 'Prinsip', text: 'Tunjukin untungnya, jangan ancam hukuman. Selama orang belum pakai sistemnya, metrik lain cuma noise.' },
          { type: 'flow', title: 'Tiga lapisan, satu rollout', steps: [
            { title: 'Driver', text: '2.500 orang yang pakai aplikasi dan perangkat di kabin tiap shift', highlight: true },
            { title: 'Pengawas lapangan', text: 'Ngejaga semua tahap siklus digital beneran jalan' },
            { title: 'Mitra hauling', text: '10 vendor, masing-masing dengan SOP dan orangnya sendiri', highlight: true },
          ] },
        ],
      },
      {
        label: 'Driver',
        title: '2.500 driver: tunjukin untungnya buat mereka',
        blocks: [
          { type: 'p', html: 'Pelatihannya harus pas buat orang yang seharian di kabin. Ini yang kami pakai:' },
          { type: 'ul', items: [
            'Video pelatihan, ditambah sesi train-the-trainer.',
            'Observasi langsung di unit, di dalam kabin truk.',
            'Sesi khusus sebelum unit mulai jalan pakai sistem.',
            'Pre-test dan post-test, buat ngecek apa yang beneran nyantol.',
          ] },
          { type: 'p', html: 'Tiap kuartal ada reward buat driver. Penilaiannya dari seberapa aktif mereka pakai perangkat di kabin dan aplikasi driver selama kuartal itu.' },
        ],
      },
      {
        label: 'Pengawas lapangan',
        title: 'Pengawas: orang yang didengerin driver',
        blocks: [
          { type: 'p', html: 'Pengawas lapangan yang ngejaga seluruh siklus digitalisasi kelar, shift demi shift. Mereka juga jadi perpanjangan tangan di lapangan, biar potensi bahaya nggak sampai jadi insiden.' },
          { type: 'p', html: 'Biasanya mereka udah lebih paham kenapa digitalisasi ini perlu. Jadi mereka sendiri yang ngedorong timnya buat pakai.' },
        ],
      },
      {
        label: 'Mitra hauling',
        title: '10 mitra: mulai dari yang paling gampang diajak',
        blocks: [
          { type: 'flow', title: 'Gimana adopsi nyebar ke para mitra', steps: [
            { title: 'Observasi', text: 'Cari mitra yang paling berpotensi patuh' },
            { title: 'Pilot', text: 'Mereka duluan yang pakai, di tiga bulan pertama', highlight: true },
            { title: 'Jadi contoh', text: 'Mitra lain lihat hasilnya, dan antarmitra pasti saling ngobrol' },
            { title: 'Jadi aturan', text: 'Bareng BIB, keluar SK yang mewajibkan pakai sistem ini', highlight: true },
          ] },
          { type: 'p', html: 'Semua ini nggak bakal jalan tanpa dua pihak yang nggak bisa ditawar, yaitu Borneo Indobara dan Sinarmas Mining. Sebagai pelaksana digitalisasi, tugas kami ngasih masukan dari lapangan, biar semua proses jalan sesuai harapan mereka dan integrasi antarproduk sama fiturnya juga beres.' },
        ],
      },
      {
        label: 'Ngukur adopsi',
        title: 'Mantau adopsi kayak funnel',
        blocks: [
          { type: 'p', html: 'Ada matriks otomatis yang nampilin adopsi sebagai funnel yang detail. Kami pakai buat analisis, ngitung potensi risiko dan mitigasinya, sampai nentuin strategi berikutnya.' },
          { type: 'figure', file: 'mining-command-center.jpg', alt: 'Dashboard command center FAMOUS 2.0 dengan peringatan SOS, kesiapan kerja, inspeksi, dan heatmap armada', caption: 'Command center FAMOUS 2.0: peringatan SOS langsung, kesiapan kerja driver, inspeksi harian sebelum pakai (P2H), dan heatmap armada.' },
        ],
      },
      {
        label: 'Fase dua',
        title: 'Terus truknya ganti jadi listrik',
        blocks: [
          { type: 'p', html: 'Waktu dump truck listrik datang, aku yang pegang integrasinya ke sistem yang sama. Truk listrik nyambung ke aplikasi driver dan ke stasiun pengisian secara online. Driver bisa pesan slot di stasiun dan bay tertentu, terus mantau pengisiannya dari kabin.' },
          { type: 'figures', items: [
            { file: 'mining-ev-charging-station.jpg', alt: 'Stasiun pengisian EV di jalur hauling tambang, satu bay per truk', caption: 'Stasiun pengisian di jalur hauling, satu bay buat satu truk.' },
            { file: 'mining-driver-app-charging.jpg', alt: 'Layar aplikasi driver yang menampilkan sesi pengisian yang sudah dipesan', caption: 'Sesi yang udah dipesan: stasiun, bay, slot waktu, charging gun, sisa waktu, dan level baterai. Identitas driver diburamkan.' },
          ] },
          { type: 'ul', items: [
            'Pesan slot waktu di stasiun dan bay tertentu, sesuai lokasi.',
            'Status langsung: sisa waktu, persentase baterai, dan daya masuk, lengkap dengan tombol stop.',
            'Semua di satu aplikasi, sebelahan sama pemantauan kelelahan dan cek shift.',
          ] },
        ],
      },
      {
        label: OUTCOME,
        title: 'Hasilnya',
        blocks: [
          { type: 'compare', charts: [
            { title: 'Adopsi sistem', max: 100, ariaLabel: 'Adopsi sistem: sebelum 15 persen, setelah 6 bulan 65 persen', rows: [
              { label: 'Sebelum', value: '15%', lo: 15, kind: 'before' }, { label: '6 bulan', value: '65%', lo: 65, kind: 'after' }] },
            { title: 'Persiapan driver per shift', max: 40, ariaLabel: 'Persiapan driver per shift: sebelum 30 sampai 40 menit, sesudah 10 menit', rows: [
              { label: 'Sebelum', value: '30–40 mnt', lo: 30, hi: 40, kind: 'before' }, { label: 'Sesudah', value: '10 mnt', lo: 10, kind: 'after' }] },
            { title: 'Rekonsiliasi bulanan', max: 5, ariaLabel: 'Rekonsiliasi bulanan: sebelum 5 hari di kertas, sesudah 2 hari', rows: [
              { label: 'Sebelum', value: '5 hari, kertas', lo: 5, kind: 'before' }, { label: 'Sesudah', value: '2 hari', lo: 2, kind: 'after' }] },
            { title: 'Insiden kelelahan / bulan', max: 20, ariaLabel: 'Insiden kelelahan per bulan: sebelum 8 sampai 20, sesudah 1 sampai 3', rows: [
              { label: 'Sebelum', value: '8–20', lo: 8, hi: 20, kind: 'before' }, { label: 'Sesudah', value: '1–3', lo: 1, hi: 3, kind: 'after' }] },
          ] },
        ],
      },
      {
        label: LESSON,
        title: 'Yang aku pelajari',
        blocks: [
          { type: 'p', html: 'Digitalisasi di tambang itu mainannya lain. Pihaknya banyak, ada vendor dan kontraktor, dan kondisi lapangannya nggak bisa disimulasiin dari kantor. Teknologinya malah bagian yang paling gampang. Adopsi harus dikejar langsung di lapangan, satu kabin demi satu kabin.' },
        ],
      },
    ],
  },
  {
    slug: 'fintech',
    short: 'Fintech',
    num: '03',
    accent: '#A07BFF',
    card: {
      kicker: 'Fintech telekomunikasi · Turnaround',
      hook: 'Transaksi harian balik dari IDR <span class="nw">300–500M</span> ke 1B',
      company: 'ViaPulsa Global Indonesia · 2023–2025',
      role: 'Head of Product',
    },
    opener: {
      kicker: '03 · Fintech telekomunikasi · Product turnaround',
      hook: 'Transaksi harian balik dari <em>IDR <span class="nw">300–500M</span> ke 1B.</em>',
      sub: 'Aplikasinya udah sepuluh tahun dan mulai kalah sama pesaing yang lebih baru. Dalam enam bulan, produk, platform, sampai brand-nya kami bangun ulang.',
      role: ['ViaPulsa Global Indonesia · Feb 2023–Mar 2025', 'Head of Product (Product Director), mimpin 45 orang'],
      cover: { file: 'viapulsa-cover.jpg', position: 'center 35%', alt: 'Landing page ViaPulsa: Jasa Convert Pulsa Jadi Uang Terpercaya Sejak 2010, dengan brand ambassador memegang aplikasi' },
    },
    beats: [
      {
        label: 'Konteks',
        title: 'Konteksnya dulu',
        blocks: [
          { type: 'p', html: 'Di ViaPulsa, orang bisa tukar pulsa jadi uang tunai atau saldo e-wallet. Penggunanya setia, tapi aplikasinya hampir sepuluh tahun nggak pernah di-update besar.' },
          { type: 'stats', items: [['~800K', 'pengguna aktif'], ['45', 'orang: 13 engineer in-house, 10 engineer partner, 22 di tim produk'], ['6 bln', 'dari discovery sampai versi 2.0']] },
        ],
      },
      {
        label: 'Masalahnya',
        title: 'Terus, masalahnya di mana?',
        blocks: [
          { type: 'problems', items: [
            ['Produknya ketinggalan', 'Hampir sepuluh tahun nggak ada update besar, padahal pasarnya terus jalan.'],
            ['Pesaing baru bermunculan', 'Aplikasi sejenis mulai banyak di kategori yang sama.'],
            ['Volumenya nyusut', 'Nilai transaksi harian turun dari IDR 1B ke IDR 300–500M, dan tim marketing susah dapet leads.'],
          ] },
        ],
      },
      {
        label: 'Keputusan',
        title: 'Tambal aja, atau sekalian bertaruh besar?',
        blocks: [
          { type: 'p', html: 'Kami jalanin discovery ke seluruh pengguna. Bareng tim marketing dan sales, kami petakan ceruk pasarnya dan persona brand baru: aplikasi andalan buat convert pulsa, plus nilai tambah lainnya.' },
          { type: 'log', items: [
            { tag: 'Chosen', title: 'Revamp total: aplikasi, arsitektur, dan brand', text: 'Risikonya tinggi, tapi visi perusahaannya udah kegedean buat aplikasi lama. Targetnya enam bulan, dengan program voice-of-customer jalan barengan.' },
            { tag: 'Not chosen', title: 'Perbaikan sedikit-sedikit di aplikasi lama', text: 'Sempat kami pertimbangkan serius. Tapi jalan ini nggak bakal nyampe ke model produk dan pendapatan yang kami butuhin.' },
            { tag: 'Chosen', title: 'Aplikasi plus web', text: 'Dengan kanal web di samping aplikasi, pengguna bisa transaksi dari mana aja, dan sumber pendapatannya ikut nambah.' },
          ] },
        ],
      },
      {
        label: 'Produknya',
        title: 'Kayak gini versi 2.0-nya',
        blocks: [
          { type: 'two', left: [
            { type: 'tiles', items: [
              { title: 'Inti', text: 'Convert pulsa yang mulus, dengan API gateway buat hasilnya', highlight: true },
              { title: 'Aplikasi + web', text: 'Transaksi dari aplikasi atau browser' },
              { title: 'Pendapatan baru', text: 'Diamond game dan aktivasi aplikasi, dibayar pakai pulsa', highlight: true },
              { title: 'Brand', text: 'Identitas baru, rilis barengan sama produknya' },
            ] },
            { type: 'p', html: 'Peluncurannya nggak mulus. Pengguna lama kaget karena aplikasi yang udah sepuluh tahun mereka pakai tiba-tiba berubah, dan volumenya sempat turun. Untungnya tim-tim gerak cepat benerin, jadi turunnya nggak lama.' },
          ], right: [
            { type: 'figure', file: 'viapulsa-web-app.jpg', alt: 'Aplikasi web ViaPulsa 2.0 dengan menu convert, grosir, kalkulator rate, dan top-up', caption: 'ViaPulsa 2.0 versi web: convert, grosir, kalkulator rate, dan top-up, dengan rate langsung buat enam operator.' },
          ] },
        ],
      },
      {
        label: OUTCOME,
        title: 'Hasilnya',
        blocks: [
          { type: 'columns', title: 'Nilai transaksi harian (IDR)', max: 1000, caption: 'Bagian yang lebih terang itu rentang angka yang dilaporkan.', ariaLabel: 'Nilai transaksi harian: puncak sebelumnya 1B, sebelum revamp 300 sampai 500M, bulan 1 sampai 2 setelah peluncuran 700 sampai 800M, bulan ke-4 setelah peluncuran 1B', cols: [
            { label: 'Puncak sebelumnya', value: '1B', lo: 1000, color: 'neutral' },
            { label: 'Sebelum revamp', value: '300–500M', lo: 300, hi: 500, color: 'drop' },
            { label: 'Bulan 1–2 setelah rilis', value: '700–800M', lo: 700, hi: 800, color: 'acc' },
            { label: 'Bulan ke-4 setelah rilis', value: '1B', lo: 1000, color: 'acc' },
          ] },
        ],
      },
      {
        label: LESSON,
        title: 'Yang aku pelajari',
        blocks: [
          { type: 'p', html: 'Revamp besar-besaran bisa berhasil, tapi pengguna lama ngerasain tiap perubahan. Lain kali, perpindahan pengguna lama bakal aku rencanain sedetail fitur barunya.' },
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
      hook: 'Bawa merchant offline ke online waktu Covid datang',
      company: 'Majoo Indonesia · 2021',
      role: 'Product Manager',
    },
    opener: {
      kicker: '04 · SaaS UMKM · Omnichannel',
      hook: 'Bawa merchant offline ke online <em>waktu Covid nutup toko mereka.</em>',
      sub: 'Integrasi sekali klik ke marketplace dan aplikasi pesan-antar makanan, plus toko online punya Majoo sendiri. Semua pesanannya masuk ke satu POS.',
      role: ['Majoo Indonesia · 2021 · Product Manager (2020–2023)'],
      cover: { file: 'majoo-omnichannel-cover.jpg', position: 'center 40%', alt: 'Dashboard omnichannel Majoo dikelilingi ikon GrabFood, GrabMart, GoFood, Shopee, Tokopedia, dan website' },
    },
    beats: [
      {
        label: 'Konteks',
        title: 'Konteksnya dulu',
        blocks: [
          { type: 'p', html: 'Majoo itu aplikasi bisnis all-in-one buat UMKM Indonesia: POS, akuntansi, inventaris, CRM, dan pesanan online. Sebelum pegang omnichannel, aku ngerjain intinya, yaitu POS (aplikasi kasir) yang dipakai merchant tiap hari. Jadi waktu Covid datang, aku lihat sendiri dampaknya ke mereka.' },
        ],
      },
      {
        label: 'Masalahnya',
        title: 'Terus, masalahnya di mana?',
        blocks: [
          { type: 'problems', items: [
            ['Toko sepi', 'Pelanggan ritel dan F&B berhenti datang karena kebiasaan mereka berubah.'],
            ['Transaksi turun', 'Tren transaksi di Majoo ikut turun.'],
            ['Rawan churn', 'Banyak merchant nggak lanjut langganan.'],
          ] },
        ],
      },
      {
        label: 'Pendekatannya',
        title: 'Tanya merchant: pelanggannya pada ke mana?',
        blocks: [
          { type: 'p', html: 'Aku mulai riset omnichannel: merchant udah pakai aplikasi pesan-antar dan marketplace apa aja, dan mereka berharap apa. Partner-nya kami pilih pakai tiga patokan: seberapa banyak merchant minta, ada API-nya atau nggak, dan seberapa berguna integrasinya. Habis itu bikin MVP, tes internal bareng tim tech, lalu iterasi bareng merchant beneran sebelum rilis.' },
          { type: 'flow', title: 'Semua kanal, satu dashboard', steps: [
            [
              { title: '3 marketplace', text: 'Pesanan online' },
              { title: '3 aplikasi pesan-antar makanan', text: 'Pesanan antar' },
              { title: 'Toko online merchant sendiri', text: 'Pelanggan pesan langsung', highlight: true },
            ],
            { title: 'Dashboard Majoo', text: 'Sekali klik buat nyambungin tiap kanal', highlight: true },
            { title: 'POS merchant', text: 'Pesanan, inventaris, dan laporan di satu tempat' },
          ] },
        ],
      },
      {
        label: 'Produknya',
        title: 'Habis integrasi, toko online sendiri',
        blocks: [
          { type: 'p', html: 'Platform pihak ketiga aja ternyata kurang. Kami juga bikin kanal e-commerce punya Majoo, biar merchant bisa terima pesanan online dengan cara mereka sendiri. Pelanggan pesan sendiri, jadi bisa jalan tanpa pelayan dan tanpa kasir. Tiap pesanan tetap masuk ke POS dan inventaris yang sama.' },
          { type: 'figure', file: 'majoo-online-store.jpg', alt: 'Visual pemasaran toko online Majoo', caption: 'Toko online Majoo, seperti yang dipasarkan sekarang.' },
        ],
      },
      {
        label: OUTCOME,
        title: 'Hasilnya',
        blocks: [
          { type: 'stats', items: [['3 + 3', 'integrasi marketplace dan pesan-antar makanan, masing-masing sekali klik'], ['300+', 'merchant pakai integrasinya di enam bulan pertama'], ['+5–8%', 'nilai transaksi setelah rilis pertama']] },
        ],
      },
      {
        label: LESSON,
        title: 'Yang aku pelajari',
        blocks: [
          { type: 'p', html: 'Masalah awalnya soal perpanjangan langganan, tapi setelah rilis aku nggak pernah ngecek churn-nya. Sekarang, sebelum mulai bikin, aku tentuin dulu metrik sukses yang nyambung ke masalah awalnya, terus aku pantau dari hari pertama.' },
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
      hook: 'POS mobile yang dibikin dari nol, 300 pengguna dalam 3 bulan',
      company: 'Interactive Technologies Group · 2018',
      role: 'Product Management L1',
    },
    opener: {
      kicker: '05 · SaaS UMKM · Awal mulanya',
      hook: 'POS mobile yang dibikin <em>dari nol</em>, 300 pengguna dalam 3 bulan.',
      sub: 'Kerjaan produk pertamaku. Usaha kecil nggak sanggup beli POS desktop, jadi kami bertaruh di aplikasi mobile gratis dengan pesanan online dan kios self-order. Waktu itu belum banyak yang ngelirik dua-duanya.',
      role: ['Interactive Technologies Group · 2018', 'Product Management L1 · InterActive MyProfit'],
      cover: { file: 'myprofit-cover.jpg', alt: 'Visual pemasaran InterActive MyProfit: aplikasi kasir all-in-one di tablet dan ponsel, dengan tips AI, self order, reservasi, stok, dan pembayaran QRIS' },
    },
    beats: [
      {
        label: 'Konteks',
        title: 'Konteksnya dulu',
        blocks: [
          { type: 'p', html: 'Tahun 2018, POS mobile di Indonesia belum ada pemain yang dominan, dan hampir belum nyentuh usaha kecil dan menengah. Bareng CTO kami, aku mulai inisiatif buat bikin satu untuk pasar itu.' },
          { type: 'stats', items: [['0 → 1', 'dibikin dari nol, belum ada produk sebelumnya'], ['3', 'kanal di v1: POS, web pesanan online, dan kios self-order'], ['Gratis', 'aplikasinya, uangnya dari hardware dan add-on']] },
        ],
      },
      {
        label: 'Masalahnya',
        title: 'Terus, masalahnya di mana?',
        blocks: [
          { type: 'problems', items: [
            ['Masih di desktop', 'Kebanyakan sistem POS jalan di perangkat desktop, nggak cocok buat toko kecil dan warung makan.'],
            ['Kemahalan', 'Biayanya tinggi, pemilik usaha jadi males langganan, apalagi beli sistemnya langsung.'],
            ['UMKM kelewat', 'Hampir nggak ada produk yang dibikin buat usaha kecil.'],
          ] },
        ],
      },
      {
        label: 'Keputusan',
        title: 'Mimpi besar, rilis kecil',
        blocks: [
          { type: 'log', items: [
            { tag: 'Chosen', title: 'POS mobile-first buat UMKM', text: 'Jalan di mobile, dengan harga dan desain yang pas buat usaha kecil.' },
            { tag: 'Chosen', title: 'Pesanan online dan kios self-order di v1', text: 'Ini bagian yang ambisius. Waktu itu belum banyak pemain yang ngelirik self-ordering.' },
            { tag: 'Chosen', title: 'Aplikasi gratis, hardware dan add-on berbayar', text: 'Pendapatannya dari hardware dan koneksi API ke alat kayak printer thermal dan aplikasi akuntansi. Nggak ada biaya langganan.' },
          ] },
          { type: 'flow', title: 'Jalan kami sampai ke 1.0', caption: 'Siklusnya panjang, dan dari sini aku belajar product management sambil langsung praktik.', steps: [
            { title: 'Discovery', text: 'Pahami dulu UMKM butuhnya apa' },
            { title: 'Uji', text: 'Tes ide yang paling berisiko' },
            { title: 'MVP', text: 'Versi paling kecil yang udah layak dipakai', highlight: true },
            { title: 'Iterasi', text: 'Benerin bagian yang bikin pengguna kesandung' },
            { title: 'Roadmap', text: 'Komit ke yang udah terbukti', highlight: true },
          ] },
        ],
      },
      {
        label: OUTCOME,
        title: 'Hasilnya',
        blocks: [
          { type: 'stats', items: [['1.0', 'rilis dengan POS, pesanan online, dan kios'], ['300', 'pengguna baru dalam 3 bulan setelah rilis'], ['2', 'sumber pendapatan: hardware dan integrasi add-on']] },
          { type: 'figure', file: 'myprofit-features.jpg', alt: 'Visual pemasaran MyProfit yang menampilkan fitur POS, stok, laporan, multi-outlet, QRIS, dan self order', caption: 'MyProfit seperti yang dipasarkan sekarang: POS, stok, laporan, dan multi-outlet, plus QRIS, macam-macam jenis pesanan, dan self order. Taruhan self-ordering dari 2018 masih jadi fitur inti.' },
        ],
      },
      {
        label: LESSON,
        title: 'Yang aku pelajari',
        blocks: [
          { type: 'takeaway', label: 'Sekolah', text: 'Sekolah produk pertamaku: discovery, testing, MVP, iterasi, sampai go-to-market, semuanya di satu produk.' },
          { type: 'p', html: 'Kebiasaan yang kebentuk di sini aku bawa terus ke Majoo, ViaPulsa, Minergo, dan eDOT.' },
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
      kicker: 'POS ritel · Dibikin pakai Claude Code',
      hook: 'Dari aplikasi spreadsheet yang gampang error jadi POS multi-outlet yang live',
      company: 'tapp.in (Bekalin Group) · 2026',
      role: 'Product owner & builder',
    },
    opener: {
      kicker: 'Product builder · POS ritel · Dibikin pakai Claude Code',
      hook: 'POS berbasis spreadsheet, aku bangun ulang jadi <em>web app yang live.</em>',
      sub: 'Aplikasi kasir, stok, dan laporan buat tiga outlet di Malang dan Surabaya. Keputusan produknya aku pegang, kodenya aku bikin bareng Claude Code: awalnya di Google Apps Script, terus pindah jadi web app di Vercel. Dibikin buat Bekalin dulu, dan bisa dipakai usaha kecil mana aja yang omzetnya di bawah Rp500.000 sehari.',
      role: ['tapp.in, dulunya Bekalin POS · Bekalin Group · Okt–Nov 2026', 'Product owner & builder · Claude Code, Google Apps Script, Vercel, Supabase'],
      cover: { file: 'tappin-dashboard.jpg', position: 'top', alt: 'Dashboard tapp.in: penjualan hari ini, transaksi, dan item terjual, grafik penjualan 7 hari, metode pembayaran, dan transaksi terbaru, dengan filter outlet' },
    },
    beats: [
      {
        label: 'Konteks',
        title: 'Konteksnya dulu',
        blocks: [
          { type: 'p', html: 'Bekalin Group jualan makanan dari tiga outlet di Malang dan Surabaya, dengan stok dari tiga gudang. POS-nya awalnya web app Google Apps Script yang pakai Google Sheets sebagai database. Kasir, pre-order, stok, dan laporan semuanya di situ.' },
          { type: 'stats', items: [['3', 'outlet: Bekalin Malang, Ngombe Es Malang, Bekalin Surabaya'], ['3', 'gudang, dicatat terpisah dari outlet'], ['3', 'peran: super admin, admin, dan kasir'], ['5', 'metode bayar: tunai, QRIS, transfer bank, Shopee, TikTok Shop']] },
        ],
      },
      {
        label: 'Pengguna',
        title: 'Siapa yang pakai, dan gimana pakainya',
        blocks: [
          { type: 'stats', items: [['Kasir', 'jualan dan terima pre-order di satu outlet, tanpa akses back office'], ['Admin', 'ngurus produk, stok, pelanggan, diskon, laporan, dan pengguna'], ['Pemilik', 'semua yang bisa dilakuin admin, plus pengaturan khusus pemilik']] },
          { type: 'flow', title: 'Satu shift kasir', steps: [
            { title: 'Buka kasir', text: 'Login, terus isi modal awal di laci' },
            { title: 'Input pesanan', text: 'Ketuk produk, pilih atau tambah pelanggan, kasih diskon', highlight: true },
            { title: 'Bayar', text: 'Tunai, QRIS, transfer bank, Shopee, atau TikTok Shop' },
            { title: 'Struk', text: 'Cetak struk thermal, atau simpan jadi pre-order buat dibayar nanti' },
            { title: 'Tutup kasir', text: 'Hitung uangnya, aplikasi langsung nunjukin selisihnya', highlight: true },
          ] },
          { type: 'flow', title: 'Sehari pemilik', steps: [
            { title: 'Ringkasan harian', text: 'Penjualan dan selisih kas, masuk lewat notifikasi', highlight: true },
            { title: 'Dashboard', text: 'Tren 7 hari, produk terlaris, dibanding kemarin, per outlet' },
            { title: 'Laporan penjualan', text: 'Per periode, outlet, dan metode bayar' },
            { title: 'Stok', text: 'Stok masuk, transfer, dan penyesuaian di semua gudang' },
          ] },
        ],
      },
      {
        label: 'Masalahnya',
        title: 'Terus, masalahnya di mana?',
        blocks: [
          { type: 'p', html: 'Semua ini muncul dari pemakaian sehari-hari, dan ini keluhanku sendiri waktu itu.' },
          { type: 'problems', items: [
            ['Menu berat nggak mau kebuka', 'Apps Script sering error waktu baca data, jadi laporan penjualan dan stok sering gagal dimuat.'],
            ['Malang dan Surabaya kecampur', 'Penjualan nggak bisa dipisah per kota, dan laporannya nggak nunjukin jumlah item terjual.'],
            ['Kasirnya kaku', 'Layar kasir masih berasa kayak aplikasi Google yang lama, dan pindah dari kasir ke back office terasa nggak enak.'],
            ['Dikit-dikit harus ke back office', 'Mau tambah pelanggan atau kasih diskon manual harus keluar dari kasir, dan struknya belum format thermal.'],
            ['Back office sering error', 'Simpan produk gagal, bahkan dari HP, SKU harus diketik manual, dan beberapa daftar nggak bisa di-scroll.'],
            ['Tiap balik, ke-logout', 'Buka lagi aplikasi yang udah diinstal, sesi login-nya hilang.'],
            ['Outlet ketuker sama gudang', 'Datanya nganggep tempat jualan dan tempat stok itu sama, jadi relasi di dashboard-nya salah.'],
          ] },
        ],
      },
      {
        label: 'Pendekatannya',
        title: 'Benerin di tempat dulu, baru pindah',
        blocks: [
          { type: 'p', html: 'Kerja bareng Claude Code rasanya kayak kerja bareng tim engineering. Aku yang nentuin scope dan ambil keputusan, Claude Code yang nulis dan ngerapiin kodenya. Tiap perubahan dirilis sebagai versi bernomor.' },
          { type: 'flow', title: 'Apps Script, versi demi versi (31 Okt – 5 Nov)', caption: 'Sebelas versi dalam enam hari, dari V20.0.0 sampai V20.1.0.', steps: [
            { title: 'V20.0.2', text: 'Migrasi skema yang jalan sekali tiap versi' },
            { title: 'V20.0.3', text: 'Filter outlet dan total item terjual di laporan penjualan' },
            { title: 'V20.0.x', text: 'Rapiin UI per halaman: kasir, stok, pre-order', highlight: true },
            { title: 'V20.1.0', text: 'Desain ulang dashboard: tren 7 hari, produk terlaris, dibanding kemarin' },
          ] },
        ],
      },
      {
        label: 'Keputusan',
        title: 'Tulis ulang, atau pindahin?',
        blocks: [
          { type: 'log', items: [
            { tag: 'Chosen', title: 'Pindah ke web app, logika Apps Script tetap dipakai', text: 'Kode server aslinya jalan tanpa diubah, di atas lapisan kompatibilitas yang niru Google Sheets. Database-nya Supabase Postgres, hosting-nya Vercel.' },
            { tag: 'Deprioritized', title: 'AI agent', text: 'Di versi Apps Script, fitur ini masih placeholder dan belum nyambung ke model apa pun. Aku tunda dulu sampai scope-nya jelas.' },
            { tag: 'Deprioritized', title: 'Pesanan online', text: 'Dikeluarin dari versi baru biar fokus ke kasir dan back office.' },
            { tag: 'Chosen', title: 'Varian produk dengan stok sendiri', text: 'Satu dimensi varian, tiap varian stoknya terpisah. Modifier nyusul nanti.' },
            { tag: 'Chosen', title: 'Tempat jualan dipisah dari gudang', text: 'Outlet buat jualan, gudang buat nyimpen stok. Sekarang model datanya udah bedain dua-duanya.' },
          ] },
          { type: 'flow', title: 'Dari Apps Script ke web app', steps: [
            { title: 'Code.gs asli', text: 'Logika server dibiarin apa adanya' },
            { title: 'Lapisan kompatibilitas', text: 'Niru SpreadsheetApp dan google.script.run', highlight: true },
            { title: 'Supabase Postgres', text: 'Isi sheet disimpan sebagai baris data' },
            { title: 'Vercel + PWA', text: 'Web app yang bisa diinstal buat kasir dan pemilik', highlight: true },
          ] },
        ],
      },
      {
        label: 'Masalah → solusi',
        title: 'Tiap masalah, solusinya apa',
        blocks: [
          { type: 'log', items: [
            { tag: 'Chosen', title: 'Menu berat → platform baru', text: 'Pindah dari Apps Script ke Vercel dan Supabase. Laporan dan stok sekarang kebuka kayak halaman lain.' },
            { tag: 'Chosen', title: 'Kota kecampur → outlet dan gudang', text: 'Filter kota diganti tiga outlet yang nyambung ke tiga gudang, dan tiap pengguna ditempatin di satu outlet.' },
            { tag: 'Chosen', title: 'Bolak-balik ke back office → beres di kasir', text: 'Pelanggan dan diskon manual bisa ditambah langsung dari layar kasir, dan struknya udah format thermal.' },
            { tag: 'Chosen', title: 'Varian di alur terpisah → satu tombol tambah produk', text: 'Varian ditambah dari tombol yang sama, masing-masing punya stok sendiri. Contohnya es jeruk reguler dan jumbo.' },
            { tag: 'Chosen', title: 'Cek dashboard manual → ringkasan harian', text: 'Pemilik dan admin dapat ringkasan penjualan hari itu otomatis, dan bisa dimatiin di pengaturan.' },
          ] },
        ],
      },
      {
        label: 'Produknya',
        title: 'Yang bisa dilakuin tapp.in sekarang',
        blocks: [
          { type: 'tiles', items: [
            { title: 'Kasir', text: 'Keranjang, diskon, pre-order, dan struk thermal', highlight: true },
            { title: 'Stok', text: 'FIFO per batch di beberapa gudang: stok masuk, transfer, penyesuaian, riwayat' },
            { title: 'Back office', text: 'Produk dan varian, pelanggan, diskon, pengguna, dan log aktivitas' },
            { title: 'Laporan', text: 'Dashboard dan laporan penjualan per outlet dan metode bayar', highlight: true },
          ] },
          { type: 'figure', file: 'tappin-cashier.jpg', alt: 'Layar kasir tapp.in dengan daftar produk di kiri dan pesanan bertotal Rp12.000 di kanan', caption: 'Kasir: ketuk produk, pilih pelanggan atau diskon, terus bayar atau simpan jadi pre-order.' },
          { type: 'figures', items: [
            { file: 'tappin-report.jpg', alt: 'Laporan penjualan tapp.in bulan ini dengan total, rincian metode bayar, dan daftar invoice', caption: 'Laporan penjualan, bisa difilter per periode dan outlet. Struk tiap invoice bisa dicetak.' },
            { file: 'tappin-mobile.jpg', tall: true, alt: 'Kasir tapp.in di ponsel dengan dua produk di keranjang', caption: 'Kasir yang sama di HP, sebagai web app yang bisa diinstal.' },
          ] },
          { type: 'p', html: 'Setelah pindah, fiturnya terus nambah: varian produk, diskon manual dan tambah pelanggan langsung dari kasir, notifikasi update, dan ringkasan penjualan harian buat pemilik dan admin.' },
        ],
      },
      {
        label: 'Untuk siapa',
        title: 'Bisa dipakai di luar Bekalin juga',
        blocks: [
          { type: 'p', html: 'Bekalin cuma pengguna pertamanya. tapp.in aku bikin buat usaha kecil yang omzetnya di bawah <span class="nw">Rp500.000</span> sehari dan pengin aplikasi kasir beneran tanpa ribet instal.' },
          { type: 'tiles', items: [
            { title: 'Omzet harian kecil', text: 'Pas buat UMKM yang penjualannya di bawah Rp500.000 sehari', highlight: true },
            { title: 'Nggak perlu instal', text: 'Bentuknya PWA: buka di browser, tambahin ke layar utama', highlight: true },
            { title: 'Rasanya kayak aplikasi', text: 'Tampilan dan cara pakainya kayak aplikasi beneran, cuma jauh lebih enteng' },
            { title: 'Buat transaksi kecil', text: 'Sengaja dibikin simpel, jadi transaksi besar dengan nilai tinggi di luar jangkauannya' },
          ] },
        ],
      },
      {
        label: OUTCOME,
        title: 'Hasilnya',
        blocks: [
          { type: 'stats', items: [['Live', 'di Vercel sebagai tapp.in, web app yang bisa diinstal'], ['11', 'versi Apps Script dalam enam hari sebelum pindah'], ['1', 'sistem buat 3 outlet dan 3 gudang'], ['Sama', 'logika server-nya dengan versi Apps Script, jalan di stack baru']] },
        ],
      },
      {
        label: LESSON,
        title: 'Yang aku pelajari',
        blocks: [
          { type: 'p', html: 'Bareng AI, bikin fitur jadi cepat banget. Yang bikin produknya tetap enak dipakai orang di balik meja kasir justru keputusan buat nunda hal-hal kayak AI agent dan pesanan online.' },
        ],
      },
    ],
  },
];
