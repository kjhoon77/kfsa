// @ts-nocheck
import { useState, useEffect } from 'react';

export const useFrmcti0010MAgentMonitList = () => {
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