// @ts-nocheck
import { useState, useEffect } from 'react';

export interface Ids_oCourse {
    CD: string;
    DATA: string;
}

export interface Ids_ioEvaluationAnswerInput {
    TOMGNO: string;
    TJMGNO: string;
    GTDEPTNM: string;
    TOTCCOURSECD: string;
    TCCOURSENM: string;
    TOTRAININGORDER: string;
    TOHJUBSUNO: string;
    TJPERSONNM: string;
    BIRTHDAY: string;
}

export interface Ids_oJibu {
    CD: string;
    DATA: string;
}

export interface Ids_oSort {
    CD: string;
    DATA: string;
}

export interface Ids_oSunab {
    CD: string;
    DATA: string;
}

export interface Ids_ioExcel {
    EAPTOMGNO: string;
    EAPTCCOURSECD: string;
    EAPEVALGUBUN: string;
    EAPJUBSUNONAME: string;
    EAPITEMNO1: string;
    EAPANSWER1: string;
    EAPITEMNO2: string;
    EAPANSWER2: string;
    EAPITEMNO3: string;
    EAPANSWER3: string;
    EAPITEMNO4: string;
    EAPANSWER4: string;
    EAPITEMNO5: string;
    EAPANSWER5: string;
    EAPITEMNO6: string;
    EAPANSWER6: string;
    EAPITEMNO7: string;
    EAPANSWER7: string;
    EAPITEMNO8: string;
    EAPANSWER8: string;
    EAPITEMNO9: string;
    EAPANSWER9: string;
    EAPITEMNO10: string;
    EAPANSWER10: string;
    EAPITEMNO11: string;
    EAPANSWER11: string;
    EAPITEMNO12: string;
    EAPANSWER12: string;
    EAPITEMNO13: string;
    EAPANSWER13: string;
    EAPITEMNO14: string;
    EAPANSWER14: string;
    EAPITEMNO15: string;
    EAPANSWER15: string;
    EAPITEMNO16: string;
    EAPANSWER16: string;
    EAPITEMNO17: string;
    EAPANSWER17: string;
    EAPITEMNO18: string;
    EAPANSWER18: string;
    EAPITEMNO19: string;
    EAPANSWER19: string;
    EAPITEMNO20: string;
    EAPANSWER20: string;
    EAPITEMNO21: string;
    EAPANSWER21: string;
    EAPITEMNO22: string;
    EAPANSWER22: string;
    EAPITEMNO23: string;
    EAPANSWER23: string;
    EAPITEMNO24: string;
    EAPANSWER24: string;
    EAPITEMNO25: string;
    EAPANSWER25: string;
    EAPITEMNO26: string;
    EAPANSWER26: string;
    EAPITEMNO27: string;
    EAPANSWER27: string;
    EAPITEMNO28: string;
    EAPANSWER28: string;
    EAPITEMNO29: string;
    EAPANSWER29: string;
    EAPITEMNO30: string;
    EAPANSWER30: string;
    EAPITEMNO31: string;
    EAPANSWER31: string;
    EAPITEMNO32: string;
    EAPANSWER32: string;
    EAPITEMNO33: string;
    EAPANSWER33: string;
    EAPITEMNO34: string;
    EAPANSWER34: string;
    EAPITEMNO35: string;
    EAPANSWER35: string;
    EAPITEMNO36: string;
    EAPANSWER36: string;
    EAPITEMNO37: string;
    EAPANSWER37: string;
    EAPITEMNO38: string;
    EAPANSWER38: string;
    EAPITEMNO39: string;
    EAPANSWER39: string;
    EAPITEMNO40: string;
    EAPANSWER40: string;
    EAPITEMNO41: string;
    EAPANSWER41: string;
    EAPITEMNO42: string;
    EAPANSWER42: string;
    EAPITEMNO43: string;
    EAPANSWER43: string;
    EAPITEMNO44: string;
    EAPANSWER44: string;
    EAPITEMNO45: string;
    EAPANSWER45: string;
    EAPITEMNO46: string;
    EAPANSWER46: string;
    EAPITEMNO47: string;
    EAPANSWER47: string;
    EAPITEMNO48: string;
    EAPANSWER48: string;
    EAPITEMNO49: string;
    EAPANSWER49: string;
    EAPITEMNO50: string;
    EAPANSWER50: string;
}

