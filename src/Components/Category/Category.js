import { useContext } from 'react';
import { useParams, Link } from 'react-router-dom';

import { CategoryList } from '../CategoryList/CategoryList';
import { Context } from '../../Context';

export function Category () {
    const info=useContext(Context);
    const params=useParams();
    const categoryProducts=info.products.filter(product => product.categoryCode===params.categoryCode);

    return <div>
        <div>
            <Link to="/">All products</Link>
        </div>
        <CategoryList />
        <h2>{info.categories.filter(category => category.code===params.categoryCode)[0].label.toUpperCase()}</h2>
        {categoryProducts.map((product, key) => <section key={key}>
            <div>{product.name}</div>
            <div> £ <span> {product.price} </span> / <span>{product.unit} </span> </div>
            {product.discountedPrice!=='null' && <div> discount: £ <span>{product.discountedPrice} </span> </div>}
            <img src={product.image}></img>
        </section>)}
    </div>
} 