import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import Product from '../components/Product';

const ProductSlider = ({data}) => {
  console.log(data);
  return (
  <Swiper
      modules={[Navigation, Pagination]}
      loop={true}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
    >
  
    <>
      {data?.map((product) => {
        return <SwiperSlide key={product.id}>
          <Product product={product} />
        </SwiperSlide>
      })}
    </>
  </Swiper>
  );
};

export default ProductSlider;
