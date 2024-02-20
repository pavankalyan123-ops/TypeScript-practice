import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { increment,decrement,incrementByValue,reset } from '../redux/CounterSlice';
import { rootReducer } from '../redux/store';

const Counter = () => {
    const count=useSelector((state:rootReducer)=>state.counter.count);
    const dispatch=useDispatch();
  return (
    <div>
        <button onClick={()=>{
            dispatch(increment())
        }}>Increment</button>
        <button onClick={()=>{
            dispatch(reset())
        }}>Reset</button>
        <button onClick={()=>{
            dispatch(decrement())
        }}>Decrement</button>
        <button onClick={()=>{
            dispatch(incrementByValue(50))
        }}>Increment By Value 50</button>
        <h3>{count}</h3>
    </div>
  )
}

export default Counter