import React from 'react';

import { newArrivals } from '../data';
import ArrivalCard from './ArrivalCard';

const NewArrivalSection = () => {
  return (
    <div className='bg-primaryBg'>
      <div className='sm:px-32 px-6 py-10 mt-24'>
        <h2 className='text-4xl ff-heading text-center'>New Arrivals</h2>
        <p className='text-[#8A8A8A] text-center mt-5 mx-auto lg:w-[615px]'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
          duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices
          sollicitudin
        </p>

        <div className='my-10 flex justify-center flex-wrap gap-7'>
          <button className='px-11 py-5 bg-[#FAFAFA] text-[#8A8A8A] rounded-[10px] shadow-[0px_20px_35px_0px_rgba(0,0,0,0.15)] hover:bg-black hover:text-white active:bg-black active:text-white'>
            Men’s Fashion
          </button>
          <button className='px-11 py-5 bg-[#FAFAFA] text-[#8A8A8A] rounded-[10px] shadow-[0px_20px_35px_0px_rgba(0,0,0,0.15)] hover:bg-black hover:text-white active:bg-black active:text-white'>
            Women’s Fashion
          </button>
          <button className='px-11 py-5 bg-[#FAFAFA] text-[#8A8A8A] rounded-[10px] shadow-[0px_20px_35px_0px_rgba(0,0,0,0.15)] hover:bg-black hover:text-white active:bg-black active:text-white'>
            Women Accessories
          </button>
          <button className='px-11 py-5 bg-[#FAFAFA] text-[#8A8A8A] rounded-[10px] shadow-[0px_20px_35px_0px_rgba(0,0,0,0.15)] hover:bg-black hover:text-white active:bg-black active:text-white'>
            Men Accessories
          </button>
          <button className='px-11 py-5 bg-[#FAFAFA] text-[#8A8A8A] rounded-[10px] shadow-[0px_20px_35px_0px_rgba(0,0,0,0.15)] hover:bg-black hover:text-white active:bg-black active:text-white'>
            Discount Deals
          </button>
        </div>

        <div className='flex flex-wrap justify-between'>
          {newArrivals.map((item) => (
            <ArrivalCard {...item} />
          ))}
        </div>

        <div className='flex justify-center items-center'>
          <button className='px-11 py-5 bg-black text-white mt-5 rounded-[10px] shadow-[0px_20px_35px_0px_rgba(0,0,0,0.15)]'>
            View More
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewArrivalSection;
