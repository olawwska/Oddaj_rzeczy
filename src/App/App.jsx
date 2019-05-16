import React from 'react';
import './App.css';
import Header from '../Header/Header';
import styles from './style.module.css'
import MainInfoSection from '../MainInfoSection/MainInfoSection';
import FourStepsSection from '../FourStepsSection/FourStepsSection';
import AboutUsSection from '../AboutUsSection/AboutUsSection';
import FoundationsListSection from '../FoundationsListSection/FoundationsListSection';
import Footer from '../Footer/Footer'


function App() {
  return (
      <div className={styles.container}>
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
