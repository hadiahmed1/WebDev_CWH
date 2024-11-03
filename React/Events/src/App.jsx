import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [Name, setName] = useState("Hadi")
  const handelChange=(e)=>{
    setName(e.target.value)
  }
  return (
    <>
      <div>
        <input type='text' value={Name} onChange={handelChange}/>
      </div>
    </>
  )
}

export default App
