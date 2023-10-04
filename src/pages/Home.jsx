import React from 'react';

import {
  Header,
  Footer,
  LogoSection,
  DealSection,
  NewArrivalSection,
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

      <div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
