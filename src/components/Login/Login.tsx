import * as React from 'react';
import {SubmitHandler, useForm} from "react-hook-form"
import {loginUserTC} from "../../redux/auth-reducer";
import {useDispatch} from "react-redux";

export type Inputs = {
    email: string
    password: string
    rememberMe: boolean
    age: any
}

type Props = {};
export const Login = (props: Props) => {
    return (
        <div>
            <h1>LOGIN</h1>
            <LoginForm/>
        </div>

    );
};

const LoginForm = () => {
    const dispatch = useDispatch()

    const {
        register,
        formState: {errors, submitCount},
        handleSubmit
    } = useForm<Inputs>({
        defaultValues: {
            email: '',
            password: '',
        }
    })

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        debugger
        const {email, password, rememberMe} = data
        dispatch(loginUserTC(email, password, rememberMe) as any)
        console.log(data)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <input
                    {...register('email', {required: 'This place is required', })} type="email"
                    placeholder={'Email or user name'}/>
                <p>{errors.email?.message}</p>
            </div>
            <div>
                <input
                    {...register('password', {
                        required: 'This place is required',
                        minLength: {value: 4, message: 'Min length is 4'},
                        pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
                    })} type="password" placeholder={'Password'}/>
                <p>{errors.password?.message}</p>
            </div>
            <div>
                <input {...register('rememberMe')} type="checkbox"/> Remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}