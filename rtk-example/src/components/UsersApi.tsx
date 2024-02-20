import React,{useEffect} from 'react';

import { fetchApi } from '../redux/UsersApiSlice';
import { useAppDispatch,useAppSelector } from '../redux/hooks';


const UsersApi = () => {
    const users=useAppSelector(state=>state.user1.users);
    const dispatch=useAppDispatch();
    console.log(users);
    useEffect(()=>{
        dispatch(fetchApi())
    },[])
  return (
    <div>UsersApi</div>
  )
}

export default UsersApi