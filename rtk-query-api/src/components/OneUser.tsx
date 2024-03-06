import React from "react";
import { useContactQuery } from "../services/contactsApi";

const OneUser = ({ id }: { id: string }) => {
  const { data } = useContactQuery(id);
  return <pre>{JSON.stringify(data)}</pre>;
};

export default OneUser;
