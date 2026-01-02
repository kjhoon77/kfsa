// @ts-nocheck
import { useState, useEffect } from 'react';

export interface Ids_ioGubun1 {
    CD: string;
    DATA: string;
}

export interface Ids_ioGubun2 {
    CD: string;
    DATA: string;
}

export interface Ids_ioGubun3 {
    CD: string;
    DATA: string;
}

export interface Ids_oHMinwonCallList {
}

export interface Ids_ioMinwonCall {
    MWMGNO: string;
    MWRECVTEL: string;
    MWNM: string;
    MWHP: string;
    MWTEL: string;
    MWMAIL: string;
    MWFAX: string;
    MWPERSONKEY: string;
    MWGUBUN: string;
    MWREMARK: string;
    IPSABUN: string;
    CIMGNO: string;
    CIMWMGNO: string;
    CIDATE: string;
    CIKEMS: string;
    CIPROCGUBUN: string;
    CICALLBACKTEL: string;
    CISTATUS: string;
    CIGRCD: string;
    CICD: string;
    CICONENTS: string;
    CHG_MWMGNO: string;
    CICALLGUBUN: string;
    CICALLDN: string;
    CIREMOTEGUBUN: string;
    CIREMOTESABUN: string;
    CIREMOTESTATUS: string;
    CIREMOTEGUBUNYN: string;
}

export interface Ids_oMinwonCallList {
}

export interface Ids_oCallCode {
}

export interface Ids_oCallCode1Cha {
}

export interface Ids_oCallCode2Cha {
}

export interface Ids_oResult {
    O_MWMGNO_SEQ: string;
    O_CIMGNO_SEQ: string;
}

export interface Ids_iSearhGubun {
    CD: string;
    DATA: string;
}

export interface Ids_oHMinwonCallRow {
}

export interface Ids_ioUserList {
}

export interface Ids_ioDeptList {
}

export interface Ids_oCallCode1ChaH1 {
}

export interface Ids_oCallCode2ChaH1 {
}

export interface Ids_oCallCode1ChaH2 {
}

export interface Ids_oCallCode2ChaH2 {
}

export interface Ids_oMinwonTemp {
}

export interface Ids_ioGubun4 {
    CD: string;
    DATA: string;
}

export interface Ids_ioGubun1S {
    CD: string;
    DATA: string;
}

export interface Ids_ioGubun2S {
    CD: string;
    DATA: string;
}

export interface Ids_ioGubun5 {
    CD: string;
    DATA: string;
}

export interface Ids_ioGubun6 {
    CD: string;
    DATA: string;
}

export interface Ids_oRemoteUser {
}

