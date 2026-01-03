// @ts-nocheck
import { useState, useEffect } from 'react';
import type {  } from './Frmtraining0384SJubsuButtonData';

export const useFrmtraining0384SJubsuButton = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [isVisible_btnMaking, setIsVisible_btnMaking] = useState(true);
    const [isVisible_btnDelivery, setIsVisible_btnDelivery] = useState(true);
    const [isVisible_btnJubsuCancel, setIsVisible_btnJubsuCancel] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
        }, 500);
    }, []);


    return {
        isLoading,
        isVisible_btnMaking,
        setIsVisible_btnMaking,
        isVisible_btnDelivery,
        setIsVisible_btnDelivery,
        isVisible_btnJubsuCancel,
        setIsVisible_btnJubsuCancel,
    };
};