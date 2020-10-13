import React from 'react';
import { AppBar, Toolbar } from '@material-ui/core';
import logo from './../assets/img/logo.svg';



const Header = () => (
    <AppBar position="sticky">
        <Toolbar>
            <img src={ logo }  alt ="logo"  width="128" height="128"></img>
            <h1 className="titleHeader">Busca Diesel Araucanía</h1>
        </Toolbar>
    </AppBar>
);

Header.displayName = "Header";

export default Header;