// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_ioGijun, Ids_oCourse, Ids_2, Ids_oJibu, Ids_ioDMList, Ids_3, Ids_ioDMList1, Ids_oTJubsu } from './Frmcust1350MCAGDMDataData';

export const useFrmcust1350MCAGDMData = () => {
    const [ds_ioGijun, setds_ioGijun] = useState<Ids_ioGijun[]>([]);
    const [ds_oCourse, setds_oCourse] = useState<Ids_oCourse[]>([]);
    const [ds_2, setds_2] = useState<Ids_2[]>([]);
    const [ds_oJibu, setds_oJibu] = useState<Ids_oJibu[]>([]);
    const [ds_ioDMList, setds_ioDMList] = useState<Ids_ioDMList[]>([]);
    const [ds_3, setds_3] = useState<Ids_3[]>([]);
    const [ds_ioDMList1, setds_ioDMList1] = useState<Ids_ioDMList1[]>([]);
    const [ds_oTJubsu, setds_oTJubsu] = useState<Ids_oTJubsu[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [rawVisible_Shape0, setRawVisible_Shape0] = useState(true);
    const [rawVisible_divWorkFormTitle, setRawVisible_divWorkFormTitle] = useState(true);
    const [rawVisible_shpBtnBox, setRawVisible_shpBtnBox] = useState(true);
    const [rawVisible_btnEnd, setRawVisible_btnEnd] = useState(true);
    const [rawVisible_btnSearch, setRawVisible_btnSearch] = useState(true);
    const [rawVisible_Static1, setRawVisible_Static1] = useState(true);
    const [rawVisible_Static4, setRawVisible_Static4] = useState(true);
    const [rawVisible_cbxJibu, setRawVisible_cbxJibu] = useState(true);
    const [rawVisible_cldAPNT_DE_8, setRawVisible_cldAPNT_DE_8] = useState(true);
    const [rawVisible_cld_TodT, setRawVisible_cld_TodT] = useState(true);
    const [rawVisible_Static0, setRawVisible_Static0] = useState(true);
    const [rawVisible_cld_FromDt, setRawVisible_cld_FromDt] = useState(true);
    const [rawVisible_lbExpireBetween3, setRawVisible_lbExpireBetween3] = useState(true);
    const [rawVisible_Shape1, setRawVisible_Shape1] = useState(true);
    const [rawVisible_Static9, setRawVisible_Static9] = useState(true);
    const [rawVisible_Static11, setRawVisible_Static11] = useState(true);
    const [rawVisible_edDMTotalCount, setRawVisible_edDMTotalCount] = useState(true);
    const [rawVisible_Static27, setRawVisible_Static27] = useState(true);
    const [rawVisible_Static2, setRawVisible_Static2] = useState(true);
    const [rawVisible_radGUBUN, setRawVisible_radGUBUN] = useState(true);
    const [rawVisible_rdAPNTGUBUN, setRawVisible_rdAPNTGUBUN] = useState(true);
    const [rawVisible_btnExcelPrint1, setRawVisible_btnExcelPrint1] = useState(true);
    const [rawVisible_btnSms, setRawVisible_btnSms] = useState(true);
    const [rawVisible_gdExamOrder, setRawVisible_gdExamOrder] = useState(true);
    const [rawVisible_radGUBUN2, setRawVisible_radGUBUN2] = useState(true);
    const [rawVisible_Static3, setRawVisible_Static3] = useState(true);
    const [rawVisible_lbTextBlue, setRawVisible_lbTextBlue] = useState(true);
    const [rawVisible_Static5, setRawVisible_Static5] = useState(true);
    const [rawVisible_medSmsCnt, setRawVisible_medSmsCnt] = useState(true);
    const [rawVisible_Static6, setRawVisible_Static6] = useState(true);
    const [rawVisible_Grid1, setRawVisible_Grid1] = useState(false);
    const [rawVisible_radTJubsu, setRawVisible_radTJubsu] = useState(true);
    const [rawVisible_Static7, setRawVisible_Static7] = useState(true);
    const isVisible_Shape0 = rawVisible_Shape0;
    const setIsVisible_Shape0 = setRawVisible_Shape0;
    const isVisible_divWorkFormTitle = rawVisible_divWorkFormTitle;
    const setIsVisible_divWorkFormTitle = setRawVisible_divWorkFormTitle;
    const isVisible_shpBtnBox = rawVisible_shpBtnBox;
    const setIsVisible_shpBtnBox = setRawVisible_shpBtnBox;
    const isVisible_btnEnd = rawVisible_btnEnd && rawVisible_shpBtnBox;
    const setIsVisible_btnEnd = setRawVisible_btnEnd;
    const isVisible_btnSearch = rawVisible_btnSearch && rawVisible_shpBtnBox;
    const setIsVisible_btnSearch = setRawVisible_btnSearch;
    const isVisible_Static1 = rawVisible_Static1;
    const setIsVisible_Static1 = setRawVisible_Static1;
    const isVisible_Static4 = rawVisible_Static4 && rawVisible_Shape0;
    const setIsVisible_Static4 = setRawVisible_Static4;
    const isVisible_cbxJibu = rawVisible_cbxJibu && rawVisible_Shape0;
    const setIsVisible_cbxJibu = setRawVisible_cbxJibu;
    const isVisible_cldAPNT_DE_8 = rawVisible_cldAPNT_DE_8 && rawVisible_Shape0;
    const setIsVisible_cldAPNT_DE_8 = setRawVisible_cldAPNT_DE_8;
    const isVisible_cld_TodT = rawVisible_cld_TodT && rawVisible_Shape0;
    const setIsVisible_cld_TodT = setRawVisible_cld_TodT;
    const isVisible_Static0 = rawVisible_Static0 && rawVisible_Shape0;
    const setIsVisible_Static0 = setRawVisible_Static0;
    const isVisible_cld_FromDt = rawVisible_cld_FromDt && rawVisible_Shape0;
    const setIsVisible_cld_FromDt = setRawVisible_cld_FromDt;
    const isVisible_lbExpireBetween3 = rawVisible_lbExpireBetween3 && rawVisible_Shape0;
    const setIsVisible_lbExpireBetween3 = setRawVisible_lbExpireBetween3;
    const isVisible_Shape1 = rawVisible_Shape1 && rawVisible_Shape0;
    const setIsVisible_Shape1 = setRawVisible_Shape1;
    const isVisible_Static9 = rawVisible_Static9 && rawVisible_Shape0;
    const setIsVisible_Static9 = setRawVisible_Static9;
    const isVisible_Static11 = rawVisible_Static11 && rawVisible_Shape1;
    const setIsVisible_Static11 = setRawVisible_Static11;
    const isVisible_edDMTotalCount = rawVisible_edDMTotalCount && rawVisible_Shape1;
    const setIsVisible_edDMTotalCount = setRawVisible_edDMTotalCount;
    const isVisible_Static27 = rawVisible_Static27 && rawVisible_Shape1;
    const setIsVisible_Static27 = setRawVisible_Static27;
    const isVisible_Static2 = rawVisible_Static2 && rawVisible_Shape0;
    const setIsVisible_Static2 = setRawVisible_Static2;
    const isVisible_radGUBUN = rawVisible_radGUBUN && rawVisible_Shape0;
    const setIsVisible_radGUBUN = setRawVisible_radGUBUN;
    const isVisible_rdAPNTGUBUN = rawVisible_rdAPNTGUBUN && rawVisible_Shape0;
    const setIsVisible_rdAPNTGUBUN = setRawVisible_rdAPNTGUBUN;
    const isVisible_btnExcelPrint1 = rawVisible_btnExcelPrint1 && rawVisible_Shape1;
    const setIsVisible_btnExcelPrint1 = setRawVisible_btnExcelPrint1;
    const isVisible_btnSms = rawVisible_btnSms && rawVisible_Shape1;
    const setIsVisible_btnSms = setRawVisible_btnSms;
    const isVisible_gdExamOrder = rawVisible_gdExamOrder && rawVisible_Shape0;
    const setIsVisible_gdExamOrder = setRawVisible_gdExamOrder;
    const isVisible_radGUBUN2 = rawVisible_radGUBUN2 && rawVisible_Shape0;
    const setIsVisible_radGUBUN2 = setRawVisible_radGUBUN2;
    const isVisible_Static3 = rawVisible_Static3 && rawVisible_Shape0;
    const setIsVisible_Static3 = setRawVisible_Static3;
    const isVisible_lbTextBlue = rawVisible_lbTextBlue && rawVisible_Shape0;
    const setIsVisible_lbTextBlue = setRawVisible_lbTextBlue;
    const isVisible_Static5 = rawVisible_Static5 && rawVisible_Shape0;
    const setIsVisible_Static5 = setRawVisible_Static5;
    const isVisible_medSmsCnt = rawVisible_medSmsCnt && rawVisible_Shape0;
    const setIsVisible_medSmsCnt = setRawVisible_medSmsCnt;
    const isVisible_Static6 = rawVisible_Static6 && rawVisible_Shape0;
    const setIsVisible_Static6 = setRawVisible_Static6;
    const isVisible_Grid1 = rawVisible_Grid1;
    const setIsVisible_Grid1 = setRawVisible_Grid1;
    const isVisible_radTJubsu = rawVisible_radTJubsu && rawVisible_Shape0;
    const setIsVisible_radTJubsu = setRawVisible_radTJubsu;
    const isVisible_Static7 = rawVisible_Static7 && rawVisible_Shape0;
    const setIsVisible_Static7 = setRawVisible_Static7;

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_ioGijun([]);
            setds_oCourse([]);
            setds_2([]);
            setds_oJibu([]);
            setds_ioDMList([]);
            setds_3([]);
            setds_ioDMList1([]);
            setds_oTJubsu([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnExcelPrint1_OnClick = () => {
        console.log('btnExcelPrint1_OnClick clicked');
    };
    const btnSms_OnClick = () => {
        console.log('btnSms_OnClick clicked');
    };
    const lfn_End = () => {
        console.log('lfn_End clicked');
    };
    const lfn_Search = () => {
        console.log('lfn_Search clicked');
    };

    return {
        isLoading,
        ds_ioGijun,
        ds_oCourse,
        ds_2,
        ds_oJibu,
        ds_ioDMList,
        ds_3,
        ds_ioDMList1,
        ds_oTJubsu,
        isVisible_Shape0,
        setIsVisible_Shape0,
        isVisible_divWorkFormTitle,
        setIsVisible_divWorkFormTitle,
        isVisible_shpBtnBox,
        setIsVisible_shpBtnBox,
        isVisible_btnEnd,
        setIsVisible_btnEnd,
        isVisible_btnSearch,
        setIsVisible_btnSearch,
        isVisible_Static1,
        setIsVisible_Static1,
        isVisible_Static4,
        setIsVisible_Static4,
        isVisible_cbxJibu,
        setIsVisible_cbxJibu,
        isVisible_cldAPNT_DE_8,
        setIsVisible_cldAPNT_DE_8,
        isVisible_cld_TodT,
        setIsVisible_cld_TodT,
        isVisible_Static0,
        setIsVisible_Static0,
        isVisible_cld_FromDt,
        setIsVisible_cld_FromDt,
        isVisible_lbExpireBetween3,
        setIsVisible_lbExpireBetween3,
        isVisible_Shape1,
        setIsVisible_Shape1,
        isVisible_Static9,
        setIsVisible_Static9,
        isVisible_Static11,
        setIsVisible_Static11,
        isVisible_edDMTotalCount,
        setIsVisible_edDMTotalCount,
        isVisible_Static27,
        setIsVisible_Static27,
        isVisible_Static2,
        setIsVisible_Static2,
        isVisible_radGUBUN,
        setIsVisible_radGUBUN,
        isVisible_rdAPNTGUBUN,
        setIsVisible_rdAPNTGUBUN,
        isVisible_btnExcelPrint1,
        setIsVisible_btnExcelPrint1,
        isVisible_btnSms,
        setIsVisible_btnSms,
        isVisible_gdExamOrder,
        setIsVisible_gdExamOrder,
        isVisible_radGUBUN2,
        setIsVisible_radGUBUN2,
        isVisible_Static3,
        setIsVisible_Static3,
        isVisible_lbTextBlue,
        setIsVisible_lbTextBlue,
        isVisible_Static5,
        setIsVisible_Static5,
        isVisible_medSmsCnt,
        setIsVisible_medSmsCnt,
        isVisible_Static6,
        setIsVisible_Static6,
        isVisible_Grid1,
        setIsVisible_Grid1,
        isVisible_radTJubsu,
        setIsVisible_radTJubsu,
        isVisible_Static7,
        setIsVisible_Static7,
        btnExcelPrint1_OnClick,
        btnSms_OnClick,
        lfn_End,
        lfn_Search,
    };
};