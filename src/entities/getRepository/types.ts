export interface IRepository {
    name: string
    url: string
    stargazerCount: string
    pushedAt: string
    owner: {
        avatarUrl: string
        login: string
    }
    languages: {
        nodes: {
            name: string[]
        }
    }
    description: string
}
