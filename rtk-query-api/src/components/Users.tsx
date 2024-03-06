import React, { useState } from "react";
import {
  useContactsQuery,
  useDeleteContactMutation,
} from "../services/contactsApi";
import OneUser from "./OneUser";
import AddContact from "./AddContact";

const Users = () => {
  const { data, error, isLoading, isFetching, isSuccess } = useContactsQuery();
  const [isId, setIsId] = useState<string>("");
  const [deleteContact] = useDeleteContactMutation();
  const handleDelete = async (id: string) => {
    await deleteContact(id);
  };
  return (
    <div>
      <h1>Redux toolkit query</h1>
      <AddContact />
      {isLoading && <h3>....Loading..</h3>}
      {isFetching && <h3>....Fetching...</h3>}
      {error && <h3>..oops something went wrong</h3>}
      {isSuccess && (
        <div>
          {data.map((contact) => (
            <div key={contact.id}>
              <h3>
                {contact.id} : {contact.name} - {contact.email}
                <button
                  onClick={() => {
                    setIsId(contact.id);
                  }}
                >
                  View
                </button>
                <button>Edit</button>
                <button onClick={() => handleDelete(contact.id)}>Delete</button>
              </h3>
              {isId === contact.id && <OneUser id={isId} />}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Users;
