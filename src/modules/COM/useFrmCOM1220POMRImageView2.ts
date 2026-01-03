// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_oEducationPlace } from './FrmCOM1220POMRImageView2Data';

export const useFrmCOM1220POMRImageView2 = () => {
    const [ds_oEducationPlace, setds_oEducationPlace] = useState<Ids_oEducationPlace[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [tabValue_OMRTab, setTabValue_OMRTab] = useState(0);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_oEducationPlace([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const lfn_End = () => {
        console.log('lfn_End clicked');
    };

    return {
        isLoading,
        ds_oEducationPlace,
        tabValue_OMRTab,
        setTabValue_OMRTab,
        lfn_End,
    };
};