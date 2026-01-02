// @ts-nocheck
import { useState, useEffect } from 'react';

export interface Ids_ioChoiceYn {
    CD: string;
    DATA: string;
}

export interface Ids_ioMemberGubun {
    CD: string;
    DATA: string;
}

export interface Ids_ioCourse {
    CD: string;
    DATA: string;
}

export interface Ids_ioJibu {
    CD: string;
    DATA: string;
}

export interface Ids_ioCourseYn {
    CD: string;
    DATA: string;
}

export interface Ids_ioReport {
    CD: string;
    DATA: string;
}

export interface Ids_oEduGubun {
    CD: string;
    DATA: string;
}

export interface Ids_SearchJogeon {
    REPORT_GUBUN: string;
    REPORT_GUBUN_GROUP: string;
    YEAR: string;
    JIBU: string;
    MEMBER_GUBUN: string;
    COURSE_GUBUN: string;
    COURSE: string;
    COURSE1_6IN: string;
    EDUYMD_GUBUN: string;
    EDU_YMD_FR: string;
    EDU_YMD_TO: string;
    EDU_GUBUN: string;
    PRINT_GUBUN1: string;
    PRINT_GUBUN2: string;
    EDUYMDFR: string;
    EDUYMDTO: string;
    EDUGUBUN: string;
    EDU_ORDER: string;
    EDU_ORDERGUBUN: string;
    MINAPGUBUN: string;
    SUCCESSIONGUBUN: string;
}

export interface Ids_EduList {
    GTTEAMNM: string;
    MGNO: string;
    EPPERSONNM: string;
    BIRTHDAY: string;
    ADDR: string;
    BNM: string;
    PASSDATE: string;
    MINAPAMT: string;
    TAJIBU: string;
    CYBERPASSDATE: string;
}

export interface Ids_ioPrintGubun1 {
    CD: string;
    DATA: string;
}

export interface Ids_ioPrintGubun2 {
    CD: string;
    DATA: string;
}

export interface Ids_EduStatistics {
    RCGTMGNO: string;
    RCREGCD: string;
    RCNM: string;
    RCORDERNO: string;
    RCUSEGUBUN: string;
    GTTEAMNM: string;
    CGTMGNO: string;
    GTPRTSEQ: string;
    CGROUPCD: string;
    CGROUPNM: string;
    CREGCD: string;
    EPPASSDATE: string;
    CNT: string;
}

export interface Ids_DayEduStatistics {
    GTPRTSEQ: string;
    GTTEAMNM: string;
    CGROUPCD: string;
    CGROUPNM: string;
    PASSDATE: string;
    NM1: string;
    NM2: string;
    NM3: string;
    NM4: string;
    NM5: string;
    NM6: string;
    NM7: string;
    NM8: string;
    NM9: string;
    NM10: string;
    NM11: string;
    NM12: string;
    NM13: string;
    NM14: string;
    NM15: string;
    NM16: string;
    NM17: string;
    NM18: string;
    NM19: string;
    NM20: string;
    NM21: string;
    NM22: string;
    NM23: string;
    NM24: string;
    NM25: string;
    NM26: string;
    NM27: string;
    NM28: string;
    NM29: string;
    NM30: string;
    NM31: string;
    NM32: string;
    NM33: string;
    NM34: string;
    NM35: string;
    CNT1: string;
    CNT2: string;
    CNT3: string;
    CNT4: string;
    CNT5: string;
    CNT6: string;
    CNT7: string;
    CNT8: string;
    CNT9: string;
    CNT10: string;
    CNT11: string;
    CNT12: string;
    CNT13: string;
    CNT14: string;
    CNT15: string;
    CNT16: string;
    CNT17: string;
    CNT18: string;
    CNT19: string;
    CNT20: string;
    CNT21: string;
    CNT22: string;
    CNT23: string;
    CNT24: string;
    CNT25: string;
    CNT26: string;
    CNT27: string;
    CNT28: string;
    CNT29: string;
    CNT30: string;
    CNT31: string;
    CNT32: string;
    CNT33: string;
    CNT34: string;
    CNT35: string;
    CNTSUM: string;
    NM36: string;
    CNT36: string;
}

export interface Ids_oMinap {
    CD: string;
    DATA: string;
}

export interface Ids_ioSuccessionGubun {
    CD: string;
    DATA: string;
}

export interface Ids_ioProcJibuGubun {
    CD: string;
    DATA: string;
}

export interface Ids_ioEduCyberGubun {
    CD: string;
    DATA: string;
}

