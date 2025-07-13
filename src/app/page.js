'use client';

import Navigation from "@/components/Navigation";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const ustadzList = [
    {
      name: "Ustadz Ahmad Zain",
      role: "Ketua Yayasan",
      img: "/images/ustadz1.jpg",
    },
    {
      name: "Ustadzah Siti Maryam",
      role: "Pengajar Tahfidz",
      img: "/images/ustadzah1.jpg",
    },
    {
      name: "Ustadz Farid Syah",
      role: "Pembina Kajian",
      img: "/images/ustadz2.jpg",
    },
  ];

  return (
    <>
      <Navigation />
      <main className="p-6 space-y-12 max-w-5xl mx-auto">
        {/* Pendahuluan */}
        <section>
          <h1 className="text-3xl font-bold mb-2 text-green-800">
            Pendahuluan
          </h1>
          <p className="text-gray-700 leading-relaxed">
            Yayasan Pendidikan Islam Al Manshurah adalah lembaga non-profit yang
            didirikan untuk mengembangkan pendidikan dan dakwah Islam
            berdasarkan Al-Qur&apos;an dan Sunnah. Kami berkomitmen untuk mencetak
            generasi yang berakhlak mulia, berilmu, dan bermanfaat bagi umat.
          </p>
        </section>

        {/* Hero Pengenalan */}
        <section className="relative bg-[url('/images/hero-bg.jpg')] bg-cover bg-center text-white py-20 px-6 text-center">
          <div className="bg-black/50 absolute inset-0" />
          <div className="relative z-10 max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Yayasan Pendidikan Islam Al Manshurah
            </h1>
            <p className="text-lg md:text-xl mb-6">
              Membina umat dengan ilmu, amal, dan akhlak mulia
            </p>
            <a
              href="#tentang"
              className="inline-block bg-green-600 hover:bg-green-700 transition px-6 py-3 rounded-full font-semibold shadow-md"
            >
              Pelajari Lebih Lanjut
            </a>
          </div>
        </section>

        {/* Tentang */}
        <section className="py-16 px-6 bg-gray-50" id="tentang">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4">Pendahuluan</h2>
            <p className="text-gray-700 leading-relaxed text-justify">
              Yayasan Al Manshurah didirikan untuk memperkuat peran dakwah Islam
              yang berlandaskan pemahaman Ahlus Sunnah wal Jama&apos;ah. Kegiatan
              utamanya meliputi pendidikan, kajian keislaman, dan program
              sosial. Dengan dukungan para pengasuh dan masyarakat, Al Manshurah
              terus berupaya menebarkan manfaat secara konsisten dan
              terstruktur.
            </p>
          </div>
        </section>

        {/* Pengenalan */}
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
            <Image
              src="/images/pondok.jpg"
              alt="Pondok Al Manshurah"
              width={600}
              height={400}
              className="rounded-xl shadow-lg w-full h-auto object-cover"
            />
            <div>
              <h2 className="text-3xl font-bold mb-4">
                Pengenalan Al Manshurah
              </h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>
                  <strong>Visi:</strong> Mencetak generasi berilmu dan berakhlak
                </li>
                <li>
                  <strong>Misi:</strong> Menyebarkan dakwah melalui pendidikan
                  dan kegiatan sosial
                </li>
                <li>
                  <strong>Fokus:</strong> Kajian keislaman, pendidikan santri,
                  pelatihan ekonomi mandiri
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Profil Pengajar */}
        <section className="py-16 px-6 bg-gray-100">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">
              Profil Pengasuh &amp; Pengajar
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
              {ustadzList.map((u, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl shadow-lg p-4 text-center"
                >
                  <Image
                    src={u.img}
                    alt={u.name}
                    width={112}
                    height={112}
                    className="mx-auto rounded-full object-cover mb-4"
                  />
                  <h3 className="font-semibold text-lg">{u.name}</h3>
                  <p className="text-green-700 text-sm">{u.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Donasi */}
        <section className="py-16 px-6 text-center bg-green-700 text-white">
          <h2 className="text-3xl font-bold mb-4">
            Mari Bersama Membangun Generasi Islami
          </h2>
          <p className="mb-6">
            Salurkan donasi Anda atau bergabung dalam program sosial dan
            pendidikan kami
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link
              href="/donasi/laporan"
              className="bg-white text-green-700 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
            >
              Donasi Sekarang
            </Link>
            <Link
              href="/tentang"
              className="bg-white text-green-700 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
            >
              Tentang Kami
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
