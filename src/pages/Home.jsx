import React from 'react';

import { Header, Footer, LogoSection, DealSection } from '../components';

const Home = () => {
  return (
    <>
      <div>
        <Header />
      </div>

      <LogoSection />
      <DealSection />

      <div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
