import React from 'react'
import {useGetBooksQuery} from "../app/services/bookService";
import './book.css'
const Books = () => {
  const {data = [], isLoading, isError} = useGetBooksQuery();

  if(isLoading) return <div className="container">
        <h1> Loading </h1>
      </div>
  
  return <div className="container">
    {
      data.map((item,i)=>(
        <div className="list" key={item.id}>
          <div className="list-name">
            <span> Name : </span><br />
            {item.name}
          </div>
          <div className="list-name">
            <span> author </span><br />
            {item.author}
          </div>
          <div className="list--button">
            <button>delete book</button>
          </div>
        </div>
      ))
    }
  </div>
}

export default Books