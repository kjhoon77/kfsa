// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_ioJibu, Ids_ioMonth, Ids_ioYear, Ids_oDownloadChk, Ids_iDownloadChk } from './FrmCOM9070MPersonalDownloadResultData';

export const useFrmCOM9070MPersonalDownloadResult = () => {
    const [ds_ioJibu, setds_ioJibu] = useState<Ids_ioJibu[]>([]);
    const [ds_ioMonth, setds_ioMonth] = useState<Ids_ioMonth[]>([]);
    const [ds_ioYear, setds_ioYear] = useState<Ids_ioYear[]>([]);
    const [ds_oDownloadChk, setds_oDownloadChk] = useState<Ids_oDownloadChk[]>([]);
    const [ds_iDownloadChk, setds_iDownloadChk] = useState<Ids_iDownloadChk[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [rawVisible_Shape1, setRawVisible_Shape1] = useState(true);
    const [rawVisible_Shape0, setRawVisible_Shape0] = useState(true);
    const [rawVisible_divWorkFormTitle, setRawVisible_divWorkFormTitle] = useState(true);
    const [rawVisible_Static1, setRawVisible_Static1] = useState(true);
    const [rawVisible_lbJibu, setRawVisible_lbJibu] = useState(true);
    const [rawVisible_cbxJibu, setRawVisible_cbxJibu] = useState(true);
    const [rawVisible_shpBtnBox, setRawVisible_shpBtnBox] = useState(true);
    const [rawVisible_btnEnd, setRawVisible_btnEnd] = useState(true);
    const [rawVisible_btnPrint, setRawVisible_btnPrint] = useState(true);
    const [rawVisible_btnCancel, setRawVisible_btnCancel] = useState(true);
    const [rawVisible_lbDate, setRawVisible_lbDate] = useState(true);
    const [rawVisible_cbxMonth, setRawVisible_cbxMonth] = useState(true);
    const [rawVisible_dsCloseCheck, setRawVisible_dsCloseCheck] = useState(true);
    const [rawVisible_btnSearch, setRawVisible_btnSearch] = useState(true);
    const [rawVisible_btnProc, setRawVisible_btnProc] = useState(true);
    const [rawVisible_cbxYear, setRawVisible_cbxYear] = useState(true);
    const [rawVisible_btnProcCancel, setRawVisible_btnProcCancel] = useState(true);
    const isVisible_Shape1 = rawVisible_Shape1;
    const setIsVisible_Shape1 = setRawVisible_Shape1;
    const isVisible_Shape0 = rawVisible_Shape0;
    const setIsVisible_Shape0 = setRawVisible_Shape0;
    const isVisible_divWorkFormTitle = rawVisible_divWorkFormTitle;
    const setIsVisible_divWorkFormTitle = setRawVisible_divWorkFormTitle;
    const isVisible_Static1 = rawVisible_Static1;
    const setIsVisible_Static1 = setRawVisible_Static1;
    const isVisible_lbJibu = rawVisible_lbJibu && rawVisible_Shape0;
    const setIsVisible_lbJibu = setRawVisible_lbJibu;
    const isVisible_cbxJibu = rawVisible_cbxJibu && rawVisible_Shape0;
    const setIsVisible_cbxJibu = setRawVisible_cbxJibu;
    const isVisible_shpBtnBox = rawVisible_shpBtnBox;
    const setIsVisible_shpBtnBox = setRawVisible_shpBtnBox;
    const isVisible_btnEnd = rawVisible_btnEnd && rawVisible_shpBtnBox;
    const setIsVisible_btnEnd = setRawVisible_btnEnd;
    const isVisible_btnPrint = rawVisible_btnPrint && rawVisible_shpBtnBox;
    const setIsVisible_btnPrint = setRawVisible_btnPrint;
    const isVisible_btnCancel = rawVisible_btnCancel && rawVisible_shpBtnBox;
    const setIsVisible_btnCancel = setRawVisible_btnCancel;
    const isVisible_lbDate = rawVisible_lbDate && rawVisible_Shape0;
    const setIsVisible_lbDate = setRawVisible_lbDate;
    const isVisible_cbxMonth = rawVisible_cbxMonth && rawVisible_Shape0;
    const setIsVisible_cbxMonth = setRawVisible_cbxMonth;
    const isVisible_dsCloseCheck = rawVisible_dsCloseCheck && rawVisible_Shape1;
    const setIsVisible_dsCloseCheck = setRawVisible_dsCloseCheck;
    const isVisible_btnSearch = rawVisible_btnSearch && rawVisible_Shape0;
    const setIsVisible_btnSearch = setRawVisible_btnSearch;
    const isVisible_btnProc = rawVisible_btnProc && rawVisible_Shape0;
    const setIsVisible_btnProc = setRawVisible_btnProc;
    const isVisible_cbxYear = rawVisible_cbxYear && rawVisible_Shape0;
    const setIsVisible_cbxYear = setRawVisible_cbxYear;
    const isVisible_btnProcCancel = rawVisible_btnProcCancel && rawVisible_Shape0;
    const setIsVisible_btnProcCancel = setRawVisible_btnProcCancel;

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_ioJibu([]);
            setds_ioMonth([]);
            setds_ioYear([]);
            setds_oDownloadChk([]);
            setds_iDownloadChk([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnProcCancel_OnClick = () => {
        console.log('btnProcCancel_OnClick clicked');
    };
    const btnProc_OnClick = () => {
        console.log('btnProc_OnClick clicked');
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
    const lfn_Search = () => {
        console.log('lfn_Search clicked');
    };

    return {
        isLoading,
        ds_ioJibu,
        ds_ioMonth,
        ds_ioYear,
        ds_oDownloadChk,
        ds_iDownloadChk,
        isVisible_Shape1,
        setIsVisible_Shape1,
        isVisible_Shape0,
        setIsVisible_Shape0,
        isVisible_divWorkFormTitle,
        setIsVisible_divWorkFormTitle,
        isVisible_Static1,
        setIsVisible_Static1,
        isVisible_lbJibu,
        setIsVisible_lbJibu,
        isVisible_cbxJibu,
        setIsVisible_cbxJibu,
        isVisible_shpBtnBox,
        setIsVisible_shpBtnBox,
        isVisible_btnEnd,
        setIsVisible_btnEnd,
        isVisible_btnPrint,
        setIsVisible_btnPrint,
        isVisible_btnCancel,
        setIsVisible_btnCancel,
        isVisible_lbDate,
        setIsVisible_lbDate,
        isVisible_cbxMonth,
        setIsVisible_cbxMonth,
        isVisible_dsCloseCheck,
        setIsVisible_dsCloseCheck,
        isVisible_btnSearch,
        setIsVisible_btnSearch,
        isVisible_btnProc,
        setIsVisible_btnProc,
        isVisible_cbxYear,
        setIsVisible_cbxYear,
        isVisible_btnProcCancel,
        setIsVisible_btnProcCancel,
        btnProcCancel_OnClick,
        btnProc_OnClick,
        lfn_Cancel,
        lfn_End,
        lfn_Print,
        lfn_Search,
    };
};