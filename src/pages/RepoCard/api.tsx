import { GITHUB_TOKEN, apiUrl } from '@/app/api'
import { IRepoNode } from './types'

const requestBody = `
    query ($url: URI!) {
      repository(owner: "", name: "") { 
        name
        stargazerCount
        pushedAt
        owner {
          avatarUrl
          login
        }
        languages(first: 5) {
          nodes {
            name
          }
        }
        description
      }
    }
  `

export const getRepo = async (url: string) => {
    const variables = { url }
    const res = await fetch(apiUrl, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${GITHUB_TOKEN}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query: requestBody,
            variables: variables,
        }),
    })

    const data = await res.json()
    const repositories = data.data.search.edges.map(
        (edge: { node: IRepoNode }) => edge.node
    )

    return repositories
}
