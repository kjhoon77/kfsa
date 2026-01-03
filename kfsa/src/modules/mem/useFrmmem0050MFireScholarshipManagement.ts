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
    const [isVisible_Shape2, setIsVisible_Shape2] = useState(true);
    const [isVisible_Shape1, setIsVisible_Shape1] = useState(true);
    const [isVisible_Shape0, setIsVisible_Shape0] = useState(true);
    const [isVisible_shpGubunBox3, setIsVisible_shpGubunBox3] = useState(true);
    const [isVisible_gdScholarshipList, setIsVisible_gdScholarshipList] = useState(true);
    const [isVisible_btnMutilSort, setIsVisible_btnMutilSort] = useState(true);
    const [isVisible_radPrintGubun, setIsVisible_radPrintGubun] = useState(true);
    const [isVisible_lbPersonNm2, setIsVisible_lbPersonNm2] = useState(true);
    const [isVisible_edPersonNm2, setIsVisible_edPersonNm2] = useState(true);
    const [isVisible_lbResidentNo2, setIsVisible_lbResidentNo2] = useState(true);
    const [isVisible_medBirthday2, setIsVisible_medBirthday2] = useState(true);
    const [isVisible_divWorkFormTitle, setIsVisible_divWorkFormTitle] = useState(true);
    const [isVisible_lbRegGubun, setIsVisible_lbRegGubun] = useState(true);
    const [isVisible_Static0, setIsVisible_Static0] = useState(true);
    const [isVisible_cbxJibu2, setIsVisible_cbxJibu2] = useState(true);
    const [isVisible_Static2, setIsVisible_Static2] = useState(true);
    const [isVisible_cbxCourse2, setIsVisible_cbxCourse2] = useState(true);
    const [isVisible_lbDate, setIsVisible_lbDate] = useState(true);
    const [isVisible_calDate2, setIsVisible_calDate2] = useState(true);
    const [isVisible_Static8, setIsVisible_Static8] = useState(true);
    const [isVisible_Static11, setIsVisible_Static11] = useState(true);
    const [isVisible_calStaDate, setIsVisible_calStaDate] = useState(true);
    const [isVisible_calEndDate, setIsVisible_calEndDate] = useState(true);
    const [isVisible_Static12, setIsVisible_Static12] = useState(true);
    const [isVisible_Static13, setIsVisible_Static13] = useState(true);
    const [isVisible_Static14, setIsVisible_Static14] = useState(true);
    const [isVisible_edName, setIsVisible_edName] = useState(true);
    const [isVisible_Static15, setIsVisible_Static15] = useState(true);
    const [isVisible_medBirthday, setIsVisible_medBirthday] = useState(true);
    const [isVisible_Static16, setIsVisible_Static16] = useState(true);
    const [isVisible_cbxJibu, setIsVisible_cbxJibu] = useState(true);
    const [isVisible_shpBtnBox, setIsVisible_shpBtnBox] = useState(true);
    const [isVisible_btnSearch, setIsVisible_btnSearch] = useState(true);
    const [isVisible_btnInput, setIsVisible_btnInput] = useState(true);
    const [isVisible_btnDelete, setIsVisible_btnDelete] = useState(true);
    const [isVisible_btnSave, setIsVisible_btnSave] = useState(true);
    const [isVisible_btnCancel, setIsVisible_btnCancel] = useState(true);
    const [isVisible_btnToExcel, setIsVisible_btnToExcel] = useState(true);
    const [isVisible_btnEnd, setIsVisible_btnEnd] = useState(true);
    const [isVisible_lbTotalCnt, setIsVisible_lbTotalCnt] = useState(true);
    const [isVisible_medTotalCnt, setIsVisible_medTotalCnt] = useState(true);
    const [isVisible_Static17, setIsVisible_Static17] = useState(true);
    const [isVisible_medCustNo, setIsVisible_medCustNo] = useState(true);
    const [isVisible_Static18, setIsVisible_Static18] = useState(true);
    const [isVisible_edBNM, setIsVisible_edBNM] = useState(true);
    const [isVisible_Static20, setIsVisible_Static20] = useState(true);
    const [isVisible_lbTrainingYear, setIsVisible_lbTrainingYear] = useState(true);
    const [isVisible_cbxYear, setIsVisible_cbxYear] = useState(true);
    const [isVisible_btnCustNo, setIsVisible_btnCustNo] = useState(true);
    const [isVisible_cbxYear2, setIsVisible_cbxYear2] = useState(true);
    const [isVisible_lbNewNotice, setIsVisible_lbNewNotice] = useState(true);
    const [isVisible_Static1, setIsVisible_Static1] = useState(true);
    const [isVisible_Static3, setIsVisible_Static3] = useState(true);
    const [isVisible_Static4, setIsVisible_Static4] = useState(true);
    const [isVisible_edRemark, setIsVisible_edRemark] = useState(true);
    const [isVisible_edMmgno, setIsVisible_edMmgno] = useState(true);
    const [isVisible_edCmgno, setIsVisible_edCmgno] = useState(true);
    const [isVisible_edPersonkey, setIsVisible_edPersonkey] = useState(true);
    const [isVisible_edMgno, setIsVisible_edMgno] = useState(true);
    const [isVisible_Static5, setIsVisible_Static5] = useState(true);
    const [isVisible_medAmt, setIsVisible_medAmt] = useState(true);
    const [isVisible_Shape3, setIsVisible_Shape3] = useState(true);
    const [isVisible_btnScanSave, setIsVisible_btnScanSave] = useState(true);
    const [isVisible_btnLocalFormView, setIsVisible_btnLocalFormView] = useState(true);
    const [isVisible_edScanFileName, setIsVisible_edScanFileName] = useState(true);
    const [isVisible_btnScanSearch, setIsVisible_btnScanSearch] = useState(true);
    const [isVisible_btnScan, setIsVisible_btnScan] = useState(true);
    const [isVisible_btnSeverFormView, setIsVisible_btnSeverFormView] = useState(true);
    const [isVisible_edFormResult, setIsVisible_edFormResult] = useState(true);
    const [isVisible_cbxForm, setIsVisible_cbxForm] = useState(true);
    const [isVisible_Static6, setIsVisible_Static6] = useState(true);
    const [isVisible_btnFormDelete, setIsVisible_btnFormDelete] = useState(false);
    const [isVisible_Static7, setIsVisible_Static7] = useState(true);
    const [isVisible_cbxSelectYN, setIsVisible_cbxSelectYN] = useState(true);
    const [isVisible_fdImage2, setIsVisible_fdImage2] = useState(true);
    const [isVisible_hfImage2, setIsVisible_hfImage2] = useState(true);
    const [isVisible_fiImageFile2, setIsVisible_fiImageFile2] = useState(true);
    const [isVisible_Static9, setIsVisible_Static9] = useState(true);
    const [isVisible_Static10, setIsVisible_Static10] = useState(true);
    const [isVisible_calFADate, setIsVisible_calFADate] = useState(true);
    const [isVisible_Static19, setIsVisible_Static19] = useState(true);

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