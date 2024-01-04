import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './products/productReducer';
import cartReducer from './carts/cartReducers';


export const store = configureStore({
    reducer: {
        products: productsReducer,
        carts: cartReducer,
    },
    devTools: true,
});
