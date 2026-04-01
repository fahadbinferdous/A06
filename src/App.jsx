import { Suspense } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import ToolsDetails from './components/ToolsDetails'
import { ToastContainer } from 'react-toastify'
import Banner from './components/Banner'
import Stat from './components/Stat'
import Footer from './components/Footer'
import GetStarted from './components/GetStarted'
import Pricing from './components/Pricing'

const getChatgptJson =async()=>{
    const res=await fetch("/chatgpt.json")
    return res.json()
}

const chatgptPromise=getChatgptJson()



function App() {
 

  return (
    <>  
      <Navbar/>
      <Banner/>
      <Stat/>
      <Suspense fallback={<span className="loading loading-spinner loading-xl flex justify-center items-center h-screen"></span>}>
        <ToolsDetails chatgptPromise={chatgptPromise}/>
      </Suspense>
      
      <GetStarted/>
      <Pricing/>
      <Footer/>
      <ToastContainer/>
    </>
  )
}

export default App
