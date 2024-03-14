import React, { useState } from 'react';
import './header.css';
import logo from '../../assets/images/attendme1.png';
import { HiOutlineLogout } from "react-icons/hi";
import Home from '../../pages/Home';
import UserRegistration from '../../pages/UserRegistration/userRegistration';
import DailyAttendence from '../../pages/dailyAttendence';
import Page3 from '../../pages/Page3';
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
          <Link to="/page3" className='desktopMenuItemList'>Page3</Link>
        </div>

        <button className='desktopMenuBtn' onClick={() => {
          document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
        }}>
          <HiOutlineLogout className='desktopMenuIcon' /> Log Out
        </button>

      <IoMenu className='mobMenu' onClick={() => setShowMenu(!showMenu)} />
        <div className='navMenu' style={{ display: showMenu ? 'flex' : 'none' }}>
          <Link to="/" className='desktopMenuItemList'>Home</Link>
          <Link to="/userRegistration" className='desktopMenuItemList'>Registration</Link>
          <Link to="/dailyAttendence" className='desktopMenuItemList'>Daily Attendence</Link>
          <Link to="/page3" className='desktopMenuItemList'>Page3</Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/userRegistration" element={<UserRegistration />} />
        <Route path="/dailyAttendence" element={<DailyAttendence/>} />
        <Route path="/page3" element={<Page3 />} />
      </Routes>
    </Router>
  );
}

export default Navbar;

