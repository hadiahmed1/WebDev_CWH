import { Link } from "react-router-dom"
const Nav = () => {
  return (
    <div>
        <li><Link to="/">Home</Link></li>
        <li><Link>About</Link></li>
        <li><Link to="/login"> login</Link></li>
    </div>
  )
}

export default Nav