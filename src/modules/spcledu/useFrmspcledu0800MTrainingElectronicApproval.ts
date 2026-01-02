// @ts-nocheck
import { useState, useEffect } from 'react';

export interface Ids_ioElecApprConnection {
    GYMGNO: string;
    NEW_RECEIVE_DATE: string;
    PROCDATE: string;
    RE_ALI_DOC_ID: string;
    RE_APPROVER_DATE: string;
    RE_APPROVER_KIND: string;
    RE_APPROVER_NAME: string;
    RE_APPROVER_STATUS: string;
    RE_PC_DEPARTMENT: string;
    RE_PC_POSITION: string;
    RECEIVE_DATE: string;
    ROWNUM: string;
}

export interface Ids_oWorkGubun {
    CD: string;
    DATA: string;
}

export interface Ids_oJibu {
    CD: string;
    DATA: string;
}

export interface Ids_oInternetJubsuStatus {
    CD: string;
    DATA: string;
}

export interface Ids_iElecApprResolveInsert {
}

export interface Ids_ioElecApprResolve {
    TOYEAR: string;
    TCCOURSENM: string;
    JUBSUNO: string;
    TJPERSONNM: string;
    BIRTHDAY: string;
    PAY: string;
    REPAY: string;
    JUBSUGUBUN: string;
    PAYMENT: string;
    PNM: string;
    JIBU: string;
    rpStartDate: string;
    rpEndDate: string;
}

export interface Ids_oElecApprExamPay {
    EOYEAR: string;
    TCCOURSENM: string;
    JUBSUNO: string;
    EJPERSONNM: string;
    BIRTHDAY: string;
    PAY: string;
    REPAY: string;
    PAYMENT: string;
    PNM: string;
    JIBU: string;
    rpStartDate: string;
    rpEndDate: string;
}

export interface Ids_oElecApprExamRepay {
    TOMGGTMGNO: string;
    GTTEAMNM: string;
    TOYEAR: string;
    TOTCCOURSECD: string;
    TCCOURSENM: string;
    BF_JUBSUNO: string;
    AF_JUBSUNO: string;
    TJPERSONNM: string;
    BIRTHDAY: string;
    TJHREASON: string;
    TJRESIDENTNO: string;
    TOHTJMGNO: string;
    JIBU: string;
    rpStartDate: string;
    rpEndDate: string;
}

export interface Ids_oElecApprEduExam {
    TOMGGTMGNO: string;
    GTTEAMNM: string;
    TOYEAR: string;
    TOTCCOURSECD: string;
    TCCOURSENM: string;
    BF_JUBSUNO: string;
    AF_JUBSUNO: string;
    TJPERSONNM: string;
    BIRTHDAY: string;
    TJHREASON: string;
    TJRESIDENTNO: string;
    TOHTJMGNO: string;
    JIBU: string;
    rpStartDate: string;
    rpEndDate: string;
}

export interface Ids_ioElecApprResolvedecision {
    TOYEAR: string;
    TCCOURSENM: string;
    JUBSUNO: string;
    TJPERSONNM: string;
    BIRTHDAY: string;
    PAY: string;
    REPAY: string;
    JUBSUGUBUN: string;
    PAYMENT: string;
    PNM: string;
    JIBU: string;
    rpStartDate: string;
    rpEndDate: string;
}

export const useFrmspcledu0800MTrainingElectronicApproval = () => {
    const [ds_ioElecApprConnection, setds_ioElecApprConnection] = useState<Ids_ioElecApprConnection[]>([]);
    const [ds_oWorkGubun, setds_oWorkGubun] = useState<Ids_oWorkGubun[]>([]);
    const [ds_oJibu, setds_oJibu] = useState<Ids_oJibu[]>([]);
    const [ds_oInternetJubsuStatus, setds_oInternetJubsuStatus] = useState<Ids_oInternetJubsuStatus[]>([]);
    const [ds_iElecApprResolveInsert, setds_iElecApprResolveInsert] = useState<Ids_iElecApprResolveInsert[]>([]);
    const [ds_ioElecApprResolve, setds_ioElecApprResolve] = useState<Ids_ioElecApprResolve[]>([]);
    const [ds_oElecApprExamPay, setds_oElecApprExamPay] = useState<Ids_oElecApprExamPay[]>([]);
    const [ds_oElecApprExamRepay, setds_oElecApprExamRepay] = useState<Ids_oElecApprExamRepay[]>([]);
    const [ds_oElecApprEduExam, setds_oElecApprEduExam] = useState<Ids_oElecApprEduExam[]>([]);
    const [ds_ioElecApprResolvedecision, setds_ioElecApprResolvedecision] = useState<Ids_ioElecApprResolvedecision[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_ioElecApprConnection([]);
            setds_oWorkGubun([]);
            setds_oJibu([]);
            setds_oInternetJubsuStatus([]);
            setds_iElecApprResolveInsert([]);
            setds_ioElecApprResolve([]);
            setds_oElecApprExamPay([]);
            setds_oElecApprExamRepay([]);
            setds_oElecApprEduExam([]);
            setds_ioElecApprResolvedecision([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnCreateList_OnClick = () => {
        console.log('btnCreateList_OnClick clicked');
    };
    const btnMutilSort_OnClick = () => {
        console.log('btnMutilSort_OnClick clicked');
    };
    const btnProcElecApv_OnClick = () => {
        console.log('btnProcElecApv_OnClick clicked');
    };
    const lfn_Cancel = () => {
        console.log('lfn_Cancel clicked');
    };
    const lfn_End = () => {
        console.log('lfn_End clicked');
    };
    const lfn_PrintScreen = () => {
        console.log('lfn_PrintScreen clicked');
    };
    const lfn_Search = () => {
        console.log('lfn_Search clicked');
    };
    const lfn_localExcel = () => {
        console.log('lfn_localExcel clicked');
    };

    return {
        isLoading,
        ds_ioElecApprConnection,
        ds_oWorkGubun,
        ds_oJibu,
        ds_oInternetJubsuStatus,
        ds_iElecApprResolveInsert,
        ds_ioElecApprResolve,
        ds_oElecApprExamPay,
        ds_oElecApprExamRepay,
        ds_oElecApprEduExam,
        ds_ioElecApprResolvedecision,
        btnCreateList_OnClick,
        btnMutilSort_OnClick,
        btnProcElecApv_OnClick,
        lfn_Cancel,
        lfn_End,
        lfn_PrintScreen,
        lfn_Search,
        lfn_localExcel,
    };
};