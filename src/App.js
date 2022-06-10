//import nav bar component
import NavigationBar from './components/NavigationBar.js';

//import react-router-dom to display pages & navigate between them
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

//import pages to create route for home, inventory, orders, calendar
import Inventory from "./components/Inventory.js";
import Orders from "./components/Orders.js";
import NewCalendar from "./components/NewCalendar.js";
import OrdersList from "./components/OrdersList"

function App (){
  return (
    <div>
    <Router>
    <NavigationBar />
    <div className='container'>
    <Routes>
      <Route exact path = "/" element = {<NewCalendar/>}/>
      <Route path = "/inventory" element = {<Inventory/>}/>
      <Route path = "/orders" element = {<OrdersList/>}/>
      <Route path = "/orders/create" element = {<Orders/>}/>
      {/* <Route path = "/orders/update/orderId" element = {</>}/> */}
      <Route path = "/NewCalendar" element = {<NewCalendar/>}/>
    </Routes>
  </div>
</Router>  
   </div>
  );
}

export default App;
