// import axios from 'axios';
// import React, { useContext, createContext, useReducer, Children,  } from 'react'

// const ToursContext = createContext()

// function ToursContextProvider() {

//     let token = ''
//     if (typeof window !== 'undefined') {
//         let token = localStorage.getItem('token') || '';
//         // use token here
//     }
//     let headers = {
//         'Authorization': `Bearer ${token}`,
//         'Cookie': `jwt=${token}`
//     };

//     // let URL = "https://natoursyh.onrender.com/"
//     let URL = "http://127.0.0.1:3001/"


//     ///////////////////////////////////////////////////////////////////////////////////


//     const initialTourState = {
//         tours: [],
//         tour: [],
//         TopFiveTour: [],
//         MonthlyPlan: []
//     }

//     const toursReducer = (state, action) => {
//         switch (action.type) {
//             case "getAllTours": {
//                 return {
//                     ...state, tours: action.payload
//                 }
//             }
//             case "getTour": {
//                 return {
//                     ...state, tour: action.payload
//                 }
//             }
//             case "TopFive": {
//                 return {
//                     ...state, TopFiveTour: action.payload
//                 }
//             }
//             case "MonthlyPlan": {
//                 return {
//                     ...state, MonthlyPlan: action.payload
//                 }
//             }

//                 break;

//             default:
//                 state;
//         }
//     }



//     // const GetAllTours = async () => {
//     //     try {
//     //         const response = await axios.get(`${URL}api/v1/tours`, headers)
//     //         if (response.status == "200" || "success") {
//     //             console.log(response.data.data.tours);
//     //             dispatch({
//     //                 type: "getAllTours",
//     //                 payload: response.data.data.tours
//     //             })
//     //         }
//     //         return response.data
//     //     } catch (error) {

//     //     }
//     // }

//     const PostTour = async (body) => {
//         try {
//             const response = await axios.post(`${URL}api/v1/tours`, { ...body }, headers)
//             if (response.status == "200" || "success") {

//             }
//             return response.data
//         } catch (error) {
//         }
//     }
//     const GetTour = async ({ id, ...body }) => {
//         try {
//             const response = await axios.get(`${URL}api/v1/tours/${id}`, { ...body }, headers)
//             if (response.status == "200" || "success") {
//                 console.log(response.data.data.tours);
//                 dispatch({
//                     type: "getTour",
//                     payload: response.data.data.tours
//                 })

//             }
//         } catch (error) {
//         }
//     }

//     const DeleteTour = async ({ id, ...body }) => {
//         try {
//             const response = await axios.delete(`${URL}api/v1/tours/${id}`, { ...body }, headers)
//             if (response.status == "200" || "success") {

//             }
//             return response.data
//         } catch (error) {
//         }
//     }

//     const UpdateTour = async ({ id, ...body }) => {
//         try {
//             const response = await axios.patch(`${URL}api/v1/tours/${id}`, { ...body }, headers)
//             if (response.status == "200" || "success") {

//             }
//             return response.data
//         } catch (error) {
//         }
//     }

//     const GetTopFiveTour = async (body) => {
//         try {
//             const response = await axios.get(`${URL}api/v1/tours/top-5-cheap`, headers)
//             if (response.status == "200" || "success") {
//                 dispatch({
//                     type: "TopFive",
//                     payload: response.data.data.tours
//                 })
//             }
//             return response.data
//         } catch (error) {
//         }
//     }

//     const GetMonthlyPlan = async () => {
//         try {
//             const response = await axios.get(`${URL}api/v1/tours/get-plan/2021`, headers)
//             if (response.status == "200" || "success") {
//                 dispatch({
//                     type: "MonthlyPlan",
//                     payload: response.data.data.tours
//                 })
//             }
//             return response.data
//         } catch (error) {
//         }
//     }

//     const DeleteReview = async ({ id }) => {
//         try {
//             const response = axios.delete(`${URL}api/v1/reviews/${id}`, headers)
//         } catch (error) {

//         }
//     }

//     const CreateReview = async ({ ...values }) => {
//         try {
//             const response = axios.post(`${URL}api/v1/reviews`, { ...values }, headers)
//         } catch (error) {

//         }
//     }

//     const UpdateReview = async ({ ...values }) => {
//         try {
//             const response = axios.patch(`${URL}api/v1/reviews/${id}`, values, headers)
//         } catch (error) {

//         }
//     }

//     const GetAReview = async ({ id }) => {
//         try {
//             const response = axios.get(`${URL}api/v1/reviews/${id}`, headers)
//         } catch (error) {

//         }
//     }

//     const GetReviews = async () => {
//         try {
//             const response = axios.get(`${URL}api/v1/reviews`, headers)
//         } catch (error) {

//         }
//     }

//     const GetReviewOnTour = async ({ id }) => {
//         try {
//             const response = axios.get(`${URL}api/v1/tours/${id}/reviews`, headers)

//         } catch (error) {

//         }
//     }

//     const CreateReviewOnTour = async ({ id, ...values }) => {
//         try {

//             const response = axios.post(`${URL}api/v1/tours/${id}/reviews`, values, headers)
//         } catch (error) {

//         }
//     }


//     const [state, dispatch] = useReducer(toursReducer, initialTourState) 
//     return (
//         <ToursContext.Provider value={{state,
//             GetAllTours,
//              PostTour, DeleteTour, UpdateTour, GetMonthlyPlan, GetTopFiveTour, GetTour,
//             DeleteReview, CreateReview, CreateReviewOnTour, UpdateReview, GetAReview, GetReviews, GetReviewOnTour
//         }}>
//             {Children}
//         </ToursContext.Provider>
//     )
// }
// const useToursContext = () => useContext(ToursContext)

// export { useToursContext, ToursContextProvider }
