// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_iLicense, Ids_oGubun, Ids_oAddr, Ids_ioTankInfo } from './Frmcust0010PTankInfoData';

export const useFrmcust0010PTankInfo = () => {
    const [ds_iLicense, setds_iLicense] = useState<Ids_iLicense[]>([]);
    const [ds_oGubun, setds_oGubun] = useState<Ids_oGubun[]>([]);
    const [ds_oAddr, setds_oAddr] = useState<Ids_oAddr[]>([]);
    const [ds_ioTankInfo, setds_ioTankInfo] = useState<Ids_ioTankInfo[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [rawVisible_shpGubunBox, setRawVisible_shpGubunBox] = useState(true);
    const [rawVisible_shpBtnBox, setRawVisible_shpBtnBox] = useState(true);
    const [rawVisible_btnEnd, setRawVisible_btnEnd] = useState(true);
    const [rawVisible_btnSave, setRawVisible_btnSave] = useState(true);
    const [rawVisible_lbPostGubun, setRawVisible_lbPostGubun] = useState(true);
    const [rawVisible_lbPerMissionNo, setRawVisible_lbPerMissionNo] = useState(true);
    const [rawVisible_lbCarNo, setRawVisible_lbCarNo] = useState(true);
    const [rawVisible_edCarNo, setRawVisible_edCarNo] = useState(true);
    const [rawVisible_lbCarYear, setRawVisible_lbCarYear] = useState(true);
    const [rawVisible_edRemark, setRawVisible_edRemark] = useState(true);
    const [rawVisible_lbRemark, setRawVisible_lbRemark] = useState(true);
    const [rawVisible_lbParkPlace, setRawVisible_lbParkPlace] = useState(true);
    const [rawVisible_lbInstlrAddr, setRawVisible_lbInstlrAddr] = useState(true);
    const [rawVisible_lbGateWayTank1, setRawVisible_lbGateWayTank1] = useState(true);
    const [rawVisible_lbGateWayTank2, setRawVisible_lbGateWayTank2] = useState(true);
    const [rawVisible_btnSearchParkZipCode, setRawVisible_btnSearchParkZipCode] = useState(true);
    const [rawVisible_btnSearchInstlrZipCode, setRawVisible_btnSearchInstlrZipCode] = useState(true);
    const [rawVisible_edGateWayTank1, setRawVisible_edGateWayTank1] = useState(true);
    const [rawVisible_edGateWayTank2, setRawVisible_edGateWayTank2] = useState(true);
    const [rawVisible_btnGateWayTank1, setRawVisible_btnGateWayTank1] = useState(true);
    const [rawVisible_btnGateWayTank2, setRawVisible_btnGateWayTank2] = useState(true);
    const [rawVisible_radPostGubun, setRawVisible_radPostGubun] = useState(true);
    const [rawVisible_edCarYear, setRawVisible_edCarYear] = useState(true);
    const [rawVisible_edPerMissionNo, setRawVisible_edPerMissionNo] = useState(true);
    const [rawVisible_cbxParkAddrGubun, setRawVisible_cbxParkAddrGubun] = useState(true);
    const [rawVisible_cbxInstlrAddrGubun, setRawVisible_cbxInstlrAddrGubun] = useState(true);
    const [rawVisible_medParkRoadZipCode, setRawVisible_medParkRoadZipCode] = useState(true);
    const [rawVisible_edParkRoadAddr1, setRawVisible_edParkRoadAddr1] = useState(true);
    const [rawVisible_edParkRoadAddr2, setRawVisible_edParkRoadAddr2] = useState(true);
    const [rawVisible_edInstlrRoadAddr1, setRawVisible_edInstlrRoadAddr1] = useState(true);
    const [rawVisible_edInstlrRoadAddr2, setRawVisible_edInstlrRoadAddr2] = useState(true);
    const [rawVisible_medInstlrRoadZipCode, setRawVisible_medInstlrRoadZipCode] = useState(true);
    const [rawVisible_edParkAddr1, setRawVisible_edParkAddr1] = useState(true);
    const [rawVisible_edParkAddr2, setRawVisible_edParkAddr2] = useState(true);
    const [rawVisible_medParkZipCode, setRawVisible_medParkZipCode] = useState(true);
    const [rawVisible_edInstlrAddr1, setRawVisible_edInstlrAddr1] = useState(true);
    const [rawVisible_edInstlrAddr2, setRawVisible_edInstlrAddr2] = useState(true);
    const [rawVisible_medInstlrZipCode, setRawVisible_medInstlrZipCode] = useState(true);
    const [rawVisible_lbParkConvStatus, setRawVisible_lbParkConvStatus] = useState(false);
    const [rawVisible_lbInstlrConvStatus, setRawVisible_lbInstlrConvStatus] = useState(false);
    const isVisible_shpGubunBox = rawVisible_shpGubunBox;
    const setIsVisible_shpGubunBox = setRawVisible_shpGubunBox;
    const isVisible_shpBtnBox = rawVisible_shpBtnBox;
    const setIsVisible_shpBtnBox = setRawVisible_shpBtnBox;
    const isVisible_btnEnd = rawVisible_btnEnd && rawVisible_shpBtnBox;
    const setIsVisible_btnEnd = setRawVisible_btnEnd;
    const isVisible_btnSave = rawVisible_btnSave && rawVisible_shpBtnBox;
    const setIsVisible_btnSave = setRawVisible_btnSave;
    const isVisible_lbPostGubun = rawVisible_lbPostGubun && rawVisible_shpGubunBox;
    const setIsVisible_lbPostGubun = setRawVisible_lbPostGubun;
    const isVisible_lbPerMissionNo = rawVisible_lbPerMissionNo && rawVisible_shpGubunBox;
    const setIsVisible_lbPerMissionNo = setRawVisible_lbPerMissionNo;
    const isVisible_lbCarNo = rawVisible_lbCarNo && rawVisible_shpGubunBox;
    const setIsVisible_lbCarNo = setRawVisible_lbCarNo;
    const isVisible_edCarNo = rawVisible_edCarNo && rawVisible_shpGubunBox;
    const setIsVisible_edCarNo = setRawVisible_edCarNo;
    const isVisible_lbCarYear = rawVisible_lbCarYear && rawVisible_shpGubunBox;
    const setIsVisible_lbCarYear = setRawVisible_lbCarYear;
    const isVisible_edRemark = rawVisible_edRemark && rawVisible_shpGubunBox;
    const setIsVisible_edRemark = setRawVisible_edRemark;
    const isVisible_lbRemark = rawVisible_lbRemark && rawVisible_shpGubunBox;
    const setIsVisible_lbRemark = setRawVisible_lbRemark;
    const isVisible_lbParkPlace = rawVisible_lbParkPlace && rawVisible_shpGubunBox;
    const setIsVisible_lbParkPlace = setRawVisible_lbParkPlace;
    const isVisible_lbInstlrAddr = rawVisible_lbInstlrAddr && rawVisible_shpGubunBox;
    const setIsVisible_lbInstlrAddr = setRawVisible_lbInstlrAddr;
    const isVisible_lbGateWayTank1 = rawVisible_lbGateWayTank1 && rawVisible_shpGubunBox;
    const setIsVisible_lbGateWayTank1 = setRawVisible_lbGateWayTank1;
    const isVisible_lbGateWayTank2 = rawVisible_lbGateWayTank2 && rawVisible_shpGubunBox;
    const setIsVisible_lbGateWayTank2 = setRawVisible_lbGateWayTank2;
    const isVisible_btnSearchParkZipCode = rawVisible_btnSearchParkZipCode && rawVisible_shpGubunBox;
    const setIsVisible_btnSearchParkZipCode = setRawVisible_btnSearchParkZipCode;
    const isVisible_btnSearchInstlrZipCode = rawVisible_btnSearchInstlrZipCode && rawVisible_shpGubunBox;
    const setIsVisible_btnSearchInstlrZipCode = setRawVisible_btnSearchInstlrZipCode;
    const isVisible_edGateWayTank1 = rawVisible_edGateWayTank1 && rawVisible_shpGubunBox;
    const setIsVisible_edGateWayTank1 = setRawVisible_edGateWayTank1;
    const isVisible_edGateWayTank2 = rawVisible_edGateWayTank2 && rawVisible_shpGubunBox;
    const setIsVisible_edGateWayTank2 = setRawVisible_edGateWayTank2;
    const isVisible_btnGateWayTank1 = rawVisible_btnGateWayTank1 && rawVisible_shpGubunBox;
    const setIsVisible_btnGateWayTank1 = setRawVisible_btnGateWayTank1;
    const isVisible_btnGateWayTank2 = rawVisible_btnGateWayTank2 && rawVisible_shpGubunBox;
    const setIsVisible_btnGateWayTank2 = setRawVisible_btnGateWayTank2;
    const isVisible_radPostGubun = rawVisible_radPostGubun && rawVisible_shpGubunBox;
    const setIsVisible_radPostGubun = setRawVisible_radPostGubun;
    const isVisible_edCarYear = rawVisible_edCarYear && rawVisible_shpGubunBox;
    const setIsVisible_edCarYear = setRawVisible_edCarYear;
    const isVisible_edPerMissionNo = rawVisible_edPerMissionNo && rawVisible_shpGubunBox;
    const setIsVisible_edPerMissionNo = setRawVisible_edPerMissionNo;
    const isVisible_cbxParkAddrGubun = rawVisible_cbxParkAddrGubun && rawVisible_shpGubunBox;
    const setIsVisible_cbxParkAddrGubun = setRawVisible_cbxParkAddrGubun;
    const isVisible_cbxInstlrAddrGubun = rawVisible_cbxInstlrAddrGubun && rawVisible_shpGubunBox;
    const setIsVisible_cbxInstlrAddrGubun = setRawVisible_cbxInstlrAddrGubun;
    const isVisible_medParkRoadZipCode = rawVisible_medParkRoadZipCode && rawVisible_shpGubunBox;
    const setIsVisible_medParkRoadZipCode = setRawVisible_medParkRoadZipCode;
    const isVisible_edParkRoadAddr1 = rawVisible_edParkRoadAddr1 && rawVisible_shpGubunBox;
    const setIsVisible_edParkRoadAddr1 = setRawVisible_edParkRoadAddr1;
    const isVisible_edParkRoadAddr2 = rawVisible_edParkRoadAddr2 && rawVisible_shpGubunBox;
    const setIsVisible_edParkRoadAddr2 = setRawVisible_edParkRoadAddr2;
    const isVisible_edInstlrRoadAddr1 = rawVisible_edInstlrRoadAddr1 && rawVisible_shpGubunBox;
    const setIsVisible_edInstlrRoadAddr1 = setRawVisible_edInstlrRoadAddr1;
    const isVisible_edInstlrRoadAddr2 = rawVisible_edInstlrRoadAddr2 && rawVisible_shpGubunBox;
    const setIsVisible_edInstlrRoadAddr2 = setRawVisible_edInstlrRoadAddr2;
    const isVisible_medInstlrRoadZipCode = rawVisible_medInstlrRoadZipCode && rawVisible_shpGubunBox;
    const setIsVisible_medInstlrRoadZipCode = setRawVisible_medInstlrRoadZipCode;
    const isVisible_edParkAddr1 = rawVisible_edParkAddr1 && rawVisible_shpGubunBox;
    const setIsVisible_edParkAddr1 = setRawVisible_edParkAddr1;
    const isVisible_edParkAddr2 = rawVisible_edParkAddr2 && rawVisible_shpGubunBox;
    const setIsVisible_edParkAddr2 = setRawVisible_edParkAddr2;
    const isVisible_medParkZipCode = rawVisible_medParkZipCode && rawVisible_shpGubunBox;
    const setIsVisible_medParkZipCode = setRawVisible_medParkZipCode;
    const isVisible_edInstlrAddr1 = rawVisible_edInstlrAddr1 && rawVisible_shpGubunBox;
    const setIsVisible_edInstlrAddr1 = setRawVisible_edInstlrAddr1;
    const isVisible_edInstlrAddr2 = rawVisible_edInstlrAddr2 && rawVisible_shpGubunBox;
    const setIsVisible_edInstlrAddr2 = setRawVisible_edInstlrAddr2;
    const isVisible_medInstlrZipCode = rawVisible_medInstlrZipCode && rawVisible_shpGubunBox;
    const setIsVisible_medInstlrZipCode = setRawVisible_medInstlrZipCode;
    const isVisible_lbParkConvStatus = rawVisible_lbParkConvStatus && rawVisible_shpGubunBox;
    const setIsVisible_lbParkConvStatus = setRawVisible_lbParkConvStatus;
    const isVisible_lbInstlrConvStatus = rawVisible_lbInstlrConvStatus && rawVisible_shpGubunBox;
    const setIsVisible_lbInstlrConvStatus = setRawVisible_lbInstlrConvStatus;

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_iLicense([]);
            setds_oGubun([]);
            setds_oAddr([]);
            setds_ioTankInfo([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnGateWayTank1_OnClick = () => {
        console.log('btnGateWayTank1_OnClick clicked');
    };
    const btnGateWayTank2_OnClick = () => {
        console.log('btnGateWayTank2_OnClick clicked');
    };
    const btnSearchInstlrZipCode_OnClick = () => {
        console.log('btnSearchInstlrZipCode_OnClick clicked');
    };
    const btnSearchParkZipCode_OnClick = () => {
        console.log('btnSearchParkZipCode_OnClick clicked');
    };
    const chkAddr_OnClick = () => {
        console.log('chkAddr_OnClick clicked');
    };
    const lfn_End = () => {
        console.log('lfn_End clicked');
    };
    const lfn_Save = () => {
        console.log('lfn_Save clicked');
    };

    return {
        isLoading,
        ds_iLicense,
        ds_oGubun,
        ds_oAddr,
        ds_ioTankInfo,
        isVisible_shpGubunBox,
        setIsVisible_shpGubunBox,
        isVisible_shpBtnBox,
        setIsVisible_shpBtnBox,
        isVisible_btnEnd,
        setIsVisible_btnEnd,
        isVisible_btnSave,
        setIsVisible_btnSave,
        isVisible_lbPostGubun,
        setIsVisible_lbPostGubun,
        isVisible_lbPerMissionNo,
        setIsVisible_lbPerMissionNo,
        isVisible_lbCarNo,
        setIsVisible_lbCarNo,
        isVisible_edCarNo,
        setIsVisible_edCarNo,
        isVisible_lbCarYear,
        setIsVisible_lbCarYear,
        isVisible_edRemark,
        setIsVisible_edRemark,
        isVisible_lbRemark,
        setIsVisible_lbRemark,
        isVisible_lbParkPlace,
        setIsVisible_lbParkPlace,
        isVisible_lbInstlrAddr,
        setIsVisible_lbInstlrAddr,
        isVisible_lbGateWayTank1,
        setIsVisible_lbGateWayTank1,
        isVisible_lbGateWayTank2,
        setIsVisible_lbGateWayTank2,
        isVisible_btnSearchParkZipCode,
        setIsVisible_btnSearchParkZipCode,
        isVisible_btnSearchInstlrZipCode,
        setIsVisible_btnSearchInstlrZipCode,
        isVisible_edGateWayTank1,
        setIsVisible_edGateWayTank1,
        isVisible_edGateWayTank2,
        setIsVisible_edGateWayTank2,
        isVisible_btnGateWayTank1,
        setIsVisible_btnGateWayTank1,
        isVisible_btnGateWayTank2,
        setIsVisible_btnGateWayTank2,
        isVisible_radPostGubun,
        setIsVisible_radPostGubun,
        isVisible_edCarYear,
        setIsVisible_edCarYear,
        isVisible_edPerMissionNo,
        setIsVisible_edPerMissionNo,
        isVisible_cbxParkAddrGubun,
        setIsVisible_cbxParkAddrGubun,
        isVisible_cbxInstlrAddrGubun,
        setIsVisible_cbxInstlrAddrGubun,
        isVisible_medParkRoadZipCode,
        setIsVisible_medParkRoadZipCode,
        isVisible_edParkRoadAddr1,
        setIsVisible_edParkRoadAddr1,
        isVisible_edParkRoadAddr2,
        setIsVisible_edParkRoadAddr2,
        isVisible_edInstlrRoadAddr1,
        setIsVisible_edInstlrRoadAddr1,
        isVisible_edInstlrRoadAddr2,
        setIsVisible_edInstlrRoadAddr2,
        isVisible_medInstlrRoadZipCode,
        setIsVisible_medInstlrRoadZipCode,
        isVisible_edParkAddr1,
        setIsVisible_edParkAddr1,
        isVisible_edParkAddr2,
        setIsVisible_edParkAddr2,
        isVisible_medParkZipCode,
        setIsVisible_medParkZipCode,
        isVisible_edInstlrAddr1,
        setIsVisible_edInstlrAddr1,
        isVisible_edInstlrAddr2,
        setIsVisible_edInstlrAddr2,
        isVisible_medInstlrZipCode,
        setIsVisible_medInstlrZipCode,
        isVisible_lbParkConvStatus,
        setIsVisible_lbParkConvStatus,
        isVisible_lbInstlrConvStatus,
        setIsVisible_lbInstlrConvStatus,
        btnGateWayTank1_OnClick,
        btnGateWayTank2_OnClick,
        btnSearchInstlrZipCode_OnClick,
        btnSearchParkZipCode_OnClick,
        chkAddr_OnClick,
        lfn_End,
        lfn_Save,
    };
};