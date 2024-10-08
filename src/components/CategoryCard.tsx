import { useSelector } from 'react-redux'
import { Category } from '../types'
import { AddTodoForm } from './AddTodoForm'
import { CategoryCardHeading } from './CategoryCardHeading'
import { TodoList } from './TodoList'
import { RootState } from '../redux/store'
import { EditCategoryForm } from './EditCategoryForm'

type CategoryCardProps = {
  category: Category
}

export const CategoryCard = ({ category }: CategoryCardProps) => {
  const todos = useSelector((state: RootState) => state.todos)
  const filteredTodos = todos.filter((todo) => todo.categoryId === category.id)
  const completeTodos = filteredTodos.filter((todo) => todo.isComplete)
  const uncompleteTodos = filteredTodos.filter((todo) => !todo.isComplete)

  return (
    <div className='bg-white shadow-lg rounded-lg p-4 w-100'>
      {category.isEditing ? (
        <EditCategoryForm id={category.id} title={category.title} />
      ) : (
        <CategoryCardHeading id={category.id} title={category.title} />
      )}
      <TodoList todos={uncompleteTodos} />
      <AddTodoForm categoryId={category.id} />
      <TodoList todos={completeTodos} />
    </div>
  )
}
