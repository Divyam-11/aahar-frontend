import React from "react";

function OptimalNpkValues({ data }) {
    return (
        <div className="NPK_Info">
            <h2>Optimal NPK Values</h2>
            <div>Nitrogen (N): {data[0].Optimal}</div>
            <div>Phosphorus (P): {data[1].Optimal}</div>
            <div>Potassium (K): {data[2].Optimal}</div>
        </div>
    );
}

export default OptimalNpkValues;
