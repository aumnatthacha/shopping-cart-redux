/* eslint-disable no-unused-vars */
import React from 'react'
import AddProduct from './AddProduct'
import { useSelector } from 'react-redux'
import ProductItem from './ProductItem'

const Home = () => {
    const products = useSelector((state) => state.products);
    console.log(products);
    return (
        <div>
            <main className="py-8 max-w-7xl mx-auto px-4">
                <div className="grid sm:grid-cols-3 grid-cols-1 gap-8">
                    <div className="col-span-2">
                        <div className="grid md:grid-cols-2 gap-y-10 grid-cols-1">
                            {products.length ? (
                                products.map(product => (
                                    <ProductItem key={product.id} product={product} />
                                ))
                            ) : (
                                <div>No Product Found</div>
                            )}
                            {/* {products.length ? products.map() : <div>No Product Found</div>} */}
                        </div>
                    </div>
                    <AddProduct />
                </div>
            </main>
        </div>
    )
}

export default Home