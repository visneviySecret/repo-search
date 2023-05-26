import { getRepositories } from './api'
import { IRepositoryNode } from './types'

export const getRepositoriesListFx = async (
    query?: string
): Promise<IRepositoryNode[]> => {
    try {
        return await getRepositories(query)
    } catch (err) {
        throw new Error('Error while fetching')
    }
}
