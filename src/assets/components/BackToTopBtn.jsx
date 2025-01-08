import React from 'react';
import './backToTopBtn.css';

const BackToTopBtn = ({ scroll }) => {
    const backToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <a
            className={`back-to-top ${scroll > 100 ? 'active' : ''}`}
            onClick={backToTop}
        >
            <ion-icon name="arrow-up-outline"></ion-icon>
        </a>
    );
};

export default BackToTopBtn;
