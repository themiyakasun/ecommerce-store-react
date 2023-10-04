import React from 'react';

import {
  Header,
  Footer,
  LogoSection,
  DealSection,
  NewArrivalSection,
  PeakyBlindersSection,
  FeaturesSection,
  Gallery,
  NewsletterSection,
  TestimonialSection,
} from '../components';

const Home = () => {
  return (
    <>
      <div>
        <Header />
      </div>

      <LogoSection />
      <DealSection />
      <NewArrivalSection />
      <PeakyBlindersSection />
      <FeaturesSection />
      <Gallery />
      <TestimonialSection />
      <NewsletterSection />

      <div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
