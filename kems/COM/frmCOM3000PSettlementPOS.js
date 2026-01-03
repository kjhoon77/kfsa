var ls_PosJibu = ""; // POS 지부
var lb_ShowProgressBar = false; // POS 진행상태
var lb_IsRetrans = false; // 재전송여부
var ln_PartRepayCnt = 0; // 부분환불여부용 0:전액환불, 1:부분환불 수납, 2:부분환불 환불

/* 공통 필수 시작 */
function Form_OnLoadCompleted(obj) {
    gfn_Form_OnLoadCompleted(obj); // 공통 폼 로딩 이벤트 처리

    /*
        sProgramId - POS단위업무프로그램
        sSunapGubun - 수납환불구분
        sProcAmount - 수납환불처리금액
        sPosYear - 환불용 POS년도
        sPosMgno - 환불용 POS관리번호
        sKey1 - KEY값1
        sKey2 - KEY값2
        sHpTel- 휴대폰번호
        sRepayPayment - 환불용 수납 결제방법
        sRepayAmount - 환불금액
        sRepayAbsenGubun - // 환불결강일차
    */

    gfn_SearchPosJibu(ds_oPosJibu, "1"); // POS 지부 조회
    ls_PosJibu = substr(gds_oUserInfo.GetColumn(0, "PDEPTCD"), 1, 2); // POS 지부 코드
    cbxProgramIdStart.Value = sProgramId; // 단위업무프로그램
    edBizGubunNm.Text = gds_oPosProgramId.GetColumn(cbxProgramIdStart.Index, "PGMGUBUNNM"); // 사업구분
    edJibuMgId.Text = ds_oPosJibu.GetColumn(ds_oPosJibu.FindRow("PICHPT", ls_PosJibu), "PIID"); // 지부관리ID
    calSunapDate.Value = GetDAte();

    switch (sSunapGubun) { // 수납환불구분
        case "0" : // 수납
            lbTotalSunapFee.Text = "수납할 금액";
            lbRepayAmount.Text = "수납금액";
            divSunap.radSunapGubun.InnerDataset = "ds_oSunapGubun";

            // 폼 사이즈 조절
            var ln_TitleSize = window.Height - this.Height;
            window.Height = this.Height + ln_TitleSize - (divSunap.Top - divRepay.Top);
            btnSetlmt.Top = btnSetlmt.Top - (divSunap.Top - divRepay.Top);
            divSunap.Top = divRepay.Top;

            // 결제구분 설정
            switch (sProgramId) { // 단위업무프로그램
                case "21" : // 강습
                    divProcGubun.Url = "COM::frmCOM3031SSettlementGubunTrainingSunap.xml";
                    divRepay.Visible = false; // 환불DIV
                    medSunapAmount.Visible = true;
                    medSunapAmount.Enable = true;
                    medSunapAmount.Left = "112";
                    medSunapAmount.Top = "124";
                    cbxRepayFee.Visible = false;
                    break;
                case "22" : // 시험
                    divProcGubun.Url = "COM::frmCOM3032SSettlementGubunExamSunap.xml";
                    divRepay.Visible = false; // 환불DIV
                    medSunapAmount.Visible = true;
                    medSunapAmount.Enable = true;
                    medSunapAmount.Left = "112";
                    medSunapAmount.Top = "124";
                    cbxRepayFee.Visible = false;
                    break;
                case "23" : // 수첩
                    divProcGubun.Url = "COM::frmCOM3033SSettlementGubunLcsSunap.xml";
                    divRepay.Visible = false; // 환불DIV
                    medSunapAmount.Visible = true;
                    medSunapAmount.Enable = false;
                    medSunapAmount.Left = "112";
                    medSunapAmount.Top = "124";
                    cbxRepayFee.Visible = false;
                    divSunap.radSunapGubun.InnerDataset = "ds_oRepaySunapGubun";
                    break;
            }
            break;
            divSunap.lbSunapAmount.Visible = false;

        case "1" : // 환불
            lbTotalSunapFee.Text = "현재수납금액";
            lbRepayAmount.Text = "환불금액";
            divSunap.radSunapGubun.InnerDataset = "ds_oRepaySunapGubun";

            // 결제구분 설정
            switch (sProgramId) { // 단위업무프로그램
                case "21" : // 강습
                    gfn_SearchCommonCode(ds_oTrainingAbsentDay, "REPAYFEECODE", "Y"); // 결강일차 조회
                    lfn_SearchTrainingRepayFee(); // 강습환불수수료 조회
                    divProcGubun.Url = "COM::frmCOM3041SSettlementGubunTrainingRepay.xml";
                    divRepay.lfn_SearchPosPrintm(); // 결제(환불)정보를 조회한다.
                    cbxRepayFee.Visible = true;
                    lbAbsentDay.Visible = true;
                    cbxAbsentDay.Visible = true;
                    cbxAbsentDay.Value = sRepayAbsenGubun;
                    break;
                case "22" : // 시험

                    //김경철 - 부분환불 없음
                    divProcGubun.Url = "COM::frmCOM3042SSettlementGubunExamRepay.xml";
                    divRepay.lfn_SearchPosPrintm(); // 결제(환불)정보를 조회한다.

                    medSunapAmount.Visible = true;
                    medSunapAmount.Enable = true;
                    medSunapAmount.Left = "112";
                    medSunapAmount.Top = "124";
                    cbxRepayFee.Visible = false;

                    break;
                case "23" : // 수첩
                    divProcGubun.Url = "COM::frmCOM3033SSettlementGubunLcsSunap.xml";
                    divRepay.lfn_SearchPosPrintm(); // 결제(환불)정보를 조회한다.
                    medSunapAmount.Visible = false;
                    divSunap.Visible = false;
                    cbxAbsentDay.Value = sRepayAbsenGubun;
                    break;
            }
            break;
            divSunap.lbSunapAmount.Visible = true;
    }
}

function Form_OnUnloadCompleted(obj) {
    Close("END");
}

function Form_OnKeyDown(obj,objSenderObj,nChar,bShift,bControl,bAlt,nLLParam,nHLParam) {
    switch (nChar) {
        case 27 : // 종료(Esc)
            lfn_End();
            break;
        case 123 : // 화면출력(F12)
            lfn_PrintScreen();
            break;
    }
}

/*
 * 기능 : 종료
 */
function lfn_End(obj) {
    Close("END");
}
/* 공통 필수 종료 */

/* 사용자 함수 */
/*
 * 기능 : 결제 및 POS 결제 정보를 저장한다.
 * parameter : 없음
 * return value : 없음
 */
