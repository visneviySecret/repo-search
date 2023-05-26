import App from '../../pages/HomePage'
import ListPage from '../../pages/ListPage/index'
import ErrorPage from '../../pages/ErrorPage'
import CardPage from '../../pages/CardPage/index'
import { createBrowserRouter } from 'react-router-dom'
export const baseUrl = ''

export const router = createBrowserRouter([
    {
        path: `${baseUrl}/`,
        element: <App />,
    },
    {
        path: `${baseUrl}/repo-list`,
        element: <ListPage />,
    },
    {
        path: `${baseUrl}/repo-list/:repoId`,
        element: <CardPage />,
        errorElement: <ErrorPage />,
    },
])
