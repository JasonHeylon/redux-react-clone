import "./index.css";

import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";

import { Provider } from "redux-react-clone";
import reducer from "./reducer";

import App from "./App";

const initialState = {
  todos: []
};

const store = createStore(reducer, initialState);

const Main = () => {
  return (
    <Provider store={store}>
      <App title="Example" />
    </Provider>
  );
};

ReactDOM.render(<Main />, document.getElementById("root"));
