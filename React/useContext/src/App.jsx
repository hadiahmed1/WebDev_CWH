import { useState } from 'react'
import './App.css'
import Nav from './Components/Nav'
import { counterContext } from './Context/context'
useState
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <counterContext.Provider value={count}>
      <h1>USE CONTEXT HOOK</h1>
      <Nav></Nav>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      </counterContext.Provider>
    </>
  )
}

export default App
