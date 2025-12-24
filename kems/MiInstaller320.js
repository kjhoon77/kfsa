function checkOS()
{
	var strOS = "XP";
	
	if( navigator.appVersion.indexOf("Windows NT 6.0") != -1) 
		strOS = "VISTA";
	else if( navigator.appVersion.indexOf("Windows 98") != -1) 
		strOS = "98";
	else if( navigator.appVersion.indexOf("Windows NT 5.0") != -1) 
		strOS = "2000";
	else if( navigator.appVersion.indexOf("Windows NT 5.2") != -1) 
		strOS = "XP";		
  	else if( navigator.appVersion.indexOf("Windows NT 5.1") != -1) 
  		strOS = "XP";
  	return strOS;	
}

function Is98()
{
  var bChk = false;
  if( navigator.appVersion.indexOf("Windows 98") != -1) 
  	bChk = true;
  return bChk;
}

function Is2000()
{
  var bChk = false;
  if( navigator.appVersion.indexOf("Windows NT 5.0") != -1) 
  	bChk = true;
  return bChk;
}

function Is2003()
{
  var bChk = false;
  if( navigator.appVersion.indexOf("Windows NT 5.2") != -1) 
  	bChk = true;
  return bChk;
}

function IsXp()
{
  var bChk = false;
  if( navigator.appVersion.indexOf("Windows NT 5.1") != -1) 
  	bChk = true;
  return bChk;
}

function IsAfterVista()
{
  var bChk = false;
  if( navigator.appVersion.indexOf("Windows NT 6.0") != -1) 
  	bChk = true;
  return bChk;
}


function CreateMiInstlr(strID, Device,Version,Key)
{
	document.write("<object id=\""+strID+"\" classid=\"clsid:1A000B1F-B285-4fbf-B3CD-B50845003EBA\" width=\"0\" height=\"0\" CodeBase=\"./install/MiUpdater320.cab#VERSION=2007,3,27,1\" SHOWASTEXT>" +
		"<PARAM NAME=\"DeviceType\" VALUE=\""+Device+"\" >" +
		"<PARAM NAME=\"Version\" VALUE=\""+Version+"\" >" +
		"<PARAM NAME=\"key\" VALUE=\""+Key+"\" >" +
		"</object>" );
}

function ObjectMiInstlr(strID, Device,Version,Key)
{
	document.write("<object id=\""+strID+"\" classid=\"clsid:1A000B1F-B285-4fbf-B3CD-B50845003EBA\" width=\"0\" height=\"0\" SHOWASTEXT>" +
		"<PARAM NAME=\"DeviceType\" VALUE=\""+Device+"\" >" +
		"<PARAM NAME=\"Version\" VALUE=\""+Version+"\" >" +
		"<PARAM NAME=\"key\" VALUE=\""+Key+"\" >" +
		"</object>" );
}

function callMiPlatform(strID) {						
	document.write("<OBJECT id=\""+strID+"\" classid=\"CLSID:761C6511-03CE-4B78-ACD8-645CEF3CB714\" width=\"100%\" height=\"100%\" </OBJECT>" );
}