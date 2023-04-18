import React from 'react';

import useFetch from '../hooks/useFetch';

import ForSale from '../components/ForSale.js';
import Hero from '../components/Hero.js';

const Home = () => {
  const { data } = useFetch('/obrazies?populate=*&filters[avalible]=true');
  
  return (
  <section>
    <Hero />
    <ForSale />
  </section>
  );
};

export default Home;
