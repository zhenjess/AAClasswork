import React from "react";

import { Provider } from "react-redux";

import App from "./app";

// ({store}) is object destructuring
// getting the value of the key "store" in props
// props passed in when you use Root

const Root = ({store}) => {
  return(
    <Provider store={store}>
        <App />
      </Provider>
  )};

export default Root;

