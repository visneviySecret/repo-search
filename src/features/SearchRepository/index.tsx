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

    const handleClick = () => {
        dispatch(getAsyncRepositories(query))
    }

    return (
        <SearchBar
            value={query}
            onChange={handleChange}
            onClick={handleClick}
        />
    )
}

export default SearchRepository
