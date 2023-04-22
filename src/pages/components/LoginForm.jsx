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

function LoginForm() {
    const {Login ,user}= useAuthContext()


    const router = useRouter();


    const Schema = Yup.object().shape({
        email: Yup.string()
          .email('Invalid email')
          .required('Required'),
        password:Yup.string().required("Required")
      });
    const formik = useFormik({
        enableReinitialize :true,
        initialValues: {
            email: '',
            password: ""
        },
        validationSchema :Schema,
        onSubmit: async(values) => {
            Login(values,router)
            console.log(values)
            // try {
            //     const response = await axios.post(`${"https://natoursyh.onrender.com/"}api/v1/users/login`,  values )
            //                     console.log("reponse :",response);
            //     if(response.status=="200"){
            //         localStorage.setItem("token",response.data.token)
            //         router.push({
            //             pathname: '/MainPage',
            //             query: { returnUrl: router.asPath }
            //         })
            //     }
            // } catch (error) {
            //     console.log("error :",error)
            // }
            alert(JSON.stringify(values, null, 2));
        },
    });
    return (
        <form onSubmit={formik.handleSubmit}>
            <div className='center-div'>
                <div className='loginForm'>
                    {/* <div> */}
                        <Heading as='h1' size='2xl' noOfLines={1}>Login</Heading>
                        <p>Login to acces your account</p>
                    {/* </div> */}
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
                    <div className='login-btn'>
                        <Button width="100%" type="submit">Login</Button>
                    </div>
                    <div className='center-center'>Don't have an account ? <Link href="/SignUp"> Sign Up</Link></div>
                </div>
            </div>
        </form>
    )
}

export default LoginForm