export const useFrmcti0010SMinwonCallJubsu = () => {
    const [ds_ioGubun1, setds_ioGubun1] = useState<Ids_ioGubun1[]>([]);
    const [ds_ioGubun2, setds_ioGubun2] = useState<Ids_ioGubun2[]>([]);
    const [ds_ioGubun3, setds_ioGubun3] = useState<Ids_ioGubun3[]>([]);
    const [ds_oHMinwonCallList, setds_oHMinwonCallList] = useState<Ids_oHMinwonCallList[]>([]);
    const [ds_ioMinwonCall, setds_ioMinwonCall] = useState<Ids_ioMinwonCall[]>([]);
    const [ds_oMinwonCallList, setds_oMinwonCallList] = useState<Ids_oMinwonCallList[]>([]);
    const [ds_oCallCode, setds_oCallCode] = useState<Ids_oCallCode[]>([]);
    const [ds_oCallCode1Cha, setds_oCallCode1Cha] = useState<Ids_oCallCode1Cha[]>([]);
    const [ds_oCallCode2Cha, setds_oCallCode2Cha] = useState<Ids_oCallCode2Cha[]>([]);
    const [ds_oResult, setds_oResult] = useState<Ids_oResult[]>([]);
    const [ds_iSearhGubun, setds_iSearhGubun] = useState<Ids_iSearhGubun[]>([]);
    const [ds_oHMinwonCallRow, setds_oHMinwonCallRow] = useState<Ids_oHMinwonCallRow[]>([]);
    const [ds_ioUserList, setds_ioUserList] = useState<Ids_ioUserList[]>([]);
    const [ds_ioDeptList, setds_ioDeptList] = useState<Ids_ioDeptList[]>([]);
    const [ds_oCallCode1ChaH1, setds_oCallCode1ChaH1] = useState<Ids_oCallCode1ChaH1[]>([]);
    const [ds_oCallCode2ChaH1, setds_oCallCode2ChaH1] = useState<Ids_oCallCode2ChaH1[]>([]);
    const [ds_oCallCode1ChaH2, setds_oCallCode1ChaH2] = useState<Ids_oCallCode1ChaH2[]>([]);
    const [ds_oCallCode2ChaH2, setds_oCallCode2ChaH2] = useState<Ids_oCallCode2ChaH2[]>([]);
    const [ds_oMinwonTemp, setds_oMinwonTemp] = useState<Ids_oMinwonTemp[]>([]);
    const [ds_ioGubun4, setds_ioGubun4] = useState<Ids_ioGubun4[]>([]);
    const [ds_ioGubun1S, setds_ioGubun1S] = useState<Ids_ioGubun1S[]>([]);
    const [ds_ioGubun2S, setds_ioGubun2S] = useState<Ids_ioGubun2S[]>([]);
    const [ds_ioGubun5, setds_ioGubun5] = useState<Ids_ioGubun5[]>([]);
    const [ds_ioGubun6, setds_ioGubun6] = useState<Ids_ioGubun6[]>([]);
    const [ds_oRemoteUser, setds_oRemoteUser] = useState<Ids_oRemoteUser[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_ioGubun1([]);
            setds_ioGubun2([]);
            setds_ioGubun3([]);
            setds_oHMinwonCallList([]);
            setds_ioMinwonCall([]);
            setds_oMinwonCallList([]);
            setds_oCallCode([]);
            setds_oCallCode1Cha([]);
            setds_oCallCode2Cha([]);
            setds_oResult([]);
            setds_iSearhGubun([]);
            setds_oHMinwonCallRow([]);
            setds_ioUserList([]);
            setds_ioDeptList([]);
            setds_oCallCode1ChaH1([]);
            setds_oCallCode2ChaH1([]);
            setds_oCallCode1ChaH2([]);
            setds_oCallCode2ChaH2([]);
            setds_oMinwonTemp([]);
            setds_ioGubun4([]);
            setds_ioGubun1S([]);
            setds_ioGubun2S([]);
            setds_ioGubun5([]);
            setds_ioGubun6([]);
            setds_oRemoteUser([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnExcel_OnClick = () => {
        console.log('btnExcel_OnClick clicked');
    };
    const btnMinwon_OnClick = () => {
        console.log('btnMinwon_OnClick clicked');
    };
    const btnSave_OnClick = () => {
        console.log('btnSave_OnClick clicked');
    };
    const fn_init = () => {
        console.log('fn_init clicked');
    };
    const tab_minwonH_btnCall_OnClick = () => {
        console.log('tab_minwonH_btnCall_OnClick clicked');
    };
    const tab_minwonH_btnChgMinwon_OnClick = () => {
        console.log('tab_minwonH_btnChgMinwon_OnClick clicked');
    };
    const tab_minwonH_btnDeleteH_OnClick = () => {
        console.log('tab_minwonH_btnDeleteH_OnClick clicked');
    };
    const tab_minwonH_btnExcel_OnClick = () => {
        console.log('tab_minwonH_btnExcel_OnClick clicked');
    };
    const tab_minwonH_btnSaveEnable_OnClick = () => {
        console.log('tab_minwonH_btnSaveEnable_OnClick clicked');
    };
    const tab_minwonH_btnSaveH_OnClick = () => {
        console.log('tab_minwonH_btnSaveH_OnClick clicked');
    };
    const tab_minwonH_btnSearch_OnClick = () => {
        console.log('tab_minwonH_btnSearch_OnClick clicked');
    };
    const tab_minwonH_imgLogSend_OnClick = () => {
        console.log('tab_minwonH_imgLogSend_OnClick clicked');
    };
    const tab_tabJubsu_btnEnableCIKEMS_OnClick = () => {
        console.log('tab_tabJubsu_btnEnableCIKEMS_OnClick clicked');
    };
    const tab_tabJubsu_btnEnableMWNM_OnClick = () => {
        console.log('tab_tabJubsu_btnEnableMWNM_OnClick clicked');
    };

    return {
        isLoading,
        ds_ioGubun1,
        ds_ioGubun2,
        ds_ioGubun3,
        ds_oHMinwonCallList,
        ds_ioMinwonCall,
        ds_oMinwonCallList,
        ds_oCallCode,
        ds_oCallCode1Cha,
        ds_oCallCode2Cha,
        ds_oResult,
        ds_iSearhGubun,
        ds_oHMinwonCallRow,
        ds_ioUserList,
        ds_ioDeptList,
        ds_oCallCode1ChaH1,
        ds_oCallCode2ChaH1,
        ds_oCallCode1ChaH2,
        ds_oCallCode2ChaH2,
        ds_oMinwonTemp,
        ds_ioGubun4,
        ds_ioGubun1S,
        ds_ioGubun2S,
        ds_ioGubun5,
        ds_ioGubun6,
        ds_oRemoteUser,
        btnExcel_OnClick,
        btnMinwon_OnClick,
        btnSave_OnClick,
        fn_init,
        tab_minwonH_btnCall_OnClick,
        tab_minwonH_btnChgMinwon_OnClick,
        tab_minwonH_btnDeleteH_OnClick,
        tab_minwonH_btnExcel_OnClick,
        tab_minwonH_btnSaveEnable_OnClick,
        tab_minwonH_btnSaveH_OnClick,
        tab_minwonH_btnSearch_OnClick,
        tab_minwonH_imgLogSend_OnClick,
        tab_tabJubsu_btnEnableCIKEMS_OnClick,
        tab_tabJubsu_btnEnableMWNM_OnClick,
    };
};