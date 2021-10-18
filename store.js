import { createStore } from "redux";
import { rootReducer } from "./app/redux/reducers/root.reducer";

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
