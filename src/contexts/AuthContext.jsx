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


    let user = {
        name: "Bipin",
        age: "20",
        position: "Frontend Developer"
    }
    const initialState ={
        tours :[]
    }

    const reducer = (state,action)=>{
        switch (action.type) {
            case "getAllTours":{
                return{
                    ...state,tours:action.payload
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
        <AuthContext.Provider value={{ user ,Login ,SignUp, GetAllTours,state}} >
            {children}
        </AuthContext.Provider>
    )
}

const useAuthContext = () => useContext(AuthContext)

export { useAuthContext, AuthContextProvider }