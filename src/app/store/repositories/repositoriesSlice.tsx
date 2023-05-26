import { IRepositoryNode } from '@/entities/getReposListFx/types'
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'

const initialState = {
    nodes: [] as IRepositoryNode[],
    isTyping: false,
    isLoading: false,
}

const repositoriesSlice = createSlice({
    name: 'repositories',
    initialState,
    reducers: {
        setStoreRepositories: (
            state,
            action: PayloadAction<IRepositoryNode[]>
        ) => {
            state.nodes = action.payload
        },
        setIsTyping: (state, action: PayloadAction<boolean>) => {
            state.isTyping = action.payload
        },
        setIsLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload
        },
    },
})

export const { setStoreRepositories, setIsTyping, setIsLoading } =
    repositoriesSlice.actions
export const selectRepositories = (state: RootState) => state.repositories.nodes
export const selectIsTyping = (state: RootState) => state.repositories.isTyping
export const selectIsLoading = (state: RootState) =>
    state.repositories.isLoading
export default repositoriesSlice
