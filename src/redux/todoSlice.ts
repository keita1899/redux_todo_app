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
    deleteTodo: (state, action: PayloadAction<number>) => {
      return state.filter((todo) => todo.id !== action.payload)
    },
    deleteTodoByCategoryId: (state, action: PayloadAction<number>) => {
      return state.filter((todo) => todo.categoryId !== action.payload)
    },
    completeTodo: (state, action: PayloadAction<number>) => {
      const todo = state.find((todo) => todo.id === action.payload)
      if (todo) {
        todo.isComplete = !todo.isComplete
      }
    },
    toggleEditTodo: (state, action: PayloadAction<number>) => {
      const todo = state.find((todo) => todo.id === action.payload)
      if (todo) {
        todo.isEditing = !todo.isEditing
      }
    },
    updateTodo: (
      state,
      action: PayloadAction<{ id: number; editTodoName: string }>
    ) => {
      const todo = state.find((todo) => todo.id === action.payload.id)
      if (todo) {
        todo.name = action.payload.editTodoName
      }
    },
  },
})

export const {
  addTodo,
  deleteTodo,
  deleteTodoByCategoryId,
  completeTodo,
  toggleEditTodo,
  updateTodo,
} = todoSlice.actions
export default todoSlice.reducer
