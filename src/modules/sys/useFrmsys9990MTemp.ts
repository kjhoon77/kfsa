// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_ioGubun, Ids_ioChoiceYn, Ids_ioOrder, Ids_ioCourseYn, Ids_ioDataGubun, Ids_ioReport, Ids_ioCourse, Ids_oAdditionInfo, Ids_oRegion, Ids_oCustomerList, Ids_oJibu, Ids_ioCourseYnD, Ids_ioCourseD, Ids_oPersonGubun, Ids_ioExceptGubun, Ids_ioMinapfee, Ids_ioAgencyGubun, Ids_ioGijun, Ids_oBonbu, Ids_oFireCd, Ids_ioExcel } from './Frmsys9990MTempData';

export const useFrmsys9990MTemp = () => {
    const [ds_ioGubun, setds_ioGubun] = useState<Ids_ioGubun[]>([]);
    const [ds_ioChoiceYn, setds_ioChoiceYn] = useState<Ids_ioChoiceYn[]>([]);
    const [ds_ioOrder, setds_ioOrder] = useState<Ids_ioOrder[]>([]);
    const [ds_ioCourseYn, setds_ioCourseYn] = useState<Ids_ioCourseYn[]>([]);
    const [ds_ioDataGubun, setds_ioDataGubun] = useState<Ids_ioDataGubun[]>([]);
    const [ds_ioReport, setds_ioReport] = useState<Ids_ioReport[]>([]);
    const [ds_ioCourse, setds_ioCourse] = useState<Ids_ioCourse[]>([]);
    const [ds_oAdditionInfo, setds_oAdditionInfo] = useState<Ids_oAdditionInfo[]>([]);
    const [ds_oRegion, setds_oRegion] = useState<Ids_oRegion[]>([]);
    const [ds_oCustomerList, setds_oCustomerList] = useState<Ids_oCustomerList[]>([]);
    const [ds_oJibu, setds_oJibu] = useState<Ids_oJibu[]>([]);
    const [ds_ioCourseYnD, setds_ioCourseYnD] = useState<Ids_ioCourseYnD[]>([]);
    const [ds_ioCourseD, setds_ioCourseD] = useState<Ids_ioCourseD[]>([]);
    const [ds_oPersonGubun, setds_oPersonGubun] = useState<Ids_oPersonGubun[]>([]);
    const [ds_ioExceptGubun, setds_ioExceptGubun] = useState<Ids_ioExceptGubun[]>([]);
    const [ds_ioMinapfee, setds_ioMinapfee] = useState<Ids_ioMinapfee[]>([]);
    const [ds_ioAgencyGubun, setds_ioAgencyGubun] = useState<Ids_ioAgencyGubun[]>([]);
    const [ds_ioGijun, setds_ioGijun] = useState<Ids_ioGijun[]>([]);
    const [ds_oBonbu, setds_oBonbu] = useState<Ids_oBonbu[]>([]);
    const [ds_oFireCd, setds_oFireCd] = useState<Ids_oFireCd[]>([]);
    const [ds_ioExcel, setds_ioExcel] = useState<Ids_ioExcel[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isVisible_divWorkFormTitle, setIsVisible_divWorkFormTitle] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_ioGubun([]);
            setds_ioChoiceYn([]);
            setds_ioOrder([]);
            setds_ioCourseYn([]);
            setds_ioDataGubun([]);
            setds_ioReport([]);
            setds_ioCourse([]);
            setds_oAdditionInfo([]);
            setds_oRegion([]);
            setds_oCustomerList([]);
            setds_oJibu([]);
            setds_ioCourseYnD([]);
            setds_ioCourseD([]);
            setds_oPersonGubun([]);
            setds_ioExceptGubun([]);
            setds_ioMinapfee([]);
            setds_ioAgencyGubun([]);
            setds_ioGijun([]);
            setds_oBonbu([]);
            setds_oFireCd([]);
            setds_ioExcel([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnToExcel_OnClick = () => {
        console.log('btnToExcel_OnClick clicked');
    };
    const lfn_Cancel = () => {
        console.log('lfn_Cancel clicked');
    };
    const lfn_End = () => {
        console.log('lfn_End clicked');
    };
    const lfn_Print = () => {
        console.log('lfn_Print clicked');
    };

    return {
        isLoading,
        ds_ioGubun,
        ds_ioChoiceYn,
        ds_ioOrder,
        ds_ioCourseYn,
        ds_ioDataGubun,
        ds_ioReport,
        ds_ioCourse,
        ds_oAdditionInfo,
        ds_oRegion,
        ds_oCustomerList,
        ds_oJibu,
        ds_ioCourseYnD,
        ds_ioCourseD,
        ds_oPersonGubun,
        ds_ioExceptGubun,
        ds_ioMinapfee,
        ds_ioAgencyGubun,
        ds_ioGijun,
        ds_oBonbu,
        ds_oFireCd,
        ds_ioExcel,
        isVisible_divWorkFormTitle,
        setIsVisible_divWorkFormTitle,
        btnToExcel_OnClick,
        lfn_Cancel,
        lfn_End,
        lfn_Print,
    };
};