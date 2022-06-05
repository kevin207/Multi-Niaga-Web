import React from "react";
import "./hero.css";

//Swiper Core
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";

//Swiper CSS
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

//Image
import IMG1 from "../../assets/ads/promo1.jpg";
import IMG2 from "../../assets/ads/promo2.jpg";
import IMG3 from "../../assets/ads/promo3.jpg";

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <Swiper
        className="container-section"
        // install Swiper modules
        modules={[Pagination, Navigation, Autoplay]}
        spaceBetween={40}
        slidesPerView={1}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={{ clickable: true }}
        pagination={{ clickable: true }}
      >
        <SwiperSlide className="news-wrap">
          <div className="news">
            <img src={IMG1} alt="" className="swiper-img" />
          </div>
        </SwiperSlide>

        <SwiperSlide className="news-wrap">
          <div className="news">
            <img src={IMG2} alt="" className="swiper-img" />
          </div>
        </SwiperSlide>

        <SwiperSlide className="news-wrap">
          <div className="news">
            <img src={IMG3} alt="" className="swiper-img" />
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Hero;
