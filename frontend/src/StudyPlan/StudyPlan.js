import React from 'react';
import './StudyPlan.css';
import MindMap from 'react-mindmap';

function Studyplan(props) {
    const { Mods, onRemove } = props;

    let cons = [];
    let node = [];
    let y1 = 100;
    let y2 = 100;
    let y3 = 100;
    let y4 = 100;
    let y5 = 100;
    //creation of nodes
    Mods.map((item) => {
        if (item.prereq.length === 0) {
            node.push({ text: item.code, fx: 100, fy: y1, url: "#/modules/" + item.code, category: "" })
            y1 += 100;
        }
        else {
            let temp = item.prereq[item.prereq.length - 1];
            if (temp[2] === '1') {
                node.push({ text: item.code, fx: 300, fy: y2, url: "#/modules/" + item.code, category: "" });
                y2 += 100;
            }
            else if (temp[2] === '2') {
                node.push({ text: item.code, fx: 500, fy: y3, url: "#/modules/" + item.code, category: "" });
                y3 += 100;
            }
            else if (temp[2] === '3') {
                node.push({ text: item.code, fx: 700, fy: y4, url: "#/modules/" + item.code, category: ""});
                y4 += 100;
            }
            else {
                node.push({ text: item.code, fx: 900, fy: y5, url: "#/modules/" + item.code, category: "" });
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
                    cons.push({ source: item.code, target: temp });
                }
            }
        }
    })

    return (
        <div className='studyplan'>
            {Mods.length !== 0 && <div className='box'> <MindMap nodes={node} connections={cons} editable={false} /></div>}
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