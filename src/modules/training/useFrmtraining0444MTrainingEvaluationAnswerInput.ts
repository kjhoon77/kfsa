// @ts-nocheck
import { useState, useEffect } from 'react';

export interface Ids_oCourse {
    CD: string;
    DATA: string;
}

export interface Ids_ioEvaluationAnswerInput {
    EOMGNO: string;
    EJMGNO: string;
    GTDEPTNM: string;
    EOTCCOURSECD: string;
    TCCOURSENM: string;
    EOEXAMORDER: string;
    EOHJUBSUNO: string;
    EJPERSONNM: string;
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
    EEAPEOMGNO: string;
    EEAPTCCOURSECD: string;
    EEAPEVALGUBUN: string;
    EEAPJUBSUNONAME: string;
    EEAPITEMNO1: string;
    EEAPANSWER1: string;
    EEAPITEMNO2: string;
    EEAPANSWER2: string;
    EEAPITEMNO3: string;
    EEAPANSWER3: string;
    EEAPITEMNO4: string;
    EEAPANSWER4: string;
    EEAPITEMNO5: string;
    EEAPANSWER5: string;
    EEAPITEMNO6: string;
    EEAPANSWER6: string;
    EEAPITEMNO7: string;
    EEAPANSWER7: string;
    EEAPITEMNO8: string;
    EEAPANSWER8: string;
    EEAPITEMNO9: string;
    EEAPANSWER9: string;
    EEAPITEMNO10: string;
    EEAPANSWER10: string;
    EEAPITEMNO11: string;
    EEAPANSWER11: string;
    EEAPITEMNO12: string;
    EEAPANSWER12: string;
    EEAPITEMNO13: string;
    EEAPANSWER13: string;
    EEAPITEMNO14: string;
    EEAPANSWER14: string;
    EEAPITEMNO15: string;
    EEAPANSWER15: string;
    EEAPITEMNO16: string;
    EEAPANSWER16: string;
    EEAPITEMNO17: string;
    EEAPANSWER17: string;
    EEAPITEMNO18: string;
    EEAPANSWER18: string;
    EEAPITEMNO19: string;
    EEAPANSWER19: string;
    EEAPITEMNO20: string;
    EEAPANSWER20: string;
    EEAPITEMNO21: string;
    EEAPANSWER21: string;
    EEAPITEMNO22: string;
    EEAPANSWER22: string;
    EEAPITEMNO23: string;
    EEAPANSWER23: string;
    EEAPITEMNO24: string;
    EEAPANSWER24: string;
    EEAPITEMNO25: string;
    EEAPANSWER25: string;
    EEAPITEMNO26: string;
    EEAPANSWER26: string;
    EEAPITEMNO27: string;
    EEAPANSWER27: string;
    EEAPITEMNO28: string;
    EEAPANSWER28: string;
    EEAPITEMNO29: string;
    EEAPANSWER29: string;
    EEAPITEMNO30: string;
    EEAPANSWER30: string;
    EEAPITEMNO31: string;
    EEAPANSWER31: string;
    EEAPITEMNO32: string;
    EEAPANSWER32: string;
    EEAPITEMNO33: string;
    EEAPANSWER33: string;
    EEAPITEMNO34: string;
    EEAPANSWER34: string;
    EEAPITEMNO35: string;
    EEAPANSWER35: string;
    EEAPITEMNO36: string;
    EEAPANSWER36: string;
    EEAPITEMNO37: string;
    EEAPANSWER37: string;
    EEAPITEMNO38: string;
    EEAPANSWER38: string;
    EEAPITEMNO39: string;
    EEAPANSWER39: string;
    EEAPITEMNO40: string;
    EEAPANSWER40: string;
    EEAPITEMNO41: string;
    EEAPANSWER41: string;
    EEAPITEMNO42: string;
    EEAPANSWER42: string;
    EEAPITEMNO43: string;
    EEAPANSWER43: string;
    EEAPITEMNO44: string;
    EEAPANSWER44: string;
    EEAPITEMNO45: string;
    EEAPANSWER45: string;
    EEAPITEMNO46: string;
    EEAPANSWER46: string;
    EEAPITEMNO47: string;
    EEAPANSWER47: string;
    EEAPITEMNO48: string;
    EEAPANSWER48: string;
    EEAPITEMNO49: string;
    EEAPANSWER49: string;
    EEAPITEMNO50: string;
    EEAPANSWER50: string;
}

