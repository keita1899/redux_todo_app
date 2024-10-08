import { Todo, Todos } from '../types'
import { EditTodoNameForm } from './EditTodoNameForm'
import { TodoItem } from './TodoItem'

type TodoListProps = {
  todos: Todos
}

export const TodoList = ({ todos }: TodoListProps) => {
  return (
    <ul className='mt-4'>
      {todos.map((todo: Todo) =>
        todo.isEditing ? (
          <EditTodoNameForm key={todo.id} id={todo.id} name={todo.name} />
        ) : (
          <TodoItem key={todo.id} todo={todo} />
        )
      )}
    </ul>
  )
}
