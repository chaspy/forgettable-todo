import * as React from "react";
import * as ReactDOM from "react-dom";
import App from './app'

interface HelloProps {
  name: string;
}

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
    <App />,
    document.body.appendChild(document.createElement("div")),
  )
})
