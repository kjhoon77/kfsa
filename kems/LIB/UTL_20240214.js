/*
 * 프로그램명 : UTL.js
 * 설명 : 기타 Util 관련
 * 작성일 : 2009.06.23
 * 작성자 : 장성호
 */

/*
 * 기능 : 포커스를 다음으로 이동한다.
 * Parameter : 없음
 * Return : 없음
 */
function gfn_NextFocus() {
    var mobj_FocusComponent = GetNextComponent(true);
    if (mobj_FocusComponent != null && mobj_FocusComponent.ID != "") {
        mobj_FocusComponent.setfocus();
    }
}

/*
 * 기능 : 포커스를 이전으로 이동한다.
 * Parameter : 없음
 * Return : 없음
 */
function gfn_PrevFocus() {
    var mobj_FocusComponent = GetPrevComponent(true);
    if (mobj_FocusComponent != null && mobj_FocusComponent.ID != "") {
        mobj_FocusComponent.setfocus();
    }
}

/*
 * 기능 : 엔터키 입력시 포커스를 다음으로 이동한다.
 * Parameter : 없음
 * Return : 없음
 */
function gfn_EnterNextFocus(obj,nChar) {
    if (nChar == 13) { // Enter Key
        gfn_NextFocus();
    }
}

/*
 * 기능 : 폼의 그리드컴포넌트들을 엑셀로 변환한다.
 * parameter : objForm - 변환할 폼 오브젝트
 * return : 없음
 */
function gfn_GridToExcel(objForm) {
	ext_OleServerBusyTimeOut(true,5000,false,false);	// 엑셀 변환 시 오류 발생하여 추가(2019.02.01)
    var mobj_Component = null;
    var marr_Grid = Array();

    var i = 0;
    for (var b = 0; b < Length(objForm.Components); b++) {
        mobj_Component = objForm.components(b);
        if (mobj_Component.GetType() == "Grid") {
            if (Length(mobj_Component.UserData) > 0) {
                marr_Grid[i] = mobj_Component;
                i++;
            }
        }
    }

    if (Length(marr_Grid) == 0) {
        return false;
    }

    var mobj_Export;
    mobj_Export = CreateExportObject();
    mobj_Export.ExportType = "Excel";
    mobj_Export.ExportFileName = objForm.Title + ".xls";
    mobj_Export.ActiveSheetName = marr_Grid[0].UserData;
    mobj_Export.MakeEmptyFileWhenNotExist = false;

    for (var j = 0; j < Length(marr_Grid); j++) {
        mobj_Export.AddExportGrid(marr_Grid[j].UserData + "!" + "A1", marr_Grid[j], true, false);
    }

    mobj_Export.Export();
    mobj_Export.Close();
    mobj_Export = null;
    //ext_OleServerBusyTimeOut(false);	// 엑셀 변환 시 오류 발생하여 추가(2019.02.01) // 실행시 마이플랫폼 종료 되서 주석처리함(2019.02.01) 
}

/*
 * 기능 : 폼의 그리드컴포넌트들을 엑셀로 변환한다.
 * parameter : objForm - 변환할 폼 오브젝트 1건 선택 
 * return : 없음
 */
function gfn_GridObjToExcel(objForm,strGridID) {
	ext_OleServerBusyTimeOut(true,5000,false,false);	// 엑셀 변환 시 오류 발생하여 추가(2019.02.01)
    var mobj_Component = null;
    var marr_Grid = Array();

    var i = 0;
    for (var b = 0; b < Length(objForm.Components); b++) {
        mobj_Component = objForm.components(b);
        if (mobj_Component.GetType() == "Grid") {
            if (mobj_Component.ID == strGridID) {
                marr_Grid[i] = mobj_Component;
                i++;
            }
        }
    }

    if (Length(marr_Grid) == 0) {
        return false;
    }
    var mobj_Export;
    mobj_Export = CreateExportObject();
    mobj_Export.ExportType = "Excel";
    mobj_Export.ExportFileName = objForm.Title + ".xls";
    mobj_Export.ActiveSheetName = marr_Grid[0].UserData;
    mobj_Export.MakeEmptyFileWhenNotExist = false;

    for (var j = 0; j < Length(marr_Grid); j++) {
        mobj_Export.AddExportGrid(marr_Grid[j].UserData + "!" + "A1", marr_Grid[j], true, false);
    }

    mobj_Export.Export();
    mobj_Export.Close();
    mobj_Export = null;
    //ext_OleServerBusyTimeOut(false);	// 엑셀 변환 시 오류 발생하여 추가(2019.02.01) // 실행시 마이플랫폼 종료 되서 주석처리함(2019.02.01) 
}


/*
 * 기능 : 화면에 출력된 Form을 캡처해서 Printer로 출력한다.
 * parameter : 없음
 * return : 없음
 */
function gfn_PrintScreen(obj) {
    PrintScreen(false);
}

/*
 * 기능 : 스페이스를 제거한 후 값이 Null 또는 ""인지 검사한다.
 * parameter : sValue - 검사할 값
 * return : Null이면 true, 아니면 false
 */
function gfn_IsNull(sValue) {
    if (length(trim(sValue)) < 1) {
        return true;
    } else {
        return false;
    }
}

/*
 * 기능 : 폼의 컴포넌트들의 필수값을 검사한다.
 * parameter : objForm - 검사할 폼 오브젝트
 * return : 필수값이 있으면 true/ 없으면 false
 */
function gfn_FormValidate(objForm) {
    var mobj_Component = null;
    var ms_ComponentId = null;
    for (var b = 0; b < Length(objForm.Components); b++) {
        mobj_Component = objForm.components(b);
        ms_ComponentId = mobj_Component.ID;
        // 필수값 체크
        if (mobj_Component.GetType() == "Edit"
                || mobj_Component.GetType() == "MaskEdit"
                || mobj_Component.GetType() == "Checkbox"
                || mobj_Component.GetType() == "TextArea"
                || mobj_Component.GetType() == "Spin"
                || mobj_Component.GetType() == "Combo"
                || mobj_Component.GetType() == "List"
                || mobj_Component.GetType() == "Radio"
                || mobj_Component.GetType() == "Calendar") {

            if ((mobj_Component.Enable == "1")
                    && (mobj_Component.Visible == "1")
                    && (Length(mobj_Component.UserData) > 0)) {
                var marr_UserData = array();
                marr_UserData = split(mobj_Component.UserData, ":");
                if (Length(marr_UserData[1]) > 0){
                    if (gfn_IsNull(mobj_Component.Value)) {
                        gfn_Alert(marr_UserData[1] + MSGW00010);
                        objForm.object(ms_ComponentId).SetFocus();
                        objForm.object(ms_ComponentId).setSel();
                        return false;
                    }
                }
            }
        }
        // 달력 일자 기간 순서 체크
        if (mobj_Component.GetType() == "Calendar") {
            if (right(ms_ComponentId, 5) == "Start") {
                if (!gfn_CheckDateTerm(mobj_Component, object(left(ms_ComponentId, length(ms_ComponentId) - 5) + "End"), false, "일자")) {
                    return false;
                }
            }
        }
        // 날짜 MaskEdit 기간 순서 체크
        if (left(ms_ComponentId, 2) == "tm" && mobj_Component.GetType() == "MaskEdit") {
            if (!gfn_IsTime(mobj_Component.Value) && !gfn_IsNull(mobj_Component.Value)) {
                gfn_Alert("시간형식이 아닙니다.");
                objForm.object(ms_ComponentId).SetFocus();
                return false;
            }
            if (right(ms_ComponentId, 5) == "Start") {
                if (!gfn_CheckDateTerm(mobj_Component, object(left(ms_ComponentId, length(ms_ComponentId) - 5) + "End"), false, "시간")) {
                    return false;
                }
            }
        }
        // MaskEdit 숫자 순서 체크
        if (left(ms_ComponentId, 3) == "med" && mobj_Component.GetType() == "MaskEdit") {
            if (right(ms_ComponentId, 5) == "Start") {
                if (!gfn_CheckDateTerm(mobj_Component, object(left(ms_ComponentId, length(ms_ComponentId) - 5) + "End"), false, "시간")) {
                    return false;
                }
            }
        }
        // Edit 숫자 순서 체크
        if (left(ms_ComponentId, 2) == "ed" && mobj_Component.GetType() == "Edit" && mobj_Component.Number == true) {
            if (right(ms_ComponentId, 5) == "Start") {
                if (!gfn_CheckDateTerm(mobj_Component, object(left(ms_ComponentId, length(ms_ComponentId) - 5) + "End"), false, "시간")) {
                    return false;
                }
            }
        }
    }
    return true;
}

/*
 * 기능 : 폼의 입력 컴포넌트들의 값을 빈값("")으로 초기화한다.
 * parameter : objForm - 초기할 폼 오브젝트
 * return : 없음
 */
function gfn_FormInit(objForm) {
    var mobj_Component = null;

    for (var b = 0; b < Length(objForm.Components); b++) {
        mobj_Component = objForm.components(b);

        if (mobj_Component.GetType() == "Edit"
                || mobj_Component.GetType() == "MaskEdit"
                || mobj_Component.GetType() == "Checkbox"
                || mobj_Component.GetType() == "TextArea"
                || mobj_Component.GetType() == "Spin"
                || mobj_Component.GetType() == "Combo"
                || mobj_Component.GetType() == "List"
                || mobj_Component.GetType() == "Radio"
                || mobj_Component.GetType() == "Calendar") {
            if (Length(mobj_Component.UserData) > 0) {
                var marr_UserData = array();
                marr_UserData = split(mobj_Component.UserData, ":");

                if (marr_UserData[0] == "S") {
                    if (mobj_Component.GetType() == "Combo") {
                        mobj_Component.Index = 0;
                    } else {
                        mobj_Component.Value = "";
                    }
                }
                // 키값 Readonly 해제
                if (Length(marr_UserData[2]) > 0 && marr_UserData[2] == "K") {
                    if (mobj_Component.GetType() == "Combo") {
                        mobj_Component.Enable = true;
                    } else {
                        mobj_Component.Readonly = false;
                        mobj_Component.BKColor = "";
                    }
                }
            }
        }
    }
}

/*
 * 기능 : 그리드에 변경사항이 있는지 검사한다.
 * parameter : objForm - 검사할 폼 오브젝트
 * return : 있으면 true, 없으면 false
 */
function gfn_CheckChangedGridTreeview(objForm) {
    var mobj_Component = null;
    var mb_Updated = false;

    for (var b = 0; b < Length(objForm.Components); b++) {
        mobj_Component = objForm.components(b);
        if (mobj_Component.GetType() == "Grid"
                || mobj_Component.GetType() == "TreeView") {
            var ms_ComponentId = mobj_Component.ID;
            mb_Updated = objForm.object(objForm.object(ms_ComponentId).BindDataset).GetUpdate();

            if (mb_Updated) {
                return true;
            }
        }
    }
    return false;
}

/*
 * 기능 : 공통코드 정보를 조회한다.
 * parameter : objDataset - 리턴받을 데이타셋
 *             sGrupCd - 공통코드 그룹코드명
 *             sUseYn - 사용유무 : null 전체, Y 사용가만, N 사용불가만
 *             sOpt - "전체" 또는 "선택" 또는 " " 포함여부
 * return : 없음
 */
function gfn_SearchCommonCode(objDataset, sGrupCd, sUseYn, sOpt) {
    objDataset.ClearData();
    if (gfn_IsNull(sGrupCd)) {
        return false;
    }

    var nRow = -1;
    var ls_UseYn = "'";
    if (!gfn_IsNull(sUseYn)) {
        ls_UseYn += "&&USE_YN=='" + trim(sUseYn) + "'";
    }
    gds_oCommonCode.Filter("CCGROUPCD=='" + trim(sGrupCd) + ls_UseYn);
    gds_oCommonCode.Sort("CCORDERSEQ");

    for (var i = 0; i < gds_oCommonCode.GetCount(); i++) {
        nRow = objDataset.AddRow();
        objDataset.SetColumn(nRow, "CD", gds_oCommonCode.GetColumn(i, "CCCD"));
        objDataset.SetColumn(nRow, "DATA", gds_oCommonCode.GetColumn(i, "CCCDNM"));
    }

    if (length(sOpt) > 0) {
        objDataset.InsertRow(0);
        objDataset.SetColumn(0, "CD", "");
        objDataset.SetColumn(0, "DATA", sOpt);
    }
    objDataset.row = 0;

    gds_oCommonCode.UnFilter();
}

/*
 * 기능 : 선해임 코드 정보를 조회한다.
 * parameter : objDataset - 리턴받을 데이타셋
 *             KGUBUN -  구분명
 *             sOpt - "전체" 또는 "선택" 또는 " " 포함여부
 * return : 없음
 */
 */
function gfn_SearchKCode(objDataset, sKgubun, sOpt) {
    objDataset.ClearData();
    if (gfn_IsNull(sKgubun)) {
        return false;
    }

    var nRow = -1;
    gds_oKCode.Filter("KGUBUN=='" + trim(sKgubun)+ "'");
    gds_oKCode.Sort("KSORT");

    // 2023.07.26 수정
    for (var i = 0; i < gds_oKCode.GetCount(); i++) {
        nRow = objDataset.AddRow();
        objDataset.SetColumn(nRow, "CD", gds_oKCode.GetColumn(i, "KCD"));
        objDataset.SetColumn(nRow, "DATA", gds_oKCode.GetColumn(i, "KNM1"));
        objDataset.SetColumn(nRow, "DATA2", gds_oKCode.GetColumn(i, "KNM2"));
        objDataset.SetColumn(nRow, "DATA3", gds_oKCode.GetColumn(i, "KNM3"));
        objDataset.SetColumn(nRow, "DATA4", gds_oKCode.GetColumn(i, "KNM4"));
    }

    if (length(sOpt) > 0) {
        objDataset.InsertRow(0);
        objDataset.SetColumn(0, "CD", "");
        objDataset.SetColumn(0, "DATA", sOpt);
        objDataset.SetColumn(0, "DATA2", "");
        objDataset.SetColumn(0, "DATA3", "");
        objDataset.SetColumn(0, "DATA4", "");
    }
    objDataset.row = 0;
    
    gds_oKCode.UnFilter();
}

/*
 * 기능 : 지부코드 정보를 조회한다.
 * parameter : objCombo - 리턴받을 콤보 데이타셋
 *             sUseYn - 사용유무 : null 전체, Y 사용가만, N 사용불가만
 *             sOpt - "전체" 또는 "선택" 또는 " " 포함여부
 * return : 없음
 */
function gfn_SearchAllJibu(objCombo, sUseYn, sOpt) {
    var objDataset = object(objCombo.InnerDataset);
    var nRow = -1;
    var ls_UseYn = "'";
    if (!gfn_IsNull(sUseYn)) {
        gds_oJibu.Filter("USE_YN=='" + trim(sUseYn) + "'");
    }

    for (var i = 0; i < gds_oJibu.GetCount(); i++) {
        nRow = objDataset.AddRow();
        objDataset.SetColumn(nRow, "CD", gds_oJibu.GetColumn(i, "JJIBUCD"));
        objDataset.SetColumn(nRow, "DATA", gds_oJibu.GetColumn(i, "JJIBUNM"));
    }

    if (length(sOpt) > 0) {
        objDataset.InsertRow(0);
        objDataset.SetColumn(0, "CD", "");
        objDataset.SetColumn(0, "DATA", sOpt);
    }
    objDataset.row = 0;

    gds_oJibu.UnFilter();

    if (gfn_IsNull(gds_oUserInfo.GetColumn(0, "ADMINGUBUN")) || gds_oUserInfo.GetColumn(0, "ADMINGUBUN") == "DM") {
        objCombo.Value = gds_oUserInfo.GetColumn(0, "PDEPTCD");
    } 
}

/*
 * 기능 : 콤보박스 할당용 지부코드 정보를 조회한다. SM, BM이면 전체 선택가능, 아니면, 소속지부로 고정됨(Disable).
 * parameter : objCombo - 리턴받을 콤보 데이타셋
 *             sUseYn - 사용유무 : null 전체, Y 사용가만, N 사용불가만
 *             sOpt - "전체" 또는 "선택" 또는 " " 포함여부
 * return : 없음
 */
function gfn_SearchJibu(objCombo, sUseYn, sOpt) {
    var objDataset = object(objCombo.InnerDataset);
    var nRow = -1;
    var ls_UseYn = "'";
    if (!gfn_IsNull(sUseYn)) {
        gds_oJibu.Filter("USE_YN=='" + trim(sUseYn) + "'");
    }

    for (var i = 0; i < gds_oJibu.GetCount(); i++) {
        nRow = objDataset.AddRow();
        objDataset.SetColumn(nRow, "CD", gds_oJibu.GetColumn(i, "JJIBUCD"));
        objDataset.SetColumn(nRow, "DATA", gds_oJibu.GetColumn(i, "JJIBUNM"));
    }

    if (length(sOpt) > 0) {
        objDataset.InsertRow(0);
        objDataset.SetColumn(0, "CD", "");
        objDataset.SetColumn(0, "DATA", sOpt);
    }
    objDataset.row = 0;

    gds_oJibu.UnFilter();

    if (gfn_IsNull(gds_oUserInfo.GetColumn(0, "ADMINGUBUN"))) {
        if (left(gds_oUserInfo.GetColumn(0, "PDEPTCD"),1) == "0") { // 관리자가 아니더라도 본회이면 모든 지부 보이도록 함
            objCombo.Enable = true;
        } else {
            objCombo.Value = gds_oUserInfo.GetColumn(0, "PDEPTCD");
            objCombo.Enable = false;
        }
    } else {
        objCombo.Enable = true;
    }
}


