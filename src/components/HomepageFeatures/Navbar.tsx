import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {useColorMode} from '@docusaurus/theme-common';

function NavbarLogo() {
  return (
    <div className="navbar__brand">
      <div className="navbar__logo">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" fill="#00E676"/>
          <path d="M12 6C10.9 6 10 6.9 10 8C10 9.1 10.9 10 12 10C13.1 10 14 9.1 14 8C14 6.9 13.1 6 12 6Z" fill="#00E676"/>
          <path d="M12 14C10.9 14 10 14.9 10 16C10 17.1 10.9 18 12 18C13.1 18 14 17.1 14 16C14 14.9 13.1 14 12 14Z" fill="#00E676"/>
        </svg>
      </div>
      <b className="navbar__title">Mint</b> Starter Kit
    </div>
  );
}

export default function Navbar() {
  const {siteConfig} = useDocusaurusContext();
  
  return (
    <header className="navbar navbar--fixed-top">
      <div className="navbar__inner">
        <div className="navbar__items">
          <Link className="navbar__brand" to="/">
            <NavbarLogo />
          </Link>
          
          <Link className="navbar__item navbar__link" to="/docs/guides">
            Guides
          </Link>
          
          <Link className="navbar__item navbar__link" to="/docs/api">
            API Reference
          </Link>
          
          <Link className="navbar__item navbar__link" to="/docs/pro">
            Pro 7
          </Link>
        </div>
        
        <div className="navbar__items navbar__items--right">
          <div className="navbar__search">
            <input 
              className="navbar__search-input" 
              placeholder="Search or ask..." 
            />
            <span className="navbar__search-hotkey">Ctrl K</span>
          </div>
          
          <Link className="navbar__item button button--secondary" to="/support">
            Support
          </Link>
          
          <Link className="navbar__item button button--primary" to="/dashboard">
            Dashboard
          </Link>
        </div>
      </div>
    </header>
  );
}