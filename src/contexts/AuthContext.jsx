import axios from "axios";
import { createContext, useContext, useEffect, useState ,useReducer } from "react";

const AuthContext = createContext()

const AuthContextProvider =({children})=>{


    let user = {
        name :"Bipin",
        age:"20",
        position:"Frontend Developer"
    }

    return (
        <AuthContext.Provider value={{user}} >
            {children}
        </AuthContext.Provider>
        )
}

const useAuthContext = ()=> useContext(AuthContext)

export {useAuthContext , AuthContextProvider}