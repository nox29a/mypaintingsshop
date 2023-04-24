import React from 'react';

import {Link} from 'react-router-dom'
const Product = ({product}) => {
  
  return <Link to={`/product/${product.id}`}>
    <div className='grad w-full h-[300px] rounded-r-sm overflow-hidden group'>
    {/* badge */}
    {product.attributes.avalible ? 
    <div className='absolute bg-accent text-primary text-[12px] font-extrabold uppercase top-4 right-4 px-2 rounded-full z-10'>DOSTĘPNY</div> : 
    <div className='absolute bg-yellow-300 text-primary text-[12px] font-extrabold uppercase top-4 right-4 px-2 rounded-full z-10'>Zapytaj o dostępność</div>}
      
      {/* image */}
        <div className='w-full h-[200px] flex item-center justify-center relative'>
          <img className='mt-6 w-[200px] h-[200px] group-hover:scale-90 transition-all' src={`http://localhost:1337${product.attributes.paint.data[0].attributes.url}`} alt=""></img>
        </div>
      {/* price */}
        <div className='px-6 pt-8 flex flex-col '>
          <div className='text-accent text-[24px] capitalize mb-2 text-center'>
          {product.attributes.price === null ? 
            <div></div> :
            <div>{product.attributes.price} PLN</div>}
          </div>
        </div>
    </div>
  </Link>;
};

export default Product;
