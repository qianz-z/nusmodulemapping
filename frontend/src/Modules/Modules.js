import React, { useEffect, useState } from 'react';
import './Modules.css';
import { GoPrimitiveDot } from "react-icons/go";
import { useNavigate } from 'react-router-dom';


function Modules (props) {
    const [modules, setModules] = useState([{
        name: '',
        code: '',
        mc: '',
        prereq: [],
        preclusions: [],
    }])

    useEffect(() => {
        fetch("https://nusmodulemapping.herokuapp.com/modules").then(res => {
            if (res.ok) {
                return res.json()
            }
        }).then(jsonRes => setModules(jsonRes));
    })
    const navigate = useNavigate();
    const {Mods, onAdd, onRemove} = props;
    
    //navigation and transfer of data from main modules page to individual modules page
    const toPage = (module) => {
        navigate(`/modules/:${module.code}`, { state: module });
    }

    return (
        <div className='modules' >
            {modules.map(module =>
                <div className='modules-one'>
                    <h3 className='modules-name'><a onClick={() => { toPage(module) }}>{module.code} {module.name}</a></h3>
                    <p>Computer Science <GoPrimitiveDot /> {module.mc} MCs</p>
                    <p>Prerequisites <span>{module.prereq}</span></p>
                    <p>Preclusions <span>{module.preclusions}</span></p>
                </div>
            )}
        </div>
    )
}

export default Modules;