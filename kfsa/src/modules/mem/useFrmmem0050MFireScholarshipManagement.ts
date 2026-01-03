// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_ioPrintGubun, Ids_oJibu, Ids_ioCourse, Ids_ioScholarship, Ids_oJibu2, Ids_oCourse2, Ids_CmbComder, Ids_CmbComder2, Ids_oYear, Ids_oYear2, Ids_oMember, Ids_iScholarship, Ids_oForm, Ids_iFormSave, Ids_oFormSave, Ids_iFormDelete, Ids_oFormDelete, Ids_oSelectGubun } from './Frmmem0050MFireScholarshipManagementData';

export const useFrmmem0050MFireScholarshipManagement = () => {
    const [ds_ioPrintGubun, setds_ioPrintGubun] = useState<Ids_ioPrintGubun[]>([]);
    const [ds_oJibu, setds_oJibu] = useState<Ids_oJibu[]>([]);
    const [ds_ioCourse, setds_ioCourse] = useState<Ids_ioCourse[]>([]);
    const [ds_ioScholarship, setds_ioScholarship] = useState<Ids_ioScholarship[]>([]);
    const [ds_oJibu2, setds_oJibu2] = useState<Ids_oJibu2[]>([]);
    const [ds_oCourse2, setds_oCourse2] = useState<Ids_oCourse2[]>([]);
    const [ds_CmbComder, setds_CmbComder] = useState<Ids_CmbComder[]>([]);
    const [ds_CmbComder2, setds_CmbComder2] = useState<Ids_CmbComder2[]>([]);
    const [ds_oYear, setds_oYear] = useState<Ids_oYear[]>([]);
    const [ds_oYear2, setds_oYear2] = useState<Ids_oYear2[]>([]);
    const [ds_oMember, setds_oMember] = useState<Ids_oMember[]>([]);
    const [ds_iScholarship, setds_iScholarship] = useState<Ids_iScholarship[]>([]);
    const [ds_oForm, setds_oForm] = useState<Ids_oForm[]>([]);
    const [ds_iFormSave, setds_iFormSave] = useState<Ids_iFormSave[]>([]);
    const [ds_oFormSave, setds_oFormSave] = useState<Ids_oFormSave[]>([]);
    const [ds_iFormDelete, setds_iFormDelete] = useState<Ids_iFormDelete[]>([]);
    const [ds_oFormDelete, setds_oFormDelete] = useState<Ids_oFormDelete[]>([]);
    const [ds_oSelectGubun, setds_oSelectGubun] = useState<Ids_oSelectGubun[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [rawVisible_Shape2, setRawVisible_Shape2] = useState(true);
    const [rawVisible_Shape1, setRawVisible_Shape1] = useState(true);
    const [rawVisible_Shape0, setRawVisible_Shape0] = useState(true);
    const [rawVisible_shpGubunBox3, setRawVisible_shpGubunBox3] = useState(true);
    const [rawVisible_gdScholarshipList, setRawVisible_gdScholarshipList] = useState(true);
    const [rawVisible_btnMutilSort, setRawVisible_btnMutilSort] = useState(true);
    const [rawVisible_radPrintGubun, setRawVisible_radPrintGubun] = useState(true);
    const [rawVisible_lbPersonNm2, setRawVisible_lbPersonNm2] = useState(true);
    const [rawVisible_edPersonNm2, setRawVisible_edPersonNm2] = useState(true);
    const [rawVisible_lbResidentNo2, setRawVisible_lbResidentNo2] = useState(true);
    const [rawVisible_medBirthday2, setRawVisible_medBirthday2] = useState(true);
    const [rawVisible_divWorkFormTitle, setRawVisible_divWorkFormTitle] = useState(true);
    const [rawVisible_lbRegGubun, setRawVisible_lbRegGubun] = useState(true);
    const [rawVisible_Static0, setRawVisible_Static0] = useState(true);
    const [rawVisible_cbxJibu2, setRawVisible_cbxJibu2] = useState(true);
    const [rawVisible_Static2, setRawVisible_Static2] = useState(true);
    const [rawVisible_cbxCourse2, setRawVisible_cbxCourse2] = useState(true);
    const [rawVisible_lbDate, setRawVisible_lbDate] = useState(true);
    const [rawVisible_calDate2, setRawVisible_calDate2] = useState(true);
    const [rawVisible_Static8, setRawVisible_Static8] = useState(true);
    const [rawVisible_Static11, setRawVisible_Static11] = useState(true);
    const [rawVisible_calStaDate, setRawVisible_calStaDate] = useState(true);
    const [rawVisible_calEndDate, setRawVisible_calEndDate] = useState(true);
    const [rawVisible_Static12, setRawVisible_Static12] = useState(true);
    const [rawVisible_Static13, setRawVisible_Static13] = useState(true);
    const [rawVisible_Static14, setRawVisible_Static14] = useState(true);
    const [rawVisible_edName, setRawVisible_edName] = useState(true);
    const [rawVisible_Static15, setRawVisible_Static15] = useState(true);
    const [rawVisible_medBirthday, setRawVisible_medBirthday] = useState(true);
    const [rawVisible_Static16, setRawVisible_Static16] = useState(true);
    const [rawVisible_cbxJibu, setRawVisible_cbxJibu] = useState(true);
    const [rawVisible_shpBtnBox, setRawVisible_shpBtnBox] = useState(true);
    const [rawVisible_btnSearch, setRawVisible_btnSearch] = useState(true);
    const [rawVisible_btnInput, setRawVisible_btnInput] = useState(true);
    const [rawVisible_btnDelete, setRawVisible_btnDelete] = useState(true);
    const [rawVisible_btnSave, setRawVisible_btnSave] = useState(true);
    const [rawVisible_btnCancel, setRawVisible_btnCancel] = useState(true);
    const [rawVisible_btnToExcel, setRawVisible_btnToExcel] = useState(true);
    const [rawVisible_btnEnd, setRawVisible_btnEnd] = useState(true);
    const [rawVisible_lbTotalCnt, setRawVisible_lbTotalCnt] = useState(true);
    const [rawVisible_medTotalCnt, setRawVisible_medTotalCnt] = useState(true);
    const [rawVisible_Static17, setRawVisible_Static17] = useState(true);
    const [rawVisible_medCustNo, setRawVisible_medCustNo] = useState(true);
    const [rawVisible_Static18, setRawVisible_Static18] = useState(true);
    const [rawVisible_edBNM, setRawVisible_edBNM] = useState(true);
    const [rawVisible_Static20, setRawVisible_Static20] = useState(true);
    const [rawVisible_lbTrainingYear, setRawVisible_lbTrainingYear] = useState(true);
    const [rawVisible_cbxYear, setRawVisible_cbxYear] = useState(true);
    const [rawVisible_btnCustNo, setRawVisible_btnCustNo] = useState(true);
    const [rawVisible_cbxYear2, setRawVisible_cbxYear2] = useState(true);
    const [rawVisible_lbNewNotice, setRawVisible_lbNewNotice] = useState(true);
    const [rawVisible_Static1, setRawVisible_Static1] = useState(true);
    const [rawVisible_Static3, setRawVisible_Static3] = useState(true);
    const [rawVisible_Static4, setRawVisible_Static4] = useState(true);
    const [rawVisible_edRemark, setRawVisible_edRemark] = useState(true);
    const [rawVisible_edMmgno, setRawVisible_edMmgno] = useState(true);
    const [rawVisible_edCmgno, setRawVisible_edCmgno] = useState(true);
    const [rawVisible_edPersonkey, setRawVisible_edPersonkey] = useState(true);
    const [rawVisible_edMgno, setRawVisible_edMgno] = useState(true);
    const [rawVisible_Static5, setRawVisible_Static5] = useState(true);
    const [rawVisible_medAmt, setRawVisible_medAmt] = useState(true);
    const [rawVisible_Shape3, setRawVisible_Shape3] = useState(true);
    const [rawVisible_btnScanSave, setRawVisible_btnScanSave] = useState(true);
    const [rawVisible_btnLocalFormView, setRawVisible_btnLocalFormView] = useState(true);
    const [rawVisible_edScanFileName, setRawVisible_edScanFileName] = useState(true);
    const [rawVisible_btnScanSearch, setRawVisible_btnScanSearch] = useState(true);
    const [rawVisible_btnScan, setRawVisible_btnScan] = useState(true);
    const [rawVisible_btnSeverFormView, setRawVisible_btnSeverFormView] = useState(true);
    const [rawVisible_edFormResult, setRawVisible_edFormResult] = useState(true);
    const [rawVisible_cbxForm, setRawVisible_cbxForm] = useState(true);
    const [rawVisible_Static6, setRawVisible_Static6] = useState(true);
    const [rawVisible_btnFormDelete, setRawVisible_btnFormDelete] = useState(false);
    const [rawVisible_Static7, setRawVisible_Static7] = useState(true);
    const [rawVisible_cbxSelectYN, setRawVisible_cbxSelectYN] = useState(true);
    const [rawVisible_fdImage2, setRawVisible_fdImage2] = useState(true);
    const [rawVisible_hfImage2, setRawVisible_hfImage2] = useState(true);
    const [rawVisible_fiImageFile2, setRawVisible_fiImageFile2] = useState(true);
    const [rawVisible_Static9, setRawVisible_Static9] = useState(true);
    const [rawVisible_Static10, setRawVisible_Static10] = useState(true);
    const [rawVisible_calFADate, setRawVisible_calFADate] = useState(true);
    const [rawVisible_Static19, setRawVisible_Static19] = useState(true);
    const isVisible_Shape2 = rawVisible_Shape2;
    const setIsVisible_Shape2 = setRawVisible_Shape2;
    const isVisible_Shape1 = rawVisible_Shape1;
    const setIsVisible_Shape1 = setRawVisible_Shape1;
    const isVisible_Shape0 = rawVisible_Shape0;
    const setIsVisible_Shape0 = setRawVisible_Shape0;
    const isVisible_shpGubunBox3 = rawVisible_shpGubunBox3;
    const setIsVisible_shpGubunBox3 = setRawVisible_shpGubunBox3;
    const isVisible_gdScholarshipList = rawVisible_gdScholarshipList && rawVisible_Shape0;
    const setIsVisible_gdScholarshipList = setRawVisible_gdScholarshipList;
    const isVisible_btnMutilSort = rawVisible_btnMutilSort && rawVisible_Shape0;
    const setIsVisible_btnMutilSort = setRawVisible_btnMutilSort;
    const isVisible_radPrintGubun = rawVisible_radPrintGubun && rawVisible_Shape2;
    const setIsVisible_radPrintGubun = setRawVisible_radPrintGubun;
    const isVisible_lbPersonNm2 = rawVisible_lbPersonNm2 && rawVisible_shpGubunBox3;
    const setIsVisible_lbPersonNm2 = setRawVisible_lbPersonNm2;
    const isVisible_edPersonNm2 = rawVisible_edPersonNm2 && rawVisible_shpGubunBox3;
    const setIsVisible_edPersonNm2 = setRawVisible_edPersonNm2;
    const isVisible_lbResidentNo2 = rawVisible_lbResidentNo2 && rawVisible_shpGubunBox3;
    const setIsVisible_lbResidentNo2 = setRawVisible_lbResidentNo2;
    const isVisible_medBirthday2 = rawVisible_medBirthday2 && rawVisible_shpGubunBox3;
    const setIsVisible_medBirthday2 = setRawVisible_medBirthday2;
    const isVisible_divWorkFormTitle = rawVisible_divWorkFormTitle;
    const setIsVisible_divWorkFormTitle = setRawVisible_divWorkFormTitle;
    const isVisible_lbRegGubun = rawVisible_lbRegGubun;
    const setIsVisible_lbRegGubun = setRawVisible_lbRegGubun;
    const isVisible_Static0 = rawVisible_Static0 && rawVisible_shpGubunBox3;
    const setIsVisible_Static0 = setRawVisible_Static0;
    const isVisible_cbxJibu2 = rawVisible_cbxJibu2 && rawVisible_shpGubunBox3;
    const setIsVisible_cbxJibu2 = setRawVisible_cbxJibu2;
    const isVisible_Static2 = rawVisible_Static2 && rawVisible_shpGubunBox3;
    const setIsVisible_Static2 = setRawVisible_Static2;
    const isVisible_cbxCourse2 = rawVisible_cbxCourse2 && rawVisible_shpGubunBox3;
    const setIsVisible_cbxCourse2 = setRawVisible_cbxCourse2;
    const isVisible_lbDate = rawVisible_lbDate && rawVisible_shpGubunBox3;
    const setIsVisible_lbDate = setRawVisible_lbDate;
    const isVisible_calDate2 = rawVisible_calDate2 && rawVisible_shpGubunBox3;
    const setIsVisible_calDate2 = setRawVisible_calDate2;
    const isVisible_Static8 = rawVisible_Static8 && rawVisible_Shape1;
    const setIsVisible_Static8 = setRawVisible_Static8;
    const isVisible_Static11 = rawVisible_Static11 && rawVisible_Shape1;
    const setIsVisible_Static11 = setRawVisible_Static11;
    const isVisible_calStaDate = rawVisible_calStaDate && rawVisible_Shape1;
    const setIsVisible_calStaDate = setRawVisible_calStaDate;
    const isVisible_calEndDate = rawVisible_calEndDate && rawVisible_Shape1;
    const setIsVisible_calEndDate = setRawVisible_calEndDate;
    const isVisible_Static12 = rawVisible_Static12 && rawVisible_Shape1;
    const setIsVisible_Static12 = setRawVisible_Static12;
    const isVisible_Static13 = rawVisible_Static13;
    const setIsVisible_Static13 = setRawVisible_Static13;
    const isVisible_Static14 = rawVisible_Static14 && rawVisible_Shape1;
    const setIsVisible_Static14 = setRawVisible_Static14;
    const isVisible_edName = rawVisible_edName && rawVisible_Shape1;
    const setIsVisible_edName = setRawVisible_edName;
    const isVisible_Static15 = rawVisible_Static15 && rawVisible_Shape1;
    const setIsVisible_Static15 = setRawVisible_Static15;
    const isVisible_medBirthday = rawVisible_medBirthday && rawVisible_Shape1;
    const setIsVisible_medBirthday = setRawVisible_medBirthday;
    const isVisible_Static16 = rawVisible_Static16;
    const setIsVisible_Static16 = setRawVisible_Static16;
    const isVisible_cbxJibu = rawVisible_cbxJibu && rawVisible_Shape1;
    const setIsVisible_cbxJibu = setRawVisible_cbxJibu;
    const isVisible_shpBtnBox = rawVisible_shpBtnBox;
    const setIsVisible_shpBtnBox = setRawVisible_shpBtnBox;
    const isVisible_btnSearch = rawVisible_btnSearch && rawVisible_shpBtnBox;
    const setIsVisible_btnSearch = setRawVisible_btnSearch;
    const isVisible_btnInput = rawVisible_btnInput;
    const setIsVisible_btnInput = setRawVisible_btnInput;
    const isVisible_btnDelete = rawVisible_btnDelete && rawVisible_shpBtnBox;
    const setIsVisible_btnDelete = setRawVisible_btnDelete;
    const isVisible_btnSave = rawVisible_btnSave;
    const setIsVisible_btnSave = setRawVisible_btnSave;
    const isVisible_btnCancel = rawVisible_btnCancel && rawVisible_shpBtnBox;
    const setIsVisible_btnCancel = setRawVisible_btnCancel;
    const isVisible_btnToExcel = rawVisible_btnToExcel && rawVisible_shpBtnBox;
    const setIsVisible_btnToExcel = setRawVisible_btnToExcel;
    const isVisible_btnEnd = rawVisible_btnEnd && rawVisible_shpBtnBox;
    const setIsVisible_btnEnd = setRawVisible_btnEnd;
    const isVisible_lbTotalCnt = rawVisible_lbTotalCnt && rawVisible_Shape0;
    const setIsVisible_lbTotalCnt = setRawVisible_lbTotalCnt;
    const isVisible_medTotalCnt = rawVisible_medTotalCnt && rawVisible_Shape0;
    const setIsVisible_medTotalCnt = setRawVisible_medTotalCnt;
    const isVisible_Static17 = rawVisible_Static17 && rawVisible_shpGubunBox3;
    const setIsVisible_Static17 = setRawVisible_Static17;
    const isVisible_medCustNo = rawVisible_medCustNo && rawVisible_shpGubunBox3;
    const setIsVisible_medCustNo = setRawVisible_medCustNo;
    const isVisible_Static18 = rawVisible_Static18 && rawVisible_shpGubunBox3;
    const setIsVisible_Static18 = setRawVisible_Static18;
    const isVisible_edBNM = rawVisible_edBNM && rawVisible_shpGubunBox3;
    const setIsVisible_edBNM = setRawVisible_edBNM;
    const isVisible_Static20 = rawVisible_Static20 && rawVisible_shpGubunBox3;
    const setIsVisible_Static20 = setRawVisible_Static20;
    const isVisible_lbTrainingYear = rawVisible_lbTrainingYear && rawVisible_Shape1;
    const setIsVisible_lbTrainingYear = setRawVisible_lbTrainingYear;
    const isVisible_cbxYear = rawVisible_cbxYear && rawVisible_Shape1;
    const setIsVisible_cbxYear = setRawVisible_cbxYear;
    const isVisible_btnCustNo = rawVisible_btnCustNo && rawVisible_shpGubunBox3;
    const setIsVisible_btnCustNo = setRawVisible_btnCustNo;
    const isVisible_cbxYear2 = rawVisible_cbxYear2 && rawVisible_shpGubunBox3;
    const setIsVisible_cbxYear2 = setRawVisible_cbxYear2;
    const isVisible_lbNewNotice = rawVisible_lbNewNotice && rawVisible_shpGubunBox3;
    const setIsVisible_lbNewNotice = setRawVisible_lbNewNotice;
    const isVisible_Static1 = rawVisible_Static1 && rawVisible_shpGubunBox3;
    const setIsVisible_Static1 = setRawVisible_Static1;
    const isVisible_Static3 = rawVisible_Static3 && rawVisible_shpGubunBox3;
    const setIsVisible_Static3 = setRawVisible_Static3;
    const isVisible_Static4 = rawVisible_Static4 && rawVisible_shpGubunBox3;
    const setIsVisible_Static4 = setRawVisible_Static4;
    const isVisible_edRemark = rawVisible_edRemark && rawVisible_shpGubunBox3;
    const setIsVisible_edRemark = setRawVisible_edRemark;
    const isVisible_edMmgno = rawVisible_edMmgno && rawVisible_shpGubunBox3;
    const setIsVisible_edMmgno = setRawVisible_edMmgno;
    const isVisible_edCmgno = rawVisible_edCmgno && rawVisible_shpGubunBox3;
    const setIsVisible_edCmgno = setRawVisible_edCmgno;
    const isVisible_edPersonkey = rawVisible_edPersonkey && rawVisible_shpGubunBox3;
    const setIsVisible_edPersonkey = setRawVisible_edPersonkey;
    const isVisible_edMgno = rawVisible_edMgno && rawVisible_shpGubunBox3;
    const setIsVisible_edMgno = setRawVisible_edMgno;
    const isVisible_Static5 = rawVisible_Static5 && rawVisible_shpGubunBox3;
    const setIsVisible_Static5 = setRawVisible_Static5;
    const isVisible_medAmt = rawVisible_medAmt && rawVisible_shpGubunBox3;
    const setIsVisible_medAmt = setRawVisible_medAmt;
    const isVisible_Shape3 = rawVisible_Shape3 && rawVisible_shpGubunBox3;
    const setIsVisible_Shape3 = setRawVisible_Shape3;
    const isVisible_btnScanSave = rawVisible_btnScanSave && rawVisible_Shape3;
    const setIsVisible_btnScanSave = setRawVisible_btnScanSave;
    const isVisible_btnLocalFormView = rawVisible_btnLocalFormView && rawVisible_Shape3;
    const setIsVisible_btnLocalFormView = setRawVisible_btnLocalFormView;
    const isVisible_edScanFileName = rawVisible_edScanFileName && rawVisible_Shape3;
    const setIsVisible_edScanFileName = setRawVisible_edScanFileName;
    const isVisible_btnScanSearch = rawVisible_btnScanSearch && rawVisible_Shape3;
    const setIsVisible_btnScanSearch = setRawVisible_btnScanSearch;
    const isVisible_btnScan = rawVisible_btnScan && rawVisible_Shape3;
    const setIsVisible_btnScan = setRawVisible_btnScan;
    const isVisible_btnSeverFormView = rawVisible_btnSeverFormView && rawVisible_Shape3;
    const setIsVisible_btnSeverFormView = setRawVisible_btnSeverFormView;
    const isVisible_edFormResult = rawVisible_edFormResult && rawVisible_Shape3;
    const setIsVisible_edFormResult = setRawVisible_edFormResult;
    const isVisible_cbxForm = rawVisible_cbxForm && rawVisible_Shape3;
    const setIsVisible_cbxForm = setRawVisible_cbxForm;
    const isVisible_Static6 = rawVisible_Static6 && rawVisible_shpGubunBox3;
    const setIsVisible_Static6 = setRawVisible_Static6;
    const isVisible_btnFormDelete = rawVisible_btnFormDelete && rawVisible_shpGubunBox3;
    const setIsVisible_btnFormDelete = setRawVisible_btnFormDelete;
    const isVisible_Static7 = rawVisible_Static7 && rawVisible_shpGubunBox3;
    const setIsVisible_Static7 = setRawVisible_Static7;
    const isVisible_cbxSelectYN = rawVisible_cbxSelectYN && rawVisible_shpGubunBox3;
    const setIsVisible_cbxSelectYN = setRawVisible_cbxSelectYN;
    const isVisible_fdImage2 = rawVisible_fdImage2 && rawVisible_shpGubunBox3;
    const setIsVisible_fdImage2 = setRawVisible_fdImage2;
    const isVisible_hfImage2 = rawVisible_hfImage2 && rawVisible_shpGubunBox3;
    const setIsVisible_hfImage2 = setRawVisible_hfImage2;
    const isVisible_fiImageFile2 = rawVisible_fiImageFile2 && rawVisible_shpGubunBox3;
    const setIsVisible_fiImageFile2 = setRawVisible_fiImageFile2;
    const isVisible_Static9 = rawVisible_Static9 && rawVisible_Shape3;
    const setIsVisible_Static9 = setRawVisible_Static9;
    const isVisible_Static10 = rawVisible_Static10 && rawVisible_Shape3;
    const setIsVisible_Static10 = setRawVisible_Static10;
    const isVisible_calFADate = rawVisible_calFADate && rawVisible_Shape3;
    const setIsVisible_calFADate = setRawVisible_calFADate;
    const isVisible_Static19 = rawVisible_Static19 && rawVisible_Shape3;
    const setIsVisible_Static19 = setRawVisible_Static19;

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_ioPrintGubun([]);
            setds_oJibu([]);
            setds_ioCourse([]);
            setds_ioScholarship([]);
            setds_oJibu2([]);
            setds_oCourse2([]);
            setds_CmbComder([]);
            setds_CmbComder2([]);
            setds_oYear([]);
            setds_oYear2([]);
            setds_oMember([]);
            setds_iScholarship([]);
            setds_oForm([]);
            setds_iFormSave([]);
            setds_oFormSave([]);
            setds_iFormDelete([]);
            setds_oFormDelete([]);
            setds_oSelectGubun([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnCustNo_OnClick = () => {
        console.log('btnCustNo_OnClick clicked');
    };
    const btnFormDelete_OnClick = () => {
        console.log('btnFormDelete_OnClick clicked');
    };
    const btnLocalFormView_OnClick = () => {
        console.log('btnLocalFormView_OnClick clicked');
    };
    const btnMutilSort_OnClick = () => {
        console.log('btnMutilSort_OnClick clicked');
    };
    const btnScanSave_OnClick = () => {
        console.log('btnScanSave_OnClick clicked');
    };
    const btnScanSearch_OnClick = () => {
        console.log('btnScanSearch_OnClick clicked');
    };
    const btnScan_OnClick = () => {
        console.log('btnScan_OnClick clicked');
    };
    const btnSeverFormView_OnClick = () => {
        console.log('btnSeverFormView_OnClick clicked');
    };
    const btnToExcel_OnClick = () => {
        console.log('btnToExcel_OnClick clicked');
    };
    const lfn_Delete = () => {
        console.log('lfn_Delete clicked');
    };
    const lfn_End = () => {
        console.log('lfn_End clicked');
    };
    const lfn_Input = () => {
        console.log('lfn_Input clicked');
    };
    const lfn_Save = () => {
        console.log('lfn_Save clicked');
    };
    const lfn_Search = () => {
        console.log('lfn_Search clicked');
    };
    const lfn_btnCancel = () => {
        console.log('lfn_btnCancel clicked');
    };

    return {
        isLoading,
        ds_ioPrintGubun,
        ds_oJibu,
        ds_ioCourse,
        ds_ioScholarship,
        ds_oJibu2,
        ds_oCourse2,
        ds_CmbComder,
        ds_CmbComder2,
        ds_oYear,
        ds_oYear2,
        ds_oMember,
        ds_iScholarship,
        ds_oForm,
        ds_iFormSave,
        ds_oFormSave,
        ds_iFormDelete,
        ds_oFormDelete,
        ds_oSelectGubun,
        isVisible_Shape2,
        setIsVisible_Shape2,
        isVisible_Shape1,
        setIsVisible_Shape1,
        isVisible_Shape0,
        setIsVisible_Shape0,
        isVisible_shpGubunBox3,
        setIsVisible_shpGubunBox3,
        isVisible_gdScholarshipList,
        setIsVisible_gdScholarshipList,
        isVisible_btnMutilSort,
        setIsVisible_btnMutilSort,
        isVisible_radPrintGubun,
        setIsVisible_radPrintGubun,
        isVisible_lbPersonNm2,
        setIsVisible_lbPersonNm2,
        isVisible_edPersonNm2,
        setIsVisible_edPersonNm2,
        isVisible_lbResidentNo2,
        setIsVisible_lbResidentNo2,
        isVisible_medBirthday2,
        setIsVisible_medBirthday2,
        isVisible_divWorkFormTitle,
        setIsVisible_divWorkFormTitle,
        isVisible_lbRegGubun,
        setIsVisible_lbRegGubun,
        isVisible_Static0,
        setIsVisible_Static0,
        isVisible_cbxJibu2,
        setIsVisible_cbxJibu2,
        isVisible_Static2,
        setIsVisible_Static2,
        isVisible_cbxCourse2,
        setIsVisible_cbxCourse2,
        isVisible_lbDate,
        setIsVisible_lbDate,
        isVisible_calDate2,
        setIsVisible_calDate2,
        isVisible_Static8,
        setIsVisible_Static8,
        isVisible_Static11,
        setIsVisible_Static11,
        isVisible_calStaDate,
        setIsVisible_calStaDate,
        isVisible_calEndDate,
        setIsVisible_calEndDate,
        isVisible_Static12,
        setIsVisible_Static12,
        isVisible_Static13,
        setIsVisible_Static13,
        isVisible_Static14,
        setIsVisible_Static14,
        isVisible_edName,
        setIsVisible_edName,
        isVisible_Static15,
        setIsVisible_Static15,
        isVisible_medBirthday,
        setIsVisible_medBirthday,
        isVisible_Static16,
        setIsVisible_Static16,
        isVisible_cbxJibu,
        setIsVisible_cbxJibu,
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
        isVisible_btnEnd,
        setIsVisible_btnEnd,
        isVisible_lbTotalCnt,
        setIsVisible_lbTotalCnt,
        isVisible_medTotalCnt,
        setIsVisible_medTotalCnt,
        isVisible_Static17,
        setIsVisible_Static17,
        isVisible_medCustNo,
        setIsVisible_medCustNo,
        isVisible_Static18,
        setIsVisible_Static18,
        isVisible_edBNM,
        setIsVisible_edBNM,
        isVisible_Static20,
        setIsVisible_Static20,
        isVisible_lbTrainingYear,
        setIsVisible_lbTrainingYear,
        isVisible_cbxYear,
        setIsVisible_cbxYear,
        isVisible_btnCustNo,
        setIsVisible_btnCustNo,
        isVisible_cbxYear2,
        setIsVisible_cbxYear2,
        isVisible_lbNewNotice,
        setIsVisible_lbNewNotice,
        isVisible_Static1,
        setIsVisible_Static1,
        isVisible_Static3,
        setIsVisible_Static3,
        isVisible_Static4,
        setIsVisible_Static4,
        isVisible_edRemark,
        setIsVisible_edRemark,
        isVisible_edMmgno,
        setIsVisible_edMmgno,
        isVisible_edCmgno,
        setIsVisible_edCmgno,
        isVisible_edPersonkey,
        setIsVisible_edPersonkey,
        isVisible_edMgno,
        setIsVisible_edMgno,
        isVisible_Static5,
        setIsVisible_Static5,
        isVisible_medAmt,
        setIsVisible_medAmt,
        isVisible_Shape3,
        setIsVisible_Shape3,
        isVisible_btnScanSave,
        setIsVisible_btnScanSave,
        isVisible_btnLocalFormView,
        setIsVisible_btnLocalFormView,
        isVisible_edScanFileName,
        setIsVisible_edScanFileName,
        isVisible_btnScanSearch,
        setIsVisible_btnScanSearch,
        isVisible_btnScan,
        setIsVisible_btnScan,
        isVisible_btnSeverFormView,
        setIsVisible_btnSeverFormView,
        isVisible_edFormResult,
        setIsVisible_edFormResult,
        isVisible_cbxForm,
        setIsVisible_cbxForm,
        isVisible_Static6,
        setIsVisible_Static6,
        isVisible_btnFormDelete,
        setIsVisible_btnFormDelete,
        isVisible_Static7,
        setIsVisible_Static7,
        isVisible_cbxSelectYN,
        setIsVisible_cbxSelectYN,
        isVisible_fdImage2,
        setIsVisible_fdImage2,
        isVisible_hfImage2,
        setIsVisible_hfImage2,
        isVisible_fiImageFile2,
        setIsVisible_fiImageFile2,
        isVisible_Static9,
        setIsVisible_Static9,
        isVisible_Static10,
        setIsVisible_Static10,
        isVisible_calFADate,
        setIsVisible_calFADate,
        isVisible_Static19,
        setIsVisible_Static19,
        btnCustNo_OnClick,
        btnFormDelete_OnClick,
        btnLocalFormView_OnClick,
        btnMutilSort_OnClick,
        btnScanSave_OnClick,
        btnScanSearch_OnClick,
        btnScan_OnClick,
        btnSeverFormView_OnClick,
        btnToExcel_OnClick,
        lfn_Delete,
        lfn_End,
        lfn_Input,
        lfn_Save,
        lfn_Search,
        lfn_btnCancel,
    };
};