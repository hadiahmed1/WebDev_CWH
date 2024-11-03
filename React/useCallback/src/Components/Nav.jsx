import React from 'react'
import { memo } from 'react'

const Nav = ({adj,changeAdj,setAdj}) => {
    console.log("Navbar is Rendred")
  return (
    <div>
      I am a {adj} navbar
      <button onClick={()=>setAdj(changeAdj)}>BTN</button>
    </div>
  )
}

export default Nav
