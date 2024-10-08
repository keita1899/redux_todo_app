import { useSelector } from 'react-redux'
import { Todo } from '../types'
import { TodoItem } from './TodoItem'
import { RootState } from '../redux/store'

type TodoListProps = {
  categoryId: number
}

export const TodoList = ({ categoryId }: TodoListProps) => {
  const todos = useSelector((state: RootState) => state.todos)

  const filteredTodos = todos.filter((todo) => todo.categoryId === categoryId)

  return (
    <ul className='mt-4'>
      {filteredTodos.map((todo: Todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  )
}
