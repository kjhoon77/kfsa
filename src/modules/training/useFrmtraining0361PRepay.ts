// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_oBank, Ids_iLicenseReissueH, Ids_iPosPayAccount } from './Frmtraining0361PRepayData';

export const useFrmtraining0361PRepay = () => {
    const [ds_oBank, setds_oBank] = useState<Ids_oBank[]>([]);
    const [ds_iLicenseReissueH, setds_iLicenseReissueH] = useState<Ids_iLicenseReissueH[]>([]);
    const [ds_iPosPayAccount, setds_iPosPayAccount] = useState<Ids_iPosPayAccount[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_oBank([]);
            setds_iLicenseReissueH([]);
            setds_iPosPayAccount([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const lfn_End = () => {
        console.log('lfn_End clicked');
    };
    const lfn_Save = () => {
        console.log('lfn_Save clicked');
    };

    return {
        isLoading,
        ds_oBank,
        ds_iLicenseReissueH,
        ds_iPosPayAccount,
        lfn_End,
        lfn_Save,
    };
};