import React, { useEffect, useState } from 'react';
import '../App.css';
import './Home.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { useNavigate } from 'react-router-dom';

function Home() {

  const [modules, setModules] = useState([{
    name: '',
    code: '',
    mc: '',
    prereq: [],
    preclusions: [],
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

  return (
    <div className='hero-container'>
      <h1>Spotlight Modules</h1>
      <Carousel>
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
