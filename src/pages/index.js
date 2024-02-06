import Head from 'next/head';
import Hero from '@/components/Hero';

function HomePage() {
  return (
    <div>
      
        <Head>
          <title>Web Developer | Web Designer | SEO in the Philippines</title>
          <meta name='description' content='Web Developer Web Designer SEO Philippines' />
          <meta name="msvalidate.01" content="011724B0EECD612DBE6E6824D7D3A370" />
          <link rel='icon' href='/avatar-purple.svg' />
        </Head>
        <Hero headingTitle='Hi I&#39;m Francis' message='#WebDeveloper #WebDesigner #SEO | based in the Philippines' />
    </div>
  )
}

export default HomePage
