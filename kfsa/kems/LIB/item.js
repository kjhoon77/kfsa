﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿/*
 * 프로그램명 : supt.js
 * 설명 : 교보재관리 업무 관련 js 파일을 포함한 파일
 * 작성일 : 2009.12.10
 * 작성자 : 김종복
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
 * 기능 : 실무교육일정검색 팝업을 호출한다.
 * parameter : 없음
 * return value : 실무교육일정 정보를 가진 배열 오브젝트
 */
function lfn_EduScheduleListPopup(sJibuCode, sEduYear, sCourseCode) {
    var sArg = "sJibuCode=" + quote(sJibuCode)
				+ " sEduYear=" + quote(sEduYear)
				+ " sCourseCode=" + quote(sCourseCode);
    return Dialog("item::frmitem0005PEduScheduleList.xml", sArg, 600, 400, "", -1, -1);
}

/*
 * 기능 : 강습회차목록 팝업을 호출한다.
 * parameter : sPosiYn - 접수가능여부
 *             sJibu - 지부
 *             sYear - 강습년도
 *             sCourse - 직능
 *             sNoChange - 변경불가여부 Y:변경불가
 * return value : 강습회차목록 정보를 가진 배열 오브젝트
 */
function lfn_TrainingOrderListPopup(sPosiYn, sJibu, sYear, sCourse, sNoChange) {
    var sArg = "sPosiYn=" + quote(sPosiYn);
    sArg += " sJibu=" + quote(sJibu);
    sArg += " sYear=" + quote(sYear);
    sArg += " sCourse=" + quote(sCourse);
    sArg += " sNoChange=" + quote(sNoChange);
    return Dialog("item::frmitem0006PTrainingOrderList.xml", sArg, 600, 400, "", -1, -1);
}

/*
 * 기능 : 현재년도+1 에서 10년전까지 년도 콤보생성
 * parameter : 없음
 * return value : 없음
 */
function lfn_MakeSearchYear() {
    var ln_StartYear = ParseInt(Mid(getDate(), 0, 4)) + 1;
    for (var i=ln_StartYear; i>ln_StartYear-10; i--) {
		var nRow = ds_oYearAll.AddRow();
		ds_oYearAll.SetColumn(nRow, "CD", i);
		ds_oYearAll.SetColumn(nRow, "DATA", i);
    }
    
    ds_oYearAll.insertRow(0);
    ds_oYearAll.SetColumn(0, "CD", "");
	ds_oYearAll.SetColumn(0, "DATA", "전체");
	cbxYearSearch.Index = 0;
}