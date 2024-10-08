import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Category } from '../types'

const initialState: Category[] = []

export const categorySlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    addCategory: (
      state,
      action: PayloadAction<{ id: number; title: string }>
    ) => {
      state.push({ ...action.payload, isEditing: false })
    },
    deleteCategory: (state, action: PayloadAction<number>) => {
      return state.filter((category) => category.id !== action.payload)
    },
  },
})

export const { addCategory, deleteCategory } = categorySlice.actions
export default categorySlice.reducer
