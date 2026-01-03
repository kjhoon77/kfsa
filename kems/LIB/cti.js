﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿/*
 * 프로그램명 : cti.js
 * 설명 : 민원상담 js 프로그램
 * 작성일 : 2023.04.
 * 작성자 : jjh 
 */

#include "LIB::COMMON.js"; // 공통 관련

var ls_SystemGubun; // 현재 화면 시스템 구분
var ls_SystemMenuId; // 현재 화면 시스템 메뉴 ID
var ms_FormAuth = ""; // 폼 권한
var mb_IsNewData = true; // 저장버튼이 클릭되었는지 여부
var ls_Prefix = iif(gs_IsTlogin == "N", "cti", "outerbiz"); // 핸드폰 접속으로 구분 위해 만듬 

/* 공통 필수 시작 */
function Form_OnActivate(obj) {
    gfn_Form_OnActivate(obj);

    gs_SystemGubun = ls_SystemGubun;
    gs_SystemMenuId = ls_SystemMenuId;

    var ls_FormId = split(sFormUrl, "::");
    ls_FormId = split(ls_FormId[1], ".");
    global.mnuLeft.cbxOpenForm.Value = ls_FormId[0];

    global.mnuTop.tabTopMenu.TabIndex = gds_oTopMenu.FindRow("MSYSGUBUN", gs_SystemGubun);
}

function Form_OnDeactivate(obj) {
    // to do

    gfn_Form_OnDeactivate(obj);
}

function Form_OnUnloadCompleted(obj) {
	if (gfn_CheckChangedGridTreeview(this)) {
        if (!gfn_Confirm("변경된 내용이 있습니다. 그래도 [" + title + "] 창을 닫으시겠습니까?")) {
            return false;
        }
    }

    var ls_FormId = split(sFormUrl, "::");
    ls_FormId = split(ls_FormId[1], ".");
    gfn_DeleteOpenedMenu(ls_FormId[0]);

    gfn_Form_OnUnloadCompleted(obj);
}

/**
 * 폼 키 다운
 */
function Form_OnKeyDown(obj,objSenderObj,nChar,bShift,bControl,bAlt,nLLParam,nHLParam) {
    gfn_Form_OnKeyDown(obj,objSenderObj,nChar,bShift,bControl,bAlt,nLLParam,nHLParam);
}


function Form_OnFocus(obj) {
    gfn_Form_OnFocus(obj);

    // to do
}

function Form_OnKillFocus(obj) {
    // to do

    gfn_Form_OnKillFocus(obj);
}

/*
 * 기능 : 취소
 */
function lfn_Cancel(obj) {
    gfn_FormInit(this);
}

/*
 * 기능 : 엑셀
 */
function lfn_Excel(obj) {
    gfn_GridToExcel(this);
}

/*
 * 기능 : 인쇄
 */
function lfn_PrintScreen(obj) {
    gfn_PrintScreen(this);
}

/*
 * 기능 : 종료
 */
function lfn_End(obj) {
    Close();
}

/* 사용자 이벤트 함수 */
function lfn_SortGrid_OnHeadClick(obj,nCell,nX,nY,nPivotIndex) {
    var lobj_Dataset = object(obj.BindDataset);
    // 데이터가 있는 경우 해당 컬럼을 기준으로 정렬한다.
    if (lobj_Dataset.GetRowCount() > 1) {
        gfn_GridCellSort(obj, nCell); // 해당 셀정렬을 호출한다.
    }
}

/**
 * 그리드 전체 체크
 */
function lfn_GridCheck(obj,nCell,nX,nY,nPivotIndex) {
	var lobj_Dataset = object(obj.BindDataset);
	if (nCell == 0) { // 선택
        if (obj.GetCellProp("head", nCell, "text") == 1) { // 전체가 이미 선택된 경우
            obj.SetCellProp("head", nCell, "text", 0);
            for(i = 0; i < lobj_Dataset.RowCount(); i++) {
                if (lobj_Dataset.GetColumn(i, "SEL") != "X") {
                    lobj_Dataset.SetColumn(i, "SEL", "0");
                }
            }
        } else { // 전체가 이미 선택되지 않은 경우
            obj.SetCellProp("head", nCell, "text", 1);
            for(i = 0; i < lobj_Dataset.RowCount(); i++) {
                if (lobj_Dataset.GetColumn(i, "SEL") != "X") {
                    lobj_Dataset.SetColumn(i, "SEL", "1");
                }
            }
        }
	}
}

