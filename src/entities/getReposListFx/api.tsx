import { GITHUB_TOKEN, apiUrl } from '@/app/api'
import { IRepositoryNode } from './types'

const requestBody = `
  query ($query: String!){
    search(query: $query, type: REPOSITORY, first: 100) {
      edges {
        node {
          ... on Repository {
            name
            stargazerCount
            url
            pushedAt
          }
        }
      }
    }
  }
`

export const getRepositories = async (
    repositoryName = sessionStorage.getItem('github_api_query') || ''
) => {
    const username = 'visneviySecret'
    const query = `user:${username} ${repositoryName}`
    const variables = { query }

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
        (edge: { node: IRepositoryNode }) => edge.node
    )
    return repositories
}
