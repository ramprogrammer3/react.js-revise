

// console.log("_________________________________________________________________________________");

// const initState = {
//     users : []
// }

// const userReducer = (state = initState, action) =>{
//     switch(action.type){
//         default:
//             return state;
//     }
// }

// console.log("_________________________________________________________________________________");

// import { createStore } from "redux";
// import userReducer from "./reducers/userReducer";

// const store = createStore(userReducer);


// export default store;

// const initState = {
//     users : []
// }

// const userReducer = (state = initState, action) =>{
//     switch(action.type){
//         default:
//             return state;
//     }
// }

// export default userReducer;

// import { Provider } from "react-redux"
// import store from "./store"
// const App = () => {
//   return (
//      <Provider store={store}>
//        <>
//         <h1>hello react </h1>
//        </>
//      </Provider>
//   ) 
// }

// console.log("_________________________________________________________________________________");


// const initState = {
//     users : [
//         {
//             id : 1, name : "ram kumar ", address  : "Noida "
//         }
//     ]
// }
// const userReducer = (state = initState, action) =>{
//     switch(action.type){
//         default:
//             return state;
//     }
// }

// import React from 'react'
// import {useSelector} from 'react-redux'
// const User = () => {
//     const state = useSelector((state)=> state.users)
//     console.log(state)
//   return (
//     <>
//         <h1>user page </h1>
//     </>
//   )
// }

// import { Provider } from "react-redux"
// import store from "./store"
// import User from "./User"
// const App = () => {
//   return (
//      <Provider store={store}>
//         <User />
//      </Provider>
//   ) 
// }

// console.log("_________________________________________________________________________________");

// import React from 'react'
// import { useState } from 'react'

// const Form = () => {
//     const [name,setName] = useState("");
//     const [address , setAddress] = useState("");

//     const formSubmit = (e) =>{
//         e.preventDefault();
//         console.log(name, address);
//     }
//   return (
//     <div>
//         <form action="" onSubmit={formSubmit}>
//             <div className="group">
//                 <input type="text" className='control' placeholder='Enter name ' value={name} onChange = {(e)=> setName(e.target.value)} />
//             </div>

//             <div className="group">
//                 <input type="text" className='control' placeholder='Enter address ' value={address} onChange = {(e)=> setAddress(e.target.value)} />
//             </div>
//             <div className="group">
//                 <input type="submit" className='btn' value= "Add User" />
//             </div>
//         </form>
//     </div>
//   )
// }

// console.log("_________________________________________________________________________________");

// import React from 'react'
// import { useState } from 'react'
// import { useDispatch } from 'react-redux';
// import { v4 as uuidv4 } from 'uuid';

// const Form = () => {
//     const [name,setName] = useState("");
//     const [address , setAddress] = useState("");
//     const dispatch = useDispatch();

//     const formSubmit = (e) =>{
//         e.preventDefault();
//         console.log(name, address);
//         dispatch({type : "ADD_USER", payload : {id :uuidv4() ,name, address}});
//         setName("");
//         setAddress("");
//     }
//   return (
//     <div>
//         <form action="" onSubmit={formSubmit}>
//             <div className="group">
//                 <input type="text" className='control' placeholder='Enter name ' value={name} onChange = {(e)=> setName(e.target.value)} />
//             </div>

//             <div className="group">
//                 <input type="text" className='control' placeholder='Enter address ' value={address} onChange = {(e)=> setAddress(e.target.value)} />
//             </div>
//             <div className="group">
//                 <input type="submit" className='btn' value= "Add User" />
//             </div>
//         </form>
//     </div>
//   )
// }

// console.log("_________________________________________________________________________________");

// import React from 'react'
// import {useDispatch, useSelector} from 'react-redux'
// const User = () => {
//     // const state = useSelector((state)=> state.users)
//     const users = useSelector((state)=> state.users);
//     const dispatch = useDispatch();
//     console.log(users)
//   return (
//     <>
//         <div >
//             {
//                 users ? users.map((item,i)=>{
//                     return <div className="row" key={item.id}>
//                         <div className='name'> {item.name} </div>
//                         <div className='address'> {item.address} </div>
//                         <div className='user-btn'>
//                         <button className='btn btn-danger' onClick={()=>dispatch({type : "DELETE_USER", id : item.id})}>Delete</button>
//                         </div>
//                     </div>
//                 }) : ""
//             }
//         </div>
//     </>
//   )
// }


