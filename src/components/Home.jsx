import React, { useState, useEffect } from 'react';
import { Navbar, Footer, Banner, Prosess, CardBooks, Courses, AnimatedProsess, ProfInfo, Pack, How_we_work } from "./index";
import ScrollToTop from './ScrollToTop'; // Import the ScrollToTop component
import Popup from './Popup'; // Import the Popup component

const Home = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [hasScrolledToFooter, setHasScrolledToFooter] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const footer = document.querySelector('footer');
      const footerRect = footer.getBoundingClientRect();
      const isVisible = footerRect.top <= window.innerHeight && footerRect.bottom >= 0;

      if (isVisible && !hasScrolledToFooter) {
        setShowPopup(true);
        setHasScrolledToFooter(true);
        setTimeout(() => {
          setShowPopup(false);
        }, 4000); // Hide popup after 3 seconds
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasScrolledToFooter]);

  return (
    <>
      <Navbar />
      <Banner />
      <Prosess />
      <CardBooks />
      <Courses />
      <AnimatedProsess />
      <ProfInfo />
      <Pack />
      <How_we_work />
      <Footer />
      <ScrollToTop /> {/* Add ScrollToTop component */}
      <Popup show={showPopup} onClose={() => setShowPopup(false)} /> {/* Add Popup component */}
    </>
  );
}

export default Home;
