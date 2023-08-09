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


