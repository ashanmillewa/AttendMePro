import React, { useState } from 'react';
import './header.css';
import logo from '../../assets/images/attendme1.png';
import { HiOutlineLogout } from "react-icons/hi";
import Home from '../../pages/Home';
import UserRegistration from '../../pages/UserRegistration/userRegistration';
import DailyAttendence from '../../pages/dailyAttendence';
import Login from '../../pages/Login/login';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import { IoMenu } from "react-icons/io5";


const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  
  return (
    <Router>
      <nav className='navbar'>
        <img src={logo} alt='logo' className='logo' />
        <div className='desktopMenu'>
          <Link to="/" className='desktopMenuItemList'>Home</Link>
          <Link to="/userRegistration" className='desktopMenuItemList'>Registration</Link>
          <Link to="/dailyAttendence" className='desktopMenuItemList'>Daily Attendence</Link>
          <Link to="/login" className='desktopMenuItemList'>Login</Link>
        </div>

        <button className='desktopMenuBtn' onClick={(logOut) => {
          document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
        }}>
          <HiOutlineLogout className='desktopMenuIcon' /> Log Out
        </button>

      <IoMenu className='mobMenu' onClick={() => setShowMenu(!showMenu)} />
        <div className='navMenu' style={{ display: showMenu ? 'flex' : 'none' }}>
          <Link to="/" className='desktopMenuItemList'>Home</Link>
          <Link to="/userRegistration" className='desktopMenuItemList'>Registration</Link>
          <Link to="/dailyAttendence" className='desktopMenuItemList'>Daily Attendence</Link>
          <Link to="/login" className='desktopMenuItemList'>Login</Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/userRegistration" element={<UserRegistration />} />
        <Route path="/dailyAttendence" element={<DailyAttendence/>} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default Navbar;

