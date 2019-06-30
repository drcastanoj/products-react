
import React from 'react';
import { NavLink } from 'react-router-dom';

import './header.scss';
const Header = () => (
    <header>
        <nav className="menu">
            <NavLink className="menu__link" to="/" activeClassName="menu__link--active" exact >Home </NavLink>
            <NavLink className="menu__link" to="/products" activeClassName="menu__link--active" exact >Products </NavLink>
            <NavLink className="menu__link" to="/clients" activeClassName="menu__link--active" exact >Clients </NavLink>
            <NavLink className="menu__link" to="/contacts" activeClassName="menu__link--active" exact >Contact </NavLink>
        </nav>
    </header>
);

export { Header };
