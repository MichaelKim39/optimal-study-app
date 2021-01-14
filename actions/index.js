import React, { useEffect, useState } from 'react';

export const useFetchData = (url) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    const fetchData = async () => {
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
        url && fetchData();
    }, [url]);

    return [ data, error, loading ];
};
