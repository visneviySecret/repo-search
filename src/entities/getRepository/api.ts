import { GITHUB_TOKEN, apiUrl } from '@/app/api'
import { IRepository } from './types'

export const user = 'visneviySecret'

const requestBody = `
  query ($owner: String!, $repo_name: String!) {
      repository(owner: $owner, name: $repo_name) { 
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

export const getRepository = async (name: string) => {
    const variables = { owner: user, repo_name: name }

    const response = await fetch(apiUrl, {
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

    const data = await response.json()
    const repository: IRepository = data.data.repository
    return repository
}
