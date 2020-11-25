import React, { useEffect, useState } from 'react';

export const loadSubjects = () => {
    const [subjects, setSubjects] = useState([]);
    const [getSubjectsError, setGetSubjectsError] = useState(null);
    const [subjectsLoading, setSubjectsLoading] = useState(true);

    const getSubjects = async () => {
        const response = await fetch('api/v1/subjects');
        const data = await response.json();
        if (response.status === 200) {
            setSubjects(data);
        } else {
            setGetSubjectsError(data);
        }
        setSubjectsLoading(false);
    };

    useEffect(() => {
        getSubjects();
    }, []);

    return { subjects, getSubjectsError, subjectsLoading };
};
