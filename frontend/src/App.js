import React from 'react';
import Navbar from './Navbar/Navbar';
import Home from './Home/Home';
import Modules from './Modules/Modules';
import StudyPlan from './StudyPlan/StudyPlan';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { createContext, useState } from 'react';
import ReactSwitch from 'react-switch';
//npm install react-switch
import './App.css';

export const ThemeContext = createContext(null);

const App = () => {
  const [theme, setTheme] = useState("dark"); //change this to toggle

  const switchTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value = {{ theme, switchTheme }}>
      <Router>
        <Navbar/>
        <main id={theme}>
          <Routes>
            <Route exact path = "/" element = {<Home/>}/>
            <Route exact path = "/modules" element = {<Modules/>}/>
            <Route exact path = "/studyplan" element = {<StudyPlan/>}/>
          </Routes>
        </main> 
      </Router>
      
      <div className='switch'>
        <label> {theme === "light" ? "Light Mode" : "Dark Mode"} </label>
        <ReactSwitch onChange={switchTheme} checked = {theme === "dark"}/>
      </div>
      
    </ThemeContext.Provider>
  );
}

export default App;