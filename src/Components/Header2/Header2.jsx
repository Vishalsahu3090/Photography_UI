
import './Header2.css'
import { Link } from 'react-router-dom';
import logo from '../../assets/Logo.png'

const Header2 = () => {
  return (
    <div className='background-image'>
        <div className="nav-bar">
        <div className="nav-bar-1">
        <Link className='link' to="/">HOME</Link>
        <Link className='link' to="/about">ABOUT</Link>
        <Link className='link' to="/services">SERVICES</Link>
        </div>
        <img src={logo} />
        <div className="nav-bar-1">
        <Link className='link' to="/portfolio">PORTFOLIO</Link>
        <Link className='link' to="/gallery">Gallery</Link>
        <Link className='link' to="/contact">CONTACT</Link>
        </div>
        </div>
    </div>
  )
}

export default Header2