function lfn_InsertSettlementAndPos(obj) {
    var sArg = "";

    tit_clearActionInfo();
    tit_addSingleActionInfo("com:insertSettlementAndPos", "", 0, "");
    // 서버 호출
    tit_callService(
        ""
        ,""
        ,"ds_iSettlementPos=ds_iSettlementPos"    // inDs
        ,"ds_oSettlementPos=ds_oSettlementPos"    // outDs
        ,sArg    // args
        ,"lfn_AfterInsertSettlementAndPos"
        ,false
        ,false
        ,true
    );
}

/*
 * 기능 : 결제 및 POS 결제 정보 저장 후 처리해야 할 내용
 * parameter : nErrorCode - 에러코드
 *             strErrorMsg - 에러메시지
 * Return : 없음
 */
function lfn_AfterInsertSettlementAndPos(nErrorCode, strErrorMsg) {
    if (nErrorCode != 0) { // 트랜잭션 에러를 처리한다.
        gfn_ErrorMsg(nErrorCode, strErrorMsg);
        return;
    }

    if (ds_oSettlementPos.GetColumn(0, "RESULTCODE") <> "OK") {
        gfn_ErrorMsg(ds_oChangeDate.GetColumn(0, "RESULTCODE"), ds_oChangeDate.GetColumn(0, "RESULTMSG"));
        return;
    }

    // POS DIV 호출용 데이타셋을 저장한다.
    divPos.ds_ioPosInput.ClearData();
    divPos.ds_ioPosInput.InsertRow(0);
    divPos.ds_ioPosInput.SetColumn(0, "PMYEAR", ds_oSettlementPos.GetColumn(0, "RESULTPMYEAR")); // 영수증 관리년도
    divPos.ds_ioPosInput.SetColumn(0, "PMMGNO", ds_oSettlementPos.GetColumn(0, "RESULTPMMGNO")); // 영수증 관리번호
    divPos.ds_ioPosInput.SetColumn(0, "PRMGUBUN", sProgramId); // POS단위업무프로그램 (강습21,시험22,수첩23)
    divPos.ds_ioPosInput.SetColumn(0, "PAYMENTFLAG", divSunap.radSunapGubun.Value); // 납부방법 현금0, 신용카드1, 현금영수증2, 가상계좌3
    divPos.ds_ioPosInput.SetColumn(0, "LGD_METHOD", sSunapGubun); // 수납환불구분(수납0,환불1)
    divPos.ds_ioPosInput.SetColumn(0, "STATUS", "4"); // 초기저장시 4

    if (divSunap.radSunapGubun.Value == "1") { // 카드
        divPos.ds_ioPosInput.SetColumn(0, "LGD_PAN", ds_iSettlementPos.GetColumn(0, "CARDNO")); // 카드 전체 번호
    }

    var ls_RecieptYn = "N"; // 현금영수증여부
    if (divSunap.radSunapGubun.Value == "3"
            && divSunap.divSunabDtl.radRecieptYn.Value == "Y") { // 납부방법 가상계좌에 현금영수증이면
        ls_RecieptYn = "Y";
    }
    divPos.ds_ioPosInput.SetColumn(0, "LGD_CASHRECEIPTYN", ls_RecieptYn); // 가상계좌 현금영수증여부

    ls_ResultPrintReTransYn = "N"; // 재전송버튼여부

    if (ds_iSettlementPos.GetColumn(0, "PAYMENTGUBUN") == "0") { // 현금
        lfn_UpdateSettlementAfterPosOk(); // POS 정상처리 후 처리

        ls_ResultPrintPosMsg = "결제성공"; // 안전원결과메세지
        var ls_RetResultPopup = lfn_PopupResultPos(); // 결과출력팝업을 호출한다.

        if (radRecieptYn.Value == "Y") { // 영수증 출력
            gfn_PrintReceipt(ds_oSettlementPos.GetColumn(0, "RESULTPMYEAR")
                , ds_oSettlementPos.GetColumn(0, "RESULTPMMGNO")); // 영수증을 출력한다.
        }

        if (ds_oSettlementPos.GetColumn(0, "RESULTORDERCHANGEYN") == "Y") { // 회계수납회차변경실행여부

			// 김경철
			switch (sProgramId) { // 단위업무프로그램
				case "21" : // 강습
					lfn_ExecuteTrainingOrderChange(); // 회계수납회차변경실행
					break;
				case "22" : // 시험
					lfn_ExecuteExamOrderChange();
					break;
				case "23" : // 수첩
					break;
			}
        }

        if (ls_RetResultPopup == "OK") {
            if (ln_PartRepayCnt == 1) { // 부분환불 수납 실행 중이면
                lfn_ExecuteRepaySunap(); // 부분환불 수납 후 환불 실행
                return;
            } else {
                Close("OK");
            }
        }
        if (ln_PartRepayCnt == 2) { // 부분환불 환불 실행 중이면
            gfn_Alert("수납은 성공했으나, 환불은 실패했습니다.\n정보지원과로 문의하시기 바랍니다.");
            Close("FAIL");
        } else {
            Close("FAIL");
        }
    }

    // 현금이 아닌 경우 POS호출
    lfn_PosProc(); // POS처리
}

/*
 * 기능 : POS처리한다.
 * parameter : 없음
 * return value : 없음
 */
