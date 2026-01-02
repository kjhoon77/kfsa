// @ts-nocheck
import { useState, useEffect } from 'react';

export interface Ids_ioSmsTraining {
    SEL: string;
    PGUBUN: string;
    TCCOURSECD: string;
    TJMGNO: string;
    TJMGNO2: string;
    TJPERSONNM: string;
    TOENDDATE: string;
    TOMGNO: string;
    TOSTARTDATE: string;
    TOTRAININGORDER: string;
    TOYEAR: string;
    TPHPTEL: string;
    TPMGNO: string;
    GTDEPTCD: string;
    TSREPAYCD: string;
    RECVTEL: string;
    SMMSG: string;
    SHSENDRESVTIME1: string;
    SHSENDRESVTIME2: string;
    PDEPTCD: string;
    PSABUN: string;
    TOHJUBSUNO: string;
    TOHJUBSUNO2: string;
    JUBSUNO2: string;
    JUBSUNO: string;
    TJLASTSUNAPGUBUN: string;
    TJPASSYN: string;
    TRAN_SUBJECT: string;
}

export interface Ids_oRegion {
    CD: string;
    DATA: string;
}

export interface Ids_oTrainingPassYn {
    CD: string;
    DATA: string;
}

export interface Ids_oSunapYn {
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

export interface Ids_oExamPassYn {
    CD: string;
    DATA: string;
}

export interface Ids_ioSmsExam {
    SEL: string;
    ESPASSYN: string;
    GTDEPTCD: string;
    EOCOURSECD: string;
    EJMGNO: string;
    EJMGNO2: string;
    TPPERSONNM: string;
    EOMGNO: string;
    EOEXAMDATE: string;
    EOEXAMORDER: string;
    EOYEAR: string;
    TPHPTEL: string;
    TPMGNO: string;
    ESREPAYCD: string;
    RECVTEL: string;
    SMMSG: string;
    SHSENDRESVTIME1: string;
    SHSENDRESVTIME2: string;
    PDEPTCD: string;
    PSABUN: string;
    EOHEJMGNO: string;
    EOMGGTMGNO: string;
    TOTCCOURSECD: string;
    TOYEAR: string;
    TOTRAININGORDER: string;
    TRAN_SUBJECT: string;
}

export interface Ids_oJibu {
    CD: string;
    DATA: string;
}

export interface Ids_oSMSMMS {
    CD: string;
    DATA: string;
}

export interface Ids_SendYN {
    CD: string;
    DATA: string;
}

export interface Ids_ioSmsSpeaker {
}

export interface Ids_ioSmsSupervisor {
}

export interface Ids_ioSms {
}

export interface Ids_oBatchSendSeq {
    O_BSMGNO: string;
}

export interface Ids_oEvaluationPassYn {
    CD: string;
    DATA: string;
}

export const useFrmtraining0680MSMSSendManagement = () => {
    const [ds_ioSmsTraining, setds_ioSmsTraining] = useState<Ids_ioSmsTraining[]>([]);
    const [ds_oRegion, setds_oRegion] = useState<Ids_oRegion[]>([]);
    const [ds_oTrainingPassYn, setds_oTrainingPassYn] = useState<Ids_oTrainingPassYn[]>([]);
    const [ds_oSunapYn, setds_oSunapYn] = useState<Ids_oSunapYn[]>([]);
    const [ds_oCourse, setds_oCourse] = useState<Ids_oCourse[]>([]);
    const [ds_oWorkGubun, setds_oWorkGubun] = useState<Ids_oWorkGubun[]>([]);
    const [ds_oExamPassYn, setds_oExamPassYn] = useState<Ids_oExamPassYn[]>([]);
    const [ds_ioSmsExam, setds_ioSmsExam] = useState<Ids_ioSmsExam[]>([]);
    const [ds_oJibu, setds_oJibu] = useState<Ids_oJibu[]>([]);
    const [ds_oSMSMMS, setds_oSMSMMS] = useState<Ids_oSMSMMS[]>([]);
    const [ds_SendYN, setds_SendYN] = useState<Ids_SendYN[]>([]);
    const [ds_ioSmsSpeaker, setds_ioSmsSpeaker] = useState<Ids_ioSmsSpeaker[]>([]);
    const [ds_ioSmsSupervisor, setds_ioSmsSupervisor] = useState<Ids_ioSmsSupervisor[]>([]);
    const [ds_ioSms, setds_ioSms] = useState<Ids_ioSms[]>([]);
    const [ds_oBatchSendSeq, setds_oBatchSendSeq] = useState<Ids_oBatchSendSeq[]>([]);
    const [ds_oEvaluationPassYn, setds_oEvaluationPassYn] = useState<Ids_oEvaluationPassYn[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_ioSmsTraining([]);
            setds_oRegion([]);
            setds_oTrainingPassYn([]);
            setds_oSunapYn([]);
            setds_oCourse([]);
            setds_oWorkGubun([]);
            setds_oExamPassYn([]);
            setds_ioSmsExam([]);
            setds_oJibu([]);
            setds_oSMSMMS([]);
            setds_SendYN([]);
            setds_ioSmsSpeaker([]);
            setds_ioSmsSupervisor([]);
            setds_ioSms([]);
            setds_oBatchSendSeq([]);
            setds_oEvaluationPassYn([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnMutilSort_OnClick = () => {
        console.log('btnMutilSort_OnClick clicked');
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
    const lfn_SendList = () => {
        console.log('lfn_SendList clicked');
    };

    return {
        isLoading,
        ds_ioSmsTraining,
        ds_oRegion,
        ds_oTrainingPassYn,
        ds_oSunapYn,
        ds_oCourse,
        ds_oWorkGubun,
        ds_oExamPassYn,
        ds_ioSmsExam,
        ds_oJibu,
        ds_oSMSMMS,
        ds_SendYN,
        ds_ioSmsSpeaker,
        ds_ioSmsSupervisor,
        ds_ioSms,
        ds_oBatchSendSeq,
        ds_oEvaluationPassYn,
        btnMutilSort_OnClick,
        chkReseve_OnClick,
        lfn_Cancel,
        lfn_End,
        lfn_PrintScreen,
        lfn_SMSPatternList,
        lfn_Search,
        lfn_Send,
        lfn_SendList,
    };
};