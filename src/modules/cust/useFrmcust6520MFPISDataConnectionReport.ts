// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_ioExcept, Ids_ioOrder, Ids_ioChoiceYn, Ids_ioReport, Ids_ioCourse, Ids_oFireStation, Ids_oBonbu, Ids_oDATA, Ids_ioFireStation, Ids_ioMatch, Ids_ioExceptGubun } from './Frmcust6520MFPISDataConnectionReportData';

export const useFrmcust6520MFPISDataConnectionReport = () => {
    const [ds_ioExcept, setds_ioExcept] = useState<Ids_ioExcept[]>([]);
    const [ds_ioOrder, setds_ioOrder] = useState<Ids_ioOrder[]>([]);
    const [ds_ioChoiceYn, setds_ioChoiceYn] = useState<Ids_ioChoiceYn[]>([]);
    const [ds_ioReport, setds_ioReport] = useState<Ids_ioReport[]>([]);
    const [ds_ioCourse, setds_ioCourse] = useState<Ids_ioCourse[]>([]);
    const [ds_oFireStation, setds_oFireStation] = useState<Ids_oFireStation[]>([]);
    const [ds_oBonbu, setds_oBonbu] = useState<Ids_oBonbu[]>([]);
    const [ds_oDATA, setds_oDATA] = useState<Ids_oDATA[]>([]);
    const [ds_ioFireStation, setds_ioFireStation] = useState<Ids_ioFireStation[]>([]);
    const [ds_ioMatch, setds_ioMatch] = useState<Ids_ioMatch[]>([]);
    const [ds_ioExceptGubun, setds_ioExceptGubun] = useState<Ids_ioExceptGubun[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isVisible_divWorkFormTitle, setIsVisible_divWorkFormTitle] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_ioExcept([]);
            setds_ioOrder([]);
            setds_ioChoiceYn([]);
            setds_ioReport([]);
            setds_ioCourse([]);
            setds_oFireStation([]);
            setds_oBonbu([]);
            setds_oDATA([]);
            setds_ioFireStation([]);
            setds_ioMatch([]);
            setds_ioExceptGubun([]);
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
        ds_ioExcept,
        ds_ioOrder,
        ds_ioChoiceYn,
        ds_ioReport,
        ds_ioCourse,
        ds_oFireStation,
        ds_oBonbu,
        ds_oDATA,
        ds_ioFireStation,
        ds_ioMatch,
        ds_ioExceptGubun,
        isVisible_divWorkFormTitle,
        setIsVisible_divWorkFormTitle,
        btnToExcel_OnClick,
        lfn_Cancel,
        lfn_End,
        lfn_Print,
    };
};