﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿/*
 * 프로그램명 : REXPERT.js
 * 설명 : 정렬 관련
 * 작성일 : 2009.08.12
 * 작성자 : 장성호
 */

var lb_IsPrinted = false; // 출력을 했는지 여부
var lb_IsLcsYn = false; // 수첩출력여부

/*
 * 기능 : 렉스퍼트 보고서를 팝업화면으로 호출한다.
 * parameter : sReportName - 레포트명(예:레포트.rex)
 *             sReportDataset - 데이터셋명(예:dsReport1||dsResport2||...)
 *             sReportParams - 렉스퍼트용 파라메터(예: a에 1, b에 2, c에 3의 값을 넣는 경우, a=1^b=2^c=3...)
 *             bLcsYn - 수첩여부
 *             LeftMargin = 왼쪽
 *             RightMargin = 오른쪽
 *             TopMargin = 상단
 *             BottomMargin = 하단
 * return value : 정상출력 true, 출력 안했으면 false
 */
function gfn_CallReportPopup(sReportName, sReportDataset, sReportParams, bLcsYn, sSubReport, sTopMargin, sLeftMargin) {
    lb_IsPrinted = false;
    if (bLcsYn) {
        lb_IsLcsYn = true;
    } else {
        lb_IsLcsYn = false;
    }

    if (gfn_IsNull(sTopMargin)) {  // 상단 여백 안 준 레포트는 기본적으로 50 으로 넣음 기본으로 만들었슴
        sTopMargin = 50;
    } 

    if (gfn_IsNull(sLeftMargin)) {  // 왼쪽 여백 안 준 레포트는 기본적으로 50 으로 넣음 기본으로 만들었슴
        sLeftMargin = 50;
    } 
        
    // 렉스퍼트 호출용 xml(frmCOM4000PRexpertViewer.xml) 파라미터 설정 (레포트명 및 report&Dataset Map)
    var sArg = "sReportFileName=" + quote(sReportName); // 레포트명
    sArg += " sReportDatasetMap=" + quote(sReportDataset); // Dataset Map
    sArg += " sSubReport=" +quote(sSubReport);//서브레포트 객체생성 구분
    sArg += " sTopMargin=" +quote(sTopMargin);//레포트 상단여백
    sArg += " sLeftMargin=" +quote(sLeftMargin);//레포트 왼쪽여백
        
    // 파라미터 설정
    var sGlobalParams = "rpGlobalSabun=" + gds_oUserInfo.GetColumn(0, "PSABUN");
    sGlobalParams += "^rpGlobalPersonNm=" + gds_oUserInfo.GetColumn(0, "PPERSONNM");
    sGlobalParams += "^rpGlobalDeptCd=" + gds_oUserInfo.GetColumn(0, "PDEPTCD");
    sGlobalParams += "^rpGlobalDeptNm=" + gds_oUserInfo.GetColumn(0, "PDEPTNM");
    if (gfn_IsNull(sReportParams)) {
        sArg += " sParams=" + quote(sGlobalParams);
    } else {
        sGlobalParams += "^";
        sArg += " sParams=" + quote(sGlobalParams + sReportParams);
    }

    // 팝업형식으로 렉스퍼트 호출용 xml 호출
    return Dialog("COM::frmCOM4000PRexpertViewer.xml", sArg, 1000, 700, "Resize=True");
}

