import { Link } from 'react-router-dom'

function App() {
    return (
        <>
            <div>Home page</div>
            <Link to={'/repo-list'}>Go to my repositories</Link>
        </>
    )
}

export default App
