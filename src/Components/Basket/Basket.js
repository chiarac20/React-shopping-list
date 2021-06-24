import { useContext } from 'react';

import { Context } from '../../Context';
import { QuantityCta } from '../QuantityCta/QuantityCta';

export function Basket () {
    const {products, increaseQuantity, decreaseQuantity, zeroQuantity} = useContext(Context);
    const basketProducts=products.filter(product => product.quantity!==0);
   
    return <ul>
        {basketProducts && basketProducts.map(product => <li key={product.id}>
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
}