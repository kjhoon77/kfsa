// @ts-nocheck
import { useState, useEffect } from 'react';

export interface Ids_ioBuildingInfo {
    BADDR1: string;
    BADDR2: string;
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
    BMODDATE: string;
    BMODSABUN: string;
    BNM: string;
    BPUBGUBUN: string;
    BPUBMGRGUBUN: string;
    BREGDATE: string;
    BRESSABUN: string;
    BRI: string;
    BROADNM: string;
    BSANGUBUN: string;
    BSIDO: string;
    BSIGUNGU: string;
    BSMOKEGUBUN: string;
    BTEL: string;
    BZIPCD: string;
}

export interface Ids_oManagerList {
    CGTMGNO: string;
    CNO: string;
    CREGCD: string;
    CCOURSECD: string;
    CSTATUSGUBUN: string;
    FMNM: string;
    FMBIRTHDAY: string;
    FMHSTARTDATE: string;
    COVERCMGNO: string;
    CFIREMGNO: string;
    BNM: string;
    CCOCD: string;
    BZIPCD: string;
    BADDR1: string;
    BADDR2: string;
    BTEL: string;
    EPPASSDATE: string;
    OLHNM: string;
    CMGNO: string;
    RCNM: string;
    BIRTHDAY: string;
    FMPERSONKEY: string;
}

export interface Ids_oGubun {
    CD: string;
    DATA: string;
}

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