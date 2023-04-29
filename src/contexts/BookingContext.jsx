import React ,{useContext,useReducer,createContext, Children} from 'react'
import axios from 'axios'

const BookingContext = createContext()

function BookingContextProvider() {

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


    /////////////////////////////////////////////////////////////////////////////////////////

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

    const [state,dispatch ] = useReducer(reducer,initialState)
    return (
        <BookingContext.Provider>
            {Children}
        </BookingContext.Provider>
    )
}

export default {BookingContext,BookingContextProvider}
