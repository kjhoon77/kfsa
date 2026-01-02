// @ts-nocheck
import { useState, useEffect } from 'react';

export interface Ids_oPostCode {
    PMGNO: string;
    PPOSTCD: string;
    PSEQ: string;
    PSIDO: string;
    PKU: string;
    PDONG: string;
    PRI: string;
    PDOSEO: string;
    PSAN: string;
    PSTARTBUNJI: string;
    PENDBUNJI: string;
    PBUILDNM: string;
    PFULLADDR: string;
    PADDR1: string;
}

export interface Ids_oSido {
    CD: string;
    DATA: string;
    JIBUCD: string;
}

export interface Ids_oDong {
    CD: string;
    DATA: string;
}

export interface Ids_oRoad {
    CD: string;
    DATA: string;
}

export interface Ids_iSearch {
    ADDRGUBUN: string;
    SIDO: string;
    DONG: string;
    MNTNGUBUN: string;
    MAINBUNJI: string;
    SUBBUNJI: string;
    ROADNM: string;
    BUILDMAINNO: string;
    BUILDSUBNO: string;
    BUILDMGNO: string;
    BUILDNM: string;
    ZIPCD: string;
}

export interface Ids_oRoadAddr {
    RMBUILDMGNO: string;
    RMLAWCD: string;
    RMKUNM: string;
    RMLAWDONGNM: string;
    RMLAWRINM: string;
    RMMNTNGUBUN: string;
    RMMAINBUNJI: string;
    RMSUBBUNJI: string;
    RMROADNMCD: string;
    RMROADNM: string;
    RMUNDERGUBUN: string;
    RMBUILDMAINNO: string;
    RMBUILDSUBNO: string;
    RMBUILDNM: string;
    RMDETAILBUILDNM: string;
    RMDONGNO: string;
    RMDONGNM: string;
    RMZIPCD: string;
    RMZIPNO: string;
    RMLARGEDELIVERY: string;
    RMSIDONM: string;
    RMADDR1: string;
    RMADDR2: string;
    RMBUILDNO: string;
    RMDONGRI: string;
}

export interface Ids_oRoadList {
    RMBUILDMGNO: string;
    RMLAWCD: string;
    RMKUNM: string;
    RMLAWDONGNM: string;
    RMLAWRINM: string;
    RMMNTNGUBUN: string;
    RMMAINBUNJI: string;
    RMSUBBUNJI: string;
    RMROADNMCD: string;
    RMROADNM: string;
    RMUNDERGUBUN: string;
    RMBUILDMAINNO: string;
    RMBUILDSUBNO: string;
    RMBUILDNM: string;
    RMDETAILBUILDNM: string;
    RMDONGNO: string;
    RMDONGNM: string;
    RMZIPCD: string;
    RMZIPNO: string;
    RMLARGEDELIVERY: string;
    RMSIDONM: string;
    RMADDR1: string;
    RMADDR2: string;
    RMBUILDNO: string;
    RMSIDOKUDONG: string;
}

export interface Ids_iPostAddrDivide {
    ADDR1: string;
    ADDR2: string;
    ZIPCD: string;
}

export interface Ids_oPostAddrDivide {
}

