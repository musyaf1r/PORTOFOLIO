// Semua isi portofolio ada di file ini. Ubah teks di sini, tampilan ikut berubah.

export const profile = {
  name: "Satrya Khanzaz",
  fullName: "Satrya Khanzaz Al-Faruq Kurniawan",
  nickname: "AL",
  role: "Student developer di SMK Telkom Malang",
  lede: "Saya membangun aplikasi web yang bersih dan berfungsi dengan React, Next.js, dan TypeScript.",
  about: [
    "Saya siswa SMK Telkom Malang yang paling banyak mengerjakan sisi frontend, tapi nyaman menyentuh seluruh stack. Saya membangun dengan React, Next.js, dan TypeScript, memakai Prisma dan Neon untuk database serta Clerk untuk autentikasi.",
    "Saya suka kode yang rapi dan antarmuka yang bisa dipahami tanpa buku panduan. Sekarang saya mengasah kemampuan lewat proyek nyata, dan terbuka untuk kolaborasi, masukan, dan apa pun yang layak dibuat.",
  ],
  facts: [
    { label: "Sekolah", value: "SMK Telkom Malang" },
    { label: "Lokasi", value: "Malang, Jawa Timur" },
    { label: "Fokus", value: "Frontend, React dan Next.js" },
    { label: "Status", value: "Terbuka untuk kolaborasi" },
  ],
};

export type Project = {
  name: string;
  description: string;
  tags: string[];
  href: string;
  status?: string;
};

export const projects: Project[] = [
  {
    name: "Persani",
    description: "PasarTani hadir untuk mengatasi tantangan mendasar dalam rantai pasok pertanian dan literasi agroteknologi di Indonesia.",
    tags: ["NEXT.js", "React", "TypeScript", "Prisma", "PostgreSQL", "Clerk"],
    href: "https://github.com/musyaf1r/lomba-prisma-fest",
    status: "Lomba Prisma Fest",
  },
  {
    name: "English-Learning",
    description: "Aplikasi web untuk belajar bahasa Inggris.",
    tags: ["NEXT.js", "React", "TypeScript"],
    href: "https://github.com/musyaf1r/web-belajar-inggris",
    status: "Project Permintaan",
  },
  {
    name: "Learning English",
    description: "Project untuk membuat aplikasi web belajar bahasa Inggris.",
    tags: ["NEXT.js", "React", "TypeScript"],
    href: "https://github.com/musyaf1r/web-belajar-b-ingris",
    status: "Project Permintaan",
  },
];

export const stack = [
  {
    title: "Bahasa pemrograman",
    items: ["TypeScript", "JavaScript", "Java", "PHP", "Python", "SQL"],
  },
  {
    title: "Frontend",
    items: ["React", "Next.js", "TypeScript", "JavaScript", "HTML", "CSS", "shadcn/ui", "Figma"],
  },
  {
    title: "Backend dan data",
    items: ["Prisma", "PostgreSQL", "Neon", "MySQL", "Clerk", "Java"],
  },
  {
  title: "Alat kerja",
  items: ["Git", "GitHub", "Vercel", "Figma", "VS Code"],
},
];

export const contacts = [
  { label: "GitHub", handle: "@musyaf1r", href: "https://github.com/musyaf1r" },
  { label: "Instagram", handle: "@faruq04_", href: "https://instagram.com/alfaruq04_" },
  { label: "WhatsApp", handle: "+62 831-3009-8468", href: "https://wa.me/6283130098468" },
];
