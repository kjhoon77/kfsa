// @ts-nocheck
import { useState, useEffect } from 'react';

export interface Ids_ioLoadedAnswer {
    EPALPHATYPE: string;
    EPCOURSECD: string;
    EPNUMTYPE: string;
    TCCOURSENM: string;
    WRITEYN: string;
    EPCHASUGUBUN: string;
    EPSUBJECTGUBUN: string;
    SUBJECTGUBUN: string;
}

export interface Ids_oCourse {
    CD: string;
    DATA: string;
}

export interface Ids_ioExcel {
    CACORRECTANSWER: string;
    CACORRECTCNT: string;
    CAITEMNO: string;
    CAITEMSCORE: string;
    EPALPHATYPE: string;
    EPCOURSECD: string;
    EPNUMTYPE: string;
    EPCHASUGUBUN: string;
    EPSUBJECTGUBUN: string;
}

export interface Ids_ioExcelDetail {
    CACORRECTANSWER: string;
    CACORRECTCNT: string;
    CAITEMNO: string;
    CAITEMSCORE: string;
    EPALPHATYPE: string;
    EPCOURSECD: string;
    EPNUMTYPE: string;
    EPCHASUGUBUN: string;
    EPSUBJECTGUBUN: string;
}

export interface Ids_ioExcelCopy {
    CACORRECTANSWER: string;
    CACORRECTCNT: string;
    CAITEMNO: string;
    CAITEMSCORE: string;
}

export interface Ids_oAnswer {
    EPALPHATYPE: string;
    EPCOURSECD: string;
    EPNUMTYPE: string;
    EPCHASUGUBUN: string;
    EPSUBJECTGUBUN: string;
}

export interface Ids_ioExcelDetailTmp {
    CACORRECTANSWER: string;
    CACORRECTCNT: string;
    CAITEMNO: string;
    CAITEMSCORE: string;
    EPALPHATYPE: string;
    EPCOURSECD: string;
    EPNUMTYPE: string;
    EPCHASUGUBUN: string;
    EPSUBJECTGUBUN: string;
}

export interface Ids_ioExcelCopyTmp {
    CACORRECTANSWER: string;
    CACORRECTCNT: string;
    CAITEMNO: string;
    CAITEMSCORE: string;
}

export const useFrmtraining0510MExamCorrectAnswerPaperModify = () => {
    const [ds_ioLoadedAnswer, setds_ioLoadedAnswer] = useState<Ids_ioLoadedAnswer[]>([]);
    const [ds_oCourse, setds_oCourse] = useState<Ids_oCourse[]>([]);
    const [ds_ioExcel, setds_ioExcel] = useState<Ids_ioExcel[]>([]);
    const [ds_ioExcelDetail, setds_ioExcelDetail] = useState<Ids_ioExcelDetail[]>([]);
    const [ds_ioExcelCopy, setds_ioExcelCopy] = useState<Ids_ioExcelCopy[]>([]);
    const [ds_oAnswer, setds_oAnswer] = useState<Ids_oAnswer[]>([]);
    const [ds_ioExcelDetailTmp, setds_ioExcelDetailTmp] = useState<Ids_ioExcelDetailTmp[]>([]);
    const [ds_ioExcelCopyTmp, setds_ioExcelCopyTmp] = useState<Ids_ioExcelCopyTmp[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_ioLoadedAnswer([]);
            setds_oCourse([]);
            setds_ioExcel([]);
            setds_ioExcelDetail([]);
            setds_ioExcelCopy([]);
            setds_oAnswer([]);
            setds_ioExcelDetailTmp([]);
            setds_ioExcelCopyTmp([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnNext_OnClick = () => {
        console.log('btnNext_OnClick clicked');
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
        ds_ioLoadedAnswer,
        ds_oCourse,
        ds_ioExcel,
        ds_ioExcelDetail,
        ds_ioExcelCopy,
        ds_oAnswer,
        ds_ioExcelDetailTmp,
        ds_ioExcelCopyTmp,
        btnNext_OnClick,
        lfn_End,
        lfn_PrintScreen,
        lfn_Save,
        lfn_Search,
    };
};