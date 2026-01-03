// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_oBCode, Ids_oMCode, Ids_oSCode, Ids_oSubulGubunH, Ids_oUseTargetB, Ids_oJibu, Ids_oJibuAll, Ids_oRCode, Ids_oEduSchedule, Ids_oSubulGubunV, Ids_oBCodeAll, Ids_oRCodeAll, Ids_oMCodeAll, Ids_ioEduItemH, Ids_ioEduItemHUnit, Ids_ioEduItemSingle, Ids_iOnlyKey, Ids_oEduScheduleSingle, Ids_oTrainingOrderSingle, Ids_oUseTargetL, Ids_oUseTargetF, Ids_oUseTargetC, Ids_oReceiveJibu } from './Frmitem0002MEduItemHMgmtData';

export const useFrmitem0002MEduItemHMgmt = () => {
    const [ds_oBCode, setds_oBCode] = useState<Ids_oBCode[]>([]);
    const [ds_oMCode, setds_oMCode] = useState<Ids_oMCode[]>([]);
    const [ds_oSCode, setds_oSCode] = useState<Ids_oSCode[]>([]);
    const [ds_oSubulGubunH, setds_oSubulGubunH] = useState<Ids_oSubulGubunH[]>([]);
    const [ds_oUseTargetB, setds_oUseTargetB] = useState<Ids_oUseTargetB[]>([]);
    const [ds_oJibu, setds_oJibu] = useState<Ids_oJibu[]>([]);
    const [ds_oJibuAll, setds_oJibuAll] = useState<Ids_oJibuAll[]>([]);
    const [ds_oRCode, setds_oRCode] = useState<Ids_oRCode[]>([]);
    const [ds_oEduSchedule, setds_oEduSchedule] = useState<Ids_oEduSchedule[]>([]);
    const [ds_oSubulGubunV, setds_oSubulGubunV] = useState<Ids_oSubulGubunV[]>([]);
    const [ds_oBCodeAll, setds_oBCodeAll] = useState<Ids_oBCodeAll[]>([]);
    const [ds_oRCodeAll, setds_oRCodeAll] = useState<Ids_oRCodeAll[]>([]);
    const [ds_oMCodeAll, setds_oMCodeAll] = useState<Ids_oMCodeAll[]>([]);
    const [ds_ioEduItemH, setds_ioEduItemH] = useState<Ids_ioEduItemH[]>([]);
    const [ds_ioEduItemHUnit, setds_ioEduItemHUnit] = useState<Ids_ioEduItemHUnit[]>([]);
    const [ds_ioEduItemSingle, setds_ioEduItemSingle] = useState<Ids_ioEduItemSingle[]>([]);
    const [ds_iOnlyKey, setds_iOnlyKey] = useState<Ids_iOnlyKey[]>([]);
    const [ds_oEduScheduleSingle, setds_oEduScheduleSingle] = useState<Ids_oEduScheduleSingle[]>([]);
    const [ds_oTrainingOrderSingle, setds_oTrainingOrderSingle] = useState<Ids_oTrainingOrderSingle[]>([]);
    const [ds_oUseTargetL, setds_oUseTargetL] = useState<Ids_oUseTargetL[]>([]);
    const [ds_oUseTargetF, setds_oUseTargetF] = useState<Ids_oUseTargetF[]>([]);
    const [ds_oUseTargetC, setds_oUseTargetC] = useState<Ids_oUseTargetC[]>([]);
    const [ds_oReceiveJibu, setds_oReceiveJibu] = useState<Ids_oReceiveJibu[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [rawVisible_Shape1, setRawVisible_Shape1] = useState(true);
    const [rawVisible_radSubulGubunV, setRawVisible_radSubulGubunV] = useState(false);
    const [rawVisible_divEdu, setRawVisible_divEdu] = useState(false);
    const [rawVisible_lbCourse, setRawVisible_lbCourse] = useState(true);
    const [rawVisible_edCourse, setRawVisible_edCourse] = useState(true);
    const [rawVisible_lbSchedule, setRawVisible_lbSchedule] = useState(true);
    const [rawVisible_edSchedule, setRawVisible_edSchedule] = useState(true);
    const [rawVisible_Static1, setRawVisible_Static1] = useState(true);
    const [rawVisible_edJubsuCnt, setRawVisible_edJubsuCnt] = useState(true);
    const [rawVisible_lbYear, setRawVisible_lbYear] = useState(true);
    const [rawVisible_edYear, setRawVisible_edYear] = useState(true);
    const [rawVisible_Edit4, setRawVisible_Edit4] = useState(true);
    const [rawVisible_edTime, setRawVisible_edTime] = useState(true);
    const [rawVisible_shpGubunBox1, setRawVisible_shpGubunBox1] = useState(true);
    const [rawVisible_divWorkFormTitle, setRawVisible_divWorkFormTitle] = useState(true);
    const [rawVisible_Shape0, setRawVisible_Shape0] = useState(true);
    const [rawVisible_btnSearch, setRawVisible_btnSearch] = useState(true);
    const [rawVisible_btnInput, setRawVisible_btnInput] = useState(true);
    const [rawVisible_btnDelete, setRawVisible_btnDelete] = useState(true);
    const [rawVisible_btnSave, setRawVisible_btnSave] = useState(true);
    const [rawVisible_btnCancel, setRawVisible_btnCancel] = useState(true);
    const [rawVisible_btnToExcel, setRawVisible_btnToExcel] = useState(true);
    const [rawVisible_btnPrintScreen, setRawVisible_btnPrintScreen] = useState(true);
    const [rawVisible_btnEnd, setRawVisible_btnEnd] = useState(true);
    const [rawVisible_Static8, setRawVisible_Static8] = useState(true);
    const [rawVisible_btnMutilSort, setRawVisible_btnMutilSort] = useState(true);
    const [rawVisible_lbTotalCnt, setRawVisible_lbTotalCnt] = useState(true);
    const [rawVisible_medTotalCnt, setRawVisible_medTotalCnt] = useState(true);
    const [rawVisible_gdEduItemH, setRawVisible_gdEduItemH] = useState(true);
    const [rawVisible_lbJibu, setRawVisible_lbJibu] = useState(true);
    const [rawVisible_cbxJibu, setRawVisible_cbxJibu] = useState(true);
    const [rawVisible_Static13, setRawVisible_Static13] = useState(false);
    const [rawVisible_cbxEiRCdSearch, setRawVisible_cbxEiRCdSearch] = useState(false);
    const [rawVisible_cbxEiBCdSearch, setRawVisible_cbxEiBCdSearch] = useState(true);
    const [rawVisible_lbEiBCdSearch, setRawVisible_lbEiBCdSearch] = useState(true);
    const [rawVisible_lbEiRCd, setRawVisible_lbEiRCd] = useState(false);
    const [rawVisible_cbxEiRCd, setRawVisible_cbxEiRCd] = useState(false);
    const [rawVisible_lbEiBCd, setRawVisible_lbEiBCd] = useState(true);
    const [rawVisible_cbxEiBCd, setRawVisible_cbxEiBCd] = useState(true);
    const [rawVisible_lbEiMCd, setRawVisible_lbEiMCd] = useState(true);
    const [rawVisible_cbxEiMCd, setRawVisible_cbxEiMCd] = useState(true);
    const [rawVisible_lbEiSCd, setRawVisible_lbEiSCd] = useState(true);
    const [rawVisible_cbxEiSCd, setRawVisible_cbxEiSCd] = useState(true);
    const [rawVisible_lbSubulGubun, setRawVisible_lbSubulGubun] = useState(true);
    const [rawVisible_lbUseTarget, setRawVisible_lbUseTarget] = useState(true);
    const [rawVisible_lbEduSchedule, setRawVisible_lbEduSchedule] = useState(true);
    const [rawVisible_radSubulGubunH, setRawVisible_radSubulGubunH] = useState(true);
    const [rawVisible_lbDept, setRawVisible_lbDept] = useState(true);
    const [rawVisible_cbxDept, setRawVisible_cbxDept] = useState(true);
    const [rawVisible_lbEiMCdSearch, setRawVisible_lbEiMCdSearch] = useState(true);
    const [rawVisible_cbxEiMCdSearch, setRawVisible_cbxEiMCdSearch] = useState(true);
    const [rawVisible_lbSubulCnt, setRawVisible_lbSubulCnt] = useState(true);
    const [rawVisible_medSubulCnt, setRawVisible_medSubulCnt] = useState(true);
    const [rawVisible_lbContent, setRawVisible_lbContent] = useState(true);
    const [rawVisible_edContent, setRawVisible_edContent] = useState(true);
    const [rawVisible_radEduSchedule, setRawVisible_radEduSchedule] = useState(true);
    const [rawVisible_btnSearchEduSchedule, setRawVisible_btnSearchEduSchedule] = useState(true);
    const [rawVisible_divTra, setRawVisible_divTra] = useState(true);
    const [rawVisible_lbJubsuCnt, setRawVisible_lbJubsuCnt] = useState(true);
    const [rawVisible_lbOrder, setRawVisible_lbOrder] = useState(true);
    const [rawVisible_edOrder, setRawVisible_edOrder] = useState(true);
    const [rawVisible_edEduInfo, setRawVisible_edEduInfo] = useState(true);
    const [rawVisible_lbSubulDate, setRawVisible_lbSubulDate] = useState(true);
    const [rawVisible_calSubulDate, setRawVisible_calSubulDate] = useState(true);
    const [rawVisible_edEimgno, setRawVisible_edEimgno] = useState(false);
    const [rawVisible_edEdumgno, setRawVisible_edEdumgno] = useState(false);
    const [rawVisible_edSubulGubun, setRawVisible_edSubulGubun] = useState(false);
    const [rawVisible_lbStatus, setRawVisible_lbStatus] = useState(true);
    const [rawVisible_edEhmgno, setRawVisible_edEhmgno] = useState(false);
    const [rawVisible_radUseTargetF, setRawVisible_radUseTargetF] = useState(false);
    const [rawVisible_radUseTargetC, setRawVisible_radUseTargetC] = useState(false);
    const [rawVisible_radUseTargetL, setRawVisible_radUseTargetL] = useState(false);
    const [rawVisible_radUseTargetB, setRawVisible_radUseTargetB] = useState(true);
    const [rawVisible_edUseTarget, setRawVisible_edUseTarget] = useState(false);
    const [rawVisible_cbxReceiveDept, setRawVisible_cbxReceiveDept] = useState(false);
    const [rawVisible_lbReceiveDept, setRawVisible_lbReceiveDept] = useState(false);
    const isVisible_Shape1 = rawVisible_Shape1;
    const setIsVisible_Shape1 = setRawVisible_Shape1;
    const isVisible_radSubulGubunV = rawVisible_radSubulGubunV && rawVisible_Shape1;
    const setIsVisible_radSubulGubunV = setRawVisible_radSubulGubunV;
    const isVisible_divEdu = rawVisible_divEdu && rawVisible_divTra;
    const setIsVisible_divEdu = setRawVisible_divEdu;
    const isVisible_lbCourse = rawVisible_lbCourse;
    const setIsVisible_lbCourse = setRawVisible_lbCourse;
    const isVisible_edCourse = rawVisible_edCourse;
    const setIsVisible_edCourse = setRawVisible_edCourse;
    const isVisible_lbSchedule = rawVisible_lbSchedule;
    const setIsVisible_lbSchedule = setRawVisible_lbSchedule;
    const isVisible_edSchedule = rawVisible_edSchedule;
    const setIsVisible_edSchedule = setRawVisible_edSchedule;
    const isVisible_Static1 = rawVisible_Static1;
    const setIsVisible_Static1 = setRawVisible_Static1;
    const isVisible_edJubsuCnt = rawVisible_edJubsuCnt;
    const setIsVisible_edJubsuCnt = setRawVisible_edJubsuCnt;
    const isVisible_lbYear = rawVisible_lbYear;
    const setIsVisible_lbYear = setRawVisible_lbYear;
    const isVisible_edYear = rawVisible_edYear;
    const setIsVisible_edYear = setRawVisible_edYear;
    const isVisible_Edit4 = rawVisible_Edit4 && rawVisible_divWorkFormTitle;
    const setIsVisible_Edit4 = setRawVisible_Edit4;
    const isVisible_edTime = rawVisible_edTime;
    const setIsVisible_edTime = setRawVisible_edTime;
    const isVisible_shpGubunBox1 = rawVisible_shpGubunBox1;
    const setIsVisible_shpGubunBox1 = setRawVisible_shpGubunBox1;
    const isVisible_divWorkFormTitle = rawVisible_divWorkFormTitle;
    const setIsVisible_divWorkFormTitle = setRawVisible_divWorkFormTitle;
    const isVisible_Shape0 = rawVisible_Shape0;
    const setIsVisible_Shape0 = setRawVisible_Shape0;
    const isVisible_btnSearch = rawVisible_btnSearch && rawVisible_Shape0;
    const setIsVisible_btnSearch = setRawVisible_btnSearch;
    const isVisible_btnInput = rawVisible_btnInput && rawVisible_Shape0;
    const setIsVisible_btnInput = setRawVisible_btnInput;
    const isVisible_btnDelete = rawVisible_btnDelete && rawVisible_Shape0;
    const setIsVisible_btnDelete = setRawVisible_btnDelete;
    const isVisible_btnSave = rawVisible_btnSave && rawVisible_Shape0;
    const setIsVisible_btnSave = setRawVisible_btnSave;
    const isVisible_btnCancel = rawVisible_btnCancel && rawVisible_Shape0;
    const setIsVisible_btnCancel = setRawVisible_btnCancel;
    const isVisible_btnToExcel = rawVisible_btnToExcel && rawVisible_Shape0;
    const setIsVisible_btnToExcel = setRawVisible_btnToExcel;
    const isVisible_btnPrintScreen = rawVisible_btnPrintScreen && rawVisible_Shape0;
    const setIsVisible_btnPrintScreen = setRawVisible_btnPrintScreen;
    const isVisible_btnEnd = rawVisible_btnEnd && rawVisible_Shape0;
    const setIsVisible_btnEnd = setRawVisible_btnEnd;
    const isVisible_Static8 = rawVisible_Static8;
    const setIsVisible_Static8 = setRawVisible_Static8;
    const isVisible_btnMutilSort = rawVisible_btnMutilSort;
    const setIsVisible_btnMutilSort = setRawVisible_btnMutilSort;
    const isVisible_lbTotalCnt = rawVisible_lbTotalCnt;
    const setIsVisible_lbTotalCnt = setRawVisible_lbTotalCnt;
    const isVisible_medTotalCnt = rawVisible_medTotalCnt;
    const setIsVisible_medTotalCnt = setRawVisible_medTotalCnt;
    const isVisible_gdEduItemH = rawVisible_gdEduItemH;
    const setIsVisible_gdEduItemH = setRawVisible_gdEduItemH;
    const isVisible_lbJibu = rawVisible_lbJibu && rawVisible_shpGubunBox1;
    const setIsVisible_lbJibu = setRawVisible_lbJibu;
    const isVisible_cbxJibu = rawVisible_cbxJibu && rawVisible_shpGubunBox1;
    const setIsVisible_cbxJibu = setRawVisible_cbxJibu;
    const isVisible_Static13 = rawVisible_Static13;
    const setIsVisible_Static13 = setRawVisible_Static13;
    const isVisible_cbxEiRCdSearch = rawVisible_cbxEiRCdSearch;
    const setIsVisible_cbxEiRCdSearch = setRawVisible_cbxEiRCdSearch;
    const isVisible_cbxEiBCdSearch = rawVisible_cbxEiBCdSearch && rawVisible_shpGubunBox1;
    const setIsVisible_cbxEiBCdSearch = setRawVisible_cbxEiBCdSearch;
    const isVisible_lbEiBCdSearch = rawVisible_lbEiBCdSearch && rawVisible_shpGubunBox1;
    const setIsVisible_lbEiBCdSearch = setRawVisible_lbEiBCdSearch;
    const isVisible_lbEiRCd = rawVisible_lbEiRCd && rawVisible_Shape1;
    const setIsVisible_lbEiRCd = setRawVisible_lbEiRCd;
    const isVisible_cbxEiRCd = rawVisible_cbxEiRCd && rawVisible_Shape1;
    const setIsVisible_cbxEiRCd = setRawVisible_cbxEiRCd;
    const isVisible_lbEiBCd = rawVisible_lbEiBCd && rawVisible_Shape1;
    const setIsVisible_lbEiBCd = setRawVisible_lbEiBCd;
    const isVisible_cbxEiBCd = rawVisible_cbxEiBCd && rawVisible_Shape1;
    const setIsVisible_cbxEiBCd = setRawVisible_cbxEiBCd;
    const isVisible_lbEiMCd = rawVisible_lbEiMCd && rawVisible_Shape1;
    const setIsVisible_lbEiMCd = setRawVisible_lbEiMCd;
    const isVisible_cbxEiMCd = rawVisible_cbxEiMCd && rawVisible_Shape1;
    const setIsVisible_cbxEiMCd = setRawVisible_cbxEiMCd;
    const isVisible_lbEiSCd = rawVisible_lbEiSCd && rawVisible_Shape1;
    const setIsVisible_lbEiSCd = setRawVisible_lbEiSCd;
    const isVisible_cbxEiSCd = rawVisible_cbxEiSCd && rawVisible_Shape1;
    const setIsVisible_cbxEiSCd = setRawVisible_cbxEiSCd;
    const isVisible_lbSubulGubun = rawVisible_lbSubulGubun && rawVisible_Shape1;
    const setIsVisible_lbSubulGubun = setRawVisible_lbSubulGubun;
    const isVisible_lbUseTarget = rawVisible_lbUseTarget && rawVisible_Shape1;
    const setIsVisible_lbUseTarget = setRawVisible_lbUseTarget;
    const isVisible_lbEduSchedule = rawVisible_lbEduSchedule && rawVisible_Shape1;
    const setIsVisible_lbEduSchedule = setRawVisible_lbEduSchedule;
    const isVisible_radSubulGubunH = rawVisible_radSubulGubunH && rawVisible_Shape1;
    const setIsVisible_radSubulGubunH = setRawVisible_radSubulGubunH;
    const isVisible_lbDept = rawVisible_lbDept && rawVisible_Shape1;
    const setIsVisible_lbDept = setRawVisible_lbDept;
    const isVisible_cbxDept = rawVisible_cbxDept && rawVisible_Shape1;
    const setIsVisible_cbxDept = setRawVisible_cbxDept;
    const isVisible_lbEiMCdSearch = rawVisible_lbEiMCdSearch && rawVisible_shpGubunBox1;
    const setIsVisible_lbEiMCdSearch = setRawVisible_lbEiMCdSearch;
    const isVisible_cbxEiMCdSearch = rawVisible_cbxEiMCdSearch && rawVisible_shpGubunBox1;
    const setIsVisible_cbxEiMCdSearch = setRawVisible_cbxEiMCdSearch;
    const isVisible_lbSubulCnt = rawVisible_lbSubulCnt && rawVisible_Shape1;
    const setIsVisible_lbSubulCnt = setRawVisible_lbSubulCnt;
    const isVisible_medSubulCnt = rawVisible_medSubulCnt && rawVisible_Shape1;
    const setIsVisible_medSubulCnt = setRawVisible_medSubulCnt;
    const isVisible_lbContent = rawVisible_lbContent && rawVisible_Shape1;
    const setIsVisible_lbContent = setRawVisible_lbContent;
    const isVisible_edContent = rawVisible_edContent && rawVisible_Shape1;
    const setIsVisible_edContent = setRawVisible_edContent;
    const isVisible_radEduSchedule = rawVisible_radEduSchedule && rawVisible_Shape1;
    const setIsVisible_radEduSchedule = setRawVisible_radEduSchedule;
    const isVisible_btnSearchEduSchedule = rawVisible_btnSearchEduSchedule && rawVisible_Shape1;
    const setIsVisible_btnSearchEduSchedule = setRawVisible_btnSearchEduSchedule;
    const isVisible_divTra = rawVisible_divTra && rawVisible_divEdu;
    const setIsVisible_divTra = setRawVisible_divTra;
    const isVisible_lbJubsuCnt = rawVisible_lbJubsuCnt;
    const setIsVisible_lbJubsuCnt = setRawVisible_lbJubsuCnt;
    const isVisible_lbOrder = rawVisible_lbOrder;
    const setIsVisible_lbOrder = setRawVisible_lbOrder;
    const isVisible_edOrder = rawVisible_edOrder;
    const setIsVisible_edOrder = setRawVisible_edOrder;
    const isVisible_edEduInfo = rawVisible_edEduInfo && rawVisible_divWorkFormTitle;
    const setIsVisible_edEduInfo = setRawVisible_edEduInfo;
    const isVisible_lbSubulDate = rawVisible_lbSubulDate && rawVisible_Shape1;
    const setIsVisible_lbSubulDate = setRawVisible_lbSubulDate;
    const isVisible_calSubulDate = rawVisible_calSubulDate && rawVisible_Shape1;
    const setIsVisible_calSubulDate = setRawVisible_calSubulDate;
    const isVisible_edEimgno = rawVisible_edEimgno && rawVisible_Shape1;
    const setIsVisible_edEimgno = setRawVisible_edEimgno;
    const isVisible_edEdumgno = rawVisible_edEdumgno && rawVisible_Shape1;
    const setIsVisible_edEdumgno = setRawVisible_edEdumgno;
    const isVisible_edSubulGubun = rawVisible_edSubulGubun && rawVisible_Shape1;
    const setIsVisible_edSubulGubun = setRawVisible_edSubulGubun;
    const isVisible_lbStatus = rawVisible_lbStatus && rawVisible_Shape1;
    const setIsVisible_lbStatus = setRawVisible_lbStatus;
    const isVisible_edEhmgno = rawVisible_edEhmgno && rawVisible_Shape1;
    const setIsVisible_edEhmgno = setRawVisible_edEhmgno;
    const isVisible_radUseTargetF = rawVisible_radUseTargetF && rawVisible_Shape1;
    const setIsVisible_radUseTargetF = setRawVisible_radUseTargetF;
    const isVisible_radUseTargetC = rawVisible_radUseTargetC && rawVisible_Shape1;
    const setIsVisible_radUseTargetC = setRawVisible_radUseTargetC;
    const isVisible_radUseTargetL = rawVisible_radUseTargetL && rawVisible_Shape1;
    const setIsVisible_radUseTargetL = setRawVisible_radUseTargetL;
    const isVisible_radUseTargetB = rawVisible_radUseTargetB && rawVisible_Shape1;
    const setIsVisible_radUseTargetB = setRawVisible_radUseTargetB;
    const isVisible_edUseTarget = rawVisible_edUseTarget && rawVisible_Shape1;
    const setIsVisible_edUseTarget = setRawVisible_edUseTarget;
    const isVisible_cbxReceiveDept = rawVisible_cbxReceiveDept && rawVisible_Shape1;
    const setIsVisible_cbxReceiveDept = setRawVisible_cbxReceiveDept;
    const isVisible_lbReceiveDept = rawVisible_lbReceiveDept && rawVisible_Shape1;
    const setIsVisible_lbReceiveDept = setRawVisible_lbReceiveDept;

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_oBCode([]);
            setds_oMCode([]);
            setds_oSCode([]);
            setds_oSubulGubunH([]);
            setds_oUseTargetB([]);
            setds_oJibu([]);
            setds_oJibuAll([]);
            setds_oRCode([]);
            setds_oEduSchedule([]);
            setds_oSubulGubunV([]);
            setds_oBCodeAll([]);
            setds_oRCodeAll([]);
            setds_oMCodeAll([]);
            setds_ioEduItemH([]);
            setds_ioEduItemHUnit([]);
            setds_ioEduItemSingle([]);
            setds_iOnlyKey([]);
            setds_oEduScheduleSingle([]);
            setds_oTrainingOrderSingle([]);
            setds_oUseTargetL([]);
            setds_oUseTargetF([]);
            setds_oUseTargetC([]);
            setds_oReceiveJibu([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnMutilSort_OnClick = () => {
        console.log('btnMutilSort_OnClick clicked');
    };
    const btnSearchEduSchedule_OnClick = () => {
        console.log('btnSearchEduSchedule_OnClick clicked');
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
    const lfn_Excel = () => {
        console.log('lfn_Excel clicked');
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
        ds_oBCode,
        ds_oMCode,
        ds_oSCode,
        ds_oSubulGubunH,
        ds_oUseTargetB,
        ds_oJibu,
        ds_oJibuAll,
        ds_oRCode,
        ds_oEduSchedule,
        ds_oSubulGubunV,
        ds_oBCodeAll,
        ds_oRCodeAll,
        ds_oMCodeAll,
        ds_ioEduItemH,
        ds_ioEduItemHUnit,
        ds_ioEduItemSingle,
        ds_iOnlyKey,
        ds_oEduScheduleSingle,
        ds_oTrainingOrderSingle,
        ds_oUseTargetL,
        ds_oUseTargetF,
        ds_oUseTargetC,
        ds_oReceiveJibu,
        isVisible_Shape1,
        setIsVisible_Shape1,
        isVisible_radSubulGubunV,
        setIsVisible_radSubulGubunV,
        isVisible_divEdu,
        setIsVisible_divEdu,
        isVisible_lbCourse,
        setIsVisible_lbCourse,
        isVisible_edCourse,
        setIsVisible_edCourse,
        isVisible_lbSchedule,
        setIsVisible_lbSchedule,
        isVisible_edSchedule,
        setIsVisible_edSchedule,
        isVisible_Static1,
        setIsVisible_Static1,
        isVisible_edJubsuCnt,
        setIsVisible_edJubsuCnt,
        isVisible_lbYear,
        setIsVisible_lbYear,
        isVisible_edYear,
        setIsVisible_edYear,
        isVisible_Edit4,
        setIsVisible_Edit4,
        isVisible_edTime,
        setIsVisible_edTime,
        isVisible_shpGubunBox1,
        setIsVisible_shpGubunBox1,
        isVisible_divWorkFormTitle,
        setIsVisible_divWorkFormTitle,
        isVisible_Shape0,
        setIsVisible_Shape0,
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
        isVisible_Static8,
        setIsVisible_Static8,
        isVisible_btnMutilSort,
        setIsVisible_btnMutilSort,
        isVisible_lbTotalCnt,
        setIsVisible_lbTotalCnt,
        isVisible_medTotalCnt,
        setIsVisible_medTotalCnt,
        isVisible_gdEduItemH,
        setIsVisible_gdEduItemH,
        isVisible_lbJibu,
        setIsVisible_lbJibu,
        isVisible_cbxJibu,
        setIsVisible_cbxJibu,
        isVisible_Static13,
        setIsVisible_Static13,
        isVisible_cbxEiRCdSearch,
        setIsVisible_cbxEiRCdSearch,
        isVisible_cbxEiBCdSearch,
        setIsVisible_cbxEiBCdSearch,
        isVisible_lbEiBCdSearch,
        setIsVisible_lbEiBCdSearch,
        isVisible_lbEiRCd,
        setIsVisible_lbEiRCd,
        isVisible_cbxEiRCd,
        setIsVisible_cbxEiRCd,
        isVisible_lbEiBCd,
        setIsVisible_lbEiBCd,
        isVisible_cbxEiBCd,
        setIsVisible_cbxEiBCd,
        isVisible_lbEiMCd,
        setIsVisible_lbEiMCd,
        isVisible_cbxEiMCd,
        setIsVisible_cbxEiMCd,
        isVisible_lbEiSCd,
        setIsVisible_lbEiSCd,
        isVisible_cbxEiSCd,
        setIsVisible_cbxEiSCd,
        isVisible_lbSubulGubun,
        setIsVisible_lbSubulGubun,
        isVisible_lbUseTarget,
        setIsVisible_lbUseTarget,
        isVisible_lbEduSchedule,
        setIsVisible_lbEduSchedule,
        isVisible_radSubulGubunH,
        setIsVisible_radSubulGubunH,
        isVisible_lbDept,
        setIsVisible_lbDept,
        isVisible_cbxDept,
        setIsVisible_cbxDept,
        isVisible_lbEiMCdSearch,
        setIsVisible_lbEiMCdSearch,
        isVisible_cbxEiMCdSearch,
        setIsVisible_cbxEiMCdSearch,
        isVisible_lbSubulCnt,
        setIsVisible_lbSubulCnt,
        isVisible_medSubulCnt,
        setIsVisible_medSubulCnt,
        isVisible_lbContent,
        setIsVisible_lbContent,
        isVisible_edContent,
        setIsVisible_edContent,
        isVisible_radEduSchedule,
        setIsVisible_radEduSchedule,
        isVisible_btnSearchEduSchedule,
        setIsVisible_btnSearchEduSchedule,
        isVisible_divTra,
        setIsVisible_divTra,
        isVisible_lbJubsuCnt,
        setIsVisible_lbJubsuCnt,
        isVisible_lbOrder,
        setIsVisible_lbOrder,
        isVisible_edOrder,
        setIsVisible_edOrder,
        isVisible_edEduInfo,
        setIsVisible_edEduInfo,
        isVisible_lbSubulDate,
        setIsVisible_lbSubulDate,
        isVisible_calSubulDate,
        setIsVisible_calSubulDate,
        isVisible_edEimgno,
        setIsVisible_edEimgno,
        isVisible_edEdumgno,
        setIsVisible_edEdumgno,
        isVisible_edSubulGubun,
        setIsVisible_edSubulGubun,
        isVisible_lbStatus,
        setIsVisible_lbStatus,
        isVisible_edEhmgno,
        setIsVisible_edEhmgno,
        isVisible_radUseTargetF,
        setIsVisible_radUseTargetF,
        isVisible_radUseTargetC,
        setIsVisible_radUseTargetC,
        isVisible_radUseTargetL,
        setIsVisible_radUseTargetL,
        isVisible_radUseTargetB,
        setIsVisible_radUseTargetB,
        isVisible_edUseTarget,
        setIsVisible_edUseTarget,
        isVisible_cbxReceiveDept,
        setIsVisible_cbxReceiveDept,
        isVisible_lbReceiveDept,
        setIsVisible_lbReceiveDept,
        btnMutilSort_OnClick,
        btnSearchEduSchedule_OnClick,
        lfn_Cancel,
        lfn_Delete,
        lfn_End,
        lfn_Excel,
        lfn_Input,
        lfn_PrintScreen,
        lfn_Save,
        lfn_Search,
    };
};