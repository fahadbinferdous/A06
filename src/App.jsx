import { Suspense } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import ToolsDetails from './components/ToolsDetails'
import { ToastContainer } from 'react-toastify'
import Banner from './components/Banner'
import Stat from './components/Stat'
import Footer from './components/Footer'

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
      <Suspense>
        <ToolsDetails chatgptPromise={chatgptPromise}/>
      </Suspense>
      <Footer/>
      <ToastContainer/>
    </>
  )
}

export default App
