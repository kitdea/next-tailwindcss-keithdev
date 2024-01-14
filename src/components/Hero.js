import Link from 'next/link'

const Hero = ({ headingTitle, message }) => {
  return (
    <div className='container p-4 m-auto flex items-center align-middle h-full max-h-screen md:h-[80vh] bg-fixed bg-cover bg-center'>
      {/* overlay */}
      <div className=''/>
      <div className='text-white z-[8]'>
        <h2 className='text-6xl md:text-8xl font-bold'>{headingTitle}</h2>
        <p className='py-5 text-1xl md:text-2xl'>{message}</p>
        <button className='text-1xl px-8 py-2 border hover:border-purple-500 hover:text-purple-500'>
          <Link href='/Contact'>Get Started</Link>
        </button>
      </div> 
    </div>
  )
}

export default Hero