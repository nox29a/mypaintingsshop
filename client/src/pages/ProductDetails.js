import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import CheckoutForm from './CheckoutForm.js';
import {Link} from 'react-router-dom'
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
const ProductDetails = () => {
  const {id} = useParams();
  const { data } = useFetch(`/obrazies?populate=*&filters[id]=${id}`);
  const options = {
    // passing the client secret obtained from the server
    clientSecret: '{{CLIENT_SECRET}}',
  };
  if (!data) {
    return <div className='h-screen flex justify-center items-center'>Loading...</div>;
  }
  const {title, price, description, paint, avalible} = data[0].attributes

  const stripePromise = loadStripe('pk_test_51N1PIzHSjSaqUED8Ko5ZLSq9iaQxsXxAST7jNac7FqYSaetCAqaWxGc91k4S4SM8u47FpvqqKn3bvVKWAQmkhzPa00USSN5sL6');

  const handlePayment = async ()=> {
    try {
      const stripe = await stripePromise;
      await stripe.redirectToCheckout({
        sessionId: price.data.stripeSession.id,
      });
    } catch (error){
      console.log(error);
    }
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
          <Link to={"/CheckoutForm/"}><button className='border bg-orange-500 p-4 rounded-3xl text-2xl' onClick={handlePayment}>Zamów teraz</button></Link> :
            <Link to={"/contact/"}><button href="/contact/" className='border bg-grey-500 p-4 rounded-2xl text-2xl'>Zapytaj o dostępność</button></Link>}



          </div>
      </div>
    </div>
  );
};

export default ProductDetails;
