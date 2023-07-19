import {Route, Switch} from 'react-router-dom'

import TastyContext from './context/TastyContext'

import ProtectedRoute from './components/ProtectedRoute'
import Login from './components/Login'
import Home from './components/Home'
import RestaurantComponent from './components/RestaurantComponent'

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
      </Switch>
    </>
  </TastyContext.Provider>
)

export default App
