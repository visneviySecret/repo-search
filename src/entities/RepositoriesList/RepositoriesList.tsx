import { IRepositoryNode } from './types'
import { useEffect, useState } from 'react'
import { getRepos } from './api'
import { List, Repository } from './RepositoriesList.style'

function RepoList() {
    const [repositories, setRepos] = useState([])
    const perPage = 10
    const page = 0

    useEffect(() => {
        getReposList()
    }, [])

    const getReposList = async () => {
        try {
            const repositories = await getRepos()
            setRepos(repositories)
        } catch (err) {
            throw new Error('Error while fetching')
        }
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
