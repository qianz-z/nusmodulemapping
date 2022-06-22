import React from 'react'
import map from "./Map";
import MindMap from 'react-mindmap'

const studyplan = () =>{
    return(
        <div className = "studyplan">
            <MindMap nodes={map.nodes} connections={map.connections} />

        </div>
    )
}

export default studyplan;