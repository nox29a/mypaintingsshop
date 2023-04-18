import React from 'react';


const Header = () => {
  return (
  <header className='bg-primary py-6 w-full top-0 mb-5'>
    <div className='container mx-auto'>
      <div className='flex flex-row justify-between'>
      <div>
        <h2 className='text-[40px] underline'>
        <span className='text-accent '>Gallery</span>
        Online
        </h2>
      </div>
      <div className='text-center'>
        Masz pytania? Zadzwoń: <br/>
        +48 727 912 364
      </div>
      </div>
    </div>
  </header>
  )
};

export default Header;
