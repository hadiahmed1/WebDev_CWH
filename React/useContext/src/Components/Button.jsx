import { useContext } from "react"
import { counterContext } from "../Context/context"
const Button = () => {
    const counter=useContext(counterContext);
  return (
    <div>
      <button style={{color:"red", padding:"2px"}}>I am a Button,{counter} </button>
    </div>
  )
}

export default Button
