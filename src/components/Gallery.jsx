import React from 'react';

import { gallery } from '../data';

const Gallery = () => {
  return (
    <div className='bg-primaryBg mt-10'>
      <h2 className='text-4xl ff-heading text-center'>
        Follow Us On Instagram
      </h2>
      <p className='text-[#8A8A8A] text-center mt-5 mx-auto lg:w-[615px]'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
        duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices
        sollicitudin
      </p>

      <div className='flex items-center mt-20 lg:flex-nowrap flex-wrap justify-center'>
        {gallery.map((item) => {
          const { id, img } = item;

          return (
            <div className='w-[320px]' key={id}>
              <img src={img} alt='' className='w-full' />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Gallery;
