// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_ioCourseCode, Ids_oCourseGubun, Ids_oMunjeGubun, Ids_oSearchGubun } from './Frmsys0036MCourseCodeManagementData';

export const useFrmsys0036MCourseCodeManagement = () => {
    const [ds_ioCourseCode, setds_ioCourseCode] = useState<Ids_ioCourseCode[]>([]);
    const [ds_oCourseGubun, setds_oCourseGubun] = useState<Ids_oCourseGubun[]>([]);
    const [ds_oMunjeGubun, setds_oMunjeGubun] = useState<Ids_oMunjeGubun[]>([]);
    const [ds_oSearchGubun, setds_oSearchGubun] = useState<Ids_oSearchGubun[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [rawVisible_shpGubunBox, setRawVisible_shpGubunBox] = useState(true);
    const [rawVisible_divWorkFormTitle, setRawVisible_divWorkFormTitle] = useState(true);
    const [rawVisible_gdCourseCode, setRawVisible_gdCourseCode] = useState(true);
    const [rawVisible_chkUseYn, setRawVisible_chkUseYn] = useState(true);
    const [rawVisible_lbUseYn, setRawVisible_lbUseYn] = useState(true);
    const [rawVisible_edCourseCodeName, setRawVisible_edCourseCodeName] = useState(true);
    const [rawVisible_lbCourseCodeName, setRawVisible_lbCourseCodeName] = useState(true);
    const [rawVisible_btnMutilSort, setRawVisible_btnMutilSort] = useState(true);
    const [rawVisible_lbCourseCode, setRawVisible_lbCourseCode] = useState(true);
    const [rawVisible_edCourseCode, setRawVisible_edCourseCode] = useState(true);
    const [rawVisible_lbOrderSeq, setRawVisible_lbOrderSeq] = useState(true);
    const [rawVisible_medOrderSeq, setRawVisible_medOrderSeq] = useState(true);
    const [rawVisible_cbxCourseGubun, setRawVisible_cbxCourseGubun] = useState(true);
    const [rawVisible_lbCourseGubun, setRawVisible_lbCourseGubun] = useState(true);
    const [rawVisible_lbCourseNickName, setRawVisible_lbCourseNickName] = useState(true);
    const [rawVisible_edCourseNickName, setRawVisible_edCourseNickName] = useState(true);
    const [rawVisible_cbxMunjeGubun, setRawVisible_cbxMunjeGubun] = useState(true);
    const [rawVisible_lbMunjeGubun, setRawVisible_lbMunjeGubun] = useState(true);
    const [rawVisible_lbDocs, setRawVisible_lbDocs] = useState(true);
    const [rawVisible_edDocs, setRawVisible_edDocs] = useState(true);
    const [rawVisible_shpBtnBox, setRawVisible_shpBtnBox] = useState(true);
    const [rawVisible_btnSearch, setRawVisible_btnSearch] = useState(true);
    const [rawVisible_btnInput, setRawVisible_btnInput] = useState(true);
    const [rawVisible_btnDelete, setRawVisible_btnDelete] = useState(true);
    const [rawVisible_btnSave, setRawVisible_btnSave] = useState(true);
    const [rawVisible_btnCancel, setRawVisible_btnCancel] = useState(true);
    const [rawVisible_btnToExcel, setRawVisible_btnToExcel] = useState(true);
    const [rawVisible_btnPrintScreen, setRawVisible_btnPrintScreen] = useState(true);
    const [rawVisible_btnEnd, setRawVisible_btnEnd] = useState(true);
    const [rawVisible_lbSearchGubun, setRawVisible_lbSearchGubun] = useState(true);
    const [rawVisible_cbxSearchGubun, setRawVisible_cbxSearchGubun] = useState(true);
    const [rawVisible_lbEduTime, setRawVisible_lbEduTime] = useState(true);
    const [rawVisible_edCourseTermTime, setRawVisible_edCourseTermTime] = useState(true);
    const isVisible_shpGubunBox = rawVisible_shpGubunBox;
    const setIsVisible_shpGubunBox = setRawVisible_shpGubunBox;
    const isVisible_divWorkFormTitle = rawVisible_divWorkFormTitle;
    const setIsVisible_divWorkFormTitle = setRawVisible_divWorkFormTitle;
    const isVisible_gdCourseCode = rawVisible_gdCourseCode;
    const setIsVisible_gdCourseCode = setRawVisible_gdCourseCode;
    const isVisible_chkUseYn = rawVisible_chkUseYn && rawVisible_shpGubunBox;
    const setIsVisible_chkUseYn = setRawVisible_chkUseYn;
    const isVisible_lbUseYn = rawVisible_lbUseYn && rawVisible_shpGubunBox;
    const setIsVisible_lbUseYn = setRawVisible_lbUseYn;
    const isVisible_edCourseCodeName = rawVisible_edCourseCodeName && rawVisible_shpGubunBox;
    const setIsVisible_edCourseCodeName = setRawVisible_edCourseCodeName;
    const isVisible_lbCourseCodeName = rawVisible_lbCourseCodeName && rawVisible_shpGubunBox;
    const setIsVisible_lbCourseCodeName = setRawVisible_lbCourseCodeName;
    const isVisible_btnMutilSort = rawVisible_btnMutilSort;
    const setIsVisible_btnMutilSort = setRawVisible_btnMutilSort;
    const isVisible_lbCourseCode = rawVisible_lbCourseCode && rawVisible_shpGubunBox;
    const setIsVisible_lbCourseCode = setRawVisible_lbCourseCode;
    const isVisible_edCourseCode = rawVisible_edCourseCode && rawVisible_shpGubunBox;
    const setIsVisible_edCourseCode = setRawVisible_edCourseCode;
    const isVisible_lbOrderSeq = rawVisible_lbOrderSeq && rawVisible_shpGubunBox;
    const setIsVisible_lbOrderSeq = setRawVisible_lbOrderSeq;
    const isVisible_medOrderSeq = rawVisible_medOrderSeq && rawVisible_shpGubunBox;
    const setIsVisible_medOrderSeq = setRawVisible_medOrderSeq;
    const isVisible_cbxCourseGubun = rawVisible_cbxCourseGubun && rawVisible_shpGubunBox;
    const setIsVisible_cbxCourseGubun = setRawVisible_cbxCourseGubun;
    const isVisible_lbCourseGubun = rawVisible_lbCourseGubun && rawVisible_shpGubunBox;
    const setIsVisible_lbCourseGubun = setRawVisible_lbCourseGubun;
    const isVisible_lbCourseNickName = rawVisible_lbCourseNickName && rawVisible_shpGubunBox;
    const setIsVisible_lbCourseNickName = setRawVisible_lbCourseNickName;
    const isVisible_edCourseNickName = rawVisible_edCourseNickName && rawVisible_shpGubunBox;
    const setIsVisible_edCourseNickName = setRawVisible_edCourseNickName;
    const isVisible_cbxMunjeGubun = rawVisible_cbxMunjeGubun && rawVisible_shpGubunBox;
    const setIsVisible_cbxMunjeGubun = setRawVisible_cbxMunjeGubun;
    const isVisible_lbMunjeGubun = rawVisible_lbMunjeGubun && rawVisible_shpGubunBox;
    const setIsVisible_lbMunjeGubun = setRawVisible_lbMunjeGubun;
    const isVisible_lbDocs = rawVisible_lbDocs && rawVisible_shpGubunBox;
    const setIsVisible_lbDocs = setRawVisible_lbDocs;
    const isVisible_edDocs = rawVisible_edDocs && rawVisible_shpGubunBox;
    const setIsVisible_edDocs = setRawVisible_edDocs;
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
    const isVisible_lbSearchGubun = rawVisible_lbSearchGubun && rawVisible_shpGubunBox;
    const setIsVisible_lbSearchGubun = setRawVisible_lbSearchGubun;
    const isVisible_cbxSearchGubun = rawVisible_cbxSearchGubun && rawVisible_shpGubunBox;
    const setIsVisible_cbxSearchGubun = setRawVisible_cbxSearchGubun;
    const isVisible_lbEduTime = rawVisible_lbEduTime && rawVisible_shpGubunBox;
    const setIsVisible_lbEduTime = setRawVisible_lbEduTime;
    const isVisible_edCourseTermTime = rawVisible_edCourseTermTime && rawVisible_shpGubunBox;
    const setIsVisible_edCourseTermTime = setRawVisible_edCourseTermTime;

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_ioCourseCode([]);
            setds_oCourseGubun([]);
            setds_oMunjeGubun([]);
            setds_oSearchGubun([]);
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
        ds_ioCourseCode,
        ds_oCourseGubun,
        ds_oMunjeGubun,
        ds_oSearchGubun,
        isVisible_shpGubunBox,
        setIsVisible_shpGubunBox,
        isVisible_divWorkFormTitle,
        setIsVisible_divWorkFormTitle,
        isVisible_gdCourseCode,
        setIsVisible_gdCourseCode,
        isVisible_chkUseYn,
        setIsVisible_chkUseYn,
        isVisible_lbUseYn,
        setIsVisible_lbUseYn,
        isVisible_edCourseCodeName,
        setIsVisible_edCourseCodeName,
        isVisible_lbCourseCodeName,
        setIsVisible_lbCourseCodeName,
        isVisible_btnMutilSort,
        setIsVisible_btnMutilSort,
        isVisible_lbCourseCode,
        setIsVisible_lbCourseCode,
        isVisible_edCourseCode,
        setIsVisible_edCourseCode,
        isVisible_lbOrderSeq,
        setIsVisible_lbOrderSeq,
        isVisible_medOrderSeq,
        setIsVisible_medOrderSeq,
        isVisible_cbxCourseGubun,
        setIsVisible_cbxCourseGubun,
        isVisible_lbCourseGubun,
        setIsVisible_lbCourseGubun,
        isVisible_lbCourseNickName,
        setIsVisible_lbCourseNickName,
        isVisible_edCourseNickName,
        setIsVisible_edCourseNickName,
        isVisible_cbxMunjeGubun,
        setIsVisible_cbxMunjeGubun,
        isVisible_lbMunjeGubun,
        setIsVisible_lbMunjeGubun,
        isVisible_lbDocs,
        setIsVisible_lbDocs,
        isVisible_edDocs,
        setIsVisible_edDocs,
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
        isVisible_lbSearchGubun,
        setIsVisible_lbSearchGubun,
        isVisible_cbxSearchGubun,
        setIsVisible_cbxSearchGubun,
        isVisible_lbEduTime,
        setIsVisible_lbEduTime,
        isVisible_edCourseTermTime,
        setIsVisible_edCourseTermTime,
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