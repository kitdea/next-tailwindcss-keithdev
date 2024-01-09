import React from 'react'
import Head from 'next/head'

const Contact = () => {
  return (
    <div>
     <Head>
        <title>fmR | Contact</title>
        <meta name="keywords" content="web developer" />
        <link rel='icon' href='/avatar-purple.svg' />
      </Head>

      <div className="container p-4 text-white m-auto flex flex-col align-middle justify-center h-[60vh] md:h-[80vh] bg-fixed">
        <div>
          <h1 className="text-4xl md:text-7xl font-bold mb-10">Contact</h1>
          <h2 className='text-base md:text-lg'><span className="font-bold">WhatsApp:</span> <span className="cursor-pointer hover:text-purple-500">+63 995 876-6249</span></h2>
          <h3 className='text-base md:text-lg'><span className="font-bold">Email:</span> <a className="hover:text-purple-500" href="mailto:francismarrosales@gmail.com">francismarrosales@gmail.com</a></h3>
        </div>
      </div>
    </div>
  )
}

export default Contact