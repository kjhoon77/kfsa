// @ts-nocheck
import { useState, useEffect } from 'react';

export interface Ids_oCourse {
    CD: string;
    DATA: string;
}

export interface Ids_oJibu {
    CD: string;
    DATA: string;
}

export interface Ids_ioTrainingResult {
}

export interface Ids_ioMunjeGubun {
    CD: string;
    DATA: string;
}

export interface Ids_ioTrainingResult2 {
    LDPFMGNO: string;
    LDPFNAME: string;
    GUBUN: string;
    JIKWI: string;
    GUBUNCD: string;
    NAME: string;
    LPSPEAKERPAY: string;
    LTEDUDATE: string;
    EDUSTART: string;
    EDUEND: string;
    SUMTIME: string;
    TIME220: string;
    TIME221: string;
    TIME222N: string;
    TIME222Y: string;
    TIME224: string;
    TIME228: string;
    TIME229: string;
}

export interface Ids_ioTrainingResult3 {
    EDUTEAMNM: string;
    EDUTIME: string;
    LEDUGUBUN: string;
    LEDUMGNO: string;
    LGTMGNO: string;
    LMGNO: string;
    LPPFGUBUN: string;
    LPPFJIKWINM: string;
    LPPFJIKWI: string;
    LPPFNM: string;
    LPPFSABUN: string;
    LPPFGUBUNCD: string;
    LPPSSEQ: string;
    LPSEQ: string;
    LPSPEAKERPAY: string;
    LPSVERSION: string;
    LTCCOURSECD: string;
    LTCMUNJEGUBUN: string;
    LTDATESEQ: string;
    LTEDUDATE: string;
    LTEDUDAYS: string;
    LTSCHEDULETYPE: string;
    PSTITLE: string;
    TSENDTIME: string;
    TSSEQ: string;
    TSSTARTTIME: string;
    TSTIME: string;
    TSTYPESEQ: string;
}

export interface Ids_ioTrainingResult4 {
    TOMGGTMGNO: string;
    ERPASSYN: string;
    JUBSUADDR: string;
    PPASSDATE_A: string;
    PPASSNO: string;
    TOTCCOURSECD: string;
    TJMGNO: string;
    TJPERSONNM: string;
    TJBIRTHDAY_SANG: string;
    TJBIRTHDAY: string;
    TJZIPCD: string;
    TOHJUBSUNO: string;
    TOMGNO: string;
    TOTRAININGORDER: string;
    TOYEAR: string;
    TPMGNO: string;
    TOEXAMORDER: string;
    EDUCATIONTIME: string;
    TCCOURSENM: string;
    TOREMARK: string;
    TJREMARK: string;
}

export interface Ids_ioTrainingResult5 {
    BIRTHDAY: string;
    EJPERSONNM: string;
    EOEXAMDATE: string;
    EOEXAMORDER: string;
    EOYEAR: string;
    ERAPLEXAMNO: string;
    ERPASSYN: string;
    ERRANK: string;
    ERSCORE: string;
    GTTEAMNM: string;
    TCCOURSENM: string;
    CNT: string;
    TCCOURSECD: string;
}

export interface Ids_ioTrainingResult6 {
    LLCSNO: string;
    LISSUEGUBUN: string;
    LICENSELSGUBUNNM: string;
    LHPERSONNM: string;
    RESIDENT: string;
    LHBIRTHDAY_SANG: string;
    ADDR: string;
    CCCDNM: string;
    LISSUEDATE: string;
    PRTDATE: string;
    PRTDATE_1: string;
    LCANCELREASON: string;
    LCANCELREASON_A: string;
    SEX: string;
    USEGUBUN: string;
}

export const useFrmtraining0830MProcStatistics = () => {
    const [ds_oCourse, setds_oCourse] = useState<Ids_oCourse[]>([]);
    const [ds_oJibu, setds_oJibu] = useState<Ids_oJibu[]>([]);
    const [ds_ioTrainingResult, setds_ioTrainingResult] = useState<Ids_ioTrainingResult[]>([]);
    const [ds_ioMunjeGubun, setds_ioMunjeGubun] = useState<Ids_ioMunjeGubun[]>([]);
    const [ds_ioTrainingResult2, setds_ioTrainingResult2] = useState<Ids_ioTrainingResult2[]>([]);
    const [ds_ioTrainingResult3, setds_ioTrainingResult3] = useState<Ids_ioTrainingResult3[]>([]);
    const [ds_ioTrainingResult4, setds_ioTrainingResult4] = useState<Ids_ioTrainingResult4[]>([]);
    const [ds_ioTrainingResult5, setds_ioTrainingResult5] = useState<Ids_ioTrainingResult5[]>([]);
    const [ds_ioTrainingResult6, setds_ioTrainingResult6] = useState<Ids_ioTrainingResult6[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_oCourse([]);
            setds_oJibu([]);
            setds_ioTrainingResult([]);
            setds_ioMunjeGubun([]);
            setds_ioTrainingResult2([]);
            setds_ioTrainingResult3([]);
            setds_ioTrainingResult4([]);
            setds_ioTrainingResult5([]);
            setds_ioTrainingResult6([]);
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

    return {
        isLoading,
        ds_oCourse,
        ds_oJibu,
        ds_ioTrainingResult,
        ds_ioMunjeGubun,
        ds_ioTrainingResult2,
        ds_ioTrainingResult3,
        ds_ioTrainingResult4,
        ds_ioTrainingResult5,
        ds_ioTrainingResult6,
        lfn_Cancel,
        lfn_End,
        lfn_Print,
        lfn_PrintScreen,
    };
};