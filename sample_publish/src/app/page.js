"use client";

import Navigation from "@/components/Navigation";
import Link from "next/link";
import Image from "next/image";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PosterSection from "./SectionPsoter";
import SectionHero from "@/app/Beranda/SectionHero";
import SectionNyantriNonAsrama from "@/app/Beranda/SectionNyantriNonAsrama";
import SectionNyantriSepanjangHayat from "@/app/Beranda/SectionNyantriSepanjangHayat";
import SectionPaketKomplitBelajarAgamaIslam from "@/app/Beranda/SectionPaketKomplitBelajarAgamaIslam";
import SectionNyantriSambilMempraktikkanPelajaran from "@/app/Beranda/SectionNyantriSambilMempraktikkanPelajaran";
import SectionNggaAdaAlasanNggaNyantri from "@/app/Beranda/SectionNggaAdaAlasanNggaNyantri";
import SectionHubungiKami from "@/app/Beranda/SectionHubungiKami";

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="mx-auto">
        {/* Hero Pengenalan */}
        <SectionHero />

        {/* Nyantri Non-Asrama di Pagi & Malam */}
        <SectionNyantriNonAsrama />

        {/* Nyantri Sepanjang Hayat */}
        <SectionNyantriSepanjangHayat />

        {/* Paket Komplit Belajar Agama Islam */}
        <SectionPaketKomplitBelajarAgamaIslam />

        {/* Kajian Kitab Rutin */}
        <SectionNyantriSambilMempraktikkanPelajaran />

        {/* Ngga Ada Alasan Ngga Nyantri */}
        <SectionNggaAdaAlasanNggaNyantri />

        {/* Hubungi Kami */}
        <SectionHubungiKami />
       
      </main>
    </>
  );
}
