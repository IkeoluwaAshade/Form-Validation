import React from 'react';
import './Form.css'
import Home from '../Home/Home'
import Reponsiveness from '../Responsiveness/Responsiveness'
import { Form, Button } from 'semantic-ui-react';
import { useForm } from "react-hook-form";
import {RiLoginCircleFill} from 'react-icons/ri'
import {GiArchiveRegister} from 'react-icons/gi'
import {FaQuestionCircle} from 'react-icons/fa'
import {GiHamburgerMenu} from 'react-icons/gi'
import {MdCancel} from 'react-icons/md'
// import Images from '../Components/Techathon-2.jpg'





export default function FormValidation() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        
    }
    return (
        <div className='mainBg'>
            <div className='mainHeader'>
                <div className='headerHold'>
                    <div className='Logo'>
                        <h1>TECHATHON</h1>
                        {/* <img src={Techathon-2.jpg} /> */}
                    </div>

                    <div className='navDivs'>
                        <div className='Navigation'>
                            <span>Why Techathon</span>
                            <FaQuestionCircle />
                        </div>

                        <div className='Navigation'>
                            <span>Login</span> 
                            <RiLoginCircleFill />   
                        </div>

                        <div className='Navigation'>
                            <span>Register</span> 
                            <GiArchiveRegister />                                
                        </div>
                    </div>

                    
                </div>
            </div>

            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Field>
                    <label>First Name</label>
                    <input
                        placeholder='First Name'
                        type="text"
                        {...register("firstName", { required: true, maxLength: 10 })}
                    />
                </Form.Field>
                {errors.firstName && <p>Please check the First Name</p>}
                <Form.Field>
                    <label>Last Name</label>
                    <input
                        placeholder='Last Name'
                        type="text"
                        {...register("lastName", { required: true, maxLength: 10 })}
                    />
                </Form.Field>
                {errors.lastName && <p>Please check the Last Name</p>}
                <Form.Field>
                    <label>Email</label>
                    <input
                        placeholder='Email'
                        type="email"
                        {...register("email",
                            {
                                required: true,
                                pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                            })}
                    />
                </Form.Field>
                {errors.email && <p>Please check the Email</p>}
                <Form.Field>
                    <label>Password</label>
                    <input
                        placeholder='Password'
                        type="password"
                        {...register("password", {
                            required: true,
                            pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/
                        })}
                    />
                </Form.Field>
                {errors.password && <p>Please check the Password</p>}
                <Button type='submit'>Submit</Button>
            </Form>
        </div>
    )
}