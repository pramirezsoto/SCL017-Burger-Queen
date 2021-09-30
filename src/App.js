
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import React from 'react';
import Landing from './components/Landing.jsx';
import TableOrders from './components/TableOrders.jsx';
import KitchenOrders from './components/KitchenOrders.jsx';
/* import data from './Menu.json';
import Ordersummary from './components/OrderSummary.jsx'; */
 
//import './App.css';


function App() {
    
  return (
    <Router>
      <Switch>
          <Route path = '/' exact={true}> <Landing/> </Route>
          <Route path = '/tableorders'> <TableOrders  /> </Route>
          <Route path = '/kitchenorders'> <KitchenOrders/> </Route>         
      </Switch>
    </Router>
  );
}

export default App;
