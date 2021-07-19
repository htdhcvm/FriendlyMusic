import { useState } from 'react';

import './SignInSignUp.scss';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import SignInForm from '@Container/SignInForm/SignInForm';
import SignUpForm from '@Container/SignUpFrom/SignUpFrom';

const SignInSignUp = () => {
    const [rightPanel, setRightPanel] = useState(false);

    return (
        <div className='SignInSignUp'>
            <div className='form-wrapper'>
                {!rightPanel ? <SignInForm /> : null}
                {rightPanel ? <SignUpForm /> : null}
            </div>
            <div className='overlay-container'>
                {!rightPanel ? (
                    <div className='sign-in'>
                        <Typography className='title' variant='h2' gutterBottom>
                            Привет, музыкант
                        </Typography>
                        <Typography
                            className='registration'
                            variant='subtitle1'
                            gutterBottom
                        >
                            Рады видеть тебя снова на нашей площадке,
                            <br /> введи свои персональные данные <br />и ищи
                            работу с нами.
                        </Typography>
                        <Button
                            className='btnSignUp'
                            variant='contained'
                            color='primary'
                            onClick={() => setRightPanel((prev) => !prev)}
                        >
                            Регистрация
                        </Button>
                    </div>
                ) : null}
                {rightPanel ? (
                    <div className='sign-up'>
                        <Typography className='title' variant='h2' gutterBottom>
                            Привет, музыкант
                        </Typography>
                        <Typography
                            className='registration'
                            variant='subtitle1'
                            gutterBottom
                        >
                            Добро пожаловать на площадку FriendlyMusic
                            <br />
                            присоединяйся <br />и ищи работу с нами.
                        </Typography>
                        <Button
                            className='btnSignIn'
                            variant='contained'
                            color='primary'
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
