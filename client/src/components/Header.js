import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
  <header className='bg-primary py-6 w-full top-0 mb-5'>
    <div className='container mx-auto'>
      <div className='flex flex-row justify-between'>
      <Link to="/"> 
        <div>
          <h2 className='text-[40px] underline'>
          <span className='text-accent '>Gallery</span>
          Online
          </h2>
        </div>
        </Link>
        <Link to="Contact"> 
        <div className='text-center'>
          Masz pytania? Napisz: <br/>
          adamczyk29a@interia.pl
        </div>
        </Link>
      </div>
    </div>
  </header>
  )
};

export default Header;
