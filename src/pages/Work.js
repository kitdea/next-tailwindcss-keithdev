import React from 'react'
import Head from 'next/head'
import Image from 'next/image'

const Work = () => {
  return (
    <div>
     <Head>
        <title>fmR | Work</title>
        <meta name="keywords" content="web developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="sm:w-full m-w-[1240px] xl:w-8/12 text-white m-auto flex flex-col align-middle justify-center h-[90vh] bg-fixed ">
        <div>
          <h1 className='text-7xl md:text-7xl font-bold mb-10'>Project</h1>
        </div>
        
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <article class="flex max-w-xl flex-row items-start justify-between">
          
            <div class="group relative">
              <h3 class="mt-3 text-xl font-semibold leading-6 text-white group-hover:text-gray-2  00">
                <a href="#">
                  <span class="absolute inset-0"></span>
                  Project 1
                </a>
              </h3>
              <p class="mt-5 text-sm leading-6 text-white line-clamp-3">Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.</p>
            </div>
            
          </article>
          <article class="flex max-w-xl flex-row items-start justify-between">

            <div class="group relative">
              <h3 class="mt-3 text-xl font-semibold leading-6 text-white group-hover:text-gray-2  00">
                <a href="#">
                  <span class="absolute inset-0"></span>
                  Project 2
                </a>
              </h3>
              <p class="mt-5 text-sm leading-6 text-white line-clamp-3">Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.</p>
            </div>
            
          </article>
          <article class="flex max-w-xl flex-row items-start justify-between">

            <div class="group relative">
              <h3 class="mt-3 text-xl font-semibold leading-6 text-white group-hover:text-gray-2  00">
                <a href="#">
                  <span class="absolute inset-0"></span>
                  Project 3
                </a>
              </h3>
              <p class="mt-5 text-sm leading-6 text-white line-clamp-3">Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.</p>
            </div>
            
          </article>
        </div>

      </div>
    </div>
  )
}

export default Work