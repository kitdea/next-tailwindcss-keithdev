import Head from 'next/head';
import Image from 'next/image';
import Hero from '@/components/Hero';

function HomePage() {
  return (
    <div>
      
        <Head>
          <title>Web Developer | Web Designer | SEO in the Philippines</title>
          <meta name='description' content='Web Developer Web Designer SEO Philippines' />
          <link rel='icon' href='/favicon.ico' />
        </Head>
        <Hero headingTitle='Hi I&#39;m Francis' message='#WebDeveloper #WebDesigner #SEO | based in Philippines' />
      
    </div>
  )
}

export default HomePage
