import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Header = () => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState('transparent');
  const [textColor, setTextColor] = useState('white');

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const changeColor = () => {
      if(window.scrollY >= 90) {
        setColor('#fff')
        setTextColor('#000')
      } else {
        setColor('transparent')
        setTextColor('#fff')
      }
    }
    window.addEventListener('scroll', changeColor);
  }, []);


  return (
    <div style={{backgroundColor: `${color}`}} className='fixed left-0 top-0 w-full z-10 ease-in duration-300'>
      <div className='sm:w-full m-w-[1240px] m-auto flex justify-between items-center p-4 text-white xl:w-8/12'>
        <Link href='/'>
          <h1 style={{color: `${textColor}`}} className='font-bold text-4xl'>fmR</h1>
        </Link>
        <ul style={{color: `${textColor}`}} className='hidden md:flex'>
          <li className='p-4 text-xl'>
            <Link href='/'>Home</Link>
          </li>
          <li className='p-4 text-xl'>
            <Link href='/About'>About</Link>
          </li>
          <li className='p-4 text-xl'>
            <Link href='/Work'>Work</Link>
          </li>
          <li className='p-4 text-xl'>
            <Link href='/Contact'>Contact</Link>
          </li>
        </ul>

        {/* Mobile Button*/}
        <div onClick={handleNav} className='block md:hidden z-10 p-4 cursor-pointer'>
          {nav ? <AiOutlineClose size={30} style={{color: `${textColor}`}} /> : <AiOutlineMenu size={30} style={{color: `${textColor}`}} />}
        </div>
        {/* Mobile Menu */}
        <div className={
          nav 
            ? 'md:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-gray-900 text-center ease-in duration-300'
            : 'md:hidden absolute top-0 left-[-200%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-grey text-center ease-in duration-300' 
        }>
          <ul>
            <li className='p-4 text-4xl hover:text-gray-300'>
              <Link href='/'>Home</Link>
            </li>
            <li className='p-4 text-4xl hover:text-gray-300'>
              <Link href='/about'>About</Link>
            </li>
            <li className='p-4 text-4xl hover:text-gray-300'>
              <Link href='/work'>Work</Link>
            </li>
            <li className='p-4 text-4xl hover:text-gray-300'>
              <Link href='/contact'>Contact</Link>
            </li>
          </ul>
        </div>  

      </div>
    </div>
  )
}

export default Header