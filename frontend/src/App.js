import React from 'react';
import Navbar from './Navbar/Navbar';
import Home from './Home/Home';
import Modules from './Modules/Modules';
import StudyPlan from './StudyPlan/StudyPlan';
import ModulePage from './ModulePage/ModulePage';
import DarkMode from './DarkMode/DarkMode';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { createContext, useState } from 'react';
import './App.css';

export const ThemeContext = createContext(null);

const App = () => {
  const [theme, setTheme] = useState("dark"); //change this to toggle

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value = {{ theme, toggleTheme }}>
      <Router>
        <Navbar/>
        <main id = {theme}>
          <Routes>
            <Route exact path = "/" element = {<Home/>}/>
            <Route exact path = "/modules" element = {<Modules/>}/>
            <Route exact path = "/studyplan" element = {<StudyPlan/>}/>
            <Route exact path = "/modulepage" element = {<ModulePage/>}/> 
          </Routes>
        </main> 
      </Router>
    </ThemeContext.Provider>
  );
}

export default App;