export interface Ids_EduAllJibuList {
}

export interface Ids_ioBook {
}

export const useFrmcust1142MProcEduReport = () => {
    const [ds_ioChoiceYn, setds_ioChoiceYn] = useState<Ids_ioChoiceYn[]>([]);
    const [ds_ioMemberGubun, setds_ioMemberGubun] = useState<Ids_ioMemberGubun[]>([]);
    const [ds_ioCourse, setds_ioCourse] = useState<Ids_ioCourse[]>([]);
    const [ds_ioJibu, setds_ioJibu] = useState<Ids_ioJibu[]>([]);
    const [ds_ioCourseYn, setds_ioCourseYn] = useState<Ids_ioCourseYn[]>([]);
    const [ds_ioReport, setds_ioReport] = useState<Ids_ioReport[]>([]);
    const [ds_oEduGubun, setds_oEduGubun] = useState<Ids_oEduGubun[]>([]);
    const [ds_SearchJogeon, setds_SearchJogeon] = useState<Ids_SearchJogeon[]>([]);
    const [ds_EduList, setds_EduList] = useState<Ids_EduList[]>([]);
    const [ds_ioPrintGubun1, setds_ioPrintGubun1] = useState<Ids_ioPrintGubun1[]>([]);
    const [ds_ioPrintGubun2, setds_ioPrintGubun2] = useState<Ids_ioPrintGubun2[]>([]);
    const [ds_EduStatistics, setds_EduStatistics] = useState<Ids_EduStatistics[]>([]);
    const [ds_DayEduStatistics, setds_DayEduStatistics] = useState<Ids_DayEduStatistics[]>([]);
    const [ds_oMinap, setds_oMinap] = useState<Ids_oMinap[]>([]);
    const [ds_ioSuccessionGubun, setds_ioSuccessionGubun] = useState<Ids_ioSuccessionGubun[]>([]);
    const [ds_ioProcJibuGubun, setds_ioProcJibuGubun] = useState<Ids_ioProcJibuGubun[]>([]);
    const [ds_ioEduCyberGubun, setds_ioEduCyberGubun] = useState<Ids_ioEduCyberGubun[]>([]);
    const [ds_EduAllJibuList, setds_EduAllJibuList] = useState<Ids_EduAllJibuList[]>([]);
    const [ds_ioBook, setds_ioBook] = useState<Ids_ioBook[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_ioChoiceYn([]);
            setds_ioMemberGubun([]);
            setds_ioCourse([]);
            setds_ioJibu([]);
            setds_ioCourseYn([]);
            setds_ioReport([]);
            setds_oEduGubun([]);
            setds_SearchJogeon([]);
            setds_EduList([]);
            setds_ioPrintGubun1([]);
            setds_ioPrintGubun2([]);
            setds_EduStatistics([]);
            setds_DayEduStatistics([]);
            setds_oMinap([]);
            setds_ioSuccessionGubun([]);
            setds_ioProcJibuGubun([]);
            setds_ioEduCyberGubun([]);
            setds_EduAllJibuList([]);
            setds_ioBook([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnPrintBookAddr_OnClick = () => {
        console.log('btnPrintBookAddr_OnClick clicked');
    };
    const lfn_Cancel = () => {
        console.log('lfn_Cancel clicked');
    };
    const lfn_End = () => {
        console.log('lfn_End clicked');
    };
    const lfn_Excel2 = () => {
        console.log('lfn_Excel2 clicked');
    };
    const lfn_Print = () => {
        console.log('lfn_Print clicked');
    };
    const radEduOrderGubun_OnClick = () => {
        console.log('radEduOrderGubun_OnClick clicked');
    };

    return {
        isLoading,
        ds_ioChoiceYn,
        ds_ioMemberGubun,
        ds_ioCourse,
        ds_ioJibu,
        ds_ioCourseYn,
        ds_ioReport,
        ds_oEduGubun,
        ds_SearchJogeon,
        ds_EduList,
        ds_ioPrintGubun1,
        ds_ioPrintGubun2,
        ds_EduStatistics,
        ds_DayEduStatistics,
        ds_oMinap,
        ds_ioSuccessionGubun,
        ds_ioProcJibuGubun,
        ds_ioEduCyberGubun,
        ds_EduAllJibuList,
        ds_ioBook,
        btnPrintBookAddr_OnClick,
        lfn_Cancel,
        lfn_End,
        lfn_Excel2,
        lfn_Print,
        radEduOrderGubun_OnClick,
    };
};