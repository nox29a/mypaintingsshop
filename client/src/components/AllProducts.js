import React from 'react';
import useFetch from '../hooks/useFetch';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import Product from './Product';

const AllProducts = () => {
  const { data } = useFetch('/obrazies?populate=*');
  
  return (
    
    <div id='Allproducts' className='mt-40'>
      <h2 className='text-[40px] mb-6 text-center'>Wszystkie obrazy</h2>
        <div className='flex flex-wrap '>
          {data?.map((product) => {
            return (
                <div className='container mx-auto w-auto'>
                  <div className='w-[350px] h-[350px] '>
                    <Product product={product} />
                  </div>
                </div>
           )
          })}
        </div>
    </div>
  );
};

export default AllProducts;
