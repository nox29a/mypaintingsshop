import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import Product from '../components/Product.js';
const ProductDetails = () => {

  const {id} = useParams();
  const { data } = useFetch(`/obrazies?populate=*&filters[id]=${id}`);

  
  
  if (!data) {
    return <div className='h-screen flex justify-center items-center'>Loading...</div>;
  }
  
  const {title, price, description, paint} = data[0].attributes
  
  return (
    <div className='container mx-auto'>
      <div className='flex flex-row'>
        <div className='w-1/2'>
          <img className='w-full h-auto' src={`http://localhost:1337${paint.data[0].attributes.url}`} alt="" />
        </div>
        <div className='w-1/2'>
          {title}
          {price}
          {description}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
