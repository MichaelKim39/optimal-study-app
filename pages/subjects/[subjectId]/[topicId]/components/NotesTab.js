import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { TabPane, Button } from 'reactstrap';
import ReactMde from 'react-mde';
import ReactMarkdown from 'react-markdown';
import { openSuccessToast, openErrorToast } from '@/utils/popups';

import styles from '../Topic.module.scss';

import { log } from '@/utils/logger';
import { editTopicNotes } from '@/actions/topics';

const NotesTab = ({ notes }) => {
    const router = useRouter();
    const [markdown, setMarkdown] = useState(notes);
    const [markdownTab, setMarkdownTab] = useState('write');

    const handleSaveNotes = async () => {
        try {
            const response = await editTopicNotes(
                router.query.subjectId,
                router.query.topicId,
                { markdown },
            );

            openSuccessToast('Notes Successfully Saved!');
        } catch (error) {
            openErrorToast('Error while saving notes...');
        }
    };

    return (
        <TabPane tabId={1}>
            <div className={styles.tabContainer}>
                <h1>Notes</h1>
                <div className={styles.markdownContainer}>
                    <ReactMde
                        value={markdown}
                        onChange={setMarkdown}
                        selectedTab={markdownTab}
                        onTabChange={setMarkdownTab}
                        minEditorHeight={500}
                        maxEditorHeight={500}
                        minPreviewHeight={500}
                        generateMarkdownPreview={(md) =>
                            Promise.resolve(<ReactMarkdown source={md} />)
                        }
                    />
                </div>
                <Button
                    color='primary'
                    onClick={handleSaveNotes}
                    className='mt-3'
                >
                    Save
                </Button>
            </div>
        </TabPane>
    );
};

export default NotesTab;
