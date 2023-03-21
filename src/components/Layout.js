import Footer from './Footer';
import Header from './Header';

const Layout = ({ children }) => {
  return (

    <div className='flex flex-col align-middle justify-center h-screen bg-black'>
      
        { children }
      
    </div>
  )
}

export default Layout;