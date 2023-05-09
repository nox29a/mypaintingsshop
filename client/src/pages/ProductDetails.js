import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import {Link} from 'react-router-dom'
import getStripe from '../lib/getStripe';
const ProductDetails = () => {
  const {id} = useParams();
  const { data } = useFetch(`/obrazies?populate=*&filters[id]=${id}`);

  if (!data) {
    return <div className='h-screen flex justify-center items-center'>Loading...</div>;
  }
  const {title, price, description, paint, avalible} = data[0].attributes



  async function handleCheckout() {
      console.log('Check')
      const stripe = await getStripe();
      const { error } = await stripe.redirectToCheckout({
        billingAddressCollection: 'required',
        lineItems: [
          {
            price: 'price_1N5pa8HSjSaqUED8xnJSqPyA',
            quantity: 1,
          },
        ],
        mode: 'payment',
        successUrl: `http://localhost:3000`,
        cancelUrl: `http://localhost:3000`,
      });
      console.warn(error.message);
    }

  return (
    <div className='container mx-auto'>
      <div className='flex flex-row my-10'>
        <div className='w-1/2 '>
          <img className='w-full h-auto' src={paint.data[0].attributes.url} alt="" />
        </div>
        <div className='w-1/2 items-center text-center'>
          <div className='mt-10 h-1/2 text-lg'>
            <div className='h-1/2 text-[50px]'>
              {title} 
            </div>
              Wymiary: {description}
          </div>
        {avalible ? 
          <div className='h-1/4 text-[50px] text-red-600'>
            {price} PLN 
          </div> : <div></div> }
        {avalible ? 
          <button className='border bg-orange-500 p-4 rounded-3xl text-2xl' onClick={handleCheckout}>Zamów teraz</button> :
            <Link to={"/contact/"}><button href="/contact/" className='border bg-grey-500 p-4 rounded-2xl text-2xl'>Zapytaj o dostępność</button></Link>}



          </div>
      </div>
    </div>
  );
};

export default ProductDetails;
