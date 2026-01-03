// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_ioSmsTraining, Ids_oRegion, Ids_oTrainingPassYn, Ids_oSunapYn, Ids_oCourse, Ids_oWorkGubun, Ids_oExamPassYn, Ids_ioSmsExam, Ids_oJibu, Ids_oSMSMMS, Ids_SendYN, Ids_ioSmsSpeaker, Ids_ioSmsSupervisor, Ids_ioSms, Ids_oBatchSendSeq, Ids_oEvaluationPassYn } from './Frmtraining0680MSMSSendManagementData';

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
    const [rawVisible_Shape2, setRawVisible_Shape2] = useState(true);
    const [rawVisible_imgSmsTraining, setRawVisible_imgSmsTraining] = useState(true);
    const [rawVisible_divWork4, setRawVisible_divWork4] = useState(false);
    const [rawVisible_lbSupervisor, setRawVisible_lbSupervisor] = useState(true);
    const [rawVisible_edSupervisor, setRawVisible_edSupervisor] = useState(true);
    const [rawVisible_lbJibu4, setRawVisible_lbJibu4] = useState(true);
    const [rawVisible_cbxJibu4, setRawVisible_cbxJibu4] = useState(true);
    const [rawVisible_divWork3, setRawVisible_divWork3] = useState(false);
    const [rawVisible_lbTrainingPassYn, setRawVisible_lbTrainingPassYn] = useState(true);
    const [rawVisible_lbSpeaker, setRawVisible_lbSpeaker] = useState(true);
    const [rawVisible_edSpeaker, setRawVisible_edSpeaker] = useState(true);
    const [rawVisible_radSendYN, setRawVisible_radSendYN] = useState(true);
    const [rawVisible_lbJibu3, setRawVisible_lbJibu3] = useState(true);
    const [rawVisible_cbxJibu3, setRawVisible_cbxJibu3] = useState(true);
    const [rawVisible_shpBtnBox, setRawVisible_shpBtnBox] = useState(true);
    const [rawVisible_shpGubunBox, setRawVisible_shpGubunBox] = useState(true);
    const [rawVisible_divWorkFormTitle, setRawVisible_divWorkFormTitle] = useState(true);
    const [rawVisible_gdSms, setRawVisible_gdSms] = useState(true);
    const [rawVisible_btnMutilSort, setRawVisible_btnMutilSort] = useState(true);
    const [rawVisible_btnSearch, setRawVisible_btnSearch] = useState(true);
    const [rawVisible_btnSend, setRawVisible_btnSend] = useState(true);
    const [rawVisible_btnCancel, setRawVisible_btnCancel] = useState(true);
    const [rawVisible_btnPrintScreen, setRawVisible_btnPrintScreen] = useState(true);
    const [rawVisible_btnEnd, setRawVisible_btnEnd] = useState(true);
    const [rawVisible_taMessage, setRawVisible_taMessage] = useState(true);
    const [rawVisible_lbLength, setRawVisible_lbLength] = useState(true);
    const [rawVisible_lbTotalLength, setRawVisible_lbTotalLength] = useState(true);
    const [rawVisible_chkReseve, setRawVisible_chkReseve] = useState(true);
    const [rawVisible_medReserveTime, setRawVisible_medReserveTime] = useState(false);
    const [rawVisible_calReserveDate, setRawVisible_calReserveDate] = useState(false);
    const [rawVisible_edReplyNumber, setRawVisible_edReplyNumber] = useState(true);
    const [rawVisible_lbWorkGubun, setRawVisible_lbWorkGubun] = useState(true);
    const [rawVisible_radWorkGubun, setRawVisible_radWorkGubun] = useState(true);
    const [rawVisible_btnSerchSmsList, setRawVisible_btnSerchSmsList] = useState(true);
    const [rawVisible_btnSearchSmsPattern, setRawVisible_btnSearchSmsPattern] = useState(true);
    const [rawVisible_divWork1, setRawVisible_divWork1] = useState(true);
    const [rawVisible_lbExamPassYn, setRawVisible_lbExamPassYn] = useState(true);
    const [rawVisible_lbCourse, setRawVisible_lbCourse] = useState(true);
    const [rawVisible_cbxCourse, setRawVisible_cbxCourse] = useState(true);
    const [rawVisible_lbYear, setRawVisible_lbYear] = useState(true);
    const [rawVisible_edYear, setRawVisible_edYear] = useState(true);
    const [rawVisible_lbTrainingOrder, setRawVisible_lbTrainingOrder] = useState(true);
    const [rawVisible_edTrainingOrder, setRawVisible_edTrainingOrder] = useState(true);
    const [rawVisible_lbRepayYn, setRawVisible_lbRepayYn] = useState(true);
    const [rawVisible_radExamPassYn, setRawVisible_radExamPassYn] = useState(false);
    const [rawVisible_radSunapYn, setRawVisible_radSunapYn] = useState(true);
    const [rawVisible_lbJubsuSeq, setRawVisible_lbJubsuSeq] = useState(true);
    const [rawVisible_edJubsuSeqStart, setRawVisible_edJubsuSeqStart] = useState(true);
    const [rawVisible_lbNumberWave, setRawVisible_lbNumberWave] = useState(true);
    const [rawVisible_edJubsuSeqEnd, setRawVisible_edJubsuSeqEnd] = useState(true);
    const [rawVisible_radTrainingPassYn, setRawVisible_radTrainingPassYn] = useState(true);
    const [rawVisible_lbJibu, setRawVisible_lbJibu] = useState(true);
    const [rawVisible_cbxJibu, setRawVisible_cbxJibu] = useState(true);
    const [rawVisible_lbEvaluationPassYn, setRawVisible_lbEvaluationPassYn] = useState(true);
    const [rawVisible_radEvaluationPassYn, setRawVisible_radEvaluationPassYn] = useState(true);
    const [rawVisible_lbSmsCnt, setRawVisible_lbSmsCnt] = useState(true);
    const [rawVisible_medSmsCnt, setRawVisible_medSmsCnt] = useState(true);
    const [rawVisible_lbSearchCnt, setRawVisible_lbSearchCnt] = useState(true);
    const [rawVisible_medSearchCnt, setRawVisible_medSearchCnt] = useState(true);
    const [rawVisible_Static14, setRawVisible_Static14] = useState(true);
    const isVisible_Shape2 = rawVisible_Shape2;
    const setIsVisible_Shape2 = setRawVisible_Shape2;
    const isVisible_imgSmsTraining = rawVisible_imgSmsTraining;
    const setIsVisible_imgSmsTraining = setRawVisible_imgSmsTraining;
    const isVisible_divWork4 = rawVisible_divWork4 && rawVisible_divWork3;
    const setIsVisible_divWork4 = setRawVisible_divWork4;
    const isVisible_lbSupervisor = rawVisible_lbSupervisor;
    const setIsVisible_lbSupervisor = setRawVisible_lbSupervisor;
    const isVisible_edSupervisor = rawVisible_edSupervisor;
    const setIsVisible_edSupervisor = setRawVisible_edSupervisor;
    const isVisible_lbJibu4 = rawVisible_lbJibu4 && rawVisible_divWorkFormTitle;
    const setIsVisible_lbJibu4 = setRawVisible_lbJibu4;
    const isVisible_cbxJibu4 = rawVisible_cbxJibu4 && rawVisible_divWorkFormTitle;
    const setIsVisible_cbxJibu4 = setRawVisible_cbxJibu4;
    const isVisible_divWork3 = rawVisible_divWork3 && rawVisible_divWork4;
    const setIsVisible_divWork3 = setRawVisible_divWork3;
    const isVisible_lbTrainingPassYn = rawVisible_lbTrainingPassYn;
    const setIsVisible_lbTrainingPassYn = setRawVisible_lbTrainingPassYn;
    const isVisible_lbSpeaker = rawVisible_lbSpeaker;
    const setIsVisible_lbSpeaker = setRawVisible_lbSpeaker;
    const isVisible_edSpeaker = rawVisible_edSpeaker;
    const setIsVisible_edSpeaker = setRawVisible_edSpeaker;
    const isVisible_radSendYN = rawVisible_radSendYN;
    const setIsVisible_radSendYN = setRawVisible_radSendYN;
    const isVisible_lbJibu3 = rawVisible_lbJibu3 && rawVisible_divWorkFormTitle;
    const setIsVisible_lbJibu3 = setRawVisible_lbJibu3;
    const isVisible_cbxJibu3 = rawVisible_cbxJibu3 && rawVisible_divWorkFormTitle;
    const setIsVisible_cbxJibu3 = setRawVisible_cbxJibu3;
    const isVisible_shpBtnBox = rawVisible_shpBtnBox;
    const setIsVisible_shpBtnBox = setRawVisible_shpBtnBox;
    const isVisible_shpGubunBox = rawVisible_shpGubunBox;
    const setIsVisible_shpGubunBox = setRawVisible_shpGubunBox;
    const isVisible_divWorkFormTitle = rawVisible_divWorkFormTitle;
    const setIsVisible_divWorkFormTitle = setRawVisible_divWorkFormTitle;
    const isVisible_gdSms = rawVisible_gdSms;
    const setIsVisible_gdSms = setRawVisible_gdSms;
    const isVisible_btnMutilSort = rawVisible_btnMutilSort;
    const setIsVisible_btnMutilSort = setRawVisible_btnMutilSort;
    const isVisible_btnSearch = rawVisible_btnSearch && rawVisible_shpBtnBox;
    const setIsVisible_btnSearch = setRawVisible_btnSearch;
    const isVisible_btnSend = rawVisible_btnSend;
    const setIsVisible_btnSend = setRawVisible_btnSend;
    const isVisible_btnCancel = rawVisible_btnCancel && rawVisible_shpBtnBox;
    const setIsVisible_btnCancel = setRawVisible_btnCancel;
    const isVisible_btnPrintScreen = rawVisible_btnPrintScreen && rawVisible_shpBtnBox;
    const setIsVisible_btnPrintScreen = setRawVisible_btnPrintScreen;
    const isVisible_btnEnd = rawVisible_btnEnd && rawVisible_shpBtnBox;
    const setIsVisible_btnEnd = setRawVisible_btnEnd;
    const isVisible_taMessage = rawVisible_taMessage;
    const setIsVisible_taMessage = setRawVisible_taMessage;
    const isVisible_lbLength = rawVisible_lbLength;
    const setIsVisible_lbLength = setRawVisible_lbLength;
    const isVisible_lbTotalLength = rawVisible_lbTotalLength;
    const setIsVisible_lbTotalLength = setRawVisible_lbTotalLength;
    const isVisible_chkReseve = rawVisible_chkReseve;
    const setIsVisible_chkReseve = setRawVisible_chkReseve;
    const isVisible_medReserveTime = rawVisible_medReserveTime;
    const setIsVisible_medReserveTime = setRawVisible_medReserveTime;
    const isVisible_calReserveDate = rawVisible_calReserveDate;
    const setIsVisible_calReserveDate = setRawVisible_calReserveDate;
    const isVisible_edReplyNumber = rawVisible_edReplyNumber;
    const setIsVisible_edReplyNumber = setRawVisible_edReplyNumber;
    const isVisible_lbWorkGubun = rawVisible_lbWorkGubun && rawVisible_shpGubunBox;
    const setIsVisible_lbWorkGubun = setRawVisible_lbWorkGubun;
    const isVisible_radWorkGubun = rawVisible_radWorkGubun && rawVisible_shpGubunBox;
    const setIsVisible_radWorkGubun = setRawVisible_radWorkGubun;
    const isVisible_btnSerchSmsList = rawVisible_btnSerchSmsList && rawVisible_shpBtnBox;
    const setIsVisible_btnSerchSmsList = setRawVisible_btnSerchSmsList;
    const isVisible_btnSearchSmsPattern = rawVisible_btnSearchSmsPattern;
    const setIsVisible_btnSearchSmsPattern = setRawVisible_btnSearchSmsPattern;
    const isVisible_divWork1 = rawVisible_divWork1;
    const setIsVisible_divWork1 = setRawVisible_divWork1;
    const isVisible_lbExamPassYn = rawVisible_lbExamPassYn;
    const setIsVisible_lbExamPassYn = setRawVisible_lbExamPassYn;
    const isVisible_lbCourse = rawVisible_lbCourse;
    const setIsVisible_lbCourse = setRawVisible_lbCourse;
    const isVisible_cbxCourse = rawVisible_cbxCourse;
    const setIsVisible_cbxCourse = setRawVisible_cbxCourse;
    const isVisible_lbYear = rawVisible_lbYear;
    const setIsVisible_lbYear = setRawVisible_lbYear;
    const isVisible_edYear = rawVisible_edYear;
    const setIsVisible_edYear = setRawVisible_edYear;
    const isVisible_lbTrainingOrder = rawVisible_lbTrainingOrder;
    const setIsVisible_lbTrainingOrder = setRawVisible_lbTrainingOrder;
    const isVisible_edTrainingOrder = rawVisible_edTrainingOrder;
    const setIsVisible_edTrainingOrder = setRawVisible_edTrainingOrder;
    const isVisible_lbRepayYn = rawVisible_lbRepayYn;
    const setIsVisible_lbRepayYn = setRawVisible_lbRepayYn;
    const isVisible_radExamPassYn = rawVisible_radExamPassYn && rawVisible_divWork4;
    const setIsVisible_radExamPassYn = setRawVisible_radExamPassYn;
    const isVisible_radSunapYn = rawVisible_radSunapYn;
    const setIsVisible_radSunapYn = setRawVisible_radSunapYn;
    const isVisible_lbJubsuSeq = rawVisible_lbJubsuSeq;
    const setIsVisible_lbJubsuSeq = setRawVisible_lbJubsuSeq;
    const isVisible_edJubsuSeqStart = rawVisible_edJubsuSeqStart;
    const setIsVisible_edJubsuSeqStart = setRawVisible_edJubsuSeqStart;
    const isVisible_lbNumberWave = rawVisible_lbNumberWave;
    const setIsVisible_lbNumberWave = setRawVisible_lbNumberWave;
    const isVisible_edJubsuSeqEnd = rawVisible_edJubsuSeqEnd;
    const setIsVisible_edJubsuSeqEnd = setRawVisible_edJubsuSeqEnd;
    const isVisible_radTrainingPassYn = rawVisible_radTrainingPassYn && rawVisible_divWork4;
    const setIsVisible_radTrainingPassYn = setRawVisible_radTrainingPassYn;
    const isVisible_lbJibu = rawVisible_lbJibu && rawVisible_divWorkFormTitle;
    const setIsVisible_lbJibu = setRawVisible_lbJibu;
    const isVisible_cbxJibu = rawVisible_cbxJibu && rawVisible_divWorkFormTitle;
    const setIsVisible_cbxJibu = setRawVisible_cbxJibu;
    const isVisible_lbEvaluationPassYn = rawVisible_lbEvaluationPassYn;
    const setIsVisible_lbEvaluationPassYn = setRawVisible_lbEvaluationPassYn;
    const isVisible_radEvaluationPassYn = rawVisible_radEvaluationPassYn && rawVisible_divWork4;
    const setIsVisible_radEvaluationPassYn = setRawVisible_radEvaluationPassYn;
    const isVisible_lbSmsCnt = rawVisible_lbSmsCnt;
    const setIsVisible_lbSmsCnt = setRawVisible_lbSmsCnt;
    const isVisible_medSmsCnt = rawVisible_medSmsCnt;
    const setIsVisible_medSmsCnt = setRawVisible_medSmsCnt;
    const isVisible_lbSearchCnt = rawVisible_lbSearchCnt;
    const setIsVisible_lbSearchCnt = setRawVisible_lbSearchCnt;
    const isVisible_medSearchCnt = rawVisible_medSearchCnt;
    const setIsVisible_medSearchCnt = setRawVisible_medSearchCnt;
    const isVisible_Static14 = rawVisible_Static14 && rawVisible_Shape2;
    const setIsVisible_Static14 = setRawVisible_Static14;

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
        isVisible_Shape2,
        setIsVisible_Shape2,
        isVisible_imgSmsTraining,
        setIsVisible_imgSmsTraining,
        isVisible_divWork4,
        setIsVisible_divWork4,
        isVisible_lbSupervisor,
        setIsVisible_lbSupervisor,
        isVisible_edSupervisor,
        setIsVisible_edSupervisor,
        isVisible_lbJibu4,
        setIsVisible_lbJibu4,
        isVisible_cbxJibu4,
        setIsVisible_cbxJibu4,
        isVisible_divWork3,
        setIsVisible_divWork3,
        isVisible_lbTrainingPassYn,
        setIsVisible_lbTrainingPassYn,
        isVisible_lbSpeaker,
        setIsVisible_lbSpeaker,
        isVisible_edSpeaker,
        setIsVisible_edSpeaker,
        isVisible_radSendYN,
        setIsVisible_radSendYN,
        isVisible_lbJibu3,
        setIsVisible_lbJibu3,
        isVisible_cbxJibu3,
        setIsVisible_cbxJibu3,
        isVisible_shpBtnBox,
        setIsVisible_shpBtnBox,
        isVisible_shpGubunBox,
        setIsVisible_shpGubunBox,
        isVisible_divWorkFormTitle,
        setIsVisible_divWorkFormTitle,
        isVisible_gdSms,
        setIsVisible_gdSms,
        isVisible_btnMutilSort,
        setIsVisible_btnMutilSort,
        isVisible_btnSearch,
        setIsVisible_btnSearch,
        isVisible_btnSend,
        setIsVisible_btnSend,
        isVisible_btnCancel,
        setIsVisible_btnCancel,
        isVisible_btnPrintScreen,
        setIsVisible_btnPrintScreen,
        isVisible_btnEnd,
        setIsVisible_btnEnd,
        isVisible_taMessage,
        setIsVisible_taMessage,
        isVisible_lbLength,
        setIsVisible_lbLength,
        isVisible_lbTotalLength,
        setIsVisible_lbTotalLength,
        isVisible_chkReseve,
        setIsVisible_chkReseve,
        isVisible_medReserveTime,
        setIsVisible_medReserveTime,
        isVisible_calReserveDate,
        setIsVisible_calReserveDate,
        isVisible_edReplyNumber,
        setIsVisible_edReplyNumber,
        isVisible_lbWorkGubun,
        setIsVisible_lbWorkGubun,
        isVisible_radWorkGubun,
        setIsVisible_radWorkGubun,
        isVisible_btnSerchSmsList,
        setIsVisible_btnSerchSmsList,
        isVisible_btnSearchSmsPattern,
        setIsVisible_btnSearchSmsPattern,
        isVisible_divWork1,
        setIsVisible_divWork1,
        isVisible_lbExamPassYn,
        setIsVisible_lbExamPassYn,
        isVisible_lbCourse,
        setIsVisible_lbCourse,
        isVisible_cbxCourse,
        setIsVisible_cbxCourse,
        isVisible_lbYear,
        setIsVisible_lbYear,
        isVisible_edYear,
        setIsVisible_edYear,
        isVisible_lbTrainingOrder,
        setIsVisible_lbTrainingOrder,
        isVisible_edTrainingOrder,
        setIsVisible_edTrainingOrder,
        isVisible_lbRepayYn,
        setIsVisible_lbRepayYn,
        isVisible_radExamPassYn,
        setIsVisible_radExamPassYn,
        isVisible_radSunapYn,
        setIsVisible_radSunapYn,
        isVisible_lbJubsuSeq,
        setIsVisible_lbJubsuSeq,
        isVisible_edJubsuSeqStart,
        setIsVisible_edJubsuSeqStart,
        isVisible_lbNumberWave,
        setIsVisible_lbNumberWave,
        isVisible_edJubsuSeqEnd,
        setIsVisible_edJubsuSeqEnd,
        isVisible_radTrainingPassYn,
        setIsVisible_radTrainingPassYn,
        isVisible_lbJibu,
        setIsVisible_lbJibu,
        isVisible_cbxJibu,
        setIsVisible_cbxJibu,
        isVisible_lbEvaluationPassYn,
        setIsVisible_lbEvaluationPassYn,
        isVisible_radEvaluationPassYn,
        setIsVisible_radEvaluationPassYn,
        isVisible_lbSmsCnt,
        setIsVisible_lbSmsCnt,
        isVisible_medSmsCnt,
        setIsVisible_medSmsCnt,
        isVisible_lbSearchCnt,
        setIsVisible_lbSearchCnt,
        isVisible_medSearchCnt,
        setIsVisible_medSearchCnt,
        isVisible_Static14,
        setIsVisible_Static14,
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