import { ChangeEvent, useCallback, useEffect, useState } from 'react';
import { RootStateOrAny } from 'react-redux';

import { useForm, SubmitHandler } from 'react-hook-form';
import { useAction } from '@Hooks/useAction';
import { useTypedSelector } from '@Hooks/useTypedSelector';

import { FormControl, Select } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Alert, AlertTitle } from '@material-ui/lab';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';

interface IFormInput {
    login: string;
    password: string;
    typeUser: string;
}

enum UserTypes {
    Musician = 'Музыкант',
    Group = 'Группа',
}

type KeysUserTypes = keyof typeof UserTypes;

const SignInForm = () => {
    const { signInMusician, signInGroup, errorToDefault } = useAction();

    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm<IFormInput>();

    const { internalServerError, unauthorizedError } = useTypedSelector(
        (state: RootStateOrAny) => state.user.errors
    );

    const [internalServerErrorLocal, setInternalServerErrorLocal] =
        useState(false);
    const [unauthorizedErrorLocal, setUnauthorizedErrorLocal] = useState(false);

    useEffect(() => {
        if (internalServerError) setInternalServerErrorLocal(true);
        if (unauthorizedError) setUnauthorizedErrorLocal(true);

        errorToDefault();
    }, [internalServerError, unauthorizedError]);

    const [selectType, setSelectType] = useState(Object.keys(UserTypes)[0]);

    const signInHandle: SubmitHandler<IFormInput> = useCallback(
        (data) => {
            const { login, password } = data;

            if (selectType && selectType === 'Musician')
                signInMusician({ login, password });
            if (selectType && selectType === 'Group')
                signInGroup({ login, password });
        },
        [selectType, signInMusician, signInGroup]
    );

    return (
        <div className={`form-container sign-in-container`}>
            <Typography variant='h4' gutterBottom>
                Вход
            </Typography>
            <form onSubmit={handleSubmit(signInHandle)}>
                <div className='form-field'>
                    <TextField
                        {...register('login', {
                            required: true,
                        })}
                        {...(errors.login && { error: true })}
                        label='Логин'
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
                        {...register('password', {
                            required: true,
                        })}
                        {...(errors.password && { error: true })}
                        label='Пароль'
                        variant='outlined'
                        type='password'
                        fullWidth={true}
                    />
                    {errors.password && (
                        <Alert severity='error' className='error-alert'>
                            Необходимо заполнить поле пароль
                        </Alert>
                    )}
                </div>
                <div className='form-field'>
                    <FormControl variant='outlined' fullWidth={true}>
                        <Select
                            native
                            value={selectType}
                            inputProps={{
                                name: 'age',
                                id: 'outlined-age-native-simple',
                            }}
                            onChange={(e: ChangeEvent<any>) => {
                                setSelectType(e.target.value);
                            }}
                        >
                            {Object.keys(UserTypes).map((typeU: string) => (
                                <option key={typeU} value={typeU}>
                                    {UserTypes[typeU as KeysUserTypes]}
                                </option>
                            ))}
                        </Select>
                    </FormControl>
                </div>
                <Button
                    className='btnSignIn'
                    variant='contained'
                    color='primary'
                    type='submit'
                >
                    Войти
                </Button>
            </form>
            {internalServerErrorLocal ? (
                <Alert
                    severity='error'
                    className='error-message'
                    action={
                        <IconButton
                            aria-label='close'
                            color='inherit'
                            size='small'
                            onClick={() => {
                                setInternalServerErrorLocal(false);
                            }}
                        >
                            <CloseIcon fontSize='inherit' />
                        </IconButton>
                    }
                >
                    <AlertTitle>Ошибка</AlertTitle>
                    Внутренняя ошибка сервера
                </Alert>
            ) : null}

            {unauthorizedErrorLocal ? (
                <Alert
                    severity='error'
                    className='error-message'
                    action={
                        <IconButton
                            aria-label='close'
                            color='inherit'
                            size='small'
                            onClick={() => {
                                setUnauthorizedErrorLocal(false);
                            }}
                        >
                            <CloseIcon fontSize='inherit' />
                        </IconButton>
                    }
                >
                    <AlertTitle>Ошибка</AlertTitle>
                    Проверьте введенные данные
                </Alert>
            ) : null}
        </div>
    );
};

export default SignInForm;