function lfn_PosProc() {
    lb_IsRetrans = false;

    var sArg = "";
    var ls_PosResultCode = ""; // POS 결과코드
    var ls_RetPos = Dialog("COM::frmCOM3001PPOSProgressBar.xml", sArg, 300, 123, "TitleBar=false", -1, -1);

    if (ls_RetPos == "OK") {
        /* POS 결과 코드 */
        /*
        MI_RSCODE - ○:성공, Ⅹ:실패
        LGD   DB   코드
        ○    ○    0
        ○    Ⅹ    1
        Ⅹ    ○    2
        Ⅹ    Ⅹ    3
        無    無    4    초기입력
        ?     ?     5    알수없음
        */
        ls_ResultPrintPosMsg = divPos.ds_ioPosOutput.GetColumn(0, "MI_RSMSG"); // 결과메세지
        ls_PosResultCode = divPos.ds_ioPosOutput.GetColumn(0, "MI_RSCODE"); // 결과코드
    } else if (ls_RetPos == "FAIL"){ // 실패
        ls_ResultPrintPosMsg = divPos.ds_ioPosOutput.GetColumn(0, "MI_RSMSG"); // 결과메세지
        if ("OK" == divPos.lfn_POSSearch()) { // 실시간 POS 결과를 조회한다.
            ls_PosResultCode = divPos.ds_ioPosOutput.GetColumn(0, "MI_RSCODE"); // 결과코드
        } else {
            ls_PosResultCode = "5"; // 결과코드
        }
    } else { // 10초 이후(실패)
        ls_ResultPrintPosMsg = "10초 - 시간 초과입니다.";
        if ("OK" == divPos.lfn_POSSearch()) { // 실시간 POS 결과를 조회한다.
            ls_PosResultCode = divPos.ds_ioPosOutput.GetColumn(0, "MI_RSCODE"); // 결과코드
        } else {
            ls_PosResultCode = "5"; // 결과코드
        }
    }

    switch (ls_PosResultCode) { // POS 결과
        case "0" : // 데이콤 성공, 안전원 성공
            ls_ResultPrintLgdMsg = "결제성공"; // LG데이콤결과메세지
            ls_ResultPrintKemsMsg = "결제성공"; // 안전원결과메세지
            break;
        case "1" : // 데이콤 성공, 안전원 실패
            // 안전원 성공으로 수정
            divPos.ds_ioPosInput.SetColumn(0, "STATUS", "1"); // 초기저장시 4
            var ls_RetRetry = "";
            var ln_Cnt = 0; // 시도회수
            while (true) {
                ls_RetRetry = divPos.lfn_POS(); // POS 호출
                if (ls_RetRetry == "0") { // 성공
                    break;
                }
                if (ln_Cnt == 10) { // 안전원 성공으로 수정하기 실패
                    if (ln_PartRepayCnt == 2) { // 부분환불 환불 실행 중이면
                        gfn_Alert("수납은 성공했으나, 환불에서 데이콤 결제는 성공했으나, 안전원 결제 저장은 실패했습니다.\n정보지원과로 문의하시기 바랍니다.");
                        Close("KFSA-FAIL");
                    } else {
                        gfn_Alert("데이콤 결제는 성공했으나, 안전원 결제 저장은 실패했습니다.\n정보지원과로 문의하시기 바랍니다.");
                        Close("KFSA-FAIL");
                    }
                }
                ln_Cnt++;
            }

            ls_ResultPrintKemsMsg = "결제성공"; // 안전원결과메세지
            ls_ResultPrintLgdMsg = "결제성공"; // LG데이콤결과메세지
            break;
        case "3" : // 데이콤 실패, 안전원 실패
            ls_ResultPrintKemsMsg = "결제실패"; // 안전원결과메세지
            ls_ResultPrintLgdMsg = "결제실패"; // LG데이콤결과메세지

            ls_ResultPrintReTransYn = "Y"; // 재전송버튼여부
            break;
        case "4" : // 초기 신청 상태
            ls_ResultPrintKemsMsg = "결제실패"; // 안전원결과메세지
            ls_ResultPrintLgdMsg = "결제실패"; // LG데이콤결과메세지

            ls_ResultPrintReTransYn = "Y"; // 재전송버튼여부
            break;
        default : // 결과를 알 수 없는 상태
           if (ln_PartRepayCnt == 2) { // 부분환불 환불 실행 중이면
                gfn_Alert("수납은 성공했으나, 환불에서 결제 결과를 알 수가 없습니다.\n정보지원과로 문의하시기 바랍니다.");
                Close("UNKNOWN-FAIL");
            } else {
                gfn_Alert("결제 결과를 알 수가 없습니다.\n정보지원과로 문의하시기 바랍니다.");
                Close("UNKNOWN-FAIL");
            }
            break;
    }

    var ls_RetResultPopup = lfn_PopupResultPos(); // 결과출력팝업을 호출한다.
    if (ls_RetResultPopup == "OK") {
        if (radRecieptYn.Value == "Y") { // 영수증 출력
            gfn_PrintReceipt(ds_oSettlementPos.GetColumn(0, "RESULTPMYEAR")
                , ds_oSettlementPos.GetColumn(0, "RESULTPMMGNO")); // 영수증을 출력한다.
        }

        switch (sSunapGubun) { // 수납환불구분
            case "0" : // 수납
                lfn_UpdateSettlementAfterPosOk(); // POS 정상처리 후 처리

                if (ln_PartRepayCnt == 1) { // 부분환불 수납 실행 중이면
                    lfn_ExecuteRepaySunap(); // 부분환불 수납 후 환불 실행
                    return;
                } else {
                    Close("OK");
                }
                break;
            case "1" : // 환불
                lfn_UpdateSettlementAfterPosOk(); // POS 정상처리 후 처리

                if (ln_PartRepayCnt == 1) { // 부분환불 수납 실행 중이면
                    lfn_ExecuteRepaySunap(); // 부분환불 수납 후 환불 실행
                } else {
                    Close("OK");
                }
                break;
        }

        if (ds_oSettlementPos.GetColumn(0, "RESULTORDERCHANGEYN") == "Y") { // 회계수납회차변경실행여부
            lfn_ExecuteTrainingOrderChange(); // 회계수납회차변경실행
        }
    } else if (ls_RetResultPopup == "FAIL") { // 실패
        switch (sSunapGubun) { // 수납환불구분
            case "0" : // 수납
                lfn_DeleteSettlementAndPos(); // 결제 전 처리 정보삭제
                break;
            case "1" : // 환불
                lfn_DeleteSettlementAndPos(); // 결제 전 처리 정보삭제
                break;
        }
    } else if (ls_RetResultPopup == "RETRANS") {
        lb_IsRetrans = true;
        lfn_PosProc(); // POS처리
    }
}

/*
 * 기능 : 강습접수의 회계수납용 회차변경을 실행한다.
 * parameter : 없음
 * return value : 없음
 */
function lfn_ExecuteTrainingOrderChange() {
    var sArg = "TJMGNO=" + quote(sKey1); // 강습접수관리번호
    sArg += " TSSEQ=" + quote(ds_oSettlementPos.GetColumn(0, "RESULTSTLNSEQ")); // 결제순차번호
    sArg += " AFTERGTMGNO=" + quote(sSunapGubun); // 회차변경 후 지부
    sArg += " PROCDATE=" + quote(ds_iSettlementPos.GetColumn(0, "PROCDATE")); // 처리일자

    tit_clearActionInfo();
    tit_addSingleActionInfo("com:executeTrainingOrderChange", "", 0, "");
    // 서버 호출
    tit_callService(
        ""
        ,""
        ,""    // inDs
        ,"ds_oTrainingOrderChange=ds_oTrainingOrderChange"    // outDs
        ,sArg    // args
        ,"lfn_AfterExecuteTrainingOrderChange"
        ,false
        ,false
        ,true
    );
}

