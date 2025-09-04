import React from 'react';
import './Header.css';
import { FaPlus, FaSearch, FaBell, FaSun } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="main-header">
      <div className="header-right">
        <h2>صفحه اصلی</h2>
        <span>دوشنبه - ۱۷ مرداد ۱۴۰۴</span>
      </div>
      <div className="header-left">
        <div className="search-box">
          <FaSearch className="search-icon" />
          <input type="text" placeholder="جستجو کنید..." />
        </div>
        <button className="icon-btn"><FaSun /></button>
        <button className="icon-btn"><FaBell /></button>
        <button className="add-task-btn">
          <FaPlus /> افزودن کار جدید
        </button>
      </div>
    </header>
  );
};

export default Header;
