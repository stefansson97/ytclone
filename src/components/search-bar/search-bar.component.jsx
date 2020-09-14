import React, { useState } from 'react';
import './search-bar.styles.scss';
import { useHistory } from 'react-router-dom';

function SearchBar() {

    const [searchQuery, setSearchQuery] = useState('');

    let history = useHistory();

    const handleSubmit = (e) => {
        if(searchQuery && /\S/.test(searchQuery)) { //to make sure we cannot set only whitespaces as search query
            let path = '/results';
            history.push(path);
        } else {
            e.preventDefault();
        }
    }

    const handleChange = (e) => {
        setSearchQuery(e.target.value);
    }

    return (
        <div className='header-search'>
            <form className='header-search' data-testid='header-search-form' onSubmit={handleSubmit}>
                <label htmlFor='searchquery'></label>
                <input placeholder='Search' value={searchQuery} name='search_query' data-testid='header-search-input' onChange={handleChange}></input>
                <button type='submit'><i className="material-icons">search</i></button>
            </form>
        </div>
    )
}

export default SearchBar;


