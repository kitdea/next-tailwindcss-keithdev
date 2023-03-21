import React from 'react'
import Head from 'next/head'

const Contact = () => {
  return (
    <div>
     <Head>
        <title>fmR | Contact</title>
        <meta name="keywords" content="web developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="sm:w-full m-w-[1240px] max-w-screen-xl text-white m-auto flex flex-col align-middle justify-center h-[90vh] bg-fixed bg-black">
        <div>
          <h1 className="text-7xl md:text-7xl font-bold mb-10">Contact</h1>
          <h2 className='text-2xl'>francismarrosales@gmail.com</h2>
        </div>
      </div>
    </div>
  )
}

export default Contact