
import React from 'react';
import './MovieSwipper.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import { Autoplay, EffectCoverflow } from 'swiper/modules';

const MovieSwipper = ({ slides, slideChange }) => {
  return (
    <Swiper
      effect="coverflow"
      grabCursor={true}
      centeredSlides={true}
      slidesPerView="auto"
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      loop={true}
      modules={[Autoplay, EffectCoverflow]}
      className="movieSwiper"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={slide._id}>
          <img
            src={slide.previewImg}
            alt={`Slide ${index}`}
            onClick={() => slideChange(slide._id)} // Correctly calling the passed function
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default MovieSwipper;
