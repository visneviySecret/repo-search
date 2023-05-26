import RepositoriesList from '@/features/RepositoriesList/RepositoriesList'
import SearchRepository from '@/features/SearchRepository'

function ListPage() {
    return (
        <div>
            <SearchRepository />
            <RepositoriesList />
        </div>
    )
}

export default ListPage
