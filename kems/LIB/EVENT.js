﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿/*
 * 프로그램명 : EVENT.js
 * 설명 : Form Event 관련
 * 작성일 : 2009.06.23
 * 작성자 : 장성호
 */

function gfn_Form_OnActivate(obj) {
    // to do
}

function gfn_Form_OnDeactivate(obj) {

}

function gfn_Form_OnLoadCompleted(obj) {
    if (length(obj.OnUnloadCompleted) < 1) {
        obj.OnUnloadCompleted = "gfn_Form_OnUnloadCompleted";
    }

    tit_createActionInfo(); // X-Framework용

    if (Find("divWorkFormTitle") <> null) {
        if (IsValidObject(obj.divWorkFormTitle)) {
            obj.divWorkFormTitle.lbWorkFormTitle.Value = sFormTitle; // 새창의 타이틀 설정
        }
    }

    // to do
}

function gfn_Form_OnLoadCompletedCheck(obj) {
	if(gds_oCommonCode.rowcount == 0) {
		gfn_Alert("코드를 로딩 중입니다. 잠시후에 다시 시도해주세요.");
		Close(this);
    }
}

function gfn_Form_OnUnloadCompleted(obj) {
    // to do
    SetReg("GlobalVal", "");
}

function gfn_Form_OnFocus(obj) {

}

function gfn_Form_OnKillFocus(obj) {

}

var ms_BarHotKeyCount = 0;
function gfn_Form_OnKeyDown(obj,objSenderObj,nChar,bShift,bControl,bAlt,nLLParam,nHLParam) {
	
	if (bControl) { // '~' Key

//    if (nChar == 192) { // '~' Key
//    if (bAlt) {
        ms_BarHotKeyCount++;
        if (ms_BarHotKeyCount == 3) {
            ms_BarHotKeyCount = 0;
//            medBarCode.SetFocus();	//2018.09.17 control 3번 누를시 바코드 이동 폐지
        }
    } else {
        ms_BarHotKeyCount = 0;

        switch (nChar) {
            case 119 : // 바코드(F8)
                medBarCode.SetFocus();
                break;
            case 112 : // 조회(F1)
                //if (obj.btnSearch.Enable) {
                    gfn_HelpMenuId(obj);
                //}
                break;
            case 113 : // 조회(F2)
                if (obj.btnSearch.Enable) {
                    obj.lfn_Search();
                }
                break;
            case 114 : // 추가(F3)
                if (obj.btnInput.Enable) {
                    obj.lfn_Input();
                }
                break;
            case 115 : // 수정/저장(F4)
                if (obj.btnSave.Enable) {
                    obj.lfn_Save();
                }
                break;
            case 116 : // 삭제(F5)
                if (obj.btnDelete.Enable) {
                    obj.lfn_Delete();
                }
                break;
            case 120 : // 출력(F9)
                if (obj.btnPrint.Enable) {
                    obj.lfn_Print();
                }
                break;
            case 121 : // 초기화(F10)
                if (obj.btnCancel.Enable) {
                    obj.lfn_Cancel();
                }
                break;
            case 122 : // 엑셀(F11)
                if (obj.btnToExcel.Enable) {
                    obj.lfn_excel();
                }
                break;
            case 123 : // 화면출력(F12)
                if (obj.btnPrintScreen.Enable) {
                    obj.lfn_PrintScreen();
                }
                break;
            case 27 : // 종료(Esc)
                if (obj.btnEnd.Enable) {
                    Close();
                }
                break;
        }
    }
}

var ms_FocusComponentBKColor = ""; // 기존 배경색 저장용
function gfn_ComponentOnFocus(objFocusComponent) {
    ms_FocusComponentBKColor = objFocusComponent.BKColor; // 기존 배경색 저장

    if (objFocusComponent.GetType() <> "Combo" 
            && objFocusComponent.GetType() <> "Calendar"
            && objFocusComponent.GetType() <> "List"
            && objFocusComponent.Readonly == true) {
        objFocusComponent.BKColor = "user4"; // Focus BkColor 읽기용 지정
    } else {
        objFocusComponent.BKColor = "user5"; // Focus BkColor 지정
    }
}

function gfn_ComponentOnKillFocus(objFocusComponent) {
    objFocusComponent.BKColor = ms_FocusComponentBKColor; // 기존 배경색으로 복귀
}

function gfn_ComponentOnKeyDown(obj,nChar,bShift,bCtrl, bAlt,LLParam,HLParam) {
	gfn_EnterNextFocus(obj,nChar); // 엔터키 입력시 포커스를 다음으로 이동한다.
}

function gfn_Grid_OnHeadClick(obj,nCell,nX,nY,nPivotIndex) {
    var mobj_Dataset = object(obj.BindDataset);
    // 데이터가 있는 경우 해당 컬럼을 기준으로 정렬한다.
    if (mobj_Dataset.GetRowCount() > 1) {
        if (nCell == 0) { // 첫번째 셀인 경우 멀티 정렬
           gfn_GridMultiSort(obj); // 멀티 정렬을 호출한다.
        } else {
            gfn_GridCellSort(obj, nCell); // 해당 셀정렬을 호출한다.
        }
    }
}
