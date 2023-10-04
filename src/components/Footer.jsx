import React from 'react';

const Footer = () => {
  return (
    <div className='bg-primaryBg border-t-2 border-[#DEDFE1]'>
      <div className='sm:px-32 px-6 py-10'>
        <div className='lg:flex justify-between items-center lg:text-start text-center'>
          <h3 className='text-3xl ff-heading'>FASCO</h3>

          <ul className='flex gap-5 flex-wrap justify-center lg:mt-0 mt-5'>
            <li>
              <a href=''>Support Center</a>
            </li>
            <li>
              <a href=''>Invoicing</a>
            </li>
            <li>
              <a href=''>Contract</a>
            </li>
            <li>
              <a href=''>Careers</a>
            </li>
            <li>
              <a href=''>Blog</a>
            </li>
            <li>
              <a href=''>FAQ,s</a>
            </li>
          </ul>
        </div>

        <p className='text-center text-sm mt-5'>
          Copyright © 2022 Xpro . All Rights Reseved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
