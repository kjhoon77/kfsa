// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_ioMemberGubun, Ids_ioOrder, Ids_ioCourseYn, Ids_ioChoiceYn, Ids_ioYn, Ids_ioCourse, Ids_oRegion, Ids_oList, Ids_oJibu, Ids_oState } from './Frmcust0015PSobangInfoData';

export const useFrmcust0015PSobangInfo = () => {
    const [ds_ioMemberGubun, setds_ioMemberGubun] = useState<Ids_ioMemberGubun[]>([]);
    const [ds_ioOrder, setds_ioOrder] = useState<Ids_ioOrder[]>([]);
    const [ds_ioCourseYn, setds_ioCourseYn] = useState<Ids_ioCourseYn[]>([]);
    const [ds_ioChoiceYn, setds_ioChoiceYn] = useState<Ids_ioChoiceYn[]>([]);
    const [ds_ioYn, setds_ioYn] = useState<Ids_ioYn[]>([]);
    const [ds_ioCourse, setds_ioCourse] = useState<Ids_ioCourse[]>([]);
    const [ds_oRegion, setds_oRegion] = useState<Ids_oRegion[]>([]);
    const [ds_oList, setds_oList] = useState<Ids_oList[]>([]);
    const [ds_oJibu, setds_oJibu] = useState<Ids_oJibu[]>([]);
    const [ds_oState, setds_oState] = useState<Ids_oState[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [rawVisible_Shape1, setRawVisible_Shape1] = useState(true);
    const [rawVisible_Shape0, setRawVisible_Shape0] = useState(true);
    const [rawVisible_shpBtnBox, setRawVisible_shpBtnBox] = useState(true);
    const [rawVisible_btnEnd, setRawVisible_btnEnd] = useState(true);
    const [rawVisible_Static1, setRawVisible_Static1] = useState(true);
    const [rawVisible_lbMemberGubun, setRawVisible_lbMemberGubun] = useState(true);
    const [rawVisible_radMemberGubun, setRawVisible_radMemberGubun] = useState(true);
    const [rawVisible_Static13, setRawVisible_Static13] = useState(true);
    const [rawVisible_radOrder, setRawVisible_radOrder] = useState(true);
    const [rawVisible_btnPrint, setRawVisible_btnPrint] = useState(false);
    const [rawVisible_btnToExcel, setRawVisible_btnToExcel] = useState(true);
    const [rawVisible_Static0, setRawVisible_Static0] = useState(true);
    const [rawVisible_radYn, setRawVisible_radYn] = useState(true);
    const [rawVisible_gdManagerList, setRawVisible_gdManagerList] = useState(false);
    const [rawVisible_Static2, setRawVisible_Static2] = useState(true);
    const [rawVisible_cbxJibu, setRawVisible_cbxJibu] = useState(true);
    const [rawVisible_lbRegion, setRawVisible_lbRegion] = useState(true);
    const [rawVisible_radRegion, setRawVisible_radRegion] = useState(true);
    const [rawVisible_cbxRegion1, setRawVisible_cbxRegion1] = useState(true);
    const [rawVisible_lbText, setRawVisible_lbText] = useState(true);
    const [rawVisible_cbxRegion2, setRawVisible_cbxRegion2] = useState(true);
    const [rawVisible_lbCourse, setRawVisible_lbCourse] = useState(true);
    const [rawVisible_radCourse, setRawVisible_radCourse] = useState(true);
    const [rawVisible_cbxCourse, setRawVisible_cbxCourse] = useState(true);
    const [rawVisible_cbxCourse1, setRawVisible_cbxCourse1] = useState(true);
    const [rawVisible_cbxCourse2, setRawVisible_cbxCourse2] = useState(true);
    const [rawVisible_cbxCourse4, setRawVisible_cbxCourse4] = useState(true);
    const [rawVisible_cbxCourse5, setRawVisible_cbxCourse5] = useState(true);
    const [rawVisible_cbxCourse6, setRawVisible_cbxCourse6] = useState(true);
    const [rawVisible_cbxCourse3, setRawVisible_cbxCourse3] = useState(true);
    const [rawVisible_btnSearch, setRawVisible_btnSearch] = useState(false);
    const [rawVisible_btnSumList, setRawVisible_btnSumList] = useState(true);
    const [rawVisible_btnList, setRawVisible_btnList] = useState(true);
    const [rawVisible_lbText01, setRawVisible_lbText01] = useState(true);
    const isVisible_Shape1 = rawVisible_Shape1;
    const setIsVisible_Shape1 = setRawVisible_Shape1;
    const isVisible_Shape0 = rawVisible_Shape0;
    const setIsVisible_Shape0 = setRawVisible_Shape0;
    const isVisible_shpBtnBox = rawVisible_shpBtnBox;
    const setIsVisible_shpBtnBox = setRawVisible_shpBtnBox;
    const isVisible_btnEnd = rawVisible_btnEnd && rawVisible_shpBtnBox;
    const setIsVisible_btnEnd = setRawVisible_btnEnd;
    const isVisible_Static1 = rawVisible_Static1;
    const setIsVisible_Static1 = setRawVisible_Static1;
    const isVisible_lbMemberGubun = rawVisible_lbMemberGubun && rawVisible_Shape0;
    const setIsVisible_lbMemberGubun = setRawVisible_lbMemberGubun;
    const isVisible_radMemberGubun = rawVisible_radMemberGubun && rawVisible_Shape0;
    const setIsVisible_radMemberGubun = setRawVisible_radMemberGubun;
    const isVisible_Static13 = rawVisible_Static13;
    const setIsVisible_Static13 = setRawVisible_Static13;
    const isVisible_radOrder = rawVisible_radOrder && rawVisible_Shape1;
    const setIsVisible_radOrder = setRawVisible_radOrder;
    const isVisible_btnPrint = rawVisible_btnPrint;
    const setIsVisible_btnPrint = setRawVisible_btnPrint;
    const isVisible_btnToExcel = rawVisible_btnToExcel && rawVisible_shpBtnBox;
    const setIsVisible_btnToExcel = setRawVisible_btnToExcel;
    const isVisible_Static0 = rawVisible_Static0 && rawVisible_Shape0;
    const setIsVisible_Static0 = setRawVisible_Static0;
    const isVisible_radYn = rawVisible_radYn && rawVisible_Shape0;
    const setIsVisible_radYn = setRawVisible_radYn;
    const isVisible_gdManagerList = rawVisible_gdManagerList;
    const setIsVisible_gdManagerList = setRawVisible_gdManagerList;
    const isVisible_Static2 = rawVisible_Static2 && rawVisible_Shape0;
    const setIsVisible_Static2 = setRawVisible_Static2;
    const isVisible_cbxJibu = rawVisible_cbxJibu && rawVisible_Shape0;
    const setIsVisible_cbxJibu = setRawVisible_cbxJibu;
    const isVisible_lbRegion = rawVisible_lbRegion && rawVisible_Shape0;
    const setIsVisible_lbRegion = setRawVisible_lbRegion;
    const isVisible_radRegion = rawVisible_radRegion && rawVisible_Shape0;
    const setIsVisible_radRegion = setRawVisible_radRegion;
    const isVisible_cbxRegion1 = rawVisible_cbxRegion1 && rawVisible_Shape0;
    const setIsVisible_cbxRegion1 = setRawVisible_cbxRegion1;
    const isVisible_lbText = rawVisible_lbText && rawVisible_Shape0;
    const setIsVisible_lbText = setRawVisible_lbText;
    const isVisible_cbxRegion2 = rawVisible_cbxRegion2 && rawVisible_Shape0;
    const setIsVisible_cbxRegion2 = setRawVisible_cbxRegion2;
    const isVisible_lbCourse = rawVisible_lbCourse && rawVisible_Shape0;
    const setIsVisible_lbCourse = setRawVisible_lbCourse;
    const isVisible_radCourse = rawVisible_radCourse && rawVisible_Shape0;
    const setIsVisible_radCourse = setRawVisible_radCourse;
    const isVisible_cbxCourse = rawVisible_cbxCourse && rawVisible_Shape0;
    const setIsVisible_cbxCourse = setRawVisible_cbxCourse;
    const isVisible_cbxCourse1 = rawVisible_cbxCourse1 && rawVisible_Shape0;
    const setIsVisible_cbxCourse1 = setRawVisible_cbxCourse1;
    const isVisible_cbxCourse2 = rawVisible_cbxCourse2 && rawVisible_Shape0;
    const setIsVisible_cbxCourse2 = setRawVisible_cbxCourse2;
    const isVisible_cbxCourse4 = rawVisible_cbxCourse4 && rawVisible_Shape0;
    const setIsVisible_cbxCourse4 = setRawVisible_cbxCourse4;
    const isVisible_cbxCourse5 = rawVisible_cbxCourse5 && rawVisible_Shape0;
    const setIsVisible_cbxCourse5 = setRawVisible_cbxCourse5;
    const isVisible_cbxCourse6 = rawVisible_cbxCourse6 && rawVisible_Shape0;
    const setIsVisible_cbxCourse6 = setRawVisible_cbxCourse6;
    const isVisible_cbxCourse3 = rawVisible_cbxCourse3 && rawVisible_Shape0;
    const setIsVisible_cbxCourse3 = setRawVisible_cbxCourse3;
    const isVisible_btnSearch = rawVisible_btnSearch;
    const setIsVisible_btnSearch = setRawVisible_btnSearch;
    const isVisible_btnSumList = rawVisible_btnSumList && rawVisible_shpBtnBox;
    const setIsVisible_btnSumList = setRawVisible_btnSumList;
    const isVisible_btnList = rawVisible_btnList && rawVisible_shpBtnBox;
    const setIsVisible_btnList = setRawVisible_btnList;
    const isVisible_lbText01 = rawVisible_lbText01 && rawVisible_Shape0;
    const setIsVisible_lbText01 = setRawVisible_lbText01;

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_ioMemberGubun([]);
            setds_ioOrder([]);
            setds_ioCourseYn([]);
            setds_ioChoiceYn([]);
            setds_ioYn([]);
            setds_ioCourse([]);
            setds_oRegion([]);
            setds_oList([]);
            setds_oJibu([]);
            setds_oState([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const lfn_End = () => {
        console.log('lfn_End clicked');
    };
    const lfn_Print = () => {
        console.log('lfn_Print clicked');
    };
    const lfn_PrintList = () => {
        console.log('lfn_PrintList clicked');
    };
    const lfn_PrintState = () => {
        console.log('lfn_PrintState clicked');
    };
    const lfn_Search = () => {
        console.log('lfn_Search clicked');
    };
    const lfn_ToExcel = () => {
        console.log('lfn_ToExcel clicked');
    };

    return {
        isLoading,
        ds_ioMemberGubun,
        ds_ioOrder,
        ds_ioCourseYn,
        ds_ioChoiceYn,
        ds_ioYn,
        ds_ioCourse,
        ds_oRegion,
        ds_oList,
        ds_oJibu,
        ds_oState,
        isVisible_Shape1,
        setIsVisible_Shape1,
        isVisible_Shape0,
        setIsVisible_Shape0,
        isVisible_shpBtnBox,
        setIsVisible_shpBtnBox,
        isVisible_btnEnd,
        setIsVisible_btnEnd,
        isVisible_Static1,
        setIsVisible_Static1,
        isVisible_lbMemberGubun,
        setIsVisible_lbMemberGubun,
        isVisible_radMemberGubun,
        setIsVisible_radMemberGubun,
        isVisible_Static13,
        setIsVisible_Static13,
        isVisible_radOrder,
        setIsVisible_radOrder,
        isVisible_btnPrint,
        setIsVisible_btnPrint,
        isVisible_btnToExcel,
        setIsVisible_btnToExcel,
        isVisible_Static0,
        setIsVisible_Static0,
        isVisible_radYn,
        setIsVisible_radYn,
        isVisible_gdManagerList,
        setIsVisible_gdManagerList,
        isVisible_Static2,
        setIsVisible_Static2,
        isVisible_cbxJibu,
        setIsVisible_cbxJibu,
        isVisible_lbRegion,
        setIsVisible_lbRegion,
        isVisible_radRegion,
        setIsVisible_radRegion,
        isVisible_cbxRegion1,
        setIsVisible_cbxRegion1,
        isVisible_lbText,
        setIsVisible_lbText,
        isVisible_cbxRegion2,
        setIsVisible_cbxRegion2,
        isVisible_lbCourse,
        setIsVisible_lbCourse,
        isVisible_radCourse,
        setIsVisible_radCourse,
        isVisible_cbxCourse,
        setIsVisible_cbxCourse,
        isVisible_cbxCourse1,
        setIsVisible_cbxCourse1,
        isVisible_cbxCourse2,
        setIsVisible_cbxCourse2,
        isVisible_cbxCourse4,
        setIsVisible_cbxCourse4,
        isVisible_cbxCourse5,
        setIsVisible_cbxCourse5,
        isVisible_cbxCourse6,
        setIsVisible_cbxCourse6,
        isVisible_cbxCourse3,
        setIsVisible_cbxCourse3,
        isVisible_btnSearch,
        setIsVisible_btnSearch,
        isVisible_btnSumList,
        setIsVisible_btnSumList,
        isVisible_btnList,
        setIsVisible_btnList,
        isVisible_lbText01,
        setIsVisible_lbText01,
        lfn_End,
        lfn_Print,
        lfn_PrintList,
        lfn_PrintState,
        lfn_Search,
        lfn_ToExcel,
    };
};