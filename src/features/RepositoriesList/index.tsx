import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { List, ListWrapper, Title } from './style'
import { IRepositoryNode } from '@/entities/getReposListFx/types'
import ListRow from './ui/ListRow'
import {
    selectIsLoading,
    selectIsTyping,
    selectRepositories,
} from '@/app/store/repositories/repositoriesSlice'
import { AppDispatch } from '@/app/store/store'
import { getAsyncRepositories } from '@/app/store/repositories/getAsyncRepositories'
import Pagination from '@/entities/Pagination'
import Loader from '@/shared/ui/Loader'
import { user } from '@/entities/getRepository/api'

function RepositoriesList() {
    const dispatch = useDispatch<AppDispatch>()
    const repositories = useSelector(selectRepositories)
    const isTyping = useSelector(selectIsTyping)
    const isLoading = useSelector(selectIsLoading)
    const [page, setPage] = useState(0)

    useEffect(() => {
        dispatch(getAsyncRepositories())
    }, [])

    useEffect(() => {
        if (isTyping) setPage(0)
    }, [isTyping])

    const addTitle = (children: JSX.Element) => (
        <>
            <Title>GitHub repositories of user: {user}</Title>
            {children}
        </>
    )

    if (isLoading) return addTitle(<Loader />)

    return (
        <>
            {addTitle(
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
            )}
            <Pagination
                elements={repositories.length}
                setPage={setPage}
                activePage={page}
            />
        </>
    )
}

export default RepositoriesList
