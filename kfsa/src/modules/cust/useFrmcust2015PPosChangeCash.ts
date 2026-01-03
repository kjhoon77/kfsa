// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_ioPosPrintM, Ids_ioPosCash, Ids_oCashGubun, Ids_oCallKeyIn } from './Frmcust2015PPosChangeCashData';

export const useFrmcust2015PPosChangeCash = () => {
    const [ds_ioPosPrintM, setds_ioPosPrintM] = useState<Ids_ioPosPrintM[]>([]);
    const [ds_ioPosCash, setds_ioPosCash] = useState<Ids_ioPosCash[]>([]);
    const [ds_oCashGubun, setds_oCashGubun] = useState<Ids_oCashGubun[]>([]);
    const [ds_oCallKeyIn, setds_oCallKeyIn] = useState<Ids_oCallKeyIn[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [rawVisible_shpBtnBox, setRawVisible_shpBtnBox] = useState(true);
    const [rawVisible_btnEnd, setRawVisible_btnEnd] = useState(true);
    const [rawVisible_btnPrintScreen, setRawVisible_btnPrintScreen] = useState(true);
    const [rawVisible_divPos, setRawVisible_divPos] = useState(false);
    const [rawVisible_shpGubunBox4, setRawVisible_shpGubunBox4] = useState(true);
    const [rawVisible_lbRepay, setRawVisible_lbRepay] = useState(true);
    const [rawVisible_divCash, setRawVisible_divCash] = useState(false);
    const [rawVisible_Shape0, setRawVisible_Shape0] = useState(true);
    const [rawVisible_lbCashGubun, setRawVisible_lbCashGubun] = useState(true);
    const [rawVisible_lbCashNo, setRawVisible_lbCashNo] = useState(true);
    const [rawVisible_edCashNo, setRawVisible_edCashNo] = useState(true);
    const [rawVisible_lbText2, setRawVisible_lbText2] = useState(true);
    const [rawVisible_btnInit, setRawVisible_btnInit] = useState(true);
    const [rawVisible_radCashGubun, setRawVisible_radCashGubun] = useState(true);
    const [rawVisible_Static0, setRawVisible_Static0] = useState(true);
    const [rawVisible_btnKeyinHP, setRawVisible_btnKeyinHP] = useState(true);
    const [rawVisible_btnKeyinCompanyNo, setRawVisible_btnKeyinCompanyNo] = useState(true);
    const [rawVisible_lbBuyer, setRawVisible_lbBuyer] = useState(true);
    const [rawVisible_edBuyer, setRawVisible_edBuyer] = useState(true);
    const [rawVisible_lbSunapGubun, setRawVisible_lbSunapGubun] = useState(true);
    const [rawVisible_edSunapGubun, setRawVisible_edSunapGubun] = useState(true);
    const [rawVisible_lbOrderNo, setRawVisible_lbOrderNo] = useState(true);
    const [rawVisible_edOrderNo, setRawVisible_edOrderNo] = useState(true);
    const [rawVisible_lbAmount, setRawVisible_lbAmount] = useState(true);
    const [rawVisible_medAmount, setRawVisible_medAmount] = useState(true);
    const [rawVisible_btnCash, setRawVisible_btnCash] = useState(true);
    const [rawVisible_lbWorkFormTitle, setRawVisible_lbWorkFormTitle] = useState(true);
    const [rawVisible_imgImage, setRawVisible_imgImage] = useState(true);
    const isVisible_shpBtnBox = rawVisible_shpBtnBox;
    const setIsVisible_shpBtnBox = setRawVisible_shpBtnBox;
    const isVisible_btnEnd = rawVisible_btnEnd && rawVisible_shpBtnBox;
    const setIsVisible_btnEnd = setRawVisible_btnEnd;
    const isVisible_btnPrintScreen = rawVisible_btnPrintScreen && rawVisible_shpBtnBox;
    const setIsVisible_btnPrintScreen = setRawVisible_btnPrintScreen;
    const isVisible_divPos = rawVisible_divPos;
    const setIsVisible_divPos = setRawVisible_divPos;
    const isVisible_shpGubunBox4 = rawVisible_shpGubunBox4;
    const setIsVisible_shpGubunBox4 = setRawVisible_shpGubunBox4;
    const isVisible_lbRepay = rawVisible_lbRepay && rawVisible_Shape0;
    const setIsVisible_lbRepay = setRawVisible_lbRepay;
    const isVisible_divCash = rawVisible_divCash;
    const setIsVisible_divCash = setRawVisible_divCash;
    const isVisible_Shape0 = rawVisible_Shape0;
    const setIsVisible_Shape0 = setRawVisible_Shape0;
    const isVisible_lbCashGubun = rawVisible_lbCashGubun && rawVisible_Shape0;
    const setIsVisible_lbCashGubun = setRawVisible_lbCashGubun;
    const isVisible_lbCashNo = rawVisible_lbCashNo && rawVisible_shpGubunBox4;
    const setIsVisible_lbCashNo = setRawVisible_lbCashNo;
    const isVisible_edCashNo = rawVisible_edCashNo && rawVisible_shpGubunBox4;
    const setIsVisible_edCashNo = setRawVisible_edCashNo;
    const isVisible_lbText2 = rawVisible_lbText2 && rawVisible_shpGubunBox4;
    const setIsVisible_lbText2 = setRawVisible_lbText2;
    const isVisible_btnInit = rawVisible_btnInit && rawVisible_Shape0;
    const setIsVisible_btnInit = setRawVisible_btnInit;
    const isVisible_radCashGubun = rawVisible_radCashGubun && rawVisible_Shape0;
    const setIsVisible_radCashGubun = setRawVisible_radCashGubun;
    const isVisible_Static0 = rawVisible_Static0;
    const setIsVisible_Static0 = setRawVisible_Static0;
    const isVisible_btnKeyinHP = rawVisible_btnKeyinHP && rawVisible_shpGubunBox4;
    const setIsVisible_btnKeyinHP = setRawVisible_btnKeyinHP;
    const isVisible_btnKeyinCompanyNo = rawVisible_btnKeyinCompanyNo && rawVisible_shpGubunBox4;
    const setIsVisible_btnKeyinCompanyNo = setRawVisible_btnKeyinCompanyNo;
    const isVisible_lbBuyer = rawVisible_lbBuyer && rawVisible_shpGubunBox4;
    const setIsVisible_lbBuyer = setRawVisible_lbBuyer;
    const isVisible_edBuyer = rawVisible_edBuyer && rawVisible_shpGubunBox4;
    const setIsVisible_edBuyer = setRawVisible_edBuyer;
    const isVisible_lbSunapGubun = rawVisible_lbSunapGubun && rawVisible_shpGubunBox4;
    const setIsVisible_lbSunapGubun = setRawVisible_lbSunapGubun;
    const isVisible_edSunapGubun = rawVisible_edSunapGubun && rawVisible_shpGubunBox4;
    const setIsVisible_edSunapGubun = setRawVisible_edSunapGubun;
    const isVisible_lbOrderNo = rawVisible_lbOrderNo && rawVisible_shpGubunBox4;
    const setIsVisible_lbOrderNo = setRawVisible_lbOrderNo;
    const isVisible_edOrderNo = rawVisible_edOrderNo && rawVisible_shpGubunBox4;
    const setIsVisible_edOrderNo = setRawVisible_edOrderNo;
    const isVisible_lbAmount = rawVisible_lbAmount && rawVisible_shpGubunBox4;
    const setIsVisible_lbAmount = setRawVisible_lbAmount;
    const isVisible_medAmount = rawVisible_medAmount && rawVisible_shpGubunBox4;
    const setIsVisible_medAmount = setRawVisible_medAmount;
    const isVisible_btnCash = rawVisible_btnCash;
    const setIsVisible_btnCash = setRawVisible_btnCash;
    const isVisible_lbWorkFormTitle = rawVisible_lbWorkFormTitle;
    const setIsVisible_lbWorkFormTitle = setRawVisible_lbWorkFormTitle;
    const isVisible_imgImage = rawVisible_imgImage && rawVisible_Shape0;
    const setIsVisible_imgImage = setRawVisible_imgImage;

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_ioPosPrintM([]);
            setds_ioPosCash([]);
            setds_oCashGubun([]);
            setds_oCallKeyIn([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnCash_OnClick = () => {
        console.log('btnCash_OnClick clicked');
    };
    const btnKeyinCompanyNo_OnClick = () => {
        console.log('btnKeyinCompanyNo_OnClick clicked');
    };
    const btnKeyinHP_OnClick = () => {
        console.log('btnKeyinHP_OnClick clicked');
    };
    const divSunap_divCash_btnInit_OnClick = () => {
        console.log('divSunap_divCash_btnInit_OnClick clicked');
    };
    const lfn_End = () => {
        console.log('lfn_End clicked');
    };
    const lfn_PrintScreen = () => {
        console.log('lfn_PrintScreen clicked');
    };

    return {
        isLoading,
        ds_ioPosPrintM,
        ds_ioPosCash,
        ds_oCashGubun,
        ds_oCallKeyIn,
        isVisible_shpBtnBox,
        setIsVisible_shpBtnBox,
        isVisible_btnEnd,
        setIsVisible_btnEnd,
        isVisible_btnPrintScreen,
        setIsVisible_btnPrintScreen,
        isVisible_divPos,
        setIsVisible_divPos,
        isVisible_shpGubunBox4,
        setIsVisible_shpGubunBox4,
        isVisible_lbRepay,
        setIsVisible_lbRepay,
        isVisible_divCash,
        setIsVisible_divCash,
        isVisible_Shape0,
        setIsVisible_Shape0,
        isVisible_lbCashGubun,
        setIsVisible_lbCashGubun,
        isVisible_lbCashNo,
        setIsVisible_lbCashNo,
        isVisible_edCashNo,
        setIsVisible_edCashNo,
        isVisible_lbText2,
        setIsVisible_lbText2,
        isVisible_btnInit,
        setIsVisible_btnInit,
        isVisible_radCashGubun,
        setIsVisible_radCashGubun,
        isVisible_Static0,
        setIsVisible_Static0,
        isVisible_btnKeyinHP,
        setIsVisible_btnKeyinHP,
        isVisible_btnKeyinCompanyNo,
        setIsVisible_btnKeyinCompanyNo,
        isVisible_lbBuyer,
        setIsVisible_lbBuyer,
        isVisible_edBuyer,
        setIsVisible_edBuyer,
        isVisible_lbSunapGubun,
        setIsVisible_lbSunapGubun,
        isVisible_edSunapGubun,
        setIsVisible_edSunapGubun,
        isVisible_lbOrderNo,
        setIsVisible_lbOrderNo,
        isVisible_edOrderNo,
        setIsVisible_edOrderNo,
        isVisible_lbAmount,
        setIsVisible_lbAmount,
        isVisible_medAmount,
        setIsVisible_medAmount,
        isVisible_btnCash,
        setIsVisible_btnCash,
        isVisible_lbWorkFormTitle,
        setIsVisible_lbWorkFormTitle,
        isVisible_imgImage,
        setIsVisible_imgImage,
        btnCash_OnClick,
        btnKeyinCompanyNo_OnClick,
        btnKeyinHP_OnClick,
        divSunap_divCash_btnInit_OnClick,
        lfn_End,
        lfn_PrintScreen,
    };
};