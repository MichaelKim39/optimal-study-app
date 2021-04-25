import React, { useState } from 'react';
import { InputGroup, Input, Alert, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import styles from './Search.module.scss';

import { log } from '@/utils/logger';
import { useSearchSubjects } from '@/actions/subjects';

import DefaultLayout from '@/components/layouts/DefaultLayout';
import PageLayout from '@/components/layouts/PageLayout';
import LoadingIndicator from '@/components/global/LoadingIndicator';
import SearchResultsList from './components/SearchResultsList';

const Search = ({ userInfo, userLoading }) => {
    const [query, setQuery] = useState('');
    const [searchMade, setSearchMade] = useState(false);
    const [handleSearchSubjects, searchSubjectStatus] = useSearchSubjects();
    const {
        loading: searchResultsLoading,
        data: searchResults,
    } = searchSubjectStatus;

    const handleSearch = () => {
        // log('SEARCHING FOR: ', query);
        setSearchMade(true);
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
                {searchResultsLoading && <LoadingIndicator className='mt-3' />}
                {searchResults && <SearchResultsList results={searchResults} />}
                <Alert
                    color='danger'
                    isOpen={
                        searchMade &&
                        (!searchResults || searchResults.length === 0)
                    }
                    className='mt-3'
                >
                    No Results Found!
                </Alert>
            </PageLayout>
        </DefaultLayout>
    );
};
export default Search;