/*
 * 기능 : 강습접수 회계수납용 회차변경 실행 후 처리해야 할 내용
 * parameter : nErrorCode - 에러코드
 *             strErrorMsg - 에러메시지
 * Return : 없음
 */
function lfn_AfterExecuteTrainingOrderChange(nErrorCode, strErrorMsg) {
    if (nErrorCode != 0) { // 트랜잭션 에러를 처리한다.
        gfn_ErrorMsg(nErrorCode, strErrorMsg);
        return;
    }

    if (length(ds_oTrainingOrderChange.GetColumn(0, "RESULTCODE")) > 0) {
        gfn_ErrorMsg(ds_oChangeDate.GetColumn(0, "RESULTCODE"), ds_oChangeDate.GetColumn(0, "RESULTMSG"));
        return;
    }
}

/*
 * 기능 : 결제 전 처리 정보(결제정보 및 POS 테이블)를 삭제한다.
 * parameter : 없음
 * return value : 없음
 */

function lfn_DeleteSettlementAndPos() {
    var sArg = "PROGRAMID=" + quote(sProgramId); // POS단위업무프로그램 (강습21,시험22,수첩23)
    sArg += " SUNAPGUBUN=" + quote(sSunapGubun); // 수납환불구분(수납0,환불1)
    sArg += " POSYEAR=" + quote(ds_oSettlementPos.GetColumn(0, "RESULTPMYEAR")); // 영수증 관리년도
    sArg += " POSMGNO=" + quote(ds_oSettlementPos.GetColumn(0, "RESULTPMMGNO")); // 영수증 관리번호
    sArg += " JUMUNNO=" + quote(ds_oSettlementPos.GetColumn(0, "RESULTJUMUNNO")); // 주문번호
    sArg += " KEY1=" + quote(sKey1); // KEY값1-관리번호
    sArg += " KEY2=" + quote(sKey2); // KEY값2-SEQ
    sArg += " SSEQ=" + quote(ds_oSettlementPos.GetColumn(0, "RESULTSTLNSEQ")); // 결제순차번호
    sArg += " PAYMENTGUBUN=" + quote(ds_iSettlementPos.GetColumn(0, "PAYMENTGUBUN")); // 납부방법
    sArg += " VIRTCASHRECEIPTYN=" + quote(ds_iSettlementPos.GetColumn(0, "VIRTCASHRECEIPTYN")); // 현금영수증사용엽

    tit_clearActionInfo();
    tit_addSingleActionInfo("com:deleteSettlementAndPos", "", 0, "");
    // 서버 호출
    tit_callService(
        ""
        ,""
        ,"" // inDs
        ,"ds_oDeleteSanap=ds_oDeleteSanap" // outDs
        ,sArg // args
        ,"lfn_AfterDeleteSettlementAndPos"
        ,false
        ,false
        ,true
    );
}

/*
 * 기능 : 결제 전 처리 정보를 삭제 후 처리해야 할 내용
 * parameter : nErrorCode - 에러코드
 *             strErrorMsg - 에러메시지
 * Return : 없음
 */
function lfn_AfterDeleteSettlementAndPos(nErrorCode, strErrorMsg) {
    if (nErrorCode != 0) { // 트랜잭션 에러를 처리한다.
        gfn_ErrorMsg(nErrorCode, strErrorMsg);
        return;
    }

    if (ln_PartRepayCnt == 2) { // 부분환불 환불 실행 중이면
        gfn_Alert("수납은 성공했으나, 환불에서 실패해서 환불결과를 삭제했습니다.\n정보지원과로 문의하시기 바랍니다.");
        Close("CANCEL");
    } else {
        Close("CANCEL"); // 삭제 후 종료
    }
}

/*
 * 기능 : POS 정상처리 후 처리한다.
 * parameter : 없음
 * return value : 없음
 */
function lfn_UpdateSettlementAfterPosOk(obj) {
    var sArg = "";
    var sService = "";

    switch (sProgramId) { // 단위업무프로그램
        case "21" : // 강습
            sArg = "TJMGNO=" + quote(sKey1) // 접수번호
                + " TSSEQ=" + quote(ds_oSettlementPos.GetColumn(0, "RESULTSTLNSEQ")) // 결제순차번호
                + " SUNAPGUBUN=" + quote(sSunapGubun) // 수납구분
                + " PARTREPAYYN=" + quote(iif(ln_PartRepayCnt == 0, 'N', 'Y')) // 부분환불여부
                + " PAYMENT=" + quote(ds_iSettlementPos.GetColumn(0, "PAYMENTGUBUN")); // 납부방법 현금0, 신용카드1, 현금영수증2, 가상계좌3
            sService = "com:updatePosOkTraining";
            break;
        case "22" : // 시험
			sArg = "EJMGNO=" + quote(sKey1) // 접수번호
                + " ESSEQ=" + quote(ds_oSettlementPos.GetColumn(0, "RESULTSTLNSEQ")) // 결제순차번호
                + " SUNAPGUBUN=" + quote(sSunapGubun); // 수납구분
            sService = "com:updatePosOkExam";
            break;
        case "23" : // 수첩
            sArg = "LSLLCSNO=" + quote(sKey1) // 수첩번호
                + " LSLHSEQ=" + quote(sKey2) // 수첩 이력 순차번호
                + " LSSEQ=" + quote(ds_oSettlementPos.GetColumn(0, "RESULTSTLNSEQ")) // 결제순차번호
                + " SUNAPGUBUN=" + quote(sSunapGubun); // 수납구분
            sService = "com:updatePosOkLicense";
            break;
    }

    tit_clearActionInfo();
    tit_addSingleActionInfo(sService, "", 0, "");
    // 서버 호출
    tit_callService(
        ""
        ,""
        ,""    // inDs
        ,"ds_oPosSunap=ds_oPosSunap"    // outDs
        ,sArg    // args
        ,"lfn_AfterUpdateSettlementAfterOk"
        ,false
        ,false
        ,true
    );
}

/*
 * 기능 : POS 정상처리 후 처리 후 처리해야 할 내용
 * parameter : nErrorCode - 에러코드
 *             strErrorMsg - 에러메시지
 * Return : 없음
 */
