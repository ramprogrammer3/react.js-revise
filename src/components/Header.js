
import { Link } from "react-router-dom"
import "./header.css"

const Header = () => {
  return (
    <header className="header">
        <Link to= "/">Home</Link>
        <Link to= "/create">Create book</Link>
    </header>
  )
}

export default Header