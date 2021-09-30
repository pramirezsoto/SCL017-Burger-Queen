
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import React from 'react';
import Landing from './components/Landing.jsx';
import TableOrders from './components/TableOrders.jsx';
import KitchenOrders from './components/KitchenOrders.jsx';
import data from './menu.json';
 
//import './App.css';


function App() {
  
  return (
    <Router>
      <Switch>
          <Route path = '/' exact={true}> <Landing/> </Route>
          <Route path = '/tableorders'> <TableOrders data={data} /> </Route>
          <Route path = '/kitchenorders'> <KitchenOrders/> </Route>         
      </Switch>
    </Router>
  );
}

export default App;
