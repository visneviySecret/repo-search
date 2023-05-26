import { useEffect } from 'react'
import SearchBar from '@/entities/SearchBar/index'
import { useState } from 'react'
import { getAsyncRepositories } from '@/app/store/repositories/getAsyncRepositories'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '@/app/store/store'
import { setIsTyping } from '@/app/store/repositories/repositoriesSlice'

function SearchRepository() {
    const [query, setQuery] = useState('')
    const dispatch = useDispatch<AppDispatch>()

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(event.currentTarget.value)
        dispatch(setIsTyping(true))
    }

    useEffect(() => {
        setTimeout(() => {
            dispatch(getAsyncRepositories(query))
            dispatch(setIsTyping(false))
        }, 100)
    }, [query])

    return <SearchBar value={query} onChange={handleChange} />
}

export default SearchRepository