/**
 * 객체 생성 후 해제
*/
function lfn_ctiCreateCheck() {

    //객체 open
    Create("ICAPI5", "objIcapi5", 'left="10" top="10" width="0" height="0"'); // 렉스퍼트 오브젝트를 생성한다. 
    var oRex = objIcapi5.ICGetVersion();
    if (oRex == null) {
        gfn_Alert("ICAPI5 File is not exist.");
        return ;
    }
    
    Destroy("objIcapi5");
    return oRex;
    
}


/**
 * 객체 전달 
*/
function lfn_ctiRefCheck(objIcapi5) {

    var oRex = objIcapi5.ICGetVersion();
    if (oRex == null) {
        gfn_Alert("ICAPI5 File is not exist.");
        return ;
    }
    
    return oRex;
    
}

/**
 * 시스템일자 
*/
function lfn_ctiSysDate() {
 	
	gds_Temp.ClearData();

    tit_clearActionInfo();
	tit_addSearchActionInfo("cti:selectGetSysdate", false);
	// 서버 호출 
	tit_callService(
		""
		,""
		,""	// inDs
		,"gds_Temp=ds_Temp"	// outDs
		, ""    // 구분 그룹 // args 
        ,""
		,true
		,true
		,true
	);
 
    if (gds_Temp.GetCount() > 0) {
        return gds_Temp.GetColumn(0, "CHAR_SYSDATE");
    } else {
        return "";
    }
    
}


/*********************************************************************************/

function lfnMakeOpenServerResult(result) {
	var str;

	switch (result) {
		case -26: str = "Win32 OCX Error. OCX의 Event 를 전달 받을 HWND 핸들이 없습니다. InitAPI() 함수 호출 후 사용";  break;
		case -25: str = "이미 연결되어 있는 Socket 의 IP와 지금 연결 하려는 IP 정보가 다릅니다";    break;
		case -24: str = "입력값 중에 NULL 값 또는 잘못된 데이터가 있습니다";    break;
		case -23: str = "OpenServer 최대 개수 초과";        break;
		case -22: str = "재접속 시도중입니다";              break;
		case -21: str = "보내려는 패킷크기가 너무 큽니다";  break;
		case -20: str = "Memory 할당 실패";                 break;
		case -19: str = "올바르지 않은 데이터";             break;
		case -18: str = "이미 할당됨";                      break;
		case -17: str = "이미 처리중";                      break;
		case -16: str = "유효하지 않은 상태";               break;
		case -15: str = "여유 공간 초과 ";                  break;
		case -14: str = "라이센스가 더 이상 없습니다.";     break;
		case -13: str = "발견하지 못함";                    break;
		case -12: str = "이미 사용 중";                     break;
		case -11: str = "대기 시간 초과";                   break;
		case -10: str = "Thread Stop 실패";                 break;
		case  -9: str = "데이터 전송 실패";                 break;
		case  -8: str = "Extension Data 처리 오류";         break;
		case  -7: str = "핸들값 에러";                      break;
		case  -6: str = "이미 연결 되어 있음";              break;
		case  -5: str = "Thread 생성 실패";                 break;
		case  -4: str = "서버 응답 메시지 실패";            break;
		case  -3: str = "대기 시간 초과";                   break;
		case  -2: str = "데이터 전송 실패";                 break;
		case  -1: str = "소켓 에러, 서버를 확인하여 주세요"; break;
		default: str = "알수 없는 에러 코드 : [" + result + "]"; break;
	}

	return str;
}

