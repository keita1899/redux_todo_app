import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addCategory } from '../redux/categorySlice'

export const AddCategoryForm = () => {
  const [newCategoryTitle, setNewCategoryTitle] = useState('')
  const dispatch = useDispatch()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (newCategoryTitle.trim() === '') return

    dispatch(addCategory({ id: Date.now(), title: newCategoryTitle }))

    setNewCategoryTitle('')
  }

  return (
    <form onSubmit={handleSubmit} className='flex items-center mb-4'>
      <input
        type='text'
        value={newCategoryTitle}
        onChange={(e) => setNewCategoryTitle(e.target.value)}
        className='border rounded-lg p-2 w-40'
        placeholder='新しいカテゴリー'
      />
      <input
        type='submit'
        value='追加'
        className='bg-blue-500 text-white rounded-lg p-2 ml-2 cursor-pointer'
      />
    </form>
  )
}