function gfn_CallSQLReportPopup(sReportName, sReportDataset, sReportParams, bLcsYn, sSubReport, sTopMargin, sLeftMargin) {
    lb_IsPrinted = false;
    if (bLcsYn) {
        lb_IsLcsYn = true;
    } else {
        lb_IsLcsYn = false;
    }

    if (gfn_IsNull(sTopMargin)) {  // 상단 여백 안 준 레포트는 기본적으로 50 으로 넣음 기본으로 만들었슴
        sTopMargin = 50;
    } 

    if (gfn_IsNull(sLeftMargin)) {  // 왼쪽 여백 안 준 레포트는 기본적으로 50 으로 넣음 기본으로 만들었슴
        sLeftMargin = 50;
    } 
        
    // 렉스퍼트 호출용 xml(frmCOM4000PRexpertViewer.xml) 파라미터 설정 (레포트명 및 report&Dataset Map)
    var sArg = "sReportFileName=" + quote(sReportName); // 레포트명
    sArg += " sReportDatasetMap=" + quote(sReportDataset); // Dataset Map
    sArg += " sSubReport=" +quote(sSubReport);//서브레포트 객체생성 구분
    sArg += " sTopMargin=" +quote(sTopMargin);//레포트 상단여백
    sArg += " sLeftMargin=" +quote(sLeftMargin);//레포트 왼쪽여백
        
    // 파라미터 설정
    var sGlobalParams = "rpGlobalSabun:" + gds_oUserInfo.GetColumn(0, "PSABUN");
    sGlobalParams += "^rpGlobalPersonNm:" + gds_oUserInfo.GetColumn(0, "PPERSONNM");
    sGlobalParams += "^rpGlobalDeptCd:" + gds_oUserInfo.GetColumn(0, "PDEPTCD");
    sGlobalParams += "^rpGlobalDeptNm:" + gds_oUserInfo.GetColumn(0, "PDEPTNM");
    if (gfn_IsNull(sReportParams)) {
        sArg += " sParams=" + quote(sGlobalParams);
    } else {
        sGlobalParams += "^";
        sArg += " sParams=" + quote(sGlobalParams + sReportParams);
    }

    // 팝업형식으로 렉스퍼트 호출용 xml 호출
    return Dialog("COM::frmCOM4001PRexpertViewer.xml", sArg, 1000, 700, "Resize=True");
}

/*
 * 기능 : 렉스퍼트 보고서를 바로 출력한다.
 * parameter : sReportUrl - 레포트명(예:레포트.rex)
 *             dsNm - 데이터셋명(예:dsReport1||dsResport2||...)
 *             sReportParams - 렉스퍼트용 파라메터(예: a에 1, b에 2, c에 3의 값을 넣는 경우, a=1^b=2^c=3...)
 *             bOpenPrintWindow - 인쇄창보임여부(true : 인쇄창 보임, false : 인쇄창 숨김)
 *             sPrinterNm - 프린터명
 *             bLcsYn - 수첩여부
 * return value : 정상출력 true, 출력 안했으면 false
 */
