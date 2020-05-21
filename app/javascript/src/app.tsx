import { Component } from 'react'
import * as React from 'react'

import TodoComponent from './components/TodoComponent'


class App extends Component {
  render() {
    return (
      <>
        <TodoComponent onClickAddButton={(e) => { console.log(e); }} />
      </>
    )
  }
};

export default App;