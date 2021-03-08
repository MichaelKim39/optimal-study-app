import React from 'react';

import styles from '../Search.module.scss';

import SubjectContainer from '@/pages/subjects/components/SubjectContainer';

const SearchResultsList = ({ results }) => {
    return (
        <div className={styles.searchResultList}>
            {results.map((subject) => (
                <SubjectContainer
                    subject={subject}
                    showUtilButtons={false}
                    containerStyle={styles.searchResult}
                />
            ))}
        </div>
    );
};

export default SearchResultsList;
