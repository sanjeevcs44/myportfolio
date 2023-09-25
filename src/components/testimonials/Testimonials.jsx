import React from "react";
import "./testimonials.css";
import { Data } from "./Data";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

import { FreeMode, Pagination } from "swiper/modules";

const Testimonials = () => {
  return (
    <section className="testimonial container section">
      <h2 className="section__tile">My client Says </h2>
      <span className="section__subtitle">Testimonials </span>
      <Swiper
        className="testimonial__container"
        modules={[FreeMode, Pagination]}
        pagination={true}
        loop={true}
        grabCursor={true}
        spaceBetween={48}
        slidesPerView={2}
        freeMode={true}
        breakpoints={{
          576: {
            slidePerView: 1,
          },
          768: {
            slidePerView: 2,
            spaceBetween: 48,
          },
        }}
      >
        {Data.map(({ id, image, title, description }) => {
          return (
            <SwiperSlide className="testimonial__card" key={id}>
              <img src={image} alt={image} className="testimoinal__img" />
              <h3 className="testimonial__name">{title}</h3>
              <p className="testimonial__description">{description}</p>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
