import Head from 'next/head';
import Image from 'next/image';
import Hero from '@/components/Hero';
import Slider from '@/components/Slider';
import { SliderData } from '@/components/SliderData';


function HomePage() {
  return (
    <div>
      <Head>
        <title>Keith Portfolio</title>
        <meta name='description' content='Web Developer Portfolio' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Hero headingTitle='Hi I&#39;m Francis' message='#WebDeveloper #WebDesigner #SEO ' />
      <Slider slides={SliderData} />
    </div>
  )
}

export default HomePage