/*
 * 기능 : 콤보박스 할당용 전체부서코드 정보를 조회한다. SM, BM이면 전체 선택가능, 아니면, 소속지부로 고정됨(Disable).
 * parameter : objCombo - 리턴받을 콤보 데이타셋
 *             sUseYn - 사용유무 : null 전체, Y 사용가만, N 사용불가만
 *             sOpt - "전체" 또는 "선택" 또는 " " 포함여부
 * return : 없음
 */
function gfn_SearchAllDept(objCombo, sUseYn, sOpt) {
    var objDataset = object(objCombo.InnerDataset);
    var nRow = -1;
    var ls_UseYn = "'";
    if (!gfn_IsNull(sUseYn)) {
        gds_oAllDept.Filter("USE_YN=='" + trim(sUseYn) + "'");
    }

    for (var i = 0; i < gds_oAllDept.GetCount(); i++) {
        nRow = objDataset.AddRow();
        objDataset.SetColumn(nRow, "CD", gds_oAllDept.GetColumn(i, "JJIBUCD"));
        objDataset.SetColumn(nRow, "DATA", gds_oAllDept.GetColumn(i, "JJIBUNM"));
    }

    if (length(sOpt) > 0) {
        objDataset.InsertRow(0);
        objDataset.SetColumn(0, "CD", "");
        objDataset.SetColumn(0, "DATA", sOpt);
    }
    objDataset.row = 0;

    gds_oAllDept.UnFilter();

    if (gfn_IsNull(gds_oUserInfo.GetColumn(0, "ADMINGUBUN"))) {
        if (left(gds_oUserInfo.GetColumn(0, "PDEPTCD"),1) == "0") { // 관리자가 아니더라도 본회이면 모든 지부 보이도록 함
            objCombo.Enable = true;
        } else {
            objCombo.Value = gds_oUserInfo.GetColumn(0, "PDEPTCD");
            objCombo.Enable = false;
        }
    } else {
        objCombo.Enable = true;
    }
}

/*
 * 기능 : POS지부 정보를 조회한다.
 * parameter : objDataset - 리턴받을 데이타셋
 *             sWorkGubun - 업무구분 : 0(회비), 1(강습등)
 * return : 없음
 */
function gfn_SearchPosJibu(objDataset, sWorkGubun) {
    objDataset.ClearData();

    var nRow = -1;
    if (!gfn_IsNull(sWorkGubun)) {
        gds_oPosJibu.Filter("PIBIZGUBUN=='" + trim(sWorkGubun) + "'");
    } else {
        gds_oPosJibu.Filter("PIBIZGUBUN=='1'"); // 강습
    }

    objDataset.CopyF(gds_oPosJibu);

    objDataset.row = 0;

    gds_oPosJibu.UnFilter();
}

/*
 * 기능 : 직능코드 정보를 조회한다.
 * parameter : sSearchGubun - 조회구분
 *             objDataset - 리턴받을 데이타셋
 *             sUseYn - 사용유무 : null 전체, Y 사용가만, N 사용불가만
 *             sOpt - "전체" 또는 "선택" 또는 " " 포함여부
 * return : 없음
 */
function gfn_SearchTrainingCourse(sSearchGubun, objDataset, sUseYn, sOpt) {
    objDataset.ClearData();

    var nRow = -1;
    var ls_FilterExpr = "";
    if (!gfn_IsNull(sSearchGubun)) {
        ls_FilterExpr += "SEARCHGUBUN=='" + trim(sSearchGubun) + "'";
    }
    if (!gfn_IsNull(sUseYn)) {
        ls_FilterExpr += "&&USE_YN=='" + trim(sUseYn) + "'";
    }
    ls_FilterExpr += "&&MUNJEGUBUN='N'";
    if (gs_SystemGubun == "training" || gs_SystemGubun == "spcledu" || gs_SystemGubun == "crs") {
        gds_oCourse.Filter(ls_FilterExpr + "&&COURSEGUBUN=='" + iif(gs_SystemGubun == "training", "T", iif(gs_SystemGubun == "crs", "T", iif(gs_SystemGubun == "spcledu", "S"))) + "'");
    } else {
        gds_oCourse.Filter(ls_FilterExpr);
    }

    for (var i = 0; i < gds_oCourse.GetCount(); i++) {
        nRow = objDataset.AddRow();
        objDataset.SetColumn(nRow, "CD", gds_oCourse.GetColumn(i, "COURSECD"));
        objDataset.SetColumn(nRow, "DATA", gds_oCourse.GetColumn(i, "COURSENM"));
        objDataset.SetColumn(nRow, "DATA2", gds_oCourse.GetColumn(i, "COURSENICK"));
        
    }

    if (length(sOpt) > 0) {
        objDataset.InsertRow(0);
        objDataset.SetColumn(0, "CD", "");
        objDataset.SetColumn(0, "DATA", sOpt);
    }
    objDataset.row = 0;

    gds_oCourse.UnFilter();
}

function gfn_SearchTrainingCourseMunje(sSearchGubun, objDataset, sUseYn, sOpt) {
    objDataset.ClearData();

    var nRow = -1;
    var ls_FilterExpr = "";
    if (!gfn_IsNull(sSearchGubun)) {
        ls_FilterExpr += "SEARCHGUBUN=='" + trim(sSearchGubun) + "'";
    }
    if (!gfn_IsNull(sUseYn)) {
        ls_FilterExpr += "&&USE_YN=='" + trim(sUseYn) + "'";
    }
    if (gs_SystemGubun == "training" || gs_SystemGubun == "spcledu" || gs_SystemGubun == "crs") {
        gds_oCourse.Filter(ls_FilterExpr + "&&COURSEGUBUN=='" + iif(gs_SystemGubun == "training", "T", iif(gs_SystemGubun == "crs", "T", iif(gs_SystemGubun == "spcledu", "S"))) + "'");
    } else {
        gds_oCourse.Filter(ls_FilterExpr);
    }

    for (var i = 0; i < gds_oCourse.GetCount(); i++) {
        nRow = objDataset.AddRow();
        objDataset.SetColumn(nRow, "CD", gds_oCourse.GetColumn(i, "COMBOCD"));
        objDataset.SetColumn(nRow, "DATA", gds_oCourse.GetColumn(i, "COMBONM"));
        objDataset.SetColumn(nRow, "DATA2", gds_oCourse.GetColumn(i, "COMBONICK"));
    }

    if (length(sOpt) > 0) {
        objDataset.InsertRow(0);
        objDataset.SetColumn(0, "CD", "");
        objDataset.SetColumn(0, "DATA", sOpt);
    }
    objDataset.row = 0;

    gds_oCourse.UnFilter();
}

/*
 * 기능 : 고객대표직능코드 정보를 조회한다.
 * parameter : objDataset - 리턴받을 데이타셋
 *             sUseYn - 사용유무 : null 전체, Y 사용가만, N 사용불가만
 *             sOpt - "전체" 또는 "선택" 또는 " " 포함여부
 * return : 없음
 */
function gfn_SearchCustomerCourse(objDataset, sUseYn, sOpt) {
    objDataset.ClearData();

    var nRow = -1;
    var ls_FilterExpr = "";
        ls_FilterExpr += "CGROUPGUBUN=='0'";
    if (!gfn_IsNull(sUseYn)) {
        ls_FilterExpr += "&&CUSEGUBUN=='" + trim(sUseYn) + "'";
    }
	
	gds_oCustomerCourse.Filter(ls_FilterExpr);
	
    for (var i = 0; i < gds_oCustomerCourse.GetCount(); i++) {
        nRow = objDataset.AddRow();
        objDataset.SetColumn(nRow, "CD", gds_oCustomerCourse.GetColumn(i, "COURSECD"));
		objDataset.SetColumn(nRow, "DATA", gds_oCustomerCourse.GetColumn(i, "CGROUPNICKNM"));
    }

    if (length(sOpt) > 0) {
        objDataset.InsertRow(0);
        objDataset.SetColumn(0, "CD", "");
        objDataset.SetColumn(0, "DATA", sOpt);
    }
    objDataset.row = 0;

    gds_oCustomerCourse.UnFilter();
}

/*
 * 기능 : 고객대표직능코드 정보를 조회한다.
 * parameter : objDataset - 리턴받을 데이타셋
 *             sUseYn - 사용유무 : null 전체, Y 사용가만, N 사용불가만
 *             sOpt - "전체" 또는 "선택" 또는 " " 포함여부
 * return : 없음
 */
function gfn_SearchCustomerCourseFullName(objDataset, sUseYn, sOpt) {
    objDataset.ClearData();

    var nRow = -1;
    var ls_FilterExpr = "";
        ls_FilterExpr += "CGROUPGUBUN=='0'";
    if (!gfn_IsNull(sUseYn)) {
        ls_FilterExpr += "&&CUSEGUBUN=='" + trim(sUseYn) + "'";
    }
	
	gds_oCustomerCourse.Filter(ls_FilterExpr);
	
    for (var i = 0; i < gds_oCustomerCourse.GetCount(); i++) {
        nRow = objDataset.AddRow();
        objDataset.SetColumn(nRow, "CD", gds_oCustomerCourse.GetColumn(i, "COURSECD"));
		objDataset.SetColumn(nRow, "DATA", gds_oCustomerCourse.GetColumn(i, "CGROUPNM"));
    }

    if (length(sOpt) > 0) {
        objDataset.InsertRow(0);
        objDataset.SetColumn(0, "CD", "");
        objDataset.SetColumn(0, "DATA", sOpt);
    }
    objDataset.row = 0;

    gds_oCustomerCourse.UnFilter();
}

/*
 * 기능 : 교육관리 고객대표직능코드 정보를 조회한다.(개인 , 단체 회원 제외)
 * parameter : objDataset - 리턴받을 데이타셋
 *             sUseYn - 사용유무 : null 전체, Y 사용가만, N 사용불가만
 *             sOpt - "전체" 또는 "선택" 또는 " " 포함여부
 * return : 없음
 */
function gfn_SearchCustomerEduCourseFullName(objDataset, sUseYn, sOpt) {
    objDataset.ClearData();

    var nRow = -1;
    var ls_FilterExpr = "";
        ls_FilterExpr += "CGROUPGUBUN=='0'";
        ls_FilterExpr += "&&COURSECD!='60'&&COURSECD!='70')";
    if (!gfn_IsNull(sUseYn)) {
        ls_FilterExpr += "&&CUSEGUBUN=='" + trim(sUseYn) + "'";
    }
	
	gds_oCustomerCourse.Filter(ls_FilterExpr);
	
    for (var i = 0; i < gds_oCustomerCourse.GetCount(); i++) {
        nRow = objDataset.AddRow();
        objDataset.SetColumn(nRow, "CD", gds_oCustomerCourse.GetColumn(i, "COURSECD"));
		objDataset.SetColumn(nRow, "DATA", gds_oCustomerCourse.GetColumn(i, "CGROUPNM"));
    }

    if (length(sOpt) > 0) {
        objDataset.InsertRow(0);
        objDataset.SetColumn(0, "CD", "");
        objDataset.SetColumn(0, "DATA", sOpt);
    }
    objDataset.row = 0;

    gds_oCustomerCourse.UnFilter();
}

/*
 * 기능 : 고객세부직능코드 정보를 조회한다.
 * parameter : sSearchGubun - 조회구분(그룹직능코드)
 *             objDataset - 리턴받을 데이타셋
 *             sUseYn - 사용유무 : null 전체, Y 사용가만, N 사용불가만
 *             sOpt - "전체" 또는 "선택" 또는 " " 포함여부
 * return : 없음
 */
function gfn_SearchCustomerDetailCourse(sSearchGubun, objDataset, sUseYn, sOpt) {
    objDataset.ClearData();

    var nRow = -1;
    var ls_FilterExpr = "CGROUPGUBUN=='1'";
    if (!gfn_IsNull(sSearchGubun)) {
        ls_FilterExpr += "&&CGROUPCD=='" + trim(sSearchGubun) + "'";
    }
    if (!gfn_IsNull(sUseYn)) {
        ls_FilterExpr += "&&CUSEGUBUN=='" + trim(sUseYn) + "'";
    }

	gds_oCustomerCourse.Filter(ls_FilterExpr);
	
    for (var i = 0; i < gds_oCustomerCourse.GetCount(); i++) {
        nRow = objDataset.AddRow();
        objDataset.SetColumn(nRow, "CD", gds_oCustomerCourse.GetColumn(i, "COURSECD"));
		objDataset.SetColumn(nRow, "DATA", gds_oCustomerCourse.GetColumn(i, "CNICKNM"));
		objDataset.SetColumn(nRow, "GCD", gds_oCustomerCourse.GetColumn(i, "CGROUPCD"));
    }

    if (length(sOpt) > 0) {
        objDataset.InsertRow(0);
        objDataset.SetColumn(0, "CD", "");
        objDataset.SetColumn(0, "DATA", sOpt);
        objDataset.SetColumn(0, "GCD", "");
    }
    objDataset.row = 0;

    gds_oCustomerCourse.UnFilter();
}

/*
 * 기능 : 고객세부직능코드 정보를 조회한다.
 * parameter : sSearchGubun - 조회구분(그룹직능코드)
 *             objDataset - 리턴받을 데이타셋
 *             sUseYn - 사용유무 : null 전체, Y 사용가만, N 사용불가만
 *             sOpt - "전체" 또는 "선택" 또는 " " 포함여부
 * return : 없음
 */
function gfn_SearchCustomerDetailCourseFullName(sSearchGubun, objDataset, sUseYn, sOpt) {
    objDataset.ClearData();

    var nRow = -1;
    var ls_FilterExpr = "CGROUPGUBUN=='1'";
    if (!gfn_IsNull(sSearchGubun)) {
        ls_FilterExpr += "&&CGROUPCD=='" + trim(sSearchGubun) + "'";
    }
    if (!gfn_IsNull(sUseYn)) {
        ls_FilterExpr += "&&CUSEGUBUN=='" + trim(sUseYn) + "'";
    }

	gds_oCustomerCourse.Filter(ls_FilterExpr);
	
    for (var i = 0; i < gds_oCustomerCourse.GetCount(); i++) {
        nRow = objDataset.AddRow();
        objDataset.SetColumn(nRow, "CD", gds_oCustomerCourse.GetColumn(i, "COURSECD"));
		objDataset.SetColumn(nRow, "DATA", gds_oCustomerCourse.GetColumn(i, "CNM"));
		objDataset.SetColumn(nRow, "GCD", gds_oCustomerCourse.GetColumn(i, "CGROUPCD"));
    }

    if (length(sOpt) > 0) {
        objDataset.InsertRow(0);
        objDataset.SetColumn(0, "CD", "");
        objDataset.SetColumn(0, "DATA", sOpt);
        objDataset.SetColumn(0, "GCD", "");
    }
    objDataset.row = 0;

    gds_oCustomerCourse.UnFilter();
}

/*
 * 기능 : 고객세부직능코드 정보를 조회한다.
 * parameter : sSearchGubun - 조회구분(그룹직능코드)
 *             objDataset - 리턴받을 데이타셋
 *             sUseYn - 사용유무 : null 전체, Y 사용가만, N 사용불가만
 *             sOpt - "전체" 또는 "선택" 또는 " " 포함여부
 * return : 없음
 */
function gfn_SearchCustomerDetailCourseNickFullName(sSearchGubun, objDataset, sUseYn, sOpt) {
    objDataset.ClearData();

    var nRow = -1;
    var ls_FilterExpr = "CGROUPGUBUN=='1'";
    if (!gfn_IsNull(sSearchGubun)) {
        ls_FilterExpr += "&&CGROUPCD=='" + trim(sSearchGubun) + "'";
    }
    if (!gfn_IsNull(sUseYn)) {
        ls_FilterExpr += "&&CUSEGUBUN=='" + trim(sUseYn) + "'";
    }

	gds_oCustomerCourse.Filter(ls_FilterExpr);
	
    for (var i = 0; i < gds_oCustomerCourse.GetCount(); i++) {
        nRow = objDataset.AddRow();
        objDataset.SetColumn(nRow, "CD", gds_oCustomerCourse.GetColumn(i, "COURSECD"));
		objDataset.SetColumn(nRow, "DATA", gds_oCustomerCourse.GetColumn(i, "CNICKFULLNM"));
		objDataset.SetColumn(nRow, "GCD", gds_oCustomerCourse.GetColumn(i, "CGROUPCD"));
    }

    if (length(sOpt) > 0) {
        objDataset.InsertRow(0);
        objDataset.SetColumn(0, "CD", "");
        objDataset.SetColumn(0, "DATA", sOpt);
        objDataset.SetColumn(0, "GCD", "");
    }
    objDataset.row = 0;

    gds_oCustomerCourse.UnFilter();
}

/*
 * 기능 : 지역코드 정보를 조회한다.
 * parameter : objCombo - 리턴받을 콤보 데이타셋
 *             sSearchGubun - 지부 선택 ""이면 모두
 *             sUseYn - 사용유무 : null 전체, Y 사용가만, N 사용불가만
 *             sOpt - "전체" 또는 "선택" 또는 " " 포함여부
 * return : 없음
 */
