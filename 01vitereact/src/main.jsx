import ReactDOM from "react-dom/client";
import React from "react";
import App from "./App.jsx";

/* can we create own method like App.jsx ?
Answer is yes
*/

function MyApp() {
  return <h1> My own Function</h1>;
}

const AnotherELement = (
  <a href="https://google.com" target="_blank" rel="noreferrer">
    Click me to visit google
  </a>
);

/* Can we create own object in react like we have create in custom React?
Answer is Yes ,
but renderElement Object will not run because
in this object we have pass are own key values pair , but react have some own standard key that
we have to pass it ,

but in ReactElement we can pass a object like that create by React.createelement
and the properties like this
*/

const RenderElement = {
  type: "a",
  props: {
    href: "https://google.com",
    traget: "_blank",
  },
  childern: "Click me to visit google",
};

const username = "chai or code";
const ReactElement = React.createElement(
  "a",
  { href: "https://google.com", traget: "_blank" },
  "Click me to visit google",
  username
);

/*
we can render a function like <MyApp /> or  MyApp() but MyApp() is not valid according to coding standards in render method 
and object AnotherELement
*/
ReactDOM.createRoot(document.getElementById("root")).render(ReactElement);
