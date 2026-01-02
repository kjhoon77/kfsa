// @ts-nocheck
import { useState, useEffect } from 'react';

export interface Ids_ioExamPass {
    CCCD: string;
    CCCDNM: string;
    CCGROUPCD: string;
    CCORDERSEQ: string;
    CCREMARK: string;
    USE_YN: string;
}

export interface Ids_oCourse {
    CD: string;
    DATA: string;
}

export interface Ids_oJibu {
    CD: string;
    DATA: string;
}

export interface Ids_oExamCount {
    JUBSU: string;
    PASS: string;
    FAIL: string;
    NOEXAM: string;
}

export interface Ids_oExamPass {
    EJMGNO: string;
    EJPERSONNM: string;
    EJBIRTHDAY: string;
    ERSCORE: string;
    EJADDR1: string;
    EJADDR2: string;
    EJTPMGNO: string;
}

export interface Ids_oLicense {
    LLCSNO: string;
    LTPMGNO: string;
    LSTATUSGUBUN: string;
    LISSUEGUBUN: string;
    LDATAAPPROVAL: string;
    LTCCOURSECD: string;
    LISSUEDATE: string;
    LPERSONNM: string;
    LBIRTHDAY: string;
    LZIPCD: string;
    LADDR1: string;
    LADDR2: string;
    LSIDO: string;
    LKU: string;
    LDONG: string;
    LBUNJI: string;
    LTEL: string;
    LHPTEL: string;
    LCOMPNM: string;
    LTRAININGSTARTDATE: string;
    LTRAININGENDDATE: string;
}

export interface Ids_oLicenseSeq {
    LLCSNO: string;
}

export interface Ids_oBarCodeSeq {
    LBARCODE_MAX: string;
}

export interface Ids_ioJubsuList {
    EJPASSYN: string;
    EJMGNO: string;
    EJPERSONNM: string;
    EJBIRTHDAY: string;
    EJADDR1: string;
    EJADDR2: string;
    EOHJUBSUNO: string;
}

export const useFrmtraining0640MExamLicenseNoCreateAfterOMR = () => {
    const [ds_ioExamPass, setds_ioExamPass] = useState<Ids_ioExamPass[]>([]);
    const [ds_oCourse, setds_oCourse] = useState<Ids_oCourse[]>([]);
    const [ds_oJibu, setds_oJibu] = useState<Ids_oJibu[]>([]);
    const [ds_oExamCount, setds_oExamCount] = useState<Ids_oExamCount[]>([]);
    const [ds_oExamPass, setds_oExamPass] = useState<Ids_oExamPass[]>([]);
    const [ds_oLicense, setds_oLicense] = useState<Ids_oLicense[]>([]);
    const [ds_oLicenseSeq, setds_oLicenseSeq] = useState<Ids_oLicenseSeq[]>([]);
    const [ds_oBarCodeSeq, setds_oBarCodeSeq] = useState<Ids_oBarCodeSeq[]>([]);
    const [ds_ioJubsuList, setds_ioJubsuList] = useState<Ids_ioJubsuList[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_ioExamPass([]);
            setds_oCourse([]);
            setds_oJibu([]);
            setds_oExamCount([]);
            setds_oExamPass([]);
            setds_oLicense([]);
            setds_oLicenseSeq([]);
            setds_oBarCodeSeq([]);
            setds_ioJubsuList([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnMutilSort_OnClick = () => {
        console.log('btnMutilSort_OnClick clicked');
    };
    const btnToExcel_OnClick = () => {
        console.log('btnToExcel_OnClick clicked');
    };
    const lfn_Cancel = () => {
        console.log('lfn_Cancel clicked');
    };
    const lfn_End = () => {
        console.log('lfn_End clicked');
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
        ds_ioExamPass,
        ds_oCourse,
        ds_oJibu,
        ds_oExamCount,
        ds_oExamPass,
        ds_oLicense,
        ds_oLicenseSeq,
        ds_oBarCodeSeq,
        ds_ioJubsuList,
        btnMutilSort_OnClick,
        btnToExcel_OnClick,
        lfn_Cancel,
        lfn_End,
        lfn_PrintScreen,
        lfn_Save,
        lfn_Search,
    };
};