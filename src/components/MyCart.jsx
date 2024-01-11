/* eslint-disable no-unused-vars */
import React from 'react'
import { useSelector } from 'react-redux'
import CartItem from './CartItem';

const MyCart = () => {

  const carts = useSelector((state) => state.carts);
  return (
    <main className='py-12 max-w-7xl container mx-auto px-4'>
      <div className='container mx=auto'>
        <h2 className='mb-5 text-xl font-bold'>Shopping Cart</h2>
        <div className='flex flex-col md:flex-row justify-between md:gap-8 gap-4'>
          <div className='space-y-6 md:w-2/3'>
            {carts.length ? (
              carts.map((product) => (
                <CartItem product={product} key={product.id} />
              ))
            ) : (
              <div>No product in your cart</div>
            )}
          </div>
        </div>
      </div>

    </main>
  )
}

export default MyCart
