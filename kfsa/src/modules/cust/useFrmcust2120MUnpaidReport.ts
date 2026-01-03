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
    const [isVisible_Shape0, setIsVisible_Shape0] = useState(true);
    const [isVisible_divWorkFormTitle, setIsVisible_divWorkFormTitle] = useState(true);
    const [isVisible_Static1, setIsVisible_Static1] = useState(true);
    const [isVisible_shpBtnBox, setIsVisible_shpBtnBox] = useState(true);
    const [isVisible_btnEnd, setIsVisible_btnEnd] = useState(true);
    const [isVisible_btnPrint, setIsVisible_btnPrint] = useState(true);
    const [isVisible_btnToExcel, setIsVisible_btnToExcel] = useState(true);
    const [isVisible_btnCancel, setIsVisible_btnCancel] = useState(true);
    const [isVisible_lbYear, setIsVisible_lbYear] = useState(true);
    const [isVisible_chkYearMinap4, setIsVisible_chkYearMinap4] = useState(true);
    const [isVisible_chkYearMinap3, setIsVisible_chkYearMinap3] = useState(true);
    const [isVisible_chkYearMinap2, setIsVisible_chkYearMinap2] = useState(true);
    const [isVisible_chkYearMinap1, setIsVisible_chkYearMinap1] = useState(true);
    const [isVisible_lbJibu, setIsVisible_lbJibu] = useState(true);
    const [isVisible_cbxJibu, setIsVisible_cbxJibu] = useState(true);
    const [isVisible_Static0, setIsVisible_Static0] = useState(true);
    const [isVisible_radLongMinap, setIsVisible_radLongMinap] = useState(true);
    const [isVisible_radMinapGubun, setIsVisible_radMinapGubun] = useState(true);
    const [isVisible_gdList, setIsVisible_gdList] = useState(false);

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