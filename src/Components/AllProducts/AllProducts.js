import { useContext } from 'react';

import { Context } from '../../Context';

export function AllProducts () {
    const info=useContext(Context);

    return <div>
        {info.products.map((product, key) => <section key={key}>
            <h3>{info.categories.filter(category => category.code === product.categoryCode)[0].label.toUpperCase()}</h3>
            <div>{product.name}</div>
            <div> price: £ <span> {product.price} </span> / <span>{product.unit} </span> </div>
            {product.discountedPrice!=='null' && <div> discount: £ <span>{product.discountedPrice} </span> </div>}
            <img src={product.image}></img>
        </section>)}
    </div>
}