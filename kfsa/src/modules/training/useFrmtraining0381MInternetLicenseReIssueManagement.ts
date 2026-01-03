// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_oInternetReIssueStatus, Ids_oInternetReIssue, Ids_oJibu } from './Frmtraining0381MInternetLicenseReIssueManagementData';

export const useFrmtraining0381MInternetLicenseReIssueManagement = () => {
    const [ds_oInternetReIssueStatus, setds_oInternetReIssueStatus] = useState<Ids_oInternetReIssueStatus[]>([]);
    const [ds_oInternetReIssue, setds_oInternetReIssue] = useState<Ids_oInternetReIssue[]>([]);
    const [ds_oJibu, setds_oJibu] = useState<Ids_oJibu[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [rawVisible_shpGubunBox1, setRawVisible_shpGubunBox1] = useState(true);
    const [rawVisible_shpGubunBox2, setRawVisible_shpGubunBox2] = useState(true);
    const [rawVisible_shpBtnBox, setRawVisible_shpBtnBox] = useState(true);
    const [rawVisible_divWorkFormTitle, setRawVisible_divWorkFormTitle] = useState(true);
    const [rawVisible_btnSearch, setRawVisible_btnSearch] = useState(true);
    const [rawVisible_btnCancel, setRawVisible_btnCancel] = useState(true);
    const [rawVisible_btnToExcel, setRawVisible_btnToExcel] = useState(true);
    const [rawVisible_btnPrintScreen, setRawVisible_btnPrintScreen] = useState(true);
    const [rawVisible_btnEnd, setRawVisible_btnEnd] = useState(true);
    const [rawVisible_lbPrintGubun, setRawVisible_lbPrintGubun] = useState(true);
    const [rawVisible_shpGubunBox3, setRawVisible_shpGubunBox3] = useState(true);
    const [rawVisible_btnPrintAddr, setRawVisible_btnPrintAddr] = useState(true);
    const [rawVisible_imgPicture, setRawVisible_imgPicture] = useState(true);
    const [rawVisible_imgLastestPicture, setRawVisible_imgLastestPicture] = useState(true);
    const [rawVisible_lbBIRTHDAY, setRawVisible_lbBIRTHDAY] = useState(true);
    const [rawVisible_medBIRTHDAY, setRawVisible_medBIRTHDAY] = useState(true);
    const [rawVisible_edPersonNm, setRawVisible_edPersonNm] = useState(true);
    const [rawVisible_lbPersonNm, setRawVisible_lbPersonNm] = useState(true);
    const [rawVisible_lbAddr, setRawVisible_lbAddr] = useState(true);
    const [rawVisible_medZipCode, setRawVisible_medZipCode] = useState(true);
    const [rawVisible_edAddr1, setRawVisible_edAddr1] = useState(true);
    const [rawVisible_edAddr2, setRawVisible_edAddr2] = useState(true);
    const [rawVisible_lbTel, setRawVisible_lbTel] = useState(true);
    const [rawVisible_edTel, setRawVisible_edTel] = useState(true);
    const [rawVisible_lbHpTel, setRawVisible_lbHpTel] = useState(true);
    const [rawVisible_edHpTel, setRawVisible_edHpTel] = useState(true);
    const [rawVisible_lbLcsNo, setRawVisible_lbLcsNo] = useState(true);
    const [rawVisible_medLcsNo, setRawVisible_medLcsNo] = useState(true);
    const [rawVisible_lbIssueRemark, setRawVisible_lbIssueRemark] = useState(true);
    const [rawVisible_edIssueRemark, setRawVisible_edIssueRemark] = useState(true);
    const [rawVisible_lbFirstIssueDate, setRawVisible_lbFirstIssueDate] = useState(true);
    const [rawVisible_lbIssueGubun, setRawVisible_lbIssueGubun] = useState(true);
    const [rawVisible_lbJibu, setRawVisible_lbJibu] = useState(true);
    const [rawVisible_cbxJibu, setRawVisible_cbxJibu] = useState(true);
    const [rawVisible_lbInternetReIssueStatus, setRawVisible_lbInternetReIssueStatus] = useState(true);
    const [rawVisible_cbxInternetReIssueStatus, setRawVisible_cbxInternetReIssueStatus] = useState(true);
    const [rawVisible_lbReIssueDate, setRawVisible_lbReIssueDate] = useState(true);
    const [rawVisible_calReIssueDateStart, setRawVisible_calReIssueDateStart] = useState(true);
    const [rawVisible_lbWave, setRawVisible_lbWave] = useState(true);
    const [rawVisible_calReIssueDateEnd, setRawVisible_calReIssueDateEnd] = useState(true);
    const [rawVisible_gdInternetReIssue, setRawVisible_gdInternetReIssue] = useState(true);
    const [rawVisible_medFirstIssueDate, setRawVisible_medFirstIssueDate] = useState(true);
    const [rawVisible_edIssueGubun, setRawVisible_edIssueGubun] = useState(true);
    const [rawVisible_lbCourse, setRawVisible_lbCourse] = useState(true);
    const [rawVisible_edCourse, setRawVisible_edCourse] = useState(true);
    const [rawVisible_lbJubsuInfo, setRawVisible_lbJubsuInfo] = useState(true);
    const [rawVisible_divJubsu, setRawVisible_divJubsu] = useState(true);
    const [rawVisible_divRepay, setRawVisible_divRepay] = useState(true);
    const [rawVisible_divButton, setRawVisible_divButton] = useState(true);
    const [rawVisible_btnPrintLcs, setRawVisible_btnPrintLcs] = useState(true);
    const [rawVisible_btnPrintAllAddr, setRawVisible_btnPrintAllAddr] = useState(true);
    const isVisible_shpGubunBox1 = rawVisible_shpGubunBox1;
    const setIsVisible_shpGubunBox1 = setRawVisible_shpGubunBox1;
    const isVisible_shpGubunBox2 = rawVisible_shpGubunBox2;
    const setIsVisible_shpGubunBox2 = setRawVisible_shpGubunBox2;
    const isVisible_shpBtnBox = rawVisible_shpBtnBox;
    const setIsVisible_shpBtnBox = setRawVisible_shpBtnBox;
    const isVisible_divWorkFormTitle = rawVisible_divWorkFormTitle;
    const setIsVisible_divWorkFormTitle = setRawVisible_divWorkFormTitle;
    const isVisible_btnSearch = rawVisible_btnSearch && rawVisible_shpGubunBox1;
    const setIsVisible_btnSearch = setRawVisible_btnSearch;
    const isVisible_btnCancel = rawVisible_btnCancel && rawVisible_shpBtnBox;
    const setIsVisible_btnCancel = setRawVisible_btnCancel;
    const isVisible_btnToExcel = rawVisible_btnToExcel && rawVisible_shpBtnBox;
    const setIsVisible_btnToExcel = setRawVisible_btnToExcel;
    const isVisible_btnPrintScreen = rawVisible_btnPrintScreen && rawVisible_shpBtnBox;
    const setIsVisible_btnPrintScreen = setRawVisible_btnPrintScreen;
    const isVisible_btnEnd = rawVisible_btnEnd && rawVisible_shpBtnBox;
    const setIsVisible_btnEnd = setRawVisible_btnEnd;
    const isVisible_lbPrintGubun = rawVisible_lbPrintGubun;
    const setIsVisible_lbPrintGubun = setRawVisible_lbPrintGubun;
    const isVisible_shpGubunBox3 = rawVisible_shpGubunBox3;
    const setIsVisible_shpGubunBox3 = setRawVisible_shpGubunBox3;
    const isVisible_btnPrintAddr = rawVisible_btnPrintAddr && rawVisible_shpGubunBox3;
    const setIsVisible_btnPrintAddr = setRawVisible_btnPrintAddr;
    const isVisible_imgPicture = rawVisible_imgPicture && rawVisible_shpGubunBox3;
    const setIsVisible_imgPicture = setRawVisible_imgPicture;
    const isVisible_imgLastestPicture = rawVisible_imgLastestPicture;
    const setIsVisible_imgLastestPicture = setRawVisible_imgLastestPicture;
    const isVisible_lbBIRTHDAY = rawVisible_lbBIRTHDAY && rawVisible_shpGubunBox3;
    const setIsVisible_lbBIRTHDAY = setRawVisible_lbBIRTHDAY;
    const isVisible_medBIRTHDAY = rawVisible_medBIRTHDAY && rawVisible_shpGubunBox3;
    const setIsVisible_medBIRTHDAY = setRawVisible_medBIRTHDAY;
    const isVisible_edPersonNm = rawVisible_edPersonNm && rawVisible_shpGubunBox3;
    const setIsVisible_edPersonNm = setRawVisible_edPersonNm;
    const isVisible_lbPersonNm = rawVisible_lbPersonNm && rawVisible_shpGubunBox3;
    const setIsVisible_lbPersonNm = setRawVisible_lbPersonNm;
    const isVisible_lbAddr = rawVisible_lbAddr && rawVisible_shpGubunBox3;
    const setIsVisible_lbAddr = setRawVisible_lbAddr;
    const isVisible_medZipCode = rawVisible_medZipCode && rawVisible_shpGubunBox3;
    const setIsVisible_medZipCode = setRawVisible_medZipCode;
    const isVisible_edAddr1 = rawVisible_edAddr1 && rawVisible_shpGubunBox3;
    const setIsVisible_edAddr1 = setRawVisible_edAddr1;
    const isVisible_edAddr2 = rawVisible_edAddr2 && rawVisible_shpGubunBox3;
    const setIsVisible_edAddr2 = setRawVisible_edAddr2;
    const isVisible_lbTel = rawVisible_lbTel && rawVisible_shpGubunBox3;
    const setIsVisible_lbTel = setRawVisible_lbTel;
    const isVisible_edTel = rawVisible_edTel && rawVisible_shpGubunBox3;
    const setIsVisible_edTel = setRawVisible_edTel;
    const isVisible_lbHpTel = rawVisible_lbHpTel && rawVisible_shpGubunBox3;
    const setIsVisible_lbHpTel = setRawVisible_lbHpTel;
    const isVisible_edHpTel = rawVisible_edHpTel && rawVisible_shpGubunBox3;
    const setIsVisible_edHpTel = setRawVisible_edHpTel;
    const isVisible_lbLcsNo = rawVisible_lbLcsNo && rawVisible_shpGubunBox2;
    const setIsVisible_lbLcsNo = setRawVisible_lbLcsNo;
    const isVisible_medLcsNo = rawVisible_medLcsNo && rawVisible_shpGubunBox2;
    const setIsVisible_medLcsNo = setRawVisible_medLcsNo;
    const isVisible_lbIssueRemark = rawVisible_lbIssueRemark && rawVisible_shpGubunBox3;
    const setIsVisible_lbIssueRemark = setRawVisible_lbIssueRemark;
    const isVisible_edIssueRemark = rawVisible_edIssueRemark && rawVisible_shpGubunBox3;
    const setIsVisible_edIssueRemark = setRawVisible_edIssueRemark;
    const isVisible_lbFirstIssueDate = rawVisible_lbFirstIssueDate && rawVisible_shpGubunBox2;
    const setIsVisible_lbFirstIssueDate = setRawVisible_lbFirstIssueDate;
    const isVisible_lbIssueGubun = rawVisible_lbIssueGubun && rawVisible_shpGubunBox2;
    const setIsVisible_lbIssueGubun = setRawVisible_lbIssueGubun;
    const isVisible_lbJibu = rawVisible_lbJibu && rawVisible_shpGubunBox1;
    const setIsVisible_lbJibu = setRawVisible_lbJibu;
    const isVisible_cbxJibu = rawVisible_cbxJibu && rawVisible_shpGubunBox1;
    const setIsVisible_cbxJibu = setRawVisible_cbxJibu;
    const isVisible_lbInternetReIssueStatus = rawVisible_lbInternetReIssueStatus && rawVisible_shpGubunBox1;
    const setIsVisible_lbInternetReIssueStatus = setRawVisible_lbInternetReIssueStatus;
    const isVisible_cbxInternetReIssueStatus = rawVisible_cbxInternetReIssueStatus && rawVisible_shpGubunBox1;
    const setIsVisible_cbxInternetReIssueStatus = setRawVisible_cbxInternetReIssueStatus;
    const isVisible_lbReIssueDate = rawVisible_lbReIssueDate && rawVisible_shpGubunBox1;
    const setIsVisible_lbReIssueDate = setRawVisible_lbReIssueDate;
    const isVisible_calReIssueDateStart = rawVisible_calReIssueDateStart && rawVisible_shpGubunBox1;
    const setIsVisible_calReIssueDateStart = setRawVisible_calReIssueDateStart;
    const isVisible_lbWave = rawVisible_lbWave && rawVisible_shpGubunBox1;
    const setIsVisible_lbWave = setRawVisible_lbWave;
    const isVisible_calReIssueDateEnd = rawVisible_calReIssueDateEnd && rawVisible_shpGubunBox1;
    const setIsVisible_calReIssueDateEnd = setRawVisible_calReIssueDateEnd;
    const isVisible_gdInternetReIssue = rawVisible_gdInternetReIssue;
    const setIsVisible_gdInternetReIssue = setRawVisible_gdInternetReIssue;
    const isVisible_medFirstIssueDate = rawVisible_medFirstIssueDate && rawVisible_shpGubunBox2;
    const setIsVisible_medFirstIssueDate = setRawVisible_medFirstIssueDate;
    const isVisible_edIssueGubun = rawVisible_edIssueGubun && rawVisible_shpGubunBox2;
    const setIsVisible_edIssueGubun = setRawVisible_edIssueGubun;
    const isVisible_lbCourse = rawVisible_lbCourse && rawVisible_shpGubunBox2;
    const setIsVisible_lbCourse = setRawVisible_lbCourse;
    const isVisible_edCourse = rawVisible_edCourse && rawVisible_shpGubunBox2;
    const setIsVisible_edCourse = setRawVisible_edCourse;
    const isVisible_lbJubsuInfo = rawVisible_lbJubsuInfo;
    const setIsVisible_lbJubsuInfo = setRawVisible_lbJubsuInfo;
    const isVisible_divJubsu = rawVisible_divJubsu;
    const setIsVisible_divJubsu = setRawVisible_divJubsu;
    const isVisible_divRepay = rawVisible_divRepay;
    const setIsVisible_divRepay = setRawVisible_divRepay;
    const isVisible_divButton = rawVisible_divButton;
    const setIsVisible_divButton = setRawVisible_divButton;
    const isVisible_btnPrintLcs = rawVisible_btnPrintLcs && rawVisible_shpGubunBox3;
    const setIsVisible_btnPrintLcs = setRawVisible_btnPrintLcs;
    const isVisible_btnPrintAllAddr = rawVisible_btnPrintAllAddr && rawVisible_shpGubunBox1;
    const setIsVisible_btnPrintAllAddr = setRawVisible_btnPrintAllAddr;

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_oInternetReIssueStatus([]);
            setds_oInternetReIssue([]);
            setds_oJibu([]);
            setIsLoading(false);
        }, 500);
    }, []);

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
        ds_oInternetReIssueStatus,
        ds_oInternetReIssue,
        ds_oJibu,
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
        isVisible_imgPicture,
        setIsVisible_imgPicture,
        isVisible_imgLastestPicture,
        setIsVisible_imgLastestPicture,
        isVisible_lbBIRTHDAY,
        setIsVisible_lbBIRTHDAY,
        isVisible_medBIRTHDAY,
        setIsVisible_medBIRTHDAY,
        isVisible_edPersonNm,
        setIsVisible_edPersonNm,
        isVisible_lbPersonNm,
        setIsVisible_lbPersonNm,
        isVisible_lbAddr,
        setIsVisible_lbAddr,
        isVisible_medZipCode,
        setIsVisible_medZipCode,
        isVisible_edAddr1,
        setIsVisible_edAddr1,
        isVisible_edAddr2,
        setIsVisible_edAddr2,
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
        isVisible_lbIssueRemark,
        setIsVisible_lbIssueRemark,
        isVisible_edIssueRemark,
        setIsVisible_edIssueRemark,
        isVisible_lbFirstIssueDate,
        setIsVisible_lbFirstIssueDate,
        isVisible_lbIssueGubun,
        setIsVisible_lbIssueGubun,
        isVisible_lbJibu,
        setIsVisible_lbJibu,
        isVisible_cbxJibu,
        setIsVisible_cbxJibu,
        isVisible_lbInternetReIssueStatus,
        setIsVisible_lbInternetReIssueStatus,
        isVisible_cbxInternetReIssueStatus,
        setIsVisible_cbxInternetReIssueStatus,
        isVisible_lbReIssueDate,
        setIsVisible_lbReIssueDate,
        isVisible_calReIssueDateStart,
        setIsVisible_calReIssueDateStart,
        isVisible_lbWave,
        setIsVisible_lbWave,
        isVisible_calReIssueDateEnd,
        setIsVisible_calReIssueDateEnd,
        isVisible_gdInternetReIssue,
        setIsVisible_gdInternetReIssue,
        isVisible_medFirstIssueDate,
        setIsVisible_medFirstIssueDate,
        isVisible_edIssueGubun,
        setIsVisible_edIssueGubun,
        isVisible_lbCourse,
        setIsVisible_lbCourse,
        isVisible_edCourse,
        setIsVisible_edCourse,
        isVisible_lbJubsuInfo,
        setIsVisible_lbJubsuInfo,
        isVisible_divJubsu,
        setIsVisible_divJubsu,
        isVisible_divRepay,
        setIsVisible_divRepay,
        isVisible_divButton,
        setIsVisible_divButton,
        isVisible_btnPrintLcs,
        setIsVisible_btnPrintLcs,
        isVisible_btnPrintAllAddr,
        setIsVisible_btnPrintAllAddr,
        lfn_Cancel,
        lfn_End,
        lfn_Excel,
        lfn_PrintScreen,
        lfn_Search,
    };
};