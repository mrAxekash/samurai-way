import React from "react";
import {ProfileDataType} from "./ProfileInfo";
import {SubmitHandler, useForm} from "react-hook-form";
import {useDispatch} from "react-redux";

//types

export type CutomFormData = {
    userId: string
    fullName: string
    lookingForAJob: boolean
    lookingForAJobDescription?: string
    aboutMe: string
    contacts: {
        github: string
        vk: string
        facebook: string
        instagram: string
        twitter: string
        website: string
        youtube: string
        mainLink: string
    }

}
export const ProfileDataForm = (props: ProfileDataType) => {
    const dispatch = useDispatch()

    const {
        register,
        formState: {errors},
        handleSubmit,
        reset,
        setError
    } = useForm<CutomFormData>({
        mode: 'onBlur',
        defaultValues: {
            fullName: props.profile.fullName,
            lookingForAJob: props.profile.lookingForAJob,
            lookingForAJobDescription: props.profile.lookingForAJobDescription,
            contacts: props.profile.contacts
        },

    })

    const onSubmit: SubmitHandler<CutomFormData> = (data) => {
        console.log(data)

         props.onSubmit && props.onSubmit(data)
          props.toEditMode(false)


    }

    return (
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <button type={"submit"}>Save profile</button>
                </div>
                <div>
                    <input {
                               ...register('fullName', {
                                   value: props.profile.fullName,
                                   required: 'This place is required'
                               })
                           }
                           type="text"
                    />
                </div>
                <div>
                    <label><b>Looking for a job: </b></label>
                    <input {
                               ...register('lookingForAJob', {})
                           }
                           type="checkbox"/>
                </div>
                <div>
                    <label> <b> My professional skills: </b> </label>
                    <input {
                               ...register('lookingForAJobDescription', {})
                           }
                           type="text"
                           placeholder={'My professional skills'}/>
                </div>
                <div>
                    <label><b>About me: </b></label>
                    <input {...register('aboutMe', { })} type="text" placeholder={'Tell us about yourself'}/>
                </div>
                <div>
                    <label><b>My Contacts:</b></label>

                    <input type={'text'} {...register('contacts', {
                        value: props.profile.contacts
                    })} />
                    
                    {/*<Controller render={(props.profile.contacts) => <input {...props.profile.contacts}/> } name={}*/}

                    {/*{Object.keys(props.profile.contacts).map(key => {*/}
                    {/*    return <input key={key} type="text" {...register('contacts', {*/}
                    {/*        value: {},*/}

                    {/*    })} />*/}
                    {/*})}*/}

                    {/*<input type="text" {...register('contacts', {})} />*/}


                    {/*{props.profile.contacts && Object.keys(props.profile.contacts).map(key => {*/}
                    {/*    return <Contact key={key}*/}
                    {/*                    contactTitle={key}*/}
                    {/*                    contactValue={props.profile?.contacts[key as KeyType]}/>*/}
                    {/*})}*/}

                </div>
            </form>
    )
}

