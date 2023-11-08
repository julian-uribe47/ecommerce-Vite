import { ChevronRightIcon } from '@heroicons/react/24/solid'


const OrdersCard = props => {
    const { totalPrice, totalProducts } = props

    return (
        <div className=' flex justify-between items-center mb-4 border rounded-lg border-black p-4 w-80'>
            <div className=' flex justify-between w-full'>
                <p className=' flex flex-col'>
                    <span className=' font-medium'>01-02-23</span>
                    <span className=' font-medium'>{totalProducts} articles</span>
                </p>
                <p className=' flex items-center gap-2'>
                <span className=' font-medium text-2xl'>${totalPrice}</span>
                    <ChevronRightIcon className='h-6 w-6 text-black-500 cursor-pointer'/>
                </p>
            </div>
        </div>
    )
}

export default OrdersCard