// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_ioSunapGubun, Ids_oCustomerFee, Ids_oMonthGubun, Ids_oMonth, Ids_iCustomerFee, Ids_iProcDate, Ids_oCustomerFeeCheck, Ids_oCustomerFeeBackup, Ids_iPosPayment } from './Frmcust2014PSunapModifyData';

export const useFrmcust2014PSunapModify = () => {
    const [ds_ioSunapGubun, setds_ioSunapGubun] = useState<Ids_ioSunapGubun[]>([]);
    const [ds_oCustomerFee, setds_oCustomerFee] = useState<Ids_oCustomerFee[]>([]);
    const [ds_oMonthGubun, setds_oMonthGubun] = useState<Ids_oMonthGubun[]>([]);
    const [ds_oMonth, setds_oMonth] = useState<Ids_oMonth[]>([]);
    const [ds_iCustomerFee, setds_iCustomerFee] = useState<Ids_iCustomerFee[]>([]);
    const [ds_iProcDate, setds_iProcDate] = useState<Ids_iProcDate[]>([]);
    const [ds_oCustomerFeeCheck, setds_oCustomerFeeCheck] = useState<Ids_oCustomerFeeCheck[]>([]);
    const [ds_oCustomerFeeBackup, setds_oCustomerFeeBackup] = useState<Ids_oCustomerFeeBackup[]>([]);
    const [ds_iPosPayment, setds_iPosPayment] = useState<Ids_iPosPayment[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [rawVisible_Shape2, setRawVisible_Shape2] = useState(true);
    const [rawVisible_Shape1, setRawVisible_Shape1] = useState(true);
    const [rawVisible_Shape0, setRawVisible_Shape0] = useState(true);
    const [rawVisible_Static26, setRawVisible_Static26] = useState(true);
    const [rawVisible_shpBtnBox, setRawVisible_shpBtnBox] = useState(true);
    const [rawVisible_btnEnd, setRawVisible_btnEnd] = useState(true);
    const [rawVisible_lbProcDate, setRawVisible_lbProcDate] = useState(true);
    const [rawVisible_lbPonyDate, setRawVisible_lbPonyDate] = useState(true);
    const [rawVisible_lbSunapGubun, setRawVisible_lbSunapGubun] = useState(true);
    const [rawVisible_chkPonyDate, setRawVisible_chkPonyDate] = useState(true);
    const [rawVisible_radSunapGubun, setRawVisible_radSunapGubun] = useState(true);
    const [rawVisible_calProcDate, setRawVisible_calProcDate] = useState(true);
    const [rawVisible_calPonyDate, setRawVisible_calPonyDate] = useState(true);
    const [rawVisible_btnSave, setRawVisible_btnSave] = useState(true);
    const [rawVisible_lbWorkFormTitle, setRawVisible_lbWorkFormTitle] = useState(true);
    const [rawVisible_imgImage, setRawVisible_imgImage] = useState(true);
    const [rawVisible_gdSunap, setRawVisible_gdSunap] = useState(true);
    const [rawVisible_Static0, setRawVisible_Static0] = useState(true);
    const [rawVisible_lbCustNo, setRawVisible_lbCustNo] = useState(true);
    const [rawVisible_medCustNo, setRawVisible_medCustNo] = useState(true);
    const [rawVisible_edBuildingNm, setRawVisible_edBuildingNm] = useState(true);
    const [rawVisible_lbManagerNm, setRawVisible_lbManagerNm] = useState(true);
    const [rawVisible_lbBuildingNm, setRawVisible_lbBuildingNm] = useState(true);
    const [rawVisible_edManagerNm, setRawVisible_edManagerNm] = useState(true);
    const [rawVisible_lbJibu, setRawVisible_lbJibu] = useState(true);
    const [rawVisible_edJibu, setRawVisible_edJibu] = useState(true);
    const [rawVisible_Static2, setRawVisible_Static2] = useState(true);
    const [rawVisible_cbxMonthGubun, setRawVisible_cbxMonthGubun] = useState(true);
    const [rawVisible_lbRegion, setRawVisible_lbRegion] = useState(true);
    const [rawVisible_edRegion, setRawVisible_edRegion] = useState(true);
    const [rawVisible_lbCourseGroup, setRawVisible_lbCourseGroup] = useState(true);
    const [rawVisible_edCourseGroup, setRawVisible_edCourseGroup] = useState(true);
    const [rawVisible_lbCourse, setRawVisible_lbCourse] = useState(true);
    const [rawVisible_edCourse, setRawVisible_edCourse] = useState(true);
    const [rawVisible_lbMember, setRawVisible_lbMember] = useState(true);
    const [rawVisible_edMember, setRawVisible_edMember] = useState(true);
    const [rawVisible_lbTextBlue, setRawVisible_lbTextBlue] = useState(true);
    const [rawVisible_btnPrintScreen, setRawVisible_btnPrintScreen] = useState(true);
    const [rawVisible_lbCustNoBefore, setRawVisible_lbCustNoBefore] = useState(true);
    const [rawVisible_medCustNoBefore, setRawVisible_medCustNoBefore] = useState(true);
    const [rawVisible_lbCustNoAfter, setRawVisible_lbCustNoAfter] = useState(true);
    const [rawVisible_medCustNoAfter, setRawVisible_medCustNoAfter] = useState(true);
    const [rawVisible_btnDelete, setRawVisible_btnDelete] = useState(true);
    const isVisible_Shape2 = rawVisible_Shape2;
    const setIsVisible_Shape2 = setRawVisible_Shape2;
    const isVisible_Shape1 = rawVisible_Shape1;
    const setIsVisible_Shape1 = setRawVisible_Shape1;
    const isVisible_Shape0 = rawVisible_Shape0;
    const setIsVisible_Shape0 = setRawVisible_Shape0;
    const isVisible_Static26 = rawVisible_Static26;
    const setIsVisible_Static26 = setRawVisible_Static26;
    const isVisible_shpBtnBox = rawVisible_shpBtnBox;
    const setIsVisible_shpBtnBox = setRawVisible_shpBtnBox;
    const isVisible_btnEnd = rawVisible_btnEnd && rawVisible_shpBtnBox;
    const setIsVisible_btnEnd = setRawVisible_btnEnd;
    const isVisible_lbProcDate = rawVisible_lbProcDate && rawVisible_Shape2;
    const setIsVisible_lbProcDate = setRawVisible_lbProcDate;
    const isVisible_lbPonyDate = rawVisible_lbPonyDate && rawVisible_Shape2;
    const setIsVisible_lbPonyDate = setRawVisible_lbPonyDate;
    const isVisible_lbSunapGubun = rawVisible_lbSunapGubun && rawVisible_Shape2;
    const setIsVisible_lbSunapGubun = setRawVisible_lbSunapGubun;
    const isVisible_chkPonyDate = rawVisible_chkPonyDate && rawVisible_Shape2;
    const setIsVisible_chkPonyDate = setRawVisible_chkPonyDate;
    const isVisible_radSunapGubun = rawVisible_radSunapGubun && rawVisible_Shape2;
    const setIsVisible_radSunapGubun = setRawVisible_radSunapGubun;
    const isVisible_calProcDate = rawVisible_calProcDate && rawVisible_Shape2;
    const setIsVisible_calProcDate = setRawVisible_calProcDate;
    const isVisible_calPonyDate = rawVisible_calPonyDate && rawVisible_Shape2;
    const setIsVisible_calPonyDate = setRawVisible_calPonyDate;
    const isVisible_btnSave = rawVisible_btnSave && rawVisible_shpBtnBox;
    const setIsVisible_btnSave = setRawVisible_btnSave;
    const isVisible_lbWorkFormTitle = rawVisible_lbWorkFormTitle;
    const setIsVisible_lbWorkFormTitle = setRawVisible_lbWorkFormTitle;
    const isVisible_imgImage = rawVisible_imgImage;
    const setIsVisible_imgImage = setRawVisible_imgImage;
    const isVisible_gdSunap = rawVisible_gdSunap && rawVisible_Shape1;
    const setIsVisible_gdSunap = setRawVisible_gdSunap;
    const isVisible_Static0 = rawVisible_Static0;
    const setIsVisible_Static0 = setRawVisible_Static0;
    const isVisible_lbCustNo = rawVisible_lbCustNo && rawVisible_Shape0;
    const setIsVisible_lbCustNo = setRawVisible_lbCustNo;
    const isVisible_medCustNo = rawVisible_medCustNo && rawVisible_Shape0;
    const setIsVisible_medCustNo = setRawVisible_medCustNo;
    const isVisible_edBuildingNm = rawVisible_edBuildingNm && rawVisible_Shape0;
    const setIsVisible_edBuildingNm = setRawVisible_edBuildingNm;
    const isVisible_lbManagerNm = rawVisible_lbManagerNm && rawVisible_Shape0;
    const setIsVisible_lbManagerNm = setRawVisible_lbManagerNm;
    const isVisible_lbBuildingNm = rawVisible_lbBuildingNm && rawVisible_Shape0;
    const setIsVisible_lbBuildingNm = setRawVisible_lbBuildingNm;
    const isVisible_edManagerNm = rawVisible_edManagerNm && rawVisible_Shape0;
    const setIsVisible_edManagerNm = setRawVisible_edManagerNm;
    const isVisible_lbJibu = rawVisible_lbJibu && rawVisible_Shape0;
    const setIsVisible_lbJibu = setRawVisible_lbJibu;
    const isVisible_edJibu = rawVisible_edJibu && rawVisible_Shape0;
    const setIsVisible_edJibu = setRawVisible_edJibu;
    const isVisible_Static2 = rawVisible_Static2;
    const setIsVisible_Static2 = setRawVisible_Static2;
    const isVisible_cbxMonthGubun = rawVisible_cbxMonthGubun && rawVisible_Shape1;
    const setIsVisible_cbxMonthGubun = setRawVisible_cbxMonthGubun;
    const isVisible_lbRegion = rawVisible_lbRegion && rawVisible_Shape0;
    const setIsVisible_lbRegion = setRawVisible_lbRegion;
    const isVisible_edRegion = rawVisible_edRegion && rawVisible_Shape0;
    const setIsVisible_edRegion = setRawVisible_edRegion;
    const isVisible_lbCourseGroup = rawVisible_lbCourseGroup && rawVisible_Shape0;
    const setIsVisible_lbCourseGroup = setRawVisible_lbCourseGroup;
    const isVisible_edCourseGroup = rawVisible_edCourseGroup && rawVisible_Shape0;
    const setIsVisible_edCourseGroup = setRawVisible_edCourseGroup;
    const isVisible_lbCourse = rawVisible_lbCourse && rawVisible_Shape0;
    const setIsVisible_lbCourse = setRawVisible_lbCourse;
    const isVisible_edCourse = rawVisible_edCourse && rawVisible_Shape0;
    const setIsVisible_edCourse = setRawVisible_edCourse;
    const isVisible_lbMember = rawVisible_lbMember && rawVisible_Shape0;
    const setIsVisible_lbMember = setRawVisible_lbMember;
    const isVisible_edMember = rawVisible_edMember && rawVisible_Shape0;
    const setIsVisible_edMember = setRawVisible_edMember;
    const isVisible_lbTextBlue = rawVisible_lbTextBlue && rawVisible_Shape1;
    const setIsVisible_lbTextBlue = setRawVisible_lbTextBlue;
    const isVisible_btnPrintScreen = rawVisible_btnPrintScreen && rawVisible_shpBtnBox;
    const setIsVisible_btnPrintScreen = setRawVisible_btnPrintScreen;
    const isVisible_lbCustNoBefore = rawVisible_lbCustNoBefore && rawVisible_Shape1;
    const setIsVisible_lbCustNoBefore = setRawVisible_lbCustNoBefore;
    const isVisible_medCustNoBefore = rawVisible_medCustNoBefore && rawVisible_Shape1;
    const setIsVisible_medCustNoBefore = setRawVisible_medCustNoBefore;
    const isVisible_lbCustNoAfter = rawVisible_lbCustNoAfter && rawVisible_Shape1;
    const setIsVisible_lbCustNoAfter = setRawVisible_lbCustNoAfter;
    const isVisible_medCustNoAfter = rawVisible_medCustNoAfter && rawVisible_Shape1;
    const setIsVisible_medCustNoAfter = setRawVisible_medCustNoAfter;
    const isVisible_btnDelete = rawVisible_btnDelete && rawVisible_shpBtnBox;
    const setIsVisible_btnDelete = setRawVisible_btnDelete;

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_ioSunapGubun([]);
            setds_oCustomerFee([]);
            setds_oMonthGubun([]);
            setds_oMonth([]);
            setds_iCustomerFee([]);
            setds_iProcDate([]);
            setds_oCustomerFeeCheck([]);
            setds_oCustomerFeeBackup([]);
            setds_iPosPayment([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const chkPonyDate_OnClick = () => {
        console.log('chkPonyDate_OnClick clicked');
    };
    const lfn_Delete = () => {
        console.log('lfn_Delete clicked');
    };
    const lfn_End = () => {
        console.log('lfn_End clicked');
    };
    const lfn_PrintScreen = () => {
        console.log('lfn_PrintScreen clicked');
    };
    const lfn_Save = () => {
        console.log('lfn_Save clicked');
    };

    return {
        isLoading,
        ds_ioSunapGubun,
        ds_oCustomerFee,
        ds_oMonthGubun,
        ds_oMonth,
        ds_iCustomerFee,
        ds_iProcDate,
        ds_oCustomerFeeCheck,
        ds_oCustomerFeeBackup,
        ds_iPosPayment,
        isVisible_Shape2,
        setIsVisible_Shape2,
        isVisible_Shape1,
        setIsVisible_Shape1,
        isVisible_Shape0,
        setIsVisible_Shape0,
        isVisible_Static26,
        setIsVisible_Static26,
        isVisible_shpBtnBox,
        setIsVisible_shpBtnBox,
        isVisible_btnEnd,
        setIsVisible_btnEnd,
        isVisible_lbProcDate,
        setIsVisible_lbProcDate,
        isVisible_lbPonyDate,
        setIsVisible_lbPonyDate,
        isVisible_lbSunapGubun,
        setIsVisible_lbSunapGubun,
        isVisible_chkPonyDate,
        setIsVisible_chkPonyDate,
        isVisible_radSunapGubun,
        setIsVisible_radSunapGubun,
        isVisible_calProcDate,
        setIsVisible_calProcDate,
        isVisible_calPonyDate,
        setIsVisible_calPonyDate,
        isVisible_btnSave,
        setIsVisible_btnSave,
        isVisible_lbWorkFormTitle,
        setIsVisible_lbWorkFormTitle,
        isVisible_imgImage,
        setIsVisible_imgImage,
        isVisible_gdSunap,
        setIsVisible_gdSunap,
        isVisible_Static0,
        setIsVisible_Static0,
        isVisible_lbCustNo,
        setIsVisible_lbCustNo,
        isVisible_medCustNo,
        setIsVisible_medCustNo,
        isVisible_edBuildingNm,
        setIsVisible_edBuildingNm,
        isVisible_lbManagerNm,
        setIsVisible_lbManagerNm,
        isVisible_lbBuildingNm,
        setIsVisible_lbBuildingNm,
        isVisible_edManagerNm,
        setIsVisible_edManagerNm,
        isVisible_lbJibu,
        setIsVisible_lbJibu,
        isVisible_edJibu,
        setIsVisible_edJibu,
        isVisible_Static2,
        setIsVisible_Static2,
        isVisible_cbxMonthGubun,
        setIsVisible_cbxMonthGubun,
        isVisible_lbRegion,
        setIsVisible_lbRegion,
        isVisible_edRegion,
        setIsVisible_edRegion,
        isVisible_lbCourseGroup,
        setIsVisible_lbCourseGroup,
        isVisible_edCourseGroup,
        setIsVisible_edCourseGroup,
        isVisible_lbCourse,
        setIsVisible_lbCourse,
        isVisible_edCourse,
        setIsVisible_edCourse,
        isVisible_lbMember,
        setIsVisible_lbMember,
        isVisible_edMember,
        setIsVisible_edMember,
        isVisible_lbTextBlue,
        setIsVisible_lbTextBlue,
        isVisible_btnPrintScreen,
        setIsVisible_btnPrintScreen,
        isVisible_lbCustNoBefore,
        setIsVisible_lbCustNoBefore,
        isVisible_medCustNoBefore,
        setIsVisible_medCustNoBefore,
        isVisible_lbCustNoAfter,
        setIsVisible_lbCustNoAfter,
        isVisible_medCustNoAfter,
        setIsVisible_medCustNoAfter,
        isVisible_btnDelete,
        setIsVisible_btnDelete,
        chkPonyDate_OnClick,
        lfn_Delete,
        lfn_End,
        lfn_PrintScreen,
        lfn_Save,
    };
};