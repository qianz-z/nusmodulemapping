import React from "react";
import './SearchBar.css'

function SearchBar({ searchQuery, setSearchQuery }) {
    return (
        <form action="/" method="get">
            <input
                value={searchQuery}
                onInput={e => setSearchQuery(e.target.value)}
                type="text"
                id="header-search"
                placeholder="Search Modules"
                name="s"
            />
            {/* <button type="submit">Search</button> */}
        </form>
    )
}

export default SearchBar