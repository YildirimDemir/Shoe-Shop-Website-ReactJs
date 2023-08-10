import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Button({children, onClick}){
    return <button onClick={onClick}>{children}</button>
}

export default function UserMenu() {
    return (
        <div className="user-menu">
            <div className="user-menu-left">
                <UserInfo />
            </div>
            <div className="user-menu-right">
                <UserMenuBoard />
            </div>
        </div>
    );
}

function UserInfo() {
    const logouticon = "[=>";
    return (
        <div className="user-info">
            <div className="user-image">
                <div className="image">🥷🏻</div>
            </div>
            <div className="user-info-details">
                <div className="user-info-detail">
                    <input
                     type="text"
                     placeholder='Username'
                     disabled
                     />
                    <Button>Rename</Button>
                </div>
                <div className="user-info-detail">
                <input
                     type="email"
                     placeholder='Username'
                     disabled
                     />
                    <Button>Change</Button>
                </div>
                <div className="user-info-detail">
                <input
                     type="tel"
                     placeholder='Username'
                     disabled
                     />
                    <Button>Change</Button>
                </div>

                <div className="user-details-save-btn">
                <Button>Save</Button>
                </div>
            </div>
            
            <div className="user-menu-logout">
                <Link to="/home">Log out {logouticon} </Link>
            </div>
    
        </div>
    );
}


function UserMenuBoard(){

    const menuOptions = [
        {name: "Adress", icon: "🏠", color: "#666"},
        {name: "Password", icon: "🔒", color: "#777"},
        {name: "Past Orders", icon: "🛍️", color: "#555"},
        {name: "Payment Methods", icon: "💳", color: "#6b6b6b"},
        {name: "Wish List", icon: "❤️", color:"#777"},
        {name: "Support", icon: "🖥️", color: "#888"}
    ]
    return(
        <div className="user-menu-options">
            {menuOptions.map((e, index) =>(
                <UserMenuOption name={e.name} icon={e.icon} color={e.color} key={index} />
            ))}
        </div>
    )
}


function UserMenuOption({name, icon, color}){
    return(
        <div className="user-menu-option" style={{ backgroundColor: color }}>
            <p>{name} {icon}</p>
        </div>
    )
}