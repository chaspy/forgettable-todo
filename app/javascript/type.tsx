export type UserAuthorized = {
  status: Boolean
}

export type Task = {
  title: string
  description: string
  finished: Boolean
  created_at?: Date
  updated_at?: Date
}

export type Response = {
  user_id: Number
  task: Task[]

}
export type Request = {
  user_id: Number
  task: Task
}
