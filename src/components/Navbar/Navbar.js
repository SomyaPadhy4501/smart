import React from 'react'
import "./Navbar.css"
import {  Link} from "react-router-dom";  
import PropTypes from 'prop-types'

const Header = (props) => {
  
  return (
    <>  <nav className="navbar">
      <div className="logo">{props.title}</div>
      <ul className="nav-links">
        <div className="menu">
          <li><Link className='a' to="/">Home</Link></li>
          <li><Link className='a' to="/tutorial">Tutorial</Link></li>
          <li><Link className='a' to="/about">About Us</Link></li>
          <li><Link className='a' to="/profile">Profile</Link></li>
        </div>
      </ul>
    </nav></>
  )
}
Header.propTypes = {
  title: PropTypes.string.isRequired
}

export default Header;