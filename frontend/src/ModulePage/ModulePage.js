import React from 'react';
import '../App.css';
import './ModulePage.css';
import { GoPrimitiveDot } from "react-icons/go";
import { Button } from '../Components/Button';
import {useLocation} from 'react-router-dom';

function ModulePage() {
    const location = useLocation();

    return (
        <div className='module-container'>
            <h1>
                {location.state.code} {`\n`}
                {location.state.name}
                <p>
                    Computer Science <GoPrimitiveDot /> {location.state.mc} MCs
                    <hr
                        style={{
                            background: 'white',
                            color: 'white',
                            borderColor: 'white',
                            height: '2px',
                        }}
                    />
                    <g>
                        Insert Module Details Here
                        {`\n`}{`\n`}{`\n`}{`\n`}
                        Preclusions:{`\n`}
                        {location.state.preclusions}
                        {`\n`}{`\n`}{`\n`}{`\n`}
                        Prerequisites:{`\n`}
                        {location.state.prerequisites}
                        {`\n`}{`\n`}
                        <Button
                            buttonSize='btn--large'
                            children='Add to Study Plan'
                            //onClick
                            buttonStyle='btn--primary'>
                        </Button>
                    </g>
                </p>
            </h1>

        </div >
    );
}

export default ModulePage;