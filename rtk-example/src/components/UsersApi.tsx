import React,{useEffect} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { fetchApi } from '../redux/UsersApiSlice';
import { rootReducer } from '../redux/store';

const UsersApi = () => {
    const users=useSelector((state:rootReducer)=>state.user1.users);
    const dispatch=useDispatch();
    console.log(users);
    useEffect(()=>{
        dispatch(fetchApi() as any)
    },[])
  return (
    <div>UsersApi</div>
  )
}

export default UsersApi