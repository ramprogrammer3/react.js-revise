import React from 'react'
import axios from 'axios'
const App = () => {
 async function  getData(){
  await  axios.get("https://jsonplaceholder.typicode.com/users")
    .then((res)=>{
      console.log(res.data);
      console.log("code after the api call ");
    })
  }
  return (
    <>
      <h1>App component </h1>
      <button onClick={getData}>get data </button>
    </>
  )
}

export default App