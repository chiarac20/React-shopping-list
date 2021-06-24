import { useContext } from 'react';

import { Context } from '../../Context';
import { QuantityCta } from '../QuantityCta/QuantityCta';

export function Basket () {
    const {products, increaseQuantity, decreaseQuantity, zeroQuantity} = useContext(Context);
    const basketProducts=products.filter(product => product.quantity!==0);
    const total=(products.reduce((acc, product) => acc + product.totalPrice, 0)).toFixed(2);
   
    return <>
        <ul>
            {basketProducts.map(product => <li key={product.id}>
                <div> {product.name}: </div>
                <span> {product.quantity}{product.unit} </span>
                <QuantityCta 
                    increaseProductQuantity={() => increaseQuantity(product.id)}
                    decreaseProductQuantity={() => decreaseQuantity(product.id)}
                    zeroQuantity={() => zeroQuantity(product.id)}
                    quantity={product.quantity}
                /> 
                <span> price: £{product.totalPrice.toFixed(2)} </span>
            </li>)}
        </ul> 
        {!!basketProducts.length && <div>TOTAL: £{total} </div>}
    </>
}