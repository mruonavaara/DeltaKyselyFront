import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Kyselyt from './components/Kyselyt.jsx'
import Etusivu from './components/Etusivu.jsx'
import Error from './components/Error.jsx'
import KyselynNäyttö from './components/KyselynNäyttö.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />, 
    children: [
      {element: <Etusivu />,
    index: true
  },
  {
    path: "kyselyt",
    element: <Kyselyt />,
  },
  { path: 'kysely/:kyselyId',
    element: <KyselynNäyttö /> }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
