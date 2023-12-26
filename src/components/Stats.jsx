import React from 'react'

const Stats = () => {
  return (
    <div className='w-[90%] p-5 rounded-[36px] bg-divBG flex flex-col md:flex-row justify-center place-items-center ml-7 items-center z-[99] mt-20 mb-20 text-center'>
        <div className='z-[99] flex w-full items-center justify-center place-items-center mb-10 border-b-2 border-[#9D9B9BCC] pb-10 pt-5 md:border-b-0 md:border-r-2 md:p-0 md:mb-0'>
            <h1 className='typoRounded text-primary mr-2 text-[30px] md:text-[50px] lg:text-[60px]'>100+</h1>
            <h2 className='text-secondary typo text-[25px]'>Happy Clients</h2>
        </div>
        <div></div>
        <div className='z-[99] flex w-full items-center mb-10 justify-center border-b-2 border-[#9D9B9BCC] pb-10 md:border-b-0 md:border-r-2 md:p-0 md:mb-0'>
            <h1 className='typoRounded text-primary mr-2 text-[30px] md:text-[50px] lg:text-[60px]'>200+</h1>
            <h2 className='text-secondary typo text-[25px]'>Completed Projects</h2>
        </div>
        <div className='z-[99] flex w-full items-center justify-center pb-5 md:p-0'>
            <h1 className='typoRounded text-primary mr-2 text-[30px] md:text-[50px] lg:text-[60px]'>100%</h1>
            <h2 className='text-secondary typo text-[25px]'>On-Time Delivery</h2>
        </div>
    </div>
  )
}

export default Stats