import { XCircleIcon } from '@heroicons/react/24/solid'





const OrderCard = props => {
    const { id, title, imageUrl, price, handleDelete } = props
    let renderXCircleIcon 
    if (handleDelete) {
        <XCircleIcon 
        onClick={() => handleDelete(id)}
        className='h-6 w-6 text-black-500 cursor-pointer'/>
    }
    return (
        <div className=' flex justify-between items-center mb-4'>
            <div className=' flex items-center gap-2 '>
                <figure className=' w-20 h-20 '>
                    <img className=' w-full h-full rounded-lg object-cover'
                    src={imageUrl} alt={title} />
                </figure>
                <p className=' text-sm font-light'>{title}</p>
            </div>
            <div className=' flex items-center gap-2'>
                <p className=' text-lg font-semibold'>{price}</p>
                {renderXCircleIcon}
            </div>
        </div>
    )
}

export default OrderCard