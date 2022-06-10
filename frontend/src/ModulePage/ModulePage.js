import React from 'react';
import '../App.css';
import './ModulePage.css';
import { GoPrimitiveDot } from "react-icons/go";
import { Button } from '../Components/Button';

function ModulePage() {
    return (
        <div className='module-container'>
            <h1>
                Insert Module Code {`\n`}
                Insert Module Name Here
                <p>
                    Computer Science <GoPrimitiveDot /> Insert MCs here
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
                        Insert Preclusions Here
                        {`\n`}{`\n`}{`\n`}{`\n`}
                        Prerequisites:{`\n`}
                        Insert Prerequisites Here
                        {`\n`}{`\n`}
                        <Button
                            buttonSize='btn--large'
                            children='Add to Study Plan'
                            type
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