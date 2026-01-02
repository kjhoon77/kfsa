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
    const [isVisible_Div6, setIsVisible_Div6] = useState(true);
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
        isVisible_Div6,
        setIsVisible_Div6,
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