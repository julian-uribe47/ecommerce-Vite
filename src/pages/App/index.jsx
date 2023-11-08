import { useRoutes, BrowserRouter } from 'react-router-dom'
import { ShoppingCartProvider } from '../../Context'
import Home from '../Home'
import MyAccount from '../MyAcount'
import MyOrder from '../MyOrder'
import MyOrders from '../MyOrders'
import NotFound from '../NotFound'
import SignIn from '../SignIn'
import CheckoutSideMenu from '../../Components/CheckoutSideMenu'
import Navbar from '../../Components/Navbar'
import './App.css'

const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/men', element: <Home /> },
    { path: '/women', element: <Home /> },
    { path: '/jewelery', element: <Home /> },
    { path: '/electronics', element: <Home /> },
    { path: '/my-account', element: <MyAccount /> },
    { path: '/my-order', element: <MyOrder /> },
    { path: 'my-orders', element: <MyOrders /> },
    { path: 'my-orders/last', element: <MyOrder /> },
    { path: 'my-orders/:id', element: <MyOrder /> },
    { path: '/*', element: <NotFound /> },
    { path: 'sign-in', element: <SignIn /> },
  ])
  return routes;
}

const App = () => {

  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <AppRoutes />
        <Navbar />
        <CheckoutSideMenu />
      </BrowserRouter>
    </ShoppingCartProvider>
  )
}

export default App
