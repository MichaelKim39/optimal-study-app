import React, { useState } from 'react';
import { InputGroup, Input, Label, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import styles from './Search.module.scss';

import { log } from '@/utils/logger';
import { useSearchSubjects } from '@/actions/subjects';

import DefaultLayout from '@/components/layouts/DefaultLayout';
import PageLayout from '@/components/layouts/PageLayout';
import SearchResultsList from './components/SearchResultsList';

const Search = ({ userInfo, userLoading }) => {
    const [query, setQuery] = useState('');
    const [handleSearchSubjects, searchSubjectStatus] = useSearchSubjects();
    const { data: searchResults, error: searchError } = searchSubjectStatus;

    const handleSearch = () => {
        // log('SEARCHING FOR: ', query);
        handleSearchSubjects(query);
    };

    return (
        <DefaultLayout userInfo={userInfo} userLoading={userLoading}>
            <PageLayout pageTitle='Search For Subjects'>
                <InputGroup className={styles.searchContainer}>
                    {/* <Label for='query'>Subject Search</Label> */}
                    <Input
                        type='search'
                        placeholder='Search for a subject'
                        className={styles.searchInput}
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        name='query'
                        id='query'
                    />
                    <Button
                        className={styles.searchButton}
                        onClick={handleSearch}
                    >
                        <FontAwesomeIcon icon={faSearch} size='lg' />
                    </Button>
                </InputGroup>
                {searchResults && <SearchResultsList results={searchResults} />}
            </PageLayout>
        </DefaultLayout>
    );
};
export default Search;
