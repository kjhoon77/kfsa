// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_oAddr, Ids_ioBuildingInfo, Ids_oBizCd, Ids_oBusinessGubun, Ids_ioYn, Ids_ioOwnerInfo, Ids_ioDangerInfo, Ids_ioTankInfo, Ids_oBuildingSeq } from './Frmcust0010PBCNewBuildingData';

export const useFrmcust0010PBCNewBuilding = () => {
    const [ds_oAddr, setds_oAddr] = useState<Ids_oAddr[]>([]);
    const [ds_ioBuildingInfo, setds_ioBuildingInfo] = useState<Ids_ioBuildingInfo[]>([]);
    const [ds_oBizCd, setds_oBizCd] = useState<Ids_oBizCd[]>([]);
    const [ds_oBusinessGubun, setds_oBusinessGubun] = useState<Ids_oBusinessGubun[]>([]);
    const [ds_ioYn, setds_ioYn] = useState<Ids_ioYn[]>([]);
    const [ds_ioOwnerInfo, setds_ioOwnerInfo] = useState<Ids_ioOwnerInfo[]>([]);
    const [ds_ioDangerInfo, setds_ioDangerInfo] = useState<Ids_ioDangerInfo[]>([]);
    const [ds_ioTankInfo, setds_ioTankInfo] = useState<Ids_ioTankInfo[]>([]);
    const [ds_oBuildingSeq, setds_oBuildingSeq] = useState<Ids_oBuildingSeq[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [rawVisible_Shape0, setRawVisible_Shape0] = useState(true);
    const [rawVisible_Shape1, setRawVisible_Shape1] = useState(true);
    const [rawVisible_shpBtnBox, setRawVisible_shpBtnBox] = useState(true);
    const [rawVisible_btnEnd, setRawVisible_btnEnd] = useState(true);
    const [rawVisible_lbOldAddr, setRawVisible_lbOldAddr] = useState(true);
    const [rawVisible_lbBuildingNm, setRawVisible_lbBuildingNm] = useState(true);
    const [rawVisible_lbTelNo, setRawVisible_lbTelNo] = useState(true);
    const [rawVisible_medOldZipCode, setRawVisible_medOldZipCode] = useState(true);
    const [rawVisible_btnSearchOldZipCode, setRawVisible_btnSearchOldZipCode] = useState(true);
    const [rawVisible_edOldAddr2, setRawVisible_edOldAddr2] = useState(true);
    const [rawVisible_edOldAddr1, setRawVisible_edOldAddr1] = useState(true);
    const [rawVisible_edBuildingNm, setRawVisible_edBuildingNm] = useState(true);
    const [rawVisible_edTelNo, setRawVisible_edTelNo] = useState(true);
    const [rawVisible_lbFaxNo, setRawVisible_lbFaxNo] = useState(true);
    const [rawVisible_edFaxNo, setRawVisible_edFaxNo] = useState(true);
    const [rawVisible_lbBuildingInfo, setRawVisible_lbBuildingInfo] = useState(true);
    const [rawVisible_lbNewAddr, setRawVisible_lbNewAddr] = useState(true);
    const [rawVisible_edNewAddr1, setRawVisible_edNewAddr1] = useState(true);
    const [rawVisible_medNewZipCode, setRawVisible_medNewZipCode] = useState(true);
    const [rawVisible_btnSearchNewZipCode, setRawVisible_btnSearchNewZipCode] = useState(true);
    const [rawVisible_edNewAddr2, setRawVisible_edNewAddr2] = useState(true);
    const [rawVisible_lbDelegateAddr, setRawVisible_lbDelegateAddr] = useState(true);
    const [rawVisible_radAddrGubun, setRawVisible_radAddrGubun] = useState(true);
    const [rawVisible_lbBusiness, setRawVisible_lbBusiness] = useState(true);
    const [rawVisible_cbxBusiness, setRawVisible_cbxBusiness] = useState(true);
    const [rawVisible_Div6, setRawVisible_Div6] = useState(true);
    const [rawVisible_tabTab1, setRawVisible_tabTab1] = useState(true);
    const [rawVisible_gdConnections, setRawVisible_gdConnections] = useState(true);
    const [rawVisible_gdDangerInfo, setRawVisible_gdDangerInfo] = useState(true);
    const [rawVisible_gdTankInfo, setRawVisible_gdTankInfo] = useState(true);
    const [rawVisible_btnAddRow1, setRawVisible_btnAddRow1] = useState(true);
    const [rawVisible_btnDelRow1, setRawVisible_btnDelRow1] = useState(true);
    const [rawVisible_btnSave, setRawVisible_btnSave] = useState(true);
    const [rawVisible_Static1, setRawVisible_Static1] = useState(true);
    const [rawVisible_lbEquipment, setRawVisible_lbEquipment] = useState(true);
    const [rawVisible_cbxEquipmentYn, setRawVisible_cbxEquipmentYn] = useState(true);
    const [rawVisible_lbArea, setRawVisible_lbArea] = useState(true);
    const [rawVisible_medArea, setRawVisible_medArea] = useState(true);
    const [rawVisible_lbText, setRawVisible_lbText] = useState(true);
    const [rawVisible_lbCompanyNo, setRawVisible_lbCompanyNo] = useState(true);
    const [rawVisible_medCompanyNo, setRawVisible_medCompanyNo] = useState(true);
    const [rawVisible_Static0, setRawVisible_Static0] = useState(true);
    const [rawVisible_Static2, setRawVisible_Static2] = useState(true);
    const isVisible_Shape0 = rawVisible_Shape0;
    const setIsVisible_Shape0 = setRawVisible_Shape0;
    const isVisible_Shape1 = rawVisible_Shape1 && rawVisible_Shape0;
    const setIsVisible_Shape1 = setRawVisible_Shape1;
    const isVisible_shpBtnBox = rawVisible_shpBtnBox;
    const setIsVisible_shpBtnBox = setRawVisible_shpBtnBox;
    const isVisible_btnEnd = rawVisible_btnEnd && rawVisible_shpBtnBox;
    const setIsVisible_btnEnd = setRawVisible_btnEnd;
    const isVisible_lbOldAddr = rawVisible_lbOldAddr && rawVisible_Shape0;
    const setIsVisible_lbOldAddr = setRawVisible_lbOldAddr;
    const isVisible_lbBuildingNm = rawVisible_lbBuildingNm && rawVisible_Shape0;
    const setIsVisible_lbBuildingNm = setRawVisible_lbBuildingNm;
    const isVisible_lbTelNo = rawVisible_lbTelNo && rawVisible_Shape0;
    const setIsVisible_lbTelNo = setRawVisible_lbTelNo;
    const isVisible_medOldZipCode = rawVisible_medOldZipCode && rawVisible_Shape0;
    const setIsVisible_medOldZipCode = setRawVisible_medOldZipCode;
    const isVisible_btnSearchOldZipCode = rawVisible_btnSearchOldZipCode && rawVisible_Shape0;
    const setIsVisible_btnSearchOldZipCode = setRawVisible_btnSearchOldZipCode;
    const isVisible_edOldAddr2 = rawVisible_edOldAddr2 && rawVisible_Shape0;
    const setIsVisible_edOldAddr2 = setRawVisible_edOldAddr2;
    const isVisible_edOldAddr1 = rawVisible_edOldAddr1 && rawVisible_Shape0;
    const setIsVisible_edOldAddr1 = setRawVisible_edOldAddr1;
    const isVisible_edBuildingNm = rawVisible_edBuildingNm && rawVisible_Shape0;
    const setIsVisible_edBuildingNm = setRawVisible_edBuildingNm;
    const isVisible_edTelNo = rawVisible_edTelNo && rawVisible_Shape0;
    const setIsVisible_edTelNo = setRawVisible_edTelNo;
    const isVisible_lbFaxNo = rawVisible_lbFaxNo && rawVisible_Shape0;
    const setIsVisible_lbFaxNo = setRawVisible_lbFaxNo;
    const isVisible_edFaxNo = rawVisible_edFaxNo && rawVisible_Shape0;
    const setIsVisible_edFaxNo = setRawVisible_edFaxNo;
    const isVisible_lbBuildingInfo = rawVisible_lbBuildingInfo;
    const setIsVisible_lbBuildingInfo = setRawVisible_lbBuildingInfo;
    const isVisible_lbNewAddr = rawVisible_lbNewAddr && rawVisible_Shape0;
    const setIsVisible_lbNewAddr = setRawVisible_lbNewAddr;
    const isVisible_edNewAddr1 = rawVisible_edNewAddr1 && rawVisible_Shape0;
    const setIsVisible_edNewAddr1 = setRawVisible_edNewAddr1;
    const isVisible_medNewZipCode = rawVisible_medNewZipCode && rawVisible_Shape0;
    const setIsVisible_medNewZipCode = setRawVisible_medNewZipCode;
    const isVisible_btnSearchNewZipCode = rawVisible_btnSearchNewZipCode && rawVisible_Shape0;
    const setIsVisible_btnSearchNewZipCode = setRawVisible_btnSearchNewZipCode;
    const isVisible_edNewAddr2 = rawVisible_edNewAddr2 && rawVisible_Shape0;
    const setIsVisible_edNewAddr2 = setRawVisible_edNewAddr2;
    const isVisible_lbDelegateAddr = rawVisible_lbDelegateAddr && rawVisible_Shape0;
    const setIsVisible_lbDelegateAddr = setRawVisible_lbDelegateAddr;
    const isVisible_radAddrGubun = rawVisible_radAddrGubun && rawVisible_Shape0;
    const setIsVisible_radAddrGubun = setRawVisible_radAddrGubun;
    const isVisible_lbBusiness = rawVisible_lbBusiness && rawVisible_Shape1;
    const setIsVisible_lbBusiness = setRawVisible_lbBusiness;
    const isVisible_cbxBusiness = rawVisible_cbxBusiness && rawVisible_Shape1;
    const setIsVisible_cbxBusiness = setRawVisible_cbxBusiness;
    const isVisible_Div6 = rawVisible_Div6 && rawVisible_Shape0;
    const setIsVisible_Div6 = setRawVisible_Div6;
    const isVisible_tabTab1 = rawVisible_tabTab1;
    const setIsVisible_tabTab1 = setRawVisible_tabTab1;
    const isVisible_gdConnections = rawVisible_gdConnections;
    const setIsVisible_gdConnections = setRawVisible_gdConnections;
    const isVisible_gdDangerInfo = rawVisible_gdDangerInfo;
    const setIsVisible_gdDangerInfo = setRawVisible_gdDangerInfo;
    const isVisible_gdTankInfo = rawVisible_gdTankInfo;
    const setIsVisible_gdTankInfo = setRawVisible_gdTankInfo;
    const isVisible_btnAddRow1 = rawVisible_btnAddRow1;
    const setIsVisible_btnAddRow1 = setRawVisible_btnAddRow1;
    const isVisible_btnDelRow1 = rawVisible_btnDelRow1;
    const setIsVisible_btnDelRow1 = setRawVisible_btnDelRow1;
    const isVisible_btnSave = rawVisible_btnSave && rawVisible_shpBtnBox;
    const setIsVisible_btnSave = setRawVisible_btnSave;
    const isVisible_Static1 = rawVisible_Static1 && rawVisible_Shape0;
    const setIsVisible_Static1 = setRawVisible_Static1;
    const isVisible_lbEquipment = rawVisible_lbEquipment && rawVisible_Shape1;
    const setIsVisible_lbEquipment = setRawVisible_lbEquipment;
    const isVisible_cbxEquipmentYn = rawVisible_cbxEquipmentYn && rawVisible_Shape1;
    const setIsVisible_cbxEquipmentYn = setRawVisible_cbxEquipmentYn;
    const isVisible_lbArea = rawVisible_lbArea && rawVisible_Shape1;
    const setIsVisible_lbArea = setRawVisible_lbArea;
    const isVisible_medArea = rawVisible_medArea && rawVisible_Shape1;
    const setIsVisible_medArea = setRawVisible_medArea;
    const isVisible_lbText = rawVisible_lbText && rawVisible_Shape1;
    const setIsVisible_lbText = setRawVisible_lbText;
    const isVisible_lbCompanyNo = rawVisible_lbCompanyNo && rawVisible_Shape1;
    const setIsVisible_lbCompanyNo = setRawVisible_lbCompanyNo;
    const isVisible_medCompanyNo = rawVisible_medCompanyNo && rawVisible_Shape1;
    const setIsVisible_medCompanyNo = setRawVisible_medCompanyNo;
    const isVisible_Static0 = rawVisible_Static0 && rawVisible_Shape1;
    const setIsVisible_Static0 = setRawVisible_Static0;
    const isVisible_Static2 = rawVisible_Static2 && rawVisible_Shape1;
    const setIsVisible_Static2 = setRawVisible_Static2;
    const [tabValue_tabTab1, setTabValue_tabTab1] = useState(0);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_oAddr([]);
            setds_ioBuildingInfo([]);
            setds_oBizCd([]);
            setds_oBusinessGubun([]);
            setds_ioYn([]);
            setds_ioOwnerInfo([]);
            setds_ioDangerInfo([]);
            setds_ioTankInfo([]);
            setds_oBuildingSeq([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const Div6_btnAddRow1_OnClick = () => {
        console.log('Div6_btnAddRow1_OnClick clicked');
    };
    const Div6_btnDelRow1_OnClick = () => {
        console.log('Div6_btnDelRow1_OnClick clicked');
    };
    const btnSearchNewZipCode_OnClick = () => {
        console.log('btnSearchNewZipCode_OnClick clicked');
    };
    const btnSearchOldZipCode_OnClick = () => {
        console.log('btnSearchOldZipCode_OnClick clicked');
    };
    const lfn_End = () => {
        console.log('lfn_End clicked');
    };
    const lfn_Save = () => {
        console.log('lfn_Save clicked');
    };

    return {
        isLoading,
        ds_oAddr,
        ds_ioBuildingInfo,
        ds_oBizCd,
        ds_oBusinessGubun,
        ds_ioYn,
        ds_ioOwnerInfo,
        ds_ioDangerInfo,
        ds_ioTankInfo,
        ds_oBuildingSeq,
        isVisible_Shape0,
        setIsVisible_Shape0,
        isVisible_Shape1,
        setIsVisible_Shape1,
        isVisible_shpBtnBox,
        setIsVisible_shpBtnBox,
        isVisible_btnEnd,
        setIsVisible_btnEnd,
        isVisible_lbOldAddr,
        setIsVisible_lbOldAddr,
        isVisible_lbBuildingNm,
        setIsVisible_lbBuildingNm,
        isVisible_lbTelNo,
        setIsVisible_lbTelNo,
        isVisible_medOldZipCode,
        setIsVisible_medOldZipCode,
        isVisible_btnSearchOldZipCode,
        setIsVisible_btnSearchOldZipCode,
        isVisible_edOldAddr2,
        setIsVisible_edOldAddr2,
        isVisible_edOldAddr1,
        setIsVisible_edOldAddr1,
        isVisible_edBuildingNm,
        setIsVisible_edBuildingNm,
        isVisible_edTelNo,
        setIsVisible_edTelNo,
        isVisible_lbFaxNo,
        setIsVisible_lbFaxNo,
        isVisible_edFaxNo,
        setIsVisible_edFaxNo,
        isVisible_lbBuildingInfo,
        setIsVisible_lbBuildingInfo,
        isVisible_lbNewAddr,
        setIsVisible_lbNewAddr,
        isVisible_edNewAddr1,
        setIsVisible_edNewAddr1,
        isVisible_medNewZipCode,
        setIsVisible_medNewZipCode,
        isVisible_btnSearchNewZipCode,
        setIsVisible_btnSearchNewZipCode,
        isVisible_edNewAddr2,
        setIsVisible_edNewAddr2,
        isVisible_lbDelegateAddr,
        setIsVisible_lbDelegateAddr,
        isVisible_radAddrGubun,
        setIsVisible_radAddrGubun,
        isVisible_lbBusiness,
        setIsVisible_lbBusiness,
        isVisible_cbxBusiness,
        setIsVisible_cbxBusiness,
        isVisible_Div6,
        setIsVisible_Div6,
        isVisible_tabTab1,
        setIsVisible_tabTab1,
        isVisible_gdConnections,
        setIsVisible_gdConnections,
        isVisible_gdDangerInfo,
        setIsVisible_gdDangerInfo,
        isVisible_gdTankInfo,
        setIsVisible_gdTankInfo,
        isVisible_btnAddRow1,
        setIsVisible_btnAddRow1,
        isVisible_btnDelRow1,
        setIsVisible_btnDelRow1,
        isVisible_btnSave,
        setIsVisible_btnSave,
        isVisible_Static1,
        setIsVisible_Static1,
        isVisible_lbEquipment,
        setIsVisible_lbEquipment,
        isVisible_cbxEquipmentYn,
        setIsVisible_cbxEquipmentYn,
        isVisible_lbArea,
        setIsVisible_lbArea,
        isVisible_medArea,
        setIsVisible_medArea,
        isVisible_lbText,
        setIsVisible_lbText,
        isVisible_lbCompanyNo,
        setIsVisible_lbCompanyNo,
        isVisible_medCompanyNo,
        setIsVisible_medCompanyNo,
        isVisible_Static0,
        setIsVisible_Static0,
        isVisible_Static2,
        setIsVisible_Static2,
        tabValue_tabTab1,
        setTabValue_tabTab1,
        Div6_btnAddRow1_OnClick,
        Div6_btnDelRow1_OnClick,
        btnSearchNewZipCode_OnClick,
        btnSearchOldZipCode_OnClick,
        lfn_End,
        lfn_Save,
    };
};