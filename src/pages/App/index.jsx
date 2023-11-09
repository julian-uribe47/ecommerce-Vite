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
    { path: '/ecommerce-Vite/', element: <Home /> },
    { path: '/ecommerce-Vite/men', element: <Home /> },
    { path: '/ecommerce-Vite/women', element: <Home /> },
    { path: '/ecommerce-Vite/jewelery', element: <Home /> },
    { path: '/ecommerce-Vite/electronics', element: <Home /> },
    { path: '/ecommerce-Vite/my-account', element: <MyAccount /> },
    { path: '/ecommerce-Vite/my-order', element: <MyOrder /> },
    { path: '/ecommerce-Vite/my-orders', element: <MyOrders /> },
    { path: '/ecommerce-Vite/my-orders/last', element: <MyOrder /> },
    { path: '/ecommerce-Vite/my-orders/:id', element: <MyOrder /> },
    { path: '/ecommerce-Vite/*', element: <NotFound /> },
    { path: '/ecommerce-Vite/sign-in', element: <SignIn /> },
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
