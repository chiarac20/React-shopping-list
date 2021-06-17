import { Route, Switch } from 'react-router-dom';

import { ContextWrapper } from './Context';
import { Category } from './Components/Category/Category';
import { Home } from './Components/Home/Home';
import { AllProducts} from './Components/AllProducts/AllProducts';

function App () {

  return <ContextWrapper>
    <h1>Shopping list</h1>
    <Switch>
      <Route exact path="/">
        <Home />
        <AllProducts />
      </Route>
      <Route path="/category/:categoryCode">
        <Category />
      </Route>
    </Switch>
  </ContextWrapper>
}

export default App;

