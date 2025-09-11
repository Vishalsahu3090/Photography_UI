
import './Headers.css'
import { Link } from 'react-router-dom';
import logo from '../../assets/Logo.png'


const Header = () => {
  return (
    <div className='background'>
        <div className="nav-bar-full">
        <div className="nav-bar-1">
        <Link to="/home">HOME</Link>
        <Link to="/about">ABOUT</Link>
        <Link to="/services">SERVICES</Link>
        </div>
        <img src={logo} />
        <div className="nav-bar-1">
        <Link to="/portfolio">PORTFOLIO</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/contact">CONTACT</Link>
        </div>
        </div>
      <div className="background-content">
      <h1>Your Dream Wedding Awaits</h1>
      <p>Artistic Wedding Photogarphy</p>
      </div>
    </div>
  )
}

export default Header
