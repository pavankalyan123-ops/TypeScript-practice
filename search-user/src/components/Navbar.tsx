import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filteredArray } from "../redux/UserSlice";
import { setInputValue } from "../redux/InputSlice";
import type { RootState } from "../redux/store";

const Navbar = () => {
  //const [input, setInput] = useState<string>("");
  const { placeholder, inputValue } = useSelector(
    (state: RootState) => state.input
  );
  const dispatch = useDispatch();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //setInput(e.target.value);
    dispatch(setInputValue(e.target.value));
  };
  useEffect(() => {
    dispatch(filteredArray(inputValue));
  }, [inputValue]);
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          background: "black",
          height: "100px",
          color: "white",
        }}
      >
        <div>Home</div>
        <div>About</div>
        <div>Contact</div>
        <div style={{ height: "100px", width: "100px" }}>
          <input
            type="text"
            placeholder={placeholder}
            value={inputValue}
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
