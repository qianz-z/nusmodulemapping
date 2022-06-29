import React from 'react';
import './StudyPlan.css';
import map from "./Map";
import MindMap from 'react-mindmap';

function studyplan(props) {
    const { Mods, onRemove } = props;
    return (
        <div className='studyplan'>
            <MindMap nodes={map.nodes} connections={map.connections} />
            <p>
                Modules Added
            </p>
            <h1>
                {Mods.length === 0 && <div>No Modules Added</div>}
            </h1>
            {Mods.map((item) => (
            <h2 key={item.code}>
                 {item.code}  <button onClick={() => onRemove(item)}>
                        x
                    </button>
                </h2>
            ))}
        </div>
    )
}

export default studyplan;