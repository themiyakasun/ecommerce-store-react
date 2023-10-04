import React from 'react';

import { stars } from '../assets';

const ArrivalCard = ({ id, img, title, brand, reviews, price }) => {
  return (
    <div className='lg:flex-[0_0_33.33%] lg:max-w-[33.33%] md:flex-[0_0_50%] md:max-w-[50%] px-[15px] mx-[-15px] mb-5'>
      <div className='bg-white py-4 px-6 rounded-[10px] shadow-[0px_40px_90px_0px_rgba(0,0,0,0.06)]'>
        <figure>
          <img src={img} alt='' />
        </figure>

        <div className='flex justify-between items-center mt-3'>
          <h5 className='text-2xl font-medium'>{title}</h5>
          <img src={stars} alt='' />
        </div>

        <p className='text-[12px] text-[#8A8A8A]'>{brand}</p>
        <p className='text-[12px] my-6'>{reviews}</p>

        <div className='flex justify-between items-center'>
          <h5 className='text-2xl font-medium'>{price}</h5>
          <p className='text-[12px] text-[#FF4646]'>Almost Sold Out</p>
        </div>
      </div>
    </div>
  );
};

export default ArrivalCard;
