// @ts-nocheck
import { useState, useEffect } from 'react';

export interface Ids_ioExamJubsu {
    EJADDR1: string;
    EJADDR2: string;
    EJMGNO: string;
    EJPASSYN: string;
    EJPERSONNM: string;
    EJBIRTHDAY: string;
    EOEXAMDATE: string;
    EOHJUBSUNO: string;
    LADDR1: string;
    LADDR2: string;
    LCOMPNM: string;
    LDATAAPPROVAL: string;
    LHIIIMGSEQ: string;
    LHISSUEREASON: string;
    LHPROCGTMGNO: string;
    LHPRTDATE: string;
    LHPTEL: string;
    LISSUEDATE: string;
    LISSUEGUBUN: string;
    LLCSNO: string;
    LPERSONNM: string;
    LBIRTHDAY: string;
    LTCCOURSECD: string;
    LTEL: string;
    LTPMGNO: string;
    LTRAININGENDDATE: string;
    LTRAININGSTARTDATE: string;
    LZIPCD: string;
}

export interface Ids_oCourse {
    CD: string;
    DATA: string;
}

export interface Ids_oJibu {
    CD: string;
    DATA: string;
}

export interface Ids_ioExamInfo {
    PASS: string;
    NOEXAM: string;
    EOEXAMDATE: string;
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

export interface Ids_ioEjpassLicenseNotYetSunab {
}

export interface Ids_ioWorkGubun {
    CD: string;
    DATA: string;
}

export interface Ids_ioReport {
}

export interface Ids_ioReport2 {
}

export interface Ids_ioEjpassLicenseAlreadySunab {
}

export interface Ids_ioLicenseAlreadySunabNotRepay {
}

export interface Ids_ioExamPrint {
}

export interface Ids_ioRepayReport {
}

export interface Ids_oPrintReceiptMast {
}

export interface Ids_oPrintReceiptDtl {
}

export interface Ids_ioTrainingOrder {
    CD: string;
    DATA: string;
}

export const useFrmtraining0652MExamFailLicenseNotRepayList = () => {
    const [ds_ioExamJubsu, setds_ioExamJubsu] = useState<Ids_ioExamJubsu[]>([]);
    const [ds_oCourse, setds_oCourse] = useState<Ids_oCourse[]>([]);
    const [ds_oJibu, setds_oJibu] = useState<Ids_oJibu[]>([]);
    const [ds_ioExamInfo, setds_ioExamInfo] = useState<Ids_ioExamInfo[]>([]);
    const [ds_ioJubsuList, setds_ioJubsuList] = useState<Ids_ioJubsuList[]>([]);
    const [ds_ioEjpassLicenseNotYetSunab, setds_ioEjpassLicenseNotYetSunab] = useState<Ids_ioEjpassLicenseNotYetSunab[]>([]);
    const [ds_ioWorkGubun, setds_ioWorkGubun] = useState<Ids_ioWorkGubun[]>([]);
    const [ds_ioReport, setds_ioReport] = useState<Ids_ioReport[]>([]);
    const [ds_ioReport2, setds_ioReport2] = useState<Ids_ioReport2[]>([]);
    const [ds_ioEjpassLicenseAlreadySunab, setds_ioEjpassLicenseAlreadySunab] = useState<Ids_ioEjpassLicenseAlreadySunab[]>([]);
    const [ds_ioLicenseAlreadySunabNotRepay, setds_ioLicenseAlreadySunabNotRepay] = useState<Ids_ioLicenseAlreadySunabNotRepay[]>([]);
    const [ds_ioExamPrint, setds_ioExamPrint] = useState<Ids_ioExamPrint[]>([]);
    const [ds_ioRepayReport, setds_ioRepayReport] = useState<Ids_ioRepayReport[]>([]);
    const [ds_oPrintReceiptMast, setds_oPrintReceiptMast] = useState<Ids_oPrintReceiptMast[]>([]);
    const [ds_oPrintReceiptDtl, setds_oPrintReceiptDtl] = useState<Ids_oPrintReceiptDtl[]>([]);
    const [ds_ioTrainingOrder, setds_ioTrainingOrder] = useState<Ids_ioTrainingOrder[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_ioExamJubsu([]);
            setds_oCourse([]);
            setds_oJibu([]);
            setds_ioExamInfo([]);
            setds_ioJubsuList([]);
            setds_ioEjpassLicenseNotYetSunab([]);
            setds_ioWorkGubun([]);
            setds_ioReport([]);
            setds_ioReport2([]);
            setds_ioEjpassLicenseAlreadySunab([]);
            setds_ioLicenseAlreadySunabNotRepay([]);
            setds_ioExamPrint([]);
            setds_ioRepayReport([]);
            setds_oPrintReceiptMast([]);
            setds_oPrintReceiptDtl([]);
            setds_ioTrainingOrder([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnMutilSort_OnClick = () => {
        console.log('btnMutilSort_OnClick clicked');
    };
    const btnPrint_OnClick = () => {
        console.log('btnPrint_OnClick clicked');
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
    const lfn_Search = () => {
        console.log('lfn_Search clicked');
    };

    return {
        isLoading,
        ds_ioExamJubsu,
        ds_oCourse,
        ds_oJibu,
        ds_ioExamInfo,
        ds_ioJubsuList,
        ds_ioEjpassLicenseNotYetSunab,
        ds_ioWorkGubun,
        ds_ioReport,
        ds_ioReport2,
        ds_ioEjpassLicenseAlreadySunab,
        ds_ioLicenseAlreadySunabNotRepay,
        ds_ioExamPrint,
        ds_ioRepayReport,
        ds_oPrintReceiptMast,
        ds_oPrintReceiptDtl,
        ds_ioTrainingOrder,
        btnMutilSort_OnClick,
        btnPrint_OnClick,
        btnToExcel_OnClick,
        lfn_Cancel,
        lfn_End,
        lfn_PrintScreen,
        lfn_Search,
    };
};