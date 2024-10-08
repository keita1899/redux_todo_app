import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../redux/todoSlice'

type AddTodoFormProps = {
  categoryId: number
}

export const AddTodoForm = ({ categoryId }: AddTodoFormProps) => {
  const [newTodoName, setTodoName] = useState('')
  const dispatch = useDispatch()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (newTodoName.trim() === '') return

    dispatch(
      addTodo({ id: Date.now(), categoryId: categoryId, name: newTodoName })
    )

    setTodoName('')
  }

  return (
    <form className='mt-2' onSubmit={handleSubmit}>
      <input
        type='text'
        className='border rounded-lg p-2 w-full'
        placeholder='新しいTodo'
        value={newTodoName}
        onChange={(e) => setTodoName(e.target.value)}
        data-dndkit-disabled-dnd-flag='true'
      />
      <input
        type='submit'
        value='追加'
        className='bg-green-500 text-white rounded-lg p-2 mt-2 cursor-pointer'
        data-dndkit-disabled-dnd-flag='true'
      />
    </form>
  )
}
