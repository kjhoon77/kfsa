// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_ioGubun, Ids_ioSunap, Ids_ioJibu, Ids_ioElecApprConnection, Ids_oMemberfee1, Ids_oMemberfee2, Ids_oMemberfee3, Ids_oMemberfee4, Ids_oMemberfee1_2 } from './Frmcust2080MDailyFeeReportGatewayData';

export const useFrmcust2080MDailyFeeReportGateway = () => {
    const [ds_ioGubun, setds_ioGubun] = useState<Ids_ioGubun[]>([]);
    const [ds_ioSunap, setds_ioSunap] = useState<Ids_ioSunap[]>([]);
    const [ds_ioJibu, setds_ioJibu] = useState<Ids_ioJibu[]>([]);
    const [ds_ioElecApprConnection, setds_ioElecApprConnection] = useState<Ids_ioElecApprConnection[]>([]);
    const [ds_oMemberfee1, setds_oMemberfee1] = useState<Ids_oMemberfee1[]>([]);
    const [ds_oMemberfee2, setds_oMemberfee2] = useState<Ids_oMemberfee2[]>([]);
    const [ds_oMemberfee3, setds_oMemberfee3] = useState<Ids_oMemberfee3[]>([]);
    const [ds_oMemberfee4, setds_oMemberfee4] = useState<Ids_oMemberfee4[]>([]);
    const [ds_oMemberfee1_2, setds_oMemberfee1_2] = useState<Ids_oMemberfee1_2[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isVisible_divWorkFormTitle, setIsVisible_divWorkFormTitle] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_ioGubun([]);
            setds_ioSunap([]);
            setds_ioJibu([]);
            setds_ioElecApprConnection([]);
            setds_oMemberfee1([]);
            setds_oMemberfee2([]);
            setds_oMemberfee3([]);
            setds_oMemberfee4([]);
            setds_oMemberfee1_2([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnCreateListTotaling_OnClick = () => {
        console.log('btnCreateListTotaling_OnClick clicked');
    };
    const btnCreateListTotaling_part1_OnClick = () => {
        console.log('btnCreateListTotaling_part1_OnClick clicked');
    };
    const btnCreateList_OnClick = () => {
        console.log('btnCreateList_OnClick clicked');
    };
    const btnProcElecApv_OnClick = () => {
        console.log('btnProcElecApv_OnClick clicked');
    };
    const btnSelect_OnClick = () => {
        console.log('btnSelect_OnClick clicked');
    };
    const lfn_Cancel = () => {
        console.log('lfn_Cancel clicked');
    };
    const lfn_End = () => {
        console.log('lfn_End clicked');
    };
    const lfn_PrintScreen = () => {
        console.log('lfn_PrintScreen clicked');
    };
    const lfn_localExcel = () => {
        console.log('lfn_localExcel clicked');
    };

    return {
        isLoading,
        ds_ioGubun,
        ds_ioSunap,
        ds_ioJibu,
        ds_ioElecApprConnection,
        ds_oMemberfee1,
        ds_oMemberfee2,
        ds_oMemberfee3,
        ds_oMemberfee4,
        ds_oMemberfee1_2,
        isVisible_divWorkFormTitle,
        setIsVisible_divWorkFormTitle,
        btnCreateListTotaling_OnClick,
        btnCreateListTotaling_part1_OnClick,
        btnCreateList_OnClick,
        btnProcElecApv_OnClick,
        btnSelect_OnClick,
        lfn_Cancel,
        lfn_End,
        lfn_PrintScreen,
        lfn_localExcel,
    };
};