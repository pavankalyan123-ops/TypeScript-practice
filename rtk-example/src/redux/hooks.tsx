import { useSelector,useDispatch } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
import type { rootReducer,AppDispatch } from "./store";


export const useAppDispatch:()=>AppDispatch=useDispatch;
export const useAppSelector:TypedUseSelectorHook<rootReducer>=useSelector;