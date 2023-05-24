import App from '../../pages/Main/index'
import ErrorPage from '../../pages/ErrorPage'
import RepoCard from '../../pages/RepoCard/index'
import { createBrowserRouter } from 'react-router-dom'

export const baseUrl = '/repo-list'

export const router = createBrowserRouter([
    {
        path: baseUrl,
        element: <App />,
        errorElement: <ErrorPage />,
    },
    {
        path: `${baseUrl}/:repoId`,
        element: <RepoCard />,
        errorElement: <ErrorPage />,
    },
])
