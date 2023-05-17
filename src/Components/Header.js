import React from 'react'
import logo from "../Assets/EDYODA.svg";
import search from "../Assets/Vector.png";
import "./Header.css";

const Header = () => {
    return (
        <div className='header'>
            <div className='header-left'>
                <div>
                    <img src={logo} alt='logo' />
                </div>
                <div>
                    <select name="courses" id="courses">
                        <option value="courses">Courses</option>
                    </select>
                </div>
                <div>
                    <select name="programs" id="programs">
                        <option value="programs">Programs</option>
                    </select>
                </div>
            </div>
            <div className='header-right'>
                <div>
                    <img src={search} alt="search" />
                </div>
                <div>
                    <button className='login-btn'>Log in</button>
                </div>
                <div>
                    <button className='join-btn'>JOIN NOW</button>
                </div>
            </div>
        </div>
    )
}

export default Header;