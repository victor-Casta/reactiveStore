import { useRoutes, BrowserRouter } from 'react-router-dom'
import { Home } from '../pages/Home'
import { MyAccount } from '../pages/MyAccount'
import { MyOrder } from '../pages/MyOrder'
import { MyOrders } from '../pages/MyOrders'
import { NotFound } from '../pages/NotFound'
import { SigIn } from '../pages/SigIn'
import { Search } from '../pages/Search'

const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/my-account', element: <MyAccount /> },
    { path: '/my-order', element: <MyOrder /> },
    { path: '/my-orders', element: <MyOrders /> },
    { path: '/*', element: <NotFound /> },
    { path: '/sigin', element: <SigIn /> },
    { path: '/search', element: <Search /> }
  ]);
  return routes
}

function Routes() {
  return (
    <BrowserRouter >
      <AppRoutes />
    </BrowserRouter>
  )
}

export { Routes }