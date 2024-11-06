import React from "react";
// import {legacy_createStore} from "redux";
import { configureStore, createSlice  } from "@reduxjs/toolkit";
// import redux from 'react-redux';
// import ReactReduxContext from "react-redux";
// import {Provider, useDispatch, useSelector, connect} from 'react-redux';
// import { createStore } from 'redux';
// const redux=require('redux');



//Cчётчик через redux-toolkit

const initialCounterState={value:0, isCounterInvisible:false}

const counterSlice=createSlice({
    name:"counter",
    initialState:initialCounterState,
    reducers:{
        increment(state){
             state.value++;
        },
        decrement(state){
             state.value--;
        },
        increase(state, action){
            state.value=state.value + action.payload;
        },
        setCounterVisibility(state){
            state.isCounterInvisible=!state.isCounterInvisible;
        }
    }
})
const initialAuthState={isUserLoggedIn:false}
//
const authSlice=createSlice({
    name:"authentification",
    initialState:initialAuthState,
    reducers:{
        login(state){
             state.isUserLoggedIn=true;
        },
        logout(state){
            state.isUserLoggedIn=false;
        },

    }
})




const store=configureStore({
    reducer:{counter:counterSlice.reducer,
             authentification:authSlice.reducer},
    });
export const counterActions=counterSlice.actions;
export const authActions=authSlice.actions;

export default store;





//Счётчик на библиотеках 1. react-redux и 2.redux
// const initialState={counter:0, isCounterVisible:true}

// const counterReducer=(state=initialState, action)=>{

//         if(action.type==="INCREMENT"){
//             return{
//                 //альтернативно, но чревато багами
//                 //state.counter++;
//                 //return state;
//                 counter:state.counter+1,
//                 isCounterInvisible:state.isCounterVisible,
//             }
//         }  if(action.type==="INCREASEBYX"){
//             return{
//                 counter:state.counter+action.number,
//                 isCounterInvisible:state.isCounterVisible,
//             }
//         }if(action.type==="DECREMENT"){
//             return{
//                 counter:state.counter-1,
//                 isCounterInvisible:state.isCounterVisible,

//             }
//         }if(action.type==="VISIBILITY"){
//             return{
//                 counter:state.counter,
//                 isCounterInvisible:!state.isCounterVisible,

//             }
//         }
// return state;
// }
// const store=legacy_createStore(counterReducer);

// export default store;


