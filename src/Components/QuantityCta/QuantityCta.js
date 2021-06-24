export function QuantityCta ({increaseProductQuantity, decreaseProductQuantity, quantity, zeroQuantity}) {
    return <>
        <button onClick={increaseProductQuantity}>+</button>
        <button onClick={decreaseProductQuantity} disabled={quantity===0}>-</button> 
        <button onClick={zeroQuantity} disabled={quantity===0}>Remove</button>
    </>
}