function gfn_SearchRegion(sSearchGubun, objDataset, sUseYn, sOpt) {
	objDataset.ClearData();

    var nRow = -1;
    var ls_FilterExpr = "";
    if (!gfn_IsNull(sSearchGubun)) {
        ls_FilterExpr += "RCGTMGNO=='" + trim(sSearchGubun) + "'";
    }
    if (!gfn_IsNull(sUseYn)) {
        ls_FilterExpr += "&&RCUSEGUBUN=='" + trim(sUseYn) + "'";
    }

	gds_oRegion.Filter(ls_FilterExpr);
	
    for (var i = 0; i < gds_oRegion.GetCount(); i++) {
        nRow = objDataset.AddRow();
        objDataset.SetColumn(nRow, "CD", gds_oRegion.GetColumn(i, "RCREGCD"));
		objDataset.SetColumn(nRow, "DATA", gds_oRegion.GetColumn(i, "RCNM"));
		objDataset.SetColumn(nRow, "GTCD", gds_oRegion.GetColumn(i, "RCGTMGNO"));
    }

    if (length(sOpt) > 0) {
        objDataset.InsertRow(0);
        objDataset.SetColumn(0, "CD", "");
        objDataset.SetColumn(0, "DATA", sOpt);
        objDataset.SetColumn(0, "GTCD", "");
    }
    objDataset.row = 0;

    gds_oRegion.UnFilter();
}
/*
 * 기능 : 지역코드 정보를 조회한다.(지역코드 포함)
 * parameter : objCombo - 리턴받을 콤보 데이타셋
 *             sSearchGubun - 지부 선택 ""이면 모두
 *             sUseYn - 사용유무 : null 전체, Y 사용가만, N 사용불가만
 *             sOpt - "전체" 또는 "선택" 또는 " " 포함여부
 * return : 없음
 */
function gfn_SearchCodeRegion(sSearchGubun, objDataset, sUseYn, sOpt) {
	objDataset.ClearData();

    var nRow = -1;
    var ls_FilterExpr = "";
    if (!gfn_IsNull(sSearchGubun)) {
        ls_FilterExpr += "RCGTMGNO=='" + trim(sSearchGubun) + "'";
    }
    if (!gfn_IsNull(sUseYn)) {
        ls_FilterExpr += "&&RCUSEGUBUN=='" + trim(sUseYn) + "'";
    }

	gds_oRegion.Filter(ls_FilterExpr);
	
    for (var i = 0; i < gds_oRegion.GetCount(); i++) {
        nRow = objDataset.AddRow();
        objDataset.SetColumn(nRow, "CD", gds_oRegion.GetColumn(i, "RCREGCD"));
		//objDataset.SetColumn(nRow, "DATA", gds_oRegion.GetColumn(i, "RCREGCD") + ". " + gds_oRegion.GetColumn(i, "RCNM"));
		objDataset.SetColumn(nRow, "DATA", gds_oRegion.GetColumn(i, "RCCDNM"));
		objDataset.SetColumn(nRow, "GTCD", gds_oRegion.GetColumn(i, "RCGTMGNO"));
    }

    if (length(sOpt) > 0) {
        objDataset.InsertRow(0);
        objDataset.SetColumn(0, "CD", "");
        objDataset.SetColumn(0, "DATA", sOpt);
        objDataset.SetColumn(0, "GTCD", "");
    }
    objDataset.row = 0;

    gds_oRegion.UnFilter();
}
/*
 * 기능 : 화면에 대한 권한 설정 값 획득
 * parameter : objForm - 폼오브젝트
 * return : 권한(W-실무, R-조회)
 */
function gfn_GetFormAuth(objForm, url) {
	if (gfn_isNull(url)) {
		return gds_oLeftMenu.GetColumn(gds_oLeftMenu.currow, "MENUAAUTH");
	} else {
	    return gds_oLeftMenu.GetColumn(gds_oLeftMenu.FindRow("MURL",url), "MENUAAUTH");
	}
}

/*
 * 기능 : 폼의 컴포넌트들의 필수값에 마크를 설정한다.
 * parameter : objForm - 폼 오브젝트
 * return : 없음
 */
function gfn_MakeRequiredInputMark(objForm) {
    var mobj_Component = null;
    var ms_ComponentId = null;
    for (var b = 0; b < Length(objForm.Components); b++) {
        mobj_Component = objForm.components(b);
        ms_ComponentId = mobj_Component.ID;
        // 필수값 체크
        if (mobj_Component.GetType() == "Edit"
                || mobj_Component.GetType() == "MaskEdit"
                || mobj_Component.GetType() == "TextArea"
                || mobj_Component.GetType() == "Spin"
                || mobj_Component.GetType() == "Combo"
                || mobj_Component.GetType() == "List"
                || mobj_Component.GetType() == "Radio"
                || mobj_Component.GetType() == "Calendar") {

            if (Length(mobj_Component.UserData) > 0) {
                var marr_UserData = array();
                marr_UserData = split(mobj_Component.UserData, ":");
                if (Length(marr_UserData[1]) > 0) {
                    mobj_Component.BorderColor = "User6";
                }
            }
        }

        // 검색 색상 및 키 값 색상 지정
        if (mobj_Component.GetType() == "Static") {
            if (Length(mobj_Component.UserData) > 0) {
                if (mobj_Component.UserData == "S") {
                    mobj_Component.Border = "Flat";
                    mobj_Component.BorderColor = "User10";
                } else if (mobj_Component.UserData == "K") {
                } else if (mobj_Component.UserData == "SK") {
                    mobj_Component.Border = "Flat";
                    mobj_Component.BorderColor = "User10";
                }
            }

        }
    }
}

/*
 * 기능 : 폼의 키값을 설정한다.
 * parameter : objForm - 폼 오브젝트
 * return : 없음
 */
function gfn_MakeKeyMark(objForm) {
    var mobj_Component = null;

    for (var b = 0; b < Length(objForm.Components); b++) {
        mobj_Component = objForm.components(b);

        if (mobj_Component.GetType() == "Edit"
                || mobj_Component.GetType() == "MaskEdit"
                || mobj_Component.GetType() == "Checkbox"
                || mobj_Component.GetType() == "TextArea"
                || mobj_Component.GetType() == "Spin"
                || mobj_Component.GetType() == "Combo"
                || mobj_Component.GetType() == "List"
                || mobj_Component.GetType() == "Radio"
                || mobj_Component.GetType() == "Calendar") {
            if (Length(mobj_Component.UserData) > 0) {
                var marr_UserData = array();
                marr_UserData = split(mobj_Component.UserData, ":");

                // 키값 Readonly 해제
                if (Length(marr_UserData[2]) > 0 && marr_UserData[2] == "K") {
                    if (mobj_Component.GetType() == "Combo") {
                        mobj_Component.Enable = false;
                    } else {
                        mobj_Component.Readonly = true;
                        mobj_Component.BKColor = "user4";
                    }
                }
            }
        }
    }
}

/**
 * 기능 : 폼에 변경사항이 있는지 검사한다.
 * parameter : objForm - 검사할 폼 오브젝트
 * return : 있으면 true, 없으면 false
 */
function gfn_CheckChangedGrid(objForm)
{
    var mobj_Component = null;
    var bUpdated = false;

    for (var b = 0; b < Length(objForm.Components); b++) {
        mobj_Component = objForm.components(b);

        if(mobj_Component.GetType() == "Grid") {
            var ms_ComponentId = mobj_Component.ID;
            bUpdated = objForm.object(objForm.object(ms_ComponentId).BindDataset).GetUpdate();

            if (bUpdated) {
                return true;
            }
        }
    }
    return false;
}

/*
 * 기능 : 좌측메뉴색상을 변경한다.
 * parameter : 없음
 * return : 없음
 */
function gfn_ChangeLeftMenu() {
    gds_oDesign.row = gds_oDesign.FindRow("MSYSGUBUN", gs_SystemGubun);
    global.mnuTop.shpTopMenuBottom.BkColor = gds_oDesign.GetColumn(gds_oDesign.FindRow("MSYSGUBUN", gs_SystemGubun), "MAINBKCOLOR");
    global.mnuTop.shpTopMenuBottom.LineColor = gds_oDesign.GetColumn(gds_oDesign.FindRow("MSYSGUBUN", gs_SystemGubun), "MAINBKCOLOR");
    global.mnuTop.BkColor = gds_oDesign.GetColumn(gds_oDesign.FindRow("MSYSGUBUN", gs_SystemGubun), "SUBBKCOLOR");
    global.mnuLeft.tabMenu.TabIndex = 0;
    global.mnuLeft.tabMenu.tabpgMenu.tvLeftMenu.BkColor = gds_oDesign.GetColumn(gds_oDesign.FindRow("MSYSGUBUN", gs_SystemGubun), "SUBBKCOLOR");
}

/*
 * 기능 : 우편번호 팝업을 호출한다.
 * parameter : sDongName - 검색하고자 하는 동명
 * return value : 우편번호 정보를 가진 배열 오브젝트
 */
function gfn_ZipCodeListPopup(sDongName) {
    var sArg = "sDongName=" + quote(sDongName);
    return Dialog(iif(gs_IsTlogin == "N", "sys", "outerbiz")+"::frmsys0051PZipCodeList.xml", sArg, 600, 400, "", -1, -1);
}

/*
 * 기능 : 신주소우편번호 팝업을 호출한다.
 * parameter : sDongName - 검색하고자 하는 동명
 * return value : 우편번호 정보를 가진 배열 오브젝트
 */
function gfn_NewZipCodeListPopup(sDongName) {
    var sArg = "sDongName=" + quote(sDongName);
    return Dialog(iif(gs_IsTlogin == "N", "sys", "outerbiz")+"::frmsys0053PNewZipCodeList.xml", sArg, 600, 400, "", -1, -1);
}

/*
 * 기능 : 지번주소, 도로명주소정보 팝업을 호출한다.
 * parameter : sDongName - 검색하고자 하는 동명
 * return value : 우편번호 정보를 가진 배열 오브젝트
 */
function gfn_PostRoadListPopup(sJibu				// 지부코드
								, sAddrGubun		// 구새주소 구분[0:구주소, 1:새주소]
								, sPostCD11			// 구:지번 우편번호
								, sPostAddr1		// 구:지번주소1
								, sPostAddr2		// 구:지번주소2
								, sPostMountain		// 구:산여부
								, sPostMainBunji	// 구:주번지
								, sPostSubBunji		// 구:부번지
								, sPostBuildNM		// 구:아파트,건물명
								, sPostDetailAddr	// 구:상세주소
								, sPostCD12			// 새1:도로명주소 우편번호
								, sRoadAddr11		// 새1:도로명주소11
								, sRoadAddr12		// 새1:도로명주소12
								, sRoadBuildMGNO1	// 새1:건물관리번호1
								, sRoadDetailAddr1	// 새1:상세주소1
								, sRoadEtcAddr1		// 새1:부가주소1
								, sPostCD2			// 새2:도로명주소 우편번호
								, sRoadAddr21		// 새2:도로명주소21
								, sRoadAddr22		// 새2:도로명주소22
								, sRoadBuildMGNO2	// 새2:건물관리번호2
								, sRoadDetailAddr2	// 새2:상세주소2
								, sRoadEtcAddr2 	// 새2:부가주소2
								, sBonbu			// 소방본부코드
								, sGubun)			// 프로그램 연계 구분
{
	var sArg = "sJibu=" + quote(sJibu)	
	         + " sAddrGubun=" + quote(sAddrGubun)	
	         + " sPostCD11=" + quote(sPostCD11)
	         + " sPostAddr1=" + quote(sPostAddr1)
	         + " sPostAddr2=" + quote(sPostAddr2)
	         + " sPostMountain=" + quote(sPostMountain)
	         + " sPostMainBunji=" + quote(sPostMainBunji)
	         + " sPostSubBunji=" + quote(sPostSubBunji)
	         + " sPostBuildNM=" + quote(sPostBuildNM)
	         + " sPostDetailAddr=" + quote(sPostDetailAddr)
	         + " sPostCD12=" + quote(sPostCD12)	         
	         + " sRoadAddr11=" + quote(sRoadAddr11)
	         + " sRoadAddr12=" + quote(sRoadAddr12)
	         + " sRoadBuildMGNO1=" + quote(sRoadBuildMGNO1)
	         + " sRoadDetailAddr1=" + quote(sRoadDetailAddr1)
	         + " sRoadEtcAddr1=" + quote(sRoadEtcAddr1)
	         + " sPostCD2=" + quote(sPostCD2)	         	         
	         + " sRoadAddr21=" + quote(sRoadAddr21)
	         + " sRoadAddr22=" + quote(sRoadAddr22)
	         + " sRoadBuildMGNO2=" + quote(sRoadBuildMGNO2)
	         + " sRoadDetailAddr2=" + quote(sRoadDetailAddr2)
	         + " sRoadEtcAddr2=" + quote(sRoadEtcAddr2)
	         + " sBonbu=" + quote(sBonbu)
	         + " sGubun=" + quote(sGubun);
	return Dialog(iif(gs_IsTlogin == "N", "sys", "outerbiz")+"::frmsys0055PAddrSearch.xml", sArg, 704, 656, "", -1, -1);
}


/*
 * 기능 : 단일문자메시지발송 팝업을 호출한다.
 * parameter : sSmsGubun - 검색하고자 하는 동명
 *             sRecvTel - 수신번호
 *             sRecvNm - 수신자명
 *             sTomgNo- 회차관리번호 
 *             sTjmgNo - 접수관리번호
 *             sTohjubSuNo - 접수번호 
 *             sSMMSG - 전문    
 * return value : 단일문자메시지발송 정보를 가진 배열 오브젝트
 */
function gfn_SendOneSmsPopup(sSmsGubun, sRecvTel, sRecvNm, sTomgNo, sTjmgNo, sTohjubSuNo, sSMMSG) {
    var sArg = "sSmsGubun=" + quote(sSmsGubun);
    sArg += " sRecvTel=" + quote(sRecvTel);
    sArg += " sRecvNm=" + quote(sRecvNm);
    sArg += " sTomgNo=" + quote(sTomgNo);
    sArg += " sTjmgNo=" + quote(sTjmgNo);
    sArg += " sTohjubSuNo=" + quote(sTohjubSuNo);
    sArg += " sSMMSG=" + quote(sSMMSG);

    return Dialog("COM::frmCOM1100MOneSMSSend.xml", sArg, 368, 396, "", -1, -1);
}

/*
 * 기능 : KT문자메시지발송 팝업을 호출한다.
 * parameter : sSmsGubun - 검색하고자 하는 동명
 *             sRecvTel - 수신번호
 *             sRecvNm - 수신자명
 *             sTomgNo- 회차관리번호 
 *             sTjmgNo - 접수관리번호
 *             sTohjubSuNo - 접수번호 
 *             sSMMSG - 전문    
 * return value : 단일문자메시지발송 정보를 가진 배열 오브젝트
 */
function gfn_KTSendOneSmsPopup(sMBCCD, sMPK1, sMPK2, sMPK3, sMBSMGNO, sMRECVNM, sMRECVTEL, sMTITLE, sMMSG) {
    var sArg = "sMBCCD=" + quote(sMBCCD);
    sArg += " sMPK1=" + quote(sMPK1);
    sArg += " sMPK2=" + quote(sMPK2);
    sArg += " sMPK3=" + quote(sMPK3);
    sArg += " sMBSMGNO=" + quote(sMBSMGNO);
    sArg += " sMRECVNM=" + quote(sMRECVNM);
    sArg += " sMRECVTEL=" + quote(sMRECVTEL);
    sArg += " sMTITLE=" + quote(sMTITLE);
    sArg += " sMMSG=" + quote(sMMSG);

    return Dialog("COM::frmCOM1100MOneSMSSend.xml", sArg, 368, 396, "", -1, -1);
}

/*
 * 기능 : 데이타셋에 특정 값이 있는지 검사한다(중복유무검사).
 * parameter : objDatatet - 데이타셋
 *             sFieldName - 데이타셋 필드명
 *             sValue - 찾을 값
 * return : 있으면 true, 없으면 false
 */
function gfn_IsDuplicatedDataset(objDataset, sFieldName, sValue) {
    Create("DATASET", "ds_Temp"); // 작업용 데이터셋을 생성한다.
    ds_Temp.Copy(objDataset); // Tree 데이터셋 필드구조를 복사한다.

    ds_Temp.Filter(sFieldName + "=" + quote(sValue));
    var mn_RowCnt = ds_Temp.GetCount();

    Destroy("ds_Temp"); // 작업용 데이터셋을 파괴한다.

    if (mn_RowCnt > 0) {
        return true;
    } else {
        return false;
    }
}

/*
 * 기능 : 이미지 팝업을 호출한다.
 * parameter : sFilePath - 이미지 URL(예:/minimap)
 *           : sRealFileName - 서버에 저장된 실제 파일 명
 *           : sSaveFileName - 저장할 파일 명
 * return value : 없음
 */
function gfn_ImageViewPopup(sFilePath, sRealFileName, sSaveFileName, sMapGubun, sDownloadYN) {
    var sArg = "sFilePath=" + quote(sFilePath)
        + " sRealFileName=" + quote(sRealFileName)
        + " sSaveFileName=" + quote(sSaveFileName)
        + " sMapGubun=" + quote(sMapGubun)
        + " sDownloadYN=" + quote(sDownloadYN);
	Dialog("COM::frmCOM1200PImageView.xml", sArg, -1, -1, "", -1, -1);
}


/*
 * 기능 : OMR이미지 팝업을 호출한다.
 * parameter : sFilePath - 이미지 URL(예:/minimap)
 *           : sRealFileName - 서버에 저장된 실제 파일 명
 *           : sSaveFileName - 저장할 파일 명
 * return value : 없음
 */
