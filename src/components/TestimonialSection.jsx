import React from 'react';
import Slider from 'react-slick';
import { MdOutlineNavigateNext } from 'react-icons/md';

import TestimonialCard from './TestimonialCard';
import { testimonials } from '../data';

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <button
      className={`absolute right-[50%] bottom-[-40%] bg-white p-3 rounded-full shadow-xl mr-3`}
      onClick={onClick}
    >
      <MdOutlineNavigateNext className='rotate-180' />
    </button>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <button
      className={`absolute left-[50%] bottom-[-40%] bg-white p-3 rounded-full shadow-xl mr-3`}
      onClick={onClick}
    >
      <MdOutlineNavigateNext />
    </button>
  );
}

const TestimonialSection = () => {
  var settings = {
    className: 'center',
    centerMode: true,
    dots: false,
    infinite: true,
    speed: 500,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className='bg-primaryBg'>
      <div className='sm:px-32 px-6 py-10 mt-24'>
        <div className='overflow-hidden'>
          <h2 className='text-4xl ff-heading text-center'>
            This Is What Our Customers Say
          </h2>
          <p className='text-[#8A8A8A] text-center mt-5'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
            duis
          </p>

          <div className='mt-40 lg:w-[600px] lg:h-[400px] h-[800px] mx-auto'>
            <Slider {...settings}>
              {testimonials.map((testimonial) => (
                <TestimonialCard {...testimonial} />
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
