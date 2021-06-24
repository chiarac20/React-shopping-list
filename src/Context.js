import { createContext, useState } from 'react';

import { default as productInfo  } from './products.json';

export const Context=createContext();

export function ContextWrapper({children}) {
    const defaultProducts=productInfo.products.map(product => getUpdatedProduct(product));
    const [products, setProducts]=useState(defaultProducts);

    
    function getUpdatedProduct(product, increment = 0) {
        const quantity = (product.quantity || 0) + increment;
        const price = product.discountedPrice || product.price;
        return {
            ...product,
            quantity,
            totalPrice: quantity * price
        }
    }

    function increaseQuantity (id) {
        const updatedQuantities=products.map((product) => product.id!==id ? product 
            : getUpdatedProduct(product, 1)
        )

        setProducts(updatedQuantities);
    }

    function decreaseQuantity(id) {
        const updatedQuantities=products.map(product => product.id!==id ? product 
            : getUpdatedProduct(product, -1)
        )

        setProducts(updatedQuantities);
    }

    function zeroQuantity (id) {
        const updatedQuantities=products.map(product => product.id!==id ? product
            : {
                ...product,
                quantity: 0
            })

        setProducts(updatedQuantities)
    }

    const ContextValue={
        categories: productInfo.categories,
        products,
        increaseQuantity,
        decreaseQuantity,
        zeroQuantity
    }
   
    return <Context.Provider value={ContextValue}>
        {children}
    </Context.Provider>

}