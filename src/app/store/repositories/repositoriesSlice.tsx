import { IRepositoryNode } from '@/entities/getReposListFx/types'
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'

const initialState = {
    nodes: [] as IRepositoryNode[],
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
    },
})

export const { setStoreRepositories } = repositoriesSlice.actions
export const selectRepositories = (state: RootState) => state.repositories.nodes
export default repositoriesSlice
