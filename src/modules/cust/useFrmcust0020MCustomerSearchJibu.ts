// @ts-nocheck
import { useState, useEffect } from 'react';

export interface Ids_oCourse {
    CD: string;
    DATA: string;
}

export interface Ids_ioChoiceYn {
    CD: string;
    DATA: string;
}

export interface Ids_ioCourseYn {
    CD: string;
    DATA: string;
}

export interface Ids_oJibu {
    CD: string;
    DATA: string;
}

export interface Ids_SearchJogeon {
    JIBU: string;
    CUST_NM: string;
    PERSON_NM: string;
    PERSONKEY: string;
    COURSE_GUBUN: string;
    CUST_GUBUN: string;
    PERSON_GUBUN: string;
    BIRTHDAY: string;
}

export interface Ids_CustomerList {
    GTDEPTNM: string;
    CNO: string;
    BNM: string;
    FMNM: string;
    BIRTHDAY: string;
    MADDR: string;
    CGROUPNM: string;
    TEL: string;
    CREGISTERYY: string;
    CFEEYY: string;
    COVERYN: string;
    COVERCNO: string;
    CMGNO: string;
    CMINAP: string;
    CGTMGNO: string;
    SCNO: string;
    FMPERSONKEY: string;
    FMBIRTHDAY: string;
}

export interface Ids_oEduStudentGubun {
    CD: string;
    DATA: string;
}

export interface Ids_oEduGubun {
    CD: string;
    DATA: string;
}

export interface Ids_ioCustomerFeeInfo {
}

export interface Ids_oFee {
    CFCCGUBUN: string;
    CFCCGUBUNCD: string;
    CFGYEAR: string;
    MINAPFEE: string;
    SUNAPFEE: string;
}

export interface Ids_oAdditionInfo {
    CD: string;
    DATA: string;
}

export interface Ids_ioEducationPassInfo {
    BNM: string;
    CNO: string;
    EPPASSDATE: string;
    EPPERSONNM: string;
    EPPROCGTMGNO: string;
    EPBIRTHDAY: string;
    EPSUCCESSIONGUBUN: string;
    EPYEAR: string;
    ESGUBUN: string;
    ESSTUDENT: string;
    BIRTHDAY: string;
    EPPERSONKEY: string;
}

export interface Ids_oEduSuccessGubun {
    CD: string;
    DATA: string;
}

export const useFrmcust0020MCustomerSearchJibu = () => {
    const [ds_oCourse, setds_oCourse] = useState<Ids_oCourse[]>([]);
    const [ds_ioChoiceYn, setds_ioChoiceYn] = useState<Ids_ioChoiceYn[]>([]);
    const [ds_ioCourseYn, setds_ioCourseYn] = useState<Ids_ioCourseYn[]>([]);
    const [ds_oJibu, setds_oJibu] = useState<Ids_oJibu[]>([]);
    const [ds_SearchJogeon, setds_SearchJogeon] = useState<Ids_SearchJogeon[]>([]);
    const [ds_CustomerList, setds_CustomerList] = useState<Ids_CustomerList[]>([]);
    const [ds_oEduStudentGubun, setds_oEduStudentGubun] = useState<Ids_oEduStudentGubun[]>([]);
    const [ds_oEduGubun, setds_oEduGubun] = useState<Ids_oEduGubun[]>([]);
    const [ds_ioCustomerFeeInfo, setds_ioCustomerFeeInfo] = useState<Ids_ioCustomerFeeInfo[]>([]);
    const [ds_oFee, setds_oFee] = useState<Ids_oFee[]>([]);
    const [ds_oAdditionInfo, setds_oAdditionInfo] = useState<Ids_oAdditionInfo[]>([]);
    const [ds_ioEducationPassInfo, setds_ioEducationPassInfo] = useState<Ids_ioEducationPassInfo[]>([]);
    const [ds_oEduSuccessGubun, setds_oEduSuccessGubun] = useState<Ids_oEduSuccessGubun[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_oCourse([]);
            setds_ioChoiceYn([]);
            setds_ioCourseYn([]);
            setds_oJibu([]);
            setds_SearchJogeon([]);
            setds_CustomerList([]);
            setds_oEduStudentGubun([]);
            setds_oEduGubun([]);
            setds_ioCustomerFeeInfo([]);
            setds_oFee([]);
            setds_oAdditionInfo([]);
            setds_ioEducationPassInfo([]);
            setds_oEduSuccessGubun([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnBarCodeSearch_OnClick = () => {
        console.log('btnBarCodeSearch_OnClick clicked');
    };
    const btnExcell_OnClick = () => {
        console.log('btnExcell_OnClick clicked');
    };
    const btnFeeDetailInfo1_OnClick = () => {
        console.log('btnFeeDetailInfo1_OnClick clicked');
    };
    const btnMutilSort_OnClick = () => {
        console.log('btnMutilSort_OnClick clicked');
    };
    const lfn_End = () => {
        console.log('lfn_End clicked');
    };
    const lfn_PrintScreen = () => {
        console.log('lfn_PrintScreen clicked');
    };
    const lfn_Search = () => {
        console.log('lfn_Search clicked');
    };

    return {
        isLoading,
        ds_oCourse,
        ds_ioChoiceYn,
        ds_ioCourseYn,
        ds_oJibu,
        ds_SearchJogeon,
        ds_CustomerList,
        ds_oEduStudentGubun,
        ds_oEduGubun,
        ds_ioCustomerFeeInfo,
        ds_oFee,
        ds_oAdditionInfo,
        ds_ioEducationPassInfo,
        ds_oEduSuccessGubun,
        btnBarCodeSearch_OnClick,
        btnExcell_OnClick,
        btnFeeDetailInfo1_OnClick,
        btnMutilSort_OnClick,
        lfn_End,
        lfn_PrintScreen,
        lfn_Search,
    };
};