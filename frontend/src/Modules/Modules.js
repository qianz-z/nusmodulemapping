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
        if (postName.includes(query)) {
            return postName.includes(query);
        }
        return modName.includes(query);
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
    })
    const navigate = useNavigate();
    const { Mods, onAdd } = props;

    //navigation and transfer of data from main modules page to individual modules page
    const toPage = (module) => {
        navigate(`/modules/:${module.code}`, { state: module });
    }

    //searchbar things
    const { search } = window.location;
    const query = new URLSearchParams(search).get('s');
    const [searchQuery, setSearchQuery] = useState(query || '');
    const filteredPosts = filterPosts(modules, searchQuery);

    return (
        <div className='modules' >
            <SearchBar
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
            />
            {filteredPosts.map(module =>
                <div className='modules-one'>
                    <h3 className='modules-name'><a onClick={() => { toPage(module) }}>{module.code} {module.name}</a></h3>
                    <p>Computer Science <GoPrimitiveDot /> {module.mc} MCs</p>
                    <p>Prerequisites <span>{module.prereq}</span></p>
                    <p>Preclusions <span>{module.preclusions}</span></p>
                    <p>
                        <Button buttonSize='btn--medium'
                            onClick={() => onAdd(module)}
                            buttonStyle='btn--primary'>
                            {Mods.find((x) => x.code === module.code) ? "Remove from Study Plan" : "Add to Study Plan"}
                        </Button>
                    </p>
                </div>
            )}
        </div>
    )
}

export default Modules;