import React from 'react';
import {Link} from 'react-router-dom'

const Header = () => {
    return (
        
        <nav>
    <div className="nav-wrapper">
     <div className='container'>

      <Link to='/' className="brand-logo">BIT Show</Link>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><Link to='/about'>About</Link></li>
        
      </ul>
  </div>

    </div>
  </nav>
    );
};

export default Header;