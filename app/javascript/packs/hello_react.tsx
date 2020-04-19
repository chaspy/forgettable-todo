import React from "react";
import ReactDOM from "react-dom";
import App from './app.tsx'

interface HelloProps {
  name: string;
}

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
    <App />,
    document.body.appendChild(document.createElement("div")),
  )
})
