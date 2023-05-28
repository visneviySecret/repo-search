import { IRepositoryNode } from '@/entities/getReposListFx/types'
import { Repository } from './style'
import { Link } from 'react-router-dom'
import { Routes } from '@/app/providers/const'

function ListRow({ repo }: { repo: IRepositoryNode }) {
    const getLink = (id: string) => {
        return `${Routes.repositories}/${id}`
    }

    return (
        <Link to={getLink(repo.name)}>
            <Repository>
                <span>Title: {repo.name}</span>
                <span>⭐: {repo.stargazerCount}</span>
                <span>Date: {repo.pushedAt}</span>
                <span>Url: {repo.url}</span>
            </Repository>
        </Link>
    )
}

export default ListRow