function lfn_AfterUpdateSettlementAfterOk(nErrorCode, strErrorMsg) {

    if (nErrorCode != 0) { // 트랜잭션 에러를 처리한다.
        gfn_ErrorMsg(nErrorCode, strErrorMsg);
        return;
    }

    if (ds_oPosSunap.GetColumn(0, "RESULTCODE") <> "OK") {
        gfn_ErrorMsg(ds_oChangeDate.GetColumn(0, "RESULTCODE"), ds_oChangeDate.GetColumn(0, "RESULTMSG"));
        return;
    }
}

/*
 * 기능 : 전액(01)/부분(02) 환불에 따른 DIV을 선택한다.
 * parameter : sRepayGubun - 전액(01)/부분(02) 환불 구분
 * Return : 없음
 */
function lfn_ChangeRepayDiv(sRepayGubun) {

    if (sRepayGubun == "B") { // 전액환불
        divSunap.Visible = false;

        // 폼 사이즈 조절
        var ln_TitleSize = window.Height - this.Height;
        window.Height = this.Height + ln_TitleSize - (btnSetlmt.Top - divSunap.Top);
        btnSetlmt.Top = divSunap.Top;
    } else { // 부분환불
        divSunap.Visible = true;

        // 폼 사이즈 조절
        var ln_TitleSize = window.Height - this.Height;
        window.Height = ln_TitleSize + (456);
        divSunap.Top = "252";
        btnSetlmt.Top = "408";
    }
}

/*
 * 기능 : POS 처리 후 결과창을 호출한다.
 * parameter : 없음
 * Return : 없음
 */
var ls_ResultPrintPosMsg = ""; // Pos 처리결과 메세지
var ls_ResultPrintLgdMsg = ""; // LG데이콤결과메세지
var ls_ResultPrintKemsMsg = ""; // 안전원결과메세지
var ls_ResultPrintReTransYn = "N"; // 재전송 여부
function lfn_PopupResultPos() {
    gfn_SearchPosResult(ds_oSettlementPos.GetColumn(0, "RESULTPMYEAR")
        , ds_oSettlementPos.GetColumn(0, "RESULTPMMGNO")
        , gds_oPosResult); // POS 결과 정보를 조회한다.

    var sArg = ""; // 팝업파라메터
    sArg = "sResultPrintSunapGubun=" + quote(gds_oPosResult.GetColumn(0, "SUNAPGUBUN")); // 수납환불구분(수납0,환불1)
    sArg += " sResultPrintBuyerNm=" + quote(gds_oPosResult.GetColumn(0, "BUYER")); // 구매자
    sArg += " sResultPrintProgramNm=" + quote(gds_oPosResult.GetColumn(0, "PGMNM")); // 상품정보
    sArg += " sResultPrintJumunNo=" + quote(gds_oPosResult.GetColumn(0, "JUMUNNO")); // 주문번호
    sArg += " sResultPrintPaymentGubun=" + quote(gds_oPosResult.GetColumn(0, "PAYMENT")); // 납부방법
    sArg += " sResultPrintProcAmount=" + quote(gds_oPosResult.GetColumn(0, "PROCAMT")); // 처리금액
    sArg += " sResultPrintCardNo=" + quote(gds_oPosResult.GetColumn(0, "CARDNO")); // 카드번호
    sArg += " sResultPrintCardInstall=" + quote(gds_oPosResult.GetColumn(0, "CARDINSTALL")); // 할부개월수
    sArg += " sResultPrintCashReceiptUse=" + quote(gds_oPosResult.GetColumn(0, "CASHRECEIPTUSE")); // 현금영수증발급용도
    sArg += " sResultPrintCashCardNo=" + quote(gds_oPosResult.GetColumn(0, "CASHCARDNO")); // 현금영수증번호
    sArg += " sResultPrintVirtCashReceiptYn=" + quote(iif(gfn_IsNull(gds_oPosResult.GetColumn(0, "CASHCARDNO")), '아니오', '예')); // 현금영수증여부
    sArg += " sResultPrintVirtHpTel=" + quote(ds_iSettlementPos.GetColumn(0, "VIRTHPTEL")); // 휴대폰번호
    sArg += " sResultPrintVirtBankCd=" + quote(gds_oPosResult.GetColumn(0, "VIRTBANKCD")); // 입금계좌은행
    sArg += " sResultPrintVirtBankNm=" + quote(gds_oPosResult.GetColumn(0, "VIRTBANKNM")); // 입금계좌은행명
    sArg += " sResultPrintVirtCloseDate=" + quote(gds_oPosResult.GetColumn(0, "VIRTCLOSEDATE")); // 입금마감일

    var ls_RetReult = ""; // 결제처리결과팝업 리턴값용
    var ls_PaymentGubun = gds_oPosResult.GetColumn(0, "PMPAYMENTFLAG");
    if (ls_PaymentGubun == "0") { // 현금
        ls_RetReult = Dialog("COM::frmCOM3201PSettlementPOSResult.xml", sArg, 400, 228, "", -1, -1);
    } else if (ls_PaymentGubun == "1") { // 카드
        ls_RetReult = Dialog("COM::frmCOM3202PSettlementPOSResult.xml", sArg, 500, 316, "", -1, -1);
    } else if (ls_PaymentGubun == "2") { // 현금영수증
        ls_RetReult = Dialog("COM::frmCOM3203PSettlementPOSResult.xml", sArg, 500, 316, "", -1, -1);
    } else if (ls_PaymentGubun == "3") { // 가상계좌
        ls_RetReult = Dialog("COM::frmCOM3204PSettlementPOSResult.xml", sArg, 400, 396, "", -1, -1);
    }

    return ls_RetReult;
}

/*
 * 기능 : 강습환불수수료 정보를 조회한다.
 * parameter : 없음
 * return : 없음
 */
function lfn_SearchTrainingRepayFee(sTomgno, sAbsentDay) {
    ds_oTrainingRepayFee.ClearData();

    tit_clearActionInfo();
    tit_addSearchActionInfo("com:searchTrainingRepayFeeAll", false);
    // 서버 호출
    tit_callService(
        ""
        ,""
        ,""    // inDs
        ,"ds_oTrainingRepayFee=ds_oTrainingRepayFee"    // outDs
        ,"TJMGNO=" + quote(sKey1)
        ,""
        ,true
        ,true
        ,true
    );
}

/* 사용자 이벤트 함수 */
function chkPonyDate_OnClick(obj,strValue) {
    if (chkPonyDate == "Y") {
        calPonyDate.Value = GetDAte();
        calPonyDate.Enable = true;
    } else {
        calPonyDate.Value = "";
        calPonyDate.Enable = false;
    }
}

