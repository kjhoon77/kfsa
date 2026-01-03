// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_AgentState, Ids_Statesubcode, Ids_CtiInfo, Ids_CtiAgentList, Ids_oMinwonList, Ids_iCallKeyIn, Ids_oCallKeyIn, Ids_oUserDNInfo, Ids_oResult, Ids_FileList } from './Frmcti0010MBoardMainData';

export const useFrmcti0010MBoardMain = () => {
    const [ds_AgentState, setds_AgentState] = useState<Ids_AgentState[]>([]);
    const [ds_Statesubcode, setds_Statesubcode] = useState<Ids_Statesubcode[]>([]);
    const [ds_CtiInfo, setds_CtiInfo] = useState<Ids_CtiInfo[]>([]);
    const [ds_CtiAgentList, setds_CtiAgentList] = useState<Ids_CtiAgentList[]>([]);
    const [ds_oMinwonList, setds_oMinwonList] = useState<Ids_oMinwonList[]>([]);
    const [ds_iCallKeyIn, setds_iCallKeyIn] = useState<Ids_iCallKeyIn[]>([]);
    const [ds_oCallKeyIn, setds_oCallKeyIn] = useState<Ids_oCallKeyIn[]>([]);
    const [ds_oUserDNInfo, setds_oUserDNInfo] = useState<Ids_oUserDNInfo[]>([]);
    const [ds_oResult, setds_oResult] = useState<Ids_oResult[]>([]);
    const [ds_FileList, setds_FileList] = useState<Ids_FileList[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [rawVisible_divJubsu, setRawVisible_divJubsu] = useState(true);
    const [rawVisible_DivTest, setRawVisible_DivTest] = useState(false);
    const [rawVisible_btnGsXml, setRawVisible_btnGsXml] = useState(true);
    const [rawVisible_txtArea, setRawVisible_txtArea] = useState(true);
    const [rawVisible_btnDsXml, setRawVisible_btnDsXml] = useState(true);
    const [rawVisible_btnGdsXml, setRawVisible_btnGdsXml] = useState(true);
    const [rawVisible_btntxtResponse, setRawVisible_btntxtResponse] = useState(true);
    const [rawVisible_Button0, setRawVisible_Button0] = useState(true);
    const [rawVisible_divApi, setRawVisible_divApi] = useState(false);
    const [rawVisible_btnAgentLogin, setRawVisible_btnAgentLogin] = useState(false);
    const [rawVisible_btnMonitorStart, setRawVisible_btnMonitorStart] = useState(false);
    const [rawVisible_btnOpenServer, setRawVisible_btnOpenServer] = useState(false);
    const [rawVisible_txtGConnID, setRawVisible_txtGConnID] = useState(true);
    const [rawVisible_Static57, setRawVisible_Static57] = useState(true);
    const [rawVisible_txtDestDN, setRawVisible_txtDestDN] = useState(true);
    const [rawVisible_Static55, setRawVisible_Static55] = useState(true);
    const [rawVisible_txtGThisDN, setRawVisible_txtGThisDN] = useState(true);
    const [rawVisible_Static19, setRawVisible_Static19] = useState(true);
    const [rawVisible_cbStatesubcode, setRawVisible_cbStatesubcode] = useState(true);
    const [rawVisible_Static35, setRawVisible_Static35] = useState(true);
    const [rawVisible_cbAgentState, setRawVisible_cbAgentState] = useState(true);
    const [rawVisible_Static28, setRawVisible_Static28] = useState(true);
    const [rawVisible_txtAgentID, setRawVisible_txtAgentID] = useState(true);
    const [rawVisible_Static24, setRawVisible_Static24] = useState(true);
    const [rawVisible_txtGExHandle, setRawVisible_txtGExHandle] = useState(true);
    const [rawVisible_Static36, setRawVisible_Static36] = useState(true);
    const [rawVisible_txtHandle, setRawVisible_txtHandle] = useState(true);
    const [rawVisible_Static1, setRawVisible_Static1] = useState(true);
    const [rawVisible_txtDN, setRawVisible_txtDN] = useState(true);
    const [rawVisible_Static20, setRawVisible_Static20] = useState(true);
    const [rawVisible_btnMakeCall, setRawVisible_btnMakeCall] = useState(false);
    const [rawVisible_btnClearCall, setRawVisible_btnClearCall] = useState(false);
    const [rawVisible_btnAnswerCall, setRawVisible_btnAnswerCall] = useState(false);
    const [rawVisible_stTxtResponse, setRawVisible_stTxtResponse] = useState(true);
    const [rawVisible_btnGetAgentList, setRawVisible_btnGetAgentList] = useState(false);
    const [rawVisible_btnAgentReport, setRawVisible_btnAgentReport] = useState(false);
    const [rawVisible_btnGetStateSubcode, setRawVisible_btnGetStateSubcode] = useState(false);
    const [rawVisible_btnSetAgentState, setRawVisible_btnSetAgentState] = useState(false);
    const [rawVisible_btnGetAgentState, setRawVisible_btnGetAgentState] = useState(false);
    const [rawVisible_btnHoldCall, setRawVisible_btnHoldCall] = useState(false);
    const [rawVisible_btnRetrieveCall, setRawVisible_btnRetrieveCall] = useState(false);
    const [rawVisible_btnTransferCall, setRawVisible_btnTransferCall] = useState(false);
    const [rawVisible_btnMuteTransfer, setRawVisible_btnMuteTransfer] = useState(false);
    const [rawVisible_txtCallDn, setRawVisible_txtCallDn] = useState(true);
    const [rawVisible_btnSetAfterCallState, setRawVisible_btnSetAfterCallState] = useState(false);
    const [rawVisible_Static2, setRawVisible_Static2] = useState(true);
    const [rawVisible_cbAgentStateAfter, setRawVisible_cbAgentStateAfter] = useState(true);
    const [rawVisible_Static3, setRawVisible_Static3] = useState(true);
    const [rawVisible_Static0, setRawVisible_Static0] = useState(true);
    const [rawVisible_txtCallType, setRawVisible_txtCallType] = useState(true);
    const [rawVisible_btnAgentSubscribe, setRawVisible_btnAgentSubscribe] = useState(false);
    const [rawVisible_Static4, setRawVisible_Static4] = useState(true);
    const [rawVisible_txtSubscribeID, setRawVisible_txtSubscribeID] = useState(true);
    const [rawVisible_btnCloseSubscribe, setRawVisible_btnCloseSubscribe] = useState(false);
    const [rawVisible_btnQueueSubscribe, setRawVisible_btnQueueSubscribe] = useState(false);
    const [rawVisible_Static5, setRawVisible_Static5] = useState(true);
    const [rawVisible_txtQueueSubscribeID, setRawVisible_txtQueueSubscribeID] = useState(true);
    const [rawVisible_btnCloseQueueSubscribe, setRawVisible_btnCloseQueueSubscribe] = useState(false);
    const [rawVisible_Static6, setRawVisible_Static6] = useState(true);
    const [rawVisible_txtGConnID2, setRawVisible_txtGConnID2] = useState(true);
    const [rawVisible_Static8, setRawVisible_Static8] = useState(true);
    const [rawVisible_txtTransferGubun, setRawVisible_txtTransferGubun] = useState(true);
    const [rawVisible_Button1, setRawVisible_Button1] = useState(false);
    const [rawVisible_Button2, setRawVisible_Button2] = useState(false);
    const [rawVisible_Button3, setRawVisible_Button3] = useState(false);
    const [rawVisible_txtChkAgentState, setRawVisible_txtChkAgentState] = useState(true);
    const [rawVisible_Button4, setRawVisible_Button4] = useState(false);
    const [rawVisible_Static7, setRawVisible_Static7] = useState(true);
    const [rawVisible_txtChkAgentID, setRawVisible_txtChkAgentID] = useState(true);
    const [rawVisible_Button5, setRawVisible_Button5] = useState(false);
    const [rawVisible_Static9, setRawVisible_Static9] = useState(true);
    const [rawVisible_txtExHandle, setRawVisible_txtExHandle] = useState(true);
    const [rawVisible_Button7, setRawVisible_Button7] = useState(false);
    const [rawVisible_Button8, setRawVisible_Button8] = useState(false);
    const [rawVisible_Button9, setRawVisible_Button9] = useState(false);
    const [rawVisible_txtExKey, setRawVisible_txtExKey] = useState(true);
    const [rawVisible_txtExValue, setRawVisible_txtExValue] = useState(true);
    const [rawVisible_txtFieldValue, setRawVisible_txtFieldValue] = useState(true);
    const [rawVisible_Button10, setRawVisible_Button10] = useState(false);
    const [rawVisible_Button11, setRawVisible_Button11] = useState(false);
    const [rawVisible_Static10, setRawVisible_Static10] = useState(true);
    const [rawVisible_Static11, setRawVisible_Static11] = useState(true);
    const [rawVisible_txtDestDNPre, setRawVisible_txtDestDNPre] = useState(true);
    const [rawVisible_Static12, setRawVisible_Static12] = useState(true);
    const [rawVisible_gdList, setRawVisible_gdList] = useState(true);
    const [rawVisible_btnKeyinHP, setRawVisible_btnKeyinHP] = useState(false);
    const [rawVisible_edKeyInValue, setRawVisible_edKeyInValue] = useState(false);
    const [rawVisible_Static13, setRawVisible_Static13] = useState(true);
    const [rawVisible_txtLastDn, setRawVisible_txtLastDn] = useState(true);
    const [rawVisible_Button6, setRawVisible_Button6] = useState(false);
    const [rawVisible_Static14, setRawVisible_Static14] = useState(false);
    const [rawVisible_Button12, setRawVisible_Button12] = useState(false);
    const [rawVisible_edQueue, setRawVisible_edQueue] = useState(false);
    const [rawVisible_txtResponse, setRawVisible_txtResponse] = useState(true);
    const [rawVisible_imgKemsLogo, setRawVisible_imgKemsLogo] = useState(true);
    const [rawVisible_edCallStateTxt, setRawVisible_edCallStateTxt] = useState(true);
    const [rawVisible_edStateTime, setRawVisible_edStateTime] = useState(true);
    const [rawVisible_edAgentSubscribe, setRawVisible_edAgentSubscribe] = useState(true);
    const [rawVisible_Static15, setRawVisible_Static15] = useState(true);
    const [rawVisible_edTenantSubscribe, setRawVisible_edTenantSubscribe] = useState(true);
    const [rawVisible_Shape5, setRawVisible_Shape5] = useState(true);
    const [rawVisible_btnCallReady, setRawVisible_btnCallReady] = useState(true);
    const [rawVisible_cbxStop, setRawVisible_cbxStop] = useState(true);
    const [rawVisible_btnCallStop, setRawVisible_btnCallStop] = useState(true);
    const [rawVisible_Shape1, setRawVisible_Shape1] = useState(true);
    const [rawVisible_Shape0, setRawVisible_Shape0] = useState(true);
    const [rawVisible_Shape3, setRawVisible_Shape3] = useState(true);
    const [rawVisible_Shape4, setRawVisible_Shape4] = useState(true);
    const [rawVisible_Shape6, setRawVisible_Shape6] = useState(true);
    const [rawVisible_btnCallHold, setRawVisible_btnCallHold] = useState(true);
    const [rawVisible_btnCallHoldCancel, setRawVisible_btnCallHoldCancel] = useState(true);
    const [rawVisible_btnCallTransfer, setRawVisible_btnCallTransfer] = useState(true);
    const [rawVisible_btnCallHangup, setRawVisible_btnCallHangup] = useState(true);
    const [rawVisible_btnExtension51, setRawVisible_btnExtension51] = useState(true);
    const [rawVisible_btnExtension52, setRawVisible_btnExtension52] = useState(true);
    const [rawVisible_btnExtension53, setRawVisible_btnExtension53] = useState(true);
    const [rawVisible_btnExtension61, setRawVisible_btnExtension61] = useState(true);
    const [rawVisible_btnExtension62, setRawVisible_btnExtension62] = useState(true);
    const [rawVisible_btnExtension63, setRawVisible_btnExtension63] = useState(true);
    const [rawVisible_btnCallInTransfer, setRawVisible_btnCallInTransfer] = useState(true);
    const [rawVisible_edVersion, setRawVisible_edVersion] = useState(true);
    const [rawVisible_api, setRawVisible_api] = useState(false);
    const [rawVisible_lbLoginTime, setRawVisible_lbLoginTime] = useState(false);
    const [rawVisible_btnAPI, setRawVisible_btnAPI] = useState(false);
    const [rawVisible_btnTest, setRawVisible_btnTest] = useState(false);
    const [rawVisible_imgCtiLogin, setRawVisible_imgCtiLogin] = useState(false);
    const [rawVisible_fileSaveFile, setRawVisible_fileSaveFile] = useState(true);
    const [rawVisible_fileDialogFile, setRawVisible_fileDialogFile] = useState(true);
    const [rawVisible_imgCallInbound, setRawVisible_imgCallInbound] = useState(false);
    const [rawVisible_lbInfomsg, setRawVisible_lbInfomsg] = useState(false);
    const isVisible_divJubsu = rawVisible_divJubsu;
    const setIsVisible_divJubsu = setRawVisible_divJubsu;
    const isVisible_DivTest = rawVisible_DivTest;
    const setIsVisible_DivTest = setRawVisible_DivTest;
    const isVisible_btnGsXml = rawVisible_btnGsXml;
    const setIsVisible_btnGsXml = setRawVisible_btnGsXml;
    const isVisible_txtArea = rawVisible_txtArea;
    const setIsVisible_txtArea = setRawVisible_txtArea;
    const isVisible_btnDsXml = rawVisible_btnDsXml;
    const setIsVisible_btnDsXml = setRawVisible_btnDsXml;
    const isVisible_btnGdsXml = rawVisible_btnGdsXml;
    const setIsVisible_btnGdsXml = setRawVisible_btnGdsXml;
    const isVisible_btntxtResponse = rawVisible_btntxtResponse;
    const setIsVisible_btntxtResponse = setRawVisible_btntxtResponse;
    const isVisible_Button0 = rawVisible_Button0 && rawVisible_divApi;
    const setIsVisible_Button0 = setRawVisible_Button0;
    const isVisible_divApi = rawVisible_divApi;
    const setIsVisible_divApi = setRawVisible_divApi;
    const isVisible_btnAgentLogin = rawVisible_btnAgentLogin && rawVisible_divApi;
    const setIsVisible_btnAgentLogin = setRawVisible_btnAgentLogin;
    const isVisible_btnMonitorStart = rawVisible_btnMonitorStart;
    const setIsVisible_btnMonitorStart = setRawVisible_btnMonitorStart;
    const isVisible_btnOpenServer = rawVisible_btnOpenServer;
    const setIsVisible_btnOpenServer = setRawVisible_btnOpenServer;
    const isVisible_txtGConnID = rawVisible_txtGConnID && rawVisible_divApi;
    const setIsVisible_txtGConnID = setRawVisible_txtGConnID;
    const isVisible_Static57 = rawVisible_Static57;
    const setIsVisible_Static57 = setRawVisible_Static57;
    const isVisible_txtDestDN = rawVisible_txtDestDN && rawVisible_divApi;
    const setIsVisible_txtDestDN = setRawVisible_txtDestDN;
    const isVisible_Static55 = rawVisible_Static55;
    const setIsVisible_Static55 = setRawVisible_Static55;
    const isVisible_txtGThisDN = rawVisible_txtGThisDN;
    const setIsVisible_txtGThisDN = setRawVisible_txtGThisDN;
    const isVisible_Static19 = rawVisible_Static19 && rawVisible_Shape1;
    const setIsVisible_Static19 = setRawVisible_Static19;
    const isVisible_cbStatesubcode = rawVisible_cbStatesubcode && rawVisible_divApi;
    const setIsVisible_cbStatesubcode = setRawVisible_cbStatesubcode;
    const isVisible_Static35 = rawVisible_Static35;
    const setIsVisible_Static35 = setRawVisible_Static35;
    const isVisible_cbAgentState = rawVisible_cbAgentState && rawVisible_divApi;
    const setIsVisible_cbAgentState = setRawVisible_cbAgentState;
    const isVisible_Static28 = rawVisible_Static28;
    const setIsVisible_Static28 = setRawVisible_Static28;
    const isVisible_txtAgentID = rawVisible_txtAgentID && rawVisible_divApi;
    const setIsVisible_txtAgentID = setRawVisible_txtAgentID;
    const isVisible_Static24 = rawVisible_Static24;
    const setIsVisible_Static24 = setRawVisible_Static24;
    const isVisible_txtGExHandle = rawVisible_txtGExHandle;
    const setIsVisible_txtGExHandle = setRawVisible_txtGExHandle;
    const isVisible_Static36 = rawVisible_Static36;
    const setIsVisible_Static36 = setRawVisible_Static36;
    const isVisible_txtHandle = rawVisible_txtHandle;
    const setIsVisible_txtHandle = setRawVisible_txtHandle;
    const isVisible_Static1 = rawVisible_Static1;
    const setIsVisible_Static1 = setRawVisible_Static1;
    const isVisible_txtDN = rawVisible_txtDN;
    const setIsVisible_txtDN = setRawVisible_txtDN;
    const isVisible_Static20 = rawVisible_Static20;
    const setIsVisible_Static20 = setRawVisible_Static20;
    const isVisible_btnMakeCall = rawVisible_btnMakeCall && rawVisible_divApi;
    const setIsVisible_btnMakeCall = setRawVisible_btnMakeCall;
    const isVisible_btnClearCall = rawVisible_btnClearCall && rawVisible_divApi;
    const setIsVisible_btnClearCall = setRawVisible_btnClearCall;
    const isVisible_btnAnswerCall = rawVisible_btnAnswerCall && rawVisible_divApi;
    const setIsVisible_btnAnswerCall = setRawVisible_btnAnswerCall;
    const isVisible_stTxtResponse = rawVisible_stTxtResponse;
    const setIsVisible_stTxtResponse = setRawVisible_stTxtResponse;
    const isVisible_btnGetAgentList = rawVisible_btnGetAgentList && rawVisible_divApi;
    const setIsVisible_btnGetAgentList = setRawVisible_btnGetAgentList;
    const isVisible_btnAgentReport = rawVisible_btnAgentReport && rawVisible_divApi;
    const setIsVisible_btnAgentReport = setRawVisible_btnAgentReport;
    const isVisible_btnGetStateSubcode = rawVisible_btnGetStateSubcode && rawVisible_divApi;
    const setIsVisible_btnGetStateSubcode = setRawVisible_btnGetStateSubcode;
    const isVisible_btnSetAgentState = rawVisible_btnSetAgentState && rawVisible_divApi;
    const setIsVisible_btnSetAgentState = setRawVisible_btnSetAgentState;
    const isVisible_btnGetAgentState = rawVisible_btnGetAgentState && rawVisible_divApi;
    const setIsVisible_btnGetAgentState = setRawVisible_btnGetAgentState;
    const isVisible_btnHoldCall = rawVisible_btnHoldCall && rawVisible_divApi;
    const setIsVisible_btnHoldCall = setRawVisible_btnHoldCall;
    const isVisible_btnRetrieveCall = rawVisible_btnRetrieveCall && rawVisible_divApi;
    const setIsVisible_btnRetrieveCall = setRawVisible_btnRetrieveCall;
    const isVisible_btnTransferCall = rawVisible_btnTransferCall && rawVisible_divApi;
    const setIsVisible_btnTransferCall = setRawVisible_btnTransferCall;
    const isVisible_btnMuteTransfer = rawVisible_btnMuteTransfer && rawVisible_divApi;
    const setIsVisible_btnMuteTransfer = setRawVisible_btnMuteTransfer;
    const isVisible_txtCallDn = rawVisible_txtCallDn && rawVisible_divApi;
    const setIsVisible_txtCallDn = setRawVisible_txtCallDn;
    const isVisible_btnSetAfterCallState = rawVisible_btnSetAfterCallState && rawVisible_divApi;
    const setIsVisible_btnSetAfterCallState = setRawVisible_btnSetAfterCallState;
    const isVisible_Static2 = rawVisible_Static2;
    const setIsVisible_Static2 = setRawVisible_Static2;
    const isVisible_cbAgentStateAfter = rawVisible_cbAgentStateAfter && rawVisible_divApi;
    const setIsVisible_cbAgentStateAfter = setRawVisible_cbAgentStateAfter;
    const isVisible_Static3 = rawVisible_Static3;
    const setIsVisible_Static3 = setRawVisible_Static3;
    const isVisible_Static0 = rawVisible_Static0;
    const setIsVisible_Static0 = setRawVisible_Static0;
    const isVisible_txtCallType = rawVisible_txtCallType && rawVisible_divApi;
    const setIsVisible_txtCallType = setRawVisible_txtCallType;
    const isVisible_btnAgentSubscribe = rawVisible_btnAgentSubscribe && rawVisible_divApi;
    const setIsVisible_btnAgentSubscribe = setRawVisible_btnAgentSubscribe;
    const isVisible_Static4 = rawVisible_Static4;
    const setIsVisible_Static4 = setRawVisible_Static4;
    const isVisible_txtSubscribeID = rawVisible_txtSubscribeID && rawVisible_divApi;
    const setIsVisible_txtSubscribeID = setRawVisible_txtSubscribeID;
    const isVisible_btnCloseSubscribe = rawVisible_btnCloseSubscribe && rawVisible_divApi;
    const setIsVisible_btnCloseSubscribe = setRawVisible_btnCloseSubscribe;
    const isVisible_btnQueueSubscribe = rawVisible_btnQueueSubscribe && rawVisible_divApi;
    const setIsVisible_btnQueueSubscribe = setRawVisible_btnQueueSubscribe;
    const isVisible_Static5 = rawVisible_Static5;
    const setIsVisible_Static5 = setRawVisible_Static5;
    const isVisible_txtQueueSubscribeID = rawVisible_txtQueueSubscribeID && rawVisible_divApi;
    const setIsVisible_txtQueueSubscribeID = setRawVisible_txtQueueSubscribeID;
    const isVisible_btnCloseQueueSubscribe = rawVisible_btnCloseQueueSubscribe && rawVisible_divApi;
    const setIsVisible_btnCloseQueueSubscribe = setRawVisible_btnCloseQueueSubscribe;
    const isVisible_Static6 = rawVisible_Static6;
    const setIsVisible_Static6 = setRawVisible_Static6;
    const isVisible_txtGConnID2 = rawVisible_txtGConnID2 && rawVisible_divApi;
    const setIsVisible_txtGConnID2 = setRawVisible_txtGConnID2;
    const isVisible_Static8 = rawVisible_Static8;
    const setIsVisible_Static8 = setRawVisible_Static8;
    const isVisible_txtTransferGubun = rawVisible_txtTransferGubun && rawVisible_divApi;
    const setIsVisible_txtTransferGubun = setRawVisible_txtTransferGubun;
    const isVisible_Button1 = rawVisible_Button1 && rawVisible_divApi;
    const setIsVisible_Button1 = setRawVisible_Button1;
    const isVisible_Button2 = rawVisible_Button2 && rawVisible_divApi;
    const setIsVisible_Button2 = setRawVisible_Button2;
    const isVisible_Button3 = rawVisible_Button3 && rawVisible_divApi;
    const setIsVisible_Button3 = setRawVisible_Button3;
    const isVisible_txtChkAgentState = rawVisible_txtChkAgentState && rawVisible_divApi;
    const setIsVisible_txtChkAgentState = setRawVisible_txtChkAgentState;
    const isVisible_Button4 = rawVisible_Button4 && rawVisible_divApi;
    const setIsVisible_Button4 = setRawVisible_Button4;
    const isVisible_Static7 = rawVisible_Static7;
    const setIsVisible_Static7 = setRawVisible_Static7;
    const isVisible_txtChkAgentID = rawVisible_txtChkAgentID && rawVisible_divApi;
    const setIsVisible_txtChkAgentID = setRawVisible_txtChkAgentID;
    const isVisible_Button5 = rawVisible_Button5 && rawVisible_divApi;
    const setIsVisible_Button5 = setRawVisible_Button5;
    const isVisible_Static9 = rawVisible_Static9;
    const setIsVisible_Static9 = setRawVisible_Static9;
    const isVisible_txtExHandle = rawVisible_txtExHandle && rawVisible_divApi;
    const setIsVisible_txtExHandle = setRawVisible_txtExHandle;
    const isVisible_Button7 = rawVisible_Button7 && rawVisible_divApi;
    const setIsVisible_Button7 = setRawVisible_Button7;
    const isVisible_Button8 = rawVisible_Button8 && rawVisible_divApi;
    const setIsVisible_Button8 = setRawVisible_Button8;
    const isVisible_Button9 = rawVisible_Button9 && rawVisible_divApi;
    const setIsVisible_Button9 = setRawVisible_Button9;
    const isVisible_txtExKey = rawVisible_txtExKey && rawVisible_divApi;
    const setIsVisible_txtExKey = setRawVisible_txtExKey;
    const isVisible_txtExValue = rawVisible_txtExValue && rawVisible_divApi;
    const setIsVisible_txtExValue = setRawVisible_txtExValue;
    const isVisible_txtFieldValue = rawVisible_txtFieldValue && rawVisible_divApi;
    const setIsVisible_txtFieldValue = setRawVisible_txtFieldValue;
    const isVisible_Button10 = rawVisible_Button10 && rawVisible_divApi;
    const setIsVisible_Button10 = setRawVisible_Button10;
    const isVisible_Button11 = rawVisible_Button11 && rawVisible_divApi;
    const setIsVisible_Button11 = setRawVisible_Button11;
    const isVisible_Static10 = rawVisible_Static10;
    const setIsVisible_Static10 = setRawVisible_Static10;
    const isVisible_Static11 = rawVisible_Static11;
    const setIsVisible_Static11 = setRawVisible_Static11;
    const isVisible_txtDestDNPre = rawVisible_txtDestDNPre && rawVisible_divApi;
    const setIsVisible_txtDestDNPre = setRawVisible_txtDestDNPre;
    const isVisible_Static12 = rawVisible_Static12;
    const setIsVisible_Static12 = setRawVisible_Static12;
    const isVisible_gdList = rawVisible_gdList && rawVisible_divApi;
    const setIsVisible_gdList = setRawVisible_gdList;
    const isVisible_btnKeyinHP = rawVisible_btnKeyinHP && rawVisible_divApi;
    const setIsVisible_btnKeyinHP = setRawVisible_btnKeyinHP;
    const isVisible_edKeyInValue = rawVisible_edKeyInValue && rawVisible_divApi;
    const setIsVisible_edKeyInValue = setRawVisible_edKeyInValue;
    const isVisible_Static13 = rawVisible_Static13;
    const setIsVisible_Static13 = setRawVisible_Static13;
    const isVisible_txtLastDn = rawVisible_txtLastDn && rawVisible_divApi;
    const setIsVisible_txtLastDn = setRawVisible_txtLastDn;
    const isVisible_Button6 = rawVisible_Button6;
    const setIsVisible_Button6 = setRawVisible_Button6;
    const isVisible_Static14 = rawVisible_Static14;
    const setIsVisible_Static14 = setRawVisible_Static14;
    const isVisible_Button12 = rawVisible_Button12 && rawVisible_divApi;
    const setIsVisible_Button12 = setRawVisible_Button12;
    const isVisible_edQueue = rawVisible_edQueue && rawVisible_divApi;
    const setIsVisible_edQueue = setRawVisible_edQueue;
    const isVisible_txtResponse = rawVisible_txtResponse;
    const setIsVisible_txtResponse = setRawVisible_txtResponse;
    const isVisible_imgKemsLogo = rawVisible_imgKemsLogo;
    const setIsVisible_imgKemsLogo = setRawVisible_imgKemsLogo;
    const isVisible_edCallStateTxt = rawVisible_edCallStateTxt;
    const setIsVisible_edCallStateTxt = setRawVisible_edCallStateTxt;
    const isVisible_edStateTime = rawVisible_edStateTime;
    const setIsVisible_edStateTime = setRawVisible_edStateTime;
    const isVisible_edAgentSubscribe = rawVisible_edAgentSubscribe;
    const setIsVisible_edAgentSubscribe = setRawVisible_edAgentSubscribe;
    const isVisible_Static15 = rawVisible_Static15;
    const setIsVisible_Static15 = setRawVisible_Static15;
    const isVisible_edTenantSubscribe = rawVisible_edTenantSubscribe;
    const setIsVisible_edTenantSubscribe = setRawVisible_edTenantSubscribe;
    const isVisible_Shape5 = rawVisible_Shape5;
    const setIsVisible_Shape5 = setRawVisible_Shape5;
    const isVisible_btnCallReady = rawVisible_btnCallReady && rawVisible_Shape5;
    const setIsVisible_btnCallReady = setRawVisible_btnCallReady;
    const isVisible_cbxStop = rawVisible_cbxStop && rawVisible_Shape5;
    const setIsVisible_cbxStop = setRawVisible_cbxStop;
    const isVisible_btnCallStop = rawVisible_btnCallStop && rawVisible_Shape5;
    const setIsVisible_btnCallStop = setRawVisible_btnCallStop;
    const isVisible_Shape1 = rawVisible_Shape1;
    const setIsVisible_Shape1 = setRawVisible_Shape1;
    const isVisible_Shape0 = rawVisible_Shape0;
    const setIsVisible_Shape0 = setRawVisible_Shape0;
    const isVisible_Shape3 = rawVisible_Shape3;
    const setIsVisible_Shape3 = setRawVisible_Shape3;
    const isVisible_Shape4 = rawVisible_Shape4;
    const setIsVisible_Shape4 = setRawVisible_Shape4;
    const isVisible_Shape6 = rawVisible_Shape6;
    const setIsVisible_Shape6 = setRawVisible_Shape6;
    const isVisible_btnCallHold = rawVisible_btnCallHold && rawVisible_Shape3;
    const setIsVisible_btnCallHold = setRawVisible_btnCallHold;
    const isVisible_btnCallHoldCancel = rawVisible_btnCallHoldCancel && rawVisible_Shape3;
    const setIsVisible_btnCallHoldCancel = setRawVisible_btnCallHoldCancel;
    const isVisible_btnCallTransfer = rawVisible_btnCallTransfer && rawVisible_Shape4;
    const setIsVisible_btnCallTransfer = setRawVisible_btnCallTransfer;
    const isVisible_btnCallHangup = rawVisible_btnCallHangup && rawVisible_Shape6;
    const setIsVisible_btnCallHangup = setRawVisible_btnCallHangup;
    const isVisible_btnExtension51 = rawVisible_btnExtension51 && rawVisible_Shape0;
    const setIsVisible_btnExtension51 = setRawVisible_btnExtension51;
    const isVisible_btnExtension52 = rawVisible_btnExtension52 && rawVisible_Shape0;
    const setIsVisible_btnExtension52 = setRawVisible_btnExtension52;
    const isVisible_btnExtension53 = rawVisible_btnExtension53 && rawVisible_Shape0;
    const setIsVisible_btnExtension53 = setRawVisible_btnExtension53;
    const isVisible_btnExtension61 = rawVisible_btnExtension61 && rawVisible_Shape1;
    const setIsVisible_btnExtension61 = setRawVisible_btnExtension61;
    const isVisible_btnExtension62 = rawVisible_btnExtension62 && rawVisible_Shape1;
    const setIsVisible_btnExtension62 = setRawVisible_btnExtension62;
    const isVisible_btnExtension63 = rawVisible_btnExtension63 && rawVisible_Shape1;
    const setIsVisible_btnExtension63 = setRawVisible_btnExtension63;
    const isVisible_btnCallInTransfer = rawVisible_btnCallInTransfer && rawVisible_Shape4;
    const setIsVisible_btnCallInTransfer = setRawVisible_btnCallInTransfer;
    const isVisible_edVersion = rawVisible_edVersion;
    const setIsVisible_edVersion = setRawVisible_edVersion;
    const isVisible_api = rawVisible_api;
    const setIsVisible_api = setRawVisible_api;
    const isVisible_lbLoginTime = rawVisible_lbLoginTime;
    const setIsVisible_lbLoginTime = setRawVisible_lbLoginTime;
    const isVisible_btnAPI = rawVisible_btnAPI;
    const setIsVisible_btnAPI = setRawVisible_btnAPI;
    const isVisible_btnTest = rawVisible_btnTest;
    const setIsVisible_btnTest = setRawVisible_btnTest;
    const isVisible_imgCtiLogin = rawVisible_imgCtiLogin;
    const setIsVisible_imgCtiLogin = setRawVisible_imgCtiLogin;
    const isVisible_fileSaveFile = rawVisible_fileSaveFile;
    const setIsVisible_fileSaveFile = setRawVisible_fileSaveFile;
    const isVisible_fileDialogFile = rawVisible_fileDialogFile;
    const setIsVisible_fileDialogFile = setRawVisible_fileDialogFile;
    const isVisible_imgCallInbound = rawVisible_imgCallInbound;
    const setIsVisible_imgCallInbound = setRawVisible_imgCallInbound;
    const isVisible_lbInfomsg = rawVisible_lbInfomsg;
    const setIsVisible_lbInfomsg = setRawVisible_lbInfomsg;

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_AgentState([]);
            setds_Statesubcode([]);
            setds_CtiInfo([]);
            setds_CtiAgentList([]);
            setds_oMinwonList([]);
            setds_iCallKeyIn([]);
            setds_oCallKeyIn([]);
            setds_oUserDNInfo([]);
            setds_oResult([]);
            setds_FileList([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const DivTest_Button0_OnClick = () => {
        console.log('DivTest_Button0_OnClick clicked');
    };
    const DivTest_btnDsXml_OnClick = () => {
        console.log('DivTest_btnDsXml_OnClick clicked');
    };
    const DivTest_btnGdsXml_OnClick = () => {
        console.log('DivTest_btnGdsXml_OnClick clicked');
    };
    const DivTest_btnGsXml_OnClick = () => {
        console.log('DivTest_btnGsXml_OnClick clicked');
    };
    const DivTest_btntxtResponse_OnClick = () => {
        console.log('DivTest_btntxtResponse_OnClick clicked');
    };
    const api_Dialing = () => {
        console.log('api_Dialing clicked');
    };
    const api_Established = () => {
        console.log('api_Established clicked');
    };
    const api_Initiated = () => {
        console.log('api_Initiated clicked');
    };
    const api_PartyAdded = () => {
        console.log('api_PartyAdded clicked');
    };
    const api_PartyChanged = () => {
        console.log('api_PartyChanged clicked');
    };
    const api_PartyDeleted = () => {
        console.log('api_PartyDeleted clicked');
    };
    const api_Released = () => {
        console.log('api_Released clicked');
    };
    const api_Ringing = () => {
        console.log('api_Ringing clicked');
    };
    const btnKeyinHP_OnClick = () => {
        console.log('btnKeyinHP_OnClick clicked');
    };
    const divApi_Button12_OnClick = () => {
        console.log('divApi_Button12_OnClick clicked');
    };
    const divApi_Button6_OnClick = () => {
        console.log('divApi_Button6_OnClick clicked');
    };
    const fnApiAgentLogin = () => {
        console.log('fnApiAgentLogin clicked');
    };
    const fnApiAgentReport = () => {
        console.log('fnApiAgentReport clicked');
    };
    const fnApiAgentSubscribe = () => {
        console.log('fnApiAgentSubscribe clicked');
    };
    const fnApiAnswerCall = () => {
        console.log('fnApiAnswerCall clicked');
    };
    const fnApiChkGetAgentState = () => {
        console.log('fnApiChkGetAgentState clicked');
    };
    const fnApiClearCall = () => {
        console.log('fnApiClearCall clicked');
    };
    const fnApiCloseSubscribe = () => {
        console.log('fnApiCloseSubscribe clicked');
    };
    const fnApiGetAgentList = () => {
        console.log('fnApiGetAgentList clicked');
    };
    const fnApiGetAgentState = () => {
        console.log('fnApiGetAgentState clicked');
    };
    const fnApiGetStateSubcode = () => {
        console.log('fnApiGetStateSubcode clicked');
    };
    const fnApiGetValue = () => {
        console.log('fnApiGetValue clicked');
    };
    const fnApiHoldCall = () => {
        console.log('fnApiHoldCall clicked');
    };
    const fnApiMakeCall = () => {
        console.log('fnApiMakeCall clicked');
    };
    const fnApiMonitorStart = () => {
        console.log('fnApiMonitorStart clicked');
    };
    const fnApiMuteTransfer = () => {
        console.log('fnApiMuteTransfer clicked');
    };
    const fnApiOpenServer = () => {
        console.log('fnApiOpenServer clicked');
    };
    const fnApiQueueCloseSubscribe = () => {
        console.log('fnApiQueueCloseSubscribe clicked');
    };
    const fnApiQueueSubscribe = () => {
        console.log('fnApiQueueSubscribe clicked');
    };
    const fnApiRetrieveCall = () => {
        console.log('fnApiRetrieveCall clicked');
    };
    const fnApiSetAfterCallState = () => {
        console.log('fnApiSetAfterCallState clicked');
    };
    const fnApiSetAgentState = () => {
        console.log('fnApiSetAgentState clicked');
    };
    const fnApiSinglestepConference = () => {
        console.log('fnApiSinglestepConference clicked');
    };
    const fnApiSinglestepTransfer = () => {
        console.log('fnApiSinglestepTransfer clicked');
    };
    const fnCleartxtResponse = () => {
        console.log('fnCleartxtResponse clicked');
    };
    const fnClickBtn = () => {
        console.log('fnClickBtn clicked');
    };
    const fnDivCtiVisible = () => {
        console.log('fnDivCtiVisible clicked');
    };
    const fnDivTestVisible = () => {
        console.log('fnDivTestVisible clicked');
    };
    const imgCallInbound_OnClick = () => {
        console.log('imgCallInbound_OnClick clicked');
    };
    const imgCtiLogin_OnClick = () => {
        console.log('imgCtiLogin_OnClick clicked');
    };
    const imgKemsLogo_OnClick = () => {
        console.log('imgKemsLogo_OnClick clicked');
    };

    return {
        isLoading,
        ds_AgentState,
        ds_Statesubcode,
        ds_CtiInfo,
        ds_CtiAgentList,
        ds_oMinwonList,
        ds_iCallKeyIn,
        ds_oCallKeyIn,
        ds_oUserDNInfo,
        ds_oResult,
        ds_FileList,
        isVisible_divJubsu,
        setIsVisible_divJubsu,
        isVisible_DivTest,
        setIsVisible_DivTest,
        isVisible_btnGsXml,
        setIsVisible_btnGsXml,
        isVisible_txtArea,
        setIsVisible_txtArea,
        isVisible_btnDsXml,
        setIsVisible_btnDsXml,
        isVisible_btnGdsXml,
        setIsVisible_btnGdsXml,
        isVisible_btntxtResponse,
        setIsVisible_btntxtResponse,
        isVisible_Button0,
        setIsVisible_Button0,
        isVisible_divApi,
        setIsVisible_divApi,
        isVisible_btnAgentLogin,
        setIsVisible_btnAgentLogin,
        isVisible_btnMonitorStart,
        setIsVisible_btnMonitorStart,
        isVisible_btnOpenServer,
        setIsVisible_btnOpenServer,
        isVisible_txtGConnID,
        setIsVisible_txtGConnID,
        isVisible_Static57,
        setIsVisible_Static57,
        isVisible_txtDestDN,
        setIsVisible_txtDestDN,
        isVisible_Static55,
        setIsVisible_Static55,
        isVisible_txtGThisDN,
        setIsVisible_txtGThisDN,
        isVisible_Static19,
        setIsVisible_Static19,
        isVisible_cbStatesubcode,
        setIsVisible_cbStatesubcode,
        isVisible_Static35,
        setIsVisible_Static35,
        isVisible_cbAgentState,
        setIsVisible_cbAgentState,
        isVisible_Static28,
        setIsVisible_Static28,
        isVisible_txtAgentID,
        setIsVisible_txtAgentID,
        isVisible_Static24,
        setIsVisible_Static24,
        isVisible_txtGExHandle,
        setIsVisible_txtGExHandle,
        isVisible_Static36,
        setIsVisible_Static36,
        isVisible_txtHandle,
        setIsVisible_txtHandle,
        isVisible_Static1,
        setIsVisible_Static1,
        isVisible_txtDN,
        setIsVisible_txtDN,
        isVisible_Static20,
        setIsVisible_Static20,
        isVisible_btnMakeCall,
        setIsVisible_btnMakeCall,
        isVisible_btnClearCall,
        setIsVisible_btnClearCall,
        isVisible_btnAnswerCall,
        setIsVisible_btnAnswerCall,
        isVisible_stTxtResponse,
        setIsVisible_stTxtResponse,
        isVisible_btnGetAgentList,
        setIsVisible_btnGetAgentList,
        isVisible_btnAgentReport,
        setIsVisible_btnAgentReport,
        isVisible_btnGetStateSubcode,
        setIsVisible_btnGetStateSubcode,
        isVisible_btnSetAgentState,
        setIsVisible_btnSetAgentState,
        isVisible_btnGetAgentState,
        setIsVisible_btnGetAgentState,
        isVisible_btnHoldCall,
        setIsVisible_btnHoldCall,
        isVisible_btnRetrieveCall,
        setIsVisible_btnRetrieveCall,
        isVisible_btnTransferCall,
        setIsVisible_btnTransferCall,
        isVisible_btnMuteTransfer,
        setIsVisible_btnMuteTransfer,
        isVisible_txtCallDn,
        setIsVisible_txtCallDn,
        isVisible_btnSetAfterCallState,
        setIsVisible_btnSetAfterCallState,
        isVisible_Static2,
        setIsVisible_Static2,
        isVisible_cbAgentStateAfter,
        setIsVisible_cbAgentStateAfter,
        isVisible_Static3,
        setIsVisible_Static3,
        isVisible_Static0,
        setIsVisible_Static0,
        isVisible_txtCallType,
        setIsVisible_txtCallType,
        isVisible_btnAgentSubscribe,
        setIsVisible_btnAgentSubscribe,
        isVisible_Static4,
        setIsVisible_Static4,
        isVisible_txtSubscribeID,
        setIsVisible_txtSubscribeID,
        isVisible_btnCloseSubscribe,
        setIsVisible_btnCloseSubscribe,
        isVisible_btnQueueSubscribe,
        setIsVisible_btnQueueSubscribe,
        isVisible_Static5,
        setIsVisible_Static5,
        isVisible_txtQueueSubscribeID,
        setIsVisible_txtQueueSubscribeID,
        isVisible_btnCloseQueueSubscribe,
        setIsVisible_btnCloseQueueSubscribe,
        isVisible_Static6,
        setIsVisible_Static6,
        isVisible_txtGConnID2,
        setIsVisible_txtGConnID2,
        isVisible_Static8,
        setIsVisible_Static8,
        isVisible_txtTransferGubun,
        setIsVisible_txtTransferGubun,
        isVisible_Button1,
        setIsVisible_Button1,
        isVisible_Button2,
        setIsVisible_Button2,
        isVisible_Button3,
        setIsVisible_Button3,
        isVisible_txtChkAgentState,
        setIsVisible_txtChkAgentState,
        isVisible_Button4,
        setIsVisible_Button4,
        isVisible_Static7,
        setIsVisible_Static7,
        isVisible_txtChkAgentID,
        setIsVisible_txtChkAgentID,
        isVisible_Button5,
        setIsVisible_Button5,
        isVisible_Static9,
        setIsVisible_Static9,
        isVisible_txtExHandle,
        setIsVisible_txtExHandle,
        isVisible_Button7,
        setIsVisible_Button7,
        isVisible_Button8,
        setIsVisible_Button8,
        isVisible_Button9,
        setIsVisible_Button9,
        isVisible_txtExKey,
        setIsVisible_txtExKey,
        isVisible_txtExValue,
        setIsVisible_txtExValue,
        isVisible_txtFieldValue,
        setIsVisible_txtFieldValue,
        isVisible_Button10,
        setIsVisible_Button10,
        isVisible_Button11,
        setIsVisible_Button11,
        isVisible_Static10,
        setIsVisible_Static10,
        isVisible_Static11,
        setIsVisible_Static11,
        isVisible_txtDestDNPre,
        setIsVisible_txtDestDNPre,
        isVisible_Static12,
        setIsVisible_Static12,
        isVisible_gdList,
        setIsVisible_gdList,
        isVisible_btnKeyinHP,
        setIsVisible_btnKeyinHP,
        isVisible_edKeyInValue,
        setIsVisible_edKeyInValue,
        isVisible_Static13,
        setIsVisible_Static13,
        isVisible_txtLastDn,
        setIsVisible_txtLastDn,
        isVisible_Button6,
        setIsVisible_Button6,
        isVisible_Static14,
        setIsVisible_Static14,
        isVisible_Button12,
        setIsVisible_Button12,
        isVisible_edQueue,
        setIsVisible_edQueue,
        isVisible_txtResponse,
        setIsVisible_txtResponse,
        isVisible_imgKemsLogo,
        setIsVisible_imgKemsLogo,
        isVisible_edCallStateTxt,
        setIsVisible_edCallStateTxt,
        isVisible_edStateTime,
        setIsVisible_edStateTime,
        isVisible_edAgentSubscribe,
        setIsVisible_edAgentSubscribe,
        isVisible_Static15,
        setIsVisible_Static15,
        isVisible_edTenantSubscribe,
        setIsVisible_edTenantSubscribe,
        isVisible_Shape5,
        setIsVisible_Shape5,
        isVisible_btnCallReady,
        setIsVisible_btnCallReady,
        isVisible_cbxStop,
        setIsVisible_cbxStop,
        isVisible_btnCallStop,
        setIsVisible_btnCallStop,
        isVisible_Shape1,
        setIsVisible_Shape1,
        isVisible_Shape0,
        setIsVisible_Shape0,
        isVisible_Shape3,
        setIsVisible_Shape3,
        isVisible_Shape4,
        setIsVisible_Shape4,
        isVisible_Shape6,
        setIsVisible_Shape6,
        isVisible_btnCallHold,
        setIsVisible_btnCallHold,
        isVisible_btnCallHoldCancel,
        setIsVisible_btnCallHoldCancel,
        isVisible_btnCallTransfer,
        setIsVisible_btnCallTransfer,
        isVisible_btnCallHangup,
        setIsVisible_btnCallHangup,
        isVisible_btnExtension51,
        setIsVisible_btnExtension51,
        isVisible_btnExtension52,
        setIsVisible_btnExtension52,
        isVisible_btnExtension53,
        setIsVisible_btnExtension53,
        isVisible_btnExtension61,
        setIsVisible_btnExtension61,
        isVisible_btnExtension62,
        setIsVisible_btnExtension62,
        isVisible_btnExtension63,
        setIsVisible_btnExtension63,
        isVisible_btnCallInTransfer,
        setIsVisible_btnCallInTransfer,
        isVisible_edVersion,
        setIsVisible_edVersion,
        isVisible_api,
        setIsVisible_api,
        isVisible_lbLoginTime,
        setIsVisible_lbLoginTime,
        isVisible_btnAPI,
        setIsVisible_btnAPI,
        isVisible_btnTest,
        setIsVisible_btnTest,
        isVisible_imgCtiLogin,
        setIsVisible_imgCtiLogin,
        isVisible_fileSaveFile,
        setIsVisible_fileSaveFile,
        isVisible_fileDialogFile,
        setIsVisible_fileDialogFile,
        isVisible_imgCallInbound,
        setIsVisible_imgCallInbound,
        isVisible_lbInfomsg,
        setIsVisible_lbInfomsg,
        DivTest_Button0_OnClick,
        DivTest_btnDsXml_OnClick,
        DivTest_btnGdsXml_OnClick,
        DivTest_btnGsXml_OnClick,
        DivTest_btntxtResponse_OnClick,
        api_Dialing,
        api_Established,
        api_Initiated,
        api_PartyAdded,
        api_PartyChanged,
        api_PartyDeleted,
        api_Released,
        api_Ringing,
        btnKeyinHP_OnClick,
        divApi_Button12_OnClick,
        divApi_Button6_OnClick,
        fnApiAgentLogin,
        fnApiAgentReport,
        fnApiAgentSubscribe,
        fnApiAnswerCall,
        fnApiChkGetAgentState,
        fnApiClearCall,
        fnApiCloseSubscribe,
        fnApiGetAgentList,
        fnApiGetAgentState,
        fnApiGetStateSubcode,
        fnApiGetValue,
        fnApiHoldCall,
        fnApiMakeCall,
        fnApiMonitorStart,
        fnApiMuteTransfer,
        fnApiOpenServer,
        fnApiQueueCloseSubscribe,
        fnApiQueueSubscribe,
        fnApiRetrieveCall,
        fnApiSetAfterCallState,
        fnApiSetAgentState,
        fnApiSinglestepConference,
        fnApiSinglestepTransfer,
        fnCleartxtResponse,
        fnClickBtn,
        fnDivCtiVisible,
        fnDivTestVisible,
        imgCallInbound_OnClick,
        imgCtiLogin_OnClick,
        imgKemsLogo_OnClick,
    };
};