import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Todo } from '../types'

const initialState: Todo[] = []

export const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (
      state,
      action: PayloadAction<{ id: number; categoryId: number; name: string }>
    ) => {
      state.push({ ...action.payload, isEditing: false, isComplete: false })
    },
    deleteTodoByCategoryId: (state, action: PayloadAction<number>) => {
      return state.filter((todo) => todo.categoryId !== action.payload)
    },
  },
})

export const { addTodo, deleteTodoByCategoryId } = todoSlice.actions
export default todoSlice.reducer
