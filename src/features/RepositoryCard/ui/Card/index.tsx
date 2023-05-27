import { IRepository } from '@/entities/getRepository/types'
import { Link } from 'react-router-dom'
import { Language } from './types'
import { CardWrapper, Header } from './style'
import ProfilePicture from './ui/ProfilePicture'

function Card({ repository }: { repository: IRepository }) {
    const { name, stargazerCount, pushedAt, owner, languages, description } =
        repository

    const arrLanguages: any = languages.nodes

    const getLink = (login: string) => {
        return `https://github.com/${login}`
    }

    return (
        <CardWrapper>
            <Header>
                <ProfilePicture url={owner.avatarUrl} />
                <Link to={getLink(owner.login)} target="_blank">
                    <span>Username: {owner.login}</span>
                </Link>
            </Header>
            <div>Title: {name}</div>
            <div>⭐: {stargazerCount}</div>
            <div>Last commit: {pushedAt}</div>
            <div>
                Technologies used:{' '}
                <ul>
                    {arrLanguages.map((language: Language, index: number) => (
                        <li key={index}>{language.name}</li>
                    ))}
                </ul>
            </div>
            <span>Description: {description || '-'}</span>
        </CardWrapper>
    )
}

export default Card
