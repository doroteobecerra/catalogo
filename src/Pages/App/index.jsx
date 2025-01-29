import { useRoutes, BrowserRouter } from 'react-router-dom'
import MyAccount from '../MyAccount'
import MyOrder from '../MyOrder'
import MyOrders from '../MyOrders'
import SingIn from '../SingIn'
import NotFound from '../NotFound'
import Home from '../Home'
import Navbar from '../../components/Navbar'
import './App.css'

const AppRoutes = () => {
  let routes = useRoutes([
    {path: '/', element: <Home />},
    {path: '/my-order', element: <MyOrder />},
    {path: '/my-orders', element: <MyOrders/>},
    {path: '/my-account', element: <MyAccount/>},
    {path: '/*', element: <NotFound/>},
    {path: '/sing-in', element: <SingIn/>}
  ])

  return routes
}

const App = () => {

  return (
    <BrowserRouter >
      <Navbar />
      <AppRoutes />
    </BrowserRouter>
  )
}

export default App
