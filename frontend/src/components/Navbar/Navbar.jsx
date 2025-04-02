import React, { useContext, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png';
import profileIcon from '../../assets/profile_icon.png';
import bagIcon from '../../assets/bag_icon.png';
import logoutIcon from '../../assets/logout_icon.png';  
import searchIcon from '../../assets/search_icon.png';
import basketIcon from '../../assets/basket_icon.png';
import { Link, useNavigate } from 'react-router-dom';
import { StoreContext } from '../../Context/StoreContext';

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");
  const {getTotalCartAmount,token,setToken} = useContext(StoreContext);
const navigate = useNavigate();
  const logout = () =>{
localStorage.removeItem("token");
setToken("");
navigate("/")
  }

  return (
    <div className='navbar'>
      <Link to='/'><img src={logo} alt="logo" className="logo" /></Link>
      <ul className="navbar-menu">
        <Link to='/' onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>home</Link>
        <a href='#explore-product' onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}>menu</a>
        <a href='#app-download' onClick={() => setMenu("mobile-app")} className={menu === "mobile-app" ? "active" : ""}>mobile-app</a>
        <a href='#footer' onClick={() => setMenu("contact-us")} className={menu === "contact-us" ? "active" : ""}>contact us</a>
      </ul>
      <div className="navbar-right">
        <img src={searchIcon} alt="Search Icon" />
        <div className="navbar-search-icon">
          <Link to='/cart'><img src={basketIcon} alt="Basket Icon" /></Link>
          <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
        </div>
        {!token? <button onClick={() => setShowLogin(true)}>Sign in</button>
         
         : <div className='navbar-profile'> 
          
            <img src={profileIcon} alt=""/>
            <ul className="nav-profile-dropdown">
            <li onClick={() => navigate('/myorders')}><img src={bagIcon} alt=""/><p>Order</p></li>
              <hr />
              <li onClick={logout}><img src={logoutIcon} alt=""/><p>Logout</p></li>
            </ul>
          </div>
        }
      </div>
    </div>
  );
}
export default Navbar;
