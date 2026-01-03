// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_ioTrainingOrder, Ids_oJibu, Ids_oCourse, Ids_oUseYn, Ids_oCourseGubun, Ids_oInternetJubsuStatus, Ids_oTrainingOrderMgno, Ids_oInetJubsuYn, Ids_oMunjeGubun, Ids_ioExamRoomMinimap, Ids_oModifyColumn, Ids_ioJubsu, Ids_ioYN } from './Frmspcledu0010MTrainingOrderManagementData';

export const useFrmspcledu0010MTrainingOrderManagement = () => {
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
    const [isLoading, setIsLoading] = useState(false);
    const [rawVisible_shpGubunBox, setRawVisible_shpGubunBox] = useState(true);
    const [rawVisible_lbAddLabel, setRawVisible_lbAddLabel] = useState(true);
    const [rawVisible_shpBtnBox, setRawVisible_shpBtnBox] = useState(true);
    const [rawVisible_divWorkFormTitle, setRawVisible_divWorkFormTitle] = useState(true);
    const [rawVisible_gdTrainingOrder, setRawVisible_gdTrainingOrder] = useState(true);
    const [rawVisible_btnMutilSort, setRawVisible_btnMutilSort] = useState(true);
    const [rawVisible_lbEduPlace, setRawVisible_lbEduPlace] = useState(true);
    const [rawVisible_edEduPlace, setRawVisible_edEduPlace] = useState(true);
    const [rawVisible_btnSearch, setRawVisible_btnSearch] = useState(true);
    const [rawVisible_btnInput, setRawVisible_btnInput] = useState(true);
    const [rawVisible_btnDelete, setRawVisible_btnDelete] = useState(true);
    const [rawVisible_btnSave, setRawVisible_btnSave] = useState(true);
    const [rawVisible_btnCancel, setRawVisible_btnCancel] = useState(true);
    const [rawVisible_btnToExcel, setRawVisible_btnToExcel] = useState(true);
    const [rawVisible_btnPrintScreen, setRawVisible_btnPrintScreen] = useState(true);
    const [rawVisible_btnEnd, setRawVisible_btnEnd] = useState(true);
    const [rawVisible_lbJibu, setRawVisible_lbJibu] = useState(true);
    const [rawVisible_cbxJibu, setRawVisible_cbxJibu] = useState(true);
    const [rawVisible_lbCourseGubun, setRawVisible_lbCourseGubun] = useState(true);
    const [rawVisible_cbxCourseGubun, setRawVisible_cbxCourseGubun] = useState(true);
    const [rawVisible_lbCourse, setRawVisible_lbCourse] = useState(true);
    const [rawVisible_cbxCourse, setRawVisible_cbxCourse] = useState(true);
    const [rawVisible_lbStdYear, setRawVisible_lbStdYear] = useState(true);
    const [rawVisible_edTrainingYear, setRawVisible_edTrainingYear] = useState(true);
    const [rawVisible_lbTrainingOrder, setRawVisible_lbTrainingOrder] = useState(true);
    const [rawVisible_lbEduExceptDate, setRawVisible_lbEduExceptDate] = useState(true);
    const [rawVisible_medSeatCnt, setRawVisible_medSeatCnt] = useState(true);
    const [rawVisible_edTrainingOrder, setRawVisible_edTrainingOrder] = useState(true);
    const [rawVisible_calEduDateEnd, setRawVisible_calEduDateEnd] = useState(true);
    const [rawVisible_tmEduTimeEnd, setRawVisible_tmEduTimeEnd] = useState(true);
    const [rawVisible_calEduDateStart, setRawVisible_calEduDateStart] = useState(true);
    const [rawVisible_tmEduTimeStart, setRawVisible_tmEduTimeStart] = useState(true);
    const [rawVisible_lbSeatCnt, setRawVisible_lbSeatCnt] = useState(true);
    const [rawVisible_lbEduTime, setRawVisible_lbEduTime] = useState(true);
    const [rawVisible_lbEduDate, setRawVisible_lbEduDate] = useState(true);
    const [rawVisible_radTrainingOrderUseYn, setRawVisible_radTrainingOrderUseYn] = useState(true);
    const [rawVisible_lbTrainingOrderUseYnLabel, setRawVisible_lbTrainingOrderUseYnLabel] = useState(true);
    const [rawVisible_lbAddNoticeRemark, setRawVisible_lbAddNoticeRemark] = useState(true);
    const [rawVisible_edAddNoticeRemark, setRawVisible_edAddNoticeRemark] = useState(true);
    const [rawVisible_lbParkingNotice, setRawVisible_lbParkingNotice] = useState(true);
    const [rawVisible_edParkingNotice, setRawVisible_edParkingNotice] = useState(true);
    const [rawVisible_lbInternetJubsuStatus, setRawVisible_lbInternetJubsuStatus] = useState(true);
    const [rawVisible_cbxInternetJubsuStatus, setRawVisible_cbxInternetJubsuStatus] = useState(true);
    const [rawVisible_lbTrainingOrderUseYn, setRawVisible_lbTrainingOrderUseYn] = useState(true);
    const [rawVisible_lbJubsuCnt, setRawVisible_lbJubsuCnt] = useState(true);
    const [rawVisible_medJubsuCnt, setRawVisible_medJubsuCnt] = useState(true);
    const [rawVisible_lbTimeWave, setRawVisible_lbTimeWave] = useState(true);
    const [rawVisible_lbDateWave, setRawVisible_lbDateWave] = useState(true);
    const [rawVisible_btnMiniMap, setRawVisible_btnMiniMap] = useState(true);
    const [rawVisible_btnEduPlaceLink, setRawVisible_btnEduPlaceLink] = useState(true);
    const [rawVisible_btnSearchEduPlace, setRawVisible_btnSearchEduPlace] = useState(true);
    const [rawVisible_edEduExceptDate, setRawVisible_edEduExceptDate] = useState(true);
    const [rawVisible_medIJubsuCnt, setRawVisible_medIJubsuCnt] = useState(true);
    const [rawVisible_lbIJubsuCnt, setRawVisible_lbIJubsuCnt] = useState(true);
    const [rawVisible_btnSeat, setRawVisible_btnSeat] = useState(true);
    const [rawVisible_chkSeatLimitYN, setRawVisible_chkSeatLimitYN] = useState(false);
    const [rawVisible_edMailNotice, setRawVisible_edMailNotice] = useState(true);
    const [rawVisible_lbMailNotice, setRawVisible_lbMailNotice] = useState(true);
    const [rawVisible_lbInetJubsuYn, setRawVisible_lbInetJubsuYn] = useState(true);
    const [rawVisible_radInetJubsuYn, setRawVisible_radInetJubsuYn] = useState(true);
    const [rawVisible_cbxMunjeGubun, setRawVisible_cbxMunjeGubun] = useState(true);
    const [rawVisible_lbMunjeGubun, setRawVisible_lbMunjeGubun] = useState(true);
    const [rawVisible_lbTotalCnt, setRawVisible_lbTotalCnt] = useState(true);
    const [rawVisible_medTotalCnt, setRawVisible_medTotalCnt] = useState(true);
    const [rawVisible_Static0, setRawVisible_Static0] = useState(true);
    const [rawVisible_Static1, setRawVisible_Static1] = useState(true);
    const [rawVisible_chkISeatSelectYn, setRawVisible_chkISeatSelectYn] = useState(true);
    const [rawVisible_chkSexLimitYN, setRawVisible_chkSexLimitYN] = useState(true);
    const isVisible_shpGubunBox = rawVisible_shpGubunBox;
    const setIsVisible_shpGubunBox = setRawVisible_shpGubunBox;
    const isVisible_lbAddLabel = rawVisible_lbAddLabel;
    const setIsVisible_lbAddLabel = setRawVisible_lbAddLabel;
    const isVisible_shpBtnBox = rawVisible_shpBtnBox;
    const setIsVisible_shpBtnBox = setRawVisible_shpBtnBox;
    const isVisible_divWorkFormTitle = rawVisible_divWorkFormTitle;
    const setIsVisible_divWorkFormTitle = setRawVisible_divWorkFormTitle;
    const isVisible_gdTrainingOrder = rawVisible_gdTrainingOrder;
    const setIsVisible_gdTrainingOrder = setRawVisible_gdTrainingOrder;
    const isVisible_btnMutilSort = rawVisible_btnMutilSort;
    const setIsVisible_btnMutilSort = setRawVisible_btnMutilSort;
    const isVisible_lbEduPlace = rawVisible_lbEduPlace && rawVisible_shpGubunBox;
    const setIsVisible_lbEduPlace = setRawVisible_lbEduPlace;
    const isVisible_edEduPlace = rawVisible_edEduPlace && rawVisible_shpGubunBox;
    const setIsVisible_edEduPlace = setRawVisible_edEduPlace;
    const isVisible_btnSearch = rawVisible_btnSearch && rawVisible_shpBtnBox;
    const setIsVisible_btnSearch = setRawVisible_btnSearch;
    const isVisible_btnInput = rawVisible_btnInput && rawVisible_shpBtnBox;
    const setIsVisible_btnInput = setRawVisible_btnInput;
    const isVisible_btnDelete = rawVisible_btnDelete && rawVisible_shpBtnBox;
    const setIsVisible_btnDelete = setRawVisible_btnDelete;
    const isVisible_btnSave = rawVisible_btnSave && rawVisible_shpBtnBox;
    const setIsVisible_btnSave = setRawVisible_btnSave;
    const isVisible_btnCancel = rawVisible_btnCancel && rawVisible_shpBtnBox;
    const setIsVisible_btnCancel = setRawVisible_btnCancel;
    const isVisible_btnToExcel = rawVisible_btnToExcel && rawVisible_shpBtnBox;
    const setIsVisible_btnToExcel = setRawVisible_btnToExcel;
    const isVisible_btnPrintScreen = rawVisible_btnPrintScreen && rawVisible_shpBtnBox;
    const setIsVisible_btnPrintScreen = setRawVisible_btnPrintScreen;
    const isVisible_btnEnd = rawVisible_btnEnd && rawVisible_shpBtnBox;
    const setIsVisible_btnEnd = setRawVisible_btnEnd;
    const isVisible_lbJibu = rawVisible_lbJibu && rawVisible_shpGubunBox;
    const setIsVisible_lbJibu = setRawVisible_lbJibu;
    const isVisible_cbxJibu = rawVisible_cbxJibu && rawVisible_shpGubunBox;
    const setIsVisible_cbxJibu = setRawVisible_cbxJibu;
    const isVisible_lbCourseGubun = rawVisible_lbCourseGubun && rawVisible_shpGubunBox;
    const setIsVisible_lbCourseGubun = setRawVisible_lbCourseGubun;
    const isVisible_cbxCourseGubun = rawVisible_cbxCourseGubun && rawVisible_shpGubunBox;
    const setIsVisible_cbxCourseGubun = setRawVisible_cbxCourseGubun;
    const isVisible_lbCourse = rawVisible_lbCourse && rawVisible_shpGubunBox;
    const setIsVisible_lbCourse = setRawVisible_lbCourse;
    const isVisible_cbxCourse = rawVisible_cbxCourse && rawVisible_shpGubunBox;
    const setIsVisible_cbxCourse = setRawVisible_cbxCourse;
    const isVisible_lbStdYear = rawVisible_lbStdYear && rawVisible_shpGubunBox;
    const setIsVisible_lbStdYear = setRawVisible_lbStdYear;
    const isVisible_edTrainingYear = rawVisible_edTrainingYear && rawVisible_shpGubunBox;
    const setIsVisible_edTrainingYear = setRawVisible_edTrainingYear;
    const isVisible_lbTrainingOrder = rawVisible_lbTrainingOrder && rawVisible_shpGubunBox;
    const setIsVisible_lbTrainingOrder = setRawVisible_lbTrainingOrder;
    const isVisible_lbEduExceptDate = rawVisible_lbEduExceptDate && rawVisible_shpGubunBox;
    const setIsVisible_lbEduExceptDate = setRawVisible_lbEduExceptDate;
    const isVisible_medSeatCnt = rawVisible_medSeatCnt && rawVisible_shpGubunBox;
    const setIsVisible_medSeatCnt = setRawVisible_medSeatCnt;
    const isVisible_edTrainingOrder = rawVisible_edTrainingOrder && rawVisible_shpGubunBox;
    const setIsVisible_edTrainingOrder = setRawVisible_edTrainingOrder;
    const isVisible_calEduDateEnd = rawVisible_calEduDateEnd && rawVisible_shpGubunBox;
    const setIsVisible_calEduDateEnd = setRawVisible_calEduDateEnd;
    const isVisible_tmEduTimeEnd = rawVisible_tmEduTimeEnd && rawVisible_shpGubunBox;
    const setIsVisible_tmEduTimeEnd = setRawVisible_tmEduTimeEnd;
    const isVisible_calEduDateStart = rawVisible_calEduDateStart && rawVisible_shpGubunBox;
    const setIsVisible_calEduDateStart = setRawVisible_calEduDateStart;
    const isVisible_tmEduTimeStart = rawVisible_tmEduTimeStart && rawVisible_shpGubunBox;
    const setIsVisible_tmEduTimeStart = setRawVisible_tmEduTimeStart;
    const isVisible_lbSeatCnt = rawVisible_lbSeatCnt && rawVisible_shpGubunBox;
    const setIsVisible_lbSeatCnt = setRawVisible_lbSeatCnt;
    const isVisible_lbEduTime = rawVisible_lbEduTime && rawVisible_shpGubunBox;
    const setIsVisible_lbEduTime = setRawVisible_lbEduTime;
    const isVisible_lbEduDate = rawVisible_lbEduDate && rawVisible_shpGubunBox;
    const setIsVisible_lbEduDate = setRawVisible_lbEduDate;
    const isVisible_radTrainingOrderUseYn = rawVisible_radTrainingOrderUseYn && rawVisible_shpGubunBox;
    const setIsVisible_radTrainingOrderUseYn = setRawVisible_radTrainingOrderUseYn;
    const isVisible_lbTrainingOrderUseYnLabel = rawVisible_lbTrainingOrderUseYnLabel && rawVisible_shpGubunBox;
    const setIsVisible_lbTrainingOrderUseYnLabel = setRawVisible_lbTrainingOrderUseYnLabel;
    const isVisible_lbAddNoticeRemark = rawVisible_lbAddNoticeRemark && rawVisible_shpGubunBox;
    const setIsVisible_lbAddNoticeRemark = setRawVisible_lbAddNoticeRemark;
    const isVisible_edAddNoticeRemark = rawVisible_edAddNoticeRemark && rawVisible_shpGubunBox;
    const setIsVisible_edAddNoticeRemark = setRawVisible_edAddNoticeRemark;
    const isVisible_lbParkingNotice = rawVisible_lbParkingNotice && rawVisible_shpGubunBox;
    const setIsVisible_lbParkingNotice = setRawVisible_lbParkingNotice;
    const isVisible_edParkingNotice = rawVisible_edParkingNotice && rawVisible_shpGubunBox;
    const setIsVisible_edParkingNotice = setRawVisible_edParkingNotice;
    const isVisible_lbInternetJubsuStatus = rawVisible_lbInternetJubsuStatus && rawVisible_shpGubunBox;
    const setIsVisible_lbInternetJubsuStatus = setRawVisible_lbInternetJubsuStatus;
    const isVisible_cbxInternetJubsuStatus = rawVisible_cbxInternetJubsuStatus && rawVisible_shpGubunBox;
    const setIsVisible_cbxInternetJubsuStatus = setRawVisible_cbxInternetJubsuStatus;
    const isVisible_lbTrainingOrderUseYn = rawVisible_lbTrainingOrderUseYn && rawVisible_shpGubunBox;
    const setIsVisible_lbTrainingOrderUseYn = setRawVisible_lbTrainingOrderUseYn;
    const isVisible_lbJubsuCnt = rawVisible_lbJubsuCnt && rawVisible_shpGubunBox;
    const setIsVisible_lbJubsuCnt = setRawVisible_lbJubsuCnt;
    const isVisible_medJubsuCnt = rawVisible_medJubsuCnt && rawVisible_shpGubunBox;
    const setIsVisible_medJubsuCnt = setRawVisible_medJubsuCnt;
    const isVisible_lbTimeWave = rawVisible_lbTimeWave && rawVisible_shpGubunBox;
    const setIsVisible_lbTimeWave = setRawVisible_lbTimeWave;
    const isVisible_lbDateWave = rawVisible_lbDateWave && rawVisible_shpGubunBox;
    const setIsVisible_lbDateWave = setRawVisible_lbDateWave;
    const isVisible_btnMiniMap = rawVisible_btnMiniMap && rawVisible_shpGubunBox;
    const setIsVisible_btnMiniMap = setRawVisible_btnMiniMap;
    const isVisible_btnEduPlaceLink = rawVisible_btnEduPlaceLink && rawVisible_shpGubunBox;
    const setIsVisible_btnEduPlaceLink = setRawVisible_btnEduPlaceLink;
    const isVisible_btnSearchEduPlace = rawVisible_btnSearchEduPlace && rawVisible_shpGubunBox;
    const setIsVisible_btnSearchEduPlace = setRawVisible_btnSearchEduPlace;
    const isVisible_edEduExceptDate = rawVisible_edEduExceptDate && rawVisible_shpGubunBox;
    const setIsVisible_edEduExceptDate = setRawVisible_edEduExceptDate;
    const isVisible_medIJubsuCnt = rawVisible_medIJubsuCnt && rawVisible_shpGubunBox;
    const setIsVisible_medIJubsuCnt = setRawVisible_medIJubsuCnt;
    const isVisible_lbIJubsuCnt = rawVisible_lbIJubsuCnt && rawVisible_shpGubunBox;
    const setIsVisible_lbIJubsuCnt = setRawVisible_lbIJubsuCnt;
    const isVisible_btnSeat = rawVisible_btnSeat && rawVisible_shpGubunBox;
    const setIsVisible_btnSeat = setRawVisible_btnSeat;
    const isVisible_chkSeatLimitYN = rawVisible_chkSeatLimitYN;
    const setIsVisible_chkSeatLimitYN = setRawVisible_chkSeatLimitYN;
    const isVisible_edMailNotice = rawVisible_edMailNotice && rawVisible_shpGubunBox;
    const setIsVisible_edMailNotice = setRawVisible_edMailNotice;
    const isVisible_lbMailNotice = rawVisible_lbMailNotice && rawVisible_shpGubunBox;
    const setIsVisible_lbMailNotice = setRawVisible_lbMailNotice;
    const isVisible_lbInetJubsuYn = rawVisible_lbInetJubsuYn && rawVisible_shpGubunBox;
    const setIsVisible_lbInetJubsuYn = setRawVisible_lbInetJubsuYn;
    const isVisible_radInetJubsuYn = rawVisible_radInetJubsuYn && rawVisible_shpGubunBox;
    const setIsVisible_radInetJubsuYn = setRawVisible_radInetJubsuYn;
    const isVisible_cbxMunjeGubun = rawVisible_cbxMunjeGubun && rawVisible_shpGubunBox;
    const setIsVisible_cbxMunjeGubun = setRawVisible_cbxMunjeGubun;
    const isVisible_lbMunjeGubun = rawVisible_lbMunjeGubun && rawVisible_shpGubunBox;
    const setIsVisible_lbMunjeGubun = setRawVisible_lbMunjeGubun;
    const isVisible_lbTotalCnt = rawVisible_lbTotalCnt;
    const setIsVisible_lbTotalCnt = setRawVisible_lbTotalCnt;
    const isVisible_medTotalCnt = rawVisible_medTotalCnt;
    const setIsVisible_medTotalCnt = setRawVisible_medTotalCnt;
    const isVisible_Static0 = rawVisible_Static0 && rawVisible_shpGubunBox;
    const setIsVisible_Static0 = setRawVisible_Static0;
    const isVisible_Static1 = rawVisible_Static1 && rawVisible_shpGubunBox;
    const setIsVisible_Static1 = setRawVisible_Static1;
    const isVisible_chkISeatSelectYn = rawVisible_chkISeatSelectYn && rawVisible_shpGubunBox;
    const setIsVisible_chkISeatSelectYn = setRawVisible_chkISeatSelectYn;
    const isVisible_chkSexLimitYN = rawVisible_chkSexLimitYN && rawVisible_shpGubunBox;
    const setIsVisible_chkSexLimitYN = setRawVisible_chkSexLimitYN;

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
            setIsLoading(false);
        }, 500);
    }, []);

    const btnEduPlaceLink_OnClick = () => {
        console.log('btnEduPlaceLink_OnClick clicked');
    };
    const btnMinimap_OnClick = () => {
        console.log('btnMinimap_OnClick clicked');
    };
    const btnMutilSort_OnClick = () => {
        console.log('btnMutilSort_OnClick clicked');
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
        isVisible_lbInternetJubsuStatus,
        setIsVisible_lbInternetJubsuStatus,
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
        btnEduPlaceLink_OnClick,
        btnMinimap_OnClick,
        btnMutilSort_OnClick,
        btnSearchEduPlace_OnClick,
        btnToExcel_OnClick,
        lfn_Cancel,
        lfn_Delete,
        lfn_End,
        lfn_Input,
        lfn_PrintScreen,
        lfn_Save,
        lfn_Search,
    };
};