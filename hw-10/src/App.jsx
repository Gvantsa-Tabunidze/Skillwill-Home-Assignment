import { useState } from 'react'
import './App.css'
import { ComponentOne } from './ComponentOne'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <img src='../devImage.jpg'></img>
      <h1>Gvantsa's Portfolio</h1>
        </div>

        <ComponentOne />
    </>
  )
}

export default App
