import React from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../redux/store";

const DisplayData = () => {
  const usersList = useSelector((state: RootState) => state.users.filteredData);
  return (
    <div>
      <h3>users List is:</h3>
      <table>
        <th>S.No</th>
        <th>Name</th>
        <th>Email</th>
        <th>Age</th>
        {usersList.map((user) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.age}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default DisplayData;
