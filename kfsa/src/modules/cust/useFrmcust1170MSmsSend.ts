// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_oJibu, Ids_oRegion, Ids_ioChoiceYn, Ids_ioMemberGubun, Ids_ioCourseYn, Ids_oCourse, Ids_oWorkGubun, Ids_ioBusinessType, Ids_ioSmsExam, Ids_oIssueGubun, Ids_ioEduDataHistoryResearchEduSms, Ids_oEduGubun, Ids_oEduStudent, Ids_oStatus1, Ids_ioPracticeEduJubsu, Ids_ioSerchGubun, Ids_oSMSMMS, Ids_oEduSubject, Ids_ioEduIssue, Ids_iSms, Ids_iSmsEduData, Ids_iSmsEduIssue, Ids_oBatchSendSeq } from './Frmcust1170MSmsSendData';

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
    const [rawVisible_shpBtnBox, setRawVisible_shpBtnBox] = useState(true);
    const [rawVisible_divWorkFormTitle, setRawVisible_divWorkFormTitle] = useState(true);
    const [rawVisible_gdSms, setRawVisible_gdSms] = useState(true);
    const [rawVisible_btnSearch, setRawVisible_btnSearch] = useState(true);
    const [rawVisible_btnCancel, setRawVisible_btnCancel] = useState(true);
    const [rawVisible_btnToExcel, setRawVisible_btnToExcel] = useState(true);
    const [rawVisible_btnPrintScreen, setRawVisible_btnPrintScreen] = useState(true);
    const [rawVisible_btnEnd, setRawVisible_btnEnd] = useState(true);
    const [rawVisible_imgSmsTraining, setRawVisible_imgSmsTraining] = useState(true);
    const [rawVisible_taMessage, setRawVisible_taMessage] = useState(true);
    const [rawVisible_lbLength, setRawVisible_lbLength] = useState(true);
    const [rawVisible_lbTotalLength, setRawVisible_lbTotalLength] = useState(true);
    const [rawVisible_chkReseve, setRawVisible_chkReseve] = useState(true);
    const [rawVisible_medReserveTime, setRawVisible_medReserveTime] = useState(false);
    const [rawVisible_calReserveDate, setRawVisible_calReserveDate] = useState(false);
    const [rawVisible_edReplyNumber, setRawVisible_edReplyNumber] = useState(true);
    const [rawVisible_tabTab2, setRawVisible_tabTab2] = useState(true);
    const [rawVisible_lbCourse, setRawVisible_lbCourse] = useState(true);
    const [rawVisible_cbxCourse, setRawVisible_cbxCourse] = useState(true);
    const [rawVisible_lbJibu, setRawVisible_lbJibu] = useState(true);
    const [rawVisible_cbxJibu, setRawVisible_cbxJibu] = useState(true);
    const [rawVisible_lbWorkGubun, setRawVisible_lbWorkGubun] = useState(true);
    const [rawVisible_radWorkGubun, setRawVisible_radWorkGubun] = useState(true);
    const [rawVisible_Static0, setRawVisible_Static0] = useState(true);
    const [rawVisible_edYear, setRawVisible_edYear] = useState(true);
    const [rawVisible_Calendar0, setRawVisible_Calendar0] = useState(true);
    const [rawVisible_Static1, setRawVisible_Static1] = useState(true);
    const [rawVisible_Calendar1, setRawVisible_Calendar1] = useState(true);
    const [rawVisible_Static2, setRawVisible_Static2] = useState(true);
    const [rawVisible_Static3, setRawVisible_Static3] = useState(true);
    const [rawVisible_tmEduTimeStart, setRawVisible_tmEduTimeStart] = useState(true);
    const [rawVisible_tmEduTimeEnd, setRawVisible_tmEduTimeEnd] = useState(true);
    const [rawVisible_rdSearchGubun, setRawVisible_rdSearchGubun] = useState(true);
    const [rawVisible_Static4, setRawVisible_Static4] = useState(true);
    const [rawVisible_radJubsuStatus, setRawVisible_radJubsuStatus] = useState(true);
    const [rawVisible_lbTrainingOrder, setRawVisible_lbTrainingOrder] = useState(true);
    const [rawVisible_edEduOrderStart, setRawVisible_edEduOrderStart] = useState(true);
    const [rawVisible_lbNumberWave, setRawVisible_lbNumberWave] = useState(true);
    const [rawVisible_edEduOrderEnd, setRawVisible_edEduOrderEnd] = useState(true);
    const [rawVisible_Static5, setRawVisible_Static5] = useState(true);
    const [rawVisible_radCyberGubun, setRawVisible_radCyberGubun] = useState(true);
    const [rawVisible_Button2, setRawVisible_Button2] = useState(true);
    const [rawVisible_Shape2, setRawVisible_Shape2] = useState(true);
    const [rawVisible_edCourse, setRawVisible_edCourse] = useState(true);
    const [rawVisible_edTotalCnt, setRawVisible_edTotalCnt] = useState(true);
    const [rawVisible_edCreateCnt, setRawVisible_edCreateCnt] = useState(true);
    const [rawVisible_medJubsuCnt, setRawVisible_medJubsuCnt] = useState(true);
    const [rawVisible_medProcdate, setRawVisible_medProcdate] = useState(true);
    const [rawVisible_edPNM, setRawVisible_edPNM] = useState(true);
    const [rawVisible_Static8, setRawVisible_Static8] = useState(true);
    const [rawVisible_edEduPlace, setRawVisible_edEduPlace] = useState(true);
    const [rawVisible_Static7, setRawVisible_Static7] = useState(true);
    const [rawVisible_edCourseNm, setRawVisible_edCourseNm] = useState(true);
    const [rawVisible_lbStdYear, setRawVisible_lbStdYear] = useState(true);
    const [rawVisible_edEduYear, setRawVisible_edEduYear] = useState(true);
    const [rawVisible_edEduGubunNm, setRawVisible_edEduGubunNm] = useState(true);
    const [rawVisible_edEduStudentNm, setRawVisible_edEduStudentNm] = useState(true);
    const [rawVisible_edEduSubjectNm, setRawVisible_edEduSubjectNm] = useState(true);
    const [rawVisible_lbSeatCnt, setRawVisible_lbSeatCnt] = useState(true);
    const [rawVisible_medSeatCnt, setRawVisible_medSeatCnt] = useState(true);
    const [rawVisible_medEduDate, setRawVisible_medEduDate] = useState(true);
    const [rawVisible_btnSearchEduSchedule, setRawVisible_btnSearchEduSchedule] = useState(true);
    const [rawVisible_tmEduStartTime, setRawVisible_tmEduStartTime] = useState(true);
    const [rawVisible_lbTimeWave, setRawVisible_lbTimeWave] = useState(true);
    const [rawVisible_tmEduEndTime, setRawVisible_tmEduEndTime] = useState(true);
    const [rawVisible_edEsMgno, setRawVisible_edEsMgno] = useState(false);
    const [rawVisible_btnSend, setRawVisible_btnSend] = useState(true);
    const [rawVisible_lbAbsentCnt, setRawVisible_lbAbsentCnt] = useState(true);
    const [rawVisible_medSearchCnt, setRawVisible_medSearchCnt] = useState(true);
    const [rawVisible_medSMSCnt, setRawVisible_medSMSCnt] = useState(true);
    const [rawVisible_btnSearchSmsPattern, setRawVisible_btnSearchSmsPattern] = useState(true);
    const isVisible_shpBtnBox = rawVisible_shpBtnBox;
    const setIsVisible_shpBtnBox = setRawVisible_shpBtnBox;
    const isVisible_divWorkFormTitle = rawVisible_divWorkFormTitle;
    const setIsVisible_divWorkFormTitle = setRawVisible_divWorkFormTitle;
    const isVisible_gdSms = rawVisible_gdSms;
    const setIsVisible_gdSms = setRawVisible_gdSms;
    const isVisible_btnSearch = rawVisible_btnSearch && rawVisible_shpBtnBox;
    const setIsVisible_btnSearch = setRawVisible_btnSearch;
    const isVisible_btnCancel = rawVisible_btnCancel && rawVisible_shpBtnBox;
    const setIsVisible_btnCancel = setRawVisible_btnCancel;
    const isVisible_btnToExcel = rawVisible_btnToExcel && rawVisible_shpBtnBox;
    const setIsVisible_btnToExcel = setRawVisible_btnToExcel;
    const isVisible_btnPrintScreen = rawVisible_btnPrintScreen && rawVisible_shpBtnBox;
    const setIsVisible_btnPrintScreen = setRawVisible_btnPrintScreen;
    const isVisible_btnEnd = rawVisible_btnEnd && rawVisible_shpBtnBox;
    const setIsVisible_btnEnd = setRawVisible_btnEnd;
    const isVisible_imgSmsTraining = rawVisible_imgSmsTraining;
    const setIsVisible_imgSmsTraining = setRawVisible_imgSmsTraining;
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
    const isVisible_tabTab2 = rawVisible_tabTab2;
    const setIsVisible_tabTab2 = setRawVisible_tabTab2;
    const isVisible_lbCourse = rawVisible_lbCourse;
    const setIsVisible_lbCourse = setRawVisible_lbCourse;
    const isVisible_cbxCourse = rawVisible_cbxCourse;
    const setIsVisible_cbxCourse = setRawVisible_cbxCourse;
    const isVisible_lbJibu = rawVisible_lbJibu;
    const setIsVisible_lbJibu = setRawVisible_lbJibu;
    const isVisible_cbxJibu = rawVisible_cbxJibu;
    const setIsVisible_cbxJibu = setRawVisible_cbxJibu;
    const isVisible_lbWorkGubun = rawVisible_lbWorkGubun;
    const setIsVisible_lbWorkGubun = setRawVisible_lbWorkGubun;
    const isVisible_radWorkGubun = rawVisible_radWorkGubun;
    const setIsVisible_radWorkGubun = setRawVisible_radWorkGubun;
    const isVisible_Static0 = rawVisible_Static0;
    const setIsVisible_Static0 = setRawVisible_Static0;
    const isVisible_edYear = rawVisible_edYear;
    const setIsVisible_edYear = setRawVisible_edYear;
    const isVisible_Calendar0 = rawVisible_Calendar0;
    const setIsVisible_Calendar0 = setRawVisible_Calendar0;
    const isVisible_Static1 = rawVisible_Static1;
    const setIsVisible_Static1 = setRawVisible_Static1;
    const isVisible_Calendar1 = rawVisible_Calendar1;
    const setIsVisible_Calendar1 = setRawVisible_Calendar1;
    const isVisible_Static2 = rawVisible_Static2;
    const setIsVisible_Static2 = setRawVisible_Static2;
    const isVisible_Static3 = rawVisible_Static3;
    const setIsVisible_Static3 = setRawVisible_Static3;
    const isVisible_tmEduTimeStart = rawVisible_tmEduTimeStart;
    const setIsVisible_tmEduTimeStart = setRawVisible_tmEduTimeStart;
    const isVisible_tmEduTimeEnd = rawVisible_tmEduTimeEnd;
    const setIsVisible_tmEduTimeEnd = setRawVisible_tmEduTimeEnd;
    const isVisible_rdSearchGubun = rawVisible_rdSearchGubun;
    const setIsVisible_rdSearchGubun = setRawVisible_rdSearchGubun;
    const isVisible_Static4 = rawVisible_Static4;
    const setIsVisible_Static4 = setRawVisible_Static4;
    const isVisible_radJubsuStatus = rawVisible_radJubsuStatus;
    const setIsVisible_radJubsuStatus = setRawVisible_radJubsuStatus;
    const isVisible_lbTrainingOrder = rawVisible_lbTrainingOrder;
    const setIsVisible_lbTrainingOrder = setRawVisible_lbTrainingOrder;
    const isVisible_edEduOrderStart = rawVisible_edEduOrderStart;
    const setIsVisible_edEduOrderStart = setRawVisible_edEduOrderStart;
    const isVisible_lbNumberWave = rawVisible_lbNumberWave;
    const setIsVisible_lbNumberWave = setRawVisible_lbNumberWave;
    const isVisible_edEduOrderEnd = rawVisible_edEduOrderEnd;
    const setIsVisible_edEduOrderEnd = setRawVisible_edEduOrderEnd;
    const isVisible_Static5 = rawVisible_Static5;
    const setIsVisible_Static5 = setRawVisible_Static5;
    const isVisible_radCyberGubun = rawVisible_radCyberGubun;
    const setIsVisible_radCyberGubun = setRawVisible_radCyberGubun;
    const isVisible_Button2 = rawVisible_Button2;
    const setIsVisible_Button2 = setRawVisible_Button2;
    const isVisible_Shape2 = rawVisible_Shape2;
    const setIsVisible_Shape2 = setRawVisible_Shape2;
    const isVisible_edCourse = rawVisible_edCourse;
    const setIsVisible_edCourse = setRawVisible_edCourse;
    const isVisible_edTotalCnt = rawVisible_edTotalCnt;
    const setIsVisible_edTotalCnt = setRawVisible_edTotalCnt;
    const isVisible_edCreateCnt = rawVisible_edCreateCnt;
    const setIsVisible_edCreateCnt = setRawVisible_edCreateCnt;
    const isVisible_medJubsuCnt = rawVisible_medJubsuCnt;
    const setIsVisible_medJubsuCnt = setRawVisible_medJubsuCnt;
    const isVisible_medProcdate = rawVisible_medProcdate;
    const setIsVisible_medProcdate = setRawVisible_medProcdate;
    const isVisible_edPNM = rawVisible_edPNM;
    const setIsVisible_edPNM = setRawVisible_edPNM;
    const isVisible_Static8 = rawVisible_Static8;
    const setIsVisible_Static8 = setRawVisible_Static8;
    const isVisible_edEduPlace = rawVisible_edEduPlace;
    const setIsVisible_edEduPlace = setRawVisible_edEduPlace;
    const isVisible_Static7 = rawVisible_Static7;
    const setIsVisible_Static7 = setRawVisible_Static7;
    const isVisible_edCourseNm = rawVisible_edCourseNm;
    const setIsVisible_edCourseNm = setRawVisible_edCourseNm;
    const isVisible_lbStdYear = rawVisible_lbStdYear;
    const setIsVisible_lbStdYear = setRawVisible_lbStdYear;
    const isVisible_edEduYear = rawVisible_edEduYear;
    const setIsVisible_edEduYear = setRawVisible_edEduYear;
    const isVisible_edEduGubunNm = rawVisible_edEduGubunNm;
    const setIsVisible_edEduGubunNm = setRawVisible_edEduGubunNm;
    const isVisible_edEduStudentNm = rawVisible_edEduStudentNm;
    const setIsVisible_edEduStudentNm = setRawVisible_edEduStudentNm;
    const isVisible_edEduSubjectNm = rawVisible_edEduSubjectNm;
    const setIsVisible_edEduSubjectNm = setRawVisible_edEduSubjectNm;
    const isVisible_lbSeatCnt = rawVisible_lbSeatCnt;
    const setIsVisible_lbSeatCnt = setRawVisible_lbSeatCnt;
    const isVisible_medSeatCnt = rawVisible_medSeatCnt;
    const setIsVisible_medSeatCnt = setRawVisible_medSeatCnt;
    const isVisible_medEduDate = rawVisible_medEduDate;
    const setIsVisible_medEduDate = setRawVisible_medEduDate;
    const isVisible_btnSearchEduSchedule = rawVisible_btnSearchEduSchedule;
    const setIsVisible_btnSearchEduSchedule = setRawVisible_btnSearchEduSchedule;
    const isVisible_tmEduStartTime = rawVisible_tmEduStartTime;
    const setIsVisible_tmEduStartTime = setRawVisible_tmEduStartTime;
    const isVisible_lbTimeWave = rawVisible_lbTimeWave;
    const setIsVisible_lbTimeWave = setRawVisible_lbTimeWave;
    const isVisible_tmEduEndTime = rawVisible_tmEduEndTime;
    const setIsVisible_tmEduEndTime = setRawVisible_tmEduEndTime;
    const isVisible_edEsMgno = rawVisible_edEsMgno;
    const setIsVisible_edEsMgno = setRawVisible_edEsMgno;
    const isVisible_btnSend = rawVisible_btnSend;
    const setIsVisible_btnSend = setRawVisible_btnSend;
    const isVisible_lbAbsentCnt = rawVisible_lbAbsentCnt;
    const setIsVisible_lbAbsentCnt = setRawVisible_lbAbsentCnt;
    const isVisible_medSearchCnt = rawVisible_medSearchCnt;
    const setIsVisible_medSearchCnt = setRawVisible_medSearchCnt;
    const isVisible_medSMSCnt = rawVisible_medSMSCnt;
    const setIsVisible_medSMSCnt = setRawVisible_medSMSCnt;
    const isVisible_btnSearchSmsPattern = rawVisible_btnSearchSmsPattern;
    const setIsVisible_btnSearchSmsPattern = setRawVisible_btnSearchSmsPattern;
    const [tabValue_tabTab2, setTabValue_tabTab2] = useState(0);

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
        isVisible_shpBtnBox,
        setIsVisible_shpBtnBox,
        isVisible_divWorkFormTitle,
        setIsVisible_divWorkFormTitle,
        isVisible_gdSms,
        setIsVisible_gdSms,
        isVisible_btnSearch,
        setIsVisible_btnSearch,
        isVisible_btnCancel,
        setIsVisible_btnCancel,
        isVisible_btnToExcel,
        setIsVisible_btnToExcel,
        isVisible_btnPrintScreen,
        setIsVisible_btnPrintScreen,
        isVisible_btnEnd,
        setIsVisible_btnEnd,
        isVisible_imgSmsTraining,
        setIsVisible_imgSmsTraining,
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
        isVisible_tabTab2,
        setIsVisible_tabTab2,
        isVisible_lbCourse,
        setIsVisible_lbCourse,
        isVisible_cbxCourse,
        setIsVisible_cbxCourse,
        isVisible_lbJibu,
        setIsVisible_lbJibu,
        isVisible_cbxJibu,
        setIsVisible_cbxJibu,
        isVisible_lbWorkGubun,
        setIsVisible_lbWorkGubun,
        isVisible_radWorkGubun,
        setIsVisible_radWorkGubun,
        isVisible_Static0,
        setIsVisible_Static0,
        isVisible_edYear,
        setIsVisible_edYear,
        isVisible_Calendar0,
        setIsVisible_Calendar0,
        isVisible_Static1,
        setIsVisible_Static1,
        isVisible_Calendar1,
        setIsVisible_Calendar1,
        isVisible_Static2,
        setIsVisible_Static2,
        isVisible_Static3,
        setIsVisible_Static3,
        isVisible_tmEduTimeStart,
        setIsVisible_tmEduTimeStart,
        isVisible_tmEduTimeEnd,
        setIsVisible_tmEduTimeEnd,
        isVisible_rdSearchGubun,
        setIsVisible_rdSearchGubun,
        isVisible_Static4,
        setIsVisible_Static4,
        isVisible_radJubsuStatus,
        setIsVisible_radJubsuStatus,
        isVisible_lbTrainingOrder,
        setIsVisible_lbTrainingOrder,
        isVisible_edEduOrderStart,
        setIsVisible_edEduOrderStart,
        isVisible_lbNumberWave,
        setIsVisible_lbNumberWave,
        isVisible_edEduOrderEnd,
        setIsVisible_edEduOrderEnd,
        isVisible_Static5,
        setIsVisible_Static5,
        isVisible_radCyberGubun,
        setIsVisible_radCyberGubun,
        isVisible_Button2,
        setIsVisible_Button2,
        isVisible_Shape2,
        setIsVisible_Shape2,
        isVisible_edCourse,
        setIsVisible_edCourse,
        isVisible_edTotalCnt,
        setIsVisible_edTotalCnt,
        isVisible_edCreateCnt,
        setIsVisible_edCreateCnt,
        isVisible_medJubsuCnt,
        setIsVisible_medJubsuCnt,
        isVisible_medProcdate,
        setIsVisible_medProcdate,
        isVisible_edPNM,
        setIsVisible_edPNM,
        isVisible_Static8,
        setIsVisible_Static8,
        isVisible_edEduPlace,
        setIsVisible_edEduPlace,
        isVisible_Static7,
        setIsVisible_Static7,
        isVisible_edCourseNm,
        setIsVisible_edCourseNm,
        isVisible_lbStdYear,
        setIsVisible_lbStdYear,
        isVisible_edEduYear,
        setIsVisible_edEduYear,
        isVisible_edEduGubunNm,
        setIsVisible_edEduGubunNm,
        isVisible_edEduStudentNm,
        setIsVisible_edEduStudentNm,
        isVisible_edEduSubjectNm,
        setIsVisible_edEduSubjectNm,
        isVisible_lbSeatCnt,
        setIsVisible_lbSeatCnt,
        isVisible_medSeatCnt,
        setIsVisible_medSeatCnt,
        isVisible_medEduDate,
        setIsVisible_medEduDate,
        isVisible_btnSearchEduSchedule,
        setIsVisible_btnSearchEduSchedule,
        isVisible_tmEduStartTime,
        setIsVisible_tmEduStartTime,
        isVisible_lbTimeWave,
        setIsVisible_lbTimeWave,
        isVisible_tmEduEndTime,
        setIsVisible_tmEduEndTime,
        isVisible_edEsMgno,
        setIsVisible_edEsMgno,
        isVisible_btnSend,
        setIsVisible_btnSend,
        isVisible_lbAbsentCnt,
        setIsVisible_lbAbsentCnt,
        isVisible_medSearchCnt,
        setIsVisible_medSearchCnt,
        isVisible_medSMSCnt,
        setIsVisible_medSMSCnt,
        isVisible_btnSearchSmsPattern,
        setIsVisible_btnSearchSmsPattern,
        tabValue_tabTab2,
        setTabValue_tabTab2,
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