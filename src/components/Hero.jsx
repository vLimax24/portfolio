import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';

const Hero = () => {
  const [showButton, setShowButton] = useState(false);

  // Show the button after 2 seconds
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowButton(true);
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, []);

  // Button fade-up animation
  const buttonAnimation = useSpring({
    opacity: showButton ? 1 : 0,
    transform: showButton ? 'translateY(0)' : 'translateY(20px)',
  });

  return (
    <div className='relative w-full flex flex-col items-center justify-center z-[1]'>
      {/* Blurred circle */}
      <div className='absolute inset-0 flex items-center justify-center'>
        <div className='w-[500px] h-[500px] lg:w-[800px] lg:h-[800px] bg-gradient-to-br from-[#7ADED6] to-transparent opacity-50 rounded-full mix-blend-overlay blur-[700px] z-[-99999]'></div>
      </div>
      
      <div className='bg-divBG py-1 px-5 rounded-[16px] animate__animated animate__fadeInUp'>
        <p className='typoRounded text-secondary font-black'>Available for Hire!</p>
      </div>

      <h1 className='text-primary text-[50px] md:text-[70px] lg:text-[140px] typoRounded mb-[-20px] md:mb-[-35px] lg:mb-[-70px] animate__animated animate__fadeInUp font-black'>DELGIX STUDIOS</h1>
      <h2 className='text-secondary text-[35px] md:text-[55px] lg:text-[90px] typoRounded animate__animated animate__fadeInUp mb-5 font-black'>FULLSTACK DEVELOPERS</h2>

      {/* Fade-up "Hire Me" button */}
      <animated.button
        style={buttonAnimation}
        className='hover:scale-125 mt-4 bg-[#68A3BB] text-primary py-2 md:px-8 md:py-4 md:text-[40px] typoRounded  font-black px-6 rounded-full md:scale-[1.1l] border-none focus:outline-none transition-all duration-500'
      >
        <a href="#contact">
          Hire Us!
        </a>
      </animated.button>
    </div>
  );
};

export default Hero;
