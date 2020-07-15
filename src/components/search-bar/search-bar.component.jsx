import React, { useState } from 'react';
import './search-bar.styles.scss';
import { useHistory } from 'react-router-dom';

function SearchBar() {

    const [searchQuery, setSearchQuery] = useState('');
    const history = useHistory();

    const handleChange = (e) => {
        setSearchQuery(e.target.value);
    }

    const handleClick = () => {
        let path = 'results=' + searchQuery; 
        history.push(path);
    }

    return (
        <div className='header-search'>
            <form className='header-search' onSubmit={handleClick}>
                <input placeholder='Search' onChange={handleChange}></input>
                <button type='submit'><i className="material-icons">search</i></button>  
            </form>                 
        </div>
    )
}

export default SearchBar;