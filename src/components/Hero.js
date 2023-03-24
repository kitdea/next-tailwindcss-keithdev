import React from 'react'
import Link from 'next/link'

const Hero = ({ headingTitle, message }) => {
  return (
    <div className='sm:w-full m-w-[1240px] xl:w-8/12 p-4 m-auto flex items-center align-middle justify-center h-[90vh] bg-fixed bg-cover bg-center'>
      {/* overlay */}
      <div className=''/>
      <div className='text-white p-5 z-[8]'>
        <h2 className='text-7xl md:text-8xl font-bold'>{headingTitle}</h2>
        <p className='py-5 text-3xl'>{message}</p>
        <button className='text-2xl px-8 py-2 border'>
          <Link href='/Contact'>Get Started</Link>
        </button>
      </div> 
    </div>
  )
}

export default Hero