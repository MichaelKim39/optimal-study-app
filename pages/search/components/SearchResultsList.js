import React from 'react';
import { openSuccessToast, openErrorToast } from '@/utils/popups';

import styles from '../Search.module.scss';

import { log } from '@/utils/logger';
import { useAddSubject } from '@/actions/subjects';

import SubjectContainer from '@/pages/subjects/components/SubjectContainer';

const SearchResultsList = ({ results }) => {
    const [handleAddSubject, subjectAddStatus] = useAddSubject();

    const handleSaveSubject = (subject) => {
        if (confirm('Would you like to save a copy of this subject?')) {
            try {
                openSuccessToast('Successfully Saved Copy of Subject');
            } catch (error) {
                openErrorToast('Error saving copy of subject');
            }
        }
    };

    return (
        <div className={styles.searchResultList}>
            {results.map((subject) => (
                <SubjectContainer
                    subject={subject}
                    showUtilButtons={false}
                    containerStyle={styles.searchResult}
                    onClickSubject={(subject) => handleSaveSubject(subject)}
                    clickEnabled={false}
                />
            ))}
        </div>
    );
};

export default SearchResultsList;
