// @ts-nocheck
import { useState, useEffect } from 'react';

export interface Ids_ioYear {
    CD: string;
    DATA: string;
}

export interface Ids_oJibu {
    CD: string;
    DATA: string;
}

export interface Ids_ioChoiceYn {
    CD: string;
    DATA: string;
}

export interface Ids_ioOrder {
    CD: string;
    DATA: string;
}

export interface Ids_ioReport {
    CD: string;
    DATA: string;
}

export interface Ids_ioCourse {
    CD: string;
    DATA: string;
}

export interface Ids_ioCourseYn {
    CD: string;
    DATA: string;
}

export interface Ids_oCustomerModify {
    CCOURSECD: string;
    CTMASDGNO: string;
    CREGCD: string;
    BNASDM: string;
    CNO: string;
    GTTEAMNM: string;
    GTMGNO: string;
    GTPRTSEQ: string;
    BNM: string;
    FMNM: string;
    CREGISTERYYMM: string;
    CFEEYYMM: string;
    CCPROCDATE: string;
    CCCHANGECD: string;
    BADDR1: string;
    BADDR2: string;
    BADDR: string;
    BTEL: string;
    CSTATUSGUBUN: string;
    CCCDNM: string;
    CCOURSE: string;
    CCCD: string;
    CCOLDVAL : string;
    CCNEWVAL : string;
    CNO_BUNHO: string;
    OLDCNICKNM: string;
    OLDRCNM: string;
    CCDELGUBUN: string;
    ADINFO: string;
    NEWCNICKNM: string;
}

export interface Ids_oCustomerModify_A {
    GTTEAMNM: string;
    GTPRTSEQ: string;
    Y_SOGAE: string;
    Y_GONG_1: string;
    Y_GONG_2: string;
    Y_BANG_1: string;
    Y_BANG_2: string;
    Y_DANGER_31: string;
    Y_DANGER_32: string;
    Y_DANGER_33: string;
    Y_DANGER_34: string;
    Y_DANGER_35: string;
    Y_DANGER_36: string;
    Y_SOBANG_51: string;
    Y_SOBANG_52: string;
    Y_SOBANG_53: string;
    Y_SOBANG_54: string;
    Y_SOBANG_55: string;
    Y_GAEIN_61: string;
    Y_DANCHE_71: string;
    N_SOGAE: string;
    N_GONG_1: string;
    N_GONG_2: string;
    N_BANG_1: string;
    N_BANG_2: string;
    N_DANGER_31: string;
    N_DANGER_32: string;
    N_DANGER_33: string;
    N_DANGER_34: string;
    N_DANGER_35: string;
    N_DANGER_36: string;
    N_SOBANG_51: string;
    N_SOBANG_52: string;
    N_SOBANG_53: string;
    N_SOBANG_54: string;
    N_SOBANG_55: string;
    CCCDNM: string;
}

export interface Ids_oRegion {
    CD: string;
    DATA: string;
    GTCD: string;
}

export interface Ids_oCustomerModifyTotal_A {
    GTTEAMNM: string;
    CCOURSECD: string;
    CSTATUSGBUN_GUBUN: string;
    CSTATUSGUBUN_GUBUN_NM: string;
    CGROUPNM: string;
    CNM: string;
    GUBUN_02: string;
    GUBUN_03: string;
    GUBUN_04: string;
    GUBUN_05: string;
    GUBUN_06: string;
    GUBUN_07: string;
    GUBUN_08: string;
    GUBUN_09: string;
    GUBUN_10: string;
    GUBUN_11: string;
    GUBUN_12: string;
    GUBUN_13: string;
    GUBUN_14: string;
    GUBUN_15: string;
    GUBUN_16: string;
    GUBUN_01: string;
}

export interface Ids_ioBusinessType {
    CD: string;
    DATA: string;
}

export const useFrmcust0170MCustomerModifyReport = () => {
    const [ds_ioYear, setds_ioYear] = useState<Ids_ioYear[]>([]);
    const [ds_oJibu, setds_oJibu] = useState<Ids_oJibu[]>([]);
    const [ds_ioChoiceYn, setds_ioChoiceYn] = useState<Ids_ioChoiceYn[]>([]);
    const [ds_ioOrder, setds_ioOrder] = useState<Ids_ioOrder[]>([]);
    const [ds_ioReport, setds_ioReport] = useState<Ids_ioReport[]>([]);
    const [ds_ioCourse, setds_ioCourse] = useState<Ids_ioCourse[]>([]);
    const [ds_ioCourseYn, setds_ioCourseYn] = useState<Ids_ioCourseYn[]>([]);
    const [ds_oCustomerModify, setds_oCustomerModify] = useState<Ids_oCustomerModify[]>([]);
    const [ds_oCustomerModify_A, setds_oCustomerModify_A] = useState<Ids_oCustomerModify_A[]>([]);
    const [ds_oRegion, setds_oRegion] = useState<Ids_oRegion[]>([]);
    const [ds_oCustomerModifyTotal_A, setds_oCustomerModifyTotal_A] = useState<Ids_oCustomerModifyTotal_A[]>([]);
    const [ds_ioBusinessType, setds_ioBusinessType] = useState<Ids_ioBusinessType[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_ioYear([]);
            setds_oJibu([]);
            setds_ioChoiceYn([]);
            setds_ioOrder([]);
            setds_ioReport([]);
            setds_ioCourse([]);
            setds_ioCourseYn([]);
            setds_oCustomerModify([]);
            setds_oCustomerModify_A([]);
            setds_oRegion([]);
            setds_oCustomerModifyTotal_A([]);
            setds_ioBusinessType([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const lfn_Cancel = () => {
        console.log('lfn_Cancel clicked');
    };
    const lfn_End = () => {
        console.log('lfn_End clicked');
    };
    const lfn_Excel = () => {
        console.log('lfn_Excel clicked');
    };
    const lfn_Print = () => {
        console.log('lfn_Print clicked');
    };

    return {
        isLoading,
        ds_ioYear,
        ds_oJibu,
        ds_ioChoiceYn,
        ds_ioOrder,
        ds_ioReport,
        ds_ioCourse,
        ds_ioCourseYn,
        ds_oCustomerModify,
        ds_oCustomerModify_A,
        ds_oRegion,
        ds_oCustomerModifyTotal_A,
        ds_ioBusinessType,
        lfn_Cancel,
        lfn_End,
        lfn_Excel,
        lfn_Print,
    };
};