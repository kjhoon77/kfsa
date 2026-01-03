// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_ioPrintGubun, Ids_oJibu, Ids_oCourse, Ids_ioTrainingOrder, Ids_oJibu2, Ids_oCourse2, Ids_CmbComder, Ids_CmbComder2, Ids_oLaw } from './Frmcust1120MOrgDisposalManagementData';

export const useFrmcust1120MOrgDisposalManagement = () => {
    const [ds_ioPrintGubun, setds_ioPrintGubun] = useState<Ids_ioPrintGubun[]>([]);
    const [ds_oJibu, setds_oJibu] = useState<Ids_oJibu[]>([]);
    const [ds_oCourse, setds_oCourse] = useState<Ids_oCourse[]>([]);
    const [ds_ioTrainingOrder, setds_ioTrainingOrder] = useState<Ids_ioTrainingOrder[]>([]);
    const [ds_oJibu2, setds_oJibu2] = useState<Ids_oJibu2[]>([]);
    const [ds_oCourse2, setds_oCourse2] = useState<Ids_oCourse2[]>([]);
    const [ds_CmbComder, setds_CmbComder] = useState<Ids_CmbComder[]>([]);
    const [ds_CmbComder2, setds_CmbComder2] = useState<Ids_CmbComder2[]>([]);
    const [ds_oLaw, setds_oLaw] = useState<Ids_oLaw[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [rawVisible_Shape2, setRawVisible_Shape2] = useState(true);
    const [rawVisible_Shape1, setRawVisible_Shape1] = useState(true);
    const [rawVisible_Shape0, setRawVisible_Shape0] = useState(true);
    const [rawVisible_shpGubunBox3, setRawVisible_shpGubunBox3] = useState(true);
    const [rawVisible_gdTrainingOrder, setRawVisible_gdTrainingOrder] = useState(true);
    const [rawVisible_btnMutilSort, setRawVisible_btnMutilSort] = useState(true);
    const [rawVisible_btnSearch111, setRawVisible_btnSearch111] = useState(false);
    const [rawVisible_btnDelete111, setRawVisible_btnDelete111] = useState(false);
    const [rawVisible_radPrintGubun, setRawVisible_radPrintGubun] = useState(true);
    const [rawVisible_lbPersonNm2, setRawVisible_lbPersonNm2] = useState(true);
    const [rawVisible_edPersonNm2, setRawVisible_edPersonNm2] = useState(true);
    const [rawVisible_lbResidentNo2, setRawVisible_lbResidentNo2] = useState(true);
    const [rawVisible_medBirthday2, setRawVisible_medBirthday2] = useState(true);
    const [rawVisible_divWorkFormTitle, setRawVisible_divWorkFormTitle] = useState(true);
    const [rawVisible_btnSave11, setRawVisible_btnSave11] = useState(false);
    const [rawVisible_Static1, setRawVisible_Static1] = useState(true);
    const [rawVisible_Button0, setRawVisible_Button0] = useState(false);
    const [rawVisible_Static0, setRawVisible_Static0] = useState(true);
    const [rawVisible_cbxJibu2, setRawVisible_cbxJibu2] = useState(true);
    const [rawVisible_Static2, setRawVisible_Static2] = useState(true);
    const [rawVisible_cbxCourse2, setRawVisible_cbxCourse2] = useState(true);
    const [rawVisible_Static3, setRawVisible_Static3] = useState(true);
    const [rawVisible_lbDate, setRawVisible_lbDate] = useState(true);
    const [rawVisible_calStaDate2, setRawVisible_calStaDate2] = useState(true);
    const [rawVisible_calEndDate2, setRawVisible_calEndDate2] = useState(true);
    const [rawVisible_Static4, setRawVisible_Static4] = useState(true);
    const [rawVisible_cbxComder2, setRawVisible_cbxComder2] = useState(true);
    const [rawVisible_Static5, setRawVisible_Static5] = useState(true);
    const [rawVisible_edLaw, setRawVisible_edLaw] = useState(true);
    const [rawVisible_Static6, setRawVisible_Static6] = useState(true);
    const [rawVisible_edOdorDoc, setRawVisible_edOdorDoc] = useState(true);
    const [rawVisible_Static7, setRawVisible_Static7] = useState(true);
    const [rawVisible_edRemark, setRawVisible_edRemark] = useState(true);
    const [rawVisible_Static8, setRawVisible_Static8] = useState(true);
    const [rawVisible_Static9, setRawVisible_Static9] = useState(true);
    const [rawVisible_Static10, setRawVisible_Static10] = useState(true);
    const [rawVisible_cbxComder, setRawVisible_cbxComder] = useState(true);
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
    const [rawVisible_cbxCourse, setRawVisible_cbxCourse] = useState(true);
    const [rawVisible_shpBtnBox, setRawVisible_shpBtnBox] = useState(true);
    const [rawVisible_btnSearch, setRawVisible_btnSearch] = useState(true);
    const [rawVisible_btnInput, setRawVisible_btnInput] = useState(true);
    const [rawVisible_btnDelete, setRawVisible_btnDelete] = useState(true);
    const [rawVisible_btnSave, setRawVisible_btnSave] = useState(true);
    const [rawVisible_btnCancel, setRawVisible_btnCancel] = useState(true);
    const [rawVisible_btnToExcel, setRawVisible_btnToExcel] = useState(true);
    const [rawVisible_btnPrintScreen, setRawVisible_btnPrintScreen] = useState(true);
    const [rawVisible_btnEnd, setRawVisible_btnEnd] = useState(true);
    const [rawVisible_lbTotalCnt, setRawVisible_lbTotalCnt] = useState(true);
    const [rawVisible_medTotalCnt, setRawVisible_medTotalCnt] = useState(true);
    const [rawVisible_cbxLaw, setRawVisible_cbxLaw] = useState(true);
    const [rawVisible_Static17, setRawVisible_Static17] = useState(true);
    const [rawVisible_medCustNo, setRawVisible_medCustNo] = useState(true);
    const [rawVisible_Static18, setRawVisible_Static18] = useState(true);
    const [rawVisible_edBNM, setRawVisible_edBNM] = useState(true);
    const [rawVisible_Static19, setRawVisible_Static19] = useState(true);
    const [rawVisible_Static20, setRawVisible_Static20] = useState(true);
    const [rawVisible_edEduYear, setRawVisible_edEduYear] = useState(true);
    const isVisible_Shape2 = rawVisible_Shape2;
    const setIsVisible_Shape2 = setRawVisible_Shape2;
    const isVisible_Shape1 = rawVisible_Shape1;
    const setIsVisible_Shape1 = setRawVisible_Shape1;
    const isVisible_Shape0 = rawVisible_Shape0;
    const setIsVisible_Shape0 = setRawVisible_Shape0;
    const isVisible_shpGubunBox3 = rawVisible_shpGubunBox3;
    const setIsVisible_shpGubunBox3 = setRawVisible_shpGubunBox3;
    const isVisible_gdTrainingOrder = rawVisible_gdTrainingOrder && rawVisible_Shape0;
    const setIsVisible_gdTrainingOrder = setRawVisible_gdTrainingOrder;
    const isVisible_btnMutilSort = rawVisible_btnMutilSort && rawVisible_Shape0;
    const setIsVisible_btnMutilSort = setRawVisible_btnMutilSort;
    const isVisible_btnSearch111 = rawVisible_btnSearch111;
    const setIsVisible_btnSearch111 = setRawVisible_btnSearch111;
    const isVisible_btnDelete111 = rawVisible_btnDelete111;
    const setIsVisible_btnDelete111 = setRawVisible_btnDelete111;
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
    const isVisible_btnSave11 = rawVisible_btnSave11 && rawVisible_shpGubunBox3;
    const setIsVisible_btnSave11 = setRawVisible_btnSave11;
    const isVisible_Static1 = rawVisible_Static1;
    const setIsVisible_Static1 = setRawVisible_Static1;
    const isVisible_Button0 = rawVisible_Button0 && rawVisible_shpGubunBox3;
    const setIsVisible_Button0 = setRawVisible_Button0;
    const isVisible_Static0 = rawVisible_Static0 && rawVisible_shpGubunBox3;
    const setIsVisible_Static0 = setRawVisible_Static0;
    const isVisible_cbxJibu2 = rawVisible_cbxJibu2 && rawVisible_shpGubunBox3;
    const setIsVisible_cbxJibu2 = setRawVisible_cbxJibu2;
    const isVisible_Static2 = rawVisible_Static2 && rawVisible_shpGubunBox3;
    const setIsVisible_Static2 = setRawVisible_Static2;
    const isVisible_cbxCourse2 = rawVisible_cbxCourse2 && rawVisible_shpGubunBox3;
    const setIsVisible_cbxCourse2 = setRawVisible_cbxCourse2;
    const isVisible_Static3 = rawVisible_Static3 && rawVisible_shpGubunBox3;
    const setIsVisible_Static3 = setRawVisible_Static3;
    const isVisible_lbDate = rawVisible_lbDate && rawVisible_shpGubunBox3;
    const setIsVisible_lbDate = setRawVisible_lbDate;
    const isVisible_calStaDate2 = rawVisible_calStaDate2 && rawVisible_shpGubunBox3;
    const setIsVisible_calStaDate2 = setRawVisible_calStaDate2;
    const isVisible_calEndDate2 = rawVisible_calEndDate2 && rawVisible_shpGubunBox3;
    const setIsVisible_calEndDate2 = setRawVisible_calEndDate2;
    const isVisible_Static4 = rawVisible_Static4 && rawVisible_shpGubunBox3;
    const setIsVisible_Static4 = setRawVisible_Static4;
    const isVisible_cbxComder2 = rawVisible_cbxComder2 && rawVisible_shpGubunBox3;
    const setIsVisible_cbxComder2 = setRawVisible_cbxComder2;
    const isVisible_Static5 = rawVisible_Static5 && rawVisible_shpGubunBox3;
    const setIsVisible_Static5 = setRawVisible_Static5;
    const isVisible_edLaw = rawVisible_edLaw && rawVisible_shpGubunBox3;
    const setIsVisible_edLaw = setRawVisible_edLaw;
    const isVisible_Static6 = rawVisible_Static6 && rawVisible_shpGubunBox3;
    const setIsVisible_Static6 = setRawVisible_Static6;
    const isVisible_edOdorDoc = rawVisible_edOdorDoc && rawVisible_shpGubunBox3;
    const setIsVisible_edOdorDoc = setRawVisible_edOdorDoc;
    const isVisible_Static7 = rawVisible_Static7 && rawVisible_shpGubunBox3;
    const setIsVisible_Static7 = setRawVisible_Static7;
    const isVisible_edRemark = rawVisible_edRemark && rawVisible_shpGubunBox3;
    const setIsVisible_edRemark = setRawVisible_edRemark;
    const isVisible_Static8 = rawVisible_Static8 && rawVisible_Shape1;
    const setIsVisible_Static8 = setRawVisible_Static8;
    const isVisible_Static9 = rawVisible_Static9 && rawVisible_Shape1;
    const setIsVisible_Static9 = setRawVisible_Static9;
    const isVisible_Static10 = rawVisible_Static10 && rawVisible_Shape1;
    const setIsVisible_Static10 = setRawVisible_Static10;
    const isVisible_cbxComder = rawVisible_cbxComder && rawVisible_Shape1;
    const setIsVisible_cbxComder = setRawVisible_cbxComder;
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
    const isVisible_cbxCourse = rawVisible_cbxCourse && rawVisible_Shape1;
    const setIsVisible_cbxCourse = setRawVisible_cbxCourse;
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
    const isVisible_lbTotalCnt = rawVisible_lbTotalCnt && rawVisible_Shape0;
    const setIsVisible_lbTotalCnt = setRawVisible_lbTotalCnt;
    const isVisible_medTotalCnt = rawVisible_medTotalCnt && rawVisible_Shape0;
    const setIsVisible_medTotalCnt = setRawVisible_medTotalCnt;
    const isVisible_cbxLaw = rawVisible_cbxLaw && rawVisible_shpGubunBox3;
    const setIsVisible_cbxLaw = setRawVisible_cbxLaw;
    const isVisible_Static17 = rawVisible_Static17 && rawVisible_shpGubunBox3;
    const setIsVisible_Static17 = setRawVisible_Static17;
    const isVisible_medCustNo = rawVisible_medCustNo && rawVisible_shpGubunBox3;
    const setIsVisible_medCustNo = setRawVisible_medCustNo;
    const isVisible_Static18 = rawVisible_Static18 && rawVisible_shpGubunBox3;
    const setIsVisible_Static18 = setRawVisible_Static18;
    const isVisible_edBNM = rawVisible_edBNM && rawVisible_shpGubunBox3;
    const setIsVisible_edBNM = setRawVisible_edBNM;
    const isVisible_Static19 = rawVisible_Static19 && rawVisible_shpGubunBox3;
    const setIsVisible_Static19 = setRawVisible_Static19;
    const isVisible_Static20 = rawVisible_Static20 && rawVisible_shpGubunBox3;
    const setIsVisible_Static20 = setRawVisible_Static20;
    const isVisible_edEduYear = rawVisible_edEduYear && rawVisible_shpGubunBox3;
    const setIsVisible_edEduYear = setRawVisible_edEduYear;

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_ioPrintGubun([]);
            setds_oJibu([]);
            setds_oCourse([]);
            setds_ioTrainingOrder([]);
            setds_oJibu2([]);
            setds_oCourse2([]);
            setds_CmbComder([]);
            setds_CmbComder2([]);
            setds_oLaw([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnMutilSort_OnClick = () => {
        console.log('btnMutilSort_OnClick clicked');
    };
    const btnPrintScreen_OnClick = () => {
        console.log('btnPrintScreen_OnClick clicked');
    };
    const btnToExcel_OnClick = () => {
        console.log('btnToExcel_OnClick clicked');
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
    const lfn_Input = () => {
        console.log('lfn_Input clicked');
    };
    const lfn_Save = () => {
        console.log('lfn_Save clicked');
    };
    const lfn_Search = () => {
        console.log('lfn_Search clicked');
    };

    return {
        isLoading,
        ds_ioPrintGubun,
        ds_oJibu,
        ds_oCourse,
        ds_ioTrainingOrder,
        ds_oJibu2,
        ds_oCourse2,
        ds_CmbComder,
        ds_CmbComder2,
        ds_oLaw,
        isVisible_Shape2,
        setIsVisible_Shape2,
        isVisible_Shape1,
        setIsVisible_Shape1,
        isVisible_Shape0,
        setIsVisible_Shape0,
        isVisible_shpGubunBox3,
        setIsVisible_shpGubunBox3,
        isVisible_gdTrainingOrder,
        setIsVisible_gdTrainingOrder,
        isVisible_btnMutilSort,
        setIsVisible_btnMutilSort,
        isVisible_btnSearch111,
        setIsVisible_btnSearch111,
        isVisible_btnDelete111,
        setIsVisible_btnDelete111,
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
        isVisible_btnSave11,
        setIsVisible_btnSave11,
        isVisible_Static1,
        setIsVisible_Static1,
        isVisible_Button0,
        setIsVisible_Button0,
        isVisible_Static0,
        setIsVisible_Static0,
        isVisible_cbxJibu2,
        setIsVisible_cbxJibu2,
        isVisible_Static2,
        setIsVisible_Static2,
        isVisible_cbxCourse2,
        setIsVisible_cbxCourse2,
        isVisible_Static3,
        setIsVisible_Static3,
        isVisible_lbDate,
        setIsVisible_lbDate,
        isVisible_calStaDate2,
        setIsVisible_calStaDate2,
        isVisible_calEndDate2,
        setIsVisible_calEndDate2,
        isVisible_Static4,
        setIsVisible_Static4,
        isVisible_cbxComder2,
        setIsVisible_cbxComder2,
        isVisible_Static5,
        setIsVisible_Static5,
        isVisible_edLaw,
        setIsVisible_edLaw,
        isVisible_Static6,
        setIsVisible_Static6,
        isVisible_edOdorDoc,
        setIsVisible_edOdorDoc,
        isVisible_Static7,
        setIsVisible_Static7,
        isVisible_edRemark,
        setIsVisible_edRemark,
        isVisible_Static8,
        setIsVisible_Static8,
        isVisible_Static9,
        setIsVisible_Static9,
        isVisible_Static10,
        setIsVisible_Static10,
        isVisible_cbxComder,
        setIsVisible_cbxComder,
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
        isVisible_cbxCourse,
        setIsVisible_cbxCourse,
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
        isVisible_lbTotalCnt,
        setIsVisible_lbTotalCnt,
        isVisible_medTotalCnt,
        setIsVisible_medTotalCnt,
        isVisible_cbxLaw,
        setIsVisible_cbxLaw,
        isVisible_Static17,
        setIsVisible_Static17,
        isVisible_medCustNo,
        setIsVisible_medCustNo,
        isVisible_Static18,
        setIsVisible_Static18,
        isVisible_edBNM,
        setIsVisible_edBNM,
        isVisible_Static19,
        setIsVisible_Static19,
        isVisible_Static20,
        setIsVisible_Static20,
        isVisible_edEduYear,
        setIsVisible_edEduYear,
        btnMutilSort_OnClick,
        btnPrintScreen_OnClick,
        btnToExcel_OnClick,
        lfn_Cancel,
        lfn_Delete,
        lfn_End,
        lfn_Input,
        lfn_Save,
        lfn_Search,
    };
};