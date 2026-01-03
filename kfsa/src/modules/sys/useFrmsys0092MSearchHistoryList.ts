// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_oSearchHistory, Ids_oGubun, Ids_ioUserList, Ids_ioDeptList } from './Frmsys0092MSearchHistoryListData';

export const useFrmsys0092MSearchHistoryList = () => {
    const [ds_oSearchHistory, setds_oSearchHistory] = useState<Ids_oSearchHistory[]>([]);
    const [ds_oGubun, setds_oGubun] = useState<Ids_oGubun[]>([]);
    const [ds_ioUserList, setds_ioUserList] = useState<Ids_ioUserList[]>([]);
    const [ds_ioDeptList, setds_ioDeptList] = useState<Ids_ioDeptList[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [rawVisible_shpBtnBox, setRawVisible_shpBtnBox] = useState(true);
    const [rawVisible_shpGubunBox, setRawVisible_shpGubunBox] = useState(true);
    const [rawVisible_divWorkFormTitle, setRawVisible_divWorkFormTitle] = useState(true);
    const [rawVisible_btnSearch, setRawVisible_btnSearch] = useState(true);
    const [rawVisible_btnCancel, setRawVisible_btnCancel] = useState(true);
    const [rawVisible_btnToExcel, setRawVisible_btnToExcel] = useState(true);
    const [rawVisible_btnPrintScreen, setRawVisible_btnPrintScreen] = useState(true);
    const [rawVisible_btnEnd, setRawVisible_btnEnd] = useState(true);
    const [rawVisible_gdSearchHistory, setRawVisible_gdSearchHistory] = useState(true);
    const [rawVisible_Button1, setRawVisible_Button1] = useState(true);
    const [rawVisible_calDateEnd, setRawVisible_calDateEnd] = useState(true);
    const [rawVisible_lbDateWave1, setRawVisible_lbDateWave1] = useState(true);
    const [rawVisible_calDateStart, setRawVisible_calDateStart] = useState(true);
    const [rawVisible_lbDate, setRawVisible_lbDate] = useState(true);
    const [rawVisible_cbxGubun, setRawVisible_cbxGubun] = useState(true);
    const [rawVisible_lbGubun, setRawVisible_lbGubun] = useState(true);
    const [rawVisible_lbWorkGubunNm, setRawVisible_lbWorkGubunNm] = useState(true);
    const [rawVisible_edWorkGubunNm, setRawVisible_edWorkGubunNm] = useState(true);
    const [rawVisible_lbUser, setRawVisible_lbUser] = useState(true);
    const [rawVisible_cbxDeptList, setRawVisible_cbxDeptList] = useState(true);
    const [rawVisible_Static0, setRawVisible_Static0] = useState(true);
    const [rawVisible_cbxUserList, setRawVisible_cbxUserList] = useState(true);
    const [rawVisible_btnSearchWork, setRawVisible_btnSearchWork] = useState(true);
    const isVisible_shpBtnBox = rawVisible_shpBtnBox;
    const setIsVisible_shpBtnBox = setRawVisible_shpBtnBox;
    const isVisible_shpGubunBox = rawVisible_shpGubunBox;
    const setIsVisible_shpGubunBox = setRawVisible_shpGubunBox;
    const isVisible_divWorkFormTitle = rawVisible_divWorkFormTitle;
    const setIsVisible_divWorkFormTitle = setRawVisible_divWorkFormTitle;
    const isVisible_btnSearch = rawVisible_btnSearch && rawVisible_shpBtnBox;
    const setIsVisible_btnSearch = setRawVisible_btnSearch;
    const isVisible_btnCancel = rawVisible_btnCancel && rawVisible_shpBtnBox;
    const setIsVisible_btnCancel = setRawVisible_btnCancel;
    const isVisible_btnToExcel = rawVisible_btnToExcel && rawVisible_shpBtnBox;
    const setIsVisible_btnToExcel = setRawVisible_btnToExcel;
    const isVisible_btnPrintScreen = rawVisible_btnPrintScreen && rawVisible_shpBtnBox;
    const setIsVisible_btnPrintScreen = setRawVisible_btnPrintScreen;
    const isVisible_btnEnd = rawVisible_btnEnd && rawVisible_shpBtnBox;
    const setIsVisible_btnEnd = setRawVisible_btnEnd;
    const isVisible_gdSearchHistory = rawVisible_gdSearchHistory;
    const setIsVisible_gdSearchHistory = setRawVisible_gdSearchHistory;
    const isVisible_Button1 = rawVisible_Button1;
    const setIsVisible_Button1 = setRawVisible_Button1;
    const isVisible_calDateEnd = rawVisible_calDateEnd && rawVisible_shpGubunBox;
    const setIsVisible_calDateEnd = setRawVisible_calDateEnd;
    const isVisible_lbDateWave1 = rawVisible_lbDateWave1 && rawVisible_shpGubunBox;
    const setIsVisible_lbDateWave1 = setRawVisible_lbDateWave1;
    const isVisible_calDateStart = rawVisible_calDateStart && rawVisible_shpGubunBox;
    const setIsVisible_calDateStart = setRawVisible_calDateStart;
    const isVisible_lbDate = rawVisible_lbDate && rawVisible_shpGubunBox;
    const setIsVisible_lbDate = setRawVisible_lbDate;
    const isVisible_cbxGubun = rawVisible_cbxGubun && rawVisible_shpGubunBox;
    const setIsVisible_cbxGubun = setRawVisible_cbxGubun;
    const isVisible_lbGubun = rawVisible_lbGubun && rawVisible_shpGubunBox;
    const setIsVisible_lbGubun = setRawVisible_lbGubun;
    const isVisible_lbWorkGubunNm = rawVisible_lbWorkGubunNm && rawVisible_shpGubunBox;
    const setIsVisible_lbWorkGubunNm = setRawVisible_lbWorkGubunNm;
    const isVisible_edWorkGubunNm = rawVisible_edWorkGubunNm && rawVisible_shpGubunBox;
    const setIsVisible_edWorkGubunNm = setRawVisible_edWorkGubunNm;
    const isVisible_lbUser = rawVisible_lbUser && rawVisible_shpGubunBox;
    const setIsVisible_lbUser = setRawVisible_lbUser;
    const isVisible_cbxDeptList = rawVisible_cbxDeptList && rawVisible_shpGubunBox;
    const setIsVisible_cbxDeptList = setRawVisible_cbxDeptList;
    const isVisible_Static0 = rawVisible_Static0 && rawVisible_shpGubunBox;
    const setIsVisible_Static0 = setRawVisible_Static0;
    const isVisible_cbxUserList = rawVisible_cbxUserList && rawVisible_shpGubunBox;
    const setIsVisible_cbxUserList = setRawVisible_cbxUserList;
    const isVisible_btnSearchWork = rawVisible_btnSearchWork && rawVisible_shpGubunBox;
    const setIsVisible_btnSearchWork = setRawVisible_btnSearchWork;

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_oSearchHistory([]);
            setds_oGubun([]);
            setds_ioUserList([]);
            setds_ioDeptList([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnMutilSort_OnClick = () => {
        console.log('btnMutilSort_OnClick clicked');
    };
    const btnSearchWork_OnClick = () => {
        console.log('btnSearchWork_OnClick clicked');
    };
    const lfn_Cancel = () => {
        console.log('lfn_Cancel clicked');
    };
    const lfn_End = () => {
        console.log('lfn_End clicked');
    };
    const lfn_Excel = () => {
        console.log('lfn_Excel clicked');
    };
    const lfn_PrintScreen = () => {
        console.log('lfn_PrintScreen clicked');
    };
    const lfn_Search = () => {
        console.log('lfn_Search clicked');
    };

    return {
        isLoading,
        ds_oSearchHistory,
        ds_oGubun,
        ds_ioUserList,
        ds_ioDeptList,
        isVisible_shpBtnBox,
        setIsVisible_shpBtnBox,
        isVisible_shpGubunBox,
        setIsVisible_shpGubunBox,
        isVisible_divWorkFormTitle,
        setIsVisible_divWorkFormTitle,
        isVisible_btnSearch,
        setIsVisible_btnSearch,
        isVisible_btnCancel,
        setIsVisible_btnCancel,
        isVisible_btnToExcel,
        setIsVisible_btnToExcel,
        isVisible_btnPrintScreen,
        setIsVisible_btnPrintScreen,
        isVisible_btnEnd,
        setIsVisible_btnEnd,
        isVisible_gdSearchHistory,
        setIsVisible_gdSearchHistory,
        isVisible_Button1,
        setIsVisible_Button1,
        isVisible_calDateEnd,
        setIsVisible_calDateEnd,
        isVisible_lbDateWave1,
        setIsVisible_lbDateWave1,
        isVisible_calDateStart,
        setIsVisible_calDateStart,
        isVisible_lbDate,
        setIsVisible_lbDate,
        isVisible_cbxGubun,
        setIsVisible_cbxGubun,
        isVisible_lbGubun,
        setIsVisible_lbGubun,
        isVisible_lbWorkGubunNm,
        setIsVisible_lbWorkGubunNm,
        isVisible_edWorkGubunNm,
        setIsVisible_edWorkGubunNm,
        isVisible_lbUser,
        setIsVisible_lbUser,
        isVisible_cbxDeptList,
        setIsVisible_cbxDeptList,
        isVisible_Static0,
        setIsVisible_Static0,
        isVisible_cbxUserList,
        setIsVisible_cbxUserList,
        isVisible_btnSearchWork,
        setIsVisible_btnSearchWork,
        btnMutilSort_OnClick,
        btnSearchWork_OnClick,
        lfn_Cancel,
        lfn_End,
        lfn_Excel,
        lfn_PrintScreen,
        lfn_Search,
    };
};