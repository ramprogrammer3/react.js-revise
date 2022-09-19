import { useState } from "react";
function App(){
  const [data , setData] = useState({
    name : "rahul", age : 20
  })
  console.log(data);
  return(
    <>
      <h2> App component {data.name} </h2>
      <button onClick={()=>{
        setData({...data,name : "ram"})
      }}>change state</button>
    </>
  )
} 

export default App;
