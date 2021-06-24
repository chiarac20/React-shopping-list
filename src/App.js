import { Route, Switch } from 'react-router-dom';

import { ContextWrapper } from './Context';
import { Category } from './Components/Category/Category';
import { Basket } from './Components/Basket/Basket';

function App () {

  return <ContextWrapper>
    <h1>Shopping list</h1>
    <Basket />
    <Switch>
      <Route exact path="/">
        <Category />
      </Route>
      <Route path="/category/:categoryCode">
        <Category />
      </Route>
    </Switch>
  </ContextWrapper>
}

export default App;