function gfn_OmrViewPopup1(sFilePath, sRealFileName, sSaveFileName, sMapGubun, sDownloadYN) {
    var sArg = "sFilePath=" + quote(sFilePath)
        + " sRealFileName=" + quote(sRealFileName)
        + " sSaveFileName=" + quote(sSaveFileName)
        + " sMapGubun=" + quote(sMapGubun)
        + " sDownloadYN=" + quote(sDownloadYN);
	Dialog("COM::frmCOM1220POMRImageView1.xml", sArg, -1, -1, "", -1, -1);
}

/*
 * 기능 : OMR이미지 팝업을 호출한다.
 * parameter : sFilePath - 이미지 URL(예:/minimap)
 *           : sRealFileName - 서버에 저장된 실제 파일 명
 *           : sSaveFileName - 저장할 파일 명
 * return value : 없음
 */
function gfn_OmrViewPopup2(sFilePath, sRealFileName, sSaveFileName, sMapGubun, sDownloadYN) {
    var sArg = "sFilePath=" + quote(sFilePath)
        + " sRealFileName=" + quote(sRealFileName)
        + " sSaveFileName=" + quote(sSaveFileName)
        + " sMapGubun=" + quote(sMapGubun)
        + " sDownloadYN=" + quote(sDownloadYN);
	Dialog("COM::frmCOM1220POMRImageView2.xml", sArg, -1, -1, "", -1, -1);
}

/*
 * 기능 : OMR이미지 팝업을 호출한다.
 * parameter : sFilePath - 이미지 URL(예:/minimap)
 *           : sRealFileName - 서버에 저장된 실제 파일 명
 *           : sSaveFileName - 저장할 파일 명
 * return value : 없음
 */
function gfn_OmrViewPopup3(sFilePath, sRealFileName, sSaveFileName, sMapGubun, sDownloadYN) {
    var sArg = "sFilePath=" + quote(sFilePath)
        + " sRealFileName=" + quote(sRealFileName)
        + " sSaveFileName=" + quote(sSaveFileName)
        + " sMapGubun=" + quote(sMapGubun)
        + " sDownloadYN=" + quote(sDownloadYN);
	Dialog("COM::frmCOM1220POMRImageView3.xml", sArg, -1, -1, "", -1, -1);
}


/*
 * 기능 : 교육장소 팝업을 호출한다.
 * parameter : sEduPlaceName - 검색하고자 하는 동명
 * return value : 교육장소 정보를 가진 배열 오브젝트
 */
function gfn_EducationPlaceListPopup(sEduPlaceName) {
    var sArg = "sEduPlaceName=" + quote(sEduPlaceName);
    return Dialog("training::frmtraining9001PEducationPlaceList.xml", sArg, 600, 400, "", -1, -1);
}

/*
 * 기능 : 출력물을 지정된 프린터로 설정한다. 없을 시 기본 프린터를 설정한다.
 * parameter : sPrintNm - 출력물명. 없을 시 기본 프린터로 설정.
 *             objRexpertPage : 렉스퍼스 페이지 오브젝트.
 * return value : 없음
 */
function gfn_SetPrinter(sPrintNm, objRexpertPage) {
    var ms_Printer = "";
    var mn_Row;

    if (gfn_IsNull(sPrintNm)) { // 기본 프린터로 설정
        ms_Printer = gs_LocalDefaultPrinter;
    } else { // 지정 출력물의 프린터로 설정
        mn_Row = gds_ioPrintConfig.FindRow("PCCD", sPrintNm);
        if (mn_Row < 0) {
            ms_Printer = gs_LocalDefaultPrinter;
        } else {
            ms_Printer = gds_ioPrinter.GetColumn(gds_ioPrinter.FindRow("NO", gds_ioPrintConfig.GetColumn(mn_Row, "PCPRINTERNO")), "PATH");
        }
    }

    ext_SetDefaultPrinter(ms_Printer);

    if (gfn_IsNull(objRexpertPage.ID)) { // 여백 기본값 설정
        objRexpertPage.LeftMargin = "50"; // 좌여백
        objRexpertPage.RightMargin = "50"; // 우여백
        objRexpertPage.TopMargin = "50"; // 상여백
        objRexpertPage.BottomMargin = "50"; // 하여백
    } else { // 지정 여백 설정
        objRexpertPage.LeftMargin = gds_ioPrinter.GetColumn(gds_ioPrintConfig.FindRow("NO", gds_ioPrintConfig.GetColumn(mn_Row, "PCPRINTERNO")), "PCLEFTMARGIN"); // 좌여백
        objRexpertPage.RightMargin = "0"; // 우여백
        objRexpertPage.TopMargin = gds_ioPrinter.GetColumn(gds_ioPrintConfig.FindRow("NO", gds_ioPrintConfig.GetColumn(mn_Row, "PCPRINTERNO")), "PCTOPMARGIN"); // 상여백
        objRexpertPage.BottomMargin = "0"; // 하여백
    }
}

/*
 * 기능 : 고객 팝업을 호출한다.
 * parameter : sPersonNm - 성명
 *             sResidentNo - 주민번호
 * return value : 고객 정보를 가진 배열 오브젝트
 */
function gfn_PersonInfoListPopup(sPersonNm, sResidentNo, sPrgGubun) {
    var sArg = "sPersonNm=" + quote(sPersonNm);
    sArg += " sResidentNo=" + quote(replace(sResidentNo,"_",""));
    sArg += " sPrgGubun=" + quote(sPrgGubun);
    return Dialog("COM::frmCOM1000PPersonInfoList.xml", sArg, 472, 280, "", -1, -1);
}

/*
 * 기능 : 고객 팝업을 호출한다.
 * parameter : sPersonNm - 성명
 *             sResidentNo - 주민번호
 * return value : 고객 정보를 가진 배열 오브젝트
 */
function gfn_TrainingPersonListPopup(sPersonNm, sResidentNo, sPrgGubun) {
    var sArg = "sPersonNm=" + quote(sPersonNm);
    sArg += " sResidentNo=" + quote(replace(sResidentNo,"_",""));
    sArg += " sPrgGubun=" + quote(sPrgGubun);
    return Dialog("COM::frmCOM1000PTrainingPersonList.xml", sArg, 472, 280, "", -1, -1);
}

/*
 * 기능 : 기타소득관리 소득자 팝업을 호출한다.
 * parameter : sKeyword - 키워드
 * return value : 소득자 정보를 가진 배열 오브젝트
 */
function gfn_OtherPersonListPopup(sKeyword, sYear) {
    var sArg = "sKeyword=" + quote(sKeyword);
    sArg += " sYear=" + quote(sYear);
    return Dialog("COM::frmCOM1000POtherPersonList.xml", sArg, 472, 280, "", -1, -1);
}

/*
 * 기능 : 기타소득관리 일자조회 팝업을 호출한다.
 * return value : 소득자 정보를 가진 배열 오브젝트
 */
function gfn_OtherIncomeListPopup(sKeyword, sYear) {
    return Dialog("COM::frmCOM1000PIncomePaymentList.xml", "", 472, 280, "", -1, -1);
}

/*
 * 기능 : Root Path를 구한다.
 * parameter : 없음
 * return value : Root Path 문자열(예:C:\\a\\b\\)
 */
function gfn_GetRootPath() {
	var i, len, start_xml, c;
	start_xml = global.StartXml;
	len = Length(start_xml);
	for( i = len-1 ; i >= 0 ; i-- ) {
		c = CharAt(start_xml, i);
		if ( c == "\\" || c == "/" )
			break;
	}

	return substr(start_xml, 0, i) + c;
}

/*
 * 기능 : Excel을 읽어 Grid에 대체 한다.(Popup을 띄운다)
 * parameter : strGridID (string - Target Grid ID, Tab또는 Div안에 있으면 경로 포함)
 *        	   strFileName (string - Excell File Name, Path포함, 없으면 Dialog를 띄움)
 *        	   nSheet (Number - Excell Sheet Index, 0부터 시작)
 * return value : 없음
*/
function gfn_Excel2Grid(strGridID,strFileName,nSheet) {
	var objGrid = find(strGridID);
	var strFileDialog = "FileDlgExcel";
	var strFileID = "FileExcel";
	var objFile = find(strFileID);

	// FileExcel 이 없으면 Create...
	if (isValid(objFile) == false) {
		Create("File",strFileID,'Height="1" Left="1" Right="1" TabOrder="1000" Top="1" Width="1"');
		objFile = find(strFileID);
	}
	
	if (gfn_IsNull(strFileName)) {
		// strFileName가 존재하지 않는 파일이면 FileDialog를 띄움
		if (FileExcel.IsExistFile(strFileName) == false) {
			if (isValid(Find(strFileDialog)) == false) {
				Create("FileDialog",strFileDialog,'Height="1" Left="1" Right="1" TabOrder="100" Top="1" Width="1"');
			}
	
			var objFileDialog = Find(strFileDialog);
	
			objFileDialog.Type = "OPEN";	
			objFileDialog.Filter = "Excel File(*.xlsx)|*.xlsx|Excel File(*.xls)|*.xls|Csv File(*.csv)|*.csv|Text File(*.txt)|*.txt|";
			objFileDialog.FileName = "";
	
			if (objFileDialog.Open() == false) {
				return;
			}	
			strFileName = objFileDialog.FilePath + "\\" + objFileDialog.FileName;	
		}
	} else {
		if (FileExcel.IsExistFile(strFileName) == false) {	
			gfn_alert("파일이 존재하지 않습니다.");
			return;
		}
	}
		
	// nSheet가 없으면 0번째 Sheet자동 선택
	nSheet = decode(gfn_IsNull(nSheet), true, 0, nSheet);

	var sParam = "";
		sParam += " asGrid=" + quote(strGridID);
		sParam += " asExcel=" + quote(strFileName);
		sParam += " anSheet=" + quote(nSheet);

	var bRet = dialog("COM::frmCOM2000PExcelLoading.xml", sParam, 1000, 590);
	
	if (bRet) {
		objGrid.Redraw = false;
		objGrid.Redraw = true;
		edt_atachFileNm = strFileName;
	}
}


/*
 * 기능 : Excel을 읽어 Grid에 대체 한다.(Popup을 띄운다)
 * parameter : strGridID (string - Target Grid ID, Tab또는 Div안에 있으면 경로 포함)
 *        	   strFileName (string - Excell File Name, Path포함, 없으면 Dialog를 띄움)
 *        	   nSheet (Number - Excell Sheet Index, 0부터 시작)
 * return value : 없음
*/
function gfn_Excel3Grid(strGridID,strFileName,nSheet) {
	var objGrid = find(strGridID);
	var strFileDialog = "FileDlgExcel";
	var strFileID = "FileExcel";
	var objFile = find(strFileID);

	// FileExcel 이 없으면 Create...
	if (isValid(objFile) == false) {
		Create("File",strFileID,'Height="1" Left="1" Right="1" TabOrder="1000" Top="1" Width="1"');
		objFile = find(strFileID);
	}
	
	if (gfn_IsNull(strFileName)) {
		// strFileName가 존재하지 않는 파일이면 FileDialog를 띄움
		if (FileExcel.IsExistFile(strFileName) == false) {
			if (isValid(Find(strFileDialog)) == false) {
				Create("FileDialog",strFileDialog,'Height="1" Left="1" Right="1" TabOrder="100" Top="1" Width="1"');
			}
	
			var objFileDialog = Find(strFileDialog);
	
			objFileDialog.Type = "OPEN";	
			objFileDialog.Filter = "Excel File(*.xlsx)|*.xlsx|Excel File(*.xls)|*.xls|Csv File(*.csv)|*.csv|Text File(*.txt)|*.txt|";
			objFileDialog.FileName = "";
	
			if (objFileDialog.Open() == false) {
				return;
			}	
			strFileName = objFileDialog.FilePath + "\\" + objFileDialog.FileName;	
		}
	} else {
		if (FileExcel.IsExistFile(strFileName) == false) {	
			gfn_alert("파일이 존재하지 않습니다.");
			return;
		}
	}
		
	// nSheet가 없으면 0번째 Sheet자동 선택
	nSheet = decode(gfn_IsNull(nSheet), true, 0, nSheet);

	var sParam = "";
		sParam += " asGrid=" + quote(strGridID);
		sParam += " asExcel=" + quote(strFileName);
		sParam += " anSheet=" + quote(nSheet);

	var bRet = dialog("COM::frmCOM2000PExcelLoading_new.xml", sParam, 1000, 590);
	
	if (bRet) {
		objGrid.Redraw = false;
		objGrid.Redraw = true;
		edt_atachFileNm = strFileName;
	}
}

/*
 * 기능 : 통합영수증발급(POS)시스템 팝업을 호출한다.
 * parameter : sProgramId - POS단위업무프로그램
 *             sSunapGubun - 수납환불구분
 *             sProcAmount - 수납환불처리금액
 *             sPosYear - 환불용 POS년도
 *             sPosMgno - 환불용 POS관리번호
 *             sKey1 - KEY값1
 *             sKey2 - KEY값2
 *             sHpTel - 휴대폰번호
 *             sRepayPayment - 환불용 수납 결제방법
 *             sRepayAmount - 환불금액
 *             sRepayAbsenGubun - 강습결강일차
 * return value : 통합영수증발급(POS)시스템팝업을 가진 배열 오브젝트
 */
function gfn_POSPopup(sProgramId, sSunapGubun, sProcAmount, sPosYear, sPosMgno, sKey1, sKey2, sKey3, sKey4, sHpTel, sRepayPayment, sRepayAmount, sRepayAbsenGubun, sPersonNm) {
    var sArg = "sProgramId=" + quote(sProgramId);
    sArg += " sSunapGubun=" + quote(sSunapGubun);
    sArg += " sProcAmount=" + quote(sProcAmount);
    sArg += " sPosYear=" + quote(sPosYear);
    sArg += " sPosMgno=" + quote(sPosMgno);
    sArg += " sKey1=" + quote(sKey1);
    sArg += " sKey2=" + quote(sKey2);
    sArg += " sKey3=" + quote(sKey3);
    sArg += " sKey4=" + quote(sKey4);
    sArg += " sHpTel=" + quote(sHpTel);
    sArg += " sRepayPayment=" + quote(sRepayPayment);
    sArg += " sRepayAmount=" + quote(sRepayAmount);
    sArg += " sRepayAbsenGubun=" + quote(sRepayAbsenGubun);
    sArg += " sPersonNm=" + quote(sPersonNm);
    
    return Dialog("COM::frmCOM3000PSettlementPOS.xml", sArg, 800, 456, "", -1, -1);
}

/*
 * 기능 : 강습통합영수증발급(POS)시스템 팝업을 호출한다.
 * parameter : sProgramId - POS단위업무프로그램
 *             sKey1 - Key1(접수관리번호)
 *             sKey2 - Key2(회차관리번호)
 *             sKey3 - Key3(접수번호)
 *             sKey4 - Key4(부가세관리번호)
 * return value : 강습통합영수증발급(POS)시스템 팝업 결과를 가진 배열 오브젝트
 */
function gfn_TrainingPOSPopup(sProgramId, sKey1, sKey2, sKey3, sKey4) {
    var sArg = "sProgramId=" + quote("21");
    sArg += " sKey1=" + quote(sKey1);	// tjmgno
    sArg += " sKey2=" + quote(sKey2);	// tomgno
    sArg += " sKey3=" + quote(sKey3);	// tohjubsuno
    sArg += " sKey4=" + quote(sKey4);	// PVVMMGNO  부가세관리번호(환불시 수정계산서 연동)

    return Dialog("COM::frmCOM8000PSettlementPOS.xml", sArg, 800, 456, "", -1, -1);
}

/*
 * 기능 : 강습통합영수증발급(POS)시스템 현금영수증처리 팝업을 호출한다.
 * parameter : sProgramId - POS단위업무프로그램
 *             sKey1 - Key1(접수관리번호)
 *             sKey2 - Key2(강습결제순차번호)
 *             sRepayPosYear - 환불용 POS년도
 *             sRepayPosMgno - 환불용 POS관리번호
 *             sRepayPayment - 결과출력용 납입방법(0,1,2,3)
 *             sKey3 - Key3()
 * return value : 강습현금영수증처리시스템 팝업 결과를 가진 배열 오브젝트
 */
function gfn_TrainingCashChangePOSPopup(sProgramId, sKey1, sKey2, sRepayPosYear, sRepayPosMgno, sRepayPayment) {
    var sArg = "sProgramId=" + quote(sProgramId);
    sArg += " sKey1=" + quote(""); // 현재 사용안함
    sArg += " sKey2=" + quote(""); // 현재 사용안함
    sArg += " sKey3=" + quote(""); // 현재 사용안함
    sArg += " sRepayPosYear=" + quote(sRepayPosYear);
    sArg += " sRepayPosMgno=" + quote(sRepayPosMgno);
    sArg += " sRepayPayment=" + quote(sRepayPayment);

    return Dialog("COM::frmCOM8300PCashChangePOS.xml", sArg, 800, 188, "", -1, -1);
}

/**
 * 기능 : 날짜를 암호화
 * parameter : encodeText - 암호화 하고자 하는 텍스트
 * return value : 암호화된 텍스트
 */
