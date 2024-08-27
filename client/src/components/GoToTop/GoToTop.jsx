import React, { useEffect, useState } from 'react';
import './GoToTop.css';
import { FaArrowUp } from "react-icons/fa";

const GoToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    const goToTopBtn = () => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    };

    const listenToScroll = () => {
        let heightToHide = 150;
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        
        if (winScroll > heightToHide) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', listenToScroll);

        return () => {
            window.removeEventListener('scroll', listenToScroll); // Cleanup the event listener on component unmount
        };
    }, []);

    return (
        isVisible && (
            <div className='go-to-top-btn' onClick={goToTopBtn}>
                <FaArrowUp />
            </div>
        )
    );
};

export default GoToTop;
