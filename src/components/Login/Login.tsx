import * as React from 'react';
import {SubmitHandler, useForm} from "react-hook-form"
import {loginUserTC} from "../../redux/auth-reducer";
import {useDispatch, useSelector} from "react-redux";
import styles from './Login.module.css'
import {RootReducersType} from "../../redux/redux-store";
import {Redirect} from "react-router-dom";

export type Inputs = {
    email: string
    password: string
    rememberMe: boolean
}

type Props = {};

export const Login = (props: Props) => {

    const isAuth = useSelector<RootReducersType, boolean>(state => state.auth.isAuth)

    if (isAuth) {
        return <Redirect to={'/profile'}/>
    }
    return (
        <div>
            <h1>LOGIN</h1>
            <LoginForm/>
        </div>
    );
};


type LoginFormType = {
    // isAuth: boolean
    // error: string
}
const LoginForm = (props: LoginFormType) => {
    const dispatch = useDispatch()
    const authErrorMessage = useSelector<RootReducersType, string | null>(state => state.auth.error)

    const {
        register,
        formState: {errors},
        handleSubmit,
        reset,
        setError
    } = useForm<Inputs>({
        mode: 'onBlur',
        defaultValues: {
            email: '',
            password: '',
        },

    })

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        const {email, password, rememberMe} = data
        dispatch(loginUserTC(email, password, rememberMe) as any) // as any это заглушка
        reset()
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <input
                    {...register('email', {
                        required: 'This place is required',
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                            message: 'Uncorrected email'
                        }
                    })}
                    type="email"
                    placeholder={'Email or user name'}
                    className={errors.email ? errors.email.message && styles.errorForm : ''}
                    value={'kashim007@mail.ru'}
                />
                <p className={errors.email && styles.errorMessage}>{errors.email?.message}</p>
            </div>
            <div>
                <input
                    {...register('password', {
                        required: 'This place is required',
                        minLength: {
                            value: 7,
                            message: 'Minimum length password is 7 '
                        }
                    })}
                    type="password"
                    placeholder={'Password'}
                    className={errors.password ? errors.password.message && styles.errorForm : ''}
                    value={'Z1ng5ts2191'}
                />
                <p className={errors.password && styles.errorMessage}>{errors.password?.message}</p>
            </div>
            {authErrorMessage && <div className={styles.serverResponseError}> {authErrorMessage}  </div>}

            <div>
                <input {...register('rememberMe')} type="checkbox"/> Remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}