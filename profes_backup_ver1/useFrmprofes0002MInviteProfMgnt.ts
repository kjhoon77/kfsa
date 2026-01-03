// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_oRadio, Ids_oYn, Ids_Professor, Ids_ProfessorDetail_Backup, Ids_Jibu, Ids_JibuInput, Ids_ProfessorDetail_back, Ids_TecProgMAX, Ids_Jumin, Ids_Job, Ids_SendYN, Ids_oSexGubun, Ids_oAppointMgno } from './Frmprofes0002MInviteProfMgntData';

export const useFrmprofes0002MInviteProfMgnt = () => {
    const [ds_oRadio, setds_oRadio] = useState<Ids_oRadio[]>([]);
    const [ds_oYn, setds_oYn] = useState<Ids_oYn[]>([]);
    const [ds_Professor, setds_Professor] = useState<Ids_Professor[]>([]);
    const [ds_ProfessorDetail_Backup, setds_ProfessorDetail_Backup] = useState<Ids_ProfessorDetail_Backup[]>([]);
    const [ds_Jibu, setds_Jibu] = useState<Ids_Jibu[]>([]);
    const [ds_JibuInput, setds_JibuInput] = useState<Ids_JibuInput[]>([]);
    const [ds_ProfessorDetail_back, setds_ProfessorDetail_back] = useState<Ids_ProfessorDetail_back[]>([]);
    const [ds_TecProgMAX, setds_TecProgMAX] = useState<Ids_TecProgMAX[]>([]);
    const [ds_Jumin, setds_Jumin] = useState<Ids_Jumin[]>([]);
    const [ds_Job, setds_Job] = useState<Ids_Job[]>([]);
    const [ds_SendYN, setds_SendYN] = useState<Ids_SendYN[]>([]);
    const [ds_oSexGubun, setds_oSexGubun] = useState<Ids_oSexGubun[]>([]);
    const [ds_oAppointMgno, setds_oAppointMgno] = useState<Ids_oAppointMgno[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [rawVisible_Shape1, setRawVisible_Shape1] = useState(true);
    const [rawVisible_Shape2, setRawVisible_Shape2] = useState(true);
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
    const [rawVisible_lbJibu, setRawVisible_lbJibu] = useState(true);
    const [rawVisible_btnMutilSort, setRawVisible_btnMutilSort] = useState(true);
    const [rawVisible_lbPersonNm, setRawVisible_lbPersonNm] = useState(true);
    const [rawVisible_edPersonNm, setRawVisible_edPersonNm] = useState(true);
    const [rawVisible_lbTotalCnt, setRawVisible_lbTotalCnt] = useState(true);
    const [rawVisible_medTotalCnt, setRawVisible_medTotalCnt] = useState(true);
    const [rawVisible_lbJibu2, setRawVisible_lbJibu2] = useState(true);
    const [rawVisible_cbxJibu_input, setRawVisible_cbxJibu_input] = useState(true);
    const [rawVisible_lbBirthday, setRawVisible_lbBirthday] = useState(true);
    const [rawVisible_lbYear, setRawVisible_lbYear] = useState(true);
    const [rawVisible_Static9, setRawVisible_Static9] = useState(true);
    const [rawVisible_edPersonNm2, setRawVisible_edPersonNm2] = useState(true);
    const [rawVisible_lbTel, setRawVisible_lbTel] = useState(false);
    const [rawVisible_lbHpTel, setRawVisible_lbHpTel] = useState(true);
    const [rawVisible_Static2, setRawVisible_Static2] = useState(true);
    const [rawVisible_edSosok, setRawVisible_edSosok] = useState(true);
    const [rawVisible_lbPosition, setRawVisible_lbPosition] = useState(true);
    const [rawVisible_edPosition, setRawVisible_edPosition] = useState(true);
    const [rawVisible_Static4, setRawVisible_Static4] = useState(true);
    const [rawVisible_edSedu, setRawVisible_edSedu] = useState(true);
    const [rawVisible_Static5, setRawVisible_Static5] = useState(true);
    const [rawVisible_edSlicense, setRawVisible_edSlicense] = useState(true);
    const [rawVisible_Static6, setRawVisible_Static6] = useState(true);
    const [rawVisible_Static11, setRawVisible_Static11] = useState(true);
    const [rawVisible_calDateStart, setRawVisible_calDateStart] = useState(true);
    const [rawVisible_radRadioH, setRawVisible_radRadioH] = useState(true);
    const [rawVisible_Static12, setRawVisible_Static12] = useState(true);
    const [rawVisible_edRemark, setRawVisible_edRemark] = useState(true);
    const [rawVisible_Static0, setRawVisible_Static0] = useState(true);
    const [rawVisible_btnSubject1, setRawVisible_btnSubject1] = useState(true);
    const [rawVisible_radRadioH1, setRawVisible_radRadioH1] = useState(true);
    const [rawVisible_calDateEnd, setRawVisible_calDateEnd] = useState(true);
    const [rawVisible_lbText, setRawVisible_lbText] = useState(true);
    const [rawVisible_Static1, setRawVisible_Static1] = useState(true);
    const [rawVisible_edTrainingYear, setRawVisible_edTrainingYear] = useState(true);
    const [rawVisible_edSSEQ, setRawVisible_edSSEQ] = useState(true);
    const [rawVisible_calEndDate, setRawVisible_calEndDate] = useState(true);
    const [rawVisible_edSMGNO, setRawVisible_edSMGNO] = useState(false);
    const [rawVisible_cbxJibu, setRawVisible_cbxJibu] = useState(true);
    const [rawVisible_Static3, setRawVisible_Static3] = useState(true);
    const [rawVisible_Static7, setRawVisible_Static7] = useState(true);
    const [rawVisible_edAttachFile, setRawVisible_edAttachFile] = useState(true);
    const [rawVisible_fiAttachFile, setRawVisible_fiAttachFile] = useState(true);
    const [rawVisible_fdAttachFile, setRawVisible_fdAttachFile] = useState(true);
    const [rawVisible_hfAttachFile, setRawVisible_hfAttachFile] = useState(true);
    const [rawVisible_btnUploadFile, setRawVisible_btnUploadFile] = useState(true);
    const [rawVisible_meMoney, setRawVisible_meMoney] = useState(true);
    const [rawVisible_lbFileSize, setRawVisible_lbFileSize] = useState(false);
    const [rawVisible_edTel, setRawVisible_edTel] = useState(false);
    const [rawVisible_edHpTel, setRawVisible_edHpTel] = useState(true);
    const [rawVisible_gdProfessor, setRawVisible_gdProfessor] = useState(true);
    const [rawVisible_Static10, setRawVisible_Static10] = useState(true);
    const [rawVisible_cbxJobGubun, setRawVisible_cbxJobGubun] = useState(true);
    const [rawVisible_radSendYN, setRawVisible_radSendYN] = useState(true);
    const [rawVisible_Static13, setRawVisible_Static13] = useState(true);
    const [rawVisible_edSedu2, setRawVisible_edSedu2] = useState(true);
    const [rawVisible_btnSubject2, setRawVisible_btnSubject2] = useState(true);
    const [rawVisible_Static14, setRawVisible_Static14] = useState(true);
    const [rawVisible_calBirthday, setRawVisible_calBirthday] = useState(true);
    const [rawVisible_btnApproval, setRawVisible_btnApproval] = useState(true);
    const [rawVisible_Shape3, setRawVisible_Shape3] = useState(true);
    const [rawVisible_Static15, setRawVisible_Static15] = useState(true);
    const [rawVisible_lbMode, setRawVisible_lbMode] = useState(true);
    const [rawVisible_btnSendSms, setRawVisible_btnSendSms] = useState(true);
    const [rawVisible_Static16, setRawVisible_Static16] = useState(true);
    const [rawVisible_Static17, setRawVisible_Static17] = useState(true);
    const [rawVisible_edYearLimitTime, setRawVisible_edYearLimitTime] = useState(true);
    const isVisible_Shape1 = rawVisible_Shape1;
    const setIsVisible_Shape1 = setRawVisible_Shape1;
    const isVisible_Shape2 = rawVisible_Shape2 && rawVisible_Shape1;
    const setIsVisible_Shape2 = setRawVisible_Shape2;
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
    const isVisible_lbJibu = rawVisible_lbJibu && rawVisible_shpGubunBox1;
    const setIsVisible_lbJibu = setRawVisible_lbJibu;
    const isVisible_btnMutilSort = rawVisible_btnMutilSort;
    const setIsVisible_btnMutilSort = setRawVisible_btnMutilSort;
    const isVisible_lbPersonNm = rawVisible_lbPersonNm && rawVisible_shpGubunBox1;
    const setIsVisible_lbPersonNm = setRawVisible_lbPersonNm;
    const isVisible_edPersonNm = rawVisible_edPersonNm && rawVisible_shpGubunBox1;
    const setIsVisible_edPersonNm = setRawVisible_edPersonNm;
    const isVisible_lbTotalCnt = rawVisible_lbTotalCnt;
    const setIsVisible_lbTotalCnt = setRawVisible_lbTotalCnt;
    const isVisible_medTotalCnt = rawVisible_medTotalCnt;
    const setIsVisible_medTotalCnt = setRawVisible_medTotalCnt;
    const isVisible_lbJibu2 = rawVisible_lbJibu2 && rawVisible_Shape1;
    const setIsVisible_lbJibu2 = setRawVisible_lbJibu2;
    const isVisible_cbxJibu_input = rawVisible_cbxJibu_input && rawVisible_Shape1;
    const setIsVisible_cbxJibu_input = setRawVisible_cbxJibu_input;
    const isVisible_lbBirthday = rawVisible_lbBirthday && rawVisible_Shape1;
    const setIsVisible_lbBirthday = setRawVisible_lbBirthday;
    const isVisible_lbYear = rawVisible_lbYear && rawVisible_Shape1;
    const setIsVisible_lbYear = setRawVisible_lbYear;
    const isVisible_Static9 = rawVisible_Static9 && rawVisible_Shape1;
    const setIsVisible_Static9 = setRawVisible_Static9;
    const isVisible_edPersonNm2 = rawVisible_edPersonNm2 && rawVisible_Shape1;
    const setIsVisible_edPersonNm2 = setRawVisible_edPersonNm2;
    const isVisible_lbTel = rawVisible_lbTel;
    const setIsVisible_lbTel = setRawVisible_lbTel;
    const isVisible_lbHpTel = rawVisible_lbHpTel && rawVisible_Shape1;
    const setIsVisible_lbHpTel = setRawVisible_lbHpTel;
    const isVisible_Static2 = rawVisible_Static2 && rawVisible_Shape1;
    const setIsVisible_Static2 = setRawVisible_Static2;
    const isVisible_edSosok = rawVisible_edSosok && rawVisible_Shape1;
    const setIsVisible_edSosok = setRawVisible_edSosok;
    const isVisible_lbPosition = rawVisible_lbPosition && rawVisible_Shape1;
    const setIsVisible_lbPosition = setRawVisible_lbPosition;
    const isVisible_edPosition = rawVisible_edPosition && rawVisible_Shape1;
    const setIsVisible_edPosition = setRawVisible_edPosition;
    const isVisible_Static4 = rawVisible_Static4 && rawVisible_Shape1;
    const setIsVisible_Static4 = setRawVisible_Static4;
    const isVisible_edSedu = rawVisible_edSedu && rawVisible_Shape1;
    const setIsVisible_edSedu = setRawVisible_edSedu;
    const isVisible_Static5 = rawVisible_Static5 && rawVisible_Shape1;
    const setIsVisible_Static5 = setRawVisible_Static5;
    const isVisible_edSlicense = rawVisible_edSlicense && rawVisible_Shape1;
    const setIsVisible_edSlicense = setRawVisible_edSlicense;
    const isVisible_Static6 = rawVisible_Static6 && rawVisible_Shape1;
    const setIsVisible_Static6 = setRawVisible_Static6;
    const isVisible_Static11 = rawVisible_Static11 && rawVisible_Shape2;
    const setIsVisible_Static11 = setRawVisible_Static11;
    const isVisible_calDateStart = rawVisible_calDateStart && rawVisible_Shape2;
    const setIsVisible_calDateStart = setRawVisible_calDateStart;
    const isVisible_radRadioH = rawVisible_radRadioH && rawVisible_Shape1;
    const setIsVisible_radRadioH = setRawVisible_radRadioH;
    const isVisible_Static12 = rawVisible_Static12 && rawVisible_Shape1;
    const setIsVisible_Static12 = setRawVisible_Static12;
    const isVisible_edRemark = rawVisible_edRemark && rawVisible_Shape1;
    const setIsVisible_edRemark = setRawVisible_edRemark;
    const isVisible_Static0 = rawVisible_Static0 && rawVisible_Shape2;
    const setIsVisible_Static0 = setRawVisible_Static0;
    const isVisible_btnSubject1 = rawVisible_btnSubject1 && rawVisible_Shape1;
    const setIsVisible_btnSubject1 = setRawVisible_btnSubject1;
    const isVisible_radRadioH1 = rawVisible_radRadioH1 && rawVisible_Shape2;
    const setIsVisible_radRadioH1 = setRawVisible_radRadioH1;
    const isVisible_calDateEnd = rawVisible_calDateEnd && rawVisible_Shape2;
    const setIsVisible_calDateEnd = setRawVisible_calDateEnd;
    const isVisible_lbText = rawVisible_lbText && rawVisible_Shape2;
    const setIsVisible_lbText = setRawVisible_lbText;
    const isVisible_Static1 = rawVisible_Static1 && rawVisible_Shape2;
    const setIsVisible_Static1 = setRawVisible_Static1;
    const isVisible_edTrainingYear = rawVisible_edTrainingYear && rawVisible_Shape1;
    const setIsVisible_edTrainingYear = setRawVisible_edTrainingYear;
    const isVisible_edSSEQ = rawVisible_edSSEQ && rawVisible_Shape1;
    const setIsVisible_edSSEQ = setRawVisible_edSSEQ;
    const isVisible_calEndDate = rawVisible_calEndDate && rawVisible_Shape2;
    const setIsVisible_calEndDate = setRawVisible_calEndDate;
    const isVisible_edSMGNO = rawVisible_edSMGNO && rawVisible_Shape1;
    const setIsVisible_edSMGNO = setRawVisible_edSMGNO;
    const isVisible_cbxJibu = rawVisible_cbxJibu && rawVisible_shpGubunBox1;
    const setIsVisible_cbxJibu = setRawVisible_cbxJibu;
    const isVisible_Static3 = rawVisible_Static3 && rawVisible_Shape1;
    const setIsVisible_Static3 = setRawVisible_Static3;
    const isVisible_Static7 = rawVisible_Static7 && rawVisible_Shape1;
    const setIsVisible_Static7 = setRawVisible_Static7;
    const isVisible_edAttachFile = rawVisible_edAttachFile && rawVisible_Shape1;
    const setIsVisible_edAttachFile = setRawVisible_edAttachFile;
    const isVisible_fiAttachFile = rawVisible_fiAttachFile && rawVisible_Shape1;
    const setIsVisible_fiAttachFile = setRawVisible_fiAttachFile;
    const isVisible_fdAttachFile = rawVisible_fdAttachFile && rawVisible_Shape1;
    const setIsVisible_fdAttachFile = setRawVisible_fdAttachFile;
    const isVisible_hfAttachFile = rawVisible_hfAttachFile && rawVisible_Shape1;
    const setIsVisible_hfAttachFile = setRawVisible_hfAttachFile;
    const isVisible_btnUploadFile = rawVisible_btnUploadFile && rawVisible_Shape1;
    const setIsVisible_btnUploadFile = setRawVisible_btnUploadFile;
    const isVisible_meMoney = rawVisible_meMoney && rawVisible_Shape1;
    const setIsVisible_meMoney = setRawVisible_meMoney;
    const isVisible_lbFileSize = rawVisible_lbFileSize && rawVisible_Shape1;
    const setIsVisible_lbFileSize = setRawVisible_lbFileSize;
    const isVisible_edTel = rawVisible_edTel;
    const setIsVisible_edTel = setRawVisible_edTel;
    const isVisible_edHpTel = rawVisible_edHpTel && rawVisible_Shape1;
    const setIsVisible_edHpTel = setRawVisible_edHpTel;
    const isVisible_gdProfessor = rawVisible_gdProfessor;
    const setIsVisible_gdProfessor = setRawVisible_gdProfessor;
    const isVisible_Static10 = rawVisible_Static10 && rawVisible_Shape1;
    const setIsVisible_Static10 = setRawVisible_Static10;
    const isVisible_cbxJobGubun = rawVisible_cbxJobGubun && rawVisible_Shape1;
    const setIsVisible_cbxJobGubun = setRawVisible_cbxJobGubun;
    const isVisible_radSendYN = rawVisible_radSendYN && rawVisible_shpGubunBox1;
    const setIsVisible_radSendYN = setRawVisible_radSendYN;
    const isVisible_Static13 = rawVisible_Static13 && rawVisible_shpGubunBox1;
    const setIsVisible_Static13 = setRawVisible_Static13;
    const isVisible_edSedu2 = rawVisible_edSedu2 && rawVisible_Shape1;
    const setIsVisible_edSedu2 = setRawVisible_edSedu2;
    const isVisible_btnSubject2 = rawVisible_btnSubject2 && rawVisible_Shape1;
    const setIsVisible_btnSubject2 = setRawVisible_btnSubject2;
    const isVisible_Static14 = rawVisible_Static14 && rawVisible_Shape1;
    const setIsVisible_Static14 = setRawVisible_Static14;
    const isVisible_calBirthday = rawVisible_calBirthday && rawVisible_Shape1;
    const setIsVisible_calBirthday = setRawVisible_calBirthday;
    const isVisible_btnApproval = rawVisible_btnApproval;
    const setIsVisible_btnApproval = setRawVisible_btnApproval;
    const isVisible_Shape3 = rawVisible_Shape3 && rawVisible_shpGubunBox1;
    const setIsVisible_Shape3 = setRawVisible_Shape3;
    const isVisible_Static15 = rawVisible_Static15 && rawVisible_Shape3;
    const setIsVisible_Static15 = setRawVisible_Static15;
    const isVisible_lbMode = rawVisible_lbMode && rawVisible_Shape1;
    const setIsVisible_lbMode = setRawVisible_lbMode;
    const isVisible_btnSendSms = rawVisible_btnSendSms && rawVisible_Shape1;
    const setIsVisible_btnSendSms = setRawVisible_btnSendSms;
    const isVisible_Static16 = rawVisible_Static16 && rawVisible_Shape1;
    const setIsVisible_Static16 = setRawVisible_Static16;
    const isVisible_Static17 = rawVisible_Static17 && rawVisible_Shape1;
    const setIsVisible_Static17 = setRawVisible_Static17;
    const isVisible_edYearLimitTime = rawVisible_edYearLimitTime && rawVisible_Shape1;
    const setIsVisible_edYearLimitTime = setRawVisible_edYearLimitTime;

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_oRadio([]);
            setds_oYn([]);
            setds_Professor([]);
            setds_ProfessorDetail_Backup([]);
            setds_Jibu([]);
            setds_JibuInput([]);
            setds_ProfessorDetail_back([]);
            setds_TecProgMAX([]);
            setds_Jumin([]);
            setds_Job([]);
            setds_SendYN([]);
            setds_oSexGubun([]);
            setds_oAppointMgno([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnApproval_OnClick = () => {
        console.log('btnApproval_OnClick clicked');
    };
    const btnMutilSort_OnClick = () => {
        console.log('btnMutilSort_OnClick clicked');
    };
    const btnSendSms_OnClick = () => {
        console.log('btnSendSms_OnClick clicked');
    };
    const btnSubject1_OnClick = () => {
        console.log('btnSubject1_OnClick clicked');
    };
    const btnSubject2_OnClick = () => {
        console.log('btnSubject2_OnClick clicked');
    };
    const btnToExcel_OnClick = () => {
        console.log('btnToExcel_OnClick clicked');
    };
    const btnUploadFile_OnClick = () => {
        console.log('btnUploadFile_OnClick clicked');
    };
    const lfn_Cancel = () => {
        console.log('lfn_Cancel clicked');
    };
    const lfn_Delete = () => {
        console.log('lfn_Delete clicked');
    };
    const lfn_DownloadFile = () => {
        console.log('lfn_DownloadFile clicked');
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
        ds_oRadio,
        ds_oYn,
        ds_Professor,
        ds_ProfessorDetail_Backup,
        ds_Jibu,
        ds_JibuInput,
        ds_ProfessorDetail_back,
        ds_TecProgMAX,
        ds_Jumin,
        ds_Job,
        ds_SendYN,
        ds_oSexGubun,
        ds_oAppointMgno,
        isVisible_Shape1,
        setIsVisible_Shape1,
        isVisible_Shape2,
        setIsVisible_Shape2,
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
        isVisible_lbJibu,
        setIsVisible_lbJibu,
        isVisible_btnMutilSort,
        setIsVisible_btnMutilSort,
        isVisible_lbPersonNm,
        setIsVisible_lbPersonNm,
        isVisible_edPersonNm,
        setIsVisible_edPersonNm,
        isVisible_lbTotalCnt,
        setIsVisible_lbTotalCnt,
        isVisible_medTotalCnt,
        setIsVisible_medTotalCnt,
        isVisible_lbJibu2,
        setIsVisible_lbJibu2,
        isVisible_cbxJibu_input,
        setIsVisible_cbxJibu_input,
        isVisible_lbBirthday,
        setIsVisible_lbBirthday,
        isVisible_lbYear,
        setIsVisible_lbYear,
        isVisible_Static9,
        setIsVisible_Static9,
        isVisible_edPersonNm2,
        setIsVisible_edPersonNm2,
        isVisible_lbTel,
        setIsVisible_lbTel,
        isVisible_lbHpTel,
        setIsVisible_lbHpTel,
        isVisible_Static2,
        setIsVisible_Static2,
        isVisible_edSosok,
        setIsVisible_edSosok,
        isVisible_lbPosition,
        setIsVisible_lbPosition,
        isVisible_edPosition,
        setIsVisible_edPosition,
        isVisible_Static4,
        setIsVisible_Static4,
        isVisible_edSedu,
        setIsVisible_edSedu,
        isVisible_Static5,
        setIsVisible_Static5,
        isVisible_edSlicense,
        setIsVisible_edSlicense,
        isVisible_Static6,
        setIsVisible_Static6,
        isVisible_Static11,
        setIsVisible_Static11,
        isVisible_calDateStart,
        setIsVisible_calDateStart,
        isVisible_radRadioH,
        setIsVisible_radRadioH,
        isVisible_Static12,
        setIsVisible_Static12,
        isVisible_edRemark,
        setIsVisible_edRemark,
        isVisible_Static0,
        setIsVisible_Static0,
        isVisible_btnSubject1,
        setIsVisible_btnSubject1,
        isVisible_radRadioH1,
        setIsVisible_radRadioH1,
        isVisible_calDateEnd,
        setIsVisible_calDateEnd,
        isVisible_lbText,
        setIsVisible_lbText,
        isVisible_Static1,
        setIsVisible_Static1,
        isVisible_edTrainingYear,
        setIsVisible_edTrainingYear,
        isVisible_edSSEQ,
        setIsVisible_edSSEQ,
        isVisible_calEndDate,
        setIsVisible_calEndDate,
        isVisible_edSMGNO,
        setIsVisible_edSMGNO,
        isVisible_cbxJibu,
        setIsVisible_cbxJibu,
        isVisible_Static3,
        setIsVisible_Static3,
        isVisible_Static7,
        setIsVisible_Static7,
        isVisible_edAttachFile,
        setIsVisible_edAttachFile,
        isVisible_fiAttachFile,
        setIsVisible_fiAttachFile,
        isVisible_fdAttachFile,
        setIsVisible_fdAttachFile,
        isVisible_hfAttachFile,
        setIsVisible_hfAttachFile,
        isVisible_btnUploadFile,
        setIsVisible_btnUploadFile,
        isVisible_meMoney,
        setIsVisible_meMoney,
        isVisible_lbFileSize,
        setIsVisible_lbFileSize,
        isVisible_edTel,
        setIsVisible_edTel,
        isVisible_edHpTel,
        setIsVisible_edHpTel,
        isVisible_gdProfessor,
        setIsVisible_gdProfessor,
        isVisible_Static10,
        setIsVisible_Static10,
        isVisible_cbxJobGubun,
        setIsVisible_cbxJobGubun,
        isVisible_radSendYN,
        setIsVisible_radSendYN,
        isVisible_Static13,
        setIsVisible_Static13,
        isVisible_edSedu2,
        setIsVisible_edSedu2,
        isVisible_btnSubject2,
        setIsVisible_btnSubject2,
        isVisible_Static14,
        setIsVisible_Static14,
        isVisible_calBirthday,
        setIsVisible_calBirthday,
        isVisible_btnApproval,
        setIsVisible_btnApproval,
        isVisible_Shape3,
        setIsVisible_Shape3,
        isVisible_Static15,
        setIsVisible_Static15,
        isVisible_lbMode,
        setIsVisible_lbMode,
        isVisible_btnSendSms,
        setIsVisible_btnSendSms,
        isVisible_Static16,
        setIsVisible_Static16,
        isVisible_Static17,
        setIsVisible_Static17,
        isVisible_edYearLimitTime,
        setIsVisible_edYearLimitTime,
        btnApproval_OnClick,
        btnMutilSort_OnClick,
        btnSendSms_OnClick,
        btnSubject1_OnClick,
        btnSubject2_OnClick,
        btnToExcel_OnClick,
        btnUploadFile_OnClick,
        lfn_Cancel,
        lfn_Delete,
        lfn_DownloadFile,
        lfn_End,
        lfn_Input,
        lfn_PrintScreen,
        lfn_Save,
        lfn_Search,
    };
};