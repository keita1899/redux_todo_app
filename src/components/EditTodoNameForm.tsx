import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { updateTodo } from '../redux/todoSlice'

type EditTodoNameFormProps = {
  id: number
  name: string
}

export const EditTodoNameForm = ({ id, name }: EditTodoNameFormProps) => {
  const dispatch = useDispatch()
  const [editTodoName, setEditTodoName] = useState(name)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (editTodoName === '') return

    dispatch(updateTodo({ id, editTodoName }))
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        value={editTodoName}
        onChange={(e) => setEditTodoName(e.target.value)}
        className='border border-gray-300 rounded px-2 py-1'
      />
      <button className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75'>
        保存
      </button>
    </form>
  )
}
