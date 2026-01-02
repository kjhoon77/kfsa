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
    TPRESIDENTNO: string;
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

export const useFrmspcledu0420MExamCheatingManagement = () => {
    const [ds_ioExamCheat, setds_ioExamCheat] = useState<Ids_ioExamCheat[]>([]);
    const [ds_oCheatGubun, setds_oCheatGubun] = useState<Ids_oCheatGubun[]>([]);
    const [ds_oCourse, setds_oCourse] = useState<Ids_oCourse[]>([]);
    const [ds_oPrintGubun, setds_oPrintGubun] = useState<Ids_oPrintGubun[]>([]);
    const [ds_oJibu, setds_oJibu] = useState<Ids_oJibu[]>([]);
    const [ds_oExamOrderMgno, setds_oExamOrderMgno] = useState<Ids_oExamOrderMgno[]>([]);
    const [ds_oExamCheatReport, setds_oExamCheatReport] = useState<Ids_oExamCheatReport[]>([]);
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
            setIsLoading(false);
        }, 500);
    }, []);

    const btnMutilSort_OnClick = () => {
        console.log('btnMutilSort_OnClick clicked');
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
    const lfn_Excel = () => {
        console.log('lfn_Excel clicked');
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
        btnMutilSort_OnClick,
        lfn_Cancel,
        lfn_Delete,
        lfn_End,
        lfn_Excel,
        lfn_Print,
        lfn_PrintScreen,
        lfn_Save,
        lfn_Search,
    };
};