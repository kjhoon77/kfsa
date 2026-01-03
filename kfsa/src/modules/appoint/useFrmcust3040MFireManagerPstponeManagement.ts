// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_oStatus, Ids_oJibu, Ids_oMethod, Ids_oDateGubun, Ids_ioMaster, Ids_oOwnerGubun, Ids_oFireCd, Ids_oJubsuList, Ids_oEtcCourse, Ids_oTEGubun, Ids_oMasterResult, Ids_oResn, Ids_oFileList, Ids_oFileUpload, Ids_ioMaster_Test } from './Frmcust3040MFireManagerPstponeManagementData';

export const useFrmcust3040MFireManagerPstponeManagement = () => {
    const [ds_oStatus, setds_oStatus] = useState<Ids_oStatus[]>([]);
    const [ds_oJibu, setds_oJibu] = useState<Ids_oJibu[]>([]);
    const [ds_oMethod, setds_oMethod] = useState<Ids_oMethod[]>([]);
    const [ds_oDateGubun, setds_oDateGubun] = useState<Ids_oDateGubun[]>([]);
    const [ds_ioMaster, setds_ioMaster] = useState<Ids_ioMaster[]>([]);
    const [ds_oOwnerGubun, setds_oOwnerGubun] = useState<Ids_oOwnerGubun[]>([]);
    const [ds_oFireCd, setds_oFireCd] = useState<Ids_oFireCd[]>([]);
    const [ds_oJubsuList, setds_oJubsuList] = useState<Ids_oJubsuList[]>([]);
    const [ds_oEtcCourse, setds_oEtcCourse] = useState<Ids_oEtcCourse[]>([]);
    const [ds_oTEGubun, setds_oTEGubun] = useState<Ids_oTEGubun[]>([]);
    const [ds_oMasterResult, setds_oMasterResult] = useState<Ids_oMasterResult[]>([]);
    const [ds_oResn, setds_oResn] = useState<Ids_oResn[]>([]);
    const [ds_oFileList, setds_oFileList] = useState<Ids_oFileList[]>([]);
    const [ds_oFileUpload, setds_oFileUpload] = useState<Ids_oFileUpload[]>([]);
    const [ds_ioMaster_Test, setds_ioMaster_Test] = useState<Ids_ioMaster_Test[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [rawVisible_ta_xml, setRawVisible_ta_xml] = useState(true);
    const [rawVisible_tx_xmlTest, setRawVisible_tx_xmlTest] = useState(false);
    const [rawVisible_Shape2, setRawVisible_Shape2] = useState(true);
    const [rawVisible_shpGubunBox1, setRawVisible_shpGubunBox1] = useState(true);
    const [rawVisible_divWorkFormTitle, setRawVisible_divWorkFormTitle] = useState(true);
    const [rawVisible_lbOrderChange, setRawVisible_lbOrderChange] = useState(true);
    const [rawVisible_cbxJibu, setRawVisible_cbxJibu] = useState(true);
    const [rawVisible_Static0, setRawVisible_Static0] = useState(true);
    const [rawVisible_cbxKS, setRawVisible_cbxKS] = useState(true);
    const [rawVisible_Static2, setRawVisible_Static2] = useState(true);
    const [rawVisible_cbStatus, setRawVisible_cbStatus] = useState(true);
    const [rawVisible_Static3, setRawVisible_Static3] = useState(true);
    const [rawVisible_cbDateGubun, setRawVisible_cbDateGubun] = useState(true);
    const [rawVisible_btnSearch, setRawVisible_btnSearch] = useState(true);
    const [rawVisible_btnToExcel, setRawVisible_btnToExcel] = useState(true);
    const [rawVisible_Shape0, setRawVisible_Shape0] = useState(true);
    const [rawVisible_Static4, setRawVisible_Static4] = useState(true);
    const [rawVisible_Static5, setRawVisible_Static5] = useState(true);
    const [rawVisible_Static6, setRawVisible_Static6] = useState(true);
    const [rawVisible_cbxAjstatus, setRawVisible_cbxAjstatus] = useState(true);
    const [rawVisible_Static7, setRawVisible_Static7] = useState(true);
    const [rawVisible_cbxAjmothod, setRawVisible_cbxAjmothod] = useState(true);
    const [rawVisible_Static8, setRawVisible_Static8] = useState(true);
    const [rawVisible_edAJMGNO, setRawVisible_edAJMGNO] = useState(true);
    const [rawVisible_edBILD_NM, setRawVisible_edBILD_NM] = useState(true);
    const [rawVisible_calAjdate, setRawVisible_calAjdate] = useState(true);
    const [rawVisible_btnNewJubsu, setRawVisible_btnNewJubsu] = useState(true);
    const [rawVisible_btnJubsuStart, setRawVisible_btnJubsuStart] = useState(true);
    const [rawVisible_btnJubsuEnd, setRawVisible_btnJubsuEnd] = useState(true);
    const [rawVisible_btnJubsuCancle, setRawVisible_btnJubsuCancle] = useState(true);
    const [rawVisible_btnSave, setRawVisible_btnSave] = useState(true);
    const [rawVisible_edBILD_SN, setRawVisible_edBILD_SN] = useState(false);
    const [rawVisible_Static9, setRawVisible_Static9] = useState(true);
    const [rawVisible_Static11, setRawVisible_Static11] = useState(true);
    const [rawVisible_Static12, setRawVisible_Static12] = useState(true);
    const [rawVisible_cbxPartGubun, setRawVisible_cbxPartGubun] = useState(true);
    const [rawVisible_Static14, setRawVisible_Static14] = useState(true);
    const [rawVisible_Static26, setRawVisible_Static26] = useState(true);
    const [rawVisible_edPartNM, setRawVisible_edPartNM] = useState(true);
    const [rawVisible_stPARTCPNT_SN, setRawVisible_stPARTCPNT_SN] = useState(false);
    const [rawVisible_edPARTCPNT_SN, setRawVisible_edPARTCPNT_SN] = useState(false);
    const [rawVisible_Shape5, setRawVisible_Shape5] = useState(true);
    const [rawVisible_lbAppointNm, setRawVisible_lbAppointNm] = useState(true);
    const [rawVisible_edI_NM, setRawVisible_edI_NM] = useState(true);
    const [rawVisible_Static13, setRawVisible_Static13] = useState(true);
    const [rawVisible_lbEMail, setRawVisible_lbEMail] = useState(true);
    const [rawVisible_lbDelegateAddr, setRawVisible_lbDelegateAddr] = useState(true);
    const [rawVisible_medBookZipCode, setRawVisible_medBookZipCode] = useState(true);
    const [rawVisible_btnSearchZipCode, setRawVisible_btnSearchZipCode] = useState(true);
    const [rawVisible_edBookAddr1, setRawVisible_edBookAddr1] = useState(true);
    const [rawVisible_edBookAddr2, setRawVisible_edBookAddr2] = useState(true);
    const [rawVisible_lbJibu, setRawVisible_lbJibu] = useState(true);
    const [rawVisible_cbJibu, setRawVisible_cbJibu] = useState(true);
    const [rawVisible_Static15, setRawVisible_Static15] = useState(true);
    const [rawVisible_rdETC_MATTER, setRawVisible_rdETC_MATTER] = useState(true);
    const [rawVisible_edEmail, setRawVisible_edEmail] = useState(true);
    const [rawVisible_Shape3, setRawVisible_Shape3] = useState(true);
    const [rawVisible_Shape1, setRawVisible_Shape1] = useState(true);
    const [rawVisible_Static16, setRawVisible_Static16] = useState(true);
    const [rawVisible_edEDC_RCEPT_DE_8, setRawVisible_edEDC_RCEPT_DE_8] = useState(true);
    const [rawVisible_Static17, setRawVisible_Static17] = useState(true);
    const [rawVisible_edEDC_RCEPT_NO, setRawVisible_edEDC_RCEPT_NO] = useState(true);
    const [rawVisible_Static18, setRawVisible_Static18] = useState(true);
    const [rawVisible_edTNCRS_PD_BEGIN_DE_8, setRawVisible_edTNCRS_PD_BEGIN_DE_8] = useState(true);
    const [rawVisible_edTNCRS_TIME_END_DE_8, setRawVisible_edTNCRS_TIME_END_DE_8] = useState(true);
    const [rawVisible_Static63, setRawVisible_Static63] = useState(true);
    const [rawVisible_Static19, setRawVisible_Static19] = useState(true);
    const [rawVisible_edAPYEXM_RCEPT_DE_8, setRawVisible_edAPYEXM_RCEPT_DE_8] = useState(true);
    const [rawVisible_Static20, setRawVisible_Static20] = useState(true);
    const [rawVisible_edAPYEXM_RCEPT_NO, setRawVisible_edAPYEXM_RCEPT_NO] = useState(true);
    const [rawVisible_Static21, setRawVisible_Static21] = useState(true);
    const [rawVisible_edAPYEXM_DE_8, setRawVisible_edAPYEXM_DE_8] = useState(true);
    const [rawVisible_lbLcsInfo, setRawVisible_lbLcsInfo] = useState(true);
    const [rawVisible_Static23, setRawVisible_Static23] = useState(true);
    const [rawVisible_stI_PERSONKEY, setRawVisible_stI_PERSONKEY] = useState(false);
    const [rawVisible_edI_PERSONKEY, setRawVisible_edI_PERSONKEY] = useState(false);
    const [rawVisible_stQUALFUSER_SN, setRawVisible_stQUALFUSER_SN] = useState(false);
    const [rawVisible_edQUALFUSER_SN, setRawVisible_edQUALFUSER_SN] = useState(false);
    const [rawVisible_btnCheck, setRawVisible_btnCheck] = useState(true);
    const [rawVisible_stBILD_SN, setRawVisible_stBILD_SN] = useState(false);
    const [rawVisible_gdList, setRawVisible_gdList] = useState(true);
    const [rawVisible_Static38, setRawVisible_Static38] = useState(true);
    const [rawVisible_edI_IHIDNUM, setRawVisible_edI_IHIDNUM] = useState(true);
    const [rawVisible_Static27, setRawVisible_Static27] = useState(true);
    const [rawVisible_cbTEgubun, setRawVisible_cbTEgubun] = useState(true);
    const [rawVisible_Static10, setRawVisible_Static10] = useState(true);
    const [rawVisible_edI_HPNO, setRawVisible_edI_HPNO] = useState(true);
    const [rawVisible_Static1, setRawVisible_Static1] = useState(true);
    const [rawVisible_rdAPNT_PSTPONE_CODE, setRawVisible_rdAPNT_PSTPONE_CODE] = useState(true);
    const [rawVisible_edTLPHON_NO, setRawVisible_edTLPHON_NO] = useState(true);
    const [rawVisible_btnSaveXml, setRawVisible_btnSaveXml] = useState(false);
    const [rawVisible_calIHIDNUM, setRawVisible_calIHIDNUM] = useState(true);
    const [rawVisible_Static22, setRawVisible_Static22] = useState(true);
    const [rawVisible_Edit0, setRawVisible_Edit0] = useState(true);
    const [rawVisible_Static24, setRawVisible_Static24] = useState(true);
    const [rawVisible_MaskEdit0, setRawVisible_MaskEdit0] = useState(true);
    const [rawVisible_Static25, setRawVisible_Static25] = useState(true);
    const [rawVisible_Combo0, setRawVisible_Combo0] = useState(true);
    const [rawVisible_btnDownload, setRawVisible_btnDownload] = useState(true);
    const [rawVisible_btnUpload, setRawVisible_btnUpload] = useState(false);
    const [rawVisible_gdFile, setRawVisible_gdFile] = useState(true);
    const [rawVisible_Static28, setRawVisible_Static28] = useState(true);
    const [rawVisible_fiAttachFile, setRawVisible_fiAttachFile] = useState(true);
    const [rawVisible_fdAttachFile, setRawVisible_fdAttachFile] = useState(true);
    const [rawVisible_hfAttachFile, setRawVisible_hfAttachFile] = useState(true);
    const [rawVisible_edAPNT_PSTPONE_RESN, setRawVisible_edAPNT_PSTPONE_RESN] = useState(true);
    const [rawVisible_Button1, setRawVisible_Button1] = useState(false);
    const [rawVisible_Button2, setRawVisible_Button2] = useState(false);
    const isVisible_ta_xml = rawVisible_ta_xml;
    const setIsVisible_ta_xml = setRawVisible_ta_xml;
    const isVisible_tx_xmlTest = rawVisible_tx_xmlTest && rawVisible_ta_xml;
    const setIsVisible_tx_xmlTest = setRawVisible_tx_xmlTest;
    const isVisible_Shape2 = rawVisible_Shape2;
    const setIsVisible_Shape2 = setRawVisible_Shape2;
    const isVisible_shpGubunBox1 = rawVisible_shpGubunBox1;
    const setIsVisible_shpGubunBox1 = setRawVisible_shpGubunBox1;
    const isVisible_divWorkFormTitle = rawVisible_divWorkFormTitle;
    const setIsVisible_divWorkFormTitle = setRawVisible_divWorkFormTitle;
    const isVisible_lbOrderChange = rawVisible_lbOrderChange && rawVisible_shpGubunBox1;
    const setIsVisible_lbOrderChange = setRawVisible_lbOrderChange;
    const isVisible_cbxJibu = rawVisible_cbxJibu && rawVisible_shpGubunBox1;
    const setIsVisible_cbxJibu = setRawVisible_cbxJibu;
    const isVisible_Static0 = rawVisible_Static0 && rawVisible_shpGubunBox1;
    const setIsVisible_Static0 = setRawVisible_Static0;
    const isVisible_cbxKS = rawVisible_cbxKS && rawVisible_shpGubunBox1;
    const setIsVisible_cbxKS = setRawVisible_cbxKS;
    const isVisible_Static2 = rawVisible_Static2 && rawVisible_shpGubunBox1;
    const setIsVisible_Static2 = setRawVisible_Static2;
    const isVisible_cbStatus = rawVisible_cbStatus && rawVisible_shpGubunBox1;
    const setIsVisible_cbStatus = setRawVisible_cbStatus;
    const isVisible_Static3 = rawVisible_Static3 && rawVisible_shpGubunBox1;
    const setIsVisible_Static3 = setRawVisible_Static3;
    const isVisible_cbDateGubun = rawVisible_cbDateGubun && rawVisible_shpGubunBox1;
    const setIsVisible_cbDateGubun = setRawVisible_cbDateGubun;
    const isVisible_btnSearch = rawVisible_btnSearch;
    const setIsVisible_btnSearch = setRawVisible_btnSearch;
    const isVisible_btnToExcel = rawVisible_btnToExcel;
    const setIsVisible_btnToExcel = setRawVisible_btnToExcel;
    const isVisible_Shape0 = rawVisible_Shape0;
    const setIsVisible_Shape0 = setRawVisible_Shape0;
    const isVisible_Static4 = rawVisible_Static4 && rawVisible_Shape0;
    const setIsVisible_Static4 = setRawVisible_Static4;
    const isVisible_Static5 = rawVisible_Static5 && rawVisible_Shape0;
    const setIsVisible_Static5 = setRawVisible_Static5;
    const isVisible_Static6 = rawVisible_Static6 && rawVisible_Shape0;
    const setIsVisible_Static6 = setRawVisible_Static6;
    const isVisible_cbxAjstatus = rawVisible_cbxAjstatus && rawVisible_Shape0;
    const setIsVisible_cbxAjstatus = setRawVisible_cbxAjstatus;
    const isVisible_Static7 = rawVisible_Static7 && rawVisible_Shape0;
    const setIsVisible_Static7 = setRawVisible_Static7;
    const isVisible_cbxAjmothod = rawVisible_cbxAjmothod && rawVisible_Shape0;
    const setIsVisible_cbxAjmothod = setRawVisible_cbxAjmothod;
    const isVisible_Static8 = rawVisible_Static8 && rawVisible_Shape0;
    const setIsVisible_Static8 = setRawVisible_Static8;
    const isVisible_edAJMGNO = rawVisible_edAJMGNO && rawVisible_Shape0;
    const setIsVisible_edAJMGNO = setRawVisible_edAJMGNO;
    const isVisible_edBILD_NM = rawVisible_edBILD_NM && rawVisible_Shape0;
    const setIsVisible_edBILD_NM = setRawVisible_edBILD_NM;
    const isVisible_calAjdate = rawVisible_calAjdate && rawVisible_Shape0;
    const setIsVisible_calAjdate = setRawVisible_calAjdate;
    const isVisible_btnNewJubsu = rawVisible_btnNewJubsu;
    const setIsVisible_btnNewJubsu = setRawVisible_btnNewJubsu;
    const isVisible_btnJubsuStart = rawVisible_btnJubsuStart;
    const setIsVisible_btnJubsuStart = setRawVisible_btnJubsuStart;
    const isVisible_btnJubsuEnd = rawVisible_btnJubsuEnd;
    const setIsVisible_btnJubsuEnd = setRawVisible_btnJubsuEnd;
    const isVisible_btnJubsuCancle = rawVisible_btnJubsuCancle;
    const setIsVisible_btnJubsuCancle = setRawVisible_btnJubsuCancle;
    const isVisible_btnSave = rawVisible_btnSave;
    const setIsVisible_btnSave = setRawVisible_btnSave;
    const isVisible_edBILD_SN = rawVisible_edBILD_SN && rawVisible_Shape0;
    const setIsVisible_edBILD_SN = setRawVisible_edBILD_SN;
    const isVisible_Static9 = rawVisible_Static9;
    const setIsVisible_Static9 = setRawVisible_Static9;
    const isVisible_Static11 = rawVisible_Static11 && rawVisible_Shape2;
    const setIsVisible_Static11 = setRawVisible_Static11;
    const isVisible_Static12 = rawVisible_Static12 && rawVisible_Shape2;
    const setIsVisible_Static12 = setRawVisible_Static12;
    const isVisible_cbxPartGubun = rawVisible_cbxPartGubun && rawVisible_Shape2;
    const setIsVisible_cbxPartGubun = setRawVisible_cbxPartGubun;
    const isVisible_Static14 = rawVisible_Static14 && rawVisible_Shape2;
    const setIsVisible_Static14 = setRawVisible_Static14;
    const isVisible_Static26 = rawVisible_Static26 && rawVisible_Shape2;
    const setIsVisible_Static26 = setRawVisible_Static26;
    const isVisible_edPartNM = rawVisible_edPartNM && rawVisible_Shape2;
    const setIsVisible_edPartNM = setRawVisible_edPartNM;
    const isVisible_stPARTCPNT_SN = rawVisible_stPARTCPNT_SN && rawVisible_Shape2;
    const setIsVisible_stPARTCPNT_SN = setRawVisible_stPARTCPNT_SN;
    const isVisible_edPARTCPNT_SN = rawVisible_edPARTCPNT_SN && rawVisible_Shape2;
    const setIsVisible_edPARTCPNT_SN = setRawVisible_edPARTCPNT_SN;
    const isVisible_Shape5 = rawVisible_Shape5;
    const setIsVisible_Shape5 = setRawVisible_Shape5;
    const isVisible_lbAppointNm = rawVisible_lbAppointNm && rawVisible_Shape5;
    const setIsVisible_lbAppointNm = setRawVisible_lbAppointNm;
    const isVisible_edI_NM = rawVisible_edI_NM && rawVisible_Shape5;
    const setIsVisible_edI_NM = setRawVisible_edI_NM;
    const isVisible_Static13 = rawVisible_Static13 && rawVisible_Shape5;
    const setIsVisible_Static13 = setRawVisible_Static13;
    const isVisible_lbEMail = rawVisible_lbEMail && rawVisible_Shape5;
    const setIsVisible_lbEMail = setRawVisible_lbEMail;
    const isVisible_lbDelegateAddr = rawVisible_lbDelegateAddr && rawVisible_Shape5;
    const setIsVisible_lbDelegateAddr = setRawVisible_lbDelegateAddr;
    const isVisible_medBookZipCode = rawVisible_medBookZipCode && rawVisible_Shape5;
    const setIsVisible_medBookZipCode = setRawVisible_medBookZipCode;
    const isVisible_btnSearchZipCode = rawVisible_btnSearchZipCode && rawVisible_Shape5;
    const setIsVisible_btnSearchZipCode = setRawVisible_btnSearchZipCode;
    const isVisible_edBookAddr1 = rawVisible_edBookAddr1 && rawVisible_Shape5;
    const setIsVisible_edBookAddr1 = setRawVisible_edBookAddr1;
    const isVisible_edBookAddr2 = rawVisible_edBookAddr2 && rawVisible_Shape5;
    const setIsVisible_edBookAddr2 = setRawVisible_edBookAddr2;
    const isVisible_lbJibu = rawVisible_lbJibu && rawVisible_Shape5;
    const setIsVisible_lbJibu = setRawVisible_lbJibu;
    const isVisible_cbJibu = rawVisible_cbJibu && rawVisible_Shape5;
    const setIsVisible_cbJibu = setRawVisible_cbJibu;
    const isVisible_Static15 = rawVisible_Static15 && rawVisible_Shape5;
    const setIsVisible_Static15 = setRawVisible_Static15;
    const isVisible_rdETC_MATTER = rawVisible_rdETC_MATTER && rawVisible_Shape5;
    const setIsVisible_rdETC_MATTER = setRawVisible_rdETC_MATTER;
    const isVisible_edEmail = rawVisible_edEmail && rawVisible_Shape5;
    const setIsVisible_edEmail = setRawVisible_edEmail;
    const isVisible_Shape3 = rawVisible_Shape3 && rawVisible_Shape5;
    const setIsVisible_Shape3 = setRawVisible_Shape3;
    const isVisible_Shape1 = rawVisible_Shape1 && rawVisible_Shape5;
    const setIsVisible_Shape1 = setRawVisible_Shape1;
    const isVisible_Static16 = rawVisible_Static16 && rawVisible_Shape1;
    const setIsVisible_Static16 = setRawVisible_Static16;
    const isVisible_edEDC_RCEPT_DE_8 = rawVisible_edEDC_RCEPT_DE_8 && rawVisible_Shape1;
    const setIsVisible_edEDC_RCEPT_DE_8 = setRawVisible_edEDC_RCEPT_DE_8;
    const isVisible_Static17 = rawVisible_Static17 && rawVisible_Shape1;
    const setIsVisible_Static17 = setRawVisible_Static17;
    const isVisible_edEDC_RCEPT_NO = rawVisible_edEDC_RCEPT_NO && rawVisible_Shape1;
    const setIsVisible_edEDC_RCEPT_NO = setRawVisible_edEDC_RCEPT_NO;
    const isVisible_Static18 = rawVisible_Static18 && rawVisible_Shape1;
    const setIsVisible_Static18 = setRawVisible_Static18;
    const isVisible_edTNCRS_PD_BEGIN_DE_8 = rawVisible_edTNCRS_PD_BEGIN_DE_8 && rawVisible_Shape1;
    const setIsVisible_edTNCRS_PD_BEGIN_DE_8 = setRawVisible_edTNCRS_PD_BEGIN_DE_8;
    const isVisible_edTNCRS_TIME_END_DE_8 = rawVisible_edTNCRS_TIME_END_DE_8 && rawVisible_Shape1;
    const setIsVisible_edTNCRS_TIME_END_DE_8 = setRawVisible_edTNCRS_TIME_END_DE_8;
    const isVisible_Static63 = rawVisible_Static63 && rawVisible_Shape1;
    const setIsVisible_Static63 = setRawVisible_Static63;
    const isVisible_Static19 = rawVisible_Static19 && rawVisible_Shape3;
    const setIsVisible_Static19 = setRawVisible_Static19;
    const isVisible_edAPYEXM_RCEPT_DE_8 = rawVisible_edAPYEXM_RCEPT_DE_8 && rawVisible_Shape3;
    const setIsVisible_edAPYEXM_RCEPT_DE_8 = setRawVisible_edAPYEXM_RCEPT_DE_8;
    const isVisible_Static20 = rawVisible_Static20 && rawVisible_Shape3;
    const setIsVisible_Static20 = setRawVisible_Static20;
    const isVisible_edAPYEXM_RCEPT_NO = rawVisible_edAPYEXM_RCEPT_NO && rawVisible_Shape3;
    const setIsVisible_edAPYEXM_RCEPT_NO = setRawVisible_edAPYEXM_RCEPT_NO;
    const isVisible_Static21 = rawVisible_Static21 && rawVisible_Shape3;
    const setIsVisible_Static21 = setRawVisible_Static21;
    const isVisible_edAPYEXM_DE_8 = rawVisible_edAPYEXM_DE_8 && rawVisible_Shape3;
    const setIsVisible_edAPYEXM_DE_8 = setRawVisible_edAPYEXM_DE_8;
    const isVisible_lbLcsInfo = rawVisible_lbLcsInfo && rawVisible_Shape1;
    const setIsVisible_lbLcsInfo = setRawVisible_lbLcsInfo;
    const isVisible_Static23 = rawVisible_Static23 && rawVisible_Shape3;
    const setIsVisible_Static23 = setRawVisible_Static23;
    const isVisible_stI_PERSONKEY = rawVisible_stI_PERSONKEY;
    const setIsVisible_stI_PERSONKEY = setRawVisible_stI_PERSONKEY;
    const isVisible_edI_PERSONKEY = rawVisible_edI_PERSONKEY;
    const setIsVisible_edI_PERSONKEY = setRawVisible_edI_PERSONKEY;
    const isVisible_stQUALFUSER_SN = rawVisible_stQUALFUSER_SN;
    const setIsVisible_stQUALFUSER_SN = setRawVisible_stQUALFUSER_SN;
    const isVisible_edQUALFUSER_SN = rawVisible_edQUALFUSER_SN;
    const setIsVisible_edQUALFUSER_SN = setRawVisible_edQUALFUSER_SN;
    const isVisible_btnCheck = rawVisible_btnCheck && rawVisible_Shape5;
    const setIsVisible_btnCheck = setRawVisible_btnCheck;
    const isVisible_stBILD_SN = rawVisible_stBILD_SN && rawVisible_Shape0;
    const setIsVisible_stBILD_SN = setRawVisible_stBILD_SN;
    const isVisible_gdList = rawVisible_gdList;
    const setIsVisible_gdList = setRawVisible_gdList;
    const isVisible_Static38 = rawVisible_Static38 && rawVisible_Shape5;
    const setIsVisible_Static38 = setRawVisible_Static38;
    const isVisible_edI_IHIDNUM = rawVisible_edI_IHIDNUM && rawVisible_Shape5;
    const setIsVisible_edI_IHIDNUM = setRawVisible_edI_IHIDNUM;
    const isVisible_Static27 = rawVisible_Static27 && rawVisible_Shape5;
    const setIsVisible_Static27 = setRawVisible_Static27;
    const isVisible_cbTEgubun = rawVisible_cbTEgubun && rawVisible_Shape5;
    const setIsVisible_cbTEgubun = setRawVisible_cbTEgubun;
    const isVisible_Static10 = rawVisible_Static10;
    const setIsVisible_Static10 = setRawVisible_Static10;
    const isVisible_edI_HPNO = rawVisible_edI_HPNO && rawVisible_Shape5;
    const setIsVisible_edI_HPNO = setRawVisible_edI_HPNO;
    const isVisible_Static1 = rawVisible_Static1 && rawVisible_Shape5;
    const setIsVisible_Static1 = setRawVisible_Static1;
    const isVisible_rdAPNT_PSTPONE_CODE = rawVisible_rdAPNT_PSTPONE_CODE && rawVisible_Shape5;
    const setIsVisible_rdAPNT_PSTPONE_CODE = setRawVisible_rdAPNT_PSTPONE_CODE;
    const isVisible_edTLPHON_NO = rawVisible_edTLPHON_NO && rawVisible_Shape2;
    const setIsVisible_edTLPHON_NO = setRawVisible_edTLPHON_NO;
    const isVisible_btnSaveXml = rawVisible_btnSaveXml;
    const setIsVisible_btnSaveXml = setRawVisible_btnSaveXml;
    const isVisible_calIHIDNUM = rawVisible_calIHIDNUM && rawVisible_Shape2;
    const setIsVisible_calIHIDNUM = setRawVisible_calIHIDNUM;
    const isVisible_Static22 = rawVisible_Static22 && rawVisible_Shape0;
    const setIsVisible_Static22 = setRawVisible_Static22;
    const isVisible_Edit0 = rawVisible_Edit0 && rawVisible_Shape0;
    const setIsVisible_Edit0 = setRawVisible_Edit0;
    const isVisible_Static24 = rawVisible_Static24 && rawVisible_Shape0;
    const setIsVisible_Static24 = setRawVisible_Static24;
    const isVisible_MaskEdit0 = rawVisible_MaskEdit0 && rawVisible_Shape0;
    const setIsVisible_MaskEdit0 = setRawVisible_MaskEdit0;
    const isVisible_Static25 = rawVisible_Static25 && rawVisible_Shape0;
    const setIsVisible_Static25 = setRawVisible_Static25;
    const isVisible_Combo0 = rawVisible_Combo0 && rawVisible_Shape0;
    const setIsVisible_Combo0 = setRawVisible_Combo0;
    const isVisible_btnDownload = rawVisible_btnDownload && rawVisible_ta_xml;
    const setIsVisible_btnDownload = setRawVisible_btnDownload;
    const isVisible_btnUpload = rawVisible_btnUpload && rawVisible_ta_xml;
    const setIsVisible_btnUpload = setRawVisible_btnUpload;
    const isVisible_gdFile = rawVisible_gdFile && rawVisible_ta_xml;
    const setIsVisible_gdFile = setRawVisible_gdFile;
    const isVisible_Static28 = rawVisible_Static28;
    const setIsVisible_Static28 = setRawVisible_Static28;
    const isVisible_fiAttachFile = rawVisible_fiAttachFile && rawVisible_ta_xml;
    const setIsVisible_fiAttachFile = setRawVisible_fiAttachFile;
    const isVisible_fdAttachFile = rawVisible_fdAttachFile && rawVisible_ta_xml;
    const setIsVisible_fdAttachFile = setRawVisible_fdAttachFile;
    const isVisible_hfAttachFile = rawVisible_hfAttachFile && rawVisible_ta_xml;
    const setIsVisible_hfAttachFile = setRawVisible_hfAttachFile;
    const isVisible_edAPNT_PSTPONE_RESN = rawVisible_edAPNT_PSTPONE_RESN && rawVisible_Shape5;
    const setIsVisible_edAPNT_PSTPONE_RESN = setRawVisible_edAPNT_PSTPONE_RESN;
    const isVisible_Button1 = rawVisible_Button1;
    const setIsVisible_Button1 = setRawVisible_Button1;
    const isVisible_Button2 = rawVisible_Button2;
    const setIsVisible_Button2 = setRawVisible_Button2;

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_oStatus([]);
            setds_oJibu([]);
            setds_oMethod([]);
            setds_oDateGubun([]);
            setds_ioMaster([]);
            setds_oOwnerGubun([]);
            setds_oFireCd([]);
            setds_oJubsuList([]);
            setds_oEtcCourse([]);
            setds_oTEGubun([]);
            setds_oMasterResult([]);
            setds_oResn([]);
            setds_oFileList([]);
            setds_oFileUpload([]);
            setds_ioMaster_Test([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const Button1_OnClick = () => {
        console.log('Button1_OnClick clicked');
    };
    const Button2_OnClick = () => {
        console.log('Button2_OnClick clicked');
    };
    const btnCheck_OnClick = () => {
        console.log('btnCheck_OnClick clicked');
    };
    const btnDownload_OnClick = () => {
        console.log('btnDownload_OnClick clicked');
    };
    const btnSaveXml_OnClick = () => {
        console.log('btnSaveXml_OnClick clicked');
    };
    const btnSearchZipCode_OnClick = () => {
        console.log('btnSearchZipCode_OnClick clicked');
    };
    const btnToExcel_OnClick = () => {
        console.log('btnToExcel_OnClick clicked');
    };
    const btnUpload_OnClick = () => {
        console.log('btnUpload_OnClick clicked');
    };
    const lfnBtnClick = () => {
        console.log('lfnBtnClick clicked');
    };
    const lfn_Search = () => {
        console.log('lfn_Search clicked');
    };

    return {
        isLoading,
        ds_oStatus,
        ds_oJibu,
        ds_oMethod,
        ds_oDateGubun,
        ds_ioMaster,
        ds_oOwnerGubun,
        ds_oFireCd,
        ds_oJubsuList,
        ds_oEtcCourse,
        ds_oTEGubun,
        ds_oMasterResult,
        ds_oResn,
        ds_oFileList,
        ds_oFileUpload,
        ds_ioMaster_Test,
        isVisible_ta_xml,
        setIsVisible_ta_xml,
        isVisible_tx_xmlTest,
        setIsVisible_tx_xmlTest,
        isVisible_Shape2,
        setIsVisible_Shape2,
        isVisible_shpGubunBox1,
        setIsVisible_shpGubunBox1,
        isVisible_divWorkFormTitle,
        setIsVisible_divWorkFormTitle,
        isVisible_lbOrderChange,
        setIsVisible_lbOrderChange,
        isVisible_cbxJibu,
        setIsVisible_cbxJibu,
        isVisible_Static0,
        setIsVisible_Static0,
        isVisible_cbxKS,
        setIsVisible_cbxKS,
        isVisible_Static2,
        setIsVisible_Static2,
        isVisible_cbStatus,
        setIsVisible_cbStatus,
        isVisible_Static3,
        setIsVisible_Static3,
        isVisible_cbDateGubun,
        setIsVisible_cbDateGubun,
        isVisible_btnSearch,
        setIsVisible_btnSearch,
        isVisible_btnToExcel,
        setIsVisible_btnToExcel,
        isVisible_Shape0,
        setIsVisible_Shape0,
        isVisible_Static4,
        setIsVisible_Static4,
        isVisible_Static5,
        setIsVisible_Static5,
        isVisible_Static6,
        setIsVisible_Static6,
        isVisible_cbxAjstatus,
        setIsVisible_cbxAjstatus,
        isVisible_Static7,
        setIsVisible_Static7,
        isVisible_cbxAjmothod,
        setIsVisible_cbxAjmothod,
        isVisible_Static8,
        setIsVisible_Static8,
        isVisible_edAJMGNO,
        setIsVisible_edAJMGNO,
        isVisible_edBILD_NM,
        setIsVisible_edBILD_NM,
        isVisible_calAjdate,
        setIsVisible_calAjdate,
        isVisible_btnNewJubsu,
        setIsVisible_btnNewJubsu,
        isVisible_btnJubsuStart,
        setIsVisible_btnJubsuStart,
        isVisible_btnJubsuEnd,
        setIsVisible_btnJubsuEnd,
        isVisible_btnJubsuCancle,
        setIsVisible_btnJubsuCancle,
        isVisible_btnSave,
        setIsVisible_btnSave,
        isVisible_edBILD_SN,
        setIsVisible_edBILD_SN,
        isVisible_Static9,
        setIsVisible_Static9,
        isVisible_Static11,
        setIsVisible_Static11,
        isVisible_Static12,
        setIsVisible_Static12,
        isVisible_cbxPartGubun,
        setIsVisible_cbxPartGubun,
        isVisible_Static14,
        setIsVisible_Static14,
        isVisible_Static26,
        setIsVisible_Static26,
        isVisible_edPartNM,
        setIsVisible_edPartNM,
        isVisible_stPARTCPNT_SN,
        setIsVisible_stPARTCPNT_SN,
        isVisible_edPARTCPNT_SN,
        setIsVisible_edPARTCPNT_SN,
        isVisible_Shape5,
        setIsVisible_Shape5,
        isVisible_lbAppointNm,
        setIsVisible_lbAppointNm,
        isVisible_edI_NM,
        setIsVisible_edI_NM,
        isVisible_Static13,
        setIsVisible_Static13,
        isVisible_lbEMail,
        setIsVisible_lbEMail,
        isVisible_lbDelegateAddr,
        setIsVisible_lbDelegateAddr,
        isVisible_medBookZipCode,
        setIsVisible_medBookZipCode,
        isVisible_btnSearchZipCode,
        setIsVisible_btnSearchZipCode,
        isVisible_edBookAddr1,
        setIsVisible_edBookAddr1,
        isVisible_edBookAddr2,
        setIsVisible_edBookAddr2,
        isVisible_lbJibu,
        setIsVisible_lbJibu,
        isVisible_cbJibu,
        setIsVisible_cbJibu,
        isVisible_Static15,
        setIsVisible_Static15,
        isVisible_rdETC_MATTER,
        setIsVisible_rdETC_MATTER,
        isVisible_edEmail,
        setIsVisible_edEmail,
        isVisible_Shape3,
        setIsVisible_Shape3,
        isVisible_Shape1,
        setIsVisible_Shape1,
        isVisible_Static16,
        setIsVisible_Static16,
        isVisible_edEDC_RCEPT_DE_8,
        setIsVisible_edEDC_RCEPT_DE_8,
        isVisible_Static17,
        setIsVisible_Static17,
        isVisible_edEDC_RCEPT_NO,
        setIsVisible_edEDC_RCEPT_NO,
        isVisible_Static18,
        setIsVisible_Static18,
        isVisible_edTNCRS_PD_BEGIN_DE_8,
        setIsVisible_edTNCRS_PD_BEGIN_DE_8,
        isVisible_edTNCRS_TIME_END_DE_8,
        setIsVisible_edTNCRS_TIME_END_DE_8,
        isVisible_Static63,
        setIsVisible_Static63,
        isVisible_Static19,
        setIsVisible_Static19,
        isVisible_edAPYEXM_RCEPT_DE_8,
        setIsVisible_edAPYEXM_RCEPT_DE_8,
        isVisible_Static20,
        setIsVisible_Static20,
        isVisible_edAPYEXM_RCEPT_NO,
        setIsVisible_edAPYEXM_RCEPT_NO,
        isVisible_Static21,
        setIsVisible_Static21,
        isVisible_edAPYEXM_DE_8,
        setIsVisible_edAPYEXM_DE_8,
        isVisible_lbLcsInfo,
        setIsVisible_lbLcsInfo,
        isVisible_Static23,
        setIsVisible_Static23,
        isVisible_stI_PERSONKEY,
        setIsVisible_stI_PERSONKEY,
        isVisible_edI_PERSONKEY,
        setIsVisible_edI_PERSONKEY,
        isVisible_stQUALFUSER_SN,
        setIsVisible_stQUALFUSER_SN,
        isVisible_edQUALFUSER_SN,
        setIsVisible_edQUALFUSER_SN,
        isVisible_btnCheck,
        setIsVisible_btnCheck,
        isVisible_stBILD_SN,
        setIsVisible_stBILD_SN,
        isVisible_gdList,
        setIsVisible_gdList,
        isVisible_Static38,
        setIsVisible_Static38,
        isVisible_edI_IHIDNUM,
        setIsVisible_edI_IHIDNUM,
        isVisible_Static27,
        setIsVisible_Static27,
        isVisible_cbTEgubun,
        setIsVisible_cbTEgubun,
        isVisible_Static10,
        setIsVisible_Static10,
        isVisible_edI_HPNO,
        setIsVisible_edI_HPNO,
        isVisible_Static1,
        setIsVisible_Static1,
        isVisible_rdAPNT_PSTPONE_CODE,
        setIsVisible_rdAPNT_PSTPONE_CODE,
        isVisible_edTLPHON_NO,
        setIsVisible_edTLPHON_NO,
        isVisible_btnSaveXml,
        setIsVisible_btnSaveXml,
        isVisible_calIHIDNUM,
        setIsVisible_calIHIDNUM,
        isVisible_Static22,
        setIsVisible_Static22,
        isVisible_Edit0,
        setIsVisible_Edit0,
        isVisible_Static24,
        setIsVisible_Static24,
        isVisible_MaskEdit0,
        setIsVisible_MaskEdit0,
        isVisible_Static25,
        setIsVisible_Static25,
        isVisible_Combo0,
        setIsVisible_Combo0,
        isVisible_btnDownload,
        setIsVisible_btnDownload,
        isVisible_btnUpload,
        setIsVisible_btnUpload,
        isVisible_gdFile,
        setIsVisible_gdFile,
        isVisible_Static28,
        setIsVisible_Static28,
        isVisible_fiAttachFile,
        setIsVisible_fiAttachFile,
        isVisible_fdAttachFile,
        setIsVisible_fdAttachFile,
        isVisible_hfAttachFile,
        setIsVisible_hfAttachFile,
        isVisible_edAPNT_PSTPONE_RESN,
        setIsVisible_edAPNT_PSTPONE_RESN,
        isVisible_Button1,
        setIsVisible_Button1,
        isVisible_Button2,
        setIsVisible_Button2,
        Button1_OnClick,
        Button2_OnClick,
        btnCheck_OnClick,
        btnDownload_OnClick,
        btnSaveXml_OnClick,
        btnSearchZipCode_OnClick,
        btnToExcel_OnClick,
        btnUpload_OnClick,
        lfnBtnClick,
        lfn_Search,
    };
};