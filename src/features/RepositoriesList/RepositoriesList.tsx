import { useEffect, useState } from 'react'
import { List, Repository } from './RepositoriesList.style'
import { getRepositoriesListFx } from '@/entities/getReposListFx'
import { IRepositoryNode } from '@/entities/getReposListFx/types'

function RepoList() {
    const [repositories, setRepositories] = useState<IRepositoryNode[] | []>([])
    const perPage = 10
    const page = 0

    useEffect(() => {
        getRepositories()
    }, [])

    const getRepositories = async () => {
        const result = await getRepositoriesListFx()
        setRepositories(result)
    }

    return (
        <List>
            {repositories.map((repo: IRepositoryNode) => (
                <Repository key={repo.name}>
                    <span>Title: {repo.name}</span>
                    <span>⭐: {repo.stargazerCount}</span>
                    <span>Date: {repo.pushedAt}</span>
                    <span>Url: {repo.url}</span>
                </Repository>
            ))}
        </List>
    )
}

export default RepoList
