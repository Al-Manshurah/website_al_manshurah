"use client";

import Navigation from "@/components/Navigation";
import Link from "next/link";
import Image from "next/image";
import { RiInformationLine } from "@remixicon/react";

export default function TentangPage() {
  return (
    <>
      <Navigation />
      <section className="bg-gradient-to-br from-green-50 via-white to-green-100 py-16 px-6 text-gray-800">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-6 flex items-center gap-2 text-green-700">
            Tentang Al Manshurah
          </h1>

          <p className="text-lg leading mb-6">
            Al Manshurah adalah Halaqah Ilmu yang berkomitmen terhadap
            penyebaran ilmu syar'i, pembinaan masyarakat, dan penguatan dakwah
            Islam.
          </p>

          <p>
            Sejak didirikan, kami mengupayakan berbagai kegiatan seperti kajian
            rutin, pengajian tahunan, distribusi fatwa dan penyuluhan, serta
            program-program ekonomi syariah seperti penjualan madu dan wakaf
            tanah untuk pengembangan dakwah.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 px-6 text-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-extrabold text-green-700 mb-8 text-center">
            Visi & Misi
          </h2>

          {/* Visi */}
          <div className="mb-10">
            <h3 className="text-xl font-bold text-green-600 mb-3">Visi</h3>
            <p className="text-lg leading-relaxed">
              Menjadi pusat halaqah ilmu syar’i yang mandiri, berpengaruh, dan
              berdaya saing dalam menyebarkan dakwah Islam dengan pendekatan
              ilmu, hikmah, dan kelembutan.
            </p>
          </div>

          {/* Misi */}
          <div>
            <h3 className="text-xl font-bold text-green-600 mb-3">Misi</h3>
            <ul className="list-disc list-inside space-y-3 text-lg">
              <li>
                Menyelenggarakan kegiatan dakwah dan kajian rutin yang terpadu
                dan berkelanjutan.
              </li>
              <li>
                Menumbuhkan semangat ekonomi mandiri berbasis syariah melalui
                program komunitas.
              </li>
              <li>
                Memberdayakan masyarakat melalui pendidikan, fatwa, dan
                konsultasi keagamaan.
              </li>
              <li>
                Menjalin ukhuwah Islamiyah yang harmonis dan inklusif di
                kalangan umat.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
