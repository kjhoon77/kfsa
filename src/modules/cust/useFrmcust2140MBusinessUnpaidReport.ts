// @ts-nocheck
import { useState, useEffect } from 'react';

export interface Ids_ioChoiceYn {
    CD: string;
    DATA: string;
}

export interface Ids_ioCourse {
    CD: string;
    DATA: string;
}

export interface Ids_ioOrder {
    CD: string;
    DATA: string;
}

export interface Ids_ioCourseYn {
    CD: string;
    DATA: string;
}

export interface Ids_oRegion {
    CD: string;
    DATA: string;
    GTCD: string;
}

export interface Ids_oJibu {
    CD: string;
    DATA: string;
}

export interface Ids_UnpaidCompnm {
    CMGNO: string;
    CGTMGNO: string;
    JIFULLNM: string;
    RCREGCD: string;
    RCNM: string;
    CCOURSECD: string;
    CNM: string;
    CNO: string;
    BNM: string;
    YEAR3: string;
    YEAR2: string;
    YEAR1: string;
    YEAR0: string;
    CNT3: string;
    CNT2: string;
    CNT1: string;
    CNT0: string;
    AMT3: string;
    AMT2: string;
    AMT1: string;
    AMT0: string;
    AMT: string;
    BTEL: string;
    BADDR: string;
}

export interface Ids_SearchJogeon {
    JIBU: string;
    REGION_GUBUN: string;
    REGION1: string;
    REGION2: string;
    COURSE_GUBUN: string;
    COURSE: string;
    COURSE_IN: string;
    MGNO_GUBUN: string;
    MGNO1: string;
    MGNO2: string;
    MINAP_CNT: string;
    ORDER_GUBUN: string;
    EXCEL_GUBUN: string;
}

export interface Ids_Year {
    CD: string;
    DATA: string;
}

export const useFrmcust2140MBusinessUnpaidReport = () => {
    const [ds_ioChoiceYn, setds_ioChoiceYn] = useState<Ids_ioChoiceYn[]>([]);
    const [ds_ioCourse, setds_ioCourse] = useState<Ids_ioCourse[]>([]);
    const [ds_ioOrder, setds_ioOrder] = useState<Ids_ioOrder[]>([]);
    const [ds_ioCourseYn, setds_ioCourseYn] = useState<Ids_ioCourseYn[]>([]);
    const [ds_oRegion, setds_oRegion] = useState<Ids_oRegion[]>([]);
    const [ds_oJibu, setds_oJibu] = useState<Ids_oJibu[]>([]);
    const [ds_UnpaidCompnm, setds_UnpaidCompnm] = useState<Ids_UnpaidCompnm[]>([]);
    const [ds_SearchJogeon, setds_SearchJogeon] = useState<Ids_SearchJogeon[]>([]);
    const [ds_Year, setds_Year] = useState<Ids_Year[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_ioChoiceYn([]);
            setds_ioCourse([]);
            setds_ioOrder([]);
            setds_ioCourseYn([]);
            setds_oRegion([]);
            setds_oJibu([]);
            setds_UnpaidCompnm([]);
            setds_SearchJogeon([]);
            setds_Year([]);
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
        ds_ioChoiceYn,
        ds_ioCourse,
        ds_ioOrder,
        ds_ioCourseYn,
        ds_oRegion,
        ds_oJibu,
        ds_UnpaidCompnm,
        ds_SearchJogeon,
        ds_Year,
        btnToExcel_OnClick,
        lfn_Cancel,
        lfn_End,
        lfn_Print,
    };
};