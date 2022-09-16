import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

const Form = () => {
    const [name,setName] = useState("");
    const [address , setAddress] = useState("");
    const dispatch = useDispatch();

    const formSubmit = (e) =>{
        e.preventDefault();
        console.log(name, address);
        dispatch({type : "ADD_USER", payload : {id :uuidv4() ,name, address}});
        setName("");
        setAddress("");
    }
  return (
    <div>
        <form action="" onSubmit={formSubmit}>
            <div className="group">
                <input type="text" className='control' placeholder='Enter name ' value={name} onChange = {(e)=> setName(e.target.value)} required />
            </div>

            <div className="group">
                <input type="text" className='control' placeholder='Enter address ' value={address} onChange = {(e)=> setAddress(e.target.value)} required/>
            </div>
            <div className="group">
                <input type="submit" className='btn' value= "Add User" />
            </div>
        </form>
    </div>
  )
}

export default Form