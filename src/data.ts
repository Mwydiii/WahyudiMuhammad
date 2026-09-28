import { Experience, Project, Certification, Education } from './types';

export const EXPERIENCES: Experience[] = [
  {
    id: 'exp-1',
    role: 'Product Manager',
    company: 'Socialvit.com',
    url: 'https://socialvit.com',
    period: 'Februari 2025 – Agustus 2026',
    responsibilities: [
      'Menjadi penghubung utama antara eksekutif bisnis dan tim IT untuk menganalisis kebutuhan platform social learning, menyusun solusi berbasis teknologi, dan merancang roadmap produk secara end-to-end.',
      'Menganalisis masalah pada proses kurasi talenta dan memberikan rekomendasi sistem berupa inovasi fitur AI CV Analyzer & Job Connect.',
      'Menyusun FSD teknis untuk tim developer yang menghasilkan peluncuran fitur tepat waktu, berhasil memangkas waktu review CV pengguna hingga 80% dan menarik 70 pengguna baru di minggu pertama.',
      'Merancang fitur integrasi media sosial untuk interaksi komunitas real-time, serta memimpin tim developer beranggotakan 5 orang dengan sprint completion rate di atas 90%.'
    ]
  },
  {
    id: 'exp-2',
    role: 'Product Manager (superalink.com)',
    company: 'Alterolabs',
    url: 'https://www.linkedin.com/company/altero-labs/',
    period: 'April 2024 – Januari 2026',
    responsibilities: [
      'Memimpin pengembangan produk superalink.com, berkolaborasi dengan tim lintas fungsi (UI/UX, QA, DevOps, Backend/Frontend) untuk memastikan skalabilitas dan keamanan transaksi digital pengguna global.',
      'Menganalisis kebutuhan bisnis dari pemangku kepentingan internasional, menerjemahkannya ke dalam BRD dan roadmap proyek yang selaras dengan tujuan bisnis global perusahaan.',
      'Menerapkan transformasi Agile/Scrum yang meningkatkan team velocity sebesar 25%, mempercepat waktu peluncuran fitur, dan mengamankan kepatuhan SLA 100%.',
      'Merumuskan kriteria keberhasilan (success criteria) dan mengeksekusi peluncuran MVP produk dalam tenggat waktu ketat 3 bulan.'
    ]
  },
  {
    id: 'exp-3',
    role: 'IT Project Manager',
    company: 'PT Bixbox Teknologi Perkasa',
    url: 'https://refactory.id/',
    period: 'Januari 2023 – Februari 2025',
    responsibilities: [
      'Menyusun roadmap proyek secara komprehensif, mengelola ruang lingkup, jadwal, dan alokasi anggaran (cost).',
      'Menganalisis risiko potensial dan menerapkan early warning system serta rencana mitigasi terstruktur, yang sukses mengurangi dampak risiko sebesar 25% dan deviasi jadwal sebesar 20%.',
      'Menganalisis dan mengelola 100% permintaan perubahan (change request) dari departemen bisnis, memastikan kebutuhan operasional terpenuhi tanpa mengganggu timeline proyek inti.',
      'Meningkatkan kepuasan stakeholder sebesar 15% melalui pelaporan transparan, penyelesaian isu proaktif, dan penyelesaian proyek IT kompleks 10% lebih cepat dari jadwal yang ditentukan.'
    ]
  },
  {
    id: 'exp-4',
    role: 'IT Support',
    company: 'Institut Teknologi Sumatera (ITERA)',
    url: 'https://itera.ac.id',
    period: 'Januari 2022 – Januari 2023',
    responsibilities: [
      'Menjaga keandalan sistem jaringan dan hardware institusi melalui troubleshooting responsif dan perawatan rutin, meminimalkan gangguan operasional dengan uptime 100%.',
      'Merancang, mengembangkan, dan mengimplementasikan kebijakan keamanan informasi yang secara signifikan memperkuat perlindungan data dan aset digital kampus.'
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'proj-1',
    title: 'Integrasi Sistem Pembayaran Dealer Otomotif (Nasmoco x Bank Permata)',
    company: 'Bank Permata & Nasmoco',
    companyLogo: '/logos/permatabank.svg',
    companySecondaryLogo: '/logos/toyota.svg',
    companyUrl: 'https://www.permatabank.com',
    description: 'Bertindak sebagai Project Manager / IT BA utama yang merancang dan memimpin integrasi IBOSS (Integrated Back Office Support System) dengan gerbang pembayaran Bank Permata. Melakukan pemetaan proses bisnis komprehensif, menyusun spesifikasi kebutuhan integrasi API, dan berhasil meningkatkan efisiensi operasional dengan memangkas waktu pemrosesan transaksi manual hingga 40%.',
    category: 'Enterprise Integration'
  },
  {
    id: 'proj-2',
    title: 'Implementasi Odoo ERP',
    company: 'Odoo & PT Virtus Facility Services',
    companyLogo: '/logos/odoo.svg',
    companyUrl: 'https://www.odoo.com',
    description: 'Memimpin siklus penuh implementasi Odoo ERP untuk merancang sistem HRIS (PT Virtus Facility Services) berbasis web. Menganalisis pain points pada proses pengelolaan SDM, merancang solusi digital yang terotomatisasi, dan berhasil menyederhanakan proses rekrutmen hingga memangkas hiring cycle sebesar 35%.',
    category: 'ERP'
  },
  {
    id: 'proj-3',
    title: 'Pengembangan Sistem Persenjataan & Ranpur Berbasis IoT',
    company: 'PT Pindad',
    companyLogo: '/logos/pindad.png',
    companyUrl: 'https://pindad.com',
    description: 'Mengelola proyek strategis pengembangan sistem monitoring kendaraan tempur (ranpur) dan persenjataan yang terintegrasi penuh dengan ekosistem IoT di PT Pindad. Menerjemahkan spesifikasi pertahanan menjadi arsitektur sistem operasional, membangun jaringan sensor untuk analitik data real-time, serta memastikan integrasi infrastruktur IoT yang andal dan aman di lapangan.',
    category: 'IoT'
  },
  {
    id: 'proj-4',
    title: 'USIMSA aka Superalink (Global eSIM Platform)',
    company: 'Superalink (Alterolabs)',
    companyLogo: '/logos/superalink.png',
    companyUrl: 'https://www.linkedin.com/company/altero-labs/',
    description: 'Memimpin pengembangan platform eSIM lintas negara (150+ negara) yang mencetak nilai transaksi USD 9.000 pada bulan pertama dengan arsitektur transaksi internasional scalable.',
    category: 'Platform'
  },
  {
    id: 'proj-5',
    title: 'XAPIENS (AI Transcript Tool)',
    company: 'PT Xapiens Teknologi Indonesia',
    companyLogo: '/logos/xapiens.png',
    companyUrl: 'https://xapiens.id',
    description: 'Memimpin pengembangan layanan alat transkripsi bertenaga AI untuk platform komunikasi internal; sukses mengurangi tingkat kesalahan manual sebesar 40% dan mendorong retensi pengguna hingga 30%.',
    category: 'AI'
  },
  {
    id: 'proj-6',
    title: 'HANOMAN (Wholesale Dashboard)',
    company: 'PT Bixbox Teknologi Perkasa',
    companyLogo: '/logos/bixbox.png',
    companyUrl: 'https://refactory.id/',
    description: 'Mengelola peningkatan dasbor web berskala nasional untuk melacak aktivitas penjualan grosir dari Hanoman Mobile App; menaikkan efisiensi pelacakan penjualan hingga 50%.',
    category: 'Dashboard'
  },
  {
    id: 'proj-7',
    title: 'PT Mitra Pinasthika Mustika / MPM (Employee Management App)',
    company: 'PT Mitra Pinasthika Mustika (MPM Group)',
    companyLogo: '/logos/mpm.png',
    companyUrl: 'https://mpmgroup.com',
    description: 'Mengembangkan aplikasi mobile dan WEB terintegrasi untuk clocking in, cuti, persetujuan, dan pelatihan karyawan; meningkatkan employee engagement sebesar 20%.',
    category: 'Mobile/Web App'
  },
  {
    id: 'proj-8',
    title: 'Cellcast Australia (SMS/MMS Broadcasting)',
    company: 'Cellcast Australia',
    companyLogo: '/logos/cellcast.svg',
    companyUrl: 'https://cellcast.com.au',
    description: 'Mengelola operasional pengembangan layanan broadcasting berbasis Modica SMPP Gateway dan SINCH, memastikan pengiriman pesan berkualitas tinggi dengan success rate di angka 99,5%.',
    category: 'Broadcasting'
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: 'cert-1',
    title: 'Deep Learning using TensorFlow (Advanced)',
    issuer: 'IBM',
    date: '25 Mei 2023'
  },
  {
    id: 'cert-2',
    title: 'Certified Agile Project Management',
    issuer: 'Alison (CPD Certifications Services)',
    score: '100/100'
  },
  {
    id: 'cert-3',
    title: 'Certified Scrum Master (CSM)',
    issuer: 'Alison (CPD Certifications Services)',
    score: '91/100'
  }
];

export const EDUCATION: Education[] = [
  {
    id: 'edu-1',
    degree: 'Sarjana Teknik Informatika (S1)',
    institution: 'Institut Teknologi Sumatera (ITERA) – Lampung, Indonesia',
    period: '2016 – Lulus Oktober 2021'
  }
];
