import { useState } from 'react'
import { useEffect } from 'react'
import Nav from './components/Nav'
function rand(){
  let num=Math.floor(Math.random()*255);
  return num;
}
function App() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState({r:rand(),g:rand(),b:rand()})
  useEffect(() => {
      alert("Every Render")
  })
  useEffect(() => {
      alert("1st Render")
  }, [])
  useEffect(() => {//count render
      alert("Incrimenting count")
  }, [count])
  return (
    <>
      <Nav color={color}/>
      <div className="card">
        <button onClick={
          () => {
            setCount((count) => count + 1)
            setColor({r:rand(),g:rand(),b:rand()});
          }
        }>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
