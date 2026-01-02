// @ts-nocheck
import { useState, useEffect } from 'react';

export interface Ids_oResdentNoGubun {
    CD: string;
    DATA: string;
}

export interface Ids_oCourse {
    CD: string;
    DATA: string;
}

export interface Ids_oJibu {
    CD: string;
    DATA: string;
}

export interface Ids_oSort {
    CD: string;
    DATA: string;
}

export interface Ids_oTrainingJubsurRegisterPrint {
    A1: string;
    AFTERGTDEPTNM: string;
    AFTERJUBSUNO: string;
    AFTERORDER: string;
    BIRTHDAY: string;
    NM: string;
    OLDGTDEPTNM: string;
    OLDJUBSUNO: string;
    OLDORDER: string;
    REMARK: string;
    TJADDR1: string;
    TJADDR2: string;
    TJLASTSUNAPGUBUN: string;
    TJPASSYN: string;
    PERSONKEY: string;
    TOHDECISIONSEATNO: string;
    TOHJUBSUNO: string;
    TOHLASTGUBUN: string;
    TOMGGTMGNO: string;
    TOTCCOURSECD: string;
    TOTRAININGORDER: string;
    TOYEAR: string;
    TRAINDATE: string;
    TJMGNO: string;
    TJLASTTOHSEQ: string;
    TOHSEATCHANGEYN: string;
    TJAMOUNTGUBUN: string;
}

export interface Ids_oTrainingOrderMgno {
}

export interface Ids_oTrainingJubsurRegisterPrintCopy {
    A1: string;
    AFTERGTDEPTNM: string;
    AFTERJUBSUNO: string;
    AFTERORDER: string;
    BIRTHDAY: string;
    NM: string;
    OLDGTDEPTNM: string;
    OLDJUBSUNO: string;
    OLDORDER: string;
    REMARK: string;
    TJADDR1: string;
    TJADDR2: string;
    TJLASTSUNAPGUBUN: string;
    TJPASSYN: string;
    PERSONKEY: string;
    TOHDECISIONSEATNO: string;
    TOHJUBSUNO: string;
    TOHLASTGUBUN: string;
    TOMGGTMGNO: string;
    TOTCCOURSECD: string;
    TOTRAININGORDER: string;
    TOYEAR: string;
    TRAINDATE: string;
    TJMGNO: string;
    TJLASTTOHSEQ: string;
    TOHSEATCHANGEYN: string;
}

export interface Ids_oTrainingJubsurRegisterTemp {
    TOHDECISIONSEATNO: string;
    TOHSEATCHANGEYN: string;
    TJMGNO: string;
    TJLASTTOHSEQ: string;
}

export interface Ids_oTrainingJubsurRegisterAll {
    SEATNO: string;
    TOHSEATCHANGEYN: string;
}

export interface Ids_oTrainingJubsurRegisterPersonList {
}

export const useFrmtraining0110STrainingJubsurRegisterPrint = () => {
    const [ds_oResdentNoGubun, setds_oResdentNoGubun] = useState<Ids_oResdentNoGubun[]>([]);
    const [ds_oCourse, setds_oCourse] = useState<Ids_oCourse[]>([]);
    const [ds_oJibu, setds_oJibu] = useState<Ids_oJibu[]>([]);
    const [ds_oSort, setds_oSort] = useState<Ids_oSort[]>([]);
    const [ds_oTrainingJubsurRegisterPrint, setds_oTrainingJubsurRegisterPrint] = useState<Ids_oTrainingJubsurRegisterPrint[]>([]);
    const [ds_oTrainingOrderMgno, setds_oTrainingOrderMgno] = useState<Ids_oTrainingOrderMgno[]>([]);
    const [ds_oTrainingJubsurRegisterPrintCopy, setds_oTrainingJubsurRegisterPrintCopy] = useState<Ids_oTrainingJubsurRegisterPrintCopy[]>([]);
    const [ds_oTrainingJubsurRegisterTemp, setds_oTrainingJubsurRegisterTemp] = useState<Ids_oTrainingJubsurRegisterTemp[]>([]);
    const [ds_oTrainingJubsurRegisterAll, setds_oTrainingJubsurRegisterAll] = useState<Ids_oTrainingJubsurRegisterAll[]>([]);
    const [ds_oTrainingJubsurRegisterPersonList, setds_oTrainingJubsurRegisterPersonList] = useState<Ids_oTrainingJubsurRegisterPersonList[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_oResdentNoGubun([]);
            setds_oCourse([]);
            setds_oJibu([]);
            setds_oSort([]);
            setds_oTrainingJubsurRegisterPrint([]);
            setds_oTrainingOrderMgno([]);
            setds_oTrainingJubsurRegisterPrintCopy([]);
            setds_oTrainingJubsurRegisterTemp([]);
            setds_oTrainingJubsurRegisterAll([]);
            setds_oTrainingJubsurRegisterPersonList([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnSeatNoAssignJubsu_OnClick = () => {
        console.log('btnSeatNoAssignJubsu_OnClick clicked');
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
    const lfn_SearchTrainingOrderMgno = () => {
        console.log('lfn_SearchTrainingOrderMgno clicked');
    };

    return {
        isLoading,
        ds_oResdentNoGubun,
        ds_oCourse,
        ds_oJibu,
        ds_oSort,
        ds_oTrainingJubsurRegisterPrint,
        ds_oTrainingOrderMgno,
        ds_oTrainingJubsurRegisterPrintCopy,
        ds_oTrainingJubsurRegisterTemp,
        ds_oTrainingJubsurRegisterAll,
        ds_oTrainingJubsurRegisterPersonList,
        btnSeatNoAssignJubsu_OnClick,
        lfn_Cancel,
        lfn_End,
        lfn_PrintScreen,
        lfn_Search,
        lfn_SearchTrainingOrderMgno,
    };
};