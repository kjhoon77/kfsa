// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_ioBuildingInfo, Ids_oManagerList, Ids_oGubun } from './Frmcust0012PBuildingHistoryData';

export const useFrmcust0012PBuildingHistory = () => {
    const [ds_ioBuildingInfo, setds_ioBuildingInfo] = useState<Ids_ioBuildingInfo[]>([]);
    const [ds_oManagerList, setds_oManagerList] = useState<Ids_oManagerList[]>([]);
    const [ds_oGubun, setds_oGubun] = useState<Ids_oGubun[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_ioBuildingInfo([]);
            setds_oManagerList([]);
            setds_oGubun([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnMutilSort_OnClick = () => {
        console.log('btnMutilSort_OnClick clicked');
    };
    const btnSelect_OnClick = () => {
        console.log('btnSelect_OnClick clicked');
    };
    const btnToExcel_OnClick = () => {
        console.log('btnToExcel_OnClick clicked');
    };
    const lfn_End = () => {
        console.log('lfn_End clicked');
    };
    const lfn_PrintScreen = () => {
        console.log('lfn_PrintScreen clicked');
    };

    return {
        isLoading,
        ds_ioBuildingInfo,
        ds_oManagerList,
        ds_oGubun,
        btnMutilSort_OnClick,
        btnSelect_OnClick,
        btnToExcel_OnClick,
        lfn_End,
        lfn_PrintScreen,
    };
};