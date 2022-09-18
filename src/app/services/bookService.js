
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
export const bookService = createApi({
    reducerPath:"books",
    tagTypes : ['books'],
    baseQuery : fetchBaseQuery({
        baseUrl : "http://localhost:5000"
    }),
    endpoints : (builder) =>({
        getBooks : builder.query({
            query : ()=>{
                return {
                    url : "books",
                    method : "GET",
                };
            },
            providesTags : ['books'],
        }),
        createBook : builder.mutation({
            query : (book)=>({
                headers : {'content-type' : 'application/json'},
                url : "books",
                method : "POST",
                body : book
            }),
            invalidatesTags : ['books']
        }),
        deleteBook : builder.mutation({
            
        })
    }),
});

export const {useGetBooksQuery, useCreateBookMutation} = bookService;