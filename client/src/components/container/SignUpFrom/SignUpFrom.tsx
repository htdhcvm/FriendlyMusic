import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Alert } from '@material-ui/lab';
import Typography from '@material-ui/core/Typography';
import { useForm, SubmitHandler } from 'react-hook-form';

import { useAction } from '@Hooks/useAction';
import { useRef } from 'react';

interface ISignUpFormInput {
    login: string;
    password: string;
    fio: string;
    retPassword: string;
}

const SignUpFrom = () => {
    const { registration } = useAction();
    const {
        register,
        formState: { errors },
        handleSubmit,
        watch,
    } = useForm<ISignUpFormInput>();

    const password = useRef({});
    password.current = watch('password', '');

    const signUp: SubmitHandler<ISignUpFormInput> = (data) => {
        const { login, password, fio, retPassword } = data;
        registration({ login, password, fio, retPassword });
    };

    return (
        <div className={`form-container sign-up-container`}>
            <Typography variant='h4' gutterBottom>
                Регистрация
            </Typography>

            <form onSubmit={handleSubmit(signUp)}>
                <div className='form-field'>
                    <TextField
                        label='ФИО'
                        {...register('fio', {
                            required: true,
                        })}
                        {...(errors.fio && { error: true })}
                        variant='outlined'
                        type='text'
                        fullWidth={true}
                    />
                    {errors.fio && (
                        <Alert severity='error' className='error-alert'>
                            Необходимо заполнить поле ФИО
                        </Alert>
                    )}
                </div>
                <div className='form-field'>
                    <TextField
                        label='Логин'
                        {...register('login', {
                            required: true,
                        })}
                        {...(errors.login && { error: true })}
                        variant='outlined'
                        type='text'
                        fullWidth={true}
                    />
                    {errors.login && (
                        <Alert severity='error' className='error-alert'>
                            Необходимо заполнить поле логин
                        </Alert>
                    )}
                </div>
                <div className='form-field'>
                    <TextField
                        label='Пароль'
                        {...register('password', {
                            required: true,
                        })}
                        {...(errors.password && { error: true })}
                        {...(errors.retPassword && { error: true })}
                        variant='outlined'
                        type='password'
                        fullWidth={true}
                    />
                    {errors.password && (
                        <Alert severity='error' className='error-alert'>
                            Необходимо заполнить поле пароль
                        </Alert>
                    )}
                    {errors.retPassword && (
                        <Alert severity='error' className='error-alert'>
                            {errors.retPassword.message}
                        </Alert>
                    )}
                </div>
                <div className='form-field'>
                    <TextField
                        label='Повторите пароль'
                        {...register('retPassword', {
                            validate: (validate: string) => {
                                return (
                                    validate === password.current ||
                                    'Пароли не совпадают'
                                );
                            },
                        })}
                        {...(errors.retPassword && { error: true })}
                        variant='outlined'
                        type='password'
                        fullWidth={true}
                    />
                    {errors.retPassword && (
                        <Alert severity='error' className='error-alert'>
                            {errors.retPassword.message}
                        </Alert>
                    )}
                </div>
                <Button
                    className='btnSignUp'
                    variant='contained'
                    color='primary'
                    type='submit'
                >
                    Зарегистрироваться
                </Button>
            </form>
        </div>
    );
};

export default SignUpFrom;
