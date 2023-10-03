import React, { useState, useRef, useEffect } from 'react';

const DealSection = () => {
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

  return (
    <div className='bg-primaryBg'>
      <div className='sm:px-32 px-6 py-10 mt-24'>
        <div className='max-w-[436px]'>
          <h2 className='text-4xl ff-heading'>Deals Of The Month</h2>
          <p className='text-[#8A8A8A] mt-5'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
            duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices
            sollicitudin
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
              <div className='w-[76px] h-[76px] bg-white rounded-[10px] shadow-[0px_4px_14px_1px_rgba(0,0,0,0.16)] flex items-center justify-center'>
                <p className='ff-digital text-3xl'>{days}</p>
              </div>
              <p className='text-xl text-center'>Days</p>
            </div>
            <div>
              <div className='w-[76px] h-[76px] bg-white rounded-[10px] shadow-[0px_4px_14px_1px_rgba(0,0,0,0.16)] flex items-center justify-center'>
                <p className='ff-digital text-3xl'>{hrs}</p>
              </div>
              <p className='text-xl text-center'>Hr</p>
            </div>
            <div>
              <div className='w-[76px] h-[76px] bg-white rounded-[10px] shadow-[0px_4px_14px_1px_rgba(0,0,0,0.16)] flex items-center justify-center'>
                <p className='ff-digital text-3xl'>{mins}</p>
              </div>
              <p className='text-xl text-center'>Mins</p>
            </div>
            <div>
              <div className='w-[76px] h-[76px] bg-white rounded-[10px] shadow-[0px_4px_14px_1px_rgba(0,0,0,0.16)] flex items-center justify-center'>
                <p className='ff-digital text-3xl'>{secs}</p>
              </div>
              <p className='text-xl text-center'>Sec</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DealSection;
