// @ts-nocheck
import { useState, useEffect } from 'react';

export interface Ids_ioSmsSendList {
    EPMGJIBUCD: string;
    PSABUN: string;
    SHRCVRNAME: string;
    SHSENDDATE_B: string;
    SHSENDDATE_C: string;
    SHSENDSTATE: string;
    SHSENDTIME: string;
    SHSYSGUBUN: string;
    SHTEL: string;
    SMMSG: string;
    TCCOURSECD: string;
    TJMGNO: string;
    TOHJUBSUNO: string;
    TOMGNO: string;
    TOTRAININGORDER: string;
    TOTRAININGORDER2: string;
    TOYEAR: string;
    TPMGNO: string;
    SENDGUBUN: string;
    RCNM: string;
}

export interface Ids_oWorkGubun {
    CD: string;
    DATA: string;
}

export interface Ids_oCourse {
    CD: string;
    DATA: string;
}

export interface Ids_oJibu {
    CD: string;
    DATA: string;
}

export interface Ids_ioSmsPracticeEduJubsu {
    EPMGJIBUCD: string;
    PSABUN: string;
    SHRCVRNAME: string;
    SHSENDDATE_B: string;
    SHSENDDATE_C: string;
    SHSENDSTATE: string;
    SHSENDTIME: string;
    SHSYSGUBUN: string;
    SHTEL: string;
    SMMSG: string;
    TCCOURSECD: string;
    TJMGNO: string;
    TOHJUBSUNO: string;
    TOMGNO: string;
    TOTRAININGORDER: string;
    TOTRAININGORDER2: string;
    TOYEAR: string;
    TPMGNO: string;
    SENDGUBUN: string;
    RCNM: string;
}

export interface Ids_oGubun {
    CD: string;
    DATA: string;
}

export interface Ids_ioSmsStat_date {
}

export interface Ids_ioSmsStatEduJubsu_date {
}

export interface Ids_ioSmsStatInternet_jibu {
}

export interface Ids_ioSmsStat_jibu {
}

export interface Ids_ioSerchGubun {
    CD: string;
    DATA: string;
}

export interface Ids_ioSmsStatInternet_order {
}

export interface Ids_ioSmsStat_order {
}

export interface Ids_oSendGubun {
    CD: string;
    DATA: string;
}

export interface Ids_ioSmsEduData {
}

export interface Ids_ioSmsEduIssue {
}

export interface Ids_ioSerchGubun2 {
    CD: string;
    DATA: string;
}

export interface Ids_ioSmsStatEduData_date {
}

export interface Ids_ioSmsStatEduIssue_date {
}

export interface Ids_ioSerchGubun3 {
    CD: string;
    DATA: string;
}

