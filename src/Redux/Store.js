import { createStore } from "redux";
import { Reducers } from "./Reducer";
import { composeWithDevTools } from "redux-devtools-extension";

export const STORE = createStore(Reducers, composeWithDevTools());
