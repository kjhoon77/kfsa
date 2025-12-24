<%@page import="com.clipsoft.clipreport.oof.OOFFile"%>
<%@page import="com.clipsoft.clipreport.oof.OOFDocument"%>
<%@page import="java.io.File"%>
<%@page import="com.clipsoft.clipreport.server.service.ReportUtil"%>
<%@page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<%
	String userAgent = request.getHeader("User-Agent");

	//String mcyear = request.getParameter("mcyear")==null?"":request.getParameter("mcyear");
	//String mcseq = request.getParameter("mcseq")==null?"":request.getParameter("mcseq");
	String localPath = request.getParameter("localPath")==null?"":request.getParameter("localPath");


	OOFDocument oof = OOFDocument.newOOF();

	//리포트 파일
	OOFFile file = oof.addFile("crf.root", "%root%/../PRT/ACCNT/accnt_test.crf");

	//DB 커넥션
	oof.addConnectionData("*","kfsadb1");

	//파라미터
	//oof.addField("mcyear", mcyear);
	//oof.addField("mcseq", mcseq);
%>
<%@include file="/kems/src/kems/JSP/Property.jsp"%>
<%
//세션을 활용하여 리포트키들을 관리하지 않는 옵션
//request.getSession().setAttribute("ClipReport-SessionList-Allow", false);
String resultKey =  ReportUtil.createReport(request, oof, "false", "false", request.getRemoteAddr(), propertyPath);
//oof 문서가 xml 일 경우 (oof.toString())
//String resultKey =  ReportUtil.createReport(request, oof.toString(), "false", "false", "localhost", propertyPath);
%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<title>회계종합관리시스템</title>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<link rel="stylesheet" type="text/css" href="/ClipReport4/common/css/clipreport.css">
<link rel="stylesheet" type="text/css" href="/ClipReport4/common/css/UserConfig.css">
<link rel="stylesheet" type="text/css" href="/ClipReport4/common/css/font.css">
<script type='text/javascript' src='/ClipReport4/common/js/jquery-1.11.1.js'></script>
<script type='text/javascript' src='/ClipReport4/common/js/clipreport.js'></script>
<script type='text/javascript' src='/ClipReport4/common/js/UserConfig.js'></script>
<script type='text/javascript'>
	var urlPath = document.location.protocol + "//" + document.location.host + '<%=localPath%>';
		
	function html2xml(divPath) {	
		var reportkey = "<%=resultKey%>";
		var report = createImportJSPReport(urlPath + "/ClipReport4/Clip.jsp", reportkey, document.getElementById(divPath));

		// 슬라이드 모션 설정
		//report.setSlidePage(true);
		// pdf 제외한 저장 옵션 삭제
		report.setSaveOptionVisible("excel", false);
		report.setSaveOptionVisible("excelx", false);
		report.setSaveOptionVisible("hwp", false);
		report.setSaveOptionVisible("rtf", false);
		report.setSaveOptionVisible("ppt", false);
		report.setSaveOptionVisible("html", false);
		report.setSaveOptionVisible("html5", false);
		report.setSaveOptionVisible("hancell", false);
		report.setSaveOptionVisible("doc", false);
		report.setSaveOptionVisible("jpg", false);
		report.setSaveOptionVisible("txt", false);
		// 파일명 지정
		report.setSaveFileName("소방안전교육 이수증명서");
		// 화면 비율 선택박스에서 PageWidth, WholePage 내용을 변경하는 함수
		report.setRatioComboName("폭맞춤","높이맞춤");
		// 바로 인쇄
		report.setStartPrintButtonEvent(function(){
			report.printView();   // IE가 아닐 경우 PDF인쇄
			return false;
		});
		// 전체페이지 설정
		report.setDefaultRatio("PageWidth");
		report.setDefaultSaveRTFOption(true, false, 4, -0.5, 0, true, false, false, 1);
		report.view();
	}
</script>
</head>
<body onload="html2xml('targetDiv1')">
<div id='targetDiv1' style='position:absolute;top:5px;left:5px;right:5px;bottom:5px;'></div>
</body>
</html>
