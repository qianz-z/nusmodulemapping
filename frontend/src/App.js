import React from 'react';
import Navbar from './Navbar/Navbar';
import Home from './Home/Home';
import Modules from './Modules/Modules';
import StudyPlan from './StudyPlan/StudyPlan';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { createContext, useState } from 'react';
import ReactSwitch from 'react-switch';
import './App.css';
import ModulePage from './ModulePage/ModulePage';

export const ThemeContext = createContext(null);

const App = () => {
  const body = document.body;
  let theme;

  if (localStorage){
    theme = localStorage.getItem("theme")
  }
  if (theme === "light" || theme === "dark"){
    body.classList.add(theme);
  } else {
    body.classList.add("light");
  }

  const [dummy, setTheme] = useState("dark"); //change this to toggle

  const switchTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
    if (theme === "dark"){
      body.classList.replace("dark", "light");
      localStorage.setItem("theme", "light");
      theme = "light";
    } else {
      body.classList.replace("light", "dark");
      localStorage.setItem("theme", "dark");
      theme = "dark";
    }
  };


  return (
    
    <ThemeContext.Provider value = {{ theme, switchTheme }} >
      <main id={theme}>
        <Router>
          <Navbar/>
          <Routes>
            <Route exact path = "/" element = {<Home/>}/>
            <Route exact path = "/modules" element = {<Modules/>}/>
            <Route exact path = "/studyplan" element = {<StudyPlan/>}/>
            <Route exact path = "/modules/:code" element = {<ModulePage/>} />
          </Routes>
        </Router>

          <div className='switch'>
            <label> {theme === "light" ? "Light Mode" : "Dark Mode"} </label>
            <ReactSwitch onChange={switchTheme} checked = {theme === "dark"}/>
          </div>
        </main> 
      
    </ThemeContext.Provider>
  );
}

export default App;