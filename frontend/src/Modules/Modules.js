import React, { useEffect, useState } from 'react';
import './Modules.css';
import { GoPrimitiveDot } from "react-icons/go";
import { useNavigate } from 'react-router-dom';


const Modules = () => {

    const [modules, setModules] = useState([{
        name: '',
        code: '',
        mc: '',
        prerequisites: [],
        preclusions: []
    }])

    useEffect(() => {
        fetch("/modules").then(res => {
            if (res.ok) {
                return res.json()
            }
        }).then(jsonRes => setModules(jsonRes));
    })
    const navigate = useNavigate();

    const toPage = (module) => {
        navigate(`/modules/:${module.code}`, { state: module });
    }

    return (
        <div className='modules' >
            {modules.map(module =>
                <div className='modules-one'>
                    <a onClick={() => {toPage(module)}}>
                        <h3 className='modules-name'>{module.code} {module.name}</h3>
                        <p>Computer Science <GoPrimitiveDot /> {module.mc} MCs</p>
                        <p>Prerequisites {module.prerequisites}</p>
                        <p>Preclusions <span>{module.preclusions}</span></p>
                        </a>
                </div>
            )}
        </div>
    )
}

export default Modules;