export const useFrmcust1180MSmsSendList = () => {
    const [ds_ioSmsSendList, setds_ioSmsSendList] = useState<Ids_ioSmsSendList[]>([]);
    const [ds_oWorkGubun, setds_oWorkGubun] = useState<Ids_oWorkGubun[]>([]);
    const [ds_oCourse, setds_oCourse] = useState<Ids_oCourse[]>([]);
    const [ds_oJibu, setds_oJibu] = useState<Ids_oJibu[]>([]);
    const [ds_ioSmsPracticeEduJubsu, setds_ioSmsPracticeEduJubsu] = useState<Ids_ioSmsPracticeEduJubsu[]>([]);
    const [ds_oGubun, setds_oGubun] = useState<Ids_oGubun[]>([]);
    const [ds_ioSmsStat_date, setds_ioSmsStat_date] = useState<Ids_ioSmsStat_date[]>([]);
    const [ds_ioSmsStatEduJubsu_date, setds_ioSmsStatEduJubsu_date] = useState<Ids_ioSmsStatEduJubsu_date[]>([]);
    const [ds_ioSmsStatInternet_jibu, setds_ioSmsStatInternet_jibu] = useState<Ids_ioSmsStatInternet_jibu[]>([]);
    const [ds_ioSmsStat_jibu, setds_ioSmsStat_jibu] = useState<Ids_ioSmsStat_jibu[]>([]);
    const [ds_ioSerchGubun, setds_ioSerchGubun] = useState<Ids_ioSerchGubun[]>([]);
    const [ds_ioSmsStatInternet_order, setds_ioSmsStatInternet_order] = useState<Ids_ioSmsStatInternet_order[]>([]);
    const [ds_ioSmsStat_order, setds_ioSmsStat_order] = useState<Ids_ioSmsStat_order[]>([]);
    const [ds_oSendGubun, setds_oSendGubun] = useState<Ids_oSendGubun[]>([]);
    const [ds_ioSmsEduData, setds_ioSmsEduData] = useState<Ids_ioSmsEduData[]>([]);
    const [ds_ioSmsEduIssue, setds_ioSmsEduIssue] = useState<Ids_ioSmsEduIssue[]>([]);
    const [ds_ioSerchGubun2, setds_ioSerchGubun2] = useState<Ids_ioSerchGubun2[]>([]);
    const [ds_ioSmsStatEduData_date, setds_ioSmsStatEduData_date] = useState<Ids_ioSmsStatEduData_date[]>([]);
    const [ds_ioSmsStatEduIssue_date, setds_ioSmsStatEduIssue_date] = useState<Ids_ioSmsStatEduIssue_date[]>([]);
    const [ds_ioSerchGubun3, setds_ioSerchGubun3] = useState<Ids_ioSerchGubun3[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_ioSmsSendList([]);
            setds_oWorkGubun([]);
            setds_oCourse([]);
            setds_oJibu([]);
            setds_ioSmsPracticeEduJubsu([]);
            setds_oGubun([]);
            setds_ioSmsStat_date([]);
            setds_ioSmsStatEduJubsu_date([]);
            setds_ioSmsStatInternet_jibu([]);
            setds_ioSmsStat_jibu([]);
            setds_ioSerchGubun([]);
            setds_ioSmsStatInternet_order([]);
            setds_ioSmsStat_order([]);
            setds_oSendGubun([]);
            setds_ioSmsEduData([]);
            setds_ioSmsEduIssue([]);
            setds_ioSerchGubun2([]);
            setds_ioSmsStatEduData_date([]);
            setds_ioSmsStatEduIssue_date([]);
            setds_ioSerchGubun3([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnMutilSort_OnClick = () => {
        console.log('btnMutilSort_OnClick clicked');
    };
    const btnPrintDate = () => {
        console.log('btnPrintDate clicked');
    };
    const btnPrintJibu = () => {
        console.log('btnPrintJibu clicked');
    };
    const btnPrintList = () => {
        console.log('btnPrintList clicked');
    };
    const btnPrintOrder = () => {
        console.log('btnPrintOrder clicked');
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
    const lfn_Search = () => {
        console.log('lfn_Search clicked');
    };

    return {
        isLoading,
        ds_ioSmsSendList,
        ds_oWorkGubun,
        ds_oCourse,
        ds_oJibu,
        ds_ioSmsPracticeEduJubsu,
        ds_oGubun,
        ds_ioSmsStat_date,
        ds_ioSmsStatEduJubsu_date,
        ds_ioSmsStatInternet_jibu,
        ds_ioSmsStat_jibu,
        ds_ioSerchGubun,
        ds_ioSmsStatInternet_order,
        ds_ioSmsStat_order,
        ds_oSendGubun,
        ds_ioSmsEduData,
        ds_ioSmsEduIssue,
        ds_ioSerchGubun2,
        ds_ioSmsStatEduData_date,
        ds_ioSmsStatEduIssue_date,
        ds_ioSerchGubun3,
        btnMutilSort_OnClick,
        btnPrintDate,
        btnPrintJibu,
        btnPrintList,
        btnPrintOrder,
        lfn_Cancel,
        lfn_End,
        lfn_Excel,
        lfn_PrintScreen,
        lfn_Search,
    };
};