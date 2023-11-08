import { useContext } from 'react'
import Layout from '../../Components/Layout'
import Card from '../../Components/Card';
import { ShoppingCartContext } from '../../Context'
import ProducDetail from '../../Components/ProductDetail';

function Home() {
    const context = useContext(ShoppingCartContext)

    const renderView = () => {
        if (context.searchByAll?.length > 0 || context.searchByCategory?.length > 0)   {
            if (context.filteredItems?.length > 0) {
                return (
                    context.filteredItems?.map(item => (
                        <Card key={item.id} data={item} />
                    ))
                )
            }else {
                return(
                <div>There are no matches</div>
                )
            }
        }else {
            return (
                context.items?.map(item => (
                    <Card key={item.id} data={item} />
                ))

            )
        }
    }

    return (
        <Layout>
            <div className='flex items-center justify-center relative w-80 mb-6'>
                <h1 className=' font-medium text-xl'>Exclusive Products</h1>
            </div>
            <input className=' rounded-lg border border-black w-80 p-4 mb-4' 
            type="text" 
            placeholder='Search a product'
            onChange={(event) => context.setSearchByAll(event.target.value)}/>
            <div className=' grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
                
                {renderView()}
                
            </div>
            <ProducDetail />
        </Layout>
    )
}

export default Home;