export interface Ids_ioExcelCopy {
    EAPTOMGNO: string;
    EAPTCCOURSECD: string;
    EAPEVALGUBUN: string;
    EAPJUBSUNONAME: string;
    EAPITEMNO1: string;
    EAPANSWER1: string;
    EAPITEMNO2: string;
    EAPANSWER2: string;
    EAPITEMNO3: string;
    EAPANSWER3: string;
    EAPITEMNO4: string;
    EAPANSWER4: string;
    EAPITEMNO5: string;
    EAPANSWER5: string;
    EAPITEMNO6: string;
    EAPANSWER6: string;
    EAPITEMNO7: string;
    EAPANSWER7: string;
    EAPITEMNO8: string;
    EAPANSWER8: string;
    EAPITEMNO9: string;
    EAPANSWER9: string;
    EAPITEMNO10: string;
    EAPANSWER10: string;
    EAPITEMNO11: string;
    EAPANSWER11: string;
    EAPITEMNO12: string;
    EAPANSWER12: string;
    EAPITEMNO13: string;
    EAPANSWER13: string;
    EAPITEMNO14: string;
    EAPANSWER14: string;
    EAPITEMNO15: string;
    EAPANSWER15: string;
    EAPITEMNO16: string;
    EAPANSWER16: string;
    EAPITEMNO17: string;
    EAPANSWER17: string;
    EAPITEMNO18: string;
    EAPANSWER18: string;
    EAPITEMNO19: string;
    EAPANSWER19: string;
    EAPITEMNO20: string;
    EAPANSWER20: string;
    EAPITEMNO21: string;
    EAPANSWER21: string;
    EAPITEMNO22: string;
    EAPANSWER22: string;
    EAPITEMNO23: string;
    EAPANSWER23: string;
    EAPITEMNO24: string;
    EAPANSWER24: string;
    EAPITEMNO25: string;
    EAPANSWER25: string;
    EAPITEMNO26: string;
    EAPANSWER26: string;
    EAPITEMNO27: string;
    EAPANSWER27: string;
    EAPITEMNO28: string;
    EAPANSWER28: string;
    EAPITEMNO29: string;
    EAPANSWER29: string;
    EAPITEMNO30: string;
    EAPANSWER30: string;
    EAPITEMNO31: string;
    EAPANSWER31: string;
    EAPITEMNO32: string;
    EAPANSWER32: string;
    EAPITEMNO33: string;
    EAPANSWER33: string;
    EAPITEMNO34: string;
    EAPANSWER34: string;
    EAPITEMNO35: string;
    EAPANSWER35: string;
    EAPITEMNO36: string;
    EAPANSWER36: string;
    EAPITEMNO37: string;
    EAPANSWER37: string;
    EAPITEMNO38: string;
    EAPANSWER38: string;
    EAPITEMNO39: string;
    EAPANSWER39: string;
    EAPITEMNO40: string;
    EAPANSWER40: string;
    EAPITEMNO41: string;
    EAPANSWER41: string;
    EAPITEMNO42: string;
    EAPANSWER42: string;
    EAPITEMNO43: string;
    EAPANSWER43: string;
    EAPITEMNO44: string;
    EAPANSWER44: string;
    EAPITEMNO45: string;
    EAPANSWER45: string;
    EAPITEMNO46: string;
    EAPANSWER46: string;
    EAPITEMNO47: string;
    EAPANSWER47: string;
    EAPITEMNO48: string;
    EAPANSWER48: string;
    EAPITEMNO49: string;
    EAPANSWER49: string;
    EAPITEMNO50: string;
    EAPANSWER50: string;
}

export interface Ids_ioExamResult {
    EREJMGNO: string;
    ERSEQ: string;
    ERREPEATNO: string;
    ERAPLEXAMNO: string;
    ERPASSYN: string;
    ERPASSDATE: string;
    ERRANK: string;
    EJPASSYN: string;
    ERSCORE: string;
    ER2SCORE: string;
}

export interface Ids_oEvalGubun {
    CD: string;
    DATA: string;
}

export interface Ids_oAnswerPaper {
}

export interface Ids_iAnswerPaper {
    EAPTOMGNO: string;
    EAPTCCOURSECD: string;
    EAPJUBSUNONAME: string;
    EAPSUBJECTCD: string;
    EAPITEMNO: string;
    EAPANSWER: string;
    EAPANSWERYN: string;
    EAPITEMSCORE: string;
    EAPEVALGUBUN: string;
}

export interface Ids_oCorrectAnswer {
}

