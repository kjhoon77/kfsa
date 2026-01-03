// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_ioSmsStat, Ids_oCourse, Ids_oJibu, Ids_ioSmsStatExam, Ids_ioSmsStatReport, Ids_ioSmsStatExamReport, Ids_ioSmsStat_order, Ids_ioSmsStatExam_order, Ids_ioSmsStatExam_date, Ids_ioSmsStat_date, Ids_ioSmsStat_jibu, Ids_ioSmsStatExam_jibu, Ids_oSendGubun, Ids_SendYN, Ids_oWorkGubun, Ids_ioSmsStatSpeaker, Ids_ioSmsStatSupervisor, Ids_ioSmsStatSpeakerReport, Ids_ioSmsStatSupervisorReport, Ids_ioSmsStatSpeaker_date, Ids_ioSmsStatSupervisor_date, Ids_ioSmsStatCAGDMData } from './Frmtraining0690MSMSSendStatisticsData';

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
    const [rawVisible_divWork3, setRawVisible_divWork3] = useState(true);
    const [rawVisible_lbJibu3, setRawVisible_lbJibu3] = useState(true);
    const [rawVisible_cbxJibu3, setRawVisible_cbxJibu3] = useState(true);
    const [rawVisible_lbTrainingPassYn, setRawVisible_lbTrainingPassYn] = useState(true);
    const [rawVisible_radSendYN, setRawVisible_radSendYN] = useState(true);
    const [rawVisible_lbSendDate, setRawVisible_lbSendDate] = useState(true);
    const [rawVisible_calSendDateStart3, setRawVisible_calSendDateStart3] = useState(true);
    const [rawVisible_lbDateWave, setRawVisible_lbDateWave] = useState(true);
    const [rawVisible_calSendDateEnd3, setRawVisible_calSendDateEnd3] = useState(true);
    const [rawVisible_Static0, setRawVisible_Static0] = useState(true);
    const [rawVisible_radSendGubun3, setRawVisible_radSendGubun3] = useState(true);
    const [rawVisible_divWork4, setRawVisible_divWork4] = useState(true);
    const [rawVisible_lbJibu4, setRawVisible_lbJibu4] = useState(true);
    const [rawVisible_cbxJibu4, setRawVisible_cbxJibu4] = useState(true);
    const [rawVisible_calSendDateStart4, setRawVisible_calSendDateStart4] = useState(true);
    const [rawVisible_calSendDateEnd4, setRawVisible_calSendDateEnd4] = useState(true);
    const [rawVisible_radSendGubun4, setRawVisible_radSendGubun4] = useState(true);
    const [rawVisible_shpBtnBox, setRawVisible_shpBtnBox] = useState(true);
    const [rawVisible_shpGubunBox, setRawVisible_shpGubunBox] = useState(true);
    const [rawVisible_divWorkFormTitle, setRawVisible_divWorkFormTitle] = useState(true);
    const [rawVisible_gdSmsStat, setRawVisible_gdSmsStat] = useState(true);
    const [rawVisible_btnMutilSort, setRawVisible_btnMutilSort] = useState(true);
    const [rawVisible_btnSearch, setRawVisible_btnSearch] = useState(true);
    const [rawVisible_btnPrintList, setRawVisible_btnPrintList] = useState(true);
    const [rawVisible_btnCancel, setRawVisible_btnCancel] = useState(true);
    const [rawVisible_btnToExcel, setRawVisible_btnToExcel] = useState(true);
    const [rawVisible_btnPrintScreen, setRawVisible_btnPrintScreen] = useState(true);
    const [rawVisible_btnEnd, setRawVisible_btnEnd] = useState(true);
    const [rawVisible_lbSmsCnt, setRawVisible_lbSmsCnt] = useState(true);
    const [rawVisible_medTotalCnt, setRawVisible_medTotalCnt] = useState(true);
    const [rawVisible_radWorkGubun, setRawVisible_radWorkGubun] = useState(true);
    const [rawVisible_lbWorkGubun, setRawVisible_lbWorkGubun] = useState(true);
    const [rawVisible_btnPrintOrder, setRawVisible_btnPrintOrder] = useState(true);
    const [rawVisible_btnPrintDate, setRawVisible_btnPrintDate] = useState(true);
    const [rawVisible_btnPrintJibu, setRawVisible_btnPrintJibu] = useState(true);
    const [rawVisible_medSmsCnt, setRawVisible_medSmsCnt] = useState(true);
    const [rawVisible_Static1, setRawVisible_Static1] = useState(true);
    const [rawVisible_Static2, setRawVisible_Static2] = useState(true);
    const [rawVisible_medMmsCnt, setRawVisible_medMmsCnt] = useState(true);
    const [rawVisible_divWork1, setRawVisible_divWork1] = useState(true);
    const [rawVisible_lbTrainingOrder, setRawVisible_lbTrainingOrder] = useState(true);
    const [rawVisible_lbCourse, setRawVisible_lbCourse] = useState(true);
    const [rawVisible_cbxCourse, setRawVisible_cbxCourse] = useState(true);
    const [rawVisible_lbYear, setRawVisible_lbYear] = useState(true);
    const [rawVisible_edYear, setRawVisible_edYear] = useState(true);
    const [rawVisible_calSendDateEnd, setRawVisible_calSendDateEnd] = useState(true);
    const [rawVisible_calSendDateStart, setRawVisible_calSendDateStart] = useState(true);
    const [rawVisible_lbJibu, setRawVisible_lbJibu] = useState(true);
    const [rawVisible_cbxJibu, setRawVisible_cbxJibu] = useState(true);
    const [rawVisible_edTrainingOrderStart, setRawVisible_edTrainingOrderStart] = useState(true);
    const [rawVisible_lbNumberWave, setRawVisible_lbNumberWave] = useState(true);
    const [rawVisible_edTrainingOrderEnd, setRawVisible_edTrainingOrderEnd] = useState(true);
    const [rawVisible_radSendGubun, setRawVisible_radSendGubun] = useState(true);
    const isVisible_divWork3 = rawVisible_divWork3 && rawVisible_divWork4;
    const setIsVisible_divWork3 = setRawVisible_divWork3;
    const isVisible_lbJibu3 = rawVisible_lbJibu3 && rawVisible_divWorkFormTitle;
    const setIsVisible_lbJibu3 = setRawVisible_lbJibu3;
    const isVisible_cbxJibu3 = rawVisible_cbxJibu3 && rawVisible_divWorkFormTitle;
    const setIsVisible_cbxJibu3 = setRawVisible_cbxJibu3;
    const isVisible_lbTrainingPassYn = rawVisible_lbTrainingPassYn && rawVisible_divWorkFormTitle;
    const setIsVisible_lbTrainingPassYn = setRawVisible_lbTrainingPassYn;
    const isVisible_radSendYN = rawVisible_radSendYN;
    const setIsVisible_radSendYN = setRawVisible_radSendYN;
    const isVisible_lbSendDate = rawVisible_lbSendDate;
    const setIsVisible_lbSendDate = setRawVisible_lbSendDate;
    const isVisible_calSendDateStart3 = rawVisible_calSendDateStart3;
    const setIsVisible_calSendDateStart3 = setRawVisible_calSendDateStart3;
    const isVisible_lbDateWave = rawVisible_lbDateWave;
    const setIsVisible_lbDateWave = setRawVisible_lbDateWave;
    const isVisible_calSendDateEnd3 = rawVisible_calSendDateEnd3;
    const setIsVisible_calSendDateEnd3 = setRawVisible_calSendDateEnd3;
    const isVisible_Static0 = rawVisible_Static0;
    const setIsVisible_Static0 = setRawVisible_Static0;
    const isVisible_radSendGubun3 = rawVisible_radSendGubun3;
    const setIsVisible_radSendGubun3 = setRawVisible_radSendGubun3;
    const isVisible_divWork4 = rawVisible_divWork4 && rawVisible_divWork3;
    const setIsVisible_divWork4 = setRawVisible_divWork4;
    const isVisible_lbJibu4 = rawVisible_lbJibu4 && rawVisible_divWorkFormTitle;
    const setIsVisible_lbJibu4 = setRawVisible_lbJibu4;
    const isVisible_cbxJibu4 = rawVisible_cbxJibu4 && rawVisible_divWorkFormTitle;
    const setIsVisible_cbxJibu4 = setRawVisible_cbxJibu4;
    const isVisible_calSendDateStart4 = rawVisible_calSendDateStart4;
    const setIsVisible_calSendDateStart4 = setRawVisible_calSendDateStart4;
    const isVisible_calSendDateEnd4 = rawVisible_calSendDateEnd4;
    const setIsVisible_calSendDateEnd4 = setRawVisible_calSendDateEnd4;
    const isVisible_radSendGubun4 = rawVisible_radSendGubun4;
    const setIsVisible_radSendGubun4 = setRawVisible_radSendGubun4;
    const isVisible_shpBtnBox = rawVisible_shpBtnBox;
    const setIsVisible_shpBtnBox = setRawVisible_shpBtnBox;
    const isVisible_shpGubunBox = rawVisible_shpGubunBox;
    const setIsVisible_shpGubunBox = setRawVisible_shpGubunBox;
    const isVisible_divWorkFormTitle = rawVisible_divWorkFormTitle;
    const setIsVisible_divWorkFormTitle = setRawVisible_divWorkFormTitle;
    const isVisible_gdSmsStat = rawVisible_gdSmsStat;
    const setIsVisible_gdSmsStat = setRawVisible_gdSmsStat;
    const isVisible_btnMutilSort = rawVisible_btnMutilSort;
    const setIsVisible_btnMutilSort = setRawVisible_btnMutilSort;
    const isVisible_btnSearch = rawVisible_btnSearch && rawVisible_shpBtnBox;
    const setIsVisible_btnSearch = setRawVisible_btnSearch;
    const isVisible_btnPrintList = rawVisible_btnPrintList;
    const setIsVisible_btnPrintList = setRawVisible_btnPrintList;
    const isVisible_btnCancel = rawVisible_btnCancel && rawVisible_shpBtnBox;
    const setIsVisible_btnCancel = setRawVisible_btnCancel;
    const isVisible_btnToExcel = rawVisible_btnToExcel && rawVisible_shpBtnBox;
    const setIsVisible_btnToExcel = setRawVisible_btnToExcel;
    const isVisible_btnPrintScreen = rawVisible_btnPrintScreen && rawVisible_shpBtnBox;
    const setIsVisible_btnPrintScreen = setRawVisible_btnPrintScreen;
    const isVisible_btnEnd = rawVisible_btnEnd && rawVisible_shpBtnBox;
    const setIsVisible_btnEnd = setRawVisible_btnEnd;
    const isVisible_lbSmsCnt = rawVisible_lbSmsCnt;
    const setIsVisible_lbSmsCnt = setRawVisible_lbSmsCnt;
    const isVisible_medTotalCnt = rawVisible_medTotalCnt;
    const setIsVisible_medTotalCnt = setRawVisible_medTotalCnt;
    const isVisible_radWorkGubun = rawVisible_radWorkGubun && rawVisible_shpGubunBox;
    const setIsVisible_radWorkGubun = setRawVisible_radWorkGubun;
    const isVisible_lbWorkGubun = rawVisible_lbWorkGubun && rawVisible_shpGubunBox;
    const setIsVisible_lbWorkGubun = setRawVisible_lbWorkGubun;
    const isVisible_btnPrintOrder = rawVisible_btnPrintOrder;
    const setIsVisible_btnPrintOrder = setRawVisible_btnPrintOrder;
    const isVisible_btnPrintDate = rawVisible_btnPrintDate;
    const setIsVisible_btnPrintDate = setRawVisible_btnPrintDate;
    const isVisible_btnPrintJibu = rawVisible_btnPrintJibu;
    const setIsVisible_btnPrintJibu = setRawVisible_btnPrintJibu;
    const isVisible_medSmsCnt = rawVisible_medSmsCnt;
    const setIsVisible_medSmsCnt = setRawVisible_medSmsCnt;
    const isVisible_Static1 = rawVisible_Static1;
    const setIsVisible_Static1 = setRawVisible_Static1;
    const isVisible_Static2 = rawVisible_Static2;
    const setIsVisible_Static2 = setRawVisible_Static2;
    const isVisible_medMmsCnt = rawVisible_medMmsCnt;
    const setIsVisible_medMmsCnt = setRawVisible_medMmsCnt;
    const isVisible_divWork1 = rawVisible_divWork1 && rawVisible_divWork3;
    const setIsVisible_divWork1 = setRawVisible_divWork1;
    const isVisible_lbTrainingOrder = rawVisible_lbTrainingOrder;
    const setIsVisible_lbTrainingOrder = setRawVisible_lbTrainingOrder;
    const isVisible_lbCourse = rawVisible_lbCourse;
    const setIsVisible_lbCourse = setRawVisible_lbCourse;
    const isVisible_cbxCourse = rawVisible_cbxCourse && rawVisible_shpBtnBox;
    const setIsVisible_cbxCourse = setRawVisible_cbxCourse;
    const isVisible_lbYear = rawVisible_lbYear && rawVisible_divWorkFormTitle;
    const setIsVisible_lbYear = setRawVisible_lbYear;
    const isVisible_edYear = rawVisible_edYear;
    const setIsVisible_edYear = setRawVisible_edYear;
    const isVisible_calSendDateEnd = rawVisible_calSendDateEnd;
    const setIsVisible_calSendDateEnd = setRawVisible_calSendDateEnd;
    const isVisible_calSendDateStart = rawVisible_calSendDateStart;
    const setIsVisible_calSendDateStart = setRawVisible_calSendDateStart;
    const isVisible_lbJibu = rawVisible_lbJibu && rawVisible_divWorkFormTitle;
    const setIsVisible_lbJibu = setRawVisible_lbJibu;
    const isVisible_cbxJibu = rawVisible_cbxJibu && rawVisible_divWorkFormTitle;
    const setIsVisible_cbxJibu = setRawVisible_cbxJibu;
    const isVisible_edTrainingOrderStart = rawVisible_edTrainingOrderStart;
    const setIsVisible_edTrainingOrderStart = setRawVisible_edTrainingOrderStart;
    const isVisible_lbNumberWave = rawVisible_lbNumberWave;
    const setIsVisible_lbNumberWave = setRawVisible_lbNumberWave;
    const isVisible_edTrainingOrderEnd = rawVisible_edTrainingOrderEnd;
    const setIsVisible_edTrainingOrderEnd = setRawVisible_edTrainingOrderEnd;
    const isVisible_radSendGubun = rawVisible_radSendGubun;
    const setIsVisible_radSendGubun = setRawVisible_radSendGubun;

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
        isVisible_divWork3,
        setIsVisible_divWork3,
        isVisible_lbJibu3,
        setIsVisible_lbJibu3,
        isVisible_cbxJibu3,
        setIsVisible_cbxJibu3,
        isVisible_lbTrainingPassYn,
        setIsVisible_lbTrainingPassYn,
        isVisible_radSendYN,
        setIsVisible_radSendYN,
        isVisible_lbSendDate,
        setIsVisible_lbSendDate,
        isVisible_calSendDateStart3,
        setIsVisible_calSendDateStart3,
        isVisible_lbDateWave,
        setIsVisible_lbDateWave,
        isVisible_calSendDateEnd3,
        setIsVisible_calSendDateEnd3,
        isVisible_Static0,
        setIsVisible_Static0,
        isVisible_radSendGubun3,
        setIsVisible_radSendGubun3,
        isVisible_divWork4,
        setIsVisible_divWork4,
        isVisible_lbJibu4,
        setIsVisible_lbJibu4,
        isVisible_cbxJibu4,
        setIsVisible_cbxJibu4,
        isVisible_calSendDateStart4,
        setIsVisible_calSendDateStart4,
        isVisible_calSendDateEnd4,
        setIsVisible_calSendDateEnd4,
        isVisible_radSendGubun4,
        setIsVisible_radSendGubun4,
        isVisible_shpBtnBox,
        setIsVisible_shpBtnBox,
        isVisible_shpGubunBox,
        setIsVisible_shpGubunBox,
        isVisible_divWorkFormTitle,
        setIsVisible_divWorkFormTitle,
        isVisible_gdSmsStat,
        setIsVisible_gdSmsStat,
        isVisible_btnMutilSort,
        setIsVisible_btnMutilSort,
        isVisible_btnSearch,
        setIsVisible_btnSearch,
        isVisible_btnPrintList,
        setIsVisible_btnPrintList,
        isVisible_btnCancel,
        setIsVisible_btnCancel,
        isVisible_btnToExcel,
        setIsVisible_btnToExcel,
        isVisible_btnPrintScreen,
        setIsVisible_btnPrintScreen,
        isVisible_btnEnd,
        setIsVisible_btnEnd,
        isVisible_lbSmsCnt,
        setIsVisible_lbSmsCnt,
        isVisible_medTotalCnt,
        setIsVisible_medTotalCnt,
        isVisible_radWorkGubun,
        setIsVisible_radWorkGubun,
        isVisible_lbWorkGubun,
        setIsVisible_lbWorkGubun,
        isVisible_btnPrintOrder,
        setIsVisible_btnPrintOrder,
        isVisible_btnPrintDate,
        setIsVisible_btnPrintDate,
        isVisible_btnPrintJibu,
        setIsVisible_btnPrintJibu,
        isVisible_medSmsCnt,
        setIsVisible_medSmsCnt,
        isVisible_Static1,
        setIsVisible_Static1,
        isVisible_Static2,
        setIsVisible_Static2,
        isVisible_medMmsCnt,
        setIsVisible_medMmsCnt,
        isVisible_divWork1,
        setIsVisible_divWork1,
        isVisible_lbTrainingOrder,
        setIsVisible_lbTrainingOrder,
        isVisible_lbCourse,
        setIsVisible_lbCourse,
        isVisible_cbxCourse,
        setIsVisible_cbxCourse,
        isVisible_lbYear,
        setIsVisible_lbYear,
        isVisible_edYear,
        setIsVisible_edYear,
        isVisible_calSendDateEnd,
        setIsVisible_calSendDateEnd,
        isVisible_calSendDateStart,
        setIsVisible_calSendDateStart,
        isVisible_lbJibu,
        setIsVisible_lbJibu,
        isVisible_cbxJibu,
        setIsVisible_cbxJibu,
        isVisible_edTrainingOrderStart,
        setIsVisible_edTrainingOrderStart,
        isVisible_lbNumberWave,
        setIsVisible_lbNumberWave,
        isVisible_edTrainingOrderEnd,
        setIsVisible_edTrainingOrderEnd,
        isVisible_radSendGubun,
        setIsVisible_radSendGubun,
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