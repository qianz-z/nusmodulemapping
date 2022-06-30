import React from 'react';
import '../App.css';
import './ModulePage.css';
import { GoPrimitiveDot } from "react-icons/go";
import { Button } from '../Components/Button';
import { useLocation } from 'react-router-dom';

function ModulePage(props) {
    const location = useLocation();
    const { Mods, onAdd, onRemove } = props;

    return (
        <div className='module-container'>
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
                        {location.state.preclusions}
                        {`\n`}{`\n`}{`\n`}
                        Prerequisites:{`\n`}
                        {location.state.prereq}
                        {`\n`}{`\n`}
                        <Button
                            buttonSize='btn--large'
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