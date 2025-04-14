import React from 'react'
import { Link, NavLink } from 'react-router'

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center font-bold font-sans p-10 text-lg'>
        <p className='border-2 p-1 rounded-2xl font-serif text-lg'><span className='ml-5'>Organic</span> <br /> <span className='text-green-500'>Green</span> Basket</p>
        <ul className='flex gap-10 border-2 border-gray-300 rounded-3xl p-5'>
           <NavLink to='/'><li>Home</li></NavLink> 
           <NavLink to='about'><li>About</li></NavLink> 
           <NavLink to='products'><li>Products</li></NavLink> 
           <NavLink to='contact'><li>Contact</li></NavLink> 
           <NavLink to='payment'><li>Payment</li></NavLink> 

        </ul>

       <Link to='products'>
       <button className='border-2 w-30 p-4 justify-center rounded-2xl border-b-green-700 bg-green-600 cursor-pointer'>Explore</button>
       </Link> 
    </nav>
  )
}

export default Navbar