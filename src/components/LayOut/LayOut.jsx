import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'

export default function LayOut() {
  return (
    <>
    <Navbar />  

  <main className='flex-grow pt-20 '>  <Outlet  /></main>



  <Footer />

    </>
  )
}
