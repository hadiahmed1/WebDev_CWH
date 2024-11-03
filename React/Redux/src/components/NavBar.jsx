import { useSelector } from "react-redux"
const NavBar = () => {
  const count=useSelector(state=>state.counter.value)
  return (
    <div>
      <div>Count={count}</div>
    </div>
  )
}

export default NavBar
