// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_ioExamOrder, Ids_oJibu, Ids_oCourse, Ids_oUseYn, Ids_oCourseGubun, Ids_oExamGubun, Ids_oInternetJubsuStatus, Ids_ioExamRoomMinimap, Ids_oInetJubsuYn, Ids_oExamGubun2, Ids_oExamGubun3, Ids_oExamOrderMgno, Ids_oModifyColumn, Ids_ioJubsu } from './Frmspcledu0390MExamScheduleManagementData';

export const useFrmspcledu0390MExamScheduleManagement = () => {
    const [ds_ioExamOrder, setds_ioExamOrder] = useState<Ids_ioExamOrder[]>([]);
    const [ds_oJibu, setds_oJibu] = useState<Ids_oJibu[]>([]);
    const [ds_oCourse, setds_oCourse] = useState<Ids_oCourse[]>([]);
    const [ds_oUseYn, setds_oUseYn] = useState<Ids_oUseYn[]>([]);
    const [ds_oCourseGubun, setds_oCourseGubun] = useState<Ids_oCourseGubun[]>([]);
    const [ds_oExamGubun, setds_oExamGubun] = useState<Ids_oExamGubun[]>([]);
    const [ds_oInternetJubsuStatus, setds_oInternetJubsuStatus] = useState<Ids_oInternetJubsuStatus[]>([]);
    const [ds_ioExamRoomMinimap, setds_ioExamRoomMinimap] = useState<Ids_ioExamRoomMinimap[]>([]);
    const [ds_oInetJubsuYn, setds_oInetJubsuYn] = useState<Ids_oInetJubsuYn[]>([]);
    const [ds_oExamGubun2, setds_oExamGubun2] = useState<Ids_oExamGubun2[]>([]);
    const [ds_oExamGubun3, setds_oExamGubun3] = useState<Ids_oExamGubun3[]>([]);
    const [ds_oExamOrderMgno, setds_oExamOrderMgno] = useState<Ids_oExamOrderMgno[]>([]);
    const [ds_oModifyColumn, setds_oModifyColumn] = useState<Ids_oModifyColumn[]>([]);
    const [ds_ioJubsu, setds_ioJubsu] = useState<Ids_ioJubsu[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [rawVisible_shpGubunBox, setRawVisible_shpGubunBox] = useState(true);
    const [rawVisible_shpBtnBox, setRawVisible_shpBtnBox] = useState(true);
    const [rawVisible_divWorkFormTitle, setRawVisible_divWorkFormTitle] = useState(true);
    const [rawVisible_gdExamOrder, setRawVisible_gdExamOrder] = useState(true);
    const [rawVisible_btnMutilSort, setRawVisible_btnMutilSort] = useState(true);
    const [rawVisible_lbExamPlace, setRawVisible_lbExamPlace] = useState(true);
    const [rawVisible_edExamPlace, setRawVisible_edExamPlace] = useState(true);
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
    const [rawVisible_lbCourse, setRawVisible_lbCourse] = useState(true);
    const [rawVisible_cbxCourse, setRawVisible_cbxCourse] = useState(true);
    const [rawVisible_lbExamGubun, setRawVisible_lbExamGubun] = useState(true);
    const [rawVisible_lbStdYear, setRawVisible_lbStdYear] = useState(true);
    const [rawVisible_edStdYear, setRawVisible_edStdYear] = useState(true);
    const [rawVisible_lbExamOrder, setRawVisible_lbExamOrder] = useState(true);
    const [rawVisible_medSeatCnt, setRawVisible_medSeatCnt] = useState(true);
    const [rawVisible_edExamOrder, setRawVisible_edExamOrder] = useState(true);
    const [rawVisible_tmExamTimeEnd, setRawVisible_tmExamTimeEnd] = useState(true);
    const [rawVisible_calExamDate, setRawVisible_calExamDate] = useState(true);
    const [rawVisible_tmExamTimeStart, setRawVisible_tmExamTimeStart] = useState(true);
    const [rawVisible_lbSeatCnt, setRawVisible_lbSeatCnt] = useState(true);
    const [rawVisible_lbExamTime, setRawVisible_lbExamTime] = useState(true);
    const [rawVisible_lbExamDate, setRawVisible_lbExamDate] = useState(true);
    const [rawVisible_radExamOrderUseYn, setRawVisible_radExamOrderUseYn] = useState(true);
    const [rawVisible_lbInternetJubsuStatus, setRawVisible_lbInternetJubsuStatus] = useState(true);
    const [rawVisible_cbxInternetJubsuStatus, setRawVisible_cbxInternetJubsuStatus] = useState(true);
    const [rawVisible_lbExamOrderUseYn, setRawVisible_lbExamOrderUseYn] = useState(true);
    const [rawVisible_lbJubsuCnt, setRawVisible_lbJubsuCnt] = useState(true);
    const [rawVisible_medJubsuCnt, setRawVisible_medJubsuCnt] = useState(true);
    const [rawVisible_lbTimeWave, setRawVisible_lbTimeWave] = useState(true);
    const [rawVisible_btnMiniMap, setRawVisible_btnMiniMap] = useState(true);
    const [rawVisible_btnExamPlaceLink, setRawVisible_btnExamPlaceLink] = useState(true);
    const [rawVisible_btnSearchExamPlace, setRawVisible_btnSearchExamPlace] = useState(true);
    const [rawVisible_lbIJubsuCnt, setRawVisible_lbIJubsuCnt] = useState(true);
    const [rawVisible_medIJubsuCnt, setRawVisible_medIJubsuCnt] = useState(true);
    const [rawVisible_lbProcMsgTitle, setRawVisible_lbProcMsgTitle] = useState(true);
    const [rawVisible_lbProcMsg1, setRawVisible_lbProcMsg1] = useState(true);
    const [rawVisible_lbProcMsg2, setRawVisible_lbProcMsg2] = useState(true);
    const [rawVisible_lbProcMsg3, setRawVisible_lbProcMsg3] = useState(true);
    const [rawVisible_radExamGubun1, setRawVisible_radExamGubun1] = useState(true);
    const [rawVisible_lbInetJubsuYn, setRawVisible_lbInetJubsuYn] = useState(true);
    const [rawVisible_radInetJubsuYn, setRawVisible_radInetJubsuYn] = useState(true);
    const [rawVisible_lbProcMsg4, setRawVisible_lbProcMsg4] = useState(true);
    const [rawVisible_radExamGubun2, setRawVisible_radExamGubun2] = useState(true);
    const [rawVisible_radExamGubun3, setRawVisible_radExamGubun3] = useState(true);
    const [rawVisible_medTotalCnt, setRawVisible_medTotalCnt] = useState(true);
    const [rawVisible_lbTotalCnt, setRawVisible_lbTotalCnt] = useState(true);
    const isVisible_shpGubunBox = rawVisible_shpGubunBox;
    const setIsVisible_shpGubunBox = setRawVisible_shpGubunBox;
    const isVisible_shpBtnBox = rawVisible_shpBtnBox;
    const setIsVisible_shpBtnBox = setRawVisible_shpBtnBox;
    const isVisible_divWorkFormTitle = rawVisible_divWorkFormTitle;
    const setIsVisible_divWorkFormTitle = setRawVisible_divWorkFormTitle;
    const isVisible_gdExamOrder = rawVisible_gdExamOrder;
    const setIsVisible_gdExamOrder = setRawVisible_gdExamOrder;
    const isVisible_btnMutilSort = rawVisible_btnMutilSort;
    const setIsVisible_btnMutilSort = setRawVisible_btnMutilSort;
    const isVisible_lbExamPlace = rawVisible_lbExamPlace && rawVisible_shpGubunBox;
    const setIsVisible_lbExamPlace = setRawVisible_lbExamPlace;
    const isVisible_edExamPlace = rawVisible_edExamPlace && rawVisible_shpGubunBox;
    const setIsVisible_edExamPlace = setRawVisible_edExamPlace;
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
    const isVisible_lbCourse = rawVisible_lbCourse && rawVisible_shpGubunBox;
    const setIsVisible_lbCourse = setRawVisible_lbCourse;
    const isVisible_cbxCourse = rawVisible_cbxCourse && rawVisible_shpGubunBox;
    const setIsVisible_cbxCourse = setRawVisible_cbxCourse;
    const isVisible_lbExamGubun = rawVisible_lbExamGubun && rawVisible_shpGubunBox;
    const setIsVisible_lbExamGubun = setRawVisible_lbExamGubun;
    const isVisible_lbStdYear = rawVisible_lbStdYear && rawVisible_shpGubunBox;
    const setIsVisible_lbStdYear = setRawVisible_lbStdYear;
    const isVisible_edStdYear = rawVisible_edStdYear && rawVisible_shpGubunBox;
    const setIsVisible_edStdYear = setRawVisible_edStdYear;
    const isVisible_lbExamOrder = rawVisible_lbExamOrder && rawVisible_shpGubunBox;
    const setIsVisible_lbExamOrder = setRawVisible_lbExamOrder;
    const isVisible_medSeatCnt = rawVisible_medSeatCnt && rawVisible_shpGubunBox;
    const setIsVisible_medSeatCnt = setRawVisible_medSeatCnt;
    const isVisible_edExamOrder = rawVisible_edExamOrder && rawVisible_shpGubunBox;
    const setIsVisible_edExamOrder = setRawVisible_edExamOrder;
    const isVisible_tmExamTimeEnd = rawVisible_tmExamTimeEnd && rawVisible_shpGubunBox;
    const setIsVisible_tmExamTimeEnd = setRawVisible_tmExamTimeEnd;
    const isVisible_calExamDate = rawVisible_calExamDate && rawVisible_shpGubunBox;
    const setIsVisible_calExamDate = setRawVisible_calExamDate;
    const isVisible_tmExamTimeStart = rawVisible_tmExamTimeStart && rawVisible_shpGubunBox;
    const setIsVisible_tmExamTimeStart = setRawVisible_tmExamTimeStart;
    const isVisible_lbSeatCnt = rawVisible_lbSeatCnt && rawVisible_shpGubunBox;
    const setIsVisible_lbSeatCnt = setRawVisible_lbSeatCnt;
    const isVisible_lbExamTime = rawVisible_lbExamTime && rawVisible_shpGubunBox;
    const setIsVisible_lbExamTime = setRawVisible_lbExamTime;
    const isVisible_lbExamDate = rawVisible_lbExamDate && rawVisible_shpGubunBox;
    const setIsVisible_lbExamDate = setRawVisible_lbExamDate;
    const isVisible_radExamOrderUseYn = rawVisible_radExamOrderUseYn && rawVisible_shpGubunBox;
    const setIsVisible_radExamOrderUseYn = setRawVisible_radExamOrderUseYn;
    const isVisible_lbInternetJubsuStatus = rawVisible_lbInternetJubsuStatus && rawVisible_shpGubunBox;
    const setIsVisible_lbInternetJubsuStatus = setRawVisible_lbInternetJubsuStatus;
    const isVisible_cbxInternetJubsuStatus = rawVisible_cbxInternetJubsuStatus && rawVisible_shpGubunBox;
    const setIsVisible_cbxInternetJubsuStatus = setRawVisible_cbxInternetJubsuStatus;
    const isVisible_lbExamOrderUseYn = rawVisible_lbExamOrderUseYn && rawVisible_shpGubunBox;
    const setIsVisible_lbExamOrderUseYn = setRawVisible_lbExamOrderUseYn;
    const isVisible_lbJubsuCnt = rawVisible_lbJubsuCnt && rawVisible_shpGubunBox;
    const setIsVisible_lbJubsuCnt = setRawVisible_lbJubsuCnt;
    const isVisible_medJubsuCnt = rawVisible_medJubsuCnt && rawVisible_shpGubunBox;
    const setIsVisible_medJubsuCnt = setRawVisible_medJubsuCnt;
    const isVisible_lbTimeWave = rawVisible_lbTimeWave && rawVisible_shpGubunBox;
    const setIsVisible_lbTimeWave = setRawVisible_lbTimeWave;
    const isVisible_btnMiniMap = rawVisible_btnMiniMap && rawVisible_shpGubunBox;
    const setIsVisible_btnMiniMap = setRawVisible_btnMiniMap;
    const isVisible_btnExamPlaceLink = rawVisible_btnExamPlaceLink && rawVisible_shpGubunBox;
    const setIsVisible_btnExamPlaceLink = setRawVisible_btnExamPlaceLink;
    const isVisible_btnSearchExamPlace = rawVisible_btnSearchExamPlace && rawVisible_shpGubunBox;
    const setIsVisible_btnSearchExamPlace = setRawVisible_btnSearchExamPlace;
    const isVisible_lbIJubsuCnt = rawVisible_lbIJubsuCnt && rawVisible_shpGubunBox;
    const setIsVisible_lbIJubsuCnt = setRawVisible_lbIJubsuCnt;
    const isVisible_medIJubsuCnt = rawVisible_medIJubsuCnt && rawVisible_shpGubunBox;
    const setIsVisible_medIJubsuCnt = setRawVisible_medIJubsuCnt;
    const isVisible_lbProcMsgTitle = rawVisible_lbProcMsgTitle && rawVisible_shpGubunBox;
    const setIsVisible_lbProcMsgTitle = setRawVisible_lbProcMsgTitle;
    const isVisible_lbProcMsg1 = rawVisible_lbProcMsg1 && rawVisible_shpGubunBox;
    const setIsVisible_lbProcMsg1 = setRawVisible_lbProcMsg1;
    const isVisible_lbProcMsg2 = rawVisible_lbProcMsg2 && rawVisible_shpGubunBox;
    const setIsVisible_lbProcMsg2 = setRawVisible_lbProcMsg2;
    const isVisible_lbProcMsg3 = rawVisible_lbProcMsg3 && rawVisible_shpGubunBox;
    const setIsVisible_lbProcMsg3 = setRawVisible_lbProcMsg3;
    const isVisible_radExamGubun1 = rawVisible_radExamGubun1 && rawVisible_shpGubunBox;
    const setIsVisible_radExamGubun1 = setRawVisible_radExamGubun1;
    const isVisible_lbInetJubsuYn = rawVisible_lbInetJubsuYn && rawVisible_shpGubunBox;
    const setIsVisible_lbInetJubsuYn = setRawVisible_lbInetJubsuYn;
    const isVisible_radInetJubsuYn = rawVisible_radInetJubsuYn && rawVisible_shpGubunBox;
    const setIsVisible_radInetJubsuYn = setRawVisible_radInetJubsuYn;
    const isVisible_lbProcMsg4 = rawVisible_lbProcMsg4 && rawVisible_shpGubunBox;
    const setIsVisible_lbProcMsg4 = setRawVisible_lbProcMsg4;
    const isVisible_radExamGubun2 = rawVisible_radExamGubun2 && rawVisible_shpGubunBox;
    const setIsVisible_radExamGubun2 = setRawVisible_radExamGubun2;
    const isVisible_radExamGubun3 = rawVisible_radExamGubun3 && rawVisible_shpGubunBox;
    const setIsVisible_radExamGubun3 = setRawVisible_radExamGubun3;
    const isVisible_medTotalCnt = rawVisible_medTotalCnt;
    const setIsVisible_medTotalCnt = setRawVisible_medTotalCnt;
    const isVisible_lbTotalCnt = rawVisible_lbTotalCnt;
    const setIsVisible_lbTotalCnt = setRawVisible_lbTotalCnt;

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_ioExamOrder([]);
            setds_oJibu([]);
            setds_oCourse([]);
            setds_oUseYn([]);
            setds_oCourseGubun([]);
            setds_oExamGubun([]);
            setds_oInternetJubsuStatus([]);
            setds_ioExamRoomMinimap([]);
            setds_oInetJubsuYn([]);
            setds_oExamGubun2([]);
            setds_oExamGubun3([]);
            setds_oExamOrderMgno([]);
            setds_oModifyColumn([]);
            setds_ioJubsu([]);
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

    return {
        isLoading,
        ds_ioExamOrder,
        ds_oJibu,
        ds_oCourse,
        ds_oUseYn,
        ds_oCourseGubun,
        ds_oExamGubun,
        ds_oInternetJubsuStatus,
        ds_ioExamRoomMinimap,
        ds_oInetJubsuYn,
        ds_oExamGubun2,
        ds_oExamGubun3,
        ds_oExamOrderMgno,
        ds_oModifyColumn,
        ds_ioJubsu,
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
        isVisible_lbExamPlace,
        setIsVisible_lbExamPlace,
        isVisible_edExamPlace,
        setIsVisible_edExamPlace,
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
        isVisible_medSeatCnt,
        setIsVisible_medSeatCnt,
        isVisible_edExamOrder,
        setIsVisible_edExamOrder,
        isVisible_tmExamTimeEnd,
        setIsVisible_tmExamTimeEnd,
        isVisible_calExamDate,
        setIsVisible_calExamDate,
        isVisible_tmExamTimeStart,
        setIsVisible_tmExamTimeStart,
        isVisible_lbSeatCnt,
        setIsVisible_lbSeatCnt,
        isVisible_lbExamTime,
        setIsVisible_lbExamTime,
        isVisible_lbExamDate,
        setIsVisible_lbExamDate,
        isVisible_radExamOrderUseYn,
        setIsVisible_radExamOrderUseYn,
        isVisible_lbInternetJubsuStatus,
        setIsVisible_lbInternetJubsuStatus,
        isVisible_cbxInternetJubsuStatus,
        setIsVisible_cbxInternetJubsuStatus,
        isVisible_lbExamOrderUseYn,
        setIsVisible_lbExamOrderUseYn,
        isVisible_lbJubsuCnt,
        setIsVisible_lbJubsuCnt,
        isVisible_medJubsuCnt,
        setIsVisible_medJubsuCnt,
        isVisible_lbTimeWave,
        setIsVisible_lbTimeWave,
        isVisible_btnMiniMap,
        setIsVisible_btnMiniMap,
        isVisible_btnExamPlaceLink,
        setIsVisible_btnExamPlaceLink,
        isVisible_btnSearchExamPlace,
        setIsVisible_btnSearchExamPlace,
        isVisible_lbIJubsuCnt,
        setIsVisible_lbIJubsuCnt,
        isVisible_medIJubsuCnt,
        setIsVisible_medIJubsuCnt,
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
        isVisible_lbInetJubsuYn,
        setIsVisible_lbInetJubsuYn,
        isVisible_radInetJubsuYn,
        setIsVisible_radInetJubsuYn,
        isVisible_lbProcMsg4,
        setIsVisible_lbProcMsg4,
        isVisible_radExamGubun2,
        setIsVisible_radExamGubun2,
        isVisible_radExamGubun3,
        setIsVisible_radExamGubun3,
        isVisible_medTotalCnt,
        setIsVisible_medTotalCnt,
        isVisible_lbTotalCnt,
        setIsVisible_lbTotalCnt,
        btnExamPlaceLink_OnClick,
        btnMinimap_OnClick,
        btnMutilSort_OnClick,
        btnSearchExamPlace_OnClick,
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