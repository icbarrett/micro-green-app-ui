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
import Orders from "./components/Orders.js";
import NewCalendar from "./components/NewCalendar.js";
import OrdersList from "./components/OrdersList"
import CustomerList from "./components/CustomerList.js";
import CustomerAdd from "./components/CustomerAdd.js";
import CustomerEdit from "./components/CustomerEdit.js";
import EditOrder from "./components/EditOrder.js";
// import EditOrder1 from "./components/EditOrder1.js";



//import banner
import Banner from 'react-js-banner';
import homepagepic from "./assets/homepagepicture.jpeg";


function App (){

  const masthead={
    backgroundImage:`url(${homepagepic})`,
    height: "50vh",
    marginTop:'-70px',
    fontSize:'50px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
    };

  return (
    <div>
    <Router>
    <NavigationBar />
    <div style={masthead}>
      <h2 style= {{
        textAlign: "center",
        color: 'black',
        fontStyle: "italic",
        paddingTop: "20%"
      }}>Ingi's Microgreens</h2>
      <h4 style= {{
        textAlign: "center",
        color: 'black',
        fontStyle: "italic"
      }}>Growers of non-GMO microgreens, shoots, and wheatgrass. Organic, sustainable, and nutritous produce born and raised in Frankemuth, Michigan.</h4>
    </div>
    <div className='container'>
    <Routes>
      <Route exact path = "/" element = {<NewCalendar/>}/>
      <Route path = "/inventory" element = {<InventoryList/>}/>
      <Route path = "/inventory/add" element = {<Inventory/>}/>
      <Route path = "/inventory/delete/{seedId}" element = {<Inventory/>}/>
      <Route path = "/inventory/update/{seedId}" element = {<Inventory/>}/>
      <Route path = "/orders" element = {<OrdersList/>}/>
      <Route path = "/orders/create" element = {<Orders/>}/>
      <Route path = "/orders/update/:orderId" element = {<Orders/>}/> 
      {/* <Route path = "/orders/update/:orderId" element = {<EditOrder/>}/> */}
      <Route path = "/customers" element = {<CustomerList/>}/>
      <Route path = "/customers/add" element = {<CustomerAdd/>}/>
      <Route path = "/customers/{customerId}" element = {<CustomerEdit/>}/>
      <Route path = "/orders/create" element = {<Orders/>}/> 
      <Route path = "/NewCalendar" element = {<NewCalendar/>}/>
      <Route path = "/Home" element = {<Home/>}/>
    </Routes>
  </div>
</Router>  
   </div>
  );
}

export default App;
