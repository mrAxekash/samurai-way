import * as React from 'react';
import {FieldValues, SubmitHandler, useForm} from "react-hook-form";

type Props = {
    sendMessage: (newMessage: string) => void
};

export const Form = (props: Props) => {

    const {
        register, handleSubmit, formState: {
            errors
        }
    } = useForm()

    const onSubmit: SubmitHandler<FieldValues> = (data ) => {
        props.sendMessage(data.userPost)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <textarea {...register('userPost')} placeholder={'Input new post'} ></textarea>
            <input type="submit"/>
        </form>
    );
};

//types

