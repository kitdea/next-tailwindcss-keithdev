import React from 'react'
import Head from 'next/head'

const Work = () => {
  return (
    <div>
     <Head>
        <title>fmR | Work</title>
        <meta name="keywords" content="web developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="sm:w-full m-w-[1240px] max-w-screen-xl text-white m-auto flex flex-col align-middle justify-center h-[90vh] bg-fixed bg-black">
        <div>
          <h1 className='text-3xl text-center italic'>Under Maintenance</h1>
          <h2 className='text-2xl text-center italic'>Coming Soon</h2>
        </div>
      </div>
    </div>
  )
}

export default Work