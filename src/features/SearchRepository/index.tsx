import { useEffect } from 'react'
import SearchBar from '@/entities/SearchBar/index'
import { useState } from 'react'
import { getAsyncRepositories } from '@/app/store/repositories/getAsyncRepositories'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '@/app/store/store'

function SearchRepository() {
    const [query, setQuery] = useState('')
    const dispatch = useDispatch<AppDispatch>()

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(event.currentTarget.value)
    }

    useEffect(() => {
        setTimeout(() => {
            dispatch(getAsyncRepositories(query))
        }, 300)
    }, [query, dispatch])

    return <SearchBar value={query} onChange={handleChange} />
}

export default SearchRepository