// 결제처리
function btnSetlmt_OnClick(obj) {
    if (!gfn_FormValidate(this)) { // 입력 Validation Check
        return false;
    }

    ds_iSettlementPos.ClearData();
    divPos.ds_ioPosInput.ClearData(); // POS INPUT용

    // 강습결제정보를 저장한다.
    switch (sSunapGubun) { // 수납환불구분
        case "0" : // 수납
            // POS처리용 데이타셋을 설정한다.
            ds_iSettlementPos.InsertRow(0);
            ds_iSettlementPos.SetColumn(0, "JIBUMGID", edJibuMgId.Text); // 카드/지부상점ID
            ds_iSettlementPos.SetColumn(0, "PROGRAMID", sProgramId); // POS단위업무프로그램 (강습21,시험22,수첩23)
            ds_iSettlementPos.SetColumn(0, "SUNAPGUBUN", sSunapGubun); // 수납환불구분(수납0,환불1)
            ds_iSettlementPos.SetColumn(0, "PARTREPAYYN", 'N'); // 부분환불여부(Y:부분환불,N:부분환불아님)
            ds_iSettlementPos.SetColumn(0, "POSYEAR", sPosYear); // 환불용 POS년도
            ds_iSettlementPos.SetColumn(0, "POSMGNO", sPosMgno); // 환불용 POS관리번호
            ds_iSettlementPos.SetColumn(0, "KEY1", sKey1); // KEY값1-관리번호
            ds_iSettlementPos.SetColumn(0, "KEY2", sKey2); // KEY값2-SEQ
            ds_iSettlementPos.SetColumn(0, "PROCGUBUN", divProcGubun.radProcGubun.Value); // 결제구분(강습01, 강습+시험, 강습+수첩 등)
            ds_iSettlementPos.SetColumn(0, "PROCAMOUNT", medSunapAmount.Value); // 결제금액
            ds_iSettlementPos.SetColumn(0, "PROCDATE", left(calSunapDate.Value, 8)); // 처리일자
            ds_iSettlementPos.SetColumn(0, "PONYGUBUN", iif(chkPonyDate.Value == "Y", "1", "0")); // 정산구분
            ds_iSettlementPos.SetColumn(0, "PONYDATE", iif(chkPonyDate.Value == "Y", left(calPonyDate.Value, 8), "")); // 정산일자
            ds_iSettlementPos.SetColumn(0, "PRINTYN", radRecieptYn.Value); // 영수증출력여부 Y/N

            ds_iSettlementPos.SetColumn(0, "BANKSUNAPGUBUN", divSunap.radBankSunapGubun.Value); // 수납방법(방문직납0,방문은납4)
            ds_iSettlementPos.SetColumn(0, "PAYMENTGUBUN", divSunap.radSunapGubun.Value); // 납부방법 현금0, 신용카드1, 현금영수증2, 가상계좌3

            switch (divSunap.radSunapGubun.Value) { // 납부방법
                case "0" : // 현금
                    break;
                case "1" : // 카드
                    if (gfn_IsNull(divSunap.divSunabDtl.edCardNo.Text)) {
                        divSunap.divSunabDtl.edCardNo.SetFocus();
                        gfn_Alert("카드번호를 입력해 주십시오.");
                        return false;
                    }
                    ds_iSettlementPos.SetColumn(0, "CARDNO", divSunap.divSunabDtl.edCardNo.Text); // 카드번호 37자리 카드리더기 값
                    if (medSunapAmount.Value < 50000 && divSunap.divSunabDtl.cbxInstallment.Value <> "00") {
                        divSunap.divSunabDtl.cbxInstallment.SetFocus();
                        gfn_Alert("5만원 이상일 경우 할부 가능합니다.");
                        return false;
                    }
                    ds_iSettlementPos.SetColumn(0, "CARDINSTALL", divSunap.divSunabDtl.cbxInstallment.Value); // 할부개월수
                    break;
                case "2" : // 현금영수증
                    if (gfn_IsNull(divSunap.divSunabDtl.edCashCardNo.Text)) {
                        divSunap.divSunabDtl.edCashCardNo.SetFocus();
                        gfn_Alert("현금영수증번호를 입력해 주십시오.");
                        return false;
                    }
                    ds_iSettlementPos.SetColumn(0, "CASHRECEIPTUSE", divSunap.divSunabDtl.radUseGubun.Value); // 현금영수증발급용도 용도('1':소득공제, '2':지출증빙)
                    ds_iSettlementPos.SetColumn(0, "CASHCARDNO", divSunap.divSunabDtl.edCashCardNo.Text); // 현금영수증번호
                    break;
                case "3" : // 가상계좌
                    ds_iSettlementPos.SetColumn(0, "VIRTBANKCODE", divSunap.divSunabDtl.cbxBank.Value); // 입금계좌은행
                    ds_iSettlementPos.SetColumn(0, "VIRTBANKNAME", divSunap.divSunabDtl.cbxBank.Text); // 입금계좌은행명
                    ds_iSettlementPos.SetColumn(0, "VIRTCLOSEDATE", divSunap.divSunabDtl.calEndDate.Value); // 입금마감일
                    ds_iSettlementPos.SetColumn(0, "VIRTHPTEL", divSunap.divSunabDtl.edHpTel.Text); // 가상계좌휴대폰번호
                    ds_iSettlementPos.SetColumn(0, "VIRTCASHRECEIPTYN", divSunap.divSunabDtl.radRecieptYn.Value); // 가상계좌 현금영수증 사용여부Y/N
                    if (divSunap.divSunabDtl.radRecieptYn.Value == "Y") {
                        if (gfn_IsNull(divSunap.divSunabDtl.divVirtual.edCashCardNo.Text)) {
                            divSunap.divSunabDtl.divVirtual.edCashCardNo.SetFocus();
                            gfn_Alert("현금영수증번호를 입력해 주십시오.");
                            return false;
                        }
                        ds_iSettlementPos.SetColumn(0, "CASHRECEIPTUSE", divSunap.divSunabDtl.divVirtual.radUseGubun.Value); // 현금영수증발급용도 용도('1':소득공제, '2':지출증빙)
                        ds_iSettlementPos.SetColumn(0, "CASHCARDNO", divSunap.divSunabDtl.divVirtual.edCashCardNo.Text); // 현금영수증번호
                    }
                    break;
            }

            if (!gfn_Confirm("정말로 [ " + divSunap.radSunapGubun.Text + " ] 결제처리 하시겠습니까?")) {
                return false;
            }
            break;

        case "1" : // 환불
            if (divProcGubun.radProcGubun.Value == "B") { // 전액환불
                // POS처리용 데이타셋을 설정한다.
                ds_iSettlementPos.InsertRow(0);
                ds_iSettlementPos.SetColumn(0, "JIBUMGID", edJibuMgId.Text); // 카드/지부상점ID
                ds_iSettlementPos.SetColumn(0, "PROGRAMID", sProgramId); // POS단위업무프로그램 (강습21,시험22,수첩23)
                ds_iSettlementPos.SetColumn(0, "SUNAPGUBUN", sSunapGubun); // 수납환불구분(수납0,환불1)
                ds_iSettlementPos.SetColumn(0, "PARTREPAYYN", 'N'); // 부분환불여부(Y:부분환불,N:부분환불아님)
                ds_iSettlementPos.SetColumn(0, "POSYEAR", sPosYear); // 환불용 POS년도
                ds_iSettlementPos.SetColumn(0, "POSMGNO", sPosMgno); // 환불용 POS관리번호
                ds_iSettlementPos.SetColumn(0, "KEY1", sKey1); // KEY값1-관리번호
                ds_iSettlementPos.SetColumn(0, "KEY2", sKey2); // KEY값2-SEQ
                ds_iSettlementPos.SetColumn(0, "PROCGUBUN", divProcGubun.radProcGubun.Value); // 처리구분(환불구분(전액B, 부분P))

                 // 김경철
                switch (sProgramId) { // 단위업무프로그램
					case "21" : // 강습
						ds_iSettlementPos.SetColumn(0, "REPAYCD", cbxRepayFee.Value); // 환불처리코드(B, 0, 1, 2, 3, 4, 5, A)
						ds_iSettlementPos.SetColumn(0, "PROCAMOUNT", ds_oTrainingRepayFee.GetColumn(cbxRepayFee.Index, "DATA")); // 결제금액
						break;
					case "22" : // 시험
						ds_iSettlementPos.SetColumn(0, "REPAYCD", 'B'); // 환불처리코드(B, 0, 1, 2, 3, 4, 5, A)
						ds_iSettlementPos.SetColumn(0, "PROCAMOUNT", 10000); // 결제금액
						break;
					case "23" : // 수첩
						ds_iSettlementPos.SetColumn(0, "REPAYCD", cbxRepayFee.Value); // 환불처리코드(B, 0, 1, 2, 3, 4, 5, A)
						ds_iSettlementPos.SetColumn(0, "PROCAMOUNT", ds_oTrainingRepayFee.GetColumn(cbxRepayFee.Index, "DATA")); // 결제금액
						break;
				}

                ds_iSettlementPos.SetColumn(0, "PROCDATE", left(calSunapDate.Value, 8)); // 처리일자
                ds_iSettlementPos.SetColumn(0, "PONYGUBUN", iif(chkPonyDate.Value == "Y", "1", "0")); // 정산구분
                ds_iSettlementPos.SetColumn(0, "PONYDATE", iif(chkPonyDate.Value == "Y", left(calPonyDate.Value, 8), "")); // 정산일자
                ds_iSettlementPos.SetColumn(0, "PRINTYN", radRecieptYn.Value); // 영수증출력여부 Y/N
                ds_iSettlementPos.SetColumn(0, "PAYMENTGUBUN", sRepayPayment); // 납부방법 현금0, 신용카드1, 현금영수증2, 가상계좌3

            } else { // 부분환불
                sSunapGubun = '0'; // 수납환불구분 : 수납'0'으로 변경
                ln_PartRepayCnt = 1; // 부분환불여부 부분환불 수납
                // 수납용 POS처리용 데이타셋을 설정한다.
                ds_iSettlementPos.InsertRow(0);
                ds_iSettlementPos.SetColumn(0, "JIBUMGID", edJibuMgId.Text); // 카드/지부상점ID
                ds_iSettlementPos.SetColumn(0, "PROGRAMID", sProgramId); // POS단위업무프로그램 (강습21,시험22,수첩23)
                ds_iSettlementPos.SetColumn(0, "SUNAPGUBUN", sSunapGubun); // 수납환불구분(수납0,환불1)
                ds_iSettlementPos.SetColumn(0, "PARTREPAYYN", 'Y'); // 부분환불여부(Y:부분환불,N:부분환불아님)
                ds_iSettlementPos.SetColumn(0, "POSYEAR", sPosYear); // 환불용 POS년도
                ds_iSettlementPos.SetColumn(0, "POSMGNO", sPosMgno); // 환불용 POS관리번호
                ds_iSettlementPos.SetColumn(0, "KEY1", sKey1); // KEY값1-관리번호
                ds_iSettlementPos.SetColumn(0, "KEY2", sKey2); // KEY값2-SEQ
                ds_iSettlementPos.SetColumn(0, "PROCGUBUN", divProcGubun.radProcGubun.Value); // 결제구분(강습01, 강습+시험, 강습+수첩 등)
                ds_iSettlementPos.SetColumn(0, "PROCAMOUNT", medSunapAmount.Value); // 결제금액
                ds_iSettlementPos.SetColumn(0, "PROCDATE", left(calSunapDate.Value, 8)); // 처리일자
                ds_iSettlementPos.SetColumn(0, "PONYGUBUN", iif(chkPonyDate.Value == "Y", "1", "0")); // 정산구분
                ds_iSettlementPos.SetColumn(0, "PONYDATE", iif(chkPonyDate.Value == "Y", left(calPonyDate.Value, 8), "")); // 정산일자
                ds_iSettlementPos.SetColumn(0, "PRINTYN", radRecieptYn.Value); // 영수증출력여부 Y/N

                ds_iSettlementPos.SetColumn(0, "BANKSUNAPGUBUN", divSunap.radBankSunapGubun.Value); // 수납방법(방문직납0,방문은납4)
                ds_iSettlementPos.SetColumn(0, "PAYMENTGUBUN", divSunap.radSunapGubun.Value); // 납부방법 현금0, 신용카드1, 현금영수증2, 가상계좌3


                switch (divSunap.radSunapGubun.Value) { // 납부방법
                    case "0" : // 현금
                        break;
                    case "1" : // 카드
                        if (gfn_IsNull(divSunap.divSunabDtl.edCardNo.Text)) {
                            divSunap.divSunabDtl.edCardNo.SetFocus();
                            gfn_Alert("카드번호를 입력해 주십시오.");
                            return false;
                        }
                        ds_iSettlementPos.SetColumn(0, "CARDNO", divSunap.divSunabDtl.edCardNo.Text); // 카드번호 32자리 카드리더기 값
                        if (medSunapAmount.Value < 50000 && divSunap.divSunabDtl.cbxInstallment.Value <> "00") {
                            divSunap.divSunabDtl.cbxInstallment.SetFocus();
                            gfn_Alert("5만원 이상일 경우 할부 가능합니다.");
                            return false;
                        }
                        ds_iSettlementPos.SetColumn(0, "CARDINSTALL", divSunap.divSunabDtl.cbxInstallment.Value); // 할부개월수
                        break;
                    case "2" : // 현금영수증
                        if (gfn_IsNull(divSunap.divSunabDtl.edCashCardNo.Text)) {
                            divSunap.divSunabDtl.edCashCardNo.SetFocus();
                            gfn_Alert("현금영수증번호를 입력해 주십시오.");
                            return false;
                        }
                        ds_iSettlementPos.SetColumn(0, "CASHRECEIPTUSE", divSunap.divSunabDtl.radUseGubun.Value); // 현금영수증발급용도 용도('1':소득공제, '2':지출증빙)
                        ds_iSettlementPos.SetColumn(0, "CASHCARDNO", divSunap.divSunabDtl.edCashCardNo.Text); // 현금영수증번호
                        break;
                }
            }

            if (!gfn_Confirm("정말로 환불처리 하시겠습니까?")) {
                return false;
            }
            break;
    }

    btnSetlmt.Enable = false; // 결제버튼 비활성화
    lfn_InsertSettlementAndPos(); // 결제 및 POS 결제 정보 저장
}

