import { useEffect, useState } from 'react'
import { getRepos } from './api'
import { IRepoNode } from './types'

function RepoList() {
    const [repos, setRepos] = useState([])

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
        <div>
            {repos.map((repo: IRepoNode) => (
                <div key={repo.name}>{repo.name}</div>
            ))}
        </div>
    )
}

export default RepoList