export interface Ids_ioExcelCopy {
    EEAPEOMGNO: string;
    EEAPTCCOURSECD: string;
    EEAPEVALGUBUN: string;
    EEAPJUBSUNONAME: string;
    EEAPITEMNO1: string;
    EEAPANSWER1: string;
    EEAPITEMNO2: string;
    EEAPANSWER2: string;
    EEAPITEMNO3: string;
    EEAPANSWER3: string;
    EEAPITEMNO4: string;
    EEAPANSWER4: string;
    EEAPITEMNO5: string;
    EEAPANSWER5: string;
    EEAPITEMNO6: string;
    EEAPANSWER6: string;
    EEAPITEMNO7: string;
    EEAPANSWER7: string;
    EEAPITEMNO8: string;
    EEAPANSWER8: string;
    EEAPITEMNO9: string;
    EEAPANSWER9: string;
    EEAPITEMNO10: string;
    EEAPANSWER10: string;
    EEAPITEMNO11: string;
    EEAPANSWER11: string;
    EEAPITEMNO12: string;
    EEAPANSWER12: string;
    EEAPITEMNO13: string;
    EEAPANSWER13: string;
    EEAPITEMNO14: string;
    EEAPANSWER14: string;
    EEAPITEMNO15: string;
    EEAPANSWER15: string;
    EEAPITEMNO16: string;
    EEAPANSWER16: string;
    EEAPITEMNO17: string;
    EEAPANSWER17: string;
    EEAPITEMNO18: string;
    EEAPANSWER18: string;
    EEAPITEMNO19: string;
    EEAPANSWER19: string;
    EEAPITEMNO20: string;
    EEAPANSWER20: string;
    EEAPITEMNO21: string;
    EEAPANSWER21: string;
    EEAPITEMNO22: string;
    EEAPANSWER22: string;
    EEAPITEMNO23: string;
    EEAPANSWER23: string;
    EEAPITEMNO24: string;
    EEAPANSWER24: string;
    EEAPITEMNO25: string;
    EEAPANSWER25: string;
    EEAPITEMNO26: string;
    EEAPANSWER26: string;
    EEAPITEMNO27: string;
    EEAPANSWER27: string;
    EEAPITEMNO28: string;
    EEAPANSWER28: string;
    EEAPITEMNO29: string;
    EEAPANSWER29: string;
    EEAPITEMNO30: string;
    EEAPANSWER30: string;
    EEAPITEMNO31: string;
    EEAPANSWER31: string;
    EEAPITEMNO32: string;
    EEAPANSWER32: string;
    EEAPITEMNO33: string;
    EEAPANSWER33: string;
    EEAPITEMNO34: string;
    EEAPANSWER34: string;
    EEAPITEMNO35: string;
    EEAPANSWER35: string;
    EEAPITEMNO36: string;
    EEAPANSWER36: string;
    EEAPITEMNO37: string;
    EEAPANSWER37: string;
    EEAPITEMNO38: string;
    EEAPANSWER38: string;
    EEAPITEMNO39: string;
    EEAPANSWER39: string;
    EEAPITEMNO40: string;
    EEAPANSWER40: string;
    EEAPITEMNO41: string;
    EEAPANSWER41: string;
    EEAPITEMNO42: string;
    EEAPANSWER42: string;
    EEAPITEMNO43: string;
    EEAPANSWER43: string;
    EEAPITEMNO44: string;
    EEAPANSWER44: string;
    EEAPITEMNO45: string;
    EEAPANSWER45: string;
    EEAPITEMNO46: string;
    EEAPANSWER46: string;
    EEAPITEMNO47: string;
    EEAPANSWER47: string;
    EEAPITEMNO48: string;
    EEAPANSWER48: string;
    EEAPITEMNO49: string;
    EEAPANSWER49: string;
    EEAPITEMNO50: string;
    EEAPANSWER50: string;
}

export interface Ids_ioExamResult {
    EEREJMGNO: string;
    EERSEQ: string;
    EERREPEATNO: string;
    EERAPLEXAMNO: string;
    EERPASSYN: string;
    EERPASSDATE: string;
    EERRANK: string;
    EJPASSYN: string;
    EERSCORE: string;
    EER2SCORE: string;
}

export interface Ids_oEvalGubun {
    CD: string;
    DATA: string;
}

export interface Ids_oAnswerPaper {
}

export interface Ids_iAnswerPaper {
    EEAPEOMGNO: string;
    EEAPTCCOURSECD: string;
    EEAPJUBSUNONAME: string;
    EEAPSUBJECTCD: string;
    EEAPITEMNO: string;
    EEAPANSWER: string;
    EEAPANSWERYN: string;
    EEAPITEMSCORE: string;
    EEAPEVALGUBUN: string;
}

export interface Ids_oCorrectAnswer {
}

