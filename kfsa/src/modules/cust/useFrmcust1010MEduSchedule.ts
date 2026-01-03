// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_ioTrainingOrder, Ids_oUseYn, Ids_oInetJubsuYn, Ids_METARGET, Ids_MECOURSE, Ids_MEDAYGUBUNCD, Ids_oInternetJubsuStatus, Ids_Jibu, Ids_oCourse, Ids_ioExamRoomMinimap, Ids_oJibu, Ids_oTrainingOrderMgno, Ids_oModifyColumn, Ids_oEduType1, Ids_oEduType2, Ids_oEduType3, Ids_oSendYN, Ids_oEduType10, Ids_oEduType20, Ids_oEduType30, Ids_oEduType50, Ids_oCyberGubun10, Ids_oCyberGubun, Ids_oEduType40, Ids_MECOURSEAll, Ids_oEduTypeFilter10, Ids_oCyberGubun2 } from './Frmcust1010MEduScheduleData';

export const useFrmcust1010MEduSchedule = () => {
    const [ds_ioTrainingOrder, setds_ioTrainingOrder] = useState<Ids_ioTrainingOrder[]>([]);
    const [ds_oUseYn, setds_oUseYn] = useState<Ids_oUseYn[]>([]);
    const [ds_oInetJubsuYn, setds_oInetJubsuYn] = useState<Ids_oInetJubsuYn[]>([]);
    const [ds_METARGET, setds_METARGET] = useState<Ids_METARGET[]>([]);
    const [ds_MECOURSE, setds_MECOURSE] = useState<Ids_MECOURSE[]>([]);
    const [ds_MEDAYGUBUNCD, setds_MEDAYGUBUNCD] = useState<Ids_MEDAYGUBUNCD[]>([]);
    const [ds_oInternetJubsuStatus, setds_oInternetJubsuStatus] = useState<Ids_oInternetJubsuStatus[]>([]);
    const [ds_Jibu, setds_Jibu] = useState<Ids_Jibu[]>([]);
    const [ds_oCourse, setds_oCourse] = useState<Ids_oCourse[]>([]);
    const [ds_ioExamRoomMinimap, setds_ioExamRoomMinimap] = useState<Ids_ioExamRoomMinimap[]>([]);
    const [ds_oJibu, setds_oJibu] = useState<Ids_oJibu[]>([]);
    const [ds_oTrainingOrderMgno, setds_oTrainingOrderMgno] = useState<Ids_oTrainingOrderMgno[]>([]);
    const [ds_oModifyColumn, setds_oModifyColumn] = useState<Ids_oModifyColumn[]>([]);
    const [ds_oEduType1, setds_oEduType1] = useState<Ids_oEduType1[]>([]);
    const [ds_oEduType2, setds_oEduType2] = useState<Ids_oEduType2[]>([]);
    const [ds_oEduType3, setds_oEduType3] = useState<Ids_oEduType3[]>([]);
    const [ds_oSendYN, setds_oSendYN] = useState<Ids_oSendYN[]>([]);
    const [ds_oEduType10, setds_oEduType10] = useState<Ids_oEduType10[]>([]);
    const [ds_oEduType20, setds_oEduType20] = useState<Ids_oEduType20[]>([]);
    const [ds_oEduType30, setds_oEduType30] = useState<Ids_oEduType30[]>([]);
    const [ds_oEduType50, setds_oEduType50] = useState<Ids_oEduType50[]>([]);
    const [ds_oCyberGubun10, setds_oCyberGubun10] = useState<Ids_oCyberGubun10[]>([]);
    const [ds_oCyberGubun, setds_oCyberGubun] = useState<Ids_oCyberGubun[]>([]);
    const [ds_oEduType40, setds_oEduType40] = useState<Ids_oEduType40[]>([]);
    const [ds_MECOURSEAll, setds_MECOURSEAll] = useState<Ids_MECOURSEAll[]>([]);
    const [ds_oEduTypeFilter10, setds_oEduTypeFilter10] = useState<Ids_oEduTypeFilter10[]>([]);
    const [ds_oCyberGubun2, setds_oCyberGubun2] = useState<Ids_oCyberGubun2[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [rawVisible_shpGubunBox, setRawVisible_shpGubunBox] = useState(true);
    const [rawVisible_radCyberGubun4080, setRawVisible_radCyberGubun4080] = useState(true);
    const [rawVisible_radEduType10, setRawVisible_radEduType10] = useState(true);
    const [rawVisible_radSUBJECTGUBUN, setRawVisible_radSUBJECTGUBUN] = useState(true);
    const [rawVisible_Static3, setRawVisible_Static3] = useState(true);
    const [rawVisible_radEduType50, setRawVisible_radEduType50] = useState(true);
    const [rawVisible_shpBtnBox, setRawVisible_shpBtnBox] = useState(true);
    const [rawVisible_divWorkFormTitle, setRawVisible_divWorkFormTitle] = useState(true);
    const [rawVisible_btnMutilSort, setRawVisible_btnMutilSort] = useState(true);
    const [rawVisible_lbEduPlace, setRawVisible_lbEduPlace] = useState(true);
    const [rawVisible_edEduPlace, setRawVisible_edEduPlace] = useState(true);
    const [rawVisible_btnSearch, setRawVisible_btnSearch] = useState(true);
    const [rawVisible_btnInput, setRawVisible_btnInput] = useState(true);
    const [rawVisible_btnDelete, setRawVisible_btnDelete] = useState(true);
    const [rawVisible_btnSave, setRawVisible_btnSave] = useState(true);
    const [rawVisible_btnCancel, setRawVisible_btnCancel] = useState(true);
    const [rawVisible_btnToExcel, setRawVisible_btnToExcel] = useState(true);
    const [rawVisible_btnPrintScreen, setRawVisible_btnPrintScreen] = useState(true);
    const [rawVisible_btnEnd, setRawVisible_btnEnd] = useState(true);
    const [rawVisible_lbJibu, setRawVisible_lbJibu] = useState(true);
    const [rawVisible_cbxJibu, setRawVisible_cbxJibu] = useState(true);
    const [rawVisible_lbCourse, setRawVisible_lbCourse] = useState(true);
    const [rawVisible_cbxCourse, setRawVisible_cbxCourse] = useState(true);
    const [rawVisible_lbStdYear, setRawVisible_lbStdYear] = useState(true);
    const [rawVisible_edTrainingYear, setRawVisible_edTrainingYear] = useState(true);
    const [rawVisible_medSeatCnt, setRawVisible_medSeatCnt] = useState(true);
    const [rawVisible_tmEduTimeEnd, setRawVisible_tmEduTimeEnd] = useState(true);
    const [rawVisible_calEduDateStart, setRawVisible_calEduDateStart] = useState(true);
    const [rawVisible_tmEduTimeStart, setRawVisible_tmEduTimeStart] = useState(true);
    const [rawVisible_lbSeatCnt, setRawVisible_lbSeatCnt] = useState(true);
    const [rawVisible_lbEduTime, setRawVisible_lbEduTime] = useState(true);
    const [rawVisible_lbEduDate, setRawVisible_lbEduDate] = useState(true);
    const [rawVisible_radTrainingOrderUseYn, setRawVisible_radTrainingOrderUseYn] = useState(true);
    const [rawVisible_lbAddNoticeRemark, setRawVisible_lbAddNoticeRemark] = useState(true);
    const [rawVisible_edAddNoticeRemark, setRawVisible_edAddNoticeRemark] = useState(true);
    const [rawVisible_lbParkingNotice, setRawVisible_lbParkingNotice] = useState(false);
    const [rawVisible_edParkingNotice, setRawVisible_edParkingNotice] = useState(false);
    const [rawVisible_lbInternetJubsuStatus, setRawVisible_lbInternetJubsuStatus] = useState(true);
    const [rawVisible_lbTrainingOrderUseYn, setRawVisible_lbTrainingOrderUseYn] = useState(true);
    const [rawVisible_lbJubsuCnt, setRawVisible_lbJubsuCnt] = useState(true);
    const [rawVisible_medJubsuCnt, setRawVisible_medJubsuCnt] = useState(true);
    const [rawVisible_lbTimeWave, setRawVisible_lbTimeWave] = useState(true);
    const [rawVisible_btnMiniMap_1, setRawVisible_btnMiniMap_1] = useState(false);
    const [rawVisible_medIJubsuCnt, setRawVisible_medIJubsuCnt] = useState(true);
    const [rawVisible_lbIJubsuCnt, setRawVisible_lbIJubsuCnt] = useState(true);
    const [rawVisible_Static2, setRawVisible_Static2] = useState(true);
    const [rawVisible_radStudent, setRawVisible_radStudent] = useState(true);
    const [rawVisible_Static4, setRawVisible_Static4] = useState(true);
    const [rawVisible_radGubun, setRawVisible_radGubun] = useState(true);
    const [rawVisible_radINetOpenYN, setRawVisible_radINetOpenYN] = useState(true);
    const [rawVisible_Static5, setRawVisible_Static5] = useState(false);
    const [rawVisible_calInternetEnd, setRawVisible_calInternetEnd] = useState(false);
    const [rawVisible_lbLimitDate, setRawVisible_lbLimitDate] = useState(false);
    const [rawVisible_btnSearchEduPlace, setRawVisible_btnSearchEduPlace] = useState(true);
    const [rawVisible_btnMiniMap, setRawVisible_btnMiniMap] = useState(true);
    const [rawVisible_gdTrainingOrder, setRawVisible_gdTrainingOrder] = useState(true);
    const [rawVisible_edESMGNO, setRawVisible_edESMGNO] = useState(false);
    const [rawVisible_lbTotalCnt, setRawVisible_lbTotalCnt] = useState(true);
    const [rawVisible_medTotalCnt, setRawVisible_medTotalCnt] = useState(true);
    const [rawVisible_lbTrainingOrder, setRawVisible_lbTrainingOrder] = useState(true);
    const [rawVisible_edEduOrder, setRawVisible_edEduOrder] = useState(true);
    const [rawVisible_Static0, setRawVisible_Static0] = useState(true);
    const [rawVisible_radEduType1, setRawVisible_radEduType1] = useState(true);
    const [rawVisible_Static7, setRawVisible_Static7] = useState(true);
    const [rawVisible_edEduRegion, setRawVisible_edEduRegion] = useState(true);
    const [rawVisible_Static8, setRawVisible_Static8] = useState(true);
    const [rawVisible_lbSMS, setRawVisible_lbSMS] = useState(true);
    const [rawVisible_radSMSSendYN, setRawVisible_radSMSSendYN] = useState(true);
    const [rawVisible_calSendDate, setRawVisible_calSendDate] = useState(true);
    const [rawVisible_lbSendDate, setRawVisible_lbSendDate] = useState(true);
    const [rawVisible_lbSendTime, setRawVisible_lbSendTime] = useState(true);
    const [rawVisible_btnSMSView, setRawVisible_btnSMSView] = useState(true);
    const [rawVisible_Static9, setRawVisible_Static9] = useState(true);
    const [rawVisible_radEduType20, setRawVisible_radEduType20] = useState(true);
    const [rawVisible_radEduType30, setRawVisible_radEduType30] = useState(true);
    const [rawVisible_radEduType2, setRawVisible_radEduType2] = useState(true);
    const [rawVisible_radEduType3, setRawVisible_radEduType3] = useState(true);
    const [rawVisible_Static10, setRawVisible_Static10] = useState(true);
    const [rawVisible_edProfessor, setRawVisible_edProfessor] = useState(true);
    const [rawVisible_lbCyberGubun, setRawVisible_lbCyberGubun] = useState(true);
    const [rawVisible_lbImsiESMGNO, setRawVisible_lbImsiESMGNO] = useState(true);
    const [rawVisible_edImsiESMGNO, setRawVisible_edImsiESMGNO] = useState(true);
    const [rawVisible_radCyberGubun, setRawVisible_radCyberGubun] = useState(true);
    const [rawVisible_radCyberGubun10, setRawVisible_radCyberGubun10] = useState(true);
    const [rawVisible_Static1, setRawVisible_Static1] = useState(true);
    const [rawVisible_calCyberDateStart, setRawVisible_calCyberDateStart] = useState(true);
    const [rawVisible_Static6, setRawVisible_Static6] = useState(true);
    const [rawVisible_calCyberDateEnd, setRawVisible_calCyberDateEnd] = useState(true);
    const [rawVisible_lbJubsuDate, setRawVisible_lbJubsuDate] = useState(true);
    const [rawVisible_calJubsuStartDate, setRawVisible_calJubsuStartDate] = useState(true);
    const [rawVisible_Static11, setRawVisible_Static11] = useState(true);
    const [rawVisible_calJubsuEndDate, setRawVisible_calJubsuEndDate] = useState(true);
    const [rawVisible_Shape0, setRawVisible_Shape0] = useState(true);
    const [rawVisible_edOnlineID, setRawVisible_edOnlineID] = useState(true);
    const [rawVisible_edOnlinePWD, setRawVisible_edOnlinePWD] = useState(true);
    const [rawVisible_lbOnline3, setRawVisible_lbOnline3] = useState(true);
    const [rawVisible_lbOnline2, setRawVisible_lbOnline2] = useState(true);
    const [rawVisible_Static12, setRawVisible_Static12] = useState(true);
    const [rawVisible_radEduType40, setRawVisible_radEduType40] = useState(true);
    const isVisible_shpGubunBox = rawVisible_shpGubunBox;
    const setIsVisible_shpGubunBox = setRawVisible_shpGubunBox;
    const isVisible_radCyberGubun4080 = rawVisible_radCyberGubun4080 && rawVisible_shpGubunBox;
    const setIsVisible_radCyberGubun4080 = setRawVisible_radCyberGubun4080;
    const isVisible_radEduType10 = rawVisible_radEduType10 && rawVisible_shpGubunBox;
    const setIsVisible_radEduType10 = setRawVisible_radEduType10;
    const isVisible_radSUBJECTGUBUN = rawVisible_radSUBJECTGUBUN && rawVisible_shpGubunBox;
    const setIsVisible_radSUBJECTGUBUN = setRawVisible_radSUBJECTGUBUN;
    const isVisible_Static3 = rawVisible_Static3 && rawVisible_shpGubunBox;
    const setIsVisible_Static3 = setRawVisible_Static3;
    const isVisible_radEduType50 = rawVisible_radEduType50 && rawVisible_shpGubunBox;
    const setIsVisible_radEduType50 = setRawVisible_radEduType50;
    const isVisible_shpBtnBox = rawVisible_shpBtnBox;
    const setIsVisible_shpBtnBox = setRawVisible_shpBtnBox;
    const isVisible_divWorkFormTitle = rawVisible_divWorkFormTitle;
    const setIsVisible_divWorkFormTitle = setRawVisible_divWorkFormTitle;
    const isVisible_btnMutilSort = rawVisible_btnMutilSort;
    const setIsVisible_btnMutilSort = setRawVisible_btnMutilSort;
    const isVisible_lbEduPlace = rawVisible_lbEduPlace && rawVisible_shpGubunBox;
    const setIsVisible_lbEduPlace = setRawVisible_lbEduPlace;
    const isVisible_edEduPlace = rawVisible_edEduPlace && rawVisible_shpGubunBox;
    const setIsVisible_edEduPlace = setRawVisible_edEduPlace;
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
    const isVisible_lbJibu = rawVisible_lbJibu && rawVisible_shpGubunBox;
    const setIsVisible_lbJibu = setRawVisible_lbJibu;
    const isVisible_cbxJibu = rawVisible_cbxJibu && rawVisible_shpGubunBox;
    const setIsVisible_cbxJibu = setRawVisible_cbxJibu;
    const isVisible_lbCourse = rawVisible_lbCourse && rawVisible_shpGubunBox;
    const setIsVisible_lbCourse = setRawVisible_lbCourse;
    const isVisible_cbxCourse = rawVisible_cbxCourse && rawVisible_shpGubunBox;
    const setIsVisible_cbxCourse = setRawVisible_cbxCourse;
    const isVisible_lbStdYear = rawVisible_lbStdYear && rawVisible_shpGubunBox;
    const setIsVisible_lbStdYear = setRawVisible_lbStdYear;
    const isVisible_edTrainingYear = rawVisible_edTrainingYear && rawVisible_shpGubunBox;
    const setIsVisible_edTrainingYear = setRawVisible_edTrainingYear;
    const isVisible_medSeatCnt = rawVisible_medSeatCnt && rawVisible_shpGubunBox;
    const setIsVisible_medSeatCnt = setRawVisible_medSeatCnt;
    const isVisible_tmEduTimeEnd = rawVisible_tmEduTimeEnd && rawVisible_shpGubunBox;
    const setIsVisible_tmEduTimeEnd = setRawVisible_tmEduTimeEnd;
    const isVisible_calEduDateStart = rawVisible_calEduDateStart && rawVisible_shpGubunBox;
    const setIsVisible_calEduDateStart = setRawVisible_calEduDateStart;
    const isVisible_tmEduTimeStart = rawVisible_tmEduTimeStart && rawVisible_shpGubunBox;
    const setIsVisible_tmEduTimeStart = setRawVisible_tmEduTimeStart;
    const isVisible_lbSeatCnt = rawVisible_lbSeatCnt && rawVisible_shpGubunBox;
    const setIsVisible_lbSeatCnt = setRawVisible_lbSeatCnt;
    const isVisible_lbEduTime = rawVisible_lbEduTime && rawVisible_shpGubunBox;
    const setIsVisible_lbEduTime = setRawVisible_lbEduTime;
    const isVisible_lbEduDate = rawVisible_lbEduDate && rawVisible_shpGubunBox;
    const setIsVisible_lbEduDate = setRawVisible_lbEduDate;
    const isVisible_radTrainingOrderUseYn = rawVisible_radTrainingOrderUseYn && rawVisible_shpGubunBox;
    const setIsVisible_radTrainingOrderUseYn = setRawVisible_radTrainingOrderUseYn;
    const isVisible_lbAddNoticeRemark = rawVisible_lbAddNoticeRemark && rawVisible_shpGubunBox;
    const setIsVisible_lbAddNoticeRemark = setRawVisible_lbAddNoticeRemark;
    const isVisible_edAddNoticeRemark = rawVisible_edAddNoticeRemark && rawVisible_shpGubunBox;
    const setIsVisible_edAddNoticeRemark = setRawVisible_edAddNoticeRemark;
    const isVisible_lbParkingNotice = rawVisible_lbParkingNotice;
    const setIsVisible_lbParkingNotice = setRawVisible_lbParkingNotice;
    const isVisible_edParkingNotice = rawVisible_edParkingNotice;
    const setIsVisible_edParkingNotice = setRawVisible_edParkingNotice;
    const isVisible_lbInternetJubsuStatus = rawVisible_lbInternetJubsuStatus && rawVisible_shpGubunBox;
    const setIsVisible_lbInternetJubsuStatus = setRawVisible_lbInternetJubsuStatus;
    const isVisible_lbTrainingOrderUseYn = rawVisible_lbTrainingOrderUseYn && rawVisible_shpGubunBox;
    const setIsVisible_lbTrainingOrderUseYn = setRawVisible_lbTrainingOrderUseYn;
    const isVisible_lbJubsuCnt = rawVisible_lbJubsuCnt && rawVisible_shpGubunBox;
    const setIsVisible_lbJubsuCnt = setRawVisible_lbJubsuCnt;
    const isVisible_medJubsuCnt = rawVisible_medJubsuCnt && rawVisible_shpGubunBox;
    const setIsVisible_medJubsuCnt = setRawVisible_medJubsuCnt;
    const isVisible_lbTimeWave = rawVisible_lbTimeWave && rawVisible_shpGubunBox;
    const setIsVisible_lbTimeWave = setRawVisible_lbTimeWave;
    const isVisible_btnMiniMap_1 = rawVisible_btnMiniMap_1 && rawVisible_shpGubunBox;
    const setIsVisible_btnMiniMap_1 = setRawVisible_btnMiniMap_1;
    const isVisible_medIJubsuCnt = rawVisible_medIJubsuCnt && rawVisible_shpGubunBox;
    const setIsVisible_medIJubsuCnt = setRawVisible_medIJubsuCnt;
    const isVisible_lbIJubsuCnt = rawVisible_lbIJubsuCnt && rawVisible_shpGubunBox;
    const setIsVisible_lbIJubsuCnt = setRawVisible_lbIJubsuCnt;
    const isVisible_Static2 = rawVisible_Static2 && rawVisible_shpGubunBox;
    const setIsVisible_Static2 = setRawVisible_Static2;
    const isVisible_radStudent = rawVisible_radStudent && rawVisible_shpGubunBox;
    const setIsVisible_radStudent = setRawVisible_radStudent;
    const isVisible_Static4 = rawVisible_Static4 && rawVisible_shpGubunBox;
    const setIsVisible_Static4 = setRawVisible_Static4;
    const isVisible_radGubun = rawVisible_radGubun && rawVisible_shpGubunBox;
    const setIsVisible_radGubun = setRawVisible_radGubun;
    const isVisible_radINetOpenYN = rawVisible_radINetOpenYN && rawVisible_shpGubunBox;
    const setIsVisible_radINetOpenYN = setRawVisible_radINetOpenYN;
    const isVisible_Static5 = rawVisible_Static5 && rawVisible_shpGubunBox;
    const setIsVisible_Static5 = setRawVisible_Static5;
    const isVisible_calInternetEnd = rawVisible_calInternetEnd && rawVisible_shpGubunBox;
    const setIsVisible_calInternetEnd = setRawVisible_calInternetEnd;
    const isVisible_lbLimitDate = rawVisible_lbLimitDate && rawVisible_shpGubunBox;
    const setIsVisible_lbLimitDate = setRawVisible_lbLimitDate;
    const isVisible_btnSearchEduPlace = rawVisible_btnSearchEduPlace && rawVisible_shpGubunBox;
    const setIsVisible_btnSearchEduPlace = setRawVisible_btnSearchEduPlace;
    const isVisible_btnMiniMap = rawVisible_btnMiniMap && rawVisible_shpGubunBox;
    const setIsVisible_btnMiniMap = setRawVisible_btnMiniMap;
    const isVisible_gdTrainingOrder = rawVisible_gdTrainingOrder;
    const setIsVisible_gdTrainingOrder = setRawVisible_gdTrainingOrder;
    const isVisible_edESMGNO = rawVisible_edESMGNO;
    const setIsVisible_edESMGNO = setRawVisible_edESMGNO;
    const isVisible_lbTotalCnt = rawVisible_lbTotalCnt;
    const setIsVisible_lbTotalCnt = setRawVisible_lbTotalCnt;
    const isVisible_medTotalCnt = rawVisible_medTotalCnt;
    const setIsVisible_medTotalCnt = setRawVisible_medTotalCnt;
    const isVisible_lbTrainingOrder = rawVisible_lbTrainingOrder && rawVisible_shpGubunBox;
    const setIsVisible_lbTrainingOrder = setRawVisible_lbTrainingOrder;
    const isVisible_edEduOrder = rawVisible_edEduOrder && rawVisible_shpGubunBox;
    const setIsVisible_edEduOrder = setRawVisible_edEduOrder;
    const isVisible_Static0 = rawVisible_Static0 && rawVisible_shpGubunBox;
    const setIsVisible_Static0 = setRawVisible_Static0;
    const isVisible_radEduType1 = rawVisible_radEduType1 && rawVisible_shpGubunBox;
    const setIsVisible_radEduType1 = setRawVisible_radEduType1;
    const isVisible_Static7 = rawVisible_Static7 && rawVisible_shpGubunBox;
    const setIsVisible_Static7 = setRawVisible_Static7;
    const isVisible_edEduRegion = rawVisible_edEduRegion && rawVisible_shpGubunBox;
    const setIsVisible_edEduRegion = setRawVisible_edEduRegion;
    const isVisible_Static8 = rawVisible_Static8 && rawVisible_shpGubunBox;
    const setIsVisible_Static8 = setRawVisible_Static8;
    const isVisible_lbSMS = rawVisible_lbSMS && rawVisible_shpGubunBox;
    const setIsVisible_lbSMS = setRawVisible_lbSMS;
    const isVisible_radSMSSendYN = rawVisible_radSMSSendYN && rawVisible_shpGubunBox;
    const setIsVisible_radSMSSendYN = setRawVisible_radSMSSendYN;
    const isVisible_calSendDate = rawVisible_calSendDate && rawVisible_shpGubunBox;
    const setIsVisible_calSendDate = setRawVisible_calSendDate;
    const isVisible_lbSendDate = rawVisible_lbSendDate && rawVisible_shpGubunBox;
    const setIsVisible_lbSendDate = setRawVisible_lbSendDate;
    const isVisible_lbSendTime = rawVisible_lbSendTime && rawVisible_shpGubunBox;
    const setIsVisible_lbSendTime = setRawVisible_lbSendTime;
    const isVisible_btnSMSView = rawVisible_btnSMSView && rawVisible_shpGubunBox;
    const setIsVisible_btnSMSView = setRawVisible_btnSMSView;
    const isVisible_Static9 = rawVisible_Static9;
    const setIsVisible_Static9 = setRawVisible_Static9;
    const isVisible_radEduType20 = rawVisible_radEduType20 && rawVisible_shpGubunBox;
    const setIsVisible_radEduType20 = setRawVisible_radEduType20;
    const isVisible_radEduType30 = rawVisible_radEduType30 && rawVisible_shpGubunBox;
    const setIsVisible_radEduType30 = setRawVisible_radEduType30;
    const isVisible_radEduType2 = rawVisible_radEduType2 && rawVisible_shpGubunBox;
    const setIsVisible_radEduType2 = setRawVisible_radEduType2;
    const isVisible_radEduType3 = rawVisible_radEduType3 && rawVisible_shpGubunBox;
    const setIsVisible_radEduType3 = setRawVisible_radEduType3;
    const isVisible_Static10 = rawVisible_Static10 && rawVisible_shpGubunBox;
    const setIsVisible_Static10 = setRawVisible_Static10;
    const isVisible_edProfessor = rawVisible_edProfessor && rawVisible_shpGubunBox;
    const setIsVisible_edProfessor = setRawVisible_edProfessor;
    const isVisible_lbCyberGubun = rawVisible_lbCyberGubun && rawVisible_shpGubunBox;
    const setIsVisible_lbCyberGubun = setRawVisible_lbCyberGubun;
    const isVisible_lbImsiESMGNO = rawVisible_lbImsiESMGNO;
    const setIsVisible_lbImsiESMGNO = setRawVisible_lbImsiESMGNO;
    const isVisible_edImsiESMGNO = rawVisible_edImsiESMGNO;
    const setIsVisible_edImsiESMGNO = setRawVisible_edImsiESMGNO;
    const isVisible_radCyberGubun = rawVisible_radCyberGubun && rawVisible_shpGubunBox;
    const setIsVisible_radCyberGubun = setRawVisible_radCyberGubun;
    const isVisible_radCyberGubun10 = rawVisible_radCyberGubun10 && rawVisible_shpGubunBox;
    const setIsVisible_radCyberGubun10 = setRawVisible_radCyberGubun10;
    const isVisible_Static1 = rawVisible_Static1 && rawVisible_shpGubunBox;
    const setIsVisible_Static1 = setRawVisible_Static1;
    const isVisible_calCyberDateStart = rawVisible_calCyberDateStart && rawVisible_shpGubunBox;
    const setIsVisible_calCyberDateStart = setRawVisible_calCyberDateStart;
    const isVisible_Static6 = rawVisible_Static6 && rawVisible_shpGubunBox;
    const setIsVisible_Static6 = setRawVisible_Static6;
    const isVisible_calCyberDateEnd = rawVisible_calCyberDateEnd && rawVisible_shpGubunBox;
    const setIsVisible_calCyberDateEnd = setRawVisible_calCyberDateEnd;
    const isVisible_lbJubsuDate = rawVisible_lbJubsuDate && rawVisible_shpGubunBox;
    const setIsVisible_lbJubsuDate = setRawVisible_lbJubsuDate;
    const isVisible_calJubsuStartDate = rawVisible_calJubsuStartDate && rawVisible_shpGubunBox;
    const setIsVisible_calJubsuStartDate = setRawVisible_calJubsuStartDate;
    const isVisible_Static11 = rawVisible_Static11 && rawVisible_shpGubunBox;
    const setIsVisible_Static11 = setRawVisible_Static11;
    const isVisible_calJubsuEndDate = rawVisible_calJubsuEndDate && rawVisible_shpGubunBox;
    const setIsVisible_calJubsuEndDate = setRawVisible_calJubsuEndDate;
    const isVisible_Shape0 = rawVisible_Shape0 && rawVisible_shpGubunBox;
    const setIsVisible_Shape0 = setRawVisible_Shape0;
    const isVisible_edOnlineID = rawVisible_edOnlineID && rawVisible_Shape0;
    const setIsVisible_edOnlineID = setRawVisible_edOnlineID;
    const isVisible_edOnlinePWD = rawVisible_edOnlinePWD && rawVisible_Shape0;
    const setIsVisible_edOnlinePWD = setRawVisible_edOnlinePWD;
    const isVisible_lbOnline3 = rawVisible_lbOnline3 && rawVisible_Shape0;
    const setIsVisible_lbOnline3 = setRawVisible_lbOnline3;
    const isVisible_lbOnline2 = rawVisible_lbOnline2 && rawVisible_Shape0;
    const setIsVisible_lbOnline2 = setRawVisible_lbOnline2;
    const isVisible_Static12 = rawVisible_Static12 && rawVisible_shpGubunBox;
    const setIsVisible_Static12 = setRawVisible_Static12;
    const isVisible_radEduType40 = rawVisible_radEduType40 && rawVisible_shpGubunBox;
    const setIsVisible_radEduType40 = setRawVisible_radEduType40;

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_ioTrainingOrder([]);
            setds_oUseYn([]);
            setds_oInetJubsuYn([]);
            setds_METARGET([]);
            setds_MECOURSE([]);
            setds_MEDAYGUBUNCD([]);
            setds_oInternetJubsuStatus([]);
            setds_Jibu([]);
            setds_oCourse([]);
            setds_ioExamRoomMinimap([]);
            setds_oJibu([]);
            setds_oTrainingOrderMgno([]);
            setds_oModifyColumn([]);
            setds_oEduType1([]);
            setds_oEduType2([]);
            setds_oEduType3([]);
            setds_oSendYN([]);
            setds_oEduType10([]);
            setds_oEduType20([]);
            setds_oEduType30([]);
            setds_oEduType50([]);
            setds_oCyberGubun10([]);
            setds_oCyberGubun([]);
            setds_oEduType40([]);
            setds_MECOURSEAll([]);
            setds_oEduTypeFilter10([]);
            setds_oCyberGubun2([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnMinimap_OnClick = () => {
        console.log('btnMinimap_OnClick clicked');
    };
    const btnMutilSort_OnClick = () => {
        console.log('btnMutilSort_OnClick clicked');
    };
    const btnSMSView_OnClick = () => {
        console.log('btnSMSView_OnClick clicked');
    };
    const btnSearchEduPlace_OnClick = () => {
        console.log('btnSearchEduPlace_OnClick clicked');
    };
    const btnToExcel_OnClick = () => {
        console.log('btnToExcel_OnClick clicked');
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
    const radSMSSendYN_OnClick = () => {
        console.log('radSMSSendYN_OnClick clicked');
    };

    return {
        isLoading,
        ds_ioTrainingOrder,
        ds_oUseYn,
        ds_oInetJubsuYn,
        ds_METARGET,
        ds_MECOURSE,
        ds_MEDAYGUBUNCD,
        ds_oInternetJubsuStatus,
        ds_Jibu,
        ds_oCourse,
        ds_ioExamRoomMinimap,
        ds_oJibu,
        ds_oTrainingOrderMgno,
        ds_oModifyColumn,
        ds_oEduType1,
        ds_oEduType2,
        ds_oEduType3,
        ds_oSendYN,
        ds_oEduType10,
        ds_oEduType20,
        ds_oEduType30,
        ds_oEduType50,
        ds_oCyberGubun10,
        ds_oCyberGubun,
        ds_oEduType40,
        ds_MECOURSEAll,
        ds_oEduTypeFilter10,
        ds_oCyberGubun2,
        isVisible_shpGubunBox,
        setIsVisible_shpGubunBox,
        isVisible_radCyberGubun4080,
        setIsVisible_radCyberGubun4080,
        isVisible_radEduType10,
        setIsVisible_radEduType10,
        isVisible_radSUBJECTGUBUN,
        setIsVisible_radSUBJECTGUBUN,
        isVisible_Static3,
        setIsVisible_Static3,
        isVisible_radEduType50,
        setIsVisible_radEduType50,
        isVisible_shpBtnBox,
        setIsVisible_shpBtnBox,
        isVisible_divWorkFormTitle,
        setIsVisible_divWorkFormTitle,
        isVisible_btnMutilSort,
        setIsVisible_btnMutilSort,
        isVisible_lbEduPlace,
        setIsVisible_lbEduPlace,
        isVisible_edEduPlace,
        setIsVisible_edEduPlace,
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
        isVisible_lbJibu,
        setIsVisible_lbJibu,
        isVisible_cbxJibu,
        setIsVisible_cbxJibu,
        isVisible_lbCourse,
        setIsVisible_lbCourse,
        isVisible_cbxCourse,
        setIsVisible_cbxCourse,
        isVisible_lbStdYear,
        setIsVisible_lbStdYear,
        isVisible_edTrainingYear,
        setIsVisible_edTrainingYear,
        isVisible_medSeatCnt,
        setIsVisible_medSeatCnt,
        isVisible_tmEduTimeEnd,
        setIsVisible_tmEduTimeEnd,
        isVisible_calEduDateStart,
        setIsVisible_calEduDateStart,
        isVisible_tmEduTimeStart,
        setIsVisible_tmEduTimeStart,
        isVisible_lbSeatCnt,
        setIsVisible_lbSeatCnt,
        isVisible_lbEduTime,
        setIsVisible_lbEduTime,
        isVisible_lbEduDate,
        setIsVisible_lbEduDate,
        isVisible_radTrainingOrderUseYn,
        setIsVisible_radTrainingOrderUseYn,
        isVisible_lbAddNoticeRemark,
        setIsVisible_lbAddNoticeRemark,
        isVisible_edAddNoticeRemark,
        setIsVisible_edAddNoticeRemark,
        isVisible_lbParkingNotice,
        setIsVisible_lbParkingNotice,
        isVisible_edParkingNotice,
        setIsVisible_edParkingNotice,
        isVisible_lbInternetJubsuStatus,
        setIsVisible_lbInternetJubsuStatus,
        isVisible_lbTrainingOrderUseYn,
        setIsVisible_lbTrainingOrderUseYn,
        isVisible_lbJubsuCnt,
        setIsVisible_lbJubsuCnt,
        isVisible_medJubsuCnt,
        setIsVisible_medJubsuCnt,
        isVisible_lbTimeWave,
        setIsVisible_lbTimeWave,
        isVisible_btnMiniMap_1,
        setIsVisible_btnMiniMap_1,
        isVisible_medIJubsuCnt,
        setIsVisible_medIJubsuCnt,
        isVisible_lbIJubsuCnt,
        setIsVisible_lbIJubsuCnt,
        isVisible_Static2,
        setIsVisible_Static2,
        isVisible_radStudent,
        setIsVisible_radStudent,
        isVisible_Static4,
        setIsVisible_Static4,
        isVisible_radGubun,
        setIsVisible_radGubun,
        isVisible_radINetOpenYN,
        setIsVisible_radINetOpenYN,
        isVisible_Static5,
        setIsVisible_Static5,
        isVisible_calInternetEnd,
        setIsVisible_calInternetEnd,
        isVisible_lbLimitDate,
        setIsVisible_lbLimitDate,
        isVisible_btnSearchEduPlace,
        setIsVisible_btnSearchEduPlace,
        isVisible_btnMiniMap,
        setIsVisible_btnMiniMap,
        isVisible_gdTrainingOrder,
        setIsVisible_gdTrainingOrder,
        isVisible_edESMGNO,
        setIsVisible_edESMGNO,
        isVisible_lbTotalCnt,
        setIsVisible_lbTotalCnt,
        isVisible_medTotalCnt,
        setIsVisible_medTotalCnt,
        isVisible_lbTrainingOrder,
        setIsVisible_lbTrainingOrder,
        isVisible_edEduOrder,
        setIsVisible_edEduOrder,
        isVisible_Static0,
        setIsVisible_Static0,
        isVisible_radEduType1,
        setIsVisible_radEduType1,
        isVisible_Static7,
        setIsVisible_Static7,
        isVisible_edEduRegion,
        setIsVisible_edEduRegion,
        isVisible_Static8,
        setIsVisible_Static8,
        isVisible_lbSMS,
        setIsVisible_lbSMS,
        isVisible_radSMSSendYN,
        setIsVisible_radSMSSendYN,
        isVisible_calSendDate,
        setIsVisible_calSendDate,
        isVisible_lbSendDate,
        setIsVisible_lbSendDate,
        isVisible_lbSendTime,
        setIsVisible_lbSendTime,
        isVisible_btnSMSView,
        setIsVisible_btnSMSView,
        isVisible_Static9,
        setIsVisible_Static9,
        isVisible_radEduType20,
        setIsVisible_radEduType20,
        isVisible_radEduType30,
        setIsVisible_radEduType30,
        isVisible_radEduType2,
        setIsVisible_radEduType2,
        isVisible_radEduType3,
        setIsVisible_radEduType3,
        isVisible_Static10,
        setIsVisible_Static10,
        isVisible_edProfessor,
        setIsVisible_edProfessor,
        isVisible_lbCyberGubun,
        setIsVisible_lbCyberGubun,
        isVisible_lbImsiESMGNO,
        setIsVisible_lbImsiESMGNO,
        isVisible_edImsiESMGNO,
        setIsVisible_edImsiESMGNO,
        isVisible_radCyberGubun,
        setIsVisible_radCyberGubun,
        isVisible_radCyberGubun10,
        setIsVisible_radCyberGubun10,
        isVisible_Static1,
        setIsVisible_Static1,
        isVisible_calCyberDateStart,
        setIsVisible_calCyberDateStart,
        isVisible_Static6,
        setIsVisible_Static6,
        isVisible_calCyberDateEnd,
        setIsVisible_calCyberDateEnd,
        isVisible_lbJubsuDate,
        setIsVisible_lbJubsuDate,
        isVisible_calJubsuStartDate,
        setIsVisible_calJubsuStartDate,
        isVisible_Static11,
        setIsVisible_Static11,
        isVisible_calJubsuEndDate,
        setIsVisible_calJubsuEndDate,
        isVisible_Shape0,
        setIsVisible_Shape0,
        isVisible_edOnlineID,
        setIsVisible_edOnlineID,
        isVisible_edOnlinePWD,
        setIsVisible_edOnlinePWD,
        isVisible_lbOnline3,
        setIsVisible_lbOnline3,
        isVisible_lbOnline2,
        setIsVisible_lbOnline2,
        isVisible_Static12,
        setIsVisible_Static12,
        isVisible_radEduType40,
        setIsVisible_radEduType40,
        btnMinimap_OnClick,
        btnMutilSort_OnClick,
        btnSMSView_OnClick,
        btnSearchEduPlace_OnClick,
        btnToExcel_OnClick,
        lfn_Cancel,
        lfn_Delete,
        lfn_End,
        lfn_Input,
        lfn_PrintScreen,
        lfn_Save,
        lfn_Search,
        radSMSSendYN_OnClick,
    };
};