function gfn_Encode(encodeText) {

    var mn_Seed = Array(8);
    mn_Seed[0] = 17;
    mn_Seed[1] = 52;
    mn_Seed[2] = 33;
    mn_Seed[3] = 61;
    mn_Seed[4] = 65;
    mn_Seed[5] = 24;
    mn_Seed[6] = 49;
    mn_Seed[7] = 57;

    var swap = 0;
    var rand = 0;
    var encArr = Array(length(encodeText));

    for (var i = 0; i < length(encodeText); i++) {
        encArr[i] = asc(substr(encodeText, i, 1));
    }

    //스트림 알고리즘
    for (var i = 0; i < length(encArr); i++) {
        if (i >= 8) {
            encArr[i] += mn_Seed[i - 8];
        } else {
            encArr[i] += mn_Seed[i];
        }
        rand += encArr[i];
        encArr[i] = chr(encArr[i]);
    }

    //블럭 알고리즘
    switch (rand % 3) {
        case 0:
            for (var i = 0; i < length(encArr) - 2; i++) {
                swap = encArr[i];
                encArr[i] = encArr[i + 2];
                encArr[i+2] = swap;
            }
            break;
    
        case 1:
            for (var i = 0; i < length(encArr) - 1; i=i+2) {
                swap = encArr[i];
                encArr[i] = encArr[i + 1];
                encArr[i+1] = swap;
            }
            break;
    
        case 2:
            for (var i = length(encArr) - 1; i > 1; i--) {
                swap = encArr[i];
                encArr[i] = encArr[i - 2];
                encArr[i-2] = swap;
            }
            break;
    }

    var rtlText;
    for (var i = 0; i < length(encArr); i++) {
        rtlText += encArr[i];
    }

    return rtlText;
}

/**
 * 기능 : 날짜를 복호화
 * parameter : decodeText - 암호화 하고자 하는 텍스트
 * return value : 복호화된 텍스트
 */
function gfn_Decode(decodeText) {

    var mn_Seed = Array(8);
    mn_Seed[0] = 17;
    mn_Seed[1] = 52;
    mn_Seed[2] = 33;
    mn_Seed[3] = 61;
    mn_Seed[4] = 65;
    mn_Seed[5] = 24;
    mn_Seed[6] = 49;
    mn_Seed[7] = 57;

    var swap = 0;
    var rand = 0;
    var encArr = Array(length(decodeText));

    for (var i = 0; i < length(decodeText); i++) {
        encArr[i] = asc(substr(decodeText, i, 1));
        rand += encArr[i];
    }

    switch (rand % 3) {

    case 0:
        for (var i = length(encArr) - 1; i > 1; i--) {
            swap = encArr[i];
            encArr[i] = encArr[i - 2];
            encArr[i-2] = swap;
        }
        break;

    case 1:
        for (var i = length(encArr) - 1; i > 0; i-=2) {
            swap = encArr[i];
            encArr[i] = encArr[i - 1];
            encArr[i-1] = swap;
        }
        break;

    case 2:
        for (var i = 0; i < length(encArr) - 2; i++) {
            swap = encArr[i];
            encArr[i] = encArr[i + 2];
            encArr[i+2] = swap;
        }
        break;
    }

    for (var i = 0; i < length(encArr); i++) {
        if (i >= 8) {
            encArr[i] -= mn_Seed[i - 8];
        } else {
            encArr[i] -= mn_Seed[i];
        }
        encArr[i] = chr(encArr[i]);
    }

    var rtlText;
    for (var i = 0; i < length(encArr); i++) {
        rtlText += encArr[i];
    }

    return rtlText;
}

/*
 * 기능 : 도움말 팝업을 호출한다.
 * parameter : obj - 호출 오브젝트
 * return value : 없음
 */
function gfn_HelpMenuId(obj) {
    var ls_CurMenuId = gds_OpenedForm.GetColumn(global.mnuLeft.cbxOpenForm.Index, "MMENUID");
    if (!gfn_IsNull(ls_CurMenuId)) {
        var sArg = "sMenuId=" + quote(ls_CurMenuId);
        Dialog("COM::frmCOM5000PHelpViewer.xml", sArg, 600, 400, "", -1, -1);
        return true;
    } else {
        return false;
    }
}

/*
 * 기능 : SCI본인확인 
 * parameter : sPersonNm - 성명
 *             sResidentNo - 주민번호
 * return value : 실명인증 성공 여부 - 성공 true, 실패 false
 */
function gfn_CheckSCI(sPersonNm, sResidentNo) {
    if (gfn_IsNull(sPersonNm) || gfn_IsNull(sResidentNo)) {
        gfn_Alert("성명과 주민번호를 입력해 주십시오.");
        return false;
    }
/*
    if (!gfn_CheckResidentNo(sResidentNo)) {
		if (substr(sResidentNo,6,1) == "5" || substr(sResidentNo,6,1) == "6") {
			if (!gfn_CheckForeignNo(sResidentNo)) {
				gfn_Alert("외국인 주민등록번호 형식이 틀립니다.");
			}
		} else {
            gfn_Alert("주민등록번호 형식이 틀립니다.");
		}
    }
*/	
    var sArg = "sPersonNm=" + quote(sPersonNm);
    sArg += " sResidentNo=" + quote(sResidentNo);
    
    var kind = "";
    if (substr(sResidentNo,6,1) >= "5") {	// 외국인
		kind = "1";
	} else {										// 내국인
		kind = "0";
	}
	gds_ioSciCheck.ClearData();
	gs_ShareSession = JSESSIONID;
//	gds_ioSciCheck.Load("https://intrawork.kfsi.or.kr/kems/scicheck/sci_Result.jsp?kind="+kind+"&name=" + sPersonNm + "&jumin1=" + substr(sResidentNo,0,6) + "&jumin2=" + substr(sResidentNo,6,7) + "&svcno=001001");
//	gds_ioSciCheck.Load("https://intrawork.kfsi.or.kr/kems/scicheck/sci_Encode_Result.jsp?kind="+kind+"&name=" + sPersonNm + "&jumin1=" + urlEncodeUtf8(substr(sResidentNo,0,6)) + "&jumin2=" + urlEncodeUtf8(substr(sResidentNo,6,7)) + "&svcno=001001");
	gds_ioSciCheck.Load("https://intrawork.kfsi.or.kr/kems/scicheck/sci_Encode_Result.jsp?kind="+kind+"&name=" + sPersonNm + "&jumin1=" + urlEncodeUtf8(substr(sResidentNo,0,6)) + "&jumin2=" + urlEncodeUtf8(substr(sResidentNo,6,7)) + "&svcno=001001");
//	gds_ioSciCheck.Load("https://intrawork.kfsi.or.kr/kems/scicheck/sci_Encode_Result1.jsp?kind="+kind+"&name=" + sPersonNm + "&value1=" + urlEncodeUtf8(substr(sResidentNo,9,4)) + "&value2=" + urlEncodeUtf8(substr(sResidentNo,6,3)) + "&value3=" + urlEncodeUtf8(substr(sResidentNo,3,3)) + "&value4=" + urlEncodeUtf8(substr(sResidentNo,0,3)) + "&svcno=001001");
	
	JSESSIONID = gs_ShareSession;

 //   return gds_ioSciCheck;
}

/*
 * 기능 : SCI본인확인 
 * parameter : sPersonNm - 성명
 *             sResidentNo - 주민번호
 * return value : 실명인증 성공 여부 - 성공 true, 실패 false
 */
function gfn_SearchSCI(sPersonNm, sResidentNo) {
    if (gfn_IsNull(sPersonNm) || gfn_IsNull(sResidentNo)) {
        gfn_Alert("성명과 주민번호를 입력해 주십시오.");
        return false;
    }
    
    if (length(sResidentNo) < 13) {
        gfn_Alert("주민번호 자리수가 맞지 않습니다.");
        return false;
    }
	
    var sArg = "sPersonNm=" + quote(sPersonNm);
    sArg += " sResidentNo=" + quote(sResidentNo);
    
    var kind = "";
    if (substr(sResidentNo,6,1) >= "5") {	// 외국인
		kind = "1";
	} else {										// 내국인
		kind = "0";
	}
	gds_ioSciCheck.ClearData();
	gs_ShareSession = JSESSIONID;
	//trace("https://intrawork.kfsi.or.kr/kems/scicheck/sci_Result.jsp?kind="+kind+"&name=" + sPersonNm + "&jumin1=" + substr(sResidentNo,0,6) + "&jumin2=" + substr(sResidentNo,6,7) + "&svcno=001001");
//	gds_ioSciCheck.Load("https://intrawork.kfsi.or.kr/kems/scicheck/sci_Result.jsp?kind="+kind+"&name=" + sPersonNm + "&jumin1=" + substr(sResidentNo,0,6) + "&jumin2=" + substr(sResidentNo,6,7) + "&svcno=001001");
//	gds_ioSciCheck.Load("https://intrawork.kfsi.or.kr/kems/scicheck/sci_Encode_Result.jsp?kind="+kind+"&name=" + sPersonNm + "&jumin1=" + urlEncodeUtf8(substr(sResidentNo,0,6)) + "&jumin2=" + urlEncodeUtf8(substr(sResidentNo,6,7)) + "&svcno=001001");	
	gds_ioSciCheck.Load("https://intrawork.kfsi.or.kr/kems/scicheck/sci_Encode_Result.jsp?kind="+kind+"&name=" + sPersonNm + "&jumin1=" + urlEncodeUtf8(substr(sResidentNo,0,6)) + "&jumin2=" + urlEncodeUtf8(substr(sResidentNo,6,7)) + "&svcno=001001");	
//	gds_ioSciCheck.Load("https://intrawork.kfsi.or.kr/kems/scicheck/sci_Encode_Result1.jsp?kind="+kind+"&name=" + sPersonNm + "&value1=" + urlEncodeUtf8(substr(sResidentNo,9,4)) + "&value2=" + urlEncodeUtf8(substr(sResidentNo,6,3)) + "&value3=" + urlEncodeUtf8(substr(sResidentNo,3,3)) + "&value4=" + urlEncodeUtf8(substr(sResidentNo,0,3)) + "&svcno=001001");

	JSESSIONID = gs_ShareSession;
	
    
    return gds_ioSciCheck.GetColumn(0, "STRDUP");

}

function gfn_SearchSCI2(sPersonNm, sResidentNo) {
    if (gfn_IsNull(sPersonNm) || gfn_IsNull(sResidentNo)) {
        gfn_Alert("성명과 주민번호를 입력해 주십시오.");
        return false;
    }
    
    if (length(sResidentNo) < 13) {
        gfn_Alert("주민번호 자리수가 맞지 않습니다.");
        return false;
    }
	
    var sArg = "sPersonNm=" + quote(sPersonNm);
    sArg += " sResidentNo=" + quote(sResidentNo);
    
    var kind = "";
    if (substr(sResidentNo,6,1) >= "5") {	// 외국인
		kind = "1";
	} else {										// 내국인
		kind = "0";
	}
	gds_ioSciCheck.ClearData();
	gs_ShareSession = JSESSIONID;
	gds_ioSciCheck.Load("https://intrawork.kfsi.or.kr/kems/scicheck/sci_Encode_Result.jsp?kind="+kind+"&name=" + sPersonNm + "&jumin1=" + urlEncodeUtf8(substr(sResidentNo,0,6)) + "&jumin2=" + urlEncodeUtf8(substr(sResidentNo,6,7)) + "&svcno=001001");	

	JSESSIONID = gs_ShareSession;
	
    
    return gds_ioSciCheck.GetColumn(0, "STRCI");

}

/*
 * 기능 : PERSONKEY 조회
 * parameter : sPersonNm - 성명
 *             sResidentNo - 주민번호
 * return value : 실명인증 성공 여부 - 성공 true, 실패 false
 */
 
function gfn_SearchPERSONKEY(sPersonNm, sResidentNo, sHP) {

	// search case1 : 이름, 주민번호
	// search case2 : 이름, 생년월일, 휴대폰
	var sDI = "";
	gds_ioSciCheck.ClearData();
	if (length(sResidentNo) == 13) {
		Https.Sync = true;
		sDI = gfn_SearchSCI(sPersonNm, sResidentNo);
		Https.Sync = false;
	}
    gds_oPersonKey.ClearData();

    tit_clearActionInfo(); //사람이 이미 있는지 검색한다.

    tit_addCsvSearchActionInfo("com:searchPersonKey", false);

    // 서버 호출 

    tit_callService(
        ""
        ,""
        ,""	// inDs
        ,"gds_oPersonKey=gds_oPersonKey"	// outDs
        , "PERSONNM=" + quote(sPersonNm)  // 성명
        + " DI=" + quote(sDI)	// DI 
        + " BIRTHDAY=" + quote(left(sResidentNo,6)) // 생년월일
        + " HP=" + quote(sHP)    //휴대폰    // args
        ,""
        ,false
        ,false
        ,true
    );  
    
    if (gfn_isNull(gds_oPersonKey.GetColumn(0, "PERSONKEY"))) {
		return "";
    } else {
		return gds_oPersonKey.GetColumn(0, "PERSONKEY");
	}
}


function gfn_SearchPERSONKEY2(sPersonNm, sResidentNo, sHP) {

	// search case1 : 이름, 주민번호
	// search case2 : 이름, 생년월일, 휴대폰
	var sCI = "";
	
	gds_ioSciCheck.ClearData();
	if (length(sResidentNo) == 13) {
		Https.Sync = true;
		sCI = gfn_SearchSCI2(sPersonNm, sResidentNo);
		Https.Sync = false;
	}
    gds_oPersonKey.ClearData();

    tit_clearActionInfo(); //사람이 이미 있는지 검색한다.

    tit_addCsvSearchActionInfo("com:searchPersonKey2", false);

    // 서버 호출 

    tit_callService(
        ""
        ,""
        ,""	// inDs
        ,"gds_oPersonKey=gds_oPersonKey"	// outDs
        , "PERSONNM=" + quote(sPersonNm)  // 성명
        + " CI=" + quote(sCI)	// CI 
        + " PNO=" + quote(sResidentNo)	// 주민번호
        + " BIRTHDAY=" + quote(left(sResidentNo,6)) // 생년월일
        + " HP=" + quote(sHP)    //휴대폰    // args
        ,""
        ,false
        ,false
        ,true
    );

    if (gfn_isNull(gds_oPersonKey.GetColumn(0, "PERSONKEY"))) {
		return "";
    } else {
		return gds_oPersonKey.GetColumn(0, "PERSONKEY");
	}
}
	
	
/*
 * 기능 : SCI본인확인 
 * parameter : sPersonNm - 성명
 *             sResidentNo - 주민번호
 * return value : 실명인증 성공 여부 - 성공 true, 실패 false
 */
function gfn_SearchSCIDI(sPersonNm, sResidentNo) {
	
    var sArg = "sPersonNm=" + quote(sPersonNm);
    sArg += " sResidentNo=" + quote(sResidentNo);
    
    var kind = "";
    if (substr(sResidentNo,6,1) >= "5") {	// 외국인
		kind = "1";
	} else {										// 내국인
		kind = "0";
	}
	gds_ioSciDI.ClearData();
	gs_ShareSession = JSESSIONID;
//	gds_ioSciDI.Load("https://intrawork.kfsi.or.kr/kems/scicheck/sci_Result.jsp?kind="+kind+"&name=" + sPersonNm + "&jumin1=" + substr(sResidentNo,0,6) + "&jumin2=" + substr(sResidentNo,6,7) + "&svcno=001001");
//	gds_ioSciDI.Load("https://intrawork.kfsi.or.kr/kems/scicheck/sci_Encode_Result.jsp?kind="+kind+"&name=" + sPersonNm + "&jumin1=" + urlEncodeUtf8(substr(sResidentNo,0,6)) + "&jumin2=" + urlEncodeUtf8(substr(sResidentNo,6,7)) + "&svcno=001001");
	gds_ioSciDI.Load("https://intrawork.kfsi.or.kr/kems/scicheck/sci_Encode_Result.jsp?kind="+kind+"&name=" + sPersonNm + "&jumin1=" + urlEncodeUtf8(substr(sResidentNo,0,6)) + "&jumin2=" + urlEncodeUtf8(substr(sResidentNo,6,7)) + "&svcno=001001");
//	gds_ioSciDI.Load("https://intrawork.kfsi.or.kr/kems/scicheck/sci_Encode_Result1.jsp?kind="+kind+"&name=" + sPersonNm + "&value1=" + urlEncodeUtf8(substr(sResidentNo,9,4)) + "&value2=" + urlEncodeUtf8(substr(sResidentNo,6,3)) + "&value3=" + urlEncodeUtf8(substr(sResidentNo,3,3)) + "&value4=" + urlEncodeUtf8(substr(sResidentNo,0,3)) + "&svcno=001001");
	JSESSIONID = gs_ShareSession;

    return gds_ioSciDI.GetColumn(0, "STRDUP");
}


/*
 * 기능 : 실명인증 팝업을 호출한다.
 * parameter : sPersonNm - 성명
 *             sResidentNo - 주민번호
 * return value : 실명인증 성공 여부 - 성공 true, 실패 false
 */
function gfn_CheckNice(sPersonNm, sResidentNo) {
    if (gfn_IsNull(sPersonNm) || gfn_IsNull(sResidentNo)) {
        gfn_Alert("성명과 주민번호를 입력해 주십시오.");
        return false;
    }
    if (!gfn_CheckResidentNo(sResidentNo)) {
		if (substr(sResidentNo,6,1) == "5" || substr(sResidentNo,6,1) == "6") {
			if (!gfn_CheckForeignNo(sResidentNo)) {
				gfn_Alert("외국인 주민등록번호 형식이 틀립니다.");
				return false;
			}
		} else {
            gfn_Alert("주민등록번호 형식이 틀립니다.");
			return false;
		}
    }

	
    var sArg = "sPersonNm=" + quote(sPersonNm);
    sArg += " sResidentNo=" + quote(sResidentNo);
    return Dialog("COM::frmCOM6000PNiceCheck.xml", sArg, 480, 300, "", -1, -1);
}

