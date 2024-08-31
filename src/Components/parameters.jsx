import React, { useState, useEffect } from 'react';
import Parameter from './parameter.jsx';

function Parameters() {
    const [data, setData] = useState({
        T2M: null,
        RH2M: null,
        PS: null,
        n1: null,
        p1: null
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                // Fetch data from the first endpoint
                const response1 = await fetch('https://gee-live-flask.onrender.com/fetch_data');
                if (!response1.ok) {
                    throw new Error('Network response was not ok from fetch_data');
                }
                const data1 = await response1.json();

                // Fetch data from the second endpoint
                const response2 = await fetch('https://gee-live-flask.onrender.com/fetch');
                if (!response2.ok) {
                    throw new Error('Network response was not ok from fetch');
                }
                const data2 = await response2.json();

                // Extract relevant values
                setData({
                    T2M: data1.T2M,
                    RH2M: data1.RH2M,
                    PS: data1.PS,
                    n1: data2.n1,
                    p1: data2.p1
                });
                setLoading(false);
            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        }

        fetchData();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="parameters_parent">
            <Parameter name={"T2M"} value={data.T2M} />
            <Parameter name={"RH2M"} value={data.RH2M} />
            <Parameter name={"PS"} value={data.PS} />
            <Parameter name={"n1"} value={data.n1} />
            <Parameter name={"p1"} value={data.p1} />
        </div>
    );
}

export default Parameters;
