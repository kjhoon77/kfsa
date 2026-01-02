// @ts-nocheck
import { useState, useEffect } from 'react';

export interface Ids_oBank {
    CCGROUPCD: string;
    CCCD: string;
    CCCDNM: string;
    MORDERSEQ: string;
    USE_YN: string;
    CCREMARK: string;
}

export interface Ids_iLicenseReissueH {
    LRHLRMGNO: string;
    LRHSEQ: string;
    LRHSTATUS: string;
    LRHPAYSTATUS: string;
    LRHREGDATE: string;
    LRHREGSABUN: string;
}

export interface Ids_iPosPayAccount {
    PPAPMYEAR: string;
    PPAPMMGNO: string;
    PPABANKCD: string;
    PPABANKNM: string;
    PPACCOUNT: string;
    PPAOWNER: string;
    PPREASON: string;
    PPEXCELYN: string;
    PPAPLANAMOUNT: string;
    PPAFINISHAMOUNT: string;
}

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