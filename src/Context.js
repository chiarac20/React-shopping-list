import { createContext } from 'react';

import { default as productInfo  } from './products.json';

export const Context=createContext();

export function ContextWrapper({children}) {

    const ContextValue=productInfo;
    console.log(ContextValue.categories)
    return <Context.Provider value={ContextValue}>
        {children}
    </Context.Provider>

}