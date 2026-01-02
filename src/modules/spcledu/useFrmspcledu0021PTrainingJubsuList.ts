// @ts-nocheck
import { useState, useEffect } from 'react';

export interface Ids_oTrainingJubsu {
    ABSENTYN: string;
    ADDR1: string;
    ADDR2: string;
    BARCODE: string;
    COMPNM: string;
    COURSECD: string;
    COURSENM: string;
    DECISIONSEATNO: string;
    EMAILDOMAIN: string;
    EMAILID: string;
    HPTEL: string;
    IIDIRPATH: string;
    IIIMGSEQ: string;
    IIREALNM: string;
    IISAVENM: string;
    JUBSUNO: string;
    LASTSUNAPGUBUN: string;
    LASTTJHSEQ: string;
    LASTTOHSEQ: string;
    LASTTSSEQ: string;
    MGJIBUCD: string;
    MGJIBUNICK: string;
    MGJIBUNM: string;
    MUNJEGUBUN: string;
    PASSYN: string;
    PERSONNM: string;
    REMARK: string;
    REMARKCD: string;
    RESIDENTNO: string;
    TEL: string;
    TJMGNO: string;
    TOMGNO: string;
    TORDER: string;
    TPMGNO: string;
    YEAR: string;
    ZIPCD: string;
}

export interface Ids_oPassYn {
    CD: string;
    DATA: string;
}

export const useFrmspcledu0021PTrainingJubsuList = () => {
    const [ds_oTrainingJubsu, setds_oTrainingJubsu] = useState<Ids_oTrainingJubsu[]>([]);
    const [ds_oPassYn, setds_oPassYn] = useState<Ids_oPassYn[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_oTrainingJubsu([]);
            setds_oPassYn([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnMutilSort_OnClick = () => {
        console.log('btnMutilSort_OnClick clicked');
    };
    const btnSelect_OnClick = () => {
        console.log('btnSelect_OnClick clicked');
    };
    const lfn_End = () => {
        console.log('lfn_End clicked');
    };
    const lfn_Search = () => {
        console.log('lfn_Search clicked');
    };

    return {
        isLoading,
        ds_oTrainingJubsu,
        ds_oPassYn,
        btnMutilSort_OnClick,
        btnSelect_OnClick,
        lfn_End,
        lfn_Search,
    };
};