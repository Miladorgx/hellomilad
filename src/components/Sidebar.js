import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="logo">Taskify</div>
      <nav className="nav top-nav">
        <a className="nav-item active" href="#home">خانه</a>
        <a className="nav-item" href="#calendar">تقویم</a>
        <a className="nav-item" href="#today">کارهای امروز</a>
        <a className="nav-item" href="#my-tasks">کارهای من</a>
      </nav>
      <nav className="nav bottom-nav">
        <a className="nav-item" href="#support">پشتیبانی</a>
        <a className="nav-item" href="#settings">تنظیمات</a>
      </nav>
    </aside>
  );
};

export default Sidebar;
