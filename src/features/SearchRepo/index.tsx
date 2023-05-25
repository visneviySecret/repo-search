import SearchBar from '@/entities/SearchBar/SearchBar'
import { useState } from 'react'

function SearchRepo() {
    const [query, setQuery] = useState('')

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(event.currentTarget.value)
    }

    const handleClick = () => {
        console.log('useSearch')
    }

    return (
        <SearchBar
            value={query}
            onChange={handleChange}
            onClick={handleClick}
        />
    )
}

export default SearchRepo
