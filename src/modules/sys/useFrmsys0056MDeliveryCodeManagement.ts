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
    SIDO: string;
    ADDR: string;
    BUILDMGNO: string;
    ROADMGNO: string;
}

export interface Ids_oRoadList {
    RBUILDMGNO: string;
    RZIPCD: string;
    RADDR: string;
    ROADPART1: string;
    ROADPART2: string;
    ROADMGNO: string;
}

export interface Ids_iPostAddrDivide {
    ADDR1: string;
    ADDR2: string;
    ZIPCD: string;
}

export interface Ids_oPostAddrDivide {
}

export interface Ids_oRoadDetail {
    ROADMGNO: string;
    RLAWCD: string;
    RSIDONM: string;
    RKUNM: string;
    RLAWDONGNM: string;
    RLAWRINM: string;
    RSANGUBUN: string;
    RMAINBUNJI: string;
    RSUBBUNJI: string;
    RROADNMCD: string;
    RROADNM: string;
    RUNDERGUBUN: string;
    RBUILDMAINNO: string;
    RBUILDSUBNO: string;
    RBUILDNM: string;
    RDETAILBUILDNM: string;
    RBUILDMGNO: string;
    RDONGNO: string;
    RDONGCD: string;
    RDONGNM: string;
    RZIPCD: string;
    RZIPNO: string;
    RLARGEDELIVERY: string;
    RSAUCD: string;
    RCHANGDATE: string;
    RKUBULDNM: string;
    RAPTGUBUN: string;
    RBASICMGNO: string;
    RDETAILADDRGUBUN: string;
    RETC1: string;
    RETC2: string;
    RGUBUN: string;
    RTABMGNO: string;
}

export interface Ids_oAddrGubun {
    CD: string;
    DATA: string;
}

export interface Ids_ioMemberGubun {
    CD: string;
    DATA: string;
}

export const useFrmsys0056MDeliveryCodeManagement = () => {
    const [ds_oPostCode, setds_oPostCode] = useState<Ids_oPostCode[]>([]);
    const [ds_oSido, setds_oSido] = useState<Ids_oSido[]>([]);
    const [ds_oDong, setds_oDong] = useState<Ids_oDong[]>([]);
    const [ds_oRoad, setds_oRoad] = useState<Ids_oRoad[]>([]);
    const [ds_iSearch, setds_iSearch] = useState<Ids_iSearch[]>([]);
    const [ds_oRoadList, setds_oRoadList] = useState<Ids_oRoadList[]>([]);
    const [ds_iPostAddrDivide, setds_iPostAddrDivide] = useState<Ids_iPostAddrDivide[]>([]);
    const [ds_oPostAddrDivide, setds_oPostAddrDivide] = useState<Ids_oPostAddrDivide[]>([]);
    const [ds_oRoadDetail, setds_oRoadDetail] = useState<Ids_oRoadDetail[]>([]);
    const [ds_oAddrGubun, setds_oAddrGubun] = useState<Ids_oAddrGubun[]>([]);
    const [ds_ioMemberGubun, setds_ioMemberGubun] = useState<Ids_ioMemberGubun[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_oPostCode([]);
            setds_oSido([]);
            setds_oDong([]);
            setds_oRoad([]);
            setds_iSearch([]);
            setds_oRoadList([]);
            setds_iPostAddrDivide([]);
            setds_oPostAddrDivide([]);
            setds_oRoadDetail([]);
            setds_oAddrGubun([]);
            setds_ioMemberGubun([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnSave_OnClick = () => {
        console.log('btnSave_OnClick clicked');
    };
    const lfn_Cancel = () => {
        console.log('lfn_Cancel clicked');
    };
    const lfn_End = () => {
        console.log('lfn_End clicked');
    };
    const lfn_ExcelLoad = () => {
        console.log('lfn_ExcelLoad clicked');
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
        ds_oRoadList,
        ds_iPostAddrDivide,
        ds_oPostAddrDivide,
        ds_oRoadDetail,
        ds_oAddrGubun,
        ds_ioMemberGubun,
        btnSave_OnClick,
        lfn_Cancel,
        lfn_End,
        lfn_ExcelLoad,
        lfn_PrintScreen,
    };
};