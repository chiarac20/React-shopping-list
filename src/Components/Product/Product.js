import { QuantityCta } from '../QuantityCta/QuantityCta';

export function Product ({name, price, unit, discountedPrice, totalPrice, image, quantity, increaseProductQuantity, decreaseProductQuantity, zeroQuantity}) {
    return <div>
        
        <div>
            <h4>{name}</h4>
            <div>
                Price: £ <span> {price} </span> / <span>{unit} </span>
            </div>
            {discountedPrice && <div>
                Discounted price: £ <span>{discountedPrice} </span> / <span>{unit} </span>
            </div>}
            <span>Quantity: {quantity} {unit} </span>
            <QuantityCta 
                increaseProductQuantity={increaseProductQuantity}
                decreaseProductQuantity={decreaseProductQuantity}
                zeroQuantity={zeroQuantity}
                quantity={quantity}
            />
                
        </div>
        <div> Total price: £ <span> {totalPrice.toFixed(2)} </span> </div>
        <img src={image}></img>
    </div>
}
