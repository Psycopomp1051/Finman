import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Avatar from '@mui/material/Avatar';
import { Image } from '@mui/icons-material';
import Button from '@mui/material/Button';
import logo from '../../png/logo-no-background.png';
import userAvatar from '../../png/avatar.png';
import { useTheme } from '@emotion/react';
import { tokens } from '../../theme';


const NavBar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <AppBar position="static" sx={{ height: '80px', backgroundColor: `${colors.primary[800]}`, boxShadow: 'none' }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters sx={{ height: '100%', justifyContent: 'space-between', marginLeft: '100px', marginRight: '100px' }}>
                    {/* Logo in the top-left corner */}
                    <div>
                        <img alt="logo" src={logo} style={{ height: '50px', width: 'auto' }} />
                    </div>

                    {/* Navigation items centered */}
                    <div style={{ display: "flex", justifyContent: 'space-evenly' }}>
                        <Toolbar className="nav-items" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', flex: 1, gap: '10px', fontSize: 'bold', color: `${colors.primary[100]}` }}>
                            <Button component={Link} to="/" color="inherit">
                                Home
                            </Button>
                            <Button component={Link} to="/stock" color="inherit">
                                Stock
                            </Button>
                            <Button component={Link} to="/news" color="inherit">
                                News
                            </Button>
                            <Button component={Link} to="/crypto" color="inherit">
                                Crypto
                            </Button>
                            <Button component={Link} to="/chat" color="inherit">
                                Chat
                            </Button>
                        </Toolbar>
                    </div>

                    <div>
                        <Avatar alt="User Avatar" src={userAvatar} style={{ height: '70px', width: 'auto', marginLeft: '10px', cursor: 'pointer' }} />
                    </div>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default NavBar;