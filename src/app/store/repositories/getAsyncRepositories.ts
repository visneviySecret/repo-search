import { setStoreRepositories } from '@/app/store/repositories/repositoriesSlice'
import { AppDispatch } from '@/app/store/store'
import { getRepositoriesListFx } from '@/entities/getReposListFx'

export const getAsyncRepositories = (query?: string) => {
    return async (dispatch: AppDispatch) => {
        const result = await getRepositoriesListFx(query)
        dispatch(setStoreRepositories(result))
    }
}
