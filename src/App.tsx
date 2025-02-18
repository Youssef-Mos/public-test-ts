import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import FormPage from './pages/FormPage'
import Layout from './components/Layout'

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <FormPage />
      },
      {
        path: "/form",
        element: <FormPage />
      },
    ]
  }
])

function App() {
  return <RouterProvider router={router} />
}

export default App