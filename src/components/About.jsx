import React from 'react';
import personImage from '../assets/person.svg'


const About = () => {
  return (
    <div className='p-6 text-primary mt-20 flex  flex-col items-center justify-center' id='about'>
      <h2 className='text-[50px] font-black mb-7 typoRounded md:text-[70px]'>About Us</h2>
      <div className='flex justify-center items-center px-10 flex-col md:flex-row'>
        <p className='text-lg text-center md:max-w-[40%] w-full typo md:mr-10'>
        Hello there! 👋 We are a small but growing business based in Germany, passionate about bringing digital dreams to life. With a focus on creativity and functionality, we pride ourselves on creating stunning, user-friendly websites that resonate with our clients' visions. Let's embark on a journey to elevate your online presence and make your digital aspirations a reality! 💻✨        </p>
        <div className='mt-10 scale-125 hidden md:block pr-10'>
          <img src={personImage} alt="" className='mt-10' draggable='false'/>
        </div>
      </div>
    </div>
  );
};

export default About;