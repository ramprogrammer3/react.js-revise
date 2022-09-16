import React from 'react'
import { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import fetchUsers from './store/aciton/userAction';
const User = () => {
    // const state = useSelector((state)=> state.users)
    const {users} = useSelector((state)=> state.users);
    const api = useSelector((state)=> state.api)
    console.log("api user ",api)
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchUsers())
    },[]);

  return (
    <>
        <div >
            {
                users ? users.map((item,i)=>{
                    return <div className="row" key={item.id}>
                        <div className='name'> {item.name} </div>
                        <div className='address'> {item.address} </div>
                        <div className='user-btn'>
                        <button className='btn btn-danger' onClick={()=>dispatch({type : "DELETE_USER", id : item.id})}>Delete</button>
                        </div>
                    </div>
                }) : ""
            }
        </div>
    </>
  )
}

export default User