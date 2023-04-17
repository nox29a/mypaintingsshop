import React from 'react';

import { RouterProvider, Outlet, createBrowserRouter } from 'react-router-dom';

import Home from './pages/Home';
import Products from './pages/Products';
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
      { path: '/products/:id', element: <Products />},
      { path: '/product/:id', element: <ProductsDetails />},
    ],
  },
]);

const App = () => {
  return <div>
    <RouterProvider router={router} />
  </div>;
};

export default App;
