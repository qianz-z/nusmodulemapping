import React from "react";
import './SearchBar.css'

function SearchBar({ searchQuery, setSearchQuery }) {
    return (
            <input
                value={searchQuery}
                onInput={e => setSearchQuery(e.target.value)}
                type="text"
                id="header-search"
                placeholder="Search Modules"
                name="s"
            />
    )
}

export default SearchBar