import { IRepositoryNode } from '@/entities/getReposListFx/types'
import { Repository } from './style'

function ListRow({ repo }: { repo: IRepositoryNode }) {
    return (
        <Repository>
            <span>Title: {repo.name}</span>
            <span>⭐: {repo.stargazerCount}</span>
            <span>Date: {repo.pushedAt}</span>
            <span>Url: {repo.url}</span>
        </Repository>
    )
}

export default ListRow
