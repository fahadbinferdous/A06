import { Suspense } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import ToolsDetails from './components/ToolsDetails'
import { ToastContainer } from 'react-toastify'
import Banner from './components/Banner'

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
      <Suspense>
        <ToolsDetails chatgptPromise={chatgptPromise}/>
      </Suspense>
      <ToastContainer/>
    </>
  )
}

export default App
