import { Link, useLocation } from 'react-router-dom'

function BackButton() {
    const query = useLocation().pathname

    const getLink = () => {
        const index = query.lastIndexOf('/')
        const addedUrl = query.slice(0, index)
        return `${addedUrl}/`
    }

    return (
        <Link to={getLink()}>
            <button style={{ marginBottom: '50px' }}>Go back!</button>
        </Link>
    )
}

export default BackButton
