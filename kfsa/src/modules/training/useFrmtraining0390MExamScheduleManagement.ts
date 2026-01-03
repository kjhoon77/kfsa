// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_ioExamOrder, Ids_oJibu, Ids_oCourse, Ids_oUseYn, Ids_oCourseGubun, Ids_oExamGubun1, Ids_oInternetJubsuStatus, Ids_ioExamRoomMinimap, Ids_oInetJubsuYn, Ids_oExamGubun2, Ids_oExamGubun3, Ids_oExamOrderMgno, Ids_oModifyColumn, Ids_ioJubsu, Ids_oExamGubun4, Ids_oExamGubun, Ids_oDayGubun, Ids_oSendYN, Ids_ioChasuGubun, Ids_oModifyTime, Ids_oOnlineGubun } from './Frmtraining0390MExamScheduleManagementData';

export const useFrmtraining0390MExamScheduleManagement = () => {
    const [ds_ioExamOrder, setds_ioExamOrder] = useState<Ids_ioExamOrder[]>([]);
    const [ds_oJibu, setds_oJibu] = useState<Ids_oJibu[]>([]);
    const [ds_oCourse, setds_oCourse] = useState<Ids_oCourse[]>([]);
    const [ds_oUseYn, setds_oUseYn] = useState<Ids_oUseYn[]>([]);
    const [ds_oCourseGubun, setds_oCourseGubun] = useState<Ids_oCourseGubun[]>([]);
    const [ds_oExamGubun1, setds_oExamGubun1] = useState<Ids_oExamGubun1[]>([]);
    const [ds_oInternetJubsuStatus, setds_oInternetJubsuStatus] = useState<Ids_oInternetJubsuStatus[]>([]);
    const [ds_ioExamRoomMinimap, setds_ioExamRoomMinimap] = useState<Ids_ioExamRoomMinimap[]>([]);
    const [ds_oInetJubsuYn, setds_oInetJubsuYn] = useState<Ids_oInetJubsuYn[]>([]);
    const [ds_oExamGubun2, setds_oExamGubun2] = useState<Ids_oExamGubun2[]>([]);
    const [ds_oExamGubun3, setds_oExamGubun3] = useState<Ids_oExamGubun3[]>([]);
    const [ds_oExamOrderMgno, setds_oExamOrderMgno] = useState<Ids_oExamOrderMgno[]>([]);
    const [ds_oModifyColumn, setds_oModifyColumn] = useState<Ids_oModifyColumn[]>([]);
    const [ds_ioJubsu, setds_ioJubsu] = useState<Ids_ioJubsu[]>([]);
    const [ds_oExamGubun4, setds_oExamGubun4] = useState<Ids_oExamGubun4[]>([]);
    const [ds_oExamGubun, setds_oExamGubun] = useState<Ids_oExamGubun[]>([]);
    const [ds_oDayGubun, setds_oDayGubun] = useState<Ids_oDayGubun[]>([]);
    const [ds_oSendYN, setds_oSendYN] = useState<Ids_oSendYN[]>([]);
    const [ds_ioChasuGubun, setds_ioChasuGubun] = useState<Ids_ioChasuGubun[]>([]);
    const [ds_oModifyTime, setds_oModifyTime] = useState<Ids_oModifyTime[]>([]);
    const [ds_oOnlineGubun, setds_oOnlineGubun] = useState<Ids_oOnlineGubun[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isVisible_shpGubunBox, setIsVisible_shpGubunBox] = useState(true);
    const [isVisible_shpBtnBox, setIsVisible_shpBtnBox] = useState(true);
    const [isVisible_divWorkFormTitle, setIsVisible_divWorkFormTitle] = useState(true);
    const [isVisible_gdExamOrder, setIsVisible_gdExamOrder] = useState(true);
    const [isVisible_btnMutilSort, setIsVisible_btnMutilSort] = useState(true);
    const [isVisible_btnSearch, setIsVisible_btnSearch] = useState(true);
    const [isVisible_btnInput, setIsVisible_btnInput] = useState(true);
    const [isVisible_btnDelete, setIsVisible_btnDelete] = useState(true);
    const [isVisible_btnSave, setIsVisible_btnSave] = useState(true);
    const [isVisible_btnCancel, setIsVisible_btnCancel] = useState(true);
    const [isVisible_btnToExcel, setIsVisible_btnToExcel] = useState(true);
    const [isVisible_btnPrintScreen, setIsVisible_btnPrintScreen] = useState(true);
    const [isVisible_btnEnd, setIsVisible_btnEnd] = useState(true);
    const [isVisible_lbJibu, setIsVisible_lbJibu] = useState(true);
    const [isVisible_cbxJibu, setIsVisible_cbxJibu] = useState(true);
    const [isVisible_lbCourse, setIsVisible_lbCourse] = useState(true);
    const [isVisible_cbxCourse, setIsVisible_cbxCourse] = useState(true);
    const [isVisible_lbExamGubun, setIsVisible_lbExamGubun] = useState(true);
    const [isVisible_lbStdYear, setIsVisible_lbStdYear] = useState(true);
    const [isVisible_edStdYear, setIsVisible_edStdYear] = useState(true);
    const [isVisible_lbExamOrder, setIsVisible_lbExamOrder] = useState(true);
    const [isVisible_edExamOrder, setIsVisible_edExamOrder] = useState(true);
    const [isVisible_tmExamTimeEnd, setIsVisible_tmExamTimeEnd] = useState(true);
    const [isVisible_calExamDate, setIsVisible_calExamDate] = useState(true);
    const [isVisible_tmExamTimeStart, setIsVisible_tmExamTimeStart] = useState(true);
    const [isVisible_lbExamTime, setIsVisible_lbExamTime] = useState(true);
    const [isVisible_lbExamDate, setIsVisible_lbExamDate] = useState(true);
    const [isVisible_lbTimeWave, setIsVisible_lbTimeWave] = useState(true);
    const [isVisible_lbProcMsgTitle, setIsVisible_lbProcMsgTitle] = useState(true);
    const [isVisible_lbProcMsg1, setIsVisible_lbProcMsg1] = useState(true);
    const [isVisible_lbProcMsg2, setIsVisible_lbProcMsg2] = useState(true);
    const [isVisible_lbProcMsg3, setIsVisible_lbProcMsg3] = useState(true);
    const [isVisible_radExamGubun1, setIsVisible_radExamGubun1] = useState(true);
    const [isVisible_lbProcMsg4, setIsVisible_lbProcMsg4] = useState(true);
    const [isVisible_radExamGubun3, setIsVisible_radExamGubun3] = useState(true);
    const [isVisible_medTotalCnt, setIsVisible_medTotalCnt] = useState(true);
    const [isVisible_lbTotalCnt, setIsVisible_lbTotalCnt] = useState(true);
    const [isVisible_lbExamTime2, setIsVisible_lbExamTime2] = useState(true);
    const [isVisible_tmExamTimeStart2, setIsVisible_tmExamTimeStart2] = useState(true);
    const [isVisible_lbTimeWave2, setIsVisible_lbTimeWave2] = useState(true);
    const [isVisible_tmExamTimeEnd2, setIsVisible_tmExamTimeEnd2] = useState(true);
    const [isVisible_radExamGubun4, setIsVisible_radExamGubun4] = useState(true);
    const [isVisible_Static0, setIsVisible_Static0] = useState(true);
    const [isVisible_lbJubsuDate, setIsVisible_lbJubsuDate] = useState(true);
    const [isVisible_calJubsuStartDate, setIsVisible_calJubsuStartDate] = useState(true);
    const [isVisible_lbJubsuTerm, setIsVisible_lbJubsuTerm] = useState(true);
    const [isVisible_calJubsuEndDate, setIsVisible_calJubsuEndDate] = useState(true);
    const [isVisible_lbExam1OpenDate, setIsVisible_lbExam1OpenDate] = useState(false);
    const [isVisible_calExam1OpenDate, setIsVisible_calExam1OpenDate] = useState(false);
    const [isVisible_lbExam2OpenDate, setIsVisible_lbExam2OpenDate] = useState(false);
    const [isVisible_calExam2OpenDate, setIsVisible_calExam2OpenDate] = useState(false);
    const [isVisible_medExam1OpenTime, setIsVisible_medExam1OpenTime] = useState(false);
    const [isVisible_medExam2OpenTime, setIsVisible_medExam2OpenTime] = useState(false);
    const [isVisible_btnExamPlaceLink, setIsVisible_btnExamPlaceLink] = useState(true);
    const [isVisible_btnMiniMap, setIsVisible_btnMiniMap] = useState(true);
    const [isVisible_btnSearchExamPlace, setIsVisible_btnSearchExamPlace] = useState(true);
    const [isVisible_edExamPlace, setIsVisible_edExamPlace] = useState(true);
    const [isVisible_lbExamPlace, setIsVisible_lbExamPlace] = useState(true);
    const [isVisible_lbSeatCnt, setIsVisible_lbSeatCnt] = useState(true);
    const [isVisible_medSeatCnt, setIsVisible_medSeatCnt] = useState(true);
    const [isVisible_lbJubsuCnt, setIsVisible_lbJubsuCnt] = useState(true);
    const [isVisible_medJubsuCnt, setIsVisible_medJubsuCnt] = useState(true);
    const [isVisible_medIJubsuCnt, setIsVisible_medIJubsuCnt] = useState(true);
    const [isVisible_lbIJubsuCnt, setIsVisible_lbIJubsuCnt] = useState(true);
    const [isVisible_radInetJubsuYn, setIsVisible_radInetJubsuYn] = useState(true);
    const [isVisible_lbInetJubsuYn, setIsVisible_lbInetJubsuYn] = useState(true);
    const [isVisible_lbInternetJubsuStatus, setIsVisible_lbInternetJubsuStatus] = useState(true);
    const [isVisible_cbxInternetJubsuStatus, setIsVisible_cbxInternetJubsuStatus] = useState(true);
    const [isVisible_lbExamOrderUseYn, setIsVisible_lbExamOrderUseYn] = useState(true);
    const [isVisible_radExamOrderUseYn, setIsVisible_radExamOrderUseYn] = useState(true);
    const [isVisible_lbImsiEOMGNO, setIsVisible_lbImsiEOMGNO] = useState(true);
    const [isVisible_edImsiEOMGNO, setIsVisible_edImsiEOMGNO] = useState(true);
    const [isVisible_Static4, setIsVisible_Static4] = useState(true);
    const [isVisible_radDayGubun, setIsVisible_radDayGubun] = useState(true);
    const [isVisible_lbExamOpenDate, setIsVisible_lbExamOpenDate] = useState(false);
    const [isVisible_calExamOpenDate, setIsVisible_calExamOpenDate] = useState(false);
    const [isVisible_medExamOpenTime, setIsVisible_medExamOpenTime] = useState(false);
    const [isVisible_lbSMS, setIsVisible_lbSMS] = useState(true);
    const [isVisible_radSMSSendYN, setIsVisible_radSMSSendYN] = useState(true);
    const [isVisible_calSendDate, setIsVisible_calSendDate] = useState(true);
    const [isVisible_lbSendDate, setIsVisible_lbSendDate] = useState(true);
    const [isVisible_lbSendTime, setIsVisible_lbSendTime] = useState(true);
    const [isVisible_btnSMSView, setIsVisible_btnSMSView] = useState(true);
    const [isVisible_Static9, setIsVisible_Static9] = useState(true);
    const [isVisible_lbAddNoticeRemark, setIsVisible_lbAddNoticeRemark] = useState(true);
    const [isVisible_edAddNoticeRemark, setIsVisible_edAddNoticeRemark] = useState(true);
    const [isVisible_Static7, setIsVisible_Static7] = useState(true);
    const [isVisible_edRegion, setIsVisible_edRegion] = useState(true);
    const [isVisible_Static8, setIsVisible_Static8] = useState(true);
    const [isVisible_lbChasuGubun, setIsVisible_lbChasuGubun] = useState(true);
    const [isVisible_radChasuGubun, setIsVisible_radChasuGubun] = useState(true);
    const [isVisible_medJubsuStartTime, setIsVisible_medJubsuStartTime] = useState(true);
    const [isVisible_medJubsuEndTime, setIsVisible_medJubsuEndTime] = useState(true);
    const [isVisible_lbGonggoDate, setIsVisible_lbGonggoDate] = useState(true);
    const [isVisible_calGonggoDate, setIsVisible_calGonggoDate] = useState(true);
    const [isVisible_medGonggoTime, setIsVisible_medGonggoTime] = useState(true);
    const [isVisible_edJubsuEndNotice, setIsVisible_edJubsuEndNotice] = useState(true);
    const [isVisible_Static11, setIsVisible_Static11] = useState(true);
    const [isVisible_cbxOnlineGubun, setIsVisible_cbxOnlineGubun] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_ioExamOrder([]);
            setds_oJibu([]);
            setds_oCourse([]);
            setds_oUseYn([]);
            setds_oCourseGubun([]);
            setds_oExamGubun1([]);
            setds_oInternetJubsuStatus([]);
            setds_ioExamRoomMinimap([]);
            setds_oInetJubsuYn([]);
            setds_oExamGubun2([]);
            setds_oExamGubun3([]);
            setds_oExamOrderMgno([]);
            setds_oModifyColumn([]);
            setds_ioJubsu([]);
            setds_oExamGubun4([]);
            setds_oExamGubun([]);
            setds_oDayGubun([]);
            setds_oSendYN([]);
            setds_ioChasuGubun([]);
            setds_oModifyTime([]);
            setds_oOnlineGubun([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnExamPlaceLink_OnClick = () => {
        console.log('btnExamPlaceLink_OnClick clicked');
    };
    const btnMinimap_OnClick = () => {
        console.log('btnMinimap_OnClick clicked');
    };
    const btnMutilSort_OnClick = () => {
        console.log('btnMutilSort_OnClick clicked');
    };
    const btnSMSView_OnClick = () => {
        console.log('btnSMSView_OnClick clicked');
    };
    const btnSearchExamPlace_OnClick = () => {
        console.log('btnSearchExamPlace_OnClick clicked');
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
    const lfn_PrintScreen = () => {
        console.log('lfn_PrintScreen clicked');
    };
    const lfn_Save = () => {
        console.log('lfn_Save clicked');
    };
    const lfn_Search = () => {
        console.log('lfn_Search clicked');
    };
    const radSMSSendYN_OnClick = () => {
        console.log('radSMSSendYN_OnClick clicked');
    };

    return {
        isLoading,
        ds_ioExamOrder,
        ds_oJibu,
        ds_oCourse,
        ds_oUseYn,
        ds_oCourseGubun,
        ds_oExamGubun1,
        ds_oInternetJubsuStatus,
        ds_ioExamRoomMinimap,
        ds_oInetJubsuYn,
        ds_oExamGubun2,
        ds_oExamGubun3,
        ds_oExamOrderMgno,
        ds_oModifyColumn,
        ds_ioJubsu,
        ds_oExamGubun4,
        ds_oExamGubun,
        ds_oDayGubun,
        ds_oSendYN,
        ds_ioChasuGubun,
        ds_oModifyTime,
        ds_oOnlineGubun,
        isVisible_shpGubunBox,
        setIsVisible_shpGubunBox,
        isVisible_shpBtnBox,
        setIsVisible_shpBtnBox,
        isVisible_divWorkFormTitle,
        setIsVisible_divWorkFormTitle,
        isVisible_gdExamOrder,
        setIsVisible_gdExamOrder,
        isVisible_btnMutilSort,
        setIsVisible_btnMutilSort,
        isVisible_btnSearch,
        setIsVisible_btnSearch,
        isVisible_btnInput,
        setIsVisible_btnInput,
        isVisible_btnDelete,
        setIsVisible_btnDelete,
        isVisible_btnSave,
        setIsVisible_btnSave,
        isVisible_btnCancel,
        setIsVisible_btnCancel,
        isVisible_btnToExcel,
        setIsVisible_btnToExcel,
        isVisible_btnPrintScreen,
        setIsVisible_btnPrintScreen,
        isVisible_btnEnd,
        setIsVisible_btnEnd,
        isVisible_lbJibu,
        setIsVisible_lbJibu,
        isVisible_cbxJibu,
        setIsVisible_cbxJibu,
        isVisible_lbCourse,
        setIsVisible_lbCourse,
        isVisible_cbxCourse,
        setIsVisible_cbxCourse,
        isVisible_lbExamGubun,
        setIsVisible_lbExamGubun,
        isVisible_lbStdYear,
        setIsVisible_lbStdYear,
        isVisible_edStdYear,
        setIsVisible_edStdYear,
        isVisible_lbExamOrder,
        setIsVisible_lbExamOrder,
        isVisible_edExamOrder,
        setIsVisible_edExamOrder,
        isVisible_tmExamTimeEnd,
        setIsVisible_tmExamTimeEnd,
        isVisible_calExamDate,
        setIsVisible_calExamDate,
        isVisible_tmExamTimeStart,
        setIsVisible_tmExamTimeStart,
        isVisible_lbExamTime,
        setIsVisible_lbExamTime,
        isVisible_lbExamDate,
        setIsVisible_lbExamDate,
        isVisible_lbTimeWave,
        setIsVisible_lbTimeWave,
        isVisible_lbProcMsgTitle,
        setIsVisible_lbProcMsgTitle,
        isVisible_lbProcMsg1,
        setIsVisible_lbProcMsg1,
        isVisible_lbProcMsg2,
        setIsVisible_lbProcMsg2,
        isVisible_lbProcMsg3,
        setIsVisible_lbProcMsg3,
        isVisible_radExamGubun1,
        setIsVisible_radExamGubun1,
        isVisible_lbProcMsg4,
        setIsVisible_lbProcMsg4,
        isVisible_radExamGubun3,
        setIsVisible_radExamGubun3,
        isVisible_medTotalCnt,
        setIsVisible_medTotalCnt,
        isVisible_lbTotalCnt,
        setIsVisible_lbTotalCnt,
        isVisible_lbExamTime2,
        setIsVisible_lbExamTime2,
        isVisible_tmExamTimeStart2,
        setIsVisible_tmExamTimeStart2,
        isVisible_lbTimeWave2,
        setIsVisible_lbTimeWave2,
        isVisible_tmExamTimeEnd2,
        setIsVisible_tmExamTimeEnd2,
        isVisible_radExamGubun4,
        setIsVisible_radExamGubun4,
        isVisible_Static0,
        setIsVisible_Static0,
        isVisible_lbJubsuDate,
        setIsVisible_lbJubsuDate,
        isVisible_calJubsuStartDate,
        setIsVisible_calJubsuStartDate,
        isVisible_lbJubsuTerm,
        setIsVisible_lbJubsuTerm,
        isVisible_calJubsuEndDate,
        setIsVisible_calJubsuEndDate,
        isVisible_lbExam1OpenDate,
        setIsVisible_lbExam1OpenDate,
        isVisible_calExam1OpenDate,
        setIsVisible_calExam1OpenDate,
        isVisible_lbExam2OpenDate,
        setIsVisible_lbExam2OpenDate,
        isVisible_calExam2OpenDate,
        setIsVisible_calExam2OpenDate,
        isVisible_medExam1OpenTime,
        setIsVisible_medExam1OpenTime,
        isVisible_medExam2OpenTime,
        setIsVisible_medExam2OpenTime,
        isVisible_btnExamPlaceLink,
        setIsVisible_btnExamPlaceLink,
        isVisible_btnMiniMap,
        setIsVisible_btnMiniMap,
        isVisible_btnSearchExamPlace,
        setIsVisible_btnSearchExamPlace,
        isVisible_edExamPlace,
        setIsVisible_edExamPlace,
        isVisible_lbExamPlace,
        setIsVisible_lbExamPlace,
        isVisible_lbSeatCnt,
        setIsVisible_lbSeatCnt,
        isVisible_medSeatCnt,
        setIsVisible_medSeatCnt,
        isVisible_lbJubsuCnt,
        setIsVisible_lbJubsuCnt,
        isVisible_medJubsuCnt,
        setIsVisible_medJubsuCnt,
        isVisible_medIJubsuCnt,
        setIsVisible_medIJubsuCnt,
        isVisible_lbIJubsuCnt,
        setIsVisible_lbIJubsuCnt,
        isVisible_radInetJubsuYn,
        setIsVisible_radInetJubsuYn,
        isVisible_lbInetJubsuYn,
        setIsVisible_lbInetJubsuYn,
        isVisible_lbInternetJubsuStatus,
        setIsVisible_lbInternetJubsuStatus,
        isVisible_cbxInternetJubsuStatus,
        setIsVisible_cbxInternetJubsuStatus,
        isVisible_lbExamOrderUseYn,
        setIsVisible_lbExamOrderUseYn,
        isVisible_radExamOrderUseYn,
        setIsVisible_radExamOrderUseYn,
        isVisible_lbImsiEOMGNO,
        setIsVisible_lbImsiEOMGNO,
        isVisible_edImsiEOMGNO,
        setIsVisible_edImsiEOMGNO,
        isVisible_Static4,
        setIsVisible_Static4,
        isVisible_radDayGubun,
        setIsVisible_radDayGubun,
        isVisible_lbExamOpenDate,
        setIsVisible_lbExamOpenDate,
        isVisible_calExamOpenDate,
        setIsVisible_calExamOpenDate,
        isVisible_medExamOpenTime,
        setIsVisible_medExamOpenTime,
        isVisible_lbSMS,
        setIsVisible_lbSMS,
        isVisible_radSMSSendYN,
        setIsVisible_radSMSSendYN,
        isVisible_calSendDate,
        setIsVisible_calSendDate,
        isVisible_lbSendDate,
        setIsVisible_lbSendDate,
        isVisible_lbSendTime,
        setIsVisible_lbSendTime,
        isVisible_btnSMSView,
        setIsVisible_btnSMSView,
        isVisible_Static9,
        setIsVisible_Static9,
        isVisible_lbAddNoticeRemark,
        setIsVisible_lbAddNoticeRemark,
        isVisible_edAddNoticeRemark,
        setIsVisible_edAddNoticeRemark,
        isVisible_Static7,
        setIsVisible_Static7,
        isVisible_edRegion,
        setIsVisible_edRegion,
        isVisible_Static8,
        setIsVisible_Static8,
        isVisible_lbChasuGubun,
        setIsVisible_lbChasuGubun,
        isVisible_radChasuGubun,
        setIsVisible_radChasuGubun,
        isVisible_medJubsuStartTime,
        setIsVisible_medJubsuStartTime,
        isVisible_medJubsuEndTime,
        setIsVisible_medJubsuEndTime,
        isVisible_lbGonggoDate,
        setIsVisible_lbGonggoDate,
        isVisible_calGonggoDate,
        setIsVisible_calGonggoDate,
        isVisible_medGonggoTime,
        setIsVisible_medGonggoTime,
        isVisible_edJubsuEndNotice,
        setIsVisible_edJubsuEndNotice,
        isVisible_Static11,
        setIsVisible_Static11,
        isVisible_cbxOnlineGubun,
        setIsVisible_cbxOnlineGubun,
        btnExamPlaceLink_OnClick,
        btnMinimap_OnClick,
        btnMutilSort_OnClick,
        btnSMSView_OnClick,
        btnSearchExamPlace_OnClick,
        btnToExcel_OnClick,
        lfn_Cancel,
        lfn_Delete,
        lfn_End,
        lfn_Input,
        lfn_PrintScreen,
        lfn_Save,
        lfn_Search,
        radSMSSendYN_OnClick,
    };
};