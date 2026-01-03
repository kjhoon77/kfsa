﻿﻿﻿﻿﻿﻿﻿﻿﻿/*
 * 프로그램명 : SVC.js
 * 설명 : Transactin 관련
 * 작성일 : 2009.06.23
 * 작성자 : 장성호
 */

var mn_SearchCnt = 0; // 조회 건수
var mn_InsertCnt = 0; // 삽입 건수
var mn_DeleteCnt = 0; // 삭제 건수
var mn_UpdateCnt = 0; // 수정 건수

/*
 * 기능 : 서버로 Service 보낸다.
 * Parameter : Transaction함수와 동일
 *             bShowLoading - 진행상바 여부
 * Return : 없음
 */
var mb_ShowLoading = false; // 진행상태바를 보여주는지 여부
var mb_ShowProgressBar = false; // 진행상태바를 계속 보여주어야하는지 여부 - 팝업된 진행상태바 화면의 OnTime 이벤트에서 체크
//function gfn_TransactionCall(obj, sMethodName, sSvcUrl, sInDataSet, sOutDataSet, sArgument, sCallBack, bShowLoading) {
function gfn_TransactionCall(actionName, cmdName, sSvcUrl, sInDataSet, sOutDataSet, sArgument, sCallBack, bShowLoading) {
    // if (obj == null) {
        // Transaction(sMethodName, sSvcUrl, sInDataSet, sOutDataSet, sArgument, sCallBack);
    // } else {
        // obj.Transaction(sMethodName, sSvcUrl, sInDataSet, sOutDataSet, sArgument, sCallBack);
    // }

    if (length(sSvcUrl) > 0) {
        tit_clearActionInfo();
        tit_addSearchActionInfo(sSvcUrl, false);
    }

    // 서버 호출 
    tit_callService(
        actionName
        ,cmdName
        ,sInDataSet	// inDs
        ,sOutDataSet	// outDs
        ,sArgument	// args 
        ,sCallBack
        ,true
        ,false
        ,Https.Sync
    );

    if (bShowLoading == true) {
        mb_ShowProgressBar = true; // 작업(조회,저장)전에 Progress Bar Windows Status True

        Dialog("COM::frmCOM0030PProgressBar.xml", , 300, 123, "Autosize=true TitleBar=false", -1, -1); //조회 전에 Progress Bar Windows Open
    } else {
        mb_ShowLoading = false;
    }
}

/*
 * 기능 : Global Transaction CallBack용
 * Parameter : CallBack함수와 동일
 * Return : 없음
 */
function gfn_CallBack(strSvcID, nErrorCode, strErrorMsg) {
    if (mb_ShowLoading == true) {
        mb_ShowProgressBar = false; //조회 및 저장 시 Progress Bar Close
    }

    // 서비스 에러메세지 처리
    // if (nErrorCode <> 0) {
        // gfn_ErrorMsg("Transaction 오류 : " + nErrorCode, strErrorMsg);

        // return false;
    // }

    // 사용자 CallBack 호출
    lfn_callback(strSvcID, nErrorCode, strErrorMsg);
}

/*
 * 기능 : Logout 한다.
 * Parameter : 없음
 * Return : 없음
 */
function gfn_Logout() {
    exit();
}
