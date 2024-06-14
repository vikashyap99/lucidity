import React from 'react';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import { Switch } from '@mui/material';

import './Header.css'
function Header({setIsUser}) {

    return (
        <div className='head-container mx-1'>
            <span>User</span>
            <Switch onChange={(e) => setIsUser(!e.target.checked)}  defaultChecked  color="secondary"/>
            <span>Admin</span>
            <span className='mx-1'> <ExitToAppOutlinedIcon  /></span>
        </div>
    );
}

export default Header;