// @ts-nocheck
import { useState, useEffect } from 'react';

export interface Ids_ioBuildingInfo {
    BMGNO: string;
    BNM: string;
    BBIZCD: string;
    BFIREUPCD: string;
    BFIRECD: string;
    BFIREMAN: string;
    BTEL: string;
    BFAX: string;
    BSMOKEGUBUN: string;
    BAREA: string;
    BCONO: string;
    BADDRGUBUN: string;
    BZIPCD: string;
    BADDR1: string;
    BADDR2: string;
    BSIDO: string;
    BSIGUNGU: string;
    BDONG: string;
    BRI: string;
    BSANGUBUN: string;
    BBUNJI1: string;
    BBUNJI2: string;
    BROADNM: string;
    BBULDNM: string;
    BBULDADDR: string;
    ADDR: string;
}

export interface Ids_oCustomerList {
    BADDR1: string;
    BADDR2: string;
    BNM: string;
    BTEL: string;
    BZIPCD: string;
    CCOCD: string;
    CCOURSECD: string;
    CFIREMGNO: string;
    CGTMGNO: string;
    CNO: string;
    COVERCMGNO: string;
    CREGCD: string;
    CSTATUSGUBUN: string;
    EPPASSDATE: string;
    FMHSTARTDATE: string;
    FMNM: string;
    FMBIRTHDAY: string;
    OLHNM: string;
    CMGNO: string;
    CFEEADDRGUBUN: string;
    CEDUADDRGUBUN: string;
    BIRTHDAY: string;
    FMPERSONKEY: string;
}

export interface Ids_oStatus {
    RETURN: string;
    OUT: string;
}

export const useFrmcust0010PbuildingChange = () => {
    const [ds_ioBuildingInfo, setds_ioBuildingInfo] = useState<Ids_ioBuildingInfo[]>([]);
    const [ds_oCustomerList, setds_oCustomerList] = useState<Ids_oCustomerList[]>([]);
    const [ds_oStatus, setds_oStatus] = useState<Ids_oStatus[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_ioBuildingInfo([]);
            setds_oCustomerList([]);
            setds_oStatus([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnNewBuilding_OnClick = () => {
        console.log('btnNewBuilding_OnClick clicked');
    };
    const btnSave_OnClick = () => {
        console.log('btnSave_OnClick clicked');
    };
    const lfn_End = () => {
        console.log('lfn_End clicked');
    };
    const lfn_Search = () => {
        console.log('lfn_Search clicked');
    };
    const lfn_SearchBuilding = () => {
        console.log('lfn_SearchBuilding clicked');
    };

    return {
        isLoading,
        ds_ioBuildingInfo,
        ds_oCustomerList,
        ds_oStatus,
        btnNewBuilding_OnClick,
        btnSave_OnClick,
        lfn_End,
        lfn_Search,
        lfn_SearchBuilding,
    };
};