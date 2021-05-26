import React, { SyntheticEvent, useState } from 'react';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Alert, AlertTitle } from '@material-ui/lab';
import Typography from '@material-ui/core/Typography';

import './SignInSignUp.scss';

const SignInSignUp = () => {
    const [rightPanel, setRightPanel] = useState(false);

    const handleRegistration = (e: SyntheticEvent) => {
        e.preventDefault();
        console.log('handleRegistration');
    };

    const handleSignIn = (e: SyntheticEvent) => {
        e.preventDefault();
        console.log('handleSignIn');
    };
    return (
        <div className="SignInSignUp">
            <div className="form-wrapper">
                {!rightPanel ? (
                    <div className={`form-container sign-in-container`}>
                        <Typography variant="h4" gutterBottom>
                            Вход
                        </Typography>
                        <form onSubmit={handleSignIn}>
                            <div className="form-field">
                                <TextField
                                    label="Логин"
                                    variant="outlined"
                                    type="text"
                                    fullWidth={true}
                                />
                            </div>
                            <div className="form-field">
                                <TextField
                                    label="Пароль"
                                    variant="outlined"
                                    type="password"
                                    fullWidth={true}
                                />
                            </div>
                            <Button
                                className="btnSignIn"
                                variant="contained"
                                color="primary"
                                type="submit"
                            >
                                Войти
                            </Button>
                            <Alert severity="error" className="error-alert">
                                <AlertTitle>Ошибка</AlertTitle>
                                Вы ввели неправильный логин или пароль -
                                <strong>перепроверьте введенные данные.</strong>
                            </Alert>
                        </form>
                    </div>
                ) : null}
                {rightPanel ? (
                    <div className={`form-container sign-up-container`}>
                        <Typography variant="h4" gutterBottom>
                            Регистрация
                        </Typography>

                        <form onSubmit={handleRegistration}>
                            <div className="form-field">
                                <TextField
                                    label="ФИО"
                                    variant="outlined"
                                    type="text"
                                    fullWidth={true}
                                />
                            </div>
                            <div className="form-field">
                                <TextField
                                    label="Логин"
                                    variant="outlined"
                                    type="text"
                                    fullWidth={true}
                                />
                            </div>
                            <div className="form-field">
                                <TextField
                                    label="Пароль"
                                    variant="outlined"
                                    type="password"
                                    fullWidth={true}
                                />
                            </div>
                            <div className="form-field">
                                <TextField
                                    label="Повторите пароль"
                                    variant="outlined"
                                    type="password"
                                    fullWidth={true}
                                />
                            </div>
                            <Button
                                className="btnSignUp"
                                variant="contained"
                                color="primary"
                                type="submit"
                            >
                                Зарегистрироваться
                            </Button>
                            <Alert severity="error" className="error-alert">
                                <AlertTitle>Ошибка</AlertTitle>
                                Вы ввели неправильный логин или пароль -
                                <strong>перепроверьте введенные данные.</strong>
                            </Alert>
                        </form>
                    </div>
                ) : null}
            </div>

            <div className="overlay-container">
                {!rightPanel ? (
                    <div className="sign-in">
                        <Typography className="title" variant="h2" gutterBottom>
                            Привет, музыкант
                        </Typography>
                        <Typography
                            className="registration"
                            variant="subtitle1"
                            gutterBottom
                        >
                            Рады видеть тебя снова на нашей площадке,
                            <br /> введи свои персональные данные <br />и ищи
                            работу с нами.
                        </Typography>
                        <Button
                            className="btnSignUp"
                            variant="contained"
                            color="primary"
                            onClick={() => setRightPanel((prev) => !prev)}
                        >
                            Регистрация
                        </Button>
                    </div>
                ) : null}
                {rightPanel ? (
                    <div className="sign-up">
                        <Typography className="title" variant="h2" gutterBottom>
                            Привет, музыкант
                        </Typography>
                        <Typography
                            className="registration"
                            variant="subtitle1"
                            gutterBottom
                        >
                            Добро пожаловать на площадку FriendlyMusic
                            <br />
                            присоединяйся <br />и ищи работу с нами.
                        </Typography>
                        <Button
                            className="btnSignIn"
                            variant="contained"
                            color="primary"
                            onClick={() => setRightPanel((prev) => !prev)}
                        >
                            Войти
                        </Button>
                    </div>
                ) : null}
            </div>
        </div>
    );
};

export default SignInSignUp;
