import { Category } from '../types'
import { AddTodoForm } from './AddTodoForm'
import { CategoryCardHeading } from './CategoryCardHeading'
import { TodoList } from './TodoList'

type CategoryCardProps = {
  category: Category
}

export const CategoryCard = ({ category }: CategoryCardProps) => {
  return (
    <div className='bg-white shadow-lg rounded-lg p-4 w-100'>
      <CategoryCardHeading title={category.title} />
      <TodoList categoryId={category.id} />
      <AddTodoForm categoryId={category.id} />
    </div>
  )
}
