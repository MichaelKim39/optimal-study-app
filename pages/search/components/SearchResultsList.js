import React from 'react';
import { openSuccessToast, openErrorToast } from '@/utils/popups';

import styles from '../Search.module.scss';

import { log } from '@/utils/logger';
import { useSaveSubjectCopy } from '@/actions/subjects';

import SubjectContainer from '@/pages/subjects/components/SubjectContainer';

const SearchResultsList = ({ results }) => {
    const [handleSaveSubject, subjectSaveStatus] = useSaveSubjectCopy();

    const handleSaveSubjectCopy = (subject) => {
        if (confirm('Would you like to save a copy of this subject?')) {
            try {
                handleSaveSubject(subject)
                openSuccessToast('Successfully Saved Copy of Subject (Go to subjects page to view)');
            } catch (error) {
                openErrorToast('Error saving copy of subject');
                log("Error while saving subject: ", error)
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
                    onClickSubject={(subject) => handleSaveSubjectCopy(subject)}
                    clickEnabled={false}
                />
            ))}
        </div>
    );
};

export default SearchResultsList;
