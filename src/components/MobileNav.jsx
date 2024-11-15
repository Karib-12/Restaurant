import React from 'react';
import "./MobileNav.css";
import { Link } from 'react-scroll';


const MobileNav = ({ isOpen, toggleMenu }) => {
  return (
    <div>
        <div className={`mobile-menu ${isOpen ? "active" : ""}`} onClick={toggleMenu}>
            <div className="mobile-menu-container">
                <ul>
                    <li><Link to="home" smooth={true} className="nav-item">Home</Link></li>
                    <li><Link to="about" smooth={true} className="nav-item">About</Link></li>
                    <li><Link to="portfolio" className="nav-item">Portfolio</Link></li>
                    <li><Link to="clients" className="nav-item">Clients</Link></li>
                    <li><Link to="blog" smooth={true} className="nav-item">Blog</Link></li>
                    <li><Link to="footer" smooth={true} className="nav-item">Contact</Link></li>

                    <Link to="book-table" smooth={true}>
                      <button className="booktable" onClick={() => {}}>BOOK A TABLE</button>
                    </Link>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default MobileNav;