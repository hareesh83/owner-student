import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa';
import {Link} from 'react-router-dom';
import Logo from '../../assets/owner.png'

const Header = () => {
  const [barsOpen, setBarsOpen]=useState(false);
  const [openNav, setOpenNav]=useState(false)
  return (
    <div>
      <nav class="navbar">
      <div class="logo_header">
        <Link to="/">
          <img src={Logo} alt="logo" className='logo'/>
        </Link>
         <button className={barsOpen?'':'navbar_toggle'} onClick={()=>setOpenNav(!openNav)}>
          <FaBars/> 
        </button>
        
      </div>
      
      <div>
        <input type="search" placeholder="search here" class="search"/>
        <i class="fa fa-magnifying-glass search_icon" ></i>
      </div>
        
      <ul className={openNav?"show_nav":'main_nav'}>
        <li>
          <Link to="/" class="nav_links active">Home</Link>
        </li>
        <li>
            <Link to="about" class="nav_links">About</Link>
          </li>
          <li>
            <Link to="services" class="nav_links">Services</Link>
          </li>
          <li>
            <Link to="contact" class="nav_links">Contact</Link>
          </li>
          <li>
            <Link to="blog" class="nav_links">Blog</Link>
          </li>
          <li>
            <Link to="" class="nav_links">Login/Signup</Link>
          </li>
        </ul>
        
      </nav>
    </div>
  )
}

export default Header