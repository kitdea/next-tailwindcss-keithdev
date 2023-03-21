import Link from "next/link"
import { useEffect } from "react";
import { useRouter } from "next/router"

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 3000)
  }, [])
  
  return (
    <div className="flex items-center justify-center h-screen bg-center bg-black">
      <div className='text-white' >
        <h1 className= 'text-6xl font-bold text-center leading-tight'>404 Ooooppppsss</h1>
        <h2 className='text-4xl font-bold text-center leading-tight'>That page cannot be found.</h2>
        <p className='border border-white my-7 text-2xl p-2 font-light text-center leading-tight'>Go back to the <Link href="/">Homepage</Link></p>
      </div>    
    </div>
  )
}

export default NotFound