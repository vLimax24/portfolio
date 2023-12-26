import React from 'react';
import personImage from '../assets/person.svg'


const About = () => {
  return (
    <div className='p-6 text-primary mt-20 flex  flex-col items-center justify-center' id='about'>
      <h2 className='text-[50px] font-black mb-7 typoRounded md:text-[70px]'>About Me</h2>
      <div className='flex justify-center items-center px-10 flex-col md:flex-row'>
        <p className='text-lg text-center md:max-w-[40%] w-full typo md:mr-10'>
          Hello! I'm Linas Gierga, a passionate frontend developer with a keen eye for design. I love creating
          engaging and user-friendly experiences on the web. My skills include React, JavaScript, and
          modern web technologies. <br/> I enjoy turning complex problems into simple and intuitive solutions. When I'm not coding, you'll find
          me exploring new technologies, attending meetups, or enjoying a good cup of juice.
        </p>
        <div className='mt-10 scale-125 hidden md:block pr-10'>
          <img src={personImage} alt="" className='mt-10' draggable='false'/>
        </div>
      </div>
    </div>
  );
};

export default About;