import React from 'react';

import {
  Header,
  Footer,
  LogoSection,
  DealSection,
  NewArrivalSection,
  PeakyBlindersSection,
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

      <div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