function gfn_PrintReport(sReportUrl, dsNm, sReportParams, bOpenPrintWindow, sPrinterNm, bLcsYn) {
    lb_IsPrinted = false;
    if (bLcsYn) {
        lb_IsLcsYn = true;
    } else {
        lb_IsLcsYn = false;
    }
    // 글러벌 파라미터 추가
    var sGlobalParams = "rpGlobalSabun=" + gds_oUserInfo.GetColumn(0, "PSABUN");
    sGlobalParams += "^rpGlobalPersonNm=" + gds_oUserInfo.GetColumn(0, "PPERSONNM");
    sGlobalParams += "^rpGlobalDeptCd=" + gds_oUserInfo.GetColumn(0, "PDEPTCD");
    sGlobalParams += "^rpGlobalDeptNm=" + gds_oUserInfo.GetColumn(0, "PDEPTNM");

    var sParams = "";
    if (gfn_IsNull(sReportParams)) {
        sParams = quote(sGlobalParams);
    } else {
        sGlobalParams += "^";
        sParams = quote(sGlobalParams + sReportParams);
    }

    //리포트 객체 open
    Create("Rexpert", "objRexpert", 'left="10" top="10" width="0" height="0"'); // 렉스퍼트 오브젝트를 생성한다.
    objRexpert.FinishPrint="rxpRexpert_FinishPrint";
    var oRex = objRexpert.OpenReport(gfn_GetRootPath() + "REPORT\\" + sReportUrl);
    if (oRex == null) {
        //gfn_Alert("Rexpert File is not exist.");
        return lb_IsPrinted;
    }

    var oDataSet;
    var oConnection;

    //리포트에 연결할 커넥션 생성
    oConnection = objRexpert.CreateConnection("connectionstring");

    //데이터 정보를 Load
    oConnection.addValue("load", gfn_MakeRexDataXml(dsNm));

    //데이터 정보를 리포트에 바인딩
    oDataSet = oRex.CreateDataSetXML(oConnection, "root/dataset/record", 0);

    //서브 리포트 객체 생성
    var oSubReport;
    for (var i = 0; i < oRex.GetReportCountChild(); i++) {
        oSubReport = oRex.OpenReport(i);

	    // 서브 렉스퍼트용 파라메터들을 분리하여 셋팅한다.
	    if (length(sParams) > 0) {
	        var split_sParams = split(UnQuote(sParams), "^");
	        for (var i = 0; i < split_sParams.length; i++) {
	            var in_split = split(split_sParams[i], "=");
	            // 셋팅
	            oSubReport.SetParameterFieldValue(in_split[0], in_split[1]);
	        }
	    }
    
        oSubReport.CreateDataSetXML(oConnection, "root/dataset" + (i + 1) + "/record", 0 );
    }

    // 렉스퍼트용 파라메터들을 분리하여 셋팅한다.
    if (length(sParams) > 0) {
        var split_sParams = split(UnQuote(sParams), "^");
        for (var i = 0; i < split_sParams.length; i++) {
            var in_split = split(split_sParams[i], "=");
            // 셋팅
            oRex.SetParameterFieldValue(in_split[0], in_split[1]);
        }
    }

    var oPage = oRex.GetPage();
    gfn_SetPrinter(sPrinterNm, oPage); // 프린터 및 여백 설정

    //리포트 실행
    objRexpert.ShowParameterDialog = false;
    objRexpert.RunAsBlocking();
    
	// 출력물보안 미적용 리포트
	if (sReportUrl == "frmtraining0250R01License4700.rex" ||	// 소방안전관리자 수첩 HP 4700DN
		sReportUrl == "frmtraining0250R01License65050.rex" ||	// 소방안전관리자 수첩 HP E65050
		sReportUrl == "frmtraining0250R01License65050Lissue.rex" ||	// 소방안전관리자 수첩 HP E65050
		sReportUrl == "frmtraining0250R02License4700.rex" ||	// 위험물안전관리자 수첩 HP 4700DN
		sReportUrl == "frmtraining0250R02License65050.rex" ||	// 위험물안전관리자 수첩 HP E65050
		sReportUrl == "frmtraining0250R03License4700.rex" ||	// 위험물운송자 수첩 HP 4700DN
		sReportUrl == "frmtraining0250R03License65050.rex" ||	// 위험물운송자 수첩 HP E65050
		sReportUrl == "frmtraining0250R04License.rex" ||	// 생활안전강사 수첩
		sReportUrl == "frmtraining0250R05License.rex" ||	// 심폐소생술과정 수첩
		sReportUrl == "frmtraining0250R06License.rex" ||	// 교관양성과정 수첩
		sReportUrl == "frmtraining0250R07License4700.rex" ||	// 위험물운반자 수첩 HP 4700DN
		sReportUrl == "frmtraining0250R07License65050.rex" ||	// 위험물운반자 수첩 HP E65050
		sReportUrl == "frmtraining0280R01DiplomaWarrant.rex" ||		// 수료증
		sReportUrl == "frmtraining0280R03DiplomaWarrant.rex" ||		// 수료증
		sReportUrl == "frmtraining0280R05DiplomaWarrant.rex" ||		// 수료증
		sReportUrl == "frmtraining0280R06LifeSafetyDiplomaWarrant.rex" ||		// 수료증
		sReportUrl == "frmtraining0280R07LifeSafetyDiplomaWarrant.rex" ||		// 수료증
		sReportUrl == "frmtraining0280R08LifeSafetyDiplomaWarrant.rex" ||		// 수료증
		sReportUrl == "frmtraining0280R09LifeSafetyDiplomaWarrant.rex" ||		// 수료증
		sReportUrl == "frmtraining0280R04LaborMinistrySubmitDiplomaWarrant.rex" ||		// 수료증
		sReportUrl == "frmtraining0280R03EntryWarrant.rex" ||					// 참가증
		sReportUrl == "frmcust2040R01CustomerFeeGoji_NewDMITS.rex" ||		// 회비고지서 신양식
		sReportUrl == "frmcust2040R01CustomerFeeGoji_NewKoreaCS.rex" ||		// 회비고지서 신양식
		sReportUrl == "frmcust2040R01CustomerFeeGoji_NewBusan.rex" ||		// 회비고지서 신양식
		sReportUrl == "frmcust2040R01CustomerFeeGoji_NewSunDM.rex" ||		// 회비고지서 신양식
		sReportUrl == "frmcust2040R02CustomerFeeAllGoji.rex" ||				// 회비고지서 신양식
		sReportUrl == "frmcust2040R03CustomerFeeGojiNewImage.rex" ||		// 회비고지서 신양식
		sReportUrl == "frmcust2040R01CustomerFeeGoji_KoreaCS.rex" ||		// 회비고지서 구양식
		sReportUrl == "frmcust2040R01CustomerFeeGoji_SunDM.rex" ||			// 회비고지서 구양식
		sReportUrl == "frmCust0010R01EduPassPrint.rex" ||					// 실무교육 이수확인증
		sReportUrl == "frmtraining0020R02ReceiptReIssue.rex" ||				// 영수증
		sReportUrl == "frmtraining0020R02ReceiptReIssuePDF.rex" ||			// 영수증
		sReportUrl == "frmtraining0270R02PrizeAward.rex" ||					// 상장
		sReportUrl == "frmtraining0270R03PrizeAward.rex" ||					// 상장
		sReportUrl == "frmtraining0020R01LectureLicense.rex" ||				// 수강증					
		sReportUrl == "frmtraining0020R04TrainingJubsuResult.rex" ||		// 접수결과출력
		sReportUrl == "frmtraining0030R03TrainingJubsuListNameBoard.rex" ||		// 접수자명단(게시용)
		sReportUrl == "frmtraining0042R03TrainingAbsentListNameBoard.rex" ||	// 결강자명단출력(게시용)
		sReportUrl == "frmtraining0400R01ExamJubsu.rex" ||					// 응시원서
		sReportUrl == "frmtraining0400R02ExamJubsu.rex" ||					// 응시원서
		sReportUrl == "frmCust1025R01EduJubsuPrint.rex" ||					// 실무교육 신청확인증
		sReportUrl == "frmCust1026R03EduJubsuListNameBoard.rex" ) {			// 실무교육접수자명단(게시용)
    
		objRexpert.SpoolTitle = "[KEMS]PRINT";
	}

    //리포트 출력
    objRexpert.Print(bOpenPrintWindow, 1, -1, 1); // 처음부터 끝까지 1장 출력

    Destroy("objRexpert");

    ext_SetDefaultPrinter(gs_LocalDefaultPrinter); // 기본 프린터로 복귀

    return lb_IsPrinted;
}

