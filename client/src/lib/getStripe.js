import { loadStripe } from '@stripe/stripe-js';

let stripePromise;
const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe('pk_test_51N1PIzHSjSaqUED8Ko5ZLSq9iaQxsXxAST7jNac7FqYSaetCAqaWxGc91k4S4SM8u47FpvqqKn3bvVKWAQmkhzPa00USSN5sL6');
  }
  return stripePromise;
};

export default getStripe;
