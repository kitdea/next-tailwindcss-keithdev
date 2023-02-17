import Navbar from '@/components/Navbar'
import '@/styles/globals.css'
import { Poppins } from '@next/font/google'

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['400', '700'],
})

export default function App({ Component, pageProps }) {
  return (
    <main className={poppins.className}>
      <Navbar />
      <Component {...pageProps} />
    </main>

  )
  
  
}
