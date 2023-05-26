import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { List } from './style'
import { getRepositoriesListFx } from '@/entities/getReposListFx'
import { IRepositoryNode } from '@/entities/getReposListFx/types'
import ListRow from './ui/ListRow'
import {
    selectRepositories,
    setStoreRepositories,
} from '@/app/store/repositories/repositoriesSlice'
import { AppDispatch } from '@/app/store/store'

const getAsyncRepositories = () => {
    return async (dispatch: AppDispatch) => {
        const result = await getRepositoriesListFx()
        dispatch(setStoreRepositories(result))
    }
}

function RepoList() {
    const perPage = 10
    const page = 0
    const dispatch = useDispatch<AppDispatch>()
    const repositories = useSelector(selectRepositories)

    useEffect(() => {
        dispatch(getAsyncRepositories())
    }, [])

    return (
        <List>
            {repositories.map((repo: IRepositoryNode) => (
                <ListRow key={repo.name} repo={repo} />
            ))}
        </List>
    )
}

export default RepoList
