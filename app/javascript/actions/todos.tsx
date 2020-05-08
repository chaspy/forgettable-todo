// Definition Actions
export const CREATE_TODO = 'CREATE_TODO' as const
export const READ_TODOS = 'READ_TODOS' as const
export const UPDATE_TODO = 'UPDATE_TODO' as const
export const DELETE_TODO = 'DELETE_TODO' as const

// Action Creators
const CreateTodo = () => {
  type: CREATE_TODO
}
const ReadTodos = () => {
  type: READ_TODOS
}
const UpdateTodo = () => {
  type: UPDATE_TODO
}
const DeleteTodo = () => {
  type: DELETE_TODO
}

export type Actions = ReturnType<typeof CreateTodo | typeof ReadTodos | typeof UpdateTodo | typeof DeleteTodo>