import { useContext } from 'react';
import { useParams } from 'react-router-dom';

import { CategoryList } from '../CategoryList/CategoryList';
import { Context } from '../../Context';
import { Product } from '../Product/Product';

import './Category.scss';

export function Category () {
    const {products, categories, increaseQuantity, decreaseQuantity, zeroQuantity}=useContext(Context);
    const {categoryCode}=useParams();
    const categoryProducts=products.filter(product => !categoryCode || product.categoryCode===categoryCode);

    return <div className="Category">
        <CategoryList />
        {categoryCode && <h2 className="Category__name">{categories.find(category => category.code===categoryCode).label.toUpperCase()}</h2>}
        <section className="Category__product-list">
            {categoryProducts.map((product) => <Product 
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
                        key={product.id}
                    />)
            }
        </section>
    </div>
} 