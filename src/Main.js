import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App'
import Page1 from './Page1'
import Page2 from './Page2'


export const Main = () => {
  return (
    
    <Routes>
      <Route  exact path='/App' element={<App/>}></Route>
      <Route  exact path='/page1' element={<Page1/>}></Route>
      <Route  exact path='/page2' element={<Page2/>}></Route>
    </Routes>
    
    
  );
}
