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
    TJBIRTHDAY: string;
    TJROADNM: string;
    TJSIDO: string;
    TJZIPCD: string;
    TOENDDATE: string;
    TOJUBSUNO: string;
    TOMGNO: string;
    TOSTARTDATE: string;
    TOYEAR: string;
}

export interface Ids_oCourse {
    CD: string;
    DATA: string;
}

export interface Ids_oJibu {
    CD: string;
    DATA: string;
}

export interface Ids_oWorkGubun {
    CD: string;
    DATA: string;
}

export interface Ids_oPassGubun {
    CD: string;
    DATA: string;
}

export interface Ids_ioLicenseSusuList {
    TCCOURSENM: string;
    LLCSNO: string;
    LHPERSONNM: string;
    LHPRTDATE1: string;
    LHPRTDATE2: string;
    LHPROCGTMGNO1: string;
    BIRTHDAY: string;
    PROCDATE: string;
    PAYAMT: string;
    REPAYAMT: string;
    NAPBUGUBUN: string;
    LHISSUEREASON: string;
    LHISSUEGUBUN: string;
    PNM: string;
    LHPROCGTMGNO: string;
}

export interface Ids_ioLicenseSusuStatistics {
    PROCDATE: string;
    LHISSUEGUBUN: string;
    TCCOURSENM: string;
    LHPRTDATE1: string;
    LHPRTDATE2: string;
    LHPROCGTMGNO1: string;
    TOTCNT: string;
    TOTSUM: string;
    PAYCNT: string;
    PAYSUM: string;
    REPAYCNT: string;
    REPAYSUM: string;
    LHPROCGTMGNO: string;
}

export interface Ids_ioLicenseSusuDecision {
    PROCDATE: string;
    LHISSUEGUBUN: string;
    LHPRTDATE1: string;
    LHPRTDATE2: string;
    LHPROCGTMGNO1: string;
    TCCOURSENM: string;
    TOTMNY: string;
    NO11: string;
    NO12: string;
    NO13: string;
    NO21: string;
    NO22: string;
    NO23: string;
}

export interface Ids_oPrintGubun {
    CD: string;
    DATA: string;
}

export interface Ids_oSerchGubun {
    CD: string;
    DATA: string;
}

export interface Ids_LicenseGubun {
    CD: string;
    DATA: string;
}

export interface Ids_oLicenseYn {
    CD: string;
    DATA: string;
}

export const useFrmtraining0380MLicenseIssuePaymentStatistics = () => {
    const [ds_oTrainingJubsu, setds_oTrainingJubsu] = useState<Ids_oTrainingJubsu[]>([]);
    const [ds_oCourse, setds_oCourse] = useState<Ids_oCourse[]>([]);
    const [ds_oJibu, setds_oJibu] = useState<Ids_oJibu[]>([]);
    const [ds_oWorkGubun, setds_oWorkGubun] = useState<Ids_oWorkGubun[]>([]);
    const [ds_oPassGubun, setds_oPassGubun] = useState<Ids_oPassGubun[]>([]);
    const [ds_ioLicenseSusuList, setds_ioLicenseSusuList] = useState<Ids_ioLicenseSusuList[]>([]);
    const [ds_ioLicenseSusuStatistics, setds_ioLicenseSusuStatistics] = useState<Ids_ioLicenseSusuStatistics[]>([]);
    const [ds_ioLicenseSusuDecision, setds_ioLicenseSusuDecision] = useState<Ids_ioLicenseSusuDecision[]>([]);
    const [ds_oPrintGubun, setds_oPrintGubun] = useState<Ids_oPrintGubun[]>([]);
    const [ds_oSerchGubun, setds_oSerchGubun] = useState<Ids_oSerchGubun[]>([]);
    const [ds_LicenseGubun, setds_LicenseGubun] = useState<Ids_LicenseGubun[]>([]);
    const [ds_oLicenseYn, setds_oLicenseYn] = useState<Ids_oLicenseYn[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_oTrainingJubsu([]);
            setds_oCourse([]);
            setds_oJibu([]);
            setds_oWorkGubun([]);
            setds_oPassGubun([]);
            setds_ioLicenseSusuList([]);
            setds_ioLicenseSusuStatistics([]);
            setds_ioLicenseSusuDecision([]);
            setds_oPrintGubun([]);
            setds_oSerchGubun([]);
            setds_LicenseGubun([]);
            setds_oLicenseYn([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const lfn_Cancel = () => {
        console.log('lfn_Cancel clicked');
    };
    const lfn_End = () => {
        console.log('lfn_End clicked');
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
    const lfn_localExcel = () => {
        console.log('lfn_localExcel clicked');
    };

    return {
        isLoading,
        ds_oTrainingJubsu,
        ds_oCourse,
        ds_oJibu,
        ds_oWorkGubun,
        ds_oPassGubun,
        ds_ioLicenseSusuList,
        ds_ioLicenseSusuStatistics,
        ds_ioLicenseSusuDecision,
        ds_oPrintGubun,
        ds_oSerchGubun,
        ds_LicenseGubun,
        ds_oLicenseYn,
        lfn_Cancel,
        lfn_End,
        lfn_Print,
        lfn_PrintScreen,
        lfn_Search,
        lfn_localExcel,
    };
};