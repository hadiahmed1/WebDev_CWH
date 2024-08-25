import Card  from "./components/Card"
import Footer from "./components/Footer"
import Nav from "./components/Nav"

import py_img from './assets/py.png';
import java_img from './assets/java.png'
import cpp from './assets/cpp.png'
import js from './assets/js.png'

function App() {
  return (
    <>
      <Nav/>
      <div className="cards">
        <Card title={"Python"} desc={"AI & ML"} image={py_img}/>
        <Card title={"Java"} desc={"DSA & OOP"} image={java_img}/>
        <Card title={"C++"} desc={"Competitive Programming"} image={cpp}/>
        <Card title={"Java Script"} desc={"Web Dev"} image={js}/>
      </div>
      <Footer/>
    </>
  )
}

export default App
