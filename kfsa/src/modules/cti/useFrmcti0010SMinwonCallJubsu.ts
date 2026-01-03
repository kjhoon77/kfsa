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
    const [rawVisible_tab, setRawVisible_tab] = useState(true);
    const [rawVisible_Shape2, setRawVisible_Shape2] = useState(true);
    const [rawVisible_Shape1, setRawVisible_Shape1] = useState(true);
    const [rawVisible_Shape7, setRawVisible_Shape7] = useState(true);
    const [rawVisible_Static16, setRawVisible_Static16] = useState(true);
    const [rawVisible_Static0, setRawVisible_Static0] = useState(true);
    const [rawVisible_Static1, setRawVisible_Static1] = useState(true);
    const [rawVisible_Static2, setRawVisible_Static2] = useState(true);
    const [rawVisible_Static3, setRawVisible_Static3] = useState(true);
    const [rawVisible_Static4, setRawVisible_Static4] = useState(true);
    const [rawVisible_Static5, setRawVisible_Static5] = useState(true);
    const [rawVisible_Static6, setRawVisible_Static6] = useState(true);
    const [rawVisible_Static7, setRawVisible_Static7] = useState(true);
    const [rawVisible_Static8, setRawVisible_Static8] = useState(true);
    const [rawVisible_Static9, setRawVisible_Static9] = useState(true);
    const [rawVisible_Static10, setRawVisible_Static10] = useState(true);
    const [rawVisible_Static11, setRawVisible_Static11] = useState(true);
    const [rawVisible_Static12, setRawVisible_Static12] = useState(true);
    const [rawVisible_Static13, setRawVisible_Static13] = useState(true);
    const [rawVisible_edMWHP, setRawVisible_edMWHP] = useState(true);
    const [rawVisible_edMWFAX, setRawVisible_edMWFAX] = useState(true);
    const [rawVisible_edCIKEMS, setRawVisible_edCIKEMS] = useState(true);
    const [rawVisible_radCIPROCGUBUN, setRawVisible_radCIPROCGUBUN] = useState(true);
    const [rawVisible_cbxCIGRCD, setRawVisible_cbxCIGRCD] = useState(true);
    const [rawVisible_cbxCICD, setRawVisible_cbxCICD] = useState(true);
    const [rawVisible_edCICALLBACKTEL, setRawVisible_edCICALLBACKTEL] = useState(true);
    const [rawVisible_edMWNM, setRawVisible_edMWNM] = useState(true);
    const [rawVisible_edMWTEL, setRawVisible_edMWTEL] = useState(true);
    const [rawVisible_edMWPERSONKEY, setRawVisible_edMWPERSONKEY] = useState(true);
    const [rawVisible_radMWGUBUN, setRawVisible_radMWGUBUN] = useState(true);
    const [rawVisible_taMWREMARK, setRawVisible_taMWREMARK] = useState(true);
    const [rawVisible_gdCallList, setRawVisible_gdCallList] = useState(true);
    const [rawVisible_btnSave, setRawVisible_btnSave] = useState(true);
    const [rawVisible_btnCustomer, setRawVisible_btnCustomer] = useState(true);
    const [rawVisible_btnInit, setRawVisible_btnInit] = useState(true);
    const [rawVisible_Shape0, setRawVisible_Shape0] = useState(true);
    const [rawVisible_btnExcel, setRawVisible_btnExcel] = useState(true);
    const [rawVisible_Static14, setRawVisible_Static14] = useState(true);
    const [rawVisible_edMWMAIL, setRawVisible_edMWMAIL] = useState(true);
    const [rawVisible_radCISTATUS, setRawVisible_radCISTATUS] = useState(true);
    const [rawVisible_lbMWMGNO, setRawVisible_lbMWMGNO] = useState(false);
    const [rawVisible_edMWMGNO, setRawVisible_edMWMGNO] = useState(false);
    const [rawVisible_lbCIMGNO, setRawVisible_lbCIMGNO] = useState(false);
    const [rawVisible_edCIMGNO, setRawVisible_edCIMGNO] = useState(false);
    const [rawVisible_medCIDATE, setRawVisible_medCIDATE] = useState(true);
    const [rawVisible_lbInfomsg, setRawVisible_lbInfomsg] = useState(true);
    const [rawVisible_Static18, setRawVisible_Static18] = useState(true);
    const [rawVisible_taCICONENTS1, setRawVisible_taCICONENTS1] = useState(true);
    const [rawVisible_Static19, setRawVisible_Static19] = useState(true);
    const [rawVisible_edMWRECVTEL, setRawVisible_edMWRECVTEL] = useState(true);
    const [rawVisible_edSearchMinwon, setRawVisible_edSearchMinwon] = useState(false);
    const [rawVisible_edCICALLGUBUN, setRawVisible_edCICALLGUBUN] = useState(false);
    const [rawVisible_edCICALLDN, setRawVisible_edCICALLDN] = useState(false);
    const [rawVisible_taCICONENTS, setRawVisible_taCICONENTS] = useState(true);
    const [rawVisible_lbCICALLGUBUN, setRawVisible_lbCICALLGUBUN] = useState(false);
    const [rawVisible_lbCICALLDN, setRawVisible_lbCICALLDN] = useState(false);
    const [rawVisible_btnEnableCIKEMS, setRawVisible_btnEnableCIKEMS] = useState(true);
    const [rawVisible_btnEnableMWNM, setRawVisible_btnEnableMWNM] = useState(true);
    const [rawVisible_Static15, setRawVisible_Static15] = useState(true);
    const [rawVisible_radCIREMOTEGUBUN, setRawVisible_radCIREMOTEGUBUN] = useState(true);
    const [rawVisible_Shape5, setRawVisible_Shape5] = useState(true);
    const [rawVisible_Static20, setRawVisible_Static20] = useState(true);
    const [rawVisible_Static17, setRawVisible_Static17] = useState(true);
    const [rawVisible_edCIDATEFrom, setRawVisible_edCIDATEFrom] = useState(true);
    const [rawVisible_edCIDATETo, setRawVisible_edCIDATETo] = useState(true);
    const [rawVisible_cbxCIGRCDS, setRawVisible_cbxCIGRCDS] = useState(true);
    const [rawVisible_cbxCICDS, setRawVisible_cbxCICDS] = useState(true);
    const [rawVisible_cbxSearch, setRawVisible_cbxSearch] = useState(true);
    const [rawVisible_edSearch, setRawVisible_edSearch] = useState(true);
    const [rawVisible_stMWNM, setRawVisible_stMWNM] = useState(true);
    const [rawVisible_Static21, setRawVisible_Static21] = useState(true);
    const [rawVisible_btnSearch, setRawVisible_btnSearch] = useState(true);
    const [rawVisible_btnChgMinwon, setRawVisible_btnChgMinwon] = useState(false);
    const [rawVisible_btnCall, setRawVisible_btnCall] = useState(true);
    const [rawVisible_lbTotalCnt, setRawVisible_lbTotalCnt] = useState(true);
    const [rawVisible_medTotalCnt, setRawVisible_medTotalCnt] = useState(true);
    const [rawVisible_gdHCallList, setRawVisible_gdHCallList] = useState(true);
    const [rawVisible_cbxCIPROCGUBUN, setRawVisible_cbxCIPROCGUBUN] = useState(true);
    const [rawVisible_cbxCISTATUS, setRawVisible_cbxCISTATUS] = useState(true);
    const [rawVisible_cbxMWGUBUN, setRawVisible_cbxMWGUBUN] = useState(true);
    const [rawVisible_btnSaveH, setRawVisible_btnSaveH] = useState(true);
    const [rawVisible_Edit0, setRawVisible_Edit0] = useState(true);
    const [rawVisible_Edit1, setRawVisible_Edit1] = useState(true);
    const [rawVisible_Edit2, setRawVisible_Edit2] = useState(true);
    const [rawVisible_cbxDeptList, setRawVisible_cbxDeptList] = useState(true);
    const [rawVisible_cbxUserList, setRawVisible_cbxUserList] = useState(true);
    const [rawVisible_lbCIMWMGNO, setRawVisible_lbCIMWMGNO] = useState(false);
    const [rawVisible_edCIMWMGNO, setRawVisible_edCIMWMGNO] = useState(false);
    const [rawVisible_Edit3, setRawVisible_Edit3] = useState(true);
    const [rawVisible_Edit5, setRawVisible_Edit5] = useState(true);
    const [rawVisible_Static22, setRawVisible_Static22] = useState(true);
    const [rawVisible_Combo0, setRawVisible_Combo0] = useState(true);
    const [rawVisible_medCIDATE2, setRawVisible_medCIDATE2] = useState(true);
    const [rawVisible_btnSaveEnable, setRawVisible_btnSaveEnable] = useState(false);
    const [rawVisible_lbCIMWSEQ, setRawVisible_lbCIMWSEQ] = useState(false);
    const [rawVisible_edCIMWSEQ, setRawVisible_edCIMWSEQ] = useState(false);
    const [rawVisible_Edit4, setRawVisible_Edit4] = useState(true);
    const [rawVisible_medCIREGDATE, setRawVisible_medCIREGDATE] = useState(false);
    const [rawVisible_stCIREGDATE, setRawVisible_stCIREGDATE] = useState(false);
    const [rawVisible_medCIUPDATE, setRawVisible_medCIUPDATE] = useState(false);
    const [rawVisible_edCIUPSABUNNM, setRawVisible_edCIUPSABUNNM] = useState(false);
    const [rawVisible_Static23, setRawVisible_Static23] = useState(true);
    const [rawVisible_Static24, setRawVisible_Static24] = useState(true);
    const [rawVisible_cbxCIPROCGUBUNS, setRawVisible_cbxCIPROCGUBUNS] = useState(true);
    const [rawVisible_cbxCISTATUSS, setRawVisible_cbxCISTATUSS] = useState(true);
    const [rawVisible_edMWRECVTELUSER, setRawVisible_edMWRECVTELUSER] = useState(false);
    const [rawVisible_imgLogSend, setRawVisible_imgLogSend] = useState(true);
    const [rawVisible_btnDeleteH, setRawVisible_btnDeleteH] = useState(false);
    const [rawVisible_stCIREMOTEGUBUN, setRawVisible_stCIREMOTEGUBUN] = useState(true);
    const [rawVisible_cbxCIREMOTEGUBUN, setRawVisible_cbxCIREMOTEGUBUN] = useState(true);
    const [rawVisible_cbxCIREMOTESTATUS, setRawVisible_cbxCIREMOTESTATUS] = useState(true);
    const [rawVisible_cbRemoteChk, setRawVisible_cbRemoteChk] = useState(true);
    const [rawVisible_stCIREMOTESTATUS, setRawVisible_stCIREMOTESTATUS] = useState(true);
    const [rawVisible_cbxCIREMOTESABUN, setRawVisible_cbxCIREMOTESABUN] = useState(true);
    const [rawVisible_Div0, setRawVisible_Div0] = useState(true);
    const isVisible_tab = rawVisible_tab;
    const setIsVisible_tab = setRawVisible_tab;
    const isVisible_Shape2 = rawVisible_Shape2;
    const setIsVisible_Shape2 = setRawVisible_Shape2;
    const isVisible_Shape1 = rawVisible_Shape1;
    const setIsVisible_Shape1 = setRawVisible_Shape1;
    const isVisible_Shape7 = rawVisible_Shape7;
    const setIsVisible_Shape7 = setRawVisible_Shape7;
    const isVisible_Static16 = rawVisible_Static16;
    const setIsVisible_Static16 = setRawVisible_Static16;
    const isVisible_Static0 = rawVisible_Static0;
    const setIsVisible_Static0 = setRawVisible_Static0;
    const isVisible_Static1 = rawVisible_Static1;
    const setIsVisible_Static1 = setRawVisible_Static1;
    const isVisible_Static2 = rawVisible_Static2;
    const setIsVisible_Static2 = setRawVisible_Static2;
    const isVisible_Static3 = rawVisible_Static3;
    const setIsVisible_Static3 = setRawVisible_Static3;
    const isVisible_Static4 = rawVisible_Static4;
    const setIsVisible_Static4 = setRawVisible_Static4;
    const isVisible_Static5 = rawVisible_Static5;
    const setIsVisible_Static5 = setRawVisible_Static5;
    const isVisible_Static6 = rawVisible_Static6;
    const setIsVisible_Static6 = setRawVisible_Static6;
    const isVisible_Static7 = rawVisible_Static7;
    const setIsVisible_Static7 = setRawVisible_Static7;
    const isVisible_Static8 = rawVisible_Static8;
    const setIsVisible_Static8 = setRawVisible_Static8;
    const isVisible_Static9 = rawVisible_Static9;
    const setIsVisible_Static9 = setRawVisible_Static9;
    const isVisible_Static10 = rawVisible_Static10;
    const setIsVisible_Static10 = setRawVisible_Static10;
    const isVisible_Static11 = rawVisible_Static11;
    const setIsVisible_Static11 = setRawVisible_Static11;
    const isVisible_Static12 = rawVisible_Static12;
    const setIsVisible_Static12 = setRawVisible_Static12;
    const isVisible_Static13 = rawVisible_Static13;
    const setIsVisible_Static13 = setRawVisible_Static13;
    const isVisible_edMWHP = rawVisible_edMWHP;
    const setIsVisible_edMWHP = setRawVisible_edMWHP;
    const isVisible_edMWFAX = rawVisible_edMWFAX;
    const setIsVisible_edMWFAX = setRawVisible_edMWFAX;
    const isVisible_edCIKEMS = rawVisible_edCIKEMS;
    const setIsVisible_edCIKEMS = setRawVisible_edCIKEMS;
    const isVisible_radCIPROCGUBUN = rawVisible_radCIPROCGUBUN;
    const setIsVisible_radCIPROCGUBUN = setRawVisible_radCIPROCGUBUN;
    const isVisible_cbxCIGRCD = rawVisible_cbxCIGRCD;
    const setIsVisible_cbxCIGRCD = setRawVisible_cbxCIGRCD;
    const isVisible_cbxCICD = rawVisible_cbxCICD;
    const setIsVisible_cbxCICD = setRawVisible_cbxCICD;
    const isVisible_edCICALLBACKTEL = rawVisible_edCICALLBACKTEL;
    const setIsVisible_edCICALLBACKTEL = setRawVisible_edCICALLBACKTEL;
    const isVisible_edMWNM = rawVisible_edMWNM;
    const setIsVisible_edMWNM = setRawVisible_edMWNM;
    const isVisible_edMWTEL = rawVisible_edMWTEL;
    const setIsVisible_edMWTEL = setRawVisible_edMWTEL;
    const isVisible_edMWPERSONKEY = rawVisible_edMWPERSONKEY;
    const setIsVisible_edMWPERSONKEY = setRawVisible_edMWPERSONKEY;
    const isVisible_radMWGUBUN = rawVisible_radMWGUBUN;
    const setIsVisible_radMWGUBUN = setRawVisible_radMWGUBUN;
    const isVisible_taMWREMARK = rawVisible_taMWREMARK;
    const setIsVisible_taMWREMARK = setRawVisible_taMWREMARK;
    const isVisible_gdCallList = rawVisible_gdCallList;
    const setIsVisible_gdCallList = setRawVisible_gdCallList;
    const isVisible_btnSave = rawVisible_btnSave;
    const setIsVisible_btnSave = setRawVisible_btnSave;
    const isVisible_btnCustomer = rawVisible_btnCustomer;
    const setIsVisible_btnCustomer = setRawVisible_btnCustomer;
    const isVisible_btnInit = rawVisible_btnInit;
    const setIsVisible_btnInit = setRawVisible_btnInit;
    const isVisible_Shape0 = rawVisible_Shape0;
    const setIsVisible_Shape0 = setRawVisible_Shape0;
    const isVisible_btnExcel = rawVisible_btnExcel;
    const setIsVisible_btnExcel = setRawVisible_btnExcel;
    const isVisible_Static14 = rawVisible_Static14;
    const setIsVisible_Static14 = setRawVisible_Static14;
    const isVisible_edMWMAIL = rawVisible_edMWMAIL;
    const setIsVisible_edMWMAIL = setRawVisible_edMWMAIL;
    const isVisible_radCISTATUS = rawVisible_radCISTATUS;
    const setIsVisible_radCISTATUS = setRawVisible_radCISTATUS;
    const isVisible_lbMWMGNO = rawVisible_lbMWMGNO;
    const setIsVisible_lbMWMGNO = setRawVisible_lbMWMGNO;
    const isVisible_edMWMGNO = rawVisible_edMWMGNO;
    const setIsVisible_edMWMGNO = setRawVisible_edMWMGNO;
    const isVisible_lbCIMGNO = rawVisible_lbCIMGNO;
    const setIsVisible_lbCIMGNO = setRawVisible_lbCIMGNO;
    const isVisible_edCIMGNO = rawVisible_edCIMGNO;
    const setIsVisible_edCIMGNO = setRawVisible_edCIMGNO;
    const isVisible_medCIDATE = rawVisible_medCIDATE;
    const setIsVisible_medCIDATE = setRawVisible_medCIDATE;
    const isVisible_lbInfomsg = rawVisible_lbInfomsg;
    const setIsVisible_lbInfomsg = setRawVisible_lbInfomsg;
    const isVisible_Static18 = rawVisible_Static18;
    const setIsVisible_Static18 = setRawVisible_Static18;
    const isVisible_taCICONENTS1 = rawVisible_taCICONENTS1;
    const setIsVisible_taCICONENTS1 = setRawVisible_taCICONENTS1;
    const isVisible_Static19 = rawVisible_Static19;
    const setIsVisible_Static19 = setRawVisible_Static19;
    const isVisible_edMWRECVTEL = rawVisible_edMWRECVTEL;
    const setIsVisible_edMWRECVTEL = setRawVisible_edMWRECVTEL;
    const isVisible_edSearchMinwon = rawVisible_edSearchMinwon;
    const setIsVisible_edSearchMinwon = setRawVisible_edSearchMinwon;
    const isVisible_edCICALLGUBUN = rawVisible_edCICALLGUBUN;
    const setIsVisible_edCICALLGUBUN = setRawVisible_edCICALLGUBUN;
    const isVisible_edCICALLDN = rawVisible_edCICALLDN;
    const setIsVisible_edCICALLDN = setRawVisible_edCICALLDN;
    const isVisible_taCICONENTS = rawVisible_taCICONENTS;
    const setIsVisible_taCICONENTS = setRawVisible_taCICONENTS;
    const isVisible_lbCICALLGUBUN = rawVisible_lbCICALLGUBUN;
    const setIsVisible_lbCICALLGUBUN = setRawVisible_lbCICALLGUBUN;
    const isVisible_lbCICALLDN = rawVisible_lbCICALLDN;
    const setIsVisible_lbCICALLDN = setRawVisible_lbCICALLDN;
    const isVisible_btnEnableCIKEMS = rawVisible_btnEnableCIKEMS;
    const setIsVisible_btnEnableCIKEMS = setRawVisible_btnEnableCIKEMS;
    const isVisible_btnEnableMWNM = rawVisible_btnEnableMWNM;
    const setIsVisible_btnEnableMWNM = setRawVisible_btnEnableMWNM;
    const isVisible_Static15 = rawVisible_Static15;
    const setIsVisible_Static15 = setRawVisible_Static15;
    const isVisible_radCIREMOTEGUBUN = rawVisible_radCIREMOTEGUBUN;
    const setIsVisible_radCIREMOTEGUBUN = setRawVisible_radCIREMOTEGUBUN;
    const isVisible_Shape5 = rawVisible_Shape5;
    const setIsVisible_Shape5 = setRawVisible_Shape5;
    const isVisible_Static20 = rawVisible_Static20;
    const setIsVisible_Static20 = setRawVisible_Static20;
    const isVisible_Static17 = rawVisible_Static17;
    const setIsVisible_Static17 = setRawVisible_Static17;
    const isVisible_edCIDATEFrom = rawVisible_edCIDATEFrom;
    const setIsVisible_edCIDATEFrom = setRawVisible_edCIDATEFrom;
    const isVisible_edCIDATETo = rawVisible_edCIDATETo;
    const setIsVisible_edCIDATETo = setRawVisible_edCIDATETo;
    const isVisible_cbxCIGRCDS = rawVisible_cbxCIGRCDS;
    const setIsVisible_cbxCIGRCDS = setRawVisible_cbxCIGRCDS;
    const isVisible_cbxCICDS = rawVisible_cbxCICDS;
    const setIsVisible_cbxCICDS = setRawVisible_cbxCICDS;
    const isVisible_cbxSearch = rawVisible_cbxSearch;
    const setIsVisible_cbxSearch = setRawVisible_cbxSearch;
    const isVisible_edSearch = rawVisible_edSearch;
    const setIsVisible_edSearch = setRawVisible_edSearch;
    const isVisible_stMWNM = rawVisible_stMWNM;
    const setIsVisible_stMWNM = setRawVisible_stMWNM;
    const isVisible_Static21 = rawVisible_Static21;
    const setIsVisible_Static21 = setRawVisible_Static21;
    const isVisible_btnSearch = rawVisible_btnSearch;
    const setIsVisible_btnSearch = setRawVisible_btnSearch;
    const isVisible_btnChgMinwon = rawVisible_btnChgMinwon;
    const setIsVisible_btnChgMinwon = setRawVisible_btnChgMinwon;
    const isVisible_btnCall = rawVisible_btnCall;
    const setIsVisible_btnCall = setRawVisible_btnCall;
    const isVisible_lbTotalCnt = rawVisible_lbTotalCnt;
    const setIsVisible_lbTotalCnt = setRawVisible_lbTotalCnt;
    const isVisible_medTotalCnt = rawVisible_medTotalCnt;
    const setIsVisible_medTotalCnt = setRawVisible_medTotalCnt;
    const isVisible_gdHCallList = rawVisible_gdHCallList;
    const setIsVisible_gdHCallList = setRawVisible_gdHCallList;
    const isVisible_cbxCIPROCGUBUN = rawVisible_cbxCIPROCGUBUN;
    const setIsVisible_cbxCIPROCGUBUN = setRawVisible_cbxCIPROCGUBUN;
    const isVisible_cbxCISTATUS = rawVisible_cbxCISTATUS;
    const setIsVisible_cbxCISTATUS = setRawVisible_cbxCISTATUS;
    const isVisible_cbxMWGUBUN = rawVisible_cbxMWGUBUN;
    const setIsVisible_cbxMWGUBUN = setRawVisible_cbxMWGUBUN;
    const isVisible_btnSaveH = rawVisible_btnSaveH;
    const setIsVisible_btnSaveH = setRawVisible_btnSaveH;
    const isVisible_Edit0 = rawVisible_Edit0;
    const setIsVisible_Edit0 = setRawVisible_Edit0;
    const isVisible_Edit1 = rawVisible_Edit1;
    const setIsVisible_Edit1 = setRawVisible_Edit1;
    const isVisible_Edit2 = rawVisible_Edit2;
    const setIsVisible_Edit2 = setRawVisible_Edit2;
    const isVisible_cbxDeptList = rawVisible_cbxDeptList;
    const setIsVisible_cbxDeptList = setRawVisible_cbxDeptList;
    const isVisible_cbxUserList = rawVisible_cbxUserList;
    const setIsVisible_cbxUserList = setRawVisible_cbxUserList;
    const isVisible_lbCIMWMGNO = rawVisible_lbCIMWMGNO;
    const setIsVisible_lbCIMWMGNO = setRawVisible_lbCIMWMGNO;
    const isVisible_edCIMWMGNO = rawVisible_edCIMWMGNO;
    const setIsVisible_edCIMWMGNO = setRawVisible_edCIMWMGNO;
    const isVisible_Edit3 = rawVisible_Edit3;
    const setIsVisible_Edit3 = setRawVisible_Edit3;
    const isVisible_Edit5 = rawVisible_Edit5;
    const setIsVisible_Edit5 = setRawVisible_Edit5;
    const isVisible_Static22 = rawVisible_Static22;
    const setIsVisible_Static22 = setRawVisible_Static22;
    const isVisible_Combo0 = rawVisible_Combo0;
    const setIsVisible_Combo0 = setRawVisible_Combo0;
    const isVisible_medCIDATE2 = rawVisible_medCIDATE2;
    const setIsVisible_medCIDATE2 = setRawVisible_medCIDATE2;
    const isVisible_btnSaveEnable = rawVisible_btnSaveEnable;
    const setIsVisible_btnSaveEnable = setRawVisible_btnSaveEnable;
    const isVisible_lbCIMWSEQ = rawVisible_lbCIMWSEQ;
    const setIsVisible_lbCIMWSEQ = setRawVisible_lbCIMWSEQ;
    const isVisible_edCIMWSEQ = rawVisible_edCIMWSEQ;
    const setIsVisible_edCIMWSEQ = setRawVisible_edCIMWSEQ;
    const isVisible_Edit4 = rawVisible_Edit4;
    const setIsVisible_Edit4 = setRawVisible_Edit4;
    const isVisible_medCIREGDATE = rawVisible_medCIREGDATE;
    const setIsVisible_medCIREGDATE = setRawVisible_medCIREGDATE;
    const isVisible_stCIREGDATE = rawVisible_stCIREGDATE;
    const setIsVisible_stCIREGDATE = setRawVisible_stCIREGDATE;
    const isVisible_medCIUPDATE = rawVisible_medCIUPDATE;
    const setIsVisible_medCIUPDATE = setRawVisible_medCIUPDATE;
    const isVisible_edCIUPSABUNNM = rawVisible_edCIUPSABUNNM;
    const setIsVisible_edCIUPSABUNNM = setRawVisible_edCIUPSABUNNM;
    const isVisible_Static23 = rawVisible_Static23;
    const setIsVisible_Static23 = setRawVisible_Static23;
    const isVisible_Static24 = rawVisible_Static24;
    const setIsVisible_Static24 = setRawVisible_Static24;
    const isVisible_cbxCIPROCGUBUNS = rawVisible_cbxCIPROCGUBUNS;
    const setIsVisible_cbxCIPROCGUBUNS = setRawVisible_cbxCIPROCGUBUNS;
    const isVisible_cbxCISTATUSS = rawVisible_cbxCISTATUSS;
    const setIsVisible_cbxCISTATUSS = setRawVisible_cbxCISTATUSS;
    const isVisible_edMWRECVTELUSER = rawVisible_edMWRECVTELUSER;
    const setIsVisible_edMWRECVTELUSER = setRawVisible_edMWRECVTELUSER;
    const isVisible_imgLogSend = rawVisible_imgLogSend;
    const setIsVisible_imgLogSend = setRawVisible_imgLogSend;
    const isVisible_btnDeleteH = rawVisible_btnDeleteH;
    const setIsVisible_btnDeleteH = setRawVisible_btnDeleteH;
    const isVisible_stCIREMOTEGUBUN = rawVisible_stCIREMOTEGUBUN;
    const setIsVisible_stCIREMOTEGUBUN = setRawVisible_stCIREMOTEGUBUN;
    const isVisible_cbxCIREMOTEGUBUN = rawVisible_cbxCIREMOTEGUBUN;
    const setIsVisible_cbxCIREMOTEGUBUN = setRawVisible_cbxCIREMOTEGUBUN;
    const isVisible_cbxCIREMOTESTATUS = rawVisible_cbxCIREMOTESTATUS;
    const setIsVisible_cbxCIREMOTESTATUS = setRawVisible_cbxCIREMOTESTATUS;
    const isVisible_cbRemoteChk = rawVisible_cbRemoteChk;
    const setIsVisible_cbRemoteChk = setRawVisible_cbRemoteChk;
    const isVisible_stCIREMOTESTATUS = rawVisible_stCIREMOTESTATUS;
    const setIsVisible_stCIREMOTESTATUS = setRawVisible_stCIREMOTESTATUS;
    const isVisible_cbxCIREMOTESABUN = rawVisible_cbxCIREMOTESABUN;
    const setIsVisible_cbxCIREMOTESABUN = setRawVisible_cbxCIREMOTESABUN;
    const isVisible_Div0 = rawVisible_Div0;
    const setIsVisible_Div0 = setRawVisible_Div0;
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