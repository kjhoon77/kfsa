// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_oCode1, Ids_oCode2, Ids_oCode3, Ids_oSubulGubunH, Ids_oUseTargetB, Ids_oJibu, Ids_oJibuAll, Ids_oRCode, Ids_oEduSchedule, Ids_oSubulGubunV, Ids_oBCodeAll, Ids_oRCodeAll, Ids_oMCodeAll, Ids_ioEduEquipmentH, Ids_ioEduEquipmentHUnit, Ids_ioEduEquipmentSingle, Ids_iOnlyKey, Ids_oEduScheduleSingle, Ids_oTrainingOrderSingle, Ids_oUseTargetL, Ids_oUseTargetF, Ids_oUseTargetC, Ids_oReceiveJibu, Ids_oQty, Ids_oBuyGubun, Ids_oHoldGubun, Ids_oDiscardGubun, Ids_oBuyJibu } from './Frmitem0021MEduEquipmentHMgmtData';

export const useFrmitem0021MEduEquipmentHMgmt = () => {
    const [ds_oCode1, setds_oCode1] = useState<Ids_oCode1[]>([]);
    const [ds_oCode2, setds_oCode2] = useState<Ids_oCode2[]>([]);
    const [ds_oCode3, setds_oCode3] = useState<Ids_oCode3[]>([]);
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
    const [ds_ioEduEquipmentH, setds_ioEduEquipmentH] = useState<Ids_ioEduEquipmentH[]>([]);
    const [ds_ioEduEquipmentHUnit, setds_ioEduEquipmentHUnit] = useState<Ids_ioEduEquipmentHUnit[]>([]);
    const [ds_ioEduEquipmentSingle, setds_ioEduEquipmentSingle] = useState<Ids_ioEduEquipmentSingle[]>([]);
    const [ds_iOnlyKey, setds_iOnlyKey] = useState<Ids_iOnlyKey[]>([]);
    const [ds_oEduScheduleSingle, setds_oEduScheduleSingle] = useState<Ids_oEduScheduleSingle[]>([]);
    const [ds_oTrainingOrderSingle, setds_oTrainingOrderSingle] = useState<Ids_oTrainingOrderSingle[]>([]);
    const [ds_oUseTargetL, setds_oUseTargetL] = useState<Ids_oUseTargetL[]>([]);
    const [ds_oUseTargetF, setds_oUseTargetF] = useState<Ids_oUseTargetF[]>([]);
    const [ds_oUseTargetC, setds_oUseTargetC] = useState<Ids_oUseTargetC[]>([]);
    const [ds_oReceiveJibu, setds_oReceiveJibu] = useState<Ids_oReceiveJibu[]>([]);
    const [ds_oQty, setds_oQty] = useState<Ids_oQty[]>([]);
    const [ds_oBuyGubun, setds_oBuyGubun] = useState<Ids_oBuyGubun[]>([]);
    const [ds_oHoldGubun, setds_oHoldGubun] = useState<Ids_oHoldGubun[]>([]);
    const [ds_oDiscardGubun, setds_oDiscardGubun] = useState<Ids_oDiscardGubun[]>([]);
    const [ds_oBuyJibu, setds_oBuyJibu] = useState<Ids_oBuyJibu[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [rawVisible_Shape1, setRawVisible_Shape1] = useState(true);
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
    const [rawVisible_gdEduEquipmentH, setRawVisible_gdEduEquipmentH] = useState(true);
    const [rawVisible_lbJibu, setRawVisible_lbJibu] = useState(true);
    const [rawVisible_cbxJibu, setRawVisible_cbxJibu] = useState(true);
    const [rawVisible_lbDept, setRawVisible_lbDept] = useState(true);
    const [rawVisible_cbxMgDept, setRawVisible_cbxMgDept] = useState(true);
    const [rawVisible_lbStatus, setRawVisible_lbStatus] = useState(true);
    const [rawVisible_Shape2, setRawVisible_Shape2] = useState(true);
    const [rawVisible_cbxEECD1, setRawVisible_cbxEECD1] = useState(true);
    const [rawVisible_lbEiBCd, setRawVisible_lbEiBCd] = useState(true);
    const [rawVisible_Static0, setRawVisible_Static0] = useState(true);
    const [rawVisible_cbxEECD2, setRawVisible_cbxEECD2] = useState(true);
    const [rawVisible_Static1, setRawVisible_Static1] = useState(true);
    const [rawVisible_cbxEECD3, setRawVisible_cbxEECD3] = useState(true);
    const [rawVisible_Static2, setRawVisible_Static2] = useState(true);
    const [rawVisible_edEquipmentNM, setRawVisible_edEquipmentNM] = useState(true);
    const [rawVisible_Static3, setRawVisible_Static3] = useState(true);
    const [rawVisible_Shape3, setRawVisible_Shape3] = useState(true);
    const [rawVisible_Static4, setRawVisible_Static4] = useState(true);
    const [rawVisible_Static5, setRawVisible_Static5] = useState(true);
    const [rawVisible_Static6, setRawVisible_Static6] = useState(true);
    const [rawVisible_cbxBuyDept, setRawVisible_cbxBuyDept] = useState(true);
    const [rawVisible_calBuyDate, setRawVisible_calBuyDate] = useState(true);
    const [rawVisible_Static9, setRawVisible_Static9] = useState(true);
    const [rawVisible_Static10, setRawVisible_Static10] = useState(true);
    const [rawVisible_edItemNo, setRawVisible_edItemNo] = useState(true);
    const [rawVisible_edBuySeq, setRawVisible_edBuySeq] = useState(true);
    const [rawVisible_lbEiRCd, setRawVisible_lbEiRCd] = useState(true);
    const [rawVisible_cbxQty, setRawVisible_cbxQty] = useState(true);
    const [rawVisible_Static11, setRawVisible_Static11] = useState(true);
    const [rawVisible_Static12, setRawVisible_Static12] = useState(true);
    const [rawVisible_medBuyAmount, setRawVisible_medBuyAmount] = useState(true);
    const [rawVisible_Static14, setRawVisible_Static14] = useState(true);
    const [rawVisible_Static15, setRawVisible_Static15] = useState(true);
    const [rawVisible_edRemark, setRawVisible_edRemark] = useState(true);
    const [rawVisible_Shape4, setRawVisible_Shape4] = useState(true);
    const [rawVisible_cbxBuyGubun, setRawVisible_cbxBuyGubun] = useState(true);
    const [rawVisible_Static16, setRawVisible_Static16] = useState(true);
    const [rawVisible_Static17, setRawVisible_Static17] = useState(true);
    const [rawVisible_cbxDiscardGubun, setRawVisible_cbxDiscardGubun] = useState(true);
    const [rawVisible_Static18, setRawVisible_Static18] = useState(true);
    const [rawVisible_calDiscardDate, setRawVisible_calDiscardDate] = useState(true);
    const [rawVisible_Static19, setRawVisible_Static19] = useState(true);
    const [rawVisible_calBuyDateFrom, setRawVisible_calBuyDateFrom] = useState(true);
    const [rawVisible_Static22, setRawVisible_Static22] = useState(true);
    const [rawVisible_calBuyDateTo, setRawVisible_calBuyDateTo] = useState(true);
    const [rawVisible_radHoldGubun, setRawVisible_radHoldGubun] = useState(true);
    const [rawVisible_Shape5, setRawVisible_Shape5] = useState(true);
    const [rawVisible_imgPicture, setRawVisible_imgPicture] = useState(true);
    const [rawVisible_Static7, setRawVisible_Static7] = useState(true);
    const [rawVisible_btnImage, setRawVisible_btnImage] = useState(true);
    const [rawVisible_edImageFile, setRawVisible_edImageFile] = useState(true);
    const [rawVisible_btnLoadImage, setRawVisible_btnLoadImage] = useState(true);
    const [rawVisible_btnImageDownload, setRawVisible_btnImageDownload] = useState(true);
    const [rawVisible_fiAttachFile, setRawVisible_fiAttachFile] = useState(true);
    const [rawVisible_fdAttachFile, setRawVisible_fdAttachFile] = useState(true);
    const [rawVisible_hfAttachFile, setRawVisible_hfAttachFile] = useState(true);
    const [rawVisible_lbFileSize, setRawVisible_lbFileSize] = useState(false);
    const [rawVisible_Static13, setRawVisible_Static13] = useState(true);
    const isVisible_Shape1 = rawVisible_Shape1;
    const setIsVisible_Shape1 = setRawVisible_Shape1;
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
    const isVisible_gdEduEquipmentH = rawVisible_gdEduEquipmentH;
    const setIsVisible_gdEduEquipmentH = setRawVisible_gdEduEquipmentH;
    const isVisible_lbJibu = rawVisible_lbJibu && rawVisible_shpGubunBox1;
    const setIsVisible_lbJibu = setRawVisible_lbJibu;
    const isVisible_cbxJibu = rawVisible_cbxJibu && rawVisible_shpGubunBox1;
    const setIsVisible_cbxJibu = setRawVisible_cbxJibu;
    const isVisible_lbDept = rawVisible_lbDept && rawVisible_Shape1;
    const setIsVisible_lbDept = setRawVisible_lbDept;
    const isVisible_cbxMgDept = rawVisible_cbxMgDept && rawVisible_Shape1;
    const setIsVisible_cbxMgDept = setRawVisible_cbxMgDept;
    const isVisible_lbStatus = rawVisible_lbStatus && rawVisible_Shape1;
    const setIsVisible_lbStatus = setRawVisible_lbStatus;
    const isVisible_Shape2 = rawVisible_Shape2 && rawVisible_Shape1;
    const setIsVisible_Shape2 = setRawVisible_Shape2;
    const isVisible_cbxEECD1 = rawVisible_cbxEECD1 && rawVisible_Shape2;
    const setIsVisible_cbxEECD1 = setRawVisible_cbxEECD1;
    const isVisible_lbEiBCd = rawVisible_lbEiBCd && rawVisible_Shape2;
    const setIsVisible_lbEiBCd = setRawVisible_lbEiBCd;
    const isVisible_Static0 = rawVisible_Static0 && rawVisible_Shape1;
    const setIsVisible_Static0 = setRawVisible_Static0;
    const isVisible_cbxEECD2 = rawVisible_cbxEECD2 && rawVisible_Shape2;
    const setIsVisible_cbxEECD2 = setRawVisible_cbxEECD2;
    const isVisible_Static1 = rawVisible_Static1 && rawVisible_Shape2;
    const setIsVisible_Static1 = setRawVisible_Static1;
    const isVisible_cbxEECD3 = rawVisible_cbxEECD3 && rawVisible_Shape2;
    const setIsVisible_cbxEECD3 = setRawVisible_cbxEECD3;
    const isVisible_Static2 = rawVisible_Static2 && rawVisible_Shape2;
    const setIsVisible_Static2 = setRawVisible_Static2;
    const isVisible_edEquipmentNM = rawVisible_edEquipmentNM && rawVisible_Shape1;
    const setIsVisible_edEquipmentNM = setRawVisible_edEquipmentNM;
    const isVisible_Static3 = rawVisible_Static3 && rawVisible_Shape2;
    const setIsVisible_Static3 = setRawVisible_Static3;
    const isVisible_Shape3 = rawVisible_Shape3 && rawVisible_Shape1;
    const setIsVisible_Shape3 = setRawVisible_Shape3;
    const isVisible_Static4 = rawVisible_Static4 && rawVisible_Shape3;
    const setIsVisible_Static4 = setRawVisible_Static4;
    const isVisible_Static5 = rawVisible_Static5 && rawVisible_Shape3;
    const setIsVisible_Static5 = setRawVisible_Static5;
    const isVisible_Static6 = rawVisible_Static6 && rawVisible_Shape3;
    const setIsVisible_Static6 = setRawVisible_Static6;
    const isVisible_cbxBuyDept = rawVisible_cbxBuyDept && rawVisible_Shape3;
    const setIsVisible_cbxBuyDept = setRawVisible_cbxBuyDept;
    const isVisible_calBuyDate = rawVisible_calBuyDate && rawVisible_Shape3;
    const setIsVisible_calBuyDate = setRawVisible_calBuyDate;
    const isVisible_Static9 = rawVisible_Static9 && rawVisible_Shape3;
    const setIsVisible_Static9 = setRawVisible_Static9;
    const isVisible_Static10 = rawVisible_Static10 && rawVisible_Shape3;
    const setIsVisible_Static10 = setRawVisible_Static10;
    const isVisible_edItemNo = rawVisible_edItemNo && rawVisible_Shape3;
    const setIsVisible_edItemNo = setRawVisible_edItemNo;
    const isVisible_edBuySeq = rawVisible_edBuySeq && rawVisible_Shape3;
    const setIsVisible_edBuySeq = setRawVisible_edBuySeq;
    const isVisible_lbEiRCd = rawVisible_lbEiRCd && rawVisible_Shape1;
    const setIsVisible_lbEiRCd = setRawVisible_lbEiRCd;
    const isVisible_cbxQty = rawVisible_cbxQty && rawVisible_Shape1;
    const setIsVisible_cbxQty = setRawVisible_cbxQty;
    const isVisible_Static11 = rawVisible_Static11 && rawVisible_Shape1;
    const setIsVisible_Static11 = setRawVisible_Static11;
    const isVisible_Static12 = rawVisible_Static12 && rawVisible_Shape1;
    const setIsVisible_Static12 = setRawVisible_Static12;
    const isVisible_medBuyAmount = rawVisible_medBuyAmount && rawVisible_Shape1;
    const setIsVisible_medBuyAmount = setRawVisible_medBuyAmount;
    const isVisible_Static14 = rawVisible_Static14 && rawVisible_Shape1;
    const setIsVisible_Static14 = setRawVisible_Static14;
    const isVisible_Static15 = rawVisible_Static15 && rawVisible_Shape1;
    const setIsVisible_Static15 = setRawVisible_Static15;
    const isVisible_edRemark = rawVisible_edRemark && rawVisible_Shape1;
    const setIsVisible_edRemark = setRawVisible_edRemark;
    const isVisible_Shape4 = rawVisible_Shape4 && rawVisible_Shape1;
    const setIsVisible_Shape4 = setRawVisible_Shape4;
    const isVisible_cbxBuyGubun = rawVisible_cbxBuyGubun && rawVisible_Shape1;
    const setIsVisible_cbxBuyGubun = setRawVisible_cbxBuyGubun;
    const isVisible_Static16 = rawVisible_Static16 && rawVisible_Shape4;
    const setIsVisible_Static16 = setRawVisible_Static16;
    const isVisible_Static17 = rawVisible_Static17 && rawVisible_Shape4;
    const setIsVisible_Static17 = setRawVisible_Static17;
    const isVisible_cbxDiscardGubun = rawVisible_cbxDiscardGubun && rawVisible_Shape4;
    const setIsVisible_cbxDiscardGubun = setRawVisible_cbxDiscardGubun;
    const isVisible_Static18 = rawVisible_Static18 && rawVisible_Shape4;
    const setIsVisible_Static18 = setRawVisible_Static18;
    const isVisible_calDiscardDate = rawVisible_calDiscardDate && rawVisible_Shape4;
    const setIsVisible_calDiscardDate = setRawVisible_calDiscardDate;
    const isVisible_Static19 = rawVisible_Static19 && rawVisible_shpGubunBox1;
    const setIsVisible_Static19 = setRawVisible_Static19;
    const isVisible_calBuyDateFrom = rawVisible_calBuyDateFrom && rawVisible_shpGubunBox1;
    const setIsVisible_calBuyDateFrom = setRawVisible_calBuyDateFrom;
    const isVisible_Static22 = rawVisible_Static22 && rawVisible_shpGubunBox1;
    const setIsVisible_Static22 = setRawVisible_Static22;
    const isVisible_calBuyDateTo = rawVisible_calBuyDateTo && rawVisible_shpGubunBox1;
    const setIsVisible_calBuyDateTo = setRawVisible_calBuyDateTo;
    const isVisible_radHoldGubun = rawVisible_radHoldGubun && rawVisible_Shape1;
    const setIsVisible_radHoldGubun = setRawVisible_radHoldGubun;
    const isVisible_Shape5 = rawVisible_Shape5 && rawVisible_Shape1;
    const setIsVisible_Shape5 = setRawVisible_Shape5;
    const isVisible_imgPicture = rawVisible_imgPicture && rawVisible_Shape5;
    const setIsVisible_imgPicture = setRawVisible_imgPicture;
    const isVisible_Static7 = rawVisible_Static7 && rawVisible_Shape5;
    const setIsVisible_Static7 = setRawVisible_Static7;
    const isVisible_btnImage = rawVisible_btnImage && rawVisible_Shape5;
    const setIsVisible_btnImage = setRawVisible_btnImage;
    const isVisible_edImageFile = rawVisible_edImageFile && rawVisible_Shape5;
    const setIsVisible_edImageFile = setRawVisible_edImageFile;
    const isVisible_btnLoadImage = rawVisible_btnLoadImage && rawVisible_Shape5;
    const setIsVisible_btnLoadImage = setRawVisible_btnLoadImage;
    const isVisible_btnImageDownload = rawVisible_btnImageDownload && rawVisible_Shape5;
    const setIsVisible_btnImageDownload = setRawVisible_btnImageDownload;
    const isVisible_fiAttachFile = rawVisible_fiAttachFile && rawVisible_Shape5;
    const setIsVisible_fiAttachFile = setRawVisible_fiAttachFile;
    const isVisible_fdAttachFile = rawVisible_fdAttachFile && rawVisible_Shape5;
    const setIsVisible_fdAttachFile = setRawVisible_fdAttachFile;
    const isVisible_hfAttachFile = rawVisible_hfAttachFile && rawVisible_Shape5;
    const setIsVisible_hfAttachFile = setRawVisible_hfAttachFile;
    const isVisible_lbFileSize = rawVisible_lbFileSize && rawVisible_Shape5;
    const setIsVisible_lbFileSize = setRawVisible_lbFileSize;
    const isVisible_Static13 = rawVisible_Static13 && rawVisible_Shape5;
    const setIsVisible_Static13 = setRawVisible_Static13;

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_oCode1([]);
            setds_oCode2([]);
            setds_oCode3([]);
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
            setds_ioEduEquipmentH([]);
            setds_ioEduEquipmentHUnit([]);
            setds_ioEduEquipmentSingle([]);
            setds_iOnlyKey([]);
            setds_oEduScheduleSingle([]);
            setds_oTrainingOrderSingle([]);
            setds_oUseTargetL([]);
            setds_oUseTargetF([]);
            setds_oUseTargetC([]);
            setds_oReceiveJibu([]);
            setds_oQty([]);
            setds_oBuyGubun([]);
            setds_oHoldGubun([]);
            setds_oDiscardGubun([]);
            setds_oBuyJibu([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnImageDownload_OnClick = () => {
        console.log('btnImageDownload_OnClick clicked');
    };
    const btnImage_OnClick = () => {
        console.log('btnImage_OnClick clicked');
    };
    const btnLoadImage_OnClick = () => {
        console.log('btnLoadImage_OnClick clicked');
    };
    const btnMutilSort_OnClick = () => {
        console.log('btnMutilSort_OnClick clicked');
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
        ds_oCode1,
        ds_oCode2,
        ds_oCode3,
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
        ds_ioEduEquipmentH,
        ds_ioEduEquipmentHUnit,
        ds_ioEduEquipmentSingle,
        ds_iOnlyKey,
        ds_oEduScheduleSingle,
        ds_oTrainingOrderSingle,
        ds_oUseTargetL,
        ds_oUseTargetF,
        ds_oUseTargetC,
        ds_oReceiveJibu,
        ds_oQty,
        ds_oBuyGubun,
        ds_oHoldGubun,
        ds_oDiscardGubun,
        ds_oBuyJibu,
        isVisible_Shape1,
        setIsVisible_Shape1,
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
        isVisible_gdEduEquipmentH,
        setIsVisible_gdEduEquipmentH,
        isVisible_lbJibu,
        setIsVisible_lbJibu,
        isVisible_cbxJibu,
        setIsVisible_cbxJibu,
        isVisible_lbDept,
        setIsVisible_lbDept,
        isVisible_cbxMgDept,
        setIsVisible_cbxMgDept,
        isVisible_lbStatus,
        setIsVisible_lbStatus,
        isVisible_Shape2,
        setIsVisible_Shape2,
        isVisible_cbxEECD1,
        setIsVisible_cbxEECD1,
        isVisible_lbEiBCd,
        setIsVisible_lbEiBCd,
        isVisible_Static0,
        setIsVisible_Static0,
        isVisible_cbxEECD2,
        setIsVisible_cbxEECD2,
        isVisible_Static1,
        setIsVisible_Static1,
        isVisible_cbxEECD3,
        setIsVisible_cbxEECD3,
        isVisible_Static2,
        setIsVisible_Static2,
        isVisible_edEquipmentNM,
        setIsVisible_edEquipmentNM,
        isVisible_Static3,
        setIsVisible_Static3,
        isVisible_Shape3,
        setIsVisible_Shape3,
        isVisible_Static4,
        setIsVisible_Static4,
        isVisible_Static5,
        setIsVisible_Static5,
        isVisible_Static6,
        setIsVisible_Static6,
        isVisible_cbxBuyDept,
        setIsVisible_cbxBuyDept,
        isVisible_calBuyDate,
        setIsVisible_calBuyDate,
        isVisible_Static9,
        setIsVisible_Static9,
        isVisible_Static10,
        setIsVisible_Static10,
        isVisible_edItemNo,
        setIsVisible_edItemNo,
        isVisible_edBuySeq,
        setIsVisible_edBuySeq,
        isVisible_lbEiRCd,
        setIsVisible_lbEiRCd,
        isVisible_cbxQty,
        setIsVisible_cbxQty,
        isVisible_Static11,
        setIsVisible_Static11,
        isVisible_Static12,
        setIsVisible_Static12,
        isVisible_medBuyAmount,
        setIsVisible_medBuyAmount,
        isVisible_Static14,
        setIsVisible_Static14,
        isVisible_Static15,
        setIsVisible_Static15,
        isVisible_edRemark,
        setIsVisible_edRemark,
        isVisible_Shape4,
        setIsVisible_Shape4,
        isVisible_cbxBuyGubun,
        setIsVisible_cbxBuyGubun,
        isVisible_Static16,
        setIsVisible_Static16,
        isVisible_Static17,
        setIsVisible_Static17,
        isVisible_cbxDiscardGubun,
        setIsVisible_cbxDiscardGubun,
        isVisible_Static18,
        setIsVisible_Static18,
        isVisible_calDiscardDate,
        setIsVisible_calDiscardDate,
        isVisible_Static19,
        setIsVisible_Static19,
        isVisible_calBuyDateFrom,
        setIsVisible_calBuyDateFrom,
        isVisible_Static22,
        setIsVisible_Static22,
        isVisible_calBuyDateTo,
        setIsVisible_calBuyDateTo,
        isVisible_radHoldGubun,
        setIsVisible_radHoldGubun,
        isVisible_Shape5,
        setIsVisible_Shape5,
        isVisible_imgPicture,
        setIsVisible_imgPicture,
        isVisible_Static7,
        setIsVisible_Static7,
        isVisible_btnImage,
        setIsVisible_btnImage,
        isVisible_edImageFile,
        setIsVisible_edImageFile,
        isVisible_btnLoadImage,
        setIsVisible_btnLoadImage,
        isVisible_btnImageDownload,
        setIsVisible_btnImageDownload,
        isVisible_fiAttachFile,
        setIsVisible_fiAttachFile,
        isVisible_fdAttachFile,
        setIsVisible_fdAttachFile,
        isVisible_hfAttachFile,
        setIsVisible_hfAttachFile,
        isVisible_lbFileSize,
        setIsVisible_lbFileSize,
        isVisible_Static13,
        setIsVisible_Static13,
        btnImageDownload_OnClick,
        btnImage_OnClick,
        btnLoadImage_OnClick,
        btnMutilSort_OnClick,
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