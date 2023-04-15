import axios from "axios";
import { createContext, useContext, useEffect, useState, useReducer } from "react";

const AuthContext = createContext()

const AuthContextProvider = ({ children }) => {

    let URL = "https://natoursyh.onrender.com"


    let user = {
        name: "Bipin",
        age: "20",
        position: "Frontend Developer"
    }

    const Login = (dispatch) => {
        return async ({ email, password }) => {
            console.log(email,password)
            try {
                const response =await axios.get(`${URL}/api/v1/users/login`, { email, password })
                console.log("reponse :",response);
                
            } catch (error) {
                console.log("error :",error);
            }
        }
    }

    return (
        <AuthContext.Provider value={{ user ,Login}} >
            {children}
        </AuthContext.Provider>
    )
}

const useAuthContext = () => useContext(AuthContext)

export { useAuthContext, AuthContextProvider }