import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { usersList } from "./usersList";

interface IuserList {
  id: number;
  name: string;
  email: string;
  age: number;
}
interface IData {
  data: IuserList[];
  filteredData: IuserList[];
}
const initialState: IData = {
  data: usersList,
  filteredData: [],
};
const UserSlice = createSlice({
  name: "search-user",
  initialState: initialState,
  reducers: {
    filteredArray: (state, action: PayloadAction<string>) => {
      if (action.payload !== "") {
        state.filteredData = state.data.filter((d) =>
          d.name.toLocaleLowerCase().includes(action.payload)
        );
      } else {
        state.filteredData = state.data;
      }
    },
    removeUser: (state, action: PayloadAction<number>) => {
      state.data.splice(1, action.payload);
    },
  },
});

export const { filteredArray } = UserSlice.actions;
export default UserSlice.reducer;