function rxpRexpert_FinishPrint(obj) {
	lb_IsPrinted = true;
/*	
	if (lb_IsLcsYn) { // 수첩일 경우
        obj.SaveAs("jpeg", "C:\\LCS.jpg", 1, -1, 1);
    }
*/    
}

/*
 * 기능 : 렉스퍼트용 데이타셋을 만든다.
 * parameter : strDst - 데이터셋ID 문자열
 * return value : 렉스퍼트용 데이터셋
 */
function gfn_MakeRexDataXml(strDst) {
    var tmpXml = "";

    var dstObj = strDst.split("||");

    for (var i = 0; i < dstObj.Length(); i++) {
        if (i == 0) {
            tmpXml = replace(Object(dstObj[i]).SaveXML(), "</root>"," ");
        } else {
            var temp = "";

            temp = replace(Object(dstObj[i]).SaveXML(),"<?xml version=\"1.0\" encoding=\"euc-kr\"?>"," ");
            temp = replace(temp, "<root>", " ");
            temp = replace(temp, "</root>", " ");
            temp = replace(temp, "dataset", "dataset" + i);
            tmpXml += temp;
        }
    }
    tmpXml += "</root>";

    return tmpXml;
}

/*
 * 기능 : 렉스퍼트를 오픈한다.
 * parameter : sReportUrl - 렉스퍼트 경로
 *             dsNm - Dataset 명
 *             sParams - 렉스퍼트용 파라메터
 *             objRexpert - 렉스퍼트 오브젝트
 * return value : true/false 성공/실패
 */
