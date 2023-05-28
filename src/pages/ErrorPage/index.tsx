import { Routes } from '@/app/providers/const'
import { Link } from 'react-router-dom'

function ErrorPage() {
    return (
        <div>
            <Link to={Routes.homePage}>Go back to home page!</Link>
        </div>
    )
}

export default ErrorPage
