import React from 'react';

import Header from '../../components/Header/Header';
import MainInfoSection from '../../components/MainInfoSection/MainInfoSection';
import FourStepsSection from '../../components/FourStepsSection/FourStepsSection';
import AboutUsSection from '../../components/AboutUsSection/AboutUsSection';
import FoundationsListSection from '../../components/FoundationsListSection/FoundationsListSection';
import Footer from '../../components/Footer/Footer'

import styles from './App.css';

function App() {
  return (
      <div className={'container'}>
        <Header />
        <MainInfoSection />
        <FourStepsSection/>
        <AboutUsSection/>
        <FoundationsListSection/>
        <Footer/>
      </div>
  );
}

export default App;
