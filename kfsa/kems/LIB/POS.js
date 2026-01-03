?????????????????????????????/*
 * 프로그램명 : POS.js
 * 설명 : POS 관련
 * 작성일 : 2009.09.18
 * 작성자 : 장성호
 */

/*
 * 기능 : 안전원와 LGD 결과 내용 조회하기
 * parameter : sPosYear - 영수증관리년도
 *             sPosMgno - 영수증관리번호
 * Return : 성공:"OK", 실패:"FAIL"
 */
function gfn_CheckPosResult(sPosYear, sPosMgno) {
    var lb_PosInfoResult = gfn_SearchPosResult(sPosYear, sPosMgno, gds_oPosResult); // POS 결과 정보를 조회한다.

    if (!lb_PosInfoResult) {
        gfn_Alert("POS 결과 정보를 조회에 실패했습니다.");
        return "FAIL";
    }

    gds_iCheckPos.ClearData(); //가비지 데이타 제거
    gds_oCheckPos.ClearData(); //가비지 데이타 제거

    // POS DIV 호출용 데이타셋을 저장한다.
    gds_iCheckPos.InsertRow(0);
    gds_iCheckPos.SetColumn(0, "PMYEAR", sPosYear); // 영수증 관리년도
    gds_iCheckPos.SetColumn(0, "PMMGNO", sPosMgno); // 영수증 관리번호
    gds_iCheckPos.SetColumn(0, "STATUS", "4"); // 초기저장시 4

    Https.Sync = true;
    var params = "ROW=" + quote("0");
    params += " PMREGSABUN=" + gds_oUserInfo.GetColumn(0,"PSABUN");
    params += " COMMAND=search";
    Transaction("PosRun2", "POS::Platform.jsp", "ioPosInput=gds_iCheckPos", "gds_oCheckPos=ioPosOutput", params, "gfn_AfterCheckPosResult");
    Https.Sync = false;
}

/*
 * 기능 : LGD성공이라 안전원결과를 성공으로 변경한다.
 * parameter : sPosYear - 영수증관리년도
 *             sPosMgno - 영수증관리번호
 * Return : 처리결과 0, 1, 2, 3, 4, 5
 */
function gfn_ChangeKfsaResultOk(sPosYear, sPosMgno) {
    gds_iCheckPos.ClearData(); //가비지 데이타 제거
    gds_oCheckPos.ClearData(); //가비지 데이타 제거

    // POS DIV 호출용 데이타셋을 저장한다.
    gds_iCheckPos.InsertRow(0);
    gds_iCheckPos.SetColumn(0, "PMYEAR", sPosYear); // 영수증 관리년도
    gds_iCheckPos.SetColumn(0, "PMMGNO", sPosMgno); // 영수증 관리번호
    gds_iCheckPos.SetColumn(0, "STATUS", "1"); // "1" 실패결과 변경

	Https.Sync = true;
	var params = "ROW=" + quote("0");
	params += " PMREGSABUN=" + gds_oUserInfo.GetColumn(0,"PSABUN");
	params += " COMMAND=process";
	Transaction("PosRun", "POS::Platform.jsp", "ioPosInput=gds_iCheckPos", "gds_oCheckPos=ioPosOutput", params, "gfn_AfterChangeKfsaResultOk");
	Https.Sync = false;
}

/*
 * 기능 : lfn_PosConfirmCall 서비스 호출 후 처리해야 할 내용
 * parameter : strSvcID - 서비스ID
 *             nErrorCode - 에러코드
 *             strErrorMsg - 에러메시지
 * Return : 성공:"OK", 실패:"FAIL"
 */
function gfn_AfterChangeKfsaResultOk(strSvcID, nErrorCode, strErrorMsg) {
    if (strSvcID <> "PosRun") {
        return "FAIL";
    }

    if (nErrorCode < 0) { // 트랜잭션 에러.
        gfn_ErrorMsg(nErrorCode, strErrorMsg);
        return "FAIL";
    }

    var ls_PosResultCode = gds_oCheckPos.GetColumn(0, "MI_RSCODE"); // POS 조회결과 코드값
    return ls_PosResultCode;
}

/*
 * 기능 : POS 결과 정보를 조회한다.
 * parameter : sPosYear - 영수증관리년도
 *             sPosMgno - 영수증관리번호
 *             sOutDataset - 리턴받을 데이타셋명
 * return : 성공 true, 실패 false
 */
