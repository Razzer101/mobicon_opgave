import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router'
import Home from './pages/Home'
import Statistic from './pages/Statistic'
import Temp from './pages/Temp'

function App() {

  const browserRouter = createBrowserRouter([
    {
      element: <Home/>,
      path:"/"
    },
    {
      element: <Statistic/>,
      path: "/statistic"
    },
    {
      element: <Temp/>,
      path: "/temperature"
    }
  ])

  return (
    <RouterProvider router={browserRouter}/>
  )
}

export default App