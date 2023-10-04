import React from 'react';
import { stars } from '../assets';

const TestimonialCard = ({ id, name, img, position, comment }) => {
  return (
    <div className='card w-full h-full bg-white shadow-[0px_20px_60px_0px_rgba(46,33,61,0.08)] rounded-[10px] py-16 px-12'>
      <div className='lg:flex gap-20'>
        <div className='w-[150px] h-[150px]'>
          <img src={img} alt='' className='w-full h-full' />
        </div>
        <div>
          <p className='text-sm'>{comment}</p>
          <img src={stars} alt='' />
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
