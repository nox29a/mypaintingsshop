import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';

import Product from '../components/Product';

const ProductSlider = ({data}) => {
  
  return (
  <Swiper
      className='productSlider mx-auto max-w-[360px] md:max-w-lg xl:max-w-[1410px]'
      modules={[Autoplay, Navigation]}
      spaceBetween={50}
      slidesPerView={4}
      navigation
      
      loop={true}
      autoplay={{
          delay: 1500,
          disableOnInteraction: true
      }}
      breakpoints= {{
      320: {
        slidesPerView: 1,
      },
      640: {
        slidesPerView: 2,
      },
      1440: {
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
