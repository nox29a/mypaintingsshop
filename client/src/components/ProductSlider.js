import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import Product from '../components/Product';

const ProductSlider = ({data}) => {
  console.log(data);
  return (
  <Swiper
       className='productSlider mx-auto max-w-[360px] md:max-w-lg xl:max-w-[1410px]'
      modules={[Navigation, Pagination]}
      spaceBetween={50}
      slidesPerView={4}
      navigation
      pagination={{ clickable: true }}
      breakpoints= {{
      320: {
        slidesPerView: 1,
      },
      640: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 4,
      }}}
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
