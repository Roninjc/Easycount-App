import React from 'react';

// import IconButton from '@mui/material/Button';
// import SettingsIcon from '@mui/icons-material/Settings';
// import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import Avatar from '@mui/material/Avatar';

import { useStyles } from '../../hooks/useStyles';
import { AccountMenu } from './Menu';

import './ui.css';


export const NavBar = () => {

    const classes = useStyles();

    return (
        <div className="navbar">
            <div className="nav-user">
                <Avatar
                    className={classes.shadow}
                    sx={{ 
                        bgcolor: 'rgb( 255, 255, 255 )',
                        color: 'rgb( 0, 0, 0 )',
                        height: '50px',
                        width: '50px'
                    }}
                >JC</Avatar>
                <div className="nav-userinfo">
                    <span className="nav-name">
                        Jake Castaño
                    </span>
                    <span className="nav-company">
                        Company Name
                    </span>
                </div>
            </div>

            {/* <IconButton
                aria-label="Logout"
                size="large"
                sx={{ 
                    bgcolor: 'rgb( 255, 255, 255 )',
                    borderRadius: '50%',
                    minWidth: '50px',
                    height: '50px',
                    width: '50px',
                }}
                className={classes.shadow}
                // onClick={ handleLogout }
            >
                <SettingsIcon />
            </IconButton> */}

            <AccountMenu />
            
        </div>
    )
}
