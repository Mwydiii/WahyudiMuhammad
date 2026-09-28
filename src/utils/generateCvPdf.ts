import { jsPDF } from 'jspdf';

export function generateCvPdf() {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
  });

  const pageWidth = 210;
  const margin = 14;
  const contentWidth = pageWidth - margin * 2;

  // Header banner (Deep Navy)
  doc.setFillColor(10, 25, 47); // #0A192F
  doc.rect(0, 0, pageWidth, 38, 'F');

  // Blue Accent Divider
  doc.setFillColor(37, 99, 235); // #2563EB
  doc.rect(0, 38, pageWidth, 1.8, 'F');

  // Header Title & Contact Info
  doc.setTextColor(255, 255, 255);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(18);
  doc.text('MUHAMMAD WAHYUDI, S.Kom.', margin, 14);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10);
  doc.setTextColor(191, 219, 254);
  doc.text('IT Product Manager  |  IT Business Analyst  |  Certified Scrum Master', margin, 21);

  doc.setFontSize(8);
  doc.setTextColor(226, 232, 240);
  doc.text('Email: muhammadwyd02@gmail.com  |  LinkedIn: linkedin.com/in/muhammad-wahyudi-94b2801a6', margin, 28);
  doc.text('Lokasi: Bandar Lampung, Indonesia  |  Alumnus Teknik Informatika ITERA', margin, 33);

  let y = 46;

  function addSectionTitle(title: string) {
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10.5);
    doc.setTextColor(10, 25, 47);
    doc.text(title.toUpperCase(), margin, y);

    doc.setDrawColor(37, 99, 235);
    doc.setLineWidth(0.6);
    doc.line(margin, y + 1.5, pageWidth - margin, y + 1.5);
    y += 6;
  }

  // 1. Ringkasan Profesional
  addSectionTitle('Ringkasan Profesional');
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(51, 65, 85);
  const summaryText =
    'IT Product Manager & IT Business Analyst berpengalaman dengan rekam jejak 4+ tahun dalam memimpin tim rekayasa perangkat lunak lintas disiplin, merancang arsitektur produk digital end-to-end, dan menerjemahkan kebutuhan bisnis kompleks menjadi solusi teknis bernilai tinggi. Berpengalaman luas dalam implementasi Odoo ERP, integrasi sistem enterprise (perbankan & otomotif), sistem pertahanan berbasis IoT di PT Pindad, serta platform global berskala internasional di 150+ negara dengan metodologi Agile/Scrum.';
  const splitSummary = doc.splitTextToSize(summaryText, contentWidth);
  doc.text(splitSummary, margin, y);
  y += splitSummary.length * 4 + 3;

  // 2. Keahlian Teknis & Tools (Tech Stack)
  addSectionTitle('Keahlian Teknis & Tools (Tech Stack)');
  doc.setFontSize(8.5);

  const skillsList = [
    { label: 'Pemrograman & Frontend:', val: 'PHP, HTML, CSS, React, TypeScript, C++, Python' },
    { label: 'Database & Infrastruktur:', val: 'PostgreSQL (Postgree), Docker, REST API Gateway, IoT Ecosystem' },
    { label: 'Testing, ERP & Tools:', val: 'Postman, Odoo ERP (HRIS & CRM), Git, Jira, Trello, Figma, Slack' },
    { label: 'Metodologi & Manajemen:', val: 'Agile / Scrum (CSM), PRD, FSD/BRD Specs, Risk Mitigation, Sprint Leadership' },
  ];

  skillsList.forEach((s) => {
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(10, 25, 47);
    doc.text(s.label, margin, y);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(51, 65, 85);
    doc.text(s.val, margin + 48, y);
    y += 4.5;
  });
  y += 2;

  // 3. Pengalaman Kerja
  addSectionTitle('Pengalaman Kerja');

  const exps = [
    {
      role: 'Product Manager',
      company: 'Socialvit.com',
      period: 'Februari 2025 – Agustus 2026',
      points: [
        'Menjadi penghubung utama antara eksekutif bisnis dan tim IT untuk menganalisis kebutuhan platform social learning, menyusun solusi berbasis teknologi, dan merancang roadmap produk end-to-end.',
        'Menganalisis proses kurasi talenta dan menginisiasi inovasi fitur AI CV Analyzer & Job Connect yang memangkas waktu review hingga 80%.',
        'Menyusun FSD teknis untuk developer squad (5 orang) dengan tingkat penyelesaian sprint di atas 90% secara konsisten.',
      ],
    },
    {
      role: 'Product Manager (superalink.com)',
      company: 'Alterolabs (https://www.linkedin.com/company/altero-labs/)',
      period: 'April 2024 – Januari 2026',
      points: [
        'Memimpin pengembangan platform eSIM superalink.com (150+ negara), membukukan transaksi $9.000 pada bulan pertama.',
        'Menerapkan transformasi Agile/Scrum yang meningkatkan team velocity sebesar 25% dan kepatuhan SLA 100%.',
        'Merumuskan kriteria keberhasilan dan mengeksekusi peluncuran MVP produk dalam tenggat waktu ketat 3 bulan.',
      ],
    },
    {
      role: 'IT Project Manager',
      company: 'PT Bixbox Teknologi Perkasa (https://refactory.id/)',
      period: 'Januari 2023 – Februari 2025',
      points: [
        'Menyusun roadmap proyek menyeluruh, mengelola jadwal, ruang lingkup, dan anggaran biaya secara presisi.',
        'Menerapkan early warning system dan mitigasi risiko terstruktur, memangkas deviasi jadwal 20% dan dampak risiko 25%.',
        'Mengelola 100% change request bisnis dan menyelesaikan deliverable IT 10% lebih cepat dari jadwal yang ditentukan.',
      ],
    },
    {
      role: 'IT Support',
      company: 'Institut Teknologi Sumatera (ITERA)',
      period: 'Januari 2022 – Januari 2023',
      points: [
        'Menjaga keandalan infrastruktur jaringan dan hardware kampus dengan catatan uptime 100%.',
        'Mengembangkan dan mengimplementasikan kebijakan keamanan informasi untuk perlindungan data digital institusi.',
      ],
    },
  ];

  exps.forEach((exp) => {
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.5);
    doc.setTextColor(10, 25, 47);
    doc.text(exp.role, margin, y);

    doc.setFont('helvetica', 'normal');
    doc.setTextColor(37, 99, 235);
    const roleWidth = doc.getTextWidth(exp.role);
    doc.text(' | ' + exp.company, margin + roleWidth, y);

    doc.setFont('helvetica', 'italic');
    doc.setTextColor(100, 116, 139);
    const periodWidth = doc.getTextWidth(exp.period);
    doc.text(exp.period, pageWidth - margin - periodWidth, y);
    y += 4;

    doc.setFont('helvetica', 'normal');
    doc.setTextColor(51, 65, 85);
    exp.points.forEach((p) => {
      doc.text('•', margin + 2, y);
      const splitPoint = doc.splitTextToSize(p, contentWidth - 6);
      doc.text(splitPoint, margin + 6, y);
      y += splitPoint.length * 3.7;
    });
    y += 1.5;
  });

  // 4. Proyek Unggulan Terpilih
  addSectionTitle('Proyek Unggulan Terpilih');
  const projs = [
    'Integrasi Sistem Pembayaran Dealer Otomotif (Nasmoco x Bank Permata) — Memimpin integrasi IBOSS API Gateway, efisiensi transaksi manual naik 40%.',
    'Implementasi Odoo ERP (PT Virtus Facility Services) — Merancang sistem HRIS berbasis web terotomatisasi, memangkas hiring cycle 35%.',
    'Sistem Persenjataan & Ranpur IoT (PT Pindad) — Membangun arsitektur sensor & monitoring IoT real-time pada kendaraan tempur.',
    'USIMSA / Superalink (Global eSIM Platform) — Platform konektivitas global yang scalable dan beroperasi di 150+ negara.',
  ];

  projs.forEach((pj) => {
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(51, 65, 85);
    doc.text('•', margin + 2, y);
    const splitPj = doc.splitTextToSize(pj, contentWidth - 6);
    doc.text(splitPj, margin + 6, y);
    y += splitPj.length * 3.5;
  });
  y += 2;

  // 5. Pendidikan & Sertifikasi
  addSectionTitle('Pendidikan & Sertifikasi');
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.setTextColor(10, 25, 47);
  doc.text('Pendidikan:', margin, y);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(51, 65, 85);
  doc.text('Sarjana Teknik Informatika (S1), Institut Teknologi Sumatera (ITERA) | 2016 – 2021', margin + 22, y);
  y += 4.5;

  doc.setFont('helvetica', 'bold');
  doc.setTextColor(10, 25, 47);
  doc.text('Sertifikasi:', margin, y);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(51, 65, 85);
  doc.text('• IBM: Deep Learning using TensorFlow (Advanced)', margin + 22, y);
  y += 4;
  doc.text('• Alison (CPD): Certified Agile Project Management (Nilai: 100/100)', margin + 22, y);
  y += 4;
  doc.text('• Alison (CPD): Certified Scrum Master / CSM (Nilai: 91/100)', margin + 22, y);

  // Save the document directly using the browser download dialog
  doc.save('Muhammad_Wahyudi_CV.pdf');
}
