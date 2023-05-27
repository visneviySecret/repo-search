import { baseUrl } from '@/app/providers/router'
import { Link } from 'react-router-dom'

function BackButton() {
    return (
        <button style={{ marginBottom: '50px' }}>
            <Link to={`${baseUrl}/repo-list/`}>Go back!</Link>
        </button>
    )
}

export default BackButton
