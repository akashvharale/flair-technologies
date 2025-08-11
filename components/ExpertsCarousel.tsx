// components/ExpertsCarousel.tsx
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const experts = [
  {
    name: "Veera",
    skill: "Tableau",
    experience: "10 Years Experience",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIu7sb1F3f7aCt0WfRMyjmPEplhMm2aTdKag&s", // Place these images in public/experts/
  },
  {
    name: "Surya",
    skill: "Microsoft Excel",
    experience: "10 Years Experience",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHPwC6_cAN8adMl-TjZ4En60aYFqJ0OidcHQ&s",
  },
  {
    name: "Viswanath",
    skill: "DevOps & AWS",
    experience: "12 Years Experience",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdaaETycFsm6LYCQDkIO1uvO1DpgMxKDGjRg&s",
  },
  {
    name: "Veera",
    skill: "Microsoft Power BI",
    experience: "10 Years Experience",
    image: "https://res.cloudinary.com/hevo/images/c_scale,w_448,h_252,dpr_2.625/f_webp,q_auto:best/v1685882496/hevo-learn-1/microsoft-power-bi-logo_151265f430f/microsoft-power-bi-logo_151265f430f.png?_i=AA",
  },
    {
    name: "Veera",
    skill: "Tableau",
    experience: "10 Years Experience",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIu7sb1F3f7aCt0WfRMyjmPEplhMm2aTdKag&s", // Place these images in public/experts/
  },
  {
    name: "Surya",
    skill: "Microsoft Excel",
    experience: "10 Years Experience",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHPwC6_cAN8adMl-TjZ4En60aYFqJ0OidcHQ&s",
  },
  {
    name: "Viswanath",
    skill: "DevOps & AWS",
    experience: "12 Years Experience",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdaaETycFsm6LYCQDkIO1uvO1DpgMxKDGjRg&s",
  },
  {
    name: "Veera",
    skill: "Microsoft Power BI",
    experience: "10 Years Experience",
    image: "https://res.cloudinary.com/hevo/images/c_scale,w_448,h_252,dpr_2.625/f_webp,q_auto:best/v1685882496/hevo-learn-1/microsoft-power-bi-logo_151265f430f/microsoft-power-bi-logo_151265f430f.png?_i=AA",
  },
];

export function ExpertsCarousel() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Right Guidance From <span className="text-sky-600">Experts</span>
        </h2>

        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          autoplay={{ delay: 3000 }}
          // pagination={{ clickable: true }}
          modules={[Pagination, Autoplay]}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
        >
          {experts.map((expert, index) => (
            <SwiperSlide key={index}>
              <div className="text-center px-4">
                <div className="w-40 h-40 mx-auto mb-4 rounded-full shadow-xl overflow-hidden flex items-center justify-center bg-white">
                  <img
                    src={expert.image}
                    alt={expert.name}
                    className="object-contain w-full h-full"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">
                  {expert.name}
                </h3>
                <p className="text-gray-600">{expert.skill}</p>
                <div className="text-yellow-500 mt-2 text-sm">★★★★★</div>
                <p className="text-sm text-gray-500 mt-1">
                  {expert.experience}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
