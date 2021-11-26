import React from "react";
import './App.css';

const App = () => {
  return (
    <div className='app-wrapepr'>
      <header className='header'>
        <img src="https://cdn.logo.com/hotlink-ok/logo-social.png" alt="" />
      </header>
      <nav className='navBar'>
        <ul>
          <li>Profile</li>
          <li>Messages</li>
          <li>News</li>
          <li>Music</li>
        </ul>
      </nav>
        <div className='content'>Main content</div>
    </div>
  );
};

export default App;
