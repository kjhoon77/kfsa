// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_ioMemberfeeCode, Ids_oPaymentMethod, Ids_oMemberfeeGubun, Ids_oCourse } from './Frmsys0038MMemberfeeCodeManagementData';

export const useFrmsys0038MMemberfeeCodeManagement = () => {
    const [ds_ioMemberfeeCode, setds_ioMemberfeeCode] = useState<Ids_ioMemberfeeCode[]>([]);
    const [ds_oPaymentMethod, setds_oPaymentMethod] = useState<Ids_oPaymentMethod[]>([]);
    const [ds_oMemberfeeGubun, setds_oMemberfeeGubun] = useState<Ids_oMemberfeeGubun[]>([]);
    const [ds_oCourse, setds_oCourse] = useState<Ids_oCourse[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [rawVisible_shpGubunBox, setRawVisible_shpGubunBox] = useState(true);
    const [rawVisible_divWorkFormTitle, setRawVisible_divWorkFormTitle] = useState(true);
    const [rawVisible_gdMemberfeeCode, setRawVisible_gdMemberfeeCode] = useState(true);
    const [rawVisible_lbMemberfeeYear, setRawVisible_lbMemberfeeYear] = useState(true);
    const [rawVisible_lbRemark, setRawVisible_lbRemark] = useState(true);
    const [rawVisible_lbPaymentMethod, setRawVisible_lbPaymentMethod] = useState(true);
    const [rawVisible_btnMutilSort, setRawVisible_btnMutilSort] = useState(true);
    const [rawVisible_lbMemberfeeGubun, setRawVisible_lbMemberfeeGubun] = useState(true);
    const [rawVisible_lbCourse, setRawVisible_lbCourse] = useState(true);
    const [rawVisible_lbMemberfeeSeq, setRawVisible_lbMemberfeeSeq] = useState(false);
    const [rawVisible_medMemberfeeSeq, setRawVisible_medMemberfeeSeq] = useState(false);
    const [rawVisible_edRemark, setRawVisible_edRemark] = useState(true);
    const [rawVisible_medAmt01, setRawVisible_medAmt01] = useState(true);
    const [rawVisible_medAmt02, setRawVisible_medAmt02] = useState(true);
    const [rawVisible_medAmt03, setRawVisible_medAmt03] = useState(true);
    const [rawVisible_medAmt04, setRawVisible_medAmt04] = useState(true);
    const [rawVisible_medAmt07, setRawVisible_medAmt07] = useState(true);
    const [rawVisible_medAmt08, setRawVisible_medAmt08] = useState(true);
    const [rawVisible_medAmt09, setRawVisible_medAmt09] = useState(true);
    const [rawVisible_medAmt10, setRawVisible_medAmt10] = useState(true);
    const [rawVisible_medAmt11, setRawVisible_medAmt11] = useState(true);
    const [rawVisible_medAmt12, setRawVisible_medAmt12] = useState(true);
    const [rawVisible_medAmt05, setRawVisible_medAmt05] = useState(true);
    const [rawVisible_medAmt06, setRawVisible_medAmt06] = useState(true);
    const [rawVisible_lbPaymentAmt, setRawVisible_lbPaymentAmt] = useState(true);
    const [rawVisible_lbAmt09, setRawVisible_lbAmt09] = useState(true);
    const [rawVisible_lbAmt08, setRawVisible_lbAmt08] = useState(true);
    const [rawVisible_lbAmt02, setRawVisible_lbAmt02] = useState(true);
    const [rawVisible_lbAmt03, setRawVisible_lbAmt03] = useState(true);
    const [rawVisible_lbAmt04, setRawVisible_lbAmt04] = useState(true);
    const [rawVisible_lbAmt10, setRawVisible_lbAmt10] = useState(true);
    const [rawVisible_lbAmt11, setRawVisible_lbAmt11] = useState(true);
    const [rawVisible_lbAmt12, setRawVisible_lbAmt12] = useState(true);
    const [rawVisible_lbAmt05, setRawVisible_lbAmt05] = useState(true);
    const [rawVisible_lbAmt06, setRawVisible_lbAmt06] = useState(true);
    const [rawVisible_lbAmt07, setRawVisible_lbAmt07] = useState(true);
    const [rawVisible_lbAmt01, setRawVisible_lbAmt01] = useState(true);
    const [rawVisible_cbxMemberfeeGubun, setRawVisible_cbxMemberfeeGubun] = useState(true);
    const [rawVisible_cbxCourse, setRawVisible_cbxCourse] = useState(true);
    const [rawVisible_radPaymentMethod, setRawVisible_radPaymentMethod] = useState(true);
    const [rawVisible_edMemberfeeYear, setRawVisible_edMemberfeeYear] = useState(true);
    const [rawVisible_lbUseYn, setRawVisible_lbUseYn] = useState(true);
    const [rawVisible_chkUseYn, setRawVisible_chkUseYn] = useState(true);
    const [rawVisible_medPaymentFee, setRawVisible_medPaymentFee] = useState(true);
    const [rawVisible_shpBtnBox, setRawVisible_shpBtnBox] = useState(true);
    const [rawVisible_btnSearch, setRawVisible_btnSearch] = useState(true);
    const [rawVisible_btnInput, setRawVisible_btnInput] = useState(true);
    const [rawVisible_btnDelete, setRawVisible_btnDelete] = useState(true);
    const [rawVisible_btnSave, setRawVisible_btnSave] = useState(true);
    const [rawVisible_btnCancel, setRawVisible_btnCancel] = useState(true);
    const [rawVisible_btnToExcel, setRawVisible_btnToExcel] = useState(true);
    const [rawVisible_btnPrintScreen, setRawVisible_btnPrintScreen] = useState(true);
    const [rawVisible_btnEnd, setRawVisible_btnEnd] = useState(true);
    const isVisible_shpGubunBox = rawVisible_shpGubunBox;
    const setIsVisible_shpGubunBox = setRawVisible_shpGubunBox;
    const isVisible_divWorkFormTitle = rawVisible_divWorkFormTitle;
    const setIsVisible_divWorkFormTitle = setRawVisible_divWorkFormTitle;
    const isVisible_gdMemberfeeCode = rawVisible_gdMemberfeeCode;
    const setIsVisible_gdMemberfeeCode = setRawVisible_gdMemberfeeCode;
    const isVisible_lbMemberfeeYear = rawVisible_lbMemberfeeYear && rawVisible_shpGubunBox;
    const setIsVisible_lbMemberfeeYear = setRawVisible_lbMemberfeeYear;
    const isVisible_lbRemark = rawVisible_lbRemark && rawVisible_shpGubunBox;
    const setIsVisible_lbRemark = setRawVisible_lbRemark;
    const isVisible_lbPaymentMethod = rawVisible_lbPaymentMethod && rawVisible_shpGubunBox;
    const setIsVisible_lbPaymentMethod = setRawVisible_lbPaymentMethod;
    const isVisible_btnMutilSort = rawVisible_btnMutilSort;
    const setIsVisible_btnMutilSort = setRawVisible_btnMutilSort;
    const isVisible_lbMemberfeeGubun = rawVisible_lbMemberfeeGubun && rawVisible_shpGubunBox;
    const setIsVisible_lbMemberfeeGubun = setRawVisible_lbMemberfeeGubun;
    const isVisible_lbCourse = rawVisible_lbCourse && rawVisible_shpGubunBox;
    const setIsVisible_lbCourse = setRawVisible_lbCourse;
    const isVisible_lbMemberfeeSeq = rawVisible_lbMemberfeeSeq;
    const setIsVisible_lbMemberfeeSeq = setRawVisible_lbMemberfeeSeq;
    const isVisible_medMemberfeeSeq = rawVisible_medMemberfeeSeq;
    const setIsVisible_medMemberfeeSeq = setRawVisible_medMemberfeeSeq;
    const isVisible_edRemark = rawVisible_edRemark && rawVisible_shpGubunBox;
    const setIsVisible_edRemark = setRawVisible_edRemark;
    const isVisible_medAmt01 = rawVisible_medAmt01 && rawVisible_shpGubunBox;
    const setIsVisible_medAmt01 = setRawVisible_medAmt01;
    const isVisible_medAmt02 = rawVisible_medAmt02 && rawVisible_shpGubunBox;
    const setIsVisible_medAmt02 = setRawVisible_medAmt02;
    const isVisible_medAmt03 = rawVisible_medAmt03 && rawVisible_shpGubunBox;
    const setIsVisible_medAmt03 = setRawVisible_medAmt03;
    const isVisible_medAmt04 = rawVisible_medAmt04 && rawVisible_shpGubunBox;
    const setIsVisible_medAmt04 = setRawVisible_medAmt04;
    const isVisible_medAmt07 = rawVisible_medAmt07 && rawVisible_shpGubunBox;
    const setIsVisible_medAmt07 = setRawVisible_medAmt07;
    const isVisible_medAmt08 = rawVisible_medAmt08 && rawVisible_shpGubunBox;
    const setIsVisible_medAmt08 = setRawVisible_medAmt08;
    const isVisible_medAmt09 = rawVisible_medAmt09 && rawVisible_shpGubunBox;
    const setIsVisible_medAmt09 = setRawVisible_medAmt09;
    const isVisible_medAmt10 = rawVisible_medAmt10 && rawVisible_shpGubunBox;
    const setIsVisible_medAmt10 = setRawVisible_medAmt10;
    const isVisible_medAmt11 = rawVisible_medAmt11 && rawVisible_shpGubunBox;
    const setIsVisible_medAmt11 = setRawVisible_medAmt11;
    const isVisible_medAmt12 = rawVisible_medAmt12 && rawVisible_shpGubunBox;
    const setIsVisible_medAmt12 = setRawVisible_medAmt12;
    const isVisible_medAmt05 = rawVisible_medAmt05 && rawVisible_shpGubunBox;
    const setIsVisible_medAmt05 = setRawVisible_medAmt05;
    const isVisible_medAmt06 = rawVisible_medAmt06 && rawVisible_shpGubunBox;
    const setIsVisible_medAmt06 = setRawVisible_medAmt06;
    const isVisible_lbPaymentAmt = rawVisible_lbPaymentAmt && rawVisible_shpGubunBox;
    const setIsVisible_lbPaymentAmt = setRawVisible_lbPaymentAmt;
    const isVisible_lbAmt09 = rawVisible_lbAmt09 && rawVisible_shpGubunBox;
    const setIsVisible_lbAmt09 = setRawVisible_lbAmt09;
    const isVisible_lbAmt08 = rawVisible_lbAmt08 && rawVisible_shpGubunBox;
    const setIsVisible_lbAmt08 = setRawVisible_lbAmt08;
    const isVisible_lbAmt02 = rawVisible_lbAmt02 && rawVisible_shpGubunBox;
    const setIsVisible_lbAmt02 = setRawVisible_lbAmt02;
    const isVisible_lbAmt03 = rawVisible_lbAmt03 && rawVisible_shpGubunBox;
    const setIsVisible_lbAmt03 = setRawVisible_lbAmt03;
    const isVisible_lbAmt04 = rawVisible_lbAmt04 && rawVisible_shpGubunBox;
    const setIsVisible_lbAmt04 = setRawVisible_lbAmt04;
    const isVisible_lbAmt10 = rawVisible_lbAmt10 && rawVisible_shpGubunBox;
    const setIsVisible_lbAmt10 = setRawVisible_lbAmt10;
    const isVisible_lbAmt11 = rawVisible_lbAmt11 && rawVisible_shpGubunBox;
    const setIsVisible_lbAmt11 = setRawVisible_lbAmt11;
    const isVisible_lbAmt12 = rawVisible_lbAmt12 && rawVisible_shpGubunBox;
    const setIsVisible_lbAmt12 = setRawVisible_lbAmt12;
    const isVisible_lbAmt05 = rawVisible_lbAmt05 && rawVisible_shpGubunBox;
    const setIsVisible_lbAmt05 = setRawVisible_lbAmt05;
    const isVisible_lbAmt06 = rawVisible_lbAmt06 && rawVisible_shpGubunBox;
    const setIsVisible_lbAmt06 = setRawVisible_lbAmt06;
    const isVisible_lbAmt07 = rawVisible_lbAmt07 && rawVisible_shpGubunBox;
    const setIsVisible_lbAmt07 = setRawVisible_lbAmt07;
    const isVisible_lbAmt01 = rawVisible_lbAmt01 && rawVisible_shpGubunBox;
    const setIsVisible_lbAmt01 = setRawVisible_lbAmt01;
    const isVisible_cbxMemberfeeGubun = rawVisible_cbxMemberfeeGubun && rawVisible_shpGubunBox;
    const setIsVisible_cbxMemberfeeGubun = setRawVisible_cbxMemberfeeGubun;
    const isVisible_cbxCourse = rawVisible_cbxCourse && rawVisible_shpGubunBox;
    const setIsVisible_cbxCourse = setRawVisible_cbxCourse;
    const isVisible_radPaymentMethod = rawVisible_radPaymentMethod && rawVisible_shpGubunBox;
    const setIsVisible_radPaymentMethod = setRawVisible_radPaymentMethod;
    const isVisible_edMemberfeeYear = rawVisible_edMemberfeeYear && rawVisible_shpGubunBox;
    const setIsVisible_edMemberfeeYear = setRawVisible_edMemberfeeYear;
    const isVisible_lbUseYn = rawVisible_lbUseYn && rawVisible_shpGubunBox;
    const setIsVisible_lbUseYn = setRawVisible_lbUseYn;
    const isVisible_chkUseYn = rawVisible_chkUseYn && rawVisible_shpGubunBox;
    const setIsVisible_chkUseYn = setRawVisible_chkUseYn;
    const isVisible_medPaymentFee = rawVisible_medPaymentFee && rawVisible_shpGubunBox;
    const setIsVisible_medPaymentFee = setRawVisible_medPaymentFee;
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

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_ioMemberfeeCode([]);
            setds_oPaymentMethod([]);
            setds_oMemberfeeGubun([]);
            setds_oCourse([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnMutilSort_OnClick = () => {
        console.log('btnMutilSort_OnClick clicked');
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
    const lfn_Excel = () => {
        console.log('lfn_Excel clicked');
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
        ds_ioMemberfeeCode,
        ds_oPaymentMethod,
        ds_oMemberfeeGubun,
        ds_oCourse,
        isVisible_shpGubunBox,
        setIsVisible_shpGubunBox,
        isVisible_divWorkFormTitle,
        setIsVisible_divWorkFormTitle,
        isVisible_gdMemberfeeCode,
        setIsVisible_gdMemberfeeCode,
        isVisible_lbMemberfeeYear,
        setIsVisible_lbMemberfeeYear,
        isVisible_lbRemark,
        setIsVisible_lbRemark,
        isVisible_lbPaymentMethod,
        setIsVisible_lbPaymentMethod,
        isVisible_btnMutilSort,
        setIsVisible_btnMutilSort,
        isVisible_lbMemberfeeGubun,
        setIsVisible_lbMemberfeeGubun,
        isVisible_lbCourse,
        setIsVisible_lbCourse,
        isVisible_lbMemberfeeSeq,
        setIsVisible_lbMemberfeeSeq,
        isVisible_medMemberfeeSeq,
        setIsVisible_medMemberfeeSeq,
        isVisible_edRemark,
        setIsVisible_edRemark,
        isVisible_medAmt01,
        setIsVisible_medAmt01,
        isVisible_medAmt02,
        setIsVisible_medAmt02,
        isVisible_medAmt03,
        setIsVisible_medAmt03,
        isVisible_medAmt04,
        setIsVisible_medAmt04,
        isVisible_medAmt07,
        setIsVisible_medAmt07,
        isVisible_medAmt08,
        setIsVisible_medAmt08,
        isVisible_medAmt09,
        setIsVisible_medAmt09,
        isVisible_medAmt10,
        setIsVisible_medAmt10,
        isVisible_medAmt11,
        setIsVisible_medAmt11,
        isVisible_medAmt12,
        setIsVisible_medAmt12,
        isVisible_medAmt05,
        setIsVisible_medAmt05,
        isVisible_medAmt06,
        setIsVisible_medAmt06,
        isVisible_lbPaymentAmt,
        setIsVisible_lbPaymentAmt,
        isVisible_lbAmt09,
        setIsVisible_lbAmt09,
        isVisible_lbAmt08,
        setIsVisible_lbAmt08,
        isVisible_lbAmt02,
        setIsVisible_lbAmt02,
        isVisible_lbAmt03,
        setIsVisible_lbAmt03,
        isVisible_lbAmt04,
        setIsVisible_lbAmt04,
        isVisible_lbAmt10,
        setIsVisible_lbAmt10,
        isVisible_lbAmt11,
        setIsVisible_lbAmt11,
        isVisible_lbAmt12,
        setIsVisible_lbAmt12,
        isVisible_lbAmt05,
        setIsVisible_lbAmt05,
        isVisible_lbAmt06,
        setIsVisible_lbAmt06,
        isVisible_lbAmt07,
        setIsVisible_lbAmt07,
        isVisible_lbAmt01,
        setIsVisible_lbAmt01,
        isVisible_cbxMemberfeeGubun,
        setIsVisible_cbxMemberfeeGubun,
        isVisible_cbxCourse,
        setIsVisible_cbxCourse,
        isVisible_radPaymentMethod,
        setIsVisible_radPaymentMethod,
        isVisible_edMemberfeeYear,
        setIsVisible_edMemberfeeYear,
        isVisible_lbUseYn,
        setIsVisible_lbUseYn,
        isVisible_chkUseYn,
        setIsVisible_chkUseYn,
        isVisible_medPaymentFee,
        setIsVisible_medPaymentFee,
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
        btnMutilSort_OnClick,
        lfn_Cancel,
        lfn_Delete,
        lfn_End,
        lfn_Excel,
        lfn_Input,
        lfn_PrintScreen,
        lfn_Save,
        lfn_Search,
    };
};