// const initState = {
//     users : [
//         {
//             id : 1, name : "ram kumar ", address  : "Noida "
//         }
//     ]
// }
// const userReducer = (state = initState, action) =>{
//     switch(action.type){
//         case 'ADD_USER':
//             return {users : [action.payload ,...state.users]};
//         case 'DELETE_USER':
//             const newUser = state.users.filter(user => user.id !== action.id);
//             return {users : newUser}    
//         default:
//             return state;
//     }
// }
// console.log("_________________________________________________________________________________");


// const initState = {
//     allUsers : []
// }

// const apiUserReducer = (state = initState, action)=>{ 
// switch(action.type){
//     default:
//         return state;
// }

        
// }

// import { createStore,combineReducers } from "redux";
// import userReducer from "./reducers/userReducer";
// import apiUserReducer from "./reducers/apiUserReducer";
// const rootReducer = combineReducers({
//     users : userReducer,
//     api : apiUserReducer
// })

// const store = createStore(rootReducer);


// export default store;

// console.log("_________________________________________________________________________________");

// import axios from "axios"
// const fetchUsers = () =>{
//     return async(dispatch) =>{
//         try{
//             const res = await axios.get("https://jsonplaceholder.typicode.com/users");
//             console.log(res.data);
//         }catch(err){
//             console.log(err);
//         }
//     }
// }


// import React from 'react'
// import { useEffect } from 'react';
// import {useDispatch, useSelector} from 'react-redux';
// import fetchUsers from './store/aciton/userAction';
// const User = () => {
//     // const state = useSelector((state)=> state.users)
//     const {users} = useSelector((state)=> state.users);
//     const dispatch = useDispatch();

//     useEffect(()=>{
//         dispatch(fetchUsers())
//     },[]);
    
//   return (
//     <>
//         <div >
//             {
//                 users ? users.map((item,i)=>{
//                     return <div className="row" key={item.id}>
//                         <div className='name'> {item.name} </div>
//                         <div className='address'> {item.address} </div>
//                         <div className='user-btn'>
//                         <button className='btn btn-danger' onClick={()=>dispatch({type : "DELETE_USER", id : item.id})}>Delete</button>
//                         </div>
//                     </div>
//                 }) : ""
//             }
//         </div>
//     </>
//   )
// }

// import { createStore,combineReducers ,applyMiddleware} from "redux";
// import userReducer from "./reducers/userReducer";
// import  ThunkMiddleware  from "redux-thunk";
// import apiUserReducer from "./reducers/apiUserReducer";
// const rootReducer = combineReducers({
//     users : userReducer,
//     api : apiUserReducer
// })

// const store = createStore(rootReducer,applyMiddleware(ThunkMiddleware));

// console.log("_________________________________________________________________________________");



// const initState = {
//     allUsers : []
// }

// const apiUserReducer = (state = initState, action)=>{ 
// switch(action.type){
//     case "STORE_USERS":
//         return {allUsers : action.payload}
//     default:
//         return state;
// }
        
// }

// import axios from "axios"
// const fetchUsers = () =>{
//     return async(dispatch) =>{
//         try{
//             const res = await axios.get("https://jsonplaceholder.typicode.com/users");
//             dispatch({type : 'STORE_USERS', payload : res.data})
//         }catch(err){
//             console.log(err);
//         }
//     }
// }

// console.log("_________________________________________________________________________________");

// import React from 'react'
// import { useEffect } from 'react';
// import {useDispatch, useSelector} from 'react-redux';
// import fetchUsers from './store/aciton/userAction';
// const User = () => {
//     // const state = useSelector((state)=> state.users)
//     const {users} = useSelector((state)=> state.users);
//     const api = useSelector((state)=> state.api)
//     console.log("api user ",api)
//     const dispatch = useDispatch();

//     useEffect(()=>{
//         dispatch(fetchUsers())
//     },[]);

//   return (
//     <>
//         <div >
//             {
//                 users ? users.map((item,i)=>{
//                     return <div className="row" key={item.id}>
//                         <div className='name'> {item.name} </div>
//                         <div className='address'> {item.address} </div>
//                         <div className='user-btn'>
//                         <button className='btn btn-danger' onClick={()=>dispatch({type : "DELETE_USER", id : item.id})}>Delete</button>
//                         </div>
//                     </div>
//                 }) : ""
//             }
//         </div>
//     </>
//   )
// }

// console.log("_________________________________________________________________________________");