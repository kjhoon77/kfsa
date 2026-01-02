// @ts-nocheck
import { useState, useEffect } from 'react';

export interface Ids_oAddr {
    CD: string;
    DATA: string;
}

export interface Ids_ioBuildingInfo {
    BADDR1: string;
    BADDR2: string;
    BADDRGUBUN: string;
    BAREA: string;
    BBIZCD: string;
    BBULDADDR: string;
    BBULDNM: string;
    BBUNJI1: string;
    BBUNJI2: string;
    BCONO: string;
    BDONG: string;
    BFAX: string;
    BFIRECD: string;
    BFIREMAN: string;
    BMGNO: string;
    BNM: string;
    BRI: string;
    BROADNM: string;
    BSANGUBUN: string;
    BSIDO: string;
    BSIGUNGU: string;
    BSMOKEGUBUN: string;
    BTEL: string;
    BZIPCD: string;
    BFIREUPCD: string;
    BSEARCHNM: string;
    BROADADDR1: string;
    BROADADDR2: string;
}

export interface Ids_oBizCd {
    CD: string;
    DATA: string;
}

export interface Ids_oBusinessGubun {
    CD: string;
    DATA: string;
}

export interface Ids_ioYn {
    CD: string;
    DATA: string;
}

export interface Ids_ioOwnerInfo {
    OBMGNO: string;
    OGUBUN: string;
    OHPTEL: string;
    ONM: string;
    OREMARK: string;
    OSEQ: string;
    OTEL: string;
}

export interface Ids_ioDangerInfo {
    DBMGNO: string;
    DGATEWAYDAN: string;
    DPERMISSIONNO: string;
    DREMARK: string;
    DSEQ: string;
}

export interface Ids_ioTankInfo {
    TBMGNO: string;
    TCARNO: string;
    TCARYEAR: string;
    TGATEWAYTANK1: string;
    TGATEWAYTANK2: string;
    TINSTLRADDR1: string;
    TINSTLRADDR2: string;
    TINSTLRZIPCD: string;
    TPARKPLACEADDR1: string;
    TPARKPLACEADDR2: string;
    TPARKPLACEZIPCD: string;
    TPERMISSIONNO: string;
    TPOSTREQGUBUN: string;
    TREMARK: string;
    TSEQ: string;
}

export interface Ids_oBuildingSeq {
    SEQ: string;
}

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
        btnSearchNewZipCode_OnClick,
        btnSearchOldZipCode_OnClick,
        lfn_End,
        lfn_Save,
    };
};