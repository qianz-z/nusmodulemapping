import React from 'react';
import Navbar from './Navbar/Navbar';
import Home from './Home/Home';
import Modules from './Modules/Modules';
import StudyPlan from './StudyPlan/StudyPlan';
import ProfPage from './ProfPage/ProfPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { createContext, useState, useEffect } from 'react';
import './App.css';
import ModulePage from './ModulePage/ModulePage';

export const ThemeContext = createContext(null);

const App = () => {
  //light/dark mode toggle 
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

  //Passing data of Mods, Add/Remove Mods from study plan
  const [Mods, setMods] = useState(JSON.parse(localStorage.getItem('Mods')) ?? [])  

  useEffect(() => {
      localStorage.setItem('Mods', JSON.stringify(Mods));
  }, [Mods]);

  
  const onAdd = (product) => {
    const exist = Mods.find((x) => x.code === product.code);
    if (!exist) {
      setMods([...Mods, { ...product}]);
    }
    
    // if module has already been previous added, remove it 
    else { 
      setMods(Mods.filter((x) => x.code !== product.code)); //same function as onRemove
    }
  }

  const onRemove = (product) => {
    const exist = Mods.find((x) => x.code === product.code);
    if (exist) {
      setMods(Mods.filter((x) => x.code !== product.code));
    }
  }

  return (
    <ThemeContext.Provider value = {{ theme, switchTheme }} >
      <main id={theme}>
        <Router>
          <Navbar className = "navbar" switchTheme = {switchTheme} theme = {theme}/>
          <Routes>
            <Route exact path = "/" element = {<Home/>}/>
            <Route exact path = "/modules" element = {<Modules Mods={Mods} onRemove = {onRemove} onAdd = {onAdd}/>}/>
            <Route exact path = "/studyplan" element = {<StudyPlan Mods={Mods} onRemove = {onRemove}/>}/>
            <Route exact path = "/modules/:code" element = {<ModulePage Mods={Mods} onRemove = {onRemove} onAdd = {onAdd}/>} />
            <Route exact path = "/prof" element = {<ProfPage/>} />
          </Routes>
        </Router>
        </main> 
    </ThemeContext.Provider>
  );
}

export default App;