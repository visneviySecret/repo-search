import { baseUrl } from '@/app/providers/const'
import { Link, useLocation } from 'react-router-dom'

function BackButton() {
    const query = useLocation().pathname

    const getLink = () => {
        const index = query.lastIndexOf('/')
        const addedUrl = query.slice(0, index)
        return `${baseUrl}${addedUrl}/`
    }

    return (
        <button style={{ marginBottom: '50px' }}>
            <Link to={getLink()}>Go back!</Link>
        </button>
    )
}

export default BackButton
