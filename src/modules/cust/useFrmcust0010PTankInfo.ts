// @ts-nocheck
import { useState, useEffect } from 'react';

export interface Ids_iLicense {
    LLCSNO: string;
    LCANCELREASON: string;
    LHSEQ: string;
}

export interface Ids_oGubun {
    CD: string;
    DATA: string;
}

export interface Ids_oAddr {
    CD: string;
    DATA: string;
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
    POSTPLACE: string;
    TPARKPLACEADDRGUBUN: string;
    TPARKPLACEROADZIPCD: string;
    TPARKPLACEROADADDR1: string;
    TPARKPLACEROADADDR2: string;
    TINSTLRADDRGUBUN: string;
    TINSTLRROADZIPCD: string;
    TINSTLRROADADDR1: string;
    TINSTLRROADADDR2: string;
    TRPARKPNUCD: string;
    TRPARKROADBUILDMGNO: string;
    TRPARKROADDETAIL: string;
    TRPARKROADREMAIN: string;
    TRPARKSANGUBUN: string;
    TRPARKMAINBUNJI: string;
    TRPARKSUBBUNJI: string;
    TRPARKBUILDNM: string;
    TRPARKADDRETC: string;
    TRINSTLRPNUCD: string;
    TRINSTLRROADBUILDMGNO: string;
    TRINSTLRROADDETAIL: string;
    TRINSTLRROADREMAIN: string;
    TRINSTLRSANGUBUN: string;
    TRINSTLRMAINBUNJI: string;
    TRINSTLRSUBBUNJI: string;
    TRINSTLRBUILDNM: string;
    TRINSTLRADDRETC: string;
    TRCONVPGM: string;
    TRCONVPARKSTATUS: string;
    TRCONVINSTLRSTATUS: string;
}

export const useFrmcust0010PTankInfo = () => {
    const [ds_iLicense, setds_iLicense] = useState<Ids_iLicense[]>([]);
    const [ds_oGubun, setds_oGubun] = useState<Ids_oGubun[]>([]);
    const [ds_oAddr, setds_oAddr] = useState<Ids_oAddr[]>([]);
    const [ds_ioTankInfo, setds_ioTankInfo] = useState<Ids_ioTankInfo[]>([]);
    const [isLoading, setIsLoading] = useState(false);

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
        btnGateWayTank1_OnClick,
        btnGateWayTank2_OnClick,
        btnSearchInstlrZipCode_OnClick,
        btnSearchParkZipCode_OnClick,
        chkAddr_OnClick,
        lfn_End,
        lfn_Save,
    };
};