function gfn_OpenReport(sReportUrl, dsNm, sParams, objRexpert,sSubReport, sTopMargin, sLeftMargin) {
    SetWaitCursor(true);

    var oDataSet;
    var oConnection;

    //리포트 객체 open
    var oRex = objRexpert.OpenReport(gfn_GetRootPath() + "REPORT\\" + sReportUrl);
    var oPage = oRex.GetPage();

    oPage.TopMargin = sTopMargin;
    oPage.LeftMargin = sLeftMargin;
    
    if (oRex == null) {
        //gfn_Alert("Rexpert File is not exist.");
        return false;
    }

    //리포트에 연결할 커넥션 생성
    oConnection = objRexpert.CreateConnection("connectionstring");

    //데이터 정보를 Load
    oConnection.addValue("load", dsNm);

    //데이터 정보를 리포트에 바인딩
    oDataSet = oRex.CreateDataSetXML(oConnection, "root/dataset/record", 0);

    //서브 리포트 객체 생성
    var oSubReport;
    var sReportGubun;
    if(sSubReport!="")
        sReportGubun = oRex.GetReportCount();
    else
        sReportGubun = oRex.GetReportCountChild();    

    for (var i = 0; i < sReportGubun; i++) {
        oSubReport = oRex.OpenReport(i);

		// 서브 렉스퍼트용 파라메터들을 분리하여 셋팅한다.
		if (length(sParams) > 0) {
			var split_sParams = split(UnQuote(sParams), "^");
			for (var i = 0; i < split_sParams.length; i++) {
				var in_split = split(split_sParams[i], "=");
				// 셋팅
				oSubReport.SetParameterFieldValue(in_split[0], in_split[1]);
			}
		}

        oSubReport.CreateDataSetXML(oConnection, "root/dataset" + (i + 1) + "/record", 0 );
    }
    
    // 레포트 출력 후 저장시 특정 이름을 사용하기 위해 변수를 만듬
  //  var sParam_TitleName = "";   // 레포트 세부 제목 
    var sParam_TitleNameFull = "";   // 레포트 전체 제목
    
    // 렉스퍼트용 파라메터들을 분리하여 셋팅한다.
    if (length(sParams) > 0) {
        var split_sParams = split(UnQuote(sParams), "^");
        for (var i = 0; i < split_sParams.length; i++) {
            var in_split = split(split_sParams[i], "=");
            // 셋팅
            
            // 레포트 출력 후 저장시 특정 이름을 사용하기 sParam_Title
            // 명으로 레포트 함수 호출 시 저장 명으로 사용 가능 
            if (in_split[0] == "sParam_Title"){
            
              //  sParam_TitleName = in_split[1]; // sParam_Title 사용시 값 저장   
                sParam_TitleNameFull = global.mnuLeft.cbxOpenForm.Text + in_split[1];;  // 레포트 전체 제목은 화면 이름 + 지정 세부 제목 
            } else if (in_split[0] == "sParam_TitleFull"){
            
              //  sParam_TitleName = in_split[1]; // sParam_Title 사용시 값 저장   
                sParam_TitleNameFull = in_split[1];  // 레포트 전체 제목은 화면 이름 + 지정 세부 제목 
            }else {   
                     
                oRex.SetParameterFieldValue(in_split[0], in_split[1]);
                sParam_TitleNameFull = global.mnuLeft.cbxOpenForm.Text; // 레포트 전체 제목은 화면 이름            
            }
            
        }
    }
   
	// 출력물보안 미적용 리포트
	if (sReportUrl == "frmtraining0250R01License4700.rex" ||	// 소방안전관리자 수첩 HP 4700DN
		sReportUrl == "frmtraining0250R01License65050.rex" ||	// 소방안전관리자 수첩 HP E65050 
		sReportUrl == "frmtraining0250R01License65050Lissue.rex" ||	// 소방안전관리자 수첩 HP E65050 
		sReportUrl == "frmtraining0250R02License4700.rex" ||	// 위험물안전관리자 수첩 HP 4700DN
		sReportUrl == "frmtraining0250R02License65050.rex" ||	// 위험물안전관리자 수첩 HP E65050
		sReportUrl == "frmtraining0250R03License4700.rex" ||	// 위험물운송자 수첩 HP 4700DN
		sReportUrl == "frmtraining0250R03License65050.rex" ||	// 위험물운송자 수첩 HP E65050
		sReportUrl == "frmtraining0250R04License.rex" ||	// 생활안전강사 수첩
		sReportUrl == "frmtraining0250R05License.rex" ||	// 심폐소생술과정 수첩
		sReportUrl == "frmtraining0250R06License.rex" ||	// 교관양성과정 수첩
		sReportUrl == "frmtraining0250R07License4700.rex" ||	// 위험물운반자 수첩 HP 4700DN
		sReportUrl == "frmtraining0250R07License65050.rex" ||	// 위험물운반자 수첩 HP E65050
		sReportUrl == "frmtraining0280R01DiplomaWarrant.rex" ||		// 수료증
		sReportUrl == "frmtraining0280R03DiplomaWarrant.rex" ||		// 수료증
		sReportUrl == "frmtraining0280R05DiplomaWarrant.rex" ||		// 수료증
		sReportUrl == "frmtraining0280R06LifeSafetyDiplomaWarrant.rex" ||		// 수료증
		sReportUrl == "frmtraining0280R07LifeSafetyDiplomaWarrant.rex" ||		// 수료증
		sReportUrl == "frmtraining0280R08LifeSafetyDiplomaWarrant.rex" ||		// 수료증
		sReportUrl == "frmtraining0280R09LifeSafetyDiplomaWarrant.rex" ||		// 수료증
		sReportUrl == "frmtraining0280R04LaborMinistrySubmitDiplomaWarrant.rex" ||		// 수료증
		sReportUrl == "frmtraining0280R03EntryWarrant.rex" ||					// 참가증
		sReportUrl == "frmcust2040R01CustomerFeeGoji_NewDMITS.rex" ||		// 회비고지서 신양식
		sReportUrl == "frmcust2040R01CustomerFeeGoji_NewKoreaCS.rex" ||		// 회비고지서 신양식
		sReportUrl == "frmcust2040R01CustomerFeeGoji_NewBusan.rex" ||		// 회비고지서 신양식
		sReportUrl == "frmcust2040R01CustomerFeeGoji_NewSunDM.rex" ||		// 회비고지서 신양식
		sReportUrl == "frmcust2040R02CustomerFeeAllGoji.rex" ||				// 회비고지서 신양식
		sReportUrl == "frmcust2040R03CustomerFeeGojiNewImage.rex" ||		// 회비고지서 신양식
		sReportUrl == "frmcust2040R01CustomerFeeGoji_KoreaCS.rex" ||		// 회비고지서 구양식
		sReportUrl == "frmcust2040R01CustomerFeeGoji_SunDM.rex" ||			// 회비고지서 구양식
		sReportUrl == "frmCust0010R01EduPassPrint.rex" ||					// 실무교육 이수확인증
		sReportUrl == "frmCust1107R01EduDataImage.rex" ||					// 실무교육 안내문
		sReportUrl == "frmtraining0020R02ReceiptReIssue.rex" ||				// 영수증
		sReportUrl == "frmtraining0020R02ReceiptReIssuePDF.rex" ||			// 영수증
		sReportUrl == "frmtraining0270R02PrizeAward.rex" ||					// 상장
		sReportUrl == "frmtraining0270R03PrizeAward.rex" ||					// 상장
		sReportUrl == "frmtraining0020R01LectureLicense.rex" ||				// 수강증
		sReportUrl == "frmtraining0020R04TrainingJubsuResult.rex" ||		// 접수결과출력
		sReportUrl == "frmtraining0060R03TrainingApplicationBatch.rex" ||		// 강습원서출력
		sReportUrl == "frmtraining0030R03TrainingJubsuListNameBoard.rex" ||		// 접수자명단(게시용)
		sReportUrl == "frmtraining0042R03TrainingAbsentListNameBoard.rex" ||	// 결강자명단출력(게시용)
		sReportUrl == "frmtraining0400R01ExamJubsu.rex" ||					// 응시원서
		sReportUrl == "frmtraining0400R02ExamJubsu.rex" ||					// 응시원서
		sReportUrl == "frmCust1025R01EduJubsuPrint.rex" ||					// 실무교육 신청확인증
		sReportUrl == "frmCust1026R03EduJubsuListNameBoard.rex" ) {			// 실무교육접수자명단(게시용)
		objRexpert.SpoolTitle = "[KEMS]PRINT";
	}
   

    //툴바의 버튼 설정
    objRexpert.ShowToolBarButton(0, false); //열기 버튼
	if (sReportUrl == "frmCust0010R01EduPassPrint.rex" ||					// 실무교육 이수확인증
		sReportUrl == "frmCust1025R01EduJubsuPrint.rex" ||					// 실무교육 신청확인증
		sReportUrl == "frmCust1107R01EduDataImage.rex" ||					// 실무교육 안내문
		sReportUrl == "frmcust2040R01CustomerFeeGoji_NewDMITS.rex" ||		// 회비고지서 신양식
		sReportUrl == "frmcust2040R01CustomerFeeGoji_NewKoreaCS.rex" ||		// 회비고지서 신양식
		sReportUrl == "frmcust2040R01CustomerFeeGoji_NewBusan.rex" ||		// 회비고지서 신양식
		sReportUrl == "frmcust2040R01CustomerFeeGoji_NewSunDM.rex" ||		// 회비고지서 신양식
		sReportUrl == "frmcust2040R02CustomerFeeAllGoji.rex" ||				// 회비고지서 신양식
		sReportUrl == "frmcust2040R03CustomerFeeGojiNewImage.rex" ||		// 회비고지서 신양식
		sReportUrl == "frmcust2040R01CustomerFeeGoji_KoreaCS.rex" ||		// 회비고지서 구양식
		sReportUrl == "frmcust2040R01CustomerFeeGoji_SunDM.rex" ||			// 회비고지서 구양식
		sReportUrl == "frmcust2018R01VirtualAccountNotice.rex" ||			// 회비 납부 안내
		sReportUrl == "frmcust2018R01VirtualAccountNotice2.rex" ||			// 회비 납부 안내
		sReportUrl == "frmcust2018R02VirtualAccountNotice.rex" ||				// 교육수수료 납부 안내
		sReportUrl == "frmtraining0020R02ReceiptReIssuePDF.rex" ||			// 영수증
		sReportUrl == "frmtraining0020R04TrainingJubsuResult.rex" ||		// 접수결과출력
		sReportUrl == "frmtraining0060R03TrainingApplicationBatch.rex" ||		// 강습원서출력
		sReportUrl == "frmtraining0280R01DiplomaWarrant.rex" ||		// 수료증
		sReportUrl == "frmtraining0280R03EntryWarrant.rex" ||					// 참가증
		sReportUrl == "frmtraining0400R01ExamJubsu.rex" ||					// 응시원서
		sReportUrl == "frmtraining0400R02ExamJubsu.rex")					// 응시원서

	{
	    objRexpert.ShowToolBarButton(1, true); //저장 버튼
	} else {
		objRexpert.ShowToolBarButton(1, false); //저장 버튼
	} 
    objRexpert.ShowToolBarButton(3, false); //새로고침 버튼
    objRexpert.ShowToolBarButton(4, false); //중지 버튼
    objRexpert.ShowToolBarButton(14, false); //등록정보 버튼
    objRexpert.ShowToolBarButton(15, false); //목차 버튼
    objRexpert.Zoom("pagewidth"); // 화면보기 맞추기 param : "wholepage"-전체화면보기, "pagewidth"-폭에 맞추기

    //레포트 저장시 저장경로 및 '(메뉴명) + (지정명칭) _ 출력날짜'  이름으로 저장됨  
    objRexpert.SaveAsOption("pdf", "filename=C:\\kfsa\\kems\\report\\" + ""+ sParam_TitleNameFull + "_" + Today() + ".pdf"); 
	objRexpert.SaveAsOption("tif", "filename=C:\\kfsa\\kems\\report\\" + ""+ sParam_TitleNameFull + "_" + Today() + ".tif");
    objRexpert.SaveAsOption("xls", "SheetOption=2;ErrorRange=20;filename=C:\\kfsa\\kems\\report\\" + ""+ sParam_TitleNameFull + "_" + Today() + ".xls");
    objRexpert.SaveAsOption("hml", "filename=C:\\kfsa\\kems\\report\\" + ""+ sParam_TitleNameFull + "_" + Today() + ".hml");
    objRexpert.SaveAsOption("hwp", "filename=C:\\kfsa\\kems\\report\\" + ""+ sParam_TitleNameFull + "_" + Today() + ".hwp");
    objRexpert.SaveAsOption("rtf", "filename=C:\\kfsa\\kems\\report\\" + ""+ sParam_TitleNameFull + "_" + Today() + ".rtf");
    objRexpert.SaveAsOption("html", "filename=C:\\kfsa\\kems\\report\\" + ""+ sParam_TitleNameFull + "_" + Today() + ".html");
    objRexpert.SaveAsOption("bmp", "filename=C:\\kfsa\\kems\\report\\" + ""+ sParam_TitleNameFull + "_" + Today() + ".bmp");
    objRexpert.SaveAsOption("txt", "filename=C:\\kfsa\\kems\\report\\" + ""+ sParam_TitleNameFull + "_" + Today() + ".txt");
    objRexpert.SaveAsOption("xml", "filename=C:\\kfsa\\kems\\report\\" + ""+ sParam_TitleNameFull + "_" + Today() + ".xml;");
    objRexpert.SaveAsOption("rtf", "filename=C:\\kfsa\\kems\\report\\" + ""+ sParam_TitleNameFull + "_" + Today() + ".rtf");
    objRexpert.SaveAsOption("jpeg", "filename=C:\\kfsa\\kems\\report\\" + ""+ sParam_TitleNameFull + "_" + Today() + ".jpeg");

    //레포트 저장 다이얼로그에서 저장형식 표기 순서
    objRexpert.SaveAsFilter = "pdf;xls;hml;hwp;rtf;html;bmp;txt;xml;jpeg";

    SetWaitCursor(false);

    //리포트 실행
    objRexpert.Run();

    return true;
}