/*
 * 기능 : 재외국인 등록번호를 검사한다.
 * parameter : sResidentNo - 주민번호
 * return value : 적합 true, 부적합 false
 */
function gfn_CheckForeignNo(sResidentNo) {
    var sum = 0;
    var odd = 0;

    if (trim(sResidentNo.length) <> 13) {
        return false;
    }

    var buf = array(13);
    for (var i = 0; i < 13; i++) {
        buf[i] = ToInteger(substr(sResidentNo, i, 1));
    }

    odd = buf[7] * 10 + buf[8];
    if ( odd % 2 != 0) {
        return false; 
    }
    if ((buf[11] != 6) && (buf[11] != 7) && (buf[11] != 8) && (buf[11] != 9)) {
        return false;
    }

    var multipliers = array(12); // [2,3,4,5,6,7,8,9,2,3,4,5];
    var index = 0;
    multipliers[index++] = 2;
    multipliers[index++] = 3;
    multipliers[index++] = 4;
    multipliers[index++] = 5;
    multipliers[index++] = 6;
    multipliers[index++] = 7;
    multipliers[index++] = 8;
    multipliers[index++] = 9;
    multipliers[index++] = 2;
    multipliers[index++] = 3;
    multipliers[index++] = 4;
    multipliers[index++] = 5;

    for (var i = 0, sum = 0; i < 12; i++) {
        buf[i] = buf[i] * multipliers[i];
        sum += buf[i];
    }

    sum = 11 - (sum % 11);
    if (sum >= 10) {
        sum -= 10;
    }
    sum += 2;
    if (sum >= 10) {
        sum -= 10;
    }

    if (sum != buf[12]) {
        return false;
    }
    return true;
}
		
/*
 * 기능 : 주민등록번호체계를 검사한다.
 * parameter : sResidentNo - 주민번호
 * return value : 적합 true, 부적합 false
 */
function gfn_CheckResidentNo(sResidentNo) {
    var ls_ResidentNo1 = left(sResidentNo, 6); // 주민번호 앞6자리
    var ls_ResidentNo2 = right(sResidentNo, 7); // 주민번호 뒤7자리

    var tmp1, tmp2, tmp3;
    var t1, t2, t3, t4, t5, t6, t7;

    tmp1 = ls_ResidentNo1.substr(2, 2);
    tmp2 = ls_ResidentNo1.substr(4);
    tmp3 = ls_ResidentNo2.substr(0, 1);

    if (trim(ls_ResidentNo1.length) <> 6) {
        return false;
    }
    if (trim(ls_ResidentNo2.length) <> 7) {
        return false;
    }
    if ((tmp1 < "01") || (tmp1 > "12")) {
        return false;
    }
    if ((tmp2 < "01") || (tmp2 > "31")) {
        return false;
    }
    if ((tmp3 < "1") || (tmp3 > "4")) {
        return false;
    }

    t1  = ls_ResidentNo1.substr(0, 1);
    t2  = ls_ResidentNo1.substr(1, 1);
    t3  = ls_ResidentNo1.substr(2, 1);
    t4  = ls_ResidentNo1.substr(3, 1);
    t5  = ls_ResidentNo1.substr(4, 1);
    t6  = ls_ResidentNo1.substr(5, 1);
    t11 = ls_ResidentNo2.substr(0, 1);
    t12 = ls_ResidentNo2.substr(1, 1);
    t13 = ls_ResidentNo2.substr(2, 1);
    t14 = ls_ResidentNo2.substr(3, 1);
    t15 = ls_ResidentNo2.substr(4, 1);
    t16 = ls_ResidentNo2.substr(5, 1);
    t17 = ls_ResidentNo2.substr(6, 1);

    var tot = tointeger(t1)  * 2 + tointeger(t2)  * 3 + tointeger(t3)  * 4 + tointeger(t4)  * 5 + tointeger(t5)  * 6 + tointeger(t6)  * 7;
    tot += tointeger(t11) * 8 + tointeger(t12) * 9 + tointeger(t13) * 2 + tointeger(t14) * 3 + tointeger(t15) * 4 + tointeger(t16) * 5 ;

    var result = tointeger(tot) % 11;
    result = (11 - tointeger(result)) % 10;

    if (result == t17) {
        return true;
    } else {
        return false;
    }
}

/*
 * 기능 : 실명인증 팝업을 호출한다.
 * parameter : sFileName - 파일명
 * return value : 확장자명
 */
function gfn_GetFileExtensionName(sFileName) {
    var idx = 0;
    while (IndexOf(sFileName, ".", idx + 1) > 0) {
        idx = IndexOf(sFileName, ".", idx + 1);
    }

    if (idx > 0) {
        return (substr(sFileName, idx, length(sFileName)));
    } else {
        return "";
    }
}

/*
 * 기능 : 조회, 출력 시 모니터링용 이력을 저장한다.
 * parameter : sGubun - 조회/출력 구분 : "S" 조회, "P" 출력(인쇄)
 *             sFormId - Form Id
 *             sFormIdNm - Form Id 제목
 *             sParameter - 조회(출력)조건(예1:"성명=홍길동,주민번호=1234567890123", 예2:"회차관리번호=1234,접수번호=000001")
 * return : 없음
 */
function gfn_InsertSearchPrintHistory(sGubun, sFormId, sFormIdNm, sParameter, sDATAXML) {
    tit_clearActionInfo();
    tit_addSingleActionInfo("com:insertSearchHistory", "", 0, "");
    // 서버 호출 
    tit_callService(
        ""
        ,""
        ,""	// inDs
        ,""	// outDs
        ,"SHGUBUN=" + quote(sGubun)
            + " SHWORKGUBUN=" + quote(sFormId)
            + " SHWORKGUBUNNM=" + quote(sFormIdNm)
            + " SHWHERE=" + quote(sParameter)
            + " SHDATA=" + quote(sDATAXML)// args
        ,""
        ,false
    );
}


/*
 * 기능 : 조회, 출력 시 모니터링용 이력을 저장한다.(청기준)
 * parameter : sGubun - 조회/출력 구분 : "S" 조회, "P" 출력(인쇄)
 *             sFormId - Form Id
 *             sFormIdNm - Form Id 제목
 *	   		   sFormAction - 기능구분
 *             sParameter - 조회(출력)조건(예1:"성명=홍길동,주민번호=1234567890123", 예2:"회차관리번호=1234,접수번호=000001")
 * return : 없음
 */
function gfn_InsertFPISSearchPrintHistory(sGubun, sFormId, sFormIdNm, sFormAction, sParameter) {
    tit_clearActionInfo();
    tit_addSingleActionInfo("com:insertFPISSearchHistory", "", 0, "");
    // 서버 호출 
    tit_callService(
        ""
        ,""
        ,""	// inDs
        ,""	// outDs
        ,"FSHGUBUN=" + quote(sGubun)
            + " FSHWORKGUBUN=" + quote(sFormId)
            + " FSHWORKGUBUNNM=" + quote(sFormIdNm)
            + " FSHPROCACTION=" + quote(sFormAction)
            + " FSHWHERE=" + quote(sParameter) // args
        ,""
        ,false
    );
}

/*

 * 기능 : 소방방재청 상세조회시 

 * parameter : sGubun - 대상 구분 (0:방화관리자 , 1:위험물안전관리자, 2:위험물운송자,3:소방기술자)

 *             sFormId - Form Id

 *             sSearchNm - 조회대상물

 *             sMFPIS1 - 메인 PK

 *             sMFPIS2 - 운송자

 *             sMFPIS3 - 소방기술자

 *             sMFPIS4 - 소방기술자

 *             sMFPIS5 - 소방기술자

 *             sMFPIS6 - 소방기술자

 * return : 없음

 */

function gfn_InsertFPISDetailSearchPrintHistory(sGubun, sMenuId, sSearchNm, sMFPIS1, sMFPIS2, sMFPIS3, sMFPIS4, sMFPIS5, sMFPIS6) {

    tit_clearActionInfo();

    tit_addSingleActionInfo("com:insertFPISDetailSearchHistory", "", 0, "");

    // 서버 호출 

    tit_callService(

        ""

        ,""

        ,""	// inDs

        ,""	// outDs

        ,"GUBUN=" + quote(sGubun)

            + " MENUID=" + quote(sMenuId)

            + " SEARCHNM=" + quote(sSearchNm)

            + " MFPIS1=" + quote(sMFPIS1)

            + " MFPIS2=" + quote(sMFPIS2) 

            + " MFPIS3=" + quote(sMFPIS3) 

            + " MFPIS4=" + quote(sMFPIS4) 

            + " MFPIS5=" + quote(sMFPIS5) 

            + " MFPIS6=" + quote(sMFPIS6) 

        ,""

        ,false

    );

}


/*
 * 기능 : 업무 변경이력을 저장한다.
 * parameter : 없음
 * return : 없음
 */
function gfn_InsertModifyHistory() {
    tit_clearActionInfo();
    tit_addSaveActionInfo(
        "com:insertModifyHistory"	// insert
        , ""	// update
        , ""	// delete
        , ""	// flag column 명
        , ""	// key sql id
        , 0	// key 증가 값
        , "" 
        , 0 
        , "N"	// 실행타입
    );
    // 서버 호출 
    tit_callService(
        ""
        ,""
        ,"ds_iModifyHistory=gds_iModifyHistory:U" // inDs
        ,""	// outDs
        ,""	// args 
        ,"gfn_AfterSaveModifyHistory"
        ,false
    );
}

/*
 * 기능 : Transaction 서비스 호출 후 처리해야 할 내용
 * parameter : strSvcID - 서비스ID
 *             nErrorCode - 에러코드
 *             strErrorMsg - 에러메시지
 * Return : 없음
 */
function gfn_AfterSaveModifyHistory(nErrorCode, strErrorMsg) {
    gds_iModifyHistory.ClearData(); // 데이타셋 초기화

    if (nErrorCode != 0) { // 트랜잭션 에러를 처리한다.
        gfn_ErrorMsg(nErrorCode, strErrorMsg);
        return;
    }
}

/*
 * 기능 : 변경이력 팝업을 호출한다.
 * parameter : sWorkGubun - 업무구분 (예:"수첩", "강습접수", "시험접수" 등)
 *             sKey - KEY값 (예:강습접수관리번호, 시험접수관리번호, 수첩번호 등)
 * return value : 없음
 */
function gfn_ModifyHistoryListPopup(sWorkGubun, sKey) {
    var sArg = "sWorkGubun=" + quote(sWorkGubun);
    sArg += " sKey=" + quote(sKey);
    return Dialog("COM::frmCOM7000PModifyHistoryList.xml", sArg, 800, 400, "", -1, -1);
}

/*
 * 기능 : 강습수수료 정보를 조회한다.
 * parameter : sCourse - 직능코드
 *             sMunjeGubun - 면제구분
 *             sFeeGubun - 수수료구분
 * return : 강습수수료
 */
function gfn_SearchTrainingFee(sCourse, sMunjeGubun, sFeeGubun) {
    gds_oTrainingFee.ClearData();

    tit_clearActionInfo();
	tit_addSearchActionInfo("com:searchTrainingFee", false);
	// 서버 호출 
	tit_callService(
		""
		,""
		,""	// inDs
		,"gds_oTrainingFee=ds_oTrainingFee"	// outDs
		,"COURSE=" + quote(sCourse)
            + " MUNJEGUBUN=" + quote(sMunjeGubun)
            + " FEEGUBUN=" + quote(sFeeGubun)
        ,""
		,true
		,true
		,true
	);

    if (gds_oTrainingFee.GetCount() > 0) {
        return gds_oTrainingFee.GetColumn(0, "FEE");
    } else {
        return "";
    }
}

/*
 * 기능 : 강습환불수수료 정보를 조회한다.
 * parameter : sTomgno - 회차관리번호
 *             sAbsentDay - 결강일차
 * return : 강습환불수수료
 */
function gfn_SearchTrainingRepayFee(sTomgno, sAbsentDay) {
    gds_oTrainingRepayFee.ClearData();

    tit_clearActionInfo();
	tit_addSearchActionInfo("com:searchTrainingRepayFee", false);
	// 서버 호출 
	tit_callService(
		""
		,""
		,""	// inDs
		,"gds_oTrainingRepayFee=ds_oTrainingRepayFee"	// outDs
		,"TOMGNO=" + quote(sTomgno)
            + " FEECD=" + quote(sAbsentDay)
        ,""
		,true
		,true
		,true
	);

    if (gds_oTrainingRepayFee.GetCount() > 0) {
        return gds_oTrainingRepayFee.GetColumn(0, "FEE");
    } else {
        return "";
    }
}

/*
 * 기능 : 다음 영업일시를 조회한다.
 * parameter : sInDate - 입력날짜문자열(YYYYMMDD)
 *           : sWorkGubun - 업무구분 강습/시험/수첩
 *           : sKey - 접수번호
 * return : 입력날짜 다음 영업일시 문자열(YYYYMMDDhhmmss)
 */
function gfn_SearchNextBusinessDateTime(sInDate, sWorkGubun, sKey) {
    gds_oBusinessDay.ClearData();

    var ls_Service = "";
    if (sWorkGubun == "T") { // 강습
        ls_Service = "com:searchTrainingNextBusinessDateTime";
    }
    
    if(sWorkGubun == "E") { // 시험
//		ls_Service = "com:searchExamNextBusinessDateTime";	
		ls_Service = "com:searchExamNextBusinessDateTime_New";		
    }
    
    if(sWorkGubun == "B") { // 실무
		ls_Service = "com:searchEduNextBusinessDateTime";		   
    }

    tit_clearActionInfo();
	tit_addSearchActionInfo(ls_Service, false);
	// 서버 호출 
	tit_callService(
		""
		,""
		,""	// inDs
		,"gds_oBusinessDay=ds_oBusinessDay"	// outDs
		,"INDATE=" + quote(sInDate)
            + " KEY=" + quote(sKey) // 접수번호
        ,""
		,true
		,true
		,true
	);

    if (gds_oBusinessDay.GetCount() > 0) {
        return gds_oBusinessDay.GetColumn(0, "BIZDATE");
    } else {
        return "";
    }
}

/*
 * 기능 : 암호화 공통 모듈
 * parameter : command - 처리구분
 *           : cType - 암호화 모듈
 *           : pText - 평문
 *           : cCollbackFunc - 콜백함수
 * return    : cRtnVal - 암호문
 */
var cRtnVal;

function gfn_Cryptograph(command, cType, pText, cCollbackFunc) {
	if( length(command) == 0 || length(cType) == 0 || length(pText) == 0 || length(cCollbackFunc) == 0 ) {
		gfn_Alert("암호화 모듈을 실행할 수 없습니다.");
		return;
	}
	// Local인 경우 Local service 타도록
	var ls_CrypToService = "DEV_CRYPTO";
    if (gs_IsLocal != "Y") {
        ls_CrypToService = "CRYPTO";
    }
    
	var params = "COMMAND="+quote(command);
		params += " TYPE="+quote(cType);
		params += " PTEXT="+quote(pText);
	
	Http.Sync = true;
	Transaction("Cryptograph", ls_CrypToService + "::Platform.jsp", "", "", params, cCollbackFunc);
	Http.Sync = false;
}

/*
 * 기능 : 강습자 정보 변경 팝업을 호출한다.
 * parameter : sTpMgno - 기존 강습자 관리번호
 * parameter : sJubsuCount - 기존 강습, 시험, 수첩 접수 건수
 * parameter : sJopGubun - 강습, 시험, 수첩 업무구분
 * parameter : sMgno - TJMGNO, EJMGNO, LLCSNO
 * return value : [0]강습자 성명, [1]강습자 주민번호, [2] 강습자 관리 번호
 */
function gfn_TrainingPersonModifyPopup(sTpMgno, sJubsuCount, sJopGubun, sMgno, sCoursecd) {
    var sArg  = "sTpMgno=" + quote(sTpMgno);
        sArg += " sJubsuCount=" + quote(sJubsuCount);
        sArg += " sJopGubun=" + quote(sJopGubun);
        sArg += " sMgno=" + quote(sMgno);
        sArg += " sCoursecd=" + quote(sCoursecd);
    return Dialog("COM::frmCOM1010PTrainingPersonModify.xml", sArg, 460, 262, "", -1, -1);
}

/*
 * 기능 : 계산서 화면 팝업을 호출한다. 
 * parameter :   sVyear // 년도
 * parameter :   sVjibu // 지부
 * parameter :   sVbilltype // 계산서 구분 
 * parameter :   sVvatno // 부가세관리번호 
 */
function gfn_EstimatePopup(sVyear, sVjibu, sVbilltype, sVvatno) {
    var sArg  = " sVyear=" + quote(sVyear);
        sArg += " sVjibu=" + quote(sVjibu);
        sArg += " sVbilltype=" + quote(sVbilltype);
        sArg += " sVvatno=" + quote(sVvatno);
    return Dialog("COM::frmCOM1011PEstimate.xml", sArg, 400, 216, "", 1, 1);
}

/*
 * 기능 : 기준일자별 계산서 발행 팝업을 호출한다. 
 * parameter :   sVyear // 년도
 * parameter :   sVjibu // 지부
 * parameter :   sVbilltype // 계산서 구분 
 * parameter :   sVvatno // 부가세관리번호 
 */
