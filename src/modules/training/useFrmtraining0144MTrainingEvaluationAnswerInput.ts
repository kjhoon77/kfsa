// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_oCourse, Ids_ioEvaluationAnswerInput, Ids_oJibu, Ids_oSort, Ids_oSunab, Ids_ioExcel, Ids_ioExcelCopy, Ids_ioExamResult, Ids_oEvalGubun, Ids_oAnswerPaper, Ids_iAnswerPaper, Ids_oCorrectAnswer, Ids_ioNewExcel, Ids_ioNewExcelCopy } from './Frmtraining0144MTrainingEvaluationAnswerInputData';

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
    const [isVisible_divWorkFormTitle, setIsVisible_divWorkFormTitle] = useState(true);

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
        isVisible_divWorkFormTitle,
        setIsVisible_divWorkFormTitle,
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