function lfnMakeResult(result) {
	var str;
	
	switch (result) {
		case -19: str = "입력값 중에 NULL 또는 잘못된 데이터가 있습니다";   break;
		case -18: str = "Out 형 변수의 값이 NULL 입니다";                   break;  
		case -17: str = "Socket 연결이 끊겼습니다.";                        break; 	// Socket 연결 끊김.
		case -16: str = "Register 된 DN을 찾지 못하였습니다.";              break; 	// Regoster 된 DN Not Found
		case -15: str = "Memory 할당 실패";                                 break; 	// Memory 할당 실패
		case -14: str = "보내려는 패킷이 너무 큽니다.";                     break; 	// 보낼 패킷 크기 초과
		case -13: str = "올바르지 않은 데이터";                             break; 	//올바르지 않은 데이터
		case -12: str = "이미 할당 됨";                                     break; 	//이미 할당됨
		case -11: str = "이미 처리 중입니다.";                              break; 	//이미 처리중
		case -10: str = "유효 하지 않은 상태입니다";                        break; 	//유효하지 않은 상태
		case  -9: str = "여유 공간 초과";                                   break; 	//여유 공간 초과
		case  -8: str = "라이센스가 더 이상 없습니다.";                     break; 	//라이센스 초과
		case  -7: str = "해당하는 데이터를 찾지 못하였습니다";              break; 	//발견하지 못함
		case  -6: str = "이미 사용 중입니다";                               break; 	//이미 사용 중
		case  -5: str = "대기 시간 초과";                                   break; 	// 대기 시간 초과
		case  -4: str = "Thread Stop 실패";                                 break; 	// Thread Stop 에러
		case  -3: str = "데이터 전송 실패";                                 break; 	// 데이터 전송 실패
		case  -2: str = "Extension Data 처리 오류";                         break; 	// 확장 데이터 처리 오류
		case  -1: str = "Handle Error";                                     break; 	// 핸들값 에러이스
		case   0: str = "성공";                                             break; 	// 성공
		case 1001 : str = "이미 사용중인 객체입니다.";					    break;
		case 1002 : str = "객체정보를 찾을 수 없습니다.";					break;
		case 1003 : str = "해당 리소스가 가득 찬 상태입니다.";				break;
		case 1004 : str = "오버플로우가 발생하였습니다.";                   break;
		case 1005 : str = "유효한 상태가 아닙니다.";                        break;
		case 1006 : str = "이미 수행중입니다.";                             break;
		case 1007 : str = "Busy 상태인 객체입니다.";                        break;
		case 1008 : str = "올바르지 않은 데이터입니다.";                    break;
		case 2001 : str = "이미 사용중인 Device입니다.";                    break;
		case 2002 : str = "이미 사용중인 사용자입니다.";                    break;
		case 2003 : str = "사용자가 비-수신대기 상태입니다.";               break;
		case 2004 : str = "Device가 통화중 상태이거나 Unregister 상태입니다.";	break;
		case 2101 : str = "해당 Device 정보를 찾을 수 없습니다.";           break;
		case 2102 : str = "해당 Application ID 정보를 찾을 수 없습니다.";   break;
		case 2103 : str = "해당 Tenant 정보를 찾을 수 없습니다.";           break;
		case 2104 : str = "해당 Monitor ID 정보를 찾을 수 없습니다.";       break;
		case 2105 : str = "해당 사용자 정보를 찾을 수 없습니다.";           break;
		case 2106 : str = "해당 Group 정보를 찾을 수 없습니다.";            break;
		case 2107 : str = "해당 Queue 정보를 찾을 수 없습니다.";            break;
		case 2108 : str = "해당 Skill 정보를 찾을 수 없습니다.";			break;
		case 2109 : str = "사유코드 정보를 찾을 수 없습니다.";				break;
		case 2110 : str = "Connection 정보를 찾을 수 없습니다.";			break;
		case 2111 : str = "Call 정보를 찾을 수 없습니다.";					break;
		case 2112 : str = "DNIS를 찾을 수 없습니다.";                       break;
		case 2201 : str = "시스템 라이선스가 모두 사용중입니다.";			break;
		case 2202 : str = "Tenant 라이선스가 모두 사용중입니다.";			break;
		case 2203 : str = "허용 가능한 모든 Connection이 사용중입니다.";	break;
		case 2301 : str = "허용 가능한 최대 Device 개수를 초과하였습니다.";	break;
		case 2302 : str = "허용 가능한 최대 UserData 크기를 초과하였습니다.";	break;
		case 2401 : str = "Application ID가 유효하지 않습니다.";			break;
		case 2402 : str = "해당 사용자가 유효한 상태가 아닙니다.";			break;
		case 2403 : str = "해당 Device가 유효한 상태가 아닙니다.";			break;
		case 2404 : str = "해당 상태코드는 사용가능한 상태가 아닙니다.";	break;
		case 2405: str = "해당 Connection은 유효한 상태가 아닙니다."; break;
		case 2407 : str = "유효하지 않는 Option 입니다.";                    break;
		case 2501 : str = "해당 범위는 올바르지 않습니다.";					break;
		case 2502 : str = "패스워드가 올바르지 않습니다.";					break;
		case 2503 : str = "Device 정보가 올바르지 않습니다.";				break;
		case 2504 : str = "사용자 정보가 올바르지 않습니다.";				break;
		case 2505 : str = "상태코드 정보가 올바르지 않습니다.";				break;
		case 2506 : str = "Call 정보가 올바르지 않습니다.";					break;
		case	1 	:	str = "activeParticipation";			break;
		case	2 	:	str = "alternate";						break;
		case	3 	:	str = "busy";							break;
		case	4 	:	str = "callBack";						break;
		case	5 	:	str = "callCancelled";					break;
		case	6 	:	str = "callForwardImmediate";			break;
		case	7 	:	str = "callForwardBusy";				break;
		case	8 	:	str = "callForwardNoAnswer";			break;
		case	9 	:	str = "callForward";					break;
		case	10 	:	str = "callNotAnswered";				break;
		case	11 	:	str = "callPickup";						break;
		case	12 	:	str = "campOn";							break;
		case	13 	:	str = "destNotObtainable";				break;
		case	14 	:	str = "doNotDisturb";					break;
		case	15 	:	str = "incompatibleDestination";		break;
		case	16 	:	str = "invalidAccountCode";				break;
		case	17 	:	str = "keyOperation";					break;
		case	18 	:	str = "lockout";						break;
		case	19 	:	str = "maintenance";					break;
		case	20 	:	str = "networkCongestion";				break;
		case	21 	:	str = "networkNotObtainable";			break;
		case	22 	:	str = "newCall";						break;
		case	23 	:	str = "noAvailableAgents";				break;
		case	24 	:	str = "Override";						break;
		case	25 	:	str = "park";							break;
		case	26 	:	str = "overflow";						break;
		case	27 	:	str = "recall";							break;
		case	28 	:	str = "redirected";						break;
		case	29 	:	str = "reorderTone";					break;
		case	30 	:	str = "resourcesNotAvailable";			break;
		case	31 	:	str = "silentParticipation";			break;
		case	32 	:	str = "transfer";						break;
		case	33 	:	str = "trunksBusy";						break;
		case	34 	:	str = "voiceUnitInitiator";				break;
		case	35 	:	str = "blocked";						break;
		case	36 	:	str = "characterCountReached";			break;
		case	37 	:	str = "consultation";					break;
		case	38 	:	str = "distributed";					break;
		case	39 	:	str = "dTMFDigitDetected";				break;
		case	40 	:	str = "durationExceeded";				break;
		case	41 	:	str = "endOfMessageDetected";			break;
		case	42 	:	str = "enteringDistribution";			break;
		case	43 	:	str = "forcedPause";					break;
		case	44 	:	str = "makeCall";						break;
		case	45 	:	str = "messageSizeExceeded";			break;
		case	46 	:	str = "networkSignal";					break;
		case	47 	:	str = "nextMessage";					break;
		case	48 	:	str = "normalClearing";					break;
		case	49 	:	str = "noSpeechDetected";				break;
		case	50 	:	str = "numberChanged";					break;
		case	51 	:	str = "singleStepConference";			break;
		case	52 	:	str = "singleStepTransfer";				break;
		case	53 	:	str = "speechDetected";					break;
		case	54 :	str = "switchingFunctionTerminated";	break;
		case	55 :	str = "terminationCharacterReceived";	break;
		case	57 	:	str = "aCDBusy";						break;
		case	58 	:	str = "aCDForward";						break;
		case	59 	:	str = "aCDSaturated";					break;
		case	60 	:	str = "alertTimeExpired";				break;
		case	61 	:	str = "autoWork";						break;
		case	62 	:	str = "campOnTrunks";					break;
		case	63 	:	str = "conference";						break;
		case	64 	:	str = "destDetected";					break;
		case	65 	:	str = "destOutOfOrder";					break;
		case	66 	:	str = "distributionDelay";				break;
		case	67 	:	str = "forcedTransition";				break;
		case	68 	:	str = "intrude";						break;
		case	69 	:	str = "invalidNumberFormat";			break;
		case	70 	:	str = "joinCall";						break;
		case	71 	:	str = "keyOperationInUse";				break;
		case	72 	:	str = "makePredictiveCall";				break;
		case	73 	:	str = "messageDurationExceeded";		break;
		case	74 	:	str = "multipleAlerting";				break;
		case	75 	:	str = "multipleQueuing";				break;
		case	76 	:	str = "networkDialling";				break;
		case	77 	:	str = "networkOutOfOrder";				break;
		case	78 	:	str = "normal";							break;
		case	79 	:	str = "notAvaliableBearerService";		break;
		case	80 	:	str = "notSupportedBearerService";		break;
		case	81 	:	str = "numberUnallocated";				break;
		case	82 	:	str = "queueCleared";					break;
		case	83 	:	str = "remainsInQueue";					break;
		case	84 	:	str = "reserved";						break;
		case	85 	:	str = "selectedTrunkBusy";				break;
		case	86 	:	str = "suspend";						break;
		case	87 	:	str = "unauthorisedBearerService";		break;
		default: str = "알수 없는 에러 코드 : [" + result.toString() + "]";    break;
	}

	return result + " " + str;
}


