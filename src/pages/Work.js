import Head from 'next/head'

const Work = () => {
  return (
    <div>
     <Head>
        <title>fmR | Work</title>
        <meta name="keywords" content="web developer" />
        <link rel='icon' href='/avatar-purple.svg' />
      </Head>

      <div className="container text-white m-auto flex flex-col align-middle justify-center h-[60vh] md:h-[80vh] p-4">
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-extralight mb-10">Coming Soon...</h1>
      </div>

      <div className="container text-white m-auto flex-col align-middle justify-center h-full lg:h-[80vh] bg-fixed p-4 my-12 hidden">
        <div>
          <h1 className='text-4xl md:text-5xl lg:text-7xl font-bold mb-10'>Project</h1>
        </div>
        
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <article className="flex max-w-xl flex-row items-start justify-between border border-gray-500 p-5 rounded-xl">
          
            <div className="group relative">
              <h3 className="mt-3 text-xl md:text-3xl font-semibold leading-6 text-white group-hover:text-gray-2  00">
                <a href="#">
                  <span className="absolute inset-0"></span>
                  Project 1
                </a>
              </h3>
              <p className="mt-5 text-base md:text-lg leading-6 text-white line-clamp-3">Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.</p>
            </div>
            
          </article>
          <article className="flex max-w-xl flex-row items-start justify-between border border-gray-500 p-5 rounded-xl">

            <div className="group relative">
              <h3 className="mt-3 text-xl md:text-3xl font-semibold leading-6 text-white group-hover:text-gray-2  00">
                <a href="#">
                  <span className="absolute inset-0"></span>
                  Project 2
                </a>
              </h3>
              <p className="mt-5 text-base md:text-lg leading-6 text-white line-clamp-3">Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.</p>
            </div>
            
          </article>
          <article className="flex max-w-xl flex-row items-start justify-between border border-gray-500 p-5 rounded-xl">
            <div className="group relative">
              <h3 className="mt-3 text-xl md:text-3xl font-semibold leading-6 text-white group-hover:text-gray-2  00">
                <a href="#">
                  <span className="absolute inset-0"></span>
                  Project 3
                </a>
              </h3>
              <p className="mt-5 tex-base md:text-lg leading-6 text-white line-clamp-3">Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.</p>
            </div>
          </article>
        
        </div>

      </div>
    </div>
  )
}

export default Work