import React from 'react';
import './StudyPlan.css';
import map from "./Map";
import MindMap from 'react-mindmap';

const studyplan = () => {
    return (
        <div className='studyplan'>
            <MindMap nodes={map.nodes} connections={map.connections} />
            <p>
                Modules Added
            </p>
            <h1>
                CS1010 
            </h1>
        </div>
    )
}

export default studyplan;