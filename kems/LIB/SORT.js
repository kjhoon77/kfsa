﻿﻿﻿﻿﻿﻿/*
 * 프로그램명 : SORT.js
 * 설명 : 정렬 관련
 * 작성일 : 2009.06.23
 * 작성자 : 장성호
 */

﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿var ASC_MARK  = "▲";   // Ascending  Sort Mark
var DESC_MARK = "▼";   // Descending Sort MarkFxcl

/*
 * 기능 : 그리드 헤드 클릭시 해당 셀로 정렬한다(ASC,DESC 토글).
 * Parameter : obj - Grid Object
 *             nCell - 해당셀번호 (HeadClick 이벤트에서 받은 nCell을 그대로 지정)
 * Return : 없음
 */
function gfn_GridCellSort(obj, nCell){
    SetWaitCursor(true);

    var ms_SortType = obj.GetCellProp("head", nCell, "text");
    var mobj_Dataset = object(obj.BindDataset);
    mobj_Dataset.row = -1;

    // Soft 구분자 분리
    ms_SortType = right(ms_SortType, 1);

    var mn_Cnt = obj.GetCellCount("head");
    for (var i=0; i < mn_Cnt; i++) {
        // Head Sort 마크 제거
        obj.SetCellProp("head", i, "text", replace(replace(obj.GetCellProp("head", i, "text"), ASC_MARK), DESC_MARK));
    }

    if (ms_SortType == ASC_MARK) {
        obj.SetCellProp("head", nCell, "text", obj.GetCellProp("head", nCell, "text") + DESC_MARK);
        mobj_Dataset.Sort(obj.GetCellProp("body", nCell, "colid") + ":D");
    } else {
        obj.SetCellProp("head", nCell, "text", obj.GetCellProp("head", nCell, "text") + ASC_MARK);
        mobj_Dataset.Sort(obj.GetCellProp("body", nCell, "colid") + ":A");
    }

    SetWaitCursor(false);
}

/*
 * 기능 : 멀티 정렬 팝업을 호출하여 멀티 정렬한다.
 * Parameter : obj - Grid Object
 *             nStartCell - 정렬 시작 셀 번호, 없으면 1번째 셀부터
 * Return : 없음
 */
function gfn_GridMultiSort(obj, nStartCell) {
    if (nStartCell == null || nStartCell == "") {
        nStartCell = 1;
    }
    
	var ms_Arg = "sGrid=" + quote(obj.ID) + " sDivFlag=false" + " nStartCell=" + quote(nStartCell);
	var ms_Result = Dialog("COM::frmCOM0040PMulitSort.xml", ms_Arg, 350, 225, "titlebar=True", -1, -1);

    if (length(ms_Result) > 0) {
        SetWaitCursor(true);
        var mobj_Dataset = object(obj.BindDataset);
        mobj_Dataset.row = -1;
        mobj_Dataset.Sort(ms_Result);
        SetWaitCursor(false);
    }
}

/*
 * 기능 : Head Sort 마크 제거한다.
 * Parameter : obj - Grid Object
 * Return : 없음
 */
function gfn_GridSortMarkClear(obj) {
    obj.redraw = false;

    var mn_Cnt = obj.GetCellCount("head");
    for (var i = 0; i < mn_Cnt; i++) {
        obj.SetCellProp("head", i, "text", replace(replace(obj.GetCellProp("head", i, "text"), ASC_MARK), DESC_MARK));
    }

    obj.redraw = true;
}
