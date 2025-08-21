"use client";

import Navigation from "@/components/Navigation";
import Link from "next/link";
import Image from "next/image";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PosterSection from "./SectionPsoter";
import { RiArrowRightLine } from "@remixicon/react";
import BtnCTA1 from '@/components/BtnCTA1';

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
      <main className="space-y-12 mx-auto">
        {/* Hero Pengenalan */}

        <section className="bg-gradient-primary">
          <div className="relative bg-[url('/images/hero-bg.jpg')] bg-cover bg-center text-white">
            {/* <div className="bg-black/50 absolute inset-0" /> */}
            <div className="z-[1] absolute mx-auto inset-0 bg-gradient-primary opacity-80"></div>
            <div className="w-2/3 mx-auto px-4 relative  z-[2] text-center">
              <div className="w-full mx-auto">
                <h1 className="text-h3 mb-3">
                  Nyantri Sunnah di Kota Santri!
                </h1>
                <p className="text-subtitle-1 opacity-[0.64] mb-9">
                  Siapa saja bisa belajar Agama Islam dari dasar sesuai tuntunan
                  Al Qur’an dan Sunnah berdasarkan pemahaman Salafush Shaleh
                  secara runtut dan sistematis walaupun angin kesibukan kuliah
                  dan bekerja telah menerpa.
                </p>
               <BtnCTA1 href="#tentang" label="Lihat Jadwal Kajian" />
              </div>

              <div className="w-full h-full"></div>
            </div>
          </div>
        </section>

        {/* Tentang */}
        <section
          className="mx-auto max-w-7xl py-16 px-6 bg-gray-50"
          id="tentang"
        >
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4">
              Selamat Datang di Al Manshurah
            </h2>
            <p className="text-gray-700 leading-relaxed text-justify">
              Assalamu’alaikum warahmatullahi wabarakatuh. Dengan penuh rasa
              syukur dan semangat berbagi, kami menyambut Anda di website resmi
              Yayasan Pendidikan Islam Al Manshurah.
              <br />
              <br />
              Yayasan ini hadir sebagai wujud komitmen kami dalam membina umat
              melalui ilmu, amal, dan akhlak mulia, berlandaskan pemahaman Ahlus
              Sunnah wal Jama'ah. Kegiatan kami mencakup pendidikan santri,
              kajian keislaman, serta berbagai program sosial yang dirancang
              untuk membawa keberkahan dan manfaat nyata bagi masyarakat.
              <br />
              <br />
              Kami percaya bahwa setiap langkah kecil dalam dakwah dan
              pendidikan memiliki dampak besar. Semoga kunjungan Anda ke laman
              ini menjadi pintu awal silaturahmi dan sinergi dalam kebaikan.
              Selamat menjelajah dan mengenal lebih dekat Al Manshurah.
              <br />
              Wassalamu’alaikum warahmatullahi wabarakatuh.
            </p>
          </div>
        </section>

        {/* Pengenalan */}
        <section className="py-16 px-6">
          <div className="mx-auto max-w-7xl grid md:grid-cols-2 gap-10 items-center">
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

        {/* Kajian Kitab Rutin */}
        <section className="py-16 px-6 bg-white">
          <div className="mx-auto max-w-7xl text-center">
            <h2 className="text-3xl font-bold mb-4">
              Kajian Kitab Rutin Terbuka untuk Umum
            </h2>
            <p className="text-gray-700 mb-10 text-lg">
              Dibuka untuk semua kalangan: pelajar, mahasiswa, pekerja, dan ibu
              rumah tangga. Dilaksanakan empat kali dalam sepekan dengan materi
              terstruktur dan berkesinambungan.
            </p>
            <div className="grid md:grid-cols-3 gap-8 text-left">
              <div className="bg-gray-50 p-6 rounded-xl shadow-md">
                <h3 className="font-semibold text-lg mb-2">
                  📚 Bertahap dan Terarah
                </h3>
                <p className="text-gray-600 text-sm">
                  Materi kajian disusun secara urut dan sistematis agar mudah
                  dipahami dan relevan untuk berbagai jenjang pemahaman.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl shadow-md">
                <h3 className="font-semibold text-lg mb-2">
                  🧠 Fondasi Ilmu yang Kuat
                </h3>
                <p className="text-gray-600 text-sm">
                  Fokus utama adalah memperkuat dasar-dasar ilmu agama, termasuk
                  akidah, fikih, dan adab berdasarkan kitab-kitab rujukan.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl shadow-md">
                <h3 className="font-semibold text-lg mb-2">
                  🤝 Bekal Samudra Kehidupan
                </h3>
                <p className="text-gray-600 text-sm">
                  Kajian ini ditujukan sebagai bekal ilmu dan pemahaman dalam
                  menjalankan peran di masyarakat secara bermanfaat dan
                  bertanggung jawab.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Program Unggulan */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="mx-auto max-w-7xl text-center">
            <h2 className="text-3xl font-bold mb-8">Program Unggulan Kami</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Dakwah */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex justify-center mb-4">
                  <div className="bg-green-100 rounded-full p-4">
                    <svg
                      className="w-8 h-8 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 6v6l4 2"
                      />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">Dakwah</h3>
                <p className="text-gray-700">
                  Mengajak masyarakat untuk memahami dan mengamalkan nilai-nilai
                  Islam secara utuh, dengan pendekatan yang santun dan
                  berlandaskan pada Al-Qur’an dan Sunnah.
                </p>
              </div>

              {/* Sosial */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex justify-center mb-4">
                  <div className="bg-green-100 rounded-full p-4">
                    <svg
                      className="w-8 h-8 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 20h5v-2a2 2 0 00-2-2h-1a2 2 0 00-2 2v2zM9 20h6v-2a2 2 0 00-2-2H11a2 2 0 00-2 2v2zM7 20H2v-2a2 2 0 012-2h1a2 2 0 012 2v2zM12 12a5 5 0 100-10 5 5 0 000 10z"
                      />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">Sosial</h3>
                <p className="text-gray-700">
                  Memberikan kontribusi nyata dalam kehidupan masyarakat melalui
                  kegiatan kemanusiaan, bantuan ekonomi, serta program
                  pemberdayaan yang berkelanjutan dan penuh tanggung jawab.
                </p>
              </div>

              {/* Pendidikan */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex justify-center mb-4">
                  <div className="bg-green-100 rounded-full p-4">
                    <svg
                      className="w-8 h-8 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 8h16M4 16h16M4 12h16M4 20h9M12 4h9"
                      />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">Pendidikan</h3>
                <p className="text-gray-700">
                  Menyelenggarakan pembinaan dan pendidikan Islam yang
                  mengutamakan ilmu, akhlak, dan pengembangan potensi generasi
                  muda agar tumbuh menjadi pribadi yang bermanfaat.
                </p>
              </div>
            </div>

            <div className="mt-8">
              <Link
                href="/program"
                className="inline-block bg-green-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-700 transition"
              >
                Lihat Detail Program
              </Link>
            </div>
          </div>
        </section>

        {/* Profil Pengasuh */}
        <section className="py-16 px-6 bg-gray-100">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-3xl font-bold text-center mb-8">
              Profil Pengasuh
            </h2>
            <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-8 bg-white shadow-lg rounded-xl p-6 max-w-4xl mx-auto">
              {/* Teks di kiri */}
              <div className="text-center md:text-left md:w-2/3">
                <h3 className="font-semibold text-xl mb-2">
                  Ustadz Ahmad Zain
                </h3>
                <p className="text-green-700 text-sm mb-4">Pengasuh Yayasan</p>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Beliau merupakan lulusan Pondok Pesantren Darul Hadits, Yaman,
                  dan saat ini mengemban amanah sebagai pengasuh utama Yayasan
                  Al Manshurah. Dengan landasan keilmuan yang kokoh serta
                  pendekatan dakwah yang bijaksana dan berbasis nilai, beliau
                  membimbing kegiatan yayasan secara konsisten demi kemaslahatan
                  umat.
                </p>
              </div>

              {/* Ikon di kanan */}
              <div className="bg-green-100 rounded-full p-4">
                <svg
                  className="w-14 h-14 text-green-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5.121 17.804A11.938 11.938 0 0012 20c2.485 0 4.79-.758 6.879-2.05a2 2 0 10-2.757-2.817A8.003 8.003 0 0112 18a8.003 8.003 0 01-4.122-1.15 2 2 0 10-2.757 2.954zM12 12a4 4 0 100-8 4 4 0 000 8z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </section>

        {/* Poster Nashihat */}
        <PosterSection />

        {/* CTA Donasi */}
        <section className="mx-auto max-w-7xl py-16 px-6 rounded-[20px] text-center bg-green-700 text-white">
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
              Salurkan Infaq Jariyah Terbaik Anda
            </Link>
            {/* <Link
              href="/tentang"
              className="bg-white text-green-700 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
            >
              Hubungi
            </Link> */}
          </div>
        </section>
      </main>
    </>
  );
}
