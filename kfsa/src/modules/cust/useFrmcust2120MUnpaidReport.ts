// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_ioJibu, Ids_ioYear, Ids_MinapGubun, Ids_MinapList, Ids_MinapListExcel, Ids_SearchJogeon } from './Frmcust2120MUnpaidReportData';

export const useFrmcust2120MUnpaidReport = () => {
    const [ds_ioJibu, setds_ioJibu] = useState<Ids_ioJibu[]>([]);
    const [ds_ioYear, setds_ioYear] = useState<Ids_ioYear[]>([]);
    const [ds_MinapGubun, setds_MinapGubun] = useState<Ids_MinapGubun[]>([]);
    const [ds_MinapList, setds_MinapList] = useState<Ids_MinapList[]>([]);
    const [ds_MinapListExcel, setds_MinapListExcel] = useState<Ids_MinapListExcel[]>([]);
    const [ds_SearchJogeon, setds_SearchJogeon] = useState<Ids_SearchJogeon[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [rawVisible_Shape0, setRawVisible_Shape0] = useState(true);
    const [rawVisible_divWorkFormTitle, setRawVisible_divWorkFormTitle] = useState(true);
    const [rawVisible_Static1, setRawVisible_Static1] = useState(true);
    const [rawVisible_shpBtnBox, setRawVisible_shpBtnBox] = useState(true);
    const [rawVisible_btnEnd, setRawVisible_btnEnd] = useState(true);
    const [rawVisible_btnPrint, setRawVisible_btnPrint] = useState(true);
    const [rawVisible_btnToExcel, setRawVisible_btnToExcel] = useState(true);
    const [rawVisible_btnCancel, setRawVisible_btnCancel] = useState(true);
    const [rawVisible_lbYear, setRawVisible_lbYear] = useState(true);
    const [rawVisible_chkYearMinap4, setRawVisible_chkYearMinap4] = useState(true);
    const [rawVisible_chkYearMinap3, setRawVisible_chkYearMinap3] = useState(true);
    const [rawVisible_chkYearMinap2, setRawVisible_chkYearMinap2] = useState(true);
    const [rawVisible_chkYearMinap1, setRawVisible_chkYearMinap1] = useState(true);
    const [rawVisible_lbJibu, setRawVisible_lbJibu] = useState(true);
    const [rawVisible_cbxJibu, setRawVisible_cbxJibu] = useState(true);
    const [rawVisible_Static0, setRawVisible_Static0] = useState(true);
    const [rawVisible_radLongMinap, setRawVisible_radLongMinap] = useState(true);
    const [rawVisible_radMinapGubun, setRawVisible_radMinapGubun] = useState(true);
    const [rawVisible_gdList, setRawVisible_gdList] = useState(false);
    const isVisible_Shape0 = rawVisible_Shape0;
    const setIsVisible_Shape0 = setRawVisible_Shape0;
    const isVisible_divWorkFormTitle = rawVisible_divWorkFormTitle;
    const setIsVisible_divWorkFormTitle = setRawVisible_divWorkFormTitle;
    const isVisible_Static1 = rawVisible_Static1;
    const setIsVisible_Static1 = setRawVisible_Static1;
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
    const isVisible_lbYear = rawVisible_lbYear && rawVisible_Shape0;
    const setIsVisible_lbYear = setRawVisible_lbYear;
    const isVisible_chkYearMinap4 = rawVisible_chkYearMinap4 && rawVisible_Shape0;
    const setIsVisible_chkYearMinap4 = setRawVisible_chkYearMinap4;
    const isVisible_chkYearMinap3 = rawVisible_chkYearMinap3 && rawVisible_Shape0;
    const setIsVisible_chkYearMinap3 = setRawVisible_chkYearMinap3;
    const isVisible_chkYearMinap2 = rawVisible_chkYearMinap2 && rawVisible_Shape0;
    const setIsVisible_chkYearMinap2 = setRawVisible_chkYearMinap2;
    const isVisible_chkYearMinap1 = rawVisible_chkYearMinap1 && rawVisible_Shape0;
    const setIsVisible_chkYearMinap1 = setRawVisible_chkYearMinap1;
    const isVisible_lbJibu = rawVisible_lbJibu && rawVisible_Shape0;
    const setIsVisible_lbJibu = setRawVisible_lbJibu;
    const isVisible_cbxJibu = rawVisible_cbxJibu && rawVisible_Shape0;
    const setIsVisible_cbxJibu = setRawVisible_cbxJibu;
    const isVisible_Static0 = rawVisible_Static0 && rawVisible_Shape0;
    const setIsVisible_Static0 = setRawVisible_Static0;
    const isVisible_radLongMinap = rawVisible_radLongMinap && rawVisible_Shape0;
    const setIsVisible_radLongMinap = setRawVisible_radLongMinap;
    const isVisible_radMinapGubun = rawVisible_radMinapGubun && rawVisible_Shape0;
    const setIsVisible_radMinapGubun = setRawVisible_radMinapGubun;
    const isVisible_gdList = rawVisible_gdList;
    const setIsVisible_gdList = setRawVisible_gdList;

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_ioJibu([]);
            setds_ioYear([]);
            setds_MinapGubun([]);
            setds_MinapList([]);
            setds_MinapListExcel([]);
            setds_SearchJogeon([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnExcell_OnClick = () => {
        console.log('btnExcell_OnClick clicked');
    };
    const lfn_CancelL = () => {
        console.log('lfn_CancelL clicked');
    };
    const lfn_End = () => {
        console.log('lfn_End clicked');
    };
    const lfn_Print = () => {
        console.log('lfn_Print clicked');
    };

    return {
        isLoading,
        ds_ioJibu,
        ds_ioYear,
        ds_MinapGubun,
        ds_MinapList,
        ds_MinapListExcel,
        ds_SearchJogeon,
        isVisible_Shape0,
        setIsVisible_Shape0,
        isVisible_divWorkFormTitle,
        setIsVisible_divWorkFormTitle,
        isVisible_Static1,
        setIsVisible_Static1,
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
        isVisible_lbYear,
        setIsVisible_lbYear,
        isVisible_chkYearMinap4,
        setIsVisible_chkYearMinap4,
        isVisible_chkYearMinap3,
        setIsVisible_chkYearMinap3,
        isVisible_chkYearMinap2,
        setIsVisible_chkYearMinap2,
        isVisible_chkYearMinap1,
        setIsVisible_chkYearMinap1,
        isVisible_lbJibu,
        setIsVisible_lbJibu,
        isVisible_cbxJibu,
        setIsVisible_cbxJibu,
        isVisible_Static0,
        setIsVisible_Static0,
        isVisible_radLongMinap,
        setIsVisible_radLongMinap,
        isVisible_radMinapGubun,
        setIsVisible_radMinapGubun,
        isVisible_gdList,
        setIsVisible_gdList,
        btnExcell_OnClick,
        lfn_CancelL,
        lfn_End,
        lfn_Print,
    };
};