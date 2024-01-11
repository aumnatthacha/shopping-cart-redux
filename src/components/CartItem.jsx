/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { useDispatch } from 'react-redux';
import {
    removeFromCart,
    decreaseQuantity,
    increaseQuantity
} from '../redux/carts/actions'
import { addQuantity, removeQuantity } from '../redux/products/actions';
import { IoMdClose } from "react-icons/io";

const CartItem = ({ product }) => {
    const { id, name, image, quantity, category, productId, price } = product;

    const dispatch = useDispatch()
    const handleRemoveFromCart = () => {
        dispatch(removeFromCart(id));
        dispatch(addQuantity(productId, quantity));
    }

    if (quantity === 0) {
        handleRemoveFromCart();
    }

    const handleDecreaseQuantity = () => {
        dispatch(decreaseQuantity(id));
        dispatch(addQuantity(productId, 1));
    };

    const handleIncreaseQuantity = () => {
        dispatch(increaseQuantity(id));
        dispatch(removeQuantity(productId));
    };

    return (
        <div>
            <div className="rounded-lg">
                <div className="justify-between mb-7 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
                    <img
                        src={image}
                        alt={product}
                        className="w-full h 28 rounded sm:w-40"
                    />
                    <div className="sm-4 sm:flex sm:w-full sm:justify-between">
                        <div className="mt-5 sm:mt-2">
                            <h3 className="text-lg font-bold text-gray-800 ml-5">{name}</h3>
                            <p className="mt-1 text-sm text-gray-700 ml-5">Price: {price}฿</p>
                            <p className="mt-1 text-sm text-gray-700 ml-5">Category: {category}</p>
                        </div>
                    </div>
                    <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                        <div className="flex items-center border-gray-100">
                            <span className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-400 hover:text-blue-400"
                                onClick={handleDecreaseQuantity}
                            >
                                {""} -{""}
                            </span>
                            <input
                                type="number"
                                min="1"
                                value={quantity}
                                className="h-8 w-8 border bg-white text-center text-xs outline-none"
                            />
                            <span className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-400 hover:text-blue-400"
                                onClick={handleIncreaseQuantity}
                            >
                                {""} +{""}
                            </span>
                        </div>
                        <div className="flex-items-center space-x-4">
                            <p className="text-sm">{price * quantity}฿</p>
                            <button className="lws-removeFromCart" onClick={handleRemoveFromCart} >
                                <IoMdClose />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItem