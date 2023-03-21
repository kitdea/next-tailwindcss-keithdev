import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Layout from '@/components/Layout'
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
        <Header />
        <Component {...pageProps} />
        <Footer />
      </Layout>
    </main>
  )
  
}