export interface Ids_ioNewExcel {
    EEAPEOMGNO: string;
    EEAPTCCOURSECD: string;
    EEAPEVALGUBUN: string;
    EEAPJUBSUNONAME: string;
    EEAPANSWER1: string;
    EEAPANSWER2: string;
    EEAPANSWER3: string;
    EEAPANSWER4: string;
    EEAPANSWER5: string;
    EEAPANSWER6: string;
    EEAPANSWER7: string;
    EEAPANSWER8: string;
    EEAPANSWER9: string;
    EEAPANSWER10: string;
    EEAPANSWER11: string;
    EEAPANSWER12: string;
    EEAPANSWER13: string;
    EEAPANSWER14: string;
    EEAPANSWER15: string;
    EEAPANSWER16: string;
    EEAPANSWER17: string;
    EEAPANSWER18: string;
    EEAPANSWER19: string;
    EEAPANSWER20: string;
    EEAPANSWER21: string;
    EEAPANSWER22: string;
    EEAPANSWER23: string;
    EEAPANSWER24: string;
    EEAPANSWER25: string;
    EEAPANSWER26: string;
    EEAPANSWER27: string;
    EEAPANSWER28: string;
    EEAPANSWER29: string;
    EEAPANSWER30: string;
    EEAPANSWER31: string;
    EEAPANSWER32: string;
    EEAPANSWER33: string;
    EEAPANSWER34: string;
    EEAPANSWER35: string;
    EEAPANSWER36: string;
    EEAPANSWER37: string;
    EEAPANSWER38: string;
    EEAPANSWER39: string;
    EEAPANSWER40: string;
    EEAPANSWER41: string;
    EEAPANSWER42: string;
    EEAPANSWER43: string;
    EEAPANSWER44: string;
    EEAPANSWER45: string;
    EEAPANSWER46: string;
    EEAPANSWER47: string;
    EEAPANSWER48: string;
    EEAPANSWER49: string;
    EEAPANSWER50: string;
}

export interface Ids_ioNewExcelCopy {
    EEAPEOMGNO: string;
    EEAPTCCOURSECD: string;
    EEAPEVALGUBUN: string;
    EEAPJUBSUNONAME: string;
    EEAPITEMNO1: string;
    EEAPANSWER1: string;
    EEAPITEMNO2: string;
    EEAPANSWER2: string;
    EEAPITEMNO3: string;
    EEAPANSWER3: string;
    EEAPITEMNO4: string;
    EEAPANSWER4: string;
    EEAPITEMNO5: string;
    EEAPANSWER5: string;
    EEAPITEMNO6: string;
    EEAPANSWER6: string;
    EEAPITEMNO7: string;
    EEAPANSWER7: string;
    EEAPITEMNO8: string;
    EEAPANSWER8: string;
    EEAPITEMNO9: string;
    EEAPANSWER9: string;
    EEAPITEMNO10: string;
    EEAPANSWER10: string;
    EEAPITEMNO11: string;
    EEAPANSWER11: string;
    EEAPITEMNO12: string;
    EEAPANSWER12: string;
    EEAPITEMNO13: string;
    EEAPANSWER13: string;
    EEAPITEMNO14: string;
    EEAPANSWER14: string;
    EEAPITEMNO15: string;
    EEAPANSWER15: string;
    EEAPITEMNO16: string;
    EEAPANSWER16: string;
    EEAPITEMNO17: string;
    EEAPANSWER17: string;
    EEAPITEMNO18: string;
    EEAPANSWER18: string;
    EEAPITEMNO19: string;
    EEAPANSWER19: string;
    EEAPITEMNO20: string;
    EEAPANSWER20: string;
    EEAPITEMNO21: string;
    EEAPANSWER21: string;
    EEAPITEMNO22: string;
    EEAPANSWER22: string;
    EEAPITEMNO23: string;
    EEAPANSWER23: string;
    EEAPITEMNO24: string;
    EEAPANSWER24: string;
    EEAPITEMNO25: string;
    EEAPANSWER25: string;
    EEAPITEMNO26: string;
    EEAPANSWER26: string;
    EEAPITEMNO27: string;
    EEAPANSWER27: string;
    EEAPITEMNO28: string;
    EEAPANSWER28: string;
    EEAPITEMNO29: string;
    EEAPANSWER29: string;
    EEAPITEMNO30: string;
    EEAPANSWER30: string;
    EEAPITEMNO31: string;
    EEAPANSWER31: string;
    EEAPITEMNO32: string;
    EEAPANSWER32: string;
    EEAPITEMNO33: string;
    EEAPANSWER33: string;
    EEAPITEMNO34: string;
    EEAPANSWER34: string;
    EEAPITEMNO35: string;
    EEAPANSWER35: string;
    EEAPITEMNO36: string;
    EEAPANSWER36: string;
    EEAPITEMNO37: string;
    EEAPANSWER37: string;
    EEAPITEMNO38: string;
    EEAPANSWER38: string;
    EEAPITEMNO39: string;
    EEAPANSWER39: string;
    EEAPITEMNO40: string;
    EEAPANSWER40: string;
    EEAPITEMNO41: string;
    EEAPANSWER41: string;
    EEAPITEMNO42: string;
    EEAPANSWER42: string;
    EEAPITEMNO43: string;
    EEAPANSWER43: string;
    EEAPITEMNO44: string;
    EEAPANSWER44: string;
    EEAPITEMNO45: string;
    EEAPANSWER45: string;
    EEAPITEMNO46: string;
    EEAPANSWER46: string;
    EEAPITEMNO47: string;
    EEAPANSWER47: string;
    EEAPITEMNO48: string;
    EEAPANSWER48: string;
    EEAPITEMNO49: string;
    EEAPANSWER49: string;
    EEAPITEMNO50: string;
    EEAPANSWER50: string;
}

export const useFrmtraining0444MTrainingEvaluationAnswerInput = () => {
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