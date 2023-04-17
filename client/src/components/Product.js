import React from 'react';

import {Link} from 'react-router-dom'
const Product = ({product}) => {
  console.log(product.attributes.paint.data[0].attributes);
  return <Link>
    <div>
      <div className='w-full h-[200px] flex item-center justify-center relative'>
      <img className='w-[160px] h-[160px] group-hover:scale-90 transition-all' src={`http://localhost:1337${product.attributes.paint.data[0].attributes.url}`} alt=""></img>

      </div>
    </div>
  </Link>;
};

export default Product;
