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
    setSelectedValue: (state, action: PayloadAction<string>) => {
      if (state.checkboxValue.includes(action.payload)) {
        state.checkboxValue = state.checkboxValue.filter(
          (c) => c !== action.payload
        );
      } else {
        state.checkboxValue.push(action.payload);
      }
    },
  },
});

export const { setInputValue, setSelectedValue } = InputSlice.actions;
export default InputSlice.reducer;
