import React from 'react';
import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useDispatch } from 'react-redux';

const SearchForm = props => {
    const dispatch = useDispatch ();
    const handleSubmit = e => {
        e.preventDefault();
        dispatch({ type: 'UPDATE_SEARCHSTRING', searchString: {  }});
    }








    return (
        <form className={styles.searchForm}>
            <TextInput placeholder="Search..." />
            <Button>
                <span className="fa fa-search" />
            </Button>
        </form>
    );
  };


  export default SearchForm;