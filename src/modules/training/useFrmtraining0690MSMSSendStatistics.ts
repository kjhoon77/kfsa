// @ts-nocheck
import { useState, useEffect } from 'react';

export interface Ids_ioSmsStat {
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
}

export interface Ids_oCourse {
    CD: string;
    DATA: string;
}

export interface Ids_oJibu {
    CD: string;
    DATA: string;
}

export interface Ids_ioSmsStatExam {
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
}

export interface Ids_ioSmsStatReport {
}

export interface Ids_ioSmsStatExamReport {
}

export interface Ids_ioSmsStat_order {
}

export interface Ids_ioSmsStatExam_order {
}

export interface Ids_ioSmsStatExam_date {
}

export interface Ids_ioSmsStat_date {
}

export interface Ids_ioSmsStat_jibu {
}

export interface Ids_ioSmsStatExam_jibu {
}

export interface Ids_oSendGubun {
    CD: string;
    DATA: string;
}

export interface Ids_SendYN {
    CD: string;
    DATA: string;
}

export interface Ids_oWorkGubun {
    CD: string;
    DATA: string;
}

export interface Ids_ioSmsStatSpeaker {
}

export interface Ids_ioSmsStatSupervisor {
}

export interface Ids_ioSmsStatSpeakerReport {
}

export interface Ids_ioSmsStatSupervisorReport {
}

export interface Ids_ioSmsStatSpeaker_date {
}

export interface Ids_ioSmsStatSupervisor_date {
}

export interface Ids_ioSmsStatCAGDMData {
}

export const useFrmtraining0690MSMSSendStatistics = () => {
    const [ds_ioSmsStat, setds_ioSmsStat] = useState<Ids_ioSmsStat[]>([]);
    const [ds_oCourse, setds_oCourse] = useState<Ids_oCourse[]>([]);
    const [ds_oJibu, setds_oJibu] = useState<Ids_oJibu[]>([]);
    const [ds_ioSmsStatExam, setds_ioSmsStatExam] = useState<Ids_ioSmsStatExam[]>([]);
    const [ds_ioSmsStatReport, setds_ioSmsStatReport] = useState<Ids_ioSmsStatReport[]>([]);
    const [ds_ioSmsStatExamReport, setds_ioSmsStatExamReport] = useState<Ids_ioSmsStatExamReport[]>([]);
    const [ds_ioSmsStat_order, setds_ioSmsStat_order] = useState<Ids_ioSmsStat_order[]>([]);
    const [ds_ioSmsStatExam_order, setds_ioSmsStatExam_order] = useState<Ids_ioSmsStatExam_order[]>([]);
    const [ds_ioSmsStatExam_date, setds_ioSmsStatExam_date] = useState<Ids_ioSmsStatExam_date[]>([]);
    const [ds_ioSmsStat_date, setds_ioSmsStat_date] = useState<Ids_ioSmsStat_date[]>([]);
    const [ds_ioSmsStat_jibu, setds_ioSmsStat_jibu] = useState<Ids_ioSmsStat_jibu[]>([]);
    const [ds_ioSmsStatExam_jibu, setds_ioSmsStatExam_jibu] = useState<Ids_ioSmsStatExam_jibu[]>([]);
    const [ds_oSendGubun, setds_oSendGubun] = useState<Ids_oSendGubun[]>([]);
    const [ds_SendYN, setds_SendYN] = useState<Ids_SendYN[]>([]);
    const [ds_oWorkGubun, setds_oWorkGubun] = useState<Ids_oWorkGubun[]>([]);
    const [ds_ioSmsStatSpeaker, setds_ioSmsStatSpeaker] = useState<Ids_ioSmsStatSpeaker[]>([]);
    const [ds_ioSmsStatSupervisor, setds_ioSmsStatSupervisor] = useState<Ids_ioSmsStatSupervisor[]>([]);
    const [ds_ioSmsStatSpeakerReport, setds_ioSmsStatSpeakerReport] = useState<Ids_ioSmsStatSpeakerReport[]>([]);
    const [ds_ioSmsStatSupervisorReport, setds_ioSmsStatSupervisorReport] = useState<Ids_ioSmsStatSupervisorReport[]>([]);
    const [ds_ioSmsStatSpeaker_date, setds_ioSmsStatSpeaker_date] = useState<Ids_ioSmsStatSpeaker_date[]>([]);
    const [ds_ioSmsStatSupervisor_date, setds_ioSmsStatSupervisor_date] = useState<Ids_ioSmsStatSupervisor_date[]>([]);
    const [ds_ioSmsStatCAGDMData, setds_ioSmsStatCAGDMData] = useState<Ids_ioSmsStatCAGDMData[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_ioSmsStat([]);
            setds_oCourse([]);
            setds_oJibu([]);
            setds_ioSmsStatExam([]);
            setds_ioSmsStatReport([]);
            setds_ioSmsStatExamReport([]);
            setds_ioSmsStat_order([]);
            setds_ioSmsStatExam_order([]);
            setds_ioSmsStatExam_date([]);
            setds_ioSmsStat_date([]);
            setds_ioSmsStat_jibu([]);
            setds_ioSmsStatExam_jibu([]);
            setds_oSendGubun([]);
            setds_SendYN([]);
            setds_oWorkGubun([]);
            setds_ioSmsStatSpeaker([]);
            setds_ioSmsStatSupervisor([]);
            setds_ioSmsStatSpeakerReport([]);
            setds_ioSmsStatSupervisorReport([]);
            setds_ioSmsStatSpeaker_date([]);
            setds_ioSmsStatSupervisor_date([]);
            setds_ioSmsStatCAGDMData([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnMutilSort_OnClick = () => {
        console.log('btnMutilSort_OnClick clicked');
    };
    const btnPrintDate_OnClick = () => {
        console.log('btnPrintDate_OnClick clicked');
    };
    const btnPrintJibu_OnClick = () => {
        console.log('btnPrintJibu_OnClick clicked');
    };
    const btnPrintList_OnClick = () => {
        console.log('btnPrintList_OnClick clicked');
    };
    const btnPrintOrder_OnClick = () => {
        console.log('btnPrintOrder_OnClick clicked');
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
        ds_ioSmsStat,
        ds_oCourse,
        ds_oJibu,
        ds_ioSmsStatExam,
        ds_ioSmsStatReport,
        ds_ioSmsStatExamReport,
        ds_ioSmsStat_order,
        ds_ioSmsStatExam_order,
        ds_ioSmsStatExam_date,
        ds_ioSmsStat_date,
        ds_ioSmsStat_jibu,
        ds_ioSmsStatExam_jibu,
        ds_oSendGubun,
        ds_SendYN,
        ds_oWorkGubun,
        ds_ioSmsStatSpeaker,
        ds_ioSmsStatSupervisor,
        ds_ioSmsStatSpeakerReport,
        ds_ioSmsStatSupervisorReport,
        ds_ioSmsStatSpeaker_date,
        ds_ioSmsStatSupervisor_date,
        ds_ioSmsStatCAGDMData,
        btnMutilSort_OnClick,
        btnPrintDate_OnClick,
        btnPrintJibu_OnClick,
        btnPrintList_OnClick,
        btnPrintOrder_OnClick,
        lfn_Cancel,
        lfn_End,
        lfn_PrintScreen,
        lfn_Search,
        lfn_localExcel,
    };
};