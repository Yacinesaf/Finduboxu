import React from 'react';
import './Navbar.css'

const navbar = () => {
    return ( 
        <div className="header">
            <div className="nav">
                <span className="menu">About</span>
                <span className="menu">Home</span>
                <span className="menu">Pricing</span>
                <span className="menu">Pages</span>
                <span className="menu">Blog</span>
                <span className="menu">Contact</span>
            </div>
            <div className="logo-section">
                <img className="logo-header" id="logo" src={require("./logo-black.png")} alt=""></img>
                <div className="logo-header" id="logo-name">FinduBoxu</div>
            </div>
        </div>
    )
};
export default navbar;
