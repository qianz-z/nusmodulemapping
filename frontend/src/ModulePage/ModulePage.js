import React, { useEffect, useState } from 'react';
import '../App.css';
import './ModulePage.css';
import { GoPrimitiveDot } from "react-icons/go";
import { Button } from '../Components/Button';
import { useLocation } from 'react-router-dom';

function ModulePage(props) {
    const location = useLocation();
    const { Mods, onAdd, errorPrint, spaceOut } = props;

    //fetching modules from backend
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
    }, [])

    //preclusion checker
    let preclusionsError = []
    Mods.map((item) => {
        if (item.preclusions.length !== 0) {
            for (var i = 0; i < item.preclusions.length; i++) {
                let temp = item.preclusions[i];
                let exist = Mods.find((x) => x.code === temp);
                if (exist) {
                    preclusionsError.push(temp);
                }
            }
        }
    })

    
    function doSomething() {
        if (!location.state) {
            let modCode = location.pathname.slice(9);
            return modules.find((x) => x.code === modCode);
        }
    }
    let mod = doSomething();

    return (
        <div className='module-container'>
            {preclusionsError.length !== 0 &&
                <div className='errorBox'>
                    {errorPrint(preclusionsError)}
                </div>}
            {location.state &&
                <h1>
                    {location.state.code} {`\n`}
                    {location.state.name}
                    <p>Computer Science <GoPrimitiveDot /> {location.state.mc} MCs </p>
                    <hr style={{ borderColor: 'white', height: '2px', }} />
                        <h2>
                            {location.state.details}
                            {`\n`}{`\n`}{`\n`}
                            Preclusions:{`\n`}
                            {location.state.preclusions.length === 0 && '-'}
                            {location.state.preclusions.length !== 0 && spaceOut(location.state.preclusions)}
                            {`\n`}{`\n`}{`\n`}
                            Prerequisites:{`\n`}
                            {location.state.prereq.length === 0 && '-'}
                            {location.state.prereq.length !== 0 && spaceOut(location.state.prereq)}
                            {`\n`}{`\n`}
                            <Button
                                buttonSize='btn--medium'
                                onClick={() => onAdd(location.state)}
                                buttonStyle='btn--primary'>
                                {Mods.find((x) => x.code === location.state.code) ? "Remove from Study Plan" : "Add to Study Plan"}
                            </Button>
                        </h2>
                
                </h1>}
                {mod &&
                <h1>
                    {mod.code} {`\n`}
                    {mod.name}
                    <p>Computer Science <GoPrimitiveDot /> {mod.mc} MCs </p>
                    <hr style={{ borderColor: 'white', height: '2px', }} />
                
                        <h2>
                            {mod.details}
                            {`\n`}{`\n`}{`\n`}
                            Preclusions:{`\n`}
                            {mod.preclusions.length === 0 && '-'}
                            {mod.preclusions.length !== 0 && spaceOut(mod.preclusions)}
                            {`\n`}{`\n`}{`\n`}
                            Prerequisites:{`\n`}
                            {mod.prereq.length === 0 && '-'}
                            {mod.prereq.length !== 0 && spaceOut(mod.prereq)}
                            {`\n`}{`\n`}
                            <Button
                                buttonSize='btn--medium'
                                onClick={() => onAdd(mod)}
                                buttonStyle='btn--primary'>
                                {Mods.find((x) => x.code === mod.code) ? "Remove from Study Plan" : "Add to Study Plan"}
                            </Button>
                        </h2>
                    
                </h1>}
        </div >
    );
}

export default ModulePage;