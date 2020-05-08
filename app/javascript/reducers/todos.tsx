import { Actions, CREATE_TODO, UPDATE_TODO, READ_TODOS, DELETE_TODO } from '../actions/todos'
import { Task } from '../type'

const initialState: Task = {
  title: '',
  description: '',
  finished: false
}

// FIXME: type application - actions:amy => actions: Actions
export default (state: Task = initialState, actions: any) => {
  switch (actions.type) {
    case CREATE_TODO:
      console.log(`Create Action is called`)
    case READ_TODOS:
      console.log(`Read Action is called`)
    case UPDATE_TODO:
      console.log(`Update Action is called`)
    case DELETE_TODO:
      console.log(`Delete actions is called`)
    default:
      throw new Error('Invalid action type')
  }
}