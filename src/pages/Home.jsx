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
      <NewsletterSection />

      <div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
