import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const SwiperCarousel = ({ items, renderItem }) => {
  return (
    <div className="d-md-none position-relative">
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        modules={[Pagination, Navigation, Autoplay]}
        style={{ paddingBottom: '50px' }}
      >
        {items.map((item, idx) => (
          <SwiperSlide key={idx}>{renderItem(item)}</SwiperSlide>
        ))}
      </Swiper>

      <style jsx="true">{`
        .swiper-button-next,
        .swiper-button-prev {
          color: #00ffc3;
          width: 32px;
          height: 32px;
        }
        .swiper-button-next::after,
        .swiper-button-prev::after {
          font-size: 18px;
          font-weight: bold;
        }
      `}</style>
    </div>
  );
};

export default SwiperCarousel;
