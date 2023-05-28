import { useEffect } from 'react'
import { getAsyncRepositories } from '@/app/store/repositories/getAsyncRepositories'
import { setIsTyping } from '@/app/store/repositories/repositoriesSlice'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '@/app/store/store'

function useSearch(query: string) {
    const dispatch = useDispatch<AppDispatch>()

    useEffect(() => {
        setTimeout(() => {
            dispatch(getAsyncRepositories(query))
            dispatch(setIsTyping(false))
            sessionStorage.setItem('github_api_query', query)
        }, 100)
    }, [query])
}

export default useSearch
