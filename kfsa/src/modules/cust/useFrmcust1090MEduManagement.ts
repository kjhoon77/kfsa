// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_ioEduPass, Ids_oJibu, Ids_oEduGubun, Ids_oEduStudent, Ids_oEduSubject, Ids_oEmailDomain, Ids_oCustomerInfo, Ids_oFireManagerInfo, Ids_oBuildingInfo, Ids_ioEduPassSingle, Ids_oCourse, Ids_oDetailCourse, Ids_ioEduPassModify, Ids_ioEduPassCheck, Ids_oAgGubun, Ids_iOnlyKey, Ids_oCBarCodeInfo, Ids_oLBarCodeInfo, Ids_ioEduPassMulti, Ids_ioEduPassMultiCheck, Ids_ioEduPassMultiSingle, Ids_oBasicInfo, Ids_oJibuGubun, Ids_ioLBarCodeInfoCust, Ids_ioYn, Ids_oBnmCode, Ids_oEduJubsuInfo } from './Frmcust1090MEduManagementData';

export const useFrmcust1090MEduManagement = () => {
    const [ds_ioEduPass, setds_ioEduPass] = useState<Ids_ioEduPass[]>([]);
    const [ds_oJibu, setds_oJibu] = useState<Ids_oJibu[]>([]);
    const [ds_oEduGubun, setds_oEduGubun] = useState<Ids_oEduGubun[]>([]);
    const [ds_oEduStudent, setds_oEduStudent] = useState<Ids_oEduStudent[]>([]);
    const [ds_oEduSubject, setds_oEduSubject] = useState<Ids_oEduSubject[]>([]);
    const [ds_oEmailDomain, setds_oEmailDomain] = useState<Ids_oEmailDomain[]>([]);
    const [ds_oCustomerInfo, setds_oCustomerInfo] = useState<Ids_oCustomerInfo[]>([]);
    const [ds_oFireManagerInfo, setds_oFireManagerInfo] = useState<Ids_oFireManagerInfo[]>([]);
    const [ds_oBuildingInfo, setds_oBuildingInfo] = useState<Ids_oBuildingInfo[]>([]);
    const [ds_ioEduPassSingle, setds_ioEduPassSingle] = useState<Ids_ioEduPassSingle[]>([]);
    const [ds_oCourse, setds_oCourse] = useState<Ids_oCourse[]>([]);
    const [ds_oDetailCourse, setds_oDetailCourse] = useState<Ids_oDetailCourse[]>([]);
    const [ds_ioEduPassModify, setds_ioEduPassModify] = useState<Ids_ioEduPassModify[]>([]);
    const [ds_ioEduPassCheck, setds_ioEduPassCheck] = useState<Ids_ioEduPassCheck[]>([]);
    const [ds_oAgGubun, setds_oAgGubun] = useState<Ids_oAgGubun[]>([]);
    const [ds_iOnlyKey, setds_iOnlyKey] = useState<Ids_iOnlyKey[]>([]);
    const [ds_oCBarCodeInfo, setds_oCBarCodeInfo] = useState<Ids_oCBarCodeInfo[]>([]);
    const [ds_oLBarCodeInfo, setds_oLBarCodeInfo] = useState<Ids_oLBarCodeInfo[]>([]);
    const [ds_ioEduPassMulti, setds_ioEduPassMulti] = useState<Ids_ioEduPassMulti[]>([]);
    const [ds_ioEduPassMultiCheck, setds_ioEduPassMultiCheck] = useState<Ids_ioEduPassMultiCheck[]>([]);
    const [ds_ioEduPassMultiSingle, setds_ioEduPassMultiSingle] = useState<Ids_ioEduPassMultiSingle[]>([]);
    const [ds_oBasicInfo, setds_oBasicInfo] = useState<Ids_oBasicInfo[]>([]);
    const [ds_oJibuGubun, setds_oJibuGubun] = useState<Ids_oJibuGubun[]>([]);
    const [ds_ioLBarCodeInfoCust, setds_ioLBarCodeInfoCust] = useState<Ids_ioLBarCodeInfoCust[]>([]);
    const [ds_ioYn, setds_ioYn] = useState<Ids_ioYn[]>([]);
    const [ds_oBnmCode, setds_oBnmCode] = useState<Ids_oBnmCode[]>([]);
    const [ds_oEduJubsuInfo, setds_oEduJubsuInfo] = useState<Ids_oEduJubsuInfo[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [rawVisible_Shape6, setRawVisible_Shape6] = useState(true);
    const [rawVisible_shpBtnBox, setRawVisible_shpBtnBox] = useState(true);
    const [rawVisible_Shape5, setRawVisible_Shape5] = useState(true);
    const [rawVisible_Shape4, setRawVisible_Shape4] = useState(true);
    const [rawVisible_divWorkFormTitle, setRawVisible_divWorkFormTitle] = useState(true);
    const [rawVisible_gdEduPass, setRawVisible_gdEduPass] = useState(true);
    const [rawVisible_btnMutilSort, setRawVisible_btnMutilSort] = useState(true);
    const [rawVisible_Static7, setRawVisible_Static7] = useState(true);
    const [rawVisible_btnSearch, setRawVisible_btnSearch] = useState(true);
    const [rawVisible_btnInput, setRawVisible_btnInput] = useState(true);
    const [rawVisible_btnDelete, setRawVisible_btnDelete] = useState(true);
    const [rawVisible_btnSave, setRawVisible_btnSave] = useState(true);
    const [rawVisible_btnCancel, setRawVisible_btnCancel] = useState(true);
    const [rawVisible_btnToExcel, setRawVisible_btnToExcel] = useState(true);
    const [rawVisible_btnPrintScreen, setRawVisible_btnPrintScreen] = useState(true);
    const [rawVisible_btnEnd, setRawVisible_btnEnd] = useState(true);
    const [rawVisible_Shape2, setRawVisible_Shape2] = useState(true);
    const [rawVisible_Shape1, setRawVisible_Shape1] = useState(true);
    const [rawVisible_Shape0, setRawVisible_Shape0] = useState(true);
    const [rawVisible_Shape3, setRawVisible_Shape3] = useState(true);
    const [rawVisible_shpGubunBox, setRawVisible_shpGubunBox] = useState(true);
    const [rawVisible_lbJubsuDate, setRawVisible_lbJubsuDate] = useState(true);
    const [rawVisible_Static21, setRawVisible_Static21] = useState(true);
    const [rawVisible_Static20, setRawVisible_Static20] = useState(true);
    const [rawVisible_Static26, setRawVisible_Static26] = useState(true);
    const [rawVisible_cbxJibu, setRawVisible_cbxJibu] = useState(true);
    const [rawVisible_Static16, setRawVisible_Static16] = useState(true);
    const [rawVisible_medBirthday, setRawVisible_medBirthday] = useState(true);
    const [rawVisible_Static0, setRawVisible_Static0] = useState(true);
    const [rawVisible_Static15, setRawVisible_Static15] = useState(true);
    const [rawVisible_edCustNm, setRawVisible_edCustNm] = useState(true);
    const [rawVisible_Static8, setRawVisible_Static8] = useState(true);
    const [rawVisible_edHpTel, setRawVisible_edHpTel] = useState(true);
    const [rawVisible_Static13, setRawVisible_Static13] = useState(true);
    const [rawVisible_edEmail, setRawVisible_edEmail] = useState(true);
    const [rawVisible_Static1, setRawVisible_Static1] = useState(true);
    const [rawVisible_edBuildingNm, setRawVisible_edBuildingNm] = useState(true);
    const [rawVisible_Static4, setRawVisible_Static4] = useState(true);
    const [rawVisible_edTelNo, setRawVisible_edTelNo] = useState(true);
    const [rawVisible_Static2, setRawVisible_Static2] = useState(true);
    const [rawVisible_edNewAddr1, setRawVisible_edNewAddr1] = useState(true);
    const [rawVisible_medNewZipCode, setRawVisible_medNewZipCode] = useState(true);
    const [rawVisible_edNewAddr2, setRawVisible_edNewAddr2] = useState(true);
    const [rawVisible_lbNewAddr, setRawVisible_lbNewAddr] = useState(true);
    const [rawVisible_Static3, setRawVisible_Static3] = useState(true);
    const [rawVisible_Static5, setRawVisible_Static5] = useState(true);
    const [rawVisible_edCustGugun, setRawVisible_edCustGugun] = useState(true);
    const [rawVisible_Static6, setRawVisible_Static6] = useState(true);
    const [rawVisible_tmEduStartTime, setRawVisible_tmEduStartTime] = useState(true);
    const [rawVisible_lbTimeWave, setRawVisible_lbTimeWave] = useState(true);
    const [rawVisible_tmEduEndTime, setRawVisible_tmEduEndTime] = useState(true);
    const [rawVisible_Static24, setRawVisible_Static24] = useState(true);
    const [rawVisible_Static9, setRawVisible_Static9] = useState(true);
    const [rawVisible_lbStdYear, setRawVisible_lbStdYear] = useState(true);
    const [rawVisible_edEduYear, setRawVisible_edEduYear] = useState(true);
    const [rawVisible_lbCourse, setRawVisible_lbCourse] = useState(true);
    const [rawVisible_Static12, setRawVisible_Static12] = useState(true);
    const [rawVisible_edCourseNm, setRawVisible_edCourseNm] = useState(true);
    const [rawVisible_Static14, setRawVisible_Static14] = useState(true);
    const [rawVisible_Static17, setRawVisible_Static17] = useState(true);
    const [rawVisible_edEduSubjectNm, setRawVisible_edEduSubjectNm] = useState(true);
    const [rawVisible_Static10, setRawVisible_Static10] = useState(true);
    const [rawVisible_Static11, setRawVisible_Static11] = useState(true);
    const [rawVisible_Static18, setRawVisible_Static18] = useState(true);
    const [rawVisible_edEduStudentNm, setRawVisible_edEduStudentNm] = useState(true);
    const [rawVisible_Static19, setRawVisible_Static19] = useState(true);
    const [rawVisible_edEduGubunNm, setRawVisible_edEduGubunNm] = useState(true);
    const [rawVisible_lbSmsCnt, setRawVisible_lbSmsCnt] = useState(true);
    const [rawVisible_medTotalCnt, setRawVisible_medTotalCnt] = useState(true);
    const [rawVisible_lbResidentNoError, setRawVisible_lbResidentNoError] = useState(true);
    const [rawVisible_lbAppointDate, setRawVisible_lbAppointDate] = useState(true);
    const [rawVisible_medLastDate, setRawVisible_medLastDate] = useState(true);
    const [rawVisible_medFeeYear, setRawVisible_medFeeYear] = useState(true);
    const [rawVisible_Static22, setRawVisible_Static22] = useState(true);
    const [rawVisible_edStatus, setRawVisible_edStatus] = useState(true);
    const [rawVisible_btnSearchCustMgno, setRawVisible_btnSearchCustMgno] = useState(true);
    const [rawVisible_medBarCode, setRawVisible_medBarCode] = useState(true);
    const [rawVisible_medCustNo, setRawVisible_medCustNo] = useState(true);
    const [rawVisible_medLBarCode, setRawVisible_medLBarCode] = useState(true);
    const [rawVisible_medNoPayFee, setRawVisible_medNoPayFee] = useState(true);
    const [rawVisible_medEduDate, setRawVisible_medEduDate] = useState(true);
    const [rawVisible_edEsmgno, setRawVisible_edEsmgno] = useState(false);
    const [rawVisible_edFmmgno, setRawVisible_edFmmgno] = useState(false);
    const [rawVisible_edFmlastFmhseq, setRawVisible_edFmlastFmhseq] = useState(false);
    const [rawVisible_btnUpdateManagerInfo, setRawVisible_btnUpdateManagerInfo] = useState(true);
    const [rawVisible_btnSearchEduSchedule, setRawVisible_btnSearchEduSchedule] = useState(true);
    const [rawVisible_edCmgno, setRawVisible_edCmgno] = useState(false);
    const [rawVisible_edCourseCd, setRawVisible_edCourseCd] = useState(false);
    const [rawVisible_edGateWayCd, setRawVisible_edGateWayCd] = useState(false);
    const [rawVisible_edEsdate, setRawVisible_edEsdate] = useState(false);
    const [rawVisible_lbText, setRawVisible_lbText] = useState(true);
    const [rawVisible_cbxEmailDomain, setRawVisible_cbxEmailDomain] = useState(true);
    const [rawVisible_lbAt, setRawVisible_lbAt] = useState(true);
    const [rawVisible_edEmailDomain, setRawVisible_edEmailDomain] = useState(true);
    const [rawVisible_edResidentNoError, setRawVisible_edResidentNoError] = useState(false);
    const [rawVisible_calStartTime, setRawVisible_calStartTime] = useState(true);
    const [rawVisible_radAgGubun, setRawVisible_radAgGubun] = useState(true);
    const [rawVisible_edAgNm, setRawVisible_edAgNm] = useState(true);
    const [rawVisible_edCourse, setRawVisible_edCourse] = useState(false);
    const [rawVisible_lbStatus, setRawVisible_lbStatus] = useState(false);
    const [rawVisible_btnSearchAgency, setRawVisible_btnSearchAgency] = useState(true);
    const [rawVisible_Static23, setRawVisible_Static23] = useState(true);
    const [rawVisible_medLBarCodeCust, setRawVisible_medLBarCodeCust] = useState(true);
    const [rawVisible_radJibuGubun, setRawVisible_radJibuGubun] = useState(true);
    const [rawVisible_lbReceiveExcept, setRawVisible_lbReceiveExcept] = useState(true);
    const [rawVisible_medResidentNo1, setRawVisible_medResidentNo1] = useState(true);
    const [rawVisible_Static25, setRawVisible_Static25] = useState(true);
    const [rawVisible_medPersonkey, setRawVisible_medPersonkey] = useState(true);
    const [rawVisible_edEduExpireDate, setRawVisible_edEduExpireDate] = useState(false);
    const [rawVisible_lbDanger, setRawVisible_lbDanger] = useState(false);
    const isVisible_Shape6 = rawVisible_Shape6;
    const setIsVisible_Shape6 = setRawVisible_Shape6;
    const isVisible_shpBtnBox = rawVisible_shpBtnBox;
    const setIsVisible_shpBtnBox = setRawVisible_shpBtnBox;
    const isVisible_Shape5 = rawVisible_Shape5;
    const setIsVisible_Shape5 = setRawVisible_Shape5;
    const isVisible_Shape4 = rawVisible_Shape4;
    const setIsVisible_Shape4 = setRawVisible_Shape4;
    const isVisible_divWorkFormTitle = rawVisible_divWorkFormTitle;
    const setIsVisible_divWorkFormTitle = setRawVisible_divWorkFormTitle;
    const isVisible_gdEduPass = rawVisible_gdEduPass && rawVisible_Shape4;
    const setIsVisible_gdEduPass = setRawVisible_gdEduPass;
    const isVisible_btnMutilSort = rawVisible_btnMutilSort && rawVisible_Shape4;
    const setIsVisible_btnMutilSort = setRawVisible_btnMutilSort;
    const isVisible_Static7 = rawVisible_Static7 && rawVisible_Shape4;
    const setIsVisible_Static7 = setRawVisible_Static7;
    const isVisible_btnSearch = rawVisible_btnSearch && rawVisible_shpBtnBox;
    const setIsVisible_btnSearch = setRawVisible_btnSearch;
    const isVisible_btnInput = rawVisible_btnInput && rawVisible_shpBtnBox;
    const setIsVisible_btnInput = setRawVisible_btnInput;
    const isVisible_btnDelete = rawVisible_btnDelete && rawVisible_shpBtnBox;
    const setIsVisible_btnDelete = setRawVisible_btnDelete;
    const isVisible_btnSave = rawVisible_btnSave && rawVisible_shpBtnBox;
    const setIsVisible_btnSave = setRawVisible_btnSave;
    const isVisible_btnCancel = rawVisible_btnCancel && rawVisible_shpBtnBox;
    const setIsVisible_btnCancel = setRawVisible_btnCancel;
    const isVisible_btnToExcel = rawVisible_btnToExcel && rawVisible_shpBtnBox;
    const setIsVisible_btnToExcel = setRawVisible_btnToExcel;
    const isVisible_btnPrintScreen = rawVisible_btnPrintScreen && rawVisible_shpBtnBox;
    const setIsVisible_btnPrintScreen = setRawVisible_btnPrintScreen;
    const isVisible_btnEnd = rawVisible_btnEnd && rawVisible_shpBtnBox;
    const setIsVisible_btnEnd = setRawVisible_btnEnd;
    const isVisible_Shape2 = rawVisible_Shape2;
    const setIsVisible_Shape2 = setRawVisible_Shape2;
    const isVisible_Shape1 = rawVisible_Shape1;
    const setIsVisible_Shape1 = setRawVisible_Shape1;
    const isVisible_Shape0 = rawVisible_Shape0;
    const setIsVisible_Shape0 = setRawVisible_Shape0;
    const isVisible_Shape3 = rawVisible_Shape3;
    const setIsVisible_Shape3 = setRawVisible_Shape3;
    const isVisible_shpGubunBox = rawVisible_shpGubunBox;
    const setIsVisible_shpGubunBox = setRawVisible_shpGubunBox;
    const isVisible_lbJubsuDate = rawVisible_lbJubsuDate && rawVisible_shpGubunBox;
    const setIsVisible_lbJubsuDate = setRawVisible_lbJubsuDate;
    const isVisible_Static21 = rawVisible_Static21 && rawVisible_Shape1;
    const setIsVisible_Static21 = setRawVisible_Static21;
    const isVisible_Static20 = rawVisible_Static20 && rawVisible_Shape1;
    const setIsVisible_Static20 = setRawVisible_Static20;
    const isVisible_Static26 = rawVisible_Static26 && rawVisible_Shape1;
    const setIsVisible_Static26 = setRawVisible_Static26;
    const isVisible_cbxJibu = rawVisible_cbxJibu && rawVisible_Shape1;
    const setIsVisible_cbxJibu = setRawVisible_cbxJibu;
    const isVisible_Static16 = rawVisible_Static16 && rawVisible_Shape3;
    const setIsVisible_Static16 = setRawVisible_Static16;
    const isVisible_medBirthday = rawVisible_medBirthday && rawVisible_Shape3;
    const setIsVisible_medBirthday = setRawVisible_medBirthday;
    const isVisible_Static0 = rawVisible_Static0 && rawVisible_Shape3;
    const setIsVisible_Static0 = setRawVisible_Static0;
    const isVisible_Static15 = rawVisible_Static15 && rawVisible_Shape3;
    const setIsVisible_Static15 = setRawVisible_Static15;
    const isVisible_edCustNm = rawVisible_edCustNm && rawVisible_Shape3;
    const setIsVisible_edCustNm = setRawVisible_edCustNm;
    const isVisible_Static8 = rawVisible_Static8 && rawVisible_Shape3;
    const setIsVisible_Static8 = setRawVisible_Static8;
    const isVisible_edHpTel = rawVisible_edHpTel && rawVisible_Shape3;
    const setIsVisible_edHpTel = setRawVisible_edHpTel;
    const isVisible_Static13 = rawVisible_Static13 && rawVisible_Shape3;
    const setIsVisible_Static13 = setRawVisible_Static13;
    const isVisible_edEmail = rawVisible_edEmail && rawVisible_Shape3;
    const setIsVisible_edEmail = setRawVisible_edEmail;
    const isVisible_Static1 = rawVisible_Static1 && rawVisible_Shape2;
    const setIsVisible_Static1 = setRawVisible_Static1;
    const isVisible_edBuildingNm = rawVisible_edBuildingNm && rawVisible_Shape2;
    const setIsVisible_edBuildingNm = setRawVisible_edBuildingNm;
    const isVisible_Static4 = rawVisible_Static4 && rawVisible_Shape2;
    const setIsVisible_Static4 = setRawVisible_Static4;
    const isVisible_edTelNo = rawVisible_edTelNo && rawVisible_Shape2;
    const setIsVisible_edTelNo = setRawVisible_edTelNo;
    const isVisible_Static2 = rawVisible_Static2 && rawVisible_Shape2;
    const setIsVisible_Static2 = setRawVisible_Static2;
    const isVisible_edNewAddr1 = rawVisible_edNewAddr1 && rawVisible_Shape2;
    const setIsVisible_edNewAddr1 = setRawVisible_edNewAddr1;
    const isVisible_medNewZipCode = rawVisible_medNewZipCode && rawVisible_Shape2;
    const setIsVisible_medNewZipCode = setRawVisible_medNewZipCode;
    const isVisible_edNewAddr2 = rawVisible_edNewAddr2 && rawVisible_Shape2;
    const setIsVisible_edNewAddr2 = setRawVisible_edNewAddr2;
    const isVisible_lbNewAddr = rawVisible_lbNewAddr && rawVisible_Shape2;
    const setIsVisible_lbNewAddr = setRawVisible_lbNewAddr;
    const isVisible_Static3 = rawVisible_Static3 && rawVisible_Shape0;
    const setIsVisible_Static3 = setRawVisible_Static3;
    const isVisible_Static5 = rawVisible_Static5 && rawVisible_Shape0;
    const setIsVisible_Static5 = setRawVisible_Static5;
    const isVisible_edCustGugun = rawVisible_edCustGugun && rawVisible_Shape0;
    const setIsVisible_edCustGugun = setRawVisible_edCustGugun;
    const isVisible_Static6 = rawVisible_Static6 && rawVisible_Shape0;
    const setIsVisible_Static6 = setRawVisible_Static6;
    const isVisible_tmEduStartTime = rawVisible_tmEduStartTime && rawVisible_shpGubunBox;
    const setIsVisible_tmEduStartTime = setRawVisible_tmEduStartTime;
    const isVisible_lbTimeWave = rawVisible_lbTimeWave && rawVisible_shpGubunBox;
    const setIsVisible_lbTimeWave = setRawVisible_lbTimeWave;
    const isVisible_tmEduEndTime = rawVisible_tmEduEndTime && rawVisible_shpGubunBox;
    const setIsVisible_tmEduEndTime = setRawVisible_tmEduEndTime;
    const isVisible_Static24 = rawVisible_Static24 && rawVisible_Shape2;
    const setIsVisible_Static24 = setRawVisible_Static24;
    const isVisible_Static9 = rawVisible_Static9 && rawVisible_shpGubunBox;
    const setIsVisible_Static9 = setRawVisible_Static9;
    const isVisible_lbStdYear = rawVisible_lbStdYear && rawVisible_Shape5;
    const setIsVisible_lbStdYear = setRawVisible_lbStdYear;
    const isVisible_edEduYear = rawVisible_edEduYear && rawVisible_Shape5;
    const setIsVisible_edEduYear = setRawVisible_edEduYear;
    const isVisible_lbCourse = rawVisible_lbCourse && rawVisible_Shape5;
    const setIsVisible_lbCourse = setRawVisible_lbCourse;
    const isVisible_Static12 = rawVisible_Static12 && rawVisible_Shape5;
    const setIsVisible_Static12 = setRawVisible_Static12;
    const isVisible_edCourseNm = rawVisible_edCourseNm && rawVisible_Shape5;
    const setIsVisible_edCourseNm = setRawVisible_edCourseNm;
    const isVisible_Static14 = rawVisible_Static14 && rawVisible_Shape5;
    const setIsVisible_Static14 = setRawVisible_Static14;
    const isVisible_Static17 = rawVisible_Static17 && rawVisible_Shape5;
    const setIsVisible_Static17 = setRawVisible_Static17;
    const isVisible_edEduSubjectNm = rawVisible_edEduSubjectNm && rawVisible_Shape5;
    const setIsVisible_edEduSubjectNm = setRawVisible_edEduSubjectNm;
    const isVisible_Static10 = rawVisible_Static10 && rawVisible_Shape2;
    const setIsVisible_Static10 = setRawVisible_Static10;
    const isVisible_Static11 = rawVisible_Static11 && rawVisible_Shape3;
    const setIsVisible_Static11 = setRawVisible_Static11;
    const isVisible_Static18 = rawVisible_Static18 && rawVisible_Shape1;
    const setIsVisible_Static18 = setRawVisible_Static18;
    const isVisible_edEduStudentNm = rawVisible_edEduStudentNm && rawVisible_Shape5;
    const setIsVisible_edEduStudentNm = setRawVisible_edEduStudentNm;
    const isVisible_Static19 = rawVisible_Static19 && rawVisible_shpGubunBox;
    const setIsVisible_Static19 = setRawVisible_Static19;
    const isVisible_edEduGubunNm = rawVisible_edEduGubunNm && rawVisible_shpGubunBox;
    const setIsVisible_edEduGubunNm = setRawVisible_edEduGubunNm;
    const isVisible_lbSmsCnt = rawVisible_lbSmsCnt && rawVisible_Shape4;
    const setIsVisible_lbSmsCnt = setRawVisible_lbSmsCnt;
    const isVisible_medTotalCnt = rawVisible_medTotalCnt && rawVisible_Shape4;
    const setIsVisible_medTotalCnt = setRawVisible_medTotalCnt;
    const isVisible_lbResidentNoError = rawVisible_lbResidentNoError && rawVisible_Shape3;
    const setIsVisible_lbResidentNoError = setRawVisible_lbResidentNoError;
    const isVisible_lbAppointDate = rawVisible_lbAppointDate && rawVisible_Shape3;
    const setIsVisible_lbAppointDate = setRawVisible_lbAppointDate;
    const isVisible_medLastDate = rawVisible_medLastDate && rawVisible_Shape0;
    const setIsVisible_medLastDate = setRawVisible_medLastDate;
    const isVisible_medFeeYear = rawVisible_medFeeYear && rawVisible_Shape0;
    const setIsVisible_medFeeYear = setRawVisible_medFeeYear;
    const isVisible_Static22 = rawVisible_Static22 && rawVisible_Shape0;
    const setIsVisible_Static22 = setRawVisible_Static22;
    const isVisible_edStatus = rawVisible_edStatus && rawVisible_Shape3;
    const setIsVisible_edStatus = setRawVisible_edStatus;
    const isVisible_btnSearchCustMgno = rawVisible_btnSearchCustMgno && rawVisible_Shape1;
    const setIsVisible_btnSearchCustMgno = setRawVisible_btnSearchCustMgno;
    const isVisible_medBarCode = rawVisible_medBarCode && rawVisible_Shape1;
    const setIsVisible_medBarCode = setRawVisible_medBarCode;
    const isVisible_medCustNo = rawVisible_medCustNo && rawVisible_Shape1;
    const setIsVisible_medCustNo = setRawVisible_medCustNo;
    const isVisible_medLBarCode = rawVisible_medLBarCode && rawVisible_Shape3;
    const setIsVisible_medLBarCode = setRawVisible_medLBarCode;
    const isVisible_medNoPayFee = rawVisible_medNoPayFee && rawVisible_Shape0;
    const setIsVisible_medNoPayFee = setRawVisible_medNoPayFee;
    const isVisible_medEduDate = rawVisible_medEduDate && rawVisible_shpGubunBox;
    const setIsVisible_medEduDate = setRawVisible_medEduDate;
    const isVisible_edEsmgno = rawVisible_edEsmgno && rawVisible_shpGubunBox;
    const setIsVisible_edEsmgno = setRawVisible_edEsmgno;
    const isVisible_edFmmgno = rawVisible_edFmmgno && rawVisible_Shape3;
    const setIsVisible_edFmmgno = setRawVisible_edFmmgno;
    const isVisible_edFmlastFmhseq = rawVisible_edFmlastFmhseq && rawVisible_Shape3;
    const setIsVisible_edFmlastFmhseq = setRawVisible_edFmlastFmhseq;
    const isVisible_btnUpdateManagerInfo = rawVisible_btnUpdateManagerInfo && rawVisible_Shape3;
    const setIsVisible_btnUpdateManagerInfo = setRawVisible_btnUpdateManagerInfo;
    const isVisible_btnSearchEduSchedule = rawVisible_btnSearchEduSchedule && rawVisible_shpGubunBox;
    const setIsVisible_btnSearchEduSchedule = setRawVisible_btnSearchEduSchedule;
    const isVisible_edCmgno = rawVisible_edCmgno && rawVisible_Shape3;
    const setIsVisible_edCmgno = setRawVisible_edCmgno;
    const isVisible_edCourseCd = rawVisible_edCourseCd && rawVisible_Shape3;
    const setIsVisible_edCourseCd = setRawVisible_edCourseCd;
    const isVisible_edGateWayCd = rawVisible_edGateWayCd && rawVisible_Shape3;
    const setIsVisible_edGateWayCd = setRawVisible_edGateWayCd;
    const isVisible_edEsdate = rawVisible_edEsdate && rawVisible_Shape0;
    const setIsVisible_edEsdate = setRawVisible_edEsdate;
    const isVisible_lbText = rawVisible_lbText;
    const setIsVisible_lbText = setRawVisible_lbText;
    const isVisible_cbxEmailDomain = rawVisible_cbxEmailDomain && rawVisible_Shape3;
    const setIsVisible_cbxEmailDomain = setRawVisible_cbxEmailDomain;
    const isVisible_lbAt = rawVisible_lbAt && rawVisible_Shape3;
    const setIsVisible_lbAt = setRawVisible_lbAt;
    const isVisible_edEmailDomain = rawVisible_edEmailDomain && rawVisible_Shape3;
    const setIsVisible_edEmailDomain = setRawVisible_edEmailDomain;
    const isVisible_edResidentNoError = rawVisible_edResidentNoError && rawVisible_Shape3;
    const setIsVisible_edResidentNoError = setRawVisible_edResidentNoError;
    const isVisible_calStartTime = rawVisible_calStartTime && rawVisible_Shape3;
    const setIsVisible_calStartTime = setRawVisible_calStartTime;
    const isVisible_radAgGubun = rawVisible_radAgGubun && rawVisible_Shape2;
    const setIsVisible_radAgGubun = setRawVisible_radAgGubun;
    const isVisible_edAgNm = rawVisible_edAgNm && rawVisible_Shape2;
    const setIsVisible_edAgNm = setRawVisible_edAgNm;
    const isVisible_edCourse = rawVisible_edCourse && rawVisible_Shape5;
    const setIsVisible_edCourse = setRawVisible_edCourse;
    const isVisible_lbStatus = rawVisible_lbStatus;
    const setIsVisible_lbStatus = setRawVisible_lbStatus;
    const isVisible_btnSearchAgency = rawVisible_btnSearchAgency && rawVisible_Shape2;
    const setIsVisible_btnSearchAgency = setRawVisible_btnSearchAgency;
    const isVisible_Static23 = rawVisible_Static23 && rawVisible_Shape1;
    const setIsVisible_Static23 = setRawVisible_Static23;
    const isVisible_medLBarCodeCust = rawVisible_medLBarCodeCust && rawVisible_Shape1;
    const setIsVisible_medLBarCodeCust = setRawVisible_medLBarCodeCust;
    const isVisible_radJibuGubun = rawVisible_radJibuGubun && rawVisible_Shape1;
    const setIsVisible_radJibuGubun = setRawVisible_radJibuGubun;
    const isVisible_lbReceiveExcept = rawVisible_lbReceiveExcept && rawVisible_Shape6;
    const setIsVisible_lbReceiveExcept = setRawVisible_lbReceiveExcept;
    const isVisible_medResidentNo1 = rawVisible_medResidentNo1 && rawVisible_Shape6;
    const setIsVisible_medResidentNo1 = setRawVisible_medResidentNo1;
    const isVisible_Static25 = rawVisible_Static25 && rawVisible_Shape3;
    const setIsVisible_Static25 = setRawVisible_Static25;
    const isVisible_medPersonkey = rawVisible_medPersonkey && rawVisible_Shape3;
    const setIsVisible_medPersonkey = setRawVisible_medPersonkey;
    const isVisible_edEduExpireDate = rawVisible_edEduExpireDate && rawVisible_Shape3;
    const setIsVisible_edEduExpireDate = setRawVisible_edEduExpireDate;
    const isVisible_lbDanger = rawVisible_lbDanger && rawVisible_Shape4;
    const setIsVisible_lbDanger = setRawVisible_lbDanger;

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_ioEduPass([]);
            setds_oJibu([]);
            setds_oEduGubun([]);
            setds_oEduStudent([]);
            setds_oEduSubject([]);
            setds_oEmailDomain([]);
            setds_oCustomerInfo([]);
            setds_oFireManagerInfo([]);
            setds_oBuildingInfo([]);
            setds_ioEduPassSingle([]);
            setds_oCourse([]);
            setds_oDetailCourse([]);
            setds_ioEduPassModify([]);
            setds_ioEduPassCheck([]);
            setds_oAgGubun([]);
            setds_iOnlyKey([]);
            setds_oCBarCodeInfo([]);
            setds_oLBarCodeInfo([]);
            setds_ioEduPassMulti([]);
            setds_ioEduPassMultiCheck([]);
            setds_ioEduPassMultiSingle([]);
            setds_oBasicInfo([]);
            setds_oJibuGubun([]);
            setds_ioLBarCodeInfoCust([]);
            setds_ioYn([]);
            setds_oBnmCode([]);
            setds_oEduJubsuInfo([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnMutilSort_OnClick = () => {
        console.log('btnMutilSort_OnClick clicked');
    };
    const btnSearchAgency_OnClick = () => {
        console.log('btnSearchAgency_OnClick clicked');
    };
    const btnSearchCustMgno_OnClick = () => {
        console.log('btnSearchCustMgno_OnClick clicked');
    };
    const btnSearchEduSchedule_OnClick = () => {
        console.log('btnSearchEduSchedule_OnClick clicked');
    };
    const btnToExcel_OnClick = () => {
        console.log('btnToExcel_OnClick clicked');
    };
    const btnUpdateManagerInfo_OnClick = () => {
        console.log('btnUpdateManagerInfo_OnClick clicked');
    };
    const lfn_Cancel = () => {
        console.log('lfn_Cancel clicked');
    };
    const lfn_Delete = () => {
        console.log('lfn_Delete clicked');
    };
    const lfn_End = () => {
        console.log('lfn_End clicked');
    };
    const lfn_Input = () => {
        console.log('lfn_Input clicked');
    };
    const lfn_PrintScreen = () => {
        console.log('lfn_PrintScreen clicked');
    };
    const lfn_Save = () => {
        console.log('lfn_Save clicked');
    };
    const lfn_Search = () => {
        console.log('lfn_Search clicked');
    };

    return {
        isLoading,
        ds_ioEduPass,
        ds_oJibu,
        ds_oEduGubun,
        ds_oEduStudent,
        ds_oEduSubject,
        ds_oEmailDomain,
        ds_oCustomerInfo,
        ds_oFireManagerInfo,
        ds_oBuildingInfo,
        ds_ioEduPassSingle,
        ds_oCourse,
        ds_oDetailCourse,
        ds_ioEduPassModify,
        ds_ioEduPassCheck,
        ds_oAgGubun,
        ds_iOnlyKey,
        ds_oCBarCodeInfo,
        ds_oLBarCodeInfo,
        ds_ioEduPassMulti,
        ds_ioEduPassMultiCheck,
        ds_ioEduPassMultiSingle,
        ds_oBasicInfo,
        ds_oJibuGubun,
        ds_ioLBarCodeInfoCust,
        ds_ioYn,
        ds_oBnmCode,
        ds_oEduJubsuInfo,
        isVisible_Shape6,
        setIsVisible_Shape6,
        isVisible_shpBtnBox,
        setIsVisible_shpBtnBox,
        isVisible_Shape5,
        setIsVisible_Shape5,
        isVisible_Shape4,
        setIsVisible_Shape4,
        isVisible_divWorkFormTitle,
        setIsVisible_divWorkFormTitle,
        isVisible_gdEduPass,
        setIsVisible_gdEduPass,
        isVisible_btnMutilSort,
        setIsVisible_btnMutilSort,
        isVisible_Static7,
        setIsVisible_Static7,
        isVisible_btnSearch,
        setIsVisible_btnSearch,
        isVisible_btnInput,
        setIsVisible_btnInput,
        isVisible_btnDelete,
        setIsVisible_btnDelete,
        isVisible_btnSave,
        setIsVisible_btnSave,
        isVisible_btnCancel,
        setIsVisible_btnCancel,
        isVisible_btnToExcel,
        setIsVisible_btnToExcel,
        isVisible_btnPrintScreen,
        setIsVisible_btnPrintScreen,
        isVisible_btnEnd,
        setIsVisible_btnEnd,
        isVisible_Shape2,
        setIsVisible_Shape2,
        isVisible_Shape1,
        setIsVisible_Shape1,
        isVisible_Shape0,
        setIsVisible_Shape0,
        isVisible_Shape3,
        setIsVisible_Shape3,
        isVisible_shpGubunBox,
        setIsVisible_shpGubunBox,
        isVisible_lbJubsuDate,
        setIsVisible_lbJubsuDate,
        isVisible_Static21,
        setIsVisible_Static21,
        isVisible_Static20,
        setIsVisible_Static20,
        isVisible_Static26,
        setIsVisible_Static26,
        isVisible_cbxJibu,
        setIsVisible_cbxJibu,
        isVisible_Static16,
        setIsVisible_Static16,
        isVisible_medBirthday,
        setIsVisible_medBirthday,
        isVisible_Static0,
        setIsVisible_Static0,
        isVisible_Static15,
        setIsVisible_Static15,
        isVisible_edCustNm,
        setIsVisible_edCustNm,
        isVisible_Static8,
        setIsVisible_Static8,
        isVisible_edHpTel,
        setIsVisible_edHpTel,
        isVisible_Static13,
        setIsVisible_Static13,
        isVisible_edEmail,
        setIsVisible_edEmail,
        isVisible_Static1,
        setIsVisible_Static1,
        isVisible_edBuildingNm,
        setIsVisible_edBuildingNm,
        isVisible_Static4,
        setIsVisible_Static4,
        isVisible_edTelNo,
        setIsVisible_edTelNo,
        isVisible_Static2,
        setIsVisible_Static2,
        isVisible_edNewAddr1,
        setIsVisible_edNewAddr1,
        isVisible_medNewZipCode,
        setIsVisible_medNewZipCode,
        isVisible_edNewAddr2,
        setIsVisible_edNewAddr2,
        isVisible_lbNewAddr,
        setIsVisible_lbNewAddr,
        isVisible_Static3,
        setIsVisible_Static3,
        isVisible_Static5,
        setIsVisible_Static5,
        isVisible_edCustGugun,
        setIsVisible_edCustGugun,
        isVisible_Static6,
        setIsVisible_Static6,
        isVisible_tmEduStartTime,
        setIsVisible_tmEduStartTime,
        isVisible_lbTimeWave,
        setIsVisible_lbTimeWave,
        isVisible_tmEduEndTime,
        setIsVisible_tmEduEndTime,
        isVisible_Static24,
        setIsVisible_Static24,
        isVisible_Static9,
        setIsVisible_Static9,
        isVisible_lbStdYear,
        setIsVisible_lbStdYear,
        isVisible_edEduYear,
        setIsVisible_edEduYear,
        isVisible_lbCourse,
        setIsVisible_lbCourse,
        isVisible_Static12,
        setIsVisible_Static12,
        isVisible_edCourseNm,
        setIsVisible_edCourseNm,
        isVisible_Static14,
        setIsVisible_Static14,
        isVisible_Static17,
        setIsVisible_Static17,
        isVisible_edEduSubjectNm,
        setIsVisible_edEduSubjectNm,
        isVisible_Static10,
        setIsVisible_Static10,
        isVisible_Static11,
        setIsVisible_Static11,
        isVisible_Static18,
        setIsVisible_Static18,
        isVisible_edEduStudentNm,
        setIsVisible_edEduStudentNm,
        isVisible_Static19,
        setIsVisible_Static19,
        isVisible_edEduGubunNm,
        setIsVisible_edEduGubunNm,
        isVisible_lbSmsCnt,
        setIsVisible_lbSmsCnt,
        isVisible_medTotalCnt,
        setIsVisible_medTotalCnt,
        isVisible_lbResidentNoError,
        setIsVisible_lbResidentNoError,
        isVisible_lbAppointDate,
        setIsVisible_lbAppointDate,
        isVisible_medLastDate,
        setIsVisible_medLastDate,
        isVisible_medFeeYear,
        setIsVisible_medFeeYear,
        isVisible_Static22,
        setIsVisible_Static22,
        isVisible_edStatus,
        setIsVisible_edStatus,
        isVisible_btnSearchCustMgno,
        setIsVisible_btnSearchCustMgno,
        isVisible_medBarCode,
        setIsVisible_medBarCode,
        isVisible_medCustNo,
        setIsVisible_medCustNo,
        isVisible_medLBarCode,
        setIsVisible_medLBarCode,
        isVisible_medNoPayFee,
        setIsVisible_medNoPayFee,
        isVisible_medEduDate,
        setIsVisible_medEduDate,
        isVisible_edEsmgno,
        setIsVisible_edEsmgno,
        isVisible_edFmmgno,
        setIsVisible_edFmmgno,
        isVisible_edFmlastFmhseq,
        setIsVisible_edFmlastFmhseq,
        isVisible_btnUpdateManagerInfo,
        setIsVisible_btnUpdateManagerInfo,
        isVisible_btnSearchEduSchedule,
        setIsVisible_btnSearchEduSchedule,
        isVisible_edCmgno,
        setIsVisible_edCmgno,
        isVisible_edCourseCd,
        setIsVisible_edCourseCd,
        isVisible_edGateWayCd,
        setIsVisible_edGateWayCd,
        isVisible_edEsdate,
        setIsVisible_edEsdate,
        isVisible_lbText,
        setIsVisible_lbText,
        isVisible_cbxEmailDomain,
        setIsVisible_cbxEmailDomain,
        isVisible_lbAt,
        setIsVisible_lbAt,
        isVisible_edEmailDomain,
        setIsVisible_edEmailDomain,
        isVisible_edResidentNoError,
        setIsVisible_edResidentNoError,
        isVisible_calStartTime,
        setIsVisible_calStartTime,
        isVisible_radAgGubun,
        setIsVisible_radAgGubun,
        isVisible_edAgNm,
        setIsVisible_edAgNm,
        isVisible_edCourse,
        setIsVisible_edCourse,
        isVisible_lbStatus,
        setIsVisible_lbStatus,
        isVisible_btnSearchAgency,
        setIsVisible_btnSearchAgency,
        isVisible_Static23,
        setIsVisible_Static23,
        isVisible_medLBarCodeCust,
        setIsVisible_medLBarCodeCust,
        isVisible_radJibuGubun,
        setIsVisible_radJibuGubun,
        isVisible_lbReceiveExcept,
        setIsVisible_lbReceiveExcept,
        isVisible_medResidentNo1,
        setIsVisible_medResidentNo1,
        isVisible_Static25,
        setIsVisible_Static25,
        isVisible_medPersonkey,
        setIsVisible_medPersonkey,
        isVisible_edEduExpireDate,
        setIsVisible_edEduExpireDate,
        isVisible_lbDanger,
        setIsVisible_lbDanger,
        btnMutilSort_OnClick,
        btnSearchAgency_OnClick,
        btnSearchCustMgno_OnClick,
        btnSearchEduSchedule_OnClick,
        btnToExcel_OnClick,
        btnUpdateManagerInfo_OnClick,
        lfn_Cancel,
        lfn_Delete,
        lfn_End,
        lfn_Input,
        lfn_PrintScreen,
        lfn_Save,
        lfn_Search,
    };
};