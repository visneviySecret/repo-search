import { getRepository } from './api'
import { IRepository } from './types'

export const getRepositoryFx = async (query: string): Promise<IRepository> => {
    try {
        return await getRepository(query)
    } catch (err) {
        throw new Error('Error while fetching')
    }
}
