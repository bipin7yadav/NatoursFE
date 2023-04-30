import axios from "axios";
import { createContext, useContext, useReducer } from "react";

const AuthContext = createContext()

const AuthContextProvider = ({ children }) => {
    let token = ''
    if (typeof window !== 'undefined') {
        let token = localStorage.getItem('token') || '';
        // use token here
      }
    let headers = {
        'Authorization': `Bearer ${token}`,
        'Cookie': `jwt=${token}`
    };

    // let URL = "https://natoursyh.onrender.com/"
    let URL = "http://127.0.0.1:3001/"

///////////////////////////////////////////////////////////////////////////////////////////////////////

    let user = {
        name: "Bipin",
        age: "20",
        position: "Frontend Developer"
    }
    const initialState ={
        tours :[],
        users : []
    }

    const reducer = (state,action)=>{
        switch (action.type) {
            case "getAllTours":{
                return{
                    ...state,tours:action.payload
                }
            }
            case "getAllUsers":{
                return {
                    ...state,users:action.payload
                }
            }
                
                break;
        
            default:
                state;
        }
    }

    const Login = async(values,router) => {
        console.log(values);
            try {
                const response = await axios.post(`${URL}api/v1/users/login`,  values )
                                console.log("reponse :",response);
                if(response.status=="200"){
                    localStorage.setItem("token",response.data.token)
                    router.push({
                        pathname: '/MainPage',
                    })
                }
            } catch (error) {
                console.log("error :",error)
            }
    }

    const SignUp = async(values,router) => {
        console.log(values);
            try {
                const response = await axios.post(`${URL}api/v1/users/signup`,  values )
                                console.log("reponse :",response);
                if(response.status=="200"){
                    router.push({
                        pathname: '/Login',
                        query: { returnUrl: router.asPath }
                    })
                }
            } catch (error) {
                console.log("error :",error)
            }
    }

    const GetUsers = async(values) =>{
        try {
            let response = axios.get(`${URL}api/v1/users`,headers)
            if(response.status=="200"){
                dispatch({
                    type :"getAllUsers",
                    payload:response.data.data.users
                })
            }
        } catch (error) {
            
        }
    }

    const ForgetPassword = async({email})=>{
        try {
            let response = axios.post(`${URL}api/v1/users/forgotPassword`,{email})
            
        } catch (error) {
            
        }
    }

    const GetCurrentUser = async()=>{
        try {
            let response = axios.get(`${URL}api/v1/users/me`,headers)
            return response.data.data
        } catch (error) {
            
        }
    }

    const Resetpassword = async({id,password ,passwordConfirm})=>{
        try {
            const response = await axios.patch(`${URL}api/v1/users/resetPassword/${id}`,{password,passwordConfirm},headers)

        } catch (error) {
            
        }
    }

    const updateCurrentUserPassword = async({id,passwordCurrent,password ,passwordConfirm})=>{
        try {
            const response = await axios.patch(`${URL}api/v1/users/updateMyPassword/${id}`,{password,passwordConfirm},headers)

        } catch (error) {
            
        }
    }

    const updateCurrentUserData= async({id,...values})=>{
        try {
            const response = await axios.patch(`${URL}api/v1/users/updateMyPassword/${id}`,{...values},headers)

        } catch (error) {
            
        }
    }

    const deleteCurrentUser= async({id})=>{
        try {
            const response = await axios.delete(`${URL}api/v1/users/deleteMe/${id}`,headers)

        } catch (error) {
            
        }
    }

    const GetAllTours = async() =>{
        try {
            const response = await axios.get(`${URL}api/v1/tours`,headers)
            if(response.status == "200" || "success"){
                console.log(response.data.data.tours);
                dispatch({
                    type :"getAllTours",
                    payload:response.data.data.tours
                })
            }
            return response.data
        } catch (error) {
            
        }
    }

    const [state,dispatch ] = useReducer(reducer,initialState)

    return (
        <AuthContext.Provider value={{ user ,Login ,SignUp, GetAllTours,state,updateCurrentUserData,updateCurrentUserPassword,
        deleteCurrentUser, Resetpassword ,GetCurrentUser ,GetUsers , ForgetPassword}} >
            {children}
        </AuthContext.Provider>
    )
}

const useAuthContext = () => useContext(AuthContext)

export { useAuthContext, AuthContextProvider }