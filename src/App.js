import React, { useEffect } from 'react';
function Home1(){
  useEffect(()=>{
    console.log("useEffect is called in home1 components ");
    return ()=> {console.log("HOme1 component is being unmounted ")}
  },[])
  return(
    <>
      <h1> Home 1 components </h1>
    </>
  )
}

const App = () => {
  return (
    <div>
      <h1>App components</h1>
      <Home1 />
    </div>
  )
}

export default App