import React, { useState } from 'react';
import { LuMenu } from 'react-icons/lu';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className='sm:px-32 px-6 py-10'>
      <div className='flex justify-between items-center'>
        <h3 className='text-3xl text-[#484848] ff-heading'>FASCO</h3>

        <ul className='lg:flex hidden gap-14 text-[#484848]'>
          <li>
            <a href='home'>Home</a>
          </li>
          <li>
            <a href='deals'>Deals</a>
          </li>
          <li>
            <a href='new-arrival'>New Arrival</a>
          </li>
          <li>
            <a href='packages'>Packages</a>
          </li>
          <li>
            <a href='sign-in'>Sign in</a>
          </li>
          <li>
            <a
              href='sing-up'
              className='px-11 py-5 bg-[#000] text-white rounded-[10px] shadow-[0px_20px_35px_0px_rgba(0,0,0,0.15)]'
            >
              Sign up
            </a>
          </li>
        </ul>

        <button
          className='text-2xl lg:hidden block'
          onClick={() => setShowMenu(!showMenu)}
        >
          <LuMenu />
        </button>
      </div>

      <div
        className={`transition-all duration-500 ease-[ease] ${
          showMenu ? 'h-[60vh]' : 'h-0'
        } lg:hidden fixed overflow-hidden left-0 right-0 bg-black`}
      >
        <ul className='text-[#484848] text-center'>
          <li className='py-5'>
            <a href='home'>Home</a>
          </li>
          <li className='py-5'>
            <a href='deals'>Deals</a>
          </li>
          <li className='py-5'>
            <a href='new-arrival'>New Arrival</a>
          </li>
          <li className='py-5'>
            <a href='packages'>Packages</a>
          </li>
          <li className='py-5'>
            <a href='sign-in'>Sign in</a>
          </li>
          <li className='py-5'>
            <a
              href='sing-up'
              className='px-11 py-5 bg-[#000] text-white rounded-[10px] shadow-[0px_20px_35px_0px_rgba(0,0,0,0.15)]'
            >
              Sign up
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
