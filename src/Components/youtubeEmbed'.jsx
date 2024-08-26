import React from 'react';

const YouTubeEmbed = () => {
    return (
        <div className="yt_embed">
            <p>Farming Tips</p>
        <iframe width="245" height="245" src="https://www.youtube.com/embed/QdBZY2fkU-0?si=KypgQfPWljvLBCRn"
                title="YouTube video player" frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
    );
};

export default YouTubeEmbed;
