import React from 'react'
import map from "./Map";
import MindMap from 'react-mindmap'

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

export default studyplan;