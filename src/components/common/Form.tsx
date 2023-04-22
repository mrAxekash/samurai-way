import * as React from 'react';
import {FieldValues, SubmitHandler, useForm} from "react-hook-form";
import style from "./Form.module.css";

type Props = {
    sendMessage: (newMessage: string) => void
};

export const Form = (props: Props) => {

    const {
        register,
        handleSubmit,
        formState: {
            errors
        },
        reset,
    } = useForm({
        mode:"all",
        defaultValues: {
            userPost: '',
        },
        // criteriaMode: 'all'
    })

    const onSubmitMessage: SubmitHandler<FieldValues> = (data) => {
        props.sendMessage(data.userPost)
        reset()
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmitMessage)}
                  // onBlur={handleSubmit(onSubmitMessage)}
            >
                <textarea className={ errors.userPost ? style.errorForm : ''}
                    {...register('userPost', {
                        required: true,
                        maxLength: {
                            value: 1000,
                            message: 'This area exceed max length 1000'
                        },
                    })}
                    placeholder={'Input new post'}></textarea>
                <p className={errors.userPost && style.errorMessage }>{errors.userPost && errors.userPost.message}</p>
                <input type="submit"  />
            </form>
        </div>
    );
};

//types

