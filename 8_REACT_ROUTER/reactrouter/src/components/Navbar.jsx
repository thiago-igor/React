// 2 - Links com react routes
import './Navbar.css';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav> {/* Links da pag */}
      <Link to="/">Home</Link>
      <Link to="/about">Sobre</Link>
    </nav>
  )
}

export default Navbar
