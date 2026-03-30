import { Suspense } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import ToolsDetails from './components/ToolsDetails'

const getChatgptJson =async()=>{
    const res=await fetch("/chatgpt.json")
    return res.json()
}

const chatgptPromise=getChatgptJson()



function App() {
 

  return (
    <>  
      <Navbar/>
      <Suspense>
        <ToolsDetails chatgptPromise={chatgptPromise}/>
      </Suspense>
      
    </>
  )
}

export default App
