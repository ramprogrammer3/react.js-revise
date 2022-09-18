// console.log("_________________________________________________________________");

import { bookService } from "./app/services/bookService"

// import React from 'react'
// import { BrowserRouter, Routes, Route  } from 'react-router-dom'
// import Books from './components/Books'
// import Create from './components/Create'
// const App = () => {
//   return (
//     <>
//       <BrowserRouter>
//         <Routes>
//             <Route path='/' element ={<Books />} />
//             <Route path='/create' element = {<Create />} />
//         </Routes>
//       </BrowserRouter>
//     </>
//   )
// }

// // inside scr app folder index.js

// import { configureStore } from "@reduxjs/toolkit";
// const store = configureStore({
//     reducer: {

//     }
// })

// export default store;


// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import { Provider } from 'react-redux';
// import store from './app/index'

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//   <Provider store={store}>
//     <App />
//   </Provider>
//   </React.StrictMode>
// );

// console.log("_________________________________________________________________");

// setup json- server 
// "api" : "json-server --watch db.json --port=5000"
// npm run api 


// console.log("_________________________________________________________________");

// create service folder in app and bookService.js in service 


// import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
// export const bookService = createApi({
//     reducerPath:"books",
//     baseQuery : fetchBaseQuery({
//         baseUrl : "http://localhost:5000"
//     }),
//     endpoints : (builder) =>({
//         getBooks : builder.query({
//             query : ()=>{
//                 return {
//                     url : "books",
//                     method : "GET",
//                 }
//             }
//         })
//     })
// });

// export const {useGetBooksQuery} = bookService;



// import { configureStore } from "@reduxjs/toolkit";
// import {bookService} from './services/bookService'

// const store = configureStore({
//     reducer: {
//         [bookService.reducerPath]: bookService.reducer
//     }
// })

// export default store;


// import React from 'react'
// import {useGetBooksQuery} from "../app/services/bookService"
// const Books = () => {
//   const response = useGetBooksQuery();
//   console.log(response);
//   return (
//     <div>Books</div>
//   )
// }



// console.log("_________________________________________________________________");

// import React from 'react'
// import {useGetBooksQuery} from "../app/services/bookService"
// const Books = () => {
//   const {data = [], isLoading, isError} = useGetBooksQuery();

//   if(isLoading) return <div className="container">
//         <h1> Loading </h1>
//       </div>
  
//   return <div className="container">
//     {
//       data.map((item,i)=>(
//         <div className="list" key={item.id}>
//           <div className="list-name">
//             <span> Name : </span>
//             {item.name}
//           </div>
//           <div className="list-author">
//             <span> author </span>
//             {item.author}
//           </div>
//           <div className="list--button">
//             <button>delete book</button>
//           </div>
//         </div>
//       ))
//     }
//   </div>
// }
// console.log("_________________________________________________________________");


// import { Link } from "react-router-dom"
// import "./header.css"

// const Header = () => {
//   return (
//     <header className="header">
//         <Link to= "/">Home</Link>
//         <Link to= "/create">Create book</Link>
//     </header>
//   )
// }

// export default Header

// console.log("_________________________________________________________________");

// import React from "react";
// import { useState } from "react";
// import './create.css'

// const Create = () => {
//   const [state, setState] = useState({
//     name: "",
//     author: "",
//   });

//   const handle = (e) => {
//     setState({ ...state, [e.target.name]: e.target.value });
//   };

//   const createNewBook = (e) =>{
//     e.preventDefault();
    
//   }
//   return (
//     <div className="container">
//       <h3>Create new book </h3>
//       <form action="" onSubmit={createNewBook}>
//         <input
//           type="text"
//           name="name"
//           placeholder="book name"
//           required
//           onChange={handle}
//           value={state.name}
//         />
//         <input
//           type="text"
//           name="author"
//           placeholder="book author"
//           required
//           onChange={handle}
//           value={state.author}
//         />
//         <button type="submit">create new book</button>
//       </form>
//     </div>
//   );
// };

// export default Create;


// console.log("_________________________________________________________________");


// import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
// export const bookService = createApi({
//     reducerPath:"books",
//     baseQuery : fetchBaseQuery({
//         baseUrl : "http://localhost:5000"
//     }),
//     endpoints : (builder) =>({
//         getBooks : builder.query({
//             query : ()=>{
//                 return {
//                     url : "books",
//                     method : "GET",
//                 };
//             },
//         }),
//         createBook : builder.mutation({
//             query : ()=>({
//                 headers : {'content-type' : 'application/json'},
//                 url : "books",
//                 method : "POST"
//             })
//         })
//     }),
// });

