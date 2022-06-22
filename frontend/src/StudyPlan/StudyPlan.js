import React from 'react'
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
        </div>
    )
}

render(<studyplan />, document.getElementById("root"));
export default studyplan;