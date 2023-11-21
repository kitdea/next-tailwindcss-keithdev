import Head from 'next/head';
import Hero from '@/components/Hero';

function HomePage() {
  return (
    <div>
      
        <Head>
          <title>Web Developer | Web Designer | SEO in the Philippines</title>
          <meta name='description' content='Web Developer Web Designer SEO Philippines' />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
          <link rel='icon' href='/favicon.ico' />
        </Head>
        <Hero headingTitle='Hi I&#39;m Francis' message='#WebDeveloper #WebDesigner #SEO | based in the Philippines' />
    </div>
  )
}

export default HomePage
