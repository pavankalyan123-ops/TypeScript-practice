import React,{useState} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { rootReducer } from '../redux/store';
import { addUser,deleteUser,updateUser } from '../redux/UserSlic';

const Users = () => {
    const[input,setInput]=useState<string>('');
    const[id,setId]=useState<number | undefined>();
    const users=useSelector((state:rootReducer)=>state.user.users);
    const dispatch=useDispatch();
  return (
    <div>
        <h3>users component</h3>
        <input type="text" value={input} onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setInput(e.target.value)} />
        <button onClick={()=>{
            if(id)
            {
                dispatch(updateUser({id:id,name:input}));
                setInput('');
                setId(undefined);
            }else{
            dispatch(addUser(input));
            setInput('')
            }
        }}>{id===undefined?"Add":"update"}</button>
        {users.map((user,index)=>(
            <div>
                <h3>{user}
                <button onClick={()=>{
                   setId(index);
                   setInput(users[index])
                }}>Edit</button>
                <button onClick={()=>{
                    dispatch(deleteUser(index))
                }}>Delete</button>
                </h3>
            </div>
        ))}
    </div>
  )
}

export default Users