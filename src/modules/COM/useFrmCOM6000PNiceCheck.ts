// @ts-nocheck
import { useState, useEffect } from 'react';

export interface Ids_oTrainingPerson {
    IIDIRPATH: string;
    IIREALNM: string;
    TPAUTHYN: string;
    TPCUSTGUBUN: string;
    TPEMAILDOMAIN: string;
    TPEMAILID: string;
    TPHPTEL: string;
    TPLASTIMGSEQ: string;
    TPMGNO: string;
    TPNM: string;
    TPRESIDENTNO: string;
    TPTEL: string;
}

export interface Ids_iTrainingPerson {
    IIDIRPATH: string;
    IIREALNM: string;
    TPAUTHYN: string;
    TPCUSTGUBUN: string;
    TPEMAILDOMAIN: string;
    TPEMAILID: string;
    TPHPTEL: string;
    TPLASTIMGSEQ: string;
    TPMGNO: string;
    TPNM: string;
    TPRESIDENTNO: string;
    TPTEL: string;
}

export const useFrmCOM6000PNiceCheck = () => {
    const [ds_oTrainingPerson, setds_oTrainingPerson] = useState<Ids_oTrainingPerson[]>([]);
    const [ds_iTrainingPerson, setds_iTrainingPerson] = useState<Ids_iTrainingPerson[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_oTrainingPerson([]);
            setds_iTrainingPerson([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const lfn_End = () => {
        console.log('lfn_End clicked');
    };

    return {
        isLoading,
        ds_oTrainingPerson,
        ds_iTrainingPerson,
        lfn_End,
    };
};