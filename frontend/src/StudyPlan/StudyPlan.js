import React from 'react'
<<<<<<< HEAD
import { render } from "react-dom";
import map from "./Map";

const MindMap = require('react-mindmap');

const studyplan = () =>{
    return(
        <div className = "studyplan">
            <h1 className="text-center">
                Study Plan
                <MindMap nodes={map.nodes} connections={map.connections} />
            </h1>
=======
import './StudyPlan.css';

const studyplan = () =>{
    return(
        <div className='studyplan'>
            <h1>Study Plan</h1>
            <p>hello</p>
>>>>>>> bd3797f7ad108678baa1bf2d576ae0b74025073d
        </div>
    )
}

render(<studyplan />, document.getElementById("root"));
export default studyplan;