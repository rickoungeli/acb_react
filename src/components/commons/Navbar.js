import React, { useState } from 'react';
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userReducer";
import ConnectMenu from './ConnectMenu';
import MainMenu from './MainMenu';
import UserMenu from './UserMenu';

const Navbar = () => {
    const user = useSelector(selectUser)
    
    return (
        <div className="navbars">
            <MainMenu/>
            {user? <UserMenu/> : <ConnectMenu/>}
            
        </div>
    );
};

export default Navbar;