function gfn_OpenSQLReport(sReportUrl,pRptDB,pDataType,pRptParams,objRexpert,sSubReport,sTopMargin,sLeftMargin) {

	SetWaitCursor(true);

	var strRptParam;
	var arrRptParam;
	var oReport;
	var oSubReport;
	var oConnection;
	var oDataSet;
	var oSQL;

	var pRptDB     = pRptDB;
	var pDataType  = pDataType;
	var pRptParams = pRptParams;
	
	//파라미터 단위 string 값을 배열로 변환
	strRptParam = split(pRptParams,"^","webstyle");
	//objRexpert.EnableHotKey("all=0");
	//리포트 객체 open
    Create("Rexpert", "objRexpert", 'left="10" top="10" width="0" height="0"'); // 렉스퍼트 오브젝트를 생성한다.
    //objRexpert.FinishPrint="rxpRexpert_FinishPrint";
	oReport = objRexpert.OpenReport(gfn_GetRootPath() + "REPORT\\" + sReportUrl);
	var oPage = oReport.GetPage();
	
    oPage.TopMargin = sTopMargin;
    oPage.LeftMargin = sLeftMargin;
	
	objRexpert.ShowParameterDialog = false;

	if(oReport == null)
	{
		alert("can't open report file");
		return;
	}
	
	if (strRptParam.length >= 1)
	{
		for (i = 0; i < strRptParam.length; i++)
		{	
			arrRptParam = split(strRptParam[i],"*","webstyle");
			oReport.SetParameterFieldValue(arrRptParam[0], arrRptParam[1]);
		}
	}
	
	oSQL = oReport.GetSQLControl();
	
	if (pDataType=="XML" || pDataType=="")
	{
		oConnection = objRexpert.CreateConnection("http.post");
	}
	else if (pDataType=="CSV")
	{
		oConnection = objRexpert.CreateConnection("http.csv");
	}

	oConnection.AddParameter("sql", oSQL.GetSQL());
	
	for (k = 1; k <= oReport.GetReportCount(); k++)
	{
		var arrSubRptParam;
		
		oSubReport = oReport.OpenReport(k - 1);
		
		if (oSubReport == null)
		{
		   alert("can't open report file");
		   return;
		}

		if (strRptParam.length >= 1)
		{
			for (i = 0; i < strRptParam.length; i++)
			{	
				arrRptParam = split(strRptParam[i],"*","webstyle");
				oSubReport.SetParameterFieldValue(arrRptParam[0], arrRptParam[1]);
			}
		}
			
		oSQL = oSubReport.GetSQLControl();
		oConnection.AddParameter("sql", oSQL.GetSQL());
	}
	
	oConnection.AddParameter("datatype", pDataType);
	oConnection.AddParameter("userservice", pRptDB);
	
	//oConnection.Path = "http://172.19.1.17:7001/kems/RexServer/RexService.jsp";
	oConnection.Path = "https://intrawork.kfsi.or.kr/kems/RexServer/RexService.jsp";
	
	oConnection.Send();

	if ((pDataType=="XML" || pDataType==""))
	{
		oDataSet = oReport.CreateDataSetXML(oConnection, "root/main/rpt1/rexdataset/rexrow", 0);
	}
	else if (pDataType=="CSV")
	{
		oDataSet = oReport.CreateDataSetCSV(oConnection, 0, "|@|", "", "|*|", "");
	}
		
	for (i = 1; i <= oReport.GetReportCount(); i++)
	{		
		oSubReport = oReport.OpenReport(i - 1);
		
		if (pDataType=="XML" || pDataType=="")
		{
			oDataSet = oSubReport.CreateDataSetXML(oConnection, "root/main/rpt" + (i + 1) + "/rexdataset/rexrow", 0);
		}
		else if (pDataType=="CSV")
		{
			oDataSet = oSubReport.CreateDataSetCSV(oConnection, 1, "|@|", "", "|*|", "");		
		}
		
	}
	
	SetWaitCursor(false);

	objRexpert.Run();
	
	return true;
}