function cbxRepayFee_OnChanged(obj,strCode,strText,nOldIndex,nNewIndex) {
    if (strCode == "B") {
        divProcGubun.radProcGubun.Value = "B"; // 전액환불
        divSunap.lbSunapAmount.Visible = false;
        medSunapAmount.Visible = false;
        cbxRepayFee.Value = "B";
    } else {
        divProcGubun.radProcGubun.Value = "P"; // 부분환불
        divSunap.lbSunapAmount.Visible = true;
        medSunapAmount.Visible = true;
    }
    medSunapAmount.Value = toNumber(sProcAmount) + toNumber(ds_oTrainingRepayFee.GetColumn(nNewIndex, "DATA"));

    lfn_ChangeRepayDiv(divProcGubun.radProcGubun.Value);
}

/*
 * 기능 : 부분환불 수납 후 환불을 실행한다.
 * parameter : 없음
 * return : 없음
 */
function lfn_ExecuteRepaySunap() {
    sSunapGubun = '1'; // 수납환불구분 : 환불'1'로 변경
    ln_PartRepayCnt = 2; // 부분환불여부 부분환불 환불

    ds_iSettlementPos.ClearData();
    divPos.ds_ioPosInput.ClearData(); // POS INPUT용

    // 환불용 POS처리용 데이타셋을 설정한다.
    ds_iSettlementPos.InsertRow(0);
    ds_iSettlementPos.SetColumn(0, "JIBUMGID", edJibuMgId.Text); // 카드/지부상점ID
    ds_iSettlementPos.SetColumn(0, "PROGRAMID", sProgramId); // POS단위업무프로그램 (강습21,시험22,수첩23)
    ds_iSettlementPos.SetColumn(0, "SUNAPGUBUN", sSunapGubun); // 수납환불구분(수납0,환불1)
    ds_iSettlementPos.SetColumn(0, "PARTREPAYYN", 'Y'); // 부분환불여부(Y:부분환불,N:부분환불아님)
    ds_iSettlementPos.SetColumn(0, "POSYEAR", sPosYear); // 환불용 POS년도
    ds_iSettlementPos.SetColumn(0, "POSMGNO", sPosMgno); // 환불용 POS관리번호
    ds_iSettlementPos.SetColumn(0, "KEY1", sKey1); // KEY값1-관리번호
    ds_iSettlementPos.SetColumn(0, "KEY2", sKey2); // KEY값2-SEQ
    ds_iSettlementPos.SetColumn(0, "PROCGUBUN", divProcGubun.radProcGubun.Value); // 처리구분(환불구분(전액B, 부분P))
    ds_iSettlementPos.SetColumn(0, "REPAYCD", cbxRepayFee.Value); // 환불처리코드(B, 0, 1, 2, 3, 4, 5, A)
    ds_iSettlementPos.SetColumn(0, "PROCAMOUNT", ds_oTrainingRepayFee.GetColumn(cbxRepayFee.Index, "DATA")); // 결제금액
    ds_iSettlementPos.SetColumn(0, "PROCDATE", left(calSunapDate.Value, 8)); // 처리일자
    ds_iSettlementPos.SetColumn(0, "PONYGUBUN", iif(chkPonyDate.Value == "Y", "1", "0")); // 정산구분
    ds_iSettlementPos.SetColumn(0, "PONYDATE", iif(chkPonyDate.Value == "Y", left(calPonyDate.Value, 8), "")); // 정산일자
    ds_iSettlementPos.SetColumn(0, "PRINTYN", radRecieptYn.Value); // 영수증출력여부 Y/N
    ds_iSettlementPos.SetColumn(0, "PAYMENTGUBUN", sRepayPayment); // 납부방법 현금0, 신용카드1, 현금영수증2, 가상계좌3

    lfn_InsertSettlementAndPos(); // 결제 및 POS 결제 정보 저장
}

// 김경철
/*
 * 기능 : 강습접수의 회계수납용 회차변경을 실행한다.
 * parameter : 없음
 * return value : 없음
 */
function lfn_ExecuteExamOrderChange() {
    var sArg = "EJMGNO=" + quote(sKey1); // 강습접수관리번호
    sArg += " ESSEQ=" + quote(ds_oSettlementPos.GetColumn(0, "RESULTSTLNSEQ")); // 결제순차번호
    sArg += " AFTERGTMGNO=" + quote(sSunapGubun); // 회차변경 후 지부
    sArg += " PROCDATE=" + quote(ds_iSettlementPos.GetColumn(ln_PosInputIndex, "PROCDATE")); // 처리일자

    tit_clearActionInfo();
    tit_addSingleActionInfo("com:executeExamOrderChange", "", 0, "");
    // 서버 호출
    tit_callService(
        ""
        ,""
        ,""    // inDs
        ,"ds_oTrainingOrderChange=ds_oTrainingOrderChange"    // outDs
        ,sArg    // args
        ,"lfn_AfterExecuteExamOrderChange"
        ,false
        ,false
        ,true
    );
}