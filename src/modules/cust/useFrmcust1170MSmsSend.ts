// @ts-nocheck
import { useState, useEffect } from 'react';

export interface Ids_oJibu {
    CD: string;
    DATA: string;
}

export interface Ids_oRegion {
    CD: string;
    DATA: string;
    GTCD: string;
}

export interface Ids_ioChoiceYn {
    CD: string;
    DATA: string;
}

export interface Ids_ioMemberGubun {
    CD: string;
    DATA: string;
}

export interface Ids_ioCourseYn {
    CD: string;
    DATA: string;
}

export interface Ids_oCourse {
    CD: string;
    DATA: string;
}

export interface Ids_oWorkGubun {
    CD: string;
    DATA: string;
}

export interface Ids_ioBusinessType {
}

export interface Ids_ioSmsExam {
}

export interface Ids_oIssueGubun {
    CD: string;
    DATA: string;
}

export interface Ids_ioEduDataHistoryResearchEduSms {
}

export interface Ids_oEduGubun {
    CD: string;
    DATA: string;
}

export interface Ids_oEduStudent {
    CD: string;
    DATA: string;
}

export interface Ids_oStatus1 {
    CD: string;
    DATA: string;
}

export interface Ids_ioPracticeEduJubsu {
}

export interface Ids_ioSerchGubun {
    CD: string;
    DATA: string;
}

export interface Ids_oSMSMMS {
    CD: string;
    DATA: string;
}

export interface Ids_oEduSubject {
    CD: string;
    DATA: string;
}

export interface Ids_ioEduIssue {
}

export interface Ids_iSms {
    MPK1: string;
    MPK2: string;
    MPK3: string;
    MRECVTEL: string;
    MRECVNM: string;
}

export interface Ids_iSmsEduData {
    EMGNO: string;
    ECUSTBARCODE: string;
    EFMHHPTEL: string;
    ECUSTFMNM: string;
}

export interface Ids_iSmsEduIssue {
    EPMGNO: string;
    CMGNO: string;
    HPTEL: string;
    EPPERSONNM: string;
}

export interface Ids_oBatchSendSeq {
}

export const useFrmcust1170MSmsSend = () => {
    const [ds_oJibu, setds_oJibu] = useState<Ids_oJibu[]>([]);
    const [ds_oRegion, setds_oRegion] = useState<Ids_oRegion[]>([]);
    const [ds_ioChoiceYn, setds_ioChoiceYn] = useState<Ids_ioChoiceYn[]>([]);
    const [ds_ioMemberGubun, setds_ioMemberGubun] = useState<Ids_ioMemberGubun[]>([]);
    const [ds_ioCourseYn, setds_ioCourseYn] = useState<Ids_ioCourseYn[]>([]);
    const [ds_oCourse, setds_oCourse] = useState<Ids_oCourse[]>([]);
    const [ds_oWorkGubun, setds_oWorkGubun] = useState<Ids_oWorkGubun[]>([]);
    const [ds_ioBusinessType, setds_ioBusinessType] = useState<Ids_ioBusinessType[]>([]);
    const [ds_ioSmsExam, setds_ioSmsExam] = useState<Ids_ioSmsExam[]>([]);
    const [ds_oIssueGubun, setds_oIssueGubun] = useState<Ids_oIssueGubun[]>([]);
    const [ds_ioEduDataHistoryResearchEduSms, setds_ioEduDataHistoryResearchEduSms] = useState<Ids_ioEduDataHistoryResearchEduSms[]>([]);
    const [ds_oEduGubun, setds_oEduGubun] = useState<Ids_oEduGubun[]>([]);
    const [ds_oEduStudent, setds_oEduStudent] = useState<Ids_oEduStudent[]>([]);
    const [ds_oStatus1, setds_oStatus1] = useState<Ids_oStatus1[]>([]);
    const [ds_ioPracticeEduJubsu, setds_ioPracticeEduJubsu] = useState<Ids_ioPracticeEduJubsu[]>([]);
    const [ds_ioSerchGubun, setds_ioSerchGubun] = useState<Ids_ioSerchGubun[]>([]);
    const [ds_oSMSMMS, setds_oSMSMMS] = useState<Ids_oSMSMMS[]>([]);
    const [ds_oEduSubject, setds_oEduSubject] = useState<Ids_oEduSubject[]>([]);
    const [ds_ioEduIssue, setds_ioEduIssue] = useState<Ids_ioEduIssue[]>([]);
    const [ds_iSms, setds_iSms] = useState<Ids_iSms[]>([]);
    const [ds_iSmsEduData, setds_iSmsEduData] = useState<Ids_iSmsEduData[]>([]);
    const [ds_iSmsEduIssue, setds_iSmsEduIssue] = useState<Ids_iSmsEduIssue[]>([]);
    const [ds_oBatchSendSeq, setds_oBatchSendSeq] = useState<Ids_oBatchSendSeq[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_oJibu([]);
            setds_oRegion([]);
            setds_ioChoiceYn([]);
            setds_ioMemberGubun([]);
            setds_ioCourseYn([]);
            setds_oCourse([]);
            setds_oWorkGubun([]);
            setds_ioBusinessType([]);
            setds_ioSmsExam([]);
            setds_oIssueGubun([]);
            setds_ioEduDataHistoryResearchEduSms([]);
            setds_oEduGubun([]);
            setds_oEduStudent([]);
            setds_oStatus1([]);
            setds_ioPracticeEduJubsu([]);
            setds_ioSerchGubun([]);
            setds_oSMSMMS([]);
            setds_oEduSubject([]);
            setds_ioEduIssue([]);
            setds_iSms([]);
            setds_iSmsEduData([]);
            setds_iSmsEduIssue([]);
            setds_oBatchSendSeq([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnSearchEduSchedule_OnClick = () => {
        console.log('btnSearchEduSchedule_OnClick clicked');
    };
    const chkReseve_OnClick = () => {
        console.log('chkReseve_OnClick clicked');
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
    const lfn_SMSPatternList = () => {
        console.log('lfn_SMSPatternList clicked');
    };
    const lfn_Search = () => {
        console.log('lfn_Search clicked');
    };
    const lfn_Send = () => {
        console.log('lfn_Send clicked');
    };
    const lfn_localExcel = () => {
        console.log('lfn_localExcel clicked');
    };
    const lfn_searchEduDataH = () => {
        console.log('lfn_searchEduDataH clicked');
    };

    return {
        isLoading,
        ds_oJibu,
        ds_oRegion,
        ds_ioChoiceYn,
        ds_ioMemberGubun,
        ds_ioCourseYn,
        ds_oCourse,
        ds_oWorkGubun,
        ds_ioBusinessType,
        ds_ioSmsExam,
        ds_oIssueGubun,
        ds_ioEduDataHistoryResearchEduSms,
        ds_oEduGubun,
        ds_oEduStudent,
        ds_oStatus1,
        ds_ioPracticeEduJubsu,
        ds_ioSerchGubun,
        ds_oSMSMMS,
        ds_oEduSubject,
        ds_ioEduIssue,
        ds_iSms,
        ds_iSmsEduData,
        ds_iSmsEduIssue,
        ds_oBatchSendSeq,
        btnSearchEduSchedule_OnClick,
        chkReseve_OnClick,
        lfn_Cancel,
        lfn_End,
        lfn_PrintScreen,
        lfn_SMSPatternList,
        lfn_Search,
        lfn_Send,
        lfn_localExcel,
        lfn_searchEduDataH,
    };
};