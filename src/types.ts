export type Category = {
  id: number
  title: string
  isEdit: boolean
}

export type Categories = {
  categories: Category[]
}

export type Todo = {
  id: number
  categoryId: number
  name: string
  isEdit: boolean
  isComplete: boolean
}
