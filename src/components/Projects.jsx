import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import imageOneHero from '../assets/heroPortfolio.png'
import project1 from '../assets/Project1.png'
import project12 from '../assets/Project1-2.png'


const projectsData = [
  {
    title: 'Portfolio Website',
    description: 'My newest Version of my portfolio built with React and Tailwindcss',
    imageUrl: imageOneHero,
    link: 'https://vLimax24.github.io/portfolio',
    images: [imageOneHero, project1, project12],
    sourceCode: '#',
  },
];

const ProjectSidebar = ({ project, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % project.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + project.images.length) % project.images.length
    );
  };

  useEffect(() => {
    // Add event listeners for keyboard navigation
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') {
        prevImage();
      } else if (e.key === 'ArrowRight') {
        nextImage();
      } else if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    // Cleanup event listeners when the component unmounts
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose, prevImage, nextImage]);

  return (
    <div className="fixed top-0 right-0 h-full w-full md:w-1/2 lg:w-1/3 bg-[#55A8A1] p-8 overflow-y-auto z-[99999999999999]" id='projects'>
          <button className="text-primary font-bold text-[32px] hover:rotate-[90deg] transition-all duration-500 absolute top-4 right-8 " onClick={onClose}>
          &#10006;
          </button>
      <div className="mt-20 relative">
        <img
          className="w-full h-64 object-cover rounded-lg"
          src={project.images[currentImageIndex]}
          alt={`Project ${currentImageIndex + 1}`}
        />
        <div className="absolute top-0 left-0 w-full h-full flex justify-between items-center">
          <button
            className="text-white text-3xl focus:outline-none hover:text-gray-300 ml-5 hover:text-[#55A8A1] duration-300 transition-transform ease-in-out"
            onClick={prevImage}
          >
            &#8249;
          </button>
          <button
            className="text-white text-3xl focus:outline-none hover:text-gray-300 mr-5 hover:text-[#55A8A1] duration-300 transition-transform ease-in-out"
            onClick={nextImage}
          >
            &#8250;
          </button>
        </div>
      </div>
      <div className="mt-4 text-primary">
        <h2 className="font-bold text-primary typoRounded text-4xl mb-2">{project.title}</h2>
        <p className="text-gray-600">{project.description}</p>
        <div className="mt-4 flex justify-between items-center">
          <div className='flex justify-between items-center'>
            <a href={project.link} className="text-blue-500 mr-4 bg-background py-2 px-6 rounded-[12px] hover:scale-[1.05] hover:cursor-pointer duration-300 transition-all">
              Visit Website
            </a>
            <a href={project.sourceCode} className="text-blue-500 bg-background py-2 px-6 rounded-[12px] hover:scale-[1.05] hover:cursor-pointer duration-300 transition-all">
              Source Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};


const ProjectCard = ({ project, onClick }) => {
  const animationProps = useSpring({ opacity: 1, from: { opacity: 0 } });

  return (
    <animated.div style={animationProps} className={`max-w-sm rounded-[24px] overflow-hidden bg-divBG shadow-lg transform hover:scale-105 transition-transform cursor-pointer typo text-primary`}>
      <img className="w-full h-48 object-cover" src={project.imageUrl} alt={project.title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{project.title}</div>
        <p className="text-gray-700 text-base">{project.description}</p>
      </div>
      <div className="px-6 py-4 flex justify-between items-center">
        <button onClick={onClick} className="text-blue-500 hover:underline">
          Learn more
        </button>
        <button className="text-blue-500 hover:underline">
          <a href="#">Website</a>
        </button>
      </div>
    </animated.div>
  );
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const openSidebar = (project) => {
    setSelectedProject(project);
    setIsSidebarOpen(true);
  };

  const closeSidebar = () => {
    setSelectedProject(null);
    setIsSidebarOpen(false);
  };

  useEffect(() => {
    // Disable scrolling on the normal site when the sidebar is open
    if (isSidebarOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    // Cleanup when the component unmounts
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isSidebarOpen]);

  const darkenStyle = useSpring({
    opacity: isSidebarOpen ? 0.8 : 0,
    pointerEvents: isSidebarOpen ? 'auto' : 'none',
  });

  return (
    <div className={`flex flex-col justify-center items-center relative`} id='projects'>

      
      {/* Dark overlay */}
      <animated.div
        className="fixed top-0 left-0 w-full h-full bg-black z-50"
        style={darkenStyle}
        onClick={closeSidebar}
      ></animated.div>

      <h1 className="mb-10 mt-10 typoRounded text-[50px] md:text-[70px] text-primary">Projects</h1>
      <div className="grid grid-cols-1 grid-rows-6 place-items-center md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2 md:grid-rows-3">
        {projectsData.map((project, index) => (
          <div key={index} className={`m-4 ${isSidebarOpen ? 'darken-card' : ''}`}>
            <ProjectCard project={project} onClick={() => openSidebar(project)} />
          </div>
        ))}
        {selectedProject && (
          <ProjectSidebar project={selectedProject} onClose={closeSidebar} />
        )}
      </div>
    </div>
  );
};

export default Projects;