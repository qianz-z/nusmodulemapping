import React, { useEffect, useState } from 'react';
import '../App.css';
import './Home.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { useNavigate } from 'react-router-dom';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

function Home() {
  //fetching modules from backend
  const [modules, setModules] = useState([{
    name: '',
    code: '',
    major: [],
    details: '',
  }])

  useEffect(() => {
    fetch("https://nusmodulemapping.herokuapp.com/modules").then(res => {
      if (res.ok) {
        return res.json()
      }
    }).then(jsonRes => setModules(jsonRes));
  })

  //navigation and transfer of data from home page to individual modules page
  const navigate = useNavigate();
  const toPage = (module) => {
    navigate(`/modules/:${module.code}`, { state: module });
  }

  //dropdown menu 
  const options = [
    'Computer Science', 'Information Systems', 'Information Security', 'Computer Engineering', 'Business Analytics'
  ];
  //<Dropdown options={options} onChange={this._onSelect} value={defaultOption} placeholder="Select an option" />;

  //function to sort modules in carousel
  let option = 'Computer Science'
  function SpotlightModules (option) {
    const mods = modules.map((module) => {
      if (module.major.find((x) => x === option)) { //if module's 'major' component has 'major' in option
        return module;
      }
    })
    console.log(mods);
  }

  return (
    <div className='hero-container'>
      <h1>Spotlight Modules</h1>
      <h2><Dropdown options={options} onClick={SpotlightModules} placeholder="Select an option" /></h2>
      <Carousel showThumbs={false}>
        {modules.map(module =>
          <div>
            <div className='module-name'>
              <a onClick={() => { toPage(module) }}>
                {module.code} {`\n`}
                {module.name}
              </a>
              <h1>
                {module.details}
              </h1>
            </div>
          </div>
        )}
      </Carousel>
    </div>
  );
}

export default Home;
