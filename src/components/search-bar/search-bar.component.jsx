import React from 'react';

function SearchBar() {
    return (
        <div className='header-search'>
            <input placeholder='Search'></input>
            <button><i className="material-icons">search</i></button>                
        </div>
    )
}

export default SearchBar;