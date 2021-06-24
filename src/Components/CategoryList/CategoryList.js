import { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';

import { Context } from '../../Context';

export function CategoryList () {
    const {categories}= useContext(Context);
    const {categoryCode} = useParams();

    return <>
        {categoryCode && <div>
            <Link to="/">All products</Link>
        </div>}
        
        <ul>
            {categories.map((category, id) => 
            <li key={id}> 
                <Link to={`/category/${category.code}`}>{category.label}</Link>
            </li>)}
        </ul>
    </>
}