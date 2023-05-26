import { combineReducers, configureStore } from '@reduxjs/toolkit'
import repositoriesSlice from './repositories/repositoriesSlice'

const reducer = combineReducers({
    repositories: repositoriesSlice.reducer,
})

export const store = configureStore({
    reducer: reducer,
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
