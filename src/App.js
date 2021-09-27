
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Landing} from './components/Landing.jsx';
import {TableOrders} from './components/TableOrders.jsx';
import {KitchenOrders} from './components/KitchenOrders.jsx';
import {PagenotFound} from './components/PagenotFound.jsx';


 
//import './App.css';


function App() {
  return (
    <Router>
      <Switch>
          <Route exact path = "/" component = {Landing}/> 
          <Route exact path = "/tableorders" component = {TableOrders}/> 
          <Route exact path = "/kitchenorders" component = {KitchenOrders} /> 
          <Route component = {PagenotFound} />  

      </Switch>
    </Router>
  );
}

export default App;
