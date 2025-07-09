import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ErrorPage from './pages/ErrorPage'
import App from './App'

export const router = createBrowserRouter([
    {
        path:'/',
        element:<App/>,
        errorElement:<ErrorPage/>,
        children:[
            {
                path:'',
                element:<HomePage/>
            }
        ]
    }
]
)