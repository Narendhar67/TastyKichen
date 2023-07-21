import {Route, Switch, Redirect} from 'react-router-dom'

import TastyContext from './context/TastyContext'

import ProtectedRoute from './components/ProtectedRoute'
import Login from './components/Login'
import Home from './components/Home'
import RestaurantComponent from './components/RestaurantComponent'
import Cart from './components/Cart'
import NotFound from './components/NotFound'

import './App.css'

const sortByOptions = [
  {
    id: 0,
    displayText: 'Highest',
    value: 'Highest',
  },
  {
    id: 2,
    displayText: 'Lowest',
    value: 'Lowest',
  },
]

const App = () => (
  <TastyContext.Provider value={{sortByOptions}}>
    <>
      <Switch>
        <Route exact path="/login" component={Login} />
        <ProtectedRoute exact path="/" component={Home} />
        <ProtectedRoute
          exact
          path="/restaurant/:restrauntId"
          component={RestaurantComponent}
        />
        <ProtectedRoute exact path="/cart" component={Cart} />
        <Route path="/not-found" component={NotFound} />
        <Redirect to="/not-found" />
      </Switch>
    </>
  </TastyContext.Provider>
)

export default App
