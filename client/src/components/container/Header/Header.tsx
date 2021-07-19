import React from 'react';
import { Link } from 'react-router-dom';

import './Header.scss';

const Header = () => {
    return (
        <div className="header-main">
            <Link to="/main">
                <img className="logo" src="/assets/logo/logoPart.png" />
            </Link>
            <Link className="linkSigninSignup" to="/signInSignUp">
                Войти / Регистрация
            </Link>
        </div>
    );
};

export default Header;
