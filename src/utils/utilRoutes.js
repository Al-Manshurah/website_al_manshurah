import { RiArrowDropDownLine, RiCustomerServiceLine} from '@remixicon/react';

export const utilRoutes = [
  { name: "Beranda", href: "/", exact: true },
  {
    name: "KBM",
    href: "/kbm",
    submenu: [
      { label: "Ceramah", href: "/kbm/ceramah" },
      { label: "Kajian/Jadwal", href: "/kbm/kajian" },
      { label: "Kutub", href: "/kbm/kutub" },
      { label: "Kegiatan Tahunan", href: "/kbm/tahunan" },
      { label: "Qurban", href: "/kbm/qurban" },
      { label: "Ramadhan", href: "/kbm/ramadhan" },
      { label: "Fatwa/Tanya Jawab", href: "/kbm/fatwa" },
    ],
  },
  {
    name: "Program Ekonomi Mandiri",
    href: "/program",
    submenu: [{ label: "Madu", href: "/program/madu" }],
  },
  {
    name: "Donasi & Laporan Keuangan",
    href: "/donasi",
    submenu: [
      { label: "Laporan", href: "/donasi/laporan" },
      { label: "Gaji Pengajar", href: "/donasi/gaji" },
      { label: "Rencana Tanah Waqaf", href: "/donasi/waqaf" },
    ],
  },
  { name: "Tentang", href: "/tentang" },
  {
    name: "Hubungi Kami",
    href: "/hubungi",
    isButton: true,
    icon: <RiCustomerServiceLine size={20} className="mr-1" />
  },
];
