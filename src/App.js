//import nav bar component
import NavigationBar from './components/NavigationBar.js';

//import react-router-dom to display pages & navigate between them
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

//import pages to create route for home, inventory, orders, calendar
import Inventory from "./components/Inventory.js";
import InventoryList from "./components/InventoryList.js";
import Home from "./components/Home.js"
import DeleteInventory from "./components/DeleteInventory.js";
import UpdateInventory from "./components/UpdateInventory.js";
// import Orders from "./components/Orders.js";
import NewCalendar from "./components/NewCalendar.js";
// import OrdersList from "./components/OrdersList"

//import banner
import Banner from 'react-js-banner';


function App (){

 

  return (
    <div>
    <Router>
    <NavigationBar />
    <div className='container'>
    <Routes>
      <Route exact path = "/" element = {<NewCalendar/>}/>
      <Route path = "/inventory" element = {<InventoryList/>}/>
      <Route path = "/inventory/add" element = {<Inventory/>}/>
      <Route path = "/inventory/delete/{seedId}" element = {<Inventory/>}/>
      <Route path = "/inventory/update/{seedId}" element = {<Inventory/>}/>
      {/* <Route path = "/orders" element = {<OrdersList/>}/>
      <Route path = "/orders/create" element = {<Orders/>}/> */}
      <Route path = "/NewCalendar" element = {<NewCalendar/>}/>
      <Route path = "/Home" element = {<Home/>}/>
    </Routes>
  </div>
</Router>  

   </div>
  );
}

export default App;
