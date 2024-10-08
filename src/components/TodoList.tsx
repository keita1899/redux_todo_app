import { Todo, Todos } from '../types'
import { TodoItem } from './TodoItem'

type TodoListProps = {
  todos: Todos
}

export const TodoList = ({ todos }: TodoListProps) => {
  return (
    <ul className='mt-4'>
      {todos.map((todo: Todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  )
}
