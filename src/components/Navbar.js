import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar2'>
        <div className='navbar-container'>
            <img src="/images/moona.png" width='auto'></img>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
               HOME
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/song' className='nav-links' onClick={closeMobileMenu}>
               SONG
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/fanart' className='nav-links' onClick={closeMobileMenu}>
               ART
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/schedule' className='nav-links' onClick={closeMobileMenu}>
               SCHEDULE
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/news' className='nav-links' onClick={closeMobileMenu}>
               NEWS
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/stream' className='nav-links' onClick={closeMobileMenu}>
               STREAM
              </Link>
            </li>
            <li className='nav-item'>
            <a target="_blank" class='nav-links'
            href="https://hololive.hololivepro.com/en/talents/moona-hoshinova/">ABOUT</a>
            </li>
           
          
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;