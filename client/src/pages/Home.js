import React from 'react';

import useFetch from '../hooks/useFetch';

import ProductSlider from '../components/ProductSlider';
const Home = () => {
  const { data } = useFetch('/obrazies?populate=*&filters[avalible]=true');
  
  return (
  <div className='mb-16'>
    <div className='container mx-auto'>
      <h2 className='h2 mb-6 text-center'>Nadal na sprzedaż!</h2>
      <ProductSlider data={data} />

    </div>
  </div>
  );
};

export default Home;
