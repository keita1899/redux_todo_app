import { useDispatch } from 'react-redux'
import { Todo } from '../types'
import { completeTodo, deleteTodo, toggleEditTodo } from '../redux/todoSlice'

type TodoProps = {
  todo: Todo
}

export const TodoItem = ({ todo }: TodoProps) => {
  const dispatch = useDispatch()

  return (
    <li className='p-3 mb-2 bg-white rounded-lg shadow-sm border border-gray-300 flex justify-between items-center'>
      <input
        type='checkbox'
        checked={todo.isComplete}
        onChange={() => dispatch(completeTodo(todo.id))}
        className='mr-3 h-4 w-4 text-green-500 focus:ring-green-400 border-gray-300 rounded'
      />
      <span
        onDoubleClick={() => dispatch(toggleEditTodo(todo.id))}
        className={todo.isComplete ? 'line-through text-gray-500' : ''}
      >
        {todo.name}
      </span>
      <button
        onClick={() => dispatch(deleteTodo(todo.id))}
        className='text-red-500 hover:text-red-700'
      >
        削除
      </button>
    </li>
  )
}
