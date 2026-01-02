// @ts-nocheck
import { useState, useEffect } from 'react';

export const useFrmspcledu9002PEducationSeatViewerPopup = () => {
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
        }, 500);
    }, []);


    return {
        isLoading,
    };
};