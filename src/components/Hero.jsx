import React from 'react';

const Hero = ({ headingTitle, message }) => {
  return (
    <div className='flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img'>
      {/* overlay */}
      <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]'/>
      <div className='text-white p-5 z-[8] mt-[10rem]'>
        <h2 className='text-7xl md:text-8xl font-bold'>{headingTitle}</h2>
        <p className='py-5 text-3xl'>{message}</p>
        <button className='px-8 py-2 border'>Get Started</button>
      </div> 
    </div>
  )
}

export default Hero;