function gfn_EstimatePublicationPopup(sVGubun, sVamt, sVpvmgno) {
    var sArg  = " sVGubun=" + quote(sVGubun);
        sArg  = " sVamt=" + quote(sVamt);
        sArg += " sVpvmgno=" + quote(sVpvmgno);
    return Dialog("COM::frmCOM1012PEstimatePublication.xml", sArg, 260, 54, "", -1, -1);
}

/*
 * 기능 : 기준일자별 계산서 발행 리스트 팝업을 호출한다. 
 * parameter :   sVyear // 년도
 * parameter :   sVjibu // 지부
 * parameter :   sVbilltype // 계산서 구분 
 * parameter :   sVvatno // 부가세관리번호 
 */
function gfn_EstimateListPopup(sVpvmgno) {
    var sArg  = " sVpvmgno=" + quote(sVpvmgno);
    return Dialog("COM::frmCOM1013PEstimateList.xml", sArg, 600, 230, "", -1, -1);
}


/*
 * 기능 : 숫자만 있는 날짜를 날짜형식으로 변경
 * parameter :   sDate // 년월일, 년월일시분초
 *               sMark // 년월일 마크
 */
function gfn_ToDate(sDate, sMark) {

    var rDate;

    if (length(sDate) == 8) {
        rDate = left(sDate, 4) + sMark + substr(sDate, 4, 2) + sMark + right(sDate, 2);
    } else if (length(sDate) == 14) {
        rDate = left(sDate, 4) + sMark + substr(sDate, 4, 2) + sMark + substr(sDate, 6,2)
            + " " + substr(sDate, 8,2) + ":" + substr(sDate, 10,2) + ":" + right(sDate, 2);
    } else {
        rDate = "";
    }
    
    return rDate;
}

/*
 * 기능 : 메뉴 정보를 조회한다.
 * parameter : sSysgubun - 시스템구분 (예:cust)
 *             sMurl - 메뉴URL (예:cust::frmcust2010MCustomerFeeManagement.xml)
 * return : arrMenuInfo[0] = 메뉴ID
			arrMenuInfo[1] = 메뉴명
			arrMenuInfo[2] = URL
			arrMenuInfo[3] = URL타입
			arrMenuInfo[4] = 상위메뉴ID
			arrMenuInfo[5] = 시스템메뉴ID
			arrMenuInfo[6] = 시스템메뉴명
			arrMenuInfo[7] = 시스템구분
			arrMenuInfo[8] = 정렬순서
			arrMenuInfo[9] = 비고
			arrMenuInfo[10] = 사용여부
			arrMenuInfo[11] = 로컬메뉴구분[L:로컬]
 */
function gfn_SearchMenuInfo(sSysgubun, sMurl) {
    gds_oMenuInfo.ClearData();

    tit_clearActionInfo();
	tit_addSearchActionInfo("com:searchMenuInfo", false);
	// 서버 호출 
	tit_callService(
		""
		,""
		,""	// inDs
		,"gds_oMenuInfo=ds_oMenuInfo"	// outDs
		,"MSYSGUBUN=" + quote(sSysgubun)
        + " MURL=" + quote(sMurl)
        ,""
		,true
		,true
		,true
	);

    if (gds_oMenuInfo.GetCount() > 0) {
		var arrMenuInfo = Array(12);
			arrMenuInfo[0] = gds_oMenuInfo.GetColumn(0, "MMENUID");
			arrMenuInfo[1] = gds_oMenuInfo.GetColumn(0, "MMENUNM");
			arrMenuInfo[2] = gds_oMenuInfo.GetColumn(0, "MURL");
			arrMenuInfo[3] = gds_oMenuInfo.GetColumn(0, "MURLTYPE");
			arrMenuInfo[4] = gds_oMenuInfo.GetColumn(0, "MPARENTMENUID");
			arrMenuInfo[5] = gds_oMenuInfo.GetColumn(0, "SYSTEMMENUID");
			arrMenuInfo[6] = gds_oMenuInfo.GetColumn(0, "SYSTEMMENUNM");
			arrMenuInfo[7] = gds_oMenuInfo.GetColumn(0, "MSYSGUBUN");
			arrMenuInfo[8] = gds_oMenuInfo.GetColumn(0, "MORDERSEQ");
			arrMenuInfo[9] = gds_oMenuInfo.GetColumn(0, "MREMARK");
			arrMenuInfo[10] = gds_oMenuInfo.GetColumn(0, "MUSEYN");
			arrMenuInfo[11] = gds_oMenuInfo.GetColumn(0, "MLOCALGUBUN");
			
        return arrMenuInfo;
    } else {
        return "";
    }
}



     
 /*
 * 기능 : 초빙강사 직업 정보를 조회한다.
 * parameter : sSearchGubun - SPEAKERCD
 *	   		   objDataset - 리턴받을 콤보 데이타셋              
 *             sUseYn - 사용유무 : null 전체, Y 사용가만, N 사용불가만
 *             sOpt - "전체" 또는 "선택" 또는 " " 포함여부
 * return : 없음
 */
function gfn_SearchCodeSJob(sSearchGubun, objDataset, sUseYn, sOpt) {
	objDataset.ClearData();

    var nRow = -1;
    var ls_FilterExpr = "";
    if (!gfn_IsNull(sSearchGubun)) {
        ls_FilterExpr += "CCGROUPCD=='" + trim(sSearchGubun) + "'";
    }
    if (!gfn_IsNull(sUseYn)) {
        ls_FilterExpr += "&&USE_YN=='" + trim(sUseYn) + "'";
    }

	gds_oCommonCode.Filter(ls_FilterExpr);
	
    for (var i = 0; i < gds_oCommonCode.GetCount(); i++) {
        nRow = objDataset.AddRow();
        objDataset.SetColumn(nRow, "CD", gds_oCommonCode.GetColumn(i, "CCCD"));
		objDataset.SetColumn(nRow, "DATA", gds_oCommonCode.GetColumn(i, "CCCDNM"));
    }

    if (length(sOpt) > 0) {
        objDataset.InsertRow(0);
        objDataset.SetColumn(0, "CD", "");
        objDataset.SetColumn(0, "DATA", sOpt);
    }
    objDataset.row = 0;

    gds_oCommonCode.UnFilter();
}


/*
 * 기능 : PRIVACY 단위업무코드 정보를 조회한다.
 * parameter : sSearchGubun - 조회구분
 *             sGubun - 단위업무그룹코드
 * return : 없음
 */
function gfn_SearchPrivacyWork(objDataset, sGubun) {
    objDataset.ClearData();

    var nRow = -1;
    var ls_FilterExpr = "";
    if (!gfn_IsNull(sGubun)) {
        ls_FilterExpr += "PCMAINCD=='" + trim(sGubun) + "'";
        gds_oPrivacyCourse.Filter(ls_FilterExpr);
    }

    for (var i = 0; i < gds_oPrivacyCourse.GetCount(); i++) {
        nRow = objDataset.AddRow();
        objDataset.SetColumn(nRow, "CD", gds_oPrivacyCourse.GetColumn(i, "PCMGNO"));
        objDataset.SetColumn(nRow, "DATA", gds_oPrivacyCourse.GetColumn(i, "PCTXT"));
        objDataset.SetColumn(nRow, "GROUPCD", substr(gds_oPrivacyCourse.GetColumn(i, "PCMGNO"),1,2));
    }

    objDataset.row = 0;

    gds_oPrivacyCourse.UnFilter();
}

/*
 * 기능 : PRIVACY 직능코드 정보를 조회한다.
 * parameter : objDataset - 리턴받을 데이타셋
 *             sGubun - 직능그룹코드
  * return : 없음
 */
function gfn_SearchPrivacyCourse(objDataset, sGubun) {
    objDataset.ClearData();

    var nRow = -1;
    var ls_FilterExpr = "";
    if (!gfn_IsNull(sGubun)) {
        ls_FilterExpr += "PCMAINCD=='" + trim(sGubun) + "'";
        gds_oPrivacyCourse.Filter(ls_FilterExpr);
    }

    for (var i = 0; i < gds_oPrivacyCourse.GetCount(); i++) {
        nRow = objDataset.AddRow();
        objDataset.SetColumn(nRow, "CD", gds_oPrivacyCourse.GetColumn(i, "PCMGNO"));
        objDataset.SetColumn(nRow, "DATA", gds_oPrivacyCourse.GetColumn(i, "PCTXT"));
        objDataset.SetColumn(nRow, "COURSECD", gds_oPrivacyCourse.GetColumn(i, "PCCOURSECD"));
    }

    objDataset.row = 0;

    gds_oPrivacyCourse.UnFilter();
}


/*
 * 기능 : SMS 발송
 * parameter : sHPTEL - 휴대폰번호
 *             sRECVTEL - 회신전화번호
			   sSMMSG - 전문
			   sETC1 - 지부코드
			   sETC2 - 업무구분코드(강습:21, 시험:22) 고객관리 교육통지이력:25  교육통지대상자:23 인터넷실무교육접수자:24, 가상계좌발송:26
			   sETC3 - 연계테이블PK 강습:회차관리번호, 접수관리번호, 접수번호, 고객관리바코드
			   sETC4 - 교육통지이력 시퀀스(고객관리만 사용)
			   sETC5 - 수신자명
			   sKIND - -- 교육(1-접수,2-변경,3-환불), 고객(1)
  * return : 없음
 */
function gfn_InsertLGSMSSend(sHPTEL, sRECVTEL, sSMMSG, sETC1, sETC2, sETC3, sETC4, sETC5, sKIND) { 
    tit_clearActionInfo();
    tit_addSingleActionInfo("com:insertLGSmsSend", "", 0, "");
    // 서버 호출 
    tit_callService(
        ""
        ,""
        ,""	// inDs
        ,""	// outDs
        ,"HPTEL=" + quote(sHPTEL)
            + " RECVTEL=" + quote(sRECVTEL)
            + " SMMSG=" + quote(sSMMSG)
            + " ETC1=" + quote(sETC1)
            + " ETC2=" + quote(sETC2)
            + " ETC3=" + quote(sETC3)
            + " ETC4=" + quote(sETC4)
            + " ETC5=" + quote(sETC5)
            + " KIND=" + quote(sKIND) // args
        ,""
        ,false
    );
}

/*
 * 기능 : 은행가상계좌 은행코드 정보를 조회한다.
 * parameter : objDataset - 리턴받을 데이타셋
 *             sYn - 가상계좌 발급은행 여부 : null 전체은행, Y 발급은행, N 불가 은행
 *             sOpt - "전체" 또는 "선택" 또는 " " 포함여부
  * return : 없음
 */
function gfn_SearchVirtualAccountBankCode(objDataset, sYn, sOpt) {
    objDataset.ClearData();

    var nRow = -1;
    gds_oBankCode.Filter("BANK_AV_YN=='" + trim(sYn) + "'");
    //gds_oBankCode.Sort("BANK_CD");    
    
    for (var i = 0; i < gds_oBankCode.GetCount(); i++) {
        nRow = objDataset.AddRow();
        objDataset.SetColumn(nRow, "CD", gds_oBankCode.GetColumn(i, "BANK_CD"));
        objDataset.SetColumn(nRow, "DATA", gds_oBankCode.GetColumn(i, "BANK_NM"));
    }   

    if (length(sOpt) > 0) {
        objDataset.InsertRow(0);
        objDataset.SetColumn(0, "CD", "");
        objDataset.SetColumn(0, "DATA", sOpt);
    }
    objDataset.row = 0;

    gds_oBankCode.UnFilter();


}


/*
 * 기능 : 교육 접수 최대인원수를 조회한다.
 * parameter : sJibu - 지부코드
 *             sWorkGubun - 업무구분(0:강습,1:실무)
 *             sCourse - 직능코드
 * return : 접수 최대인원수
 */
function gfn_SearchEduJubsuMaxCnt(sJibu, sWorkGubun, sCourse) {
    gds_oEduJubsuMaxCnt.ClearData();

    tit_clearActionInfo();
	tit_addSearchActionInfo("com:searchEduJubsuMaxCnt", false);
	// 서버 호출 
	tit_callService(
		""
		,""
		,""	// inDs
		,"gds_oEduJubsuMaxCnt=gds_oEduJubsuMaxCnt"	// outDs
		,"JIBU=" + quote(sJibu)
            + " WORKGUBUN=" + quote(sWorkGubun)
            + " COURSE=" + quote(sCourse)
        ,""
		,true
		,true
		,true
	);

    if (gds_oEduJubsuMaxCnt.GetCount() > 0) {
        return gds_oEduJubsuMaxCnt.GetColumn(0, "MAXCNT");
    } else {
        return "";
    }
}


/*
 * 기능 : 실무교육 접수대상 조회 팝업을 호출한다.
 * parameter : sGubun - 조회구분
 *             sValue1 - 조회변수1
 *             sValue2 - 조회변수2
 * return value : 고객 정보를 가진 배열 오브젝트
 */
function gfn_CustomerListPopup(sGubun, sCourse, sValue1, sValue2) {
    var sArg = "sGubun=" + quote(sGubun);
    sArg += " sCourse=" + quote(sCourse);
    sArg += " sValue1=" + quote(sValue1);
    sArg += " sValue2=" + quote(sValue2);
    return Dialog("COM::frmCOM1050PCustomerList.xml", sArg, 700, 336, "", -1, -1);
}


/*
 * 기능 : 콜센터 직원용 조회, 출력 시 모니터링용 이력을 저장한다.
 * parameter : sGubun - 조회/출력 구분 : "S" 조회, "P" 출력(인쇄)
 *             sFormId - Form Id
 *             sFormIdNm - Form Id 제목
 *             sParameter - 조회(출력)조건(예1:"성명=홍길동,주민번호=1234567890123", 예2:"회차관리번호=1234,접수번호=000001")
 * return : 없음
 */
function gfn_InsertCallCenterSearchPrintHistory(sGubun, sUId, sMenuId, sFormId, sFormIdNm, sParameter) {
    tit_clearActionInfo();
    tit_addSingleActionInfo("com:insertCRSSearchHistory", "", 0, "");
    // 서버 호출 
    tit_callService(
        ""
        ,""
        ,""	// inDs
        ,""	// outDs
        ,"CSHGUBUN=" + quote(sGubun)
            + " CSHUID=" + quote(sUId)
            + " CSHMENUID=" + quote(sMenuId)
            + " CSHWORKGUBUN=" + quote(sFormId)
            + " CSHWORKGUBUNNM=" + quote(sFormIdNm)
            + " CSHCONDITION=" + quote(sParameter)// args
        ,""
        ,false
    );
}


/*
 * 기능 : 숫자만 가져오는 함수.
 * parameter : sStr : 입력값
  * return : oNumber
 */
function gfn_GetNumber(sStr) {
var oNumber = "";
	for (var i = 0; i < length(sStr); i++) {
        if (substr(sStr, i, 1) >= chr(48) && substr(sStr, i, 1) <= chr(57)) {
        oNumber += substr(sStr, i, 1);
        }
    }
    return oNumber;
}

/*
 * 기능 : KT SMS 발송
 * parameter : sMBCCD - 업무구분코드 bizcode  NN
 *             sMPK1 - 업무PK1 [없는경우''] 
			   sMPK2 - 업무PK2 [없는경우''] 
			   sMPK3 - 업무PK3 [없는경우''] 
			   sMBSMGNO - 일괄발송관리번호 [없는경우'']
			   sMSENDTYPE - 발송구분 0:즉시, 1:예약 NN
			   sMSENDDATE - 예약발송 14자리(즉시발송은 '')
			   sMCALLBACK - 송신자전화번호 NN (‘- , ’제외) 
			   sMRECVNM - 수신자명       NN
			   sMRECVTEL - 수신자전화번호 NN (‘- , ’제외)
			   sMTITLE - 문자제목
			   sMMSG - 문자메시지    NN
			   sMREGSABUN - 등록자사번  사번‘INTERNET’
  * return : 없음
 */
function gfn_InsertKTSMSSend(sMBCCD, sMPK1, sMPK2, sMPK3, sMBSMGNO, sMSENDTYPE, sMSENDDATE, 
                             sMCALLBACK, sMRECVNM, sMRECVTEL, sMTITLE, sMMSG, sMREGSABUN) { 
    tit_clearActionInfo();
    tit_addSingleActionInfo("com:insertKTSMSSend", "", 0, "");
    // 서버 호출 
    tit_callService(
        ""
        ,""
        ,""	// inDs
        ,"gds_oStatus=ds_oSMSStatus"	// outDs
        ,"MBCCD=" + quote(sMBCCD)
            + " MPK1=" + quote(sMPK1)	
            + " MPK2=" + quote(sMPK2)
            + " MPK3=" + quote(sMPK3)
            + " MBSMGNO=" + quote(sMBSMGNO)
            + " MSENDTYPE=" + quote(sMSENDTYPE)
            + " MSENDDATE=" + quote(sMSENDDATE)
            + " MCALLBACK=" + quote(sMCALLBACK)
            + " MRECVNM=" + quote(sMRECVNM)
            + " MRECVTEL=" + quote(sMRECVTEL)
            + " MTITLE=" + quote(sMTITLE)
            + " MMSG=" + quote(sMMSG)
            + " MREGSABUN=" + quote(sMREGSABUN) // args
        ,""
        ,false
    );
}


