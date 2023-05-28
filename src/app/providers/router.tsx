import HomePage from '../../pages/HomePage'
import ListPage from '../../pages/ListPage/index'
import ErrorPage from '../../pages/ErrorPage'
import CardPage from '../../pages/CardPage/index'
import { createBrowserRouter } from 'react-router-dom'
import { Routes } from './const'

export const router = createBrowserRouter([
    {
        path: Routes.homePage,
        element: <HomePage />,
    },
    {
        path: Routes.repositories,
        element: <ListPage />,
    },
    {
        path: `${Routes.repositories}/:repoId`,
        element: <CardPage />,
        errorElement: <ErrorPage />,
    },
])
