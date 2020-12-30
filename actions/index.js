import React, { useEffect, useState } from 'react';

export const loadData = (url) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    const getData = async () => {
        const response = await fetch(url);
        const data = await response.json();
        if (response.status === 200) {
            setData(data);
        } else {
            setError(data);
        }
        setLoading(false);
    };

    useEffect(() => {
        getData();
    }, []);

    return [ data, error, loading ];
};
