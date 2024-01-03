/* eslint-disable no-unused-vars */
import React from 'react'
import { useForm } from "react-hook-form"
import { useDispatch } from 'react-redux'
import { addProduct } from '../redux/products/actions'

const AddProduct = () => {
    const dispatch = useDispatch()
    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm()
    const onSubmit = (data) => {
        dispatch(addProduct(data));
        reset();
    };

    return (
        <div className="formContainer">
            <h1 className="formTitle">Create New Production</h1>
            <form className="space-y-4 text-[#3c1855]" onSubmit={handleSubmit(onSubmit)}>
                <div className="space-y-2">
                    <label>Production Name</label>
                    <input type='text' className="addProductInput" {...register("name", { required: true })} />
                    {errors.name && <span style={{ color: 'red' }}>This field is required</span>}
                </div>
                <div className="space-y-2">
                    <label>Category</label>
                    <select className="addProductInput" {...register("category", { required: true })}>
                        <option value="">Select Category</option>
                        <option value="Clothing">Clothing</option>
                        <option value="Gadgets">Gadgets</option>
                        <option value="Bags">Bags</option>
                    </select>
                    {errors.category && <span style={{ color: 'red' }}>This field is required</span>}
                </div>
                <div className="space-y-2">
                    <label>Image URL</label>
                    <input type='text' className="addProductInput" {...register("image", { required: true })} />
                    {errors.image && <span style={{ color: 'red' }}>This field is required</span>}

                </div>
                <div className="grid grid-cols-2 gap-8 pb-4">
                    <div className="space-y-2">
                        <label>Price</label>
                        <input type='number' className="addProductInput" {...register("price", { required: true })} step="0.01" />
                        {errors.price && <span style={{ color: 'red' }}>This field is required</span>}
                    </div>
                    <div className="space-y-2">
                        <label>Quantity</label>
                        <input type='number' className="addProductInput" id="lws-inputQuantity" {...register("quantity", { required: true })} />
                        {errors.quantity && <span style={{ color: 'red' }}>This field is required</span>}

                    </div>
                </div>
                <button type="submit" className="submit bg-indigo-600 text-white">Create Now!</button>
            </form>
        </div>
    )
}

export default AddProduct