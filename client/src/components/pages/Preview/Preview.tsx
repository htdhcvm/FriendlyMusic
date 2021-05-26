import React from 'react';

import Typography from '@material-ui/core/Typography';

import './Preview.scss';

import preview_1 from '../../../assets/preview/1.jpg';
import preview_2 from '../../../assets/preview/2.jpg';
import preview_3 from '../../../assets/preview/3.jpg';
import preview_4 from '../../../assets/preview/4.jpg';
import preview_5 from '../../../assets/preview/5.jpg';
import preview_6 from '../../../assets/preview/6.jpg';
import preview_7 from '../../../assets/preview/7.jpg';
import preview_8 from '../../../assets/preview/8.jpg';
import preview_9 from '../../../assets/preview/9.jpg';
import preview_10 from '../../../assets/preview/10.jpg';
import preview_11 from '../../../assets/preview/11.jpg';
import preview_12 from '../../../assets/preview/12.jpg';
import preview_13 from '../../../assets/preview/13.jpg';
import preview_14 from '../../../assets/preview/14.jpg';
import logo from '../../../assets/logo/logo.png';
import { Link } from 'react-router-dom';

const Preview = () => {
    return (
        <div className="Preview">
            <div className="header">
                <img src={logo} alt="logo"></img>
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
                <img src={preview_1} alt="preview"></img>
                <img src={preview_2} alt="preview"></img>
                <img src={preview_3} alt="preview"></img>
                <img src={preview_4} alt="preview"></img>
                <img src={preview_5} alt="preview"></img>
                <img src={preview_6} alt="preview"></img>
                <img src={preview_7} alt="preview"></img>
                <img src={preview_8} alt="preview"></img>
                <img src={preview_9} alt="preview"></img>
                <img src={preview_10} alt="preview"></img>
                <img src={preview_11} alt="preview"></img>
                <img src={preview_12} alt="preview"></img>
                <img src={preview_13} alt="preview"></img>
                <img src={preview_14} alt="preview"></img>
            </div>
        </div>
    );
};

export default Preview;
