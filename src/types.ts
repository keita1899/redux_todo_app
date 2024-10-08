export type Category = {
  id: number
  title: string
  isEditing: boolean
}

export type Categories = {
  categories: Category[]
}

export type Todo = {
  id: number
  categoryId: number
  name: string
  isEditing: boolean
  isComplete: boolean
}

export type Todos = {
  todos: Todo[]
}
