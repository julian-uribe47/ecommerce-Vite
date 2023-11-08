import { useContext } from 'react';
import { PlusCircleIcon, CheckIcon } from '@heroicons/react/24/outline';
import { ShoppingCartContext } from '../../Context';


const Card = (data) => {
    const context = useContext(ShoppingCartContext)

    const showProduct = (productDetail) => {
        context.openProductDetail()
        context.setProductToShow(productDetail)
    }

    const addProductToCart = (event, productData) => {
        event.stopPropagation()
        context.setCount(context.count + 1)
        context.setCartProducts([...context.cartProducts, productData])
        context.openCheckoutSideMenu()
        context.closeProductDetail()
        
    }

    const renderIcon = (id) => {
        const isInCart = context.cartProducts.filter(product => product.id === id).length > 0;

        if (isInCart) {
        return (
            <button className=' absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6
            m-2  rounded-full'>
                <CheckIcon className=' m-0' />
            </button>
        )
        }else{
            return (
            <button className=' absolute top-0 right-0 flex justify-center items-center bg-orange-300 w-6 h-6
            m-2  rounded-full'
            onClick={(event) => addProductToCart(event, data.data)}>
                <PlusCircleIcon className=' m-0' />
            </button>
            )
        }
        
    }

    return (
        <div 
            className=' bg-white cursor-pointer w-56 h-60 rounded-lg mt-8 mb-4' 
            onClick={() => showProduct(data.data)}>
            <figure className=' relative mb-2 w-full h-4/5'>
                <span className=' absolute bottom-0 left-0 bg-orange-300 rounded-lg text-black text-xs m-2 px-3 py-0.5'>{data.data.category}</span>
                <img src={data.data.image}
                    alt='Headphones' className=' rounded-md w-full h-full object-cover' />
                {renderIcon(data.data.id)}
            </figure>
            <p className=' flex justify-between'>
                <span className=' text-base font-normal'>{data.data.title}</span>
                <span className=' text-lg font-semibold'>${data.data.price}</span>
            </p>
        </div>
    )
}

export default Card;