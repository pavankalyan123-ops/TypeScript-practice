import React, { useState, useEffect } from "react";
import {
  useAddContactMutation,
  useUpdateContactMutation,
} from "../services/contactsApi";

interface ContactDetails {
  id: string;
  name: string;
  email: string;
}

interface AddContactProps {
  editContact?: ContactDetails; // Make editContact prop optional
}

const AddContact: React.FC<AddContactProps> = ({ editContact }) => {
  const [details, setDetails] = useState<{
    id: string;
    name: string;
    email: string;
  }>({
    id: editContact?.id ?? "9",
    name: editContact?.name ?? "",
    email: editContact?.email ?? "",
  });
  console.log("details", details);
  useEffect(() => {
    setDetails({
      id: editContact?.id ?? "9",
      name: editContact?.name ?? "",
      email: editContact?.email ?? "",
    });
  }, [editContact]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name } = e.target;
    setDetails((prev) => {
      const newId = String(parseInt(details.id) + 1);
      return { ...prev, id: newId, [name]: e.target.value };
    });
  };

  const [addContact] = useAddContactMutation();
  const [updateContact] = useUpdateContactMutation();

  const handleAdd = async () => {
    // if (editContact) {
    //   const { id, ...rest } = details;
    //   await updateContact({ id, ...rest });
    //   setDetails({ id: "10", name: "", email: "" });
    // } else {
    await addContact(details);
    setDetails({ id: "10", name: "", email: "" });
    //}
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
      <button onClick={handleAdd}>
        {editContact ? "Update Contact" : "Add Contact"}
      </button>
    </div>
  );
};

export default AddContact;
