import { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';

import { Context } from '../../Context';

export function CategoryList () {
    const info= useContext(Context);

    return <ul>
        {info.categories.map((category, id) => 
        <li key={id}> 
            <Link to={`/category/${category.code}`}>{category.label}</Link>
        </li>)}
    </ul>
}