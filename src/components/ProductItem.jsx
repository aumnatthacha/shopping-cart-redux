/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/carts/actions'
import { removeQuantity } from '../redux/products/actions'


const ProductItem = ({ product }) => {
  const dispatch = useDispatch();
  const { id, image, name, category, price, quantity } = product;
  const handleAddToCart = () => {
    dispatch(addToCart(product));
    dispatch(removeQuantity(id));
   
  };
  return (
    <div className='card md:w-96 bg-base-100 shadow-xl'>
      <figure className='relative'>
        <img src={`${image}`} alt={`${name}`} className='h-80 w-full object-cover' />
        <div className='badge bg-blue-500 text-white absolute top-3 right-3 py-1 px-2 rounded'>
          {category}
        </div>
      </figure>
      <div className='card-body'>
        <h2 className='card-title'>{name}</h2>
        {/* <p>If a dog chews shoes whose shoes does he choose.</p> */}

        <div className='flex justify-between'>
          <p className='w-full'>Available {quantity}</p>
          <p className='text-left'>{price}฿</p>
        </div>
        <div className='card-action mt-2'>
          <button className='btn btn-sm btn-primary'
            disabled={quantity === 0} // ปุ่ม "Buy Now" ที่ถูกใช้งานเมื่อจำนวนสินค้า (quantity) มีค่ามากกว่า 0 ถ้า quantity เท่ากับ 0 จะถูก disable
            onClick={handleAddToCart}
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};
export default ProductItem

