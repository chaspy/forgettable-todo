import * as React from "react";
import * as ReactDOM from "react-dom";
import App from './app'

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from '../reducers'

const store = createStore(reducer)


interface HelloProps {
  name: string;
}

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.body.appendChild(document.createElement("div")),
  )
})
