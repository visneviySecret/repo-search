import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { List, ListWrapper, Title } from './style'
import { IRepositoryNode } from '@/entities/getReposListFx/types'
import ListRow from './ui/ListRow'
import { selectRepositories } from '@/app/store/repositories/repositoriesSlice'
import { AppDispatch } from '@/app/store/store'
import { getAsyncRepositories } from '@/app/store/repositories/getAsyncRepositories'
import Pagination from '@/entities/Pagination'

const user = 'visneviySecret'

function RepoList() {
    const dispatch = useDispatch<AppDispatch>()
    const repositories = useSelector(selectRepositories)
    const [page, setPage] = useState(0)

    useEffect(() => {
        dispatch(getAsyncRepositories())
    }, [])

    return (
        <>
            <Title>GitHub repositories of user: {user}</Title>
            <ListWrapper>
                <List page={page}>
                    {repositories.length ? (
                        repositories
                            .slice(
                                Number(`${page}` + 0),
                                Number(`${page + 1}` + 0)
                            )
                            .map((repo: IRepositoryNode) => (
                                <ListRow key={repo.url} repo={repo} />
                            ))
                    ) : (
                        <div>
                            Here is no repositories for this request, try
                            another one!
                        </div>
                    )}
                </List>
            </ListWrapper>
            <Pagination
                elements={repositories.length}
                setPage={setPage}
                activePage={page}
            />
        </>
    )
}

export default RepoList
