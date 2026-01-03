// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_ioJibu, Ids_ioMonth, Ids_ioYear, Ids_ioChoiceGubun, Ids_oDownloadList1, Ids_oDownloadList2, Ids_oDownloadList3, Ids_oDownloadChk, Ids_iDownloadChk } from './FrmCOM9060MPersonalDownloadConfirmData';

export const useFrmCOM9060MPersonalDownloadConfirm = () => {
    const [ds_ioJibu, setds_ioJibu] = useState<Ids_ioJibu[]>([]);
    const [ds_ioMonth, setds_ioMonth] = useState<Ids_ioMonth[]>([]);
    const [ds_ioYear, setds_ioYear] = useState<Ids_ioYear[]>([]);
    const [ds_ioChoiceGubun, setds_ioChoiceGubun] = useState<Ids_ioChoiceGubun[]>([]);
    const [ds_oDownloadList1, setds_oDownloadList1] = useState<Ids_oDownloadList1[]>([]);
    const [ds_oDownloadList2, setds_oDownloadList2] = useState<Ids_oDownloadList2[]>([]);
    const [ds_oDownloadList3, setds_oDownloadList3] = useState<Ids_oDownloadList3[]>([]);
    const [ds_oDownloadChk, setds_oDownloadChk] = useState<Ids_oDownloadChk[]>([]);
    const [ds_iDownloadChk, setds_iDownloadChk] = useState<Ids_iDownloadChk[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [rawVisible_shpBtnBox, setRawVisible_shpBtnBox] = useState(true);
    const [rawVisible_divWorkFormTitle, setRawVisible_divWorkFormTitle] = useState(true);
    const [rawVisible_btnPrintScreen, setRawVisible_btnPrintScreen] = useState(true);
    const [rawVisible_btnEnd, setRawVisible_btnEnd] = useState(true);
    const [rawVisible_Shape0, setRawVisible_Shape0] = useState(true);
    const [rawVisible_lbBiz, setRawVisible_lbBiz] = useState(true);
    const [rawVisible_lbJibu, setRawVisible_lbJibu] = useState(true);
    const [rawVisible_cbxJibu, setRawVisible_cbxJibu] = useState(true);
    const [rawVisible_Shape2, setRawVisible_Shape2] = useState(true);
    const [rawVisible_lbSearch1, setRawVisible_lbSearch1] = useState(true);
    const [rawVisible_lbNoJubsuCnt, setRawVisible_lbNoJubsuCnt] = useState(true);
    const [rawVisible_medTotalCnt1, setRawVisible_medTotalCnt1] = useState(true);
    const [rawVisible_gdDownloadList1, setRawVisible_gdDownloadList1] = useState(true);
    const [rawVisible_lbYear, setRawVisible_lbYear] = useState(true);
    const [rawVisible_cbxYear, setRawVisible_cbxYear] = useState(true);
    const [rawVisible_cbxMonth, setRawVisible_cbxMonth] = useState(true);
    const [rawVisible_btnSearch, setRawVisible_btnSearch] = useState(true);
    const [rawVisible_Shape1, setRawVisible_Shape1] = useState(true);
    const [rawVisible_lbSearch2, setRawVisible_lbSearch2] = useState(true);
    const [rawVisible_Static1, setRawVisible_Static1] = useState(true);
    const [rawVisible_medTotalCnt2, setRawVisible_medTotalCnt2] = useState(true);
    const [rawVisible_gdDownloadList2, setRawVisible_gdDownloadList2] = useState(true);
    const [rawVisible_Shape3, setRawVisible_Shape3] = useState(true);
    const [rawVisible_lbSearch3, setRawVisible_lbSearch3] = useState(true);
    const [rawVisible_Static3, setRawVisible_Static3] = useState(true);
    const [rawVisible_medTotalCnt3, setRawVisible_medTotalCnt3] = useState(true);
    const [rawVisible_gdDownloadList3, setRawVisible_gdDownloadList3] = useState(true);
    const [rawVisible_Shape4, setRawVisible_Shape4] = useState(true);
    const [rawVisible_Static4, setRawVisible_Static4] = useState(true);
    const [rawVisible_Static5, setRawVisible_Static5] = useState(true);
    const [rawVisible_btnSave, setRawVisible_btnSave] = useState(true);
    const [rawVisible_Static6, setRawVisible_Static6] = useState(true);
    const [rawVisible_radChoiceGubun, setRawVisible_radChoiceGubun] = useState(true);
    const [rawVisible_lbChk, setRawVisible_lbChk] = useState(true);
    const [rawVisible_btnCancel, setRawVisible_btnCancel] = useState(true);
    const [rawVisible_Static7, setRawVisible_Static7] = useState(true);
    const [rawVisible_edDownloadCnt1, setRawVisible_edDownloadCnt1] = useState(true);
    const [rawVisible_Static8, setRawVisible_Static8] = useState(true);
    const [rawVisible_btnSearch1, setRawVisible_btnSearch1] = useState(true);
    const [rawVisible_Static9, setRawVisible_Static9] = useState(true);
    const [rawVisible_edDownloadCnt2, setRawVisible_edDownloadCnt2] = useState(true);
    const [rawVisible_Static10, setRawVisible_Static10] = useState(true);
    const [rawVisible_btnSearch2, setRawVisible_btnSearch2] = useState(true);
    const [rawVisible_Static11, setRawVisible_Static11] = useState(true);
    const [rawVisible_btnSearch3, setRawVisible_btnSearch3] = useState(true);
    const [rawVisible_medStartTime, setRawVisible_medStartTime] = useState(true);
    const [rawVisible_lbTimeWave, setRawVisible_lbTimeWave] = useState(true);
    const [rawVisible_medEndTime, setRawVisible_medEndTime] = useState(true);
    const [rawVisible_TARemark, setRawVisible_TARemark] = useState(true);
    const [rawVisible_Static0, setRawVisible_Static0] = useState(true);
    const isVisible_shpBtnBox = rawVisible_shpBtnBox;
    const setIsVisible_shpBtnBox = setRawVisible_shpBtnBox;
    const isVisible_divWorkFormTitle = rawVisible_divWorkFormTitle;
    const setIsVisible_divWorkFormTitle = setRawVisible_divWorkFormTitle;
    const isVisible_btnPrintScreen = rawVisible_btnPrintScreen && rawVisible_shpBtnBox;
    const setIsVisible_btnPrintScreen = setRawVisible_btnPrintScreen;
    const isVisible_btnEnd = rawVisible_btnEnd && rawVisible_shpBtnBox;
    const setIsVisible_btnEnd = setRawVisible_btnEnd;
    const isVisible_Shape0 = rawVisible_Shape0;
    const setIsVisible_Shape0 = setRawVisible_Shape0;
    const isVisible_lbBiz = rawVisible_lbBiz;
    const setIsVisible_lbBiz = setRawVisible_lbBiz;
    const isVisible_lbJibu = rawVisible_lbJibu && rawVisible_Shape0;
    const setIsVisible_lbJibu = setRawVisible_lbJibu;
    const isVisible_cbxJibu = rawVisible_cbxJibu && rawVisible_Shape0;
    const setIsVisible_cbxJibu = setRawVisible_cbxJibu;
    const isVisible_Shape2 = rawVisible_Shape2;
    const setIsVisible_Shape2 = setRawVisible_Shape2;
    const isVisible_lbSearch1 = rawVisible_lbSearch1;
    const setIsVisible_lbSearch1 = setRawVisible_lbSearch1;
    const isVisible_lbNoJubsuCnt = rawVisible_lbNoJubsuCnt && rawVisible_Shape2;
    const setIsVisible_lbNoJubsuCnt = setRawVisible_lbNoJubsuCnt;
    const isVisible_medTotalCnt1 = rawVisible_medTotalCnt1 && rawVisible_Shape2;
    const setIsVisible_medTotalCnt1 = setRawVisible_medTotalCnt1;
    const isVisible_gdDownloadList1 = rawVisible_gdDownloadList1 && rawVisible_Shape2;
    const setIsVisible_gdDownloadList1 = setRawVisible_gdDownloadList1;
    const isVisible_lbYear = rawVisible_lbYear && rawVisible_Shape0;
    const setIsVisible_lbYear = setRawVisible_lbYear;
    const isVisible_cbxYear = rawVisible_cbxYear && rawVisible_Shape0;
    const setIsVisible_cbxYear = setRawVisible_cbxYear;
    const isVisible_cbxMonth = rawVisible_cbxMonth && rawVisible_Shape0;
    const setIsVisible_cbxMonth = setRawVisible_cbxMonth;
    const isVisible_btnSearch = rawVisible_btnSearch && rawVisible_Shape0;
    const setIsVisible_btnSearch = setRawVisible_btnSearch;
    const isVisible_Shape1 = rawVisible_Shape1;
    const setIsVisible_Shape1 = setRawVisible_Shape1;
    const isVisible_lbSearch2 = rawVisible_lbSearch2;
    const setIsVisible_lbSearch2 = setRawVisible_lbSearch2;
    const isVisible_Static1 = rawVisible_Static1 && rawVisible_Shape1;
    const setIsVisible_Static1 = setRawVisible_Static1;
    const isVisible_medTotalCnt2 = rawVisible_medTotalCnt2 && rawVisible_Shape1;
    const setIsVisible_medTotalCnt2 = setRawVisible_medTotalCnt2;
    const isVisible_gdDownloadList2 = rawVisible_gdDownloadList2 && rawVisible_Shape1;
    const setIsVisible_gdDownloadList2 = setRawVisible_gdDownloadList2;
    const isVisible_Shape3 = rawVisible_Shape3;
    const setIsVisible_Shape3 = setRawVisible_Shape3;
    const isVisible_lbSearch3 = rawVisible_lbSearch3;
    const setIsVisible_lbSearch3 = setRawVisible_lbSearch3;
    const isVisible_Static3 = rawVisible_Static3 && rawVisible_Shape3;
    const setIsVisible_Static3 = setRawVisible_Static3;
    const isVisible_medTotalCnt3 = rawVisible_medTotalCnt3 && rawVisible_Shape3;
    const setIsVisible_medTotalCnt3 = setRawVisible_medTotalCnt3;
    const isVisible_gdDownloadList3 = rawVisible_gdDownloadList3 && rawVisible_Shape3;
    const setIsVisible_gdDownloadList3 = setRawVisible_gdDownloadList3;
    const isVisible_Shape4 = rawVisible_Shape4;
    const setIsVisible_Shape4 = setRawVisible_Shape4;
    const isVisible_Static4 = rawVisible_Static4 && rawVisible_Shape4;
    const setIsVisible_Static4 = setRawVisible_Static4;
    const isVisible_Static5 = rawVisible_Static5 && rawVisible_Shape4;
    const setIsVisible_Static5 = setRawVisible_Static5;
    const isVisible_btnSave = rawVisible_btnSave && rawVisible_Shape4;
    const setIsVisible_btnSave = setRawVisible_btnSave;
    const isVisible_Static6 = rawVisible_Static6 && rawVisible_Shape4;
    const setIsVisible_Static6 = setRawVisible_Static6;
    const isVisible_radChoiceGubun = rawVisible_radChoiceGubun && rawVisible_Shape4;
    const setIsVisible_radChoiceGubun = setRawVisible_radChoiceGubun;
    const isVisible_lbChk = rawVisible_lbChk && rawVisible_Shape0;
    const setIsVisible_lbChk = setRawVisible_lbChk;
    const isVisible_btnCancel = rawVisible_btnCancel && rawVisible_shpBtnBox;
    const setIsVisible_btnCancel = setRawVisible_btnCancel;
    const isVisible_Static7 = rawVisible_Static7 && rawVisible_Shape2;
    const setIsVisible_Static7 = setRawVisible_Static7;
    const isVisible_edDownloadCnt1 = rawVisible_edDownloadCnt1 && rawVisible_Shape2;
    const setIsVisible_edDownloadCnt1 = setRawVisible_edDownloadCnt1;
    const isVisible_Static8 = rawVisible_Static8 && rawVisible_Shape2;
    const setIsVisible_Static8 = setRawVisible_Static8;
    const isVisible_btnSearch1 = rawVisible_btnSearch1 && rawVisible_Shape2;
    const setIsVisible_btnSearch1 = setRawVisible_btnSearch1;
    const isVisible_Static9 = rawVisible_Static9 && rawVisible_Shape1;
    const setIsVisible_Static9 = setRawVisible_Static9;
    const isVisible_edDownloadCnt2 = rawVisible_edDownloadCnt2 && rawVisible_Shape1;
    const setIsVisible_edDownloadCnt2 = setRawVisible_edDownloadCnt2;
    const isVisible_Static10 = rawVisible_Static10 && rawVisible_Shape1;
    const setIsVisible_Static10 = setRawVisible_Static10;
    const isVisible_btnSearch2 = rawVisible_btnSearch2 && rawVisible_Shape1;
    const setIsVisible_btnSearch2 = setRawVisible_btnSearch2;
    const isVisible_Static11 = rawVisible_Static11 && rawVisible_Shape3;
    const setIsVisible_Static11 = setRawVisible_Static11;
    const isVisible_btnSearch3 = rawVisible_btnSearch3 && rawVisible_Shape3;
    const setIsVisible_btnSearch3 = setRawVisible_btnSearch3;
    const isVisible_medStartTime = rawVisible_medStartTime && rawVisible_Shape3;
    const setIsVisible_medStartTime = setRawVisible_medStartTime;
    const isVisible_lbTimeWave = rawVisible_lbTimeWave && rawVisible_Shape3;
    const setIsVisible_lbTimeWave = setRawVisible_lbTimeWave;
    const isVisible_medEndTime = rawVisible_medEndTime && rawVisible_Shape3;
    const setIsVisible_medEndTime = setRawVisible_medEndTime;
    const isVisible_TARemark = rawVisible_TARemark && rawVisible_Shape4;
    const setIsVisible_TARemark = setRawVisible_TARemark;
    const isVisible_Static0 = rawVisible_Static0 && rawVisible_Shape3;
    const setIsVisible_Static0 = setRawVisible_Static0;

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_ioJibu([]);
            setds_ioMonth([]);
            setds_ioYear([]);
            setds_ioChoiceGubun([]);
            setds_oDownloadList1([]);
            setds_oDownloadList2([]);
            setds_oDownloadList3([]);
            setds_oDownloadChk([]);
            setds_iDownloadChk([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnSave_OnClick = () => {
        console.log('btnSave_OnClick clicked');
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
    const lfn_Search1 = () => {
        console.log('lfn_Search1 clicked');
    };
    const lfn_Search2 = () => {
        console.log('lfn_Search2 clicked');
    };
    const lfn_Search3 = () => {
        console.log('lfn_Search3 clicked');
    };

    return {
        isLoading,
        ds_ioJibu,
        ds_ioMonth,
        ds_ioYear,
        ds_ioChoiceGubun,
        ds_oDownloadList1,
        ds_oDownloadList2,
        ds_oDownloadList3,
        ds_oDownloadChk,
        ds_iDownloadChk,
        isVisible_shpBtnBox,
        setIsVisible_shpBtnBox,
        isVisible_divWorkFormTitle,
        setIsVisible_divWorkFormTitle,
        isVisible_btnPrintScreen,
        setIsVisible_btnPrintScreen,
        isVisible_btnEnd,
        setIsVisible_btnEnd,
        isVisible_Shape0,
        setIsVisible_Shape0,
        isVisible_lbBiz,
        setIsVisible_lbBiz,
        isVisible_lbJibu,
        setIsVisible_lbJibu,
        isVisible_cbxJibu,
        setIsVisible_cbxJibu,
        isVisible_Shape2,
        setIsVisible_Shape2,
        isVisible_lbSearch1,
        setIsVisible_lbSearch1,
        isVisible_lbNoJubsuCnt,
        setIsVisible_lbNoJubsuCnt,
        isVisible_medTotalCnt1,
        setIsVisible_medTotalCnt1,
        isVisible_gdDownloadList1,
        setIsVisible_gdDownloadList1,
        isVisible_lbYear,
        setIsVisible_lbYear,
        isVisible_cbxYear,
        setIsVisible_cbxYear,
        isVisible_cbxMonth,
        setIsVisible_cbxMonth,
        isVisible_btnSearch,
        setIsVisible_btnSearch,
        isVisible_Shape1,
        setIsVisible_Shape1,
        isVisible_lbSearch2,
        setIsVisible_lbSearch2,
        isVisible_Static1,
        setIsVisible_Static1,
        isVisible_medTotalCnt2,
        setIsVisible_medTotalCnt2,
        isVisible_gdDownloadList2,
        setIsVisible_gdDownloadList2,
        isVisible_Shape3,
        setIsVisible_Shape3,
        isVisible_lbSearch3,
        setIsVisible_lbSearch3,
        isVisible_Static3,
        setIsVisible_Static3,
        isVisible_medTotalCnt3,
        setIsVisible_medTotalCnt3,
        isVisible_gdDownloadList3,
        setIsVisible_gdDownloadList3,
        isVisible_Shape4,
        setIsVisible_Shape4,
        isVisible_Static4,
        setIsVisible_Static4,
        isVisible_Static5,
        setIsVisible_Static5,
        isVisible_btnSave,
        setIsVisible_btnSave,
        isVisible_Static6,
        setIsVisible_Static6,
        isVisible_radChoiceGubun,
        setIsVisible_radChoiceGubun,
        isVisible_lbChk,
        setIsVisible_lbChk,
        isVisible_btnCancel,
        setIsVisible_btnCancel,
        isVisible_Static7,
        setIsVisible_Static7,
        isVisible_edDownloadCnt1,
        setIsVisible_edDownloadCnt1,
        isVisible_Static8,
        setIsVisible_Static8,
        isVisible_btnSearch1,
        setIsVisible_btnSearch1,
        isVisible_Static9,
        setIsVisible_Static9,
        isVisible_edDownloadCnt2,
        setIsVisible_edDownloadCnt2,
        isVisible_Static10,
        setIsVisible_Static10,
        isVisible_btnSearch2,
        setIsVisible_btnSearch2,
        isVisible_Static11,
        setIsVisible_Static11,
        isVisible_btnSearch3,
        setIsVisible_btnSearch3,
        isVisible_medStartTime,
        setIsVisible_medStartTime,
        isVisible_lbTimeWave,
        setIsVisible_lbTimeWave,
        isVisible_medEndTime,
        setIsVisible_medEndTime,
        isVisible_TARemark,
        setIsVisible_TARemark,
        isVisible_Static0,
        setIsVisible_Static0,
        btnSave_OnClick,
        lfn_Cancel,
        lfn_End,
        lfn_PrintScreen,
        lfn_Search,
        lfn_Search1,
        lfn_Search2,
        lfn_Search3,
    };
};