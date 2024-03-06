import React, { useState } from "react";
import { useAddContactMutation } from "../services/contactsApi";

const AddContact = () => {
  const [details, setDetails] = useState<{
    id: string;
    name: string;
    email: string;
  }>({
    id: "9",
    name: "",
    email: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name } = e.target;
    setDetails((prev) => {
      const newId = String(parseInt(details.id) + 1);
      return { ...prev, id: newId, [name]: e.target.value };
    });
  };

  const [addContact] = useAddContactMutation();
  console.log(addContact);
  const handleAdd = async () => {
    await addContact(details);
    setDetails({ id: "10", name: "", email: "" });
  };
  return (
    <div>
      <h3>Add User</h3>
      <input
        type="text"
        name="name"
        value={details.name}
        placeholder="Enter your name"
        onChange={handleChange}
      />
      <input
        type="text"
        name="email"
        value={details.email}
        placeholder="Enter you Email"
        onChange={handleChange}
      />
      <button onClick={handleAdd}>Add Contact</button>
    </div>
  );
};

export default AddContact;
