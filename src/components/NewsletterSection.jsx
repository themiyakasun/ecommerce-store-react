import React from 'react';

import { newsletter_1, newsletter_2 } from '../assets';

const NewsletterSection = () => {
  return (
    <div className='bg-primaryBg'>
      <div className='sm:px-32 px-6 py-10 mt-24'>
        <div className='lg:flex justify-between items-center'>
          <div className='lg:flex-[0_0_25%] lg:max-w-[25%]  px-[15px] mx-[-15px] lg:mb-0 mb-10'>
            <img src={newsletter_1} alt='' />
          </div>

          <div className='lg:flex-[0_0_50%] lg:max-w-[50%] px-[15px] mx-[-15px]'>
            <h2 className='text-4xl ff-heading text-center'>
              Subscribe To Our Newsletter
            </h2>
            <p className='text-[#8A8A8A] text-center mt-5'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Scelerisque duis ultrices sollicitudin aliquam sem. Scelerisque
              duis ultrices sollicitudin
            </p>
            <form action=''>
              <input
                type='email'
                className='w-full border-0 outline-none mt-10 shadow-lg px-7 py-8 rounded-[10px] tex-xl text-[#8A8A8A]'
                placeholder='michael@ymail.com'
              />

              <div className='flex justify-center mt-10'>
                <button
                  type='submit'
                  className='px-11 py-5 bg-[#000] text-white rounded-[10px] shadow-[0px_20px_35px_0px_rgba(0,0,0,0.15)]'
                >
                  Subscribe Now
                </button>
              </div>
            </form>
          </div>

          <div className='lg:flex-[0_0_25%] lg:max-w-[25%]  px-[15px] mx-[-15px] lg:mt-0 mt-10'>
            <img src={newsletter_2} alt='' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterSection;
