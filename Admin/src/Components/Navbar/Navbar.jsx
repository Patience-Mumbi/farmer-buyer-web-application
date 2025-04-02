import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png';

import profileImage  from '../../assets/profile_image.png';
const Navbar = () => {
  return (
    <div className='navbar'>
      <img className='logo' src={logo} alt="" />
      <img className='profile' src={profileImage} alt="" />
    </div>
  )
}

export default Navbar;