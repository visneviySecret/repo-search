import { Routes } from '@/app/providers/const'
import { Link } from 'react-router-dom'

function HomePage() {
    return (
        <>
            <div>Home page</div>
            <Link to={Routes.repositories}>Go to my repositories</Link>
        </>
    )
}

export default HomePage
