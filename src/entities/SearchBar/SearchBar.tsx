import { useEffect } from 'react'
import Input from '@/shared/ui/Input/Input'
import { getRepos } from './api'

function SearchBar() {
    useEffect(() => {
        fetching()
    }, [])

    const fetching = async () => {
        const data = await getRepos()
        console.log(data)
    }

    return (
        <>
            <Input propsValue="asd" />
        </>
    )
}

export default SearchBar
