import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

/* StrictMode is Property of React
<App/> is a custom App  
React.StrictMode is optional*/
root.render(
  // <React.StrictMode>
  <App />
  // </React.StrictMode>
);
