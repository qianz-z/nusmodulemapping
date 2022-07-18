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

  if (localStorage) {
    theme = localStorage.getItem("theme")
  }
  if (theme === "light" || theme === "dark") {
    body.classList.add(theme);
  } else {
    body.classList.add("light");
  }

  const [dummy, setTheme] = useState("dark"); //change this to toggle

  const switchTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
    if (theme === "dark") {
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
      setMods([...Mods, { ...product }]);
    }
<<<<<<< HEAD
    
    // if module has already been previous added, remove it 
    else { 
=======
    //if module has already been previous added, remove it 
    else {
>>>>>>> 2f148dbbd4cf81c01d617b69e2911b972529cd51
      setMods(Mods.filter((x) => x.code !== product.code)); //same function as onRemove
    }
  }

  const onRemove = (product) => {
    const exist = Mods.find((x) => x.code === product.code);
    if (exist) {
      setMods(Mods.filter((x) => x.code !== product.code));
    }
  }

  //function to print error message
  const errorPrint = (item) => {
    if (item.length === 2) { //if only 1 precludes (item.length = 2 as it includes both the actual mod and the preclusion)
      return (item[0] + ' is a preclusion of ' + item[1] + '.')
    }
    else { //if plural
      let output = [];
      const errorMods = [...new Set(item)];
      for (var i = 0; i < errorMods.length; i++) {
        output += errorMods[i];
        if (i !== errorMods.length - 1) {
          output += ', ';
        }
      }
      output += ' are preclusions of one another.';
      return output;
    }
  }

  //spacing out array
  function spaceOut(mod) {
    return (
      mod
    ).reduce((prev, curr) => [prev, ', ', curr]);
  }

  return (
    <ThemeContext.Provider value={{ theme, switchTheme }} >
      <main id={theme}>
        <Router>
          <Navbar className="navbar" switchTheme={switchTheme} theme={theme} />
          <Routes>
<<<<<<< HEAD
            <Route exact path = "/" element = {<Home/>}/>
            <Route exact path = "/modules" element = {<Modules Mods={Mods} onRemove = {onRemove} onAdd = {onAdd}/>}/>
            <Route exact path = "/studyplan" element = {<StudyPlan Mods={Mods} onRemove = {onRemove}/>}/>
            <Route exact path = "/modules/:code" element = {<ModulePage Mods={Mods} onRemove = {onRemove} onAdd = {onAdd}/>} />
            <Route exact path = "/prof" element = {<ProfPage/>} />
=======
            <Route exact path="/" element={<Home />} />
            <Route exact path="/modules" element={<Modules Mods={Mods} onRemove={onRemove} onAdd={onAdd} errorPrint={errorPrint} spaceOut={spaceOut}/>} />
            <Route exact path="/studyplan" element={<StudyPlan Mods={Mods} onRemove={onRemove} errorPrint={errorPrint} />} />
            <Route exact path="/modules/:code" element={<ModulePage Mods={Mods} onRemove={onRemove} onAdd={onAdd} errorPrint={errorPrint} spaceOut={spaceOut}/>} />
>>>>>>> 2f148dbbd4cf81c01d617b69e2911b972529cd51
          </Routes>
        </Router>
      </main>
    </ThemeContext.Provider>
  );
}

export default App;