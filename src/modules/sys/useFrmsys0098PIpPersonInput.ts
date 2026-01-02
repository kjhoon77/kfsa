// @ts-nocheck
import { useState, useEffect } from 'react';

export interface Ids_ioUser {
    ADMINGUBUN: string;
    PPOSITNCD: string;
    PPOSITNNM: string;
    PPERSONNM: string;
    PSABUN: string;
    PDEPTCD: string;
    PDEPTNM: string;
    PHPNO: string;
    PCALLCENTERYN: string;
    PUSEYN: string;
    IPUSERGUBUN: string;
}

export interface Ids_oJibu {
    CD: string;
    DATA: string;
}

export interface Ids_ioCallYN {
    CD: string;
    DATA: string;
}

export interface Ids_ioUSEYN {
    CD: string;
    DATA: string;
}

export interface Ids_ioUserYN {
    CD: string;
    DATA: string;
}

export interface Ids_ioIPUSERGUBUN {
    CD: string;
    DATA: string;
}

export const useFrmsys0098PIpPersonInput = () => {
    const [ds_ioUser, setds_ioUser] = useState<Ids_ioUser[]>([]);
    const [ds_oJibu, setds_oJibu] = useState<Ids_oJibu[]>([]);
    const [ds_ioCallYN, setds_ioCallYN] = useState<Ids_ioCallYN[]>([]);
    const [ds_ioUSEYN, setds_ioUSEYN] = useState<Ids_ioUSEYN[]>([]);
    const [ds_ioUserYN, setds_ioUserYN] = useState<Ids_ioUserYN[]>([]);
    const [ds_ioIPUSERGUBUN, setds_ioIPUSERGUBUN] = useState<Ids_ioIPUSERGUBUN[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_ioUser([]);
            setds_oJibu([]);
            setds_ioCallYN([]);
            setds_ioUSEYN([]);
            setds_ioUserYN([]);
            setds_ioIPUSERGUBUN([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const lfn_Cancel = () => {
        console.log('lfn_Cancel clicked');
    };
    const lfn_End = () => {
        console.log('lfn_End clicked');
    };
    const lfn_Input = () => {
        console.log('lfn_Input clicked');
    };
    const lfn_PrintScreen = () => {
        console.log('lfn_PrintScreen clicked');
    };
    const lfn_Save = () => {
        console.log('lfn_Save clicked');
    };
    const lfn_Search = () => {
        console.log('lfn_Search clicked');
    };

    return {
        isLoading,
        ds_ioUser,
        ds_oJibu,
        ds_ioCallYN,
        ds_ioUSEYN,
        ds_ioUserYN,
        ds_ioIPUSERGUBUN,
        lfn_Cancel,
        lfn_End,
        lfn_Input,
        lfn_PrintScreen,
        lfn_Save,
        lfn_Search,
    };
};