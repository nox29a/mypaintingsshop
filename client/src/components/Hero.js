import React from 'react';

import promoimg1 from '../img/promo_img1.png';
import promoimg2 from '../img/promo_img2.png';
import MainSlider from '../components/MainSlider.js';

const Hero = () => {
  return (
  <section className='mb-[30px] pt-5 lg:pt-0'>
    <div className='container mx-auto'>
      <div className='flex flex-col gap-y-[30px] xl:flex-row xl:gap-x-[30px]'>
        <div className='w-full max-w-lg lg:max-w-[734px] mx-auto'>
          <MainSlider />
        </div>
        <div className='flex flex-col gap-y-[30px] w-full max-w-lg mx-auto h-[500px]'>
          <div className='grad flex-1 h-[250px] rounded-sm overflow-hidden relative p-6'>
            <div className='flex flex-col max-w-[144px] h-full justify-center pl-5'>
              <div className='text-[22px] uppercase font-medium mb-4'>
              Obrazy na zamówienie
              </div>
              <a href='contact' className='text-accent flex flex-col'>Napisz do mnie</a>
            </div>
            <img className='h-[200px] absolute z-20 top-4 -right-1' src={promoimg1} alt=''></img>
          </div>
          <div className='grad flex-1 h-[250px] rounded-sm overflow-hidden relative p-6'>
            <div className='flex flex-col max-w-[144px] h-full justify-center'>
              <div className='text-[22px] uppercase font-medium mb-4 pl-5'>
              <a href="https://instagram.com/nox29a">
              Odwiedź mojego instagrama
              </a>
              </div>
            </div>
            <img className='h-[200px] absolute z-20 top-4 -right-1' src={promoimg2} alt=''></img>
          </div>
        </div>
      </div>
    </div>
  </section>);
};

export default Hero;
