'use client';
import Navigation from '@/components/Navigation';
import { getWhatsAppLink } from '@/utils/utilStrings';

export default function TentangPage() {
  const values = [
    {
      icon: "📖",
      title: "Ilmu Syar'i",
      description: "Berlandaskan pada Al-Qur'an, Hadits, dan pemahaman salafus shalih"
    },
    {
      icon: "🤲",
      title: "Isti'anah kepada Allah",
      description: "Memohon pertolongan hanya kepada Allah dalam setiap urusan"
    },
    {
      icon: "📚",
      title: "Kurikulum Rabbaniyyin",
      description: "Pendidikan sistematis dari hal-hal dasar sebelum hal-hal yang rumit dan pelik"
    },
    {
      icon: "💎",
      title: "Istiqamah",
      description: "Konsisten dalam dakwah dan pembinaan umat"
    },
    {
      icon: "🌟",
      title: "Amanah",
      description: "Terpercaya dalam mengelola program dan dana umat"
    },
    {
      icon: "🤝",
      title: "Ukhuwah Islamiyah",
      description: "Membangun persaudaraan yang kokoh sesama muslim"
    }
  ];

  const programs = [
    { icon: "📚", title: "Kajian Rutin", count: "50+", desc: "kajian per bulan" },
    { icon: "👨‍👩‍👧‍👦", title: "Jamaah Aktif", count: "500+", desc: "jamaah terdaftar" },
    { icon: "🕌", title: "Tahun Berdiri", count: "2010", desc: "melayani umat" },
    { icon: "📖", title: "Kitab Dipelajari", count: "30+", desc: "kitab referensi" }
  ];

  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-primary text-white !pt-24 !pb-32">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="relative max-w-6xl mx-auto px-6">
          <div className="text-center">
            <div className="inline-block mb-4 px-6 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30">
              <span className="text-sm font-semibold tracking-wide uppercase">Tentang Kami</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 fKufam">
              Halaqah Ilmu Al-Manshurah
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Halaqah ilmu yang berkomitmen dalam penyebaran ilmu syar'i, pembinaan masyarakat,
              dan penguatan dakwah Islam dengan pendekatan ilmu, hikmah, dan kelembutan
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Stats Section */}
      <section className="!py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {programs.map((item, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-primary/5 to-accent1/5 rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 border-primary/10 hover:border-primary/30"
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{item.icon}</div>
                <div className="text-4xl font-bold text-primary mb-2 fKufam">{item.count}</div>
                <div className="text-sm font-semibold text-gray-800 mb-1">{item.title}</div>
                <div className="text-xs text-gray-600">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="!py-20 bg-gradient-to-br from-white to-primary/5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative">
              <div className="aspect-[4/3] bg-gradient-primary rounded-3xl overflow-hidden shadow-2xl">
                <div className="w-full h-full flex items-center justify-center text-white text-6xl">
                  🕌
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gold rounded-full blur-3xl opacity-30"></div>
            </div>

            {/* Content */}
            <div>
              <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full">
                <span className="text-sm font-semibold text-primary">Profil Kami</span>
              </div>
              <h2 className="text-4xl font-bold text-primary mb-6 fKufam">
                Meniti Jalan Salafus Shalih
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Al-Manshurah adalah Halaqah Ilmu yang didirikan dengan tujuan mulia untuk menyebarkan
                ilmu syar'i yang benar, berdasarkan Al-Qur'an dan Sunnah dengan pemahaman salafus shalih.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Kami menyelenggarakan berbagai kegiatan seperti kajian rutin, pengajian tahunan, distribusi fatwa,
                penyuluhan agama, serta program ekonomi syariah untuk mendukung kemandirian dakwah.
              </p>
              <p className="text-gray-700 leading-relaxed mb-8">
                Dengan komitmen yang kuat, kami berusaha membangun masyarakat yang paham agama, berakhlak mulia,
                dan memiliki semangat ukhuwah Islamiyah yang tinggi.
              </p>

              <div className="flex gap-4 flex-wrap">
                <button className="bg-gradient-primary text-white px-8 py-4 rounded-xl font-bold hover:shadow-xl transition-all duration-300 hover:scale-105">
                  Lihat Program Kami
                </button>
                <button className="bg-white text-primary border-2 border-primary px-8 py-4 rounded-xl font-bold hover:bg-primary hover:text-white transition-all duration-300">
                  Hubungi Kami
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visi Misi Section */}
      < section className="!py-20 bg-white" >
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full">
              <span className="text-sm font-semibold text-primary">Arah & Tujuan</span>
            </div>
            <h2 className="text-4 xl font-bold text-primary mb-4 fKufam">Visi & Misi</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Komitmen kami dalam membangun peradaban Islam yang gemilang
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Visi */}
            <div className="bg-gradient-to-br from-primary to-secondary rounded-3xl p-10 text-white shadow-2xl hover:scale-[1.02] transition-all duration-300">
              <div className="text-6xl mb-6">🎯</div>
              <h3 className="text-3xl font-bold mb-6 fKufam">Visi</h3>
              <p className="text-lg leading-relaxed text-white/90">
                Menjadi pusat halaqah ilmu syar'i yang mandiri, berpengaruh, dan berdaya saing
                dalam menyebarkan dakwah Islam dengan pendekatan ilmu, hikmah, dan kelembutan.
              </p>
            </div>

            {/* Misi */}
            <div className="bg-white rounded-3xl p-10 shadow-2xl border-2 border-primary/10 hover:border-primary/30 hover:scale-[1.02] transition-all duration-300">
              <div className="text-6xl mb-6">✨</div>
              <h3 className="text-3xl font-bold mb-6 text-primary fKufam">Misi</h3>
              <ul className="space-y-4">
                <li className="flex gap-3 items-start">
                  <span className="text-2xl text-primary">•</span>
                  <span className="text-gray-700">
                    Menyelenggarakan kegiatan dakwah dan kajian rutin yang terpadu dan berkelanjutan
                  </span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-2xl text-primary">•</span>
                  <span className="text-gray-700">
                    Menumbuhkan semangat ekonomi mandiri berbasis syariah melalui program komunitas
                  </span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-2xl text-primary">•</span>
                  <span className="text-gray-700">
                    Memberdayakan masyarakat melalui pendidikan, fatwa, dan konsultasi keagamaan
                  </span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-2xl text-primary">•</span>
                  <span className="text-gray-700">
                    Menjalin ukhuwah Islamiyah yang harmonis dan inklusif di kalangan umat
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section >

      {/* Values Section */}
      < section className="!py-20 bg-gradient-to-br from-primary/5 to-white" >
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full">
              <span className="text-sm font-semibold text-primary">Nilai-Nilai Kami</span>
            </div>
            <h2 className="text-4xl font-bold text-primary mb-4 fKufam">Prinsip & Nilai</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Landasan kokoh yang menjadi pedoman dalam setiap langkah dakwah kami
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
              >
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">{value.icon}</div>
                <h3 className="text-xl font-bold text-primary mb-3">{value.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section >

      {/* CTA Section */}
      <section className="!py-20 bg-gradient-primary text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 fKufam">
            Ingin Bertanya Mengenai Sesuatu atau Mengenal Kami Lebih Dekat?
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
            Apabila ada yang ingin ditanyakan atau ingin ikut berkontribusi dalam dakwah,
            silakan hubungi kami melalui WhatsApp atau kirim pesan ke email kami
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href={getWhatsAppLink('Assalamualaikum, saya ingin bertanya tentang Al-Manshurah')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-primary px-10 py-4 rounded-xl font-bold hover:bg-gold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              <span>💬</span>
              Hubungi via WhatsApp
            </a>
            <a
              href="mailto:info@almanshurah.org"
              className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border-2 border-white text-white px-10 py-4 rounded-xl font-bold hover:bg-white hover:text-primary transition-all duration-300"
            >
              <span>📧</span>
              Kirim Email
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
