import App from '../../pages/HomePage'
import RepoList from '../../pages/RepoList/index'
import ErrorPage from '../../pages/ErrorPage'
import RepoCard from '../../pages/RepoCard/index'
import { createBrowserRouter } from 'react-router-dom'
export const baseUrl = '/'

export const router = createBrowserRouter([
    {
        path: baseUrl,
        element: <App />,
    },
    {
        path: `${baseUrl}/repo-list`,
        element: <RepoList />,
    },
    {
        path: `${baseUrl}/repo-list/:repoId`,
        element: <RepoCard />,
        errorElement: <ErrorPage />,
    },
])
