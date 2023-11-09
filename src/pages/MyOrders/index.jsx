import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'
import { Link } from 'react-router-dom'
import Layout from '../../Components/Layout'
import OrdersCard from '../../Components/OrdersCard';

function MyOrders() {
   const context = useContext(ShoppingCartContext)
   console.log(context.order)
   return (
      <Layout>
         <div className='flex items-center justify-center relative w-80 mb-6'>
            <h1 className=' font-medium text-xl'>My Orders</h1>
         </div>

         {
            context.order.map((order, index) => (
               <Link key={index} to={`/ecommerce-Vite/my-orders/${index}`}>
                  <OrdersCard
                     totalPrice={order.totalPrice}
                     totalProducts={order.totalProducts} />
               </Link>

            ))
         }
      </Layout>
   )
}

export default MyOrders;