import React from 'react';
import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useDispatch } from 'react-redux';
import {useState} from 'react';

const SearchForm = props => {
    const dispatch = useDispatch();
    const [search, setSearch] = useState('');
    
    const handleSubmit = e => {
        e.preventDefault();
        dispatch({ type: 'UPDATE_SEARCHSTRING', newSearch: { search }});
        setSearch('');
          
    }








    return (
        <form className={styles.searchForm}>
            <TextInput placeholder="Search..." />
            <Button className={styles.searchForm} onChange={handleSubmit}>
            Search: <input type="text" value={search} onChange={e => setSearch(e.target.value)} />
                <span className="fa fa-search" />
            </Button>
        </form>
    );
  };


  export default SearchForm;