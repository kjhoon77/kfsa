// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_oJibu, Ids_oStatus, Ids_oList, Ids_iLicenseReissueH, Ids_iLicenseImage, Ids_iLicenseH, Ids_iLicenseSettlement, Ids_oLicenseReport, Ids_oLicenseReportEdu, Ids_ioLicenseReissuePay, Ids_oPmMgno, Ids_ioPosPayment, Ids_ioPosPrintM, Ids_oPosCas, Ids_AddrLable, Ids_PrintApplication } from './Frmspcledu0360MInternetLicenseReIssueManagementData';

export const useFrmspcledu0360MInternetLicenseReIssueManagement = () => {
    const [ds_oJibu, setds_oJibu] = useState<Ids_oJibu[]>([]);
    const [ds_oStatus, setds_oStatus] = useState<Ids_oStatus[]>([]);
    const [ds_oList, setds_oList] = useState<Ids_oList[]>([]);
    const [ds_iLicenseReissueH, setds_iLicenseReissueH] = useState<Ids_iLicenseReissueH[]>([]);
    const [ds_iLicenseImage, setds_iLicenseImage] = useState<Ids_iLicenseImage[]>([]);
    const [ds_iLicenseH, setds_iLicenseH] = useState<Ids_iLicenseH[]>([]);
    const [ds_iLicenseSettlement, setds_iLicenseSettlement] = useState<Ids_iLicenseSettlement[]>([]);
    const [ds_oLicenseReport, setds_oLicenseReport] = useState<Ids_oLicenseReport[]>([]);
    const [ds_oLicenseReportEdu, setds_oLicenseReportEdu] = useState<Ids_oLicenseReportEdu[]>([]);
    const [ds_ioLicenseReissuePay, setds_ioLicenseReissuePay] = useState<Ids_ioLicenseReissuePay[]>([]);
    const [ds_oPmMgno, setds_oPmMgno] = useState<Ids_oPmMgno[]>([]);
    const [ds_ioPosPayment, setds_ioPosPayment] = useState<Ids_ioPosPayment[]>([]);
    const [ds_ioPosPrintM, setds_ioPosPrintM] = useState<Ids_ioPosPrintM[]>([]);
    const [ds_oPosCas, setds_oPosCas] = useState<Ids_oPosCas[]>([]);
    const [ds_AddrLable, setds_AddrLable] = useState<Ids_AddrLable[]>([]);
    const [ds_PrintApplication, setds_PrintApplication] = useState<Ids_PrintApplication[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isVisible_Shape0, setIsVisible_Shape0] = useState(true);
    const [isVisible_shpGubunBox1, setIsVisible_shpGubunBox1] = useState(true);
    const [isVisible_shpGubunBox2, setIsVisible_shpGubunBox2] = useState(true);
    const [isVisible_shpBtnBox, setIsVisible_shpBtnBox] = useState(true);
    const [isVisible_divWorkFormTitle, setIsVisible_divWorkFormTitle] = useState(true);
    const [isVisible_btnSearch, setIsVisible_btnSearch] = useState(true);
    const [isVisible_btnCancel, setIsVisible_btnCancel] = useState(true);
    const [isVisible_btnToExcel, setIsVisible_btnToExcel] = useState(true);
    const [isVisible_btnPrintScreen, setIsVisible_btnPrintScreen] = useState(true);
    const [isVisible_btnEnd, setIsVisible_btnEnd] = useState(true);
    const [isVisible_lbPrintGubun, setIsVisible_lbPrintGubun] = useState(true);
    const [isVisible_shpGubunBox3, setIsVisible_shpGubunBox3] = useState(true);
    const [isVisible_btnPrintAddr, setIsVisible_btnPrintAddr] = useState(true);
    const [isVisible_lbResidentNo, setIsVisible_lbResidentNo] = useState(true);
    const [isVisible_medResidentNo, setIsVisible_medResidentNo] = useState(true);
    const [isVisible_edPersonNm, setIsVisible_edPersonNm] = useState(true);
    const [isVisible_lbPersonNm, setIsVisible_lbPersonNm] = useState(true);
    const [isVisible_lbSendAddr, setIsVisible_lbSendAddr] = useState(true);
    const [isVisible_medSendZipCode, setIsVisible_medSendZipCode] = useState(true);
    const [isVisible_edSendAddr1, setIsVisible_edSendAddr1] = useState(true);
    const [isVisible_edSendAddr2, setIsVisible_edSendAddr2] = useState(true);
    const [isVisible_lbTel, setIsVisible_lbTel] = useState(true);
    const [isVisible_edTel, setIsVisible_edTel] = useState(true);
    const [isVisible_lbHpTel, setIsVisible_lbHpTel] = useState(true);
    const [isVisible_edHpTel, setIsVisible_edHpTel] = useState(true);
    const [isVisible_lbLcsNo, setIsVisible_lbLcsNo] = useState(true);
    const [isVisible_medLcsNo, setIsVisible_medLcsNo] = useState(true);
    const [isVisible_lbIssueDate, setIsVisible_lbIssueDate] = useState(true);
    const [isVisible_lbIssueGubun, setIsVisible_lbIssueGubun] = useState(true);
    const [isVisible_lbJibu, setIsVisible_lbJibu] = useState(true);
    const [isVisible_cbxJibu, setIsVisible_cbxJibu] = useState(true);
    const [isVisible_lbInternetReIssueStatus, setIsVisible_lbInternetReIssueStatus] = useState(true);
    const [isVisible_cbxStatus, setIsVisible_cbxStatus] = useState(true);
    const [isVisible_lbReIssueDate, setIsVisible_lbReIssueDate] = useState(true);
    const [isVisible_calStartDate, setIsVisible_calStartDate] = useState(true);
    const [isVisible_lbWave, setIsVisible_lbWave] = useState(true);
    const [isVisible_calEndDate, setIsVisible_calEndDate] = useState(true);
    const [isVisible_gdList, setIsVisible_gdList] = useState(true);
    const [isVisible_medIssueDate, setIsVisible_medIssueDate] = useState(true);
    const [isVisible_edIssueGubun, setIsVisible_edIssueGubun] = useState(true);
    const [isVisible_lbCourse, setIsVisible_lbCourse] = useState(true);
    const [isVisible_edCourse, setIsVisible_edCourse] = useState(true);
    const [isVisible_lbJubsuInfo, setIsVisible_lbJubsuInfo] = useState(true);
    const [isVisible_btnReIssue, setIsVisible_btnReIssue] = useState(true);
    const [isVisible_btnPrintAddrAll, setIsVisible_btnPrintAddrAll] = useState(true);
    const [isVisible_lbAddr, setIsVisible_lbAddr] = useState(true);
    const [isVisible_edAddr1, setIsVisible_edAddr1] = useState(true);
    const [isVisible_medZipCode, setIsVisible_medZipCode] = useState(true);
    const [isVisible_edAddr2, setIsVisible_edAddr2] = useState(true);
    const [isVisible_lbBarcode, setIsVisible_lbBarcode] = useState(true);
    const [isVisible_imgPicture, setIsVisible_imgPicture] = useState(true);
    const [isVisible_Static1, setIsVisible_Static1] = useState(true);
    const [isVisible_Static2, setIsVisible_Static2] = useState(true);
    const [isVisible_edName, setIsVisible_edName] = useState(true);
    const [isVisible_Static3, setIsVisible_Static3] = useState(true);
    const [isVisible_lbSendNm, setIsVisible_lbSendNm] = useState(true);
    const [isVisible_edSendNm, setIsVisible_edSendNm] = useState(true);
    const [isVisible_lbSendTel, setIsVisible_lbSendTel] = useState(true);
    const [isVisible_edSendTel, setIsVisible_edSendTel] = useState(true);
    const [isVisible_lbTransNo, setIsVisible_lbTransNo] = useState(true);
    const [isVisible_edJibu3, setIsVisible_edJibu3] = useState(true);
    const [isVisible_Edit6, setIsVisible_Edit6] = useState(true);
    const [isVisible_lbNiceCheck, setIsVisible_lbNiceCheck] = useState(true);
    const [isVisible_lbJibu2, setIsVisible_lbJibu2] = useState(true);
    const [isVisible_edJibu2, setIsVisible_edJibu2] = useState(true);
    const [isVisible_btnTransSave, setIsVisible_btnTransSave] = useState(true);
    const [isVisible_tabSettlement, setIsVisible_tabSettlement] = useState(true);
    const [isVisible_lbBuyer, setIsVisible_lbBuyer] = useState(true);
    const [isVisible_edBuyer, setIsVisible_edBuyer] = useState(true);
    const [isVisible_lbSunapGubun, setIsVisible_lbSunapGubun] = useState(true);
    const [isVisible_edSunapGubun, setIsVisible_edSunapGubun] = useState(true);
    const [isVisible_lbStatus, setIsVisible_lbStatus] = useState(true);
    const [isVisible_edStatus, setIsVisible_edStatus] = useState(true);
    const [isVisible_btnVirtualAccount, setIsVisible_btnVirtualAccount] = useState(true);
    const [isVisible_lbDate, setIsVisible_lbDate] = useState(true);
    const [isVisible_medDate, setIsVisible_medDate] = useState(true);
    const [isVisible_btnPrintReRct, setIsVisible_btnPrintReRct] = useState(true);
    const [isVisible_medAmount, setIsVisible_medAmount] = useState(true);
    const [isVisible_lbAmount, setIsVisible_lbAmount] = useState(true);
    const [isVisible_btnReapy, setIsVisible_btnReapy] = useState(false);
    const [isVisible_lbBank, setIsVisible_lbBank] = useState(true);
    const [isVisible_edBank, setIsVisible_edBank] = useState(true);
    const [isVisible_lbAccount, setIsVisible_lbAccount] = useState(true);
    const [isVisible_edAccount, setIsVisible_edAccount] = useState(true);
    const [isVisible_lbReason, setIsVisible_lbReason] = useState(true);
    const [isVisible_btnJubsu, setIsVisible_btnJubsu] = useState(true);
    const [isVisible_edReason, setIsVisible_edReason] = useState(true);
    const [isVisible_btnRepay, setIsVisible_btnRepay] = useState(true);
    const [isVisible_btnTransSearch, setIsVisible_btnTransSearch] = useState(true);
    const [isVisible_edBarcode, setIsVisible_edBarcode] = useState(true);
    const [isVisible_Static0, setIsVisible_Static0] = useState(true);
    const [isVisible_edTransNo, setIsVisible_edTransNo] = useState(true);
    const [isVisible_btnReturn, setIsVisible_btnReturn] = useState(true);
    const [isVisible_divPos, setIsVisible_divPos] = useState(false);
    const [isVisible_btnLicensePrint, setIsVisible_btnLicensePrint] = useState(true);
    const [isVisible_hfImageFile, setIsVisible_hfImageFile] = useState(true);
    const [isVisible_btnPrintApplication, setIsVisible_btnPrintApplication] = useState(true);
    const [tabValue_tabSettlement, setTabValue_tabSettlement] = useState(0);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_oJibu([]);
            setds_oStatus([]);
            setds_oList([]);
            setds_iLicenseReissueH([]);
            setds_iLicenseImage([]);
            setds_iLicenseH([]);
            setds_iLicenseSettlement([]);
            setds_oLicenseReport([]);
            setds_oLicenseReportEdu([]);
            setds_ioLicenseReissuePay([]);
            setds_oPmMgno([]);
            setds_ioPosPayment([]);
            setds_ioPosPrintM([]);
            setds_oPosCas([]);
            setds_AddrLable([]);
            setds_PrintApplication([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnJubsu_OnClick = () => {
        console.log('btnJubsu_OnClick clicked');
    };
    const btnLicensePrint_OnClick = () => {
        console.log('btnLicensePrint_OnClick clicked');
    };
    const btnPrintAddrAll_OnClick = () => {
        console.log('btnPrintAddrAll_OnClick clicked');
    };
    const btnPrintAddr_OnClick = () => {
        console.log('btnPrintAddr_OnClick clicked');
    };
    const btnPrintApplication_OnClick = () => {
        console.log('btnPrintApplication_OnClick clicked');
    };
    const btnReIssue_OnClick = () => {
        console.log('btnReIssue_OnClick clicked');
    };
    const btnReturn_OnClick = () => {
        console.log('btnReturn_OnClick clicked');
    };
    const btnTransSave_OnClick = () => {
        console.log('btnTransSave_OnClick clicked');
    };
    const btnTransSearch_OnClick = () => {
        console.log('btnTransSearch_OnClick clicked');
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
    const tabSettlement_tabRepay_btnCancel_OnClick = () => {
        console.log('tabSettlement_tabRepay_btnCancel_OnClick clicked');
    };
    const tabSettlement_tabRepay_btnJubsu_OnClick = () => {
        console.log('tabSettlement_tabRepay_btnJubsu_OnClick clicked');
    };
    const tabSettlement_tabRepay_btnRepay_OnClick = () => {
        console.log('tabSettlement_tabRepay_btnRepay_OnClick clicked');
    };
    const tabSettlement_tabSunap_btnPrintReRct_OnClick = () => {
        console.log('tabSettlement_tabSunap_btnPrintReRct_OnClick clicked');
    };
    const tabSettlement_tabSunap_btnReapy_OnClick = () => {
        console.log('tabSettlement_tabSunap_btnReapy_OnClick clicked');
    };
    const tabSettlement_tabSunap_btnVirtualAccount_OnClick = () => {
        console.log('tabSettlement_tabSunap_btnVirtualAccount_OnClick clicked');
    };

    return {
        isLoading,
        ds_oJibu,
        ds_oStatus,
        ds_oList,
        ds_iLicenseReissueH,
        ds_iLicenseImage,
        ds_iLicenseH,
        ds_iLicenseSettlement,
        ds_oLicenseReport,
        ds_oLicenseReportEdu,
        ds_ioLicenseReissuePay,
        ds_oPmMgno,
        ds_ioPosPayment,
        ds_ioPosPrintM,
        ds_oPosCas,
        ds_AddrLable,
        ds_PrintApplication,
        isVisible_Shape0,
        setIsVisible_Shape0,
        isVisible_shpGubunBox1,
        setIsVisible_shpGubunBox1,
        isVisible_shpGubunBox2,
        setIsVisible_shpGubunBox2,
        isVisible_shpBtnBox,
        setIsVisible_shpBtnBox,
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
        isVisible_lbPrintGubun,
        setIsVisible_lbPrintGubun,
        isVisible_shpGubunBox3,
        setIsVisible_shpGubunBox3,
        isVisible_btnPrintAddr,
        setIsVisible_btnPrintAddr,
        isVisible_lbResidentNo,
        setIsVisible_lbResidentNo,
        isVisible_medResidentNo,
        setIsVisible_medResidentNo,
        isVisible_edPersonNm,
        setIsVisible_edPersonNm,
        isVisible_lbPersonNm,
        setIsVisible_lbPersonNm,
        isVisible_lbSendAddr,
        setIsVisible_lbSendAddr,
        isVisible_medSendZipCode,
        setIsVisible_medSendZipCode,
        isVisible_edSendAddr1,
        setIsVisible_edSendAddr1,
        isVisible_edSendAddr2,
        setIsVisible_edSendAddr2,
        isVisible_lbTel,
        setIsVisible_lbTel,
        isVisible_edTel,
        setIsVisible_edTel,
        isVisible_lbHpTel,
        setIsVisible_lbHpTel,
        isVisible_edHpTel,
        setIsVisible_edHpTel,
        isVisible_lbLcsNo,
        setIsVisible_lbLcsNo,
        isVisible_medLcsNo,
        setIsVisible_medLcsNo,
        isVisible_lbIssueDate,
        setIsVisible_lbIssueDate,
        isVisible_lbIssueGubun,
        setIsVisible_lbIssueGubun,
        isVisible_lbJibu,
        setIsVisible_lbJibu,
        isVisible_cbxJibu,
        setIsVisible_cbxJibu,
        isVisible_lbInternetReIssueStatus,
        setIsVisible_lbInternetReIssueStatus,
        isVisible_cbxStatus,
        setIsVisible_cbxStatus,
        isVisible_lbReIssueDate,
        setIsVisible_lbReIssueDate,
        isVisible_calStartDate,
        setIsVisible_calStartDate,
        isVisible_lbWave,
        setIsVisible_lbWave,
        isVisible_calEndDate,
        setIsVisible_calEndDate,
        isVisible_gdList,
        setIsVisible_gdList,
        isVisible_medIssueDate,
        setIsVisible_medIssueDate,
        isVisible_edIssueGubun,
        setIsVisible_edIssueGubun,
        isVisible_lbCourse,
        setIsVisible_lbCourse,
        isVisible_edCourse,
        setIsVisible_edCourse,
        isVisible_lbJubsuInfo,
        setIsVisible_lbJubsuInfo,
        isVisible_btnReIssue,
        setIsVisible_btnReIssue,
        isVisible_btnPrintAddrAll,
        setIsVisible_btnPrintAddrAll,
        isVisible_lbAddr,
        setIsVisible_lbAddr,
        isVisible_edAddr1,
        setIsVisible_edAddr1,
        isVisible_medZipCode,
        setIsVisible_medZipCode,
        isVisible_edAddr2,
        setIsVisible_edAddr2,
        isVisible_lbBarcode,
        setIsVisible_lbBarcode,
        isVisible_imgPicture,
        setIsVisible_imgPicture,
        isVisible_Static1,
        setIsVisible_Static1,
        isVisible_Static2,
        setIsVisible_Static2,
        isVisible_edName,
        setIsVisible_edName,
        isVisible_Static3,
        setIsVisible_Static3,
        isVisible_lbSendNm,
        setIsVisible_lbSendNm,
        isVisible_edSendNm,
        setIsVisible_edSendNm,
        isVisible_lbSendTel,
        setIsVisible_lbSendTel,
        isVisible_edSendTel,
        setIsVisible_edSendTel,
        isVisible_lbTransNo,
        setIsVisible_lbTransNo,
        isVisible_edJibu3,
        setIsVisible_edJibu3,
        isVisible_Edit6,
        setIsVisible_Edit6,
        isVisible_lbNiceCheck,
        setIsVisible_lbNiceCheck,
        isVisible_lbJibu2,
        setIsVisible_lbJibu2,
        isVisible_edJibu2,
        setIsVisible_edJibu2,
        isVisible_btnTransSave,
        setIsVisible_btnTransSave,
        isVisible_tabSettlement,
        setIsVisible_tabSettlement,
        isVisible_lbBuyer,
        setIsVisible_lbBuyer,
        isVisible_edBuyer,
        setIsVisible_edBuyer,
        isVisible_lbSunapGubun,
        setIsVisible_lbSunapGubun,
        isVisible_edSunapGubun,
        setIsVisible_edSunapGubun,
        isVisible_lbStatus,
        setIsVisible_lbStatus,
        isVisible_edStatus,
        setIsVisible_edStatus,
        isVisible_btnVirtualAccount,
        setIsVisible_btnVirtualAccount,
        isVisible_lbDate,
        setIsVisible_lbDate,
        isVisible_medDate,
        setIsVisible_medDate,
        isVisible_btnPrintReRct,
        setIsVisible_btnPrintReRct,
        isVisible_medAmount,
        setIsVisible_medAmount,
        isVisible_lbAmount,
        setIsVisible_lbAmount,
        isVisible_btnReapy,
        setIsVisible_btnReapy,
        isVisible_lbBank,
        setIsVisible_lbBank,
        isVisible_edBank,
        setIsVisible_edBank,
        isVisible_lbAccount,
        setIsVisible_lbAccount,
        isVisible_edAccount,
        setIsVisible_edAccount,
        isVisible_lbReason,
        setIsVisible_lbReason,
        isVisible_btnJubsu,
        setIsVisible_btnJubsu,
        isVisible_edReason,
        setIsVisible_edReason,
        isVisible_btnRepay,
        setIsVisible_btnRepay,
        isVisible_btnTransSearch,
        setIsVisible_btnTransSearch,
        isVisible_edBarcode,
        setIsVisible_edBarcode,
        isVisible_Static0,
        setIsVisible_Static0,
        isVisible_edTransNo,
        setIsVisible_edTransNo,
        isVisible_btnReturn,
        setIsVisible_btnReturn,
        isVisible_divPos,
        setIsVisible_divPos,
        isVisible_btnLicensePrint,
        setIsVisible_btnLicensePrint,
        isVisible_hfImageFile,
        setIsVisible_hfImageFile,
        isVisible_btnPrintApplication,
        setIsVisible_btnPrintApplication,
        tabValue_tabSettlement,
        setTabValue_tabSettlement,
        btnJubsu_OnClick,
        btnLicensePrint_OnClick,
        btnPrintAddrAll_OnClick,
        btnPrintAddr_OnClick,
        btnPrintApplication_OnClick,
        btnReIssue_OnClick,
        btnReturn_OnClick,
        btnTransSave_OnClick,
        btnTransSearch_OnClick,
        lfn_Cancel,
        lfn_End,
        lfn_Excel,
        lfn_PrintScreen,
        lfn_Search,
        tabSettlement_tabRepay_btnCancel_OnClick,
        tabSettlement_tabRepay_btnJubsu_OnClick,
        tabSettlement_tabRepay_btnRepay_OnClick,
        tabSettlement_tabSunap_btnPrintReRct_OnClick,
        tabSettlement_tabSunap_btnReapy_OnClick,
        tabSettlement_tabSunap_btnVirtualAccount_OnClick,
    };
};