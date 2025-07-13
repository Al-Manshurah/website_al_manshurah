"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useRef } from "react";

export default function Navigation() {
  const [openMenu, setOpenMenu] = useState("");
  const closeTimer = useRef(null);

  const toggleMenu = (menu) => {
    clearTimeout(closeTimer.current);
    setOpenMenu(openMenu === menu ? "" : menu);
  };

  const handleMouseEnter = (menu) => {
    clearTimeout(closeTimer.current);
    setOpenMenu(menu);
  };

  const handleMouseLeave = () => {
    closeTimer.current = setTimeout(() => {
      setOpenMenu("");
    }, 500);
  };

  const dropdownClass =
    "absolute bg-white text-black rounded-xl shadow-xl mt-2 px-4 py-3 flex flex-col gap-2 min-w-[220px] transition-all duration-200 ease-out transform origin-top z-40";

  const parentBtnClass =
    "cursor-pointer inline-flex items-center gap-1 hover:text-green-300 transition";

  const arrow = <span className="text-xs">▼</span>;

  return (
    <header className="bg-green-700 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <Image src="/logo.png" alt="Logo" width={40} height={40} />
          <span className="font-bold text-lg tracking-wide">Yayasan Al Manshurah</span>
        </div>

        {/* Menu Navigation */}
        <nav className="flex gap-6 items-center relative z-50">
          {/* Beranda */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter("beranda")}
            onMouseLeave={handleMouseLeave}
          >
            <button onClick={() => toggleMenu("beranda")} className={parentBtnClass}>
              Beranda {arrow}
            </button>
            <div
              className={`${dropdownClass} ${
                openMenu === "beranda"
                  ? "opacity-100 scale-100 visible"
                  : "opacity-0 scale-95 invisible"
              }`}
            >
              <Link href="/" className="hover:text-green-700">Pendahuluan</Link>
              <Link href="/beranda/pengenalan" className="hover:text-green-700">Pengenalan Al Manshurah</Link>
              <Link href="/beranda/pengasuh" className="hover:text-green-700">Profil Pengasuh/Pengajar</Link>
            </div>
          </div>

          {/* KBM */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter("kbm")}
            onMouseLeave={handleMouseLeave}
          >
            <button onClick={() => toggleMenu("kbm")} className={parentBtnClass}>
              Kegiatan Da’wah (KBM) {arrow}
            </button>
            <div
              className={`${dropdownClass} ${
                openMenu === "kbm"
                  ? "opacity-100 scale-100 visible"
                  : "opacity-0 scale-95 invisible"
              }`}
            >
              <Link href="/kbm/ceramah">Ceramah</Link>
              <Link href="/kbm/kajian">Kajian/Jadwal</Link>
              <Link href="/kbm/kutub">Kutub</Link>
              <Link href="/kbm/tahunan">Kegiatan Tahunan</Link>
              <Link href="/kbm/qurban">Qurban</Link>
              <Link href="/kbm/ramadhan">Ramadhan</Link>
              <Link href="/kbm/fatwa">Fatwa/Tanya Jawab</Link>
            </div>
          </div>

          {/* Program */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter("program")}
            onMouseLeave={handleMouseLeave}
          >
            <button onClick={() => toggleMenu("program")} className={parentBtnClass}>
              Program Ekonomi Mandiri {arrow}
            </button>
            <div
              className={`${dropdownClass} ${
                openMenu === "program"
                  ? "opacity-100 scale-100 visible"
                  : "opacity-0 scale-95 invisible"
              }`}
            >
              <Link href="/program/madu" className="hover:text-green-700">Madu</Link>
            </div>
          </div>

          {/* Donasi */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter("donasi")}
            onMouseLeave={handleMouseLeave}
          >
            <button onClick={() => toggleMenu("donasi")} className={parentBtnClass}>
              Donasi & Laporan Keuangan {arrow}
            </button>
            <div
              className={`${dropdownClass} ${
                openMenu === "donasi"
                  ? "opacity-100 scale-100 visible"
                  : "opacity-0 scale-95 invisible"
              }`}
            >
              <Link href="/donasi/laporan" className="hover:text-green-700">Laporan</Link>
              <Link href="/donasi/gaji" className="hover:text-green-700">Gaji Pengajar</Link>
              <Link href="/donasi/waqaf" className="hover:text-green-700">Rencana Tanah Waqaf</Link>
            </div>
          </div>

          {/* Tentang */}
          <Link href="/tentang" className="hover:text-green-300 transition">
            Tentang
          </Link>
        </nav>

        {/* Hubungi Kami Button */}
        <Link
          href="/hubungi"
          className="bg-white text-green-700 px-4 py-2 rounded-full font-medium hover:bg-green-100 transition shadow"
        >
          Hubungi Kami
        </Link>
      </div>
    </header>
  );
}
