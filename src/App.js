import React from 'react'


const App = () => {
  let items = ["item 1", "item 2", "item 3"];
  let listItem = items.map((item,i)=>{
    return  <li  key={i}> {item} </li>
  })
  return (
     <>
        <ol>
          {listItem}
        </ol>
     </>
  )
}

export default App