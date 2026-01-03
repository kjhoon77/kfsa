// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_oJibu, Ids_ioEducationPassInfo, Ids_ioOverBizInfo, Ids_ioCustomerFeeInfo, Ids_oSunapGubun, Ids_oEduSuccessGubun, Ids_oOverBizProc, Ids_iCustomerModifyHistory, Ids_oModifyColumnList, Ids_oMemberInfo, Ids_oEduConfirmPrint, Ids_oVirtualAccoutAllocation, Ids_oVirtualAccoutOwnerNM, Ids_oVirtualAccoutDelete, Ids_ioMEduData, Ids_ioMEduDataDetail, Ids_ioEduNoticeHistoryGetSysdate, Ids_oEduStudentGubun, Ids_oMemJoinH } from './Frmmem0010MMemberManagementData';

export const useFrmmem0010MMemberManagement = () => {
    const [ds_oJibu, setds_oJibu] = useState<Ids_oJibu[]>([]);
    const [ds_ioEducationPassInfo, setds_ioEducationPassInfo] = useState<Ids_ioEducationPassInfo[]>([]);
    const [ds_ioOverBizInfo, setds_ioOverBizInfo] = useState<Ids_ioOverBizInfo[]>([]);
    const [ds_ioCustomerFeeInfo, setds_ioCustomerFeeInfo] = useState<Ids_ioCustomerFeeInfo[]>([]);
    const [ds_oSunapGubun, setds_oSunapGubun] = useState<Ids_oSunapGubun[]>([]);
    const [ds_oEduSuccessGubun, setds_oEduSuccessGubun] = useState<Ids_oEduSuccessGubun[]>([]);
    const [ds_oOverBizProc, setds_oOverBizProc] = useState<Ids_oOverBizProc[]>([]);
    const [ds_iCustomerModifyHistory, setds_iCustomerModifyHistory] = useState<Ids_iCustomerModifyHistory[]>([]);
    const [ds_oModifyColumnList, setds_oModifyColumnList] = useState<Ids_oModifyColumnList[]>([]);
    const [ds_oMemberInfo, setds_oMemberInfo] = useState<Ids_oMemberInfo[]>([]);
    const [ds_oEduConfirmPrint, setds_oEduConfirmPrint] = useState<Ids_oEduConfirmPrint[]>([]);
    const [ds_oVirtualAccoutAllocation, setds_oVirtualAccoutAllocation] = useState<Ids_oVirtualAccoutAllocation[]>([]);
    const [ds_oVirtualAccoutOwnerNM, setds_oVirtualAccoutOwnerNM] = useState<Ids_oVirtualAccoutOwnerNM[]>([]);
    const [ds_oVirtualAccoutDelete, setds_oVirtualAccoutDelete] = useState<Ids_oVirtualAccoutDelete[]>([]);
    const [ds_ioMEduData, setds_ioMEduData] = useState<Ids_ioMEduData[]>([]);
    const [ds_ioMEduDataDetail, setds_ioMEduDataDetail] = useState<Ids_ioMEduDataDetail[]>([]);
    const [ds_ioEduNoticeHistoryGetSysdate, setds_ioEduNoticeHistoryGetSysdate] = useState<Ids_ioEduNoticeHistoryGetSysdate[]>([]);
    const [ds_oEduStudentGubun, setds_oEduStudentGubun] = useState<Ids_oEduStudentGubun[]>([]);
    const [ds_oMemJoinH, setds_oMemJoinH] = useState<Ids_oMemJoinH[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isPopDiv0Open, setIsPopDiv0Open] = useState(false);
    const openPopDiv0 = () => setIsPopDiv0Open(true);
    const closePopDiv0 = () => setIsPopDiv0Open(false);
    const [rawVisible_Shape2, setRawVisible_Shape2] = useState(false);
    const [rawVisible_Shape0, setRawVisible_Shape0] = useState(true);
    const [rawVisible_Shape3, setRawVisible_Shape3] = useState(true);
    const [rawVisible_shpBtnBox, setRawVisible_shpBtnBox] = useState(true);
    const [rawVisible_divWorkFormTitle, setRawVisible_divWorkFormTitle] = useState(true);
    const [rawVisible_btnCancel, setRawVisible_btnCancel] = useState(true);
    const [rawVisible_btnPrintScreen, setRawVisible_btnPrintScreen] = useState(true);
    const [rawVisible_btnEnd, setRawVisible_btnEnd] = useState(true);
    const [rawVisible_medCustNo, setRawVisible_medCustNo] = useState(true);
    const [rawVisible_lbCustNo, setRawVisible_lbCustNo] = useState(true);
    const [rawVisible_lbJibu, setRawVisible_lbJibu] = useState(true);
    const [rawVisible_cbxJibu, setRawVisible_cbxJibu] = useState(true);
    const [rawVisible_Static0, setRawVisible_Static0] = useState(true);
    const [rawVisible_lbAppointNm, setRawVisible_lbAppointNm] = useState(true);
    const [rawVisible_edMemberNm, setRawVisible_edMemberNm] = useState(true);
    const [rawVisible_lbResidentNo, setRawVisible_lbResidentNo] = useState(true);
    const [rawVisible_medBirthday, setRawVisible_medBirthday] = useState(true);
    const [rawVisible_Static4, setRawVisible_Static4] = useState(true);
    const [rawVisible_medPersonKey, setRawVisible_medPersonKey] = useState(true);
    const [rawVisible_lbBarCode, setRawVisible_lbBarCode] = useState(false);
    const [rawVisible_medBarCode, setRawVisible_medBarCode] = useState(false);
    const [rawVisible_Static1, setRawVisible_Static1] = useState(true);
    const [rawVisible_gdMemberInfo, setRawVisible_gdMemberInfo] = useState(true);
    const [rawVisible_Shape5, setRawVisible_Shape5] = useState(true);
    const [rawVisible_Grid1, setRawVisible_Grid1] = useState(true);
    const [rawVisible_btnFeeDetailInfo, setRawVisible_btnFeeDetailInfo] = useState(true);
    const [rawVisible_Static2, setRawVisible_Static2] = useState(true);
    const [rawVisible_lbAccountNo, setRawVisible_lbAccountNo] = useState(true);
    const [rawVisible_btnShowVirtualAccount, setRawVisible_btnShowVirtualAccount] = useState(true);
    const [rawVisible_Shape1, setRawVisible_Shape1] = useState(true);
    const [rawVisible_gdEduInfo, setRawVisible_gdEduInfo] = useState(true);
    const [rawVisible_btnEduDataPrint, setRawVisible_btnEduDataPrint] = useState(true);
    const [rawVisible_btnEduDetailInfo, setRawVisible_btnEduDetailInfo] = useState(true);
    const [rawVisible_btnEduDataHList, setRawVisible_btnEduDataHList] = useState(true);
    const [rawVisible_Static3, setRawVisible_Static3] = useState(true);
    const [rawVisible_gdOverBizInfo, setRawVisible_gdOverBizInfo] = useState(true);
    const [rawVisible_btn_EduDetailClose, setRawVisible_btn_EduDetailClose] = useState(true);
    const [rawVisible_btnOverbiz, setRawVisible_btnOverbiz] = useState(true);
    const [rawVisible_btnSearch, setRawVisible_btnSearch] = useState(true);
    const [rawVisible_gdMemJoinH, setRawVisible_gdMemJoinH] = useState(false);
    const [rawVisible_lbCustomerInfo, setRawVisible_lbCustomerInfo] = useState(false);
    const isVisible_Shape2 = rawVisible_Shape2;
    const setIsVisible_Shape2 = setRawVisible_Shape2;
    const isVisible_Shape0 = rawVisible_Shape0;
    const setIsVisible_Shape0 = setRawVisible_Shape0;
    const isVisible_Shape3 = rawVisible_Shape3;
    const setIsVisible_Shape3 = setRawVisible_Shape3;
    const isVisible_shpBtnBox = rawVisible_shpBtnBox;
    const setIsVisible_shpBtnBox = setRawVisible_shpBtnBox;
    const isVisible_divWorkFormTitle = rawVisible_divWorkFormTitle;
    const setIsVisible_divWorkFormTitle = setRawVisible_divWorkFormTitle;
    const isVisible_btnCancel = rawVisible_btnCancel && rawVisible_shpBtnBox;
    const setIsVisible_btnCancel = setRawVisible_btnCancel;
    const isVisible_btnPrintScreen = rawVisible_btnPrintScreen && rawVisible_shpBtnBox;
    const setIsVisible_btnPrintScreen = setRawVisible_btnPrintScreen;
    const isVisible_btnEnd = rawVisible_btnEnd && rawVisible_shpBtnBox;
    const setIsVisible_btnEnd = setRawVisible_btnEnd;
    const isVisible_medCustNo = rawVisible_medCustNo && rawVisible_Shape3;
    const setIsVisible_medCustNo = setRawVisible_medCustNo;
    const isVisible_lbCustNo = rawVisible_lbCustNo && rawVisible_Shape3;
    const setIsVisible_lbCustNo = setRawVisible_lbCustNo;
    const isVisible_lbJibu = rawVisible_lbJibu && rawVisible_Shape3;
    const setIsVisible_lbJibu = setRawVisible_lbJibu;
    const isVisible_cbxJibu = rawVisible_cbxJibu && rawVisible_Shape3;
    const setIsVisible_cbxJibu = setRawVisible_cbxJibu;
    const isVisible_Static0 = rawVisible_Static0 && rawVisible_Shape3;
    const setIsVisible_Static0 = setRawVisible_Static0;
    const isVisible_lbAppointNm = rawVisible_lbAppointNm && rawVisible_Shape3;
    const setIsVisible_lbAppointNm = setRawVisible_lbAppointNm;
    const isVisible_edMemberNm = rawVisible_edMemberNm && rawVisible_Shape3;
    const setIsVisible_edMemberNm = setRawVisible_edMemberNm;
    const isVisible_lbResidentNo = rawVisible_lbResidentNo && rawVisible_Shape3;
    const setIsVisible_lbResidentNo = setRawVisible_lbResidentNo;
    const isVisible_medBirthday = rawVisible_medBirthday && rawVisible_Shape3;
    const setIsVisible_medBirthday = setRawVisible_medBirthday;
    const isVisible_Static4 = rawVisible_Static4 && rawVisible_Shape3;
    const setIsVisible_Static4 = setRawVisible_Static4;
    const isVisible_medPersonKey = rawVisible_medPersonKey && rawVisible_Shape3;
    const setIsVisible_medPersonKey = setRawVisible_medPersonKey;
    const isVisible_lbBarCode = rawVisible_lbBarCode && rawVisible_Shape0;
    const setIsVisible_lbBarCode = setRawVisible_lbBarCode;
    const isVisible_medBarCode = rawVisible_medBarCode && rawVisible_Shape0;
    const setIsVisible_medBarCode = setRawVisible_medBarCode;
    const isVisible_Static1 = rawVisible_Static1 && rawVisible_Shape0;
    const setIsVisible_Static1 = setRawVisible_Static1;
    const isVisible_gdMemberInfo = rawVisible_gdMemberInfo && rawVisible_Shape0;
    const setIsVisible_gdMemberInfo = setRawVisible_gdMemberInfo;
    const isVisible_Shape5 = rawVisible_Shape5;
    const setIsVisible_Shape5 = setRawVisible_Shape5;
    const isVisible_Grid1 = rawVisible_Grid1 && rawVisible_Shape5;
    const setIsVisible_Grid1 = setRawVisible_Grid1;
    const isVisible_btnFeeDetailInfo = rawVisible_btnFeeDetailInfo && rawVisible_Shape5;
    const setIsVisible_btnFeeDetailInfo = setRawVisible_btnFeeDetailInfo;
    const isVisible_Static2 = rawVisible_Static2 && rawVisible_Shape5;
    const setIsVisible_Static2 = setRawVisible_Static2;
    const isVisible_lbAccountNo = rawVisible_lbAccountNo && rawVisible_Shape5;
    const setIsVisible_lbAccountNo = setRawVisible_lbAccountNo;
    const isVisible_btnShowVirtualAccount = rawVisible_btnShowVirtualAccount && rawVisible_Shape5;
    const setIsVisible_btnShowVirtualAccount = setRawVisible_btnShowVirtualAccount;
    const isVisible_Shape1 = rawVisible_Shape1;
    const setIsVisible_Shape1 = setRawVisible_Shape1;
    const isVisible_gdEduInfo = rawVisible_gdEduInfo && rawVisible_Shape1;
    const setIsVisible_gdEduInfo = setRawVisible_gdEduInfo;
    const isVisible_btnEduDataPrint = rawVisible_btnEduDataPrint && rawVisible_Shape1;
    const setIsVisible_btnEduDataPrint = setRawVisible_btnEduDataPrint;
    const isVisible_btnEduDetailInfo = rawVisible_btnEduDetailInfo && rawVisible_Shape1;
    const setIsVisible_btnEduDetailInfo = setRawVisible_btnEduDetailInfo;
    const isVisible_btnEduDataHList = rawVisible_btnEduDataHList && rawVisible_Shape1;
    const setIsVisible_btnEduDataHList = setRawVisible_btnEduDataHList;
    const isVisible_Static3 = rawVisible_Static3 && rawVisible_Shape1;
    const setIsVisible_Static3 = setRawVisible_Static3;
    const isVisible_gdOverBizInfo = rawVisible_gdOverBizInfo;
    const setIsVisible_gdOverBizInfo = setRawVisible_gdOverBizInfo;
    const isVisible_btn_EduDetailClose = rawVisible_btn_EduDetailClose;
    const setIsVisible_btn_EduDetailClose = setRawVisible_btn_EduDetailClose;
    const isVisible_btnOverbiz = rawVisible_btnOverbiz && rawVisible_Shape0;
    const setIsVisible_btnOverbiz = setRawVisible_btnOverbiz;
    const isVisible_btnSearch = rawVisible_btnSearch && rawVisible_Shape3;
    const setIsVisible_btnSearch = setRawVisible_btnSearch;
    const isVisible_gdMemJoinH = rawVisible_gdMemJoinH && rawVisible_Shape2;
    const setIsVisible_gdMemJoinH = setRawVisible_gdMemJoinH;
    const isVisible_lbCustomerInfo = rawVisible_lbCustomerInfo && rawVisible_Shape2;
    const setIsVisible_lbCustomerInfo = setRawVisible_lbCustomerInfo;

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_oJibu([]);
            setds_ioEducationPassInfo([]);
            setds_ioOverBizInfo([]);
            setds_ioCustomerFeeInfo([]);
            setds_oSunapGubun([]);
            setds_oEduSuccessGubun([]);
            setds_oOverBizProc([]);
            setds_iCustomerModifyHistory([]);
            setds_oModifyColumnList([]);
            setds_oMemberInfo([]);
            setds_oEduConfirmPrint([]);
            setds_oVirtualAccoutAllocation([]);
            setds_oVirtualAccoutOwnerNM([]);
            setds_oVirtualAccoutDelete([]);
            setds_ioMEduData([]);
            setds_ioMEduDataDetail([]);
            setds_ioEduNoticeHistoryGetSysdate([]);
            setds_oEduStudentGubun([]);
            setds_oMemJoinH([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnConcurrentH_OnClick = () => {
        console.log('btnConcurrentH_OnClick clicked');
    };
    const btnEduDataHList_OnClick = () => {
        console.log('btnEduDataHList_OnClick clicked');
    };
    const btnEduDetailInfo_OnClick = () => {
        console.log('btnEduDetailInfo_OnClick clicked');
    };
    const btnFeeDetailInfo_OnClick = () => {
        console.log('btnFeeDetailInfo_OnClick clicked');
    };
    const btnShowVirtualAccount_OnClick = () => {
        console.log('btnShowVirtualAccount_OnClick clicked');
    };
    const lfn_Cancel = () => {
        console.log('lfn_Cancel clicked');
    };
    const lfn_EduDataPrint = () => {
        console.log('lfn_EduDataPrint clicked');
    };
    const lfn_End = () => {
        console.log('lfn_End clicked');
    };
    const lfn_PrintScreen = () => {
        console.log('lfn_PrintScreen clicked');
    };
    const lfn_Search = () => {
        console.log('lfn_Search clicked');
    };

    return {
        isLoading,
        ds_oJibu,
        ds_ioEducationPassInfo,
        ds_ioOverBizInfo,
        ds_ioCustomerFeeInfo,
        ds_oSunapGubun,
        ds_oEduSuccessGubun,
        ds_oOverBizProc,
        ds_iCustomerModifyHistory,
        ds_oModifyColumnList,
        ds_oMemberInfo,
        ds_oEduConfirmPrint,
        ds_oVirtualAccoutAllocation,
        ds_oVirtualAccoutOwnerNM,
        ds_oVirtualAccoutDelete,
        ds_ioMEduData,
        ds_ioMEduDataDetail,
        ds_ioEduNoticeHistoryGetSysdate,
        ds_oEduStudentGubun,
        ds_oMemJoinH,
        isPopDiv0Open,
        openPopDiv0,
        closePopDiv0,
        isVisible_Shape2,
        setIsVisible_Shape2,
        isVisible_Shape0,
        setIsVisible_Shape0,
        isVisible_Shape3,
        setIsVisible_Shape3,
        isVisible_shpBtnBox,
        setIsVisible_shpBtnBox,
        isVisible_divWorkFormTitle,
        setIsVisible_divWorkFormTitle,
        isVisible_btnCancel,
        setIsVisible_btnCancel,
        isVisible_btnPrintScreen,
        setIsVisible_btnPrintScreen,
        isVisible_btnEnd,
        setIsVisible_btnEnd,
        isVisible_medCustNo,
        setIsVisible_medCustNo,
        isVisible_lbCustNo,
        setIsVisible_lbCustNo,
        isVisible_lbJibu,
        setIsVisible_lbJibu,
        isVisible_cbxJibu,
        setIsVisible_cbxJibu,
        isVisible_Static0,
        setIsVisible_Static0,
        isVisible_lbAppointNm,
        setIsVisible_lbAppointNm,
        isVisible_edMemberNm,
        setIsVisible_edMemberNm,
        isVisible_lbResidentNo,
        setIsVisible_lbResidentNo,
        isVisible_medBirthday,
        setIsVisible_medBirthday,
        isVisible_Static4,
        setIsVisible_Static4,
        isVisible_medPersonKey,
        setIsVisible_medPersonKey,
        isVisible_lbBarCode,
        setIsVisible_lbBarCode,
        isVisible_medBarCode,
        setIsVisible_medBarCode,
        isVisible_Static1,
        setIsVisible_Static1,
        isVisible_gdMemberInfo,
        setIsVisible_gdMemberInfo,
        isVisible_Shape5,
        setIsVisible_Shape5,
        isVisible_Grid1,
        setIsVisible_Grid1,
        isVisible_btnFeeDetailInfo,
        setIsVisible_btnFeeDetailInfo,
        isVisible_Static2,
        setIsVisible_Static2,
        isVisible_lbAccountNo,
        setIsVisible_lbAccountNo,
        isVisible_btnShowVirtualAccount,
        setIsVisible_btnShowVirtualAccount,
        isVisible_Shape1,
        setIsVisible_Shape1,
        isVisible_gdEduInfo,
        setIsVisible_gdEduInfo,
        isVisible_btnEduDataPrint,
        setIsVisible_btnEduDataPrint,
        isVisible_btnEduDetailInfo,
        setIsVisible_btnEduDetailInfo,
        isVisible_btnEduDataHList,
        setIsVisible_btnEduDataHList,
        isVisible_Static3,
        setIsVisible_Static3,
        isVisible_gdOverBizInfo,
        setIsVisible_gdOverBizInfo,
        isVisible_btn_EduDetailClose,
        setIsVisible_btn_EduDetailClose,
        isVisible_btnOverbiz,
        setIsVisible_btnOverbiz,
        isVisible_btnSearch,
        setIsVisible_btnSearch,
        isVisible_gdMemJoinH,
        setIsVisible_gdMemJoinH,
        isVisible_lbCustomerInfo,
        setIsVisible_lbCustomerInfo,
        btnConcurrentH_OnClick,
        btnEduDataHList_OnClick,
        btnEduDetailInfo_OnClick,
        btnFeeDetailInfo_OnClick,
        btnShowVirtualAccount_OnClick,
        lfn_Cancel,
        lfn_EduDataPrint,
        lfn_End,
        lfn_PrintScreen,
        lfn_Search,
    };
};