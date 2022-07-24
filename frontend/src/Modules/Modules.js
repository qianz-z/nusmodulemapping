import React, { useEffect, useState } from 'react';
import './Modules.css';
import { GoPrimitiveDot } from "react-icons/go";
import { useNavigate } from 'react-router-dom';
import { Button } from '../Components/Button';
import SearchBar from './SearchBar/SearchBar.js'

//function to filter search 
const filterPosts = (modules, query) => {
    if (!query) {
        return modules;
    }

    return modules.filter((modules) => {
        const postName = modules.name.toLowerCase();
        const modName = modules.code.toLowerCase();
        return (postName.includes(query) + modName.includes(query));
    });
};

function Modules(props) {
    const [modules, setModules] = useState([{
        name: '',
        code: '',
        mc: '',
        prereq: [],
        preclusions: [],
    }])

    useEffect(() => {
        fetch("https://nusmodulemapping.herokuapp.com/modules").then(res => {
            if (res.ok) {
                return res.json()
            }
        }).then(jsonRes => setModules(jsonRes));
    }, [])

    const { Mods, onAdd, onRemove, errorPrint, spaceOut } = props;

    //navigation and transfer of data from main modules page to individual modules page
    const navigate = useNavigate();
    const toPage = (module) => {
        navigate(`/modules/${module.code}`);
    }

    //searchbar things
    const { search } = window.location;
    const query = new URLSearchParams(search).get('s');
    const [searchQuery, setSearchQuery] = useState(query || ''); // search as you type
    const filteredPosts = filterPosts(modules, searchQuery);
    
    //preclusion checker
    let preclusionsError = []
    Mods.map((item) => {
        if (item.preclusions.length !== 0) {
            for (var i = 0; i < item.preclusions.length; i++) {
                let temp = item.preclusions[i];
                let exist = Mods.find((x) => x.code === temp);
                if (exist) {
                    preclusionsError.push(temp);
                }
            }
        }
    })

    return (
        <div className='row'>
            {preclusionsError.length !== 0 &&
                <div className='error'>
                    {errorPrint(preclusionsError)}
                </div>}
            <div className='modules' >
                <div className='searchbar'>
                    <SearchBar
                        searchQuery={searchQuery}
                        setSearchQuery={setSearchQuery}/>
                </div>
                {filteredPosts.map(module =>
                    <div className='modules-one'>
                        <h3 className='modules-name'><a onClick={() => { toPage(module) }}>{module.code} {module.name}</a></h3>
                        <p>Computer Science <GoPrimitiveDot /> {module.mc} MCs</p>
                        {module.prereq.length === 0 && <p>Prerequisites: -</p>}
                        {module.preclusions.length === 0 && <p>Preclusions: -</p>}
                        {module.prereq.length !== 0 && <p>Prerequisites: {spaceOut(module.prereq)} </p>}
                        {module.preclusions.length !== 0 && <p>Preclusions: {spaceOut(module.preclusions)}</p>}
                        <p>
                            <Button buttonSize='btn--medium'
                                onClick={() => onAdd(module)}
                                buttonStyle='btn--primary'>
                                {Mods.find((x) => x.code === module.code) ? "Remove from Study Plan" : "Add to Study Plan"}
                            </Button>
                        </p>
                    </div>)}
            </div>
            <div className='side'>
                <h2>Added Modules</h2>
                <p>
                    {Mods.length === 0 && <div>No Modules Added</div>}
                </p>
                {Mods.map((item) => (
                    <p key={item.code}>
                        {item.code}  <button onClick={() => onRemove(item)}>
                            x
                        </button>
                    </p>
                ))}
            </div>
        </div>
    )
}

export default Modules;