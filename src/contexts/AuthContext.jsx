import axios from "axios";
import { createContext, useContext, useEffect, useState ,useReducer } from "react";

const AuthContext = createContext()

const AuthContextProvider =({children})=>{


    return (
        <AuthContext.Provider >
            {children}
        </AuthContext.Provider>
        )
}

const useAuthContext = ()=>useContext(AuthContext)

export {AuthContext , AuthContextProvider}