import React, { useEffect, useState } from 'react';
import '../App.css';
import './Home.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { useNavigate } from 'react-router-dom';
import 'react-dropdown/style.css';

//function to sort modules in carousel
const SpotlightModules = (modules, option) => {
  let newDate = new Date();
  let date = newDate.getDate() / 32;
  modules.sort(() => Math.random() - 0.5);
  return modules.filter((modules) => {
    const majorName = modules.major
    if (majorName.includes(option)) {
      return majorName.includes(option);
    }
  });
};

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
  }, [])

  //navigation and transfer of data from home page to individual modules page
  const navigate = useNavigate();
  const toPage = (module) => {
    navigate(`/modules/${module.code}`, { state: module });
  }

  //dropdown menu 
  const options = [
    'Computer Science', 'Information Systems', 'Information Security', 'Computer Engineering', 'Business Analytics'
  ];

  const [option, setOption] = useState('Computer Science');
  function changeOption(e) {
    setOption(e.target.value);
  }
  const Spotlight = SpotlightModules(modules, option)

  return (
    <div className='hero-container'>
      <h1>Spotlight Modules</h1>
      <h2><select
        className='dropdown'
        value={option}
        onChange={changeOption}>
        {options.map((option) => (
          <option value={option}>{option}</option>
        ))}
      </select>
      </h2>
      <Carousel showThumbs={false} infiniteLoop={false}>
        {Spotlight.splice(0,3).map(module =>
          <div className='module-name'>
            <a onClick={() => { toPage(module) }}>
              {module.code} {`\n`}
              {module.name}
            </a>
            <h1>
              {module.details}
            </h1>
          </div>
        )}
      </Carousel>
    </div>
  );
}

export default Home;