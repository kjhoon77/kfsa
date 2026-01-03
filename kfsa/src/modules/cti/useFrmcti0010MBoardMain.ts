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
    const [isVisible_divJubsu, setIsVisible_divJubsu] = useState(true);
    const [isVisible_DivTest, setIsVisible_DivTest] = useState(false);
    const [isVisible_btnGsXml, setIsVisible_btnGsXml] = useState(true);
    const [isVisible_txtArea, setIsVisible_txtArea] = useState(true);
    const [isVisible_btnDsXml, setIsVisible_btnDsXml] = useState(true);
    const [isVisible_btnGdsXml, setIsVisible_btnGdsXml] = useState(true);
    const [isVisible_btntxtResponse, setIsVisible_btntxtResponse] = useState(true);
    const [isVisible_Button0, setIsVisible_Button0] = useState(true);
    const [isVisible_divApi, setIsVisible_divApi] = useState(false);
    const [isVisible_btnAgentLogin, setIsVisible_btnAgentLogin] = useState(false);
    const [isVisible_btnMonitorStart, setIsVisible_btnMonitorStart] = useState(false);
    const [isVisible_btnOpenServer, setIsVisible_btnOpenServer] = useState(false);
    const [isVisible_txtGConnID, setIsVisible_txtGConnID] = useState(true);
    const [isVisible_Static57, setIsVisible_Static57] = useState(true);
    const [isVisible_txtDestDN, setIsVisible_txtDestDN] = useState(true);
    const [isVisible_Static55, setIsVisible_Static55] = useState(true);
    const [isVisible_txtGThisDN, setIsVisible_txtGThisDN] = useState(true);
    const [isVisible_Static19, setIsVisible_Static19] = useState(true);
    const [isVisible_cbStatesubcode, setIsVisible_cbStatesubcode] = useState(true);
    const [isVisible_Static35, setIsVisible_Static35] = useState(true);
    const [isVisible_cbAgentState, setIsVisible_cbAgentState] = useState(true);
    const [isVisible_Static28, setIsVisible_Static28] = useState(true);
    const [isVisible_txtAgentID, setIsVisible_txtAgentID] = useState(true);
    const [isVisible_Static24, setIsVisible_Static24] = useState(true);
    const [isVisible_txtGExHandle, setIsVisible_txtGExHandle] = useState(true);
    const [isVisible_Static36, setIsVisible_Static36] = useState(true);
    const [isVisible_txtHandle, setIsVisible_txtHandle] = useState(true);
    const [isVisible_Static1, setIsVisible_Static1] = useState(true);
    const [isVisible_txtDN, setIsVisible_txtDN] = useState(true);
    const [isVisible_Static20, setIsVisible_Static20] = useState(true);
    const [isVisible_btnMakeCall, setIsVisible_btnMakeCall] = useState(false);
    const [isVisible_btnClearCall, setIsVisible_btnClearCall] = useState(false);
    const [isVisible_btnAnswerCall, setIsVisible_btnAnswerCall] = useState(false);
    const [isVisible_stTxtResponse, setIsVisible_stTxtResponse] = useState(true);
    const [isVisible_btnGetAgentList, setIsVisible_btnGetAgentList] = useState(false);
    const [isVisible_btnAgentReport, setIsVisible_btnAgentReport] = useState(false);
    const [isVisible_btnGetStateSubcode, setIsVisible_btnGetStateSubcode] = useState(false);
    const [isVisible_btnSetAgentState, setIsVisible_btnSetAgentState] = useState(false);
    const [isVisible_btnGetAgentState, setIsVisible_btnGetAgentState] = useState(false);
    const [isVisible_btnHoldCall, setIsVisible_btnHoldCall] = useState(false);
    const [isVisible_btnRetrieveCall, setIsVisible_btnRetrieveCall] = useState(false);
    const [isVisible_btnTransferCall, setIsVisible_btnTransferCall] = useState(false);
    const [isVisible_btnMuteTransfer, setIsVisible_btnMuteTransfer] = useState(false);
    const [isVisible_txtCallDn, setIsVisible_txtCallDn] = useState(true);
    const [isVisible_btnSetAfterCallState, setIsVisible_btnSetAfterCallState] = useState(false);
    const [isVisible_Static2, setIsVisible_Static2] = useState(true);
    const [isVisible_cbAgentStateAfter, setIsVisible_cbAgentStateAfter] = useState(true);
    const [isVisible_Static3, setIsVisible_Static3] = useState(true);
    const [isVisible_Static0, setIsVisible_Static0] = useState(true);
    const [isVisible_txtCallType, setIsVisible_txtCallType] = useState(true);
    const [isVisible_btnAgentSubscribe, setIsVisible_btnAgentSubscribe] = useState(false);
    const [isVisible_Static4, setIsVisible_Static4] = useState(true);
    const [isVisible_txtSubscribeID, setIsVisible_txtSubscribeID] = useState(true);
    const [isVisible_btnCloseSubscribe, setIsVisible_btnCloseSubscribe] = useState(false);
    const [isVisible_btnQueueSubscribe, setIsVisible_btnQueueSubscribe] = useState(false);
    const [isVisible_Static5, setIsVisible_Static5] = useState(true);
    const [isVisible_txtQueueSubscribeID, setIsVisible_txtQueueSubscribeID] = useState(true);
    const [isVisible_btnCloseQueueSubscribe, setIsVisible_btnCloseQueueSubscribe] = useState(false);
    const [isVisible_Static6, setIsVisible_Static6] = useState(true);
    const [isVisible_txtGConnID2, setIsVisible_txtGConnID2] = useState(true);
    const [isVisible_Static8, setIsVisible_Static8] = useState(true);
    const [isVisible_txtTransferGubun, setIsVisible_txtTransferGubun] = useState(true);
    const [isVisible_Button1, setIsVisible_Button1] = useState(false);
    const [isVisible_Button2, setIsVisible_Button2] = useState(false);
    const [isVisible_Button3, setIsVisible_Button3] = useState(false);
    const [isVisible_txtChkAgentState, setIsVisible_txtChkAgentState] = useState(true);
    const [isVisible_Button4, setIsVisible_Button4] = useState(false);
    const [isVisible_Static7, setIsVisible_Static7] = useState(true);
    const [isVisible_txtChkAgentID, setIsVisible_txtChkAgentID] = useState(true);
    const [isVisible_Button5, setIsVisible_Button5] = useState(false);
    const [isVisible_Static9, setIsVisible_Static9] = useState(true);
    const [isVisible_txtExHandle, setIsVisible_txtExHandle] = useState(true);
    const [isVisible_Button7, setIsVisible_Button7] = useState(false);
    const [isVisible_Button8, setIsVisible_Button8] = useState(false);
    const [isVisible_Button9, setIsVisible_Button9] = useState(false);
    const [isVisible_txtExKey, setIsVisible_txtExKey] = useState(true);
    const [isVisible_txtExValue, setIsVisible_txtExValue] = useState(true);
    const [isVisible_txtFieldValue, setIsVisible_txtFieldValue] = useState(true);
    const [isVisible_Button10, setIsVisible_Button10] = useState(false);
    const [isVisible_Button11, setIsVisible_Button11] = useState(false);
    const [isVisible_Static10, setIsVisible_Static10] = useState(true);
    const [isVisible_Static11, setIsVisible_Static11] = useState(true);
    const [isVisible_txtDestDNPre, setIsVisible_txtDestDNPre] = useState(true);
    const [isVisible_Static12, setIsVisible_Static12] = useState(true);
    const [isVisible_gdList, setIsVisible_gdList] = useState(true);
    const [isVisible_btnKeyinHP, setIsVisible_btnKeyinHP] = useState(false);
    const [isVisible_edKeyInValue, setIsVisible_edKeyInValue] = useState(false);
    const [isVisible_Static13, setIsVisible_Static13] = useState(true);
    const [isVisible_txtLastDn, setIsVisible_txtLastDn] = useState(true);
    const [isVisible_Button6, setIsVisible_Button6] = useState(false);
    const [isVisible_Static14, setIsVisible_Static14] = useState(false);
    const [isVisible_Button12, setIsVisible_Button12] = useState(false);
    const [isVisible_edQueue, setIsVisible_edQueue] = useState(false);
    const [isVisible_txtResponse, setIsVisible_txtResponse] = useState(true);
    const [isVisible_imgKemsLogo, setIsVisible_imgKemsLogo] = useState(true);
    const [isVisible_edCallStateTxt, setIsVisible_edCallStateTxt] = useState(true);
    const [isVisible_edStateTime, setIsVisible_edStateTime] = useState(true);
    const [isVisible_edAgentSubscribe, setIsVisible_edAgentSubscribe] = useState(true);
    const [isVisible_Static15, setIsVisible_Static15] = useState(true);
    const [isVisible_edTenantSubscribe, setIsVisible_edTenantSubscribe] = useState(true);
    const [isVisible_Shape5, setIsVisible_Shape5] = useState(true);
    const [isVisible_btnCallReady, setIsVisible_btnCallReady] = useState(true);
    const [isVisible_cbxStop, setIsVisible_cbxStop] = useState(true);
    const [isVisible_btnCallStop, setIsVisible_btnCallStop] = useState(true);
    const [isVisible_Shape1, setIsVisible_Shape1] = useState(true);
    const [isVisible_Shape0, setIsVisible_Shape0] = useState(true);
    const [isVisible_Shape3, setIsVisible_Shape3] = useState(true);
    const [isVisible_Shape4, setIsVisible_Shape4] = useState(true);
    const [isVisible_Shape6, setIsVisible_Shape6] = useState(true);
    const [isVisible_btnCallHold, setIsVisible_btnCallHold] = useState(true);
    const [isVisible_btnCallHoldCancel, setIsVisible_btnCallHoldCancel] = useState(true);
    const [isVisible_btnCallTransfer, setIsVisible_btnCallTransfer] = useState(true);
    const [isVisible_btnCallHangup, setIsVisible_btnCallHangup] = useState(true);
    const [isVisible_btnExtension51, setIsVisible_btnExtension51] = useState(true);
    const [isVisible_btnExtension52, setIsVisible_btnExtension52] = useState(true);
    const [isVisible_btnExtension53, setIsVisible_btnExtension53] = useState(true);
    const [isVisible_btnExtension61, setIsVisible_btnExtension61] = useState(true);
    const [isVisible_btnExtension62, setIsVisible_btnExtension62] = useState(true);
    const [isVisible_btnExtension63, setIsVisible_btnExtension63] = useState(true);
    const [isVisible_btnCallInTransfer, setIsVisible_btnCallInTransfer] = useState(true);
    const [isVisible_edVersion, setIsVisible_edVersion] = useState(true);
    const [isVisible_api, setIsVisible_api] = useState(false);
    const [isVisible_lbLoginTime, setIsVisible_lbLoginTime] = useState(false);
    const [isVisible_btnAPI, setIsVisible_btnAPI] = useState(false);
    const [isVisible_btnTest, setIsVisible_btnTest] = useState(false);
    const [isVisible_imgCtiLogin, setIsVisible_imgCtiLogin] = useState(false);
    const [isVisible_fileSaveFile, setIsVisible_fileSaveFile] = useState(true);
    const [isVisible_fileDialogFile, setIsVisible_fileDialogFile] = useState(true);
    const [isVisible_imgCallInbound, setIsVisible_imgCallInbound] = useState(false);
    const [isVisible_lbInfomsg, setIsVisible_lbInfomsg] = useState(false);

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