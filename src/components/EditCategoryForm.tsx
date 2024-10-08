import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { toggleEditCategory, updateCategory } from '../redux/categorySlice'

type EditCategoryFormProps = {
  id: number
  title: string
}

export const EditCategoryForm = ({ id, title }: EditCategoryFormProps) => {
  const dispatch = useDispatch()
  const [editCategoryTitle, setEditCategoryTitle] = useState(title)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (editCategoryTitle.trim() === '' || editCategoryTitle === title) return
    dispatch(updateCategory({ id, editCategoryTitle }))
    dispatch(toggleEditCategory(id))
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        value={editCategoryTitle}
        onChange={(e) => setEditCategoryTitle(e.target.value)}
        className='border border-gray-300 rounded px-2 py-1'
      />
      <button
        type='button'
        onClick={() => dispatch(toggleEditCategory(id))}
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
