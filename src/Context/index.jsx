import { createContext, useState, useEffect } from 'react';

export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({ children }) => {
    // Shopping Cart - Increment quantity
    const [count, setCount] = useState(0)

    // Product Detail - Open-Close
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
    const openProductDetail = () => setIsProductDetailOpen(true)
    const closeProductDetail = () => setIsProductDetailOpen(false)

    // Checkout Side Menu - Open-Close
    const [IsCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false)
    const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true)
    const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false)

    //Product Detail - Show Product
    const [productToShow, setProductToShow] = useState({})

    //Shopping Cart - Add products to cart
    const [cartProducts, setCartProducts] = useState([])

    //Shopping cart - Order

    const [order, setOrder] = useState([])
    //get products
    const [items, setItems] = useState(null)
    const [filteredItems, setFilteredItems] = useState(null)

    //get products by title
    const [searchByTitle, setSearchByTitle] = useState(null)

    //get products by category
    const [searchByCategory, setSearchByCategory] = useState(null)
    const [searchByAll, setSearchByAll] = useState(null)
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => setItems(data))
    }, [])
    
    const filterAllProducts = (items, searchByAll) => {
        return items?.filter(item => item.title.toLowerCase().includes(searchByAll.toLowerCase()) || item.category.toLowerCase().includes(searchByAll.toLowerCase()))
    }

    const filteredItemsByTitle = (items, searchByTitle) => {
        return items?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
    }

    const filteredItemsByCategory = (items, searchByCategory) => {
        return items?.filter(item => item.category.toLowerCase().includes(searchByCategory.toLowerCase()))
    }

    useEffect(() => {
        if (searchByCategory) setFilteredItems(filteredItemsByCategory(items, searchByCategory))
        if (searchByAll) setFilteredItems(filterAllProducts(items, searchByAll))
        if (searchByTitle) setFilteredItems(filteredItemsByTitle(items, searchByTitle))
    }, [items, searchByTitle, searchByCategory, searchByAll])

   

    return (
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
            openProductDetail,
            closeProductDetail,
            isProductDetailOpen,
            productToShow,
            setProductToShow,
            cartProducts,
            setCartProducts,
            IsCheckoutSideMenuOpen,
            openCheckoutSideMenu,
            closeCheckoutSideMenu,
            order,
            setOrder,
            items,
            setItems,
            searchByTitle,
            setSearchByTitle,
            filteredItems,
            searchByCategory,
            setSearchByCategory,
            searchByAll,
            setSearchByAll
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}