"use client";

import Navigation from "@/components/Navigation";
import Link from "next/link";
import Image from "next/image";
import { RiInformationLine } from "@remixicon/react";

export default function TentangPage() {
  return (
    <>
      <Navigation />
      <section className="bg-gradient-primary aspect-[5/8] md:aspect-[8/3] c-hero">
        <div className="relative bg-[url('/images/hero-bg.jpg')] bg-cover bg-center text-white">
          <div className="z-[1] absolute mx-auto inset-0 bg-gradient-primary opacity-80"></div>
          <div className="w-full md:w-4/5 mx-auto px-0 md:px-4 relative z-[2] text-center">
            <div className="w-full mx-auto">
              <h1 className="text-h3 mb-3">Tentang Al Manshurah</h1>
              <p className="text-subtitle-1 opacity-[0.64] mb-9">
                Al Manshurah adalah Halaqah Ilmu yang berkomitmen terhadap
                penyebaran ilmu syar'i, pembinaan masyarakat, dan penguatan
                dakwah Islam.
              </p>
            </div>
            <div className="w-full h-full"></div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 px-6 text-gray-800">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white py-16 px-6 text-gray-800 flex gap-2 items-center justify-center">
            <div className="bg-primary aspect-[8/8] w-1/2 rounded-[16px]"></div>
            <p className="text-subtitle-1 mb-6 text-center w-1/2 items-center justify-center h-full">
              Insyaa Allah lami senantiasa mengupayakan berbagai kegiatan seperti kajian
              rutin, pengajian tahunan, distribusi fatwa dan penyuluhan, serta
              program-program ekonomi syariah seperti penjualan madu untuk pengembangan dakwah.
            </p>
          </div>

          <div className="bg-white py-16 px-6 text-gray-800 flex">
            <div className="w-1/2 bg-white py-16 px-6 text-gray-800 flex">
              <h2 className="text-h3 text-primary mb-8 text-center mt-12">
                Visi & Misi
              </h2>
            </div>

            <div className="w-1/2 bg-white py-16 px-6 text-gray-800 text-center md:text-left">
              {/* Visi */}
              <div className="mb-10  text-center md:text-left">
                <h3 className="text-subtitle-2 text-primary mb-3">Visi</h3>
                <p className="text-subtitle-1 leading-relaxed">
                  Menjadi pusat halaqah ilmu syar’i yang mandiri, berpengaruh, dan
                  berdaya saing dalam menyebarkan dakwah Islam dengan pendekatan
                  ilmu, hikmah, dan kelembutan.
                </p>
              </div>

              {/* Misi */}
              <div className=" text-center md:text-left">
                <h3 className="text-subtitle-2 text-primary mb-3">Misi</h3>
                <ul className="space-y-3 text-subtitle-1 inline-block text-left">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    Menyelenggarakan kegiatan dakwah dan kajian rutin yang terpadu
                    dan berkelanjutan.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    Menumbuhkan semangat ekonomi mandiri berbasis syariah melalui
                    program komunitas.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    Memberdayakan masyarakat melalui pendidikan, fatwa, dan
                    konsultasi keagamaan.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    Menjalin ukhuwah Islamiyah yang harmonis dan inklusif di
                    kalangan umat.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
