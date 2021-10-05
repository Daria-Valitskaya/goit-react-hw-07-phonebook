import { combineReducers } from "redux";
// import types from "./contacts-types";
import { createReducer } from "@reduxjs/toolkit";
import {
  addContact,
  onDeleteContact,
  onChangeFilter,
} from "./contacts-actions";
const items = createReducer([], {
  [addContact]: (state, action) => [...state, action.payload],
  [onDeleteContact]: (state, action) =>
    state.filter((contact) => contact.id !== action.payload),
});
const filter = createReducer("", {
  [onChangeFilter]: (_, action) => action.payload,
});
export default combineReducers({
  items,
  filter,
});
