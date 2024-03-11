import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { filteredArray } from "../redux/UserSlice";

const Navbar = () => {
  const [input, setInput] = useState<string>("");
  const dispatch = useDispatch();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };
  useEffect(() => {
    dispatch(filteredArray(input));
  }, [input]);
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
            placeholder="Search user"
            value={input}
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
