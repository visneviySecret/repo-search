import { useEffect } from 'react'
import Input from '@/shared/ui/Input/Input'

function SearchBar() {
    useEffect(() => {
        fetching()
    }, [])
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

    const fetching = async () => {
        const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN

        const res = await fetch(
            // 'https://api.github.com/repos/sharu725/github-cms'
            'https://api.github.com/graphql',
            {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${GITHUB_TOKEN}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ query }),
            }
        )
        const data = await res.json()
        console.log(data)
    }

    return (
        <>
            <Input propsValue="asd" />
        </>
    )
}

export default SearchBar
