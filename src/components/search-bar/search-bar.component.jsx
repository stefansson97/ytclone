import React from 'react';
import './search-bar.styles.scss';
import { useHistory } from 'react-router-dom';

function SearchBar() {

    let history = useHistory();

    const handleSubmit = (e) => {
        let path = '/results';
        history.push(path);
    }

    return (
        <div className='header-search'>
            <form className='header-search' onSubmit={handleSubmit}>
                <input placeholder='Search' name='search_query'></input>
                <button type='submit'><i className="material-icons">search</i></button>
            </form>
        </div>
    )
}

export default SearchBar;
