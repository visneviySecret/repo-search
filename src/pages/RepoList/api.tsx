const query = `{
        viewer {
            repositories(first: 100) {
              edges {
                node {
                  name
                  url
                }
              }
            }
        }
    }`

export const getRepos = async () => {
    const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN

    const res = await fetch('https://api.github.com/graphql', {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${GITHUB_TOKEN}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query }),
    })
    const data = await res.json()
    return data
}
