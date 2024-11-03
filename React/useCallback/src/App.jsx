import { useCallback, useState } from 'react'
import './App.css'
import Nav from './Components/Nav'

function App() {
  const [count, setCount] = useState(0)
  const [adj,setAdj]=useState("Great")  
  const changeAdj=useCallback(
    ()=>{
      return("V.good")
    },[])
  
  return (
    <>
    <Nav adj={adj} changeAdj={changeAdj} setAdj={setAdj}/>
    <h1>Count: {count}</h1>
      <h1>USE CALL BACK</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
