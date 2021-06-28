import { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';

import { Context } from '../../Context';

import './CategoryList.scss';

export function CategoryList () {
    const {categories}= useContext(Context);
    const {categoryCode} = useParams();

    return <div className="CategoryList">
        {categoryCode && <div className="CategoryList__allProductsLink">
            <Link to="/">All products</Link>
        </div>}
        
        <ul>
            {categories.map((category, id) => 
            <li key={id} className="CategoryList__category"> 
                <Link to={`/category/${category.code}`}>{category.label}</Link>
            </li>)}
        </ul>
    </div>
}