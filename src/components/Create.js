import React from "react";
import { useState } from "react";
import './create.css';
import { useCreateBookMutation } from "../app/services/bookService";

const Create = () => {
  
  const [createBook,data] = useCreateBookMutation();
 
  const [state, setState] = useState({
    name: "",
    author: "",
  });

  const handle = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const createNewBook = async (e) =>{
    e.preventDefault();
    await createBook(state);
   
    
  }
  return (
    <div className="container">
      <h3>Create new book </h3>
      <form action="" onSubmit={createNewBook}>
        <input
          type="text"
          name="name"
          placeholder="book name"
          required
          onChange={handle}
          value={state.name}
        />
        <input
          type="text"
          name="author"
          placeholder="book author"
          required
          onChange={handle}
          value={state.author}
        />
        <button type="submit">create new book</button> 
      </form>
    </div>
  );
};

export default Create;
