import React, { useState } from 'react';
import DayView from './components/calendarAssets/DayView.js';

//import nav bar component
import NavigationBar from './components/NavigationBar.js';
//calendar component
import NewCalendar from './components/NewCalendar.js';

function App() {
  return (
    <>
   <NavigationBar />
   <NewCalendar />
   </>
  );
}

export default App;