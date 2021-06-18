import React from 'react';

import Typography from '@material-ui/core/Typography';

import './Preview.scss';

import { Link } from 'react-router-dom';

const Preview = () => {
    return (
        <div className="Preview">
            <div className="header">
                <Link to="/main">
                    <img src="./assets/logo/logo.png" alt="logo"></img>
                </Link>
                <div className="links">
                    <Link className="about" to="/about">
                        О сервисе
                    </Link>
                    <Link to="/signInSignUp">Войти / Регистрация</Link>
                </div>
            </div>

            <div className="text">
                <Typography variant="h1" gutterBottom>
                    Ищи, общайся, играй
                </Typography>
                <Typography variant="h5" gutterBottom>
                    Cервис для<span> </span>
                    <span className="highlight_red">
                        поиска единомышленников и работы
                    </span>
                    <span>, а так же</span>
                    <br />
                    <span className="highlight_red">
                        улучшения взаимодействия <span> </span>
                    </span>
                    между членами группы.
                </Typography>
            </div>

            <div className="row">
                <img src="./assets/preview/1.jpg" alt="preview"></img>
                <img src="./assets/preview/2.jpg" alt="preview"></img>
                <img src="./assets/preview/3.jpg" alt="preview"></img>
                <img src="./assets/preview/4.jpg" alt="preview"></img>
                <img src="./assets/preview/5.jpg" alt="preview"></img>
                <img src="./assets/preview/6.jpg" alt="preview"></img>
                <img src="./assets/preview/7.jpg" alt="preview"></img>
                <img src="./assets/preview/8.jpg" alt="preview"></img>
                <img src="./assets/preview/9.jpg" alt="preview"></img>
                <img src="./assets/preview/10.jpg" alt="preview"></img>
                <img src="./assets/preview/11.jpg" alt="preview"></img>
                <img src="./assets/preview/12.jpg" alt="preview"></img>
                <img src="./assets/preview/13.jpg" alt="preview"></img>
                <img src="./assets/preview/14.jpg" alt="preview"></img>
            </div>
        </div>
    );
};

export default Preview;
