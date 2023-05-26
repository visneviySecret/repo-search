import { IRepositoryNode } from '@/entities/getReposListFx/types'
import { Repository } from './style'
import { Link } from 'react-router-dom'
import { baseUrl } from '@/app/providers/router'

function ListRow({ repo }: { repo: IRepositoryNode }) {
    const getLink = (id: string) => {
        return `${baseUrl}/repo-list/${id}`
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