function lfnMakeExtensionResult(result) {
	var str;
	
	switch(result){
	case -16 :  str = "입력 값 중에 NULL 또는 잘못된 데이터가 있습니다";    break;
	case -15 :  str = "잘못된 포인터 값입니다";                             break;
	case -14 :  str = "잘못된 위치 값입니다";                               break;
	case -13 :  str = "Extension 문자열의 최대 길이를 초과하였습니다";      break;
	case -12 :  str = "알수 없는 Extesion String 형식입니다";               break;
	case -11 :  str = "잘못된 Record 번호 입니다";                          break;
	case -10 :  str = "잘못된 Field 번호입니다";                            break;
	case  -9 :  str = "잘못된 핸들값입니다";                                break;
	case  -8 :  str = "잘못된 value 값입니다";                              break;
	case  -7 :  str = "잘못된 Key 값입니다";                                break;
	case  -6 :  str = "Extension Data 삽입에 실패하였습니다";               break;
	case  -5 :  str = "Value 값을 찾을 수 없습니다";                        break;
	case  -4 :  str = "key 값을 찾을 수 없습니다";                          break;
	case  -3 :  str = "해당하는 핸들값을 찾지 못하였습니다";                break;
	case  -2 :  str = "Extension 생성하지 못하였습니다";                    break;
	case  -1 :  str = "핸들값 만들기에 실패하였습니다.(MAX_EXTENSION값을 초과하지 않았는지 확인하여 주세요)";   break;
	case   1 :  str = "성공";                                               break;
	default: str = "알수 없는 에러 코드 : [" + result.toString() + "]";     break;
	}
  
	return result + " " + str; 
}


