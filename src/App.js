//import nav bar component
import NavigationBar from './components/NavigationBar.js';

//import react-router-dom to display pages & navigate between them
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

//import pages to create route for home, inventory, orders, calendar
import Inventory from "./components/Inventory.js";
import Orders from "./components/Orders.js";
import NewCalendar from "./components/NewCalendar.js";
import OrdersList from "./components/OrdersList"
import CustomerList from "./components/CustomerList.js";
import CustomerAdd from "./components/CustomerAdd.js";
import CustomerEdit from "./components/CustomerEdit.js";


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
      <Route path = "/orders/add" element = {<Orders/>}/>
      {/* <Route path = "/orders/update/orderId" element = {</>}/> */}
      <Route path = "/customers" element = {<CustomerList/>}/>
      <Route path = "/customers/add" element = {<CustomerAdd/>}/>
      <Route path = "/customers/update/{customerId}" element = {<CustomerEdit/>}/>
      <Route path = "/NewCalendar" element = {<NewCalendar/>}/>
    </Routes>
  </div>
</Router>  
   </div>
  );
}

export default App;
