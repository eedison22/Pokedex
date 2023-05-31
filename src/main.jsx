import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'

import { router } from './router'
import './index.css'
import { UserNameProvider } from './context/UserNameContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserNameProvider>
     <RouterProvider router={router}/>
    </UserNameProvider>
  </React.StrictMode>,
)
