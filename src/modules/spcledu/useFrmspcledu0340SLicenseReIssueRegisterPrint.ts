// @ts-nocheck
import { useState, useEffect } from 'react';

export interface Ids_oTrainingJubsu {
    TPMGNO: string;
    TPEMAIL: string;
    TPHPTEL: string;
    IIIMGSEQ: string;
    TCCOURSECD: string;
    THLASTORDERSEQ: string;
    TJADDR1: string;
    TJADDR2: string;
    TJAMOUNTGUBUN: string;
    TJBULDADDR: string;
    TJBULDNM: string;
    TJBUNJI: string;
    TJCOMPNM: string;
    TJDONG: string;
    TJFIREMANYN: string;
    TJKU: string;
    TJLASTHISTORYSEQ: string;
    TJLASTREPAYYN: string;
    TJLASTSETLMTSEQ: string;
    TJMGNO: string;
    TJPASSYN: string;
    TJPERSONNM: string;
    TJREFUNDYN: string;
    TJREMARK: string;
    TJREMARKCD: string;
    TJRESIDENTNO: string;
    TJROADNM: string;
    TJSIDO: string;
    TJZIPCD: string;
    TOENDDATE: string;
    TOJUBSUNO: string;
    TOMGNO: string;
    TOSTARTDATE: string;
    TOYEAR: string;
}

export interface Ids_oJibu {
    CD: string;
    DATA: string;
}

export interface Ids_oGubun {
    CD: string;
    DATA: string;
}

export const useFrmspcledu0340SLicenseReIssueRegisterPrint = () => {
    const [ds_oTrainingJubsu, setds_oTrainingJubsu] = useState<Ids_oTrainingJubsu[]>([]);
    const [ds_oJibu, setds_oJibu] = useState<Ids_oJibu[]>([]);
    const [ds_oGubun, setds_oGubun] = useState<Ids_oGubun[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_oTrainingJubsu([]);
            setds_oJibu([]);
            setds_oGubun([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnMutilSort_OnClick = () => {
        console.log('btnMutilSort_OnClick clicked');
    };
    const lfn_Cancel = () => {
        console.log('lfn_Cancel clicked');
    };
    const lfn_End = () => {
        console.log('lfn_End clicked');
    };
    const lfn_Excel = () => {
        console.log('lfn_Excel clicked');
    };
    const lfn_Print = () => {
        console.log('lfn_Print clicked');
    };
    const lfn_PrintScreen = () => {
        console.log('lfn_PrintScreen clicked');
    };
    const lfn_Search = () => {
        console.log('lfn_Search clicked');
    };

    return {
        isLoading,
        ds_oTrainingJubsu,
        ds_oJibu,
        ds_oGubun,
        btnMutilSort_OnClick,
        lfn_Cancel,
        lfn_End,
        lfn_Excel,
        lfn_Print,
        lfn_PrintScreen,
        lfn_Search,
    };
};