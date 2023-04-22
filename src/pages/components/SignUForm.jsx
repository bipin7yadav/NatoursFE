import React from 'react'
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    Button,
    Heading
} from '@chakra-ui/react'
import { useFormik } from 'formik';
import * as Yup from "yup";
import Link from 'next/link';
import axios from 'axios';
import { useRouter } from 'next/router'
import { useAuthContext } from '@/contexts/AuthContext';

function SignUForm() {

    const {SignUp,user}= useAuthContext()
    console.log(user);
    const router = useRouter();

    const Schema = Yup.object().shape({
        name:Yup.string().required("Name is required"),
        email: Yup.string()
          .email('Invalid email')
          .required('Required'),
        password: Yup.string()
          .min(6, 'Password must be at least 6 characters')
          .required('Password is required'),
        passwordConfirm: Yup.string()
          .oneOf([Yup.ref('password'), null], 'Passwords must match')
          .required('Confirm Password is required')
      });
    const formik = useFormik({
        enableReinitialize :true,
        initialValues: {
            name:"",
            email: '',
            password: "",
            passwordConfirm: ""
        },
        validationSchema :Schema,
        onSubmit: async(values) => {
            console.log(values)
            await SignUp(values,router)
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <div className='center-div'>
                <div className='loginForm'>
                    {/* <div> */}
                        <Heading as='h1' size='2xl' noOfLines={1}>Sign Up</Heading>
                        <p>Create account to book tour</p>
                    {/* </div> */}
                    <FormControl isInvalid={!!formik.errors.name &&formik.touched.name}>
                        <FormLabel>Name</FormLabel>
                        <Input id="name"
                            name="name"
                            type="name"
                            onChange={formik.handleChange}
                            value={formik.values.name} />
                        <FormErrorMessage>{formik.errors.name}</FormErrorMessage>
                    </FormControl>
                    <FormControl isInvalid={!!formik.errors.email &&formik.touched.email}>
                        <FormLabel>Email address</FormLabel>
                        <Input id="email"
                            name="email"
                            type="email"
                            onChange={formik.handleChange}
                            value={formik.values.email} />
                        <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
                    </FormControl>
                    <FormControl isInvalid={!!formik.errors.password &&formik.touched.password}>
                        <FormLabel>Password</FormLabel>
                        <Input id="password"
                            name="password"
                            onChange={formik.handleChange}
                            value={formik.values.password} type='password' />
                        <FormErrorMessage>{formik.errors.password}</FormErrorMessage>
                    </FormControl>
                    <FormControl isInvalid={!!formik.errors.passwordConfirm &&formik.touched.passwordConfirm}>
                        <FormLabel>Confirm Password</FormLabel>
                        <Input id="passwordConfirm"
                            name="passwordConfirm"
                            onChange={formik.handleChange}
                            value={formik.values.passwordConfirm} type='password' />
                        <FormErrorMessage>{formik.errors.passwordConfirm}</FormErrorMessage>
                    </FormControl>
                    <div className='login-btn'>
                        <Button width="100%" type="submit">Sign Up</Button>
                    </div>
                    <div className='center-center'>Have an account ? <Link href="/Login">Login</Link></div>
                </div>
            </div>
        </form>
    )
}

export default SignUForm
