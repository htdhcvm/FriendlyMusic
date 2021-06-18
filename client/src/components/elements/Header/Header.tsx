import React from 'react';
import { Link } from 'react-router-dom';

import './Header.scss';

const Header = () => {
    return (
        <div className="header-main">
            <img className="logo" src="./assets/logo/logoPart.png" />
            <Link to="/signInSignUp">Войти/Регистрация</Link>
        </div>
    );
};

export default Header;
