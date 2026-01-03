// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_ioTrainingOrder, Ids_oJibu, Ids_oCourse, Ids_oUseYn, Ids_oCourseGubun, Ids_oInternetJubsuStatus, Ids_oTrainingOrderMgno, Ids_oInetJubsuYn, Ids_oMunjeGubun, Ids_ioExamRoomMinimap, Ids_oModifyColumn, Ids_ioJubsu, Ids_ioYN, Ids_oDayGubun, Ids_oTrainingFee, Ids_oSendYN, Ids_oInetWaitYn, Ids_oAcceptAwaiter, Ids_oModifyTime, Ids_oOnlineGubun, Ids_oInetJubsuPwuseYn } from './Frmtraining0010MTrainingOrderManagementData';

export const useFrmtraining0010MTrainingOrderManagement = () => {
    const [ds_ioTrainingOrder, setds_ioTrainingOrder] = useState<Ids_ioTrainingOrder[]>([]);
    const [ds_oJibu, setds_oJibu] = useState<Ids_oJibu[]>([]);
    const [ds_oCourse, setds_oCourse] = useState<Ids_oCourse[]>([]);
    const [ds_oUseYn, setds_oUseYn] = useState<Ids_oUseYn[]>([]);
    const [ds_oCourseGubun, setds_oCourseGubun] = useState<Ids_oCourseGubun[]>([]);
    const [ds_oInternetJubsuStatus, setds_oInternetJubsuStatus] = useState<Ids_oInternetJubsuStatus[]>([]);
    const [ds_oTrainingOrderMgno, setds_oTrainingOrderMgno] = useState<Ids_oTrainingOrderMgno[]>([]);
    const [ds_oInetJubsuYn, setds_oInetJubsuYn] = useState<Ids_oInetJubsuYn[]>([]);
    const [ds_oMunjeGubun, setds_oMunjeGubun] = useState<Ids_oMunjeGubun[]>([]);
    const [ds_ioExamRoomMinimap, setds_ioExamRoomMinimap] = useState<Ids_ioExamRoomMinimap[]>([]);
    const [ds_oModifyColumn, setds_oModifyColumn] = useState<Ids_oModifyColumn[]>([]);
    const [ds_ioJubsu, setds_ioJubsu] = useState<Ids_ioJubsu[]>([]);
    const [ds_ioYN, setds_ioYN] = useState<Ids_ioYN[]>([]);
    const [ds_oDayGubun, setds_oDayGubun] = useState<Ids_oDayGubun[]>([]);
    const [ds_oTrainingFee, setds_oTrainingFee] = useState<Ids_oTrainingFee[]>([]);
    const [ds_oSendYN, setds_oSendYN] = useState<Ids_oSendYN[]>([]);
    const [ds_oInetWaitYn, setds_oInetWaitYn] = useState<Ids_oInetWaitYn[]>([]);
    const [ds_oAcceptAwaiter, setds_oAcceptAwaiter] = useState<Ids_oAcceptAwaiter[]>([]);
    const [ds_oModifyTime, setds_oModifyTime] = useState<Ids_oModifyTime[]>([]);
    const [ds_oOnlineGubun, setds_oOnlineGubun] = useState<Ids_oOnlineGubun[]>([]);
    const [ds_oInetJubsuPwuseYn, setds_oInetJubsuPwuseYn] = useState<Ids_oInetJubsuPwuseYn[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isVisible_shpGubunBox, setIsVisible_shpGubunBox] = useState(true);
    const [isVisible_lbAddLabel, setIsVisible_lbAddLabel] = useState(true);
    const [isVisible_shpBtnBox, setIsVisible_shpBtnBox] = useState(true);
    const [isVisible_divWorkFormTitle, setIsVisible_divWorkFormTitle] = useState(true);
    const [isVisible_gdTrainingOrder, setIsVisible_gdTrainingOrder] = useState(true);
    const [isVisible_btnMutilSort, setIsVisible_btnMutilSort] = useState(true);
    const [isVisible_lbEduPlace, setIsVisible_lbEduPlace] = useState(true);
    const [isVisible_edEduPlace, setIsVisible_edEduPlace] = useState(true);
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
    const [isVisible_lbCourseGubun, setIsVisible_lbCourseGubun] = useState(true);
    const [isVisible_cbxCourseGubun, setIsVisible_cbxCourseGubun] = useState(true);
    const [isVisible_lbCourse, setIsVisible_lbCourse] = useState(true);
    const [isVisible_cbxCourse, setIsVisible_cbxCourse] = useState(true);
    const [isVisible_lbStdYear, setIsVisible_lbStdYear] = useState(true);
    const [isVisible_edTrainingYear, setIsVisible_edTrainingYear] = useState(true);
    const [isVisible_lbTrainingOrder, setIsVisible_lbTrainingOrder] = useState(true);
    const [isVisible_lbEduExceptDate, setIsVisible_lbEduExceptDate] = useState(true);
    const [isVisible_medSeatCnt, setIsVisible_medSeatCnt] = useState(true);
    const [isVisible_edTrainingOrder, setIsVisible_edTrainingOrder] = useState(true);
    const [isVisible_calEduDateEnd, setIsVisible_calEduDateEnd] = useState(true);
    const [isVisible_tmEduTimeEnd, setIsVisible_tmEduTimeEnd] = useState(true);
    const [isVisible_calEduDateStart, setIsVisible_calEduDateStart] = useState(true);
    const [isVisible_tmEduTimeStart, setIsVisible_tmEduTimeStart] = useState(true);
    const [isVisible_lbSeatCnt, setIsVisible_lbSeatCnt] = useState(true);
    const [isVisible_lbEduTime, setIsVisible_lbEduTime] = useState(true);
    const [isVisible_lbEduDate, setIsVisible_lbEduDate] = useState(true);
    const [isVisible_radTrainingOrderUseYn, setIsVisible_radTrainingOrderUseYn] = useState(true);
    const [isVisible_lbTrainingOrderUseYnLabel, setIsVisible_lbTrainingOrderUseYnLabel] = useState(true);
    const [isVisible_lbAddNoticeRemark, setIsVisible_lbAddNoticeRemark] = useState(true);
    const [isVisible_edAddNoticeRemark, setIsVisible_edAddNoticeRemark] = useState(true);
    const [isVisible_lbParkingNotice, setIsVisible_lbParkingNotice] = useState(true);
    const [isVisible_edParkingNotice, setIsVisible_edParkingNotice] = useState(true);
    const [isVisible_cbxInternetJubsuStatus, setIsVisible_cbxInternetJubsuStatus] = useState(true);
    const [isVisible_lbTrainingOrderUseYn, setIsVisible_lbTrainingOrderUseYn] = useState(true);
    const [isVisible_lbJubsuCnt, setIsVisible_lbJubsuCnt] = useState(true);
    const [isVisible_medJubsuCnt, setIsVisible_medJubsuCnt] = useState(true);
    const [isVisible_lbTimeWave, setIsVisible_lbTimeWave] = useState(true);
    const [isVisible_lbDateWave, setIsVisible_lbDateWave] = useState(true);
    const [isVisible_btnMiniMap, setIsVisible_btnMiniMap] = useState(true);
    const [isVisible_btnEduPlaceLink, setIsVisible_btnEduPlaceLink] = useState(true);
    const [isVisible_btnSearchEduPlace, setIsVisible_btnSearchEduPlace] = useState(true);
    const [isVisible_edEduExceptDate, setIsVisible_edEduExceptDate] = useState(true);
    const [isVisible_medIJubsuCnt, setIsVisible_medIJubsuCnt] = useState(true);
    const [isVisible_lbIJubsuCnt, setIsVisible_lbIJubsuCnt] = useState(true);
    const [isVisible_btnSeat, setIsVisible_btnSeat] = useState(true);
    const [isVisible_chkSeatLimitYN, setIsVisible_chkSeatLimitYN] = useState(false);
    const [isVisible_edMailNotice, setIsVisible_edMailNotice] = useState(false);
    const [isVisible_lbMailNotice, setIsVisible_lbMailNotice] = useState(false);
    const [isVisible_lbInetJubsuYn, setIsVisible_lbInetJubsuYn] = useState(true);
    const [isVisible_radInetJubsuYn, setIsVisible_radInetJubsuYn] = useState(true);
    const [isVisible_cbxMunjeGubun, setIsVisible_cbxMunjeGubun] = useState(true);
    const [isVisible_lbMunjeGubun, setIsVisible_lbMunjeGubun] = useState(true);
    const [isVisible_lbTotalCnt, setIsVisible_lbTotalCnt] = useState(true);
    const [isVisible_medTotalCnt, setIsVisible_medTotalCnt] = useState(true);
    const [isVisible_Static0, setIsVisible_Static0] = useState(false);
    const [isVisible_Static1, setIsVisible_Static1] = useState(false);
    const [isVisible_chkISeatSelectYn, setIsVisible_chkISeatSelectYn] = useState(false);
    const [isVisible_chkSexLimitYN, setIsVisible_chkSexLimitYN] = useState(false);
    const [isVisible_Static4, setIsVisible_Static4] = useState(true);
    const [isVisible_radDayGubun, setIsVisible_radDayGubun] = useState(true);
    const [isVisible_lbCyberDate, setIsVisible_lbCyberDate] = useState(true);
    const [isVisible_calCyberDateStart, setIsVisible_calCyberDateStart] = useState(true);
    const [isVisible_Static3, setIsVisible_Static3] = useState(true);
    const [isVisible_calCyberDateEnd, setIsVisible_calCyberDateEnd] = useState(true);
    const [isVisible_Static2, setIsVisible_Static2] = useState(true);
    const [isVisible_cbxFee, setIsVisible_cbxFee] = useState(true);
    const [isVisible_Static7, setIsVisible_Static7] = useState(true);
    const [isVisible_edRegion, setIsVisible_edRegion] = useState(true);
    const [isVisible_Static8, setIsVisible_Static8] = useState(true);
    const [isVisible_lbSMS, setIsVisible_lbSMS] = useState(true);
    const [isVisible_radSMSSendYN, setIsVisible_radSMSSendYN] = useState(true);
    const [isVisible_calSendDate, setIsVisible_calSendDate] = useState(true);
    const [isVisible_lbSendDate, setIsVisible_lbSendDate] = useState(true);
    const [isVisible_lbSendTime, setIsVisible_lbSendTime] = useState(true);
    const [isVisible_btnSMSView, setIsVisible_btnSMSView] = useState(true);
    const [isVisible_Static9, setIsVisible_Static9] = useState(true);
    const [isVisible_Static5, setIsVisible_Static5] = useState(true);
    const [isVisible_medInetWaitSeatCnt, setIsVisible_medInetWaitSeatCnt] = useState(true);
    const [isVisible_radInetWaitYn, setIsVisible_radInetWaitYn] = useState(true);
    const [isVisible_Static6, setIsVisible_Static6] = useState(true);
    const [isVisible_medInetWaitRegCnt, setIsVisible_medInetWaitRegCnt] = useState(true);
    const [isVisible_btnAwaiter, setIsVisible_btnAwaiter] = useState(true);
    const [isVisible_lbImsiTOMGNO, setIsVisible_lbImsiTOMGNO] = useState(true);
    const [isVisible_edImsiTOMGNO, setIsVisible_edImsiTOMGNO] = useState(true);
    const [isVisible_lbJubsuDate, setIsVisible_lbJubsuDate] = useState(true);
    const [isVisible_calJubsuStartDate, setIsVisible_calJubsuStartDate] = useState(true);
    const [isVisible_medJubsuStartTime, setIsVisible_medJubsuStartTime] = useState(true);
    const [isVisible_Static10, setIsVisible_Static10] = useState(true);
    const [isVisible_calJubsuEndDate, setIsVisible_calJubsuEndDate] = useState(true);
    const [isVisible_medJubsuEndTime, setIsVisible_medJubsuEndTime] = useState(true);
    const [isVisible_Static11, setIsVisible_Static11] = useState(true);
    const [isVisible_cbxOnlineGubun, setIsVisible_cbxOnlineGubun] = useState(true);
    const [isVisible_lbOnline1, setIsVisible_lbOnline1] = useState(true);
    const [isVisible_edOnlineID, setIsVisible_edOnlineID] = useState(true);
    const [isVisible_lbOnline2, setIsVisible_lbOnline2] = useState(true);
    const [isVisible_lbOnline3, setIsVisible_lbOnline3] = useState(true);
    const [isVisible_edOnlinePWD, setIsVisible_edOnlinePWD] = useState(true);
    const [isVisible_lbdmDate, setIsVisible_lbdmDate] = useState(true);
    const [isVisible_calStartdate, setIsVisible_calStartdate] = useState(true);
    const [isVisible_Static13, setIsVisible_Static13] = useState(true);
    const [isVisible_calEnddate, setIsVisible_calEnddate] = useState(true);
    const [isVisible_Static12, setIsVisible_Static12] = useState(true);
    const [isVisible_radInetJubsuPwuseYn, setIsVisible_radInetJubsuPwuseYn] = useState(true);
    const [isVisible_edInetJubsuPwd, setIsVisible_edInetJubsuPwd] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_ioTrainingOrder([]);
            setds_oJibu([]);
            setds_oCourse([]);
            setds_oUseYn([]);
            setds_oCourseGubun([]);
            setds_oInternetJubsuStatus([]);
            setds_oTrainingOrderMgno([]);
            setds_oInetJubsuYn([]);
            setds_oMunjeGubun([]);
            setds_ioExamRoomMinimap([]);
            setds_oModifyColumn([]);
            setds_ioJubsu([]);
            setds_ioYN([]);
            setds_oDayGubun([]);
            setds_oTrainingFee([]);
            setds_oSendYN([]);
            setds_oInetWaitYn([]);
            setds_oAcceptAwaiter([]);
            setds_oModifyTime([]);
            setds_oOnlineGubun([]);
            setds_oInetJubsuPwuseYn([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnAwaiter_OnClick = () => {
        console.log('btnAwaiter_OnClick clicked');
    };
    const btnEduPlaceLink_OnClick = () => {
        console.log('btnEduPlaceLink_OnClick clicked');
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
    const btnSearchEduPlace_OnClick = () => {
        console.log('btnSearchEduPlace_OnClick clicked');
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
        ds_ioTrainingOrder,
        ds_oJibu,
        ds_oCourse,
        ds_oUseYn,
        ds_oCourseGubun,
        ds_oInternetJubsuStatus,
        ds_oTrainingOrderMgno,
        ds_oInetJubsuYn,
        ds_oMunjeGubun,
        ds_ioExamRoomMinimap,
        ds_oModifyColumn,
        ds_ioJubsu,
        ds_ioYN,
        ds_oDayGubun,
        ds_oTrainingFee,
        ds_oSendYN,
        ds_oInetWaitYn,
        ds_oAcceptAwaiter,
        ds_oModifyTime,
        ds_oOnlineGubun,
        ds_oInetJubsuPwuseYn,
        isVisible_shpGubunBox,
        setIsVisible_shpGubunBox,
        isVisible_lbAddLabel,
        setIsVisible_lbAddLabel,
        isVisible_shpBtnBox,
        setIsVisible_shpBtnBox,
        isVisible_divWorkFormTitle,
        setIsVisible_divWorkFormTitle,
        isVisible_gdTrainingOrder,
        setIsVisible_gdTrainingOrder,
        isVisible_btnMutilSort,
        setIsVisible_btnMutilSort,
        isVisible_lbEduPlace,
        setIsVisible_lbEduPlace,
        isVisible_edEduPlace,
        setIsVisible_edEduPlace,
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
        isVisible_lbCourseGubun,
        setIsVisible_lbCourseGubun,
        isVisible_cbxCourseGubun,
        setIsVisible_cbxCourseGubun,
        isVisible_lbCourse,
        setIsVisible_lbCourse,
        isVisible_cbxCourse,
        setIsVisible_cbxCourse,
        isVisible_lbStdYear,
        setIsVisible_lbStdYear,
        isVisible_edTrainingYear,
        setIsVisible_edTrainingYear,
        isVisible_lbTrainingOrder,
        setIsVisible_lbTrainingOrder,
        isVisible_lbEduExceptDate,
        setIsVisible_lbEduExceptDate,
        isVisible_medSeatCnt,
        setIsVisible_medSeatCnt,
        isVisible_edTrainingOrder,
        setIsVisible_edTrainingOrder,
        isVisible_calEduDateEnd,
        setIsVisible_calEduDateEnd,
        isVisible_tmEduTimeEnd,
        setIsVisible_tmEduTimeEnd,
        isVisible_calEduDateStart,
        setIsVisible_calEduDateStart,
        isVisible_tmEduTimeStart,
        setIsVisible_tmEduTimeStart,
        isVisible_lbSeatCnt,
        setIsVisible_lbSeatCnt,
        isVisible_lbEduTime,
        setIsVisible_lbEduTime,
        isVisible_lbEduDate,
        setIsVisible_lbEduDate,
        isVisible_radTrainingOrderUseYn,
        setIsVisible_radTrainingOrderUseYn,
        isVisible_lbTrainingOrderUseYnLabel,
        setIsVisible_lbTrainingOrderUseYnLabel,
        isVisible_lbAddNoticeRemark,
        setIsVisible_lbAddNoticeRemark,
        isVisible_edAddNoticeRemark,
        setIsVisible_edAddNoticeRemark,
        isVisible_lbParkingNotice,
        setIsVisible_lbParkingNotice,
        isVisible_edParkingNotice,
        setIsVisible_edParkingNotice,
        isVisible_cbxInternetJubsuStatus,
        setIsVisible_cbxInternetJubsuStatus,
        isVisible_lbTrainingOrderUseYn,
        setIsVisible_lbTrainingOrderUseYn,
        isVisible_lbJubsuCnt,
        setIsVisible_lbJubsuCnt,
        isVisible_medJubsuCnt,
        setIsVisible_medJubsuCnt,
        isVisible_lbTimeWave,
        setIsVisible_lbTimeWave,
        isVisible_lbDateWave,
        setIsVisible_lbDateWave,
        isVisible_btnMiniMap,
        setIsVisible_btnMiniMap,
        isVisible_btnEduPlaceLink,
        setIsVisible_btnEduPlaceLink,
        isVisible_btnSearchEduPlace,
        setIsVisible_btnSearchEduPlace,
        isVisible_edEduExceptDate,
        setIsVisible_edEduExceptDate,
        isVisible_medIJubsuCnt,
        setIsVisible_medIJubsuCnt,
        isVisible_lbIJubsuCnt,
        setIsVisible_lbIJubsuCnt,
        isVisible_btnSeat,
        setIsVisible_btnSeat,
        isVisible_chkSeatLimitYN,
        setIsVisible_chkSeatLimitYN,
        isVisible_edMailNotice,
        setIsVisible_edMailNotice,
        isVisible_lbMailNotice,
        setIsVisible_lbMailNotice,
        isVisible_lbInetJubsuYn,
        setIsVisible_lbInetJubsuYn,
        isVisible_radInetJubsuYn,
        setIsVisible_radInetJubsuYn,
        isVisible_cbxMunjeGubun,
        setIsVisible_cbxMunjeGubun,
        isVisible_lbMunjeGubun,
        setIsVisible_lbMunjeGubun,
        isVisible_lbTotalCnt,
        setIsVisible_lbTotalCnt,
        isVisible_medTotalCnt,
        setIsVisible_medTotalCnt,
        isVisible_Static0,
        setIsVisible_Static0,
        isVisible_Static1,
        setIsVisible_Static1,
        isVisible_chkISeatSelectYn,
        setIsVisible_chkISeatSelectYn,
        isVisible_chkSexLimitYN,
        setIsVisible_chkSexLimitYN,
        isVisible_Static4,
        setIsVisible_Static4,
        isVisible_radDayGubun,
        setIsVisible_radDayGubun,
        isVisible_lbCyberDate,
        setIsVisible_lbCyberDate,
        isVisible_calCyberDateStart,
        setIsVisible_calCyberDateStart,
        isVisible_Static3,
        setIsVisible_Static3,
        isVisible_calCyberDateEnd,
        setIsVisible_calCyberDateEnd,
        isVisible_Static2,
        setIsVisible_Static2,
        isVisible_cbxFee,
        setIsVisible_cbxFee,
        isVisible_Static7,
        setIsVisible_Static7,
        isVisible_edRegion,
        setIsVisible_edRegion,
        isVisible_Static8,
        setIsVisible_Static8,
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
        isVisible_Static5,
        setIsVisible_Static5,
        isVisible_medInetWaitSeatCnt,
        setIsVisible_medInetWaitSeatCnt,
        isVisible_radInetWaitYn,
        setIsVisible_radInetWaitYn,
        isVisible_Static6,
        setIsVisible_Static6,
        isVisible_medInetWaitRegCnt,
        setIsVisible_medInetWaitRegCnt,
        isVisible_btnAwaiter,
        setIsVisible_btnAwaiter,
        isVisible_lbImsiTOMGNO,
        setIsVisible_lbImsiTOMGNO,
        isVisible_edImsiTOMGNO,
        setIsVisible_edImsiTOMGNO,
        isVisible_lbJubsuDate,
        setIsVisible_lbJubsuDate,
        isVisible_calJubsuStartDate,
        setIsVisible_calJubsuStartDate,
        isVisible_medJubsuStartTime,
        setIsVisible_medJubsuStartTime,
        isVisible_Static10,
        setIsVisible_Static10,
        isVisible_calJubsuEndDate,
        setIsVisible_calJubsuEndDate,
        isVisible_medJubsuEndTime,
        setIsVisible_medJubsuEndTime,
        isVisible_Static11,
        setIsVisible_Static11,
        isVisible_cbxOnlineGubun,
        setIsVisible_cbxOnlineGubun,
        isVisible_lbOnline1,
        setIsVisible_lbOnline1,
        isVisible_edOnlineID,
        setIsVisible_edOnlineID,
        isVisible_lbOnline2,
        setIsVisible_lbOnline2,
        isVisible_lbOnline3,
        setIsVisible_lbOnline3,
        isVisible_edOnlinePWD,
        setIsVisible_edOnlinePWD,
        isVisible_lbdmDate,
        setIsVisible_lbdmDate,
        isVisible_calStartdate,
        setIsVisible_calStartdate,
        isVisible_Static13,
        setIsVisible_Static13,
        isVisible_calEnddate,
        setIsVisible_calEnddate,
        isVisible_Static12,
        setIsVisible_Static12,
        isVisible_radInetJubsuPwuseYn,
        setIsVisible_radInetJubsuPwuseYn,
        isVisible_edInetJubsuPwd,
        setIsVisible_edInetJubsuPwd,
        btnAwaiter_OnClick,
        btnEduPlaceLink_OnClick,
        btnMinimap_OnClick,
        btnMutilSort_OnClick,
        btnSMSView_OnClick,
        btnSearchEduPlace_OnClick,
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