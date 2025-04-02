import React from 'react'
import './SideBar.css'
import addIcon  from '../../assets/add_icon.png';
import orderIcon from '../../assets/order_icon.png';
import { NavLink } from 'react-router-dom';

const SideBar = () => {
  return (
    <div className='sidebar'>
        <div className="sidebar-options">
            <NavLink to='/add' className="sidebar-option">
                <img src={addIcon} alt="" />
                <p>Add items</p>
                </NavLink>
            
            <NavLink to ='/list'className="sidebar-option">
                <img src={orderIcon} alt="" />
                <p>List Items</p>
                </NavLink>
          
            <NavLink to='/order'className="sidebar-option">
                <img src={orderIcon} alt="" />
                <p>orders</p>
            </NavLink>
        </div>
        
            
        
   
      
    </div>
  )
}

export default SideBar
