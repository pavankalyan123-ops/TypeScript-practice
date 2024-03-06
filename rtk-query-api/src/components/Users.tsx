import React from "react";
import { useContactsQuery } from "../services/contactsApi";

const Users = () => {
  const { data, error, isLoading, isFetching, isSuccess } = useContactsQuery();
  return (
    <div>
      <h1>Redux toolkit query</h1>
      {isLoading && <h3>....Loading..</h3>}
      {isFetching && <h3>....Fetching...</h3>}
      {error && <h3>..oops something went wrong</h3>}
      {isSuccess && (
        <div>
          {data.map((contact) => (
            <div key={contact.id}>
              <h3>
                {contact.id} : {contact.name} - {contact.email}
                <button>View</button>
              </h3>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Users;
