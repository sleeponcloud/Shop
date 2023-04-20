import React, { useEffect, useState } from 'react';
import store from 'store2';
import {
    AppBar,
    Toolbar,
    CssBaseline,
    IconButton,
    Tooltip,
} from '@mui/material';
import {
    Menu as MenuIcon,
} from '@mui/icons-material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';

function NavBar() {
    const [showDrawer, setShowDrawer] = useState(
        store.local.has('showDrawer') ?
        store.local.get('showDrawer') : false,
    );
    const [cartItemNumber, setCartItemNumber] = useState(0);

    useEffect(() => {
        if (!store.local.has('showDrawer')) {
            store.local.set('showDrawer', false);
        };
    }, []);

    useEffect(() => {
        setCartItemNumber(store.session.get('cartNum'))
    }, [store.session.get('cartNum')]);

    const toggleDrawer = (open) => (event) => {
        store.local.set('showDrawer', open);
        setShowDrawer(open);
    };

    return (
        <>
            <CssBaseline />
            <AppBar
                position="fixed"
                open={showDrawer}
                sx={{
                    bgcolor: '#000',
                    height: '64px',
                    zIndex: (theme) => theme.zIndex.drawer + 1,
                }}
            >
                <Toolbar>
                    <>
                        <IconButton
                            style={{marginRight: 'auto'}}
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            onClick={toggleDrawer(!showDrawer)}
                        >
                            <MenuIcon/>
                        </IconButton>
                        <div style={{ flexGrow: 1 }} />
                    </>
                    <IconButton
                        style={{marginRight: 'auto'}}
                        edge="start"
                        color="inherit"
                    />

                    <Tooltip title={('Cart')}>
                        <Badge badgeContent={cartItemNumber} color="error">
                           <IconButton
                                style={{ marginLeft: '10px' }}
                                edge="end"
                                color="inherit"
                            >
                                <ShoppingCartIcon />
                            </IconButton>
                        </Badge>
                        
                    </Tooltip>
                </Toolbar>
            </AppBar>
            <Toolbar />
        </>
    );
}

export { NavBar };
