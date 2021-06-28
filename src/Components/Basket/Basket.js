import { useContext } from 'react';

import { Context } from '../../Context';
import { QuantityCta } from '../QuantityCta/QuantityCta';

import './Basket.scss';

export function Basket () {
    const {products, increaseQuantity, decreaseQuantity, zeroQuantity} = useContext(Context);
    const basketProducts=products.filter(product => product.quantity!==0);
    const total=(products.reduce((acc, product) => acc + product.totalPrice, 0)).toFixed(2);

    // function getBasketClass(product) {
    //     const classes = [
    //         'basket__quantity',
    //         'basket__quantity--not-empty'
    //     ];
    //     if (product.quantity > 3) {
    //         return classes.join(' ');
    //     }

    //     return classes[0];
    // }
   
    return <div className="Basket">
        {!!basketProducts.length && <h3>Basket</h3>}
        <ul>
            {basketProducts.map(product => <li key={product.id}>
                <div className="Basket__name"> {product.name}: </div>
                <span className="Basket__quantity"> {product.quantity}{product.unit} </span>
                <QuantityCta 
                    increaseProductQuantity={() => increaseQuantity(product.id)}
                    decreaseProductQuantity={() => decreaseQuantity(product.id)}
                    zeroQuantity={() => zeroQuantity(product.id)}
                    quantity={product.quantity}
                /> 
                <span> price: £{product.totalPrice.toFixed(2)} </span>
            </li>)}
        </ul> 
        {!!basketProducts.length && <div className="Basket__total">TOTAL: £{total} </div>}
    </div>
}