function lfnMakeAgentStateString(state){
	var str;
	/*
	switch(state)
	{
		case 0	:   str = "NULL";				break;
		case 10	:   str = "Logout";				break;
		case 20	:   str = "Login";				break;
		case 30	:   str = "Not Ready";			break;
		case 40	:   str = "Ready";				break;
		case 41	:   str = "InReady";			break;
		case 42	:   str = "OutReady";			break;
		case 50	:   str = "Busy";				break;
		case 60 :   str = "Work After Call";    break;
		case 99 :   str = "로그인 후 마지막 상태"; break;
		default :   str = "Unknown State : " + state.toString();    break;
	}*/
	switch(state)
	{
		case 0	:   str = "로그아웃";				break;
		case 10	:   str = "로그아웃";				break;
		case 20	:   str = "준비중";				break;
		case 30	:   str = "자리비움";			break;
		case 40	:   str = "대기중";				break;
		case 41	:   str = "InReady";			break;
		case 42	:   str = "OutReady";			break;
		case 50	:   str = "통화중";				break;
		case 51	:   str = "Ringing";			break;
		case 52	:   str = "Dialing";			break;
		case 60 :   str = "후처리";    break;
		case 99 :   str = "로그인 후 마지막 상태"; break;
		default :   str = "Unknown State : " + state.toString();    break;
	}
	//return state + " " + str;
	return str;
}


