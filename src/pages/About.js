import Head from 'next/head'
import Link from 'next/link'

const About = () => {
  return (
    <div>
     <Head>
        <title>fmR | About</title>
        <meta name="keywords" content="web developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className="container p-4 text-white m-auto flex flex-col align-middle justify-center h-[90vh] bg-fixed">
      <div>
        <h1 className="text-7xl md:text-7xl font-bold mb-10">About Me</h1>
        <p className="text-xl mb-4">
          Hi there! My name is Francis and I am a Web Developer, Designer, and SEO Specialist based in Philippines.
        </p>
        <p className="text-xl mb-4">
          I have always been interested in the intersection of technology and design, and discovered my love for web development and design while working as an entry level graphic designer. I am skilled in HTML,CSS, Javascript, Adobe Creative Suite, Figma and have a strong understanding of user experience and web design principles.
        </p>
        <p className="text-xl mb-4">
          In addition to my web development and design skills, I also have experience in search engine optimization (SEO). I understand the importance of making websites visible and easy to find online, and have a track record of successfully optimizing websites to rank higher in search results.
        </p>
        <p className="text-xl mb-4">
          I am passionate about creating high-quality, user-friendly websites that not only look great but also function seamlessly and are optimized for search engines. In my free time, you can find me spending time with my family or working on personal projects.
        </p>
        <p className="text-xl mb-4">
          Thank you for visiting my website. Hope to work with you soon!
        </p>

          <div>
            <p className='text-xl text-purple-500 underline'><span className='font-bold'><Link href='/Resume'>CV/Resume</ Link></span></p>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default About