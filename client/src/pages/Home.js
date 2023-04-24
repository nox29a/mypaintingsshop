import React from 'react';

import useFetch from '../hooks/useFetch';

import ForSale from '../components/ForSale.js';
import Hero from '../components/Hero.js';
import AllProducts from '../components/AllProducts.js';

const Home = () => {
  
  return (
  <section>
    <Hero />
    <ForSale />
    <AllProducts />
  </section>
  );
};

export default Home;
