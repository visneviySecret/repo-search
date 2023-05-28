import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '@/app/store/store'
import { getAsyncRepositories } from '@/app/store/repositories/getAsyncRepositories'
import { selectIsTyping } from '@/app/store/repositories/repositoriesSlice'
import { useSelector } from 'react-redux'

function useReposList(setPage: (val: number) => void) {
    const dispatch = useDispatch<AppDispatch>()
    const isTyping = useSelector(selectIsTyping)

    useEffect(() => {
        dispatch(getAsyncRepositories())
    }, [])

    useEffect(() => {
        if (isTyping) setPage(0)
    }, [isTyping])
}

export default useReposList
