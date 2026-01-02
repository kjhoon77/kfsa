// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_oCourse, Ids_oRegion, Ids_oJibu, Ids_oDetailCourse, Ids_oAllObject, Ids_ioBuildingInfo, Ids_ioCustomerInfo, Ids_oAddr, Ids_oBuildingSeq, Ids_ioCustomerInfoTmp, Ids_oBnmCode, Ids_oFireCd, Ids_oFireCenterCd, Ids_oFireBonbuCd, Ids_ioNotOverBizFireManager, Ids_ioIsOverBizFireManager, Ids_ioOldBuildingInfo, Ids_ioDanManagerInfo, Ids_iCustomerModifyHistory, Ids_oModifyColumnList, Ids_ioFPISDanTankInfo, Ids_oAddrGubun, Ids_ioOldCustomerInfo, Ids_ioTankInfo, Ids_ioOldTankInfo } from './Frmcust6301PDataConnectionTankManageOldSaveData';

export const useFrmcust6301PDataConnectionTankManageOldSave = () => {
    const [ds_oCourse, setds_oCourse] = useState<Ids_oCourse[]>([]);
    const [ds_oRegion, setds_oRegion] = useState<Ids_oRegion[]>([]);
    const [ds_oJibu, setds_oJibu] = useState<Ids_oJibu[]>([]);
    const [ds_oDetailCourse, setds_oDetailCourse] = useState<Ids_oDetailCourse[]>([]);
    const [ds_oAllObject, setds_oAllObject] = useState<Ids_oAllObject[]>([]);
    const [ds_ioBuildingInfo, setds_ioBuildingInfo] = useState<Ids_ioBuildingInfo[]>([]);
    const [ds_ioCustomerInfo, setds_ioCustomerInfo] = useState<Ids_ioCustomerInfo[]>([]);
    const [ds_oAddr, setds_oAddr] = useState<Ids_oAddr[]>([]);
    const [ds_oBuildingSeq, setds_oBuildingSeq] = useState<Ids_oBuildingSeq[]>([]);
    const [ds_ioCustomerInfoTmp, setds_ioCustomerInfoTmp] = useState<Ids_ioCustomerInfoTmp[]>([]);
    const [ds_oBnmCode, setds_oBnmCode] = useState<Ids_oBnmCode[]>([]);
    const [ds_oFireCd, setds_oFireCd] = useState<Ids_oFireCd[]>([]);
    const [ds_oFireCenterCd, setds_oFireCenterCd] = useState<Ids_oFireCenterCd[]>([]);
    const [ds_oFireBonbuCd, setds_oFireBonbuCd] = useState<Ids_oFireBonbuCd[]>([]);
    const [ds_ioNotOverBizFireManager, setds_ioNotOverBizFireManager] = useState<Ids_ioNotOverBizFireManager[]>([]);
    const [ds_ioIsOverBizFireManager, setds_ioIsOverBizFireManager] = useState<Ids_ioIsOverBizFireManager[]>([]);
    const [ds_ioOldBuildingInfo, setds_ioOldBuildingInfo] = useState<Ids_ioOldBuildingInfo[]>([]);
    const [ds_ioDanManagerInfo, setds_ioDanManagerInfo] = useState<Ids_ioDanManagerInfo[]>([]);
    const [ds_iCustomerModifyHistory, setds_iCustomerModifyHistory] = useState<Ids_iCustomerModifyHistory[]>([]);
    const [ds_oModifyColumnList, setds_oModifyColumnList] = useState<Ids_oModifyColumnList[]>([]);
    const [ds_ioFPISDanTankInfo, setds_ioFPISDanTankInfo] = useState<Ids_ioFPISDanTankInfo[]>([]);
    const [ds_oAddrGubun, setds_oAddrGubun] = useState<Ids_oAddrGubun[]>([]);
    const [ds_ioOldCustomerInfo, setds_ioOldCustomerInfo] = useState<Ids_ioOldCustomerInfo[]>([]);
    const [ds_ioTankInfo, setds_ioTankInfo] = useState<Ids_ioTankInfo[]>([]);
    const [ds_ioOldTankInfo, setds_ioOldTankInfo] = useState<Ids_ioOldTankInfo[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_oCourse([]);
            setds_oRegion([]);
            setds_oJibu([]);
            setds_oDetailCourse([]);
            setds_oAllObject([]);
            setds_ioBuildingInfo([]);
            setds_ioCustomerInfo([]);
            setds_oAddr([]);
            setds_oBuildingSeq([]);
            setds_ioCustomerInfoTmp([]);
            setds_oBnmCode([]);
            setds_oFireCd([]);
            setds_oFireCenterCd([]);
            setds_oFireBonbuCd([]);
            setds_ioNotOverBizFireManager([]);
            setds_ioIsOverBizFireManager([]);
            setds_ioOldBuildingInfo([]);
            setds_ioDanManagerInfo([]);
            setds_iCustomerModifyHistory([]);
            setds_oModifyColumnList([]);
            setds_ioFPISDanTankInfo([]);
            setds_oAddrGubun([]);
            setds_ioOldCustomerInfo([]);
            setds_ioTankInfo([]);
            setds_ioOldTankInfo([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnApply_OnClick = () => {
        console.log('btnApply_OnClick clicked');
    };
    const btnBuildingSearch_OnClick = () => {
        console.log('btnBuildingSearch_OnClick clicked');
    };
    const btnFPISInfo_OnClick = () => {
        console.log('btnFPISInfo_OnClick clicked');
    };
    const btnSearchInstlrZipCode_OnClick = () => {
        console.log('btnSearchInstlrZipCode_OnClick clicked');
    };
    const btnSearchParkZipCode_OnClick = () => {
        console.log('btnSearchParkZipCode_OnClick clicked');
    };
    const btnSearchZipCode1_OnClick = () => {
        console.log('btnSearchZipCode1_OnClick clicked');
    };
    const chkAddr_OnClick = () => {
        console.log('chkAddr_OnClick clicked');
    };
    const chkBNM_OnClick = () => {
        console.log('chkBNM_OnClick clicked');
    };
    const chkBuilding_OnClick = () => {
        console.log('chkBuilding_OnClick clicked');
    };
    const chkCarYear_OnClick = () => {
        console.log('chkCarYear_OnClick clicked');
    };
    const chkFireCenter_OnClick = () => {
        console.log('chkFireCenter_OnClick clicked');
    };
    const chkInstlrAddr_OnClick = () => {
        console.log('chkInstlrAddr_OnClick clicked');
    };
    const chkParkPlace_OnClick = () => {
        console.log('chkParkPlace_OnClick clicked');
    };
    const chkPerMissionNo_OnClick = () => {
        console.log('chkPerMissionNo_OnClick clicked');
    };
    const chkRemark_OnClick = () => {
        console.log('chkRemark_OnClick clicked');
    };
    const chkTel_OnClick = () => {
        console.log('chkTel_OnClick clicked');
    };
    const lfn_End = () => {
        console.log('lfn_End clicked');
    };
    const lfn_Save = () => {
        console.log('lfn_Save clicked');
    };

    return {
        isLoading,
        ds_oCourse,
        ds_oRegion,
        ds_oJibu,
        ds_oDetailCourse,
        ds_oAllObject,
        ds_ioBuildingInfo,
        ds_ioCustomerInfo,
        ds_oAddr,
        ds_oBuildingSeq,
        ds_ioCustomerInfoTmp,
        ds_oBnmCode,
        ds_oFireCd,
        ds_oFireCenterCd,
        ds_oFireBonbuCd,
        ds_ioNotOverBizFireManager,
        ds_ioIsOverBizFireManager,
        ds_ioOldBuildingInfo,
        ds_ioDanManagerInfo,
        ds_iCustomerModifyHistory,
        ds_oModifyColumnList,
        ds_ioFPISDanTankInfo,
        ds_oAddrGubun,
        ds_ioOldCustomerInfo,
        ds_ioTankInfo,
        ds_ioOldTankInfo,
        btnApply_OnClick,
        btnBuildingSearch_OnClick,
        btnFPISInfo_OnClick,
        btnSearchInstlrZipCode_OnClick,
        btnSearchParkZipCode_OnClick,
        btnSearchZipCode1_OnClick,
        chkAddr_OnClick,
        chkBNM_OnClick,
        chkBuilding_OnClick,
        chkCarYear_OnClick,
        chkFireCenter_OnClick,
        chkInstlrAddr_OnClick,
        chkParkPlace_OnClick,
        chkPerMissionNo_OnClick,
        chkRemark_OnClick,
        chkTel_OnClick,
        lfn_End,
        lfn_Save,
    };
};