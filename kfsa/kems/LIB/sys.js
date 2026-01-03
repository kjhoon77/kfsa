﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿/*
 * 프로그램명 : sys.js
 * 설명 : 시스템관리 업무 관련 js 파일을 포함한 파일
 * 작성일 : 2009.07.07
 * 작성자 : 장성호
 */

#include "LIB::COMMON.js"; // 공통 관련

var ls_SystemGubun; // 현재 화면 시스템 구분
var ls_SystemMenuId; // 현재 화면 시스템 메뉴 ID
var ms_FormAuth = ""; // 폼 권한
var mb_IsNewData = true; // 저장버튼이 클릭되었는지 여부

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
   mb_IsNewData = true;
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

/* 사용자 함수 */
/*
 * 기능 : 사용자 정보 팝업을 호출한다.
 * parameter : sUserName - 검색하고자 하는 사용자명
 * return value : 사용자 정보를 가진 배열 오브젝트
 */
function gfn_UserListPopup(sUserName) {
    var sArg = "sUserName=" + quote(sUserName);
    return Dialog("sys::frmsys0021PUserList.xml", sArg, 600, 400, "", -1, -1);
}

/*
 * 기능 : YYYY 코드/명 팝업을 호출한다.
 * parameter : sXXXXName - 검색하고자 하는 YYYY 코드/명
 * return value : YYYY 코드/명을 가진 배열 오브젝트
 */
function gfn_XXXXListPopup(sXXXXName) {
    var sArg = "sXXXXName=" + quote(sXXXXName);
    return Dialog("sys::frmsys0190PXXXXList.xml", sArg, 600, 400, "", -1, -1);
}
