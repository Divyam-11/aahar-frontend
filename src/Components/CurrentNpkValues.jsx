import React from "react";

function CurrentNpkValues({ data }) {
    return (
        <div className="NPK_Info">
            <h2>Current NPK Values</h2>
            <div>Nitrogen (N): {data[0].Current}</div>
            <div>Phosphorus (P): {data[1].Current}</div>
            <div>Potassium (K): {data[2].Current}</div>
        </div>
    );
}

export default CurrentNpkValues;
