import React from 'react';

import { peaky_bliders, point_short, point_long } from '../assets';

const PeakyBlindersSection = () => {
  return (
    <div className='mt-24 overflow-hidden'>
      <div className='lg:flex flex-row-reverse'>
        <div className='relative lg:flex-[0_0_50%] lg:max-w-[50%] p-14 lg:pl-56 overflow-hidden w-full before:content-[" "] before:absolute before:left-[-20%] before:top-[40%] before:translate-y-[-40%] before:rotate-[15deg] before:w-[35%] before:h-[140%] lg:before:border-2 before:border-black'>
          <div className='flex flex-col gap-5'>
            <p className='text-[#767676]'>Women Collection</p>
            <h2 className='text-4xl ff-heading'>Peaky Blinders</h2>
            <p className='text-black underline'>DESCRIPTION</p>
            <p className='text-[#767676] lg:w-[515px]'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Scelerisque duis ultrices sollicitudin aliquam sem. Scelerisque
              duis ultrices sollicitudin. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Scelerisque duis.
            </p>
            <div className='flex gap-2'>
              <p className='text-[#767676]'>Size: </p>
              <p className='px-5 py-1 bg-black text-white rounded-[10px]'>M</p>
            </div>
            <p className='text-2xl text-black font-medium'>$100.00</p>
            <div className='mt-5'>
              <a
                href='shop'
                className=' px-11 py-5 bg-black text-white mt-5 rounded-[10px] shadow-[0px_20px_35px_0px_rgba(0,0,0,0.15)]'
              >
                Buy Now
              </a>
            </div>
          </div>
        </div>

        <div className='lg:flex-[0_0_50%] lg:max-w-[50%] mr-[-10%] bg-bg-peaky'>
          <div className='w-[722px] h-[570px] relative'>
            <img src={peaky_bliders} alt='' className='w-full h-full' />

            <div className='absolute top-7 right-[22%]'>
              <img src={point_short} alt='' />
              <div className='px-7 py-2 ml-[105px] bg-[rgba(255,255,255,0.41)] backdrop-sepia-0 border-2 border-black text-black'>
                Flat Cap
              </div>
            </div>

            <div className='absolute top-[35%] right-[27%]'>
              <img src={point_short} alt='' />
              <div className='px-7 py-2 ml-[105px] bg-[rgba(255,255,255,0.41)] backdrop-sepia-0 border-2 border-black text-black'>
                Hugo Boss
              </div>
            </div>

            <div className='absolute bottom-[5%] right-[27%]'>
              <img src={point_short} alt='' />
              <div className='px-7 py-2 ml-[105px] bg-[rgba(255,255,255,0.41)] backdrop-sepia-0 border-2 border-black text-black'>
                Santoni
              </div>
            </div>

            <div className='absolute top-[25%] left-[0]'>
              <img src={point_long} alt='' className='ml-[105px]' />
              <div className='px-7 py-2 mr-[105px] bg-[rgba(255,255,255,0.41)] backdrop-sepia-0 border-2 border-black text-black'>
                Suspender
              </div>
            </div>
            <div className='absolute top-[50%] left-[-5%]'>
              <img src={point_long} alt='' className='ml-[105px]' />
              <div className='px-7 py-2 mr-[105px] bg-[rgba(255,255,255,0.41)] backdrop-sepia-0 border-2 border-black text-black'>
                Hugo Boss
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PeakyBlindersSection;
