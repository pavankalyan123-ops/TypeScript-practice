import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InputTypes {
  placeholder: string;
  inputValue: string;
  checkboxValue: string[];
}

const initialState: InputTypes = {
  placeholder: "...type to search",
  inputValue: "",
  checkboxValue: [],
};

const InputSlice = createSlice({
  name: "input",
  initialState: initialState,
  reducers: {
    setInputValue: (state, action: PayloadAction<string>) => {
      state.inputValue = action.payload;
    },
  },
});

export const { setInputValue } = InputSlice.actions;
export default InputSlice.reducer;
