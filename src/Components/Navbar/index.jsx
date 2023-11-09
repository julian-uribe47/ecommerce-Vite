import { ShoppingBagIcon } from "@heroicons/react/24/solid";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ShoppingCartContext } from "../../Context";

const Navbar = () => {
    const context = useContext(ShoppingCartContext)
    const activeStyle = "underline underline-offset-4"
    return(
        <nav className="flex justify-between items-center fixed z-10 top-0 w-full 
        py-5 px-6 text-sm font-medium ">
            <ul className=" flex items-center gap-3 ">
                <li className=" font-bold text-lg ">
                    <NavLink to='/ecommerce-Vite/'
                    onClick={() => context.setSearchByCategory()}>
                        Shopi
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to='/ecommerce-Vite'
                    onClick={() => context.setSearchByCategory()}
                    className={({ isActive }) => 
                        isActive ? activeStyle : undefined
                    }
                    >
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to='/ecommerce-Vite/men'
                    onClick={() => context.setSearchByCategory('Men')}
                    className={({ isActive }) => 
                        isActive ? activeStyle : undefined
                    }>
                        Men's
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to='/ecommerce-Vite/women'
                    onClick={() => context.setSearchByCategory('women')}
                    className={({ isActive }) => 
                        isActive ? activeStyle : undefined
                    }>
                        Women's
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to='/ecommerce-Vite/jewelery'
                    onClick={() => context.setSearchByCategory('jewelery')}
                    className={({ isActive }) => 
                        isActive ? activeStyle : undefined
                    }>
                        Jewelery
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to='/ecommerce-Vite/electronics'
                    onClick={() => context.setSearchByCategory('electronics')}
                    className={({ isActive }) => 
                        isActive ? activeStyle : undefined
                    }>
                        Electronics
                    </NavLink>
                </li>
                
            </ul>
            <ul className=" flex items-center gap-3 ">
                <li className=" text-black/60 ">
                    juribedio@hotmail.com
                </li>
                <li>
                    <NavLink 
                    to='/ecommerce-Vite/my-orders'
                    className={({ isActive }) => 
                        isActive ? activeStyle : undefined
                    }>
                        My Orders
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to='/ecommerce-Vite/my-account'
                    className={({ isActive }) => 
                        isActive ? activeStyle : undefined
                    }>
                        My Account
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to='/ecommerce-Vite/sign-in'
                    className={({ isActive }) => 
                        isActive ? activeStyle : undefined
                    }>
                        Sign In
                    </NavLink>
                </li>
                <li className=' flex justify-between gap-1'>
                    <ShoppingBagIcon 
                    className='h-6 w-6 text-black-500 cursor-pointer'
                    onClick={() => context.openCheckoutSideMenu()}/> {context.count}
                    
                </li>
            </ul>
        </nav>
    )
}

export default Navbar