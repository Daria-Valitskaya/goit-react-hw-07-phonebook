import { createAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
const addContact = createAction("contacts/Add", (name, number) => ({
  payload: { id: uuidv4(), name, number },
}));
const onDeleteContact = createAction("contacts/Delete");
const onChangeFilter = createAction("contacts/Filter");
export { addContact, onDeleteContact, onChangeFilter };