export interface Ids_ioNewExcel {
    EAPTOMGNO: string;
    EAPTCCOURSECD: string;
    EAPEVALGUBUN: string;
    EAPJUBSUNONAME: string;
    EAPANSWER1: string;
    EAPANSWER2: string;
    EAPANSWER3: string;
    EAPANSWER4: string;
    EAPANSWER5: string;
    EAPANSWER6: string;
    EAPANSWER7: string;
    EAPANSWER8: string;
    EAPANSWER9: string;
    EAPANSWER10: string;
    EAPANSWER11: string;
    EAPANSWER12: string;
    EAPANSWER13: string;
    EAPANSWER14: string;
    EAPANSWER15: string;
    EAPANSWER16: string;
    EAPANSWER17: string;
    EAPANSWER18: string;
    EAPANSWER19: string;
    EAPANSWER20: string;
    EAPANSWER21: string;
    EAPANSWER22: string;
    EAPANSWER23: string;
    EAPANSWER24: string;
    EAPANSWER25: string;
    EAPANSWER26: string;
    EAPANSWER27: string;
    EAPANSWER28: string;
    EAPANSWER29: string;
    EAPANSWER30: string;
    EAPANSWER31: string;
    EAPANSWER32: string;
    EAPANSWER33: string;
    EAPANSWER34: string;
    EAPANSWER35: string;
    EAPANSWER36: string;
    EAPANSWER37: string;
    EAPANSWER38: string;
    EAPANSWER39: string;
    EAPANSWER40: string;
    EAPANSWER41: string;
    EAPANSWER42: string;
    EAPANSWER43: string;
    EAPANSWER44: string;
    EAPANSWER45: string;
    EAPANSWER46: string;
    EAPANSWER47: string;
    EAPANSWER48: string;
    EAPANSWER49: string;
    EAPANSWER50: string;
}

export interface Ids_ioNewExcelCopy {
    EAPTOMGNO: string;
    EAPTCCOURSECD: string;
    EAPEVALGUBUN: string;
    EAPJUBSUNONAME: string;
    EAPITEMNO1: string;
    EAPANSWER1: string;
    EAPITEMNO2: string;
    EAPANSWER2: string;
    EAPITEMNO3: string;
    EAPANSWER3: string;
    EAPITEMNO4: string;
    EAPANSWER4: string;
    EAPITEMNO5: string;
    EAPANSWER5: string;
    EAPITEMNO6: string;
    EAPANSWER6: string;
    EAPITEMNO7: string;
    EAPANSWER7: string;
    EAPITEMNO8: string;
    EAPANSWER8: string;
    EAPITEMNO9: string;
    EAPANSWER9: string;
    EAPITEMNO10: string;
    EAPANSWER10: string;
    EAPITEMNO11: string;
    EAPANSWER11: string;
    EAPITEMNO12: string;
    EAPANSWER12: string;
    EAPITEMNO13: string;
    EAPANSWER13: string;
    EAPITEMNO14: string;
    EAPANSWER14: string;
    EAPITEMNO15: string;
    EAPANSWER15: string;
    EAPITEMNO16: string;
    EAPANSWER16: string;
    EAPITEMNO17: string;
    EAPANSWER17: string;
    EAPITEMNO18: string;
    EAPANSWER18: string;
    EAPITEMNO19: string;
    EAPANSWER19: string;
    EAPITEMNO20: string;
    EAPANSWER20: string;
    EAPITEMNO21: string;
    EAPANSWER21: string;
    EAPITEMNO22: string;
    EAPANSWER22: string;
    EAPITEMNO23: string;
    EAPANSWER23: string;
    EAPITEMNO24: string;
    EAPANSWER24: string;
    EAPITEMNO25: string;
    EAPANSWER25: string;
    EAPITEMNO26: string;
    EAPANSWER26: string;
    EAPITEMNO27: string;
    EAPANSWER27: string;
    EAPITEMNO28: string;
    EAPANSWER28: string;
    EAPITEMNO29: string;
    EAPANSWER29: string;
    EAPITEMNO30: string;
    EAPANSWER30: string;
    EAPITEMNO31: string;
    EAPANSWER31: string;
    EAPITEMNO32: string;
    EAPANSWER32: string;
    EAPITEMNO33: string;
    EAPANSWER33: string;
    EAPITEMNO34: string;
    EAPANSWER34: string;
    EAPITEMNO35: string;
    EAPANSWER35: string;
    EAPITEMNO36: string;
    EAPANSWER36: string;
    EAPITEMNO37: string;
    EAPANSWER37: string;
    EAPITEMNO38: string;
    EAPANSWER38: string;
    EAPITEMNO39: string;
    EAPANSWER39: string;
    EAPITEMNO40: string;
    EAPANSWER40: string;
    EAPITEMNO41: string;
    EAPANSWER41: string;
    EAPITEMNO42: string;
    EAPANSWER42: string;
    EAPITEMNO43: string;
    EAPANSWER43: string;
    EAPITEMNO44: string;
    EAPANSWER44: string;
    EAPITEMNO45: string;
    EAPANSWER45: string;
    EAPITEMNO46: string;
    EAPANSWER46: string;
    EAPITEMNO47: string;
    EAPANSWER47: string;
    EAPITEMNO48: string;
    EAPANSWER48: string;
    EAPITEMNO49: string;
    EAPANSWER49: string;
    EAPITEMNO50: string;
    EAPANSWER50: string;
}

