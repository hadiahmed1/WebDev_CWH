import { useState,useMemo } from 'react'
import './App.css'
const nums=new Array(30000000).fill(0).map((_,i)=>{
  return {
    index:i,
    isMagic:i===29000000
  }
})
function App() {
  const [count, setCount] = useState(0)
  const [numbers,setNumbers]=useState(nums);
  const magical=useMemo(() => numbers.find(item=>item.isMagic===true), [])
  
  return (
    <>
      <span>Magical Number is {magical.index}</span>
      <h1>USE MEMO HOOK</h1>
      <div className="card">
        <button onClick={() => {
            setCount((count) => count + 1)
            if(count%10==0){
              setNumbers([...numbers])
            }
          }}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
