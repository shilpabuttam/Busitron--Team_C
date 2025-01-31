import { useState } from 'react'

import './App.css'
import Sample from './components/Sample'

function App() {
  const [count, setCount] = useState(0)

  return (
   <Sample/>
  )
}

export default App
