import React, { useState, useRef, useEffect } from 'react';
import { MdOutlineNavigateNext } from 'react-icons/md';

import { deals } from '../data';

const DealSection = () => {
  //countdown
  const [days, setDays] = useState('00');
  const [hrs, setHrs] = useState('00');
  const [mins, setMins] = useState('00');
  const [secs, setSecs] = useState('00');

  let interval = useRef();

  const startTimer = () => {
    const countDown = new Date('Dec 30, 2023 00:00:00').getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const gap = countDown - now;

      const days = Math.floor(gap / (1000 * 60 * 60 * 24));
      const hrs = Math.floor((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const mins = Math.floor((gap % (1000 * 60 * 60)) / (1000 * 60));
      const secs = Math.floor((gap % (1000 * 60)) / 1000);

      if (gap < 0) {
        clearInterval(interval.current);
      } else {
        setDays(days);
        setHrs(hrs);
        setMins(mins);
        setSecs(secs);
      }
    }, 1000);
  };

  useEffect(() => {
    const timerInterval = startTimer();
    return () => {
      clearInterval(timerInterval);
    };
  }, []);

  //slider
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = deals.length - 1;

    if (index < 0) {
      setIndex(lastIndex);
    }

    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index]);

  return (
    <div className='bg-primaryBg overflow-hidden'>
      <div className='sm:px-32 px-6 py-10 mt-24'>
        <div className='relative lg:h-auto h-[1200px]'>
          <div className='lg:w-[436px] h-[582px]'>
            <h2 className='text-4xl ff-heading'>Deals Of The Month</h2>
            <p className='text-[#8A8A8A] mt-5'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Scelerisque duis ultrices sollicitudin aliquam sem. Scelerisque
              duis ultrices sollicitudin
            </p>
            <div className='py-10'>
              <a
                href='sing-up'
                className='px-11 py-5 bg-[#000] text-white rounded-[10px] shadow-[0px_20px_35px_0px_rgba(0,0,0,0.15)]'
              >
                Buy Now
              </a>
            </div>

            <p className='mt-12 text-2xl font-medium'>
              Hurry, Before It’s Too Late!
            </p>

            <div className='flex gap-7 mt-3'>
              <div>
                <div className='lg:w-[76px] lg:h-[76px] w-[60px] h-[60px] bg-white rounded-[10px] shadow-[0px_4px_14px_1px_rgba(0,0,0,0.16)] flex items-center justify-center'>
                  <p className='ff-digital text-3xl'>{days}</p>
                </div>
                <p className='text-xl text-center'>Days</p>
              </div>
              <div>
                <div className='lg:w-[76px] lg:h-[76px] w-[60px] h-[60px] bg-white rounded-[10px] shadow-[0px_4px_14px_1px_rgba(0,0,0,0.16)] flex items-center justify-center'>
                  <p className='ff-digital text-3xl'>{hrs}</p>
                </div>
                <p className='text-xl text-center'>Hr</p>
              </div>
              <div>
                <div className='lg:w-[76px] lg:h-[76px] w-[60px] h-[60px] bg-white rounded-[10px] shadow-[0px_4px_14px_1px_rgba(0,0,0,0.16)] flex items-center justify-center'>
                  <p className='ff-digital text-3xl'>{mins}</p>
                </div>
                <p className='text-xl text-center'>Mins</p>
              </div>
              <div>
                <div className='lg:w-[76px] lg:h-[76px] w-[60px] h-[60px] bg-white rounded-[10px] shadow-[0px_4px_14px_1px_rgba(0,0,0,0.16)] flex items-center justify-center'>
                  <p className='ff-digital text-3xl'>{secs}</p>
                </div>
                <p className='text-xl text-center'>Sec</p>
              </div>
            </div>
          </div>
          <div className=''>
            {deals.map((deal, dealIndex) => {
              const { id, img } = deal;

              let position = 'next-item';

              if (dealIndex === index) {
                position = 'active-item';
              }

              if (
                dealIndex === index - 1 ||
                (index === 0 && dealIndex === deals.length - 1)
              ) {
                position = 'last-item';
              }

              return (
                <div
                  className={`${position} lg:w-[404px] w-full h-[582px] absolute lg:top-0 bottom-12 transition-all duration-500 ease-[ease] item`}
                  key={id}
                >
                  <img src={img} alt='' className='w-full h-full' />
                  {position === 'active-item' && (
                    <div className='w-[217px] h-[130px] absolute left-5 bottom-5 bg-white px-5 py-7'>
                      <p>0{id} - Spring Sale</p>
                      <p className='text-3xl mt-5'>30% OFF</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
          <div className='absolute lg:bottom-6 bottom-0  lg:left-[320px] left-[50%] translate-x-[-50%]'>
            <button
              className='bg-white p-3 rounded-full shadow-xl mr-3 '
              onClick={() => setIndex(index + 1)}
            >
              <MdOutlineNavigateNext className='rotate-180' />
            </button>
            <button
              className='bg-white p-3 rounded-full shadow-xl'
              onClick={() => setIndex(index - 1)}
            >
              <MdOutlineNavigateNext />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DealSection;