// 이미 실행된 프로그램을 다시 실행할 경우 호출
function gfn_OnDetectLaunchingBrowser() {


	// 강습접수관리 바로 열기
	if (GetReg("GlobalVal") == "TRAININGJUBSU") {
/*
		// 코드 로딩을 위한 delay용
		for (var i = 0; i < 5000000; i++) {
			idle();

		}
*/
//		var ArrMenuInfo = gfn_SearchMenuInfo("training", "training::frmtraining0020MTrainingJubsuManagement.xml");	//메뉴정보조회

//		if(length(ArrMenuInfo) > 0 ) {

			gs_SystemGubun = "training";						//"training";

			gs_SystemMenuId = "0000000003";						//"메뉴아이디

			global.mnuLeft.tabMenu.tabpgMenu.Text = "강습관리";	//"강습관리";

			var ls_MenuId = "0000000107";							//"0000000107";

			var ls_MenuTitle = "강습접수관리";						//"강습접수관리";

			var ls_MenuUrl = "training::frmtraining0020MTrainingJubsuManagement.xml";						//"training::frmtraining0020MTrainingJubsuManagement.xml";

			global.mnuTop.tabTopMenu.TabIndex = gds_oTopMenu.FindRow("MSYSGUBUN", gs_SystemGubun);

			gfn_OpenChildWindow(ls_MenuUrl, ls_MenuTitle, ls_MenuId, ""); 

//		}

	} else if (GetReg("GlobalVal") == "EXAMJUBSU") {	// 시험접수관리 바로 열기
/*
		// 코드 로딩을 위한 delay용
		for (var i = 0; i < 5000000; i++) {
			idle();
		}
*/
//		var ArrMenuInfo = gfn_SearchMenuInfo("training", "training::frmtraining0400MExamJubsuManagement.xml");	//메뉴정보조회

//		if(length(ArrMenuInfo) > 0 ) {

			gs_SystemGubun = "training";						//"training";

			gs_SystemMenuId = "0000000003";						//"메뉴아이디

			global.mnuLeft.tabMenu.tabpgMenu.Text = "강습관리";	//"강습관리";

			var ls_MenuId = "0000000073";							//"0000000073";

			var ls_MenuTitle = "시험접수관리";						//"시험접수관리";

			var ls_MenuUrl = "training::frmtraining0400MExamJubsuManagement.xml";						//"training::frmtraining0400MExamJubsuManagement.xml";

			global.mnuTop.tabTopMenu.TabIndex = gds_oTopMenu.FindRow("MSYSGUBUN", gs_SystemGubun);

			gfn_OpenChildWindow(ls_MenuUrl, ls_MenuTitle, ls_MenuId, ""); 

//		}

	} else if (GetReg("GlobalVal") == "LICENSE") {	// 수첩발급정보관리 바로 열기
/*
		// 코드 로딩을 위한 delay용
		for (var i = 0; i < 5000000; i++) {
			idle();
		}
*/
//		var ArrMenuInfo = gfn_SearchMenuInfo("training", "training::frmtraining0250MLicenseIssueManagement.xml");	//메뉴정보조회

//		if(length(ArrMenuInfo) > 0 ) {

			gs_SystemGubun = "training";						//"training";

			gs_SystemMenuId = "0000000003";						//"메뉴아이디

			global.mnuLeft.tabMenu.tabpgMenu.Text = "강습관리";	//"강습관리";

			var ls_MenuId = "0000000063";							//"0000000063";

			var ls_MenuTitle = "수첩발급정보관리";						//"수첩발급정보관리";

			var ls_MenuUrl = "training::frmtraining0250MLicenseIssueManagement.xml";						//"training::frmtraining0250MLicenseIssueManagement.xml";

			global.mnuTop.tabTopMenu.TabIndex = gds_oTopMenu.FindRow("MSYSGUBUN", gs_SystemGubun);

			gfn_OpenChildWindow(ls_MenuUrl, ls_MenuTitle, ls_MenuId, ""); 

//		}
		
	} else if (GetReg("GlobalVal") == "EDUJUBSU") {	// 실무교육접수관리 바로 열기
/*
		// 코드 로딩을 위한 delay용
		for (var i = 0; i < 5000000; i++) {
			idle();
		}
*/	
//		var ArrMenuInfo = gfn_SearchMenuInfo("cust", "cust::frmcust1025MEduJubsuManagement.xml");	//메뉴정보조회

//		if(length(ArrMenuInfo) > 0 ) {

			gs_SystemGubun = "cust";						//"cust";

			gs_SystemMenuId = "0000000003";						//"메뉴아이디

			global.mnuLeft.tabMenu.tabpgMenu.Text = "고객관리";	//"고객관리";

			var ls_MenuId = "0000000436";							//"0000000436";

			var ls_MenuTitle = "실무교육접수관리";						//"실무교육접수관리";

			var ls_MenuUrl = "cust::frmcust1025MEduJubsuManagement.xml";						//"cust::frmcust1025MEduJubsuManagement.xml";

			global.mnuTop.tabTopMenu.TabIndex = gds_oTopMenu.FindRow("MSYSGUBUN", gs_SystemGubun);

			gfn_OpenChildWindow(ls_MenuUrl, ls_MenuTitle, ls_MenuId, ""); 

//		}

	}

}

// PERSONKEY 생성
function gfn_InsertPersonKey(sNM,
							sDI,
							sCI,
							sCIVER,
							sHP,
							sBIRTHDAY,
							sAUTHYN) {
							
	tit_clearActionInfo();
	tit_addSingleActionInfo("com:insertPersonkey", "", 0, "");

	// 서버 호출 
	tit_callService(
		""
		,""
		,""	// inDs
		,"gds_oPersonKey=gds_oPersonKey"	// outDs
		,"NM=" + quote(sNM)
		 + " DI=" + quote(sDI)
		 + " CI=" + quote(sCI)
		 + " CIVER=" + quote(sCIVER)
		 + " HP=" + quote(sHP)
		 + " BIRTHDAY=" + quote(sBIRTHDAY)
		 + " AUTHYN=" + quote(sAUTHYN)
		,""
		,false
		,false
		,true
	);
	trace("personkey="+gds_oPersonKey.GetColumn(0, "PERSONKEY"));
	return gds_oPersonKey.GetColumn(0, "PERSONKEY");
							
}


// PERSONKEY 생성
function gfn_InsertPersonKey2(sNM,
                            sRNO,
							sDI,
							sCI,
							sCIVER,
							sHP,
							sBIRTHDAY,
							sAUTHYN) {
							
	tit_clearActionInfo();
	tit_addSingleActionInfo("com:insertPersonkey2", "", 0, "");

	// 서버 호출 
	tit_callService(
		""
		,""
		,""	// inDs
		,"gds_oPersonKey=gds_oPersonKey"	// outDs
		,"NM=" + quote(sNM)
		 + " RNO=" + quote(sRNO)
		 + " DI=" + quote(sDI)
		 + " CI=" + quote(sCI)
		 + " CIVER=" + quote(sCIVER)
		 + " HP=" + quote(sHP)
		 + " BIRTHDAY=" + quote(sBIRTHDAY)
		 + " AUTHYN=" + quote(sAUTHYN)
		,""
		,false
		,false
		,true
	);
	trace("personkey="+gds_oPersonKey.GetColumn(0, "PERSONKEY"));
	return gds_oPersonKey.GetColumn(0, "PERSONKEY");
							
}


function gfn_AfterInsertPersonKey(nErrorCode, strErrorMsg) {
    gds_iModifyHistory.ClearData(); // 데이타셋 초기화

    if (nErrorCode != 0) { // 트랜잭션 에러를 처리한다.
        gfn_ErrorMsg(nErrorCode, strErrorMsg);
        return;
    }
    
    if (gds_oPersonKey.GetColumn(0, "O_STATUS") <> "SUCCESS") {
		gfn_Alert("개인식별번호 생성에 실패했습니다.");
		return;
    }
}




var unreserved = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_.~";
var reserved = "!*'();:@&=+$,/?%#[]";
var allowed = unreserved + reserved;
var hexchars = "0123456789ABCDEFabcdef";
var decchars = "ABCDEF";

function convert16To10(str)
{
	var sum=0;
	
	str = toUpper(str);
	
	var s = midb(str,0,1);
	if ( s >= "A" && s <= "F" )
	{
		sum += (10+pos(decchars,s))*16;
	} else if ( s >= "0" && s <= "9" ){
		sum += (toNumber(s)*16);
	}

	s = midb(str,1,1);
	if ( s >= "A" && s <= "F" )
	{
		sum += (10+pos(decchars,s));
	} else if ( s >= "0" && s <= "9" ){
		sum += toNumber(s);
	}

//	trace("convert : " + sum);
	return sum;
}

function gethex(decimal) 
{
  return "%" + charAt(hexchars,ext_getBitCalc(">>",decimal,4)) + 
               charAt(hexchars,ext_getBitCalc("&",decimal,15));
}

function getdec(hexencoded) 
{ 
   if (length(hexencoded) == 3) 
   { 
     if (charAt(hexencoded,0) == "%") { 
       if (indexOf(hexchars,charAt(hexencoded,1)) != -1 && indexOf(hexchars,charAt(hexencoded,2)) != -1) { 
         return convert16To10(midb(hexencoded,1,2)); 
       } 
     } 
   } 
   return 256; 
}


function urlEncodeUtf8(decoded) 
{
  // Some variables:
	var encoded = "";
	
	// ---------------- If UTF-8 character encoding was chosen: ----------------
	
	for (var i = 0; i < length(decoded); i++ ) 
	{
		var ch = charAt(decoded,i);
		// Check if character is an unreserved character:
		if (indexOf(unreserved,ch) == -1) {
			encoded = encoded + ch;
		} else {

			// The position in the Unicode table tells us how many bytes are needed.
			// Note that if we talk about first, second, etc. in the following, we are
			// counting from left to right:
			//
			//   Position in   |  Bytes needed   | Binary representation
			//  Unicode table  |   for UTF-8     |       of UTF-8
			// ----------------------------------------------------------
			//     0 -     127 |    1 byte       | 0XXX.XXXX
			//   128 -    2047 |    2 bytes      | 110X.XXXX 10XX.XXXX
			//  2048 -   65535 |    3 bytes      | 1110.XXXX 10XX.XXXX 10XX.XXXX
			// 65536 - 2097151 |    4 bytes      | 1111.0XXX 10XX.XXXX 10XX.XXXX 10XX.XXXX
	
			var charcode = Asc(charAt(decoded,i));
	
			// Position 0 - 127 is equal to percent-encoding with an ASCII character encoding:
			if (charcode < 128) {
			  encoded = encoded + gethex(charcode);
			}
	
			// Position 128 - 2047: two bytes for UTF-8 character encoding.
			if (charcode > 127 && charcode < 2048) {
			  // First UTF byte: Mask the first five bits of charcode with binary 110X.XXXX:
			  encoded = encoded + gethex(ext_getBitCalc("|",ext_getBitCalc(">>",charcode,6),12));
			  // Second UTF byte: Get last six bits of charcode and mask them with binary 10XX.XXXX:
			  encoded = encoded + gethex(ext_getBitCalc("|",ext_getBitCalc("&",charcode,63),128));
			}
	
			// Position 2048 - 65535: three bytes for UTF-8 character encoding.
			if (charcode > 2047 && charcode < 65536) {
			  // First UTF byte: Mask the first four bits of charcode with binary 1110.XXXX:
			  encoded = encoded + gethex(ext_getBitCalc("|",ext_getBitCalc(">>",charcode,12),224));
			  // Second UTF byte: Get the next six bits of charcode and mask them binary 10XX.XXXX:
			  encoded = encoded + gethex(ext_getBitCalc("|",ext_getBitCalc("&",ext_getBitCalc(">>",charcode,6),63),128));
			  // Third UTF byte: Get the last six bits of charcode and mask them binary 10XX.XXXX:
			  encoded = encoded + gethex(ext_getBitCalc("|",ext_getBitCalc("&",charcode,63),128));
			}
	
			// Position 65536 - : four bytes for UTF-8 character encoding.
			if (charcode > 65535) {
			  // First UTF byte: Mask the first three bits of charcode with binary 1111.0XXX:
			  encoded = encoded + gethex(ext_getBitCalc("|",ext_getBitCalc(">>",charcode,18),240));
			  // Second UTF byte: Get the next six bits of charcode and mask them binary 10XX.XXXX:
			  encoded = encoded + gethex(ext_getBitCalc("|",ext_getBitCalc("&",ext_getBitCalc(">>",charcode,12),63),128));
			  // Third UTF byte: Get the last six bits of charcode and mask them binary 10XX.XXXX:
			  encoded = encoded + gethex(ext_getBitCalc("|",ext_getBitCalc("&",ext_getBitCalc(">>",charcode,6),63),128));
			  // Fourth UTF byte: Get the last six bits of charcode and mask them binary 10XX.XXXX:
			  encoded = encoded + gethex(ext_getBitCalc("|",ext_getBitCalc("&",charcode,63),128));
			}
		}

	}  // end of for ...
	return encoded;
}



function urlDecodeUtf8(encoded)
{
	var notallowed = ""; 
	var illegalencoding = ""; 
    var decoded,allowed;
    
    var byte1, byte2, byte3, byte4; 
 
    var i = 0; 
    while (i < length(encoded)) { 
      var ch = charAt(encoded,i); 
      // Check for percent-encoded string: 
      if (ch == "%") { 
 
        // Check for legal percent-encoding of first byte: 
        if (getdec(mid(encoded,i,3)) < 255) { 
 
          // Get the decimal values of all (potential) UTF-bytes: 
          byte1 = getdec(mid(encoded,i,3)); 
          byte2 = getdec(mid(encoded,i+3,3)); 
          byte3 = getdec(mid(encoded,i+6,3)); 
          byte4 = getdec(mid(encoded,i+9,3)); 
 
          // Check for one byte UTF-8 character encoding: 
          if (byte1 < 128) { 
            decoded = decoded + chr(byte1);//String.fromCharCode(byte1); 
            i = i + 3; 
          } 
 
          // Check for illegal one byte UTF-8 character encoding: 
          if (byte1 > 127 && byte1 < 192) { 
            decoded = decoded + mid(encoded,i,3); 
            illegalencoding = illegalencoding + mid(encoded,i,3) + " "; 
            i = i + 3; 
          } 
 
          // Check for two byte UTF-8 character encoding: 
          if (byte1 > 191 && byte1 < 224) { 
            if (byte2 > 127 && byte2 < 192) { 
              //decoded = decoded + String.fromCharCode(((byte1 & 0x1F) << 6) | (byte2 & 0x3F));               
              decoded = decoded + chr(ext_getBitCalc("|",ext_getBitCalc("<<",ext_getBitCalc("&",byte1,31),6),ext_getBitCalc("&",byte2,63))); 
            } else { 
              decoded = decoded + mid(encoded,i,6); 
              illegalencoding = illegalencoding + mid(encoded,i,6) + " "; 
            } 
            i = i + 6; 
          } 
 
          // Check for three byte UTF-8 character encoding: 
          if (byte1 > 223 && byte1 < 240) { 
            if (byte2 > 127 && byte2 < 192) { 
              if (byte3 > 127 && byte3 < 192) { 
                decoded = decoded + chr(ext_getBitCalc("|",ext_getBitCalc("|",ext_getBitCalc("<<",ext_getBitCalc("&",byte1,15),12),ext_getBitCalc("<<",ext_getBitCalc("&",byte2,63),6)),ext_getBitCalc("&",byte3,63))); 
               // decoded = decoded + String.fromCharCode(((byte1 & 0xF) << 12) | ((byte2 & 0x3F) << 6) | (byte3 & 0x3F)); 
              } else { 
                decoded = decoded + mid(encoded,i,9); 
                illegalencoding = illegalencoding + mid(encoded,i,9) + " "; 
              } 
            } else { 
              decoded = decoded + mid(encoded,i,9); 
              illegalencoding = illegalencoding + mid(encoded,i,9) + " "; 
            } 
            i = i + 9; 
          } 
 
          // Check for four byte UTF-8 character encoding: 
          if (byte1 > 239) { 
            if (byte2 > 127 && byte2 < 192) { 
              if (byte3 > 127 && byte3 < 192) { 
                if (byte4 > 127 && byte4 < 192) { 
                  //decoded = decoded + String.fromCharCode(((byte1 & 0x7) << 18) | ((byte2 & 0x3F) << 12) | ((byte3 & 0x3F) << 6) | (byte4 & 0x3F)); 
				  decoded = decoded + chr(ext_getBitCalc("|",ext_getBitCalc("|",ext_getBitCalc("|",ext_getBitCalc("<<",ext_getBitCalc("&",byte1,7),18),ext_getBitCalc("<<",ext_getBitCalc("&",byte2,63),12)),ext_getBitCalc("<<",ext_getBitCalc("&",byte3,63),6)),ext_getBitCalc("&",byte4,63))); 
                } else { 
                  decoded = decoded + mid(encoded,i,12); 
                  illegalencoding = illegalencoding + mid(encoded,i,12) + " "; 
                } 
              } else { 
                decoded = decoded + mid(encoded,i,12); 
                illegalencoding = illegalencoding + mid(encoded,i,12) + " "; 
              } 
            } else { 
              decoded = decoded + mid(encoded,i,12); 
              illegalencoding = illegalencoding + mid(encoded,i,12) + " "; 
            } 
            i = i + 12; 
          } 
 
        } else {  // the first byte is not legally percent-encoded 
          decoded = decoded + mid(encoded,i,3); 
          illegalencoding = illegalencoding + mid(encoded,i,3) + " "; 
          i = i + 3; 
        } 
 
      } else {  // the string is not percent encoded 
        // Check if character is an allowed character: 
        if (indexOf(allowed,ch) == -1) notallowed = notallowed + ch + " "; 
        decoded = decoded + ch; 
        i++; 
      } 
    }  // end of while ..
    return decoded;
}