export const useFrmsys0054PAddrSearch = () => {
    const [ds_oPostCode, setds_oPostCode] = useState<Ids_oPostCode[]>([]);
    const [ds_oSido, setds_oSido] = useState<Ids_oSido[]>([]);
    const [ds_oDong, setds_oDong] = useState<Ids_oDong[]>([]);
    const [ds_oRoad, setds_oRoad] = useState<Ids_oRoad[]>([]);
    const [ds_iSearch, setds_iSearch] = useState<Ids_iSearch[]>([]);
    const [ds_oRoadAddr, setds_oRoadAddr] = useState<Ids_oRoadAddr[]>([]);
    const [ds_oRoadList, setds_oRoadList] = useState<Ids_oRoadList[]>([]);
    const [ds_iPostAddrDivide, setds_iPostAddrDivide] = useState<Ids_iPostAddrDivide[]>([]);
    const [ds_oPostAddrDivide, setds_oPostAddrDivide] = useState<Ids_oPostAddrDivide[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_oPostCode([]);
            setds_oSido([]);
            setds_oDong([]);
            setds_oRoad([]);
            setds_iSearch([]);
            setds_oRoadAddr([]);
            setds_oRoadList([]);
            setds_iPostAddrDivide([]);
            setds_oPostAddrDivide([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const TabAddr_tabPost_btnPostApplyCancel_OnClick = () => {
        console.log('TabAddr_tabPost_btnPostApplyCancel_OnClick clicked');
    };
    const TabAddr_tabPost_btnPostApply_OnClick = () => {
        console.log('TabAddr_tabPost_btnPostApply_OnClick clicked');
    };
    const TabAddr_tabPost_btnRoadApplyCancel_OnClick = () => {
        console.log('TabAddr_tabPost_btnRoadApplyCancel_OnClick clicked');
    };
    const TabAddr_tabPost_btnRoadApply_OnClick = () => {
        console.log('TabAddr_tabPost_btnRoadApply_OnClick clicked');
    };
    const TabAddr_tabPost_btnRoadSearch_OnClick = () => {
        console.log('TabAddr_tabPost_btnRoadSearch_OnClick clicked');
    };
    const TabAddr_tabPost_chkPostInput_OnClick = () => {
        console.log('TabAddr_tabPost_chkPostInput_OnClick clicked');
    };
    const TabAddr_tabPost_chkRoadInput_OnClick = () => {
        console.log('TabAddr_tabPost_chkRoadInput_OnClick clicked');
    };
    const TabAddr_tabRoad_btnRoadApplyCancel_OnClick = () => {
        console.log('TabAddr_tabRoad_btnRoadApplyCancel_OnClick clicked');
    };
    const TabAddr_tabRoad_btnRoadApply_OnClick = () => {
        console.log('TabAddr_tabRoad_btnRoadApply_OnClick clicked');
    };
    const TabAddr_tabRoad_btnRoadSearch2_OnClick = () => {
        console.log('TabAddr_tabRoad_btnRoadSearch2_OnClick clicked');
    };
    const TabAddr_tabRoad_chkRoadInput_OnClick = () => {
        console.log('TabAddr_tabRoad_chkRoadInput_OnClick clicked');
    };
    const btnPostCodeSearch_OnClick = () => {
        console.log('btnPostCodeSearch_OnClick clicked');
    };
    const btnSave_OnClick = () => {
        console.log('btnSave_OnClick clicked');
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

    return {
        isLoading,
        ds_oPostCode,
        ds_oSido,
        ds_oDong,
        ds_oRoad,
        ds_iSearch,
        ds_oRoadAddr,
        ds_oRoadList,
        ds_iPostAddrDivide,
        ds_oPostAddrDivide,
        TabAddr_tabPost_btnPostApplyCancel_OnClick,
        TabAddr_tabPost_btnPostApply_OnClick,
        TabAddr_tabPost_btnRoadApplyCancel_OnClick,
        TabAddr_tabPost_btnRoadApply_OnClick,
        TabAddr_tabPost_btnRoadSearch_OnClick,
        TabAddr_tabPost_chkPostInput_OnClick,
        TabAddr_tabPost_chkRoadInput_OnClick,
        TabAddr_tabRoad_btnRoadApplyCancel_OnClick,
        TabAddr_tabRoad_btnRoadApply_OnClick,
        TabAddr_tabRoad_btnRoadSearch2_OnClick,
        TabAddr_tabRoad_chkRoadInput_OnClick,
        btnPostCodeSearch_OnClick,
        btnSave_OnClick,
        lfn_Cancel,
        lfn_End,
        lfn_PrintScreen,
    };
};