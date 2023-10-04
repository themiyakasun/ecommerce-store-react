import React from 'react';

import { features } from '../data';

const FeaturesSection = () => {
  return (
    <div className='sm:px-32 px-6 py-10'>
      <div className='flex flex-wrap justify-between items-center'>
        {features.map((feature) => {
          const { id, title, img, description } = feature;

          return (
            <div className='flex gap-2 lg:mb-0 mb-5' key={id}>
              <img src={img} alt='' />
              <div>
                <p className='text-xl font-medium'>{title}</p>
                <p>{description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FeaturesSection;
