// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_ioRepayFeeCode, Ids_oRepayFeeGubun, Ids_oTrainingGubun, Ids_oCourse, Ids_oRepayFee } from './Frmsys0042MRepayFeeCodeManagementData';

export const useFrmsys0042MRepayFeeCodeManagement = () => {
    const [ds_ioRepayFeeCode, setds_ioRepayFeeCode] = useState<Ids_ioRepayFeeCode[]>([]);
    const [ds_oRepayFeeGubun, setds_oRepayFeeGubun] = useState<Ids_oRepayFeeGubun[]>([]);
    const [ds_oTrainingGubun, setds_oTrainingGubun] = useState<Ids_oTrainingGubun[]>([]);
    const [ds_oCourse, setds_oCourse] = useState<Ids_oCourse[]>([]);
    const [ds_oRepayFee, setds_oRepayFee] = useState<Ids_oRepayFee[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [rawVisible_shpGubunBox, setRawVisible_shpGubunBox] = useState(true);
    const [rawVisible_divWorkFormTitle, setRawVisible_divWorkFormTitle] = useState(true);
    const [rawVisible_gdRepayFeeCode, setRawVisible_gdRepayFeeCode] = useState(true);
    const [rawVisible_btnMutilSort, setRawVisible_btnMutilSort] = useState(true);
    const [rawVisible_lbRepayFeeGubun, setRawVisible_lbRepayFeeGubun] = useState(true);
    const [rawVisible_lbRepayFeeAmt, setRawVisible_lbRepayFeeAmt] = useState(true);
    const [rawVisible_medRepayFeeAmt, setRawVisible_medRepayFeeAmt] = useState(true);
    const [rawVisible_lbCourse, setRawVisible_lbCourse] = useState(true);
    const [rawVisible_cbxCourse, setRawVisible_cbxCourse] = useState(true);
    const [rawVisible_chkUseYn, setRawVisible_chkUseYn] = useState(true);
    const [rawVisible_lbUseYn, setRawVisible_lbUseYn] = useState(true);
    const [rawVisible_shpBtnBox, setRawVisible_shpBtnBox] = useState(true);
    const [rawVisible_btnSearch, setRawVisible_btnSearch] = useState(true);
    const [rawVisible_btnInput, setRawVisible_btnInput] = useState(true);
    const [rawVisible_btnDelete, setRawVisible_btnDelete] = useState(true);
    const [rawVisible_btnSave, setRawVisible_btnSave] = useState(true);
    const [rawVisible_btnCancel, setRawVisible_btnCancel] = useState(true);
    const [rawVisible_btnToExcel, setRawVisible_btnToExcel] = useState(true);
    const [rawVisible_btnPrintScreen, setRawVisible_btnPrintScreen] = useState(true);
    const [rawVisible_btnEnd, setRawVisible_btnEnd] = useState(true);
    const [rawVisible_cbxRepayFeeCode, setRawVisible_cbxRepayFeeCode] = useState(true);
    const [rawVisible_lbEduDate, setRawVisible_lbEduDate] = useState(true);
    const [rawVisible_calDateStart, setRawVisible_calDateStart] = useState(true);
    const [rawVisible_Static0, setRawVisible_Static0] = useState(true);
    const [rawVisible_calDateEnd, setRawVisible_calDateEnd] = useState(true);
    const isVisible_shpGubunBox = rawVisible_shpGubunBox;
    const setIsVisible_shpGubunBox = setRawVisible_shpGubunBox;
    const isVisible_divWorkFormTitle = rawVisible_divWorkFormTitle;
    const setIsVisible_divWorkFormTitle = setRawVisible_divWorkFormTitle;
    const isVisible_gdRepayFeeCode = rawVisible_gdRepayFeeCode;
    const setIsVisible_gdRepayFeeCode = setRawVisible_gdRepayFeeCode;
    const isVisible_btnMutilSort = rawVisible_btnMutilSort;
    const setIsVisible_btnMutilSort = setRawVisible_btnMutilSort;
    const isVisible_lbRepayFeeGubun = rawVisible_lbRepayFeeGubun && rawVisible_shpGubunBox;
    const setIsVisible_lbRepayFeeGubun = setRawVisible_lbRepayFeeGubun;
    const isVisible_lbRepayFeeAmt = rawVisible_lbRepayFeeAmt && rawVisible_shpGubunBox;
    const setIsVisible_lbRepayFeeAmt = setRawVisible_lbRepayFeeAmt;
    const isVisible_medRepayFeeAmt = rawVisible_medRepayFeeAmt && rawVisible_shpGubunBox;
    const setIsVisible_medRepayFeeAmt = setRawVisible_medRepayFeeAmt;
    const isVisible_lbCourse = rawVisible_lbCourse && rawVisible_shpGubunBox;
    const setIsVisible_lbCourse = setRawVisible_lbCourse;
    const isVisible_cbxCourse = rawVisible_cbxCourse && rawVisible_shpGubunBox;
    const setIsVisible_cbxCourse = setRawVisible_cbxCourse;
    const isVisible_chkUseYn = rawVisible_chkUseYn && rawVisible_shpGubunBox;
    const setIsVisible_chkUseYn = setRawVisible_chkUseYn;
    const isVisible_lbUseYn = rawVisible_lbUseYn && rawVisible_shpGubunBox;
    const setIsVisible_lbUseYn = setRawVisible_lbUseYn;
    const isVisible_shpBtnBox = rawVisible_shpBtnBox;
    const setIsVisible_shpBtnBox = setRawVisible_shpBtnBox;
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
    const isVisible_cbxRepayFeeCode = rawVisible_cbxRepayFeeCode && rawVisible_shpGubunBox;
    const setIsVisible_cbxRepayFeeCode = setRawVisible_cbxRepayFeeCode;
    const isVisible_lbEduDate = rawVisible_lbEduDate && rawVisible_shpGubunBox;
    const setIsVisible_lbEduDate = setRawVisible_lbEduDate;
    const isVisible_calDateStart = rawVisible_calDateStart && rawVisible_shpGubunBox;
    const setIsVisible_calDateStart = setRawVisible_calDateStart;
    const isVisible_Static0 = rawVisible_Static0 && rawVisible_shpGubunBox;
    const setIsVisible_Static0 = setRawVisible_Static0;
    const isVisible_calDateEnd = rawVisible_calDateEnd && rawVisible_shpGubunBox;
    const setIsVisible_calDateEnd = setRawVisible_calDateEnd;

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_ioRepayFeeCode([]);
            setds_oRepayFeeGubun([]);
            setds_oTrainingGubun([]);
            setds_oCourse([]);
            setds_oRepayFee([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnMutilSort_OnClick = () => {
        console.log('btnMutilSort_OnClick clicked');
    };
    const lfn_Delete = () => {
        console.log('lfn_Delete clicked');
    };
    const lfn_End = () => {
        console.log('lfn_End clicked');
    };
    const lfn_Excel = () => {
        console.log('lfn_Excel clicked');
    };
    const lfn_Input = () => {
        console.log('lfn_Input clicked');
    };
    const lfn_PrintScreen = () => {
        console.log('lfn_PrintScreen clicked');
    };
    const lfn_Reset = () => {
        console.log('lfn_Reset clicked');
    };
    const lfn_Save = () => {
        console.log('lfn_Save clicked');
    };
    const lfn_Search = () => {
        console.log('lfn_Search clicked');
    };

    return {
        isLoading,
        ds_ioRepayFeeCode,
        ds_oRepayFeeGubun,
        ds_oTrainingGubun,
        ds_oCourse,
        ds_oRepayFee,
        isVisible_shpGubunBox,
        setIsVisible_shpGubunBox,
        isVisible_divWorkFormTitle,
        setIsVisible_divWorkFormTitle,
        isVisible_gdRepayFeeCode,
        setIsVisible_gdRepayFeeCode,
        isVisible_btnMutilSort,
        setIsVisible_btnMutilSort,
        isVisible_lbRepayFeeGubun,
        setIsVisible_lbRepayFeeGubun,
        isVisible_lbRepayFeeAmt,
        setIsVisible_lbRepayFeeAmt,
        isVisible_medRepayFeeAmt,
        setIsVisible_medRepayFeeAmt,
        isVisible_lbCourse,
        setIsVisible_lbCourse,
        isVisible_cbxCourse,
        setIsVisible_cbxCourse,
        isVisible_chkUseYn,
        setIsVisible_chkUseYn,
        isVisible_lbUseYn,
        setIsVisible_lbUseYn,
        isVisible_shpBtnBox,
        setIsVisible_shpBtnBox,
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
        isVisible_cbxRepayFeeCode,
        setIsVisible_cbxRepayFeeCode,
        isVisible_lbEduDate,
        setIsVisible_lbEduDate,
        isVisible_calDateStart,
        setIsVisible_calDateStart,
        isVisible_Static0,
        setIsVisible_Static0,
        isVisible_calDateEnd,
        setIsVisible_calDateEnd,
        btnMutilSort_OnClick,
        lfn_Delete,
        lfn_End,
        lfn_Excel,
        lfn_Input,
        lfn_PrintScreen,
        lfn_Reset,
        lfn_Save,
        lfn_Search,
    };
};