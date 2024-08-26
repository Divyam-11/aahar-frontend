import React from 'react';

const MapEmbed = () => {
    return (
        <div className="field_map">
            <iframe
                width="300"
                height="185"
                src="https://www.openstreetmap.org/export/embed.html?bbox=75.86070678935863%2C19.20742852680121%2C85.69347046123362%2C26.657277674217585&amp;layer=mapnik"

                title="OpenStreetMap"
            ></iframe>
            <br />
            <small>
                <a href="https://www.openstreetmap.org/#map=7/22.984/80.777" target="_blank" rel="noopener noreferrer">

                </a>
            </small>
        </div>
    );
};

export default MapEmbed;
