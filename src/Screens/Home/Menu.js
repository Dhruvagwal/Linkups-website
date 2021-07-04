import React from 'react'
import './Menu.css'
import  Icon from '../../components/menuIcon.js'
function Menu() {
    return (
        <div id='menu'>
        <div id='menu_contain'>
            <span id='menu_item'>Home</span>
            <span id='menu_item'>Team</span>
            <span id='menu_item'>Services</span>
            <span id='menu_item'>Contact Us</span>
            <span id='menu_item'>About Us</span>
        </div>
        </div>
    )
}

export default Menu
