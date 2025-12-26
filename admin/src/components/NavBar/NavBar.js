import React from 'react'
import logo from "../Assets/logo.png"
import { LogOut } from 'lucide-react';
import './NavBar.scss'
import { logout } from '../api/api';
import {useNavigate} from 'react-router-dom'

const NavBar = () => {
    const navigate =useNavigate();
  const handleLogOut = async () => {
    try {
        const res= await logout();
        if (res===200){
            navigate('/login')
        }
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };


  return (
    <div className='navbar'>
        <img src={logo} alt="Logo" className='logo'/>
        <button onClick={handleLogOut}>
            <LogOut size={18} />
        </button>
    </div>
  )
}

export default NavBar