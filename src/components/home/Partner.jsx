"use client"
import { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Image from 'next/image';

const partners = [
  "/logo.png",
  "/logo.png",
  "/logo.png",
  "/logo.png",
  "/logo.png",
  "/logo.png",
  "/logo.png",
];

export default function PartnerLogos() {
  useEffect(() => {
    // Optional: You can configure Swiper options here
  }, []);

  return (
    <div className="relative">
      <Swiper
        spaceBetween={30}
        slidesPerView={4}
        loop={true}
        autoplay={{ delay: 100, disableOnInteraction: false }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
        className="partner-swiper"
      >
        {partners.map((logo, index) => (
          <SwiperSlide key={index} className="flex items-center justify-center">
            <Image src={logo} alt={`Partner Logo ${index + 1}`} className="w-32 h-auto" width={100} height={50}/>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
