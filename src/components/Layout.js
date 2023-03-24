import Footer from './Footer';
import Header from './Header';

const Layout = ({ children }) => {
  return (

    <div className='flex flex-col align-middle justify-center h-screen bg-cover bg-center'>
      <div className='absolute top-0 left-0 right-0 bottom-0 bg-black z-[2]'>
        { children }
      </div>
    </div>
  )
}

export default Layout;