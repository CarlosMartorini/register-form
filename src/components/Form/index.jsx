import { useState } from 'react';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Checkbox, Input, Button } from '@material-ui/core';
import Card from '../Card';
import './style.css';

const Form = () => {

    const formSchema = yup.object().shape ({
        userName: yup.string()
            .max(10)
            .required('User name is required'),
        fullName: yup.string()
            .max(18)
            .required('Full name is required'),
        cellphone: yup.string()
            .required('Cellphone is required'),
        email: yup.string()
            .required('Email is required')
            .email('Invalid email'),
        emailConfirm: yup.string()
            .required('Confirm email is required')
            .email('Invalid email')
            .oneOf([yup.ref('email')], "Email not match"),
        password: yup.string()
            .required('Password is required')
            .matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/, ),
        passwordConfirm: yup.string()
            .required('Confirm password is required')
            .matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/, ).oneOf([yup.ref('password')], 'Password not match'),
    })

    const { register, handleSubmit, formState: { errors } } = useForm ({
        resolver: yupResolver(formSchema)
    })

    const [ listRegister, setListRegister ] = useState([]);

    const onSubmit = (data) => {
        setListRegister([...listRegister, data])
    }

    return (
        <>
        <div className='container-form'>

            <h4>Register</h4>
            <form onSubmit={handleSubmit(onSubmit)}>

                <Input placeholder='User Name' {...register('userName')} fullWidth style={{marginTop:'20px'}}/>
                <p className='error'>
                    {errors.userName?.message}
                </p>

                <Input placeholder='Full Name' {...register('fullName')} fullWidth style={{marginTop:'20px'}}/>
                <p className='error'>
                    {errors.fullName?.message}
                </p>

                <Input placeholder='Cellphone' {...register('cellphone')} fullWidth style={{marginTop:'20px'}}/>
                <p className='error'>
                    {errors.cellphone?.message}
                </p>

                <Input placeholder='Email' {...register('email')} fullWidth style={{marginTop:'20px'}}/>
                <p className='error'>
                    {errors.email?.message}
                </p>

                <Input placeholder='Email Confirm' {...register('emailConfirm')} fullWidth style={{marginTop:'20px'}}/>
                <p className='error'>
                    {errors.emailConfirm?.message}
                </p>

                <Input placeholder='Password' {...register('password')} margin='dense' fullWidth style={{marginTop:'20px'}}/>
                <p className='error'>
                    {errors.password?.message}
                </p>

                <Input placeholder='Password Confirm' {...register('passwordConfirm')} fullWidth style={{marginTop:'20px'}}/>
                <p className='error'>
                    {errors.passwordConfirm?.message}
                </p>

                <div className='checkbox-container'>
                    <Checkbox required={true} color='primary'/>
                    <p className='checkbox-label'>I accept the terms of application</p>
                </div>

                <Button type='submit' variant='contained' color='primary' size='large' fullWidth style={{marginTop:'20px'}}>Send</Button>


            </form>

        </div>

        <div className='cards-container'>
            {
                listRegister.map((register, index) => (
                    <Card key={index} card={register}/>
                ))
            }
        </div>
        </>
    )

}

export default Form;