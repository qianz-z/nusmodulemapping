import React from 'react';
import '../App.css';
import './ModulePage.css';
import { GoPrimitiveDot } from "react-icons/go";
import { Button } from '../Components/Button';
import { useLocation } from 'react-router-dom';

function ModulePage(props) {
    const location = useLocation();
    const { Mods, onAdd, errorPrint, spaceOut } = props;

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

    return (
        <div className='module-container'>
            <div className='errorBox'>
                {errorPrint(preclusionsError)}
            </div>
            <h1>
                {location.state.code} {`\n`}
                {location.state.name}
                <p>Computer Science <GoPrimitiveDot /> {location.state.mc} MCs </p>
                <hr style={{ borderColor: 'white', height: '2px', }} />
                <p>
                    <g>
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
                    </g>
                </p>
            </h1>
        </div >
    );
}

export default ModulePage;