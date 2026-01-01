// src/components/SectionHubungiKami.jsx
"use client";

import Link from "next/link";
import { RiWhatsappLine } from "@remixicon/react";
import ItemIllustration1 from "@/components/ItemIllustration1";
import BtnCTA1 from "@/components/BtnCTA1";

export default function SectionHubungiKami({ label, className = "" }) {
  return (
    // <section className="bg-base">
    <section className="bg-base text-base">
      <div className="max-w-7xl mx-auto ">
        <div className="flex justify-between gap-0 bg-gradient-primary p-20 rounded-[40px]">
          <div className="flex flex-col">
            <h3 className="text-h1 mb-2 italic">
              Jangan Sia-Siakan Sisa Umur Ini Lagi
            </h3>
            <div className="mb-[64px] text-subtitle-2 opacity-[0.72]">
              Umur kita sudah tidak lama lagi, bekal apa yang sudah kita
              siapkan?
            </div>
            <div className="flex justify-start items-start gap-9">
              <BtnCTA1 href="#tentang" label="Lihat Jadwal Kajian" className="!mx-0 bg-accent2 h-full" />
              <BtnCTA1 href="#hubungi_kami" label="Kontak Person" icon={<RiWhatsappLine />} isOutlined={true} className="!mx-0" />
            </div>
          </div>

          <div className="self-center bg-base !h-[280px] !w-[280px] min-h-[280px] min-w-[280px] rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
