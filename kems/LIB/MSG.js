﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿/*
 * 프로그램명 : MSG.js
 * 설명 : Message 관련
 * 작성일 : 2009.06.23
 * 작성자 : 장성호
 */

/* Message Error Code */
var MSGI00010 = "검색된 자료가 없습니다.";
var MSGI00020 = "정상적으로 처리되었습니다.";
var MSGI00030 = "삭제할 레코드가 없습니다.";
var MSGI00040 = "변경사항이 없습니다.";
var MSGI00050 = "조회가 완료되었습니다.";
var MSGI00060 = "다운로드가 완료되었습니다.";
var MSGI00070 = "신규 추가 하시겠습니까?\n입력완료 후 저장 버튼을 누르세요.";
var MSGI00080 = "사용 권한이 없습니다.";
var MSGI00100 = "강습을 먼저 선택해 주십시오.";
var MSGI00200 = "시험을 먼저 선택해 주십시오.";
var MSGI00300 = "교육을 먼저 선택해 주십시오.";
var MSGW00010 = "을(를) 입력해 주십시오.";
var MSGW00020 = "추가 저장 하시겠습니까?";
var MSGW00030 = "삭제 하시겠습니까?";
var MSGW00040 = "수정 저장 하시겠습니까?";
var MSGW00050 = "로그아웃 하시겠습니까?";
var MSGW00060 = "저장 하시겠습니까?";

/*
 * 기능 : 경고형 Message를 표현하는 DialogBox를 실행한다.
 * Parameter : sMsg - Message 문자열
 * Return : 없음
 */
function gfn_Alert(sMsg) {
    Alert(sMsg);
}

/*
 * 기능 : 확인형 Message를 표현하는 DialogBox를 실행한다.
 * Parameter : sMsg - Message 문자열
 * Return : 확인을 선택한 경우 TRUE가, 취소를 선택한 경우에는 FALSE
 */
function gfn_Confirm(sMsg) {
    return Confirm(sMsg);
}

/*
 * 기능 : 확인형 Message를 표현하는 DialogBox를 실행한다.
 * Parameter : sMsg - Message 문자열
 * Return : '예'을 선택한 경우 0가, '아니오'를 선택한 경우에는 1, '취소'를 선택한 경우에는 2
 */
function gfn_ConfirmCancel(sMsg) {
    return Dialog("COM::frmCOM0011PConfirmMessage.xml", "sMsg=" + quote(sMsg), 500, 100, "titlebar=true CloseFlag=false", -1, -1);
}

/*
 * 기능 : 정보형 Message를 표현하는 DialogBox를 실행한다.
 * Parameter : sMsg - Message 문자열
 * Return : Dialog에서 Close Method로 닫을 때 넘긴 값
 */
function gfn_InfoMsg(sMsg) {
    return Dialog("COM::frmCOM0010PInfoMessage.xml", "sMsg=" + quote(sMsg), 400, 200, "titlebar=true", -1, -1);
}

/*
 * 기능 : 에러형 Message를 표현하는 DialogBox를 실행한다.
 * Parameter : sErrorCode - Error Code 문자열
 *             sErrorMsg - Error Message 문자열
 * Return : Dialog에서 Close Method로 닫을 때 넘긴 값
 */
function gfn_ErrorMsg(sErrorCode, sErrorMsg) {
    return Dialog("COM::frmCOM0020PErrorMessage.xml", "sErrorCode=" + quote(sErrorCode) + " sErrorMsg=" + quote(sErrorMsg), 400, 200, "titlebar=true", -1, -1);
}

/*
 * 기능 : 하단 바에 메세지를 표시한다.
 * Parameter : msg - 표시할 메세지
 * Return : 없음
 */
function gfn_FooterMessage(msg){
    Status = msg;
}

/*
 * 기능 : 조회 후 메세지를 표시한다.
 * Parameter : objGrid - Grid오브젝트
 * Return : 없음
 */
function gfn_SearchMessage(objGrid, msg) {
    var mobj_Dataset;
    if (length(objGrid.ID) > 0) {
        gfn_GridSortMarkClear(objGrid); // 그리드 Head Sort 마크 제거한다.
        mobj_Dataset = object(objGrid.BindDataset);
        if (mobj_Dataset.GetCount() <= 0) {
            objGrid.NoDataText = MSGI00010; // 검색된 레코드가 없습니다.
        }
    }
    //lbFormMessage.Text = NumFormat(mn_SearchCnt) + "건이 조회되었습니다.";
    
    if (length(msg) >= 1) { 
        Status = msg;
    } else {
        Status = MSGI00050; // 조회가 완료되었습니다.
    }
    //lbFormMessage.Text = MSGI00050; // 조회가 완료되었습니다.
}

/*
 * 기능 : 삽입 후 메세지를 표시한다.
 * Parameter : 없음
 * Return : 없음
 */
function gfn_InsertMessage() {
    gfn_Alert(MSGI00020); // 정상적으로 처리되었습니다.
}

/*
 * 기능 : 삭제 후 메세지를 표시한다.
 * Parameter : 없음
 * Return : 없음
 */
function gfn_DeleteMessage() {
    gfn_Alert(MSGI00020); // 정상적으로 처리되었습니다.
}

/*
 * 기능 : 수정 후 메세지를 표시한다.
 * Parameter : 없음
 * Return : 없음
 */
function gfn_UpdateMessage() {
    gfn_Alert(MSGI00020); // 정상적으로 처리되었습니다.
}

/*
 * 기능 : 저장 후 메세지를 표시한다.
 * Parameter : 없음
 * Return : 없음
 */
function gfn_SaveMessage() {
    gfn_Alert(MSGI00020); // 정상적으로 처리되었습니다.
}
