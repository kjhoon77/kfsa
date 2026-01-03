// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_ioGubun1, Ids_ioGubun2, Ids_ioGubun3, Ids_oHMinwonCallList, Ids_ioMinwonCall, Ids_oMinwonCallList, Ids_oCallCode, Ids_oCallCode1Cha, Ids_oCallCode2Cha, Ids_oResult, Ids_iSearhGubun, Ids_oHMinwonCallRow, Ids_ioUserList, Ids_ioDeptList, Ids_oCallCode1ChaH1, Ids_oCallCode2ChaH1, Ids_oCallCode1ChaH2, Ids_oCallCode2ChaH2, Ids_oMinwonTemp, Ids_ioGubun4, Ids_ioGubun1S, Ids_ioGubun2S, Ids_ioGubun5, Ids_ioGubun6, Ids_oRemoteUser } from './Frmcti0010SMinwonCallJubsuData';

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
    const [isVisible_tab, setIsVisible_tab] = useState(true);
    const [isVisible_Shape2, setIsVisible_Shape2] = useState(true);
    const [isVisible_Shape1, setIsVisible_Shape1] = useState(true);
    const [isVisible_Shape7, setIsVisible_Shape7] = useState(true);
    const [isVisible_Static16, setIsVisible_Static16] = useState(true);
    const [isVisible_Static0, setIsVisible_Static0] = useState(true);
    const [isVisible_Static1, setIsVisible_Static1] = useState(true);
    const [isVisible_Static2, setIsVisible_Static2] = useState(true);
    const [isVisible_Static3, setIsVisible_Static3] = useState(true);
    const [isVisible_Static4, setIsVisible_Static4] = useState(true);
    const [isVisible_Static5, setIsVisible_Static5] = useState(true);
    const [isVisible_Static6, setIsVisible_Static6] = useState(true);
    const [isVisible_Static7, setIsVisible_Static7] = useState(true);
    const [isVisible_Static8, setIsVisible_Static8] = useState(true);
    const [isVisible_Static9, setIsVisible_Static9] = useState(true);
    const [isVisible_Static10, setIsVisible_Static10] = useState(true);
    const [isVisible_Static11, setIsVisible_Static11] = useState(true);
    const [isVisible_Static12, setIsVisible_Static12] = useState(true);
    const [isVisible_Static13, setIsVisible_Static13] = useState(true);
    const [isVisible_edMWHP, setIsVisible_edMWHP] = useState(true);
    const [isVisible_edMWFAX, setIsVisible_edMWFAX] = useState(true);
    const [isVisible_edCIKEMS, setIsVisible_edCIKEMS] = useState(true);
    const [isVisible_radCIPROCGUBUN, setIsVisible_radCIPROCGUBUN] = useState(true);
    const [isVisible_cbxCIGRCD, setIsVisible_cbxCIGRCD] = useState(true);
    const [isVisible_cbxCICD, setIsVisible_cbxCICD] = useState(true);
    const [isVisible_edCICALLBACKTEL, setIsVisible_edCICALLBACKTEL] = useState(true);
    const [isVisible_edMWNM, setIsVisible_edMWNM] = useState(true);
    const [isVisible_edMWTEL, setIsVisible_edMWTEL] = useState(true);
    const [isVisible_edMWPERSONKEY, setIsVisible_edMWPERSONKEY] = useState(true);
    const [isVisible_radMWGUBUN, setIsVisible_radMWGUBUN] = useState(true);
    const [isVisible_taMWREMARK, setIsVisible_taMWREMARK] = useState(true);
    const [isVisible_gdCallList, setIsVisible_gdCallList] = useState(true);
    const [isVisible_btnSave, setIsVisible_btnSave] = useState(true);
    const [isVisible_btnCustomer, setIsVisible_btnCustomer] = useState(true);
    const [isVisible_btnInit, setIsVisible_btnInit] = useState(true);
    const [isVisible_Shape0, setIsVisible_Shape0] = useState(true);
    const [isVisible_btnExcel, setIsVisible_btnExcel] = useState(true);
    const [isVisible_Static14, setIsVisible_Static14] = useState(true);
    const [isVisible_edMWMAIL, setIsVisible_edMWMAIL] = useState(true);
    const [isVisible_radCISTATUS, setIsVisible_radCISTATUS] = useState(true);
    const [isVisible_lbMWMGNO, setIsVisible_lbMWMGNO] = useState(false);
    const [isVisible_edMWMGNO, setIsVisible_edMWMGNO] = useState(false);
    const [isVisible_lbCIMGNO, setIsVisible_lbCIMGNO] = useState(false);
    const [isVisible_edCIMGNO, setIsVisible_edCIMGNO] = useState(false);
    const [isVisible_medCIDATE, setIsVisible_medCIDATE] = useState(true);
    const [isVisible_lbInfomsg, setIsVisible_lbInfomsg] = useState(true);
    const [isVisible_Static18, setIsVisible_Static18] = useState(true);
    const [isVisible_taCICONENTS1, setIsVisible_taCICONENTS1] = useState(true);
    const [isVisible_Static19, setIsVisible_Static19] = useState(true);
    const [isVisible_edMWRECVTEL, setIsVisible_edMWRECVTEL] = useState(true);
    const [isVisible_edSearchMinwon, setIsVisible_edSearchMinwon] = useState(false);
    const [isVisible_edCICALLGUBUN, setIsVisible_edCICALLGUBUN] = useState(false);
    const [isVisible_edCICALLDN, setIsVisible_edCICALLDN] = useState(false);
    const [isVisible_taCICONENTS, setIsVisible_taCICONENTS] = useState(true);
    const [isVisible_lbCICALLGUBUN, setIsVisible_lbCICALLGUBUN] = useState(false);
    const [isVisible_lbCICALLDN, setIsVisible_lbCICALLDN] = useState(false);
    const [isVisible_btnEnableCIKEMS, setIsVisible_btnEnableCIKEMS] = useState(true);
    const [isVisible_btnEnableMWNM, setIsVisible_btnEnableMWNM] = useState(true);
    const [isVisible_Static15, setIsVisible_Static15] = useState(true);
    const [isVisible_radCIREMOTEGUBUN, setIsVisible_radCIREMOTEGUBUN] = useState(true);
    const [isVisible_Shape5, setIsVisible_Shape5] = useState(true);
    const [isVisible_Static20, setIsVisible_Static20] = useState(true);
    const [isVisible_Static17, setIsVisible_Static17] = useState(true);
    const [isVisible_edCIDATEFrom, setIsVisible_edCIDATEFrom] = useState(true);
    const [isVisible_edCIDATETo, setIsVisible_edCIDATETo] = useState(true);
    const [isVisible_cbxCIGRCDS, setIsVisible_cbxCIGRCDS] = useState(true);
    const [isVisible_cbxCICDS, setIsVisible_cbxCICDS] = useState(true);
    const [isVisible_cbxSearch, setIsVisible_cbxSearch] = useState(true);
    const [isVisible_edSearch, setIsVisible_edSearch] = useState(true);
    const [isVisible_stMWNM, setIsVisible_stMWNM] = useState(true);
    const [isVisible_Static21, setIsVisible_Static21] = useState(true);
    const [isVisible_btnSearch, setIsVisible_btnSearch] = useState(true);
    const [isVisible_btnChgMinwon, setIsVisible_btnChgMinwon] = useState(false);
    const [isVisible_btnCall, setIsVisible_btnCall] = useState(true);
    const [isVisible_lbTotalCnt, setIsVisible_lbTotalCnt] = useState(true);
    const [isVisible_medTotalCnt, setIsVisible_medTotalCnt] = useState(true);
    const [isVisible_gdHCallList, setIsVisible_gdHCallList] = useState(true);
    const [isVisible_cbxCIPROCGUBUN, setIsVisible_cbxCIPROCGUBUN] = useState(true);
    const [isVisible_cbxCISTATUS, setIsVisible_cbxCISTATUS] = useState(true);
    const [isVisible_cbxMWGUBUN, setIsVisible_cbxMWGUBUN] = useState(true);
    const [isVisible_btnSaveH, setIsVisible_btnSaveH] = useState(true);
    const [isVisible_Edit0, setIsVisible_Edit0] = useState(true);
    const [isVisible_Edit1, setIsVisible_Edit1] = useState(true);
    const [isVisible_Edit2, setIsVisible_Edit2] = useState(true);
    const [isVisible_cbxDeptList, setIsVisible_cbxDeptList] = useState(true);
    const [isVisible_cbxUserList, setIsVisible_cbxUserList] = useState(true);
    const [isVisible_lbCIMWMGNO, setIsVisible_lbCIMWMGNO] = useState(false);
    const [isVisible_edCIMWMGNO, setIsVisible_edCIMWMGNO] = useState(false);
    const [isVisible_Edit3, setIsVisible_Edit3] = useState(true);
    const [isVisible_Edit5, setIsVisible_Edit5] = useState(true);
    const [isVisible_Static22, setIsVisible_Static22] = useState(true);
    const [isVisible_Combo0, setIsVisible_Combo0] = useState(true);
    const [isVisible_medCIDATE2, setIsVisible_medCIDATE2] = useState(true);
    const [isVisible_btnSaveEnable, setIsVisible_btnSaveEnable] = useState(false);
    const [isVisible_lbCIMWSEQ, setIsVisible_lbCIMWSEQ] = useState(false);
    const [isVisible_edCIMWSEQ, setIsVisible_edCIMWSEQ] = useState(false);
    const [isVisible_Edit4, setIsVisible_Edit4] = useState(true);
    const [isVisible_medCIREGDATE, setIsVisible_medCIREGDATE] = useState(false);
    const [isVisible_stCIREGDATE, setIsVisible_stCIREGDATE] = useState(false);
    const [isVisible_medCIUPDATE, setIsVisible_medCIUPDATE] = useState(false);
    const [isVisible_edCIUPSABUNNM, setIsVisible_edCIUPSABUNNM] = useState(false);
    const [isVisible_Static23, setIsVisible_Static23] = useState(true);
    const [isVisible_Static24, setIsVisible_Static24] = useState(true);
    const [isVisible_cbxCIPROCGUBUNS, setIsVisible_cbxCIPROCGUBUNS] = useState(true);
    const [isVisible_cbxCISTATUSS, setIsVisible_cbxCISTATUSS] = useState(true);
    const [isVisible_edMWRECVTELUSER, setIsVisible_edMWRECVTELUSER] = useState(false);
    const [isVisible_imgLogSend, setIsVisible_imgLogSend] = useState(true);
    const [isVisible_btnDeleteH, setIsVisible_btnDeleteH] = useState(false);
    const [isVisible_stCIREMOTEGUBUN, setIsVisible_stCIREMOTEGUBUN] = useState(true);
    const [isVisible_cbxCIREMOTEGUBUN, setIsVisible_cbxCIREMOTEGUBUN] = useState(true);
    const [isVisible_cbxCIREMOTESTATUS, setIsVisible_cbxCIREMOTESTATUS] = useState(true);
    const [isVisible_cbRemoteChk, setIsVisible_cbRemoteChk] = useState(true);
    const [isVisible_stCIREMOTESTATUS, setIsVisible_stCIREMOTESTATUS] = useState(true);
    const [isVisible_cbxCIREMOTESABUN, setIsVisible_cbxCIREMOTESABUN] = useState(true);
    const [isVisible_Div0, setIsVisible_Div0] = useState(true);
    const [tabValue_tab, setTabValue_tab] = useState(0);

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
        isVisible_tab,
        setIsVisible_tab,
        isVisible_Shape2,
        setIsVisible_Shape2,
        isVisible_Shape1,
        setIsVisible_Shape1,
        isVisible_Shape7,
        setIsVisible_Shape7,
        isVisible_Static16,
        setIsVisible_Static16,
        isVisible_Static0,
        setIsVisible_Static0,
        isVisible_Static1,
        setIsVisible_Static1,
        isVisible_Static2,
        setIsVisible_Static2,
        isVisible_Static3,
        setIsVisible_Static3,
        isVisible_Static4,
        setIsVisible_Static4,
        isVisible_Static5,
        setIsVisible_Static5,
        isVisible_Static6,
        setIsVisible_Static6,
        isVisible_Static7,
        setIsVisible_Static7,
        isVisible_Static8,
        setIsVisible_Static8,
        isVisible_Static9,
        setIsVisible_Static9,
        isVisible_Static10,
        setIsVisible_Static10,
        isVisible_Static11,
        setIsVisible_Static11,
        isVisible_Static12,
        setIsVisible_Static12,
        isVisible_Static13,
        setIsVisible_Static13,
        isVisible_edMWHP,
        setIsVisible_edMWHP,
        isVisible_edMWFAX,
        setIsVisible_edMWFAX,
        isVisible_edCIKEMS,
        setIsVisible_edCIKEMS,
        isVisible_radCIPROCGUBUN,
        setIsVisible_radCIPROCGUBUN,
        isVisible_cbxCIGRCD,
        setIsVisible_cbxCIGRCD,
        isVisible_cbxCICD,
        setIsVisible_cbxCICD,
        isVisible_edCICALLBACKTEL,
        setIsVisible_edCICALLBACKTEL,
        isVisible_edMWNM,
        setIsVisible_edMWNM,
        isVisible_edMWTEL,
        setIsVisible_edMWTEL,
        isVisible_edMWPERSONKEY,
        setIsVisible_edMWPERSONKEY,
        isVisible_radMWGUBUN,
        setIsVisible_radMWGUBUN,
        isVisible_taMWREMARK,
        setIsVisible_taMWREMARK,
        isVisible_gdCallList,
        setIsVisible_gdCallList,
        isVisible_btnSave,
        setIsVisible_btnSave,
        isVisible_btnCustomer,
        setIsVisible_btnCustomer,
        isVisible_btnInit,
        setIsVisible_btnInit,
        isVisible_Shape0,
        setIsVisible_Shape0,
        isVisible_btnExcel,
        setIsVisible_btnExcel,
        isVisible_Static14,
        setIsVisible_Static14,
        isVisible_edMWMAIL,
        setIsVisible_edMWMAIL,
        isVisible_radCISTATUS,
        setIsVisible_radCISTATUS,
        isVisible_lbMWMGNO,
        setIsVisible_lbMWMGNO,
        isVisible_edMWMGNO,
        setIsVisible_edMWMGNO,
        isVisible_lbCIMGNO,
        setIsVisible_lbCIMGNO,
        isVisible_edCIMGNO,
        setIsVisible_edCIMGNO,
        isVisible_medCIDATE,
        setIsVisible_medCIDATE,
        isVisible_lbInfomsg,
        setIsVisible_lbInfomsg,
        isVisible_Static18,
        setIsVisible_Static18,
        isVisible_taCICONENTS1,
        setIsVisible_taCICONENTS1,
        isVisible_Static19,
        setIsVisible_Static19,
        isVisible_edMWRECVTEL,
        setIsVisible_edMWRECVTEL,
        isVisible_edSearchMinwon,
        setIsVisible_edSearchMinwon,
        isVisible_edCICALLGUBUN,
        setIsVisible_edCICALLGUBUN,
        isVisible_edCICALLDN,
        setIsVisible_edCICALLDN,
        isVisible_taCICONENTS,
        setIsVisible_taCICONENTS,
        isVisible_lbCICALLGUBUN,
        setIsVisible_lbCICALLGUBUN,
        isVisible_lbCICALLDN,
        setIsVisible_lbCICALLDN,
        isVisible_btnEnableCIKEMS,
        setIsVisible_btnEnableCIKEMS,
        isVisible_btnEnableMWNM,
        setIsVisible_btnEnableMWNM,
        isVisible_Static15,
        setIsVisible_Static15,
        isVisible_radCIREMOTEGUBUN,
        setIsVisible_radCIREMOTEGUBUN,
        isVisible_Shape5,
        setIsVisible_Shape5,
        isVisible_Static20,
        setIsVisible_Static20,
        isVisible_Static17,
        setIsVisible_Static17,
        isVisible_edCIDATEFrom,
        setIsVisible_edCIDATEFrom,
        isVisible_edCIDATETo,
        setIsVisible_edCIDATETo,
        isVisible_cbxCIGRCDS,
        setIsVisible_cbxCIGRCDS,
        isVisible_cbxCICDS,
        setIsVisible_cbxCICDS,
        isVisible_cbxSearch,
        setIsVisible_cbxSearch,
        isVisible_edSearch,
        setIsVisible_edSearch,
        isVisible_stMWNM,
        setIsVisible_stMWNM,
        isVisible_Static21,
        setIsVisible_Static21,
        isVisible_btnSearch,
        setIsVisible_btnSearch,
        isVisible_btnChgMinwon,
        setIsVisible_btnChgMinwon,
        isVisible_btnCall,
        setIsVisible_btnCall,
        isVisible_lbTotalCnt,
        setIsVisible_lbTotalCnt,
        isVisible_medTotalCnt,
        setIsVisible_medTotalCnt,
        isVisible_gdHCallList,
        setIsVisible_gdHCallList,
        isVisible_cbxCIPROCGUBUN,
        setIsVisible_cbxCIPROCGUBUN,
        isVisible_cbxCISTATUS,
        setIsVisible_cbxCISTATUS,
        isVisible_cbxMWGUBUN,
        setIsVisible_cbxMWGUBUN,
        isVisible_btnSaveH,
        setIsVisible_btnSaveH,
        isVisible_Edit0,
        setIsVisible_Edit0,
        isVisible_Edit1,
        setIsVisible_Edit1,
        isVisible_Edit2,
        setIsVisible_Edit2,
        isVisible_cbxDeptList,
        setIsVisible_cbxDeptList,
        isVisible_cbxUserList,
        setIsVisible_cbxUserList,
        isVisible_lbCIMWMGNO,
        setIsVisible_lbCIMWMGNO,
        isVisible_edCIMWMGNO,
        setIsVisible_edCIMWMGNO,
        isVisible_Edit3,
        setIsVisible_Edit3,
        isVisible_Edit5,
        setIsVisible_Edit5,
        isVisible_Static22,
        setIsVisible_Static22,
        isVisible_Combo0,
        setIsVisible_Combo0,
        isVisible_medCIDATE2,
        setIsVisible_medCIDATE2,
        isVisible_btnSaveEnable,
        setIsVisible_btnSaveEnable,
        isVisible_lbCIMWSEQ,
        setIsVisible_lbCIMWSEQ,
        isVisible_edCIMWSEQ,
        setIsVisible_edCIMWSEQ,
        isVisible_Edit4,
        setIsVisible_Edit4,
        isVisible_medCIREGDATE,
        setIsVisible_medCIREGDATE,
        isVisible_stCIREGDATE,
        setIsVisible_stCIREGDATE,
        isVisible_medCIUPDATE,
        setIsVisible_medCIUPDATE,
        isVisible_edCIUPSABUNNM,
        setIsVisible_edCIUPSABUNNM,
        isVisible_Static23,
        setIsVisible_Static23,
        isVisible_Static24,
        setIsVisible_Static24,
        isVisible_cbxCIPROCGUBUNS,
        setIsVisible_cbxCIPROCGUBUNS,
        isVisible_cbxCISTATUSS,
        setIsVisible_cbxCISTATUSS,
        isVisible_edMWRECVTELUSER,
        setIsVisible_edMWRECVTELUSER,
        isVisible_imgLogSend,
        setIsVisible_imgLogSend,
        isVisible_btnDeleteH,
        setIsVisible_btnDeleteH,
        isVisible_stCIREMOTEGUBUN,
        setIsVisible_stCIREMOTEGUBUN,
        isVisible_cbxCIREMOTEGUBUN,
        setIsVisible_cbxCIREMOTEGUBUN,
        isVisible_cbxCIREMOTESTATUS,
        setIsVisible_cbxCIREMOTESTATUS,
        isVisible_cbRemoteChk,
        setIsVisible_cbRemoteChk,
        isVisible_stCIREMOTESTATUS,
        setIsVisible_stCIREMOTESTATUS,
        isVisible_cbxCIREMOTESABUN,
        setIsVisible_cbxCIREMOTESABUN,
        isVisible_Div0,
        setIsVisible_Div0,
        tabValue_tab,
        setTabValue_tab,
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