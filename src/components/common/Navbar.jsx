import React, { useState, useEffect } from 'react';
import logo from '../../img/logo.png';
import './Navbar.css';

const Navbar = () => {
    const [searchVisible, setSearchVisible] = useState(false);
    const [activeLink, setActiveLink] = useState('');

    const toggleSearch = () => {
        setSearchVisible(!searchVisible);
    };

    const handleLinkClick = (link) => {
        setActiveLink(link);
    };

    useEffect(() => {
        const savedActiveLink = localStorage.getItem('activeLink');
        if (savedActiveLink) {
            setActiveLink(savedActiveLink);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('activeLink', activeLink);
    }, [activeLink]);

    return (
        <div className="nav-bar ">
            <div className="logo">
                <a href="/home"><img src={logo} alt="" /></a>
            </div>
            
            <div style={{ display: 'flex' }}>
                {searchVisible && (
                    <form className="" >
                        <div className="">
                            <input type="text" className="search" placeholder="Search..." name="search" style={{background:'none', border:'none'}} />
                        </div>
                    </form>
                )}
                <button className="search-icon" onClick={toggleSearch} style={{background:'none', border:'none'}}>
                    <i className="fa-solid fa-magnifying-glass"></i>
                </button>
                <ul className="navbar-nav list">
                    <li ><a href="/home" className={activeLink === 'home' ? 'active' : ''} onClick={() => handleLinkClick('home')}>Home</a></li>
                    <li><a href="/profile" className={activeLink === 'profile' ? 'active' : ''} onClick={() => handleLinkClick('profile')}>Profile</a></li>
                    
                    <li><a href="/signin">Sign In</a></li>
                    <li><a href="signup">Sign Up</a></li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;