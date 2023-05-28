import SearchBar from '@/entities/SearchBar/index'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '@/app/store/store'
import { setIsTyping } from '@/app/store/repositories/repositoriesSlice'
import useSearch from './useSearch'

function SearchRepository() {
    const initialQuery = sessionStorage.getItem('github_api_query') ?? ''
    const [query, setQuery] = useState(initialQuery)
    useSearch(query)
    const dispatch = useDispatch<AppDispatch>()

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(event.currentTarget.value)
        dispatch(setIsTyping(true))
    }

    return <SearchBar value={query} onChange={handleChange} />
}

export default SearchRepository
