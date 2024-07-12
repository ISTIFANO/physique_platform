import React, { useState, useEffect } from 'react';
import { FaWhatsapp } from 'react-icons/fa'; // Assuming you're using FontAwesome for icons

const ScrollToTop = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) { // Show button after scrolling down 300px
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    window.location.href = 'https://wa.me/+212609117392'; // Replace with your WhatsApp link
  };

  return (
    <>
      {showButton && (
        <div
          className="fixed bottom-8 right-8 bg-green-500 text-white p-3 rounded-full shadow-lg cursor-pointer transition-transform transform hover:translate-y-[-0.5rem]"
          onClick={handleClick}
        >
          <FaWhatsapp size={40} />
        </div>
      )}
    </>
  );
};

export default ScrollToTop;
