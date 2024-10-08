import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { toggleEditTodo, updateTodo } from '../redux/todoSlice'

type EditTodoNameFormProps = {
  id: number
  name: string
}

export const EditTodoNameForm = ({ id, name }: EditTodoNameFormProps) => {
  const dispatch = useDispatch()
  const [editTodoName, setEditTodoName] = useState(name)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (editTodoName.trim() === '' || editTodoName === name) return

    dispatch(updateTodo({ id, editTodoName }))
    dispatch(toggleEditTodo(id))
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        value={editTodoName}
        onChange={(e) => setEditTodoName(e.target.value)}
        className='border border-gray-300 rounded px-2 py-1'
      />
      <button
        type='button'
        onClick={() => dispatch(toggleEditTodo(id))}
        className='bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-75'
      >
        キャンセル
      </button>
      <button className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75'>
        保存
      </button>
    </form>
  )
}
