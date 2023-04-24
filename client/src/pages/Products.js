import React from 'react';

import useFetch from '../hooks/useFetch';

import ProductSlider from '../components/ProductSlider';
import Product from '../components/Product';

const Products = ({product}) => {

  console.log(product);
  return (
  <div className='mb-16'>
    <div className='container mx-auto'>
      <h2 className='h2 mb-6 text-center'>Wszystkie obrazy</h2>
        
      {/* <div className='w-full h-[200px] flex item-center justify-center relative'>
          <img className='mt-6 w-[200px] h-[200px] group-hover:scale-90 transition-all' src={`http://localhost:1337${product.attributes.paint.data[0].attributes.url}`} alt=""></img>
        </div> */}

    </div>
  </div>
  );
};

export default Products;