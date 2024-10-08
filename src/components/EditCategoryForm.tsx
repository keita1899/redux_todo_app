import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { updateCategory } from '../redux/categorySlice'

type EditCategoryFormProps = {
  id: number
  title: string
}

export const EditCategoryForm = ({ id, title }: EditCategoryFormProps) => {
  const dispatch = useDispatch()
  const [editCategoryTitle, setEditCategoryTitle] = useState(title)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (editCategoryTitle === '') return
    dispatch(updateCategory({ id, editCategoryTitle }))
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        value={editCategoryTitle}
        onChange={(e) => setEditCategoryTitle(e.target.value)}
        className='border border-gray-300 rounded px-2 py-1'
      />
      <button className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75'>
        保存
      </button>
    </form>
  )
}
