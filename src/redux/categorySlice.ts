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
    editCategory: (state, action: PayloadAction<number>) => {
      const category = state.find((category) => category.id === action.payload)
      if (category) {
        category.isEditing = !category.isEditing
      }
    },
    updateCategory: (
      state,
      action: PayloadAction<{ id: number; editCategoryTitle: string }>
    ) => {
      const category = state.find(
        (category) => category.id === action.payload.id
      )
      if (category) {
        category.title = action.payload.editCategoryTitle
        category.isEditing = !category.isEditing
      }
    },
  },
})

export const { addCategory, deleteCategory, editCategory, updateCategory } =
  categorySlice.actions
export default categorySlice.reducer
