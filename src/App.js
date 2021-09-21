
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Landing} from './components/Landing';
import {TableOrders} from './components/TableOrders';
import {KitchenOrders} from './components/KitchenOrders';
import {PagenotFound} from './components/PagenotFound';

 
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
