import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Layout from '@/components/Layout'
import Script from 'next/script'
import '@/styles/globals.css'
import { Poppins } from '@next/font/google'

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['400', '700'],
})

export default function App({ Component, pageProps }) {
  return (
    <main className={poppins.className}>
      
      <Layout>
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-F35C77DV7F"/>
        <Script id='google-analytics'>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-F35C77DV7F');
          `}
        </Script>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </Layout>
    </main>
  )
  
}
