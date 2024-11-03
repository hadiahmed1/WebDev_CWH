import NavBar from './components/NavBar'
import './App.css'
import { useSelector,useDispatch } from 'react-redux'
import { increment,decrement } from './redux/counter/counterSlice'
function App() {
  const count=useSelector(state=>state.counter.value)
  const dispatch=useDispatch();
  return (
    <>
      <NavBar/>
      <div>
        <button onClick={()=>dispatch(increment())}>+</button>
        {count}
        <button onClick={()=>dispatch(decrement())}>-</button>
      </div>
      
    </>
  )
}

export default App
