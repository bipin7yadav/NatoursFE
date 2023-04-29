import React, {useContext,createContext,useReducer, Children} from 'react'

const ToursContext= createContext()

function ToursContextProvider() {

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


    ///////////////////////////////////////////////////////////////////////////////////


    const initialTourState ={
        tours :[]
    }

    const toursReducer = (state,action)=>{
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
    const [state,dispatch ] = useReducer(toursReducer,initialTourState)

    return (
        <ToursContext.Provider>
            {Children}
        </ToursContext.Provider>
    )
}

export default {ToursContext,ToursContextProvider}
