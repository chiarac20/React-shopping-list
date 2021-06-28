import { QuantityCta } from '../QuantityCta/QuantityCta';

import './Product.scss';

export function Product ({name, price, unit, discountedPrice, totalPrice, image, quantity, increaseProductQuantity, decreaseProductQuantity, zeroQuantity}) {
    return <section className="Product"> 
        <div>
            <h4 className="Product__name">{name}</h4>
            <div className="Product__price">
                Price: £ <span> {price} </span> / <span>{unit} </span>
            </div>
            {discountedPrice && <div className="Product__discountedPrice">
                Discounted price: £ <span>{discountedPrice} </span> / <span>{unit} </span>
            </div>}
            <span className="Product__quantity">Quantity: {quantity} {unit} </span>
            <QuantityCta 
                increaseProductQuantity={increaseProductQuantity}
                decreaseProductQuantity={decreaseProductQuantity}
                zeroQuantity={zeroQuantity}
                quantity={quantity}
            />
                
        </div>
        <div className="Product__totalPrice"> Total price: £ <span> {totalPrice.toFixed(2)} </span> </div>
        <img src={image}></img>
    </section>
}
