// @ts-nocheck
import { useState, useEffect } from 'react';

export interface Ids_ioGubun {
    CD: string;
    DATA: string;
}

export interface Ids_ioSunap {
    CD: string;
    DATA: string;
}

export interface Ids_ioJibu {
    CD: string;
    DATA: string;
}

export interface Ids_ioElecApprConnection {
    GYMGNO: string;
    NEW_RECEIVE_DATE: string;
    PROCDATE: string;
    RE_ALI_DOC_ID: string;
    RE_APPROVER_DATE: string;
    RE_APPROVER_KIND: string;
    RE_APPROVER_NAME: string;
    RE_APPROVER_STATUS: string;
    RE_PC_DEPARTMENT: string;
    RE_PC_POSITION: string;
    RECEIVE_DATE: string;
    ROWNUM: string;
}

export interface Ids_oMemberfee1 {
    CNM: string;
    CFMEMBERGUBUN: string;
    CCOURSECD: string;
    SUNAB_CNT: string;
    SUNAB_AMT: string;
    SUNAB1_CNT: string;
    SUNAB1_AMT: string;
    HWANBUL_CNT: string;
    HWANBUL_AMT: string;
    HWANBUL2_CNT: string;
    HWANBUL2_AMT: string;
}

export interface Ids_oMemberfee2 {
}

export interface Ids_oMemberfee3 {
}

export interface Ids_oMemberfee4 {
}

export interface Ids_oMemberfee1_2 {
    CNM: string;
    CFMEMBERGUBUN: string;
    CCOURSECD: string;
    SUNAB_CNT: string;
    SUNAB_AMT: string;
    SUNAB1_CNT: string;
    SUNAB1_AMT: string;
    HWANBUL_CNT: string;
    HWANBUL_AMT: string;
    HWANBUL2_CNT: string;
    HWANBUL2_AMT: string;
}

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