import { IRepository } from '@/entities/getRepository/types'
import { Link } from 'react-router-dom'

function Card({ repository }: { repository: IRepository }) {
    const getLink = (login: string) => {
        return `https://github.com/${login}`
    }

    return (
        <div>
            <div>Title: {repository.name}</div>
            <div>⭐: {repository.stargazerCount}</div>
            <div>Last commit date: {repository.pushedAt}</div>
            <Link to={getLink(repository.owner.login)} target="_blank">
                <span>Username: {repository.owner.login}</span>
            </Link>
            <div>
                Used technology:{' '}
                {repository.languages.nodes.map((node: { name: string }) => (
                    <div>{node.name}</div>
                ))}
            </div>
            <span>Description: {repository.description || '-'}</span>
        </div>
    )
}

export default Card
