import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCartContext } from '../../Context'
import { XCircleIcon } from '@heroicons/react/24/solid'
import OrderCard from '../OrderCard'
import { totalPrice } from '../../utils'
import './styles.css'

const CheckoutSideMenu = () => {
    const context = useContext(ShoppingCartContext)

    const handleDelete = (id) => {
        const filterProducts = context.cartProducts.filter(product => product.id != id )
        context.setCartProducts(filterProducts)
        context.setCount(context.count - 1)
    }

    const handleCheckout = () => {
        const orderToAdd = {
            date:'04.11.23',
            products: context.cartProducts,
            totalProducts: context.cartProducts.length,
            totalPrice: totalPrice(context.cartProducts)
        }

        context.setOrder([...context.order, orderToAdd])
        context.setCartProducts([])
        context.setCount(context.count - context.cartProducts.length)
        context.setSearchByAll(null)
    }
    const deleteCheckout = () => {
        context.closeCheckoutSideMenu()
        handleCheckout()

    }

    return (
        <aside className={`${context.IsCheckoutSideMenuOpen ? 'flex' : ' hidden'} checkout-side-menu flex-col 
        fixed right-0 bg-white border border-black rounded-lg`}>
            <div className=' flex justify-between p-4'>
                <h2 className=' font-medium text-xl'>My Order</h2>
                <div>
                    <XCircleIcon 
                    className='h-6 w-6 text-black-500 cursor-pointer'
                    onClick={() => context.closeCheckoutSideMenu()}/>
                </div>
            </div>
            <div className=' px-4 mt-3 overflow-y-scroll flex-1'>
            {
                context.cartProducts.map(product => (
                    <OrderCard
                    id={product.id}
                    key={product.id}
                    title={product.title}
                    imageUrl={product.image}
                    price={`$${product.price}`}
                    handleDelete={handleDelete}
                    />
                ))
            }
            </div>
            <div className=' px-6'>
                <p className=' flex justify-between items-center'>
                    <span className=' font-medium text-xl'>Total:</span>
                    <span className=' font-semibold text-2xl'>${totalPrice(context.cartProducts)}</span>
                </p>
                <Link to='/ecommerce-Vite/my-orders/last'>
                <button className=' w-full bg-black py-3 text-white rounded-lg mt-4 mb-6'
                onClick={() => deleteCheckout()}>Checkout</button>
                </Link>
            </div>
        </aside>
    )
}

export default CheckoutSideMenu