function gfn_SearchPosResult(sPosYear, sPosMgno, objOutDataset) {
    objOutDataset.ClearData();

    tit_clearActionInfo();
    tit_addSearchActionInfo("com:searchPosResult", false);
    // 서버 호출
    tit_callService(
        ""
        ,""
        ,""    // inDs
        ,objOutDataset.ID + "=ds_oPosResult" // outDs
        ,"POSYEAR=" + quote(sPosYear)
            + " POSMGNO=" + quote(sPosMgno)
        ,""
        ,true
        ,true
        ,true
    );

    if (objOutDataset.GetCount() > 0) {
        return true;
    } else {
        return false;
    }
}

/*
 * 기능 : lfn_PosConfirmCall 서비스 호출 후 처리해야 할 내용
 * parameter : strSvcID - 서비스ID
 *             nErrorCode - 에러코드
 *             strErrorMsg - 에러메시지
 * Return : 성공:"OK", 실패:"FAIL"
 */
function gfn_AfterCheckPosResult(strSvcID, nErrorCode, strErrorMsg) {
    if (strSvcID <> "PosRun2") {
        return "FAIL";
    }

    if (nErrorCode < 0) { // 트랜잭션 에러.
        gfn_ErrorMsg(nErrorCode, strErrorMsg);
        return "FAIL";
    }

    // 트랜잭션 성공.
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
    sArg += " sResultPrintVirtBankCd=" + quote(gds_oPosResult.GetColumn(0, "VIRTBANKCD")); // 입금계좌은행
    sArg += " sResultPrintVirtBankNm=" + quote(gds_oPosResult.GetColumn(0, "VIRTBANKNM")); // 입금계좌은행명
    sArg += " sResultPrintVirtCloseDate=" + quote(gds_oPosResult.GetColumn(0, "VIRTCLOSEDATE")); // 입금마감일
    sArg += " sResultPmyear=" + quote(gds_oPosResult.GetColumn(0, "PMYEAR")); // 영수증년도
    sArg += " sResultPmmgno=" + quote(gds_oPosResult.GetColumn(0, "PMMGNO")); // 영수증관리번호
    sArg += " sResultPgmId=" + quote(gds_oPosResult.GetColumn(0, "PGMID")); // 프로그램구분(21,22,23)

    var ls_PosResultCode = gds_oCheckPos.GetColumn(0, "MI_RSCODE"); // POS 조회결과 코드값
    sArg += " sPosResultCode=" + quote(ls_PosResultCode); // POS 조회결과 코드값

    switch (ls_PosResultCode) { // POS 결과
        case "0" : // 데이콤 성공, 안전원 성공
            sArg += " sResultPrintLgdMsg=결제성공"; // LG데이콤결과메세지
            sArg += " sResultPrintKemsMsg=결제성공"; // 안전원결과메세지
            break;
        case "1" : // 데이콤 성공, 안전원 실패
            sArg += " sResultPrintKemsMsg=결제성공"; // 안전원결과메세지
            sArg += " sResultPrintLgdMsg=결제성공"; // LG데이콤결과메세지
            break;
        case "3" : // 데이콤 실패, 안전원 실패
            sArg += " sResultPrintKemsMsg=결제실패"; // 안전원결과메세지
            sArg += " sResultPrintLgdMsg=결제실패"; // LG데이콤결과메세지
            break;
        case "4" : // 초기 신청 상태
            sArg += " sResultPrintKemsMsg=결제실패"; // 안전원결과메세지
            sArg += " sResultPrintLgdMsg=결제실패"; // LG데이콤결과메세지
            break;
        default : // 알수없는 상태
            sArg += " sResultPrintKemsMsg=조회실패"; // 안전원결과메세지
            sArg += " sResultPrintLgdMsg=조회실패"; // LG데이콤결과메세지
            break;
    }
    var ls_PrintFlag = gds_oPosResult.GetColumn(0, "PRINTFLAG");

    if (ls_PrintFlag == "0") { // 현금
        return Dialog("COM::frmCOM3211PSettlementPOSResultInfo.xml", sArg, 400, 260, "", -1, -1);
    } else if (ls_PrintFlag == "1") { // 카드
        return Dialog("COM::frmCOM3212PSettlementPOSResultInfo.xml", sArg, 400, 292, "", -1, -1);
    } else if (ls_PrintFlag == "2") { // 현금영수증
        return Dialog("COM::frmCOM3213PSettlementPOSResultInfo.xml", sArg, 400, 292, "", -1, -1);
    } else if (ls_PrintFlag == "3") { // 가상계좌
        return Dialog("COM::frmCOM3214PSettlementPOSResultInfo.xml", sArg, 400, 388, "", -1, -1);
    }
}

/*
 * 기능 : 영수증을 출력한다.
 * parameter : sPosYear - 영수증관리년도
 *             sPosMgno - 영수증관리번호
 * Return : 성공 true, 실패 false
 */
