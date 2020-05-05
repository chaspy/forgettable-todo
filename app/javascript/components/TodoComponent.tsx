import { Component } from 'react'
import * as React from 'react'

import check_authorized from '../api/auth'
import { UserAuthorized } from '../type'

interface IProps {
  onClickAddButton: (todo: string) => void

}

interface IState {
  todos: string[];
  text: string;
  status: Boolean
}

class TodoComponent extends Component<IProps, IState> {
  constructor(props: any) {
    super(props)

    this.state = {
      text: '',
      todos: [],
      status: false
    }
  }

  componentWillMount = () => {
    const URL = window.location.href + 'users/auth_check'

    // FIXME : type:any
    const result: any = check_authorized(URL)
    console.log(result)

    this.setState({
      status: result.status
    })

  }



  private onTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ text: e.currentTarget.value })
  }


  private onClickAddButton = () => {
    const { text, todos } = this.state;

    if (text.length === 0) return;

    this.setState({
      todos: [...todos, text],
      text: ''
    })
    console.log("Clicked")
  }

  render() {
    const { text, todos } = this.state;
    return (
      <>
        <h1>Todo Lists [React View]</h1>

        <h2>Form</h2>
        <input type="text" value={text} onChange={e => { this.onTextChange(e) }} />
        <button onClick={this.onClickAddButton}>Add</button>

        <h2>Item List</h2>
        <ul>
          {todos.map((todo, index) => {
            return <li key={index}>{todo}</li>
          })}
        </ul>
      </>
    )
  }
};

export default TodoComponent;
