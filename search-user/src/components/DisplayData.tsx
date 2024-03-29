import React from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import { setSelectedValue } from "../redux/InputSlice";
import { removeUser } from "../redux/UserSlice";

const DisplayData = () => {
  const usersList = useSelector((state: RootState) => state.users.filteredData);
  const { checkboxValue } = useSelector((state: RootState) => state.input);
  const dispatch = useDispatch();
  const handleCheck = (name: string) => {
    dispatch(setSelectedValue(name));
  };
  const handleDelete = (id: number) => {
    dispatch(removeUser(id));
  };
  return (
    <div style={{ marginLeft: "100px" }}>
      <h3>users List is:</h3>
      <table style={{ border: "1px solid black" }}>
        <th>---</th>
        <th>S.No</th>
        <th>Name</th>
        <th>Email</th>
        <th>Age</th>
        <th>Actions</th>
        {usersList.map((user) => (
          <tr key={user.id}>
            <td>
              <input
                type="checkbox"
                checked={checkboxValue.includes(user.name)}
                onChange={() => handleCheck(user.name)}
              />
            </td>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.age}</td>
            <td>
              {checkboxValue.includes(user.name) && (
                <button onClick={() => handleDelete(user.id)}>Delete</button>
              )}
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default DisplayData;