function gfn_PrintReceipt(sPosYear, sPosMgno) {
    if (gfn_IsNull(sPosYear) || gfn_IsNull(sPosMgno)) {
        gfn_Alert("출력할 영수증 정보가 없습니다.");
        return false;
    }

	// 승인된 건인지 체크한다.
    gds_oPrintReceiptMast.ClearData(); // 데이타셋 초기화

    tit_clearActionInfo();
    tit_addSingleActionInfo("com:searchPosprintm_pmresult", false);
    
    // 서버 호출
    tit_callService(
        ""
        ,""
        ,""    // inDs
        ,"gds_oPrintReceiptMast=ds_oPrintReceiptMast" // outDs
        ,"POSYEAR=" + quote(sPosYear) + " POSMGNO=" + quote(sPosMgno)
        ,""
        ,false
        ,false
        ,true
    );
    	
    if (gds_oPrintReceiptMast.GetColumn(0, "PMRESULT") <> "1") {
        alert("POS 결제 정보가 미결재된 상태입니다. 영수증을 출력할 수 없습니다.");
        return false;
    }
        	
        	
    	
    // 영수증 출력 이력을 저장한다.
    gds_oPrintReceiptHistory.ClearData();

    tit_clearActionInfo();
    tit_addSingleActionInfo("com:insertPosPrintHistory", "", 0, "");
    // 서버 호출
    tit_callService(
        ""
        ,""
        ,""    // inDs
        ,"gds_oPrintReceiptHistory=ds_oPrintHistory"    // outDs
        ,"POSYEAR=" + quote(sPosYear) // args
            + " POSMGNO=" + quote(sPosMgno)
        ,""
        ,false
        ,false
        ,true
    );

    if (gds_oPrintReceiptHistory.GetColumn(0, "RESULTCODE") <> "OK") {
        gfn_ErrorMsg(gds_oPrintReceiptHistory.GetColumn(0, "RESULTCODE"), gds_oPrintReceiptHistory.GetColumn(0, "RESULTMSG"));
        return false;
    }

    // 영수증 출력 정보를 조회한다.(POSPRINTM, POSPAYMENT)
    gds_oPrintReceiptMast.ClearData(); // 데이타셋 초기화
    gds_oPrintReceiptDtl.ClearData(); // 데이타셋 초기화

    tit_clearActionInfo();
    tit_addSearchActionInfo("com:searchPrintReceiptPosMast", false);
    tit_addSearchActionInfo("com:searchPrintReceiptPosDtl", false);
    // 서버 호출
    tit_callService(
        ""
        ,""
        ,""    // inDs
        ,"gds_oPrintReceiptMast=ds_oPrintReceiptMast" // outDs
            + " gds_oPrintReceiptDtl=ds_oPrintReceiptDtl"
        ,"POSYEAR=" + quote(sPosYear) // args
            + " POSMGNO=" + quote(sPosMgno)
        ,"gfn_AfterPrintReceipt"
        ,false
        ,false
        ,true
    );
}

/*
 * 기능 : 영수증 출력 정보 조회 후 처리해야 할 내용
 * parameter : nErrorCode - 에러코드
 *             strErrorMsg - 에러메시지
 * Return : 없음
 */
function gfn_AfterPrintReceiptHistory(nErrorCode, strErrorMsg) {
    if (nErrorCode != 0) { // 트랜잭션 에러를 처리한다.
        gfn_ErrorMsg(nErrorCode, strErrorMsg);
        return false;
    }

    if (gds_oPrintReceiptHistory.GetColumn(0, "RESULTCODE") <> "OK") {
        gfn_ErrorMsg(gds_oPrintReceiptHistory.GetColumn(0, "RESULTCODE"), gds_oPrintReceiptHistory.GetColumn(0, "RESULTMSG"));
        return false;
    }

    // 영수증 출력 정보를 조회한다.(POSPRINTM, POSPAYMENT)
    gds_oPrintReceiptMast.ClearData(); // 데이타셋 초기화
    gds_oPrintReceiptDtl.ClearData(); // 데이타셋 초기화

    tit_clearActionInfo();
    tit_addSearchActionInfo("com:searchPrintReceiptPosMast", false);
    tit_addSearchActionInfo("com:searchPrintReceiptPosDtl", false);
    // 서버 호출
    tit_callService(
        ""
        ,""
        ,""    // inDs
        ,"gds_oPrintReceiptMast=ds_oPrintReceiptMast" // outDs
            + " gds_oPrintReceiptDtl=ds_oPrintReceiptDtl"
        ,"POSYEAR=" + quote(sPosYear) // args
            + " POSMGNO=" + quote(sPosMgno)
        ,"gfn_AfterPrintReceipt"
        ,false
        ,false
        ,true
    );
}

