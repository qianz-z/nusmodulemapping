import React from 'react';
import './StudyPlan.css';
import MindMap from 'react-mindmap';

function Studyplan(props) {
    const { Mods, onRemove } = props;

    

    let test2 = [];
    let test = [];

    Mods.map((item) => {
        if (item.prereq.length === 0) {
            test.push({text: item.code, fx:0, fy:-100})
        }
        else {
            let temp = item.prereq[0];
            
            test.push({text: item.code, fx:200, fy:-100})
        };
    })
    
    Mods.map((item) => {
        if (item.prereq.length !== 0) {
            for (var i = 0; i < item.prereq.length; i++) {
                let temp = item.prereq[i];
                let exist = Mods.find((x) => x.code === temp);
                if (exist) {
                    test2.push({source: item.code, target: temp});
                }
            }
        }
    })

    
    return (
        <div className='studyplan'>
            <MindMap nodes={test} connections={test2} />
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

export default Studyplan;