// export const {useGetBooksQuery, useCreateBookMutation} = bookService;

// console.log("_________________________________________________________________");

// import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
// export const bookService = createApi({
//     reducerPath:"books",
//     baseQuery : fetchBaseQuery({
//         baseUrl : "http://localhost:5000"
//     }),
//     endpoints : (builder) =>({
//         getBooks : builder.query({
//             query : ()=>{
//                 return { 
//                     url : "books",
//                     method : "GET",
//                 };
//             },
//         }),
//         createBook : builder.mutation({
//             query : (book)=>({
//                 headers : {'content-type' : 'application/json'},
//                 url : "books",
//                 method : "POST",
//                 body : book
//             })
//         })
//     }),
// });

// export const {useGetBooksQuery, useCreateBookMutation} = bookService;

// import React from "react";
// import { useState } from "react";
// import './create.css';
// import { useCreateBookMutation } from "../app/services/bookService";
// import { Link } from "react-router-dom";


// const Create = () => {
//   const [createBook,data] = useCreateBookMutation();
//   console.log(data);
//   const [state, setState] = useState({
//     name: "",
//     author: "",
//   });

//   const handle = (e) => {
//     setState({ ...state, [e.target.name]: e.target.value });
//   };

//   const createNewBook = async (e) =>{
//     e.preventDefault();
//     await createBook(state);
    
//   }
// console.log("_________________________________________________________________");
// import React from "react";
// import { useState } from "react";
// import './create.css';
// import { useCreateBookMutation, useGetBooksQuery } from "../app/services/bookService";
// import { Link } from "react-router-dom";


// const Create = () => {
//   const [createBook,data] = useCreateBookMutation();
//  const fetchBooks = useGetBooksQuery();
//   const [state, setState] = useState({
//     name: "",
//     author: "",
//   });

//   const handle = (e) => {
//     setState({ ...state, [e.target.name]: e.target.value });
//   };

//   const createNewBook = async (e) =>{
//     e.preventDefault();
//     fetchBooks.refetch();
//     await createBook(state);
    
//   }


// import { configureStore } from "@reduxjs/toolkit";
// import {bookService} from './services/bookService'

// const store = configureStore({
//     reducer: {
//         [bookService.reducerPath]: bookService.reducer
//     },
//     middleware : (getDefaultMiddleware) => getDefaultMiddleware().concat(bookService.middleware),
// })


// console.log("_________________________________________________________________");


// import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
// export const bookService = createApi({
//     reducerPath:"books",
//     tagTypes : ['books'],
//     baseQuery : fetchBaseQuery({
//         baseUrl : "http://localhost:5000"
//     }),
//     endpoints : (builder) =>({
//         getBooks : builder.query({
//             query : ()=>{
//                 return {
//                     url : "books",
//                     method : "GET",
//                 };
//             },
//             providesTags : ['books'],
//         }),
//         createBook : builder.mutation({
//             query : (book)=>({
//                 headers : {'content-type' : 'application/json'},
//                 url : "books",
//                 method : "POST",
//                 body : book
//             }),
//             invalidatesTags : ['books']
//         })
//     }),
// });

// import React from "react";
// import { useState } from "react";
// import './create.css';
// import { useCreateBookMutation } from "../app/services/bookService";

// const Create = () => {
  
//   const [createBook,data] = useCreateBookMutation();
 
//   const [state, setState] = useState({
//     name: "",
//     author: "",
//   });

//   const handle = (e) => {
//     setState({ ...state, [e.target.name]: e.target.value });
//   };

//   const createNewBook = async (e) =>{
//     e.preventDefault();
//     await createBook(state);
   
    
//   }
//   return (
//     <div className="container">
//       <h3>Create new book </h3>
//       <form action="" onSubmit={createNewBook}>
//         <input
//           type="text"
//           name="name"
//           placeholder="book name"
//           required
//           onChange={handle}
//           value={state.name}
//         />
//         <input
//           type="text"
//           name="author"
//           placeholder="book author"
//           required
//           onChange={handle}
//           value={state.author}
//         />
//         <button type="submit">create new book</button> 
//       </form>
//     </div>
//   );
// };

// export default Create;

// console.log("_________________________________________________________________");


// console.log("_________________________________________________________________");