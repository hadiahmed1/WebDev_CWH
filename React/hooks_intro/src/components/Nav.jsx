import { useEffect } from "react"


const Nav = ({color}) => {
  const colour = `rgb(${color.r}, ${color.g}, ${color.b})`;
  useEffect(() => {
      alert("Colour was Changed")
  }, [colour])
  return (
    <div style={{backgroundColor:colour}}>Nav Bar {colour}</div>
  )
}

export default Nav