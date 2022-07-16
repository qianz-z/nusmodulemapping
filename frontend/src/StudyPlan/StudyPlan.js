import React from 'react';
import './StudyPlan.css';
import MindMap from 'react-mindmap';

function Studyplan(props) {
    const { Mods, onRemove } = props;

    let test2 = [];
    let test = [];

    //creation of nodes
    Mods.map((item) => {
        let y1, y2, y3, y4, y5 = 0;
        if (item.prereq.length === 0) {
            test.push({ text: item.code, fx: 0, fy: y1 })
            y1 += 100;
        }
        else {
            let temp = item.prereq[item.prereq.length - 1];
            if (temp[2] === '1') {
                test.push({ text: item.code, fx: 200, fy: y2 });
                y2 += 100;
            }
            else if (temp[2] === '2') {
                test.push({ text: item.code, fx: 400, fy: y3 });
                y3 += 100;
            }
            else if (temp[2] === '3') {
                test.push({ text: item.code, fx: 600, fy: y4 });
                y4 += 100;
            }
            else {
                test.push({ text: item.code, fx: 800, fy: y5 });
                y5 += 100;
            }
        };
    })

    //creation of connections
    Mods.map((item) => {
        if (item.prereq.length !== 0) {
            for (var i = 0; i < item.prereq.length; i++) {
                let temp = item.prereq[i];
                let exist = Mods.find((x) => x.code === temp);
                if (exist) {
                    test2.push({ source: item.code, target: temp });
                }
            }
        }
    })
    
    return (
        <div className='studyplan'>
            <div className='box'>
                {Mods.length !== 0 && <MindMap nodes={test} connections={test2} />}</div>
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