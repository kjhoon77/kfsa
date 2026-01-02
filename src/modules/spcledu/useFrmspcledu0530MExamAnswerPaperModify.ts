// @ts-nocheck
import { useState, useEffect } from 'react';

export interface Ids_ioExamAns {
    EJMGNO: string;
    EOHJUBSUNO: string;
    EOTCCOURSECD: string;
    TCCOURSENM: string;
    EOEXAMORDER: string;
    EJPERSONNM: string;
    APSEQ: string;
    APAPLEXAMNO: string;
    EREXAMROOM: string;
    APALPHATYPE: string;
    APNUMTYPE: string;
}

export interface Ids_oCourse {
    CD: string;
    DATA: string;
}

export interface Ids_oSearchGubun {
    CD: string;
    DATA: string;
}

export interface Ids_oExamOrder {
    EOMGNO: string;
    JJIBUNICK: string;
    EOYEAR: string;
    EOTCCOURSENM: string;
    EOEXAMORDER: string;
    EOEXAMDATE: string;
    EXAMNM: string;
}

export interface Ids_ioAnswerPaper {
    APCAITEMNO: string;
    APEXAMROOM: string;
    APAPLEXAMNO: string;
    APTCCOURSECD: string;
    APALPHATYPE: string;
    APANSWER: string;
}

export interface Ids_ioExamAnsCopy {
    APSEQ: string;
    EPCOURSECD: string;
    EPNUMTYPE: string;
    EPALPHATYPE: string;
    EJMGNO: string;
    EOHJUBSUNO: string;
    EREXAMROOM: string;
    SEL: string;
    TCCOURSENM: string;
    TPPERSONNM: string;
    CAITEMNO: string;
    APANSWER: string;
}

export interface Ids_oType {
    CD: string;
    DATA: string;
}

export interface Ids_oExamAnsCnt {
}

export interface Ids_oExamRepeat {
    CD: string;
    DATA: string;
}

export const useFrmspcledu0530MExamAnswerPaperModify = () => {
    const [ds_ioExamAns, setds_ioExamAns] = useState<Ids_ioExamAns[]>([]);
    const [ds_oCourse, setds_oCourse] = useState<Ids_oCourse[]>([]);
    const [ds_oSearchGubun, setds_oSearchGubun] = useState<Ids_oSearchGubun[]>([]);
    const [ds_oExamOrder, setds_oExamOrder] = useState<Ids_oExamOrder[]>([]);
    const [ds_ioAnswerPaper, setds_ioAnswerPaper] = useState<Ids_ioAnswerPaper[]>([]);
    const [ds_ioExamAnsCopy, setds_ioExamAnsCopy] = useState<Ids_ioExamAnsCopy[]>([]);
    const [ds_oType, setds_oType] = useState<Ids_oType[]>([]);
    const [ds_oExamAnsCnt, setds_oExamAnsCnt] = useState<Ids_oExamAnsCnt[]>([]);
    const [ds_oExamRepeat, setds_oExamRepeat] = useState<Ids_oExamRepeat[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_ioExamAns([]);
            setds_oCourse([]);
            setds_oSearchGubun([]);
            setds_oExamOrder([]);
            setds_ioAnswerPaper([]);
            setds_ioExamAnsCopy([]);
            setds_oType([]);
            setds_oExamAnsCnt([]);
            setds_oExamRepeat([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnMutilSort_OnClick = () => {
        console.log('btnMutilSort_OnClick clicked');
    };
    const btnNext_OnClick = () => {
        console.log('btnNext_OnClick clicked');
    };
    const btnSearchExamPlace_OnClick = () => {
        console.log('btnSearchExamPlace_OnClick clicked');
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
        ds_ioExamAns,
        ds_oCourse,
        ds_oSearchGubun,
        ds_oExamOrder,
        ds_ioAnswerPaper,
        ds_ioExamAnsCopy,
        ds_oType,
        ds_oExamAnsCnt,
        ds_oExamRepeat,
        btnMutilSort_OnClick,
        btnNext_OnClick,
        btnSearchExamPlace_OnClick,
        lfn_Cancel,
        lfn_End,
        lfn_Excel,
        lfn_PrintScreen,
        lfn_Save,
        lfn_Search,
    };
};