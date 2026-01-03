// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_ioGubun, Ids_ioSunap, Ids_ioJibu, Ids_ioElecApprConnection, Ids_oMemberfee1, Ids_oMemberfee2, Ids_oMemberfee3, Ids_oMemberfee4, Ids_oMemberfee1_2 } from './Frmcust2080MDailyFeeReportGatewayData';

export const useFrmcust2080MDailyFeeReportGateway = () => {
    const [ds_ioGubun, setds_ioGubun] = useState<Ids_ioGubun[]>([]);
    const [ds_ioSunap, setds_ioSunap] = useState<Ids_ioSunap[]>([]);
    const [ds_ioJibu, setds_ioJibu] = useState<Ids_ioJibu[]>([]);
    const [ds_ioElecApprConnection, setds_ioElecApprConnection] = useState<Ids_ioElecApprConnection[]>([]);
    const [ds_oMemberfee1, setds_oMemberfee1] = useState<Ids_oMemberfee1[]>([]);
    const [ds_oMemberfee2, setds_oMemberfee2] = useState<Ids_oMemberfee2[]>([]);
    const [ds_oMemberfee3, setds_oMemberfee3] = useState<Ids_oMemberfee3[]>([]);
    const [ds_oMemberfee4, setds_oMemberfee4] = useState<Ids_oMemberfee4[]>([]);
    const [ds_oMemberfee1_2, setds_oMemberfee1_2] = useState<Ids_oMemberfee1_2[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [rawVisible_Shape2, setRawVisible_Shape2] = useState(true);
    const [rawVisible_Shape0, setRawVisible_Shape0] = useState(true);
    const [rawVisible_shpBtnBox, setRawVisible_shpBtnBox] = useState(true);
    const [rawVisible_divWorkFormTitle, setRawVisible_divWorkFormTitle] = useState(true);
    const [rawVisible_btnToExcel, setRawVisible_btnToExcel] = useState(true);
    const [rawVisible_btnPrintScreen, setRawVisible_btnPrintScreen] = useState(true);
    const [rawVisible_btnEnd, setRawVisible_btnEnd] = useState(true);
    const [rawVisible_lbJubsu, setRawVisible_lbJubsu] = useState(true);
    const [rawVisible_Shape1, setRawVisible_Shape1] = useState(true);
    const [rawVisible_gdElecAppr, setRawVisible_gdElecAppr] = useState(true);
    const [rawVisible_radOrder, setRawVisible_radOrder] = useState(true);
    const [rawVisible_Static3, setRawVisible_Static3] = useState(true);
    const [rawVisible_btnCancel, setRawVisible_btnCancel] = useState(true);
    const [rawVisible_radGubun, setRawVisible_radGubun] = useState(true);
    const [rawVisible_Static0, setRawVisible_Static0] = useState(true);
    const [rawVisible_Static1, setRawVisible_Static1] = useState(true);
    const [rawVisible_calStartDate, setRawVisible_calStartDate] = useState(true);
    const [rawVisible_Static12, setRawVisible_Static12] = useState(true);
    const [rawVisible_calEndDate, setRawVisible_calEndDate] = useState(true);
    const [rawVisible_Static2, setRawVisible_Static2] = useState(true);
    const [rawVisible_btnPrint, setRawVisible_btnPrint] = useState(true);
    const [rawVisible_Static4, setRawVisible_Static4] = useState(true);
    const [rawVisible_btnSelect, setRawVisible_btnSelect] = useState(true);
    const [rawVisible_lbTextBlue, setRawVisible_lbTextBlue] = useState(true);
    const [rawVisible_btnCreateList, setRawVisible_btnCreateList] = useState(true);
    const [rawVisible_btnProcElecApv, setRawVisible_btnProcElecApv] = useState(true);
    const [rawVisible_lbText, setRawVisible_lbText] = useState(true);
    const [rawVisible_Static5, setRawVisible_Static5] = useState(true);
    const [rawVisible_lbJibu, setRawVisible_lbJibu] = useState(true);
    const [rawVisible_cbxJibu, setRawVisible_cbxJibu] = useState(true);
    const [rawVisible_Static6, setRawVisible_Static6] = useState(true);
    const [rawVisible_Static7, setRawVisible_Static7] = useState(true);
    const [rawVisible_Button0, setRawVisible_Button0] = useState(true);
    const [rawVisible_lbSMS, setRawVisible_lbSMS] = useState(true);
    const isVisible_Shape2 = rawVisible_Shape2;
    const setIsVisible_Shape2 = setRawVisible_Shape2;
    const isVisible_Shape0 = rawVisible_Shape0;
    const setIsVisible_Shape0 = setRawVisible_Shape0;
    const isVisible_shpBtnBox = rawVisible_shpBtnBox;
    const setIsVisible_shpBtnBox = setRawVisible_shpBtnBox;
    const isVisible_divWorkFormTitle = rawVisible_divWorkFormTitle;
    const setIsVisible_divWorkFormTitle = setRawVisible_divWorkFormTitle;
    const isVisible_btnToExcel = rawVisible_btnToExcel && rawVisible_shpBtnBox;
    const setIsVisible_btnToExcel = setRawVisible_btnToExcel;
    const isVisible_btnPrintScreen = rawVisible_btnPrintScreen && rawVisible_shpBtnBox;
    const setIsVisible_btnPrintScreen = setRawVisible_btnPrintScreen;
    const isVisible_btnEnd = rawVisible_btnEnd && rawVisible_shpBtnBox;
    const setIsVisible_btnEnd = setRawVisible_btnEnd;
    const isVisible_lbJubsu = rawVisible_lbJubsu;
    const setIsVisible_lbJubsu = setRawVisible_lbJubsu;
    const isVisible_Shape1 = rawVisible_Shape1;
    const setIsVisible_Shape1 = setRawVisible_Shape1;
    const isVisible_gdElecAppr = rawVisible_gdElecAppr && rawVisible_Shape1;
    const setIsVisible_gdElecAppr = setRawVisible_gdElecAppr;
    const isVisible_radOrder = rawVisible_radOrder && rawVisible_Shape0;
    const setIsVisible_radOrder = setRawVisible_radOrder;
    const isVisible_Static3 = rawVisible_Static3 && rawVisible_Shape0;
    const setIsVisible_Static3 = setRawVisible_Static3;
    const isVisible_btnCancel = rawVisible_btnCancel && rawVisible_shpBtnBox;
    const setIsVisible_btnCancel = setRawVisible_btnCancel;
    const isVisible_radGubun = rawVisible_radGubun && rawVisible_Shape0;
    const setIsVisible_radGubun = setRawVisible_radGubun;
    const isVisible_Static0 = rawVisible_Static0 && rawVisible_Shape0;
    const setIsVisible_Static0 = setRawVisible_Static0;
    const isVisible_Static1 = rawVisible_Static1 && rawVisible_Shape0;
    const setIsVisible_Static1 = setRawVisible_Static1;
    const isVisible_calStartDate = rawVisible_calStartDate && rawVisible_Shape0;
    const setIsVisible_calStartDate = setRawVisible_calStartDate;
    const isVisible_Static12 = rawVisible_Static12 && rawVisible_Shape0;
    const setIsVisible_Static12 = setRawVisible_Static12;
    const isVisible_calEndDate = rawVisible_calEndDate && rawVisible_Shape0;
    const setIsVisible_calEndDate = setRawVisible_calEndDate;
    const isVisible_Static2 = rawVisible_Static2;
    const setIsVisible_Static2 = setRawVisible_Static2;
    const isVisible_btnPrint = rawVisible_btnPrint && rawVisible_Shape0;
    const setIsVisible_btnPrint = setRawVisible_btnPrint;
    const isVisible_Static4 = rawVisible_Static4;
    const setIsVisible_Static4 = setRawVisible_Static4;
    const isVisible_btnSelect = rawVisible_btnSelect && rawVisible_Shape1;
    const setIsVisible_btnSelect = setRawVisible_btnSelect;
    const isVisible_lbTextBlue = rawVisible_lbTextBlue && rawVisible_Shape2;
    const setIsVisible_lbTextBlue = setRawVisible_lbTextBlue;
    const isVisible_btnCreateList = rawVisible_btnCreateList && rawVisible_Shape2;
    const setIsVisible_btnCreateList = setRawVisible_btnCreateList;
    const isVisible_btnProcElecApv = rawVisible_btnProcElecApv && rawVisible_Shape2;
    const setIsVisible_btnProcElecApv = setRawVisible_btnProcElecApv;
    const isVisible_lbText = rawVisible_lbText && rawVisible_Shape2;
    const setIsVisible_lbText = setRawVisible_lbText;
    const isVisible_Static5 = rawVisible_Static5 && rawVisible_Shape2;
    const setIsVisible_Static5 = setRawVisible_Static5;
    const isVisible_lbJibu = rawVisible_lbJibu && rawVisible_Shape0;
    const setIsVisible_lbJibu = setRawVisible_lbJibu;
    const isVisible_cbxJibu = rawVisible_cbxJibu && rawVisible_Shape0;
    const setIsVisible_cbxJibu = setRawVisible_cbxJibu;
    const isVisible_Static6 = rawVisible_Static6 && rawVisible_Shape2;
    const setIsVisible_Static6 = setRawVisible_Static6;
    const isVisible_Static7 = rawVisible_Static7 && rawVisible_Shape2;
    const setIsVisible_Static7 = setRawVisible_Static7;
    const isVisible_Button0 = rawVisible_Button0;
    const setIsVisible_Button0 = setRawVisible_Button0;
    const isVisible_lbSMS = rawVisible_lbSMS && rawVisible_Shape1;
    const setIsVisible_lbSMS = setRawVisible_lbSMS;

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_ioGubun([]);
            setds_ioSunap([]);
            setds_ioJibu([]);
            setds_ioElecApprConnection([]);
            setds_oMemberfee1([]);
            setds_oMemberfee2([]);
            setds_oMemberfee3([]);
            setds_oMemberfee4([]);
            setds_oMemberfee1_2([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnCreateListTotaling_OnClick = () => {
        console.log('btnCreateListTotaling_OnClick clicked');
    };
    const btnCreateListTotaling_part1_OnClick = () => {
        console.log('btnCreateListTotaling_part1_OnClick clicked');
    };
    const btnCreateList_OnClick = () => {
        console.log('btnCreateList_OnClick clicked');
    };
    const btnProcElecApv_OnClick = () => {
        console.log('btnProcElecApv_OnClick clicked');
    };
    const btnSelect_OnClick = () => {
        console.log('btnSelect_OnClick clicked');
    };
    const lfn_Cancel = () => {
        console.log('lfn_Cancel clicked');
    };
    const lfn_End = () => {
        console.log('lfn_End clicked');
    };
    const lfn_PrintScreen = () => {
        console.log('lfn_PrintScreen clicked');
    };
    const lfn_localExcel = () => {
        console.log('lfn_localExcel clicked');
    };

    return {
        isLoading,
        ds_ioGubun,
        ds_ioSunap,
        ds_ioJibu,
        ds_ioElecApprConnection,
        ds_oMemberfee1,
        ds_oMemberfee2,
        ds_oMemberfee3,
        ds_oMemberfee4,
        ds_oMemberfee1_2,
        isVisible_Shape2,
        setIsVisible_Shape2,
        isVisible_Shape0,
        setIsVisible_Shape0,
        isVisible_shpBtnBox,
        setIsVisible_shpBtnBox,
        isVisible_divWorkFormTitle,
        setIsVisible_divWorkFormTitle,
        isVisible_btnToExcel,
        setIsVisible_btnToExcel,
        isVisible_btnPrintScreen,
        setIsVisible_btnPrintScreen,
        isVisible_btnEnd,
        setIsVisible_btnEnd,
        isVisible_lbJubsu,
        setIsVisible_lbJubsu,
        isVisible_Shape1,
        setIsVisible_Shape1,
        isVisible_gdElecAppr,
        setIsVisible_gdElecAppr,
        isVisible_radOrder,
        setIsVisible_radOrder,
        isVisible_Static3,
        setIsVisible_Static3,
        isVisible_btnCancel,
        setIsVisible_btnCancel,
        isVisible_radGubun,
        setIsVisible_radGubun,
        isVisible_Static0,
        setIsVisible_Static0,
        isVisible_Static1,
        setIsVisible_Static1,
        isVisible_calStartDate,
        setIsVisible_calStartDate,
        isVisible_Static12,
        setIsVisible_Static12,
        isVisible_calEndDate,
        setIsVisible_calEndDate,
        isVisible_Static2,
        setIsVisible_Static2,
        isVisible_btnPrint,
        setIsVisible_btnPrint,
        isVisible_Static4,
        setIsVisible_Static4,
        isVisible_btnSelect,
        setIsVisible_btnSelect,
        isVisible_lbTextBlue,
        setIsVisible_lbTextBlue,
        isVisible_btnCreateList,
        setIsVisible_btnCreateList,
        isVisible_btnProcElecApv,
        setIsVisible_btnProcElecApv,
        isVisible_lbText,
        setIsVisible_lbText,
        isVisible_Static5,
        setIsVisible_Static5,
        isVisible_lbJibu,
        setIsVisible_lbJibu,
        isVisible_cbxJibu,
        setIsVisible_cbxJibu,
        isVisible_Static6,
        setIsVisible_Static6,
        isVisible_Static7,
        setIsVisible_Static7,
        isVisible_Button0,
        setIsVisible_Button0,
        isVisible_lbSMS,
        setIsVisible_lbSMS,
        btnCreateListTotaling_OnClick,
        btnCreateListTotaling_part1_OnClick,
        btnCreateList_OnClick,
        btnProcElecApv_OnClick,
        btnSelect_OnClick,
        lfn_Cancel,
        lfn_End,
        lfn_PrintScreen,
        lfn_localExcel,
    };
};