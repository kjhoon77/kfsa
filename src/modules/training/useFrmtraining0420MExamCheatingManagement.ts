// @ts-nocheck
import { useState, useEffect } from 'react';

export interface Ids_ioExamCheat {
    BIRTHDAY: string;
    ECCHEATGUBUN: string;
    ECCHEATREASON: string;
    ECMGNO: string;
    ECMODDATE: string;
    ECREGDATE: string;
    ECREGSABUN: string;
    ECREMARK: string;
    ECSTOPENDDATE: string;
    ECSTOPSTARTDATE: string;
    ECTCCOURSECD: string;
    ECTPMGNO: string;
    EXMODSABUN: string;
    TCCOURSENM: string;
    TPNM: string;
    TPBIRTHDAY: string;
}

export interface Ids_oCheatGubun {
    CD: string;
    DATA: string;
}

export interface Ids_oCourse {
    CD: string;
    DATA: string;
}

export interface Ids_oPrintGubun {
    CD: string;
    DATA: string;
}

export interface Ids_oJibu {
    CD: string;
    DATA: string;
}

export interface Ids_oExamOrderMgno {
}

export interface Ids_oExamCheatReport {
}

export interface Ids_iFormSave {
    I_PROC: string;
    I_FCCD: string;
    I_FAMGNO: string;
    I_PK1VAL: string;
    I_PK2VAL: string;
    I_FRDATE: string;
    I_PATH: string;
    I_FILENM: string;
}

export interface Ids_oFormSave {
}

export interface Ids_iFormDelete {
    I_FCCD: string;
    I_FAMGNO: string;
    I_PK1VAL: string;
    I_PK2VAL: string;
    I_PATH: string;
    I_FILENM: string;
}

export interface Ids_oFormDelete {
}

export const useFrmtraining0420MExamCheatingManagement = () => {
    const [ds_ioExamCheat, setds_ioExamCheat] = useState<Ids_ioExamCheat[]>([]);
    const [ds_oCheatGubun, setds_oCheatGubun] = useState<Ids_oCheatGubun[]>([]);
    const [ds_oCourse, setds_oCourse] = useState<Ids_oCourse[]>([]);
    const [ds_oPrintGubun, setds_oPrintGubun] = useState<Ids_oPrintGubun[]>([]);
    const [ds_oJibu, setds_oJibu] = useState<Ids_oJibu[]>([]);
    const [ds_oExamOrderMgno, setds_oExamOrderMgno] = useState<Ids_oExamOrderMgno[]>([]);
    const [ds_oExamCheatReport, setds_oExamCheatReport] = useState<Ids_oExamCheatReport[]>([]);
    const [ds_iFormSave, setds_iFormSave] = useState<Ids_iFormSave[]>([]);
    const [ds_oFormSave, setds_oFormSave] = useState<Ids_oFormSave[]>([]);
    const [ds_iFormDelete, setds_iFormDelete] = useState<Ids_iFormDelete[]>([]);
    const [ds_oFormDelete, setds_oFormDelete] = useState<Ids_oFormDelete[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_ioExamCheat([]);
            setds_oCheatGubun([]);
            setds_oCourse([]);
            setds_oPrintGubun([]);
            setds_oJibu([]);
            setds_oExamOrderMgno([]);
            setds_oExamCheatReport([]);
            setds_iFormSave([]);
            setds_oFormSave([]);
            setds_iFormDelete([]);
            setds_oFormDelete([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnFormDelete_OnClick = () => {
        console.log('btnFormDelete_OnClick clicked');
    };
    const btnLocalFormView_OnClick = () => {
        console.log('btnLocalFormView_OnClick clicked');
    };
    const btnMutilSort_OnClick = () => {
        console.log('btnMutilSort_OnClick clicked');
    };
    const btnScanSave_OnClick = () => {
        console.log('btnScanSave_OnClick clicked');
    };
    const btnScanSearch_OnClick = () => {
        console.log('btnScanSearch_OnClick clicked');
    };
    const btnScan_OnClick = () => {
        console.log('btnScan_OnClick clicked');
    };
    const btnSeverFormView_OnClick = () => {
        console.log('btnSeverFormView_OnClick clicked');
    };
    const btnToExcel_OnClick = () => {
        console.log('btnToExcel_OnClick clicked');
    };
    const lfn_Cancel = () => {
        console.log('lfn_Cancel clicked');
    };
    const lfn_Delete = () => {
        console.log('lfn_Delete clicked');
    };
    const lfn_End = () => {
        console.log('lfn_End clicked');
    };
    const lfn_Input = () => {
        console.log('lfn_Input clicked');
    };
    const lfn_Print = () => {
        console.log('lfn_Print clicked');
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
        ds_ioExamCheat,
        ds_oCheatGubun,
        ds_oCourse,
        ds_oPrintGubun,
        ds_oJibu,
        ds_oExamOrderMgno,
        ds_oExamCheatReport,
        ds_iFormSave,
        ds_oFormSave,
        ds_iFormDelete,
        ds_oFormDelete,
        btnFormDelete_OnClick,
        btnLocalFormView_OnClick,
        btnMutilSort_OnClick,
        btnScanSave_OnClick,
        btnScanSearch_OnClick,
        btnScan_OnClick,
        btnSeverFormView_OnClick,
        btnToExcel_OnClick,
        lfn_Cancel,
        lfn_Delete,
        lfn_End,
        lfn_Input,
        lfn_Print,
        lfn_PrintScreen,
        lfn_Save,
        lfn_Search,
    };
};