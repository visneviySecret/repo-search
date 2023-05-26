import { AppDispatch } from '@/app/store/store'
import { getRepositories } from './api'
import { IRepositoryNode } from './types'
import { setIsLoading } from '@/app/store/repositories/repositoriesSlice'

export const getRepositoriesListFx = async (
    dispatch: AppDispatch,
    query?: string
): Promise<IRepositoryNode[]> => {
    dispatch(setIsLoading(true))
    try {
        return await getRepositories(query)
    } catch (err) {
        throw new Error('Error while fetching')
    } finally {
        dispatch(setIsLoading(false))
    }
}
