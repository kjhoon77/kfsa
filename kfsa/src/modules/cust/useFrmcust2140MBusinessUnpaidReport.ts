// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_ioChoiceYn, Ids_ioCourse, Ids_ioOrder, Ids_ioCourseYn, Ids_oRegion, Ids_oJibu, Ids_UnpaidCompnm, Ids_SearchJogeon, Ids_Year } from './Frmcust2140MBusinessUnpaidReportData';

export const useFrmcust2140MBusinessUnpaidReport = () => {
    const [ds_ioChoiceYn, setds_ioChoiceYn] = useState<Ids_ioChoiceYn[]>([]);
    const [ds_ioCourse, setds_ioCourse] = useState<Ids_ioCourse[]>([]);
    const [ds_ioOrder, setds_ioOrder] = useState<Ids_ioOrder[]>([]);
    const [ds_ioCourseYn, setds_ioCourseYn] = useState<Ids_ioCourseYn[]>([]);
    const [ds_oRegion, setds_oRegion] = useState<Ids_oRegion[]>([]);
    const [ds_oJibu, setds_oJibu] = useState<Ids_oJibu[]>([]);
    const [ds_UnpaidCompnm, setds_UnpaidCompnm] = useState<Ids_UnpaidCompnm[]>([]);
    const [ds_SearchJogeon, setds_SearchJogeon] = useState<Ids_SearchJogeon[]>([]);
    const [ds_Year, setds_Year] = useState<Ids_Year[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [rawVisible_Shape1, setRawVisible_Shape1] = useState(true);
    const [rawVisible_Shape0, setRawVisible_Shape0] = useState(true);
    const [rawVisible_divWorkFormTitle, setRawVisible_divWorkFormTitle] = useState(true);
    const [rawVisible_lbRegion, setRawVisible_lbRegion] = useState(true);
    const [rawVisible_cbxRegion1, setRawVisible_cbxRegion1] = useState(true);
    const [rawVisible_radRegion, setRawVisible_radRegion] = useState(true);
    const [rawVisible_cbxRegion2, setRawVisible_cbxRegion2] = useState(true);
    const [rawVisible_lbText, setRawVisible_lbText] = useState(true);
    const [rawVisible_Static13, setRawVisible_Static13] = useState(true);
    const [rawVisible_radOrder, setRawVisible_radOrder] = useState(true);
    const [rawVisible_shpBtnBox, setRawVisible_shpBtnBox] = useState(true);
    const [rawVisible_btnEnd, setRawVisible_btnEnd] = useState(true);
    const [rawVisible_btnPrint, setRawVisible_btnPrint] = useState(true);
    const [rawVisible_btnToExcel, setRawVisible_btnToExcel] = useState(true);
    const [rawVisible_btnCancel, setRawVisible_btnCancel] = useState(true);
    const [rawVisible_Static1, setRawVisible_Static1] = useState(true);
    const [rawVisible_Static3, setRawVisible_Static3] = useState(true);
    const [rawVisible_lbJibu, setRawVisible_lbJibu] = useState(true);
    const [rawVisible_cbxJibu, setRawVisible_cbxJibu] = useState(true);
    const [rawVisible_medMgno2, setRawVisible_medMgno2] = useState(true);
    const [rawVisible_medMgno1, setRawVisible_medMgno1] = useState(true);
    const [rawVisible_Static10, setRawVisible_Static10] = useState(true);
    const [rawVisible_radMgno, setRawVisible_radMgno] = useState(true);
    const [rawVisible_lbMgno, setRawVisible_lbMgno] = useState(true);
    const [rawVisible_radCourse, setRawVisible_radCourse] = useState(true);
    const [rawVisible_lbCourse, setRawVisible_lbCourse] = useState(true);
    const [rawVisible_cbxCourse, setRawVisible_cbxCourse] = useState(true);
    const [rawVisible_cbxCourse1, setRawVisible_cbxCourse1] = useState(true);
    const [rawVisible_cbxCourse4, setRawVisible_cbxCourse4] = useState(true);
    const [rawVisible_cbxCourse2, setRawVisible_cbxCourse2] = useState(true);
    const [rawVisible_cbxCourse5, setRawVisible_cbxCourse5] = useState(true);
    const [rawVisible_cbxCourse3, setRawVisible_cbxCourse3] = useState(true);
    const [rawVisible_cbxCourse6, setRawVisible_cbxCourse6] = useState(true);
    const [rawVisible_gdList, setRawVisible_gdList] = useState(false);
    const [rawVisible_Static0, setRawVisible_Static0] = useState(true);
    const [rawVisible_cbxYear, setRawVisible_cbxYear] = useState(true);
    const isVisible_Shape1 = rawVisible_Shape1;
    const setIsVisible_Shape1 = setRawVisible_Shape1;
    const isVisible_Shape0 = rawVisible_Shape0;
    const setIsVisible_Shape0 = setRawVisible_Shape0;
    const isVisible_divWorkFormTitle = rawVisible_divWorkFormTitle;
    const setIsVisible_divWorkFormTitle = setRawVisible_divWorkFormTitle;
    const isVisible_lbRegion = rawVisible_lbRegion && rawVisible_Shape0;
    const setIsVisible_lbRegion = setRawVisible_lbRegion;
    const isVisible_cbxRegion1 = rawVisible_cbxRegion1 && rawVisible_Shape0;
    const setIsVisible_cbxRegion1 = setRawVisible_cbxRegion1;
    const isVisible_radRegion = rawVisible_radRegion && rawVisible_Shape0;
    const setIsVisible_radRegion = setRawVisible_radRegion;
    const isVisible_cbxRegion2 = rawVisible_cbxRegion2 && rawVisible_Shape0;
    const setIsVisible_cbxRegion2 = setRawVisible_cbxRegion2;
    const isVisible_lbText = rawVisible_lbText && rawVisible_Shape0;
    const setIsVisible_lbText = setRawVisible_lbText;
    const isVisible_Static13 = rawVisible_Static13;
    const setIsVisible_Static13 = setRawVisible_Static13;
    const isVisible_radOrder = rawVisible_radOrder && rawVisible_Shape1;
    const setIsVisible_radOrder = setRawVisible_radOrder;
    const isVisible_shpBtnBox = rawVisible_shpBtnBox;
    const setIsVisible_shpBtnBox = setRawVisible_shpBtnBox;
    const isVisible_btnEnd = rawVisible_btnEnd && rawVisible_shpBtnBox;
    const setIsVisible_btnEnd = setRawVisible_btnEnd;
    const isVisible_btnPrint = rawVisible_btnPrint && rawVisible_shpBtnBox;
    const setIsVisible_btnPrint = setRawVisible_btnPrint;
    const isVisible_btnToExcel = rawVisible_btnToExcel && rawVisible_shpBtnBox;
    const setIsVisible_btnToExcel = setRawVisible_btnToExcel;
    const isVisible_btnCancel = rawVisible_btnCancel && rawVisible_shpBtnBox;
    const setIsVisible_btnCancel = setRawVisible_btnCancel;
    const isVisible_Static1 = rawVisible_Static1;
    const setIsVisible_Static1 = setRawVisible_Static1;
    const isVisible_Static3 = rawVisible_Static3 && rawVisible_Shape0;
    const setIsVisible_Static3 = setRawVisible_Static3;
    const isVisible_lbJibu = rawVisible_lbJibu && rawVisible_Shape0;
    const setIsVisible_lbJibu = setRawVisible_lbJibu;
    const isVisible_cbxJibu = rawVisible_cbxJibu && rawVisible_Shape0;
    const setIsVisible_cbxJibu = setRawVisible_cbxJibu;
    const isVisible_medMgno2 = rawVisible_medMgno2 && rawVisible_Shape0;
    const setIsVisible_medMgno2 = setRawVisible_medMgno2;
    const isVisible_medMgno1 = rawVisible_medMgno1 && rawVisible_Shape0;
    const setIsVisible_medMgno1 = setRawVisible_medMgno1;
    const isVisible_Static10 = rawVisible_Static10 && rawVisible_Shape0;
    const setIsVisible_Static10 = setRawVisible_Static10;
    const isVisible_radMgno = rawVisible_radMgno && rawVisible_Shape0;
    const setIsVisible_radMgno = setRawVisible_radMgno;
    const isVisible_lbMgno = rawVisible_lbMgno && rawVisible_Shape0;
    const setIsVisible_lbMgno = setRawVisible_lbMgno;
    const isVisible_radCourse = rawVisible_radCourse && rawVisible_Shape0;
    const setIsVisible_radCourse = setRawVisible_radCourse;
    const isVisible_lbCourse = rawVisible_lbCourse && rawVisible_Shape0;
    const setIsVisible_lbCourse = setRawVisible_lbCourse;
    const isVisible_cbxCourse = rawVisible_cbxCourse && rawVisible_Shape0;
    const setIsVisible_cbxCourse = setRawVisible_cbxCourse;
    const isVisible_cbxCourse1 = rawVisible_cbxCourse1 && rawVisible_Shape0;
    const setIsVisible_cbxCourse1 = setRawVisible_cbxCourse1;
    const isVisible_cbxCourse4 = rawVisible_cbxCourse4 && rawVisible_Shape0;
    const setIsVisible_cbxCourse4 = setRawVisible_cbxCourse4;
    const isVisible_cbxCourse2 = rawVisible_cbxCourse2 && rawVisible_Shape0;
    const setIsVisible_cbxCourse2 = setRawVisible_cbxCourse2;
    const isVisible_cbxCourse5 = rawVisible_cbxCourse5 && rawVisible_Shape0;
    const setIsVisible_cbxCourse5 = setRawVisible_cbxCourse5;
    const isVisible_cbxCourse3 = rawVisible_cbxCourse3 && rawVisible_Shape0;
    const setIsVisible_cbxCourse3 = setRawVisible_cbxCourse3;
    const isVisible_cbxCourse6 = rawVisible_cbxCourse6 && rawVisible_Shape0;
    const setIsVisible_cbxCourse6 = setRawVisible_cbxCourse6;
    const isVisible_gdList = rawVisible_gdList;
    const setIsVisible_gdList = setRawVisible_gdList;
    const isVisible_Static0 = rawVisible_Static0 && rawVisible_Shape0;
    const setIsVisible_Static0 = setRawVisible_Static0;
    const isVisible_cbxYear = rawVisible_cbxYear && rawVisible_Shape0;
    const setIsVisible_cbxYear = setRawVisible_cbxYear;

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_ioChoiceYn([]);
            setds_ioCourse([]);
            setds_ioOrder([]);
            setds_ioCourseYn([]);
            setds_oRegion([]);
            setds_oJibu([]);
            setds_UnpaidCompnm([]);
            setds_SearchJogeon([]);
            setds_Year([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnToExcel_OnClick = () => {
        console.log('btnToExcel_OnClick clicked');
    };
    const lfn_Cancel = () => {
        console.log('lfn_Cancel clicked');
    };
    const lfn_End = () => {
        console.log('lfn_End clicked');
    };
    const lfn_Print = () => {
        console.log('lfn_Print clicked');
    };

    return {
        isLoading,
        ds_ioChoiceYn,
        ds_ioCourse,
        ds_ioOrder,
        ds_ioCourseYn,
        ds_oRegion,
        ds_oJibu,
        ds_UnpaidCompnm,
        ds_SearchJogeon,
        ds_Year,
        isVisible_Shape1,
        setIsVisible_Shape1,
        isVisible_Shape0,
        setIsVisible_Shape0,
        isVisible_divWorkFormTitle,
        setIsVisible_divWorkFormTitle,
        isVisible_lbRegion,
        setIsVisible_lbRegion,
        isVisible_cbxRegion1,
        setIsVisible_cbxRegion1,
        isVisible_radRegion,
        setIsVisible_radRegion,
        isVisible_cbxRegion2,
        setIsVisible_cbxRegion2,
        isVisible_lbText,
        setIsVisible_lbText,
        isVisible_Static13,
        setIsVisible_Static13,
        isVisible_radOrder,
        setIsVisible_radOrder,
        isVisible_shpBtnBox,
        setIsVisible_shpBtnBox,
        isVisible_btnEnd,
        setIsVisible_btnEnd,
        isVisible_btnPrint,
        setIsVisible_btnPrint,
        isVisible_btnToExcel,
        setIsVisible_btnToExcel,
        isVisible_btnCancel,
        setIsVisible_btnCancel,
        isVisible_Static1,
        setIsVisible_Static1,
        isVisible_Static3,
        setIsVisible_Static3,
        isVisible_lbJibu,
        setIsVisible_lbJibu,
        isVisible_cbxJibu,
        setIsVisible_cbxJibu,
        isVisible_medMgno2,
        setIsVisible_medMgno2,
        isVisible_medMgno1,
        setIsVisible_medMgno1,
        isVisible_Static10,
        setIsVisible_Static10,
        isVisible_radMgno,
        setIsVisible_radMgno,
        isVisible_lbMgno,
        setIsVisible_lbMgno,
        isVisible_radCourse,
        setIsVisible_radCourse,
        isVisible_lbCourse,
        setIsVisible_lbCourse,
        isVisible_cbxCourse,
        setIsVisible_cbxCourse,
        isVisible_cbxCourse1,
        setIsVisible_cbxCourse1,
        isVisible_cbxCourse4,
        setIsVisible_cbxCourse4,
        isVisible_cbxCourse2,
        setIsVisible_cbxCourse2,
        isVisible_cbxCourse5,
        setIsVisible_cbxCourse5,
        isVisible_cbxCourse3,
        setIsVisible_cbxCourse3,
        isVisible_cbxCourse6,
        setIsVisible_cbxCourse6,
        isVisible_gdList,
        setIsVisible_gdList,
        isVisible_Static0,
        setIsVisible_Static0,
        isVisible_cbxYear,
        setIsVisible_cbxYear,
        btnToExcel_OnClick,
        lfn_Cancel,
        lfn_End,
        lfn_Print,
    };
};