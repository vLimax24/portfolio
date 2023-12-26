import { useState } from 'react'
import { Navbar, Footer, Projects, Contact, Hero, About, Stats } from './components'

function App() {

  return (
    <>
      <div className='bg-background typo scroll-smooth flex flex-col justify-center'>
        <Navbar className='z-[999]'/>
        <Hero/>
        <Stats/>
        <About/>
        <Projects/>
        <Contact/>
        <Footer/>
        <div className='absolute inset-0 flex items-center justify-center'>
        <div className='w-[500px] h-[500px] lg:w-[800px] lg:h-[800px] bg-gradient-to-br from-[#7ADED6] to-transparent opacity-50 rounded-full mix-blend-overlay blur-[700px] z-[-99999]'></div>
        </div>
        <div className='absolute inset-0 flex items-center justify-center'>
        <div className='w-[500px] h-[500px] lg:w-[800px] lg:h-[800px] bg-gradient-to-br from-[#7ADED6] to-transparent opacity-50 rounded-full mix-blend-overlay blur-[700px] z-[-99999]'></div>
        </div>
      </div>
    </>
  )
}

export default App
