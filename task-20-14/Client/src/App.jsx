import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LoginPage from './components/pages/LoginPage'
import LoginOptions from './components/pages/LoginOptions'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='flex justify-center bg-black h-screen' 
     style={{ backgroundImage: "url('/src/components/images/img3.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
      
       <LoginPage/>
       {/* <img src="src\components\images\img3.jpg" alt="" className='w-22 ml-20'/> */}
       </div>
    </>
  )
}

export default App
