import React, { useEffect, useState } from "react";
import DataParameter from "./dataParameter.jsx";

function DataParameters() {
    const [indexData, setIndexData] = useState({
        ARI: null,
        CAI: null,
        CIRE: null,
        DWSI: null,
        EVI: null,
        GCVI: null,
        MCARI: null,
        NDVI: null,
        SIPI: null,
    });

    const [weatherData, setWeatherData] = useState({
        PS: null,
        RH2M: null,
        T2M: null,
    });

    useEffect(() => {
        // Fetch data from the first endpoint
        fetch("https://gee-live-flask.onrender.com/gee")
            .then(response => response.json())
            .then(data => setIndexData(data))
            .catch(error => console.error("Error fetching index data:", error));

        // Fetch data from the second endpoint
        fetch("https://gee-live-flask.onrender.com/fetch_data")
            .then(response => response.json())
            .then(data => setWeatherData(data))
            .catch(error => console.error("Error fetching weather data:", error));
    }, []);

    if (
        Object.values(indexData).some(value => value === null) ||
        Object.values(weatherData).some(value => value === null)
    ) {
        return <div>Loading...</div>;
    }

    return (
        <div className="data_params">
            <h1 className="data_params_heading">Parameters</h1>
            <div className="data_params_first">
                <DataParameter name={"ARI"} value={indexData.ARI} />
                <DataParameter name={"CAI"} value={indexData.CAI} />
                <DataParameter name={"CIRE"} value={indexData.CIRE} />
                <DataParameter name={"DWSI"} value={indexData.DWSI} />
                <DataParameter name={"EVI"} value={indexData.EVI} />
            </div>
            <div className="data_params_second">
                <DataParameter name={"GCVI"} value={indexData.GCVI} />
                <DataParameter name={"MCARI"} value={indexData.MCARI} />
                <DataParameter name={"NDVI"} value={indexData.NDVI} />
                <DataParameter name={"SIPI"} value={indexData.SIPI} />
            </div>
            <div className="data_params_third">
                <DataParameter name={"PS"} value={weatherData.PS} />
                <DataParameter name={"RH2M"} value={weatherData.RH2M} />
                <DataParameter name={"T2M"} value={weatherData.T2M} />
            </div>
        </div>
    );
}

export default DataParameters;