function lfnMakeAddrTypeString(addrType){
	var str;
	switch(addrType)
	{
		case 0	:	str = "정하지 않은 장비";	break;
		case 1	:	str = "ACD 그룹에 없는 DN";	break;
		case 2	:	str = "ACD 그룹에 있는 DN";	break;
		case 3	:	str = "ACD Queue";			break;
		case 4	:	str = "Trunk 번호";			break;
		case 5	:	str = "Voice Mail 채널";	break;
		case 6	:	str = "Data 채널";			break;
		case 7	:	str = "음성 안내 장비";		break;
		case 8	:	str = "Soft Phone";			break;
		case 9	:	str = "Agent";				break;
		case 10	:	str = "Chat";				break;
		case 11	:	str = "Messager";			break;
		case 99 :   str = "기타";               break;
		default :   str = "UnDefined Addr Type";   break;
	}
	return addrType + " " + str;
}

function lfnMakeRegModeString(regMode){
	var str;
	
	switch(regMode)
	{
		case 0	:	str = "공유 모드";		break;
		case 1	:	str = "독립 모드";		break;
		case 2  :   str = "Monitor 모드";   break;
		default :   str = "Undefined Reg Mode"; break;
	}
	
	return regMode + " " + str;
}

function lfnMakePartyTypeString(regMode){
	var str;
	
	switch(regMode)
	{
		case 0	:	str = "SILENCE";		break;
		case 1	:	str = "ACTIVE";		break;
		case 2  :   str = "COACH";   break;
		case 4  :   str = "Mute Mode";   break; //Mute Mode(요청자는 미디어 송수신 안됨) IVR 에서 비밀번호 등의 사용자 정보를 입력 받는 업무를 수행할 때 MUTE Mode 를 사용
		case 5  :   str = "Mute MOH Mode";   break; //Mute MOH Mode(요청자는 홀드 음악 재생) IVR 에서 비밀번호 등의 사용자 정보를 입력 받는 업무를 수행할 때, 상담원에게 홀드 음악 재생하려면 MUTE MOH Mode 를 사용
		case 6  :   str = "상담사 음성만 보내는 모드";   break; //상담사 음성만 보내는 모드
		case 7  :   str = "상담사 청취만 가능한 모드";   break; //상담사 청취만 가능한 모드
		default :   str = "Undefined"; break; 
	}
	
	return regMode + " " + str;
}

function lfnGetInout(nState) {
	switch (nState) {
		case 0: return "NULL";
		case 1: return "IN";
		case 2: return "OUT";
		default: return "Unknown(" + nState.toString() + ")";
	}
}

function lfnGetAniDN(ani_dn, other_dn){
	if(ani_dn == ""){
		return other_dn;
	}
	else{
		return ani_dn;
	}        
}
