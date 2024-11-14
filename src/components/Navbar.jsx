// import React from 'react';
import './Navbar.css';
import logo from './Image/logo.png';
import { IoMenu, IoCloseSharp  } from "react-icons/io5";
import { useState } from 'react';
import MobileNav from './MobileNav';
import { Link } from 'react-scroll';


const Navbar = () => {

  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <>
      <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />

      <nav className="nav-wrapper">
        <div className="nav-content">
          <div className="Logo-name">
            <img src={logo} alt="logo" className="logo" />
            <h1>Restaurant</h1>
          </div>
          <ul className="nav-links">
            <li><Link to="home" smooth={true} className="nav-item">Home</Link></li>
            <li><Link to="about" smooth={true} className="nav-item">About</Link></li>
            <li><Link to="portfolio" className="nav-item">Portfolio</Link></li>
            <li><Link to="clients" className="nav-item">Clients</Link></li>
            <li><Link to="blog" smooth={true} className="nav-item">Blog</Link></li>
            <li><Link to="footer" smooth={true} className="nav-item">Contact</Link></li>
          </ul>
          {/* <button className="booktable" onClick={() => {}}>BOOK A TABLE</button> */}
          <Link to="book-table" smooth={true}>
            <button className="booktable" onClick={() => {}}>BOOK A TABLE</button>
          </Link>
          <button className="menu-btn" onClick={toggleMenu}>
            <span className={"material-symbole-outlinre"} style={{ fontSize: "1.8rem", background: "transparent"}}>
              {/* <IoMenu /> */}
              {openMenu ? <IoCloseSharp /> : <IoMenu />}
            </span>
          </button>
        </div>  
      </nav>
    </>
  );
};

export default Navbar;
