import SearchBar from '@/entities/SearchBar/index'
import { useState } from 'react'
import { getRepositoriesListFx } from '@/entities/getReposListFx'

function SearchRepository() {
    const [query, setQuery] = useState('')

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(event.currentTarget.value)
    }

    const handleClick = () => {
        getRepositoriesListFx(query)
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
