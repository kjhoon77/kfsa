// @ts-nocheck
import { useState, useEffect } from 'react';

export interface Ids_ioBiztotalcode {
}

export interface Ids_iBizorder {
    CD: string;
    DATA: string;
}

export interface Ids_oJibu {
    CD: string;
    DATA: string;
}

export interface Ids_oCourse {
    CD: string;
    DATA: string;
}

export interface Ids_iFormsave {
    I_PROC: string;
    I_FCCD: string;
    I_FAMGNO: string;
    I_PK1VAL: string;
    I_PK2VAL: string;
    I_FRDATE: string;
    I_PATH: string;
    I_FILENM: string;
    I_SABUN: string;
    O_status: string;
    O_value: string;
}

export interface Ids_oEnroll {
    CD: string;
    DATA: string;
}

export interface Ids_iTrainingFrom {
    I_PROC: string;
    I_FCCD: string;
    I_FAMGNO: string;
    I_PK1VAL: string;
    I_PK2VAL: string;
    I_FRDATE: string;
    I_PATH: string;
    I_FILENM: string;
    I_SABUN: string;
    O_status: string;
    O_value: string;
}

export interface Ids_oTrainingFrom {
    O_status: string;
    O_value: string;
}

export interface Ids_iBizgubun {
    CD: string;
    DATA: string;
}

export interface Ids_iTotalselect {
    I_GTMGNO: string;
    I_BIZ: string;
    I_FRDATE: string;
    I_TODATE: string;
    I_FCCD: string;
    I_COURSECD: string;
    I_REGYN: string;
}

export interface Ids_oTotalselect {
    PK1: string;
    PK2: string;
    FCCD: string;
    FCFULLNM: string;
    FCLINK: string;
    COURSECD: string;
    COUSENM: string;
    ORDERNO: string;
    JUPSUNO: string;
    FRDATE: string;
    OKDATE: string;
    REGY: string;
    REGN: string;
}

export interface Ids_inRegyn {
    CD: string;
    DATA: string;
}

export const useFrmCOM9040MFormUploadList = () => {
    const [ds_ioBiztotalcode, setds_ioBiztotalcode] = useState<Ids_ioBiztotalcode[]>([]);
    const [ds_iBizorder, setds_iBizorder] = useState<Ids_iBizorder[]>([]);
    const [ds_oJibu, setds_oJibu] = useState<Ids_oJibu[]>([]);
    const [ds_oCourse, setds_oCourse] = useState<Ids_oCourse[]>([]);
    const [ds_iFormsave, setds_iFormsave] = useState<Ids_iFormsave[]>([]);
    const [ds_oEnroll, setds_oEnroll] = useState<Ids_oEnroll[]>([]);
    const [ds_iTrainingFrom, setds_iTrainingFrom] = useState<Ids_iTrainingFrom[]>([]);
    const [ds_oTrainingFrom, setds_oTrainingFrom] = useState<Ids_oTrainingFrom[]>([]);
    const [ds_iBizgubun, setds_iBizgubun] = useState<Ids_iBizgubun[]>([]);
    const [ds_iTotalselect, setds_iTotalselect] = useState<Ids_iTotalselect[]>([]);
    const [ds_oTotalselect, setds_oTotalselect] = useState<Ids_oTotalselect[]>([]);
    const [ds_inRegyn, setds_inRegyn] = useState<Ids_inRegyn[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_ioBiztotalcode([]);
            setds_iBizorder([]);
            setds_oJibu([]);
            setds_oCourse([]);
            setds_iFormsave([]);
            setds_oEnroll([]);
            setds_iTrainingFrom([]);
            setds_oTrainingFrom([]);
            setds_iBizgubun([]);
            setds_iTotalselect([]);
            setds_oTotalselect([]);
            setds_inRegyn([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const lfn_End = () => {
        console.log('lfn_End clicked');
    };
    const lfn_Excel = () => {
        console.log('lfn_Excel clicked');
    };
    const lfn_PrintScreen = () => {
        console.log('lfn_PrintScreen clicked');
    };
    const lfn_Search = () => {
        console.log('lfn_Search clicked');
    };

    return {
        isLoading,
        ds_ioBiztotalcode,
        ds_iBizorder,
        ds_oJibu,
        ds_oCourse,
        ds_iFormsave,
        ds_oEnroll,
        ds_iTrainingFrom,
        ds_oTrainingFrom,
        ds_iBizgubun,
        ds_iTotalselect,
        ds_oTotalselect,
        ds_inRegyn,
        lfn_End,
        lfn_Excel,
        lfn_PrintScreen,
        lfn_Search,
    };
};