import { useEffect, useState } from 'react'
import { useLocation } from 'react-router'
import { IRepository } from '@/entities/getRepository/types'
import { getRepositoryFx } from '@/entities/getRepository'
import Card from './ui/Card'
import Loader from '@/shared/ui/Loader'

function RepositoryCard() {
    const queryArr = useLocation().pathname.split('/')
    const query = queryArr[queryArr.length - 1]
    const [repository, setRepository] = useState<IRepository | null>(null)

    useEffect(() => {
        getRepository()
    }, [])

    const getRepository = async () => {
        const result = await getRepositoryFx(query)
        setRepository(result)
    }

    if (!repository) return <Loader />

    return <Card repository={repository} />
}

export default RepositoryCard
