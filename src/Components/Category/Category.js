import { useContext } from 'react';
import { useParams } from 'react-router-dom';

import { CategoryList } from '../CategoryList/CategoryList';
import { Context } from '../../Context';
import { Product } from '../Product/Product';

export function Category () {
    const {products, categories, increaseQuantity, decreaseQuantity, zeroQuantity}=useContext(Context);
    const {categoryCode}=useParams();
    const categoryProducts=products.filter(product => !categoryCode || product.categoryCode===categoryCode);

    return <div>
        <CategoryList />
        {categoryCode && <h2>{categories.find(category => category.code===categoryCode).label.toUpperCase()}</h2>}
        {categoryProducts.map((product) => <section key={product.id}>
            <Product 
                    name={product.name} 
                    price={product.price}
                    unit={product.unit}
                    discountedPrice={product.discountedPrice}
                    image={product.image}
                    quantity={product.quantity}
                    totalPrice={product.totalPrice}
                    increaseProductQuantity={() => increaseQuantity(product.id)}
                    decreaseProductQuantity={() => decreaseQuantity(product.id)}
                    zeroQuantity={() => zeroQuantity(product.id)}
                />
            </section>)
        }
    </div>
} 