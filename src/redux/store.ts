import { configureStore } from '@reduxjs/toolkit'
import categoryReducer from './categorySlice'
import todoReducer from './todoSlice'

export const store = configureStore({
  reducer: {
    categories: categoryReducer,
    todos: todoReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
