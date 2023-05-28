import { ListWrapper, Warning } from './style'
import ListRow from '../ListRow'
import { IRepositoryNode } from '@/entities/getReposListFx/types'

interface IProps {
    page: number
    repositories: IRepositoryNode[]
}

function List({ page, repositories }: IProps) {
    return (
        <ListWrapper page={page}>
            {repositories.length ? (
                repositories
                    .slice(Number(`${page}` + 0), Number(`${page + 1}` + 0))
                    .map((repo: IRepositoryNode) => (
                        <ListRow key={repo.url} repo={repo} />
                    ))
            ) : (
                <Warning>
                    Here is no repositories for this request, try another one!
                </Warning>
            )}
        </ListWrapper>
    )
}

export default List
