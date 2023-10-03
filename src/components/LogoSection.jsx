import React from 'react';

import { logos } from '../data';

const LogoSection = () => {
  return (
    <div className='sm:px-32 px-6 py-10'>
      <div className='flex flex-wrap justify-between items-center '>
        {logos.map((item) => {
          const { id, logo } = item;
          return (
            <div className='xl:my-0 my-5 mx-auto' key={id}>
              <img src={logo} alt='' />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LogoSection;
