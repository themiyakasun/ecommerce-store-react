import React from 'react';

import { Navbar } from '../components';
import { header_1, header_2, header_3, header_4 } from '../assets';

const Header = () => {
  return (
    <>
      <nav>
        <Navbar />
      </nav>

      <div className='sm:px-32 px-6 py-10'>
        <div className='lg:flex block flex-wrap justify-between'>
          <div className='lg:flex-[0_0_33.33%] lg:max-w-[33.33%] px-[15px] bg-bgAsh rounded-[10px]'>
            <div className='pt-10'>
              <img src={header_1} alt='' />
            </div>
          </div>
          <div className='lg:flex-[0_0_33.33%] lg:max-w-[33.33%] px-[15px] lg:py-0 py-10 flex flex-col justify-between text-center'>
            <div className='w-full'>
              <img src={header_2} alt='' className='w-full' />
            </div>
            <h4 className='lg:text-7xl text-6xl text-[#484848] font-medium leading-[100%]'>
              ULTIMATE
            </h4>
            <h3 className='lg:text-[150px] text-[120px] text-outline leading-[100%]'>
              SALE
            </h3>
            <h5 className='text-xl text-[#484848] tracking-[2px]'>
              NEW COLLECTION
            </h5>
            <div className='py-10'>
              <a
                href='sing-up'
                className='px-11 py-5 bg-[#000] text-white rounded-[10px] shadow-[0px_20px_35px_0px_rgba(0,0,0,0.15)]'
              >
                SHOP NOW
              </a>
            </div>
            <div className='bg-bgAsh rounded-[10px]'>
              <img src={header_3} alt='' />
            </div>
          </div>
          <div className='lg:flex-[0_0_33.33%] lg:max-w-[33.33%] px-[15px] bg-bgAsh rounded-[10px]'>
            <div className='pt-10'>
              <img src={header_4} alt='' />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
