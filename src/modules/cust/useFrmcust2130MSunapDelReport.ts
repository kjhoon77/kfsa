// @ts-nocheck
import { useState, useEffect } from 'react';

export interface Ids_oJibu {
    CD: string;
    DATA: string;
}

export interface Ids_SunapDelList {
}

export interface Ids_SearchJogeon {
    JIBU: string;
    SUNAP_YMD_FR: string;
    SUNAP_YMD_TO: string;
    CANCEL_YMD_FR: string;
    CANCEL_YMD_TO: string;
    YEAR: string;
}

export interface Ids_SunapDelExcelList {
    GTTEAMNM: string;
    CGROUPNM: string;
    CNM: string;
    CNO: string;
    BNM: string;
    FMNM: string;
    FMHSTARTDATE: string;
    CFPROCDATE: string;
    CFPROCAMOUNT: string;
    CDELDATE: string;
    BADDR: string;
    BTEL: string;
}

export const useFrmcust2130MSunapDelReport = () => {
    const [ds_oJibu, setds_oJibu] = useState<Ids_oJibu[]>([]);
    const [ds_SunapDelList, setds_SunapDelList] = useState<Ids_SunapDelList[]>([]);
    const [ds_SearchJogeon, setds_SearchJogeon] = useState<Ids_SearchJogeon[]>([]);
    const [ds_SunapDelExcelList, setds_SunapDelExcelList] = useState<Ids_SunapDelExcelList[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_oJibu([]);
            setds_SunapDelList([]);
            setds_SearchJogeon([]);
            setds_SunapDelExcelList([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnToExcel_OnClick = () => {
        console.log('btnToExcel_OnClick clicked');
    };
    const lfn_Cancel = () => {
        console.log('lfn_Cancel clicked');
    };
    const lfn_End = () => {
        console.log('lfn_End clicked');
    };
    const lfn_Print = () => {
        console.log('lfn_Print clicked');
    };

    return {
        isLoading,
        ds_oJibu,
        ds_SunapDelList,
        ds_SearchJogeon,
        ds_SunapDelExcelList,
        btnToExcel_OnClick,
        lfn_Cancel,
        lfn_End,
        lfn_Print,
    };
};