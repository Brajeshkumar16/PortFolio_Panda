import React, { useState } from 'react';
import { publications } from '../constant';
import './Publication.css';

const PublicationsPerPage = 6;

const Publication = () => {
    const [visibleCount, setVisibleCount] = useState(PublicationsPerPage);

    const handleShowMore = () => {
        setVisibleCount(prevCount => prevCount + PublicationsPerPage);
    };

    const currentPublications = publications.slice(0, visibleCount);

    return (
        <div className="publication-page">
            <h1>Publications</h1>
            <div className="publication-list">
                {currentPublications.map((pub, index) => (
                    <div key={index} className="publication-item">
                        <h2 className="publication-title">{pub.title}</h2>
                        <p className="publication-authors">{pub.authors}</p>
                        <p className="publication-journal">
                            {pub.journal} <span className="publication-volume">{pub.volumeIssue}</span>, {pub.pages}
                        </p>
                    </div>
                ))}
            </div>
            {visibleCount < publications.length && (
                <div className="show-more">
                    <button onClick={handleShowMore}>Show More</button>
                </div>
            )}
        </div>
    );
};

export default Publication;