/*
 * 기능 : 영수증 출력 정보 조회 후 처리해야 할 내용
 * parameter : nErrorCode - 에러코드
 *             strErrorMsg - 에러메시지
 * Return : 없음
 */
function gfn_AfterPrintReceipt(nErrorCode, strErrorMsg) {
    if (nErrorCode != 0) { // 트랜잭션 에러를 처리한다.
        gfn_ErrorMsg(nErrorCode, strErrorMsg);
        return false;
    }
	// 출력물보안 미적용 리포트
    // 영수증을 출력한다.
   return gfn_PrintReport("frmtraining0020R02ReceiptReIssue.rex", "gds_oPrintReceiptMast||gds_oPrintReceiptDtl||gds_oPrintReceiptDtl", "", false, "영수증");
}

/*
 * 기능 : 영수증을 출력한다.
 * parameter : sPosYear - 영수증관리년도
 *             sPosMgno - 영수증관리번호
 * Return : 성공 true, 실패 false
 */
function gfn_PrintReceiptPDF(sPosYear, sPosMgno) {
    if (gfn_IsNull(sPosYear) || gfn_IsNull(sPosMgno)) {
        gfn_Alert("출력할 영수증 정보가 없습니다.");
        return false;
    }

	// 승인된 건인지 체크한다.
    gds_oPrintReceiptMast.ClearData(); // 데이타셋 초기화

    tit_clearActionInfo();
    tit_addSingleActionInfo("com:searchPosprintm_pmresult", false);
    
    // 서버 호출
    tit_callService(
        ""
        ,""
        ,""    // inDs
        ,"gds_oPrintReceiptMast=ds_oPrintReceiptMast" // outDs
        ,"POSYEAR=" + quote(sPosYear) + " POSMGNO=" + quote(sPosMgno)
        ,""
        ,false
        ,false
        ,true
    );
    	
    if (gds_oPrintReceiptMast.GetColumn(0, "PMRESULT") <> "1") {
        alert("POS 결제 정보가 미결재된 상태입니다. 영수증을 출력할 수 없습니다.");
        return false;
    }
        	
        	
    	
    // 영수증 출력 이력을 저장한다.
    gds_oPrintReceiptHistory.ClearData();

    tit_clearActionInfo();
    tit_addSingleActionInfo("com:insertPosPrintHistory", "", 0, "");
    // 서버 호출
    tit_callService(
        ""
        ,""
        ,""    // inDs
        ,"gds_oPrintReceiptHistory=ds_oPrintHistory"    // outDs
        ,"POSYEAR=" + quote(sPosYear) // args
            + " POSMGNO=" + quote(sPosMgno)
        ,""
        ,false
        ,false
        ,true
    );

    if (gds_oPrintReceiptHistory.GetColumn(0, "RESULTCODE") <> "OK") {
        gfn_ErrorMsg(gds_oPrintReceiptHistory.GetColumn(0, "RESULTCODE"), gds_oPrintReceiptHistory.GetColumn(0, "RESULTMSG"));
        return false;
    }

    // 영수증 출력 정보를 조회한다.(POSPRINTM, POSPAYMENT)
    gds_oPrintReceiptMast.ClearData(); // 데이타셋 초기화
    gds_oPrintReceiptDtl.ClearData(); // 데이타셋 초기화

    tit_clearActionInfo();
    tit_addSearchActionInfo("com:searchPrintReceiptPosMast", false);
    tit_addSearchActionInfo("com:searchPrintReceiptPosDtl", false);
    // 서버 호출
    tit_callService(
        ""
        ,""
        ,""    // inDs
        ,"gds_oPrintReceiptMast=ds_oPrintReceiptMast" // outDs
            + " gds_oPrintReceiptDtl=ds_oPrintReceiptDtl"
        ,"POSYEAR=" + quote(sPosYear) // args
            + " POSMGNO=" + quote(sPosMgno)
        ,"gfn_AfterPrintReceiptPDF"
        ,false
        ,false
        ,true
    );
}

/*
 * 기능 : 영수증 출력 정보 조회 후 처리해야 할 내용
 * parameter : nErrorCode - 에러코드
 *             strErrorMsg - 에러메시지
 * Return : 없음
 */
function gfn_AfterPrintReceiptPDF(nErrorCode, strErrorMsg) {
    if (nErrorCode != 0) { // 트랜잭션 에러를 처리한다.
        gfn_ErrorMsg(nErrorCode, strErrorMsg);
        return false;
    }
	// 출력물보안 미적용 리포트
    // 영수증을 출력한다.
   return gfn_CallReportPopup("frmtraining0020R02ReceiptReIssuePDF.rex", "gds_oPrintReceiptMast||gds_oPrintReceiptDtl||gds_oPrintReceiptDtl", "", false, "영수증");
}