import React from "react";
import DataParameters from "../Components/dataParameters.jsx";
import NpkPlot from "../Components/npkPlot.jsx";
import OptimalNpkValues from "../Components/OptimalNpkValues.jsx";
import CurrentNpkValues from "../Components/CurrentNpkValues.jsx";

function generateRandomNPK() {
    const min = 250;
    const max = 300;
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function DataPage() {
    const data = [
        {
            name: "Nitrogen (N)",
            Optimal: generateRandomNPK(),
            Current: generateRandomNPK(),
        },
        {
            name: "Phosphorus (P)",
            Optimal: generateRandomNPK(),
            Current: generateRandomNPK(),
        },
        {
            name: "Potassium (K)",
            Optimal: generateRandomNPK(),
            Current: generateRandomNPK(),
        },
    ];

    return (
        <div>
            <NpkPlot data={data} />
            <div className="data_field_parent">
            <OptimalNpkValues data={data} />
            <CurrentNpkValues data={data} />
            </div>
            <DataParameters />
        </div>
    );
}

export default DataPage;
