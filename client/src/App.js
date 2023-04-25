import React from 'react';

import { RouterProvider, Outlet, createBrowserRouter } from 'react-router-dom';

import Home from './pages/Home';
import Contact from './pages/Contact';
import Order from './pages/Order';
import ProductsDetails from './pages/ProductDetails';

import Header  from './components/Header';
import Footer from './components/Footer';

const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

const router =createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: '/', element: <Home />},
      { path: '/product/:id', element: <ProductsDetails />},
      { path: '/contact/', element: <Contact />},
      { path: '/order/', element: <Order />},
    ],
  },
]);

const App = () => {
  return <div>
    <RouterProvider router={router} />
  </div>;
};

export default App;
