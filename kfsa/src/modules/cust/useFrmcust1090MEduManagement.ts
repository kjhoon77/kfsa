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
    const [isVisible_Shape6, setIsVisible_Shape6] = useState(true);
    const [isVisible_shpBtnBox, setIsVisible_shpBtnBox] = useState(true);
    const [isVisible_Shape5, setIsVisible_Shape5] = useState(true);
    const [isVisible_Shape4, setIsVisible_Shape4] = useState(true);
    const [isVisible_divWorkFormTitle, setIsVisible_divWorkFormTitle] = useState(true);
    const [isVisible_gdEduPass, setIsVisible_gdEduPass] = useState(true);
    const [isVisible_btnMutilSort, setIsVisible_btnMutilSort] = useState(true);
    const [isVisible_Static7, setIsVisible_Static7] = useState(true);
    const [isVisible_btnSearch, setIsVisible_btnSearch] = useState(true);
    const [isVisible_btnInput, setIsVisible_btnInput] = useState(true);
    const [isVisible_btnDelete, setIsVisible_btnDelete] = useState(true);
    const [isVisible_btnSave, setIsVisible_btnSave] = useState(true);
    const [isVisible_btnCancel, setIsVisible_btnCancel] = useState(true);
    const [isVisible_btnToExcel, setIsVisible_btnToExcel] = useState(true);
    const [isVisible_btnPrintScreen, setIsVisible_btnPrintScreen] = useState(true);
    const [isVisible_btnEnd, setIsVisible_btnEnd] = useState(true);
    const [isVisible_Shape2, setIsVisible_Shape2] = useState(true);
    const [isVisible_Shape1, setIsVisible_Shape1] = useState(true);
    const [isVisible_Shape0, setIsVisible_Shape0] = useState(true);
    const [isVisible_Shape3, setIsVisible_Shape3] = useState(true);
    const [isVisible_shpGubunBox, setIsVisible_shpGubunBox] = useState(true);
    const [isVisible_lbJubsuDate, setIsVisible_lbJubsuDate] = useState(true);
    const [isVisible_Static21, setIsVisible_Static21] = useState(true);
    const [isVisible_Static20, setIsVisible_Static20] = useState(true);
    const [isVisible_Static26, setIsVisible_Static26] = useState(true);
    const [isVisible_cbxJibu, setIsVisible_cbxJibu] = useState(true);
    const [isVisible_Static16, setIsVisible_Static16] = useState(true);
    const [isVisible_medBirthday, setIsVisible_medBirthday] = useState(true);
    const [isVisible_Static0, setIsVisible_Static0] = useState(true);
    const [isVisible_Static15, setIsVisible_Static15] = useState(true);
    const [isVisible_edCustNm, setIsVisible_edCustNm] = useState(true);
    const [isVisible_Static8, setIsVisible_Static8] = useState(true);
    const [isVisible_edHpTel, setIsVisible_edHpTel] = useState(true);
    const [isVisible_Static13, setIsVisible_Static13] = useState(true);
    const [isVisible_edEmail, setIsVisible_edEmail] = useState(true);
    const [isVisible_Static1, setIsVisible_Static1] = useState(true);
    const [isVisible_edBuildingNm, setIsVisible_edBuildingNm] = useState(true);
    const [isVisible_Static4, setIsVisible_Static4] = useState(true);
    const [isVisible_edTelNo, setIsVisible_edTelNo] = useState(true);
    const [isVisible_Static2, setIsVisible_Static2] = useState(true);
    const [isVisible_edNewAddr1, setIsVisible_edNewAddr1] = useState(true);
    const [isVisible_medNewZipCode, setIsVisible_medNewZipCode] = useState(true);
    const [isVisible_edNewAddr2, setIsVisible_edNewAddr2] = useState(true);
    const [isVisible_lbNewAddr, setIsVisible_lbNewAddr] = useState(true);
    const [isVisible_Static3, setIsVisible_Static3] = useState(true);
    const [isVisible_Static5, setIsVisible_Static5] = useState(true);
    const [isVisible_edCustGugun, setIsVisible_edCustGugun] = useState(true);
    const [isVisible_Static6, setIsVisible_Static6] = useState(true);
    const [isVisible_tmEduStartTime, setIsVisible_tmEduStartTime] = useState(true);
    const [isVisible_lbTimeWave, setIsVisible_lbTimeWave] = useState(true);
    const [isVisible_tmEduEndTime, setIsVisible_tmEduEndTime] = useState(true);
    const [isVisible_Static24, setIsVisible_Static24] = useState(true);
    const [isVisible_Static9, setIsVisible_Static9] = useState(true);
    const [isVisible_lbStdYear, setIsVisible_lbStdYear] = useState(true);
    const [isVisible_edEduYear, setIsVisible_edEduYear] = useState(true);
    const [isVisible_lbCourse, setIsVisible_lbCourse] = useState(true);
    const [isVisible_Static12, setIsVisible_Static12] = useState(true);
    const [isVisible_edCourseNm, setIsVisible_edCourseNm] = useState(true);
    const [isVisible_Static14, setIsVisible_Static14] = useState(true);
    const [isVisible_Static17, setIsVisible_Static17] = useState(true);
    const [isVisible_edEduSubjectNm, setIsVisible_edEduSubjectNm] = useState(true);
    const [isVisible_Static10, setIsVisible_Static10] = useState(true);
    const [isVisible_Static11, setIsVisible_Static11] = useState(true);
    const [isVisible_Static18, setIsVisible_Static18] = useState(true);
    const [isVisible_edEduStudentNm, setIsVisible_edEduStudentNm] = useState(true);
    const [isVisible_Static19, setIsVisible_Static19] = useState(true);
    const [isVisible_edEduGubunNm, setIsVisible_edEduGubunNm] = useState(true);
    const [isVisible_lbSmsCnt, setIsVisible_lbSmsCnt] = useState(true);
    const [isVisible_medTotalCnt, setIsVisible_medTotalCnt] = useState(true);
    const [isVisible_lbResidentNoError, setIsVisible_lbResidentNoError] = useState(true);
    const [isVisible_lbAppointDate, setIsVisible_lbAppointDate] = useState(true);
    const [isVisible_medLastDate, setIsVisible_medLastDate] = useState(true);
    const [isVisible_medFeeYear, setIsVisible_medFeeYear] = useState(true);
    const [isVisible_Static22, setIsVisible_Static22] = useState(true);
    const [isVisible_edStatus, setIsVisible_edStatus] = useState(true);
    const [isVisible_btnSearchCustMgno, setIsVisible_btnSearchCustMgno] = useState(true);
    const [isVisible_medBarCode, setIsVisible_medBarCode] = useState(true);
    const [isVisible_medCustNo, setIsVisible_medCustNo] = useState(true);
    const [isVisible_medLBarCode, setIsVisible_medLBarCode] = useState(true);
    const [isVisible_medNoPayFee, setIsVisible_medNoPayFee] = useState(true);
    const [isVisible_medEduDate, setIsVisible_medEduDate] = useState(true);
    const [isVisible_edEsmgno, setIsVisible_edEsmgno] = useState(false);
    const [isVisible_edFmmgno, setIsVisible_edFmmgno] = useState(false);
    const [isVisible_edFmlastFmhseq, setIsVisible_edFmlastFmhseq] = useState(false);
    const [isVisible_btnUpdateManagerInfo, setIsVisible_btnUpdateManagerInfo] = useState(true);
    const [isVisible_btnSearchEduSchedule, setIsVisible_btnSearchEduSchedule] = useState(true);
    const [isVisible_edCmgno, setIsVisible_edCmgno] = useState(false);
    const [isVisible_edCourseCd, setIsVisible_edCourseCd] = useState(false);
    const [isVisible_edGateWayCd, setIsVisible_edGateWayCd] = useState(false);
    const [isVisible_edEsdate, setIsVisible_edEsdate] = useState(false);
    const [isVisible_lbText, setIsVisible_lbText] = useState(true);
    const [isVisible_cbxEmailDomain, setIsVisible_cbxEmailDomain] = useState(true);
    const [isVisible_lbAt, setIsVisible_lbAt] = useState(true);
    const [isVisible_edEmailDomain, setIsVisible_edEmailDomain] = useState(true);
    const [isVisible_edResidentNoError, setIsVisible_edResidentNoError] = useState(false);
    const [isVisible_calStartTime, setIsVisible_calStartTime] = useState(true);
    const [isVisible_radAgGubun, setIsVisible_radAgGubun] = useState(true);
    const [isVisible_edAgNm, setIsVisible_edAgNm] = useState(true);
    const [isVisible_edCourse, setIsVisible_edCourse] = useState(false);
    const [isVisible_lbStatus, setIsVisible_lbStatus] = useState(false);
    const [isVisible_btnSearchAgency, setIsVisible_btnSearchAgency] = useState(true);
    const [isVisible_Static23, setIsVisible_Static23] = useState(true);
    const [isVisible_medLBarCodeCust, setIsVisible_medLBarCodeCust] = useState(true);
    const [isVisible_radJibuGubun, setIsVisible_radJibuGubun] = useState(true);
    const [isVisible_lbReceiveExcept, setIsVisible_lbReceiveExcept] = useState(true);
    const [isVisible_medResidentNo1, setIsVisible_medResidentNo1] = useState(true);
    const [isVisible_Static25, setIsVisible_Static25] = useState(true);
    const [isVisible_medPersonkey, setIsVisible_medPersonkey] = useState(true);
    const [isVisible_edEduExpireDate, setIsVisible_edEduExpireDate] = useState(false);
    const [isVisible_lbDanger, setIsVisible_lbDanger] = useState(false);

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