import { useState } from 'react'
import { useSelector } from 'react-redux'
import { Title, Wrapper } from './style'
import {
    selectIsLoading,
    selectRepositories,
} from '@/app/store/repositories/repositoriesSlice'

import Pagination from '@/entities/Pagination'
import Loader from '@/shared/ui/Loader'
import { user } from '@/entities/getRepository/api'
import useReposList from './hooks/useReposList'
import List from './ui/List'

function RepositoriesList() {
    const repositories = useSelector(selectRepositories)
    const isLoading = useSelector(selectIsLoading)
    const initialPage =
        Number(sessionStorage.getItem('repositories_list_page')) ?? 0

    const [page, setPage] = useState(initialPage)

    useReposList(setPage)

    return (
        <Wrapper>
            <Title>GitHub repositories of user: {user}</Title>

            {isLoading ? (
                <Loader />
            ) : (
                <List page={page} repositories={repositories} />
            )}

            <Pagination
                elements={repositories.length}
                setPage={setPage}
                activePage={page}
            />
        </Wrapper>
    )
}

export default RepositoriesList
