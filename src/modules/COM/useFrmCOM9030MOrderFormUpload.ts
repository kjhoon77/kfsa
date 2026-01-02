// @ts-nocheck
import { useState, useEffect } from 'react';

export interface Ids_ioBizformcode {
}

export interface Ids_iBizgubun {
    CD: string;
    DATA: string;
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

export interface Ids_iFormselect {
    I_FCCD: string;
    I_GTMGNO: string;
    I_YEAR: string;
    I_COURSECD: string;
    I_FRDATE: string;
    I_TODATE: string;
}

export interface Ids_oFormselect {
    ORDERNO: string;
    FRDATE: string;
    OKDATE: string;
    REGDATE: string;
    SNM: string;
    FPPATH: string;
    FPFILENM: string;
    FAFCPK1: string;
    FAFCPK2: string;
    FAMGNO: string;
    FCCD: string;
    PK1: string;
    PK2: string;
    O_status: string;
    O_value: string;
}

export const useFrmCOM9030MOrderFormUpload = () => {
    const [ds_ioBizformcode, setds_ioBizformcode] = useState<Ids_ioBizformcode[]>([]);
    const [ds_iBizgubun, setds_iBizgubun] = useState<Ids_iBizgubun[]>([]);
    const [ds_iBizorder, setds_iBizorder] = useState<Ids_iBizorder[]>([]);
    const [ds_oJibu, setds_oJibu] = useState<Ids_oJibu[]>([]);
    const [ds_oCourse, setds_oCourse] = useState<Ids_oCourse[]>([]);
    const [ds_iFormsave, setds_iFormsave] = useState<Ids_iFormsave[]>([]);
    const [ds_oEnroll, setds_oEnroll] = useState<Ids_oEnroll[]>([]);
    const [ds_iTrainingFrom, setds_iTrainingFrom] = useState<Ids_iTrainingFrom[]>([]);
    const [ds_oTrainingFrom, setds_oTrainingFrom] = useState<Ids_oTrainingFrom[]>([]);
    const [ds_iFormselect, setds_iFormselect] = useState<Ids_iFormselect[]>([]);
    const [ds_oFormselect, setds_oFormselect] = useState<Ids_oFormselect[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_ioBizformcode([]);
            setds_iBizgubun([]);
            setds_iBizorder([]);
            setds_oJibu([]);
            setds_oCourse([]);
            setds_iFormsave([]);
            setds_oEnroll([]);
            setds_iTrainingFrom([]);
            setds_oTrainingFrom([]);
            setds_iFormselect([]);
            setds_oFormselect([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnSave_OnClick = () => {
        console.log('btnSave_OnClick clicked');
    };
    const btnScan_OnClick = () => {
        console.log('btnScan_OnClick clicked');
    };
    const btn_load_OnClick = () => {
        console.log('btn_load_OnClick clicked');
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
    const lfn_Search = () => {
        console.log('lfn_Search clicked');
    };

    return {
        isLoading,
        ds_ioBizformcode,
        ds_iBizgubun,
        ds_iBizorder,
        ds_oJibu,
        ds_oCourse,
        ds_iFormsave,
        ds_oEnroll,
        ds_iTrainingFrom,
        ds_oTrainingFrom,
        ds_iFormselect,
        ds_oFormselect,
        btnSave_OnClick,
        btnScan_OnClick,
        btn_load_OnClick,
        lfn_End,
        lfn_Excel,
        lfn_PrintScreen,
        lfn_Search,
    };
};