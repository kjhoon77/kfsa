// @ts-nocheck
import { useState, useEffect } from 'react';

export interface Ids_ioEduPassY {
}

export interface Ids_oCourse {
    CD: string;
    DATA: string;
}

export interface Ids_oJibu {
    CD: string;
    DATA: string;
}

export interface Ids_ioEduPassYCnt {
    ESGTMGNO: string;
    PASSSUM: string;
    ESCOUSECD: string;
    ESEDUORDER: string;
    ESYEAR: string;
}

export interface Ids_ioEduPassN {
    SEL: string;
    TOMGGTMGNO: string;
    TPPASSDATE: string;
    SUMADAY: string;
    TOTCCOURSECD: string;
    TJADDR1: string;
    TJMGNO: string;
    TJPASSYN: string;
    TJPERSONNM: string;
    TOENDDATE_A: string;
    TOHJUBSUNO: string;
    TOMGNO: string;
    TOSTARTDATE_A: string;
    TOEduORDER: string;
    TOYEAR: string;
    TJTPMGNO: string;
    TJADDRGUBUN: string;
    TJRPNUCD: string;
    TJRROADBUILDMGNO: string;
    TJRROADDETAIL: string;
    TJRROADREMAIN: string;
    TJRSANGUBUN: string;
    TJRMAINBUNJI: string;
    TJRSUBBUNJI: string;
    TJRBUILDNM: string;
    TJRADDRETC: string;
    TJRCONVPGM: string;
    TJRCONVSTATUS: string;
}

export interface Ids_EduPassYN {
    CD: string;
    DATA: string;
}

export interface Ids_ioEduPassYlicense1 {
    SEL: string;
    TOMGGTMGNO: string;
    TJADDR1: string;
    TPPASSDATE: string;
    SUMADAY: string;
    TOTCCOURSECD: string;
    TJADDR2: string;
    TJMGNO: string;
    TJPASSYN: string;
    TJPERSONNM: string;
    TOENDDATE: string;
    TOHJUBSUNO: string;
    TOMGNO: string;
    TOSTARTDATE: string;
    TOEduORDER: string;
    TOYEAR: string;
    TJTPMGNO: string;
}

export interface Ids_ioEduPassYlicense2_2 {
    SEL: string;
    TOMGGTMGNO: string;
    TJADDR1: string;
    TPPASSDATE: string;
    SUMADAY: string;
    TOTCCOURSECD: string;
    TJADDR2: string;
    TJMGNO: string;
    TJPASSYN: string;
    TJPERSONNM: string;
    TOENDDATE: string;
    TOHJUBSUNO: string;
    TOMGNO: string;
    TOSTARTDATE: string;
    TOEduORDER: string;
    TOYEAR: string;
    TJTPMGNO: string;
}

export interface Ids_ioEduPassBak {
}

export interface Ids_ioEduPassBak2 {
}

export interface Ids_iEduPass {
    EPCGATEWAYCD: string;
    EPCMGNO: string;
    EPCOURSECD: string;
    EPESMGNO: string;
    EPMGNO: string;
    EPPASSDATE: string;
    EPPERSONNM: string;
    EPPROCGTMGNO: string;
    EPBIRTHDAY: string;
    EPSUCCESSIONGUBUN: string;
    EPYEAR: string;
    FMMGNO: string;
    EPPASSREMARK: string;
    CRECEIVEEXCEPTGUBUN: string;
    SCMGNO: string;
    BIRTHDAY: string;
    EPPERSONKEY: string;
    FSTARTDATE: string;
    FNM: string;
    FPERSONKEY: string;
    CYBERISUGUBUN: string;
    EDUEXPIREDATE: string;
}

export const useFrmcust1095MEduOrderIssueManagement = () => {
    const [ds_ioEduPassY, setds_ioEduPassY] = useState<Ids_ioEduPassY[]>([]);
    const [ds_oCourse, setds_oCourse] = useState<Ids_oCourse[]>([]);
    const [ds_oJibu, setds_oJibu] = useState<Ids_oJibu[]>([]);
    const [ds_ioEduPassYCnt, setds_ioEduPassYCnt] = useState<Ids_ioEduPassYCnt[]>([]);
    const [ds_ioEduPassN, setds_ioEduPassN] = useState<Ids_ioEduPassN[]>([]);
    const [ds_EduPassYN, setds_EduPassYN] = useState<Ids_EduPassYN[]>([]);
    const [ds_ioEduPassYlicense1, setds_ioEduPassYlicense1] = useState<Ids_ioEduPassYlicense1[]>([]);
    const [ds_ioEduPassYlicense2_2, setds_ioEduPassYlicense2_2] = useState<Ids_ioEduPassYlicense2_2[]>([]);
    const [ds_ioEduPassBak, setds_ioEduPassBak] = useState<Ids_ioEduPassBak[]>([]);
    const [ds_ioEduPassBak2, setds_ioEduPassBak2] = useState<Ids_ioEduPassBak2[]>([]);
    const [ds_iEduPass, setds_iEduPass] = useState<Ids_iEduPass[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_ioEduPassY([]);
            setds_oCourse([]);
            setds_oJibu([]);
            setds_ioEduPassYCnt([]);
            setds_ioEduPassN([]);
            setds_EduPassYN([]);
            setds_ioEduPassYlicense1([]);
            setds_ioEduPassYlicense2_2([]);
            setds_ioEduPassBak([]);
            setds_ioEduPassBak2([]);
            setds_iEduPass([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnMutilSort_OnClick = () => {
        console.log('btnMutilSort_OnClick clicked');
    };
    const lfn_Cancel = () => {
        console.log('lfn_Cancel clicked');
    };
    const lfn_End = () => {
        console.log('lfn_End clicked');
    };
    const lfn_PrintScreen = () => {
        console.log('lfn_PrintScreen clicked');
    };
    const lfn_Save = () => {
        console.log('lfn_Save clicked');
    };
    const lfn_Search = () => {
        console.log('lfn_Search clicked');
    };
    const lfn_localExcel = () => {
        console.log('lfn_localExcel clicked');
    };

    return {
        isLoading,
        ds_ioEduPassY,
        ds_oCourse,
        ds_oJibu,
        ds_ioEduPassYCnt,
        ds_ioEduPassN,
        ds_EduPassYN,
        ds_ioEduPassYlicense1,
        ds_ioEduPassYlicense2_2,
        ds_ioEduPassBak,
        ds_ioEduPassBak2,
        ds_iEduPass,
        btnMutilSort_OnClick,
        lfn_Cancel,
        lfn_End,
        lfn_PrintScreen,
        lfn_Save,
        lfn_Search,
        lfn_localExcel,
    };
};