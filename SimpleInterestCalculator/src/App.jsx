import { useState } from 'react'
import './App.css'
import InterestCalculator from './Components/InterestCalculator'

function App() {
  const [count, setCount] = useState(0)

  return (
    <InterestCalculator/>
  )
}

export default App
