// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_ioPosPrintM, Ids_ioPosCash, Ids_oCashGubun, Ids_oCallKeyIn } from './Frmcust2015PPosChangeCashData';

export const useFrmcust2015PPosChangeCash = () => {
    const [ds_ioPosPrintM, setds_ioPosPrintM] = useState<Ids_ioPosPrintM[]>([]);
    const [ds_ioPosCash, setds_ioPosCash] = useState<Ids_ioPosCash[]>([]);
    const [ds_oCashGubun, setds_oCashGubun] = useState<Ids_oCashGubun[]>([]);
    const [ds_oCallKeyIn, setds_oCallKeyIn] = useState<Ids_oCallKeyIn[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isVisible_shpBtnBox, setIsVisible_shpBtnBox] = useState(true);
    const [isVisible_btnEnd, setIsVisible_btnEnd] = useState(true);
    const [isVisible_btnPrintScreen, setIsVisible_btnPrintScreen] = useState(true);
    const [isVisible_divPos, setIsVisible_divPos] = useState(false);
    const [isVisible_shpGubunBox4, setIsVisible_shpGubunBox4] = useState(true);
    const [isVisible_lbRepay, setIsVisible_lbRepay] = useState(true);
    const [isVisible_divCash, setIsVisible_divCash] = useState(false);
    const [isVisible_Shape0, setIsVisible_Shape0] = useState(true);
    const [isVisible_lbCashGubun, setIsVisible_lbCashGubun] = useState(true);
    const [isVisible_lbCashNo, setIsVisible_lbCashNo] = useState(true);
    const [isVisible_edCashNo, setIsVisible_edCashNo] = useState(true);
    const [isVisible_lbText2, setIsVisible_lbText2] = useState(true);
    const [isVisible_btnInit, setIsVisible_btnInit] = useState(true);
    const [isVisible_radCashGubun, setIsVisible_radCashGubun] = useState(true);
    const [isVisible_Static0, setIsVisible_Static0] = useState(true);
    const [isVisible_btnKeyinHP, setIsVisible_btnKeyinHP] = useState(true);
    const [isVisible_btnKeyinCompanyNo, setIsVisible_btnKeyinCompanyNo] = useState(true);
    const [isVisible_lbBuyer, setIsVisible_lbBuyer] = useState(true);
    const [isVisible_edBuyer, setIsVisible_edBuyer] = useState(true);
    const [isVisible_lbSunapGubun, setIsVisible_lbSunapGubun] = useState(true);
    const [isVisible_edSunapGubun, setIsVisible_edSunapGubun] = useState(true);
    const [isVisible_lbOrderNo, setIsVisible_lbOrderNo] = useState(true);
    const [isVisible_edOrderNo, setIsVisible_edOrderNo] = useState(true);
    const [isVisible_lbAmount, setIsVisible_lbAmount] = useState(true);
    const [isVisible_medAmount, setIsVisible_medAmount] = useState(true);
    const [isVisible_btnCash, setIsVisible_btnCash] = useState(true);
    const [isVisible_lbWorkFormTitle, setIsVisible_lbWorkFormTitle] = useState(true);
    const [isVisible_imgImage, setIsVisible_imgImage] = useState(true);

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