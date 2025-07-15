"use client";

import dynamic from "next/dynamic";
import Image from "next/image";

// Load Slider secara dinamis agar tidak error di SSR
const ReactSlickSlider = dynamic(() => import("react-slick"), { ssr: false });

// Panah Kanan
const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-green-600 hover:bg-green-700 text-white p-3 rounded-full shadow-lg"
  >
    ▶
  </button>
);

// Panah Kiri
const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-green-600 hover:bg-green-700 text-white p-3 rounded-full shadow-lg"
  >
    ◀
  </button>
);

export default function PosterSection() {
  // Daftar poster yang akan ditampilkan
  const posterList = Array.from({ length: 15 }, (_, i) => ({
    img: `/images/poster${i + 1}.jpg`,
    alt: `Poster Nashihat ${i + 1}`,
  }));

  // Konfigurasi Slider
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 768, // Tablet
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480, // Mobile
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-3xl font-bold text-center mb-8">
          Poster Nashihat Halaqah Al Manshurah
        </h2>
        <div className="relative">
          <ReactSlickSlider {...settings}>
            {posterList.map((poster, i) => (
              <div key={i} className="px-2">
                <div className="bg-white shadow-md rounded-xl overflow-hidden">
                  <Image
                    src={poster.img}
                    alt={poster.alt}
                    width={400}
                    height={600}
                    className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
              </div>
            ))}
          </ReactSlickSlider>
        </div>
      </div>
    </section>
  );
}