export const useFrmtraining0144MTrainingEvaluationAnswerInput = () => {
    const [ds_oCourse, setds_oCourse] = useState<Ids_oCourse[]>([]);
    const [ds_ioEvaluationAnswerInput, setds_ioEvaluationAnswerInput] = useState<Ids_ioEvaluationAnswerInput[]>([]);
    const [ds_oJibu, setds_oJibu] = useState<Ids_oJibu[]>([]);
    const [ds_oSort, setds_oSort] = useState<Ids_oSort[]>([]);
    const [ds_oSunab, setds_oSunab] = useState<Ids_oSunab[]>([]);
    const [ds_ioExcel, setds_ioExcel] = useState<Ids_ioExcel[]>([]);
    const [ds_ioExcelCopy, setds_ioExcelCopy] = useState<Ids_ioExcelCopy[]>([]);
    const [ds_ioExamResult, setds_ioExamResult] = useState<Ids_ioExamResult[]>([]);
    const [ds_oEvalGubun, setds_oEvalGubun] = useState<Ids_oEvalGubun[]>([]);
    const [ds_oAnswerPaper, setds_oAnswerPaper] = useState<Ids_oAnswerPaper[]>([]);
    const [ds_iAnswerPaper, setds_iAnswerPaper] = useState<Ids_iAnswerPaper[]>([]);
    const [ds_oCorrectAnswer, setds_oCorrectAnswer] = useState<Ids_oCorrectAnswer[]>([]);
    const [ds_ioNewExcel, setds_ioNewExcel] = useState<Ids_ioNewExcel[]>([]);
    const [ds_ioNewExcelCopy, setds_ioNewExcelCopy] = useState<Ids_ioNewExcelCopy[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_oCourse([]);
            setds_ioEvaluationAnswerInput([]);
            setds_oJibu([]);
            setds_oSort([]);
            setds_oSunab([]);
            setds_ioExcel([]);
            setds_ioExcelCopy([]);
            setds_ioExamResult([]);
            setds_oEvalGubun([]);
            setds_oAnswerPaper([]);
            setds_iAnswerPaper([]);
            setds_oCorrectAnswer([]);
            setds_ioNewExcel([]);
            setds_ioNewExcelCopy([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnMarking_OnClick = () => {
        console.log('btnMarking_OnClick clicked');
    };
    const btnMutilSort_OnClick = () => {
        console.log('btnMutilSort_OnClick clicked');
    };
    const lfn_Delete = () => {
        console.log('lfn_Delete clicked');
    };
    const lfn_End = () => {
        console.log('lfn_End clicked');
    };
    const lfn_Init = () => {
        console.log('lfn_Init clicked');
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
    const lfn_localExcel = () => {
        console.log('lfn_localExcel clicked');
    };

    return {
        isLoading,
        ds_oCourse,
        ds_ioEvaluationAnswerInput,
        ds_oJibu,
        ds_oSort,
        ds_oSunab,
        ds_ioExcel,
        ds_ioExcelCopy,
        ds_ioExamResult,
        ds_oEvalGubun,
        ds_oAnswerPaper,
        ds_iAnswerPaper,
        ds_oCorrectAnswer,
        ds_ioNewExcel,
        ds_ioNewExcelCopy,
        btnMarking_OnClick,
        btnMutilSort_OnClick,
        lfn_Delete,
        lfn_End,
        lfn_Init,
        lfn_PrintScreen,
        lfn_Save,
        lfn_Search,
        lfn_localExcel,
    };
};