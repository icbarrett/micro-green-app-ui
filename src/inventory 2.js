import React, { useState } from 'react';

//import nav bar component
import NavigationBar from './components/NavigationBar.js';

function inventory() {
  return (
    <main>
        <NavigationBar/>
        <h1>
        Seed Inventory
        </h1>
   </main>
  );
}

export default inventory;